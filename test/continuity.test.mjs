// 双模连续性单测（契约 §12）：差异摘要、增量刷新、幂等、last_sync、降级、撤销、路由。
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { IdeaService } from '../lib/service.mjs'
import { Settings } from '../lib/settings.mjs'
import { normalizeLastSync, normalizeState } from '../lib/contract.mjs'
import { createRouteHandler } from '../lib/routes.mjs'
import { call, cleanup, makeCtx, startMockCloud, tempRoot } from './helpers.mjs'

const API_KEY = 'test-key-1234'

function cloudSeed() {
  return [
    {
      idea_no: 'IDEA-001',
      title: '云端标题',
      raw_text: '云端原文',
      summary: '云端摘要',
      status: 'active',
      tags: ['cloud'],
      source: 'web',
      created_at: '2026-11-01 10:00',
      updated_at: '2026-11-09 23:30',
      rev: 4,
      updates: [
        { id: 11, content: '云端进展一', source: 'web', created_at: '2026-11-02 11:30' },
        { id: 12, content: '云端进展二', source: 'web', created_at: '2026-11-09 23:00' },
      ],
      links: [{ id: 21, title: '云端产出', url: '/docs/21', created_at: '2026-11-09 23:10' }],
    },
    {
      idea_no: 'IDEA-101',
      title: '云端独有',
      raw_text: '只在云端的想法',
      status: 'pool',
      created_at: '2026-11-03 09:00',
      updated_at: '2026-11-03 09:00',
      rev: 1,
      updates: [{ id: 31, content: '云端独有进展', created_at: '2026-11-03 09:10' }],
    },
  ]
}

async function withPool(fn, { ideas = cloudSeed(), apiKey = API_KEY } = {}) {
  const mock = await startMockCloud({ apiKey: API_KEY, ideas })
  const root = await tempRoot('idea-pool-continuity')
  try {
    const settings = new Settings({ root, device: 'dsh-test' })
    await settings.update({ cloud: apiKey ? { base: mock.url, apiKey } : { base: mock.url } })
    const service = new IdeaService({ root, settings, cloudTimeoutMs: 2000 })
    return await fn({ mock, settings, service, root })
  } finally {
    await cleanup(root)
    await mock.close()
  }
}

test('continuity：未配置 Key 时 200 降级，不发云端请求，本机功能不受影响', async () => {
  await withPool(
    async ({ mock, service }) => {
      const status = await service.continuity()
      assert.equal(status.ok, true)
      assert.equal(status.mode, 'local')
      assert.equal(status.applicable, true)
      assert.equal(status.bidirectional, false)
      assert.equal(status.cloud.configured, false)
      assert.equal(status.cloud.reachable, false)
      assert.equal(status.cloud.reason, 'no-key')
      assert.equal(status.lastSync, null)
      assert.equal(status.drift, null)
      // 云端不可用不阻塞本机列表与写入
      await service.add({ raw_text: '本机想法' })
      const overview = await service.overview()
      assert.equal(overview.mode, 'local')
      assert.equal(overview.total, 1)
      assert.equal(mock.requests.length, 0)
    },
    { apiKey: '' },
  )
})

