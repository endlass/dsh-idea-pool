# 安全与数据边界

本文件说明 dsh-idea-pool 处理哪些数据、数据去哪里、如何关闭联网行为，以及如何报告安全问题。

## 支持范围

| 版本 | 支持状态 |
| --- | --- |
| 0.3.x | 接收安全报告 |
| 0.2.x 及更早 | 不再单独维护，建议先升级 |

## 本机模式（默认，推荐）

本机模式**不访问网络**，全部数据只在 DSH 的 home 目录下：

| 路径 | 内容 | 权限 |
| --- | --- | --- |
| `$DSH_HOME/idea-pool/state.json` | 想法原文、标题、摘要、一句话摘要、标签、状态、进展、产出链接、关联会话、来源设备与时间 | 600（目录 700） |
| `$DSH_HOME/idea-pool/state.json.bak` | 每天第一次写入前的备份，同样含全部内容 | 600 |
| `$DSH_HOME/idea-pool/settings.json` | 设备标识、运行模式、云端基址、**云端 API Key** | 600 |
| `$DSH_HOME/idea-pool/state.lock` | 进程写锁（pid + 时间戳），短暂存在 | 600 |

`$DSH_HOME` 默认是 `~/.dsh`。导出 JSON 只包含想法数据，不包含 API Key。删除 `state.json` 等于清空本机灵感池。

## 云端模式（可选）

只有你在 设置 → 运行模式 里主动切到「云端模式」并配置了非空基址与 API Key 后，插件才会向该后端发请求。启用后：

- **会发送**：想法原文、标题、详细摘要、一句话摘要、标签、状态、进展内容、产出的标题与 URL、来源设备标识（`source`）、时间戳，以及删除/状态变更等操作请求。
- **会接收**：你配置的后端返回的想法与计数数据。
- **鉴权**：API Key 放在 `X-API-Key` 请求头；Key 只存本机 `settings.json`（600），接口只回 `hasKey` 与末四位，日志、错误文案、导出都不含明文 Key。
- **不会发送**：本机文件系统路径、DSH 会话内容、其他插件数据、遥测或使用统计。
- 云端基址**没有默认值**，仓库不预置任何第三方后端，避免误连他人服务。

本机模式的「从云端刷新」同样是云端模式行为：它只读你配置的后端，把新内容合并进本机，**不会把本机内容写回云端**（不是双向同步）。

### 如何关闭云端 / 断开网络

1. 打开 灵感池 → 设置 → 运行模式，切回 **本机模式**（立即生效，不需要删数据）；
2. 可选：在设置里点「清除已保存的 Key」，或手动编辑/删除 `$DSH_HOME/idea-pool/settings.json` 中的 `cloud` 字段；
3. 云端模式产生的数据在远端后端上，需要按该后端的备份/删除策略处理；本机 `state.json` 不受影响。

## HTTP 与宿主鉴权

- 插件所有 HTTP 路由（`/idea-pool/*`）都先经过 DSH 的 connection 鉴权；拿不到鉴权服务时 fail closed（403）。
- 写请求额外检查 `sec-fetch-site`，存在且不是 `same-origin`/`none` 时拒绝（403）。
- JSON 请求体上限 1 MB；不把堆栈或密钥返回给浏览器。
- 使用自建 `server/` 时：默认只监听本机回环地址；对外暴露必须设置 `IDEAS_API_TOKEN` 并建议放在 TLS 反代之后，详见 [`server/README.md`](server/README.md)。

## 报告安全问题

请不要在公开 issue 里贴漏洞细节、真实数据或密钥。优先使用：

1. GitHub 仓库的 **Private vulnerability reporting / Security Advisory**（Settings → Security → Advisories）；
2. 或在 issue 中只留一句「有安全问题，请给一个私下联系方式」，维护者回联后再给细节。

报告里请附：受影响版本、复现步骤、影响面（本机数据 / 云端数据 / 密钥泄露 / 鉴权绕过等）。可公开后我们再补致谢与修复记录。

## 维护者注意

- 不要提交真实 `settings.json`、`state.json`、token、API Key 或个人主机地址；
- `compose.yaml` 里的 `IDEAS_API_TOKEN` 是示例值，部署时必须替换；
- `.gitignore` 已忽略 `node_modules/`、`dist/`、`data/`、`server/data/`、`*.tgz`。
