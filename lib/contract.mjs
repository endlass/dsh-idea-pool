/**
 * 灵感池数据契约（v0.1 / 本机模式）。
 *
 * 这里只做纯数据的事：字段白名单、输入归一化、校验、标题兜底、编号、摘要投影。
 * 不读写文件、不依赖 DSH，也不依赖任何第三方包；store / service / routes / tools 共用。
 * 契约定于 CONTRACT.md §2–§4，改动先改契约再同步两端。
 */

export const SCHEMA_VERSION = 1

/** 状态机：池中 → 进行中 / 搁置 / 完成，只允许这四个值。 */
export const STATUSES = ['pool', 'active', 'parked', 'done']
export const STATUS_LABELS = {
  pool: '池中',
  active: '进行中',
  parked: '搁置',
  done: '完成',
}

export const MAX_TAGS = 24
export const MAX_TAG_LENGTH = 40
export const MAX_TITLE_LENGTH = 200
export const MAX_SUMMARY_LENGTH = 100_000
export const MAX_GIST_LENGTH = 200
export const MAX_SESSION_REFS = 20
export const SESSION_REF_REASONS = ['advance', 'manual', 'search']
export const MAX_RAW_TEXT_LENGTH = 1_000_000
export const MAX_SOURCE_NOTE_LENGTH = 100_000
export const MAX_SOURCE_LENGTH = 64
/** 设备名上限（设置里的 device）。 */
export const MAX_DEVICE_LENGTH = 40
export const MAX_LINK_TITLE_LENGTH = 200
export const MAX_REF_LENGTH = 64
/** 缺省标题 = raw_text 前 40 个字符。 */
export const TITLE_FALLBACK_LENGTH = 40
export const DEFAULT_LIST_LIMIT = 100
export const MAX_LIST_LIMIT = 500
export const IDEA_NO_RE = /^IDEA-(\d{1,9})$/
/** 双模连续性：本机账本与云端账本的差异检查 / 单向增量刷新（契约 §12）。 */
export const CONTINUITY_CHECK_TTL_MS = 60_000

/** 运行模式（契约 §11.1）。 */
export const MODES = ['local', 'cloud']
/**
 * 云端 ideas-api 默认基址：空串表示不预置任何第三方后端。
 * 本机模式零配置可用；云端基址由用户在自己的设置里显式填写（契约 §11.1）。
 */
export const CLOUD_DEFAULT_BASE = ''
export const MAX_CLOUD_BASE_LENGTH = 500
export const MAX_API_KEY_LENGTH = 500

/** 输入/业务错误：status 会被 HTTP 路由直接用作响应码。 */
export class ContractError extends Error {
  constructor(message, status = 400) {
    super(message)
    this.name = 'ContractError'
    this.status = status
  }
}

const isPlainObject = (value) => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return false
  const proto = Object.getPrototypeOf(value)
  return proto === null || Object.getPrototypeOf(proto) === null
}

export { isPlainObject }

/** 默认设备名：按平台取，用户可在设置里改。 */
export function defaultDevice(platform = process.platform) {
  if (platform === 'darwin') return 'dsh-mac'
  if (platform === 'win32') return 'dsh-win'
  return 'dsh'
}

/** ISO 8601；非法输入退回当前时间。 */
export function isoNow(now = new Date()) {
  const date = now instanceof Date ? now : new Date(now)
  if (Number.isNaN(date.getTime())) return new Date().toISOString()
  return date.toISOString()
}

function isoOr(value, fallback) {
  if (typeof value === 'string' && value.trim()) {
    const date = new Date(value)
    if (!Number.isNaN(date.getTime())) return date.toISOString()
  }
  return fallback
}

/** 编号格式：IDEA-001 起，三位起补零；更大的数字照常增长。 */
export function formatIdeaNo(number) {
  const n = Number.isInteger(number) && number > 0 ? number : 1
  return `IDEA-${String(n).padStart(3, '0')}`
}