test('continuity：本机落后云端时给出准确差异摘要（缺失想法/进展/产出）', async () => {
  await withPool(async ({ mock, service }) => {
    // 本机 IDEA-001：一条本机进展（云端没有）；IDEA-101 云端独有
    await service.add({ raw_text: '本机原文', title: '本机标题' })
    await service.progress('IDEA-001', { content: '本机进展' })

    const status = await service.continuity()
    assert.equal(status.ok, true)
    assert.equal(status.mode, 'local')
    assert.equal(status.cloud.reachable, true)
    assert.equal(status.lastSync, null)
    const drift = status.drift
    assert.equal(drift.behind, true)
    assert.equal(drift.cloud_total, 2)
    assert.equal(drift.local_total, 1)
    assert.equal(drift.missing_ideas, 1) // IDEA-101
    assert.equal(drift.missing_updates, 3) // IDEA-001 云端 2 条 + IDEA-101 1 条
    assert.equal(drift.missing_links, 1) // IDEA-001 云端 1 个
    assert.equal(drift.changed_ideas, 1) // IDEA-001
    assert.equal(drift.local_only_ideas, 0)
    // 只对候选想法拉详情：1 次列表 + 2 次详情（IDEA-001 候选、IDEA-101 本机没有）
    const detailCalls = mock.requests.filter((row) => row.method === 'GET' && row.path.startsWith('/ideas/'))
    assert.deepEqual(detailCalls.map((row) => row.path).sort(), ['/ideas/IDEA-001', '/ideas/IDEA-101'])
    assert.equal(JSON.stringify(status).includes(API_KEY), false)
  })
})

test('continuity：云端可达但无新内容时 behind=false', async () => {
  await withPool(async ({ service }) => {
    const first = await service.refreshFromCloud()
    assert.equal(first.drift.behind, false)
    const status = await service.continuity()
    assert.equal(status.cloud.reachable, true)
    assert.equal(status.drift.behind, false)
    assert.equal(status.drift.missing_updates, 0)
    assert.equal(status.drift.missing_links, 0)
    assert.equal(status.drift.changed_ideas, 0)
    assert.equal(status.lastSync.cloud_total, 2)
  })
})

test('refresh：增量合并、差异归零、本机独有保留、记录 last_sync', async () => {
  await withPool(async ({ service, root }) => {
    await service.add({ raw_text: '本机原文', title: '本机标题' })
    await service.progress('IDEA-001', { content: '本机进展' })
    await service.add({ raw_text: '本机独有想法', title: '本机独有标题' }) // IDEA-002，云端没有

    const first = await service.refreshFromCloud()
    assert.equal(first.ok, true)
    assert.equal(first.imported, 1) // IDEA-101
    assert.equal(first.updated, 1) // IDEA-001
    assert.equal(first.fetched, 2)
    assert.equal(first.added_updates, 3)
    assert.equal(first.added_links, 1)
    assert.equal(first.cloud_total, 2)
    assert.equal(first.drift.behind, false)
    assert.equal(first.drift.missing_ideas, 0)
    assert.equal(first.drift.missing_updates, 0)
    assert.equal(first.drift.missing_links, 0)
    assert.equal(first.drift.local_only_ideas, 1)
    assert.equal(typeof first.lastSync.at, 'string')
    assert.equal(first.lastSync.cloud_total, 2)
    assert.equal(first.lastSync.added_updates, 3)

    // 合并语义：云端字段为准，进展/产出取并集，本机独有进展不丢
    const detail = await service.get('IDEA-001')
    assert.equal(detail.idea.title, '云端标题')
    assert.equal(detail.idea.status, 'active')
    assert.deepEqual(detail.updates.map((row) => row.content).sort(), ['云端进展一', '云端进展二', '本机进展'].sort())
    assert.equal(detail.links.length, 1)
    // 本机独有想法仍在
    const overview = await service.overview()
    assert.deepEqual(overview.ideas.map((idea) => idea.idea_no).sort(), ['IDEA-001', 'IDEA-002', 'IDEA-101'])
    // state.json 里落盘了 last_sync
    const saved = JSON.parse(await readFile(join(root, 'state.json'), 'utf8'))
    assert.equal(saved.meta.last_sync.cloud_total, 2)
    assert.equal(typeof saved.meta.last_sync.at, 'string')

    // 幂等：重复刷新不产生重复进展，差异保持为零
    const second = await service.refreshFromCloud()
    assert.equal(second.imported, 0)
    assert.equal(second.updated, 0)
    assert.equal(second.added_updates, 0)
    assert.equal(second.added_links, 0)
    assert.equal(second.drift.behind, false)
    assert.equal((await service.get('IDEA-001')).updates.length, 3)
    const status = await service.continuity()
    assert.equal(status.drift.behind, false)
    assert.equal(status.drift.missing_updates, 0)
    assert.equal(status.lastSync.added_updates, 0)
  })
})

