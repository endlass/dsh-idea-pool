// 通用小组件：图标、按钮、徽标、对话框、提示。全部自绘，不引宿主组件包。
import React from 'react'
import { t } from './i18n.js'
import { dismissToast, toast, useStore } from './store.js'

// 24×24 线性图标；一个 path 里可以有多个子路径。
const PATHS = {
  bulb: 'M12 3a6 6 0 0 1 3.5 10.9c-.9.6-1.5 1.5-1.5 2.5v.6h-4v-.6c0-1-.6-1.9-1.5-2.5A6 6 0 0 1 12 3zM10 20h4M12 7.5v3.5',
  note: 'M6 4h8l4 4v12H6zM14 4v4h4M9 12h6M9 16h6',
  settings: 'M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6',
  undo: 'M8 6L4 10l4 4M4 10h10a5 5 0 0 1 0 10h-3',
  refresh: 'M19 8a8 8 0 0 0-14-1L4 9M5 16a8 8 0 0 0 14 1l1-2M4 4v5h5M20 20v-5h-5',
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4',
  close: 'M6 6l12 12M18 6L6 18',
  check: 'M5 12.5l4.5 4.5L19 7',
  chevD: 'M6 9.5l6 6 6-6',
  chevL: 'M14.5 5.5L8 12l6.5 6.5',
  chevR: 'M9.5 5.5L16 12l-6.5 6.5',
  plus: 'M12 5v14M5 12h14',
  edit: 'M4 20l1-4L16 5l3 3L8 19zM14 7l3 3',
  trash: 'M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13',
  copy: 'M9 9h10v11H9zM5 15V4h10',
  link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  upRight: 'M7 17L17 7M8 7h9v9',
  monitor: 'M4 5h16v11H4zM9 20h6M12 16v4',
  clock: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l2.5 1.5',
  download: 'M12 4v11M7 11l5 5 5-5M5 20h14',
  alert: 'M12 4l9 16H3zM12 10v4M12 17.5h.01',
  folder: 'M4 7h6l2 2h10v10H4z',
  tag: 'M4 5h8l8 8-6 6-8-8zM8 8.5h.01',
  spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',
  bolt: 'M13 3L5 14h6l-1 7 8-11h-6z',
  cloud: 'M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8.5z',
  dot: 'M12 12h.01',
}

export function Icon({ name, size = 16, stroke = 1.6, className = '' }) {
  const d = PATHS[name]
  if (!d) return null
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={d} />
    </svg>
  )
}

export function IconButton({ icon, label, onClick, disabled, active, size = 16, className = '', ...rest }) {
  return (
    <button
      type="button"
      className={`ip-iconbtn ${active ? 'is-on' : ''} ${className}`}
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <Icon name={icon} size={size} />
    </button>
  )
}

export function Button({ variant = 'plain', size = 'md', icon, children, className = '', title, ...rest }) {
  return (
    <button type="button" className={`ip-btn is-${variant} is-${size} ${className}`} title={title} {...rest}>
      {icon ? <Icon name={icon} size={size === 'sm' ? 13 : 15} /> : null}
      {children ? <span>{children}</span> : null}
    </button>
  )
}

export function Badge({ tone = 'neutral', children, title, className = '' }) {
  return <span className={`ip-badge is-${tone} ${className}`} title={title}>{children}</span>
}

export function StatusBadge({ status, children }) {
  const tone = status === 'pool' || status === 'active' || status === 'done' || status === 'parked' ? status : 'neutral'
  return (
    <Badge tone={tone}>
      <i className="ip-dot" aria-hidden="true" />
      {children}
    </Badge>
  )
}

export function Tag({ children }) {
  return <span className="ip-tag">{children}</span>
}

export function Field({ label, hint, children }) {
  return (
    <label className="ip-field">
      <span className="ip-field-label">{label}</span>
      {children}
      {hint ? <small className="ip-field-hint">{hint}</small> : null}
    </label>
  )
}

export function Dialog({ title, onClose, children, footer, width = 460 }) {
  const ref = React.useRef(null)
  const closeRef = React.useRef(onClose)
  closeRef.current = onClose
  React.useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        closeRef.current()
      }
    }
    window.addEventListener('keydown', onKey, true)
    const body = ref.current
    const target = body && (body.querySelector('textarea, input, select') || body.querySelector('button'))
    if (target) target.focus()
    return () => window.removeEventListener('keydown', onKey, true)
  }, [])
  return (
    <div
      className="ip-dialog-mask"
      onPointerDown={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <div className="ip-dialog" role="dialog" aria-modal="true" aria-label={title} style={{ width }} ref={ref}>
        <div className="ip-dialog-head">
          <h2>{title}</h2>
          <IconButton icon="close" label={t('关闭')} onClick={onClose} />
        </div>
        <div className="ip-dialog-body">{children}</div>
        {footer ? <div className="ip-dialog-foot">{footer}</div> : null}
      </div>
    </div>
  )
}

export function Toast() {
  const item = useStore(s => s.toast)
  if (!item) return null
  return (
    <div key={item.id} className={`ip-toast ${item.error ? 'is-error' : ''}`} role={item.error ? 'alert' : 'status'}>
      <Icon name={item.error ? 'alert' : 'check'} size={14} />
      <span className="ip-toast-text">{item.text}</span>
      <button type="button" className="ip-toast-close" aria-label={t('关闭')} onClick={dismissToast}>
        <Icon name="close" size={12} />
      </button>
    </div>
  )
}

export function Empty({ icon = 'bulb', title, hint, children }) {
  return (
    <div className="ip-empty">
      <span className="ip-empty-icon"><Icon name={icon} size={26} /></span>
      <p className="ip-empty-title">{title}</p>
      {hint ? <p className="ip-empty-hint">{hint}</p> : null}
      {children}
    </div>
  )
}

export function Spinner({ label }) {
  return (
    <div className="ip-loading" role="status">
      <span className="ip-spinner" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea')
  ta.value = text
  ta.setAttribute('readonly', '')
  ta.style.cssText = 'position:fixed;top:-1000px;left:-1000px;opacity:0'
  document.body.appendChild(ta)
  ta.select()
  try {
    document.execCommand('copy')
  } finally {
    ta.remove()
  }
}

/** 复制文本到剪贴板，成功/失败都走页面内 toast。 */
export function copyText(text, okText = t('已复制')) {
  const done = () => toast(okText)
  const fail = () => toast(t('复制失败，请手动选择复制'), { error: true })
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => {
        try { fallbackCopy(text); done() } catch (err) { fail() }
      })
      return
    }
    fallbackCopy(text)
    done()
  } catch (err) {
    fail()
  }
}
