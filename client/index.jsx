// dsh-idea-pool 浏览器半片：侧栏入口 + 灵感池主面板（v0.1 本机模式）。
// 页面结构：顶栏 / 常驻录入条 / 状态页签 / 列表（宽屏两栏、窄屏下钻）/ 详情。
import React from 'react'
import css from './styles.css'
import { subscribeLang, t, useLang } from './i18n.js'
import {
  addIdea,
  addLink,
  addUpdate,
  boot,
  clearCloudKey,
  closeDetail,
  deleteIdea,
  exportJson,
  importCloudToLocal,
  loadSettings,
  refresh as refreshStore,
  retryBoot,
  saveSettings,
  selectIdea,
  setFilter,
  setQuery,
  setSortBy,
  setView,
  testCloud,
  toast,
  undo,
  updateIdea,
  useStore,
} from './store.js'
import { Badge, Button, Dialog, Empty, Field, Icon, IconButton, Spinner, StatusBadge, Tag, Toast, copyText } from './ui.jsx'

const PANEL_ID = 'idea-pool'
const SITE_BASE = 'https://www.zhaoningyuan.com'
// 与契约 CLOUD_DEFAULT_BASE 保持一致：首次切云端时预填这个基址
const DEFAULT_CLOUD_BASE = 'https://www.zhaoningyuan.com/ideas/api'
const STATUS_ORDER = ['pool', 'active', 'done', 'parked']
const STATUS_LABELS = { pool: '已入池', active: '推进中', done: '已收口', parked: '搁置' }
const TABS = [{ key: 'all', label: '全部' }, ...STATUS_ORDER.map(key => ({ key, label: STATUS_LABELS[key] }))]

// source 是机器/工具标识；按网站同一套口径显示成人能读的名字
const SOURCE_MAP = {
  mac: 'Mac',
  'dsh-mac': 'Mac',
  win: 'Windows',
  'dsh-win': 'Windows',
  dsh: '本机',
  volcano: '火山云',
  manual: '手动',
  web: '网页',
  feishu: '飞书',
}

/* ---------- 小工具 ---------- */

function pad(n) {
  return String(n).padStart(2, '0')
}

function formatDateTime(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return String(iso)
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function formatShortTime(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return String(iso)
  const diff = Date.now() - d.getTime()
  if (diff >= 0 && diff < 60 * 1000) return t('刚刚')
  if (diff >= 0 && diff < 60 * 60 * 1000) return t('{n} 分钟前', { n: Math.floor(diff / 60000) })
  const now = new Date()
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  if (d.getTime() >= startOfToday) return `${pad(d.getHours())}:${pad(d.getMinutes())}`
  if (d.getFullYear() === now.getFullYear()) return `${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function sourceLabel(source) {
  if (!source) return ''
  const key = String(source).toLowerCase()
  return t(SOURCE_MAP[key] || String(source))
}

function statusLabel(status) {
  return t(STATUS_LABELS[status] || status || '')
}

function safeUrl(url) {
  const text = String(url || '').trim()
  if (!text || /^(javascript|data|vbscript):/i.test(text)) return '#'
  return text
}

function ideaUrl(idea) {
  return `${SITE_BASE}/ideas/#${idea.idea_no}`
}

/** 标题可能来自 raw_text 前 40 字（可能含换行）；显示时折叠成单行。 */
function displayTitle(idea) {
  const text = String((idea && idea.title) || '').replace(/\s+/g, ' ').trim()
  return text || (idea && idea.idea_no) || ''
}

function parseTags(value) {
  return String(value || '')
    .split(/[,，]/)
    .map(item => item.trim())
    .filter(Boolean)
}

function countText(count, oneKey, otherKey) {
  return t(count === 1 ? oneKey : otherKey, { n: count })
}

const DAY_MS = 24 * 60 * 60 * 1000

/** 距今天数；用于「久未推进」判断。 */
function daysSince(iso) {
  const time = new Date(iso || 0).getTime()
  if (!time || Number.isNaN(time)) return 0
  return Math.max(0, Math.floor((Date.now() - time) / DAY_MS))
}

/** 梳理视图的一行：优先摘要首句，没有摘要就退回原文首句。 */
function reviewLine(idea) {
  const source = String(idea.gist || '').trim() || String(idea.summary || '').trim() || String(idea.raw_text || '').trim()
  const text = source.replace(/\s+/g, ' ')
  if (!text) return ''
  const first = text.split(/[。！？!?]/)[0].trim() || text
  return first.length > 90 ? first.slice(0, 90) + '…' : first
}

/** 复制展开指令：沿用网站文案的纪律骨架，本机模式把「读全量」指到本机入口。 */
function expandInstruction(idea) {
  const no = idea.idea_no
  const title = displayTitle(idea)
  return '请展开推进灵感池 ' + no + '《' + title + '》。\n'
    + '\n【继承进度·防重复】先读想法详情——原文、摘要、全部「进展」与「关联产出」（用 idea_pool 工具的 get 动作，或读本机 /idea-pool/api/ideas/' + no + '）。'
    + '\n（「进展」=接力账本：以最新条目为准继承，已完成的不重做——包括其他机器做过的）'
    + '\n如本想法曾在其他机器/会话推进过（不确定就先查）：开工前先做跨机查重（检索各机会话库、定时任务与技能），并回填一条「开工对齐」进展（本次范围+不重做项）。'
    + '\n【推进记录】先读记录文档（若有）并在完成后追加本轮条目。'
    + '\n【先澄清后开工】继承检查之后、动手之前：按 brainstorming 澄清期纪律向用户追问 3~5 个关键问题——只问会改变方向、只有用户能答的（能自查的先查）；小想法可少问；用户说「直接展开」则跳过。'
    + '\n完成后回填「已完成/未完成/下一步」（用 idea_pool 工具的 progress 动作）；产出发布后挂到「关联产出」，然后开始研究/推进。'
}

/* ---------- 顶栏 ---------- */

function TopBar({ searchRef, onOpenSettings }) {
  const mode = useStore(s => s.mode)
  const device = useStore(s => s.device)
  const cloudBase = useStore(s => s.cloudBase)
  const canUndo = useStore(s => s.canUndo)
  const query = useStore(s => s.query)
  const [draft, setDraft] = React.useState(query)
  React.useEffect(() => { setDraft(query) }, [query])
  const isCloud = mode === 'cloud'
  const modeLabel = isCloud ? t('云端模式') : t('本机模式')
  const modeTitle = isCloud
    ? (cloudBase ? `${modeLabel} · ${cloudBase}` : modeLabel)
    : (device ? `${modeLabel} · ${device}` : modeLabel)
  return (
    <header className="ip-topbar" data-window-drag="">
      <div className="ip-brand">
        <span className="ip-brand-mark"><Icon name="bulb" size={17} stroke={1.7} /></span>
        <span className="ip-title">{t('灵感池')}</span>
        <span className={`ip-mode ${isCloud ? 'is-cloud' : ''}`} title={modeTitle}>
          <i aria-hidden="true" />{modeLabel}
        </span>
      </div>
      <span className="ip-topbar-spacer" />
      <div className="ip-search">
        <span className="ip-search-icon"><Icon name="search" size={14} /></span>
        <input
          ref={searchRef}
          type="text"
          value={draft}
          placeholder={t('搜索想法…')}
          aria-label={t('搜索想法')}
          onChange={(event) => { setDraft(event.target.value); setQuery(event.target.value) }}
        />
        {draft ? (
          <span className="ip-search-clear">
            <IconButton
              icon="close"
              size={12}
              label={t('清空搜索')}
              onClick={() => { setDraft(''); setQuery(''); searchRef.current?.focus() }}
            />
          </span>
        ) : null}
      </div>
      {canUndo && !isCloud ? <IconButton icon="undo" label={t('撤销上一步')} onClick={() => undo()} /> : null}
      <IconButton icon="refresh" label={t('刷新')} onClick={() => refreshStore()} />
      <IconButton icon="settings" label={t('设置')} onClick={onOpenSettings} />
    </header>
  )
}

/* ---------- 录入条 ---------- */

const AUTO_GROW_MAX = 208

function autoGrow(el) {
  if (!el) return
  el.style.height = 'auto'
  el.style.height = `${Math.min(el.scrollHeight, AUTO_GROW_MAX)}px`
}

function CaptureBar({ highlight }) {
  const [raw, setRaw] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [summary, setSummary] = React.useState('')
  const [gist, setGist] = React.useState('')
  const [tags, setTags] = React.useState('')
  const [expanded, setExpanded] = React.useState(false)
  const [busy, setBusy] = React.useState(false)
  const [focused, setFocused] = React.useState(false)
  const inputRef = React.useRef(null)
  const latestRef = React.useRef({ raw, title, summary, gist, tags })
  latestRef.current = { raw, title, summary, gist, tags }

  React.useEffect(() => { autoGrow(inputRef.current) }, [raw, expanded])

  const submit = async () => {
    if (busy) return
    const rawText = raw.trim()
    const titleText = title.trim()
    if (!rawText && !titleText) {
      toast(t('写点内容再入池'), { error: true })
      inputRef.current?.focus()
      return
    }
    const payload = { raw_text: rawText }
    if (titleText) payload.title = titleText
    const summaryText = summary.trim()
    if (summaryText) payload.summary = summaryText
    const gistText = gist.trim()
    if (gistText) payload.gist = gistText
    const tagList = parseTags(tags)
    if (tagList.length) payload.tags = tagList
    const submitted = { raw, title, summary, gist, tags }
    setBusy(true)
    const idea = await addIdea(payload)
    setBusy(false)
    if (!idea) return
    // 只清空「这次提交的那一版」；等待期间新输入的下一句要保留
    setRaw(prev => (prev === submitted.raw ? '' : prev))
    setTitle(prev => (prev === submitted.title ? '' : prev))
    setSummary(prev => (prev === submitted.summary ? '' : prev))
    setGist(prev => (prev === submitted.gist ? '' : prev))
    setTags(prev => (prev === submitted.tags ? '' : prev))
    const latest = latestRef.current
    if (latest.raw === submitted.raw && latest.title === submitted.title && latest.summary === submitted.summary && latest.gist === submitted.gist && latest.tags === submitted.tags) {
      setExpanded(false)
      // 保存后清空并聚焦：下一句可以直接接着写
      window.requestAnimationFrame(() => {
        const el = inputRef.current
        if (!el) return
        el.style.height = 'auto'
        el.focus()
      })
    }
  }

  const onKeyDown = (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      event.preventDefault()
      submit()
      return
    }
    if (event.key === 'Escape' && expanded) {
      event.stopPropagation()
      setExpanded(false)
    }
  }

  const collapsed = !focused && !expanded && !raw && !title && !summary && !gist && !tags
  return (
    <section
      className={`ip-capture ${collapsed ? 'is-collapsed' : ''} ${focused ? 'is-focused' : ''} ${highlight ? 'is-highlight' : ''}`}
      aria-label={t('录入灵感')}
    >
      <div className="ip-capture-main">
        <textarea
          ref={inputRef}
          className="ip-capture-input"
          rows={2}
          value={raw}
          placeholder={t('想到什么就写什么，回车换行，⌘/Ctrl+Enter 入池')}
          aria-label={t('想法原文')}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(event) => setRaw(event.target.value)}
          onKeyDown={onKeyDown}
        />
        <div className="ip-capture-side">
          <button
            type="button"
            className={`ip-capture-toggle ${expanded ? 'is-open' : ''}`}
            aria-expanded={expanded}
            onClick={() => setExpanded(value => !value)}
          >
            <Icon name="chevD" size={13} />
            <span>{t(expanded ? '收起选项' : '更多选项')}</span>
          </button>
          <span className="ip-cmdhint">{t('⌘/Ctrl+Enter 保存')}</span>
          <Button variant="primary" icon="plus" onClick={submit} disabled={busy}>
            {busy ? t('保存中…') : t('入池')}
          </Button>
        </div>
      </div>
      {expanded ? (
        <div className="ip-capture-extra">
          <Field label={t('标题（可选）')}>
            <input value={title} onChange={event => setTitle(event.target.value)} placeholder={t('留空时自动取原文前 40 字')} />
          </Field>
          <Field label={t('一句话摘要（可选）')}>
            <input value={gist} onChange={event => setGist(event.target.value)} placeholder={t('≤60 字，方便日后扫列表')} maxLength={200} />
          </Field>
          <Field label={t('标签（可选）')}>
            <input value={tags} onChange={event => setTags(event.target.value)} placeholder={t('逗号分隔，如：研究, 渠道')} />
          </Field>
          <div className="ip-span2">
            <Field label={t('摘要（可选）')}>
              <textarea rows={2} value={summary} onChange={event => setSummary(event.target.value)} placeholder={t('一句话概括，方便日后扫列表')} />
            </Field>
          </div>
        </div>
      ) : null}
    </section>
  )
}

