/**
 * 云端模式引擎：直接访问 ideas-api（CONTRACT.md §11.4）。
 *
 * - 基址取 settings.cloud.base，请求头 X-API-Key，超时 15s；
 * - update 先 GET 取 rev，再 PATCH 带 if_rev（服务端 rev 冲突返回 409）；
 * - progress/link 带 client_id（u_<ts>_<rand> / l_<ts>_<rand>），服务端按 client_id 幂等；
 * - 401/403、409、网络/超时、其他非 2xx 都映射成可读中文 ContractError；
 * - 密钥不出现在错误文案、日志与返回值里（错误文案里出现也会被替换成 ***）。
 *
 * 只 import Node 内置 + 本仓库纯数据契约；测试用 node:http 起本地 mock 云端。
 */
import {
  CLOUD_DEFAULT_BASE,
  ContractError,
  DEFAULT_LIST_LIMIT,
  MAX_LIST_LIMIT,
  SCHEMA_VERSION,
  STATUSES,
  normalizeCloudBase,
  normalizeCreate,
  normalizeIdeaNo,
  normalizeLink,
  normalizePatch,
  normalizeProgress,
  projectDetail,
  sortEntries,
  sortIdeas,
  titleFromRaw,
} from './contract.mjs'

/** 云端请求超时（契约 §11.4）。 */
export const CLOUD_TIMEOUT_MS = 15_000
/** 全量拉取时每页条数（云端 /ideas 上限 500）。 */
const PAGE_LIMIT = 500
/** 详情并发数（导入/导出时别把云端打爆）。 */
const DETAIL_CONCURRENCY = 4
/** 分页保护：最多拉 100 页（5 万条）。 */
const MAX_PAGES = 100
/** 云端返回的本地时间（无时区）按北京时间解释。 */
const CLOUD_TIME_ZONE = '+08:00'
const CLIENT_ID_RE = /^[A-Za-z0-9_-]{1,64}$/

const NAIVE_TIME_RE = /^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(?::\d{2})?$/

function randomToken() {
  return Math.random().toString(36).slice(2, 10)
}

/** 纯 ISO 时间；非法输入回退 fallback。 */
function isoOrNow(value, fallback) {
  if (typeof value === 'string' && value.trim()) {
    const date = new Date(value)
    if (!Number.isNaN(date.getTime())) return date.toISOString()
  }
  return fallback
}

export class CloudEngine {
  /**
   * @param {object} parts
   * @param {import('./settings.mjs').Settings} parts.settings - 云端配置来源。
   * @param {typeof fetch} [parts.fetchImpl] - fetch 注入（测试用）。
   * @param {number} [parts.timeoutMs] - 超时覆盖（测试用，默认 15s）。
   * @param {() => Date} [parts.now] - 时钟注入（测试用）。
   */
  constructor({ settings, fetchImpl, timeoutMs = CLOUD_TIMEOUT_MS, now = () => new Date() } = {}) {
    this.settings = settings
    this.fetch = typeof fetchImpl === 'function' ? fetchImpl : globalThis.fetch
    this.timeoutMs = timeoutMs
    this.now = now
  }

  nowIso() {
    const date = this.now()
    return (date instanceof Date && !Number.isNaN(date.getTime()) ? date : new Date()).toISOString()
  }

  /**
   * 解析本次请求用的 base / apiKey：请求里的覆盖值优先，否则用已存配置。
   * 不合法抛 400；返回值里的 apiKey 只用于请求头，调用方不得回传。
   * @param {{base?: unknown, apiKey?: unknown}} [overrides]
   */
  async connection(overrides = {}) {
    const settings = await this.settings.read()
    let base = settings.cloud.base
    let apiKey = settings.cloud.apiKey
    if (overrides.base !== undefined && overrides.base !== null && overrides.base !== '') {
      if (typeof overrides.base !== 'string') throw new ContractError('cloud.base 必须是字符串')
      const normalized = normalizeCloudBase(overrides.base)
      if (!normalized) throw new ContractError('cloud.base 必须是 http(s) 地址')
      base = normalized
    }
    if (overrides.apiKey !== undefined && overrides.apiKey !== null) {
      if (typeof overrides.apiKey !== 'string') throw new ContractError('cloud.apiKey 必须是字符串')
      const key = overrides.apiKey.trim()
      if (key) apiKey = key
    }
    return { base: base || CLOUD_DEFAULT_BASE, apiKey }
  }