/** 规范化编号：去空白、转大写、补零；不是合法编号时返回 null。 */
export function normalizeIdeaNo(value) {
  if (typeof value !== 'string') return null
  const match = IDEA_NO_RE.exec(value.trim().toUpperCase())
  if (!match) return null
  return formatIdeaNo(Number(match[1]))
}

/** 404 文案里用的原始编号（非法规格也照原样大写展示）。 */
export function ideaNoForError(value) {
  const normalized = normalizeIdeaNo(value)
  if (normalized) return normalized
  const text = typeof value === 'string' ? value.trim().toUpperCase() : ''
  return text || '(empty)'
}

/** 缺省标题：raw_text 首尾 trim 后取前 40 个字符。 */
export function titleFromRaw(rawText) {
  const text = typeof rawText === 'string' ? rawText.trim() : ''
  return text.length > TITLE_FALLBACK_LENGTH ? text.slice(0, TITLE_FALLBACK_LENGTH) : text
}

/**
 * 文本字段归一化：非字符串拒绝；首尾空白可 trim（raw_text 也不动内部字符）。
 * @param {unknown} value - 原始值。
 * @param {string} field - 字段名（错误文案用）。
 * @param {number} max - 最大字符数。
 * @returns {string|undefined} 缺省时为 undefined。
 */
function textField(value, field, max) {
  if (value === undefined || value === null) return undefined
  if (typeof value !== 'string') throw new ContractError(`${field} 必须是字符串`)
  const text = value.trim()
  if (text.length > max) throw new ContractError(`${field} 太长了（最多 ${max} 个字符）`)
  return text
}

/** tags：接受 "a,b" 字符串或数组；去重、去空，每项 <= 40 字符，最多 24 个。 */
export function normalizeTags(input) {
  if (input === undefined || input === null) return []
  let rows
  if (Array.isArray(input)) rows = input
  else if (typeof input === 'string') rows = input.split(/[,，]/)
  else throw new ContractError('tags 必须是字符串数组或逗号分隔的字符串')
  const tags = []
  for (const row of rows) {
    if (typeof row !== 'string') throw new ContractError('tags 里只能放字符串')
    const tag = row.trim()
    if (!tag) continue
    if (tag.length > MAX_TAG_LENGTH) throw new ContractError(`标签不能超过 ${MAX_TAG_LENGTH} 个字符`)
    if (!tags.includes(tag)) tags.push(tag)
  }
  if (tags.length > MAX_TAGS) throw new ContractError(`标签最多 ${MAX_TAGS} 个`)
  return tags
}

/** 载入 state.json 时的 tags 静默清洗（不抛错，坏数据不让整个库打不开）。 */
function cleanTagsForLoad(input) {
  if (!Array.isArray(input)) return []
  const tags = []
  for (const row of input) {
    if (typeof row !== 'string') continue
    const tag = row.trim().slice(0, MAX_TAG_LENGTH)
    if (tag && !tags.includes(tag)) tags.push(tag)
    if (tags.length >= MAX_TAGS) break
  }
  return tags
}

/** 新库：schema 1 / 空 ideas / next_no 1。 */
export function blankState({ device = defaultDevice(), now = new Date() } = {}) {
  return {
    schema: SCHEMA_VERSION,
    device,
    next_no: 1,
    ideas: [],
    meta: { updated_at: isoNow(now) },
  }
}

/**
 * 最近一次「从云端刷新到本机」的记账（state.meta.last_sync，契约 §12）。
 * 坏数据静默清洗成 null，不让它拖垮整个 state.json。
 * @param {unknown} raw
 * @returns {{at:string, base:string, cloud_total:number, imported:number, updated:number, added_updates:number, added_links:number}|null}
 */
