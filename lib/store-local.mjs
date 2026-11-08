/**
 * 本机存储：$DSH_HOME/idea-pool/state.json。
 *
 * 负责落盘的全部脏活：目录/文件权限、原子写、进程间写锁、mtime 重读、
 * 每日备份、撤销栈（三方合并式，最多 30 条）。业务逻辑不在这里。
 * 只 import Node 内置模块；DSH 只通过 index.js 调进来。
 */
import { chmod, copyFile, mkdir, open, readFile, rename, stat, unlink, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { ContractError, blankState, defaultDevice, normalizeState } from './contract.mjs'

/** 撤销栈上限（契约 §7）。 */
export const MAX_UNDO = 30
/** 写锁超过这个时长视为残留（契约 §7）。 */
export const LOCK_STALE_MS = 30_000
/** 等锁上限（契约 §7）。 */
export const LOCK_WAIT_MS = 3_000
const LOCK_RETRY_MS = 50

export function dshHome(env = process.env) {
  return env?.DSH_HOME || join(homedir(), '.dsh')
}

export function ideaPoolRoot(env = process.env) {
  return join(dshHome(env), 'idea-pool')
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const same = (left, right) => JSON.stringify(left) === JSON.stringify(right)

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

/** 合并用的行标识：更新/产出用 id，想法用 idea_no。 */
function rowKey(row) {
  if (!isObject(row)) return null
  if (typeof row.id === 'string') return `id:${row.id}`
  if (typeof row.idea_no === 'string') return `no:${row.idea_no}`
  return null
}

/** 空数组也视为 keyed：updates/links 从 0 条起步，要能按 id 三方合并。 */
function isKeyedList(list) {
  return list.every((row) => rowKey(row) !== null)
}

function clone(value) {
  return value === undefined ? undefined : structuredClone(value)
}

/** 记账字段不参与冲突判定：撤销只回滚业务字段，时间戳/版本号保持最新。 */
const BOOKKEEPING_KEYS = new Set(['rev', 'updated_at', 'next_no'])

function conflict(path) {
  return new ContractError(`撤销冲突：${path} 在这一步之后又被改过，无法自动撤销`, 409)
}

/**
 * 三方合并式回滚：只撤回这一步改过、之后又没被别人改动的部分。
 *
 * - before/after 相同 → 这棵子树这一步没动，保持现状；
 * - current 与 after 相同 → 干净回滚到 before；
 * - 对象逐字段、keyed 数组逐行（按 idea_no / id）递归合并，之后新增的行保留；
 * - 无法逐项合并（例如标量在这之后又被改过）→ 抛 409，拒绝而不是抹掉新改动。
 * @param {unknown} before - 这一步之前的值。
 * @param {unknown} after - 这一步之后的值。
 * @param {unknown} current - 现在的值。
 * @param {string} [path] - 冲突文案里的位置。
 * @returns {unknown} 撤销后的值。
 */
export function revertChange(before, after, current, path = 'state') {
  if (same(before, after)) return current
  if (same(current, after)) return clone(before)
  if (isObject(before) && isObject(after) && isObject(current)) {
    const result = { ...current }
    const keys = new Set([...Object.keys(before), ...Object.keys(after)])
    for (const key of keys) {
      const value = revertChange(before[key], after[key], current[key], `${path}.${key}`)
      if (value === undefined) delete result[key]
      else result[key] = value
    }
    return result
  }
  if (Array.isArray(before) && Array.isArray(after) && Array.isArray(current)) {
    if (isKeyedList(before) && isKeyedList(after) && isKeyedList(current)) {
      return revertKeyedList(before, after, current, path)
    }
    throw conflict(path)
  }
  const leaf = path.split('.').pop()
  if (BOOKKEEPING_KEYS.has(leaf)) return current
  throw conflict(path)
}

/** keyed 数组回滚：撤掉这一步新增的行，逐行回滚两边都有的行，之后新增的行原样保留。 */
function revertKeyedList(before, after, current, path) {
  const was = new Map(before.map((row) => [rowKey(row), row]))
  const now = new Map(after.map((row) => [rowKey(row), row]))
  const result = current
    .filter((row) => {
      const key = rowKey(row)
      return !(now.has(key) && !was.has(key))
    })
    .map((row) => {
      const key = rowKey(row)
      if (!was.has(key) || !now.has(key)) return row
      return revertChange(was.get(key), now.get(key), row, `${path}[${key}]`)
    })
  // 这一步删掉的行放回原位置
  const present = new Set(result.map((row) => rowKey(row)))
  before.forEach((row, index) => {
    const key = rowKey(row)
    if (now.has(key) || present.has(key)) return
    result.splice(Math.min(index, result.length), 0, clone(row))
    present.add(key)
  })
  return result
}

/** 本机日期（本地时区），用于「今天的备份做过没有」。 */
function localDay(date) {
  const pad = (value) => String(value).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

/**
 * 本机 JSON 存储。所有写操作串行执行，跨进程用 state.lock 互斥。
 */
export class LocalStore {
  /**
   * @param {object} [options]
   * @param {string} [options.root] - 数据目录，默认 $DSH_HOME/idea-pool。
   * @param {string} [options.device] - 新库的默认设备名。
   * @param {() => Date} [options.now] - 时钟注入（测试用）。
   * @param {number} [options.lockStaleMs] - 残留锁判定时长。
   * @param {number} [options.lockWaitMs] - 等锁上限。
   */
  constructor({
    root = ideaPoolRoot(),
    device = defaultDevice(),
    now = () => new Date(),
    lockStaleMs = LOCK_STALE_MS,
    lockWaitMs = LOCK_WAIT_MS,
  } = {}) {
    this.root = root
    this.file = join(root, 'state.json')
    this.bakFile = join(root, 'state.json.bak')
    this.lockFile = join(root, 'state.lock')
    this.device = device
    this.now = now
    this.lockStaleMs = lockStaleMs
    this.lockWaitMs = lockWaitMs
    this.state = null
    this.mtimeMs = 0
    this.backupDay = null
    this.undo = []
    this.queue = Promise.resolve()
  }

  get canUndo() {
    return this.undo.length > 0
  }

  /** 当前时间（ISO 8601）。业务层统一从这里取时间，测试可注入时钟。 */
  nowIso() {
    const date = this.now()
    return (date instanceof Date && !Number.isNaN(date.getTime()) ? date : new Date()).toISOString()
  }

  /** 串行执行，避免同进程内的并发写互相覆盖。 */
  run(task) {
    const next = this.queue.then(task, task)
    this.queue = next.catch(() => {})
    return next
  }

  async ensureRoot() {
    await mkdir(this.root, { recursive: true, mode: 0o700 })
    await chmod(this.root, 0o700).catch(() => {})
  }

  /** 按 mtime 判断是否要重读；文件不存在时生成空库并落盘。 */
  async refresh() {
    await this.ensureRoot()
    let info = null
    try {
      info = await stat(this.file)
    } catch (err) {
      if (err.code !== 'ENOENT') throw err
    }
    if (!info) {
      this.state = blankState({ device: this.device, now: this.now() })
      this.mtimeMs = 0
      await this.persist()
      return
    }
    if (this.state !== null && info.mtimeMs === this.mtimeMs) return
    let parsed
    try {
      parsed = JSON.parse(await readFile(this.file, 'utf8'))
    } catch (err) {
      throw new ContractError(`state.json 读取失败：${err.message}`, 500)
    }
    this.state = normalizeState(parsed, { device: this.device, now: this.now() })
    this.mtimeMs = info.mtimeMs
  }

  /** 原子写：同目录 tmp → rename；文件 600、目录 700。 */
  async persist() {
    await this.ensureRoot()
    const text = JSON.stringify(this.state)
    const tmp = `${this.file}.${process.pid}.${Date.now()}.tmp`
    try {
      await writeFile(tmp, text, { mode: 0o600 })
      await chmod(tmp, 0o600)
      await rename(tmp, this.file)
    } catch (err) {
      await unlink(tmp).catch(() => {})
      throw err
    }
    await chmod(this.file, 0o600).catch(() => {})
    const info = await stat(this.file)
    this.mtimeMs = info.mtimeMs
  }

  /** 每天第一次写入前留一份 state.json.bak（只留一份，不是今天的才覆盖）。 */
  async backupIfNeeded() {
    const today = localDay(this.now())
    if (this.backupDay === today) return
    this.backupDay = today
    let stateInfo = null
    try {
      stateInfo = await stat(this.file)
    } catch (err) {
      if (err.code !== 'ENOENT') throw err
    }
    if (!stateInfo) return
    let bakInfo = null
    try {
      bakInfo = await stat(this.bakFile)
    } catch (err) {
      if (err.code !== 'ENOENT') throw err
    }
    if (bakInfo && localDay(new Date(bakInfo.mtimeMs)) === today) return
    await copyFile(this.file, this.bakFile)
    await chmod(this.bakFile, 0o600).catch(() => {})
  }

  /** 写锁：wx 创建；EEXIST 时清理超时/僵尸锁并重试，最多等 lockWaitMs。 */
  async acquireLock() {
    await this.ensureRoot()
    const deadline = Date.now() + this.lockWaitMs
    for (;;) {
      let handle
      try {
        handle = await open(this.lockFile, 'wx', 0o600)
      } catch (err) {
        if (err.code !== 'EEXIST') throw err
        if (await this.lockIsStale()) {
          await unlink(this.lockFile).catch(() => {})
          continue
        }
        if (Date.now() >= deadline) {
          throw new ContractError(`写锁等待超时：另一个进程正在写 ${this.file}（最多等 ${this.lockWaitMs} 毫秒）`, 500)
        }
        await delay(LOCK_RETRY_MS)
        continue
      }
      try {
        await handle.writeFile(JSON.stringify({ pid: process.pid, at: this.nowIso() }))
      } finally {
        await handle.close().catch(() => {})
      }
      return
    }
  }

  async releaseLock() {
    await unlink(this.lockFile).catch(() => {})
  }

  /** 残留锁：超过 30 秒，或记录的 pid 已经不在了。 */
  async lockIsStale() {
    let text = ''
    let info = null
    try {
      text = await readFile(this.lockFile, 'utf8')
      info = await stat(this.lockFile)
    } catch (err) {
      if (err.code === 'ENOENT') return false
      throw err
    }
    let payload = null
    try {
      payload = JSON.parse(text)
    } catch {
      payload = null
    }
    const at = payload && typeof payload.at === 'string' ? Date.parse(payload.at) : Number.NaN
    const updatedAt = Number.isFinite(at) ? at : info.mtimeMs
    if (this.now().getTime() - updatedAt > this.lockStaleMs) return true
    if (payload && Number.isInteger(payload.pid) && payload.pid !== process.pid) {
      try {
        process.kill(payload.pid, 0)
        return false
      } catch (err) {
        return err?.code === 'ESRCH'
      }
    }
    return false
  }

  /** 读：每次操作前按 mtime 决定是否重读（CLI/另一个窗口可能刚写过）。 */
  read() {
    return this.run(async () => {
      await this.refresh()
      return this.state
    })
  }

  /**
   * 事务式修改：拿锁 → 备份 → 重读 → 改内存 → 原子写 → 放锁。
   * 回调抛错时不会落盘，内存态作废（下次从磁盘重读）。
   * @param {string} label - 撤销入口上显示的说明。
   * @param {(draft: object) => any} mutate - 就地修改状态，返回值原样返回。
   * @param {{undoable?: boolean}} [options]
   */
  mutate(label, mutate, { undoable = true } = {}) {
    return this.run(async () => {
      let locked = false
      try {
        await this.acquireLock()
        locked = true
        await this.backupIfNeeded()
        await this.refresh()
        const before = undoable ? JSON.stringify(this.state) : null
        const result = await mutate(this.state)
        if (undoable) {
          const after = JSON.stringify(this.state)
          // 什么都没改的操作不占撤销位，免得用户点撤销却没反应
          if (after !== before) {
            this.undo.push({ label, before, after })
            if (this.undo.length > MAX_UNDO) this.undo.shift()
          }
        }
        await this.persist()
        return result
      } catch (err) {
        this.state = null
        throw err
      } finally {
        if (locked) await this.releaseLock()
      }
    })
  }

  /**
   * 撤销上一步。当前状态与这一步的 after 一致时直接回到 before；
   * 之后又有新改动时三方合并；合并不了抛 409（撤销入口保留，可重试或放弃）。
   * @returns {Promise<string|null>} 被撤销那一步的 label；没有可撤销内容时为 null。
   */
  undoLast() {
    return this.run(async () => {
      const entry = this.undo[this.undo.length - 1]
      if (entry === undefined) return null
      let locked = false
      try {
        await this.acquireLock()
        locked = true
        await this.refresh()
        const merged = revertChange(JSON.parse(entry.before), JSON.parse(entry.after), this.state)
        this.state = merged
        this.undo.pop()
        await this.persist()
        return entry.label
      } catch (err) {
        this.state = null
        throw err
      } finally {
        if (locked) await this.releaseLock()
      }
    })
  }
}
