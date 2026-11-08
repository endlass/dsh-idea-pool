// 浏览器侧状态：Host 状态的本地镜像 + 只属于界面的选中、筛选、对话框与提示。
// 用 external store（useSyncExternalStore）而不是 Context，写操作和渲染解耦。
import React from 'react'
import { t } from './i18n.js'

const BASE = 'idea-pool/'
const LIST_LIMIT = 500

function emptyCounts() {
  return { all: 0, pool: 0, active: 0, done: 0, parked: 0 }
}

let snapshot = {
  booted: false,
  loading: true,
  error: null,
  mode: 'local',
  device: '',
  storagePath: '',
  // 云端模式下的 ideas-api 基址（local 模式为 ''）
  cloudBase: '',
  canUndo: false,
  counts: emptyCounts(),
  total: 0,
  status: 'all',
  query: '',
  ideas: [],
  listLoading: false,
  selectedNo: null,
  newIdeaNo: null,
  suppressAutoSelect: false,
  detail: null,
  detailLoading: false,
  detailError: null,
  settings: null,
  settingsLoading: false,
  toast: null,
}

const listeners = new Set()

/** 当前快照（不要在组件里直接用，组件用 useStore 订阅）。 */
export function getStore() {
  return snapshot
}

function set(patch) {
  snapshot = { ...snapshot, ...(typeof patch === 'function' ? patch(snapshot) : patch) }
  listeners.forEach(fn => {
    try { fn() } catch (err) { console.error('[idea-pool] store listener failed', err) }
  })
}

function subscribe(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

/** 订阅状态切片；selector 要返回原始值或稳定引用，避免每次渲染生成新对象。 */
export function useStore(selector) {
  return React.useSyncExternalStore(subscribe, () => selector(snapshot))
}

/* ---------- 提示 ---------- */

let toastTimer = null
let newIdeaTimer = null

export function toast(text, { error = false, duration = 0 } = {}) {
  clearTimeout(toastTimer)
  const id = Date.now() + Math.random()
  set({ toast: { id, text, error } })
  const ms = duration || (error ? 6000 : 3200)
  toastTimer = setTimeout(() => {
    if (snapshot.toast && snapshot.toast.id === id) set({ toast: null })
  }, ms)
}

export function dismissToast() {
  clearTimeout(toastTimer)
  set({ toast: null })
}

export function report(err) {
  toast((err && err.message) || String(err), { error: true })
  // 云端 rev 冲突（409）：重新拉一遍列表与当前详情，用户能在最新版本上直接重试
  if (err && Number(err.status) === 409) {
    Promise.allSettled([fetchState(), fetchList(), refreshSelected()])
  }
}

/* ---------- 请求 ---------- */

async function request(path, init) {
  const options = { credentials: 'same-origin', ...(init || {}) }
  let res
  try {
    res = await fetch(BASE + path, options)
  } catch (err) {
    throw new Error(t('连不上本机服务：{error}', { error: (err && err.message) || String(err) }))
  }
  let data = null
  try { data = await res.json() } catch (err) { data = null }
  if (!res.ok || (data && data.ok === false)) {
    const error = new Error((data && data.error) || t('请求失败（{status}）', { status: res.status }))
    // 带上 HTTP 状态：401 / 409 / 502 的分支处理在 report() 里
    error.status = res.status
    throw error
  }
  return data || {}
}

function jsonInit(method, body) {
  return {
    method,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body == null ? {} : body),
  }
}

/* ---------- 规范化 ---------- */

function toCount(value) {
  const n = Number(value)
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0
}

function normalizeCounts(raw, total) {
  const c = raw && typeof raw === 'object' ? raw : {}
  const counts = {
    pool: toCount(c.pool),
    active: toCount(c.active),
    done: toCount(c.done),
    parked: toCount(c.parked),
  }
  const sum = counts.pool + counts.active + counts.done + counts.parked
  counts.all = toCount(c.all) || toCount(c.total) || toCount(total) || sum
  return counts
}

function applyState(data) {
  if (!data || typeof data !== 'object') return
  const patch = {
    mode: typeof data.mode === 'string' ? data.mode : snapshot.mode,
    canUndo: Boolean(data.canUndo),
    counts: normalizeCounts(data.counts, data.total),
    total: toCount(data.total),
  }
  if (typeof data.device === 'string') patch.device = data.device
  // local 模式 storagePath 是字符串、cloudBase 是 null；cloud 模式反过来，按「字段存在」处理
  if (Object.hasOwn(data, 'storagePath')) patch.storagePath = typeof data.storagePath === 'string' ? data.storagePath : ''
  if (Object.hasOwn(data, 'cloudBase')) patch.cloudBase = typeof data.cloudBase === 'string' ? data.cloudBase : ''
  set(patch)
}

