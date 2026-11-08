// 界面语言：中文原文直接写在代码里，英文按中文原文查表（client/en.js）。
// 跟随 DSH 宿主：读 <html lang>，切语言时用 MutationObserver 通知订阅者重新注册。
import React from 'react'
import { EN } from './en.js'

let hostLang = readHostLang()
const listeners = new Set()

function readHostLang() {
  if (typeof document === 'undefined') return 'zh'
  const tag = (document.documentElement.lang || navigator.language || 'zh').toLowerCase()
  return tag.startsWith('zh') ? 'zh' : 'en'
}

function notify() {
  listeners.forEach(fn => {
    try { fn() } catch (err) { console.error('[idea-pool] lang listener failed', err) }
  })
}

if (typeof document !== 'undefined' && typeof MutationObserver !== 'undefined') {
  new MutationObserver(() => {
    const next = readHostLang()
    if (next !== hostLang) {
      hostLang = next
      notify()
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] })
}

/** 当前生效的语言：'zh' 或 'en'。 */
export function lang() {
  return hostLang
}

/** 订阅宿主语言变化，返回取消订阅函数。 */
export function subscribeLang(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

/** React 组件里跟随语言重新渲染。 */
export function useLang() {
  return React.useSyncExternalStore(subscribeLang, lang)
}

/**
 * 翻译一段界面文字。key 就是中文原文，{name} 是占位符。
 * @param {string} zh 中文原文。
 * @param {Record<string, unknown>} [vars] 占位符的值。
 * @returns {string}
 */
export function t(zh, vars) {
  const text = lang() === 'en' ? (EN[zh] ?? zh) : zh
  return vars ? text.replace(/\{(\w+)\}/g, (match, key) => (vars[key] === undefined ? match : String(vars[key]))) : text
}

/** 英文要区分单复数的地方用这个：n 为 1 时取 one，否则取 other。 */
export function plural(n, one, other) {
  return n === 1 ? one : other
}
