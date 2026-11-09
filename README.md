<p align="center">
  <img src="docs/assets/panel-zh.png" alt="灵感池：DSH 侧栏里的灵感工作台" width="100%">
</p>

<h1 align="center">灵感池 · Idea Pool</h1>

<p align="center"><b>DeepSeek Harness 的灵感池工作台：侧栏随手记，本机自闭环，云端可接力。</b></p>

<p align="center">
  <img alt="DSH 0.2.x" src="https://img.shields.io/badge/DeepSeek%20Harness-0.2.x-111?style=flat-square">
  <a href="LICENSE"><img alt="MIT" src="https://img.shields.io/badge/MIT-open%20source-111?style=flat-square"></a>
  <img alt="v0.3.1" src="https://img.shields.io/badge/version-0.3.1-111?style=flat-square">
</p>

## 它是什么

一个装在 DSH 侧栏里的页面：打开是灵感列表，顶上一句话就能记下，点开一条能看原文、摘要、进展时间线、关联产出；状态在「已入池 / 推进中 / 已收口 / 搁置」之间切换。

两种存储模式：

| | 本机模式（默认） | 云端模式 |
| --- | --- | --- |
| 数据在哪 | `~/.dsh/idea-pool/state.json` | 你自己的 ideas-api |
| 离线可用 | 是 | 否 |
| 多设备共用 | 否 | 是 |
| 网站可见 | 否 | 是（同一账本） |
| 与云端差异 | 面板可见，可一键增量刷新（单向） | 数据即云端 |
| 适合 | 单机自用、隐私优先 | 多机接力、手机查看 |

## 能力

- **随手记**：原文逐字保存，⌘/Ctrl+Enter 入池；标题可后补（缺省取原文前 40 字）；可填一句话摘要，详情里再展开详细说明。
- **看得全**：列表 + 梳理两种视图；梳理按「待决定 / 该推进了 / 正在推进」分桶，并支持随机捞一条；列表卡片显示状态、编号、摘要、标签、进展/产出数和更新时间。
- **推进闭环**：详情里维护进展（append-only 时间线）、关联产出、状态；可一键推进（打开新会话预填推进提示词；新会话唯一时自动关联），也可把 DSH 会话绑定到想法上跳转/追溯，或复制指令交给 agent。
- **可回退**：本机模式 30 步撤销（三方合并，不抹掉之后的改动）。
- **agent 工具**：会话里直接 `idea_pool`（add/list/get/progress/link/status/export），与界面共用同一个服务入口。
- **看得见落后多少**：本机模式顶部常驻云端连续性状态条——云端可达性、上次刷新时间与差异摘要（云端多出的想法 / 进展 / 产出）；一键「从云端增量刷新」把新内容并进本机（按编号合并、进展/产出按 id 去重、本机独有内容保留），刷新后差异归零、可撤销。
- **迁移**：一键「从云端导入到本机」，或 `scripts/import-cloud.mjs` 单向迁移。
- 中英双语、明暗主题、宽屏两栏 / 窄屏下钻。

## 梳理视图

<img src="docs/assets/review-zh.png" alt="灵感池梳理视图：按待决定、该推进了、正在推进分桶" width="100%">

不用逐条翻长列表：待决定（已入池未开始）、该推进了（超过 14 天没更新，按最久未动排序）、正在推进（最近 14 天有更新）各自成组；已收口/搁置折叠。每行只留一句话摘要和最近状态，点一下进详情。

## 本机账本的云端连续性

<img src="docs/assets/continuity-zh.png" alt="灵感池本机模式：顶部状态条显示云端有新内容（+19 条进展、+6 个产出），可一键从云端刷新" width="100%">

本机模式的数据是本机快照，可能落后云端。面板顶部常驻一条状态条：云端是否可达、上次刷新时间、本机落后多少（云端多出的想法 / 进展 / 产出）；点「从云端刷新」增量合并——按编号合并、进展/产出按 id 去重、本机独有内容保留，刷新后差异归零，且这一步在本机可撤销。**单向**：云端新内容会进本机，本机的新内容不会回写云端；刷新只读云端，不写云端数据。

## 安装

