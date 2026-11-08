// IdeaService facade + 路由单测：按 settings.mode 路由、云端 overview/undo、settings 规则、新端点。
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'
import { IdeaService } from '../lib/service.mjs'
import { createRouteHandler } from '../lib/routes.mjs'
import { Settings } from '../lib/settings.mjs'
import { call, cleanup, makeCtx, startMockCloud, tempRoot } from './helpers.mjs'

const API_KEY = 'test-key-1234'

function seedIdeas() {
  return [
    { idea_no: 'IDEA-101', title: '云端一', raw_text: '云端原文', status: 'active', rev: 3, tags: ['cloud'] },
    { idea_no: 'IDEA-102', title: '云端二', raw_text: '第二条', status: 'pool', rev: 1 },
  ]
}

async function withFacade(fn, { ideas = seedIdeas(), mode = 'local' } = {}) {
  const mock = await startMockCloud({ apiKey: API_KEY, ideas })
  const root = await tempRoot('idea-pool-facade')
  try {
    const settings = new Settings({ root, device: 'dsh-test' })
    if (mode === 'cloud') {
      await settings.update({ mode: 'cloud', cloud: { base: mock.url, apiKey: API_KEY } })
    }
    const service = new IdeaService({ root, settings, cloudTimeoutMs: 2000 })
    return await fn({ mock, settings, service, root })
  } finally {
    await cleanup(root)
    await mock.close()
  }
}

async function switchToCloud(service, mock) {
  return service.updateSettings({ mode: 'cloud', cloud: { base: mock.url, apiKey: API_KEY } })
}

test('local 模式默认：overview/health/settings 形状（cloudBase=null、storagePath 有值）', async () => {
  await withFacade(async ({ service }) => {
    const overview = await service.overview()
    assert.equal(overview.mode, 'local')
    assert.match(overview.storagePath, /state\.json$/)
    assert.equal(overview.cloudBase, null)
    assert.equal(overview.canUndo, false)
    assert.equal(overview.device, 'dsh-test')
    assert.deepEqual(await service.health(), { ok: true, mode: 'local', count: 0 })

    const publicSettings = await service.settingsPublic()
    assert.equal(publicSettings.settings.mode, 'local')
    assert.equal(publicSettings.settings.storagePath, service.file)
    assert.equal(publicSettings.settings.cloud.hasKey, false)
    assert.equal(publicSettings.settings.cloud.keyHint, '')
    assert.equal(JSON.stringify(publicSettings).includes('apiKey'), false)
  })
})

test('切到 cloud：settings/overview/health 形状；storagePath=null、cloudBase、canUndo 恒 false', async () => {
  await withFacade(async ({ mock, service }) => {
    const settings = await switchToCloud(service, mock)
    assert.equal(settings.settings.mode, 'cloud')
    assert.equal(settings.settings.storagePath, null)
    assert.equal(settings.settings.cloud.base, mock.url)
    assert.equal(settings.settings.cloud.hasKey, true)
    assert.equal(settings.settings.cloud.keyHint, '1234')
    assert.equal(JSON.stringify(settings).includes(API_KEY), false)

    const overview = await service.overview()
    assert.equal(overview.ok, true)
    assert.equal(overview.mode, 'cloud')
    assert.equal(overview.storagePath, null)
    assert.equal(overview.cloudBase, mock.url)
    assert.equal(overview.canUndo, false)
    assert.equal(overview.device, 'dsh-test')
    assert.equal(overview.total, 2)
    assert.deepEqual(overview.counts, { pool: 1, active: 1, parked: 0, done: 0, total: 2 })
    assert.deepEqual(overview.ideas.map((idea) => idea.idea_no), ['IDEA-101', 'IDEA-102'])

    assert.deepEqual(await service.health(), { ok: true, mode: 'cloud', count: 2 })
  })
})

test('cloud 模式：list/get/add/update/progress/link/remove/export 全走云端', async () => {
  await withFacade(async ({ mock, service }) => {
    await switchToCloud(service, mock)

    const list = await service.list({ status: 'active' })
    assert.equal(list.total, 1)
    assert.equal(list.ideas[0].idea_no, 'IDEA-101')

    const detail = await service.get('IDEA-101')
    assert.equal(detail.idea.rev, 3)

    const added = await service.add({ raw_text: '从云端模式入池' })
    assert.match(added.idea.idea_no, /^IDEA-/)
    const addRequest = mock.requests.find((row) => row.method === 'POST' && row.path === '/ideas')
    assert.equal(addRequest.body.raw_text, '从云端模式入池')

    const updated = await service.update(added.idea.idea_no, { status: 'active' })
    assert.equal(updated.idea.status, 'active')
    assert.equal(updated.idea.rev, 2)

    const progress = await service.progress('IDEA-101', { content: '云端模式加进展' })
    assert.match(progress.update.id, /^u_c_/)
    const progressRequest = mock.requests.find((row) => row.path === '/ideas/IDEA-101/updates')
    assert.match(progressRequest.body.client_id, /^u_\d+_/)

    const link = await service.link('IDEA-101', { url: 'https://example.com/a' })
    assert.equal(link.link.url, 'https://example.com/a')

    const exported = await service.exportData()
    assert.equal(exported.data.schema, 1)
    assert.equal(exported.data.device, 'dsh-test')
    assert.equal(exported.data.ideas.some((idea) => idea.idea_no === 'IDEA-101'), true)
    assert.equal(JSON.stringify(exported).includes(API_KEY), false)

    const removed = await service.remove(added.idea.idea_no)
    assert.deepEqual(removed, { ok: true })
    assert.equal((await service.list({})).total, 2)
  })
})

