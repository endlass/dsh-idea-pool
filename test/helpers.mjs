// 测试共用工具：临时数据目录、模拟 Node 原生 req/res、模拟 Cordis ctx。
// 文件名不以 .test.mjs 结尾，`node --test test/*.test.mjs` 不会把它当测试跑。
import { mkdtemp, rm } from 'node:fs/promises'
import { createServer } from 'node:http'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Readable } from 'node:stream'

export async function tempRoot(label = 'idea-pool-test') {
  return mkdtemp(join(tmpdir(), `${label}-`))
}

export async function cleanup(root) {
  if (!root) return
  await rm(root, { recursive: true, force: true })
}

/** 模拟 IncomingMessage：可异步迭代的 Readable + method/url/headers。 */
export function makeReq({ method = 'GET', url = '/idea-pool/health', headers = {}, body } = {}) {
  const chunks = body === undefined ? [] : [Buffer.isBuffer(body) ? body : Buffer.from(String(body))]
  const req = Readable.from(chunks)
  req.method = method
  req.url = url
  req.headers = headers
  return req
}

/** 模拟 ServerResponse：记录 status/headers/body。 */
export function makeRes() {
  return {
    statusCode: 200,
    headers: {},
    headersSent: false,
    ended: false,
    body: '',
    chunks: [],
    setHeader(name, value) {
      this.headers[String(name).toLowerCase()] = value
    },
    end(data) {
      if (data !== undefined) this.chunks.push(Buffer.isBuffer(data) ? data : Buffer.from(String(data)))
      this.body = Buffer.concat(this.chunks).toString('utf8')
      this.headersSent = true
      this.ended = true
    },
  }
}

export function parseBody(res) {
  return res.body ? JSON.parse(res.body) : null
}

/** 发一个请求并返回 { res, json }。 */
export async function call(handler, options) {
  const req = makeReq(options)
  const res = makeRes()
  await handler(req, res)
  return { res, json: parseBody(res) }
}

/**
 * 模拟 Cordis 上下文：效果注册会被立即执行，disposer 收集起来。
 * @param {{rejection?: number}} [options] - connection.requestRejection 的返回值。
 */
export function makeCtx({ rejection } = {}) {
  const registrations = { webServer: [], tools: [] }
  const disposers = []
  const ctx = {
    connection: { requestRejection: () => rejection },
    webServer: {
      register(route) {
        registrations.webServer.push(route)
        const dispose = () => {}
        disposers.push(dispose)
        return dispose
      },
    },
    tools: {
      register(definition) {
        registrations.tools.push(definition)
        const dispose = () => {}
        disposers.push(dispose)
        return dispose
      },
    },
    effect(callback) {
      const dispose = callback()
      disposers.push(typeof dispose === 'function' ? dispose : () => {})
      return () => {}
    },
  }
  return { ctx, registrations, disposers }
}

/* ---------- 本地 mock 云端（ideas-api 形状，不发外网） ---------- */

const CLOUD_STAMP = '2026-11-08 12:00'
const CLOUD_STAMP_LATER = '2026-11-08 13:30'

/**
 * 起一个 node:http mock 云端，模拟 CONTRACT §11.4/§11.6 的 ideas-api：
 * - /health 公开；其余接口要求 X-API-Key；
 * - GET /ideas 支持 status/q/limit/offset，返回 counts/total；
 * - GET /ideas/{no} 返回{idea,updates,links}；时间用云端「YYYY-MM-DD HH:MM」格式；
 * - PATCH 支持 if_rev（冲突 409）、POST updates/links 支持 client_id 幂等。
 * @param {{apiKey?: string, ideas?: object[]}} [options]
 */
