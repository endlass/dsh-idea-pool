// index.js 接线单测：name/inject/apply、ctx.effect 注册前缀路由与 idea_pool 工具、端到端可用。
import test from 'node:test'
import assert from 'node:assert/strict'
import { rm } from 'node:fs/promises'
import { apply, inject, name } from '../index.js'
import { call, makeCtx, makeReq, makeRes, parseBody, tempRoot } from './helpers.mjs'

test('导出契约：name / inject / apply', () => {
  assert.equal(name, 'dsh-idea-pool')
  assert.deepEqual(inject, ['webServer', 'connection', 'tools'])
  assert.equal(typeof apply, 'function')
})

test('apply：用 ctx.effect 注册 /idea-pool 前缀路由与 idea_pool 工具，并端到端可用', async () => {
  const root = await tempRoot('idea-pool-index')
  const previousHome = process.env.DSH_HOME
  process.env.DSH_HOME = root
  try {
    const { ctx, registrations, disposers } = makeCtx({ rejection: undefined })
    apply(ctx)

    assert.equal(registrations.webServer.length, 1)
    const route = registrations.webServer[0]
    assert.equal(route.kind, 'prefix')
    assert.equal(route.path, '/idea-pool')
    assert.equal(typeof route.handler, 'function')

    assert.equal(registrations.tools.length, 1)
    const tool = registrations.tools[0]
    assert.equal(tool.name, 'idea_pool')
    assert.equal(typeof tool.execute, 'function')
    assert.equal(typeof tool.output.render, 'function')

    // 两个注册都走了 ctx.effect（会自动随插件卸载摘掉）
    assert.ok(disposers.length >= 2)

    // 路由可用：health → 加一条 → state
    const health = await call(route.handler, { method: 'GET', url: '/idea-pool/health' })
    assert.equal(health.res.statusCode, 200)
    assert.deepEqual(health.json, { ok: true, mode: 'local', count: 0 })

    const added = await call(route.handler, {
      method: 'POST',
      url: '/idea-pool/api/ideas',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ raw_text: '从 JSON 导入的想法', tags: ['DSH'] }),
    })
    assert.equal(added.res.statusCode, 200)
    assert.equal(added.json.idea.idea_no, 'IDEA-001')
    assert.equal(added.json.idea.raw_text, '从 JSON 导入的想法')

    const state = await call(route.handler, { method: 'GET', url: '/idea-pool/api/state' })
    assert.equal(state.json.total, 1)
    assert.equal(state.json.device, state.json.device) // 存在且为字符串
    assert.equal(typeof state.json.device, 'string')

    // 工具与路由共用同一个 IdeaService
    const list = await tool.execute({ action: 'list' })
    assert.equal(list.total, 1)
    assert.equal(list.ideas[0].idea_no, 'IDEA-001')
    const toolAdded = await tool.execute({ action: 'add', raw_text: '工具加的' })
    assert.equal(toolAdded.idea.idea_no, 'IDEA-002')
    const after = await call(route.handler, { method: 'GET', url: '/idea-pool/api/state' })
    assert.equal(after.json.total, 2)

    // 撤销经由路由，state 与 /api/state 同形
    const undo = await call(route.handler, { method: 'POST', url: '/idea-pool/api/undo' })
    assert.match(undo.json.label, /入池/)
    assert.equal(undo.json.state.total, 1)
  } finally {
    if (previousHome === undefined) delete process.env.DSH_HOME
    else process.env.DSH_HOME = previousHome
    await rm(root, { recursive: true, force: true })
  }
})

test('apply：鉴权服务拒绝时路由整体 403', async () => {
  const root = await tempRoot('idea-pool-index-denied')
  const previousHome = process.env.DSH_HOME
  process.env.DSH_HOME = root
  try {
    const { ctx, registrations } = makeCtx({ rejection: 403 })
    apply(ctx)
    const route = registrations.webServer[0]
    const res = makeRes()
    await route.handler(makeReq({ url: '/idea-pool/health' }), res)
    assert.equal(res.statusCode, 403)
    assert.equal(parseBody(res).ok, false)
  } finally {
    if (previousHome === undefined) delete process.env.DSH_HOME
    else process.env.DSH_HOME = previousHome
    await rm(root, { recursive: true, force: true })
  }
})
