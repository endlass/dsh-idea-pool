#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""灵感池自建云端后端（ideas-api v2 兼容，纯 Python 标准库 + SQLite）。

给 dsh-idea-pool 插件的「云端模式」当自建服务端用：
    python3 server/ideas_api.py
默认监听 http://localhost:8794/api，数据在 ./data/ideas.sqlite。

接口（与 ideas-api v2 一致，合同见仓库 CONTRACT.md §11.6）：
    GET    /api/health                        -> {ok, count}
    GET    /api/ideas?status=&q=&limit=&offset=
                                              -> {ok, ideas, counts, total}
    GET    /api/ideas/{no}                    -> {ok, idea, updates, links}
    POST   /api/ideas                         -> 201 {ok, idea}
    PATCH  /api/ideas/{no}                    -> {ok, idea}；带 if_rev 不匹配 409
    POST   /api/ideas/{no}/updates            -> 201 新行 / 200 已存在的 client_id 行
    POST   /api/ideas/{no}/links              -> 同上
    DELETE /api/ideas/{no}                    -> {ok}

约定：
- idea 时间字段按北京时间输出 "YYYY-MM-DD HH:MM"（无时区，与现服务一致）；
  idea_no = "IDEA-" + 三位补零的自增 id（不回收编号）。
- rev 从 0 起；PATCH（无论带不带 if_rev）成功后 rev+1；updates/links 新插入使 rev+1、
  updated_at 刷新；client_id 重复提交返回已有行（200），不重复插入、不涨 rev。
- 鉴权：环境变量 IDEAS_API_TOKEN。请求头 X-API-Key 或 Authorization: Bearer。
  loopback 来源可豁免（便于本机调试）；但带 X-Forwarded-For/Forwarded/X-Real-IP 的
  请求视为经反向代理，不免豁，必须校验 token。未配置 token 时只允许 loopback。
- 环境变量：IDEAS_DATA_DIR（默认 ./data）、IDEAS_PORT（默认 8794）、
  IDEAS_HOST（默认 localhost；容器里设 0.0.0.0）、IDEAS_API_TOKEN、
  IDEAS_ACCESS_LOG=1 打开访问日志。
- 单进程多线程（ThreadingHTTPServer），SQLite WAL；适合单用户/单实例自用。

只依赖 Python 3.8+ 标准库（本机 3.9 与 Docker 里 3.12 都能跑）。
"""

import hmac
import ipaddress
import json
import os
import re
import sqlite3
import sys
import traceback
from datetime import datetime, timedelta, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlparse

# ---------------------------------------------------------------------------
# 配置与常量
# ---------------------------------------------------------------------------

DEFAULT_HOST = "localhost"
DEFAULT_PORT = 8794
DEFAULT_DATA_DIR = "./data"
DB_FILENAME = "ideas.sqlite"

STATUSES = ("pool", "active", "parked", "done")
DEFAULT_LIMIT = 200
MAX_LIMIT = 500
MAX_BODY_BYTES = 1024 * 1024
MAX_TAGS = 24
MAX_TAG_LENGTH = 40
MAX_TITLE_LENGTH = 200
MAX_SOURCE_LENGTH = 64
MAX_RAW_TEXT_LENGTH = 1_000_000
MAX_SUMMARY_LENGTH = 100_000
MAX_GIST_LENGTH = 200
MAX_SESSION_REFS = 20
MAX_SOURCE_NOTE_LENGTH = 100_000
MAX_CLIENT_ID_LENGTH = 64
MAX_REF_LENGTH = 64

# 北京时间（固定 +08:00，无夏令时）
BEIJING = timezone(timedelta(hours=8))

IDEA_NO_RE = re.compile(r"^IDEA-(\d{1,9})$", re.IGNORECASE)
BEARER_RE = re.compile(r"^Bearer\s+(.+)$", re.IGNORECASE)
IDEA_PATH_RE = re.compile(r"^/api/ideas/([^/]+)$")
CHILD_PATH_RE = re.compile(r"^/api/ideas/([^/]+)/(updates|links)$")
FORWARDED_HEADERS = ("X-Forwarded-For", "Forwarded", "X-Real-IP")

SCHEMA_SQL = """
CREATE TABLE IF NOT EXISTS ideas (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT    NOT NULL DEFAULT '',
    raw_text    TEXT    NOT NULL DEFAULT '',
    summary     TEXT    NOT NULL DEFAULT '',
    gist        TEXT    NOT NULL DEFAULT '',
    session_refs TEXT   NOT NULL DEFAULT '[]',
    status      TEXT    NOT NULL DEFAULT 'pool',
    tags        TEXT    NOT NULL DEFAULT '[]',
    source      TEXT    NOT NULL DEFAULT '',
    source_note TEXT    NOT NULL DEFAULT '',
    rev         INTEGER NOT NULL DEFAULT 0,
    created_at  TEXT    NOT NULL,
    updated_at  TEXT    NOT NULL
);