test('refresh：进展条数不变但云端字段更晚更新（updated_at）也会合并', async () => {
  await withPool(async ({ mock, service }) => {
    const imported = await service.importLocal()
    assert.equal(imported.imported, 2)
    // 云端改状态/标题，条数不变，updated_at 更晚
    const cloudRow = mock.state.ideas.get('IDEA-001')
    cloudRow.status = 'done'
    cloudRow.title = '云端改过的标题'
    cloudRow.rev += 1
    cloudRow.updated_at = '2026-11-09 23:59'
    const drift = (await service.continuity()).drift
    assert.equal(drift.behind, true)
    assert.equal(drift.changed_ideas, 1)
    assert.equal(drift.missing_updates, 0)
    assert.equal(drift.missing_links, 0)

    const result = await service.refreshFromCloud()
    assert.equal(result.updated, 1)
    assert.equal(result.added_updates, 0)
    assert.equal(result.drift.behind, false)
    const detail = await service.get('IDEA-001')
    assert.equal(detail.idea.status, 'done')
    assert.equal(detail.idea.title, '云端改过的标题')
    // 进展/产出没有重复
    assert.equal(detail.updates.length, 2)
    assert.equal(detail.links.length, 1)
  })
})

test('continuity：云端不可达时降级（reachable=false、drift=null、本机列表可用）', async () => {
  const root = await tempRoot('idea-pool-continuity-offline')
  try {
    const settings = new Settings({ root, device: 'dsh-test' })
    await settings.update({ cloud: { base: 'http://localhost:1', apiKey: 'unreachable-key' } })
    const service = new IdeaService({ root, settings, cloudTimeoutMs: 300 })
    await service.add({ raw_text: '本机想法' })
    const status = await service.continuity()
    assert.equal(status.ok, true)
    assert.equal(status.cloud.configured, true)
    assert.equal(status.cloud.reachable, false)
    assert.equal(status.cloud.reason, 'unreachable')
    assert.match(status.cloud.error, /连不上云端/)
    assert.equal(status.drift, null)
    assert.equal(JSON.stringify(status).includes('unreachable-key'), false)
    // 列表与本地写入照常
    assert.equal((await service.list({})).total, 1)
    await service.add({ raw_text: 'offline 也能入池' })
    assert.equal((await service.overview()).total, 2)
    await assert.rejects(service.refreshFromCloud(), (err) => err.status === 502 && /连不上云端/.test(err.message))
  } finally {
    await cleanup(root)
  }
})

test('refresh：未配置 Key 时 400，且本机数据不变', async () => {
  await withPool(
    async ({ mock, service }) => {
      await service.add({ raw_text: '本机想法' })
      await assert.rejects(service.refreshFromCloud(), (err) => err.status === 400 && /API Key/.test(err.message))
      assert.equal((await service.overview()).total, 1)
      assert.equal(mock.requests.length, 0)
    },
    { apiKey: '' },
  )
})

test('refresh：云端为空时只记录 last_sync，不占撤销位', async () => {
  await withPool(
    async ({ service }) => {
      const result = await service.refreshFromCloud()
      assert.equal(result.imported, 0)
      assert.equal(result.updated, 0)
      assert.equal(result.cloud_total, 0)
      assert.equal(typeof result.lastSync.at, 'string')
      assert.equal((await service.overview()).canUndo, false)
    },
    { ideas: [] },
  )
})

