// agent 工具 idea_pool 单测：raw JSON Schema 形态、参数自校验、execute 全动作、render 摘要。
import test from 'node:test'
import assert from 'node:assert/strict'
import { IdeaService } from '../lib/service.mjs'
import { LocalStore } from '../lib/store-local.mjs'
import { Settings } from '../lib/settings.mjs'
import { createToolDefinition, renderResult, validateArgs } from '../lib/tools.mjs'
import { cleanup, tempRoot } from './helpers.mjs'

function makeService(root) {
  const store = new LocalStore({ root, device: 'dsh-test' })
  const settings = new Settings({ root, device: 'dsh-test' })
  return new IdeaService({ store, settings })
}

async function withTool(fn) {
  const root = await tempRoot('idea-pool-tool')
  try {
    const service = makeService(root)
    return await fn({ service, tool: createToolDefinition({ service }) })
  } finally {
    await cleanup(root)
  }
}

test('定义形态：raw JSON Schema（不 import defineTool），output.render 返回 text 数组', () => {
  const fake = { name: 'idea_pool' }
  assert.equal(fake.name, 'idea_pool')
  const root = '/tmp/not-used'
  const tool = createToolDefinition({ service: { marker: root } })
  assert.equal(tool.name, 'idea_pool')
  assert.equal(typeof tool.description, 'string')
  assert.ok(tool.description.length > 20)

  // parameters 是 raw JSON Schema：object + properties + required
  assert.equal(tool.parameters.type, 'object')
  assert.equal(tool.parameters.additionalProperties, false)
  assert.deepEqual(tool.parameters.required, ['action'])
  assert.deepEqual(Object.keys(tool.parameters.properties).sort(), [
    'action',
    'content',
    'gist',
    'idea_no',
    'limit',
    'link_title',
    'q',
    'raw_text',
    'status',
    'summary',
    'tags',
    'title',
    'url',
  ])
  assert.deepEqual(tool.parameters.properties.action.enum, ['add', 'list', 'get', 'progress', 'link', 'status', 'export'])
  assert.deepEqual(tool.parameters.properties.status.enum, ['pool', 'active', 'parked', 'done'])
  assert.deepEqual(tool.parameters.properties.tags.items, { type: 'string' })
  assert.equal(tool.parameters.properties.limit.type, 'integer')

  // output.schema 同样是 raw JSON Schema；render 给 [{type:'text',text}]
  assert.equal(tool.output.schema.type, 'object')
  assert.deepEqual(tool.output.schema.required, ['ok'])
  const rendered = tool.output.render({ action: 'add' }, { ok: true, idea: { idea_no: 'IDEA-007', title: '标题' } })
  assert.deepEqual(rendered, [{ type: 'text', text: '已入池 IDEA-007《标题》' }])
})

test('参数校验：非法参数抛普通 Error（契约 §5）', () => {
  assert.throws(() => validateArgs(null), /参数必须是对象/)
  assert.throws(() => validateArgs([]), /参数必须是对象/)
  assert.throws(() => validateArgs({ action: 'remove' }), /action 必须是/)
  assert.throws(() => validateArgs({}), /action 必须是/)
  assert.throws(() => validateArgs({ action: 'get' }), /get 需要 idea_no/)
  assert.throws(() => validateArgs({ action: 'get', idea_no: '   ' }), /get 需要 idea_no/)
  assert.throws(() => validateArgs({ action: 'add' }), /add 需要 raw_text 或 title/)
  assert.throws(() => validateArgs({ action: 'add', raw_text: 1 }), /raw_text 必须是字符串/)
  assert.throws(() => validateArgs({ action: 'progress', idea_no: 'IDEA-001' }), /progress 需要 content/)
  assert.throws(() => validateArgs({ action: 'link', idea_no: 'IDEA-001' }), /link 需要 url/)
  assert.throws(() => validateArgs({ action: 'link', idea_no: 'IDEA-001', url: 'ftp://x' }), /url 必须是 http/)
  assert.throws(() => validateArgs({ action: 'status', idea_no: 'IDEA-001' }), /status 必须是/)
  assert.throws(() => validateArgs({ action: 'status', idea_no: 'IDEA-001', status: 'doing' }), /status 必须是/)
  assert.throws(() => validateArgs({ action: 'add', raw_text: 'x', tags: 'a' }), /tags 必须是字符串数组/)
  assert.throws(() => validateArgs({ action: 'add', raw_text: 'x', tags: [1] }), /tags 必须是字符串数组/)
  assert.throws(() => validateArgs({ action: 'list', limit: 1.5 }), /limit 必须是整数/)
  assert.throws(() => validateArgs({ action: 'list', limit: 0 }), /limit 必须在 1-500/)
  assert.throws(() => validateArgs({ action: 'list', limit: 501 }), /limit 必须在 1-500/)
  assert.throws(() => validateArgs({ action: 'list', nope: 1 }), /不支持的参数 nope/)
  assert.throws(() => validateArgs({ action: 'list', q: 7 }), /q 必须是字符串/)
  // 合法参数原样返回
  const args = { action: 'list', q: 'dsh', limit: 5 }
  assert.equal(validateArgs(args), args)
})

