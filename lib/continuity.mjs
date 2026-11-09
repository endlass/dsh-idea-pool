/**
 * 双模连续性（契约 §12）：本机账本 vs 云端账本的差异检查 + 单向增量刷新。
 *
 * 背景：插件默认 mode=local，本机 state.json 可能是很久以前从云端导入的快照。
 * 面板只在本地数据上工作，用户看不出「本机落后云端多少」。这里补上两件事：
 *   - continuityStatus()：云端可达性 + 上次刷新时间 + 差异摘要（不阻塞列表，失败也返回 200）；
 *   - refreshLocalFromCloud()：「从云端增量刷新」——语义复用 import-local 的合并规则
 *     （按 idea_no 合并、云端字段为准、updates/links 按 id 取并集、保留本机独有、不删数据），
 *     但只拉取真正有差异的想法详情，并记录 state.meta.last_sync。
 *
 * 边界：不是双向同步。本机新增/修改的内容不会回写云端；UI 文案必须讲清楚。
 *
 * 只 import Node 内置与本仓库纯数据模块，不依赖 DSH。
 */
import { ContractError } from './contract.mjs'
import { mergeCloudIdea } from './import-local.mjs'

/** 云端列表每页条数（与 CloudEngine.listAllDetailed 一致）。 */
const PAGE_LIMIT = 500
/** 分页保护：最多拉 100 页（5 万条）。 */
const MAX_PAGES = 100
/** 详情并发数（别把云端打爆）。 */
const DETAIL_CONCURRENCY = 4

function toCount(value) {
  return Number.isInteger(value) && value >= 0 ? value : 0
}

function idsOf(rows) {
  const ids = new Set()
  for (const row of Array.isArray(rows) ? rows : []) {
    if (row && typeof row.id === 'string' && row.id !== '') ids.add(row.id)
  }
  return ids
}

function updatedAtOf(row) {
  const time = Date.parse(typeof row?.updated_at === 'string' ? row.updated_at : '')
  return Number.isFinite(time) ? time : 0
}

/**
 * 这条云端摘要是否值得拉详情：
 * 云端进展/产出条数比本机多，或云端 updated_at 比本机新，或云端没给计数（退化成全量核对）。
 */
function needsDetail(localIdea, remote) {
  const localUpdates = Array.isArray(localIdea?.updates) ? localIdea.updates.length : 0
  const localLinks = Array.isArray(localIdea?.links) ? localIdea.links.length : 0
  if (!Number.isInteger(remote?.n_updates) || !Number.isInteger(remote?.n_links)) return true
  if (toCount(remote.n_updates) > localUpdates) return true
  if (toCount(remote.n_links) > localLinks) return true
  return updatedAtOf(remote) > updatedAtOf(localIdea)
}

/** 纯计算：云端摘要 + 候选详情 vs 本机 state → 差异摘要（不做任何 IO）。 */
export function computeDrift({ localState, summaries, details = new Map(), checkedAt = '' } = {}) {
  const localIdeas = Array.isArray(localState?.ideas) ? localState.ideas : []
  const localByNo = new Map()
  for (const idea of localIdeas) {
    if (idea && typeof idea.idea_no === 'string') localByNo.set(idea.idea_no, idea)
  }
  const remoteNos = new Set()
  let missingIdeas = 0
  let missingUpdates = 0
  let missingLinks = 0
  let changedIdeas = 0
  for (const remote of Array.isArray(summaries) ? summaries : []) {
    const no = remote?.idea_no
    if (typeof no !== 'string' || no === '') continue
    remoteNos.add(no)
    const local = localByNo.get(no)
    if (!local) {
      missingIdeas += 1
      missingUpdates += toCount(remote.n_updates)
      missingLinks += toCount(remote.n_links)
      continue
    }
    const detail = details instanceof Map ? details.get(no) : undefined
    if (!detail) {
      // 只拉了候选详情；候选却没详情说明调用方漏拉了，按估算记为落后（宁可见，不静默）
      if (needsDetail(local, remote)) {
        changedIdeas += 1
        missingUpdates += Math.max(0, toCount(remote.n_updates) - idsOf(local.updates).size)
        missingLinks += Math.max(0, toCount(remote.n_links) - idsOf(local.links).size)
      }
      continue
    }
    const localUpdates = idsOf(local.updates)
    const localLinks = idsOf(local.links)
    const remoteUpdateRows = Array.isArray(detail.updates) ? detail.updates : []
    const remoteLinkRows = Array.isArray(detail.links) ? detail.links : []
    const addUpdates = remoteUpdateRows.filter((row) => !localUpdates.has(row?.id)).length
    const addLinks = remoteLinkRows.filter((row) => !localLinks.has(row?.id)).length
    const newer = updatedAtOf(detail) > updatedAtOf(local)
    if (addUpdates > 0 || addLinks > 0 || newer) {
      changedIdeas += 1
      missingUpdates += addUpdates
      missingLinks += addLinks
    }
  }
  let localOnlyIdeas = 0
  for (const idea of localIdeas) {
    if (idea && typeof idea.idea_no === 'string' && !remoteNos.has(idea.idea_no)) localOnlyIdeas += 1
  }
  const cloudTotal = Array.isArray(summaries) ? summaries.length : 0
  return {
    behind: missingIdeas + missingUpdates + missingLinks + changedIdeas > 0,
    cloud_total: cloudTotal,
    local_total: localIdeas.length,
    missing_ideas: missingIdeas,
    missing_updates: missingUpdates,
    missing_links: missingLinks,
    changed_ideas: changedIdeas,
    local_only_ideas: localOnlyIdeas,
    checked_at: typeof checkedAt === 'string' ? checkedAt : '',
  }
}