test('refresh：进本机撤销栈，撤销可整体回滚（含 last_sync）', async () => {
  await withPool(async ({ service }) => {
    await service.add({ raw_text: '本机原文', title: '本机标题' })
    await service.add({ raw_text: '本机独有想法' })
    const result = await service.refreshFromCloud()
    assert.equal(result.imported, 1)
    assert.equal(result.updated, 1)

    const undone = await service.undo()
    assert.match(undone.label, /从云端刷新/)
    const overview = await service.overview()
    assert.equal(overview.total, 2)
    const detail = await service.get('IDEA-001')
    assert.equal(detail.idea.title, '本机标题')
    assert.equal(detail.updates.length, 0)
    assert.equal(detail.links.length, 0)
    assert.equal((await service.continuity()).lastSync, null)
  })
})

test('continuity：云端模式下不适用且不联网', async () => {
  await withPool(async ({ mock, service }) => {
    await service.updateSettings({ mode: 'cloud' })
    const before = mock.requests.length
    const status = await service.continuity()
    assert.equal(status.mode, 'cloud')
    assert.equal(status.applicable, false)
    assert.equal(status.drift, null)
    assert.equal(status.bidirectional, false)
    assert.equal(mock.requests.length, before)
  })
})

test('路由：GET /api/continuity + POST /api/continuity/refresh，形状正确且无密钥', async () => {
  await withPool(async ({ service }) => {
    const { ctx } = makeCtx()
    const handler = createRouteHandler({ ctx, service })
    const status = await call(handler, { url: '/idea-pool/api/continuity' })
    assert.equal(status.res.statusCode, 200)
    assert.equal(status.json.ok, true)
    assert.equal(status.json.applicable, true)
    assert.equal(status.json.cloud.reachable, true)
    assert.equal(status.json.drift.behind, true)
    assert.equal(status.json.drift.missing_ideas, 2)

    const refreshed = await call(handler, {
      method: 'POST',
      url: '/idea-pool/api/continuity/refresh',
      body: '{}',
    })
    assert.equal(refreshed.res.statusCode, 200)
    assert.equal(refreshed.json.ok, true)
    assert.equal(refreshed.json.imported, 2)
    assert.equal(refreshed.json.drift.behind, false)
    assert.equal(JSON.stringify(refreshed.json).includes(API_KEY), false)

    const wrongMethod = await call(handler, { method: 'GET', url: '/idea-pool/api/continuity/refresh' })
    assert.equal(wrongMethod.res.statusCode, 404)
    const wrongMethod2 = await call(handler, { method: 'POST', url: '/idea-pool/api/continuity' })
    assert.equal(wrongMethod2.res.statusCode, 404)
    const wrongPath = await call(handler, { url: '/idea-pool/api/continuity/nope' })
    assert.equal(wrongPath.res.statusCode, 404)
  })
})

test('契约：normalizeState 保留合法 last_sync、坏值丢弃、旧 state 照常打开', () => {
  const good = normalizeState({
    schema: 1,
    ideas: [],
    meta: {
      updated_at: '2026-11-08T00:00:00.000Z',
      last_sync: {
        at: '2026-11-09T14:30:00.000Z',
        base: 'https://ideas.example.com/ideas/api',
        cloud_total: 25,
        imported: 0,
        updated: 4,
        added_updates: 16,
        added_links: 6,
      },
    },
  })
  assert.equal(good.meta.last_sync.at, '2026-11-09T14:30:00.000Z')
  assert.equal(good.meta.last_sync.cloud_total, 25)
  assert.equal(good.meta.last_sync.added_updates, 16)

  const bad = normalizeState({
    schema: 1,
    ideas: [],
    meta: { last_sync: { at: 'not-a-date', cloud_total: 'x' } },
  })
  assert.equal(Object.hasOwn(bad.meta, 'last_sync'), false)

  const missing = normalizeState({ schema: 1, ideas: [] })
  assert.equal(Object.hasOwn(missing.meta, 'last_sync'), false)
  assert.equal(normalizeLastSync(undefined), null)
  assert.equal(normalizeLastSync({ at: '2026-11-09T14:30:00.000Z' }).base, '')
  assert.equal(normalizeLastSync({ at: '2026-11-09T14:30:00.000Z' }).cloud_total, 0)
})