test('cloud 模式：undo 409「云端模式暂不支持撤销」；回到 local 后本机数据还在', async () => {
  await withFacade(async ({ mock, service }) => {
    // 先在本机模式放一条数据
    const localIdea = await service.add({ raw_text: '本机的一条' })
    assert.equal(localIdea.idea.idea_no, 'IDEA-001')
    assert.equal((await service.overview()).canUndo, true)

    await switchToCloud(service, mock)
    await assert.rejects(service.undo(), (err) => {
      assert.equal(err.status, 409)
      assert.equal(err.message, '云端模式暂不支持撤销')
      return true
    })

    // 切回本机：本机 ideas 原样还在
    const back = await service.updateSettings({ mode: 'local' })
    assert.equal(back.settings.mode, 'local')
    assert.match(back.settings.storagePath, /state\.json$/)
    const overview = await service.overview()
    assert.equal(overview.mode, 'local')
    assert.equal(overview.total, 1)
    assert.equal(overview.ideas[0].idea_no, 'IDEA-001')
  })
})

test('cloud 模式错误经 facade 映射：401/409/502', async () => {
  await withFacade(async ({ mock, service }) => {
    await switchToCloud(service, mock)

    mock.state.failNext = { status: 401, body: { ok: false, error: 'unauthorized' } }
    await assert.rejects(service.list({}), (err) => err.status === 401 && /云端鉴权失败/.test(err.message))

    mock.state.patchConflict = true
    await assert.rejects(service.update('IDEA-101', { status: 'done' }), (err) => err.status === 409 && /请刷新后重试/.test(err.message))

    mock.state.failNext = { status: 500, body: { error: 'kaboom' } }
    await assert.rejects(service.get('IDEA-101'), (err) => err.status === 502 && /HTTP 500/.test(err.message))
  })
})

test('settings 规则：mode/base/apiKey/clearKey 校验与 600 落盘，公开视图无密钥', async () => {
  await withFacade(async ({ mock, service, root }) => {
    await assert.rejects(service.updateSettings({ mode: 'sync' }), (err) => err.status === 400 && /mode 不合法/.test(err.message))
    await assert.rejects(service.updateSettings({ cloud: { base: 'ftp://x' } }), (err) => err.status === 400)

    await service.updateSettings({ cloud: { base: `${mock.url}///`, apiKey: `  ${API_KEY}  ` } })
    let settings = await service.settingsPublic()
    assert.equal(settings.settings.cloud.base, mock.url)
    assert.equal(settings.settings.cloud.hasKey, true)
    assert.equal(settings.settings.cloud.keyHint, '1234')
    assert.equal(JSON.stringify(settings).includes(API_KEY), false)

    // apiKey 空串不改；clearKey 清空
    await service.updateSettings({ cloud: { apiKey: '' } })
    assert.equal((await service.settingsPublic()).settings.cloud.hasKey, true)
    await service.updateSettings({ cloud: { clearKey: true } })
    settings = await service.settingsPublic()
    assert.equal(settings.settings.cloud.hasKey, false)
    assert.equal(settings.settings.cloud.keyHint, '')

    const file = join(root, 'settings.json')
    assert.equal((await stat(file)).mode & 0o777, 0o600)
    const saved = JSON.parse(await readFile(file, 'utf8'))
    assert.equal(saved.cloud.apiKey, '')
    assert.equal(saved.mode, 'local')
  })
})