/** 分页拉云端全量摘要（云端 /ideas 上限 500/页）。 */
async function listAll(cloud) {
  const summaries = []
  let offset = 0
  for (let page = 0; page < MAX_PAGES; page += 1) {
    const result = await cloud.list({ limit: PAGE_LIMIT, offset })
    const rows = Array.isArray(result?.ideas) ? result.ideas : []
    summaries.push(...rows)
    const total = Number.isInteger(result?.total) ? result.total : summaries.length
    if (rows.length === 0 || summaries.length >= total) break
    offset += rows.length
  }
  return summaries
}

/**
 * 拉云端视图：全量摘要 + 只对「可能有差异」的想法拉详情。
 * @param {object} parts
 * @param {import('./cloud-engine.mjs').CloudEngine} parts.cloud
 * @param {import('./local-engine.mjs').LocalEngine} parts.local
 */
export async function collectCloudView({ cloud, local } = {}) {
  const conn = await cloud.connection()
  const localState = await local.store.read()
  const summaries = await listAll(cloud)
  const localByNo = new Map()
  for (const idea of Array.isArray(localState.ideas) ? localState.ideas : []) {
    if (idea && typeof idea.idea_no === 'string') localByNo.set(idea.idea_no, idea)
  }
  const keys = []
  for (const remote of summaries) {
    const no = remote?.idea_no
    if (typeof no !== 'string' || no === '') continue
    const localIdea = localByNo.get(no)
    if (!localIdea || needsDetail(localIdea, remote)) keys.push(no)
  }
  const details = new Map()
  for (let index = 0; index < keys.length; index += DETAIL_CONCURRENCY) {
    const chunk = keys.slice(index, index + DETAIL_CONCURRENCY)
    const rows = await Promise.all(chunk.map((no) => cloud.detailIdea(no, conn)))
    for (const row of rows) {
      if (row && typeof row.idea_no === 'string') details.set(row.idea_no, row)
    }
  }
  return { connection: conn, localState, summaries, details, fetched: keys.length }
}

/**
 * GET /api/continuity：负载永远 200（云端不可达/未配置 Key 只降级，不阻塞列表与本地功能）。
 * @returns {Promise<object>}
 */
export async function continuityStatus({ cloud, local } = {}) {
  const settings = await cloud.settings.read()
  const mode = settings.mode === 'cloud' ? 'cloud' : 'local'
  const apiKey = typeof settings.cloud?.apiKey === 'string' ? settings.cloud.apiKey : ''
  const configured = apiKey !== ''
  const localState = await local.store.read()
  const lastSync = localState?.meta?.last_sync ?? null
  const cloudInfo = {
    configured,
    base: typeof settings.cloud?.base === 'string' ? settings.cloud.base : '',
    reachable: null,
    reason: '',
    error: '',
    latency_ms: 0,
    checked_at: '',
  }
  const base = { ok: true, mode, applicable: mode === 'local', bidirectional: false, cloud: cloudInfo, lastSync }
  if (mode === 'cloud') {
    // 云端模式数据就在云端，本机账本与云端差异没有展示意义：不联网，直接告诉调用方不适用
    return { ...base, drift: null }
  }
  if (!configured) {
    cloudInfo.reachable = false
    cloudInfo.reason = 'no-key'
    cloudInfo.error = '未配置云端 API Key'
    return { ...base, drift: null }
  }
  const started = Date.now()
  try {
    const view = await collectCloudView({ cloud, local })
    const checkedAt = local.store.nowIso()
    cloudInfo.reachable = true
    cloudInfo.checked_at = checkedAt
    cloudInfo.latency_ms = Math.max(0, Date.now() - started)
    return {
      ...base,
      lastSync: view.localState?.meta?.last_sync ?? null,
      drift: computeDrift({ localState: view.localState, summaries: view.summaries, details: view.details, checkedAt }),
    }
  } catch (err) {
    cloudInfo.reachable = false
    cloudInfo.reason = err?.status === 401 || err?.status === 403 ? 'auth' : 'unreachable'
    cloudInfo.error = cloud.redact(String(err?.message ?? '连不上云端'), apiKey)
    cloudInfo.checked_at = local.store.nowIso()
    return { ...base, drift: null }
  }
}

