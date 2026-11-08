# dsh-idea-pool 契约（v0.1 / P1 本机模式）

本文件是 Host 与 Client 两个半片的唯一接口约定。改动先改这里，两边同步。

- 目标 DSH：0.2.2-rc.1（`engines.dsh: >=0.2.2-rc.1 <0.3.0`）
- 本阶段只做**本机模式**（数据在 `$DSH_HOME/idea-pool/`），云端模式留接口不实现。
- 包名 / 插件 id / slot key：`dsh-idea-pool` / `idea-pool`。
- 参考实现：`/Users/zhaoxingchen/.dsh/profiles/desktop/node_modules/dsh-media-desk/`（Host 路由、本机 store、client 注册）与 `/tmp/media-desk-repo/client/`（客户端源码）。不要照抄它的五页面，只借工程写法。

## 1. 目录与文件所有权

```
dsh-idea-pool/
  package.json            Lead
  cordis.patch.yml        Lead
  scripts/build.mjs       Lead
  scripts/dev-sandbox.sh  Lead
  CONTRACT.md             Lead
  README.md / LICENSE     Lead
  index.js                Host：inject + apply + 注册路由/工具
  lib/contract.mjs        数据契约：字段白名单、校验、标题兜底、idea_no
  lib/store-local.mjs     本机 JSON 存储：原子写、锁、撤销、备份
  lib/service.mjs         IdeaService：唯一业务写入口
  lib/settings.mjs        settings.json（600，密钥不回传）
  lib/routes.mjs          HTTP 路由（Node IncomingMessage/ServerResponse）
  lib/tools.mjs           agent 工具 idea_pool(action)
  test/*.test.mjs         node:test
  client/                 客户端源码（client-dev 所有）
  client.js               esbuild 构建产物（不手写）
  icon.svg                client-dev
```

Host 代码**只 import Node 内置模块**，不 import 任何 `@deepseek-ai/*`（DSH 运行时会提供 `react` 给 client bundle，Host 不需要它）。

## 2. 数据模型

本机 state.json：

```jsonc
{
  "schema": 1,
  "device": "dsh-mac",            // 默认按平台：darwin→dsh-mac / win32→dsh-win / 其他→dsh
  "next_no": 2,                   // 下一个 idea 序号
  "ideas": [
    {
      "idea_no": "IDEA-001",      // 本机独立编号，IDEA-001 起
      "title": "一句话标题",       // 必填；缺省时用 raw_text 前 40 字符
      "raw_text": "原文逐字",      // 必填；**不做 trim 以外的任何改写**（外层首尾空白可 trim）
      "summary": "",              // 可空
      "status": "pool",           // pool | active | parked | done
      "tags": ["DSH"],            // string[]，去重，<=24 个，每个 <=40 字符
      "source": "dsh-mac",        // 默认 settings.device
      "source_note": "",
      "created_at": "2026-11-08T21:00:00.000Z",
      "updated_at": "2026-11-08T21:00:00.000Z",
      "rev": 1,                   // 每次字段级修改 +1（为将来云端冲突检测预留）
      "updates": [
        { "id": "u_...", "content": "进展内容", "source": "dsh-mac", "created_at": "..." }
      ],
      "links": [
        { "id": "l_...", "title": "产出标题", "url": "https://...", "ref_type": "external", "ref_id": "", "created_at": "..." }
      ]
    }
  ],
  "meta": { "updated_at": "..." }
}
```

规则：

- `status` 只允许四个值；非法值拒绝。
- `raw_text` 逐字保存：除首尾空白外不得 trim 内部、不得替换换行。
- `rev` 每次 `PATCH`（包括只改 status）加 1；`POST updates/links` 也把所在 idea 的 `updated_at` 刷新（rev 加不加由 Host 决定，v0.1 加）。
- `tags` 输入可以是 `"a,b"` 字符串或数组，统一成数组。
- 时间一律 ISO 8601 字符串。
- `idea_no` 本机从 `IDEA-001` 起；删除不回收编号。

## 3. HTTP 接口

前缀 `/idea-pool`，由 `ctx.webServer.register({kind:'prefix', path:'/idea-pool', handler})` 注册。
Client 用相对路径 `idea-pool/...` 请求（同源）。所有请求先过 `ctx.connection.requestRejection({ headers: req.headers })`；拿不到鉴权服务时一律 403。写请求（非 GET/HEAD）再检查 `sec-fetch-site`：存在且不为 `same-origin`/`none` 时 403。

