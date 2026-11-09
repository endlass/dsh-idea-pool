# 安装 dsh-idea-pool

「灵感池」是 DeepSeek Harness（DSH）的侧栏插件。本机模式开箱即用、零配置；云端模式需要你自己准备一个 ideas-api v2 兼容后端（可选，仓库自带轻量自建版）。

## 环境要求

| 项 | 要求 |
| --- | --- |
| DeepSeek Harness | `0.2.2-rc.1` 及以上的 `0.2.x`（插件 `engines.dsh` 限制 `<0.3.0`） |
| 运行环境 | DSH 桌面版或 web 版均可（插件装在某个 profile 里） |
| Node.js | 只有从源码开发/构建时需要（`>=20`）；安装现成插件不需要 |

## 方式一：从 npm 安装

在 DSH 里打开「插件」页 → 添加插件 → 输入包名 `dsh-idea-pool@0.3.1`。

或命令行（把 `desktop` 换成你实际使用的 profile）：

```bash
dsh plugin --profile desktop add dsh-idea-pool@0.3.1
```

## 方式二：从 tgz / 本地源码目录安装

离线包或自己打包时用 `file:` 协议安装。桌面版请先完全退出（⌘Q），装完再打开。

```bash
# npm pack 产出的 tgz（在仓库根目录执行 npm pack 得到）
dsh plugin --profile desktop add "file:/绝对路径/dsh-idea-pool-0.3.1.tgz"

# 或直接从源码目录安装（开发时常用）
dsh plugin --profile desktop add "file:/绝对路径/dsh-idea-pool"
```

在 DSH 会话里也可以让 agent 调用插件管理工具：`action=install_bundle`，`target` 填上面的绝对路径。

> 只改 `client/` 时重新 `npm run build` 并刷新页面；改 `lib/`、`index.js` 后需要重启 DSH（或 remove 再 add）。

## 安装后验证

1. 重开 DSH，侧栏出现「灵感池」入口；
2. 打开面板，输入一句话，⌘/Ctrl+Enter 入池；
3. 设置里应看到「存储路径」，指向 `$DSH_HOME/idea-pool/state.json`（默认 `~/.dsh/idea-pool/state.json`）。

本机模式不需要填任何云端地址或 API Key。

## 数据位置

| 文件 | 说明 |
| --- | --- |
| `$DSH_HOME/idea-pool/state.json` | 本机灵感池数据（目录 700、文件 600） |
| `$DSH_HOME/idea-pool/state.json.bak` | 每天第一次写入前的备份（只留一份） |
| `$DSH_HOME/idea-pool/settings.json` | 设备标识、运行模式、云端基址与 API Key（600） |

`DSH_HOME` 默认是 `~/.dsh`。删除 `state.json` 等于清空本机灵感池。详见 [`README.md`](README.md) 与 [`SECURITY.md`](SECURITY.md)。

## 云端模式（可选）

需要一个 ideas-api v2 兼容后端（`rev` / `if_rev` / `client_id`）。没有现成后端时，用仓库自带的轻量版：

```bash
# 在仓库根目录；先把 compose.yaml 里的 IDEAS_API_TOKEN 换成自己的随机长串
docker compose up -d
```

然后在 灵感池 → 设置 → 运行模式「云端」：

- 云端地址：`http://<这台机器的地址>:8794/api`
- API Key：`compose.yaml` 里设置的同一个 token
- 点「测试连接」确认条数与延迟，再保存

没有 Docker 时也可以直接跑 `python3 server/ideas_api.py`，见 [`server/README.md`](server/README.md)。云端模式会把你写的想法原文、摘要、进展、产出链接等发送给你配置的后端；不需要云端时保持默认的本机模式即可。

## 卸载

```bash
dsh plugin --profile desktop remove dsh-idea-pool
```

卸载不会删除数据：本机数据仍在 `$DSH_HOME/idea-pool/`，需要时手动删除该目录。
