# Changelog

## Unreleased — 开源就绪

### 变更
- 去个人化：`CLOUD_DEFAULT_BASE` 改为空，不再预置任何第三方云端地址；设置里的云端基址只给 `https://ideas.example.com/ideas/api` 作占位示例，本机模式保持零配置可用。
- 云端「复制链接」改为约定式：仅当基址形如 `<站点>/ideas/api` 时复制网站深链，否则复制引用文本，不再硬编码个人站点。
- `scripts/import-cloud.mjs` 的 `--base` 改为必填（或 `IDEAS_API_BASE`），密钥来源改为 `IDEAS_API_KEY` / `--key-file` / `$DSH_HOME/ideas-api.key`；`--site` 可选，用于补全云端相对链接。
- 默认设备名、测试 fixture、自建 server 的监听地址改用通用 `localhost`；移除个人备份/部署记录与一次性回填脚本。
- 文档：README 中英双版（`README.md` / `README.en.md`）互链并重写为外部用户视角；`INSTALL.md`、`CONTRACT.md`、`docs/ideas-api-v2.md`、`docs/release-checklist.md` 按 v0.3.1 实现校正。
- 工程化：新增 `SECURITY.md`（数据边界与本机/云端模式说明）与 GitHub Actions CI（Node 22/24：`npm ci`、`npm test`、`npm run build`、`npm pack --dry-run`）；`package.json` 补 `publishConfig.access=public`、`author`，`files` 纳入 SECURITY/CONTRACT/英文 README/server/deploy/compose 等发布内容。


## v0.3.1 — 2026-11-09

「看得见本机落后云端多少，且明确只是单向」。

### 新增
- **双模连续性**：本机模式下面板顶部常驻一条状态条，显示云端可达性、上次刷新时间与差异摘要（云端多出的想法 / 进展 / 产出）；设置里新增「云端连续性」区块（同样给出状态、差异与刷新入口）。
- **从云端增量刷新**：一键把云端新内容合并进本机。语义沿用 v0.2 的导入合并规则——按 `idea_no` 合并、两边都有的想法云端字段为准、进展 / 产出按 `id` 取并集、本机独有内容保留、不删数据；只拉有差异的想法详情，重复刷新幂等，不产生重复进展。
- `state.meta.last_sync` 记录上次刷新时间、云端条数与本次新增计数（旧 state.json 无此字段照常打开）。
- 刷新进本机撤销栈：有内容变化时可整体撤销（label「从云端刷新灵感池」）；无变化时只更新 last_sync，不占撤销位。
- 明确边界：刷新**只把云端内容并进本机**，本机新内容不回写云端；不是双向同步，面板与设置文案都直说。

### 变更
- 云端不可达 / 未配置 Key 时优雅降级：连续性检查在 boot 后异步进行，不阻塞列表与本地功能；不可达不重复弹 toast，状态条与设置内联说明各出现一次。
- 差异检查只对「云端计数更多或 updated_at 更新」的想法拉详情，避免每次打开面板全量拉取。

### 契约
- 新增 `GET /api/continuity`（永远 200，离线只降级）与 `POST /api/continuity/refresh`（单向增量刷新），见 `CONTRACT.md` §12。
- `state.meta.last_sync?: { at, base, cloud_total, imported, updated, added_updates, added_links }`；载入时静默清洗坏值。

## v0.3.0 — 2026-11-09

「看得懂、捞得到、接得回」。

### 新增
- **一句话摘要 `gist`**：与详细 `summary` 分开；列表/梳理/详情优先显示 gist，现有 25 条已回填。
- **关联会话 / 一键推进**：`session_refs` 记录 DSH 会话；详情可查找并绑定会话、点击跳转；一键推进打开新会话并预填推进提示词（不自动发送）；若只新增/只有一个会话，自动回填关联。
- **梳理视图**：列表 / 梳理切换，按「待决定 / 该推进了 / 正在推进 / 已收口·搁置」分桶，支持随机捞一条。
- **状态改为动作菜单**：详情「状态 · 当前状态 ▾」，与列表筛选页签区分。
- **列表排序**：最近创建 / 最近更新。
- **下一步提取**：最新进展里显式写出的「下一步：…」置顶高亮。

