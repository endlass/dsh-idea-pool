// HTTP 路由单测：鉴权拒绝、sec-fetch-site、1MB 上限、404/400/500、完整 CRUD。
import test from 'node:test'
import assert from 'node:assert/strict'
import { IdeaService } from '../lib/service.mjs'
import { LocalStore } from '../lib/store-local.mjs'
import { Settings } from '../lib/settings.mjs'
import { createRouteHandler, requestRejection, splitRoute } from '../lib/routes.mjs'
import { cleanup, makeRes, makeReq, tempRoot } from './helpers.mjs'

const PREFIX = '/idea-pool'

function makeService(root) {
  const store = new LocalStore({ root, device: 'dsh-test' })
  const settings = new Settings({ root, device: 'dsh-test' })
  return new IdeaService({ store, settings })
}

/** 发一个真实路由请求（模拟 Node 原生 req/res）。 */
async function request(handler, { method = 'GET', path = '/health', headers = {}, body } = {}) {
  const res = makeRes()
  await handler(makeReq({ method, url: `${PREFIX}${path}`, headers, body: body === undefined ? undefined : typeof body === 'string' ? body : JSON.stringify(body) }), res)
  const json = res.body ? JSON.parse(res.body) : null
  return { res, json }
}

async function withRoutes(fn, { rejection } = {}) {
  const root = await tempRoot('idea-pool-routes')
  try {
    const service = makeService(root)
    const ctx = { connection: { requestRejection: () => rejection } }
    return await fn({ root, service, ctx, handler: createRouteHandler({ ctx, service }) })
  } finally {
    await cleanup(root)
  }
}

test('splitRoute：去掉前缀、切段、保留查询串', () => {
  assert.deepEqual(splitRoute('/idea-pool').parts, [])
  assert.deepEqual(splitRoute('/idea-pool/health').parts, ['health'])
  assert.deepEqual(splitRoute('/idea-pool/api/ideas/IDEA-001/updates?x=1').parts, ['api', 'ideas', 'IDEA-001', 'updates'])
  assert.deepEqual(splitRoute('/idea-pool/api/ideas/').parts, ['api', 'ideas'])
})

test('鉴权：拿不到 connection 服务一律 403', async () => {
  const root = await tempRoot('idea-pool-routes')
  try {
    const service = makeService(root)
    const handler = createRouteHandler({ ctx: {}, service })
    const { res, json } = await request(handler)
    assert.equal(res.statusCode, 403)
    assert.equal(json.ok, false)
    assert.equal(json.error, '未授权')
  } finally {
    await cleanup(root)
  }
})

test('鉴权：connection 返回 401 时原样拒绝；通过时正常响应', async () => {
  await withRoutes(
    async ({ handler }) => {
      const denied = await request(handler)
      assert.equal(denied.res.statusCode, 401)
      assert.equal(denied.json.ok, false)
    },
    { rejection: 401 },
  )
  await withRoutes(async ({ handler }) => {
    const { res, json } = await request(handler)
    assert.equal(res.statusCode, 200)
    assert.deepEqual(json, { ok: true, mode: 'local', count: 0 })
    assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
    assert.equal(res.headers['cache-control'], 'no-store')
  })
})

test('鉴权：requestRejection 收到的是 { headers: req.headers }（契约 §3）', async () => {
  const root = await tempRoot('idea-pool-routes')
  try {
    const service = makeService(root)
    const seen = []
    const ctx = { connection: { requestRejection: (input) => { seen.push(input); return undefined } } }
    const handler = createRouteHandler({ ctx, service })
    const headers = { host: '127.0.0.1:49680', cookie: 'token=abc' }
    await request(handler, { headers })
    assert.deepEqual(seen, [{ headers }])
    // 服务抛错时 fail closed
    const throwing = createRouteHandler({ ctx: { connection: { requestRejection: () => { throw new Error('boom') } } }, service })
    const { res } = await request(throwing)
    assert.equal(res.statusCode, 403)
  } finally {
    await cleanup(root)
  }
})