CREATE TABLE IF NOT EXISTS idea_updates (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    idea_id    INTEGER NOT NULL REFERENCES ideas(id) ON DELETE CASCADE,
    client_id  TEXT,
    content    TEXT    NOT NULL DEFAULT '',
    source     TEXT    NOT NULL DEFAULT '',
    created_at TEXT    NOT NULL
);

CREATE TABLE IF NOT EXISTS idea_links (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    idea_id    INTEGER NOT NULL REFERENCES ideas(id) ON DELETE CASCADE,
    client_id  TEXT,
    title      TEXT    NOT NULL DEFAULT '',
    url        TEXT    NOT NULL DEFAULT '',
    ref_type   TEXT    NOT NULL DEFAULT 'external',
    ref_id     TEXT    NOT NULL DEFAULT '',
    created_at TEXT    NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_idea_updates_client
    ON idea_updates (idea_id, client_id) WHERE client_id IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS uq_idea_links_client
    ON idea_links (idea_id, client_id) WHERE client_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_ideas_status ON ideas (status);
CREATE INDEX IF NOT EXISTS idx_idea_updates_idea ON idea_updates (idea_id);
CREATE INDEX IF NOT EXISTS idx_idea_links_idea ON idea_links (idea_id);
"""

# 查想法（带进展/产出数量），列表与详情共用
IDEA_SELECT_SQL = """
SELECT i.*,
       (SELECT COUNT(*) FROM idea_updates u WHERE u.idea_id = i.id) AS n_updates,
       (SELECT COUNT(*) FROM idea_links l WHERE l.idea_id = i.id)   AS n_links
FROM ideas i
"""


# ---------------------------------------------------------------------------
# 小工具
# ---------------------------------------------------------------------------


class ApiError(Exception):
    """带 HTTP 状态码的接口错误（统一输出 {ok:false,error}）。"""

    def __init__(self, status, message):
        super().__init__(message)
        self.status = status
        self.message = message


def now_beijing():
    """当前北京时间，精确到秒，数据库内部格式。"""
    return datetime.now(BEIJING).strftime("%Y-%m-%d %H:%M:%S")


def to_output_ts(value):
    """数据库时间 -> 对外时间（北京时间、分钟精度 "YYYY-MM-DD HH:MM"）。"""
    text = str(value or "")
    return text[:16] if len(text) >= 16 else text


def as_text(value, field, limit, required=False):
    """字符串字段校验 + 首尾 trim（原文内部字符不动）。"""
    if value is None:
        if required:
            raise ApiError(400, "%s 不能为空" % field)
        return ""
    if not isinstance(value, str):
        raise ApiError(400, "%s 必须是字符串" % field)
    text = value.strip()
    if len(text) > limit:
        raise ApiError(400, "%s 太长了" % field)
    if required and not text:
        raise ApiError(400, "%s 不能为空" % field)
    return text


def as_optional_text(value, field, limit):
    if value is None:
        return None
    return as_text(value, field, limit)


def normalize_tags(value):
    """tags：接受数组或 "a,b" 字符串；去空、去重、截断到 24 个 x 40 字符。"""
    if value is None:
        return []
    if isinstance(value, str):
        rows = re.split(r"[,，]", value)
    elif isinstance(value, (list, tuple)):
        rows = value
    else:
        raise ApiError(400, "tags 必须是数组或逗号分隔的字符串")
    tags = []
    for row in rows:
        if not isinstance(row, str):
            raise ApiError(400, "tags 里只能放字符串")
        tag = row.strip()[:MAX_TAG_LENGTH]
        if tag and tag not in tags:
            tags.append(tag)
        if len(tags) >= MAX_TAGS:
            break
    return tags


def normalize_status(value):
    if not isinstance(value, str) or value not in STATUSES:
        raise ApiError(400, "status 不合法，只允许 %s" % " / ".join(STATUSES))
    return value


def parse_idea_id(idea_no):
    """'IDEA-012' / 'idea-12' -> 12；不合法返回 None。"""
    if not isinstance(idea_no, str):
        return None
    match = IDEA_NO_RE.match(idea_no.strip())
    return int(match.group(1)) if match else None


def parse_positive_int(raw, name, default, minimum, maximum):
    if raw is None or raw == "":
        return default
    try:
        value = int(raw)
    except (TypeError, ValueError):
        raise ApiError(400, "%s 必须是整数" % name)
    if value < minimum or value > maximum:
        raise ApiError(400, "%s 必须在 %d-%d 之间" % (name, minimum, maximum))
    return value


def parse_offset(raw):
    if raw is None or raw == "":
        return 0
    try:
        value = int(raw)
    except (TypeError, ValueError):
        raise ApiError(400, "offset 必须是整数")
    if value < 0:
        raise ApiError(400, "offset 必须 >= 0")
    return value


def connect_db(db_path):
    """每个请求一个连接：WAL + busy_timeout，写事务用 BEGIN IMMEDIATE 串行化。"""
    conn = sqlite3.connect(db_path, timeout=15)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    conn.execute("PRAGMA busy_timeout = 5000")
    return conn


def _json_load(value, fallback):
    try:
        parsed = json.loads(value or "")
    except (ValueError, TypeError):
        return fallback
    return parsed if isinstance(parsed, type(fallback)) else fallback


def normalize_session_refs(value):
    """校验/裁剪 session_refs；只保留 UI 需要的字段。"""
    if value is None:
        return []
    if not isinstance(value, list):
        raise ApiError(400, "session_refs 必须是数组")
    refs = []
    seen = set()
    for row in value[:MAX_SESSION_REFS]:
        if not isinstance(row, dict):
            raise ApiError(400, "session_refs 的每一项必须是对象")
        session_id = as_text(row.get("session_id"), "session_refs.session_id", 200).strip()
        if not session_id:
            raise ApiError(400, "session_refs.session_id 不能为空")
        if session_id in seen:
            continue
        seen.add(session_id)
        refs.append({
            "session_id": session_id,
            "title": as_text(row.get("title"), "session_refs.title", MAX_TITLE_LENGTH).strip(),
            "device": as_text(row.get("device"), "session_refs.device", MAX_SOURCE_LENGTH).strip(),
            "bound_at": as_text(row.get("bound_at"), "session_refs.bound_at", 64).strip() or now_beijing(),
            "reason": row.get("reason") if row.get("reason") in ("advance", "manual", "search") else "manual",
        })
    return refs


def init_db(db_path):
    """建目录 + 建表 + 唯一索引（幂等）。"""
    directory = os.path.dirname(os.path.abspath(db_path))
    os.makedirs(directory, exist_ok=True)
    conn = sqlite3.connect(db_path, timeout=15)
    try:
        conn.execute("PRAGMA journal_mode = WAL")
        conn.execute("PRAGMA foreign_keys = ON")
        conn.executescript(SCHEMA_SQL)
        # v0.3：旧库补 gist / session_refs 两列（幂等）
        columns = {row[1] for row in conn.execute("PRAGMA table_info(ideas)").fetchall()}
        if "gist" not in columns:
            conn.execute("ALTER TABLE ideas ADD COLUMN gist TEXT NOT NULL DEFAULT ''")
        if "session_refs" not in columns:
            conn.execute("ALTER TABLE ideas ADD COLUMN session_refs TEXT NOT NULL DEFAULT '[]'")
        conn.commit()
    finally:
        conn.close()


# ---------------------------------------------------------------------------
# 序列化
# ---------------------------------------------------------------------------


def serialize_idea(row):
    """SQLite 行 -> 对外的 idea 对象（北京时间分钟精度）。"""
    tags = []
    try:
        tags = json.loads(row["tags"] or "[]")
    except (ValueError, TypeError):
        tags = []
    return {
        "id": row["id"],
        "idea_no": "IDEA-%03d" % row["id"],
        "title": row["title"],
        "raw_text": row["raw_text"],
        "summary": row["summary"],
        "gist": row["gist"] if "gist" in row.keys() else "",
        "session_refs": _json_load(row["session_refs"] if "session_refs" in row.keys() else "[]", []),
        "status": row["status"],
        "tags": tags if isinstance(tags, list) else [],
        "source": row["source"],
        "source_note": row["source_note"],
        "created_at": to_output_ts(row["created_at"]),
        "updated_at": to_output_ts(row["updated_at"]),
        "rev": row["rev"],
        "n_updates": row["n_updates"],
        "n_links": row["n_links"],
    }


def serialize_update(row):
    return {
        "id": row["id"],
        "client_id": row["client_id"],
        "content": row["content"],
        "source": row["source"],
        "created_at": to_output_ts(row["created_at"]),
    }


def serialize_link(row):
    return {
        "id": row["id"],
        "client_id": row["client_id"],
        "title": row["title"],
        "url": row["url"],
        "ref_type": row["ref_type"],
        "ref_id": row["ref_id"],
        "created_at": to_output_ts(row["created_at"]),
    }


# ---------------------------------------------------------------------------
# HTTP 处理
# ---------------------------------------------------------------------------


class IdeasHandler(BaseHTTPRequestHandler):
    """ideas-api v2 的 HTTP 入口：鉴权 -> 路由 -> JSON 响应。"""

    protocol_version = "HTTP/1.1"
    server_version = "ideas-api/2.0-selfhost"
    sys_version = ""

    # -- 基础响应 ----------------------------------------------------------

    def _send_json(self, status, payload, extra_headers=None):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for name, value in (extra_headers or {}).items():
            self.send_header(name, value)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def log_message(self, fmt, *args):  # noqa: A003 - 覆盖基类
        if getattr(self.server, "access_log", False):
            sys.stderr.write("[ideas-api] %s - %s\n" % (self.address_string(), fmt % args))

    # -- 鉴权 --------------------------------------------------------------

    def _is_loopback_exempt(self):
        """loopback 且没经过反向代理时豁免 token（反向代理会把来源变成 loopback）。"""
        for header in FORWARDED_HEADERS:
            if self.headers.get(header):
                return False
        try:
            return ipaddress.ip_address(self.client_address[0]).is_loopback
        except ValueError:
            return False

    def _check_auth(self):
        token = getattr(self.server, "api_token", None)
        if self._is_loopback_exempt():
            return
        if not token:
            raise ApiError(401, "unauthorized: server has no IDEAS_API_TOKEN configured")
        provided = self.headers.get("X-API-Key")
        if not provided:
            match = BEARER_RE.match(self.headers.get("Authorization") or "")
            if match:
                provided = match.group(1).strip()
        if not provided:
            raise ApiError(401, "unauthorized")
        # 常量时间比较，避免逐字节探测 token
        if not hmac.compare_digest(provided.encode("utf-8"), token.encode("utf-8")):
            raise ApiError(401, "unauthorized")

    # -- 请求体 ------------------------------------------------------------

    def _read_json_body(self):
        length_header = self.headers.get("Content-Length")
        if length_header is None:
            length = 0
        else:
            try:
                length = int(length_header)
            except (TypeError, ValueError):
                raise ApiError(400, "Content-Length 不合法")
        if length < 0:
            raise ApiError(400, "Content-Length 不合法")
        if length > MAX_BODY_BYTES:
            raise ApiError(413, "请求体超过 1 MB")
        if length == 0:
            return {}
        raw = self.rfile.read(length)
        try:
            data = json.loads(raw.decode("utf-8"))
        except (UnicodeDecodeError, ValueError):
            raise ApiError(400, "请求不是有效的 JSON")
        if not isinstance(data, dict):
            raise ApiError(400, "请求体必须是 JSON 对象")
        return data

    # -- 查询小工具 --------------------------------------------------------

    def _find_idea(self, conn, idea_id):
        return conn.execute(IDEA_SELECT_SQL + " WHERE i.id = ?", (idea_id,)).fetchone()

    def _fetch_idea(self, conn, idea_id):
        row = self._find_idea(conn, idea_id)
        return serialize_idea(row) if row is not None else None

    def _require_idea_id(self, raw_idea_no):
        idea_id = parse_idea_id(raw_idea_no)
        if idea_id is None:
            raise ApiError(404, "idea not found: %s" % str(raw_idea_no).strip())
        return idea_id

    # -- 路由 --------------------------------------------------------------

    def _dispatch(self, method):
        try:
            self._check_auth()
            parsed = urlparse(self.path)
            path = parsed.path
            if len(path) > 1 and path.endswith("/"):
                path = path.rstrip("/")
            query = parse_qs(parsed.query, keep_blank_values=True)

            if method == "GET" and path == "/api/health":
                return self._handle_health()
            if path == "/api/ideas":
                if method == "GET":
                    return self._handle_list(query)
                if method == "POST":
                    return self._handle_create()
                raise ApiError(405, "method not allowed")
            child_match = CHILD_PATH_RE.match(path)
            if child_match:
                if method != "POST":
                    raise ApiError(405, "method not allowed")
                idea_id = self._require_idea_id(child_match.group(1))
                if child_match.group(2) == "updates":
                    return self._handle_add_update(idea_id)
                return self._handle_add_link(idea_id)
            idea_match = IDEA_PATH_RE.match(path)
            if idea_match:
                idea_id = self._require_idea_id(idea_match.group(1))
                if method == "GET":
                    return self._handle_detail(idea_id)
                if method == "PATCH":
                    return self._handle_patch(idea_id)
                if method == "DELETE":
                    return self._handle_delete(idea_id)
                raise ApiError(405, "method not allowed")
            raise ApiError(404, "not found")
        except ApiError as err:
            extra = {"WWW-Authenticate": "Bearer"} if err.status == 401 else None
            self._send_json(err.status, {"ok": False, "error": err.message}, extra)
        except Exception:  # pragma: no cover - 兜底，不向客户端泄漏堆栈
            traceback.print_exc(file=sys.stderr)
            self._send_json(500, {"ok": False, "error": "internal error"})

    # HTTP 方法入口
    def do_GET(self):  # noqa: N802
        self._dispatch("GET")

    def do_POST(self):  # noqa: N802
        self._dispatch("POST")

    def do_PATCH(self):  # noqa: N802
        self._dispatch("PATCH")

    def do_DELETE(self):  # noqa: N802
        self._dispatch("DELETE")

    def do_PUT(self):  # noqa: N802
        self._dispatch("PUT")

    def do_HEAD(self):  # noqa: N802
        self._dispatch("HEAD")

    def do_OPTIONS(self):  # noqa: N802
        self._dispatch("OPTIONS")

    # -- 具体接口 ----------------------------------------------------------

    def _handle_health(self):
        conn = connect_db(self.server.db_path)
        try:
            count = conn.execute("SELECT COUNT(*) FROM ideas").fetchone()[0]
        finally:
            conn.close()
        self._send_json(200, {"ok": True, "count": count})

    def _handle_list(self, query):
        status = (query.get("status") or [None])[0] or None
        if status is not None and status not in STATUSES:
            raise ApiError(400, "status 不合法，只允许 %s" % " / ".join(STATUSES))
        keyword = (query.get("q") or [""])[0].strip()
        limit = parse_positive_int((query.get("limit") or [None])[0], "limit", DEFAULT_LIMIT, 1, MAX_LIMIT)
        offset = parse_offset((query.get("offset") or [None])[0])

        where_sql = ""
        params = []
        clauses = []
        if status is not None:
            clauses.append("i.status = ?")
            params.append(status)
        if keyword:
            escaped = keyword.replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_")
            like = "%" + escaped + "%"
            clauses.append(
                "(i.title LIKE ? ESCAPE '\\' OR i.raw_text LIKE ? ESCAPE '\\'"
                " OR i.summary LIKE ? ESCAPE '\\' OR i.gist LIKE ? ESCAPE '\\' OR i.tags LIKE ? ESCAPE '\\')"
            )
            params.extend([like, like, like, like, like])
        if clauses:
            where_sql = " WHERE " + " AND ".join(clauses)

        conn = connect_db(self.server.db_path)
        try:
            total = conn.execute("SELECT COUNT(*) FROM ideas i" + where_sql, params).fetchone()[0]
            rows = conn.execute(
                IDEA_SELECT_SQL + where_sql + " ORDER BY i.id DESC LIMIT ? OFFSET ?",
                params + [limit, offset],
            ).fetchall()
            counts = {name: 0 for name in STATUSES}
            counts_total = 0
            for row in conn.execute("SELECT status, COUNT(*) AS n FROM ideas GROUP BY status"):
                if row["status"] in counts:
                    counts[row["status"]] = row["n"]
                counts_total += row["n"]
        finally:
            conn.close()

        payload = {
            "ok": True,
            "ideas": [serialize_idea(row) for row in rows],
            "counts": counts,
            "total": total,
        }
        # counts 额外带 total（参考实现只有四个状态；插件把它当「全部」计数用，多这一个键兼容）
        payload["counts"]["total"] = counts_total
        self._send_json(200, payload)

    def _handle_detail(self, idea_id):
        conn = connect_db(self.server.db_path)
        try:
            row = self._find_idea(conn, idea_id)
            if row is None:
                raise ApiError(404, "idea not found: IDEA-%03d" % idea_id)
            updates = [
                serialize_update(item)
                for item in conn.execute(
                    "SELECT * FROM idea_updates WHERE idea_id = ? ORDER BY id ASC", (idea_id,)
                )
            ]
            links = [
                serialize_link(item)
                for item in conn.execute(
                    "SELECT * FROM idea_links WHERE idea_id = ? ORDER BY id ASC", (idea_id,)
                )
            ]
        finally:
            conn.close()
        self._send_json(
            200,
            {"ok": True, "idea": serialize_idea(row), "updates": updates, "links": links},
        )

    def _handle_create(self):
        body = self._read_json_body()
        raw_text = as_text(body.get("raw_text"), "raw_text", MAX_RAW_TEXT_LENGTH)
        title = as_text(body.get("title"), "title", MAX_TITLE_LENGTH)
        if not raw_text and not title:
            raise ApiError(400, "raw_text 或 title 至少填一个")
        if not title:
            title = raw_text[:40]
        summary = as_text(body.get("summary"), "summary", MAX_SUMMARY_LENGTH)
        gist = as_text(body.get("gist"), "gist", MAX_GIST_LENGTH)
        session_refs = normalize_session_refs(body.get("session_refs"))
        tags = normalize_tags(body.get("tags"))
        source = as_text(body.get("source"), "source", MAX_SOURCE_LENGTH)
        source_note = as_text(body.get("source_note"), "source_note", MAX_SOURCE_NOTE_LENGTH)
        status = body.get("status")
        status = normalize_status(status) if status is not None else "pool"
        now = now_beijing()

        conn = connect_db(self.server.db_path)
        try:
            conn.execute("BEGIN IMMEDIATE")
            cursor = conn.execute(
                "INSERT INTO ideas (title, raw_text, summary, gist, session_refs, status, tags, source, source_note,"
                " rev, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?)",
                (
                    title,
                    raw_text,
                    summary,
                    gist,
                    json.dumps(session_refs, ensure_ascii=False),
                    status,
                    json.dumps(tags, ensure_ascii=False),
                    source,
                    source_note,
                    now,
                    now,
                ),
            )
            idea_id = cursor.lastrowid
            conn.commit()
            idea = self._fetch_idea(conn, idea_id)
        except Exception:
            conn.rollback()
            raise
        finally:
            conn.close()
        self._send_json(201, {"ok": True, "idea": idea})

    def _patch_fields(self, body):
        """PATCH 白名单字段；返回 (fields, params) 或抛 400。"""
        fields = {}
        if "title" in body:
            fields["title"] = as_text(body.get("title"), "title", MAX_TITLE_LENGTH)
        if "raw_text" in body:
            fields["raw_text"] = as_text(body.get("raw_text"), "raw_text", MAX_RAW_TEXT_LENGTH)
        if "summary" in body:
            fields["summary"] = as_text(body.get("summary"), "summary", MAX_SUMMARY_LENGTH)
        if "gist" in body:
            fields["gist"] = as_text(body.get("gist"), "gist", MAX_GIST_LENGTH)
        if "session_refs" in body:
            fields["session_refs"] = json.dumps(normalize_session_refs(body.get("session_refs")), ensure_ascii=False)
        if "status" in body:
            fields["status"] = normalize_status(body.get("status"))
        if "tags" in body:
            fields["tags"] = json.dumps(normalize_tags(body.get("tags")), ensure_ascii=False)
        if "source_note" in body:
            fields["source_note"] = as_text(body.get("source_note"), "source_note", MAX_SOURCE_NOTE_LENGTH)
        return fields

    def _handle_patch(self, idea_id):
        body = self._read_json_body()
        if "if_rev" in body:
            if_rev = body.get("if_rev")
            if isinstance(if_rev, bool) or not isinstance(if_rev, int):
                raise ApiError(400, "if_rev 必须是整数")
        else:
            if_rev = None
        fields = self._patch_fields(body)
        if not fields:
            raise ApiError(400, "没有可更新的字段")
        now = now_beijing()
        assignments = ", ".join("%s = ?" % name for name in fields)
        params = list(fields.values())

        conn = connect_db(self.server.db_path)
        try:
            conn.execute("BEGIN IMMEDIATE")
            row = self._find_idea(conn, idea_id)
            if row is None:
                conn.rollback()
                raise ApiError(404, "idea not found: IDEA-%03d" % idea_id)
            if if_rev is not None and row["rev"] != if_rev:
                current = serialize_idea(row)
                conn.rollback()
                self._send_json(
                    409,
                    {"ok": False, "error": "version conflict", "current": current},
                )
                return
            conn.execute(
                "UPDATE ideas SET " + assignments + ", rev = rev + 1, updated_at = ? WHERE id = ?",
                params + [now, idea_id],
            )
            conn.commit()
            idea = self._fetch_idea(conn, idea_id)
        finally:
            conn.close()
        self._send_json(200, {"ok": True, "idea": idea})

    def _handle_add_update(self, idea_id):
        body = self._read_json_body()
        content = as_text(body.get("content"), "content", MAX_RAW_TEXT_LENGTH, required=True)
        source = as_text(body.get("source"), "source", MAX_SOURCE_LENGTH)
        client_id = as_optional_text(body.get("client_id"), "client_id", MAX_CLIENT_ID_LENGTH)
        if client_id is not None and not client_id:
            client_id = None
        now = now_beijing()

        conn = connect_db(self.server.db_path)
        try:
            conn.execute("BEGIN IMMEDIATE")
            row = self._find_idea(conn, idea_id)
            if row is None:
                conn.rollback()
                raise ApiError(404, "idea not found: IDEA-%03d" % idea_id)
            if client_id is not None:
                existing = conn.execute(
                    "SELECT * FROM idea_updates WHERE idea_id = ? AND client_id = ?",
                    (idea_id, client_id),
                ).fetchone()
                if existing is not None:
                    conn.commit()
                    idea = self._fetch_idea(conn, idea_id)
                    self._send_json(200, {"ok": True, "update": serialize_update(existing), "idea": idea})
                    return
            cursor = conn.execute(
                "INSERT INTO idea_updates (idea_id, client_id, content, source, created_at)"
                " VALUES (?, ?, ?, ?, ?)",
                (idea_id, client_id, content, source, now),
            )
            conn.execute("UPDATE ideas SET rev = rev + 1, updated_at = ? WHERE id = ?", (now, idea_id))
            conn.commit()
            saved = conn.execute(
                "SELECT * FROM idea_updates WHERE id = ?", (cursor.lastrowid,)
            ).fetchone()
            idea = self._fetch_idea(conn, idea_id)
        except sqlite3.IntegrityError:
            # 并发下同一 client_id 撞唯一索引：返回已存在行（幂等）
            conn.rollback()
            existing = None
            if client_id is not None:
                existing = conn.execute(
                    "SELECT * FROM idea_updates WHERE idea_id = ? AND client_id = ?",
                    (idea_id, client_id),
                ).fetchone()
            if existing is None:
                raise
            conn.commit()
            idea = self._fetch_idea(conn, idea_id)
            self._send_json(200, {"ok": True, "update": serialize_update(existing), "idea": idea})
            return
        finally:
            conn.close()
        self._send_json(201, {"ok": True, "update": serialize_update(saved), "idea": idea})

    def _handle_add_link(self, idea_id):
        body = self._read_json_body()
        url = as_text(body.get("url"), "url", 2000, required=True)
        title = as_text(body.get("title"), "title", MAX_TITLE_LENGTH) or url
        ref_type = as_text(body.get("ref_type"), "ref_type", MAX_REF_LENGTH) or "external"
        ref_id = as_text(body.get("ref_id"), "ref_id", MAX_REF_LENGTH)
        client_id = as_optional_text(body.get("client_id"), "client_id", MAX_CLIENT_ID_LENGTH)
        if client_id is not None and not client_id:
            client_id = None
        now = now_beijing()

        conn = connect_db(self.server.db_path)
        try:
            conn.execute("BEGIN IMMEDIATE")
            row = self._find_idea(conn, idea_id)
            if row is None:
                conn.rollback()
                raise ApiError(404, "idea not found: IDEA-%03d" % idea_id)
            if client_id is not None:
                existing = conn.execute(
                    "SELECT * FROM idea_links WHERE idea_id = ? AND client_id = ?",
                    (idea_id, client_id),
                ).fetchone()
                if existing is not None:
                    conn.commit()
                    idea = self._fetch_idea(conn, idea_id)
                    self._send_json(200, {"ok": True, "link": serialize_link(existing), "idea": idea})
                    return
            cursor = conn.execute(
                "INSERT INTO idea_links (idea_id, client_id, title, url, ref_type, ref_id, created_at)"
                " VALUES (?, ?, ?, ?, ?, ?, ?)",
                (idea_id, client_id, title, url, ref_type, ref_id, now),
            )
            conn.execute("UPDATE ideas SET rev = rev + 1, updated_at = ? WHERE id = ?", (now, idea_id))
            conn.commit()
            saved = conn.execute("SELECT * FROM idea_links WHERE id = ?", (cursor.lastrowid,)).fetchone()
            idea = self._fetch_idea(conn, idea_id)
        except sqlite3.IntegrityError:
            conn.rollback()
            existing = None
            if client_id is not None:
                existing = conn.execute(
                    "SELECT * FROM idea_links WHERE idea_id = ? AND client_id = ?",
                    (idea_id, client_id),
                ).fetchone()
            if existing is None:
                raise
            conn.commit()
            idea = self._fetch_idea(conn, idea_id)
            self._send_json(200, {"ok": True, "link": serialize_link(existing), "idea": idea})
            return
        finally:
            conn.close()
        self._send_json(201, {"ok": True, "link": serialize_link(saved), "idea": idea})

    def _handle_delete(self, idea_id):
        conn = connect_db(self.server.db_path)
        try:
            conn.execute("BEGIN IMMEDIATE")
            row = conn.execute("SELECT id FROM ideas WHERE id = ?", (idea_id,)).fetchone()
            if row is None:
                conn.rollback()
                raise ApiError(404, "idea not found: IDEA-%03d" % idea_id)
            conn.execute("DELETE FROM ideas WHERE id = ?", (idea_id,))
            conn.commit()
        finally:
            conn.close()
        self._send_json(200, {"ok": True})


class IdeasHTTPServer(ThreadingHTTPServer):
    """带上配置的 ThreadingHTTPServer（每个请求独立 SQLite 连接）。"""

    daemon_threads = True
    allow_reuse_address = True

    def __init__(self, address, db_path, api_token=None, access_log=False):
        self.db_path = db_path
        self.api_token = api_token
        self.access_log = access_log
        super().__init__(address, IdeasHandler)


# ---------------------------------------------------------------------------
# 启动入口
# ---------------------------------------------------------------------------


def create_server(host=DEFAULT_HOST, port=DEFAULT_PORT, data_dir=DEFAULT_DATA_DIR, token=None, access_log=False):
    """建库并返回已绑定端口的服务器（测试传 port=0 用随机端口）。"""
    db_path = os.path.join(data_dir, DB_FILENAME)
    init_db(db_path)
    return IdeasHTTPServer((host, port), db_path, api_token=token or None, access_log=access_log)


def main():
    host = os.environ.get("IDEAS_HOST", DEFAULT_HOST)
    try:
        port = int(os.environ.get("IDEAS_PORT", str(DEFAULT_PORT)))
    except ValueError:
        sys.stderr.write("[ideas-api] IDEAS_PORT 不是整数：%r\n" % os.environ.get("IDEAS_PORT"))
        return 2
    data_dir = os.environ.get("IDEAS_DATA_DIR", DEFAULT_DATA_DIR)
    token = (os.environ.get("IDEAS_API_TOKEN") or "").strip() or None
    access_log = (os.environ.get("IDEAS_ACCESS_LOG") or "").lower() in ("1", "true", "yes")

    try:
        httpd = create_server(host, port, data_dir, token=token, access_log=access_log)
    except OSError as err:
        sys.stderr.write("[ideas-api] 启动失败：%s\n" % err)
        return 1

    if token is None:
        sys.stderr.write(
            "[ideas-api] WARNING: 未设置 IDEAS_API_TOKEN，只允许 loopback 访问；"
            "要让别的机器连接请先设置 token。\n"
        )
    sys.stdout.write(
        "[ideas-api] listening on http://%s:%d/api  db=%s  auth=%s\n"
        % (host, httpd.server_address[1], os.path.join(data_dir, DB_FILENAME), "token" if token else "loopback-only")
    )
    sys.stdout.flush()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()
    return 0


if __name__ == "__main__":
    sys.exit(main())