test('路由：云端新端点鉴权/跨站/404 与其他路由一致', async () => {
  await withFacade(async ({ mock, service }) => {
    // 未授权
    const deniedCtx = { connection: { requestRejection: () => 403 } }
    const denied = createRouteHandler({ ctx: deniedCtx, service })
    const deniedRes = await call(denied, { method: 'POST', url: '/idea-pool/api/cloud/test', headers: { 'content-type': 'application/json' }, body: '{}' })
    assert.equal(deniedRes.res.statusCode, 403)

    const { ctx } = makeCtx({ rejection: undefined })
    const handler = createRouteHandler({ ctx, service })

    // 跨站写请求
    const cross = await call(handler, {
      method: 'POST',
      url: '/idea-pool/api/cloud/test',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'cross-site' },
      body: '{}',
    })
    assert.equal(cross.res.statusCode, 403)

    // 404：未知 cloud 子路径 / 非 POST
    const unknown = await call(handler, { method: 'POST', url: '/idea-pool/api/cloud/nope', body: '{}' })
    assert.equal(unknown.res.statusCode, 404)
    const wrongMethod = await call(handler, { method: 'GET', url: '/idea-pool/api/cloud/test' })
    assert.equal(wrongMethod.res.statusCode, 404)

    // 测试连接：成功
    const ok = await call(handler, {
      method: 'POST',
      url: '/idea-pool/api/cloud/test',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ base: mock.url, apiKey: API_KEY }),
    })
    assert.equal(ok.res.statusCode, 200)
    assert.equal(ok.json.ok, true)
    assert.equal(ok.json.base, mock.url)
    assert.equal(ok.json.count, 2)
    assert.equal(Number.isInteger(ok.json.latencyMs), true)
    assert.equal(JSON.stringify(ok.json).includes(API_KEY), false)

    // 测试连接：失败 → 502
    mock.state.failNext = { status: 401, body: { ok: false, error: 'unauthorized' } }
    const failed = await call(handler, {
      method: 'POST',
      url: '/idea-pool/api/cloud/test',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ base: mock.url }),
    })
    assert.equal(failed.res.statusCode, 502)
    assert.equal(failed.json.ok, false)
    assert.match(failed.json.error, /云端鉴权失败/)
    assert.equal(JSON.stringify(failed.json).includes(API_KEY), false)
  })
})

test('路由：cloud 模式下 /api/state 走云端、/health 带 mode、/api/undo 409', async () => {
  await withFacade(async ({ mock, service }) => {
    const { ctx } = makeCtx({ rejection: undefined })
    const handler = createRouteHandler({ ctx, service })

    const saved = await call(handler, {
      method: 'POST',
      url: '/idea-pool/api/settings',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ mode: 'cloud', cloud: { base: mock.url, apiKey: API_KEY } }),
    })
    assert.equal(saved.res.statusCode, 200)
    assert.equal(saved.json.settings.mode, 'cloud')
    assert.equal(saved.json.settings.storagePath, null)
    assert.equal(JSON.stringify(saved.json).includes(API_KEY), false)

    const state = await call(handler, { url: '/idea-pool/api/state' })
    assert.equal(state.json.mode, 'cloud')
    assert.equal(state.json.storagePath, null)
    assert.equal(state.json.cloudBase, mock.url)
    assert.equal(state.json.canUndo, false)
    assert.equal(state.json.total, 2)

    const health = await call(handler, { url: '/idea-pool/health' })
    assert.deepEqual(health.json, { ok: true, mode: 'cloud', count: 2 })

    const undo = await call(handler, { method: 'POST', url: '/idea-pool/api/undo', body: '{}' })
    assert.equal(undo.res.statusCode, 409)
    assert.equal(undo.json.error, '云端模式暂不支持撤销')

    const exported = await call(handler, { url: '/idea-pool/api/export' })
    assert.equal(exported.res.statusCode, 200)
    assert.equal(exported.json.data.device, 'dsh-test')
    assert.equal(exported.json.data.ideas.length, 2)
  })
})

test('路由：cloud/import-local 未配置 key 时 400', async () => {
  await withFacade(async ({ service }) => {
    const { ctx } = makeCtx({ rejection: undefined })
    const handler = createRouteHandler({ ctx, service })
    const res = await call(handler, { method: 'POST', url: '/idea-pool/api/cloud/import-local', body: '{}' })
    assert.equal(res.res.statusCode, 400)
    assert.equal(res.json.ok, false)
    assert.match(res.json.error, /API Key/)
  })
})

test('cloud 模式下 idea_pool 工具自动走云端（无需新 action）', async () => {
  await withFacade(async ({ mock, service }) => {
    const { createToolDefinition } = await import('../lib/tools.mjs')
    const tool = createToolDefinition({ service })
    await switchToCloud(service, mock)

    const list = await tool.execute({ action: 'list' })
    assert.equal(list.total, 2)
    assert.equal(list.ideas[0].idea_no, 'IDEA-101')

    const added = await tool.execute({ action: 'add', raw_text: '工具在云端入池' })
    assert.match(added.idea.idea_no, /^IDEA-/)
    assert.equal(added.idea.raw_text, '工具在云端入池')

    const detail = await tool.execute({ action: 'get', idea_no: added.idea.idea_no })
    assert.equal(detail.idea.idea_no, added.idea.idea_no)

    const status = await tool.execute({ action: 'status', idea_no: added.idea.idea_no, status: 'done' })
    assert.equal(status.idea.status, 'done')

    const progress = await tool.execute({ action: 'progress', idea_no: 'IDEA-101', content: '工具加进展' })
    assert.match(progress.update.id, /^u_c_/)

    const linked = await tool.execute({ action: 'link', idea_no: 'IDEA-101', url: 'https://example.com/tool' })
    assert.equal(linked.link.url, 'https://example.com/tool')

    const exported = await tool.execute({ action: 'export' })
    assert.equal(exported.data.ideas.length, 3)

    const rendered = tool.output.render({ action: 'add' }, added)
    assert.match(rendered[0].text, /已入池/)

    // 工具结果里没有密钥
    assert.equal(JSON.stringify({ list, added, detail, status, progress, linked, exported }).includes(API_KEY), false)
  })
})