/* ---------- 读取 ---------- */

async function fetchState() {
  const data = await request('api/state')
  applyState(data)
  return data
}

let listSeq = 0

async function fetchList() {
  const seq = ++listSeq
  const params = new URLSearchParams()
  if (snapshot.status !== 'all') params.set('status', snapshot.status)
  const q = snapshot.query.trim()
  if (q) params.set('q', q)
  params.set('limit', String(LIST_LIMIT))
  params.set('offset', '0')
  set({ listLoading: true })
  try {
    const data = await request('api/ideas?' + params.toString())
    if (seq !== listSeq) return
    const ideas = Array.isArray(data.ideas) ? data.ideas : []
    set({
      ideas,
      listLoading: false,
      counts: normalizeCounts(data.counts, data.total),
      total: toCount(data.total) || ideas.length,
      error: null,
    })
  } catch (err) {
    if (seq === listSeq) set({ listLoading: false })
    throw err
  }
}

let detailSeq = 0

async function fetchDetail(no) {
  const seq = ++detailSeq
  set({ detailLoading: true, detailError: null })
  try {
    const data = await request('api/ideas/' + encodeURIComponent(no))
    if (seq !== detailSeq) return data
    set({ detail: data, detailLoading: false, detailError: null })
    return data
  } catch (err) {
    if (seq === detailSeq) set({ detailLoading: false, detailError: err.message })
    throw err
  }
}

async function refreshSelected() {
  const no = snapshot.selectedNo
  if (!no) return
  try {
    await fetchDetail(no)
  } catch (err) {
    set({ selectedNo: null, detail: null, detailError: null })
  }
}

/** 写操作之后重新对齐 Host 状态与列表（detail 可选）。 */
async function reload({ withDetail = false } = {}) {
  const jobs = [fetchState(), fetchList()]
  if (withDetail && snapshot.selectedNo) jobs.push(fetchDetail(snapshot.selectedNo))
  await Promise.allSettled(jobs)
}

/* ---------- 启动 / 刷新 ---------- */

let bootPromise = null

export function boot() {
  if (bootPromise) {
    // 面板被重新挂载（切走再切回）：静默对齐一次，拿别的入口（agent 工具 / CLI）写的最新数据
    if (snapshot.booted) Promise.allSettled([fetchState(), fetchList()])
    return bootPromise
  }
  bootPromise = (async () => {
    set({ loading: true, error: null })
    try {
      await Promise.all([fetchState(), fetchList()])
      set({ booted: true, loading: false })
    } catch (err) {
      set({ loading: false, error: err.message })
    }
  })()
  return bootPromise
}

export function retryBoot() {
  bootPromise = null
  return boot()
}

export async function refresh({ quiet = false } = {}) {
  try {
    await Promise.all([fetchState(), fetchList()])
    await refreshSelected()
    // 首屏失败（比如云端没配好）后修好设置再刷新，也要能回到正常界面
    set({ booted: true, loading: false, error: null })
    if (!quiet) toast(t('已刷新'))
  } catch (err) {
    report(err)
  }
}

/* ---------- 筛选 / 选中 ---------- */

let queryTimer = null

export function setFilter(status) {
  if (snapshot.status === status) return
  set({ status, selectedNo: null, detail: null, detailError: null })
  fetchList().catch(report)
}

export function setQuery(query) {
  set({ query, selectedNo: null, detail: null, detailError: null })
  clearTimeout(queryTimer)
  queryTimer = setTimeout(() => { fetchList().catch(report) }, 220)
}

export function selectIdea(no) {
  if (!no) {
    set({ selectedNo: null, detail: null, detailError: null })
    return
  }
  if (snapshot.selectedNo === no && snapshot.detail) return
  const keep = snapshot.selectedNo === no ? snapshot.detail : null
  set({ selectedNo: no, detail: keep, detailLoading: true, detailError: null })
  fetchDetail(no).catch(report)
}

export function closeDetail() {
  set({ selectedNo: null, detail: null, detailError: null })
}

/* ---------- 写入 ---------- */

export async function addIdea(fields) {
  try {
    const payload = { ...fields }
    // source 如实填：录入自动带本机设备标识，跨机接力时这是定位来源的第一线索
    if (!payload.source && snapshot.device) payload.source = snapshot.device
    const data = await request('api/ideas', jsonInit('POST', payload))
    const idea = data.idea || null
    await reload()
    toast(t('已入池 {no}', { no: idea ? idea.idea_no : '' }).trim())
    if (idea) {
      clearTimeout(newIdeaTimer)
      set({ newIdeaNo: idea.idea_no })
      newIdeaTimer = setTimeout(() => {
        newIdeaTimer = null
        if (snapshot.newIdeaNo === idea.idea_no) set({ newIdeaNo: null })
      }, 1100)
    }
    return idea
  } catch (err) {
    report(err)
    return null
  }
}

