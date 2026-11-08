# 灵感池自建云端后端（ideas-api v2 兼容）

给 **dsh-idea-pool** 插件的「云端模式」用的自建服务端：纯 Python 标准库 + SQLite，
接口与火山云的 `ideas-api` v2 一致（`rev` / `if_rev` 乐观锁、`client_id` 幂等）。
不想用现成云端、或想在自己 NAS/小主机上放一份灵感池数据时用它。

- 单文件实现：[`ideas_api.py`](ideas_api.py)（http.server + sqlite3 + json，无第三方依赖）
- 镜像：`python:3.12-slim`、非 root、数据卷 `/data`
- 数据：`./data/ideas.sqlite`（SQLite，WAL）
- 接口：`/api/health`、`/api/ideas`、`/api/ideas/{no}`、`/api/ideas/{no}/updates`、`/api/ideas/{no}/links`

---

## 3 步跑起来（Docker）

在仓库根目录（`compose.yaml` 所在处）：

1. **改 token**：编辑 `compose.yaml`，把 `IDEAS_API_TOKEN` 的示例值换成你自己的随机长串（建议 ≥ 16 位）。
2. **起服务**：

   ```bash
   docker compose up -d
   ```

3. **在插件里连上**：DSH 打开灵感池 → 设置 → 运行模式「云端」→
   - base：`http://<这台机器的地址>:8794/api`
   - API Key：填第 1 步的同一个 token
   - 点「测试连接」应显示条数与延迟，再保存。

冒烟检查（经 Docker 端口映射的请求来源不是 loopback，必须带 key）：

```bash
curl -s -H "X-API-Key: <你的 token>" http://127.0.0.1:8794/api/health
# {"ok": true, "count": 0}
```

常用命令：`docker compose logs -f`、`docker compose ps`、`docker compose down`（数据在 `./data`，不会删）。

> Linux 上如果容器报 `unable to open database file`，是 bind mount 权限问题：
> `mkdir -p data && sudo chown -R 10001:10001 data` 后重启容器。

---

## 无 Docker 跑法（python3）

只需要 Python 3.8+，不装任何包：

```bash
cd dsh-idea-pool
IDEAS_API_TOKEN='<随机长串>' \
IDEAS_DATA_DIR=./data \
IDEAS_PORT=8794 \
python3 server/ideas_api.py
```

- 默认只监听 `127.0.0.1`；要让 DSH 装在别的机器上连，设 `IDEAS_HOST=0.0.0.0` 并保证 token 已设置。
- 本机 loopback 直接访问（如 `curl http://127.0.0.1:8794/api/health`）可免 token；跨机器必须带 token。
- 自己占了个端口反代（Caddy/nginx）也行，记得透传 `X-Forwarded-For`（见下）。

---

## 配置（环境变量）

| 变量 | 默认 | 说明 |
| --- | --- | --- |
| `IDEAS_DATA_DIR` | `./data` | SQLite 数据目录（自动建目录/建表） |
| `IDEAS_PORT` | `8794` | 监听端口 |
| `IDEAS_HOST` | `127.0.0.1` | 监听地址；Dockerfile 里默认 `0.0.0.0` |
| `IDEAS_API_TOKEN` | 空 | 访问 token。**空 = 只允许 loopback**，非 loopback 一律 401 |
| `IDEAS_ACCESS_LOG` | 空 | 设 `1` 打开访问日志（默认静默） |

初始化时会自动建表：`ideas` / `idea_updates` / `idea_links`，以及
`uq_idea_updates_client`、`uq_idea_links_client` 两个 `(idea_id, client_id)` 部分唯一索引。

---

## 数据与备份

- 数据文件：`data/ideas.sqlite`（运行中还有 `-wal` / `-shm` 两个 WAL 文件）。
- 热备份（不用停服，需要 `sqlite3` 命令行）：

  ```bash
  sqlite3 data/ideas.sqlite ".backup 'data/backup-$(date +%F).sqlite'"
  ```

- 冷备份：`docker compose stop` 后复制整个 `data/` 目录，再 `docker compose start`。
- 恢复：停服 → 用备份替换 `ideas.sqlite`（顺手删掉 `-wal`/`-shm`）→ 起服。
- 删除 `data/` 等于清空云端；建议在仓库根 `.gitignore` 里忽略 `data/`，别把数据库提交进 git。

---

