# 发布清单（v0.2.1）

## 已完成

- [x] 版本 0.2.1；CHANGELOG / README / INSTALL / 截图（`docs/assets/`）
- [x] 兼容审计 PASS（`docs/compat-audit-20261108.md`）
- [x] `npm test` 113 用例通过；`npm run build` 通过
- [x] `npm pack` 产物 `dist/dsh-idea-pool-0.2.1.tgz`；在干净 `DSH_HOME` 用 tgz 安装并走通入池
- [x] 自建后端 `server/`：21 个 unittest 通过；与插件 CloudEngine 互通
- [x] 自建 Git：`git@www.zhaoningyuan.com:repos/dsh-idea-pool.git`（main + tags）
- [x] 发布附件：`dist/dsh-idea-pool-0.2.1-with-install-guide.zip`

## 待人工完成（需要账号/环境）

1. **创建 GitHub 仓库并推送**（当前 SSH 已认证为 `endlass`，但没有创建仓库的 API 权限）：
   ```bash
   # 先在 GitHub 网页创建空仓库 endlass/dsh-idea-pool（不要初始化 README）
   cd ~/Desktop/dsh/dsh-idea-pool
   git remote add github git@github.com:endlass/dsh-idea-pool.git
   git push github main --tags
   ```
2. **发布 npm**（本机未登录 npm；包名 `dsh-idea-pool` 当前未被占用）：
   ```bash
   npm login
   npm publish --access public
   ```
3. **GitHub Release**：用 `dist/dsh-idea-pool-0.2.1.tgz` 与 `dist/dsh-idea-pool-0.2.1-with-install-guide.zip` 建 v0.2.1 Release。
4. **可选：Docker 真机验证**（本机无 Docker）：
   ```bash
   docker compose config
   docker compose up -d --build
   curl -H "X-API-Key: <你在 compose.yaml 里设的 token>" http://127.0.0.1:8794/api/health
   ```
   若 Linux bind mount 权限报错：`mkdir -p data && sudo chown -R 10001:10001 data`。
5. **可选**：GitHub 仓库建好后，把 README 里的相对图片换成 raw 绝对地址（npm 页面渲染更稳）；
   或在 README 顶部加 GitHub 链接。
