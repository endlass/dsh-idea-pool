// 云端 → 本机导入单测：按 idea_no 合并、union 进展/产出、不切换模式、可撤销、未配置 key 400。
import test from 'node:test'
import assert from 'node:assert/strict'
import { IdeaService } from '../lib/service.mjs'
import { Settings } from '../lib/settings.mjs'
import { mergeCloudIdea } from '../lib/import-local.mjs'
import { createRouteHandler } from '../lib/routes.mjs'
import { call, cleanup, makeCtx, startMockCloud, tempRoot } from './helpers.mjs'

const API_KEY = 'test-key-1234'

function cloudSeed() {
  return [
    {
      idea_no: 'IDEA-001',
      title: '云端标题（覆盖本机）',
      raw_text: '云端原文',
      summary: '云端摘要',
      status: 'active',
      tags: ['cloud'],
      source: 'web',
      created_at: '2026-11-01 10:00',
      updated_at: '2026-11-02 11:30',
      rev: 3,
      updates: [{ id: 11, content: '云端进展', source: 'web', created_at: '2026-11-02 11:30' }],
      links: [{ id: 21, title: '云端产出', url: '/docs/21', created_at: '2026-11-02 11:30' }],
    },
    {
      idea_no: 'IDEA-101',
      title: '云端独有',
      raw_text: '只在云端的想法',
      status: 'pool',
      created_at: '2026-11-03 09:00',
      rev: 1,
    },
  ]
}

async function withImport(fn) {
  const mock = await startMockCloud({ apiKey: API_KEY, ideas: cloudSeed() })
  const root = await tempRoot('idea-pool-import')
  try {
    const settings = new Settings({ root, device: 'dsh-test' })
    // 只配置云端连接，不切换模式（契约 §11.2：导入不切换模式）
    await settings.update({ cloud: { base: mock.url, apiKey: API_KEY } })
    const service = new IdeaService({ root, settings, cloudTimeoutMs: 2000 })
    return await fn({ mock, settings, service, root })
  } finally {
    await cleanup(root)
    await mock.close()
  }
}

test('import-local：未配置 apiKey 时 400，且不发任何云端请求', async () => {
  const mock = await startMockCloud({ apiKey: API_KEY, ideas: cloudSeed() })
  const root = await tempRoot('idea-pool-import-nokey')
  try {
    const settings = new Settings({ root, device: 'dsh-test' })
    await settings.update({ cloud: { base: mock.url } })
    const service = new IdeaService({ root, settings })
    await assert.rejects(service.importLocal(), (err) => err.status === 400 && /API Key/.test(err.message))
    assert.equal(mock.requests.length, 0)
  } finally {
    await cleanup(root)
    await mock.close()
  }
})

test('import-local：按 idea_no 合并，云端字段覆盖、进展/产出取并集，本机独有内容不丢', async () => {
  await withImport(async ({ service, root }) => {
    // 本机先有一条同编号想法（含本机独有进展/产出），再加一条云端没有的本机想法
    const local = await service.add({ raw_text: '本机原文', title: '本机标题' })
    assert.equal(local.idea.idea_no, 'IDEA-001')
    await service.progress('IDEA-001', { content: '本机进展' })
    await service.link('IDEA-001', { url: 'https://example.com/local' })
    await service.add({ raw_text: '本机独有 IDEA-002' })

    const result = await service.importLocal()
    assert.deepEqual(result, { ok: true, imported: 1, updated: 1, total: 2 })

    // 模式没有被切换
    assert.equal((await service.settingsPublic()).settings.mode, 'local')
    assert.equal((await service.overview()).mode, 'local')

    const merged = await service.get('IDEA-001')
    assert.equal(merged.idea.title, '云端标题（覆盖本机）')
    assert.equal(merged.idea.raw_text, '云端原文')
    assert.equal(merged.idea.status, 'active')
    assert.deepEqual(merged.idea.tags, ['cloud'])
    // 本机独有进展/产出保留，云端进展/产出并入（按 id 去重）
    assert.deepEqual(merged.updates.map((row) => row.content).sort(), ['云端进展', '本机进展'].sort())
    const urls = merged.links.map((row) => row.url)
    assert.equal(urls.some((url) => url === 'https://example.com/local'), true)
    assert.equal(urls.some((url) => /\/docs\/21$/.test(url)), true)
    assert.equal(merged.idea.rev, 3)

    const overview = await service.overview()
    assert.equal(overview.total, 3)
    assert.deepEqual(overview.ideas.map((idea) => idea.idea_no).sort(), ['IDEA-001', 'IDEA-002', 'IDEA-101'])
    // 编号游标推进：不小于云端最大编号 + 1
    const idea2 = await service.add({ raw_text: '导入之后的新想法' })
    assert.equal(idea2.idea.idea_no, 'IDEA-102')

    // 内部设置文件 600，公开视图无密钥
    const settings = await service.settingsPublic()
    assert.equal(JSON.stringify(settings).includes(API_KEY), false)
    assert.equal((await service.health()).mode, 'local')
    assert.equal(root.length > 0, true)
  })
})