## 接口（与 ideas-api v2 一致）

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/api/health` | `{ok, count}` |
| GET | `/api/ideas?status=&q=&limit=&offset=` | `{ok, ideas, counts:{pool,active,parked,done,total}, total}`；`counts` 是全量计数，`total` 是筛选后条数 |
| GET | `/api/ideas/{no}` | `{ok, idea, updates, links}` |
| POST | `/api/ideas` | 201 `{ok, idea}`（`raw_text` / `title` 至少一个） |
| PATCH | `/api/ideas/{no}` | `{ok, idea}`；带 `if_rev` 且版本落后 → 409 `{ok:false,error:"version conflict",current}` |
| POST | `/api/ideas/{no}/updates` | 201 新行 / 200 同 `client_id` 已存在；响应带 `update` 与最新 `idea` |
| POST | `/api/ideas/{no}/links` | 同上（`link`） |
| DELETE | `/api/ideas/{no}` | `{ok}` |

要点：

- `idea` 字段：`id, idea_no, title, raw_text, summary, status, tags[], source, source_note,
  created_at, updated_at, rev, n_updates, n_links`；时间按北京时间输出 `YYYY-MM-DD HH:MM`；
  `idea_no = IDEA-` + 三位补零的 id（删除不回收编号）。
- `rev` 从 0 起；PATCH 成功后 `rev+1`；updates/links 新插入会使 `rev+1` 并刷新 `updated_at`。
- `client_id` 用于进展/产出的幂等重试：同一 `(idea, client_id)` 重复提交返回已有行（HTTP 200），
  不重复插入、不涨 `rev`。
- 错误统一 `{ok:false, error:"..."}`；未知想法 404、参数错误 400、鉴权失败 401、版本冲突 409。

---

## 鉴权与反向代理

请求头二选一：`X-API-Key: <token>` 或 `Authorization: Bearer <token>`（常量时间比较）。

- **loopback 豁免**：来源是 127.0.0.1/::1 且没有经过代理时免 token，方便本机调试。
- 带 `X-Forwarded-For` / `Forwarded` / `X-Real-IP` 的请求视为经反向代理，**不豁免**，必须带 token。
  把服务放到 nginx/Caddy 后面时，反代要透传这些头（否则代理会把来源变成 loopback 而绕过 token）。
- 本服务**不带 TLS**。公网访问请放 Caddy/nginx 做 HTTPS，或者只在内网/VPN 里用。
- token 只从环境变量读，不会出现在响应或日志里；`compose.yaml` 里的值请自己保管好。

nginx 片段示例（TLS 自行配置）：

```nginx
location /ideas/api/ {
    proxy_pass http://127.0.0.1:8794/api/;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

若反代改路径（如 `/ideas/api/` → `/api/`），插件设置里的 base 填对外路径即可
（例：`https://example.com/ideas/api`）。

---

## 限制（v0.x）

- **单用户 / 单实例**：SQLite WAL + 每请求独立连接，个人使用足够；不做多副本、读写分离。
  多人/多实例请换外部 PostgreSQL（不在本服务范围）。
- 搜索 `q` 是对标题/原文/摘要/标签的 `LIKE` 子串匹配，不是全文索引。
- 不支持附件、CORS（插件由 DSH Host 直连，不经浏览器跨域）、速率限制与审计日志。
- 未实现 `GET /api/meta/links-index`（插件云端模式不用它；如你的现有服务依赖它需自行补）。
- 无内置账号体系：服务端只有一个 token，等于「拿着 token 的人都是同一个用户」。

---

## 迁移

- 火山云 → 本自建服务/本机：用插件的「从云端导入到本机」，或仓库根 `scripts/import-cloud.mjs`
  （`--base` 指到本服务、`--key-file` 放 token 文件）。
- 本机 → 本自建服务：把插件切到云端模式（base 指向本服务）后新写的直接进云端；
  存量本机数据没有一键上云工具（契约里也没做双向同步）。

## 故障排查

| 现象 | 排查 |
| --- | --- |
| 401 | token 不一致；或经过反代但没带/没透传 key；确认反代透传了 `X-Forwarded-For` 且 key 一并转发 |
| 容器起不来 | `docker compose logs ideas-api`；端口 8794 被占则改 `ports` 与 `IDEAS_PORT` |
| `unable to open database file` | Linux bind mount 权限，`sudo chown -R 10001:10001 data` |
| 插件测试连接失败 | base 是否带 `/api`（如 `http://host:8794/api`）；防火墙/端口映射 |
| 数据想搬走 | 见上面「数据与备份」，直接复制 `ideas.sqlite` 即可 |