test('完整 CRUD：入池 → 列表 → 详情 → 改状态 → 加进展 → 挂产出 → 删除', async () => {
  await withRoutes(async ({ handler }) => {
    const raw = '第一行\n\n  第二行有  空格\r\n第三行'
    const created = await request(handler, {
      method: 'POST',
      path: '/api/ideas',
      headers: { 'content-type': 'application/json' },
      body: { raw_text: `  ${raw}  `, tags: 'DSH, 插件' },
    })
    assert.equal(created.res.statusCode, 200)
    assert.equal(created.json.ok, true)
    assert.equal(created.json.idea.idea_no, 'IDEA-001')
    assert.equal(created.json.idea.raw_text, raw)
    assert.deepEqual(created.json.idea.tags, ['DSH', '插件'])

    const list = await request(handler, { path: '/api/ideas?q=第二行' })
    assert.equal(list.json.total, 1)
    assert.equal(list.json.ideas[0].idea_no, 'IDEA-001')

    const detail = await request(handler, { path: '/api/ideas/idea-001' })
    assert.equal(detail.json.idea.raw_text, raw)

    const patched = await request(handler, {
      method: 'PATCH',
      path: '/api/ideas/IDEA-001',
      headers: { 'content-type': 'application/json' },
      body: { status: 'active', summary: '摘要' },
    })
    assert.equal(patched.json.idea.status, 'active')
    assert.equal(patched.json.idea.rev, 2)

    const progress = await request(handler, {
      method: 'POST',
      path: '/api/ideas/IDEA-001/updates',
      headers: { 'content-type': 'application/json' },
      body: { content: '做了第一步' },
    })
    assert.match(progress.json.update.id, /^u_/)

    const link = await request(handler, {
      method: 'POST',
      path: '/api/ideas/IDEA-001/links',
      headers: { 'content-type': 'application/json' },
      body: { url: 'https://example.com/out' },
    })
    assert.match(link.json.link.id, /^l_/)

    const state = await request(handler, { path: '/api/state' })
    assert.equal(state.json.total, 1)
    assert.equal(state.json.counts.active, 1)
    assert.equal(state.json.ideas[0].n_updates, 1)
    assert.equal(state.json.ideas[0].n_links, 1)
    assert.equal(state.json.ideas[0].raw_text, undefined)

    const removed = await request(handler, { method: 'DELETE', path: '/api/ideas/IDEA-001' })
    assert.equal(removed.json.ok, true)
    const gone = await request(handler, { path: '/api/ideas/IDEA-001' })
    assert.equal(gone.res.statusCode, 404)
    assert.equal(gone.json.error, 'idea not found: IDEA-001')
  })
})

test('serverWorks：健康检查、设置、导出、撤销', async () => {
  await withRoutes(async ({ handler }) => {
    await request(handler, { path: '/health' })
    const health = await request(handler, { path: '/health' })
    assert.deepEqual(health.json, { ok: true, mode: 'local', count: 0 })

    const add = await request(handler, {
      method: 'POST',
      path: '/api/ideas',
      headers: { 'content-type': 'application/json' },
      body: { title: '工具条' },
    })
    assert.equal(add.json.ok, true)

    const undo = await request(handler, { method: 'POST', path: '/api/undo' })
    assert.equal(undo.res.statusCode, 200)
    assert.match(undo.json.label, /入池/)
    assert.equal(undo.json.state.total, 0)
    assert.equal(undo.json.state.ok, true)

    const noUndo = await request(handler, { method: 'POST', path: '/api/undo' })
    assert.equal(noUndo.res.statusCode, 409)

    const settings = await request(handler, { path: '/api/settings' })
    assert.equal(settings.json.settings.device, 'dsh-test')
    assert.equal(settings.json.settings.mode, 'local')
    assert.equal(settings.json.settings.apiKey, undefined)

    const updated = await request(handler, {
      method: 'POST',
      path: '/api/settings',
      headers: { 'content-type': 'application/json' },
      body: { device: 'dsh-route' },
    })
    assert.equal(updated.json.settings.device, 'dsh-route')
    const state = await request(handler, { path: '/api/state' })
    assert.equal(state.json.device, 'dsh-route')

    const exported = await request(handler, { path: '/api/export' })
    assert.equal(exported.json.data.schema, 1)
    assert.equal(Array.isArray(exported.json.data.ideas), true)
    assert.equal(typeof exported.json.data.exported_at, 'string')
  })
})

test('sec-fetch-site：写请求跨站 403，GET 不检查；same-origin/none 放行', async () => {
  await withRoutes(async ({ handler, service }) => {
    const body = { raw_text: '跨站测试' }
    const cross = await request(handler, {
      method: 'POST',
      path: '/api/ideas',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'cross-site' },
      body,
    })
    assert.equal(cross.res.statusCode, 403)
    assert.equal(cross.json.error, '拒绝跨站请求')
    assert.equal((await service.overview()).total, 0)

    const sameSite = await request(handler, {
      method: 'POST',
      path: '/api/ideas',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'same-origin' },
      body: { raw_text: '同源' },
    })
    assert.equal(sameSite.res.statusCode, 200)
    const none = await request(handler, {
      method: 'POST',
      path: '/api/ideas',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'none' },
      body: { raw_text: '直接导航' },
    })
    assert.equal(none.res.statusCode, 200)

    // GET 不做跨站检查
    const read = await request(handler, { path: '/api/state', headers: { 'sec-fetch-site': 'cross-site' } })
    assert.equal(read.res.statusCode, 200)
  })
})

