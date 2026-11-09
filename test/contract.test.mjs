// 数据契约单测：字段白名单、校验、标题兜底、编号、投影。
import test from 'node:test'
import assert from 'node:assert/strict'
import {
  ContractError,
  MAX_TAGS,
  STATUSES,
  blankState,
  countsOf,
  defaultDevice,
  formatIdeaNo,
  matchesQuery,
  normalizeCreate,
  normalizeIdeaNo,
  normalizeLink,
  normalizePatch,
  normalizeProgress,
  normalizeCloudBase,
  normalizeSettingsPatch,
  normalizeState,
  normalizeTags,
  projectDetail,
  projectSummary,
  sortEntries,
  sortIdeas,
  titleFromRaw,
} from '../lib/contract.mjs'

test('blankState：schema/next_no 从 1 起，无示例数据', () => {
  const state = blankState({ device: 'dsh-test', now: new Date('2026-11-08T00:00:00.000Z') })
  assert.equal(state.schema, 1)
  assert.equal(state.device, 'dsh-test')
  assert.equal(state.next_no, 1)
  assert.deepEqual(state.ideas, [])
  assert.equal(state.meta.updated_at, '2026-11-08T00:00:00.000Z')
})

test('defaultDevice：darwin→dsh-mac / win32→dsh-win / 其他→dsh', () => {
  assert.equal(defaultDevice('darwin'), 'dsh-mac')
  assert.equal(defaultDevice('win32'), 'dsh-win')
  assert.equal(defaultDevice('linux'), 'dsh')
})

test('idea_no：IDEA-001 起，补零；解析大小写与不补零', () => {
  assert.equal(formatIdeaNo(1), 'IDEA-001')
  assert.equal(formatIdeaNo(42), 'IDEA-042')
  assert.equal(formatIdeaNo(1234), 'IDEA-1234')
  assert.equal(normalizeIdeaNo('idea-001'), 'IDEA-001')
  assert.equal(normalizeIdeaNo(' IDEA-7 '), 'IDEA-007')
  assert.equal(normalizeIdeaNo('IDEA-00021'), 'IDEA-021')
  assert.equal(normalizeIdeaNo('IDEA-x'), null)
  assert.equal(normalizeIdeaNo(''), null)
  assert.equal(normalizeIdeaNo(null), null)
})

test('titleFromRaw：缺省标题是 raw_text 前 40 个字符（只 trim 首尾）', () => {
  assert.equal(titleFromRaw('  短标题  '), '短标题')
  assert.equal(titleFromRaw(''), '')
  const long = '一'.repeat(60)
  assert.equal(titleFromRaw(long), '一'.repeat(40))
  const withNewline = '第一行\n第二行'
  assert.equal(titleFromRaw(withNewline), '第一行\n第二行')
})

test('normalizeTags：字符串逗号分隔/数组都行，去重去空', () => {
  assert.deepEqual(normalizeTags('DSH, 插件，DSH ,, '), ['DSH', '插件'])
  assert.deepEqual(normalizeTags([' a ', '', 'b', 'a']), ['a', 'b'])
  assert.deepEqual(normalizeTags(undefined), [])
  assert.deepEqual(normalizeTags(null), [])
})

test('normalizeTags：超过 24 个 / 单个超过 40 字符拒绝', () => {
  const many = Array.from({ length: MAX_TAGS + 1 }, (_, index) => `t${index}`)
  assert.throws(() => normalizeTags(many), /标签最多 24 个/)
  assert.throws(() => normalizeTags(['x'.repeat(41)]), /标签不能超过/)
  assert.throws(() => normalizeTags([1]), /只能放字符串/)
  assert.throws(() => normalizeTags({}), /tags 必须是/)
})

test('normalizeCreate：raw_text 或 title 至少一个', () => {
  assert.throws(() => normalizeCreate({}, { device: 'dsh' }), /raw_text 或 title 至少填一个/)
  assert.throws(() => normalizeCreate({ raw_text: '   ' }), /raw_text 或 title 至少填一个/)
  assert.throws(() => normalizeCreate({ raw_text: 123 }), /raw_text 必须是字符串/)
  assert.throws(() => normalizeCreate(null), /请求体必须是 JSON 对象/)
})

test('normalizeCreate：标题兜底、source 默认、未知字段丢弃', () => {
  const fields = normalizeCreate(
    { raw_text: '  逐字原文  ', evil: 'drop me', status: 'done', created_at: '2000-01-01' },
    { device: 'dsh-test' },
  )
  assert.deepEqual(Object.keys(fields).sort(), ['gist', 'raw_text', 'session_refs', 'source', 'source_note', 'summary', 'tags', 'title'])
  assert.equal(fields.raw_text, '逐字原文')
  assert.equal(fields.title, '逐字原文')
  assert.equal(fields.source, 'dsh-test')
  assert.equal(fields.summary, '')
  assert.equal(fields.gist, '')
  assert.deepEqual(fields.session_refs, [])
  assert.deepEqual(fields.tags, [])
  assert.equal(fields.source_note, '')
})

