// CloudEngine 单测：用 node:http 起本地 mock 云端，覆盖请求形状、校验、错误映射、超时与密钥红线。
import test from 'node:test'
import assert from 'node:assert/strict'
import { CloudEngine, CLOUD_TIMEOUT_MS } from '../lib/cloud-engine.mjs'
import { Settings } from '../lib/settings.mjs'
import { cleanup, startMockCloud, tempRoot } from './helpers.mjs'

const CLOUD_TIME_ISO = '2026-11-08T04:00:00.000Z' // mock 的 "2026-11-08 12:00" +08:00
const LATER_TIME_ISO = '2026-11-08T05:30:00.000Z' // "2026-11-08 13:30" +08:00
const FIXED_NOW = () => new Date('2026-11-08T04:00:00.000Z')

function seedOne() {
  return [
    {
      idea_no: 'IDEA-101',
      title: '云端想法',
      raw_text: '云端原文\n第二行',
      summary: '云端摘要',
      status: 'active',
      tags: ['cloud', 'dsh'],
      source: 'web',
      created_at: '2026-11-08 12:00',
      updated_at: '2026-11-08 13:30',
      rev: 3,
      updates: [{ id: 11, content: '云端进展', source: 'web', created_at: '2026-11-08 13:30' }],
      links: [{ id: 21, title: '云端产出', url: '/docs/21', ref_type: 'doc', ref_id: '21', created_at: '2026-11-08 13:30' }],
    },
  ]
}

function seedMany() {
  return [
    { idea_no: 'IDEA-201', title: 'Alpha 云端', status: 'pool', rev: 1 },
    { idea_no: 'IDEA-202', title: 'Beta 云端', status: 'active', rev: 2, tags: ['beta'] },
    { idea_no: 'IDEA-203', title: 'Gamma 云端', status: 'done', rev: 5 },
  ]
}

async function withCloud(fn, { ideas = [], apiKey = 'test-key-1234', timeoutMs } = {}) {
  const mock = await startMockCloud({ apiKey, ideas })
  const root = await tempRoot('idea-pool-cloud')
  try {
    const settings = new Settings({ root, device: 'dsh-test' })
    await settings.update({ mode: 'cloud', cloud: { base: mock.url, apiKey } })
    const engine = new CloudEngine({ settings, timeoutMs, now: FIXED_NOW })
    return await fn({ mock, settings, engine, root })
  } finally {
    await cleanup(root)
    await mock.close()
  }
}

test('list：契约形状、时间 ISO 化、X-API-Key、查询参数透传、counts/total', async () => {
  await withCloud(async ({ mock, engine }) => {
    const result = await engine.list({})
    assert.equal(result.ok, true)
    assert.equal(result.total, 3)
    assert.deepEqual(result.counts, { pool: 1, active: 1, parked: 0, done: 1, total: 3 })
    assert.deepEqual(result.ideas.map((idea) => idea.idea_no), ['IDEA-201', 'IDEA-202', 'IDEA-203'])
    const request = mock.requests[0]
    assert.equal(request.method, 'GET')
    assert.equal(request.path, '/ideas')
    assert.equal(request.headers['x-api-key'], 'test-key-1234')
    assert.equal(request.query.limit, '100')
    assert.equal(request.query.offset, '0')

    const filtered = await engine.list({ status: 'active', q: '云端', limit: 2, offset: 0 })
    assert.equal(filtered.total, 1)
    assert.equal(filtered.ideas[0].idea_no, 'IDEA-202')
    const last = mock.requests[mock.requests.length - 1]
    assert.deepEqual({ ...last.query }, { status: 'active', q: '云端', limit: '2', offset: '0' })
  }, { ideas: seedMany() })
})

test('list：本地先做参数校验（非法 status/limit/offset 400 且不发请求）', async () => {
  await withCloud(async ({ mock, engine }) => {
    await assert.rejects(engine.list({ status: 'doing' }), (err) => err.status === 400 && /status 不合法/.test(err.message))
    await assert.rejects(engine.list({ limit: 0 }), (err) => err.status === 400)
    await assert.rejects(engine.list({ limit: 501 }), (err) => err.status === 400)
    await assert.rejects(engine.list({ offset: -1 }), (err) => err.status === 400)
    assert.equal(mock.requests.length, 0)
  }, { ideas: seedMany() })
})