export function normalizeLastSync(raw) {
  if (!isPlainObject(raw)) return null
  const at = isoOr(raw.at, null)
  if (!at) return null
  const count = (key) => (Number.isInteger(raw[key]) && raw[key] >= 0 ? raw[key] : 0)
  return {
    at,
    base: typeof raw.base === 'string' ? raw.base.trim().slice(0, MAX_CLOUD_BASE_LENGTH) : '',
    cloud_total: count('cloud_total'),
    imported: count('imported'),
    updated: count('updated'),
    added_updates: count('added_updates'),
    added_links: count('added_links'),
  }
}

/** session_refs：可选数组；每项 { session_id, title, device, bound_at, reason }。 */
export function normalizeSessionRefs(input) {
  if (input === undefined || input === null) return []
  if (!Array.isArray(input)) throw new ContractError('session_refs 必须是数组')
  const seen = new Set()
  const refs = []
  for (const row of input.slice(0, MAX_SESSION_REFS)) {
    if (!isPlainObject(row)) throw new ContractError('session_refs 的每一项必须是对象')
    const sessionId = textField(row.session_id, 'session_refs.session_id', 200)
    if (!sessionId) throw new ContractError('session_refs.session_id 不能为空')
    if (seen.has(sessionId)) continue
    seen.add(sessionId)
    refs.push({
      session_id: sessionId,
      title: textField(row.title, 'session_refs.title', MAX_TITLE_LENGTH) ?? '',
      device: textField(row.device, 'session_refs.device', MAX_DEVICE_LENGTH) ?? '',
      bound_at: textField(row.bound_at, 'session_refs.bound_at', 64) || isoNow(),
      reason: SESSION_REF_REASONS.includes(row.reason) ? row.reason : 'manual',
    })
  }
  return refs
}

/**
 * 校验 POST /api/ideas 的 body，返回可直接落盘的字段。
 * raw_text 逐字保真：只 trim 首尾，不动内部任何字符。
 * @param {unknown} body - 请求体。
 * @param {{device: string}} options - source 缺省值。
 */
export function normalizeCreate(body, { device = defaultDevice() } = {}) {
  if (!isPlainObject(body)) throw new ContractError('请求体必须是 JSON 对象')
  const rawText = textField(body.raw_text, 'raw_text', MAX_RAW_TEXT_LENGTH) ?? ''
  const titleInput = textField(body.title, 'title', MAX_TITLE_LENGTH)
  if (!rawText && !titleInput) throw new ContractError('raw_text 或 title 至少填一个')
  const title = titleInput || titleFromRaw(rawText)
  const summary = textField(body.summary, 'summary', MAX_SUMMARY_LENGTH) ?? ''
  const gist = textField(body.gist, 'gist', MAX_GIST_LENGTH) ?? ''
  const sessionRefs = normalizeSessionRefs(body.session_refs)
  const sourceInput = textField(body.source, 'source', MAX_SOURCE_LENGTH)
  const sourceNote = textField(body.source_note, 'source_note', MAX_SOURCE_NOTE_LENGTH) ?? ''
  return {
    title,
    raw_text: rawText,
    summary,
    gist,
    session_refs: sessionRefs,
    tags: normalizeTags(body.tags),
    source: sourceInput || device,
    source_note: sourceNote,
  }
}

/**
 * 校验 PATCH /api/ideas/{idea_no} 的 body：白名单字段，任意子集。
 * 未知字段静默丢弃（契约 §3）。
 */
export function normalizePatch(body) {
  if (!isPlainObject(body)) throw new ContractError('请求体必须是 JSON 对象')
  const patch = {}
  if (Object.hasOwn(body, 'title')) patch.title = textField(body.title, 'title', MAX_TITLE_LENGTH) ?? ''
  if (Object.hasOwn(body, 'raw_text')) patch.raw_text = textField(body.raw_text, 'raw_text', MAX_RAW_TEXT_LENGTH) ?? ''
  if (Object.hasOwn(body, 'summary')) patch.summary = textField(body.summary, 'summary', MAX_SUMMARY_LENGTH) ?? ''
  if (Object.hasOwn(body, 'gist')) patch.gist = textField(body.gist, 'gist', MAX_GIST_LENGTH) ?? ''
  if (Object.hasOwn(body, 'session_refs')) patch.session_refs = normalizeSessionRefs(body.session_refs)
  if (Object.hasOwn(body, 'status')) {
    const status = body.status
    if (typeof status !== 'string' || !STATUSES.includes(status)) {
      throw new ContractError(`status 不合法：${String(status)}，只允许 ${STATUSES.join(' / ')}`)
    }
    patch.status = status
  }
  if (Object.hasOwn(body, 'tags')) patch.tags = normalizeTags(body.tags)
  if (Object.hasOwn(body, 'source_note')) patch.source_note = textField(body.source_note, 'source_note', MAX_SOURCE_NOTE_LENGTH) ?? ''
  return patch
}

