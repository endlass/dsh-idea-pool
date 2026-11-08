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
  closeDetail,
  deleteIdea,
  exportJson,
  loadSettings,
  refresh as refreshStore,
  retryBoot,
  saveDevice,
  selectIdea,
  setFilter,
  setQuery,
  toast,
  undo,
  updateIdea,
  useStore,
} from './store.js'
import { Badge, Button, Dialog, Empty, Field, Icon, IconButton, Spinner, StatusBadge, Tag, Toast, copyText } from './ui.jsx'

const PANEL_ID = 'idea-pool'
const SITE_BASE = 'https://www.zhaoningyuan.com'
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
  const canUndo = useStore(s => s.canUndo)
  const query = useStore(s => s.query)
  const [draft, setDraft] = React.useState(query)
  React.useEffect(() => { setDraft(query) }, [query])
  const modeLabel = mode === 'cloud' ? t('云端模式') : t('本机模式')
  return (
    <header className="ip-topbar" data-window-drag="">
      <div className="ip-brand">
        <span className="ip-brand-mark"><Icon name="bulb" size={17} stroke={1.7} /></span>
        <span className="ip-title">{t('灵感池')}</span>
        <span className="ip-mode" title={device ? `${modeLabel} · ${device}` : modeLabel}>
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
      {canUndo ? <IconButton icon="undo" label={t('撤销上一步')} onClick={() => undo()} /> : null}
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
  const [tags, setTags] = React.useState('')
  const [expanded, setExpanded] = React.useState(false)
  const [busy, setBusy] = React.useState(false)
  const [focused, setFocused] = React.useState(false)
  const inputRef = React.useRef(null)

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
    const tagList = parseTags(tags)
    if (tagList.length) payload.tags = tagList
    setBusy(true)
    const idea = await addIdea(payload)
    setBusy(false)
    if (!idea) return
    setRaw('')
    setTitle('')
    setSummary('')
    setTags('')
    setExpanded(false)
    // 保存后清空并聚焦：下一句可以直接接着写
    window.requestAnimationFrame(() => {
      const el = inputRef.current
      if (!el) return
      el.style.height = 'auto'
      el.focus()
    })
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

  return (
    <section
      className={`ip-capture ${focused ? 'is-focused' : ''} ${highlight ? 'is-highlight' : ''}`}
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
    </nav>
  )
}

/* ---------- 列表 ---------- */

function IdeaCard({ idea, active, onClick }) {
  const tags = Array.isArray(idea.tags) ? idea.tags : []
  return (
    <button
      type="button"
      className={`ip-card ${active ? 'is-on' : ''}`}
      aria-current={active ? 'true' : undefined}
      onClick={onClick}
    >
      <div className="ip-card-head">
        <StatusBadge status={idea.status}>{statusLabel(idea.status)}</StatusBadge>
        <span className="ip-card-no">{idea.idea_no}</span>
        <time className="ip-card-time" dateTime={idea.updated_at || undefined}>{formatShortTime(idea.updated_at)}</time>
      </div>
      <div className="ip-card-title">{displayTitle(idea)}</div>
      {idea.summary ? <div className="ip-card-sum">{idea.summary}</div> : null}
      <div className="ip-card-foot">
        {tags.slice(0, 4).map(tag => <Tag key={tag}>{tag}</Tag>)}
        {tags.length > 4 ? <span className="ip-muted">+{tags.length - 4}</span> : null}
        <span className="ip-card-meta">
          {countText(idea.n_updates || 0, '1 条进展', '{n} 条进展')}
          <span className="ip-sep">·</span>
          {countText(idea.n_links || 0, '1 个产出', '{n} 个产出')}
        </span>
      </div>
    </button>
  )
}