test('404：未知路径、未知编号、错误方法', async () => {
  await withRoutes(async ({ handler }) => {
    const unknown = await request(handler, { path: '/api/nope' })
    assert.equal(unknown.res.statusCode, 404)
    assert.equal(unknown.json.ok, false)

    const missing = await request(handler, { path: '/api/ideas/IDEA-999' })
    assert.equal(missing.res.statusCode, 404)
    assert.equal(missing.json.error, 'idea not found: IDEA-999')

    const wrongMethod = await request(handler, { method: 'PUT', path: '/api/ideas' })
    assert.equal(wrongMethod.res.statusCode, 404)
    const wrongMethod2 = await request(handler, { method: 'POST', path: '/api/state' })
    assert.equal(wrongMethod2.res.statusCode, 404)
  })
})

test('400：非法 JSON、非法状态、空入池、非法查询参数', async () => {
  await withRoutes(async ({ handler }) => {
    const badJson = await request(handler, { method: 'POST', path: '/api/ideas', body: '{oops' })
    assert.equal(badJson.res.statusCode, 400)
    assert.equal(badJson.json.error, '请求不是有效的 JSON')

    const empty = await request(handler, { method: 'POST', path: '/api/ideas', body: {} })
    assert.equal(empty.res.statusCode, 400)
    assert.equal(empty.json.error, 'raw_text 或 title 至少填一个')

    const create = await request(handler, {
      method: 'POST',
      path: '/api/ideas',
      body: { raw_text: '状态校验' },
    })
    assert.equal(create.res.statusCode, 200)
    const badStatus = await request(handler, {
      method: 'PATCH',
      path: '/api/ideas/IDEA-001',
      body: { status: 'doing' },
    })
    assert.equal(badStatus.res.statusCode, 400)
    assert.match(badStatus.json.error, /status 不合法/)

    const badLimit = await request(handler, { path: '/api/ideas?limit=abc' })
    assert.equal(badLimit.res.statusCode, 400)
    const badStatusQuery = await request(handler, { path: '/api/ideas?status=nope' })
    assert.equal(badStatusQuery.res.statusCode, 400)
  })
})

test('413：body 超过 1 MB', async () => {
  await withRoutes(async ({ handler }) => {
    const big = JSON.stringify({ raw_text: 'x'.repeat(1024 * 1024 + 16) })
    const byStream = await request(handler, { method: 'POST', path: '/api/ideas', body: big })
    assert.equal(byStream.res.statusCode, 413)
    assert.equal(byStream.json.ok, false)

    const byHeader = await request(handler, {
      method: 'POST',
      path: '/api/ideas',
      headers: { 'content-length': String(2 * 1024 * 1024) },
      body: { raw_text: 'small' },
    })
    assert.equal(byHeader.res.statusCode, 413)
  })
})

test('HEAD：只发头不发 body', async () => {
  await withRoutes(async ({ handler }) => {
    const { res } = await request(handler, { method: 'HEAD', path: '/health' })
    assert.equal(res.statusCode, 200)
    assert.equal(res.body, '')
    assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  })
})

test('500：未预期异常只回 message，不带堆栈', async () => {
  const service = {
    async list() {
      throw new Error('boom')
    },
  }
  const handler = createRouteHandler({ ctx: { connection: { requestRejection: () => undefined } }, service })
  const { res, json } = await request(handler, { path: '/api/ideas' })
  assert.equal(res.statusCode, 500)
  assert.deepEqual(json, { ok: false, error: 'boom' })
  assert.equal(JSON.stringify(json).includes('at '), false)
})

test('requestRejection：没有鉴权服务直接 403，正常服务透传状态码', () => {
  assert.equal(requestRejection({}, makeReq()), 403)
  assert.equal(requestRejection({ get: () => undefined }, makeReq()), 403)
  const ok = { connection: { requestRejection: () => undefined } }
  assert.equal(requestRejection(ok, makeReq()), undefined)
  const denied = { connection: { requestRejection: () => 403 } }
  assert.equal(requestRejection(denied, makeReq()), 403)
  const viaCtx = { get: (name) => (name === 'connection' ? { requestRejection: () => 401 } : undefined) }
  assert.equal(requestRejection(viaCtx, makeReq()), 401)
})
