/**
 * agent 工具：idea_pool(action)。
 *
 * 工具写的是同一个 IdeaService（与 UI 同一入口）。按契约 §5：
 * - parameters 直接用 raw JSON Schema 交给 ctx.tools.register（不 import defineTool，也不 import 任何 @deepseek-ai/*）；
 * - register 不校验 parameters，所以 execute 自己校验参数，非法参数抛 new Error(...)；
 * - output.schema 用同一套 raw DSL，output.render 返回 [{ type:'text', text }] 摘要。
 */
import { ContractError, STATUSES, STATUS_LABELS, normalizeIdeaNo } from './contract.mjs'

export const TOOL_NAME = 'idea_pool'

const ACTIONS = ['add', 'list', 'get', 'progress', 'link', 'status', 'export']

const STRING_FIELDS = ['idea_no', 'title', 'raw_text', 'summary', 'content', 'url', 'link_title', 'q', 'status']
const ALLOWED_FIELDS = new Set(['action', 'idea_no', 'title', 'raw_text', 'summary', 'tags', 'content', 'url', 'link_title', 'status', 'q', 'limit'])

/** 模型看到参数 schema（raw JSON Schema）。 */
const PARAMETERS = {
  type: 'object',
  additionalProperties: false,
  properties: {
    action: {
      type: 'string',
      enum: ACTIONS,
      description: '要做的动作：add 入池 / list 列表 / get 详情 / progress 追加进展 / link 挂产出 / status 改状态 / export 导出',
    },
    idea_no: { type: 'string', description: '想法编号，如 IDEA-001（get/progress/link/status 必填）' },
    title: { type: 'string', description: '一句话标题（add 时可省略，缺省用 raw_text 前 40 字符）' },
    raw_text: { type: 'string', description: '想法原文，逐字保存（add 时与 title 至少填一个）' },
    summary: { type: 'string', description: '可选的摘要' },
    tags: { type: 'array', items: { type: 'string' }, description: '标签，例如 ["DSH","插件"]，最多 24 个' },
    content: { type: 'string', description: '进展内容（progress 必填）' },
    url: { type: 'string', description: '产出的 http(s) 链接（link 必填）' },
    link_title: { type: 'string', description: '产出标题（link 可选，缺省用 url）' },
    status: {
      type: 'string',
      enum: STATUSES,
      description: '新状态：pool 池中 / active 进行中 / parked 搁置 / done 完成（status 必填）',
    },
    q: { type: 'string', description: 'list 的搜索词，匹配标题/摘要/原文/标签/编号' },
    limit: { type: 'integer', description: 'list 返回条数，1-500，默认 100' },
  },
  required: ['action'],
}

/** execute 返回值的 schema（object + properties + required，DSH 会按它校验）。 */
const OUTPUT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    ok: { type: 'boolean' },
    error: { type: 'string' },
    idea: { type: 'object', additionalProperties: true },
    ideas: { type: 'array', items: { type: 'object', additionalProperties: true } },
    updates: { type: 'array', items: { type: 'object', additionalProperties: true } },
    links: { type: 'array', items: { type: 'object', additionalProperties: true } },
    update: { type: 'object', additionalProperties: true },
    link: { type: 'object', additionalProperties: true },
    counts: { type: 'object', additionalProperties: true },
    total: { type: 'integer' },
    data: { type: 'object', additionalProperties: true },
  },
  required: ['ok'],
}

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim() !== ''
}

/**
 * 自己校验参数（register 不校验）。非法参数一律抛普通 Error（契约 §5）。
 * @param {unknown} args - 模型给的参数。
 * @returns {object} 已校验的参数。
 */
export function validateArgs(args) {
  if (args === null || typeof args !== 'object' || Array.isArray(args)) throw new Error('idea_pool: 参数必须是对象')
  for (const key of Object.keys(args)) {
    if (!ALLOWED_FIELDS.has(key)) throw new Error(`idea_pool: 不支持的参数 ${key}`)
  }
  for (const key of STRING_FIELDS) {
    if (args[key] !== undefined && typeof args[key] !== 'string') throw new Error(`idea_pool: ${key} 必须是字符串`)
  }
  if (args.tags !== undefined) {
    if (!Array.isArray(args.tags) || args.tags.some((tag) => typeof tag !== 'string')) {
      throw new Error('idea_pool: tags 必须是字符串数组')
    }
  }
  if (args.limit !== undefined) {
    if (!Number.isInteger(args.limit)) throw new Error('idea_pool: limit 必须是整数')
    if (args.limit < 1 || args.limit > 500) throw new Error('idea_pool: limit 必须在 1-500 之间')
  }
  const { action } = args
  if (!ACTIONS.includes(action)) throw new Error(`idea_pool: action 必须是 ${ACTIONS.join(' / ')} 之一`)
  if (action !== 'list' && action !== 'add' && action !== 'export' && !nonEmptyString(args.idea_no)) {
    throw new Error(`idea_pool: ${action} 需要 idea_no`)
  }
  if (action === 'add' && !nonEmptyString(args.raw_text) && !nonEmptyString(args.title)) {
    throw new Error('idea_pool: add 需要 raw_text 或 title')
  }
  if (action === 'progress' && !nonEmptyString(args.content)) throw new Error('idea_pool: progress 需要 content')
  if (action === 'link') {
    if (!nonEmptyString(args.url)) throw new Error('idea_pool: link 需要 url')
    let valid = false
    try {
      const url = new URL(args.url)
      valid = url.protocol === 'http:' || url.protocol === 'https:'
    } catch {
      valid = false
    }
    if (!valid) throw new Error('idea_pool: url 必须是 http(s) 地址')
  }
  if (action === 'status') {
    if (!STATUSES.includes(args.status)) throw new Error(`idea_pool: status 必须是 ${STATUSES.join(' / ')} 之一`)
  }
  return args
}

