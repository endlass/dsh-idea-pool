/**
 * IdeaService：灵感池的唯一业务写入口。
 *
 * UI 路由和 agent 工具都走这里，保证校验、撤销、时间戳、编号规则只有一份。
 * 只 import Node 内置（经 contract/store/settings 间接使用），不依赖 DSH。
 */
import {
  ContractError,
  DEFAULT_LIST_LIMIT,
  MAX_LIST_LIMIT,
  STATUSES,
  countsOf,
  formatIdeaNo,
  ideaNoForError,
  matchesQuery,
  newId,
  normalizeCreate,
  normalizeIdeaNo,
  normalizeLink,
  normalizePatch,
  normalizeProgress,
  projectDetail,
  projectSummary,
  sortIdeas,
  sortEntries,
  titleFromRaw,
} from './contract.mjs'
import { LocalStore } from './store-local.mjs'
import { Settings, publicSettings } from './settings.mjs'

const LABEL_TITLE_LENGTH = 16

function shortTitle(title) {
  const text = typeof title === 'string' ? title.trim() : ''
  return text.length > LABEL_TITLE_LENGTH ? `${text.slice(0, LABEL_TITLE_LENGTH)}…` : text
}

/** 规范化并校验编号；不合法一律按「找不到」处理（404 文案带原值）。 */
function ideaKeyOrThrow(value) {
  const key = normalizeIdeaNo(value)
  if (key) return key
  throw new ContractError(`idea not found: ${ideaNoForError(value)}`, 404)
}

function findRow(state, key) {
  return state.ideas.find((idea) => idea.idea_no === key)
}

function nextRev(row) {
  return (Number.isInteger(row.rev) && row.rev > 0 ? row.rev : 0) + 1
}

export class IdeaService {
  /**
   * @param {object} [options]
   * @param {string} [options.root] - 数据目录（默认 $DSH_HOME/idea-pool）。
   * @param {LocalStore} [options.store] - 注入存储（测试用）。
   * @param {Settings} [options.settings] - 注入设置（测试用）。
   */
  constructor({ root, store, settings, device } = {}) {
    this.store = store ?? new LocalStore({ root, device })
    this.settings = settings ?? new Settings({ root: this.store.root, device: this.store.device })
  }

  /** GET /health：活着的本机模式 + 当前条数。 */
  async health() {
    const state = await this.store.read()
    return { ok: true, mode: 'local', count: state.ideas.length }
  }

  /** GET /api/state：首屏。 */
  async overview() {
    const state = await this.store.read()
    return {
      ok: true,
      mode: 'local',
      storagePath: this.store.file,
      device: state.device,
      canUndo: this.store.canUndo,
      counts: countsOf(state.ideas),
      total: state.ideas.length,
      ideas: sortIdeas(state.ideas).map(projectSummary),
    }
  }

  /**
   * GET /api/ideas：筛选 + 搜索 + 分页。
   * @param {{status?: string, q?: string, limit?: number, offset?: number}} [query]
   */
  async list(query = {}) {
    const status = typeof query.status === 'string' && query.status !== '' ? query.status : undefined
    if (status !== undefined && !STATUSES.includes(status)) {
      throw new ContractError(`status 不合法：${status}，只允许 ${STATUSES.join(' / ')}`)
    }
    const limit = query.limit === undefined ? DEFAULT_LIST_LIMIT : query.limit
    if (!Number.isInteger(limit) || limit < 1 || limit > MAX_LIST_LIMIT) {
      throw new ContractError(`limit 必须是 1-${MAX_LIST_LIMIT} 之间的整数`)
    }
    const offset = query.offset === undefined ? 0 : query.offset
    if (!Number.isInteger(offset) || offset < 0) throw new ContractError('offset 必须是 >= 0 的整数')
    const state = await this.store.read()
    let rows = sortIdeas(state.ideas)
    if (status !== undefined) rows = rows.filter((idea) => idea.status === status)
    if (typeof query.q === 'string' && query.q.trim()) rows = rows.filter((idea) => matchesQuery(idea, query.q))
    return {
      ok: true,
      ideas: rows.slice(offset, offset + limit).map(projectSummary),
      counts: countsOf(state.ideas),
      total: rows.length,
    }
  }

  /** GET /api/ideas/{idea_no}：详情 + 进展 + 产出（均按时间升序）。 */
  async get(ideaNo) {
    const key = ideaKeyOrThrow(ideaNo)
    const state = await this.store.read()
    const idea = findRow(state, key)
    if (!idea) throw new ContractError(`idea not found: ${key}`, 404)
    return {
      ok: true,
      idea: projectDetail(idea),
      updates: sortEntries(idea.updates),
      links: sortEntries(idea.links),
    }
  }

  /** POST /api/ideas：入池。 */
  async add(body) {
    const setting = await this.settings.read()
    const fields = normalizeCreate(body, { device: setting.device })
    const idea = await this.store.mutate(`入池《${shortTitle(fields.title)}》`, (draft) => {
      const at = this.store.nowIso()
      const row = {
        idea_no: formatIdeaNo(draft.next_no),
        title: fields.title,
        raw_text: fields.raw_text,
        summary: fields.summary,
        status: 'pool',
        tags: fields.tags,
        source: fields.source,
        source_note: fields.source_note,
        created_at: at,
        updated_at: at,
        rev: 1,
        updates: [],
        links: [],
      }
      draft.ideas.push(row)
      draft.next_no += 1
      draft.meta.updated_at = at
      return row
    })
    return { ok: true, idea: projectDetail(idea) }
  }

