#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""server/ideas_api.py 的单元测试（纯标准库 unittest）。

跑法（仓库根目录）：
    python3 -m unittest server/test_api.py
每个用例起一个临时数据目录 + 随机端口的真实 HTTP 服务，覆盖：
health / CRUD / 列表筛选搜索分页 / if_rev 409 / 无 if_rev 兼容 /
client_id 幂等 / 鉴权 401 / 404 / loopback 豁免 / 无 token 时的拒绝策略。
"""

import importlib.util
import json
import os
import pathlib
import shutil
import tempfile
import threading
import unittest
import urllib.error
import urllib.request

# 直接按文件路径加载被测模块：这样无论从仓库根 `-m unittest` 还是直接执行本文件都能跑
_SERVER_DIR = pathlib.Path(__file__).resolve().parent
_SPEC = importlib.util.spec_from_file_location("ideas_api_under_test", _SERVER_DIR / "ideas_api.py")
ideas_api = importlib.util.module_from_spec(_SPEC)
_SPEC.loader.exec_module(ideas_api)

TOKEN = "test-token-1234"
TIME_RE = r"^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$"


class IdeasApiTestCase(unittest.TestCase):
    """每个用例独立：临时目录 + 随机端口 + 独立 SQLite，互不影响。"""

    token = TOKEN

    def setUp(self):
        self.tmpdir = tempfile.mkdtemp(prefix="ideas-api-test-")
        self.httpd = ideas_api.create_server(
            host="localhost",
            port=0,
            data_dir=self.tmpdir,
            token=self.token,
        )
        self.thread = threading.Thread(target=self.httpd.serve_forever, kwargs={"poll_interval": 0.01}, daemon=True)
        self.thread.start()
        self.base = "http://localhost:%d/api" % self.httpd.server_address[1]

    def tearDown(self):
        self.httpd.shutdown()
        self.httpd.server_close()
        self.thread.join(timeout=5)
        shutil.rmtree(self.tmpdir, ignore_errors=True)

    # -- HTTP 小工具 -------------------------------------------------------

    def request(self, method, path, body=None, headers=None, auth=True):
        """发请求并返回 (status, payload)。"""
        url = self.base + path
        data = None
        request_headers = {"Accept": "application/json"}
        if body is not None:
            data = json.dumps(body, ensure_ascii=False).encode("utf-8")
            request_headers["Content-Type"] = "application/json"
        if auth:
            request_headers["X-API-Key"] = self.token or TOKEN
        request_headers.update(headers or {})
        req = urllib.request.Request(url, data=data, headers=request_headers, method=method)
        try:
            with urllib.request.urlopen(req, timeout=10) as resp:
                return resp.status, json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as err:
            raw = err.read().decode("utf-8")
            try:
                payload = json.loads(raw)
            except ValueError:
                payload = {"raw": raw}
            return err.code, payload

    def create(self, **fields):
        payload = {"raw_text": "测试原文", "title": "测试想法"}
        payload.update(fields)
        status, body = self.request("POST", "/ideas", payload)
        self.assertEqual(status, 201, body)
        return body["idea"]

    # -- health ------------------------------------------------------------

    def test_health_empty_and_after_create(self):
        status, body = self.request("GET", "/health")
        self.assertEqual(status, 200)
        self.assertEqual(body, {"ok": True, "count": 0})
        self.create()
        status, body = self.request("GET", "/health")
        self.assertEqual((status, body["count"]), (200, 1))

    # -- 创建 --------------------------------------------------------------

    def test_create_returns_expected_idea_shape(self):
        idea = self.create(tags=["a", "b"], summary="摘要", source="web", source_note="备注")
        self.assertEqual(idea["id"], 1)
        self.assertEqual(idea["idea_no"], "IDEA-001")
        self.assertEqual(idea["title"], "测试想法")
        self.assertEqual(idea["raw_text"], "测试原文")
        self.assertEqual(idea["summary"], "摘要")
        self.assertEqual(idea["status"], "pool")
        self.assertEqual(idea["tags"], ["a", "b"])
        self.assertEqual(idea["source"], "web")
        self.assertEqual(idea["source_note"], "备注")
        self.assertEqual(idea["rev"], 0)
        self.assertEqual(idea["n_updates"], 0)
        self.assertEqual(idea["n_links"], 0)
        self.assertRegex(idea["created_at"], TIME_RE)
        self.assertEqual(idea["created_at"], idea["updated_at"])

    def test_create_title_falls_back_to_raw_text(self):
        status, body = self.request("POST", "/ideas", {"raw_text": "  只有原文的想法  "})
        self.assertEqual(status, 201)
        self.assertEqual(body["idea"]["title"], "只有原文的想法")
        self.assertEqual(body["idea"]["raw_text"], "只有原文的想法")

    def test_create_validation(self):
        status, body = self.request("POST", "/ideas", {})
        self.assertEqual(status, 400)
        self.assertEqual(body["ok"], False)
        status, body = self.request("POST", "/ideas", {"raw_text": 123})
        self.assertEqual(status, 400)
        status, body = self.request("POST", "/ideas", {"raw_text": "x", "status": "doing"})
        self.assertEqual((status, body["ok"]), (400, False))
        status, body = self.request("POST", "/ideas", {"raw_text": "x", "tags": [1]})
        self.assertEqual(status, 400)

    def test_create_accepts_status_and_preserves_internal_text(self):
        raw = "第一行\n\n  第二行有  空格\tTab"
        idea = self.create(raw_text=raw, status="active")
        self.assertEqual(idea["status"], "active")
        # 只 trim 首尾，内部字符逐字保留
        self.assertEqual(idea["raw_text"], raw)

    # -- 列表 --------------------------------------------------------------

    def test_list_counts_filter_search_and_pagination(self):
        self.create(title="Alpha 想法", raw_text="Alpha 内容")
        self.create(title="Beta 想法", raw_text="Beta 内容", status="active")
        self.create(title="Gamma 想法", raw_text="Gamma 内容", tags=["特殊标签"])

        status, body = self.request("GET", "/ideas")
        self.assertEqual(status, 200)
        self.assertEqual(body["total"], 3)
        self.assertEqual(len(body["ideas"]), 3)
        # 新的在前
        self.assertEqual([row["idea_no"] for row in body["ideas"]], ["IDEA-003", "IDEA-002", "IDEA-001"])
        self.assertEqual(body["counts"]["pool"], 2)
        self.assertEqual(body["counts"]["active"], 1)
        self.assertEqual(body["counts"]["parked"], 0)
        self.assertEqual(body["counts"]["done"], 0)

        # 状态筛选：total 是筛选后条数，counts 仍是全量
        status, body = self.request("GET", "/ideas?status=active")
        self.assertEqual(body["total"], 1)
        self.assertEqual(body["ideas"][0]["idea_no"], "IDEA-002")
        self.assertEqual(body["counts"]["pool"], 2)

        # 搜索标题 / 原文 / 标签
        status, body = self.request("GET", "/ideas?q=gamma")
        self.assertEqual(body["total"], 1)
        status, body = self.request("GET", "/ideas?q=%E7%89%B9%E6%AE%8A%E6%A0%87%E7%AD%BE")
        self.assertEqual(body["total"], 1)
        status, body = self.request("GET", "/ideas?q=%E4%B8%8D%E5%AD%98%E5%9C%A8")
        self.assertEqual(body["total"], 0)

        # 分页
        status, body = self.request("GET", "/ideas?limit=2&offset=0")
        self.assertEqual([row["idea_no"] for row in body["ideas"]], ["IDEA-003", "IDEA-002"])
        self.assertEqual(body["total"], 3)
        status, body = self.request("GET", "/ideas?limit=2&offset=2")
        self.assertEqual([row["idea_no"] for row in body["ideas"]], ["IDEA-001"])

    def test_list_parameter_validation(self):
        self.assertEqual(self.request("GET", "/ideas?status=doing")[0], 400)
        self.assertEqual(self.request("GET", "/ideas?limit=abc")[0], 400)
        self.assertEqual(self.request("GET", "/ideas?limit=0")[0], 400)
        self.assertEqual(self.request("GET", "/ideas?limit=501")[0], 400)
        self.assertEqual(self.request("GET", "/ideas?offset=-1")[0], 400)
        # 合法上限
        self.assertEqual(self.request("GET", "/ideas?limit=500")[0], 200)

    # -- 详情 --------------------------------------------------------------

    def test_detail_and_404(self):
        idea = self.create()
        status, body = self.request("GET", "/ideas/" + idea["idea_no"])
        self.assertEqual(status, 200)
        self.assertEqual(body["idea"]["idea_no"], "IDEA-001")
        self.assertEqual(body["updates"], [])
        self.assertEqual(body["links"], [])

        status, body = self.request("GET", "/ideas/IDEA-999")
        self.assertEqual(status, 404)
        self.assertEqual(body["ok"], False)
        self.assertIn("IDEA-999", body["error"])

        # 编号大小写不敏感
        status, body = self.request("GET", "/ideas/idea-001")
        self.assertEqual(status, 200)
        self.assertEqual(body["idea"]["idea_no"], "IDEA-001")

    # -- PATCH / if_rev ----------------------------------------------------

    def test_patch_with_if_rev_and_conflict(self):
        idea = self.create()
        self.assertEqual(idea["rev"], 0)

        status, body = self.request(
            "PATCH", "/ideas/IDEA-001", {"status": "active", "if_rev": 0}
        )
        self.assertEqual(status, 200)
        self.assertEqual(body["idea"]["status"], "active")
        self.assertEqual(body["idea"]["rev"], 1)

        # 同一个 if_rev 再来一次：落后版本，409 且带 current
        status, body = self.request(
            "PATCH", "/ideas/IDEA-001", {"status": "done", "if_rev": 0}
        )
        self.assertEqual(status, 409)
        self.assertEqual(body["ok"], False)
        self.assertEqual(body["error"], "version conflict")
        self.assertEqual(body["current"]["rev"], 1)
        self.assertEqual(body["current"]["status"], "active")
        # 冲突不落库
        status, body = self.request("GET", "/ideas/IDEA-001")
        self.assertEqual(body["idea"]["status"], "active")

        # 带上最新 rev 就能写
        status, body = self.request(
            "PATCH", "/ideas/IDEA-001", {"status": "done", "if_rev": 1}
        )
        self.assertEqual(status, 200)
        self.assertEqual(body["idea"]["rev"], 2)

    def test_patch_without_if_rev_keeps_legacy_behavior(self):
        self.create()
        status, body = self.request("PATCH", "/ideas/IDEA-001", {"status": "parked"})
        self.assertEqual(status, 200)
        self.assertEqual(body["idea"]["status"], "parked")
        self.assertEqual(body["idea"]["rev"], 1)
        status, body = self.request("PATCH", "/ideas/IDEA-001", {"summary": "第二次"})
        self.assertEqual(status, 200)
        self.assertEqual(body["idea"]["rev"], 2)

    def test_patch_validation_and_fields(self):
        self.create()
        status, body = self.request("PATCH", "/ideas/IDEA-001", {"status": "doing"})
        self.assertEqual(status, 400)
        status, body = self.request("PATCH", "/ideas/IDEA-001", {"if_rev": "1"})
        self.assertEqual(status, 400)
        status, body = self.request("PATCH", "/ideas/IDEA-001", {"unknown": 1})
        self.assertEqual(status, 400)
        self.assertEqual(self.request("PATCH", "/ideas/IDEA-999", {"status": "done"})[0], 404)

        status, body = self.request(
            "PATCH",
            "/ideas/IDEA-001",
            {"title": "新标题", "tags": ["x", "y"], "source_note": "备注"},
        )
        self.assertEqual(status, 200)
        self.assertEqual(body["idea"]["title"], "新标题")
        self.assertEqual(body["idea"]["tags"], ["x", "y"])
        self.assertEqual(body["idea"]["source_note"], "备注")
        self.assertEqual(body["idea"]["rev"], 1)

    # -- updates / links ---------------------------------------------------

    def test_updates_client_id_idempotent(self):
        self.create()
        payload = {"content": "第一条进展", "source": "web", "client_id": "u_1700000000_abc"}
        status, body = self.request("POST", "/ideas/IDEA-001/updates", payload)
        self.assertEqual(status, 201)
        first_update_id = body["update"]["id"]
        self.assertEqual(body["update"]["content"], "第一条进展")
        self.assertEqual(body["idea"]["rev"], 1)
        self.assertEqual(body["idea"]["n_updates"], 1)

        # 同一个 client_id 重试：200 + 同一行，不重复插入、不涨 rev
        status, body = self.request("POST", "/ideas/IDEA-001/updates", payload)
        self.assertEqual(status, 200)
        self.assertEqual(body["update"]["id"], first_update_id)
        self.assertEqual(body["idea"]["rev"], 1)

        status, detail = self.request("GET", "/ideas/IDEA-001")
        self.assertEqual(len(detail["updates"]), 1)
        self.assertEqual(detail["updates"][0]["client_id"], "u_1700000000_abc")
        self.assertRegex(detail["updates"][0]["created_at"], TIME_RE)

    def test_links_client_id_idempotent(self):
        self.create()
        payload = {
            "url": "https://example.com/out",
            "title": "产出链接",
            "client_id": "l_1700000000_xyz",
        }
        status, body = self.request("POST", "/ideas/IDEA-001/links", payload)
        self.assertEqual(status, 201)
        link_id = body["link"]["id"]
        self.assertEqual(body["link"]["title"], "产出链接")
        self.assertEqual(body["link"]["ref_type"], "external")
        self.assertEqual(body["idea"]["rev"], 1)

        status, body = self.request("POST", "/ideas/IDEA-001/links", payload)
        self.assertEqual(status, 200)
        self.assertEqual(body["link"]["id"], link_id)
        self.assertEqual(body["idea"]["rev"], 1)

        status, detail = self.request("GET", "/ideas/IDEA-001")
        self.assertEqual(len(detail["links"]), 1)

    def test_updates_without_client_id_are_not_deduplicated(self):
        self.create()
        status, _ = self.request("POST", "/ideas/IDEA-001/updates", {"content": "a"})
        self.assertEqual(status, 201)
        status, _ = self.request("POST", "/ideas/IDEA-001/updates", {"content": "b"})
        self.assertEqual(status, 201)
        status, detail = self.request("GET", "/ideas/IDEA-001")
        self.assertEqual(len(detail["updates"]), 2)
        self.assertEqual(detail["idea"]["rev"], 2)

    def test_update_and_link_validation_and_404(self):
        self.create()
        self.assertEqual(
            self.request("POST", "/ideas/IDEA-001/updates", {"content": "  "})[0], 400
        )
        self.assertEqual(self.request("POST", "/ideas/IDEA-001/links", {})[0], 400)
        self.assertEqual(
            self.request("POST", "/ideas/IDEA-999/updates", {"content": "x"})[0], 404
        )
        self.assertEqual(
            self.request("POST", "/ideas/IDEA-999/links", {"url": "https://x"})[0], 404
        )

    # -- 删除 --------------------------------------------------------------

    def test_delete_and_cascade(self):
        self.create()
        self.request("POST", "/ideas/IDEA-001/updates", {"content": "进展"})
        self.request("POST", "/ideas/IDEA-001/links", {"url": "https://example.com"})

        status, body = self.request("DELETE", "/ideas/IDEA-001")
        self.assertEqual(status, 200)
        self.assertEqual(body, {"ok": True})
        self.assertEqual(self.request("GET", "/ideas/IDEA-001")[0], 404)
        self.assertEqual(self.request("DELETE", "/ideas/IDEA-001")[0], 404)

        # 编号不回收：新想法继续往后编号
        idea = self.create()
        self.assertEqual(idea["idea_no"], "IDEA-002")

    # -- 鉴权 --------------------------------------------------------------

    def test_auth_required_from_forwarded_source(self):
        # 带 X-Forwarded-For 视为经反向代理，loopback 豁免失效
        forwarded = {"X-Forwarded-For": "203.0.113.9"}
        status, body = self.request("GET", "/health", headers=forwarded, auth=False)
        self.assertEqual(status, 401)
        self.assertEqual(body["ok"], False)

        status, _ = self.request("GET", "/health", headers=dict(forwarded, **{"X-API-Key": "wrong"}), auth=False)
        self.assertEqual(status, 401)

        status, body = self.request("GET", "/health", headers=dict(forwarded, **{"X-API-Key": TOKEN}), auth=False)
        self.assertEqual((status, body["ok"]), (200, True))

        # Authorization: Bearer 也认
        headers = dict(forwarded, **{"Authorization": "Bearer " + TOKEN})
        status, body = self.request("GET", "/health", headers=headers, auth=False)
        self.assertEqual((status, body["ok"]), (200, True))

    def test_loopback_is_exempt_without_key(self):
        status, body = self.request("GET", "/health", auth=False)
        self.assertEqual((status, body["ok"]), (200, True))

    def test_server_without_token_allows_loopback_only(self):
        other_dir = tempfile.mkdtemp(prefix="ideas-api-notoken-")
        other = ideas_api.create_server(host="localhost", port=0, data_dir=other_dir, token=None)
        thread = threading.Thread(target=other.serve_forever, kwargs={"poll_interval": 0.01}, daemon=True)
        thread.start()
        base = "http://localhost:%d/api" % other.server_address[1]
        try:
            # loopback 直接访问：放行
            with urllib.request.urlopen(base + "/health", timeout=10) as resp:
                self.assertEqual(resp.status, 200)
            # 模拟经代理（非 loopback）：未配 token，拒绝
            req = urllib.request.Request(
                base + "/health", headers={"X-Forwarded-For": "203.0.113.9"}
            )
            with self.assertRaises(urllib.error.HTTPError) as ctx:
                urllib.request.urlopen(req, timeout=10)
            self.assertEqual(ctx.exception.code, 401)
        finally:
            other.shutdown()
            other.server_close()
            thread.join(timeout=5)
            shutil.rmtree(other_dir, ignore_errors=True)

    # -- 其他 --------------------------------------------------------------

    def test_unknown_route_and_method(self):
        status, body = self.request("GET", "/nope")
        self.assertEqual(status, 404)
        self.assertEqual(body["ok"], False)
        status, body = self.request("PUT", "/ideas", {"raw_text": "x"})
        self.assertEqual(status, 405)
        self.assertEqual(body["ok"], False)

    def test_invalid_json_body(self):
        req = urllib.request.Request(
            self.base + "/ideas",
            data=b"{oops",
            headers={"Content-Type": "application/json", "X-API-Key": TOKEN},
            method="POST",
        )
        with self.assertRaises(urllib.error.HTTPError) as ctx:
            urllib.request.urlopen(req, timeout=10)
        self.assertEqual(ctx.exception.code, 400)


if __name__ == "__main__":
    unittest.main(verbosity=2)
