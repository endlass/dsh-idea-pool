# 兼容审计记录（DSH 0.2.2-rc.1）

发布自研插件前的兼容自检，方法来自 `dsh-plugin-upgrade-audit` 技能（audit.py + E0–E3 活体验收）。记录随版本演进，最新一次结论以本文件为准。

## E0 静态审计

- DSH：0.2.2-rc.1（桌面版 asar 实读；官方包 582 个）
- 插件：dsh-idea-pool，`engines.dsh = >=0.2.2-rc.1 <0.3.0`
- 结论：**PASS**（BLOCK 0 / WARN 0 / PASS 13 / INFO 2）
- 检查面：gate（engines）、bundle 可解析、profile patch 目标 id/name、官方包引用、client 模块、config。
- 两个 INFO 为环境级提示（未收录的其他插件），不影响本插件。

## E1 加载

- `cordis Tool.listTools` 出现 `idea_pool`（本机或云端模式，跟随设置）。
- `cordis Slots`：`sidebar.panellist` 有 `idea-pool`（order 15）、`main` 有 key `idea-pool`。
- 从打包 tgz 在干净 `DSH_HOME` 安装后，侧栏入口正常出现、面板可打开。

## E2 可调用

- 本机模式：会话内 `idea_pool list/get` 返回数据；`GET /idea-pool/api/state` 经 connection 鉴权返回 200。
- 云端模式：临时切换设置后同一工具返回云端账本数据；云端 CRUD（add/update/progress/link/delete）走通。
- 从 tgz 干净安装后：入池成功，`state.json` 落盘，无 console/网络错误。

## E3 交互路径

隔离 `DSH_HOME` 的 web 版 + Playwright 走查（同一份 `client.js`）：

- 本机：录入 → 列表/页签/搜索 → 详情 → 进展 → 产出 → 状态切换 → 撤销 → 设置 → 导出 JSON → 删除 → 中英切换 → 明暗 → 窄屏。
- 云端：设置切云端 → 测试连接 → 列表/详情 → 云端新建/删除 → 409 冲突映射 → 从云端导入本机 → 切回本机。
- 设置打磨：清除已保存 Key（确认/取消）→ 导入按钮禁用态 → 错误 Key 仅内联提示。
- 服务端：ideas-api v2 上 `rev / if_rev / client_id` 冒烟通过；自建 `server/` 的 unittest 通过，且与插件 CloudEngine 真实互通。

## 未验证项

- Docker 未在本机安装：`compose.yaml` 只做了 YAML 结构校验与 Dockerfile 静态核对，未做 `docker compose build/up` 真机验证。
- Electron webview 内导出 JSON 的落盘行为未做真机点击验证。

## 复跑方式

```bash
npm ci
npm test
npm run build
npm pack --dry-run
```

CI（`.github/workflows/ci.yml`）对 Node 22 / 24 跑同一组命令；升级 DSH 后再按 `dsh-plugin-upgrade-audit` 技能跑一遍 E0–E3。