test('get：详情归一（时间 ISO、id 前缀、相对链接绝对化、rev 保留）', async () => {
  await withCloud(async ({ engine }) => {
    const detail = await engine.get('idea-101')
    assert.equal(detail.ok, true)
    assert.equal(detail.idea.idea_no, 'IDEA-101')
    assert.equal(detail.idea.raw_text, '云端原文\n第二行')
    assert.equal(detail.idea.created_at, CLOUD_TIME_ISO)
    assert.equal(detail.idea.updated_at, LATER_TIME_ISO)
    assert.equal(detail.idea.rev, 3)
    assert.equal(detail.idea.n_updates, 1)
    assert.equal(detail.updates.length, 1)
    assert.equal(detail.updates[0].id, 'u_c_11')
    assert.equal(detail.updates[0].created_at, LATER_TIME_ISO)
    assert.equal(detail.links[0].id, 'l_c_21')
    assert.match(detail.links[0].url, /^http:\/\/127\.0\.0\.1:\d+\/docs\/21$/)
  }, { ideas: seedOne() })
})

test('add：POST /ideas + 本机契约校验；返回详情', async () => {
  await withCloud(async ({ mock, engine }) => {
    await assert.rejects(engine.add({}), (err) => err.status === 400 && /raw_text 或 title 至少填一个/.test(err.message))
    assert.equal(mock.requests.length, 0)

    const added = await engine.add({ raw_text: '  新想法  ', tags: 'DSH,插件', source_note: '备注' })
    assert.equal(added.ok, true)
    assert.match(added.idea.idea_no, /^IDEA-/)
    assert.equal(added.idea.raw_text, '新想法')
    assert.equal(added.idea.rev, 1)
    const request = mock.requests[0]
    assert.equal(request.method, 'POST')
    assert.equal(request.path, '/ideas')
    assert.equal(request.body.raw_text, '新想法')
    assert.equal(request.body.source, 'dsh-test')
    assert.deepEqual(request.body.tags, ['DSH', '插件'])
    assert.equal(request.body.source_note, '备注')
  })
})

test('update：先 GET 取 rev，再 PATCH 带 if_rev；返回 rev+1', async () => {
  await withCloud(async ({ mock, engine }) => {
    const updated = await engine.update('IDEA-101', { status: 'done', summary: '改过的摘要' })
    assert.equal(updated.ok, true)
    assert.equal(updated.idea.status, 'done')
    assert.equal(updated.idea.summary, '改过的摘要')
    assert.equal(updated.idea.rev, 4)
    assert.equal(updated.idea.updated_at, LATER_TIME_ISO)

    const methods = mock.requests.map((row) => `${row.method} ${row.path}`)
    assert.deepEqual(methods, ['GET /ideas/IDEA-101', 'PATCH /ideas/IDEA-101'])
    const patch = mock.requests[1]
    assert.equal(patch.body.if_rev, 3)
    assert.equal(patch.body.status, 'done')
  }, { ideas: seedOne() })
})

test('update：服务端 409 → ContractError 409 中文', async () => {
  await withCloud(async ({ mock, engine }) => {
    mock.state.patchConflict = true
    await assert.rejects(engine.update('IDEA-101', { status: 'done' }), (err) => {
      assert.equal(err.status, 409)
      assert.match(err.message, /云端这条想法已被其他端更新，请刷新后重试/)
      return true
    })
  }, { ideas: seedOne() })
})

test('错误映射：401 → 401 中文；其他非 2xx → 502 带 HTTP 状态与服务端 error', async () => {
  await withCloud(async ({ mock, engine }) => {
    mock.state.failNext = { status: 401, body: { ok: false, error: 'unauthorized' } }
    await assert.rejects(engine.list({}), (err) => err.status === 401 && /云端鉴权失败，请检查 API Key/.test(err.message))

    mock.state.failNext = { status: 500, body: { ok: false, error: 'server exploded' } }
    await assert.rejects(engine.list({}), (err) => {
      assert.equal(err.status, 502)
      assert.equal(err.message, '云端接口出错（HTTP 500）：server exploded')
      return true
    })
  }, { ideas: seedMany() })
})