### 改进
- 详情顺序改为摘要 → 最新进展 → 产出 → 关联会话 → 进展历史 → 原文（折叠）。
- 状态切换、加进展/产出改乐观更新；输入版本保护、编辑草稿保护。
- 设置分组；测试连接用当前填写配置，导入用已保存配置。

### 契约
- `idea` 新增可选字段 `gist`（≤200 字，默认空）与 `session_refs`（数组，默认空）；旧数据归一化时自动补默认值。
- 云端 SQLite 服务端已同步；现有 PostgreSQL 部署的字段迁移见 `docs/ideas-api-v2.md`。

## v0.2.1 — 2026-11-08

## v0.2.1 — 2026-11-08

发布准备（P3）。

### 新增
- `server/` 自建后端：纯 Python 标准库 + SQLite 的 ideas-api v2 兼容实现，附 Dockerfile、根目录 `compose.yaml`、21 个 unittest；`docker compose up -d` 即可拥有自己的云端账本。
- `INSTALL.md` 安装指南；`docs/compat-audit-20261108.md` 兼容审计记录。

### 变更
- 设置 → 云端模式：新增「清除已保存的 Key」（确认后只清 key，不动 mode/base）。
- 未保存 Key 时「从云端导入到本机」禁用并提示；测试连接失败只保留内联文案，不再重复弹 toast。
- 窄屏（<640px）设置对话框适配：输入、按钮换行不溢出。

### 修复
- 删除当前想法后，宽屏自动选中可能对已删除条目发起一次详情请求（404）；现在删除期间抑制自动选中。

## v0.2.0 — 2026-11-08

云端模式（P2）。

### 新增
- 设置里的运行模式：本机模式 / 云端模式，随时切换；顶栏模式徽标。
- 云端配置：ideas-api 基址、API Key（仅存本机 `settings.json`，600，不回传）、测试连接（条数/延迟）。
- 从云端导入到本机：按 `idea_no` 合并，进展/产出按 id 取并集，不删本机数据。
- 云端模式支持列表/详情/录入/进展/产出/状态/删除/导出；「复制链接」改为网站规范链接。
- agent 工具 `idea_pool` 自动跟随模式：本机或云端同一套动作。

### 变更
- `IdeaService` 改为 facade，本机逻辑拆为 `LocalEngine`，新增 `CloudEngine`。
- 服务端 ideas-api 升级 v2（向后兼容）：`rev` / `if_rev` 乐观锁、`client_id` 幂等；迁移 SQL 见 `deploy/ideas-api-v2.sql`，说明见 `docs/ideas-api-v2.md`。
- 云端写入冲突返回 409，界面提示刷新后重试。
- 云端模式暂不支持撤销（本机模式保留）。

### 修复
- 删除当前想法后，宽屏自动选中可能对已删除条目发起一次详情请求（404）；现在删除期间抑制自动选中。

## v0.1.0 — 2026-11-08

本机模式（P0/P1）。

### 新增
- DSH 侧栏一级入口「灵感池」：常驻录入条（原文逐字、⌘/Ctrl+Enter）、状态页签、搜索、列表、详情。
- 本机 JSON 存储：原子写、`state.lock`、30 步三方合并撤销、每日 `.bak`、目录 700/文件 600。
- 详情：原文只读、摘要、进展时间线、关联产出、状态切换、编辑、删除确认。
- 设置：存储路径、设备标识、导出 JSON。
- agent 工具 `idea_pool`（add/list/get/progress/link/status/export）。
- 中英双语、明暗主题、宽屏两栏/窄屏下钻。