/** 校验追加进展的 body。 */
export function normalizeProgress(body) {
  if (!isPlainObject(body)) throw new ContractError('请求体必须是 JSON 对象')
  const content = textField(body.content, 'content', MAX_RAW_TEXT_LENGTH) ?? ''
  if (!content) throw new ContractError('进展内容不能为空')
  const source = textField(body.source, 'source', MAX_SOURCE_LENGTH) ?? ''
  return { content, source }
}

/** http(s) URL 校验。 */
function httpUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

/** 校验挂产出的 body：url 必填且必须是 http(s)。 */
export function normalizeLink(body) {
  if (!isPlainObject(body)) throw new ContractError('请求体必须是 JSON 对象')
  const url = textField(body.url, 'url', 2000) ?? ''
  if (!url) throw new ContractError('url 不能为空')
  if (!httpUrl(url)) throw new ContractError('url 必须是 http(s) 地址')
  const title = textField(body.title, 'title', MAX_LINK_TITLE_LENGTH) || url
  const refType = textField(body.ref_type, 'ref_type', MAX_REF_LENGTH) || 'external'
  const refId = textField(body.ref_id, 'ref_id', MAX_REF_LENGTH) ?? ''
  return { title, url, ref_type: refType, ref_id: refId }
}

/**
 * 规范化云端 base：必须 http(s)，去尾斜杠；不合法返回 null。
 * @param {unknown} value
 * @returns {string|null}
 */