function ListView({ narrow }) {
  const ideas = useStore(s => s.ideas)
  const listLoading = useStore(s => s.listLoading)
  const status = useStore(s => s.status)
  const query = useStore(s => s.query)
  const selectedNo = useStore(s => s.selectedNo)
  const filtered = status !== 'all' || Boolean(query.trim())
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
          : t('在上面写一句，回车换行，⌘/Ctrl+Enter 入池。本机模式的数据只在这台机器上。')}
      />
    )
  }
  return (
    <div className="ip-scroll">
      <div className="ip-list">
        {ideas.map(idea => (
          <IdeaCard
            key={idea.idea_no}
            idea={idea}
            active={!narrow && idea.idea_no === selectedNo}
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
    setBusy(true)
    const ok = await addUpdate(no, text)
    setBusy(false)
    if (ok) setContent('')
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
    setBusy(true)
    const ok = await addLink(no, { title: title.trim() || target, url: target })
    setBusy(false)
    if (ok) {
      setTitle('')
      setUrl('')
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
  const [raw, setRaw] = React.useState(idea.raw_text || '')
  const [tags, setTags] = React.useState((idea.tags || []).join(', '))
  const [note, setNote] = React.useState(idea.source_note || '')
  const [busy, setBusy] = React.useState(false)
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
      onClose={onClose}
      width={560}
      footer={(
        <>
          <span className="ip-spacer" />
          <Button onClick={onClose}>{t('取消')}</Button>
          <Button variant="primary" type="submit" form="ip-edit-form" disabled={busy}>{busy ? t('保存中…') : t('保存')}</Button>
        </>
      )}
    >
      <form id="ip-edit-form" className="ip-dialog-rows" onSubmit={submit}>
        <Field label={t('标题')}>
          <input value={title} onChange={(event) => setTitle(event.target.value)} />
        </Field>
        <Field label={t('摘要')}>
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

/* ---------- 详情主面板 ---------- */

function DetailPane({ narrow }) {
  const selectedNo = useStore(s => s.selectedNo)
  const detail = useStore(s => s.detail)
  const detailLoading = useStore(s => s.detailLoading)
  const detailError = useStore(s => s.detailError)
  const [editing, setEditing] = React.useState(false)
  const [deleting, setDeleting] = React.useState(false)
  const [addingUpdate, setAddingUpdate] = React.useState(false)
  const [addingLink, setAddingLink] = React.useState(false)
  const [busyStatus, setBusyStatus] = React.useState(false)

  React.useEffect(() => {
    setEditing(false)
    setDeleting(false)
    setAddingUpdate(false)
    setAddingLink(false)
  }, [selectedNo])

  if (!selectedNo) {
    return (
      <div className="ip-detail-pane">
        <div className="ip-scroll">
          <Empty
            icon="note"
            title={t('选一条想法看详情')}
            hint={t('左边是灵感列表；宽屏时点一张卡片，这里显示原文、进展与产出。')}
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

  const copyExpand = () => copyText(expandInstruction(idea), t('已复制展开指令'))
  const copyIdeaLink = () => copyText(`灵感池 ${no}《${displayTitle(idea)}》（本机模式：用 idea_pool 工具按编号读取，或在 DSH 侧栏「灵感池」查看）`, t('已复制引用'))

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
              <Button size="sm" icon="copy" onClick={copyExpand}>{t('复制展开指令')}</Button>
              <Button size="sm" icon="link" onClick={copyIdeaLink}>{t('复制引用')}</Button>
              <span className="ip-spacer" />
              <div className="ip-status-switch" role="group" aria-label={t('切换状态')}>
                {STATUS_ORDER.map(status => (
                  <button
                    key={status}
                    type="button"
                    className={idea.status === status ? 'is-on' : ''}
                    aria-pressed={idea.status === status}
                    disabled={busyStatus}
                    onClick={() => changeStatus(status)}
                  >
                    {statusLabel(status)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="ip-detail-body">
            <section className="ip-section">
              <div className="ip-section-head">
                <span className="ip-section-title">{t('原文')}</span>
                <span className="ip-section-count">{t('逐字保存 · 只读')}</span>
                <span className="ip-spacer" />
                <IconButton icon="copy" size={13} label={t('复制原文')} onClick={() => copyText(idea.raw_text || '', t('已复制原文'))} />
              </div>
              <pre className="ip-raw">{idea.raw_text || t('（无原文）')}</pre>
            </section>
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
              {addingLink ? <AddLinkForm no={no} /> : null}
            </section>
            <section className="ip-section">
              <div className="ip-section-head">
                <span className="ip-section-title">{t('进展')}</span>
                <span className="ip-section-count">{updates.length}</span>
                <span className="ip-spacer" />
                <Button size="sm" variant="ghost" icon="plus" onClick={() => setAddingUpdate(value => !value)}>{t('加进展')}</Button>
              </div>
              {updates.length
                ? <ul className="ip-timeline">{updates.map(update => <TimelineItem key={update.id || update.created_at} update={update} />)}</ul>
                : <p className="ip-muted">{t('还没有进展记录。')}</p>}
              {addingUpdate ? <AddUpdateForm no={no} /> : null}
            </section>
          </div>
        </div>
      </div>
      {editing ? <EditIdeaDialog idea={idea} onClose={() => setEditing(false)} /> : null}
      {deleting ? <DeleteDialog idea={idea} onClose={() => setDeleting(false)} /> : null}
    </div>
  )
}

/* ---------- 设置对话框 ---------- */

function SettingsDialog({ onClose }) {
  const settings = useStore(s => s.settings)
  const storagePath = useStore(s => s.storagePath)
  const device = useStore(s => s.device)
  const mode = useStore(s => s.mode)
  const [draft, setDraft] = React.useState(device)
  const [busy, setBusy] = React.useState(false)
  React.useEffect(() => { loadSettings() }, [])
  React.useEffect(() => {
    if (settings && typeof settings.device === 'string') setDraft(settings.device)
  }, [settings])
  const save = async () => {
    const value = draft.trim()
    if (!value) {
      toast(t('设备标识不能为空'), { error: true })
      return
    }
    setBusy(true)
    await saveDevice(value)
    setBusy(false)
  }
  return (
    <Dialog
      title={t('设置')}
      onClose={onClose}
      width={548}
      footer={(
        <>
          <span className="ip-spacer" />
          <Button variant="primary" onClick={onClose}>{t('完成')}</Button>
        </>
      )}
    >
      <div className="ip-dialog-rows">
        <div className="ip-dialog-row">
          <span className="ip-dialog-row-label">{t('存储路径')}</span>
          <div className="ip-dialog-row-main">
            <code className="ip-dialog-code">{storagePath || t('未知')}</code>
            <p className="ip-dialog-note">{t('本机模式下所有想法都存在这个 JSON 文件里，删掉文件等于清空灵感池。')}</p>
          </div>
        </div>
        <div className="ip-dialog-row">
          <span className="ip-dialog-row-label">{t('运行模式')}</span>
          <div className="ip-dialog-row-main">
            <div className="ip-inline-row">
              <Badge tone="neutral"><i className="ip-dot" aria-hidden="true" />{mode === 'cloud' ? t('云端模式') : t('本机模式')}</Badge>
            </div>
            <p className="ip-dialog-note">
              {t('本机模式：数据只存在这台机器的 DSH_HOME/idea-pool/ 下，由插件直接读写，不经过网络；换机器看不到。云端模式后续版本开放。')}
            </p>
          </div>
        </div>
        <div className="ip-dialog-row">
          <span className="ip-dialog-row-label">{t('设备标识')}</span>
          <div className="ip-dialog-row-main">
            <div className="ip-inline-row">
              <input
                className="ip-inline-input"
                value={draft}
                placeholder="dsh-mac / dsh-win / volcano"
                onChange={(event) => setDraft(event.target.value)}
              />
              <Button size="sm" onClick={save} disabled={busy}>{busy ? t('保存中…') : t('保存')}</Button>
            </div>
            <p className="ip-dialog-note">{t('写进想法与进展的 source 字段，跨机接力时用它定位来源。')}</p>
          </div>
        </div>
        <div className="ip-dialog-row">
          <span className="ip-dialog-row-label">{t('导出')}</span>
          <div className="ip-dialog-row-main">
            <div className="ip-inline-row">
              <Button icon="download" onClick={() => exportJson()}>{t('导出 JSON')}</Button>
            </div>
            <p className="ip-dialog-note">{t('导出全部想法、进展与产出为一个 JSON 文件，便于备份或迁移。')}</p>
          </div>
        </div>
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
  const rootRef = React.useRef(null)
  const searchRef = React.useRef(null)
  const [width, setWidth] = React.useState(1200)
  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const narrow = width < 880
  const compact = width < 600

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
    if (!booted || narrow || selectedNo) return
    if (query.trim()) return
    if (ideas.length) selectIdea(ideas[0].idea_no)
  }, [booted, narrow, selectedNo, query, ideas])

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
  const highlightCapture = booted && !loading && !error && ideas.length === 0 && status === 'all' && !query.trim()

  return (
    <div className={`ip-root ${narrow ? 'is-narrow' : ''} ${compact ? 'is-compact' : ''}`} ref={rootRef}>
      <style>{css}</style>
      <TopBar searchRef={searchRef} onOpenSettings={() => setSettingsOpen(true)} />
      <CaptureBar highlight={highlightCapture} />
      {booted ? <StatusTabs /> : null}
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

/* ---------- 侧栏入口图标 ---------- */

function PanelIcon({ size }) {
  return <Icon name="bulb" size={size} />
}

export const inject = ['slots']

export function apply(ctx) {
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