  /** 把错误文案里可能出现的密钥替换掉（双保险）。 */
  redact(text, apiKey) {
    const message = String(text ?? '')
    if (typeof apiKey !== 'string' || apiKey === '') return message
    return message.split(apiKey).join('***')
  }

  /** 网络层错误 → 中文短句（不含请求头/密钥）。 */
  networkErrorText(err) {
    const name = typeof err?.name === 'string' ? err.name : ''
    if (name === 'TimeoutError' || name === 'AbortError') return `请求超时（${Math.round(this.timeoutMs / 1000)}s）`
    const code = err?.cause?.code ?? err?.code
    const message = typeof err?.message === 'string' && err.message ? err.message : '网络错误'
    return code ? `${code}：${message}` : message
  }

  /**
   * 发一次云端请求并解析 JSON。
   * @param {string} pathname - 以 / 开头的路径。
   * @param {{method?: string, query?: URLSearchParams, body?: unknown, connection?: {base: string, apiKey: string}}} [options]
   * @returns {Promise<object>} 解析后的 JSON（空响应为 {}）。
   */
  async request(pathname, { method = 'GET', query, body, connection } = {}) {
    const conn = connection ?? (await this.connection())
    const base = String(conn.base).replace(/\/+$/, '')
    const search = query instanceof URLSearchParams ? query.toString() : ''
    const url = `${base}${pathname}${search ? `?${search}` : ''}`
    const headers = { accept: 'application/json' }
    if (conn.apiKey) headers['X-API-Key'] = conn.apiKey
    const init = { method, headers, signal: AbortSignal.timeout(this.timeoutMs) }
    if (body !== undefined) {
      headers['content-type'] = 'application/json'
      init.body = JSON.stringify(body)
    }
    let res
    try {
      res = await this.fetch(url, init)
    } catch (err) {
      throw new ContractError(`连不上云端：${this.networkErrorText(err)}`, 502)
    }
    let text = ''
    try {
      text = await res.text()
    } catch {
      throw new ContractError('连不上云端：响应读取失败', 502)
    }
    let data = null
    if (text) {
      try {
        data = JSON.parse(text)
      } catch {
        data = null
      }
    }
    if (res.status === 401 || res.status === 403) {
      throw new ContractError('云端鉴权失败，请检查 API Key', 401)
    }
    if (res.status === 409) {
      throw new ContractError('云端这条想法已被其他端更新，请刷新后重试', 409)
    }
    if (!res.ok) {
      const serverMessage =
        data && typeof data.error === 'string' && data.error.trim() ? data.error.trim() : res.statusText || '未知错误'
      // 4xx 是请求/资源问题（404 等），保留原状态码；5xx 视为云端故障，统一 502。
      if (res.status >= 400 && res.status < 500) {
        throw new ContractError(`云端请求被拒绝（HTTP ${res.status}）：${this.redact(serverMessage, conn.apiKey)}`, res.status)
      }
      throw new ContractError(`云端接口出错（HTTP ${res.status}）：${this.redact(serverMessage, conn.apiKey)}`, 502)
    }
    return data ?? {}
  }

  /**
   * 云端时间 → ISO 8601。API 返回 "YYYY-MM-DD HH:MM"（北京时间、无时区）时按 +08:00 解释；
   * 已带 Z/偏移的字符串原样解析。
   */
  toIso(value, fallback = this.nowIso()) {
    if (typeof value !== 'string' || !value.trim()) return fallback
    const raw = value.trim()
    const text = NAIVE_TIME_RE.test(raw) ? `${raw.replace(' ', 'T')}${CLOUD_TIME_ZONE}` : raw
    return isoOrNow(text, fallback)
  }