export async function updateIdea(no, patch, successText) {
  // 乐观更新：状态切换先在本地生效，失败再回滚（云端模式下感知延迟最明显）
  const before = { ideas: snapshot.ideas, detail: snapshot.detail, counts: snapshot.counts }
  const prevStatus = patch.status && snapshot.ideas.find(idea => idea.idea_no === no)?.status
  if (patch.status && prevStatus && prevStatus !== patch.status) {
    const counts = { ...snapshot.counts }
    counts[prevStatus] = Math.max(0, (counts[prevStatus] || 0) - 1)
    counts[patch.status] = (counts[patch.status] || 0) + 1
    set({
      counts,
      ideas: snapshot.ideas.map(idea => (idea.idea_no === no ? { ...idea, status: patch.status } : idea)),
      detail: snapshot.detail && snapshot.detail.idea && snapshot.detail.idea.idea_no === no
        ? { ...snapshot.detail, idea: { ...snapshot.detail.idea, status: patch.status } }
        : snapshot.detail,
    })
  }
  try {
    const data = await request('api/ideas/' + encodeURIComponent(no), jsonInit('PATCH', patch))
    const idea = data.idea || null
    if (idea) {
      set({
        ideas: snapshot.ideas.map(item => (item.idea_no === no ? { ...item, ...idea } : item)),
        detail: snapshot.detail && snapshot.detail.idea && snapshot.detail.idea.idea_no === no
          ? { ...snapshot.detail, idea: { ...snapshot.detail.idea, ...idea } }
          : snapshot.detail,
      })
    }
    if (successText) toast(successText)
    return idea
  } catch (err) {
    set(before)
    report(err)
    return null
  }
}

export async function deleteIdea(no) {
  const wasSelected = snapshot.selectedNo === no
  try {
    await request('api/ideas/' + encodeURIComponent(no), { method: 'DELETE' })
    if (wasSelected) set({ selectedNo: null, detail: null, detailError: null, suppressAutoSelect: true })
    try {
      await reload()
    } finally {
      if (wasSelected) set({ suppressAutoSelect: false })
    }
    toast(t('已删除 {no}', { no }))
    return true
  } catch (err) {
    report(err)
    return false
  }
}

export async function addUpdate(no, content) {
  const temp = {
    id: 'tmp-' + Date.now(),
    content,
    source: snapshot.device || '',
    created_at: new Date().toISOString(),
  }
  const beforeDetail = snapshot.detail
  const beforeIdeas = snapshot.ideas
  const detailMatches = snapshot.detail && snapshot.detail.idea && snapshot.detail.idea.idea_no === no
  if (detailMatches) set({ detail: { ...snapshot.detail, updates: [...(snapshot.detail.updates || []), temp] } })
  try {
    const payload = { content }
    if (snapshot.device) payload.source = snapshot.device
    const data = await request('api/ideas/' + encodeURIComponent(no) + '/updates', jsonInit('POST', payload))
    if (detailMatches) {
      const saved = data.update || null
      set({
        detail: {
          ...snapshot.detail,
          updates: [
            ...(snapshot.detail.updates || []).filter(item => item.id !== temp.id),
            ...(saved ? [saved] : []),
          ],
        },
        ideas: snapshot.ideas.map(idea => (idea.idea_no === no ? { ...idea, n_updates: (idea.n_updates || 0) + 1 } : idea)),
      })
    }
    toast(t('已记录进展'))
    return true
  } catch (err) {
    if (detailMatches) set({ detail: beforeDetail, ideas: beforeIdeas })
    report(err)
    return false
  }
}

export async function addLink(no, { title, url }) {
  const temp = { id: 'tmp-' + Date.now(), title, url, created_at: new Date().toISOString() }
  const beforeDetail = snapshot.detail
  const beforeIdeas = snapshot.ideas
  const detailMatches = snapshot.detail && snapshot.detail.idea && snapshot.detail.idea.idea_no === no
  if (detailMatches) set({ detail: { ...snapshot.detail, links: [...(snapshot.detail.links || []), temp] } })
  try {
    const data = await request('api/ideas/' + encodeURIComponent(no) + '/links', jsonInit('POST', { title, url }))
    if (detailMatches) {
      const saved = data.link || null
      set({
        detail: {
          ...snapshot.detail,
          links: [...(snapshot.detail.links || []).filter(item => item.id !== temp.id), ...(saved ? [saved] : [])],
        },
        ideas: snapshot.ideas.map(idea => (idea.idea_no === no ? { ...idea, n_links: (idea.n_links || 0) + 1 } : idea)),
      })
    }
    toast(t('已添加产出'))
    return true
  } catch (err) {
    if (detailMatches) set({ detail: beforeDetail, ideas: beforeIdeas })
    report(err)
    return false
  }
}