test('execute：add / list / get / status / progress / link / export 全链路', async () => {
  await withTool(async ({ tool }) => {
    const added = await tool.execute({ action: 'add', raw_text: '原文\n 保留', tags: ['DSH'] })
    assert.equal(added.ok, true)
    assert.equal(added.idea.idea_no, 'IDEA-001')
    assert.equal(added.idea.raw_text, '原文\n 保留')
    assert.equal(added.idea.source, 'dsh-test')

    const list = await tool.execute({ action: 'list' })
    assert.equal(list.ok, true)
    assert.equal(list.total, 1)
    assert.equal(list.ideas[0].idea_no, 'IDEA-001')
    assert.deepEqual(list.counts, { pool: 1, active: 0, parked: 0, done: 0, total: 1 })

    const searched = await tool.execute({ action: 'list', q: '保留' })
    assert.equal(searched.total, 1)

    const detail = await tool.execute({ action: 'get', idea_no: 'idea-001' })
    assert.equal(detail.ok, true)
    assert.equal(detail.idea.raw_text, '原文\n 保留')
    assert.deepEqual(detail.updates, [])
    assert.deepEqual(detail.links, [])

    const status = await tool.execute({ action: 'status', idea_no: 'IDEA-001', status: 'active' })
    assert.equal(status.idea.status, 'active')
    assert.equal(status.idea.rev, 2)

    const progress = await tool.execute({ action: 'progress', idea_no: 'IDEA-001', content: '有进展了' })
    assert.match(progress.update.id, /^u_/)

    const link = await tool.execute({ action: 'link', idea_no: 'IDEA-001', url: 'https://example.com/a', link_title: '产出' })
    assert.equal(link.link.title, '产出')
    assert.equal(link.link.url, 'https://example.com/a')

    const detail2 = await tool.execute({ action: 'get', idea_no: 'IDEA-001' })
    assert.equal(detail2.updates.length, 1)
    assert.equal(detail2.links.length, 1)

    const exported = await tool.execute({ action: 'export' })
    assert.equal(exported.ok, true)
    assert.equal(exported.data.ideas.length, 1)
    assert.equal(exported.data.ideas[0].updates.length, 1)
  })
})

test('execute：业务错误（找不到）作为可读结果返回，不抛异常', async () => {
  await withTool(async ({ tool }) => {
    const missing = await tool.execute({ action: 'get', idea_no: 'IDEA-999' })
    assert.deepEqual(missing, { ok: false, error: 'idea not found: IDEA-999' })
    const badProgress = await tool.execute({ action: 'progress', idea_no: 'IDEA-999', content: 'x' })
    assert.equal(badProgress.ok, false)
    assert.match(badProgress.error, /idea not found/)
    const rendered = renderResult({ action: 'get', idea_no: 'IDEA-999' }, missing)
    assert.match(rendered, /失败：idea not found: IDEA-999/)
  })
})

test('render：各动作都返回一小段摘要文本', async () => {
  await withTool(async ({ tool }) => {
    const added = await tool.execute({ action: 'add', raw_text: '渲染测试' })
    assert.equal(tool.output.render({ action: 'add' }, added)[0].text, '已入池 IDEA-001《渲染测试》')

    const list = await tool.execute({ action: 'list' })
    const listText = tool.output.render({ action: 'list' }, list)[0].text
    assert.match(listText, /共 1 条/)
    assert.match(listText, /IDEA-001《渲染测试》\[池中\]/)

    await tool.execute({ action: 'status', idea_no: 'IDEA-001', status: 'done' })
    const get = await tool.execute({ action: 'get', idea_no: 'IDEA-001' })
    const getText = tool.output.render({ action: 'get' }, get)[0].text
    assert.match(getText, /IDEA-001《渲染测试》\[完成\]/)
    assert.match(getText, /原文：渲染测试/)

    const progress = await tool.execute({ action: 'progress', idea_no: 'IDEA-001', content: '一条进展' })
    assert.equal(tool.output.render({ action: 'progress', idea_no: 'IDEA-001' }, progress)[0].text, '已给 IDEA-001 追加进展')

    const link = await tool.execute({ action: 'link', idea_no: 'IDEA-001', url: 'https://example.com/out' })
    assert.match(tool.output.render({ action: 'link', idea_no: 'IDEA-001' }, link)[0].text, /已给 IDEA-001 挂产出/)

    const exported = await tool.execute({ action: 'export' })
    assert.match(tool.output.render({ action: 'export' }, exported)[0].text, /已导出 1 条想法/)

    // 每个 render 都是 DSH 要求的 [{type:'text'}] 形态
    for (const value of [added, list, get, progress, link, exported]) {
      const rendered = tool.output.render({ action: 'add' }, value)
      assert.equal(Array.isArray(rendered), true)
      assert.equal(rendered[0].type, 'text')
      assert.equal(typeof rendered[0].text, 'string')
    }
  })
})

test('execute 与 UI 共用同一个 service：工具写入后 HTTP 服务能看到', async () => {
  await withTool(async ({ service, tool }) => {
    await tool.execute({ action: 'add', raw_text: '工具写入' })
    const overview = await service.overview()
    assert.equal(overview.total, 1)
    assert.equal(overview.ideas[0].idea_no, 'IDEA-001')
  })
})