/* ---------- 状态页签 ---------- */

function StatusTabs() {
  const status = useStore(s => s.status)
  const counts = useStore(s => s.counts)
  const total = useStore(s => s.total)
  const sortBy = useStore(s => s.sortBy)
  const [sortOpen, setSortOpen] = React.useState(false)
  const sortRef = React.useRef(null)
  React.useEffect(() => {
    if (!sortOpen) return undefined
    const onDown = (event) => { if (!sortRef.current || !sortRef.current.contains(event.target)) setSortOpen(false) }
    const onKey = (event) => { if (event.key === 'Escape') setSortOpen(false) }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [sortOpen])
  return (
    <nav className="ip-tabs" aria-label={t('状态筛选')}>
      {TABS.map(tab => {
        const count = tab.key === 'all' ? (counts.all || total || 0) : (counts[tab.key] || 0)
        return (
          <button
            key={tab.key}
            type="button"
            className={`ip-tab ${status === tab.key ? 'is-on' : ''}`}
            aria-pressed={status === tab.key}
            onClick={() => setFilter(tab.key)}
          >
            <span>{t(tab.label)}</span>
            <span className="ip-tab-count">{count}</span>
          </button>
        )
      })}
      <div className="ip-sort" ref={sortRef}>
        <button
          type="button"
          className="ip-sort-trigger"
          aria-haspopup="menu"
          aria-expanded={sortOpen}
          onClick={() => setSortOpen(value => !value)}
        >
          <span>{t('排序')}</span>
          <strong>{sortBy === 'updated' ? t('最近更新') : t('最近创建')}</strong>
          <Icon name="chevD" size={12} />
        </button>
        {sortOpen ? (
          <div className="ip-sort-pop" role="menu" aria-label={t('排序')}>
            {[
              { key: 'created', label: t('最近创建') },
              { key: 'updated', label: t('最近更新') },
            ].map(option => (
              <button
                key={option.key}
                type="button"
                role="menuitemradio"
                aria-checked={sortBy === option.key}
                className={sortBy === option.key ? 'is-on' : ''}
                onClick={() => { setSortBy(option.key); setSortOpen(false) }}
              >
                <span>{option.label}</span>
                {sortBy === option.key ? <Icon name="check" size={13} /> : null}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  )
}

/* ---------- 列表 ---------- */

function IdeaCard({ idea, active, highlight, onClick }) {
  const tags = Array.isArray(idea.tags) ? idea.tags : []
  return (
    <button
      type="button"
      className={`ip-card ${active ? 'is-on' : ''} ${highlight ? 'is-new' : ''}`}
      aria-current={active ? 'true' : undefined}
      onClick={onClick}
    >
      <div className="ip-card-title">{displayTitle(idea)}</div>
      {(idea.gist || idea.summary) ? <div className="ip-card-sum">{idea.gist || idea.summary}</div> : null}
      <div className="ip-card-foot">
        <span className={`ip-card-status is-${idea.status}`}>
          <i aria-hidden="true" />
          {statusLabel(idea.status)}
        </span>
        <span className="ip-card-no">{idea.idea_no}</span>
        <time className="ip-card-time" dateTime={idea.updated_at || undefined} title={formatDateTime(idea.updated_at)}>{formatShortTime(idea.updated_at)}</time>
        {tags.slice(0, 1).map(tag => <Tag key={tag}>{tag}</Tag>)}
        {tags.length > 1 ? <span className="ip-muted">+{tags.length - 1}</span> : null}
        {(idea.n_updates || idea.n_links) ? (
          <span className="ip-card-meta">
            {idea.n_updates ? countText(idea.n_updates, '1 条进展', '{n} 条进展') : null}
            {idea.n_updates && idea.n_links ? <span className="ip-sep">·</span> : null}
            {idea.n_links ? countText(idea.n_links, '1 个产出', '{n} 个产出') : null}
          </span>
        ) : null}
      </div>
    </button>
  )
}

function ReviewRow({ idea }) {
  const stale = idea.status === 'active' && daysSince(idea.updated_at) > 14
  const meta = idea.status === 'pool'
    ? t('入池 {n} 天', { n: daysSince(idea.created_at) })
    : stale
      ? t('{n} 天未动', { n: daysSince(idea.updated_at) })
      : formatShortTime(idea.updated_at)
  return (
    <button type="button" className="ip-review-row" onClick={() => selectIdea(idea.idea_no)}>
      <i className={`ip-review-dot is-${idea.status}`} aria-hidden="true" />
      <span className="ip-review-main">
        <span className="ip-review-title">{displayTitle(idea)}</span>
        <span className="ip-review-sum">{reviewLine(idea)}</span>
      </span>
      <span className="ip-review-meta">
        <span className={stale ? 'is-stale' : ''}>{meta}</span>
        {idea.n_updates ? <span>{t('{n} 进展', { n: idea.n_updates })}</span> : null}
      </span>
    </button>
  )
}

function ReviewSection({ title, hint, items, action }) {
  if (!items.length) return null
  return (
    <section className="ip-review-section">
      <div className="ip-review-head">
        <h3>{title}</h3>
        <span className="ip-review-count">{items.length}</span>
        <span className="ip-review-hint">{hint}</span>
        {action ? <span className="ip-review-action">{action}</span> : null}
      </div>
      <div className="ip-review-rows">
        {items.map(idea => <ReviewRow key={idea.idea_no} idea={idea} />)}
      </div>
    </section>
  )
}

function ReviewView() {
  const ideas = useStore(s => s.ideas)
  const status = useStore(s => s.status)
  const [archivedOpen, setArchivedOpen] = React.useState(false)
  React.useEffect(() => {
    if (status === 'done' || status === 'parked') setArchivedOpen(true)
  }, [status])
  const pending = ideas.filter(idea => idea.status === 'pool')
  const active = ideas.filter(idea => idea.status === 'active')
  const stale = active.filter(idea => daysSince(idea.updated_at) > 14).sort((a, b) => daysSince(b.updated_at) - daysSince(a.updated_at))
  const moving = active.filter(idea => daysSince(idea.updated_at) <= 14).sort((a, b) => String(b.updated_at || '').localeCompare(String(a.updated_at || '')))
  const archived = ideas.filter(idea => idea.status === 'done' || idea.status === 'parked')
  const doneCount = ideas.filter(idea => idea.status === 'done').length
  const parkedCount = ideas.filter(idea => idea.status === 'parked').length
  const pickRandom = () => {
    const pool = pending.length ? pending : stale.length ? stale : moving.length ? moving : ideas
    if (!pool.length) return
    const picked = pool[Math.floor(Math.random() * pool.length)]
    toast(t('随机捞到 {no}，看看有没有遗漏。', { no: picked.idea_no }))
    selectIdea(picked.idea_no)
  }
  return (
    <div className="ip-scroll">
      <div className="ip-review">
        <div className="ip-review-summary">
          <div>
            <strong>{t('{n} 条想法', { n: ideas.length })}</strong>
            <span>{t('{n} 待决定', { n: pending.length })} · {t('{n} 久未推进', { n: stale.length })} · {t('{n} 最近推进', { n: moving.length })}</span>
          </div>
          <Button size="sm" variant="ghost" icon="spark" onClick={pickRandom} disabled={!ideas.length}>{t('随机捞一条')}</Button>
        </div>
        <ReviewSection
          title={t('待决定')}
          hint={t('记下来还没开始的，先捞一条看看')}
          items={pending}
          action={pending.length ? <Button size="sm" variant="ghost" onClick={pickRandom}>{t('随机一条')}</Button> : null}
        />
        <ReviewSection
          title={t('该推进了')}
          hint={t('超过 14 天没动，最久未动的排前面')}
          items={stale}
        />
        <ReviewSection
          title={t('正在推进')}
          hint={t('最近 14 天有更新')}
          items={moving}
        />
        {archived.length ? (
          <section className="ip-review-section is-archived">
            <button type="button" className="ip-review-head is-button" aria-expanded={archivedOpen} onClick={() => setArchivedOpen(value => !value)}>
              <h3>{t('已收口 / 搁置')}</h3>
              <span className="ip-review-count">{archived.length}</span>
              <span className="ip-review-hint">{t('已收口 {done} · 搁置 {parked}', { done: doneCount, parked: parkedCount })}</span>
              <span className="ip-review-action"><Icon name={archivedOpen ? 'chevD' : 'chevR'} size={13} /></span>
            </button>
            {archivedOpen ? (
              <div className="ip-review-rows">
                {archived.map(idea => <ReviewRow key={idea.idea_no} idea={idea} />)}
              </div>
            ) : null}
          </section>
        ) : null}
      </div>
    </div>
  )
}

function ListView({ narrow }) {
  const ideas = useStore(s => s.ideas)
  const listLoading = useStore(s => s.listLoading)
  const status = useStore(s => s.status)
  const query = useStore(s => s.query)
  const selectedNo = useStore(s => s.selectedNo)
  const mode = useStore(s => s.mode)
  const sortBy = useStore(s => s.sortBy)
  const view = useStore(s => s.view)
  const newIdeaNo = useStore(s => s.newIdeaNo)
  const scrollRef = React.useRef(null)
  const filtered = status !== 'all' || Boolean(query.trim())
  const sortedIdeas = React.useMemo(() => {
    const key = sortBy === 'updated' ? 'updated_at' : 'created_at'
    return [...ideas].sort((left, right) => {
      const a = typeof left[key] === 'string' ? left[key] : ''
      const b = typeof right[key] === 'string' ? right[key] : ''
      if (a !== b) return a < b ? 1 : -1
      return String(left.idea_no) < String(right.idea_no) ? 1 : -1
    })
  }, [ideas, sortBy])
  React.useEffect(() => {
    if (newIdeaNo) scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [newIdeaNo])
  if (listLoading && !ideas.length) {
    return <Spinner label={t('正在加载…')} />
  }
  if (!ideas.length) {
    return (
      <Empty
        icon="note"
        title={filtered ? t('没有匹配的想法') : t('灵感池还是空的')}
        hint={filtered
          ? t('换个关键词或状态再试试。')
          : mode === 'cloud'
            ? t('在上面写一句，回车换行，⌘/Ctrl+Enter 入池。')
            : t('在上面写一句，回车换行，⌘/Ctrl+Enter 入池。本机模式的数据只在这台机器上。')}
      >
        {query.trim() ? (
          <Button size="sm" onClick={() => setQuery('')}>{t('清空搜索')}</Button>
        ) : status !== 'all' ? (
          <Button size="sm" onClick={() => setFilter('all')}>{t('显示全部状态')}</Button>
        ) : (
          <Button size="sm" onClick={() => document.querySelector('.ip-capture-input')?.focus()}>{t('写第一条')}</Button>
        )}
      </Empty>
    )
  }
  if (view === 'review') return <ReviewView />
  return (
    <div className="ip-scroll" ref={scrollRef}>
      <div className="ip-list">
        {sortedIdeas.map(idea => (
          <IdeaCard
            key={idea.idea_no}
            idea={idea}
            active={!narrow && idea.idea_no === selectedNo}
            highlight={idea.idea_no === newIdeaNo}
            onClick={() => selectIdea(idea.idea_no)}
          />
        ))}
      </div>
      {listLoading ? <div className="ip-list-note">{t('正在刷新…')}</div> : null}
    </div>
  )
}

/* ---------- 详情：时间线 / 产出 ---------- */

function TimelineItem({ update }) {
  const [open, setOpen] = React.useState(false)
  const content = update.content || ''
  const long = content.length > 320
  return (
    <li className="ip-tl-item">
      <div className="ip-tl-meta">
        <span className="ip-tl-time">{formatDateTime(update.created_at)}</span>
        {update.source ? (
          <span className="ip-src" title={update.source}>
            <Icon name="monitor" size={11} />
            {sourceLabel(update.source)}
          </span>
        ) : null}
      </div>
      <div className={`ip-tl-content ${long && !open ? 'is-clamped' : ''}`}>{content}</div>
      {long ? (
        <button type="button" className="ip-tl-toggle" onClick={() => setOpen(value => !value)}>
          {open ? t('收起') : t('展开全部')}
        </button>
      ) : null}
    </li>
  )
}

function LinkRow({ link }) {
  const url = safeUrl(link.url)
  const external = /^https?:\/\//i.test(url)
  return (
    <li>
      <span className="ip-link-icon"><Icon name="link" size={13} /></span>
      <a href={url} title={link.url} target={external ? '_blank' : undefined} rel={external ? 'noreferrer noopener' : undefined}>
        {link.title || link.url}
      </a>
      {link.ref_type === 'doc' ? <span className="ip-link-kind">{t('文档')}</span> : null}
      {external ? <span className="ip-link-icon"><Icon name="upRight" size={12} /></span> : null}
    </li>
  )
}

function AddUpdateForm({ no }) {
  const [content, setContent] = React.useState('')
  const [busy, setBusy] = React.useState(false)
  const submit = async (event) => {
    event.preventDefault()
    const text = content.trim()
    if (!text) {
      toast(t('先写点内容'), { error: true })
      return
    }
    const submitted = content
    setBusy(true)
    const ok = await addUpdate(no, text)
    setBusy(false)
    if (ok) setContent(prev => (prev === submitted ? '' : prev))
  }
  return (
    <form className="ip-abox" onSubmit={submit}>
      <Field label={t('新增进展')}>
        <textarea
          rows={3}
          value={content}
          placeholder={t('记录一条进展（讨论结论 / 研究进度 / 下一步）…')}
          onChange={(event) => setContent(event.target.value)}
          onKeyDown={(event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') submit(event)
          }}
        />
      </Field>
      <div className="ip-abox-foot">
        <span className="ip-muted">{t('进展只追加，写上机器与下一步方便跨机接力')}</span>
        <span className="ip-spacer" />
        <Button size="sm" variant="primary" type="submit" disabled={busy}>{busy ? t('保存中…') : t('记录进展')}</Button>
      </div>
    </form>
  )
}

function AddLinkForm({ no }) {
  const [title, setTitle] = React.useState('')
  const [url, setUrl] = React.useState('')
  const [busy, setBusy] = React.useState(false)
  const submit = async (event) => {
    event.preventDefault()
    let target = url.trim()
    if (!target) {
      toast(t('先填链接'), { error: true })
      return
    }
    // 宿主只接受 http(s) 链接：漏写协议的常见输入自动补 https://
    if (!/^https?:\/\//i.test(target) && /^[\w-]+(\.[\w-]+)+/.test(target)) target = `https://${target}`
    if (!/^https?:\/\//i.test(target)) {
      toast(t('链接要以 http(s):// 开头'), { error: true })
      return
    }
    const submitted = { title, url }
    setBusy(true)
    const ok = await addLink(no, { title: title.trim() || target, url: target })
    setBusy(false)
    if (ok) {
      setTitle(prev => (prev === submitted.title ? '' : prev))
      setUrl(prev => (prev === submitted.url ? '' : prev))
    }
  }
  return (
    <form className="ip-abox" onSubmit={submit}>
      <Field label={t('产出标题')}>
        <input value={title} placeholder={t('如：研究报告 / 推进记录')} onChange={(event) => setTitle(event.target.value)} />
      </Field>
      <Field label={t('链接')}>
        <input value={url} placeholder="https://…" onChange={(event) => setUrl(event.target.value)} />
      </Field>
      <div className="ip-abox-foot">
        <span className="ip-spacer" />
        <Button size="sm" variant="primary" type="submit" disabled={busy}>{busy ? t('保存中…') : t('保存产出')}</Button>
      </div>
    </form>
  )
}

/* ---------- 详情：编辑 / 删除 ---------- */

function EditIdeaDialog({ idea, onClose }) {
  const [title, setTitle] = React.useState(idea.title || '')
  const [summary, setSummary] = React.useState(idea.summary || '')
  const [gist, setGist] = React.useState(idea.gist || '')
  const [raw, setRaw] = React.useState(idea.raw_text || '')
  const [tags, setTags] = React.useState((idea.tags || []).join(', '))
  const [note, setNote] = React.useState(idea.source_note || '')
  const [busy, setBusy] = React.useState(false)
  const dirty = title !== (idea.title || '') || summary !== (idea.summary || '') || gist !== (idea.gist || '') || raw !== (idea.raw_text || '') || tags !== (idea.tags || []).join(', ') || note !== (idea.source_note || '')
  const requestClose = () => {
    if (dirty && !window.confirm(t('有未保存的修改，确定关闭吗？'))) return
    onClose()
  }
  const submit = async (event) => {
    event.preventDefault()
    const titleText = title.trim()
    if (!titleText) {
      toast(t('标题不能为空'), { error: true })
      return
    }
    setBusy(true)
    const ok = await updateIdea(idea.idea_no, {
      title: titleText,
      summary: summary.trim(),
      gist: gist.trim(),
      raw_text: raw,
      tags: parseTags(tags),
      source_note: note.trim(),
    }, t('已保存'))
    setBusy(false)
    if (ok) onClose()
  }
  return (
    <Dialog
      title={t('编辑想法')}
      onClose={requestClose}
      width={560}
      footer={(
        <>
          <span className="ip-spacer" />
          <Button onClick={requestClose}>{t('取消')}</Button>
          <Button variant="primary" type="submit" form="ip-edit-form" disabled={busy}>{busy ? t('保存中…') : t('保存')}</Button>
        </>
      )}
    >
      <form id="ip-edit-form" className="ip-dialog-rows" onSubmit={submit}>
        <Field label={t('标题')}>
          <input value={title} onChange={(event) => setTitle(event.target.value)} />
        </Field>
        <Field label={t('一句话摘要')}>
          <input value={gist} maxLength={200} onChange={(event) => setGist(event.target.value)} placeholder={t('≤60 字，方便扫列表')} />
        </Field>
        <Field label={t('详细摘要')}>
          <textarea rows={2} value={summary} onChange={(event) => setSummary(event.target.value)} />
        </Field>
        <Field label={t('原文（逐字保留）')}>
          <textarea rows={6} value={raw} onChange={(event) => setRaw(event.target.value)} />
        </Field>
        <Field label={t('标签')} hint={t('逗号分隔')}>
          <input value={tags} onChange={(event) => setTags(event.target.value)} />
        </Field>
        <Field label={t('备注 / 来源情境')}>
          <input value={note} onChange={(event) => setNote(event.target.value)} />
        </Field>
      </form>
    </Dialog>
  )
}

function DeleteDialog({ idea, onClose }) {
  const [busy, setBusy] = React.useState(false)
  const remove = async () => {
    setBusy(true)
    const ok = await deleteIdea(idea.idea_no)
    setBusy(false)
    if (ok) onClose()
  }
  return (
    <Dialog
      title={t('删除想法')}
      onClose={onClose}
      width={420}
      footer={(
        <>
          <span className="ip-spacer" />
          <Button onClick={onClose}>{t('取消')}</Button>
          <Button variant="danger-solid" onClick={remove} disabled={busy}>{busy ? t('删除中…') : t('确认删除')}</Button>
        </>
      )}
    >
      <p className="ip-dialog-note">
        {t('删除「{title}」（{no}）后，它的进展与产出也会一起删除。', { title: displayTitle(idea), no: idea.idea_no })}
      </p>
    </Dialog>
  )
}

/** 从最新进展里提取明确写出的「下一步」，不猜测、不编造。 */
function nextStepOf(content) {
  const match = String(content || '').match(/(?:^|\n)\s*(?:下一步|next step)[：:]\s*([^\n]+)/i)
  return match ? match[1].trim() : ''
}

/* ---------- 会话绑定 ---------- */

function SessionPicker({ idea, onClose }) {
  const device = useStore(s => s.device)
  const [state, setState] = React.useState({ loading: true, note: '', error: '', items: [] })
  React.useEffect(() => {
    const sessions = clientEnv.sessions
    if (!sessions) {
      setState({ loading: false, note: '', error: t('当前环境不支持会话搜索。'), items: [] })
      return undefined
    }
    // 会话搜索索引可能被宿主关闭；退化为最近会话列表，仍然可以手动绑定。
    const recent = () => {
      const snapshot = sessions.list && typeof sessions.list.getSnapshot === 'function' ? sessions.list.getSnapshot() : null
      const ids = Array.isArray(snapshot && snapshot.ids) ? snapshot.ids : []
      const byId = (snapshot && snapshot.byId) || {}
      return ids.slice(0, 30).map((id) => {
        const row = byId[id] || {}
        const title = String(row.title || row.name || id)
        return { sessionId: id, snippet: title }
      })
    }
    const controller = new AbortController()
    setState({ loading: true, note: '', error: '', items: [] })
    const fallback = (note) => {
      const items = recent()
      if (items.length) setState({ loading: false, note, error: '', items })
      else setState({ loading: false, note: '', error: t('没有可用的会话列表。'), items: [] })
    }
    if (typeof sessions.search !== 'function') {
      fallback(t('会话搜索不可用，显示最近会话。'))
      return undefined
    }
    Promise.resolve(sessions.search(idea.idea_no, controller.signal)).then((result) => {
      if (controller.signal.aborted) return
      if (result && result.ok === false) {
        fallback(t('会话搜索索引未开启，显示最近会话；也可以手动挑选。'))
        return
      }
      const payload = result && result.ok ? result.value : result
      const items = Array.isArray(payload && payload.items) ? payload.items : []
      if (!items.length) {
        fallback(t('没有搜到包含编号的会话，显示最近会话。'))
        return
      }
      setState({ loading: false, note: '', error: '', items })
    }).catch(() => {
      if (!controller.signal.aborted) fallback(t('会话搜索失败，显示最近会话。'))
    })
    return () => controller.abort()
  }, [idea.idea_no])
  const bind = async (item) => {
    const refs = Array.isArray(idea.session_refs) ? idea.session_refs : []
    if (refs.some(ref => ref.session_id === item.sessionId)) {
      toast(t('这条会话已经关联过了'))
      return
    }
    const next = [...refs, {
      session_id: item.sessionId,
      title: String(item.snippet || '').replace(/\s+/g, ' ').slice(0, 120),
      device: device || '',
      bound_at: new Date().toISOString(),
      reason: 'search',
    }]
    const saved = await updateIdea(idea.idea_no, { session_refs: next }, t('已关联会话'))
    if (saved) onClose()
  }
  return (
    <Dialog
      title={t('关联 DSH 会话')}
      onClose={onClose}
      width={560}
      footer={<><span className="ip-spacer" /><Button onClick={onClose}>{t('关闭')}</Button></>}
    >
      <p className="ip-dialog-note">{t('按编号「{no}」搜索当前 DSH 的会话内容；点一条即可绑定。', { no: idea.idea_no })}</p>
      {state.loading ? <Spinner label={t('正在搜索会话…')} /> : null}
      {state.note ? <p className="ip-dialog-note">{state.note}</p> : null}
      {state.error ? <p className="ip-dialog-note is-error">{state.error}</p> : null}
      {!state.loading && !state.error && !state.items.length ? <p className="ip-dialog-note">{t('没有搜到包含这个编号的会话。发送过「一键推进」的会话通常能被搜到。')}</p> : null}
      <div className="ip-session-results">
        {state.items.map(item => (
          <button key={item.sessionId} type="button" className="ip-session-result" onClick={() => bind(item)}>
            <span className="ip-session-id">{String(item.sessionId).slice(0, 18)}</span>
            <span className="ip-session-snippet">{String(item.snippet || '').replace(/\s+/g, ' ').slice(0, 180)}</span>
          </button>
        ))}
      </div>
    </Dialog>
  )
}

/* ---------- 详情主面板 ---------- */

function DetailPane({ narrow }) {
  const selectedNo = useStore(s => s.selectedNo)
  const query = useStore(s => s.query)
  const status = useStore(s => s.status)
  const ideas = useStore(s => s.ideas)
  const total = useStore(s => s.total)
  const detail = useStore(s => s.detail)
  const detailLoading = useStore(s => s.detailLoading)
  const detailError = useStore(s => s.detailError)
  const mode = useStore(s => s.mode)
  const [editing, setEditing] = React.useState(false)
  const [deleting, setDeleting] = React.useState(false)
  const [addingUpdate, setAddingUpdate] = React.useState(false)
  const [addingLink, setAddingLink] = React.useState(false)
  const [busyStatus, setBusyStatus] = React.useState(false)
  const [rawOpen, setRawOpen] = React.useState(false)
  const [latestOpen, setLatestOpen] = React.useState(false)
  const [statusMenuOpen, setStatusMenuOpen] = React.useState(false)
  const [sessionPickerOpen, setSessionPickerOpen] = React.useState(false)
  const statusMenuRef = React.useRef(null)

  React.useEffect(() => {
    setEditing(false)
    setDeleting(false)
    setAddingUpdate(false)
    setAddingLink(false)
    setRawOpen(false)
    setLatestOpen(false)
    setStatusMenuOpen(false)
    setSessionPickerOpen(false)
  }, [selectedNo])

  React.useEffect(() => {
    if (!statusMenuOpen) return undefined
    const onDown = (event) => {
      if (!statusMenuRef.current || !statusMenuRef.current.contains(event.target)) setStatusMenuOpen(false)
    }
    const onKey = (event) => { if (event.key === 'Escape') setStatusMenuOpen(false) }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [statusMenuOpen])

  if (!selectedNo) {
    const filtered = query.trim() !== '' || status !== 'all'
    // 空池 / 零结果只保留左栏一个主空态；有结果但未选中时给「找到 N 条」
    if (ideas.length === 0 || (filtered && total === 0)) {
      return <div className="ip-detail-pane" />
    }
    return (
      <div className="ip-detail-pane">
        <div className="ip-scroll">
          <Empty
            icon="note"
            title={filtered ? t('找到 {n} 条想法', { n: total }) : t('选一条想法看详情')}
            hint={filtered
              ? t('从左边选一条查看。')
              : t('左边是灵感列表；宽屏时点一张卡片，这里显示原文、进展与产出。')}
          />
        </div>
      </div>
    )
  }
  if (detailError && !detail) {
    return (
      <div className="ip-detail-pane">
        <div className="ip-scroll">
          <div className="ip-error-pane">
            <span className="ip-empty-icon"><Icon name="alert" size={24} /></span>
            <p className="ip-empty-title">{t('详情加载失败')}</p>
            <p className="ip-empty-hint">{detailError}</p>
            <Button icon="refresh" onClick={() => selectIdea(selectedNo)}>{t('重试')}</Button>
          </div>
        </div>
      </div>
    )
  }
  if (!detail) {
    return (
      <div className="ip-detail-pane">
        <Spinner label={t('正在展开…')} />
      </div>
    )
  }

  const idea = detail.idea || {}
  const updates = Array.isArray(detail.updates) ? detail.updates : []
  const links = Array.isArray(detail.links) ? detail.links : []
  const no = idea.idea_no || selectedNo

  const changeStatus = async (status) => {
    if (busyStatus || status === idea.status) return
    setBusyStatus(true)
    await updateIdea(no, { status }, t('状态已更新为「{label}」', { label: statusLabel(status) }))
    setBusyStatus(false)
  }

  const latest = updates.length ? updates[updates.length - 1] : null
  const history = updates.slice(0, -1).reverse()
  const hasContext = Boolean(idea.summary) || Boolean(idea.source_note) || updates.length > 0
  const rawSection = (
    <section className="ip-section">
      <div className="ip-section-head">
        <span className="ip-section-title">{t('原文')}</span>
        <span className="ip-section-count">{t('阅读模式 · 逐字保存')}</span>
        <span className="ip-spacer" />
        <IconButton icon="copy" size={13} label={t('复制原文')} onClick={() => copyText(idea.raw_text || '', t('已复制原文'))} />
        {hasContext ? (
          <Button size="sm" variant="ghost" onClick={() => setRawOpen(value => !value)}>{rawOpen ? t('收起原文') : t('展开原文')}</Button>
        ) : null}
      </div>
      {(hasContext && !rawOpen)
        ? <button type="button" className="ip-raw-fold" onClick={() => setRawOpen(true)}><span>{t('原文默认折叠，点击展开')}</span><span className="ip-muted">{t('逐字保存')}</span></button>
        : <pre className="ip-raw">{idea.raw_text || t('（无原文）')}</pre>}
    </section>
  )
  const promptLabel = (idea.status === 'pool' && updates.length === 0) ? t('复制展开提示词') : t('复制接力提示词')
  const copyExpand = () => copyText(expandInstruction(idea), t('已复制提示词，可粘贴到对话继续'))
  const advancePrompt = `${expandInstruction(idea)}\n\n（本次从灵感池 ${no} 一键推进；完成后回填进展与产出。）`
  const advance = () => {
    const workspace = clientEnv.uiWorkspace
    if (workspace && typeof workspace.startSession === 'function') {
      try {
        workspace.startSession(undefined, { prompt: advancePrompt, whenDraftExists: 'append' })
        toast(t('已打开新会话并预填推进提示词；发送后可回来「查找相关会话」绑定。'))
        return
      } catch (err) {
        // 宿主不支持时退回复制，不阻断
      }
    }
    copyText(advancePrompt, t('当前界面不能直接开新会话，已复制推进提示词'))
  }
  const openSession = (ref) => {
    const workspace = clientEnv.uiWorkspace
    if (!workspace || typeof workspace.openSession !== 'function') {
      toast(t('当前环境不能打开 DSH 会话'), { error: true })
      return
    }
    try { workspace.openSession(ref.session_id) } catch (err) {
      toast(t('打开会话失败：{error}', { error: err.message || err }), { error: true })
    }
  }
  const isCloud = mode === 'cloud'
  // 本机模式复制一段「本机引用」；云端模式复制与网站一致的规范链接
  const copyIdeaLink = () => {
    if (isCloud) {
      copyText(ideaUrl(idea), t('已复制链接'))
      return
    }
    copyText(`灵感池 ${no}《${displayTitle(idea)}》（本机模式：用 idea_pool 工具按编号读取，或在 DSH 侧栏「灵感池」查看）`, t('已复制引用'))
  }

  return (
    <div className="ip-detail-pane">
      <div className="ip-scroll">
        <div className="ip-detail">
          <div className="ip-detail-head">
            {narrow ? (
              <div className="ip-detail-back">
                <Button size="sm" variant="ghost" icon="chevL" onClick={closeDetail}>{t('返回列表')}</Button>
              </div>
            ) : null}
            <div className="ip-detail-title-row">
              <h2 className="ip-detail-title">{displayTitle(idea) || no}</h2>
              <IconButton icon="edit" label={t('编辑')} onClick={() => setEditing(true)} />
              <IconButton icon="trash" label={t('删除')} onClick={() => setDeleting(true)} />
            </div>
            <div className="ip-detail-meta">
              <StatusBadge status={idea.status}>{statusLabel(idea.status)}</StatusBadge>
              <span className="ip-card-no">{no}</span>
              {idea.source ? <span>{t('来源：{source}', { source: sourceLabel(idea.source) })}</span> : null}
              <span>{t('创建 {time}', { time: formatDateTime(idea.created_at) })}</span>
              <span>{t('更新 {time}', { time: formatDateTime(idea.updated_at) })}</span>
            </div>
            {Array.isArray(idea.tags) && idea.tags.length ? (
              <div className="ip-detail-tags">{idea.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</div>
            ) : null}
            <div className="ip-detail-actions">
              <Button size="sm" variant="primary" icon="spark" onClick={advance}>{t('一键推进')}</Button>
              <Button size="sm" variant="ghost" icon="plus" onClick={() => { setAddingUpdate(true); window.requestAnimationFrame(() => document.querySelector('.ip-abox')?.scrollIntoView({ block: 'center' })) }}>{t('记进展')}</Button>
              <Button size="sm" icon="copy" onClick={copyExpand} title={t('复制后粘贴给 agent，继续展开或接力')}>{promptLabel}</Button>
              <Button size="sm" icon="link" onClick={copyIdeaLink}>{t(isCloud ? '复制链接' : '复制引用')}</Button>
              <span className="ip-spacer" />
              <div className="ip-status-menu" ref={statusMenuRef}>
                <button
                  type="button"
                  className="ip-status-trigger"
                  aria-haspopup="menu"
                  aria-expanded={statusMenuOpen}
                  disabled={busyStatus}
                  onClick={() => setStatusMenuOpen(value => !value)}
                >
                  <span className="ip-status-label">{t('状态')}</span>
                  <i className={`ip-dot is-${idea.status}`} aria-hidden="true" />
                  <span>{statusLabel(idea.status)}</span>
                  <Icon name="chevD" size={12} />
                </button>
                {statusMenuOpen ? (
                  <div className="ip-status-pop" role="menu" aria-label={t('切换状态')}>
                    {STATUS_ORDER.map(status => (
                      <button
                        key={status}
                        type="button"
                        role="menuitemradio"
                        aria-checked={idea.status === status}
                        className={idea.status === status ? 'is-on' : ''}
                        disabled={busyStatus}
                        onClick={() => { setStatusMenuOpen(false); changeStatus(status) }}
                      >
                        <i className={`ip-dot is-${status}`} aria-hidden="true" />
                        <span>{statusLabel(status)}</span>
                        {idea.status === status ? <Icon name="check" size={13} /> : null}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="ip-detail-body">
            {idea.gist ? <div className="ip-gist">{idea.gist}</div> : null}
            {!hasContext ? rawSection : null}
            {idea.summary ? (
              <section className="ip-section">
                <div className="ip-section-head"><span className="ip-section-title">{t('摘要')}</span></div>
                <div className="ip-summary">{idea.summary}</div>
              </section>
            ) : null}
            {idea.source_note ? (
              <section className="ip-section">
                <div className="ip-section-head"><span className="ip-section-title">{t('备注')}</span></div>
                <div className="ip-text">{idea.source_note}</div>
              </section>
            ) : null}
            {latest ? (
              <section className="ip-section">
                <div className="ip-section-head">
                  <span className="ip-section-title">{t('最新进展')}</span>
                  <span className="ip-section-count">{formatDateTime(latest.created_at)}</span>
                  <span className="ip-spacer" />
                  {latest.source ? <span className="ip-src"><Icon name="monitor" size={11} />{sourceLabel(latest.source)}</span> : null}
                </div>
                <div className="ip-latest">
                  {nextStepOf(latest.content) ? (
                    <div className="ip-next-step"><span className="ip-next-step-label">{t('下一步')}</span><span>{nextStepOf(latest.content)}</span></div>
                  ) : null}
                  <div className={`ip-latest-content ${latest.content && latest.content.length > 300 && !latestOpen ? 'is-clamped' : ''}`}>{latest.content}</div>
                  <div className="ip-latest-foot">
                    <span className="ip-muted">{t('下一步从这里接着推进')}</span>
                    <span className="ip-spacer" />
                    {latest.content && latest.content.length > 300 ? (
                      <Button size="sm" variant="ghost" onClick={() => setLatestOpen(value => !value)}>{latestOpen ? t('收起') : t('展开全部')}</Button>
                    ) : null}
                    <Button size="sm" variant="ghost" icon="plus" onClick={() => setAddingUpdate(true)}>{t('记进展')}</Button>
                  </div>
                </div>
              </section>
            ) : null}
            <section className="ip-section">
              <div className="ip-section-head">
                <span className="ip-section-title">{t('关联会话')}</span>
                <span className="ip-section-count">{(idea.session_refs || []).length}</span>
                <span className="ip-spacer" />
                <Button size="sm" variant="ghost" icon="search" onClick={() => setSessionPickerOpen(true)}>{t('查找相关会话')}</Button>
              </div>
              {(idea.session_refs || []).length ? (
                <div className="ip-session-chips">
                  {idea.session_refs.map(ref => (
                    <button key={ref.session_id} type="button" className="ip-session-chip" onClick={() => openSession(ref)} title={ref.session_id}>
                      <Icon name="monitor" size={12} />
                      <span>{ref.title || String(ref.session_id).slice(0, 18)}</span>
                      {ref.device ? <span className="ip-session-device">{ref.device}</span> : null}
                    </button>
                  ))}
                </div>
              ) : <p className="ip-muted">{t('还没有关联会话；一键推进后可用「查找相关会话」绑定。')}</p>}
            </section>
            <section className="ip-section">
              <div className="ip-section-head">
                <span className="ip-section-title">{t('关联产出')}</span>
                <span className="ip-section-count">{links.length}</span>
                <span className="ip-spacer" />
                <Button size="sm" variant="ghost" icon="plus" onClick={() => setAddingLink(value => !value)}>{t('加产出')}</Button>
              </div>
              {links.length
                ? <ul className="ip-links">{links.map(link => <LinkRow key={link.id || link.url} link={link} />)}</ul>
                : <p className="ip-muted">{t('还没有关联产出 —— 推进后把成果链接挂在这里。')}</p>}
            </section>
            <section className="ip-section">
              <div className="ip-section-head">
                <span className="ip-section-title">{t('进展历史')}</span>
                <span className="ip-section-count">{history.length}</span>
                <span className="ip-spacer" />
                <Button size="sm" variant="ghost" icon="plus" onClick={() => setAddingUpdate(value => !value)}>{t('加进展')}</Button>
              </div>
              {history.length
                ? <ul className="ip-timeline">{history.map(update => <TimelineItem key={update.id || update.created_at} update={update} />)}</ul>
                : <p className="ip-muted">{latest ? t('没有更早的进展。') : t('还没有进展记录。')}</p>}
              {addingUpdate ? <AddUpdateForm no={no} /> : null}
            </section>
            {hasContext ? rawSection : null}
          </div>
        </div>
      </div>
      {editing ? <EditIdeaDialog idea={idea} onClose={() => setEditing(false)} /> : null}
      {deleting ? <DeleteDialog idea={idea} onClose={() => setDeleting(false)} /> : null}
      {sessionPickerOpen ? <SessionPicker idea={idea} onClose={() => setSessionPickerOpen(false)} /> : null}
    </div>
  )
}

/* ---------- 设置对话框（v0.2：本机 / 云端双模） ---------- */

function normalizeBaseUrl(value) {
  return String(value || '').trim().replace(/\/+$/, '')
}

function SettingsDialog({ onClose }) {
  const settings = useStore(s => s.settings)
  const storagePath = useStore(s => s.storagePath)
  const device = useStore(s => s.device)
  const mode = useStore(s => s.mode)
  const [modeDraft, setModeDraft] = React.useState(mode === 'cloud' ? 'cloud' : 'local')
  const [deviceDraft, setDeviceDraft] = React.useState(device)
  const [baseDraft, setBaseDraft] = React.useState(DEFAULT_CLOUD_BASE)
  const [keyDraft, setKeyDraft] = React.useState('')
  const [busy, setBusy] = React.useState(false)
  const [testing, setTesting] = React.useState(false)
  const [importing, setImporting] = React.useState(false)
  const [clearing, setClearing] = React.useState(false)
  const [testResult, setTestResult] = React.useState(null)

  React.useEffect(() => { loadSettings() }, [])
  // 只在设置第一次到达时灌初值；之后会话内的 settings 变更（如清除 Key）不重置用户正在编辑的草稿
  const seededRef = React.useRef(false)
  React.useEffect(() => {
    if (!settings || seededRef.current) return
    seededRef.current = true
    setModeDraft(settings.mode === 'cloud' ? 'cloud' : 'local')
    if (typeof settings.device === 'string') setDeviceDraft(settings.device)
    const savedBase = settings.cloud && typeof settings.cloud.base === 'string' ? settings.cloud.base : ''
    setBaseDraft(savedBase || DEFAULT_CLOUD_BASE)
  }, [settings])

  const savedCloud = (settings && settings.cloud) || {}
  const hasKey = Boolean(savedCloud.hasKey)
  const keyHint = typeof savedCloud.keyHint === 'string' ? savedCloud.keyHint : ''
  const savedBase = typeof savedCloud.base === 'string' ? savedCloud.base : ''
  const shownBase = normalizeBaseUrl(baseDraft) || savedBase || DEFAULT_CLOUD_BASE
  const cloudDirty = normalizeBaseUrl(baseDraft) !== normalizeBaseUrl(savedBase || DEFAULT_CLOUD_BASE) || keyDraft.trim() !== ''
  const localPath = (settings && typeof settings.storagePath === 'string' && settings.storagePath) || storagePath

  const switchMode = (next) => {
    setModeDraft(next)
    setTestResult(null)
  }

  const runTest = async () => {
    if (testing) return
    const base = normalizeBaseUrl(baseDraft)
    if (!base) {
      toast(t('云端地址不能为空'), { error: true })
      return
    }
    if (!/^https?:\/\//i.test(base)) {
      toast(t('云端地址要以 http(s):// 开头'), { error: true })
      return
    }
    setTesting(true)
    setTestResult(null)
    const result = await testCloud({ base, apiKey: keyDraft.trim() })
    setTesting(false)
    if (result && result.ok) {
      setTestResult({ ok: true, text: t('连接正常 · 云端 {count} 条 · 延迟 {ms} ms', { count: result.count, ms: result.latencyMs }) })
      return
    }
    const status = result && Number(result.status)
    const authFailed = status === 401 || status === 403
    setTestResult({
      ok: false,
      text: authFailed
        ? t('连接失败：云端鉴权失败，请检查 API Key')
        : t('连接失败：{error}', { error: (result && result.error) || t('未知错误') }),
    })
  }

  const clearKey = async () => {
    if (clearing || !hasKey) return
    if (typeof window === 'undefined' || typeof window.confirm !== 'function') return
    const confirmed = window.confirm(t('清除已保存的 API Key？清除后云端读写会失败，直到重新填入。'))
    if (!confirmed) return
    setClearing(true)
    const saved = await clearCloudKey()
    setClearing(false)
    if (saved) {
      setKeyDraft('')
      setTestResult(null)
    }
  }

  const runImport = async () => {
    if (importing) return
    setImporting(true)
    await importCloudToLocal()
    setImporting(false)
  }

  const save = async () => {
    if (busy) return
    const nextMode = modeDraft === 'cloud' ? 'cloud' : 'local'
    const patch = {}
    if (settings) {
      if (nextMode !== settings.mode) patch.mode = nextMode
    } else if (nextMode !== mode) {
      patch.mode = nextMode
    }
    const nextDevice = deviceDraft.trim()
    if (!nextDevice) {
      toast(t('设备标识不能为空'), { error: true })
      return
    }
    if (settings ? nextDevice !== settings.device : nextDevice !== device) patch.device = nextDevice
    if (nextMode === 'cloud') {
      const nextBase = normalizeBaseUrl(baseDraft)
      if (!nextBase) {
        toast(t('云端地址不能为空'), { error: true })
        return
      }
      if (!/^https?:\/\//i.test(nextBase)) {
        toast(t('云端地址要以 http(s):// 开头'), { error: true })
        return
      }
      const cloud = {}
      if (nextBase !== savedBase) cloud.base = nextBase
      const nextKey = keyDraft.trim()
      if (nextKey) cloud.apiKey = nextKey
      if (Object.keys(cloud).length) patch.cloud = cloud
    }
    if (Object.keys(patch).length === 0) {
      onClose()
      return
    }
    setBusy(true)
    const saved = await saveSettings(patch)
    setBusy(false)
    if (saved) onClose()
  }

  return (
    <Dialog
      title={t('设置')}
      onClose={onClose}
      width={568}
      footer={(
        <>
          <span className="ip-spacer" />
          <Button onClick={onClose}>{t('关闭')}</Button>
          <Button variant="primary" onClick={save} disabled={busy}>{busy ? t('保存中…') : t('保存')}</Button>
        </>
      )}
    >
      <div className="ip-dialog-rows">
        {/* 数据位置 */}
        <section className="ip-settings-group">
          <div className="ip-settings-head">
            <h3>{t('数据位置')}</h3>
            <p>{t('先选数据存在哪里；切换模式不会自动搬数据。')}</p>
          </div>
          <div className="ip-dialog-row">
            <span className="ip-dialog-row-label">{t('运行模式')}</span>
            <div className="ip-dialog-row-main">
              <div className="ip-status-switch" role="group" aria-label={t('运行模式')}>
                <button type="button" className={modeDraft === 'local' ? 'is-on' : ''} aria-pressed={modeDraft === 'local'} onClick={() => switchMode('local')}>{t('本机模式')}</button>
                <button type="button" className={modeDraft === 'cloud' ? 'is-on' : ''} aria-pressed={modeDraft === 'cloud'} onClick={() => switchMode('cloud')}>{t('云端模式')}</button>
              </div>
              <p className="ip-dialog-note">
                {modeDraft === 'cloud'
                  ? t('云端模式：数据在云端 {base}，本机数据不动。', { base: shownBase })
                  : t('本机模式：数据只存在这台机器的 DSH_HOME/idea-pool/ 下，由插件直接读写，不经过网络；换机器看不到。')}
              </p>
            </div>
          </div>
          {modeDraft === 'local' ? (
            <div className="ip-dialog-row">
              <span className="ip-dialog-row-label">{t('存储路径')}</span>
              <div className="ip-dialog-row-main">
                <code className="ip-dialog-code">{localPath || t('未知')}</code>
                <p className="ip-dialog-note">{t('本机模式下所有想法都存在这个 JSON 文件里，删掉文件等于清空灵感池。')}</p>
              </div>
            </div>
          ) : null}
        </section>

        {/* 连接配置 */}
        <section className="ip-settings-group">
          <div className="ip-settings-head">
            <h3>{t('连接配置')}</h3>
            <p>{modeDraft === 'cloud' ? t('云端地址与 API Key；测试使用当前填写的值。') : t('本机模式不需要连接；切到云端模式后再填写地址与 Key。')}</p>
          </div>
          {modeDraft === 'cloud' ? (
            <>
              <div className="ip-dialog-row">
                <span className="ip-dialog-row-label">{t('云端地址')}</span>
                <div className="ip-dialog-row-main">
                  <div className="ip-inline-row">
                    <input
                      className="ip-inline-input"
                      value={baseDraft}
                      placeholder={DEFAULT_CLOUD_BASE}
                      onChange={(event) => { setBaseDraft(event.target.value); setTestResult(null) }}
                    />
                  </div>
                  <p className="ip-dialog-note">{t('云端 ideas-api 基址，默认 {base}。', { base: DEFAULT_CLOUD_BASE })}</p>
                </div>
              </div>
              <div className="ip-dialog-row">
                <span className="ip-dialog-row-label">{t('API Key')}</span>
                <div className="ip-dialog-row-main">
                  <div className="ip-inline-row">
                    <input
                      className="ip-inline-input"
                      type="password"
                      autoComplete="off"
                      value={keyDraft}
                      placeholder={hasKey ? t('已保存，末四位 {hint}', { hint: keyHint || '****' }) : t('粘贴云端 API Key')}
                      onChange={(event) => { setKeyDraft(event.target.value); setTestResult(null) }}
                    />
                    {hasKey ? (
                      <Button size="sm" variant="danger" onClick={clearKey} disabled={clearing || busy}>
                        {clearing ? t('清除中…') : t('清除已保存的 Key')}
                      </Button>
                    ) : null}
                  </div>
                  <p className="ip-dialog-note">
                    {hasKey
                      ? t('已保存 API Key（末四位 {hint}）；留空表示不改。', { hint: keyHint || '****' })
                      : t('还没配置 API Key；云端读写需要它。')}
                  </p>
                </div>
              </div>
              <div className="ip-dialog-row">
                <span className="ip-dialog-row-label">{t('测试连接')}</span>
                <div className="ip-dialog-row-main">
                  <div className="ip-inline-row">
                    <Button size="sm" icon="bolt" onClick={runTest} disabled={testing}>{testing ? t('测试中…') : t('测试连接')}</Button>
                    {testResult ? (
                      <span className={`ip-cloud-status ${testResult.ok ? 'is-ok' : 'is-error'}`}>
                        <Icon name={testResult.ok ? 'check' : 'alert'} size={12} />
                        {testResult.text}
                      </span>
                    ) : (
                      <span className="ip-cloud-status">{t('用当前填写配置试拉一次，不需要先保存')}</span>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="ip-dialog-note">{t('当前是本机模式。')}</p>
          )}
        </section>

        {/* 数据迁移 */}
        <section className="ip-settings-group">
          <div className="ip-settings-head">
            <h3>{t('数据迁移')}</h3>
            <p>{t('导入使用已保存的云端配置；不会删除本机现有数据。')}</p>
          </div>
          {modeDraft === 'local' ? (
            <div className="ip-dialog-row">
              <span className="ip-dialog-row-label">{t('导出')}</span>
              <div className="ip-dialog-row-main">
                <div className="ip-inline-row">
                  <Button icon="download" onClick={() => exportJson()}>{t('导出 JSON')}</Button>
                </div>
                <p className="ip-dialog-note">{t('导出全部想法、进展与产出为一个 JSON 文件，便于备份或迁移。')}</p>
              </div>
            </div>
          ) : null}
          <div className="ip-dialog-row">
            <span className="ip-dialog-row-label">{t('导入到本机')}</span>
            <div className="ip-dialog-row-main">
              <div className="ip-inline-row">
                <Button
                  size="sm"
                  icon="download"
                  onClick={runImport}
                  disabled={importing || !hasKey || cloudDirty}
                  title={!hasKey ? t('还没有保存 API Key，无法导入；先填 Key 并保存。') : cloudDirty ? t('连接配置有未保存修改；先保存，再导入。') : undefined}
                >
                  {importing ? t('导入中…') : t('从云端导入到本机')}
                </Button>
              </div>
              <p className="ip-dialog-note">
                {!hasKey
                  ? t('还没有保存 API Key，无法导入；先填 Key 并保存。')
                  : cloudDirty
                    ? t('连接配置有未保存修改：先点「保存」，再导入，避免用错地址或 Key。')
                    : t('用已保存的云端配置拉全量，按编号合并进本机；不改当前模式，本机数据不会被删。')}
              </p>
            </div>
          </div>
        </section>

        {/* 高级 */}
        <section className="ip-settings-group">
          <div className="ip-settings-head">
            <h3>{t('高级')}</h3>
            <p>{t('设备标识会写进想法与进展的 source 字段，跨机接力时用它定位来源。')}</p>
          </div>
          <div className="ip-dialog-row">
            <span className="ip-dialog-row-label">{t('设备标识')}</span>
            <div className="ip-dialog-row-main">
              <div className="ip-inline-row">
                <input
                  className="ip-inline-input"
                  value={deviceDraft}
                  placeholder="dsh-mac / dsh-win / volcano"
                  onChange={(event) => setDeviceDraft(event.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Dialog>
  )
}

/* ---------- 根组件 ---------- */

export function App() {
  // 换语言时整棵树重新渲染
  useLang()
  const booted = useStore(s => s.booted)
  const loading = useStore(s => s.loading)
  const error = useStore(s => s.error)
  const canUndo = useStore(s => s.canUndo)
  const ideas = useStore(s => s.ideas)
  const status = useStore(s => s.status)
  const query = useStore(s => s.query)
  const selectedNo = useStore(s => s.selectedNo)
  const total = useStore(s => s.total)
  const suppressAutoSelect = useStore(s => s.suppressAutoSelect)
  const view = useStore(s => s.view)
  const rootRef = React.useRef(null)
  const searchRef = React.useRef(null)
  const [width, setWidth] = React.useState(1200)
  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const narrow = width < 880
  const compact = width < 640

  React.useEffect(() => { boot() }, [])

  React.useEffect(() => {
    const el = rootRef.current
    if (!el || typeof ResizeObserver === 'undefined') return undefined
    const observer = new ResizeObserver(([entry]) => {
      if (entry && entry.contentRect) setWidth(entry.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // 宽屏时默认选中第一条，右侧不留白
  React.useEffect(() => {
    if (!booted || narrow || selectedNo || suppressAutoSelect) return
    if (query.trim()) return
    if (ideas.length) selectIdea(ideas[0].idea_no)
  }, [booted, narrow, selectedNo, suppressAutoSelect, query, ideas])

  React.useEffect(() => {
    const onKey = (event) => {
      const target = event.target
      const tag = (target && target.tagName) || ''
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(tag) || Boolean(target && target.isContentEditable)
      if ((event.metaKey || event.ctrlKey) && !event.shiftKey && (event.key === 'z' || event.key === 'Z') && !typing && canUndo) {
        event.preventDefault()
        undo()
        return
      }
      if (event.key === '/' && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault()
        searchRef.current?.focus()
        return
      }
      if (event.key === 'Escape' && narrow && selectedNo) {
        // 对话框自己会先吃掉 Esc；这里只处理窄屏「详情 → 返回列表」
        closeDetail()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [canUndo, narrow, selectedNo])

  const showList = !narrow || !selectedNo
  const showDetail = !narrow || Boolean(selectedNo)
  const readingDetail = narrow && Boolean(selectedNo)
  const highlightCapture = booted && !loading && !error && ideas.length === 0 && status === 'all' && !query.trim()

  return (
    <div className={`ip-root ${narrow ? 'is-narrow' : ''} ${compact ? 'is-compact' : ''} ${readingDetail ? 'is-reading' : ''} ${view === 'review' ? 'is-review' : ''}`} ref={rootRef}>
      <style>{css}</style>
      <TopBar searchRef={searchRef} onOpenSettings={() => setSettingsOpen(true)} />
      {readingDetail ? null : <CaptureBar highlight={highlightCapture} />}
      {booted && !readingDetail ? <StatusTabs /> : null}
      <div className="ip-body">
        {loading && !booted ? (
          <Spinner label={t('正在读取灵感池…')} />
        ) : error && !booted ? (
          <div className="ip-error-pane">
            <span className="ip-empty-icon"><Icon name="alert" size={24} /></span>
            <p className="ip-empty-title">{t('灵感池加载失败')}</p>
            <p className="ip-empty-hint">{error}</p>
            <Button icon="refresh" onClick={() => retryBoot()}>{t('重试')}</Button>
          </div>
        ) : (
          <>
            {showList ? (
              <div className="ip-list-pane">
                <div className="ip-list-viewbar">
                  <div className="ip-view-switch" role="group" aria-label={t('视图')}>
                    <button type="button" className={view === 'list' ? 'is-on' : ''} aria-pressed={view === 'list'} onClick={() => setView('list')}>{t('列表')}</button>
                    <button type="button" className={view === 'review' ? 'is-on' : ''} aria-pressed={view === 'review'} onClick={() => setView('review')}>{t('梳理')}</button>
                  </div>
                  <span className="ip-list-count">{t('{n} 条', { n: total })}</span>
                </div>
                <ListView narrow={narrow} />
              </div>
            ) : null}
            {showDetail ? <DetailPane narrow={narrow} /> : null}
          </>
        )}
      </div>
      {settingsOpen ? <SettingsDialog onClose={() => setSettingsOpen(false)} /> : null}
      <Toast />
    </div>
  )
}

/* ---------- 宿主客户端服务（可选：会话搜索 / 打开会话 / 新建会话预填） ---------- */

let clientEnv = { sessions: null, uiWorkspace: null }

/* ---------- 侧栏入口图标 ---------- */

function PanelIcon({ size }) {
  return <Icon name="bulb" size={size} />
}

export const inject = ['slots', 'sessions', 'uiWorkspace']

export function apply(ctx) {
  const service = (name) => {
    try { return typeof ctx.get === 'function' ? ctx.get(name) : ctx[name] } catch (err) { return undefined }
  }
  clientEnv = { sessions: service('sessions') ?? ctx.sessions ?? null, uiWorkspace: service('uiWorkspace') ?? ctx.uiWorkspace ?? null }
  // 主面板：点侧栏图标后整页打开
  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: PANEL_ID }, App))
  // 侧栏名字只在注册时读一次，换语言时重新注册
  ctx.effect(() => {
    let release = null
    const mount = () => {
      release?.()
      release = ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
        name: 'sidebar.panellist',
        id: PANEL_ID,
        order: 15,
        label: () => t('灵感池'),
      }, PanelIcon))
    }
    mount()
    const off = subscribeLang(mount)
    return () => {
      off()
      release?.()
    }
  }, 'dsh-idea-pool: sidebar entry')
}