test('normalizeCreate：raw_text 内部换行/空格逐字保留', () => {
  const raw = '第一行\n\n  第二行有  两个空格\r\n第三行\tTab'
  const fields = normalizeCreate({ raw_text: `  ${raw}  ` })
  assert.equal(fields.raw_text, raw)
})

test('normalizeCreate：title 可单独作为输入', () => {
  const fields = normalizeCreate({ title: '只有标题' })
  assert.equal(fields.title, '只有标题')
  assert.equal(fields.raw_text, '')
})

test('normalizePatch：白名单字段，未知字段静默丢弃', () => {
  const patch = normalizePatch({
    title: '新标题',
    status: 'active',
    tags: 'a,b',
    source: '不该生效',
    source_note: '备注',
    created_at: '2000-01-01',
    rev: 99,
    updates: [],
  })
  assert.deepEqual(patch, { title: '新标题', status: 'active', tags: ['a', 'b'], source_note: '备注' })
})

test('normalizePatch：非法 status / 非字符串 status 拒绝', () => {
  assert.throws(() => normalizePatch({ status: 'doing' }), /status 不合法/)
  assert.throws(() => normalizePatch({ status: 1 }), /status 不合法/)
  for (const status of STATUSES) assert.equal(normalizePatch({ status }).status, status)
})

test('normalizeProgress：content 必填且非空', () => {
  assert.throws(() => normalizeProgress({}), /进展内容不能为空/)
  assert.throws(() => normalizeProgress({ content: '   ' }), /进展内容不能为空/)
  assert.deepEqual(normalizeProgress({ content: ' 做了 ', source: 'cli' }), { content: '做了', source: 'cli' })
})

test('normalizeLink：url 必填且必须是 http(s)，title 缺省用 url', () => {
  assert.throws(() => normalizeLink({}), /url 不能为空/)
  assert.throws(() => normalizeLink({ url: 'ftp://x' }), /url 必须是 http/)
  assert.throws(() => normalizeLink({ url: 'javascript:alert(1)' }), /url 必须是 http/)
  const link = normalizeLink({ url: 'https://example.com/a' })
  assert.equal(link.title, 'https://example.com/a')
  assert.equal(link.ref_type, 'external')
  assert.equal(link.ref_id, '')
  const custom = normalizeLink({ url: 'http://example.com', title: '产出', ref_type: 'doc', ref_id: 'd1' })
  assert.deepEqual(custom, { title: '产出', url: 'http://example.com', ref_type: 'doc', ref_id: 'd1' })
})

test('normalizeSettingsPatch（v0.2）：device/mode/cloud.base/apiKey/clearKey，未知字段丢弃', () => {
  assert.deepEqual(normalizeSettingsPatch({ device: ' dsh-x ' }), { device: 'dsh-x' })
  assert.deepEqual(normalizeSettingsPatch({ mode: 'cloud' }), { mode: 'cloud' })
  assert.deepEqual(normalizeSettingsPatch({ mode: 'local' }), { mode: 'local' })
  // base 规范化：http(s)、去尾斜杠、小写主机
  assert.deepEqual(
    normalizeSettingsPatch({ cloud: { base: 'https://Example.com/ideas/api/' } }),
    { cloud: { base: 'https://example.com/ideas/api' } },
  )
  // apiKey 去首尾空白后落库；空串表示不改
  assert.deepEqual(normalizeSettingsPatch({ cloud: { apiKey: '  sk-1234  ' } }), { cloud: { apiKey: 'sk-1234' } })
  assert.deepEqual(normalizeSettingsPatch({ cloud: { apiKey: '' } }), { cloud: {} })
  assert.deepEqual(normalizeSettingsPatch({ cloud: { clearKey: true } }), { cloud: { clearKey: true } })
  // 未知字段静默丢弃
  assert.deepEqual(
    normalizeSettingsPatch({ mode: 'cloud', other: 1, cloud: { hasKey: true, base: 'http://x' } }),
    { mode: 'cloud', cloud: { base: 'http://x' } },
  )
  // 非法拒绝
  assert.throws(() => normalizeSettingsPatch({ device: '   ' }), /device 必须是/)
  assert.throws(() => normalizeSettingsPatch({ device: 'x'.repeat(41) }), /device 太长了/)
  assert.throws(() => normalizeSettingsPatch({ mode: 'sync' }), /mode 不合法/)
  assert.throws(() => normalizeSettingsPatch({ cloud: { base: 'ftp://x' } }), /cloud.base 必须是 http/)
  assert.throws(() => normalizeSettingsPatch({ cloud: { base: '不是地址' } }), /cloud.base 必须是 http/)
  assert.throws(() => normalizeSettingsPatch({ cloud: { apiKey: 1 } }), /cloud.apiKey 必须是字符串/)
  assert.throws(() => normalizeSettingsPatch({ cloud: { clearKey: 'yes' } }), /cloud.clearKey 必须是布尔值/)
  assert.throws(() => normalizeSettingsPatch({ cloud: 'x' }), /cloud 必须是 JSON 对象/)
})