要求 DeepSeek Harness `0.2.2-rc.1` 及以上 `0.2.x`。

发布版（待发布后可用）：

```bash
dsh plugin --profile desktop add dsh-idea-pool
```

从源码 / 本地目录安装：

```bash
# 在 DSH 会话里用 plugin_manager：action=install_bundle, target=<本目录绝对路径>
# 或命令行（桌面版需完全退出再装，装好重开）：
dsh plugin --profile desktop add "file:$PWD"
```

安装后侧栏出现「灵感池」。卸载把 `add` 换成 `remove dsh-idea-pool`；数据不会被删。

## 本机模式

数据在 `$DSH_HOME/idea-pool/state.json`（目录 700、文件 600），同目录有 `state.json.bak` 每日备份与 `state.lock`。删除 `state.json` 等于清空本机灵感池。

设置里可以看存储路径、改设备标识（写进 `source` 字段，跨机接力时定位来源）、导出全部 JSON。

本机账本可能是较早的导入快照：面板顶部会显示它落后云端多少（云端可达性、上次刷新时间、差异摘要），点「从云端刷新」增量合并。**这是单向的**——云端新内容会进本机，本机的新内容不会回写云端（不是双向同步）；有变化时可在本机撤销。

## 云端模式

![云端配置](docs/assets/settings-cloud-zh.png)

1. 设置 → 运行模式 → 云端模式；
2. 填云端 ideas-api 基址（默认 `https://www.zhaoningyuan.com/ideas/api`）和 API Key（只存本机 `settings.json`，600，不回传浏览器）；
3. 点「测试连接」确认条数与延迟，保存。

之后列表、详情、进展、产出、状态都在云端账本上操作，网站 `/ideas/` 同步可见。云端写入用 `rev`/`if_rev` 乐观锁：别的端先改过会返回 409，界面提示刷新后重试；云端模式暂不支持撤销。

**自建云端**有两种：
- 沿用现有 ideas-api v2（Python + PostgreSQL，见 `docs/ideas-api-v2.md`）；
- 用本仓自带的轻量版：`server/` 目录，SQLite 单文件 + Docker compose 一条命令，见 [`server/README.md`](server/README.md)。

## 数据与安全

- 云密钥只存本机 `settings.json`（600），接口只回 `hasKey` 与末四位；日志、错误、导出都不含密钥。
- 所有 HTTP 路由都过 DSH 的 `connection` 鉴权；写请求再查 `sec-fetch-site`。
- 本机文件 600；导出 JSON 不含密钥。
- 不引入账号体系，不做遥测。

## 开发

```bash
npm install
npm test                 # Host 单元测试（node:test）
npm run build            # client/ → client.js（esbuild）
scripts/dev-sandbox.sh   # 隔离 DSH_HOME 起 web 版，不碰 ~/.dsh
npm run watch            # 边改 client/ 边构建
```

改了 `lib/`、`index.js` 需要重启 DSH（或 remove+install 让 Loader 重新加载）；只改 `client/` 需要重新 `npm run build` 并刷新页面。

## 结构

```
index.js + lib/          Host：本机 store、双引擎（Local/Cloud）、双模连续性、/idea-pool 路由、idea_pool 工具
client/ → client.js      Client：侧栏页面（React，esbuild 打包）
server/                  可自建的 SQLite ideas-api v2 + Docker compose
docs/                    截图与 ideas-api v2 迁移说明
scripts/                 构建、隔离沙盒、云端→本机导入
test/                    node:test（126 个用例）
CONTRACT.md              Host/Client 唯一接口约定（v0.3.1）
CHANGELOG.md             版本记录
```

## 已知限制

- 云端模式暂不支持撤销；撤销入口在云端模式隐藏。
- 云端列表首屏最多 500 条；更多数据需要分页（后续版本）。
- 双向同步未做：本机模式的「从云端增量刷新」是单向合并（云端 → 本机），本机之后的新内容不会自动回写云端；面板与设置里都标明了这条边界。
- Electron 内导出 JSON 的落盘行为未做真机确认。
- 只支持单用户；多人协作与权限体系不在本版范围。

## License

MIT
