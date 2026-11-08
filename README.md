# dsh-idea-pool

灵感池的 DeepSeek Harness 侧边栏工作台。**v0.1 只做本机模式**：数据存在 `~/.dsh/idea-pool/`，不依赖云端、不需要账号，DSH 关掉后文件仍在。

当前状态：P0/P1 已完成（本机模式），P2 云端模式未开始。方案论证：[IDEA-026](https://www.zhaoningyuan.com/ideas/#IDEA-026)；接口契约：[CONTRACT.md](CONTRACT.md)。

## 它做什么

- 侧栏一级入口「灵感池」，常驻录入条：一句话记下，原文逐字保存；
- 状态页签（已入池 / 推进中 / 已收口 / 搁置）+ 搜索 + 列表 + 详情；
- 详情里维护原文、摘要、进展时间线、关联产出；状态一键切换；
- 复制「展开推进指令」到会话里，让 agent 按灵感池纪律接手；
- 撤销上一步；设置里查看存储路径、改设备标识、导出 JSON。

## 安装

要求 DeepSeek Harness `0.2.2-rc.1` 及以上 `0.2.x`。

本机开发安装（会以 link 方式进 profile）：

```bash
# 在 DSH 会话里用 plugin_manager：action=install_bundle, target=<本目录绝对路径>
# 或命令行（桌面版需完全退出再装，装好重开）：
dsh plugin --profile desktop add "file:$PWD"
```

安装后侧栏出现「灵感池」。卸载把 `add` 换成 `remove dsh-idea-pool`；数据不会被删。

## 数据

本机模式：`$DSH_HOME/idea-pool/state.json`（目录 700、文件 600），同目录有 `state.json.bak` 每日备份与 `state.lock`。删除 state.json 等于清空本机灵感池。

云端模式（P2）尚未实现；实现后同一套 UI 增加「云端模式」，走现有 ideas-api。

## 开发

```bash
npm install
npm test                 # Host 单元测试（node:test）
npm run build            # client/ → client.js（esbuild）
scripts/dev-sandbox.sh   # 隔离 DSH_HOME 起 web 版，不碰 ~/.dsh
npm run watch            # 边改 client/ 边构建
```

改了 `lib/`、`index.js` 需要重启 DSH；只改 `client/` 需要重新 `npm run build` 并刷新页面。

## 结构

- Host：`index.js` + `lib/`（本机 JSON store、IdeaService、`/idea-pool` 路由、`idea_pool` agent 工具）
- Client：`client/` JSX 源码 → esbuild → `client.js`
- 契约：`CONTRACT.md`（Host/Client 唯一接口约定，先改契约再改代码）

Host 不 import 任何 `@deepseek-ai/*`，只用 Node 内置模块；Client 只依赖宿主提供的 React。

## 已验证

- macOS + DSH 0.2.2-rc.1：安装进 desktop profile 后侧栏与主面板均注册成功，`idea_pool` 工具可用；
- 隔离 `DSH_HOME` 的 web 版走查：录入、列表/页签/搜索、详情、加进展、加产出、状态切换、撤销、设置、导出 JSON、中文/英文、明暗、窄屏；
- `npm test` 75 个用例通过；`client.js` 由 esbuild 构建。

## License

MIT