响应统一 JSON，`content-type: application/json; charset=utf-8`。成功带 `ok: true`；失败 `{ ok: false, error: "中文或英文短句" }`，HTTP 400/403/404/409/500。

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/idea-pool/health` | `{ ok:true, mode:'local', count:n }` |
| GET | `/idea-pool/api/state` | 首屏：`{ ok, mode, storagePath, device, canUndo, counts, total, ideas:[摘要] }` |
| GET | `/idea-pool/api/ideas?status=&q=&limit=&offset=` | 列表：`{ ok, ideas:[摘要], counts, total }` |
| GET | `/idea-pool/api/ideas/{idea_no}` | 详情：`{ ok, idea, updates, links }` |
| POST | `/idea-pool/api/ideas` | 入池：body `{ title?, raw_text, summary?, tags?, source?, source_note? }` → `{ ok, idea }` |
| PATCH | `/idea-pool/api/ideas/{idea_no}` | 改字段：body 任意子集 `{ title?, raw_text?, summary?, status?, tags?, source_note? }` → `{ ok, idea }` |
| POST | `/idea-pool/api/ideas/{idea_no}/updates` | 追加进展：`{ content, source? }` → `{ ok, update }` |
| POST | `/idea-pool/api/ideas/{idea_no}/links` | 挂产出：`{ title?, url, ref_type?, ref_id? }` → `{ ok, link }` |
| DELETE | `/idea-pool/api/ideas/{idea_no}` | 删除想法（连带进展/产出）→ `{ ok }` |
| POST | `/idea-pool/api/undo` | 撤销上一步 → `{ ok, label, state }`（state 同 `/api/state`） |
| GET | `/idea-pool/api/settings` | 公开设置：`{ ok, settings }` |
| POST | `/idea-pool/api/settings` | v0.1 只接受 `{ device? }` → `{ ok, settings }` |
| GET | `/idea-pool/api/export` | 导出：`{ ok, data:{ schema, device, exported_at, ideas } }`（可直接下载 JSON） |

摘要 `idea` 字段：`idea_no,title,summary,status,tags,source,created_at,updated_at,n_updates,n_links`。详情 `idea` 额外带 `raw_text,source_note,rev`；`updates`/`links` 数组按 created_at/id 升序。

URL 中的 `{idea_no}` 一律规范成大写。

### 校验与错误

- `POST /api/ideas`：`raw_text` 或 `title` 至少一个非空；否则 400 `{ok:false,error:"raw_text 或 title 至少填一个"}`。
- 未知 idea_no → 404 `{ok:false,error:"idea not found: IDEA-999"}`。
- 非法 status → 400。
- body 不是合法 JSON → 400。
- body 超过 1 MB → 413。
- 未知字段静默丢弃（白名单），不要报错。

## 4. 设置

`$DSH_HOME/idea-pool/settings.json`，权限 600，存在时也是 600：

```jsonc
{ "device": "dsh-mac", "mode": "local", "cloud": { "base": "", "hasKey": false } }
```

- v0.1 `mode` 恒为 `local`；`cloud` 仅占位，不读密钥。
- `publicSettings()` 永远不返回密钥；只返回 `hasKey` 布尔。

## 5. Agent 工具

名称：`idea_pool`。参数（author JSON Schema 的 raw 形式，直接交给 `ctx.tools.register`，**不要** import `defineTool`）：

```jsonc
{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "action": { "type": "string", "enum": ["add","list","get","progress","link","status","export"] },
    "idea_no": { "type": "string" },
    "title": { "type": "string" },
    "raw_text": { "type": "string" },
    "summary": { "type": "string" },
    "tags": { "type": "array", "items": { "type": "string" } },
    "content": { "type": "string" },
    "url": { "type": "string" },
    "link_title": { "type": "string" },
    "status": { "type": "string", "enum": ["pool","active","parked","done"] },
    "q": { "type": "string" },
    "limit": { "type": "integer" }
  },
  "required": ["action"]
}
```

- `output.schema` 用同一个 raw JSON Schema DSL（object + properties + required），`output.render` 返回 `[{ type:'text', text }]` 摘要（例如 `已入池 IDEA-007《标题》`）。
- execute 必须自己校验参数（register 不校验 parameters），非法参数抛 `new Error(...)`。
- 工具写的是同一个 IdeaService（与 UI 同一入口）；不自动写「开工对齐」、不自动收口。

## 6. Host 接线的硬要求

- `index.js`：

```js
export const name = 'dsh-idea-pool'
export const inject = ['webServer', 'connection', 'tools']
export function apply(ctx) { ... }
```

- 路由：`ctx.effect(() => ctx.webServer.register({ kind:'prefix', path:'/idea-pool', handler }), 'dsh-idea-pool routes')`。
- 工具：`ctx.effect(() => ctx.tools.register(definition), 'dsh-idea-pool tool')`。
- 每个请求都先鉴权（见 §3），`connection.requestRejection` 的返回值按 media-desk 的写法处理（返回状态码则直接拒绝）。
- 错误处理：路由最外层 try/catch，未预期异常返回 500 `{ok:false,error:err.message}`，但不要把堆栈发给浏览器。

## 7. 本机 store 要求

- 路径：`$DSH_HOME/idea-pool/state.json`（目录 700，文件 600）。
- 写：先在内存改，再 `tmp` + `rename`；首次写前保证目录存在。
- 读：每次操作前 `stat` 比对 mtime，变了就重读（CLI 将来会并行写）。
- 锁：`state.lock`，`open(..., 'wx')` 写入 `{pid, at}`；EEXIST 时若锁超过 30 秒或 pid 不存活则清理重试，最多等 3 秒，超时抛错。
- 撤销：内存栈最多 30 条 `{ label, before, after }`；撤销时若当前状态与 `after` 完全一致，直接回 `before`；不一致则尽量三方合并（数组按 `idea_no`、updates/links 按 `id` 回滚本次改动，之后别人改的保留）；合并失败则拒绝并返回可读错误。`undoable:false` 的操作不进栈。
- 备份：每天第一次写入前，若 `state.json` 存在且 `state.json.bak` 不是今天的，复制一份 `state.json.bak`（只留一份）。
- 无示例数据；首次访问生成 `{schema:1, device, next_no:1, ideas:[], meta:{updated_at}}`。

## 8. Client 约定

- 入口 `client/index.jsx`：`export const inject = ['slots']`，`export function apply(ctx)`。
- 注册：

```js
ctx.slots.inject('main', () => ctx.slots.register({ name:'main', key:'idea-pool' }, App))
ctx.effect(() => {
  let release = null
  const mount = () => { release?.(); release = ctx.slots.inject('sidebar.panellist', () =>
    ctx.slots.register({ name:'sidebar.panellist', id:'idea-pool', order:15, label: () => t('灵感池') }, PanelIcon)) }
  mount()
  const off = subscribeLang(mount)
  return () => { off(); release?.() }
}, 'dsh-idea-pool: sidebar entry')
```

- 构建：`node scripts/build.mjs` → 根目录 `client.js`，lazy CommonJS（banner/footer 见 scripts/build.mjs），react external。
- 请求：`fetch('idea-pool/api/...')`，带 `credentials:'same-origin'`；非 2xx 抛错并 toast。
- 主题：只用 `--dsw-alias-*`（可带 fallback），支持明暗；不自建全局样式覆盖宿主。
- 语言：中文原文作 key，英文查表（`client/en.js`）；默认跟随 `document.documentElement.lang`，切语言时重新注册侧栏 label（参考 media-desk `client/i18n.js`）。
- 无第三方依赖（除 react）；不 iframe；不写 document.body 之外的全局东西（toast 用页面内 fixed 元素即可）。
- v0.1 交互（按方案 §7）：顶栏 + 录入条 + 状态页签 + 列表 + 详情；宽屏两栏，窄屏下钻；撤销、设置（存储路径、模式说明、导出 JSON）、复制展开指令/复制链接、编辑、删除确认、加进展、加产出。

## 9. 验收（P0/P1）

Host：

```bash
cd ~/Desktop/dsh/dsh-idea-pool
npm test            # node --test test/*.test.mjs
node --check index.js && node --check lib/*.mjs
```

Client：

```bash
npm run build && node --check client.js
```

联调（Lead 做）：隔离 `DSH_HOME` 起 web 版，Playwright 打开带 token 的 URL，检查侧栏入口、录一条、改状态、加进展、刷新后还在、撤销；截图自检。

## 10. 非目标（本阶段）

- 云端模式、同步、导入（export 之外的迁移）、附件、多用户、权限、认领机制、移动端原生。
- 不修改现有 `ideas-api`、网站、CLI 与 preset。

## 11. v0.2 云端模式增量（2026-11-08）

v0.1 的「只做本机」作废；以下为 P2 增量，未提到的地方保持 v0.1 约定。

### 11.1 设置与模式

`settings.json`（600）新增：

```jsonc
{
  "device": "dsh-mac",
  "mode": "local",                       // local | cloud
  "cloud": {
    "base": "https://www.zhaoningyuan.com/ideas/api",
    "apiKey": ""                         // 只落盘，永不回传
  }
}
```

- `CLOUD_DEFAULT_BASE = https://www.zhaoningyuan.com/ideas/api`；base 只接受 http(s)，去尾斜杠。
- `GET /api/settings` 返回：`{ ok, settings: { device, mode, storagePath, cloud: { base, hasKey, keyHint } } }`。keyHint 为末四位；永不返回 apiKey。
- `POST /api/settings` 接受 `{ device?, mode?, cloud?: { base?, apiKey?, clearKey? } }`：
  - mode 只允许 local / cloud；
  - cloud.base 字符串，http(s)，去尾斜杠；
  - cloud.apiKey 非空字符串才更新（空串/缺省表示不改）；clearKey=true 清空；
  - 返回同上公开设置。

### 11.2 新端点

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| POST | `/api/cloud/test` | body `{ base?, apiKey? }`；用请求里的覆盖值或已存配置，GET `{base}/health`；成功 `{ ok:true, base, count, latencyMs }`；失败 502 `{ok:false,error}`。永不回显 key。 |
| POST | `/api/cloud/import-local` | 用已存云端配置拉全量（列表 + 每条详情），按 idea_no 合并进本机 store；返回 `{ ok, imported, updated, total }`。不切换模式；未配置 key 时 400。 |

### 11.3 现有端点的模式行为

- 除 settings / cloud/test / cloud/import-local 外，所有接口按 `settings.mode` 路由到 active engine（local 或 cloud）。
- `GET /api/state`：`{ ok, mode, storagePath, cloudBase, device, canUndo, counts, total, ideas }`；
  - local：storagePath=本机 state.json，cloudBase=null；
  - cloud：storagePath=null，cloudBase=settings.cloud.base，canUndo 恒 false。
- `GET /health`：`{ ok, mode, count }`，count 取 active engine。
- 云端模式下 `POST /api/undo`：409 `{ ok:false, error:"云端模式暂不支持撤销" }`。
- `GET /api/export`：导出 active engine 数据（本机同 v0.1；云端为全量列表+详情合并后的 `{schema:1,device,exported_at,ideas}`）。
- `counts` 形状：`{ pool, active, parked, done, total }`（云端列表接口已返回，直接用）。

### 11.4 CloudEngine 行为

- 基址取 settings.cloud.base，请求头 `X-API-Key`；超时 15s。
- list `GET /ideas?status=&q=&limit=&offset=`；detail `GET /ideas/{no}`；add `POST /ideas`；update 先 `GET /ideas/{no}` 取 rev，再 `PATCH /ideas/{no}` 并带 `if_rev: rev`；progress/link `POST ...` 带 `client_id`（`u_<ts>_<rand>` / `l_<ts>_<rand>`）；delete `DELETE`。
- 错误映射：
  - 401/403 → `ContractError("云端鉴权失败，请检查 API Key", 401)`
  - 409（if_rev 冲突）→ `ContractError("云端这条想法已被其他端更新，请刷新后重试", 409)`
  - 网络/超时 → `ContractError("连不上云端：<message>", 502)`
  - 其他非 2xx → `ContractError("云端接口出错（HTTP n）：<error>", 502)`
- 密钥不出现在错误文案、日志与返回值里。

### 11.5 Client 增量

- 顶栏模式徽标：本机模式 / 云端模式；云端模式下不显示撤销按钮。
- 设置对话框：
  - 运行模式切换（本机 / 云端）；说明文字随模式变化；
  - 云端配置：base URL、API key（password；已保存时占位「已保存，末四位 xxxx」，留空表示不改）、「测试连接」按钮（显示条数与延迟）、「保存」；
  - 「从云端导入到本机」按钮（调用 11.2，成功 toast 导入条数）；
  - 本机模式继续显示存储路径与导出 JSON。
- 详情「复制链接」：本机模式复制本机引用文本；云端模式复制 `https://www.zhaoningyuan.com/ideas/#IDEA-xxx`（与网站一致）。
- 云端 409/401/502 错误用 error toast 展示；409 后自动刷新当前列表/详情。

### 11.6 服务端（ideas-api）增量（向后兼容）

- `ideas` 增加 `rev integer not null default 0`；PATCH 时 `rev = rev + 1`，响应 idea 带 rev。
- PATCH 接受可选 `if_rev`（整数）：带值时 SQL 增加 `AND rev = %s`，未命中返回 409 JSON `{ ok:false, error:"version conflict", current: {...idea_out} }`。
- `idea_updates` / `idea_links` 增加可空 `client_id text`，各自建 `(idea_id, client_id)` 部分唯一索引；POST 带 client_id 时重复插入返回已存在行（200），并返回最新 `idea`。
- POST updates/links 成功后把所属 idea 的 `rev = rev + 1`、`updated_at = now()`，响应带最新 idea。
- 不带 if_rev / client_id 的旧客户端（网站、ideas.py）行为不变。
