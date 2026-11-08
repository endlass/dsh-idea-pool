/**
 * 云端 → 本机一次性导入（契约 §11.2 POST /api/cloud/import-local）。
 *
 * 用已存云端配置拉全量（列表 + 每条详情），按 idea_no 合并进本机 LocalStore：
 * - 本机没有的云端想法：插入（imported）；
 * - 两边都有的：云端字段为准，进展/产出按 id 取并集，本机独有内容不丢（updated）；
 * - 本机独有的想法保留，不删除；不切换运行模式。
 *
 * 导入本身可撤销（进本机撤销栈，label 为「从云端导入 N 条想法」）。
 */
import { ContractError, IDEA_NO_RE } from './contract.mjs'

/** 按 id 取并集：primary 优先，secondary 里独有的行追加在后面。 */
function unionById(primary, secondary) {
  const seen = new Set()
  const out = []
  for (const row of [...(Array.isArray(primary) ? primary : []), ...(Array.isArray(secondary) ? secondary : [])]) {
    if (!row || typeof row.id !== 'string' || row.id === '' || seen.has(row.id)) continue
    seen.add(row.id)
    out.push(row)
  }
  return out
}

/**
 * 合并一条云端想法到本机已有想法：云端字段为准，进展/产出按 id 取并集。
 * @param {object} existing - 本机 idea 行。
 * @param {object} remote - CloudEngine.listAllDetailed() 给出的本机形状 idea。
 * @returns {object} 合并后的行（新对象）。
 */
export function mergeCloudIdea(existing, remote) {
  const merged = {
    ...structuredClone(remote),
    updates: unionById(remote.updates, existing.updates),
    links: unionById(remote.links, existing.links),
  }
  // rev：云端 rev 是服务端版本号；本机 rev 只服务本机撤销，导入时不让它回退
  const remoteRev = Number.isInteger(remote.rev) && remote.rev > 0 ? remote.rev : 0
  const localRev = Number.isInteger(existing.rev) && existing.rev > 0 ? existing.rev : 0
  merged.rev = Math.max(remoteRev, localRev, 1)
  return merged
}

function nextNoAfter(ideas, currentNext) {
  let max = 0
  for (const idea of ideas) {
    const match = IDEA_NO_RE.exec(String(idea?.idea_no ?? '').toUpperCase())
    if (match) max = Math.max(max, Number(match[1]))
  }
  const next = Number.isInteger(currentNext) && currentNext > 0 ? currentNext : 1
  return Math.max(next, max + 1)
}

/**
 * 拉云端全量并合并进本机 store。
 * @param {object} parts
 * @param {import('./cloud-engine.mjs').CloudEngine} parts.cloud
 * @param {import('./local-engine.mjs').LocalEngine} parts.local
 * @returns {Promise<{ok: true, imported: number, updated: number, total: number}>}
 */
export async function importCloudToLocal({ cloud, local }) {
  const settings = await cloud.settings.read()
  if (!settings.cloud.apiKey) throw new ContractError('请先在设置里配置云端 API Key', 400)
  const remoteIdeas = await cloud.listAllDetailed()
  const total = remoteIdeas.length
  const counts = await local.store.mutate(
    `从云端导入 ${total} 条想法`,
    (draft) => {
      const byNo = new Map(draft.ideas.map((idea) => [idea.idea_no, idea]))
      let imported = 0
      let updated = 0
      for (const remote of remoteIdeas) {
        const ideaNo = remote?.idea_no
        if (!ideaNo) continue
        const existing = byNo.get(ideaNo)
        if (!existing) {
          const row = structuredClone(remote)
          draft.ideas.push(row)
          byNo.set(ideaNo, row)
          imported += 1
          continue
        }
        Object.assign(existing, mergeCloudIdea(existing, remote))
        updated += 1
      }
      draft.next_no = nextNoAfter(draft.ideas, draft.next_no)
      draft.meta.updated_at = local.store.nowIso()
      return { imported, updated, total }
    },
    { undoable: true },
  )
  return { ok: true, imported: counts.imported, updated: counts.updated, total: counts.total }
}