  /** PATCH /api/ideas/{idea_no}：白名单字段任意子集。 */
  async update(ideaNo, body) {
    const key = ideaKeyOrThrow(ideaNo)
    const patch = normalizePatch(body)
    const idea = await this.store.mutate(`修改 ${key}`, (draft) => {
      const target = findRow(draft, key)
      if (!target) throw new ContractError(`idea not found: ${key}`, 404)
      // 先把校验做完，再动数据；后面抛错就是 400，而不是半改状态
      const nextRaw = patch.raw_text !== undefined ? patch.raw_text : target.raw_text
      const nextTitle = patch.title !== undefined ? patch.title : target.title
      const finalTitle = nextTitle || titleFromRaw(nextRaw)
      if (!finalTitle && !nextRaw) throw new ContractError('raw_text 或 title 至少填一个')
      const at = this.store.nowIso()
      if (patch.raw_text !== undefined) target.raw_text = patch.raw_text
      if (patch.summary !== undefined) target.summary = patch.summary
      if (patch.status !== undefined) target.status = patch.status
      if (patch.tags !== undefined) target.tags = patch.tags
      if (patch.source_note !== undefined) target.source_note = patch.source_note
      target.title = finalTitle
      target.rev = nextRev(target)
      target.updated_at = at
      draft.meta.updated_at = at
      return target
    })
    return { ok: true, idea: projectDetail(idea) }
  }

  /** POST /api/ideas/{idea_no}/updates：追加进展。 */
  async progress(ideaNo, body) {
    const key = ideaKeyOrThrow(ideaNo)
    const fields = normalizeProgress(body)
    const setting = await this.settings.read()
    const update = await this.store.mutate(`给 ${key} 加进展`, (draft) => {
      const target = findRow(draft, key)
      if (!target) throw new ContractError(`idea not found: ${key}`, 404)
      const at = this.store.nowIso()
      const entry = {
        id: newId('u'),
        content: fields.content,
        source: fields.source || setting.device || draft.device,
        created_at: at,
      }
      target.updates.push(entry)
      target.rev = nextRev(target)
      target.updated_at = at
      draft.meta.updated_at = at
      return entry
    })
    return { ok: true, update }
  }

  /** POST /api/ideas/{idea_no}/links：挂产出。 */
  async link(ideaNo, body) {
    const key = ideaKeyOrThrow(ideaNo)
    const fields = normalizeLink(body)
    const link = await this.store.mutate(`给 ${key} 挂产出`, (draft) => {
      const target = findRow(draft, key)
      if (!target) throw new ContractError(`idea not found: ${key}`, 404)
      const at = this.store.nowIso()
      const entry = {
        id: newId('l'),
        title: fields.title,
        url: fields.url,
        ref_type: fields.ref_type,
        ref_id: fields.ref_id,
        created_at: at,
      }
      target.links.push(entry)
      target.rev = nextRev(target)
      target.updated_at = at
      draft.meta.updated_at = at
      return entry
    })
    return { ok: true, link }
  }

  /** DELETE /api/ideas/{idea_no}：删除想法（连带进展/产出）。 */
  async remove(ideaNo) {
    const key = ideaKeyOrThrow(ideaNo)
    await this.store.mutate(`删除 ${key}`, (draft) => {
      const index = draft.ideas.findIndex((idea) => idea.idea_no === key)
      if (index < 0) throw new ContractError(`idea not found: ${key}`, 404)
      draft.ideas.splice(index, 1)
      draft.meta.updated_at = this.store.nowIso()
    })
    return { ok: true }
  }

  /** POST /api/undo：撤销上一步，state 与 /api/state 同形。 */
  async undo() {
    const label = await this.store.undoLast()
    if (label === null) throw new ContractError('没有可以撤销的操作', 409)
    return { ok: true, label, state: await this.overview() }
  }

  /** GET /api/settings：公开设置（无密钥）。 */
  async settingsPublic() {
    return { ok: true, settings: publicSettings(await this.settings.read()) }
  }

  /** POST /api/settings：v0.1 只接受 { device? }。 */
  async updateSettings(body) {
    const next = await this.settings.update(body)
    const state = await this.store.read()
    // 设备名是同一份身份：设置改了，已有 state 里的 device 跟着走
    if (state.device !== next.device) {
      await this.store.mutate(
        '修改设备名',
        (draft) => {
          draft.device = next.device
          draft.meta.updated_at = this.store.nowIso()
        },
        { undoable: false },
      )
    }
    return { ok: true, settings: publicSettings(next) }
  }

  /** GET /api/export：可直接下载的 JSON。 */
  async exportData() {
    const state = await this.store.read()
    return {
      ok: true,
      data: {
        schema: state.schema,
        device: state.device,
        exported_at: this.store.nowIso(),
        ideas: sortIdeas(state.ideas).map((idea) => structuredClone(idea)),
      },
    }
  }
}
