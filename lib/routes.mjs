/**
 * 灵感池 HTTP 路由：/idea-pool/*。
 *
 * 路由由 ctx.webServer.register({ kind: 'prefix', path: '/idea-pool', handler }) 拿到原始
 * Node IncomingMessage / ServerResponse。安全只有一处：
 *   1. 每个请求先问 ctx.connection.requestRejection({ headers })（Host/Origin 栅栏 + 浏览器登录凭证），
 *      拿不到鉴权服务时一律 403；
 *   2. 写请求（非 GET/HEAD）再查 sec-fetch-site，存在且不是 same-origin/none 就 403；
 *   3. JSON body 上限 1 MB（超了 413）。
 * 最外层 try/catch 兜未预期异常 → 500，只回 err.message，不把堆栈发给浏览器。
 * 这里不 import DSH：鉴权服务由调用方通过 ctx 传进来，方便单测。
 */
import { ContractError } from './contract.mjs'

export const PREFIX = '/idea-pool'
/** JSON 请求体上限：1 MB（契约 §3）。 */
export const MAX_BODY_BYTES = 1024 * 1024

const CROSS_SITE_OK = new Set(['same-origin', 'none'])

/** 统一 JSON 响应；HEAD 只发头。 */
function sendJson(res, status, payload, { head = false } = {}) {
  if (!res.headersSent) {
    res.statusCode = status
    res.setHeader('content-type', 'application/json; charset=utf-8')
    res.setHeader('cache-control', 'no-store')
  }
  if (head) {
    res.end()
    return
  }
  res.end(JSON.stringify(payload))
}

/**
 * 取连接/鉴权服务：优先 ctx.connection，其次 ctx.get('connection')。
 * 拿不到就返回 undefined —— 调用方按 403 处理（fail closed）。
 */
export function connectionOf(ctx) {
  if (!ctx) return undefined
  let direct
  try {
    direct = ctx.connection
  } catch {
    direct = undefined
  }
  if (direct && typeof direct.requestRejection === 'function') return direct
  if (typeof ctx.get === 'function') {
    try {
      const service = ctx.get('connection')
      if (service && typeof service.requestRejection === 'function') return service
    } catch {
      return undefined
    }
  }
  return undefined
}

/**
 * 鉴权：返回拒绝状态码（403/401…），可以继续时 undefined。
 * 契约要求请求原样传给 connection.requestRejection（它只看 headers）。
 * @returns {number|undefined}
 */
export function requestRejection(ctx, req) {
  const connection = connectionOf(ctx)
  if (typeof connection?.requestRejection !== 'function') return 403
  try {
    const headers = req?.headers && typeof req.headers === 'object' ? req.headers : {}
    const rejection = connection.requestRejection({ headers })
    return Number.isInteger(rejection) && rejection > 0 ? rejection : undefined
  } catch {
    return 403
  }
}

/** 写请求的跨站检查：sec-fetch-site 存在且不是 same-origin/none。 */
function isCrossSiteWrite(req) {
  const raw = req?.headers?.['sec-fetch-site']
  const value = Array.isArray(raw) ? raw[0] : raw
  if (value === undefined || value === null || value === '') return false
  return !CROSS_SITE_OK.has(String(value).toLowerCase())
}

/**
 * 拆路由：把 /idea-pool 前缀去掉，按 / 切成段。
 * @param {string|undefined} rawUrl - req.url。
 */
export function splitRoute(rawUrl) {
  const url = new URL(typeof rawUrl === 'string' && rawUrl ? rawUrl : '/', 'http://localhost')
  let path = url.pathname
  if (path === PREFIX || path === `${PREFIX}/`) path = ''
  else if (path.startsWith(`${PREFIX}/`)) path = path.slice(PREFIX.length + 1)
  else path = path.replace(/^\/+/, '')
  return { url, parts: path.split('/').filter((part) => part !== '') }
}

/** 读 JSON body：上限 1 MB；空 body 当 {}；非法 JSON 400。 */
async function readBody(req) {
  if (!req || typeof req[Symbol.asyncIterator] !== 'function') return {}
  const declared = req.headers?.['content-length']
  if (typeof declared === 'string' && declared !== '' && Number(declared) > MAX_BODY_BYTES) {
    throw new ContractError('请求体超过 1 MB', 413)
  }
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
    size += buffer.length
    if (size > MAX_BODY_BYTES) throw new ContractError('请求体超过 1 MB', 413)
    chunks.push(buffer)
  }
  if (size === 0) return {}
  let parsed
  try {
    parsed = JSON.parse(Buffer.concat(chunks, size).toString('utf8'))
  } catch {
    throw new ContractError('请求不是有效的 JSON', 400)
  }
  return parsed
}

function decodeSegment(raw) {
  try {
    return decodeURIComponent(raw)
  } catch {
    throw new ContractError('路径无效', 400)
  }
}

function optionalInteger(raw, name) {
  if (raw === null || raw === undefined || raw === '') return undefined
  const text = String(raw).trim()
  if (!/^-?\d+$/.test(text)) throw new ContractError(`${name} 必须是整数`)
  const value = Number(text)
  if (!Number.isSafeInteger(value)) throw new ContractError(`${name} 必须是整数`)
  return value
}

