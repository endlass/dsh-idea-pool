# ideas-api v2 增量（P2 云端模式）

2026-11-08 对火山云 `ideas-api`（`/opt/ideas-api/server.py`）做了向后兼容的增量，支撑 dsh-idea-pool 的云端模式。

## 数据库

见 `deploy/ideas-api-v2.sql`：`ideas.rev`、`idea_updates.client_id`、`idea_links.client_id`，以及两个部分唯一索引。已在火山云 `ideas` 库执行。

## 接口变化

- 所有 idea 响应新增 `rev`（整数，旧数据为 0）。
- `PATCH /api/ideas/{no}` 接受可选 `if_rev`：
  - 带 `if_rev` 时 `UPDATE ... AND rev = if_rev`，成功 `rev + 1`；不匹配返回 409 `{ok:false, error:"version conflict", current:{...idea}}`；
  - 不带 `if_rev` 时保持旧行为（last-write-wins），`rev + 1`。
- `POST /api/ideas/{no}/updates` 与 `/links` 接受可选 `client_id`：
  - `(idea_id, client_id)` 唯一；重复提交返回已存在行（HTTP 200，`{ok, update|link, idea}`），不重复插入、不涨 rev；
  - 新插入返回 201，同响应带最新 `idea`；所属 idea 的 `rev + 1`、`updated_at = now()`。
- 未变化的端点：health、列表、详情、创建、删除、子项删除、links-index。

## 部署记录

- 备份：`/opt/ideas-api/server.py.bak-20261108-223147`（原版）。
- 迁移执行后 `systemctl restart ideas-api.service`；health 正常。
- 冒烟：rev 0→1、过期 if_rev 409、无 if_rev 仍可写、client_id 重复提交幂等、详情带 rev、HTTPS + X-API-Key 写入路径正常。
- 回滚：还原备份 server.py 并 `systemctl restart ideas-api.service`（数据库新增列与索引可保留，旧代码忽略）。

## 注意

- 网站与 `ideas.py` 仍是「最后写入者获胜」；等它们也带 `if_rev` 后才会启用乐观锁。
- 本次冒烟创建过 IDEA-027/028 并删除，随后把 `ideas_id_seq` 复位到 26；编号不复用可见记录。

## v0.3 增量（2026-11-09）

- `ideas` 表新增两列（均可选、有默认值，旧客户端忽略）：
  - `gist TEXT NOT NULL DEFAULT ''`：一句话摘要，列表/梳理优先显示；
  - `session_refs JSONB NOT NULL DEFAULT '[]'::jsonb`：DSH 会话引用数组，每项 `{session_id,title,device,bound_at,reason}`。
- 所有 idea 响应新增 `gist`、`session_refs`；`POST /api/ideas` 与 `PATCH /api/ideas/{no}` 接受这两个字段；列表搜索包含 `gist`。
- 线上 PostgreSQL 迁移：`deploy/ideas-api-v3.sql` 已在 `ideas` 库执行；迁移前备份 `/tmp/ideas-pg-before-v3-*.dump`，旧 server.py 备份 `/opt/ideas-api/server.py.bak-20261109-214304`。
- 自建 SQLite 版 `server/ideas_api.py` 自动 `ALTER TABLE` 补列。
- 25 条既有想法的 gist 已回填：本地 `~/.dsh/idea-pool/state.json` 与线上 PG 均已写入，未改动 `updated_at`/`rev`。
