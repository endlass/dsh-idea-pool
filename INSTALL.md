# 安装 dsh-idea-pool

要求：DeepSeek Harness `0.2.2-rc.1` 及以上的 `0.2.x`；桌面版或 web 版均可。

## 方式一：插件页安装（发布后）

打开 DSH → 插件 → 添加插件，输入包名 `dsh-idea-pool`。

或命令行：

```bash
dsh plugin --profile desktop add dsh-idea-pool
```

## 方式二：从 tgz 离线安装

1. 下载 `dsh-idea-pool-0.2.1.tgz`；
2. 桌面版先完全退出（⌘Q），再执行：

```bash
dsh plugin --profile desktop add "file:/绝对路径/dsh-idea-pool-0.2.1.tgz"
```

3. 重新打开 DSH，侧栏出现「灵感池」。

## 方式三：从源码目录安装（开发用）

```bash
dsh plugin --profile desktop add "file:/绝对路径/dsh-idea-pool"
```

改 `lib/` 后需要重启 DSH（或先 `remove` 再 `add`）；只改 `client/` 时重新 `npm run build` 并刷新页面即可。

## 卸载

```bash
dsh plugin --profile desktop remove dsh-idea-pool
```

数据不会被删除：本机模式在 `~/.dsh/idea-pool/`。

## 云端模式

需要先有 ideas-api v2（自带 `rev`/`if_rev`/`client_id`）。没有的话可以用仓库里的 `server/` 一条命令自建：

```bash
# 在仓库根目录
# 先编辑 compose.yaml 里的 IDEAS_API_TOKEN（改成自己的随机长串）
docker compose up -d
```

然后 DSH 灵感池 → 设置 → 云端模式，基址填 `http://你的主机:8794/api`，填 API Key（即 `IDEAS_API_TOKEN`），测试连接后保存。