export function normalizeCloudBase(value) {
  if (typeof value !== 'string') return null
  const text = value.trim()
  if (!text || text.length > MAX_CLOUD_BASE_LENGTH) return null
  let url
  try {
    url = new URL(text)
  } catch {
    return null
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
  return url.href.replace(/\/+$/, '')
}

/**
 * 校验 POST /api/settings（契约 §11.1）：
 * 接受 { device?, mode?, cloud?: { base?, apiKey?, clearKey? } }；
 * apiKey 空串/缺省表示不改，clearKey=true 清空；未知字段静默丢弃。
 */
export function normalizeSettingsPatch(body) {
  if (!isPlainObject(body)) throw new ContractError('请求体必须是 JSON 对象')
  const patch = {}
  if (Object.hasOwn(body, 'device')) {
    const device = textField(body.device, 'device', MAX_DEVICE_LENGTH)
    if (!device) throw new ContractError(`device 必须是 1-${MAX_DEVICE_LENGTH} 个字符的字符串`)
    patch.device = device
  }
  if (Object.hasOwn(body, 'mode')) {
    const mode = body.mode
    if (typeof mode !== 'string' || !MODES.includes(mode)) {
      throw new ContractError(`mode 不合法：${String(mode)}，只允许 ${MODES.join(' / ')}`)
    }
    patch.mode = mode
  }
  if (Object.hasOwn(body, 'cloud')) {
    const cloud = body.cloud
    if (cloud !== undefined && cloud !== null) {
      if (!isPlainObject(cloud)) throw new ContractError('cloud 必须是 JSON 对象')
      const normalized = {}
      if (Object.hasOwn(cloud, 'base')) {
        const base = normalizeCloudBase(cloud.base)
        if (!base) throw new ContractError('cloud.base 必须是 http(s) 地址')
        normalized.base = base
      }
      if (Object.hasOwn(cloud, 'apiKey')) {
        if (typeof cloud.apiKey !== 'string') throw new ContractError('cloud.apiKey 必须是字符串')
        if (cloud.apiKey.length > MAX_API_KEY_LENGTH) throw new ContractError('cloud.apiKey 太长了')
        const apiKey = cloud.apiKey.trim()
        if (apiKey) normalized.apiKey = apiKey
      }
      if (Object.hasOwn(cloud, 'clearKey')) {
        if (typeof cloud.clearKey !== 'boolean') throw new ContractError('cloud.clearKey 必须是布尔值')
        if (cloud.clearKey) normalized.clearKey = true
      }
      patch.cloud = normalized
    }
  }
  return patch
}

/** 摘要投影：列表、首屏、工具返回共用。 */
export function projectSummary(idea) {
  return {
    idea_no: idea.idea_no,
    title: idea.title,
    summary: idea.summary,
    gist: idea.gist || '',
    status: idea.status,
    tags: [...(Array.isArray(idea.tags) ? idea.tags : [])],
    source: idea.source,
    created_at: idea.created_at,
    updated_at: idea.updated_at,
    n_updates: Array.isArray(idea.updates) ? idea.updates.length : 0,
    n_links: Array.isArray(idea.links) ? idea.links.length : 0,
  }
}

/** 详情投影：摘要 + raw_text / source_note / rev（契约 §3）。 */
export function projectDetail(idea) {
  return {
    ...projectSummary(idea),
    raw_text: idea.raw_text,
    source_note: idea.source_note,
    session_refs: Array.isArray(idea.session_refs) ? idea.session_refs : [],
    rev: idea.rev,
  }
}

/** 各状态计数 + 总数。 */
export function countsOf(ideas) {
  const counts = { pool: 0, active: 0, parked: 0, done: 0, total: 0 }
  for (const idea of ideas) {
    if (Object.hasOwn(counts, idea.status) && idea.status !== 'total') counts[idea.status] += 1
    counts.total += 1
  }
  return counts
}

/** 搜索：标题 / 摘要 / 原文 / 标签 / 编号 / 来源，大小写不敏感子串。 */
export function matchesQuery(idea, query) {
  const needle = typeof query === 'string' ? query.trim().toLowerCase() : ''
  if (!needle) return true
  const haystack = [
    idea.idea_no,
    idea.title,
    idea.summary,
    idea.gist,
    idea.raw_text,
    idea.source_note,
    ...(Array.isArray(idea.tags) ? idea.tags : []),
  ]
    .filter((value) => typeof value === 'string' && value !== '')
    .join('\n')
    .toLowerCase()
  return haystack.includes(needle)
}

/** 列表顺序：新的在前；同一时刻按编号倒序。 */
export function sortIdeas(ideas) {
  return [...ideas].sort((a, b) => {
    const left = typeof a.created_at === 'string' ? a.created_at : ''
    const right = typeof b.created_at === 'string' ? b.created_at : ''
    if (left !== right) return left < right ? 1 : -1
    return String(a.idea_no) < String(b.idea_no) ? 1 : -1
  })
}

/** updates / links 升序：按 created_at，同一时刻按 id。 */
export function sortEntries(rows) {
  return [...rows].sort((a, b) => {
    const left = typeof a.created_at === 'string' ? a.created_at : ''
    const right = typeof b.created_at === 'string' ? b.created_at : ''
    if (left !== right) return left < right ? -1 : 1
    return String(a.id ?? '') < String(b.id ?? '') ? -1 : 1
  })
}

let idCounter = 0
/** 进展/产出的短 id。 */
export function newId(prefix = 'x') {
  idCounter += 1
  return `${prefix}_${Date.now().toString(36)}${idCounter.toString(36)}${Math.floor(Math.random() * 1296).toString(36)}`
}

function normalizeIdeaRow(raw) {
  if (!isPlainObject(raw)) return null
  const ideaNo = normalizeIdeaNo(raw.idea_no)
  if (!ideaNo) return null
  const rawText = typeof raw.raw_text === 'string' ? raw.raw_text : ''
  const title = typeof raw.title === 'string' && raw.title.trim() ? raw.title : titleFromRaw(rawText)
  const nowIso = isoNow()
  const created = isoOr(raw.created_at, nowIso)
  const updates = Array.isArray(raw.updates)
    ? raw.updates
        .filter(isPlainObject)
        .map((row) => ({
          id: typeof row.id === 'string' && row.id ? row.id : newId('u'),
          content: typeof row.content === 'string' ? row.content : '',
          source: typeof row.source === 'string' ? row.source : '',
          created_at: isoOr(row.created_at, created),
        }))
    : []
  const links = Array.isArray(raw.links)
    ? raw.links
        .filter(isPlainObject)
        .map((row) => ({
          id: typeof row.id === 'string' && row.id ? row.id : newId('l'),
          title: typeof row.title === 'string' ? row.title : '',
          url: typeof row.url === 'string' ? row.url : '',
          ref_type: typeof row.ref_type === 'string' && row.ref_type ? row.ref_type : 'external',
          ref_id: typeof row.ref_id === 'string' ? row.ref_id : '',
          created_at: isoOr(row.created_at, created),
        }))
    : []
  return {
    idea_no: ideaNo,
    title,
    raw_text: rawText,
    summary: typeof raw.summary === 'string' ? raw.summary : '',
    gist: typeof raw.gist === 'string' ? raw.gist : '',
    session_refs: normalizeSessionRefs(raw.session_refs),
    status: STATUSES.includes(raw.status) ? raw.status : 'pool',
    tags: cleanTagsForLoad(raw.tags),
    source: typeof raw.source === 'string' && raw.source ? raw.source : '',
    source_note: typeof raw.source_note === 'string' ? raw.source_note : '',
    created_at: created,
    updated_at: isoOr(raw.updated_at, created),
    rev: Number.isInteger(raw.rev) && raw.rev > 0 ? raw.rev : 1,
    updates,
    links,
  }
}

/**
 * 载入 state.json 的归一化：容错填充，不抛错（schema 不支持时拒绝）。
 * @param {unknown} raw - 解析后的 JSON。
 * @param {{device?: string, now?: Date}} [options]
 */
export function normalizeState(raw, { device = defaultDevice(), now = new Date() } = {}) {
  if (!isPlainObject(raw)) throw new ContractError('state.json 内容不是对象', 500)
  if (raw.schema !== undefined && raw.schema !== SCHEMA_VERSION) {
    throw new ContractError(`state.json 的 schema 不支持：${String(raw.schema)}`, 500)
  }
  const ideas = Array.isArray(raw.ideas)
    ? raw.ideas.map(normalizeIdeaRow).filter((idea) => idea !== null)
    : []
  const maxNo = ideas.reduce((max, idea) => {
    const match = IDEA_NO_RE.exec(idea.idea_no)
    return match ? Math.max(max, Number(match[1])) : max
  }, 0)
  const savedNext = Number.isInteger(raw.next_no) && raw.next_no > 0 ? raw.next_no : 1
  const meta = isPlainObject(raw.meta) ? raw.meta : {}
  const normalizedMeta = { updated_at: isoOr(meta.updated_at, isoNow(now)) }
  // last_sync 是 v0.3.1 双模连续性的记账字段：没有就保持缺省（不写 null），旧 state.json 照常打开
  const lastSync = normalizeLastSync(meta.last_sync)
  if (lastSync) normalizedMeta.last_sync = lastSync
  return {
    schema: SCHEMA_VERSION,
    device: typeof raw.device === 'string' && raw.device.trim() ? raw.device.trim() : device,
    next_no: Math.max(savedNext, maxNo + 1),
    ideas,
    meta: normalizedMeta,
  }
}
