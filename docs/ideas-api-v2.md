# ideas-api v2 / v3 增量（云端模式参考实现）

dsh-idea-pool 的云端模式按 **ideas-api v2** 的接口约定实现。本文件记录 v2 / v3 相对 v1 的增量，供自建后端或从旧版 ideas-api 迁移时参考；数据库变更 SQL 见仓库 `deploy/ideas-api-v2.sql` 与 `deploy/ideas-api-v3.sql`，轻量 SQLite 自建版见 `server/`。

## v2 增量（`rev` / `if_rev` / `client_id`）

### 数据库

- `ideas.rev`：整数，`NOT NULL DEFAULT 0`；每次字段级修改 +1。
- `idea_updates.client_id` / `idea_links.client_id`：可空文本，各建一个 `(idea_id, client_id)` 部分唯一索引。

### 接口

- 所有 idea 响应新增 `rev`（整数，旧数据为 0）。
- `PATCH /api/ideas/{no}` 接受可选 `if_rev`：
  - 带 `if_rev` 时 `UPDATE ... AND rev = if_rev`，成功 `rev + 1`；不匹配返回 409 `{ok:false, error:"version conflict", current:{...idea}}`；
  - 不带 `if_rev` 时保持旧行为（last-write-wins），`rev + 1`。
- `POST /api/ideas/{no}/updates` 与 `POST /api/ideas/{no}/links` 接受可选 `client_id`：
  - `(idea_id, client_id)` 唯一；重复提交返回已存在行（HTTP 200，`{ok, update|link, idea}`），不重复插入、不涨 `rev`；
  - 新插入返回 201，同响应带最新 `idea`；所属 idea 的 `rev + 1`、`updated_at` 刷新。
- 未变化的端点：health、列表、详情、创建、删除、子项删除、links-index。

### 部署注意

- 迁移前备份数据库与服务端代码。
- 重启服务后冒烟：health 正常、`rev` 递增、过期 `if_rev` 返回 409、无 `if_rev` 仍可写、`client_id` 重复提交幂等、详情带 `rev`。
- 回滚：还原服务端代码并重启；新增列与索引旧代码会忽略，可保留。
- 旧客户端（网站 / CLI）仍是 last-write-wins；等它们也带 `if_rev` 后才会启用乐观锁。

## v3 增量（`gist` / `session_refs`）

- `ideas` 表新增两列（均可选、有默认值，旧客户端忽略）：
  - `gist TEXT NOT NULL DEFAULT ''`：一句话摘要，列表 / 梳理视图优先显示；
  - `session_refs JSONB NOT NULL DEFAULT '[]'::jsonb`：DSH 会话引用数组，每项 `{session_id,title,device,bound_at,reason}`。
- 所有 idea 响应新增 `gist`、`session_refs`；`POST /api/ideas` 与 `PATCH /api/ideas/{no}` 接受这两个字段；列表搜索包含 `gist`。
- 自建 SQLite 版 `server/ideas_api.py` 启动时自动 `ALTER TABLE` 补列。
- 迁移后如需回填 `gist`，用 `idea_pool` 工具或直接 `PATCH` 逐条写；不要顺手改 `updated_at` / `rev` 之外的业务字段。

## 与插件的接口约定

完整的请求 / 响应与错误映射见根目录 `CONTRACT.md` §11.4 与 §12；云端基址没有默认值，用户需在插件设置里显式填写自己的 `.../api` 地址与 API Key。
