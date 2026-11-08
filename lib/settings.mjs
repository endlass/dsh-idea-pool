/**
 * 灵感池设置：$DSH_HOME/idea-pool/settings.json。
 *
 * v0.2 起支持运行模式（local / cloud）与云端配置：
 *   { device, mode, cloud: { base, apiKey } }
 * 文件权限 600；apiKey 只落盘、永不回传，publicSettings() 只给 hasKey 与末四位 keyHint。
 * 契约见 CONTRACT.md §11.1。
 */
import { chmod, mkdir, readFile, rename, stat, unlink, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import {
  CLOUD_DEFAULT_BASE,
  MAX_API_KEY_LENGTH,
  MAX_CLOUD_BASE_LENGTH,
  MAX_DEVICE_LENGTH,
  MODES,
  defaultDevice,
  isPlainObject,
  normalizeCloudBase,
  normalizeSettingsPatch,
} from './contract.mjs'

export { CLOUD_DEFAULT_BASE }

/** 默认设置（首次访问、文件缺失、旧版本迁移时用）。 */
export function defaultSettings(device = defaultDevice()) {
  return {
    device,
    mode: 'local',
    cloud: { base: CLOUD_DEFAULT_BASE, apiKey: '' },
  }
}

/** 密钥末四位提示；没有密钥时为空串。 */
export function cloudKeyHint(apiKey) {
  return typeof apiKey === 'string' && apiKey.length > 0 ? apiKey.slice(-4) : ''
}

/**
 * settings.json 读写。写入走 tmp + rename，权限 600；读时顺手把非 600 的文件修回来。
 */
export class Settings {
  /**
   * @param {object} options
   * @param {string} options.root - 数据目录（与 state.json 同一个 idea-pool 目录）。
   * @param {string} [options.device] - 文件缺失时的默认设备名。
   */
  constructor({ root, device = defaultDevice() } = {}) {
    this.root = root
    this.file = join(root, 'settings.json')
    this.device = device
    this.value = null
  }

  async ensureRoot() {
    await mkdir(this.root, { recursive: true, mode: 0o700 })
    await chmod(this.root, 0o700).catch(() => {})
  }

  /**
   * 静默清洗：坏字段回默认值；v0.1 的 cloud.hasKey/空 base 迁移成 v0.2 形态。
   * @param {unknown} saved
   */
  sanitize(saved) {
    const next = defaultSettings(this.device)
    if (!isPlainObject(saved)) return next
    if (typeof saved.device === 'string' && saved.device.trim()) {
      next.device = saved.device.trim().slice(0, MAX_DEVICE_LENGTH)
    }
    if (MODES.includes(saved.mode)) next.mode = saved.mode
    if (isPlainObject(saved.cloud)) {
      const base = normalizeCloudBase(saved.cloud.base)
      if (base) next.cloud.base = base
      if (typeof saved.cloud.apiKey === 'string') {
        next.cloud.apiKey = saved.cloud.apiKey.trim().slice(0, MAX_API_KEY_LENGTH)
      }
    }
    return next
  }

  /** 每次读文件：桌面版和 Web 版可能同时运行。 */
  async read() {
    let saved = null
    try {
      saved = JSON.parse(await readFile(this.file, 'utf8'))
    } catch (err) {
      if (err.code !== 'ENOENT' && !(err instanceof SyntaxError)) throw err
      saved = null
    }
    this.value = this.sanitize(saved)
    // 存在时也保证 600
    try {
      const info = await stat(this.file)
      if ((info.mode & 0o777) !== 0o600) await chmod(this.file, 0o600).catch(() => {})
    } catch {
      // 文件不存在：读默认值即可
    }
    return this.value
  }

  /**
   * 合并更新：{ device?, mode?, cloud?: { base?, apiKey?, clearKey? } }。
   * 校验失败抛 400；写入 600；返回内部设置（含 apiKey，调用方不得回传）。
   */
  async update(patch) {
    const normalized = normalizeSettingsPatch(patch)
    const current = await this.read()
    const next = {
      device: current.device,
      mode: current.mode,
      cloud: { base: current.cloud.base, apiKey: current.cloud.apiKey },
    }
    if (normalized.device !== undefined) next.device = normalized.device
    if (normalized.mode !== undefined) next.mode = normalized.mode
    if (normalized.cloud !== undefined) {
      if (normalized.cloud.base !== undefined) next.cloud.base = normalized.cloud.base
      if (normalized.cloud.apiKey !== undefined) next.cloud.apiKey = normalized.cloud.apiKey
      // clearKey 优先于同一次请求里的 apiKey
      if (normalized.cloud.clearKey === true) next.cloud.apiKey = ''
    }
    if (typeof next.cloud.base !== 'string' || next.cloud.base.length > MAX_CLOUD_BASE_LENGTH) {
      next.cloud.base = CLOUD_DEFAULT_BASE
    }
    await this.ensureRoot()
    const tmp = `${this.file}.${process.pid}.tmp`
    try {
      await writeFile(tmp, `${JSON.stringify(next, null, 2)}\n`, { mode: 0o600 })
      await chmod(tmp, 0o600)
      await rename(tmp, this.file)
    } catch (err) {
      await unlink(tmp).catch(() => {})
      throw err
    }
    await chmod(this.file, 0o600).catch(() => {})
    this.value = next
    return next
  }
}

/**
 * 发给浏览器/工具的公开设置：没有 apiKey，只有 hasKey 与 keyHint（契约 §11.1）。
 * storagePath 由 IdeaService 按当前模式补上（local 才有）。
 */
export function publicSettings(settings) {
  const value = settings ?? defaultSettings()
  const apiKey = typeof value.cloud?.apiKey === 'string' ? value.cloud.apiKey : ''
  const base = normalizeCloudBase(value.cloud?.base) ?? CLOUD_DEFAULT_BASE
  return {
    device: value.device,
    mode: MODES.includes(value.mode) ? value.mode : 'local',
    cloud: {
      base,
      hasKey: apiKey.length > 0,
      keyHint: cloudKeyHint(apiKey),
    },
  }
}