test('错误映射：404 保留 404（详情已删除/不存在），不升成 502', async () => {
  await withCloud(async ({ mock, engine }) => {
    mock.state.failNext = { status: 404, body: { ok: false, error: 'idea not found' } }
    await assert.rejects(engine.get('IDEA-404'), (err) => {
      assert.equal(err.status, 404)
      assert.match(err.message, /HTTP 404/)
      return true
    })
  }, { ideas: seedOne() })
})

test('错误映射：密钥绝不出现在错误文案里（服务端回显也会被替换）', async () => {
  await withCloud(async ({ mock, engine }) => {
    mock.state.failNext = { status: 500, body: { ok: false, error: 'bad key test-key-1234 rejected' } }
    await assert.rejects(engine.list({}), (err) => {
      assert.equal(err.status, 502)
      assert.equal(err.message.includes('test-key-1234'), false)
      assert.match(err.message, /\*\*\*/)
      return true
    })
  }, { ideas: seedMany() })
})

test('错误映射：网络不通 → 502 连不上云端；超时 → 502 连不上云端', async () => {
  const root = await tempRoot('idea-pool-cloud-net')
  try {
    const settings = new Settings({ root, device: 'dsh-test' })
    await settings.update({ cloud: { base: 'http://127.0.0.1:1/api', apiKey: 'k' } })
    const engine = new CloudEngine({ settings, timeoutMs: 200 })
    await assert.rejects(engine.list({}), (err) => err.status === 502 && /^连不上云端：/.test(err.message))
  } finally {
    await cleanup(root)
  }

  await withCloud(
    async ({ mock, engine }) => {
      mock.state.delayNextMs = 400
      await assert.rejects(engine.list({}), (err) => err.status === 502 && /连不上云端：.*超时/.test(err.message))
    },
    { ideas: seedMany(), timeoutMs: 60 },
  )
  // 默认超时 15 秒（契约 §11.4）
  assert.equal(CLOUD_TIMEOUT_MS, 15_000)
})

test('health：{ ok, mode:cloud, count }', async () => {
  await withCloud(async ({ engine }) => {
    assert.deepEqual(await engine.health(), { ok: true, mode: 'cloud', count: 3 })
  }, { ideas: seedMany() })
})

test('progress：带 client_id，重复 client_id 幂等（服务端不重复插入）', async () => {
  await withCloud(async ({ mock, engine }) => {
    const body = { content: '第一条云端进展', client_id: 'u_1700000000000_keepme' }
    const first = await engine.progress('IDEA-101', body)
    assert.equal(first.ok, true)
    assert.match(first.update.id, /^u_c_\d+$/)
    assert.equal(first.update.content, '第一条云端进展')
    assert.equal(first.update.created_at, LATER_TIME_ISO)
    const request = mock.requests[0]
    assert.equal(request.method, 'POST')
    assert.equal(request.path, '/ideas/IDEA-101/updates')
    assert.equal(request.body.client_id, 'u_1700000000000_keepme')

    // 同一个 client_id 再来一次：服务端返回原行，不新增
    const second = await engine.progress('IDEA-101', body)
    assert.equal(second.update.id, first.update.id)
    const idea = mock.state.ideas.get('IDEA-101')
    assert.equal(idea.updates.filter((row) => row.content === '第一条云端进展').length, 1)

    // 没显式给 client_id 时自动生成 u_<ts>_<rand>
    const auto = await engine.progress('IDEA-101', { content: '自动 client_id' })
    const last = mock.requests[mock.requests.length - 1]
    assert.match(last.body.client_id, /^u_\d+_[a-z0-9]+$/)
    assert.match(auto.update.id, /^u_c_\d+$/)
  }, { ideas: seedOne() })
})

test('link：带 client_id l_<ts>_<rand>，返回 link；重复 client_id 幂等', async () => {
  await withCloud(async ({ mock, engine }) => {
    const body = { url: 'https://example.com/out', title: '产出链接', client_id: 'l_1700000000000_keepme' }
    const first = await engine.link('IDEA-101', body)
    assert.equal(first.ok, true)
    assert.equal(first.link.url, 'https://example.com/out')
    assert.equal(first.link.title, '产出链接')
    const request = mock.requests[0]
    assert.equal(request.path, '/ideas/IDEA-101/links')
    assert.equal(request.body.client_id, 'l_1700000000000_keepme')

    const second = await engine.link('IDEA-101', body)
    assert.equal(second.link.id, first.link.id)
    assert.equal(mock.state.ideas.get('IDEA-101').links.filter((row) => row.url === 'https://example.com/out').length, 1)

    await engine.link('IDEA-101', { url: 'https://example.com/out2' })
    const last = mock.requests[mock.requests.length - 1]
    assert.match(last.body.client_id, /^l_\d+_[a-z0-9]+$/)
  }, { ideas: seedOne() })
})

