#!/usr/bin/env node
/**
 * 把云端灵感池（ideas-api）单向导入到本机模式 state.json。
 *
 * 用途：P1.5/P2 迁移工具的最小实现——让本机面板先看到云端已有内容；
 * 不是双向同步：本地之后的新想法/进展不会自动回写云端。
 *
 * 用法：
 *   node scripts/import-cloud.mjs --base https://ideas.example.com/ideas/api --dry-run
 *   node scripts/import-cloud.mjs --base https://ideas.example.com/ideas/api
 *
 * 选项：
 *   --base <url>       云端 API 基址（也可用环境变量 IDEAS_API_BASE；没有默认值，必填）
 *   --site <url>       可选：站点根地址，用于把云端相对链接补成绝对地址；
 *                      缺省只在 base 形如 <站点>/ideas/api 时推断，否则保留相对链接
 *   --key-file <path>  密钥文件（也可用环境变量 IDEAS_API_KEY；缺省依次尝试
 *                      $DSH_HOME/ideas-api.key、~/.ideas-api.key）
 *   --state <path>     本机 state.json（默认 $DSH_HOME/idea-pool/state.json）
 *   --replace          忽略本机已有想法，整体替换（默认按 idea_no 合并）
 *
 * 密钥只放在请求头里，不打印、不写日志。
 */