test('normalizeCloudBase：http(s) 去尾斜杠，非法返回 null', () => {
  assert.equal(normalizeCloudBase('https://ideas.example.com/ideas/api/'), 'https://ideas.example.com/ideas/api')
  assert.equal(normalizeCloudBase('  http://localhost:8080/api///  '), 'http://localhost:8080/api')
  assert.equal(normalizeCloudBase(''), null)
  assert.equal(normalizeCloudBase('   '), null)
  assert.equal(normalizeCloudBase('ftp://x'), null)
  assert.equal(normalizeCloudBase('javascript:alert(1)'), null)
  assert.equal(normalizeCloudBase(42), null)
  assert.equal(normalizeCloudBase('x'.repeat(600)), null)
})

test('projectSummary / projectDetail：详情额外带 raw_text/source_note/rev', () => {
  const idea = {
    idea_no: 'IDEA-001',
    title: 't',
    raw_text: 'r',
    summary: 's',
    status: 'pool',
    tags: ['a'],
    source: 'dsh-mac',
    source_note: 'note',
    created_at: '2026-01-01T00:00:00.000Z',
    updated_at: '2026-01-02T00:00:00.000Z',
    rev: 3,
    updates: [{ id: 'u1' }],
    links: [{ id: 'l1' }, { id: 'l2' }],
  }
  const summary = projectSummary(idea)
  assert.deepEqual(Object.keys(summary).sort(), [
    'created_at',
    'gist',
    'idea_no',
    'n_links',
    'n_updates',
    'source',
    'status',
    'summary',
    'tags',
    'title',
    'updated_at',
  ])
  assert.equal(summary.n_updates, 1)
  assert.equal(summary.n_links, 2)
  const detail = projectDetail(idea)
  assert.equal(detail.raw_text, 'r')
  assert.equal(detail.source_note, 'note')
  assert.equal(detail.rev, 3)
  assert.equal(detail.idea_no, 'IDEA-001')
})

test('countsOf / matchesQuery / sortIdeas / sortEntries', () => {
  const ideas = [
    { idea_no: 'IDEA-001', status: 'pool', title: 'Alpha', raw_text: '', summary: '', tags: [], source: '', source_note: '', created_at: '2026-01-01T00:00:00.000Z' },
    { idea_no: 'IDEA-002', status: 'active', title: 'Beta', raw_text: '搜索 关键词', summary: '', tags: ['DSH'], source: '', source_note: '', created_at: '2026-01-02T00:00:00.000Z' },
    { idea_no: 'IDEA-003', status: 'done', title: 'Gamma', raw_text: '', summary: '', tags: [], source: '', source_note: '', created_at: '2026-01-03T00:00:00.000Z' },
  ]
  assert.deepEqual(countsOf(ideas), { pool: 1, active: 1, parked: 0, done: 1, total: 3 })
  assert.equal(matchesQuery(ideas[1], '关键词'), true)
  assert.equal(matchesQuery(ideas[1], 'dsh'), true)
  assert.equal(matchesQuery(ideas[1], 'idea-002'), true)
  assert.equal(matchesQuery(ideas[0], '不存在'), false)
  assert.equal(matchesQuery(ideas[0], ''), true)
  assert.deepEqual(sortIdeas(ideas).map((row) => row.idea_no), ['IDEA-003', 'IDEA-002', 'IDEA-001'])
  const rows = [
    { id: 'b', created_at: '2026-01-02T00:00:00.000Z' },
    { id: 'a', created_at: '2026-01-01T00:00:00.000Z' },
  ]
  assert.deepEqual(sortEntries(rows).map((row) => row.id), ['a', 'b'])
})

test('normalizeState：容错填充、坏行丢弃、next_no 不落后', () => {
  const state = normalizeState(
    {
      schema: 1,
      device: 'dsh-x',
      next_no: 2,
      ideas: [
        { idea_no: 'idea-005', title: '旧', raw_text: '', status: 'weird', tags: ['a', 'a', 'b'] },
        { idea_no: 'not-an-idea' },
        null,
      ],
      meta: {},
    },
    { device: 'fallback' },
  )
  assert.equal(state.device, 'dsh-x')
  assert.equal(state.ideas.length, 1)
  assert.equal(state.ideas[0].idea_no, 'IDEA-005')
  assert.equal(state.ideas[0].status, 'pool')
  assert.deepEqual(state.ideas[0].tags, ['a', 'b'])
  assert.equal(state.next_no, 6)
  assert.equal(typeof state.meta.updated_at, 'string')
})

test('normalizeState：schema 不支持时报 500 错误', () => {
  assert.throws(() => normalizeState({ schema: 9, ideas: [] }), (err) => err instanceof ContractError && err.status === 500)
  assert.throws(() => normalizeState('nope'), (err) => err instanceof ContractError && err.status === 500)
})

test('ContractError 默认 400，可指定状态码', () => {
  assert.equal(new ContractError('x').status, 400)
  assert.equal(new ContractError('x', 404).status, 404)
  assert.equal(new ContractError('x') instanceof Error, true)
})