test('remove：DELETE /ideas/{no}', async () => {
  await withCloud(async ({ mock, engine }) => {
    const removed = await engine.remove('idea-101')
    assert.deepEqual(removed, { ok: true })
    assert.equal(mock.requests[0].method, 'DELETE')
    assert.equal(mock.requests[0].path, '/ideas/IDEA-101')
  }, { ideas: seedOne() })
})

test('exportData：全量列表 + 详情合并成 {schema, device, exported_at, ideas}', async () => {
  await withCloud(async ({ mock, engine }) => {
    const exported = await engine.exportData()
    assert.equal(exported.ok, true)
    assert.equal(exported.data.schema, 1)
    assert.equal(exported.data.device, 'dsh-test')
    assert.equal(exported.data.exported_at, CLOUD_TIME_ISO)
    const idea = exported.data.ideas[0]
    assert.equal(idea.idea_no, 'IDEA-101')
    assert.equal(idea.raw_text, '云端原文\n第二行')
    assert.equal(idea.updates.length, 1)
    assert.equal(idea.links.length, 1)
    assert.match(idea.links[0].url, /^http:\/\/127\.0\.0\.1:\d+\/docs\/21$/)
    assert.ok(mock.requests.some((row) => row.method === 'GET' && row.path === '/ideas/IDEA-101'))
  }, { ideas: seedOne() })
})

test('testConnection：成功 { ok, base, count, latencyMs }；覆盖值优先；永不回显 key', async () => {
  await withCloud(async ({ mock, engine }) => {
    const saved = await engine.testConnection({})
    assert.equal(saved.ok, true)
    assert.equal(saved.base, mock.url)
    assert.equal(saved.count, 1)
    assert.equal(Number.isInteger(saved.latencyMs), true)
    assert.ok(saved.latencyMs >= 0)
    assert.equal(JSON.stringify(saved).includes('test-key-1234'), false)
    assert.deepEqual(JSON.parse(JSON.stringify(saved)), saved)

    // 请求里给覆盖 base + 正确 key：即使已存 key 是错的也能成功
    const overridden = await engine.testConnection({ base: `${mock.url}/`, apiKey: 'test-key-1234' })
    assert.equal(overridden.base, mock.url)
    assert.equal(mock.requests[mock.requests.length - 1].headers['x-api-key'], 'test-key-1234')
  }, { ideas: seedOne() })
})

test('testConnection：失败统一 502（鉴权/网络），且不回显 key', async () => {
  await withCloud(async ({ mock, engine }) => {
    mock.state.failNext = { status: 401, body: { ok: false, error: 'unauthorized' } }
    await assert.rejects(engine.testConnection({}), (err) => {
      assert.equal(err.status, 502)
      assert.match(err.message, /云端鉴权失败/)
      assert.equal(err.message.includes('test-key-1234'), false)
      return true
    })
    mock.state.failNext = { status: 500, body: { error: 'bad test-key-1234' } }
    await assert.rejects(engine.testConnection({}), (err) => err.status === 502 && err.message.includes('test-key-1234') === false)
  }, { ideas: seedOne() })

  const root = await tempRoot('idea-pool-cloud-test-net')
  try {
    const settings = new Settings({ root, device: 'dsh-test' })
    const engine = new CloudEngine({ settings, timeoutMs: 300 })
    await assert.rejects(engine.testConnection({ base: 'http://127.0.0.1:1' }), (err) => err.status === 502 && /连不上云端/.test(err.message))
    // 非法 base 是客户端错误，保持 400
    await assert.rejects(engine.testConnection({ base: 'not-a-url' }), (err) => err.status === 400)
    await assert.rejects(engine.testConnection({ apiKey: 42 }), (err) => err.status === 400)
  } finally {
    await cleanup(root)
  }
})
