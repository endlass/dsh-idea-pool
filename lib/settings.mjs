/**
 * 灵感池设置：$DSH_HOME/idea-pool/settings.json。
 *
 * v0.1 只有本机模式：mode 恒为 local，cloud 只是占位，不读密钥。
 * 文件权限 600；publicSettings() 永远不返回密钥，只给 hasKey 布尔。
 */
import { chmod, mkdir, readFile, rename, stat, unlink, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { MAX_DEVICE_LENGTH, defaultDevice, isPlainObject, normalizeSettingsPatch } from './contract.mjs'

const MAX_CLOUD_BASE_LENGTH = 500

/** 默认设置（首次访问、文件缺失时用）。 */
export function defaultSettings(device = defaultDevice()) {
  return {
    device,
    mode: 'local',
    cloud: { base: '', hasKey: false },
  }
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

  /** 静默清洗：坏字段回默认值，mode 永远回到 local。 */
  sanitize(saved) {
    const next = defaultSettings(this.device)
    if (!isPlainObject(saved)) return next
    if (typeof saved.device === 'string' && saved.device.trim()) {
      next.device = saved.device.trim().slice(0, MAX_DEVICE_LENGTH)
    }
    if (isPlainObject(saved.cloud)) {
      if (typeof saved.cloud.base === 'string') next.cloud.base = saved.cloud.base.trim().slice(0, MAX_CLOUD_BASE_LENGTH)
      next.cloud.hasKey = saved.cloud.hasKey === true
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

  /** v0.1 只接受 { device? }；其余字段静默丢弃。 */
  async update(patch) {
    const normalized = normalizeSettingsPatch(patch)
    const current = await this.read()
    const next = {
      ...current,
      ...(normalized.device !== undefined ? { device: normalized.device } : {}),
      mode: 'local',
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

/** 发给浏览器/工具的参数：只有设备名、模式、云端占位；没有密钥。 */
export function publicSettings(settings) {
  const value = settings ?? defaultSettings()
  return {
    device: value.device,
    mode: 'local',
    cloud: {
      base: typeof value.cloud?.base === 'string' ? value.cloud.base : '',
      hasKey: value.cloud?.hasKey === true,
    },
  }
}
