/**
 * IdeaService：灵感池的唯一业务入口（facade）。
 *
 * v0.2 起按 settings.mode 把请求路由到 active engine：
 * - local → LocalEngine（state.json / 本机撤销栈）；
 * - cloud → CloudEngine（ideas-api，契约 §11.4）。
 * settings / cloud test / cloud import-local 始终留在 facade 上（§11.2 / §11.3）。
 *
 * UI 路由和 agent 工具都走这一层，因此云端模式下自动复用同一套行为。
 */
import { ContractError } from './contract.mjs'
import { CloudEngine } from './cloud-engine.mjs'
import { importCloudToLocal } from './import-local.mjs'
import { LocalEngine } from './local-engine.mjs'
import { Settings, publicSettings } from './settings.mjs'
import { LocalStore, ideaPoolRoot } from './store-local.mjs'

function normalizeMode(value) {
  return value === 'cloud' ? 'cloud' : 'local'
}

export class IdeaService {
  /**
   * @param {object} [options]
   * @param {string} [options.root] - 数据目录（默认 $DSH_HOME/idea-pool）。
   * @param {LocalStore} [options.store] - 注入存储（测试用）。
   * @param {Settings} [options.settings] - 注入设置（测试用）。
   * @param {string} [options.device] - 默认设备名。
   * @param {typeof fetch} [options.fetchImpl] - 云端 fetch 注入（测试用）。
   * @param {number} [options.cloudTimeoutMs] - 云端超时注入（测试用）。
   * @param {() => Date} [options.now] - 云端时钟注入（测试用）。
   */
  constructor({ root, store, settings, device, fetchImpl, cloudTimeoutMs, now } = {}) {
    this.settings = settings ?? new Settings({ root: root ?? ideaPoolRoot(), device })
    this.store = store ?? new LocalStore({ root: root ?? this.settings.root, device: device ?? this.settings.device })
    this.local = new LocalEngine({ store: this.store, settings: this.settings })
    this.cloud = new CloudEngine({ settings: this.settings, fetchImpl, timeoutMs: cloudTimeoutMs, now })
  }

  /** 当前数据目录（本机 state/settings 都在这里）。 */
  get root() {
    return this.store.root
  }

  get file() {
    return this.store.file
  }

  /** 当前运行模式（读 settings.json，坏值回 local）。 */
  async currentMode() {
    return normalizeMode((await this.settings.read()).mode)
  }

  /** 当前模式对应的引擎。 */
  async activeEngine() {
    return (await this.currentMode()) === 'cloud' ? this.cloud : this.local
  }

  /** GET /health：{ ok, mode, count }，count 取 active engine。 */
  async health() {
    const mode = await this.currentMode()
    const engine = mode === 'cloud' ? this.cloud : this.local
    const data = await engine.health()
    return { ok: true, mode, count: Number.isInteger(data?.count) ? data.count : 0 }
  }

  /** GET /api/state：local/cloud 同形（契约 §11.3）。 */
  async overview() {
    const settings = await this.settings.read()
    const mode = normalizeMode(settings.mode)
    if (mode === 'cloud') {
      const data = await this.cloud.overview()
      return {
        ok: true,
        mode: 'cloud',
        storagePath: null,
        cloudBase: settings.cloud.base,
        device: settings.device,
        canUndo: false,
        counts: data.counts,
        total: data.total,
        ideas: data.ideas,
      }
    }
    const data = await this.local.overview()
    return { ...data, mode: 'local', cloudBase: null }
  }

  /** GET /api/ideas */
  async list(query) {
    return (await this.activeEngine()).list(query)
  }

  /** GET /api/ideas/{idea_no} */
  async get(ideaNo) {
    return (await this.activeEngine()).get(ideaNo)
  }

  /** POST /api/ideas */
  async add(body) {
    return (await this.activeEngine()).add(body)
  }

  /** PATCH /api/ideas/{idea_no} */
  async update(ideaNo, body) {
    return (await this.activeEngine()).update(ideaNo, body)
  }

  /** POST /api/ideas/{idea_no}/updates */
  async progress(ideaNo, body) {
    return (await this.activeEngine()).progress(ideaNo, body)
  }

  /** POST /api/ideas/{idea_no}/links */
  async link(ideaNo, body) {
    return (await this.activeEngine()).link(ideaNo, body)
  }

  /** DELETE /api/ideas/{idea_no} */
  async remove(ideaNo) {
    return (await this.activeEngine()).remove(ideaNo)
  }

  /** POST /api/undo：云端模式 409（契约 §11.3）；本机撤销后 state 与 /api/state 同形。 */
  async undo() {
    if ((await this.currentMode()) === 'cloud') {
      throw new ContractError('云端模式暂不支持撤销', 409)
    }
    const label = await this.local.undoLast()
    if (label === null) throw new ContractError('没有可以撤销的操作', 409)
    return { ok: true, label, state: await this.overview() }
  }

  /** GET /api/settings：公开设置（无 apiKey），storagePath 只在 local 模式有值。 */
  async settingsPublic() {
    const settings = await this.settings.read()
    const mode = normalizeMode(settings.mode)
    return {
      ok: true,
      settings: {
        ...publicSettings(settings),
        storagePath: mode === 'local' ? this.store.file : null,
      },
    }
  }

  /** POST /api/settings：校验由 Settings.update 统一做；device 变化同步本机 state。 */
  async updateSettings(body) {
    const before = await this.settings.read()
    const next = await this.settings.update(body)
    if (next.device !== before.device) {
      const state = await this.store.read()
      if (state.device !== next.device) {
        await this.store.mutate(
          '修改设备名',
          (draft) => {
            draft.device = next.device
            draft.meta.updated_at = this.store.nowIso()
          },
          { undoable: false },
        )
      }
    }
    return this.settingsPublic()
  }

  /** POST /api/cloud/test：用覆盖值或已存配置测云端连通性（失败统一 502）。 */
  async cloudTest(body) {
    return this.cloud.testConnection(body)
  }

  /** POST /api/cloud/import-local：云端全量 → 本机 store，不切换模式。 */
  async importLocal() {
    return importCloudToLocal({ cloud: this.cloud, local: this.local })
  }

  /** GET /api/export：导出 active engine 数据。 */
  async exportData() {
    return (await this.activeEngine()).exportData()
  }
}