export async function undo() {
  try {
    const data = await request('api/undo', jsonInit('POST', {}))
    if (data.state) applyState(data.state)
    await Promise.allSettled([fetchList(), refreshSelected()])
    const label = typeof data.label === 'string' ? data.label.trim() : ''
    toast(label ? t('已撤销：{label}', { label }) : t('已撤销上一步'))
    return true
  } catch (err) {
    report(err)
    return false
  }
}

/* ---------- 设置 / 云端 / 导出 ---------- */

export async function loadSettings() {
  set({ settingsLoading: true })
  try {
    const data = await request('api/settings')
    set({ settings: data.settings || null, settingsLoading: false })
    return data.settings || null
  } catch (err) {
    set({ settingsLoading: false })
    report(err)
    return null
  }
}

/**
 * 保存设置（v0.2 支持 device / mode / cloud{base,apiKey}）。
 * 切换模式后重新对齐 state + 列表 + 详情；新引擎拉取失败只 toast，不丢面板。
 * @returns {Promise<object|null>} 保存后的公开设置；失败返回 null。
 */
export async function saveSettings(patch) {
  try {
    const data = await request('api/settings', jsonInit('POST', patch))
    const settings = data.settings || null
    const previousMode = snapshot.mode
    set({ settings })
    if (settings && settings.mode && settings.mode !== previousMode) {
      // 切引擎：先清掉旧引擎的列表/选中，避免旧数据一闪而过
      set({ ideas: [], selectedNo: null, detail: null, detailError: null, canUndo: false })
    }
    toast(t('设置已保存'))
    try {
      await fetchState()
      await fetchList()
      await refreshSelected()
      // 模式从坏配置修好时，boot() 可能曾经失败过：这里直接标记就绪
      set({ booted: true, loading: false, error: null })
    } catch (err) {
      report(err)
    }
    return settings
  } catch (err) {
    report(err)
    return null
  }
}

/** 兼容 v0.1 的只改设备名。 */
export async function saveDevice(device) {
  return Boolean(await saveSettings({ device }))
}

/**
 * 测试云端连接（POST /api/cloud/test）。请求里的 base/apiKey 覆盖已存配置，留空则用已存。
 * 失败不抛异常、也不弹 error toast（设置里已有内联提示，避免重复），结果里带 status 方便分诊。
 */
export async function testCloud({ base, apiKey } = {}) {
  const payload = {}
  const nextBase = typeof base === 'string' ? base.trim() : ''
  const nextKey = typeof apiKey === 'string' ? apiKey.trim() : ''
  if (nextBase) payload.base = nextBase
  if (nextKey) payload.apiKey = nextKey
  try {
    const data = await request('api/cloud/test', jsonInit('POST', payload))
    return {
      ok: true,
      base: typeof data.base === 'string' ? data.base : '',
      count: toCount(data.count),
      latencyMs: toCount(data.latencyMs),
    }
  } catch (err) {
    return {
      ok: false,
      error: (err && err.message) || String(err),
      status: err && Number.isInteger(err.status) ? err.status : 0,
    }
  }
}

/**
 * 清除已保存的云端 API Key（POST settings { cloud: { clearKey: true } }）。
 * 只改 key，不动当前 mode / base，也不触发引擎重拉（云端会 401 是用户预期内的）。
 */
export async function clearCloudKey() {
  try {
    const data = await request('api/settings', jsonInit('POST', { cloud: { clearKey: true } }))
    set({ settings: data.settings || snapshot.settings })
    toast(t('已清除已保存的 API Key'))
    return data.settings || null
  } catch (err) {
    report(err)
    return null
  }
}

/** 从云端把全量想法导入本机 store（不切换模式）。 */
export async function importCloudToLocal() {
  try {
    const data = await request('api/cloud/import-local', jsonInit('POST', {}))
    const imported = toCount(data.imported)
    const updated = toCount(data.updated)
    const total = toCount(data.total)
    if (imported || updated) toast(t('已从云端导入 {imported} 条，更新 {updated} 条', { imported, updated }))
    else toast(t('云端没有新的想法可导入'))
    await Promise.allSettled([fetchState(), fetchList(), refreshSelected()])
    return { imported, updated, total }
  } catch (err) {
    report(err)
    return null
  }
}

function stamp() {
  const d = new Date()
  const p = n => String(n).padStart(2, '0')
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}`
}

function download(filename, text) {
  const blob = new Blob([text], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export async function exportJson() {
  try {
    const data = await request('api/export')
    const payload = data && data.data ? data.data : data
    download(`idea-pool-${stamp()}.json`, JSON.stringify(payload, null, 2))
    toast(t('已导出 JSON'))
    return true
  } catch (err) {
    report(err)
    return false
  }
}
