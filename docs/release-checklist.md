# 发布清单（维护者用）

面向仓库维护者；普通安装见 [`INSTALL.md`](../INSTALL.md) 或 [`README.md`](../README.md)。

## 1. 版本与变更

- [ ] 更新 `package.json` 的 `version`（语义化版本）
- [ ] 更新 `CHANGELOG.md`（新增 / 变更 / 修复 / 契约）
- [ ] 契约有变化时同步更新 `CONTRACT.md`，并确认 Host / Client 两边实现一致

## 2. 本地验证

```bash
npm ci
npm test              # node:test，当前 126 个用例
npm run build         # client/ → client.js（esbuild）
npm pack --dry-run    # 检查清单与体积；prepack 会自动构建
```

- [ ] `git diff --exit-code -- client.js` 为空（构建产物已提交且可复现）
- [ ] 用 `scripts/dev-sandbox.sh` 隔离 `DSH_HOME` 起 web 版，走查一遍本机模式（录入 / 详情 / 进展 / 撤销 / 设置 / 导出）
- [ ] 云端模式：自建 `server/` 或自己的 ideas-api 上跑测试连接、增删改、409 冲突
- [ ] 本机模式零配置可用（`cloud.base` 默认空，不依赖任何第三方地址）

## 3. 提交与标签

```bash
git add -A
git commit -m "chore: release vX.Y.Z"
git tag vX.Y.Z
```

- [ ] 推送仓库（`git push <remote> main --tags`）
- [ ] 确认仓库内没有个人路径、私有主机、密钥、token、飞书 appId 等敏感信息

## 4. npm 发布（可选，需维护者账号）

```bash
npm login
npm publish --access public   # package.json 已带 publishConfig.access=public
```

- [ ] 发布后从 npm 安装到干净 `DSH_HOME` 验证一次：
      `dsh plugin --profile desktop add dsh-idea-pool`
- [ ] 确认 npm 页面 README / LICENSE / 截图渲染正常

## 5. GitHub Release（可选）

- [ ] 用 `npm pack` 产出的 `.tgz` 作为 Release 附件
- [ ] Release notes 引用 `CHANGELOG.md` 对应段落

## 6. 不要提交的东西

`node_modules/`、`*.tgz`、`dist/`、`data/`、`server/data/`、`.DS_Store`、任何真实 token / API Key / 个人域名与主机地址。