/** 列表查询参数（status/q/limit/offset，契约 §3）。 */
function parseListQuery(url) {
  const params = url.searchParams
  return {
    status: params.get('status') ?? undefined,
    q: params.get('q') ?? undefined,
    limit: optionalInteger(params.get('limit'), 'limit'),
    offset: optionalInteger(params.get('offset'), 'offset'),
  }
}

/** 想法集合下的子路由：列表/入池、详情/改/删、进展、产出。 */
async function handleIdeas({ service, req, res, method, url, parts, notFound }) {
  const head = method === 'HEAD'
  const readOnly = method === 'GET' || method === 'HEAD'
  if (parts.length === 2) {
    if (readOnly) return sendJson(res, 200, await service.list(parseListQuery(url)), { head })
    if (method === 'POST') return sendJson(res, 200, await service.add(await readBody(req)))
    return notFound()
  }
  if (parts.length === 3) {
    const ideaNo = decodeSegment(parts[2])
    if (readOnly) return sendJson(res, 200, await service.get(ideaNo), { head })
    if (method === 'PATCH') return sendJson(res, 200, await service.update(ideaNo, await readBody(req)))
    if (method === 'DELETE') {
      req.resume?.()
      return sendJson(res, 200, await service.remove(ideaNo))
    }
    return notFound()
  }
  if (parts.length === 4) {
    const ideaNo = decodeSegment(parts[2])
    if (parts[3] === 'updates') {
      if (method !== 'POST') return notFound()
      return sendJson(res, 200, await service.progress(ideaNo, await readBody(req)))
    }
    if (parts[3] === 'links') {
      if (method !== 'POST') return notFound()
      return sendJson(res, 200, await service.link(ideaNo, await readBody(req)))
    }
  }
  return notFound()
}

async function dispatch({ service, req, res, method }) {
  const { url, parts } = splitRoute(req?.url)
  const head = method === 'HEAD'
  const readOnly = method === 'GET' || method === 'HEAD'
  const notFound = () => sendJson(res, 404, { ok: false, error: '接口不存在' }, { head })

  if (parts.length === 1 && parts[0] === 'health') {
    if (!readOnly) return notFound()
    return sendJson(res, 200, await service.health(), { head })
  }
  if (parts[0] !== 'api') return notFound()

  const section = parts[1]
  if (section === 'state') {
    if (parts.length !== 2 || !readOnly) return notFound()
    return sendJson(res, 200, await service.overview(), { head })
  }
  if (section === 'export') {
    if (parts.length !== 2 || !readOnly) return notFound()
    return sendJson(res, 200, await service.exportData(), { head })
  }
  if (section === 'undo') {
    if (parts.length !== 2 || method !== 'POST') return notFound()
    await readBody(req)
    return sendJson(res, 200, await service.undo())
  }
  if (section === 'settings') {
    if (parts.length !== 2) return notFound()
    if (readOnly) return sendJson(res, 200, await service.settingsPublic(), { head })
    if (method !== 'POST') return notFound()
    return sendJson(res, 200, await service.updateSettings(await readBody(req)))
  }
  if (section === 'cloud') {
    // 契约 §11.2：POST /api/cloud/test、POST /api/cloud/import-local
    if (parts.length !== 3) return notFound()
    const action = parts[2]
    if (action === 'test') {
      if (method !== 'POST') return notFound()
      return sendJson(res, 200, await service.cloudTest(await readBody(req)))
    }
    if (action === 'import-local') {
      if (method !== 'POST') return notFound()
      // body 不使用，但要读掉，避免 keep-alive 连接里残留
      await readBody(req)
      return sendJson(res, 200, await service.importLocal())
    }
    return notFound()
  }
  if (section === 'ideas') return handleIdeas({ service, req, res, method, url, parts, notFound })
  return notFound()
}

/**
 * 路由处理器工厂。
 * @param {object} parts
 * @param {object} parts.ctx - Cordis 上下文（用来取 connection 鉴权）。
 * @param {import('./service.mjs').IdeaService} parts.service - 业务入口。
 * @returns {(req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse) => Promise<void>}
 */
export function createRouteHandler({ ctx, service } = {}) {
  if (!service) throw new Error('createRouteHandler: service 是必填的')
  return async function route(req, res) {
    try {
      const rejection = requestRejection(ctx, req)
      if (rejection !== undefined) {
        sendJson(res, rejection, { ok: false, error: '未授权' })
        return
      }
      const method = String(req?.method ?? 'GET').toUpperCase()
      if (method !== 'GET' && method !== 'HEAD' && isCrossSiteWrite(req)) {
        sendJson(res, 403, { ok: false, error: '拒绝跨站请求' })
        return
      }
      await dispatch({ service, req, res, method })
    } catch (err) {
      if (res.headersSent) {
        try {
          res.end()
        } catch {
          // 响应已经发出去，没别的可做
        }
        return
      }
      const status = Number.isInteger(err?.status) ? err.status : 500
      sendJson(res, status, { ok: false, error: err?.message ? String(err.message) : '内部错误' })
    }
  }
}