  /** 云端相对链接（/docs/...）补成站点绝对地址。 */
  absoluteUrl(value, base) {
    const text = typeof value === 'string' ? value.trim() : ''
    if (!text) return ''
    if (/^https?:\/\//i.test(text)) return text
    if (!text.startsWith('/')) return text
    try {
      return new URL(text, `${String(base).replace(/\/+$/, '')}/`).href
    } catch {
      return text
    }
  }

  /** 编号规范化；拿不到合法值就退回大写 trim。 */
  keyOf(value) {
    const key = normalizeIdeaNo(value)
    if (key) return key
    return typeof value === 'string' ? value.trim().toUpperCase() : ''
  }

  /** 云端 idea → 本机契约的摘要字段。 */
  summaryOf(raw) {
    const source = raw && typeof raw === 'object' ? raw : {}
    const rawText = typeof source.raw_text === 'string' ? source.raw_text : ''
    const created = this.toIso(source.created_at)
    const tags = Array.isArray(source.tags)
      ? source.tags.filter((tag) => typeof tag === 'string').map((tag) => tag.trim()).filter(Boolean).slice(0, 24)
      : []
    return {
      idea_no: this.keyOf(source.idea_no),
      title: typeof source.title === 'string' && source.title.trim() ? source.title : titleFromRaw(rawText),
      summary: typeof source.summary === 'string' ? source.summary : '',
      status: STATUSES.includes(source.status) ? source.status : 'pool',
      tags,
      source: typeof source.source === 'string' ? source.source : '',
      created_at: created,
      updated_at: this.toIso(source.updated_at, created),
      n_updates: Number.isInteger(source.n_updates) ? source.n_updates : Array.isArray(source.updates) ? source.updates.length : 0,
      n_links: Number.isInteger(source.n_links) ? source.n_links : Array.isArray(source.links) ? source.links.length : 0,
    }
  }

  /** 云端 idea → 本机契约的详情字段（不含 updates/links）。 */
  ideaOf(raw, fallbackNo) {
    const source = raw && typeof raw === 'object' ? raw : {}
    const rawText = typeof source.raw_text === 'string' ? source.raw_text : ''
    const created = this.toIso(source.created_at)
    return {
      idea_no: this.keyOf(source.idea_no) || fallbackNo || '',
      title: typeof source.title === 'string' && source.title.trim() ? source.title : titleFromRaw(rawText),
      raw_text: rawText,
      summary: typeof source.summary === 'string' ? source.summary : '',
      status: STATUSES.includes(source.status) ? source.status : 'pool',
      tags: Array.isArray(source.tags)
        ? source.tags.filter((tag) => typeof tag === 'string').map((tag) => tag.trim()).filter(Boolean).slice(0, 24)
        : [],
      source: typeof source.source === 'string' ? source.source : '',
      source_note: typeof source.source_note === 'string' ? source.source_note : '',
      created_at: created,
      updated_at: this.toIso(source.updated_at, created),
      rev: Number.isInteger(source.rev) && source.rev >= 0 ? source.rev : 0,
    }
  }

  /** 云端进展 → 本机进展行（id 加 u_c_ 前缀避免与本机 id 撞车）。 */
  updateOf(raw, fallbackId) {
    const row = raw && typeof raw === 'object' ? raw : {}
    const id = row.id !== undefined && row.id !== null && String(row.id) !== '' ? `u_c_${row.id}` : fallbackId
    return {
      id,
      content: typeof row.content === 'string' ? row.content : '',
      source: typeof row.source === 'string' ? row.source : '',
      created_at: this.toIso(row.created_at),
    }
  }

  /** 云端产出 → 本机产出行（id 加 l_c_ 前缀，相对链接补绝对）。 */
  linkOf(raw, base, fallbackId) {
    const row = raw && typeof raw === 'object' ? raw : {}
    const id = row.id !== undefined && row.id !== null && String(row.id) !== '' ? `l_c_${row.id}` : fallbackId
    const url = this.absoluteUrl(row.url, base)
    return {
      id,
      title: typeof row.title === 'string' && row.title ? row.title : url,
      url,
      ref_type: typeof row.ref_type === 'string' && row.ref_type ? row.ref_type : 'external',
      ref_id: typeof row.ref_id === 'string' ? row.ref_id : '',
      created_at: this.toIso(row.created_at),
    }
  }

  /** 云端详情响应 { idea, updates, links } → 本机完整 idea（含 updates/links 数组）。 */
  detailOf(rawIdea, data, fallbackNo, base) {
    const idea = this.ideaOf(rawIdea, fallbackNo)
    const updates = Array.isArray(data?.updates) ? data.updates.map((row) => this.updateOf(row)) : []
    const links = Array.isArray(data?.links) ? data.links.map((row) => this.linkOf(row, base)) : []
    return { ...idea, updates, links }
  }

  /** 从响应里取 idea：优先 data.idea，其次扁平 idea 对象。 */
  extractIdea(data, fallbackNo) {
    if (data && typeof data === 'object' && data.idea && typeof data.idea === 'object') return data.idea
    if (data && typeof data === 'object' && data.idea_no) return data
    return { idea_no: fallbackNo }
  }

  /** 云端 counts 直接用；缺字段时按当前页兜底。 */
  countsOf(rawCounts, rows, total) {
    const counts = { pool: 0, active: 0, parked: 0, done: 0, total: 0 }
    const source = rawCounts && typeof rawCounts === 'object' ? rawCounts : null
    const declared = source && ['pool', 'active', 'parked', 'done', 'total'].some((key) => Number.isInteger(source[key]))
    if (declared) {
      for (const status of STATUSES) counts[status] = Number.isInteger(source[status]) && source[status] > 0 ? source[status] : 0
      const sum = STATUSES.reduce((acc, status) => acc + counts[status], 0)
      counts.total = Number.isInteger(source.total) && source.total >= 0 ? source.total : Number.isInteger(total) ? total : sum
      return counts
    }
    for (const row of rows) {
      if (Object.hasOwn(counts, row.status)) counts[row.status] += 1
    }
    counts.total = Number.isInteger(total) && total >= 0 ? total : rows.length
    return counts
  }

  /** client_id：调用方显式给了合法值就沿用（幂等重试用），否则生成 u_<ts>_<rand> / l_<ts>_<rand>。 */
  clientId(prefix, provided) {
    if (typeof provided === 'string' && CLIENT_ID_RE.test(provided.trim())) return provided.trim()
    return `${prefix}_${Date.now()}_${randomToken()}`
  }

  /** GET /health：只取条数。 */
  async health() {
    const data = await this.request('/health')
    const count = Number.isInteger(data.count)
      ? data.count
      : Number.isInteger(data.total)
        ? data.total
        : Array.isArray(data.ideas)
          ? data.ideas.length
          : 0
    return { ok: true, mode: 'cloud', count }
  }

  /** GET /api/state 的云端部分：列表 + 计数（facade 补 mode/storagePath/cloudBase 等）。 */
  async overview() {
    const page = await this.list({ limit: PAGE_LIMIT, offset: 0 })
    return { ok: true, ideas: page.ideas, counts: page.counts, total: page.total }
  }

  /**
   * GET /api/ideas：查询参数透传云端，返回本机契约形状。
   * @param {{status?: string, q?: string, limit?: number, offset?: number}} [query]
   */
  async list(query = {}) {
    const status = typeof query.status === 'string' && query.status !== '' ? query.status : undefined
    if (status !== undefined && !STATUSES.includes(status)) {
      throw new ContractError(`status 不合法：${status}，只允许 ${STATUSES.join(' / ')}`)
    }
    const limit = query.limit === undefined ? DEFAULT_LIST_LIMIT : query.limit
    if (!Number.isInteger(limit) || limit < 1 || limit > MAX_LIST_LIMIT) {
      throw new ContractError(`limit 必须是 1-${MAX_LIST_LIMIT} 之间的整数`)
    }
    const offset = query.offset === undefined ? 0 : query.offset
    if (!Number.isInteger(offset) || offset < 0) throw new ContractError('offset 必须是 >= 0 的整数')
    const params = new URLSearchParams()
    if (status !== undefined) params.set('status', status)
    if (typeof query.q === 'string' && query.q.trim()) params.set('q', query.q.trim())
    params.set('limit', String(limit))
    params.set('offset', String(offset))
    const data = await this.request('/ideas', { query: params })
    const rows = (Array.isArray(data.ideas) ? data.ideas : []).map((row) => this.summaryOf(row))
    const total = Number.isInteger(data.total) ? data.total : Number.isInteger(data.counts?.total) ? data.counts.total : rows.length
    return { ok: true, ideas: rows, counts: this.countsOf(data.counts, rows, total), total }
  }

  /** 拉一条详情，返回本机完整 idea（含 updates/links），供 get/import/export 复用。 */
  async detailIdea(ideaNo, connection) {
    const conn = connection ?? (await this.connection())
    const key = this.keyOf(ideaNo)
    const data = await this.request(`/ideas/${encodeURIComponent(key)}`, { connection: conn })
    return this.detailOf(this.extractIdea(data, key), data, key, conn.base)
  }

  /** GET /api/ideas/{idea_no}：详情。 */
  async get(ideaNo) {
    const idea = await this.detailIdea(ideaNo)
    return {
      ok: true,
      idea: projectDetail(idea),
      updates: sortEntries(idea.updates),
      links: sortEntries(idea.links),
    }
  }

  /** POST /api/ideas：入池。 */
  async add(body) {
    const setting = await this.settings.read()
    const fields = normalizeCreate(body, { device: setting.device })
    const conn = await this.connection()
    const data = await this.request('/ideas', {
      method: 'POST',
      connection: conn,
      body: {
        title: fields.title,
        raw_text: fields.raw_text,
        summary: fields.summary,
        tags: fields.tags,
        source: fields.source,
        source_note: fields.source_note,
      },
    })
    const idea = this.detailOf(this.extractIdea(data), {}, '', conn.base)
    return { ok: true, idea: projectDetail(idea) }
  }

  /** PATCH /api/ideas/{idea_no}：先 GET 取 rev，再带 if_rev 提交（契约 §11.4）。 */
  async update(ideaNo, body) {
    const key = this.keyOf(ideaNo)
    const patch = normalizePatch(body)
    const conn = await this.connection()
    // 先 GET：拿服务端当前 rev（同时校验这条想法在云端存在）
    const detailData = await this.request(`/ideas/${encodeURIComponent(key)}`, { connection: conn })
    const current = this.detailOf(this.extractIdea(detailData, key), detailData, key, conn.base)
    const rev = Number.isInteger(current.rev) ? current.rev : 0
    const data = await this.request(`/ideas/${encodeURIComponent(key)}`, {
      method: 'PATCH',
      connection: conn,
      body: { ...patch, if_rev: rev },
    })
    const idea = this.detailOf(this.extractIdea(data, key), data, key, conn.base)
    return { ok: true, idea: projectDetail(idea) }
  }

  /** POST /api/ideas/{idea_no}/updates：带 client_id 追加进展。 */
  async progress(ideaNo, body) {
    const key = this.keyOf(ideaNo)
    const fields = normalizeProgress(body)
    const setting = await this.settings.read()
    const conn = await this.connection()
    const clientId = this.clientId('u', body?.client_id)
    const data = await this.request(`/ideas/${encodeURIComponent(key)}/updates`, {
      method: 'POST',
      connection: conn,
      body: { content: fields.content, source: fields.source || setting.device, client_id: clientId },
    })
    const raw = data.update ?? (Array.isArray(data.updates) ? data.updates[data.updates.length - 1] : data)
    return { ok: true, update: this.updateOf(raw, clientId) }
  }

  /** POST /api/ideas/{idea_no}/links：带 client_id 挂产出。 */
  async link(ideaNo, body) {
    const key = this.keyOf(ideaNo)
    const fields = normalizeLink(body)
    const conn = await this.connection()
    const clientId = this.clientId('l', body?.client_id)
    const data = await this.request(`/ideas/${encodeURIComponent(key)}/links`, {
      method: 'POST',
      connection: conn,
      body: {
        title: fields.title,
        url: fields.url,
        ref_type: fields.ref_type,
        ref_id: fields.ref_id,
        client_id: clientId,
      },
    })
    const raw = data.link ?? (Array.isArray(data.links) ? data.links[data.links.length - 1] : data)
    return { ok: true, link: this.linkOf(raw, conn.base, clientId) }
  }

  /** DELETE /api/ideas/{idea_no}。 */
  async remove(ideaNo) {
    const key = this.keyOf(ideaNo)
    await this.request(`/ideas/${encodeURIComponent(key)}`, { method: 'DELETE' })
    return { ok: true }
  }

  /** 全量摘要（分页）→ 每条详情；导入与导出共用。 */
  async listAllDetailed() {
    const conn = await this.connection()
    const summaries = []
    let offset = 0
    let total = Number.POSITIVE_INFINITY
    for (let page = 0; page < MAX_PAGES; page += 1) {
      const result = await this.list({ limit: PAGE_LIMIT, offset })
      summaries.push(...result.ideas)
      total = Number.isInteger(result.total) ? result.total : summaries.length
      if (result.ideas.length === 0 || summaries.length >= total) break
      offset += result.ideas.length
    }
    const keys = summaries.map((row) => row.idea_no).filter(Boolean)
    const ideas = []
    for (let index = 0; index < keys.length; index += DETAIL_CONCURRENCY) {
      const chunk = keys.slice(index, index + DETAIL_CONCURRENCY)
      const rows = await Promise.all(chunk.map((key) => this.detailIdea(key, conn)))
      ideas.push(...rows)
    }
    return ideas
  }

  /** GET /api/export 的云端实现：全量列表 + 详情合并。 */
  async exportData() {
    const settings = await this.settings.read()
    const ideas = await this.listAllDetailed()
    return {
      ok: true,
      data: {
        schema: SCHEMA_VERSION,
        device: settings.device,
        exported_at: this.nowIso(),
        ideas: sortIdeas(ideas),
      },
    }
  }

  /**
   * POST /api/cloud/test：用覆盖值或已存配置 GET {base}/health。
   * 成功 { ok, base, count, latencyMs }；任何请求失败都归一成 502（契约 §11.2）。
   */
  async testConnection(body) {
    if (body !== undefined && body !== null && (typeof body !== 'object' || Array.isArray(body))) {
      throw new ContractError('请求体必须是 JSON 对象')
    }
    const input = body ?? {}
    const connection = await this.connection({ base: input.base, apiKey: input.apiKey })
    const started = Date.now()
    let data
    try {
      data = await this.request('/health', { connection })
    } catch (err) {
      if (err instanceof ContractError) throw new ContractError(err.message, 502)
      throw err
    }
    const count = Number.isInteger(data.count)
      ? data.count
      : Number.isInteger(data.total)
        ? data.total
        : Array.isArray(data.ideas)
          ? data.ideas.length
          : 0
    return { ok: true, base: connection.base, count, latencyMs: Math.max(0, Date.now() - started) }
  }
}