/** 动作 → IdeaService 调用。 */
async function runAction(service, args) {
  switch (args.action) {
    case 'add':
      return service.add({
        title: args.title,
        raw_text: args.raw_text,
        summary: args.summary,
        tags: args.tags,
      })
    case 'list':
      return service.list({ q: args.q, limit: args.limit })
    case 'get':
      return service.get(args.idea_no)
    case 'progress':
      return service.progress(args.idea_no, { content: args.content })
    case 'link':
      return service.link(args.idea_no, { url: args.url, title: args.link_title })
    case 'status':
      return service.update(args.idea_no, { status: args.status })
    case 'export':
      return service.exportData()
    /* v8 ignore next 2 -- validateArgs 已限制 action 取值 */
    default:
      throw new Error(`idea_pool: 未知 action ${String(args.action)}`)
  }
}

function statusLabel(status) {
  return STATUS_LABELS[status] ?? String(status)
}

function shortText(text, max = 400) {
  const value = String(text ?? '')
  return value.length > max ? `${value.slice(0, max)}…` : value
}

/** 结果摘要：给人看的一小段文本，进模型上下文。 */
export function renderResult(args, value) {
  if (value?.ok === false) return `失败：${value.error ?? '未知错误'}`
  const action = args?.action
  if (action === 'add') {
    const idea = value.idea
    return idea ? `已入池 ${idea.idea_no}《${idea.title}》` : '已入池'
  }
  if (action === 'status') {
    const idea = value.idea
    return idea ? `${idea.idea_no}《${idea.title}》状态 → ${statusLabel(idea.status)}（${idea.status}）` : '状态已更新'
  }
  if (action === 'list') {
    const counts = value.counts
    const header = `共 ${value.total ?? 0} 条${
      counts
        ? `（池中 ${counts.pool} / 进行中 ${counts.active} / 搁置 ${counts.parked} / 完成 ${counts.done}）`
        : ''
    }`
    const rows = (value.ideas ?? []).slice(0, 10).map((idea) => `${idea.idea_no}《${idea.title}》[${statusLabel(idea.status)}]`)
    const more = (value.ideas ?? []).length > 10 ? `\n…还有 ${value.ideas.length - 10} 条` : ''
    return rows.length > 0 ? `${header}\n${rows.join('\n')}${more}` : `${header}\n（空）`
  }
  if (action === 'get') {
    const idea = value.idea
    if (!idea) return '没有找到想法'
    const lines = [`${idea.idea_no}《${idea.title}》[${statusLabel(idea.status)}]`]
    if (Array.isArray(idea.tags) && idea.tags.length > 0) lines.push(`标签：${idea.tags.join('、')}`)
    if (idea.summary) lines.push(`摘要：${shortText(idea.summary, 200)}`)
    const rawText = String(idea.raw_text ?? '').trim()
    if (rawText) lines.push(`原文：${shortText(rawText, 400)}`)
    if (Array.isArray(value.updates) && value.updates.length > 0) {
      lines.push(`进展 ${value.updates.length} 条：`)
      for (const row of value.updates.slice(-5)) lines.push(`- ${row.created_at} ${shortText(row.content, 200)}`)
    }
    if (Array.isArray(value.links) && value.links.length > 0) {
      lines.push(`产出 ${value.links.length} 条：`)
      for (const row of value.links.slice(-5)) lines.push(`- 《${row.title}》${row.url}`)
    }
    return lines.join('\n')
  }
  if (action === 'progress') {
    const ideaNo = normalizeIdeaNo(args.idea_no)
    return `已给 ${ideaNo ?? args.idea_no} 追加进展`
  }
  if (action === 'link') {
    const title = value.link?.title ?? args.link_title ?? args.url
    return `已给 ${normalizeIdeaNo(args.idea_no) ?? args.idea_no} 挂产出《${title}》`
  }
  if (action === 'export') {
    return `已导出 ${(value.data?.ideas ?? []).length} 条想法（schema ${value.data?.schema ?? 1}）`
  }
  return JSON.stringify(value)
}

/**
 * 构造注册给 ctx.tools.register 的工具定义。
 * @param {{service: import('./service.mjs').IdeaService}} parts
 * @returns {object} 原始注册定义（raw JSON Schema 的 parameters/output）。
 */
export function createToolDefinition({ service } = {}) {
  if (!service) throw new Error('createToolDefinition: service 是必填的')
  return {
    name: TOOL_NAME,
    description:
      '灵感池（本机或云端模式，跟随设置）：记录、查看、推进想法，数据与侧边栏工作台共用。' +
      'action=add 入池（raw_text 逐字保存，title 可缺省）；list 列表（q 搜索、limit 分页）；' +
      'get 详情（含进展与产出）；progress 追加进展；link 挂产出链接；' +
      'status 改状态（pool/active/parked/done）；export 导出全部 JSON。' +
      '编号形如 IDEA-001，删除不回收编号；不自动写开工对齐，也不自动收口。',
    parameters: PARAMETERS,
    output: {
      schema: OUTPUT_SCHEMA,
      render: (args, value) => [{ type: 'text', text: renderResult(args, value) }],
    },
    async execute(args) {
      const input = validateArgs(args)
      try {
        return await runAction(service, input)
      } catch (err) {
        // 业务错误（找不到、锁冲突…）作为可读结果返回；其余异常交给运行时记成工具失败
        if (err instanceof ContractError) return { ok: false, error: err.message }
        throw err
      }
    },
  }
}