test('import-local：重复导入幂等（imported=0，不重复插入进展/产出）', async () => {
  await withImport(async ({ service }) => {
    const first = await service.importLocal()
    assert.deepEqual(first, { ok: true, imported: 2, updated: 0, total: 2 })
    const second = await service.importLocal()
    assert.deepEqual(second, { ok: true, imported: 0, updated: 2, total: 2 })
    const detail = await service.get('IDEA-001')
    assert.equal(detail.updates.length, 1)
    assert.equal(detail.links.length, 1)
  })
})

test('import-local：进本机撤销栈，撤销可整体回滚', async () => {
  await withImport(async ({ service }) => {
    await service.add({ raw_text: '本机原有' })
    const result = await service.importLocal()
    // IDEA-001 本机已有 → 只新增 IDEA-101；label 里的 N 是云端拉到的总条数
    assert.deepEqual(result, { ok: true, imported: 1, updated: 1, total: 2 })
    const undone = await service.undo()
    assert.match(undone.label, /从云端导入 2 条想法/)
    const overview = await service.overview()
    assert.equal(overview.total, 1)
    assert.equal(overview.ideas[0].idea_no, 'IDEA-001')
    assert.equal(overview.ideas[0].title, '本机原有')
  })
})

test('import-local：云端网络错误映射 502', async () => {
  const root = await tempRoot('idea-pool-import-net')
  try {
    const settings = new Settings({ root, device: 'dsh-test' })
    await settings.update({ cloud: { base: 'http://127.0.0.1:1', apiKey: 'k' } })
    const service = new IdeaService({ root, settings, cloudTimeoutMs: 500 })
    await assert.rejects(service.importLocal(), (err) => err.status === 502 && /连不上云端/.test(err.message))
  } finally {
    await cleanup(root)
  }
})

test('路由 POST /api/cloud/import-local：成功返回计数、不切换模式、无密钥', async () => {
  await withImport(async ({ service }) => {
    const { ctx } = makeCtx({ rejection: undefined })
    const handler = createRouteHandler({ ctx, service })
    const res = await call(handler, { method: 'POST', url: '/idea-pool/api/cloud/import-local', body: '{}' })
    assert.equal(res.res.statusCode, 200)
    assert.deepEqual(res.json, { ok: true, imported: 2, updated: 0, total: 2 })
    assert.equal(JSON.stringify(res.json).includes(API_KEY), false)

    const state = await call(handler, { url: '/idea-pool/api/state' })
    assert.equal(state.json.mode, 'local')
    assert.equal(state.json.total, 2)
  })
})

test('mergeCloudIdea：云端字段为准 + 进展/产出按 id 并集', () => {
  const existing = {
    idea_no: 'IDEA-001',
    title: '本机',
    raw_text: '本机原文',
    updates: [{ id: 'u_local', content: '本机进展', created_at: '2026-11-01T00:00:00.000Z' }],
    links: [{ id: 'l_local', url: 'https://local.example', title: '本机', ref_type: 'external', ref_id: '', created_at: '2026-11-01T00:00:00.000Z' }],
    rev: 2,
  }
  const remote = {
    idea_no: 'IDEA-001',
    title: '云端',
    raw_text: '云端原文',
    updates: [{ id: 'u_c_11', content: '云端进展', source: 'web', created_at: '2026-11-02T00:00:00.000Z' }],
    links: [],
    rev: 5,
  }
  const merged = mergeCloudIdea(existing, remote)
  assert.equal(merged.title, '云端')
  assert.equal(merged.raw_text, '云端原文')
  assert.deepEqual(merged.updates.map((row) => row.id), ['u_c_11', 'u_local'])
  assert.deepEqual(merged.links.map((row) => row.id), ['l_local'])
  assert.equal(merged.rev, 5)
})

test('import-local：cloud 模式下也能导入且不切换模式', async () => {
  await withImport(async ({ mock, service }) => {
    await service.updateSettings({ mode: 'cloud' })
    const result = await service.importLocal()
    assert.deepEqual(result, { ok: true, imported: 2, updated: 0, total: 2 })
    // 模式仍是 cloud；本机 store 已写好导入数据
    assert.equal((await service.settingsPublic()).settings.mode, 'cloud')
    assert.equal((await service.overview()).mode, 'cloud')
    const back = await service.updateSettings({ mode: 'local' })
    assert.equal(back.settings.mode, 'local')
    const local = await service.overview()
    assert.equal(local.mode, 'local')
    assert.equal(local.total, 2)
    assert.equal(mock.requests.length > 0, true)
  })
})