export async function startMockCloud({ apiKey = 'test-key-1234', ideas = [] } = {}) {
  let idCounter = 0
  const state = {
    apiKey,
    requests: [],
    ideas: new Map(),
    failNext: null,
    delayNextMs: 0,
    patchConflict: false,
    healthDelayMs: 0,
  }
  for (const seed of ideas) {
    const ideaNo = String(seed.idea_no ?? `IDEA-${900 + idCounter}`).toUpperCase()
    state.ideas.set(ideaNo, {
      idea_no: ideaNo,
      title: seed.title ?? '',
      raw_text: seed.raw_text ?? '',
      summary: seed.summary ?? '',
      status: seed.status ?? 'pool',
      tags: Array.isArray(seed.tags) ? [...seed.tags] : [],
      source: seed.source ?? 'cloud',
      source_note: seed.source_note ?? '',
      created_at: seed.created_at ?? CLOUD_STAMP,
      updated_at: seed.updated_at ?? seed.created_at ?? CLOUD_STAMP,
      rev: Number.isInteger(seed.rev) ? seed.rev : 1,
      updates: (Array.isArray(seed.updates) ? seed.updates : []).map((row) => ({
        id: row.id ?? ++idCounter,
        client_id: row.client_id ?? null,
        content: row.content ?? '',
        source: row.source ?? '',
        created_at: row.created_at ?? CLOUD_STAMP,
      })),
      links: (Array.isArray(seed.links) ? seed.links : []).map((row) => ({
        id: row.id ?? ++idCounter,
        client_id: row.client_id ?? null,
        title: row.title ?? '',
        url: row.url ?? '',
        ref_type: row.ref_type ?? 'external',
        ref_id: row.ref_id ?? '',
        created_at: row.created_at ?? CLOUD_STAMP,
      })),
    })
  }

  const statusRows = () => {
    const counts = { pool: 0, active: 0, parked: 0, done: 0, total: 0 }
    for (const idea of state.ideas.values()) {
      if (Object.hasOwn(counts, idea.status) && idea.status !== 'total') counts[idea.status] += 1
      counts.total += 1
    }
    return counts
  }
  const summaryOf = (idea) => ({
    idea_no: idea.idea_no,
    title: idea.title,
    summary: idea.summary,
    status: idea.status,
    tags: [...idea.tags],
    source: idea.source,
    created_at: idea.created_at,
    updated_at: idea.updated_at,
    n_updates: idea.updates.length,
    n_links: idea.links.length,
  })
  const ideaOut = (idea) => {
    const { updates, links, ...rest } = idea
    return { ...rest, n_updates: updates.length, n_links: links.length }
  }
  const matchQuery = (idea, q) => {
    if (!q) return true
    const needle = String(q).toLowerCase()
    const hay = [idea.idea_no, idea.title, idea.summary, idea.raw_text, ...idea.tags].join('\n').toLowerCase()
    return hay.includes(needle)
  }

  const server = createServer(async (req, res) => {
    const send = (status, body) => {
      res.statusCode = status
      res.setHeader('content-type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(body))
    }
    let body = {}
    try {
      const chunks = []
      for await (const chunk of req) chunks.push(chunk)
      const text = Buffer.concat(chunks).toString('utf8')
      if (text) body = JSON.parse(text)
    } catch {
      send(400, { ok: false, error: 'bad json' })
      return
    }
    const url = new URL(req.url ?? '/', 'http://mock')
    const entry = { method: req.method, path: url.pathname, query: Object.fromEntries(url.searchParams), headers: req.headers, body }
    state.requests.push(entry)
    try {
      if (state.failNext) {
        const failure = state.failNext
        state.failNext = null
        send(failure.status, failure.body)
        return
      }
      if (state.delayNextMs > 0) {
        const delay = state.delayNextMs
        state.delayNextMs = 0
        await new Promise((resolve) => setTimeout(resolve, delay))
      }
      if (url.pathname === '/health') {
        if (state.healthDelayMs > 0) await new Promise((resolve) => setTimeout(resolve, state.healthDelayMs))
        send(200, { ok: true, service: 'ideas-api', count: state.ideas.size })
        return
      }
      if (req.headers['x-api-key'] !== apiKey) {
        send(401, { ok: false, error: 'unauthorized' })
        return
      }
      const segments = url.pathname.split('/').filter(Boolean)
      // /ideas
      if (segments[0] !== 'ideas') {
        send(404, { ok: false, error: 'not found' })
        return
      }
      if (segments.length === 1 && req.method === 'GET') {
        const status = url.searchParams.get('status') ?? ''
        const q = url.searchParams.get('q') ?? ''
        const limit = Number(url.searchParams.get('limit') ?? 500)
        const offset = Number(url.searchParams.get('offset') ?? 0)
        const filtered = [...state.ideas.values()]
          .filter((idea) => (status ? idea.status === status : true))
          .filter((idea) => matchQuery(idea, q))
        const total = filtered.length
        send(200, {
          ok: true,
          ideas: filtered.slice(offset, offset + limit).map(summaryOf),
          counts: statusRows(),
          total,
        })
        return
      }
      if (segments.length === 1 && req.method === 'POST') {
        if (!body.title && !body.raw_text) {
          send(400, { ok: false, error: 'raw_text 或 title 至少填一个' })
          return
        }
        idCounter += 1
        const ideaNo = String(body.idea_no ?? `IDEA-${900 + idCounter}`).toUpperCase()
        const idea = {
          idea_no: ideaNo,
          title: body.title ?? body.raw_text?.slice(0, 40) ?? '',
          raw_text: body.raw_text ?? '',
          summary: body.summary ?? '',
          status: 'pool',
          tags: Array.isArray(body.tags) ? body.tags : [],
          source: body.source ?? 'cloud',
          source_note: body.source_note ?? '',
          created_at: CLOUD_STAMP,
          updated_at: CLOUD_STAMP,
          rev: 1,
          updates: [],
          links: [],
        }
        state.ideas.set(ideaNo, idea)
        send(200, { ok: true, idea: ideaOut(idea) })
        return
      }
      const ideaNo = String(segments[1] ?? '').toUpperCase()
      const idea = state.ideas.get(ideaNo)
      if (segments.length === 2 && req.method === 'GET') {
        if (!idea) {
          send(404, { ok: false, error: 'idea not found' })
          return
        }
        send(200, { ok: true, idea: ideaOut(idea), updates: idea.updates, links: idea.links })
        return
      }
      if (segments.length === 2 && req.method === 'PATCH') {
        if (!idea) {
          send(404, { ok: false, error: 'idea not found' })
          return
        }
        if (state.patchConflict || (body.if_rev !== undefined && body.if_rev !== idea.rev)) {
          send(409, { ok: false, error: 'version conflict', current: ideaOut(idea) })
          return
        }
        for (const field of ['title', 'raw_text', 'summary', 'status', 'tags', 'source_note']) {
          if (body[field] !== undefined) idea[field] = body[field]
        }
        idea.rev += 1
        idea.updated_at = CLOUD_STAMP_LATER
        send(200, { ok: true, idea: ideaOut(idea) })
        return
      }
      if (segments.length === 2 && req.method === 'DELETE') {
        if (!idea) {
          send(404, { ok: false, error: 'idea not found' })
          return
        }
        state.ideas.delete(ideaNo)
        send(200, { ok: true })
        return
      }
      if (segments.length === 3 && segments[2] === 'updates' && req.method === 'POST') {
        if (!idea) {
          send(404, { ok: false, error: 'idea not found' })
          return
        }
        const existing = body.client_id ? idea.updates.find((row) => row.client_id === body.client_id) : null
        if (existing) {
          send(200, { ok: true, update: existing, idea: ideaOut(idea) })
          return
        }
        const row = {
          id: ++idCounter,
          client_id: body.client_id ?? null,
          content: body.content ?? '',
          source: body.source ?? '',
          created_at: CLOUD_STAMP_LATER,
        }
        idea.updates.push(row)
        idea.rev += 1
        idea.updated_at = CLOUD_STAMP_LATER
        send(200, { ok: true, update: row, idea: ideaOut(idea) })
        return
      }
      if (segments.length === 3 && segments[2] === 'links' && req.method === 'POST') {
        if (!idea) {
          send(404, { ok: false, error: 'idea not found' })
          return
        }
        const existing = body.client_id ? idea.links.find((row) => row.client_id === body.client_id) : null
        if (existing) {
          send(200, { ok: true, link: existing, idea: ideaOut(idea) })
          return
        }
        const row = {
          id: ++idCounter,
          client_id: body.client_id ?? null,
          title: body.title ?? body.url ?? '',
          url: body.url ?? '',
          ref_type: body.ref_type ?? 'external',
          ref_id: body.ref_id ?? '',
          created_at: CLOUD_STAMP_LATER,
        }
        idea.links.push(row)
        idea.rev += 1
        idea.updated_at = CLOUD_STAMP_LATER
        send(200, { ok: true, link: row, idea: ideaOut(idea) })
        return
      }
      send(404, { ok: false, error: 'not found' })
    } catch (err) {
      send(500, { ok: false, error: err?.message ?? 'mock error' })
    }
  })

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  const { port } = server.address()
  return {
    url: `http://127.0.0.1:${port}`,
    state,
    apiKey,
    requests: state.requests,
    async close() {
      await new Promise((resolve) => {
        server.closeAllConnections?.()
        server.close(() => resolve())
      })
    },
  }
}
