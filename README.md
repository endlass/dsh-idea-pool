<p align="center">
  <img src="docs/assets/panel-zh.png" alt="灵感池：DSH 侧栏里的灵感工作台" width="100%">
</p>

<h1 align="center">灵感池 · Idea Pool</h1>

<p align="center"><b>DeepSeek Harness 的灵感池工作台：侧栏随手记，本机自闭环，云端可接力。</b></p>

<p align="center">
  <img alt="DSH 0.2.x" src="https://img.shields.io/badge/DeepSeek%20Harness-0.2.x-111?style=flat-square">
  <a href="LICENSE"><img alt="MIT" src="https://img.shields.io/badge/MIT-open%20source-111?style=flat-square"></a>
  <img alt="v0.2.1" src="https://img.shields.io/badge/version-0.2.1-111?style=flat-square">
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
| 适合 | 单机自用、隐私优先 | 多机接力、手机查看 |

## 能力

- **随手记**：原文逐字保存，⌘/Ctrl+Enter 入池；标题可后补（缺省取原文前 40 字）。
- **看得全**：状态页签 + 搜索；列表卡片显示状态、编号、摘要、标签、进展/产出数和更新时间。
- **推进闭环**：详情里维护进展（append-only 时间线）、关联产出、状态；一键复制「展开推进指令」，让 agent 按灵感池纪律接手。
- **可回退**：本机模式 30 步撤销（三方合并，不抹掉之后的改动）。
- **agent 工具**：会话里直接 `idea_pool`（add/list/get/progress/link/status/export），与界面共用同一个服务入口。
- **迁移**：一键「从云端导入到本机」，或 `scripts/import-cloud.mjs` 单向迁移。
- 中英双语、明暗主题、宽屏两栏 / 窄屏下钻。

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
index.js + lib/          Host：本机 store、双引擎（Local/Cloud）、/idea-pool 路由、idea_pool 工具
client/ → client.js      Client：侧栏页面（React，esbuild 打包）
server/                  可自建的 SQLite ideas-api v2 + Docker compose
docs/                    截图与 ideas-api v2 迁移说明
scripts/                 构建、隔离沙盒、云端→本机导入
test/                    node:test（112 个用例）
CONTRACT.md              Host/Client 唯一接口约定（v0.2）
CHANGELOG.md             版本记录
```

## 已知限制

- 云端模式暂不支持撤销；撤销入口在云端模式隐藏。
- 云端列表首屏最多 500 条；更多数据需要分页（后续版本）。
- 双向同步未做：本机导入云端是单向合并，本机之后的新内容不会自动回写云端。
- Electron 内导出 JSON 的落盘行为未做真机确认。
- 只支持单用户；多人协作与权限体系不在本版范围。

## License

MIT