import { copyFile, mkdir, open, readFile, rename, stat, unlink, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'

const DEFAULT_DEVICE = process.platform === 'darwin' ? 'dsh-mac' : process.platform === 'win32' ? 'dsh-win' : 'dsh'
/** 由 <站点>/ideas/api 推断站点根，用于补全云端返回的相对链接；推断不出来就为空。 */
function siteFromBase(base) {
  const match = /^(https?:\/\/.+\/ideas)\/api$/i.exec(base)
  return match ? match[1] : ''
}
const STATUSES = new Set(['pool', 'active', 'parked', 'done'])
const SCHEMA = 1
const LOCK_WAIT_MS = 3000
const LOCK_RETRY_MS = 60

function parseArgs(argv) {
  const args = {
    base: process.env.IDEAS_API_BASE || '',
    site: process.env.IDEAS_SITE || '',
    keyFile: '',
    state: '',
    dryRun: false,
    replace: false,
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--dry-run') args.dryRun = true
    else if (arg === '--replace') args.replace = true
    else if (arg === '--base') args.base = argv[++i] || ''
    else if (arg === '--site') args.site = argv[++i] || ''
    else if (arg === '--key-file') args.keyFile = argv[++i]
    else if (arg === '--state') args.state = argv[++i]
    else if (arg === '-h' || arg === '--help') { console.log('用法见文件头注释'); process.exit(0) }
    else { console.error(`未知参数：${arg}`); process.exit(2) }
  }
  args.base = String(args.base || '').trim().replace(/\/+$/, '')
  if (!args.base) {
    console.error('缺少 --base（或环境变量 IDEAS_API_BASE）：请填你自己的 ideas-api 基址，例如 https://ideas.example.com/ideas/api')
    process.exit(2)
  }
  args.site = String(args.site || '').trim().replace(/\/+$/, '') || siteFromBase(args.base)
  const dshHome = process.env.DSH_HOME || join(homedir(), '.dsh')
  args.state = args.state || join(dshHome, 'idea-pool', 'state.json')
  args.keyPaths = [join(dshHome, 'ideas-api.key'), join(homedir(), '.ideas-api.key')]
  return args
}

async function readKey(explicit, fallbacks) {
  const fromEnv = typeof process.env.IDEAS_API_KEY === 'string' ? process.env.IDEAS_API_KEY.trim() : ''
  if (fromEnv) return fromEnv
  const candidates = explicit ? [explicit] : fallbacks
  for (const path of candidates) {
    try {
      const text = (await readFile(path, 'utf8')).trim()
      if (text) return text
    } catch (err) {
      if (err.code !== 'ENOENT') throw err
    }
  }
  throw new Error('没有找到云端 API 密钥（环境变量 IDEAS_API_KEY、--key-file 或 $DSH_HOME/ideas-api.key）')
}

async function apiJson(base, path, key) {
  const url = base.replace(/\/+$/, '') + path
  const res = await fetch(url, {
    headers: { 'X-API-Key': key, accept: 'application/json' },
    signal: AbortSignal.timeout(20000),
  })
  let data = null
  try { data = await res.json() } catch { data = null }
  if (!res.ok) throw new Error(`GET ${path} → HTTP ${res.status}${data?.error ? '：' + data.error : ''}`)
  return data
}

/** 云端时间 "YYYY-MM-DD HH:MM" 是北京时间（无时区）；转 ISO UTC。 */
function toIso(text, fallback = new Date().toISOString()) {
  if (typeof text !== 'string' || !text.trim()) return fallback
  const raw = text.trim()
  const withZone = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$/.test(raw) ? raw.replace(' ', 'T') + '+08:00' : raw
  const date = new Date(withZone)
  return Number.isNaN(date.getTime()) ? fallback : date.toISOString()
}

/** 云端相对链接（/docs/...）补成站点绝对地址；推断不出站点时原样保留。 */
function absoluteUrl(value, siteBase) {
  const text = typeof value === 'string' ? value.trim() : ''
  if (!text) return ''
  if (/^https?:\/\//i.test(text)) return text
  if (siteBase && text.startsWith('/')) return siteBase + text
  return text
}

function convertIdea(detail, siteBase) {
  const idea = detail?.idea ?? {}
  const no = String(idea.idea_no ?? '').toUpperCase()
  if (!/^IDEA-\d+$/.test(no)) throw new Error(`云端返回了非法编号：${String(idea.idea_no)}`)
  const created = toIso(idea.created_at)
  return {
    idea_no: no,
    title: typeof idea.title === 'string' ? idea.title : '',
    raw_text: typeof idea.raw_text === 'string' ? idea.raw_text : '',
    summary: typeof idea.summary === 'string' ? idea.summary : '',
    status: STATUSES.has(idea.status) ? idea.status : 'pool',
    tags: Array.isArray(idea.tags) ? idea.tags.map(String).slice(0, 24) : [],
    source: typeof idea.source === 'string' ? idea.source : '',
    source_note: typeof idea.source_note === 'string' ? idea.source_note : '',
    created_at: created,
    updated_at: toIso(idea.updated_at, created),
    rev: 1,
    updates: (Array.isArray(detail?.updates) ? detail.updates : []).map((row) => ({
      id: `u_c_${row.id}`,
      content: typeof row.content === 'string' ? row.content : '',
      source: typeof row.source === 'string' ? row.source : '',
      created_at: toIso(row.created_at, created),
    })),
    links: (Array.isArray(detail?.links) ? detail.links : []).map((row) => ({
      id: `l_c_${row.id}`,
      title: typeof row.title === 'string' ? row.title : '',
      url: absoluteUrl(row.url, siteBase),
      ref_type: typeof row.ref_type === 'string' && row.ref_type ? row.ref_type : 'external',
      ref_id: typeof row.ref_id === 'string' ? row.ref_id : '',
      created_at: toIso(row.created_at, created),
    })),
  }
}

function unionById(localRows, cloudRows) {
  const seen = new Set()
  const out = []
  for (const row of [...cloudRows, ...(Array.isArray(localRows) ? localRows : [])]) {
    if (!row || typeof row.id !== 'string') continue
    if (seen.has(row.id)) continue
    seen.add(row.id)
    out.push(row)
  }
  return out
}

function mergeIdea(localIdea, cloudIdea) {
  if (!localIdea) return cloudIdea
  return {
    ...cloudIdea,
    updates: unionById(localIdea.updates, cloudIdea.updates),
    links: unionById(localIdea.links, cloudIdea.links),
  }
}

function normalizeLocalState(raw) {
  const state = raw && typeof raw === 'object' ? raw : {}
  return {
    schema: SCHEMA,
    device: typeof state.device === 'string' && state.device ? state.device : DEFAULT_DEVICE,
    next_no: Number.isInteger(state.next_no) && state.next_no > 0 ? state.next_no : 1,
    ideas: Array.isArray(state.ideas) ? state.ideas : [],
    meta: state.meta && typeof state.meta === 'object' ? state.meta : {},
  }
}

async function readLocal(path) {
  try {
    return normalizeLocalState(JSON.parse(await readFile(path, 'utf8')))
  } catch (err) {
    if (err.code === 'ENOENT') return normalizeLocalState(null)
    throw new Error(`本机 state.json 读取失败：${err.message}`)
  }
}

function nextNoOf(ideas) {
  let max = 0
  for (const idea of ideas) {
    const match = /^IDEA-(\d+)$/.exec(String(idea.idea_no || '').toUpperCase())
    if (match) max = Math.max(max, Number(match[1]))
  }
  return max + 1
}

async function withLock(statePath, fn) {
  const lockPath = join(dirname(statePath), 'state.lock')
  const deadline = Date.now() + LOCK_WAIT_MS
  let handle = null
  for (;;) {
    try {
      handle = await open(lockPath, 'wx', 0o600)
      await handle.writeFile(JSON.stringify({ pid: process.pid, at: new Date().toISOString() }))
      break
    } catch (err) {
      if (err.code !== 'EEXIST') throw err
      let stale = false
      try {
        const info = await stat(lockPath)
        stale = Date.now() - info.mtimeMs > 30_000
      } catch { /* 锁可能刚被释放 */ }
      if (stale) { await unlink(lockPath).catch(() => {}); continue }
      if (Date.now() > deadline) throw new Error('state.lock 等待超时：有别的进程正在写')
      await new Promise((resolve) => setTimeout(resolve, LOCK_RETRY_MS))
    }
  }
  try { return await fn() } finally {
    await handle?.close().catch(() => {})
    await unlink(lockPath).catch(() => {})
  }
}

async function writeState(statePath, state) {
  const dir = dirname(statePath)
  await mkdir(dir, { recursive: true, mode: 0o700 })
  const tmp = `${statePath}.${process.pid}.import.tmp`
  await writeFile(tmp, JSON.stringify(state), { mode: 0o600 })
  await rename(tmp, statePath)
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const key = await readKey(args.keyFile, args.keyPaths)
  console.log(`云端：${args.base}`)
  const list = await apiJson(args.base, '/ideas?limit=500', key)
  const ideas = Array.isArray(list?.ideas) ? list.ideas : []
  console.log(`云端列表：${ideas.length} 条（counts=${JSON.stringify(list?.counts ?? {})}）`)

  const details = []
  for (const summary of ideas) {
    const no = summary.idea_no
    if (!no) continue
    const detail = await apiJson(args.base, `/ideas/${encodeURIComponent(no)}`, key)
    details.push(convertIdea(detail, args.site))
  }
  const cloudUpdates = details.reduce((n, idea) => n + idea.updates.length, 0)
  const cloudLinks = details.reduce((n, idea) => n + idea.links.length, 0)
  console.log(`云端详情：${details.length} 条，进展 ${cloudUpdates}，产出 ${cloudLinks}`)

  const localState = await readLocal(args.state)
  const localMap = new Map(localState.ideas.map((idea) => [String(idea.idea_no || '').toUpperCase(), idea]))
  const merged = []
  let added = 0
  let updated = 0
  if (args.replace) {
    for (const idea of details) merged.push(idea)
    added = details.length
  } else {
    for (const idea of localState.ideas) {
      if (!details.some((row) => row.idea_no === String(idea.idea_no || '').toUpperCase())) merged.push(idea)
    }
    for (const idea of details) {
      const existing = localMap.get(idea.idea_no)
      merged.push(mergeIdea(existing, idea))
      if (existing) updated += 1
      else added += 1
    }
  }
  merged.sort((a, b) => String(a.idea_no).localeCompare(String(b.idea_no)))
  const nextState = {
    schema: SCHEMA,
    device: localState.device || DEFAULT_DEVICE,
    next_no: Math.max(nextNoOf(merged), localState.next_no || 1),
    ideas: merged,
    meta: { updated_at: new Date().toISOString() },
  }
  console.log(`合并结果：${merged.length} 条（新增 ${added} / 更新 ${updated}），next_no=${nextState.next_no}`)
  if (args.dryRun) {
    console.log('--dry-run：不写盘。')
    return
  }
  await withLock(args.state, async () => {
    try {
      const stamp = new Date().toISOString().replace(/[:.]/g, '-')
      await copyFile(args.state, `${args.state}.pre-import-${stamp}.bak`)
      console.log(`已备份：${args.state}.pre-import-${stamp}.bak`)
    } catch (err) {
      if (err.code !== 'ENOENT') throw err
    }
    await writeState(args.state, nextState)
  })
  console.log(`已写入：${args.state}`)
}

main().catch((err) => {
  console.error(`导入失败：${err.message}`)
  process.exit(1)
})