function nextNoAfter(ideas) {
  let max = 0
  for (const idea of Array.isArray(ideas) ? ideas : []) {
    const match = /^IDEA-(\d{1,9})$/.exec(String(idea?.idea_no ?? '').toUpperCase())
    if (match) max = Math.max(max, Number(match[1]))
  }
  return max + 1
}

/**
 * POST /api/continuity/refresh：从云端增量刷新到本机 state。
 *
 * - 只拉「有差异/本机没有」的想法详情，按 import-local 的规则合并；
 * - 云端进展/产出按 id 取并集（重复刷新幂等，不会产生重复进展）；
 * - 本机独有的想法、进展、产出都保留，不删数据；
 * - 记录 state.meta.last_sync（at/base/cloud_total/新增计数）；
 * - 有内容变化时进本机撤销栈（可撤销这次刷新）；没有变化时只更新 last_sync，不占撤销位。
 * @returns {Promise<object>}
 */
export async function refreshLocalFromCloud({ cloud, local } = {}) {
  const settings = await cloud.settings.read()
  if (!settings.cloud?.apiKey) throw new ContractError('请先在设置里配置云端 API Key', 400)
  const view = await collectCloudView({ cloud, local })
  const before = computeDrift({
    localState: view.localState,
    summaries: view.summaries,
    details: view.details,
    checkedAt: local.store.nowIso(),
  })
  const targets = view.summaries
    .map((row) => row?.idea_no)
    .filter((no) => typeof no === 'string' && view.details.has(no))
  const at = local.store.nowIso()
  const stamp = {
    at,
    base: typeof settings.cloud.base === 'string' ? settings.cloud.base : '',
    cloud_total: view.summaries.length,
    imported: 0,
    updated: 0,
    added_updates: 0,
    added_links: 0,
  }
  const counts = await local.store.mutate(
    '从云端刷新灵感池',
    (draft) => {
      const byNo = new Map()
      for (const idea of draft.ideas) {
        if (idea && typeof idea.idea_no === 'string') byNo.set(idea.idea_no, idea)
      }
      let imported = 0
      let updated = 0
      let addedUpdates = 0
      let addedLinks = 0
      for (const no of targets) {
        const remote = view.details.get(no)
        if (!remote) continue
        const existing = byNo.get(no)
        if (!existing) {
          const row = structuredClone(remote)
          draft.ideas.push(row)
          byNo.set(no, row)
          imported += 1
          addedUpdates += Array.isArray(remote.updates) ? remote.updates.length : 0
          addedLinks += Array.isArray(remote.links) ? remote.links.length : 0
          continue
        }
        const beforeUpdates = idsOf(existing.updates)
        const beforeLinks = idsOf(existing.links)
        const merged = mergeCloudIdea(existing, remote)
        addedUpdates += merged.updates.filter((row) => !beforeUpdates.has(row?.id)).length
        addedLinks += merged.links.filter((row) => !beforeLinks.has(row?.id)).length
        Object.assign(existing, merged)
        updated += 1
      }
      if (targets.length > 0) draft.next_no = Math.max(toCount(draft.next_no), nextNoAfter(draft.ideas))
      const nextStamp = {
        ...stamp,
        imported,
        updated,
        added_updates: addedUpdates,
        added_links: addedLinks,
      }
      draft.meta.last_sync = nextStamp
      draft.meta.updated_at = at
      return { imported, updated, added_updates: addedUpdates, added_links: addedLinks }
    },
    { undoable: targets.length > 0 },
  )
  const afterState = await local.store.read()
  const driftAfter = computeDrift({
    localState: afterState,
    summaries: view.summaries,
    checkedAt: local.store.nowIso(),
  })
  return {
    ok: true,
    imported: counts.imported,
    updated: counts.updated,
    fetched: view.fetched,
    added_updates: counts.added_updates,
    added_links: counts.added_links,
    cloud_total: view.summaries.length,
    before,
    drift: driftAfter,
    lastSync: afterState?.meta?.last_sync ?? null,
  }
}
