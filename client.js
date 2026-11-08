window.__ModuleLoader__.load({id:"dsh-idea-pool",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Ge=Object.create;var K=Object.defineProperty;var Xe=Object.getOwnPropertyDescriptor;var Qe=Object.getOwnPropertyNames;var Ze=Object.getPrototypeOf,Re=Object.prototype.hasOwnProperty;var ei=(e,t)=>{for(var r in t)K(e,r,{get:t[r],enumerable:!0})},he=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Qe(t))!Re.call(e,o)&&o!==r&&K(e,o,{get:()=>t[o],enumerable:!(n=Xe(t,o))||n.enumerable});return e};var W=(e,t,r)=>(r=e!=null?Ge(Ze(e)):{},he(t||!e||!e.__esModule?K(r,"default",{value:e,enumerable:!0}):r,e)),ii=e=>he(K({},"__esModule",{value:!0}),e);var Oi={};ei(Oi,{App:()=>Ve,apply:()=>_i,inject:()=>Bi});module.exports=ii(Oi);var i=W(require("react"),1);var ve=`/* dsh-idea-pool \u5BA2\u6237\u7AEF\u6837\u5F0F\uFF1A\u989C\u8272\u53EA\u8D70 --dsw-alias-* \u8BED\u4E49 token\uFF08\u5E26 fallback\uFF09\uFF0C\u660E\u6697\u4E3B\u9898\u7531\u5BBF\u4E3B\u5207\u6362\u3002 */
.ip-root {
  --ip-ink: var(--dsw-alias-label-primary, #1f2329);
  --ip-ink2: var(--dsw-alias-label-secondary, #4e5969);
  --ip-ink3: var(--dsw-alias-label-tertiary, #7a828e);
  --ip-ink4: var(--dsw-alias-label-caption, #a9aeb8);
  --ip-invert: var(--dsw-alias-label-primary-inverted, #ffffff);
  --ip-primary: var(--dsw-alias-button-primary-fill, #4c7dff);
  --ip-primary-hover: var(--dsw-alias-button-primary-hover, #3d6ae0);
  --ip-line: var(--dsw-alias-border-l2, rgba(31, 35, 41, 0.1));
  --ip-line-strong: var(--dsw-alias-border-l4, rgba(31, 35, 41, 0.18));
  --ip-hover: var(--dsw-alias-interactive-bg-hover, rgba(31, 35, 41, 0.05));
  --ip-active: var(--dsw-alias-interactive-bg-active, rgba(31, 35, 41, 0.09));
  --ip-bg: var(--dsw-alias-bg-base, #ffffff);
  --ip-card: var(--dsw-alias-bg-layer-2, #ffffff);
  --ip-layer: var(--dsw-alias-bg-layer-1, #f7f8fa);
  --ip-mask: var(--dsw-alias-bg-mask-1, rgba(15, 20, 30, 0.42));
  --ip-link: var(--dsw-alias-link, #4c7dff);
  --ip-danger: var(--dsw-alias-danger, #d92d20);
  --ip-business: var(--dsw-alias-state-business-primary, #4c7dff);
  --ip-success: var(--dsw-alias-state-success-primary, #16a34a);
  --ip-warn: var(--dsw-alias-state-warn-primary, #d97706);
  --ip-error: var(--dsw-alias-state-error-primary, #d92d20);
  --ip-shadow: var(--dsw-elevation-soft, 0 1px 2px rgba(15, 20, 30, 0.06));
  --ip-shadow-panel: var(--dsw-elevation-panel, 0 16px 40px rgba(15, 20, 30, 0.18));
  --ip-r-xs: var(--dsw-radius-xs, 4px);
  --ip-r-sm: var(--dsw-radius-sm, 8px);
  --ip-r-md: var(--dsw-radius-md, 12px);
  --ip-r-lg: var(--dsw-radius-lg, 16px);
  --ip-r-xl: var(--dsw-radius-xl, 20px);
  --ip-font: var(--dsw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif);
  --ip-mono: var(--dsw-font-mono, ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace);

  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--ip-bg);
  color: var(--ip-ink);
  font-family: var(--ip-font);
  font-size: 14px;
  line-height: 22px;
  -webkit-font-smoothing: antialiased;
}
.ip-root *,
.ip-root *::before,
.ip-root *::after { box-sizing: border-box; }
:where(.ip-root) button { font: inherit; color: inherit; background: none; border: 0; padding: 0; cursor: pointer; text-align: left; }
:where(.ip-root) button:disabled { cursor: default; opacity: 0.55; }
:where(.ip-root) :is(h1, h2, h3, p) { margin: 0; padding: 0; }
:where(.ip-root) :is(input, textarea, select) { font: inherit; color: inherit; }
:where(.ip-root) :is(ul, ol) { margin: 0; padding: 0; list-style: none; }
.ip-root :focus-visible { outline: 2px solid var(--ip-link); outline-offset: 2px; }
.ip-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }

/* ---------- \u9876\u680F ---------- */
.ip-topbar {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px 8px;
  min-width: 0;
}
.ip-brand { display: flex; align-items: center; gap: 9px; min-width: 0; flex: none; }
.ip-brand-mark {
  width: 30px; height: 30px; flex: none;
  display: grid; place-items: center;
  border-radius: 10px;
  color: var(--ip-primary);
  background: color-mix(in srgb, var(--ip-primary) 13%, transparent);
}
.ip-title { font-size: 15px; font-weight: 650; letter-spacing: 0.2px; white-space: nowrap; }
.ip-mode {
  display: inline-flex; align-items: center; gap: 5px;
  height: 21px; padding: 0 8px;
  border-radius: 999px;
  border: 1px solid var(--ip-line);
  color: var(--ip-ink3);
  font-size: 11.5px;
  line-height: 21px;
  white-space: nowrap;
}
.ip-mode i { width: 6px; height: 6px; border-radius: 50%; background: var(--ip-success); }
.ip-topbar-spacer { flex: 1; min-width: 4px; }
.ip-search { position: relative; display: flex; align-items: center; width: min(320px, 40%); min-width: 120px; }
.ip-search-icon { position: absolute; left: 10px; color: var(--ip-ink3); pointer-events: none; display: inline-flex; }
.ip-search input {
  width: 100%; height: 32px;
  padding: 0 28px 0 31px;
  border-radius: 10px;
  border: 1px solid var(--ip-line);
  background: var(--ip-layer);
  color: var(--ip-ink);
  font-size: 13px;
  transition: border-color 0.16s ease, background 0.16s ease;
}
.ip-search input::placeholder { color: var(--ip-ink4); }
.ip-search input:focus { outline: none; border-color: color-mix(in srgb, var(--ip-primary) 55%, var(--ip-line)); background: var(--ip-card); }
.ip-search-clear { position: absolute; right: 5px; display: inline-flex; }

/* ---------- \u5F55\u5165\u6761 ---------- */
.ip-capture {
  flex: none;
  margin: 2px 18px 8px;
  border: 1px solid var(--ip-line);
  border-radius: var(--ip-r-lg);
  background: var(--ip-card);
  box-shadow: var(--ip-shadow);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.ip-capture.is-focused { border-color: color-mix(in srgb, var(--ip-primary) 50%, var(--ip-line)); }
.ip-capture.is-highlight { border-color: color-mix(in srgb, var(--ip-primary) 40%, var(--ip-line)); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ip-primary) 10%, transparent); }
.ip-capture-main { display: flex; align-items: flex-end; gap: 10px; padding: 10px 12px; }
.ip-capture-input {
  flex: 1; min-width: 0;
  display: block;
  border: 0; outline: none; resize: none;
  background: transparent;
  min-height: 46px; max-height: 208px;
  padding: 5px 2px;
  font-size: 14px; line-height: 22px;
  color: var(--ip-ink);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--ip-line-strong) transparent;
}
.ip-capture-input::placeholder { color: var(--ip-ink4); }
.ip-capture-side { display: flex; align-items: center; gap: 8px; padding-bottom: 3px; flex: none; }
.ip-cmdhint { font-size: 11.5px; color: var(--ip-ink4); white-space: nowrap; }
.ip-capture-toggle {
  display: inline-flex; align-items: center; gap: 4px;
  height: 26px; padding: 0 8px;
  border-radius: var(--ip-r-sm);
  color: var(--ip-ink3); font-size: 12px;
}
.ip-capture-toggle:hover { background: var(--ip-hover); color: var(--ip-ink); }
.ip-capture-toggle svg { transition: transform 0.18s ease; }
.ip-capture-toggle.is-open svg { transform: rotate(180deg); }
.ip-capture-extra {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 10px 12px;
  padding: 2px 12px 12px;
  border-top: 1px dashed var(--ip-line);
  margin-top: 2px;
  padding-top: 12px;
  animation: ip-fade-down 0.16s ease both;
}
.ip-capture-extra .ip-span2 { grid-column: 1 / -1; }
@keyframes ip-fade-down { from { opacity: 0; transform: translateY(-4px); } }

/* ---------- \u9875\u7B7E ---------- */
.ip-tabs { flex: none; display: flex; align-items: center; gap: 3px; padding: 0 16px 8px; overflow-x: auto; scrollbar-width: none; }
.ip-tabs::-webkit-scrollbar { display: none; }
.ip-tab {
  display: inline-flex; align-items: center; gap: 6px;
  height: 30px; padding: 0 10px;
  border-radius: var(--ip-r-sm);
  color: var(--ip-ink2);
  font-size: 13px;
  white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease;
}
.ip-tab:hover { background: var(--ip-hover); color: var(--ip-ink); }
.ip-tab.is-on { background: var(--ip-active); color: var(--ip-ink); font-weight: 600; }
.ip-tab-count { font-size: 11.5px; color: var(--ip-ink3); font-variant-numeric: tabular-nums; line-height: 1; padding: 2px 5px; border-radius: 999px; background: var(--ip-hover); }
.ip-tab.is-on .ip-tab-count { color: var(--ip-ink2); background: color-mix(in srgb, var(--ip-card) 70%, transparent); }

/* ---------- \u4E3B\u4F53\uFF1A\u5BBD\u5C4F\u4E24\u680F / \u7A84\u5C4F\u4E0B\u94BB ---------- */
.ip-body { flex: 1; min-height: 0; display: flex; border-top: 1px solid var(--ip-line); }
.ip-list-pane { flex: 0 0 clamp(304px, 37%, 408px); min-width: 0; display: flex; flex-direction: column; border-right: 1px solid var(--ip-line); }
.ip-detail-pane { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.ip-scroll { flex: 1; min-height: 0; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin; scrollbar-color: var(--ip-line-strong) transparent; }
.ip-scroll::-webkit-scrollbar { width: 8px; }
.ip-scroll::-webkit-scrollbar-thumb { background: var(--ip-line); border-radius: 999px; }
.ip-scroll::-webkit-scrollbar-track { background: transparent; }
.ip-list { display: flex; flex-direction: column; gap: 8px; padding: 12px 14px 18px; }
.ip-list-note { padding: 6px 14px 14px; font-size: 12px; color: var(--ip-ink4); text-align: center; }

/* ---------- \u5217\u8868\u5361\u7247 ---------- */
.ip-card {
  width: 100%;
  display: flex; flex-direction: column; gap: 5px;
  padding: 11px 12px 10px;
  border-radius: var(--ip-r-md);
  border: 1px solid var(--ip-line);
  background: var(--ip-card);
  text-align: left;
  transition: border-color 0.16s ease, background 0.16s ease, box-shadow 0.16s ease;
}
.ip-card:hover { border-color: var(--ip-line-strong); background: color-mix(in srgb, var(--ip-hover) 45%, var(--ip-card)); }
.ip-card.is-on {
  border-color: color-mix(in srgb, var(--ip-primary) 52%, var(--ip-line));
  background: color-mix(in srgb, var(--ip-primary) 6%, var(--ip-card));
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--ip-primary) 22%, transparent);
}
.ip-card-head { display: flex; align-items: center; gap: 8px; min-width: 0; }
.ip-card-no { font-family: var(--ip-mono); font-size: 11.5px; letter-spacing: 0.3px; color: var(--ip-ink3); white-space: nowrap; }
.ip-card-time { margin-left: auto; font-size: 11.5px; color: var(--ip-ink4); white-space: nowrap; }
.ip-card-title { font-size: 13.5px; font-weight: 600; line-height: 20px; color: var(--ip-ink); overflow-wrap: anywhere; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.ip-card-sum { font-size: 12.5px; line-height: 18px; color: var(--ip-ink2); overflow-wrap: anywhere; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.ip-card-foot { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 1px; }
.ip-card-meta { margin-left: auto; font-size: 11.5px; color: var(--ip-ink3); display: inline-flex; align-items: center; gap: 4px; }
.ip-card-meta .ip-sep { color: var(--ip-ink4); }
.ip-tag {
  display: inline-flex; align-items: center;
  height: 19px; padding: 0 7px;
  border-radius: 999px;
  background: var(--ip-hover);
  color: var(--ip-ink2);
  font-size: 11.5px;
  line-height: 19px;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ---------- \u5FBD\u6807 ---------- */
.ip-badge {
  display: inline-flex; align-items: center; gap: 5px;
  height: 20px; padding: 0 8px;
  border-radius: 999px;
  font-size: 11.5px; line-height: 20px;
  white-space: nowrap;
  color: var(--ip-ink2);
  background: var(--ip-hover);
}
.ip-badge .ip-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; display: inline-block; }
.ip-badge.is-pool { color: var(--ip-business); background: color-mix(in srgb, var(--ip-business) 12%, transparent); }
.ip-badge.is-active { color: var(--ip-success); background: color-mix(in srgb, var(--ip-success) 12%, transparent); }
.ip-badge.is-done { color: var(--ip-ink3); background: var(--ip-hover); }
.ip-badge.is-parked { color: var(--ip-warn); background: color-mix(in srgb, var(--ip-warn) 13%, transparent); }
.ip-badge.is-neutral { color: var(--ip-ink3); background: var(--ip-hover); }

/* ---------- \u8BE6\u60C5 ---------- */
.ip-detail { display: flex; flex-direction: column; }
.ip-detail-head { padding: 14px 18px 12px; display: flex; flex-direction: column; gap: 8px; }
.ip-detail-back { display: none; }
.ip-detail-title-row { display: flex; align-items: flex-start; gap: 10px; }
.ip-detail-title { flex: 1; min-width: 0; font-size: 17px; font-weight: 650; line-height: 26px; overflow-wrap: anywhere; }
.ip-detail-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-size: 12px; color: var(--ip-ink3); }
.ip-detail-meta .ip-card-no { font-size: 12px; }
.ip-detail-tags { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.ip-detail-actions { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 2px; }
.ip-detail-actions .ip-spacer { flex: 1; min-width: 8px; }
.ip-status-switch { display: inline-flex; gap: 2px; padding: 3px; border-radius: 10px; background: var(--ip-hover); }
.ip-status-switch button {
  height: 26px; padding: 0 9px;
  border-radius: var(--ip-r-sm);
  color: var(--ip-ink2);
  font-size: 12px;
  white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease;
}
.ip-status-switch button:hover { color: var(--ip-ink); background: color-mix(in srgb, var(--ip-card) 60%, transparent); }
.ip-status-switch button.is-on { background: var(--ip-card); color: var(--ip-ink); font-weight: 600; box-shadow: var(--ip-shadow); }
.ip-detail-body { padding: 0 18px 24px; }
.ip-section { padding: 13px 0 4px; border-top: 1px solid var(--ip-line); }
.ip-section:first-child { border-top: 0; }
.ip-section-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; min-height: 26px; }
.ip-section-title { font-size: 12.5px; font-weight: 650; color: var(--ip-ink2); letter-spacing: 0.2px; }
.ip-section-count { font-size: 11.5px; color: var(--ip-ink4); font-variant-numeric: tabular-nums; }
.ip-section-head .ip-spacer { flex: 1; }
.ip-raw {
  margin: 0;
  padding: 11px 13px;
  border-radius: var(--ip-r-md);
  border: 1px solid var(--ip-line);
  background: var(--ip-layer);
  color: var(--ip-ink);
  font-family: var(--ip-font);
  font-size: 13px;
  line-height: 21px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.ip-summary { font-size: 13.5px; line-height: 22px; color: var(--ip-ink); white-space: pre-wrap; overflow-wrap: anywhere; }
.ip-text { font-size: 13.5px; line-height: 22px; color: var(--ip-ink2); white-space: pre-wrap; overflow-wrap: anywhere; }
.ip-muted { font-size: 12.5px; color: var(--ip-ink4); }

/* \u8FDB\u5C55\u65F6\u95F4\u7EBF */
.ip-timeline { display: flex; flex-direction: column; }
.ip-tl-item { position: relative; margin-left: 4px; padding: 0 0 14px 18px; border-left: 2px solid var(--ip-line-strong); }
.ip-tl-item:last-child { border-left-color: transparent; padding-bottom: 2px; }
.ip-tl-item::before {
  content: '';
  position: absolute; left: -5px; top: 5px;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--ip-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ip-primary) 14%, transparent);
}
.ip-tl-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 3px; font-size: 11.5px; color: var(--ip-ink3); }
.ip-tl-time { font-variant-numeric: tabular-nums; }
.ip-src {
  display: inline-flex; align-items: center; gap: 3px;
  height: 18px; padding: 0 6px;
  border-radius: 6px;
  background: var(--ip-hover);
  color: var(--ip-ink3);
  font-size: 11px; line-height: 18px;
}
.ip-tl-content { font-size: 13.5px; line-height: 21px; color: var(--ip-ink); white-space: pre-wrap; overflow-wrap: anywhere; }
.ip-tl-content.is-clamped { display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical; overflow: hidden; }
.ip-tl-toggle { margin-top: 3px; font-size: 11.5px; color: var(--ip-link); }
.ip-tl-toggle:hover { text-decoration: underline; }

/* \u4EA7\u51FA */
.ip-links li { display: flex; align-items: center; gap: 8px; padding: 8px 0; border-bottom: 1px dashed var(--ip-line); font-size: 13px; min-width: 0; }
.ip-links li:last-child { border-bottom: 0; }
.ip-links a { color: var(--ip-link); text-decoration: none; overflow-wrap: anywhere; min-width: 0; }
.ip-links a:hover { text-decoration: underline; }
.ip-link-kind { flex: none; font-size: 11px; color: var(--ip-ink3); background: var(--ip-hover); border-radius: 5px; padding: 1px 6px; }
.ip-link-icon { flex: none; color: var(--ip-ink4); display: inline-flex; }

/* \u5185\u8054\u8868\u5355\u5757 */
.ip-abox { margin-top: 10px; padding: 12px; border-radius: var(--ip-r-md); border: 1px dashed var(--ip-line-strong); background: color-mix(in srgb, var(--ip-primary) 3%, var(--ip-card)); display: flex; flex-direction: column; gap: 10px; }
.ip-abox-foot { display: flex; align-items: center; gap: 8px; }
.ip-abox-foot .ip-spacer { flex: 1; }

/* ---------- \u6309\u94AE ---------- */
.ip-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  height: 32px; padding: 0 13px;
  border-radius: var(--ip-r-sm);
  border: 1px solid var(--ip-line);
  background: var(--ip-card);
  color: var(--ip-ink);
  font-size: 13px;
  white-space: nowrap;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}
.ip-btn:hover { background: var(--ip-hover); border-color: var(--ip-line-strong); }
.ip-btn.is-sm { height: 27px; padding: 0 10px; font-size: 12px; border-radius: 7px; gap: 5px; }
.ip-btn.is-primary { background: var(--ip-primary); border-color: transparent; color: var(--ip-invert); }
.ip-btn.is-primary:hover { background: var(--ip-primary-hover); border-color: transparent; }
.ip-btn.is-ghost { border-color: transparent; background: transparent; color: var(--ip-ink2); }
.ip-btn.is-ghost:hover { background: var(--ip-hover); color: var(--ip-ink); }
.ip-btn.is-danger { color: var(--ip-danger); border-color: color-mix(in srgb, var(--ip-danger) 40%, var(--ip-line)); }
.ip-btn.is-danger:hover { background: color-mix(in srgb, var(--ip-danger) 8%, transparent); border-color: color-mix(in srgb, var(--ip-danger) 60%, var(--ip-line)); }
.ip-btn.is-danger-solid { background: var(--ip-danger); border-color: transparent; color: var(--ip-invert); }
.ip-btn.is-danger-solid:hover { opacity: 0.9; border-color: transparent; }
.ip-iconbtn {
  display: inline-grid; place-items: center;
  width: 30px; height: 30px;
  border-radius: var(--ip-r-sm);
  color: var(--ip-ink2);
  transition: background 0.15s ease, color 0.15s ease;
}
.ip-iconbtn:hover { background: var(--ip-hover); color: var(--ip-ink); }
.ip-iconbtn.is-on { background: var(--ip-active); color: var(--ip-ink); }
.ip-iconbtn:disabled:hover { background: transparent; color: var(--ip-ink2); }
.ip-search-clear .ip-iconbtn { width: 24px; height: 24px; }

/* ---------- \u8868\u5355 ---------- */
.ip-field { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
.ip-field-label { font-size: 12px; color: var(--ip-ink3); }
.ip-field-hint { font-size: 11.5px; color: var(--ip-ink4); line-height: 17px; }
.ip-root :is(.ip-field input, .ip-field textarea, .ip-field select) {
  width: 100%;
  border: 1px solid var(--ip-line);
  border-radius: var(--ip-r-sm);
  background: var(--ip-layer);
  color: var(--ip-ink);
  font-size: 13px;
  line-height: 20px;
  padding: 7px 10px;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.ip-root .ip-field textarea { resize: vertical; min-height: 62px; }
.ip-root :is(.ip-field input, .ip-field textarea, .ip-field select)::placeholder { color: var(--ip-ink4); }
.ip-root :is(.ip-field input, .ip-field textarea, .ip-field select):focus {
  outline: none;
  border-color: color-mix(in srgb, var(--ip-primary) 55%, var(--ip-line));
  background: var(--ip-card);
}
.ip-dialog-code {
  display: block;
  padding: 9px 11px;
  border-radius: var(--ip-r-sm);
  border: 1px solid var(--ip-line);
  background: var(--ip-layer);
  font-family: var(--ip-mono);
  font-size: 12px;
  line-height: 18px;
  color: var(--ip-ink2);
  overflow-wrap: anywhere;
  user-select: text;
}
.ip-dialog-rows { display: flex; flex-direction: column; gap: 14px; }
.ip-dialog-row { display: flex; align-items: flex-start; gap: 10px; }
.ip-dialog-row-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.ip-dialog-row-label { font-size: 12px; color: var(--ip-ink3); flex: none; width: 76px; padding-top: 2px; }
.ip-dialog-note { font-size: 12px; line-height: 19px; color: var(--ip-ink3); }
.ip-dialog-note b { color: var(--ip-ink2); font-weight: 600; }
.ip-inline-row { display: flex; align-items: center; gap: 8px; min-width: 0; }
.ip-inline-input {
  flex: 1; min-width: 0; height: 32px;
  padding: 0 10px;
  border: 1px solid var(--ip-line);
  border-radius: var(--ip-r-sm);
  background: var(--ip-layer);
  color: var(--ip-ink);
  font-size: 13px;
}
.ip-inline-input::placeholder { color: var(--ip-ink4); }
.ip-inline-input:focus { outline: none; border-color: color-mix(in srgb, var(--ip-primary) 55%, var(--ip-line)); background: var(--ip-card); }

/* ---------- \u5BF9\u8BDD\u6846 ---------- */
.ip-dialog-mask {
  position: absolute; inset: 0; z-index: 90;
  display: flex; align-items: center; justify-content: center;
  padding: 18px;
  background: var(--ip-mask);
  animation: ip-fade 0.16s ease both;
}
.ip-dialog {
  width: 100%; max-width: calc(100% - 4px); max-height: 88%;
  display: flex; flex-direction: column;
  border-radius: var(--ip-r-lg);
  border: 1px solid var(--ip-line);
  background: var(--ip-card);
  box-shadow: var(--ip-shadow-panel);
  animation: ip-pop 0.18s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  overflow: hidden;
}
.ip-dialog-head { flex: none; display: flex; align-items: center; gap: 8px; padding: 14px 16px 10px; }
.ip-dialog-head h2 { flex: 1; font-size: 15px; font-weight: 650; line-height: 22px; }
.ip-dialog-body { flex: 1; min-height: 0; overflow-y: auto; padding: 4px 16px 16px; scrollbar-width: thin; scrollbar-color: var(--ip-line-strong) transparent; }
.ip-dialog-foot { flex: none; display: flex; align-items: center; gap: 8px; padding: 12px 16px; border-top: 1px solid var(--ip-line); background: color-mix(in srgb, var(--ip-layer) 60%, var(--ip-card)); }
.ip-dialog-foot .ip-spacer { flex: 1; }
@keyframes ip-fade { from { opacity: 0; } }
@keyframes ip-pop { from { opacity: 0; transform: translateY(8px) scale(0.985); } }

/* ---------- Toast ---------- */
.ip-toast {
  position: absolute; left: 50%; bottom: 22px; z-index: 120;
  transform: translateX(-50%);
  display: flex; align-items: center; gap: 8px;
  max-width: min(560px, calc(100% - 36px));
  padding: 8px 10px 8px 13px;
  border-radius: var(--ip-r-md);
  border: 1px solid var(--ip-line);
  background: var(--ip-card);
  color: var(--ip-ink);
  box-shadow: var(--ip-shadow-panel);
  font-size: 13px;
  animation: ip-toast-in 0.18s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.ip-toast > svg { flex: none; color: var(--ip-success); }
.ip-toast.is-error > svg { color: var(--ip-error); }
.ip-toast.is-error { border-color: color-mix(in srgb, var(--ip-error) 35%, var(--ip-line)); }
.ip-toast-text { min-width: 0; overflow-wrap: anywhere; }
.ip-toast-close { flex: none; display: inline-grid; place-items: center; width: 22px; height: 22px; border-radius: 6px; color: var(--ip-ink3); }
.ip-toast-close:hover { background: var(--ip-hover); color: var(--ip-ink); }
@keyframes ip-toast-in { from { opacity: 0; transform: translate(-50%, 8px); } }

/* ---------- \u7A7A\u72B6\u6001 / \u52A0\u8F7D ---------- */
.ip-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; text-align: center; padding: 46px 26px; }
.ip-empty-icon { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 16px; color: var(--ip-primary); background: color-mix(in srgb, var(--ip-primary) 10%, transparent); margin-bottom: 2px; }
.ip-empty-title { font-size: 14px; font-weight: 600; color: var(--ip-ink2); }
.ip-empty-hint { font-size: 12.5px; line-height: 19px; color: var(--ip-ink4); max-width: 340px; }
.ip-empty-hint b { color: var(--ip-ink2); font-weight: 600; }
.ip-loading { display: flex; align-items: center; justify-content: center; gap: 10px; color: var(--ip-ink3); font-size: 13px; padding: 48px 20px; }
.ip-spinner { width: 15px; height: 15px; border-radius: 50%; border: 2px solid var(--ip-line-strong); border-top-color: var(--ip-primary); animation: ip-spin 0.8s linear infinite; }
@keyframes ip-spin { to { transform: rotate(360deg); } }
.ip-error-pane { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 52px 24px; text-align: center; }
.ip-error-pane .ip-empty-icon { color: var(--ip-error); background: color-mix(in srgb, var(--ip-error) 10%, transparent); }
.ip-body > .ip-loading,
.ip-body > .ip-error-pane { flex: 1; }

/* ---------- \u7A84\u5C4F\uFF1A\u4E0B\u94BB ---------- */
.ip-root.is-narrow .ip-list-pane { flex: 1; border-right: 0; }
.ip-root.is-narrow .ip-detail-pane { flex: 1; }
.ip-root.is-narrow .ip-detail-back { display: inline-flex; }
.ip-root.is-narrow .ip-topbar { padding: 10px 12px 6px; gap: 6px; flex-wrap: wrap; }
.ip-root.is-narrow .ip-mode { display: none; }
.ip-root.is-narrow .ip-search { order: 5; width: 100%; }
.ip-root.is-narrow .ip-capture { margin: 2px 12px 8px; }
.ip-root.is-narrow .ip-tabs { padding: 0 10px 8px; }
.ip-root.is-narrow .ip-list { padding: 10px 12px 16px; }
.ip-root.is-narrow .ip-detail-head { padding: 10px 14px 10px; }
.ip-root.is-narrow .ip-detail-body { padding: 0 14px 22px; }
.ip-root.is-narrow .ip-capture-extra { grid-template-columns: minmax(0, 1fr); }
.ip-root.is-narrow .ip-capture-side .ip-cmdhint { display: none; }

/* \u5C0F\u5C3A\u5BF8\u7EC6\u8282 */
.ip-root.is-compact .ip-brand-mark { display: none; }
.ip-root.is-compact .ip-title { font-size: 14px; }
.ip-root.is-compact .ip-card-sum { display: none; }

@media (prefers-reduced-motion: reduce) {
  .ip-root *,
  .ip-root *::before,
  .ip-root *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}
`;var ye=W(require("react"),1);var be={\u7075\u611F\u6C60:"Idea Pool",\u672C\u673A\u6A21\u5F0F:"Local mode",\u4E91\u7AEF\u6A21\u5F0F:"Cloud mode",\u641C\u7D22\u60F3\u6CD5:"Search ideas","\u641C\u7D22\u60F3\u6CD5\u2026":"Search ideas\u2026",\u6E05\u7A7A\u641C\u7D22:"Clear search",\u64A4\u9500\u4E0A\u4E00\u6B65:"Undo last step",\u5237\u65B0:"Refresh",\u8BBE\u7F6E:"Settings",\u5173\u95ED:"Close",\u91CD\u8BD5:"Retry",\u5F55\u5165\u7075\u611F:"Capture an idea",\u60F3\u6CD5\u539F\u6587:"Raw idea text","\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60":"Type whatever comes to mind. Enter for a new line, \u2318/Ctrl+Enter to add.","\u2318/Ctrl+Enter \u4FDD\u5B58":"\u2318/Ctrl+Enter to save",\u66F4\u591A\u9009\u9879:"More options",\u6536\u8D77\u9009\u9879:"Hide options",\u5165\u6C60:"Add","\u4FDD\u5B58\u4E2D\u2026":"Saving\u2026",\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60:"Write something first","\u6807\u9898\uFF08\u53EF\u9009\uFF09":"Title (optional)","\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57":"Leave empty to use the first 40 characters","\u6807\u7B7E\uFF08\u53EF\u9009\uFF09":"Tags (optional)","\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053":"Comma-separated, e.g. research, channels","\u6458\u8981\uFF08\u53EF\u9009\uFF09":"Summary (optional)","\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"One-line summary to scan later",\u72B6\u6001\u7B5B\u9009:"Filter by status",\u5168\u90E8:"All",\u5DF2\u5165\u6C60:"Pool",\u63A8\u8FDB\u4E2D:"In progress",\u5DF2\u6536\u53E3:"Done",\u6401\u7F6E:"Parked",\u5207\u6362\u72B6\u6001:"Change status","\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D":"Status changed to \u201C{label}\u201D","1 \u6761\u8FDB\u5C55":"1 update","{n} \u6761\u8FDB\u5C55":"{n} updates","1 \u4E2A\u4EA7\u51FA":"1 output","{n} \u4E2A\u4EA7\u51FA":"{n} outputs","\u6B63\u5728\u52A0\u8F7D\u2026":"Loading\u2026","\u6B63\u5728\u5237\u65B0\u2026":"Refreshing\u2026","\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026":"Loading the idea pool\u2026",\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25:"Failed to load the idea pool",\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684:"The idea pool is empty",\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5:"No matching ideas","\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002":"Try another keyword or status.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add. In local mode the data stays on this machine.",\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5:"Select an idea","\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002":"The list is on the left. On wide screens, click a card to read its raw text, progress and outputs.","\u6B63\u5728\u5C55\u5F00\u2026":"Loading\u2026",\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25:"Failed to load this idea",\u8FD4\u56DE\u5217\u8868:"Back to list",\u539F\u6587:"Raw text","\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB":"Verbatim \xB7 read-only",\u590D\u5236\u539F\u6587:"Copy raw text",\u5DF2\u590D\u5236\u539F\u6587:"Raw text copied",\u6458\u8981:"Summary",\u5907\u6CE8:"Note","\u6765\u6E90\uFF1A{source}":"Source: {source}","\u521B\u5EFA {time}":"Created {time}","\u66F4\u65B0 {time}":"Updated {time}",\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Copy expand prompt",\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Expand prompt copied",\u590D\u5236\u5F15\u7528:"Copy reference",\u5DF2\u590D\u5236\u5F15\u7528:"Reference copied",\u7F16\u8F91:"Edit",\u5220\u9664:"Delete",\u5173\u8054\u4EA7\u51FA:"Outputs",\u52A0\u4EA7\u51FA:"Add output","\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002":"No outputs yet \u2014 attach result links once there is progress.",\u4EA7\u51FA\u6807\u9898:"Output title","\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55":"e.g. research report / progress log",\u94FE\u63A5:"Link","\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934":"The link must start with http(s)://",\u5148\u586B\u94FE\u63A5:"Fill in a link first",\u4FDD\u5B58\u4EA7\u51FA:"Save output",\u8FDB\u5C55:"Progress",\u52A0\u8FDB\u5C55:"Add progress","\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002":"No progress entries yet.",\u65B0\u589E\u8FDB\u5C55:"New progress entry","\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026":"Log progress (conclusion / research status / next step)\u2026",\u5148\u5199\u70B9\u5185\u5BB9:"Write something first","\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B":"Entries are append-only; note the machine and next step for cross-machine handoff",\u8BB0\u5F55\u8FDB\u5C55:"Save progress",\u5C55\u5F00\u5168\u90E8:"Show all",\u6536\u8D77:"Collapse",\u6587\u6863:"Doc","\uFF08\u65E0\u539F\u6587\uFF09":"(no raw text)",\u7F16\u8F91\u60F3\u6CD5:"Edit idea",\u6807\u9898:"Title","\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09":"Raw text (keep verbatim)",\u6807\u7B7E:"Tags",\u9017\u53F7\u5206\u9694:"Comma-separated","\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883":"Note / context",\u53D6\u6D88:"Cancel",\u4FDD\u5B58:"Save",\u5DF2\u4FDD\u5B58:"Saved",\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A:"Title can\u2019t be empty",\u5220\u9664\u60F3\u6CD5:"Delete idea","\u5220\u9664\u4E2D\u2026":"Deleting\u2026",\u786E\u8BA4\u5220\u9664:"Delete","\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002":"Deleting \u201C{title}\u201D ({no}) also removes its progress and outputs.",\u5B8C\u6210:"Done",\u5B58\u50A8\u8DEF\u5F84:"Storage path",\u672A\u77E5:"Unknown","\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002":"In local mode every idea lives in this one JSON file; deleting it clears the idea pool.",\u8FD0\u884C\u6A21\u5F0F:"Run mode","\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002\u4E91\u7AEF\u6A21\u5F0F\u540E\u7EED\u7248\u672C\u5F00\u653E\u3002":"Local mode: data lives under this machine\u2019s DSH_HOME/idea-pool/ and is read and written directly by the plugin, with no network. Other machines can\u2019t see it. Cloud mode comes in a later version.",\u8BBE\u5907\u6807\u8BC6:"Device ID","\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"Written into the source field of ideas and progress entries so the origin can be located across machines.",\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A:"Device ID can\u2019t be empty",\u5BFC\u51FA:"Export","\u5BFC\u51FA JSON":"Export JSON","\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002":"Export all ideas, progress and outputs into a single JSON file for backup or migration.","\u5DF2\u5BFC\u51FA JSON":"JSON exported",\u521A\u521A:"just now","{n} \u5206\u949F\u524D":"{n} min ago",\u672C\u673A:"Local",\u706B\u5C71\u4E91:"Volcano Cloud",\u624B\u52A8:"Manual",\u7F51\u9875:"Web",\u98DE\u4E66:"Feishu",\u5DF2\u590D\u5236:"Copied","\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236":"Copy failed \u2014 select and copy manually","\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}":"Can\u2019t reach the local service: {error}","\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09":"Request failed ({status})","\u5DF2\u5165\u6C60 {no}":"Added {no}","\u5DF2\u5220\u9664 {no}":"Deleted {no}",\u5DF2\u8BB0\u5F55\u8FDB\u5C55:"Progress saved",\u5DF2\u6DFB\u52A0\u4EA7\u51FA:"Output added",\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65:"Undid the last step","\u5DF2\u64A4\u9500\uFF1A{label}":"Undone: {label}",\u5DF2\u5237\u65B0:"Refreshed",\u8BBE\u7F6E\u5DF2\u4FDD\u5B58:"Settings saved"};var R=we(),ee=new Set;function we(){return typeof document>"u"||(document.documentElement.lang||navigator.language||"zh").toLowerCase().startsWith("zh")?"zh":"en"}function ai(){ee.forEach(e=>{try{e()}catch(t){console.error("[idea-pool] lang listener failed",t)}})}typeof document<"u"&&typeof MutationObserver<"u"&&new MutationObserver(()=>{let e=we();e!==R&&(R=e,ai())}).observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function ke(){return R}function ie(e){return ee.add(e),()=>ee.delete(e)}function Ne(){return ye.default.useSyncExternalStore(ie,ke)}function a(e,t){let r=ke()==="en"?be[e]??e:e;return t?r.replace(/\{(\w+)\}/g,(n,o)=>t[o]===void 0?n:String(t[o])):r}var ze=W(require("react"),1);var ri="idea-pool/",ni=500;function oi(){return{all:0,pool:0,active:0,done:0,parked:0}}var b={booted:!1,loading:!0,error:null,mode:"local",device:"",storagePath:"",canUndo:!1,counts:oi(),total:0,status:"all",query:"",ideas:[],listLoading:!1,selectedNo:null,detail:null,detailLoading:!1,detailError:null,settings:null,settingsLoading:!1,toast:null},re=new Set;function y(e){b={...b,...typeof e=="function"?e(b):e},re.forEach(t=>{try{t()}catch(r){console.error("[idea-pool] store listener failed",r)}})}function si(e){return re.add(e),()=>re.delete(e)}function x(e){return ze.default.useSyncExternalStore(si,()=>e(b))}var ne=null;function k(e,{error:t=!1,duration:r=0}={}){clearTimeout(ne);let n=Date.now()+Math.random();y({toast:{id:n,text:e,error:t}}),ne=setTimeout(()=>{b.toast&&b.toast.id===n&&y({toast:null})},r||(t?6e3:3200))}function Ce(){clearTimeout(ne),y({toast:null})}function E(e){k(e&&e.message||String(e),{error:!0})}async function M(e,t){let r={credentials:"same-origin",...t||{}},n;try{n=await fetch(ri+e,r)}catch(d){throw new Error(a("\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}",{error:d&&d.message||String(d)}))}let o=null;try{o=await n.json()}catch{o=null}if(!n.ok||o&&o.ok===!1)throw new Error(o&&o.error||a("\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09",{status:n.status}));return o||{}}function U(e,t){return{method:e,headers:{"content-type":"application/json"},body:JSON.stringify(t??{})}}function A(e){let t=Number(e);return Number.isFinite(t)&&t>0?Math.floor(t):0}function Ee(e,t){let r=e&&typeof e=="object"?e:{},n={pool:A(r.pool),active:A(r.active),done:A(r.done),parked:A(r.parked)},o=n.pool+n.active+n.done+n.parked;return n.all=A(r.all)||A(r.total)||A(t)||o,n}function Me(e){if(!e||typeof e!="object")return;let t={mode:typeof e.mode=="string"?e.mode:b.mode,canUndo:!!e.canUndo,counts:Ee(e.counts,e.total),total:A(e.total)};typeof e.device=="string"&&(t.device=e.device),typeof e.storagePath=="string"&&(t.storagePath=e.storagePath),y(t)}async function j(){let e=await M("api/state");return Me(e),e}var te=0;async function I(){let e=++te,t=new URLSearchParams;b.status!=="all"&&t.set("status",b.status);let r=b.query.trim();r&&t.set("q",r),t.set("limit",String(ni)),t.set("offset","0"),y({listLoading:!0});try{let n=await M("api/ideas?"+t.toString());if(e!==te)return;let o=Array.isArray(n.ideas)?n.ideas:[];y({ideas:o,listLoading:!1,counts:Ee(n.counts,n.total),total:A(n.total)||o.length,error:null})}catch(n){throw e===te&&y({listLoading:!1}),n}}var ae=0;async function oe(e){let t=++ae;y({detailLoading:!0,detailError:null});try{let r=await M("api/ideas/"+encodeURIComponent(e));return t!==ae||y({detail:r,detailLoading:!1,detailError:null}),r}catch(r){throw t===ae&&y({detailLoading:!1,detailError:r.message}),r}}async function Le(){let e=b.selectedNo;if(e)try{await oe(e)}catch{y({selectedNo:null,detail:null,detailError:null})}}async function H({withDetail:e=!1}={}){let t=[j(),I()];e&&b.selectedNo&&t.push(oe(b.selectedNo)),await Promise.allSettled(t)}var P=null;function se(){return P?(b.booted&&Promise.allSettled([j(),I()]),P):(P=(async()=>{y({loading:!0,error:null});try{await Promise.all([j(),I()]),y({booted:!0,loading:!1})}catch(e){y({loading:!1,error:e.message})}})(),P)}function Te(){return P=null,se()}async function De({quiet:e=!1}={}){try{await Promise.all([j(),I()]),await Le(),e||k(a("\u5DF2\u5237\u65B0"))}catch(t){E(t)}}var Se=null;function Be(e){b.status!==e&&(y({status:e,selectedNo:null,detail:null,detailError:null}),I().catch(E))}function le(e){y({query:e,selectedNo:null,detail:null,detailError:null}),clearTimeout(Se),Se=setTimeout(()=>{I().catch(E)},220)}function Y(e){if(!e){y({selectedNo:null,detail:null,detailError:null});return}if(b.selectedNo===e&&b.detail)return;let t=b.selectedNo===e?b.detail:null;y({selectedNo:e,detail:t,detailLoading:!0,detailError:null}),oe(e).catch(E)}function pe(){y({selectedNo:null,detail:null,detailError:null})}async function _e(e){try{let t={...e};!t.source&&b.device&&(t.source=b.device);let n=(await M("api/ideas",U("POST",t))).idea||null;return await H(),k(a("\u5DF2\u5165\u6C60 {no}",{no:n?n.idea_no:""}).trim()),n}catch(t){return E(t),null}}async function de(e,t,r){try{let n=await M("api/ideas/"+encodeURIComponent(e),U("PATCH",t));return await H({withDetail:!0}),r&&k(r),n.idea||null}catch(n){return E(n),null}}async function Oe(e){try{return await M("api/ideas/"+encodeURIComponent(e),{method:"DELETE"}),b.selectedNo===e&&y({selectedNo:null,detail:null,detailError:null}),await H(),k(a("\u5DF2\u5220\u9664 {no}",{no:e})),!0}catch(t){return E(t),!1}}async function $e(e,t){try{let r={content:t};return b.device&&(r.source=b.device),await M("api/ideas/"+encodeURIComponent(e)+"/updates",U("POST",r)),await H({withDetail:!0}),k(a("\u5DF2\u8BB0\u5F55\u8FDB\u5C55")),!0}catch(r){return E(r),!1}}async function Ae(e,{title:t,url:r}){try{return await M("api/ideas/"+encodeURIComponent(e)+"/links",U("POST",{title:t,url:r})),await H({withDetail:!0}),k(a("\u5DF2\u6DFB\u52A0\u4EA7\u51FA")),!0}catch(n){return E(n),!1}}async function ce(){try{let e=await M("api/undo",U("POST",{}));e.state&&Me(e.state),await Promise.allSettled([I(),Le()]);let t=typeof e.label=="string"?e.label.trim():"";return k(t?a("\u5DF2\u64A4\u9500\uFF1A{label}",{label:t}):a("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")),!0}catch(e){return E(e),!1}}async function Fe(){y({settingsLoading:!0});try{let e=await M("api/settings");return y({settings:e.settings||null,settingsLoading:!1}),e.settings||null}catch(e){return y({settingsLoading:!1}),E(e),null}}async function Ie(e){try{let t=await M("api/settings",U("POST",{device:e}));return y({settings:t.settings||b.settings}),await j(),k(a("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58")),!0}catch(t){return E(t),!1}}function li(){let e=new Date,t=r=>String(r).padStart(2,"0");return`${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}`}function pi(e,t){let r=new Blob([t],{type:"application/json;charset=utf-8"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=e,o.style.display="none",document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function Ue(){try{let e=await M("api/export"),t=e&&e.data?e.data:e;return pi(`idea-pool-${li()}.json`,JSON.stringify(t,null,2)),k(a("\u5DF2\u5BFC\u51FA JSON")),!0}catch(e){return E(e),!1}}var u=W(require("react"),1);var di={bulb:"M12 3a6 6 0 0 1 3.5 10.9c-.9.6-1.5 1.5-1.5 2.5v.6h-4v-.6c0-1-.6-1.9-1.5-2.5A6 6 0 0 1 12 3zM10 20h4M12 7.5v3.5",note:"M6 4h8l4 4v12H6zM14 4v4h4M9 12h6M9 16h6",settings:"M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",undo:"M8 6L4 10l4 4M4 10h10a5 5 0 0 1 0 10h-3",refresh:"M19 8a8 8 0 0 0-14-1L4 9M5 16a8 8 0 0 0 14 1l1-2M4 4v5h5M20 20v-5h-5",search:"M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",close:"M6 6l12 12M18 6L6 18",check:"M5 12.5l4.5 4.5L19 7",chevD:"M6 9.5l6 6 6-6",chevL:"M14.5 5.5L8 12l6.5 6.5",chevR:"M9.5 5.5L16 12l-6.5 6.5",plus:"M12 5v14M5 12h14",edit:"M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",trash:"M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",copy:"M9 9h10v11H9zM5 15V4h10",link:"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",upRight:"M7 17L17 7M8 7h9v9",monitor:"M4 5h16v11H4zM9 20h6M12 16v4",clock:"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l2.5 1.5",download:"M12 4v11M7 11l5 5 5-5M5 20h14",alert:"M12 4l9 16H3zM12 10v4M12 17.5h.01",folder:"M4 7h6l2 2h10v10H4z",tag:"M4 5h8l8 8-6 6-8-8zM8 8.5h.01",spark:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",dot:"M12 12h.01"};function z({name:e,size:t=16,stroke:r=1.6,className:n=""}){let o=di[e];return o?u.default.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},u.default.createElement("path",{d:o})):null}function F({icon:e,label:t,onClick:r,disabled:n,active:o,size:d=16,className:p="",...s}){return u.default.createElement("button",{type:"button",className:`ip-iconbtn ${o?"is-on":""} ${p}`,"aria-label":t,title:t,onClick:r,disabled:n,...s},u.default.createElement(z,{name:e,size:d}))}function N({variant:e="plain",size:t="md",icon:r,children:n,className:o="",title:d,...p}){return u.default.createElement("button",{type:"button",className:`ip-btn is-${e} is-${t} ${o}`,title:d,...p},r?u.default.createElement(z,{name:r,size:t==="sm"?13:15}):null,n?u.default.createElement("span",null,n):null)}function ue({tone:e="neutral",children:t,title:r,className:n=""}){return u.default.createElement("span",{className:`ip-badge is-${e} ${n}`,title:r},t)}function me({status:e,children:t}){return u.default.createElement(ue,{tone:e==="pool"||e==="active"||e==="done"||e==="parked"?e:"neutral"},u.default.createElement("i",{className:"ip-dot","aria-hidden":"true"}),t)}function ge({children:e}){return u.default.createElement("span",{className:"ip-tag"},e)}function L({label:e,hint:t,children:r}){return u.default.createElement("label",{className:"ip-field"},u.default.createElement("span",{className:"ip-field-label"},e),r,t?u.default.createElement("small",{className:"ip-field-hint"},t):null)}function V({title:e,onClose:t,children:r,footer:n,width:o=460}){let d=u.default.useRef(null),p=u.default.useRef(t);return p.current=t,u.default.useEffect(()=>{let s=f=>{f.key==="Escape"&&(f.preventDefault(),f.stopPropagation(),p.current())};window.addEventListener("keydown",s,!0);let g=d.current,c=g&&(g.querySelector("textarea, input, select")||g.querySelector("button"));return c&&c.focus(),()=>window.removeEventListener("keydown",s,!0)},[]),u.default.createElement("div",{className:"ip-dialog-mask",onPointerDown:s=>{s.target===s.currentTarget&&t()}},u.default.createElement("div",{className:"ip-dialog",role:"dialog","aria-modal":"true","aria-label":e,style:{width:o},ref:d},u.default.createElement("div",{className:"ip-dialog-head"},u.default.createElement("h2",null,e),u.default.createElement(F,{icon:"close",label:a("\u5173\u95ED"),onClick:t})),u.default.createElement("div",{className:"ip-dialog-body"},r),n?u.default.createElement("div",{className:"ip-dialog-foot"},n):null))}function je(){let e=x(t=>t.toast);return e?u.default.createElement("div",{key:e.id,className:`ip-toast ${e.error?"is-error":""}`,role:e.error?"alert":"status"},u.default.createElement(z,{name:e.error?"alert":"check",size:14}),u.default.createElement("span",{className:"ip-toast-text"},e.text),u.default.createElement("button",{type:"button",className:"ip-toast-close","aria-label":a("\u5173\u95ED"),onClick:Ce},u.default.createElement(z,{name:"close",size:12}))):null}function fe({icon:e="bulb",title:t,hint:r,children:n}){return u.default.createElement("div",{className:"ip-empty"},u.default.createElement("span",{className:"ip-empty-icon"},u.default.createElement(z,{name:e,size:26})),u.default.createElement("p",{className:"ip-empty-title"},t),r?u.default.createElement("p",{className:"ip-empty-hint"},r):null,n)}function G({label:e}){return u.default.createElement("div",{className:"ip-loading",role:"status"},u.default.createElement("span",{className:"ip-spinner","aria-hidden":"true"}),u.default.createElement("span",null,e))}function Pe(e){let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0",document.body.appendChild(t),t.select();try{document.execCommand("copy")}finally{t.remove()}}function X(e,t=a("\u5DF2\u590D\u5236")){let r=()=>k(t),n=()=>k(a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236"),{error:!0});try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(e).then(r,()=>{try{Pe(e),r()}catch{n()}});return}Pe(e),r()}catch{n()}}var He="idea-pool";var Je=["pool","active","done","parked"],Ke={pool:"\u5DF2\u5165\u6C60",active:"\u63A8\u8FDB\u4E2D",done:"\u5DF2\u6536\u53E3",parked:"\u6401\u7F6E"},ci=[{key:"all",label:"\u5168\u90E8"},...Je.map(e=>({key:e,label:Ke[e]}))],ui={mac:"Mac","dsh-mac":"Mac",win:"Windows","dsh-win":"Windows",dsh:"\u672C\u673A",volcano:"\u706B\u5C71\u4E91",manual:"\u624B\u52A8",web:"\u7F51\u9875",feishu:"\u98DE\u4E66"};function _(e){return String(e).padStart(2,"0")}function xe(e){if(!e)return"";let t=new Date(e);return Number.isNaN(t.getTime())?String(e):`${t.getFullYear()}-${_(t.getMonth()+1)}-${_(t.getDate())} ${_(t.getHours())}:${_(t.getMinutes())}`}function mi(e){if(!e)return"";let t=new Date(e);if(Number.isNaN(t.getTime()))return String(e);let r=Date.now()-t.getTime();if(r>=0&&r<60*1e3)return a("\u521A\u521A");if(r>=0&&r<3600*1e3)return a("{n} \u5206\u949F\u524D",{n:Math.floor(r/6e4)});let n=new Date,o=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime();return t.getTime()>=o?`${_(t.getHours())}:${_(t.getMinutes())}`:t.getFullYear()===n.getFullYear()?`${_(t.getMonth()+1)}-${_(t.getDate())}`:`${t.getFullYear()}-${_(t.getMonth()+1)}-${_(t.getDate())}`}function We(e){if(!e)return"";let t=String(e).toLowerCase();return a(ui[t]||String(e))}function Q(e){return a(Ke[e]||e||"")}function gi(e){let t=String(e||"").trim();return!t||/^(javascript|data|vbscript):/i.test(t)?"#":t}function q(e){return String(e&&e.title||"").replace(/\s+/g," ").trim()||e&&e.idea_no||""}function Ye(e){return String(e||"").split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function qe(e,t,r){return a(e===1?t:r,{n:e})}function fi(e){let t=e.idea_no,r=q(e);return"\u8BF7\u5C55\u5F00\u63A8\u8FDB\u7075\u611F\u6C60 "+t+"\u300A"+r+`\u300B\u3002

\u3010\u7EE7\u627F\u8FDB\u5EA6\xB7\u9632\u91CD\u590D\u3011\u5148\u8BFB\u60F3\u6CD5\u8BE6\u60C5\u2014\u2014\u539F\u6587\u3001\u6458\u8981\u3001\u5168\u90E8\u300C\u8FDB\u5C55\u300D\u4E0E\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 get \u52A8\u4F5C\uFF0C\u6216\u8BFB\u672C\u673A /idea-pool/api/ideas/`+t+`\uFF09\u3002
\uFF08\u300C\u8FDB\u5C55\u300D=\u63A5\u529B\u8D26\u672C\uFF1A\u4EE5\u6700\u65B0\u6761\u76EE\u4E3A\u51C6\u7EE7\u627F\uFF0C\u5DF2\u5B8C\u6210\u7684\u4E0D\u91CD\u505A\u2014\u2014\u5305\u62EC\u5176\u4ED6\u673A\u5668\u505A\u8FC7\u7684\uFF09
\u5982\u672C\u60F3\u6CD5\u66FE\u5728\u5176\u4ED6\u673A\u5668/\u4F1A\u8BDD\u63A8\u8FDB\u8FC7\uFF08\u4E0D\u786E\u5B9A\u5C31\u5148\u67E5\uFF09\uFF1A\u5F00\u5DE5\u524D\u5148\u505A\u8DE8\u673A\u67E5\u91CD\uFF08\u68C0\u7D22\u5404\u673A\u4F1A\u8BDD\u5E93\u3001\u5B9A\u65F6\u4EFB\u52A1\u4E0E\u6280\u80FD\uFF09\uFF0C\u5E76\u56DE\u586B\u4E00\u6761\u300C\u5F00\u5DE5\u5BF9\u9F50\u300D\u8FDB\u5C55\uFF08\u672C\u6B21\u8303\u56F4+\u4E0D\u91CD\u505A\u9879\uFF09\u3002
\u3010\u63A8\u8FDB\u8BB0\u5F55\u3011\u5148\u8BFB\u8BB0\u5F55\u6587\u6863\uFF08\u82E5\u6709\uFF09\u5E76\u5728\u5B8C\u6210\u540E\u8FFD\u52A0\u672C\u8F6E\u6761\u76EE\u3002
\u3010\u5148\u6F84\u6E05\u540E\u5F00\u5DE5\u3011\u7EE7\u627F\u68C0\u67E5\u4E4B\u540E\u3001\u52A8\u624B\u4E4B\u524D\uFF1A\u6309 brainstorming \u6F84\u6E05\u671F\u7EAA\u5F8B\u5411\u7528\u6237\u8FFD\u95EE 3~5 \u4E2A\u5173\u952E\u95EE\u9898\u2014\u2014\u53EA\u95EE\u4F1A\u6539\u53D8\u65B9\u5411\u3001\u53EA\u6709\u7528\u6237\u80FD\u7B54\u7684\uFF08\u80FD\u81EA\u67E5\u7684\u5148\u67E5\uFF09\uFF1B\u5C0F\u60F3\u6CD5\u53EF\u5C11\u95EE\uFF1B\u7528\u6237\u8BF4\u300C\u76F4\u63A5\u5C55\u5F00\u300D\u5219\u8DF3\u8FC7\u3002
\u5B8C\u6210\u540E\u56DE\u586B\u300C\u5DF2\u5B8C\u6210/\u672A\u5B8C\u6210/\u4E0B\u4E00\u6B65\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 progress \u52A8\u4F5C\uFF09\uFF1B\u4EA7\u51FA\u53D1\u5E03\u540E\u6302\u5230\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF0C\u7136\u540E\u5F00\u59CB\u7814\u7A76/\u63A8\u8FDB\u3002`}function xi({searchRef:e,onOpenSettings:t}){let r=x(c=>c.mode),n=x(c=>c.device),o=x(c=>c.canUndo),d=x(c=>c.query),[p,s]=i.default.useState(d);i.default.useEffect(()=>{s(d)},[d]);let g=r==="cloud"?a("\u4E91\u7AEF\u6A21\u5F0F"):a("\u672C\u673A\u6A21\u5F0F");return i.default.createElement("header",{className:"ip-topbar","data-window-drag":""},i.default.createElement("div",{className:"ip-brand"},i.default.createElement("span",{className:"ip-brand-mark"},i.default.createElement(z,{name:"bulb",size:17,stroke:1.7})),i.default.createElement("span",{className:"ip-title"},a("\u7075\u611F\u6C60")),i.default.createElement("span",{className:"ip-mode",title:n?`${g} \xB7 ${n}`:g},i.default.createElement("i",{"aria-hidden":"true"}),g)),i.default.createElement("span",{className:"ip-topbar-spacer"}),i.default.createElement("div",{className:"ip-search"},i.default.createElement("span",{className:"ip-search-icon"},i.default.createElement(z,{name:"search",size:14})),i.default.createElement("input",{ref:e,type:"text",value:p,placeholder:a("\u641C\u7D22\u60F3\u6CD5\u2026"),"aria-label":a("\u641C\u7D22\u60F3\u6CD5"),onChange:c=>{s(c.target.value),le(c.target.value)}}),p?i.default.createElement("span",{className:"ip-search-clear"},i.default.createElement(F,{icon:"close",size:12,label:a("\u6E05\u7A7A\u641C\u7D22"),onClick:()=>{s(""),le(""),e.current?.focus()}})):null),o?i.default.createElement(F,{icon:"undo",label:a("\u64A4\u9500\u4E0A\u4E00\u6B65"),onClick:()=>ce()}):null,i.default.createElement(F,{icon:"refresh",label:a("\u5237\u65B0"),onClick:()=>De()}),i.default.createElement(F,{icon:"settings",label:a("\u8BBE\u7F6E"),onClick:t}))}var hi=208;function vi(e){e&&(e.style.height="auto",e.style.height=`${Math.min(e.scrollHeight,hi)}px`)}function bi({highlight:e}){let[t,r]=i.default.useState(""),[n,o]=i.default.useState(""),[d,p]=i.default.useState(""),[s,g]=i.default.useState(""),[c,f]=i.default.useState(!1),[O,D]=i.default.useState(!1),[B,S]=i.default.useState(!1),l=i.default.useRef(null);i.default.useEffect(()=>{vi(l.current)},[t,c]);let T=async()=>{if(O)return;let h=t.trim(),v=n.trim();if(!h&&!v){k(a("\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60"),{error:!0}),l.current?.focus();return}let w={raw_text:h};v&&(w.title=v);let C=d.trim();C&&(w.summary=C);let m=Ye(s);m.length&&(w.tags=m),D(!0);let J=await _e(w);D(!1),J&&(r(""),o(""),p(""),g(""),f(!1),window.requestAnimationFrame(()=>{let Z=l.current;Z&&(Z.style.height="auto",Z.focus())}))},$=h=>{if((h.metaKey||h.ctrlKey)&&h.key==="Enter"){h.preventDefault(),T();return}h.key==="Escape"&&c&&(h.stopPropagation(),f(!1))};return i.default.createElement("section",{className:`ip-capture ${B?"is-focused":""} ${e?"is-highlight":""}`,"aria-label":a("\u5F55\u5165\u7075\u611F")},i.default.createElement("div",{className:"ip-capture-main"},i.default.createElement("textarea",{ref:l,className:"ip-capture-input",rows:2,value:t,placeholder:a("\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60"),"aria-label":a("\u60F3\u6CD5\u539F\u6587"),onFocus:()=>S(!0),onBlur:()=>S(!1),onChange:h=>r(h.target.value),onKeyDown:$}),i.default.createElement("div",{className:"ip-capture-side"},i.default.createElement("button",{type:"button",className:`ip-capture-toggle ${c?"is-open":""}`,"aria-expanded":c,onClick:()=>f(h=>!h)},i.default.createElement(z,{name:"chevD",size:13}),i.default.createElement("span",null,a(c?"\u6536\u8D77\u9009\u9879":"\u66F4\u591A\u9009\u9879"))),i.default.createElement("span",{className:"ip-cmdhint"},a("\u2318/Ctrl+Enter \u4FDD\u5B58")),i.default.createElement(N,{variant:"primary",icon:"plus",onClick:T,disabled:O},O?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u5165\u6C60")))),c?i.default.createElement("div",{className:"ip-capture-extra"},i.default.createElement(L,{label:a("\u6807\u9898\uFF08\u53EF\u9009\uFF09")},i.default.createElement("input",{value:n,onChange:h=>o(h.target.value),placeholder:a("\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57")})),i.default.createElement(L,{label:a("\u6807\u7B7E\uFF08\u53EF\u9009\uFF09")},i.default.createElement("input",{value:s,onChange:h=>g(h.target.value),placeholder:a("\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053")})),i.default.createElement("div",{className:"ip-span2"},i.default.createElement(L,{label:a("\u6458\u8981\uFF08\u53EF\u9009\uFF09")},i.default.createElement("textarea",{rows:2,value:d,onChange:h=>p(h.target.value),placeholder:a("\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868")})))):null)}function yi(){let e=x(n=>n.status),t=x(n=>n.counts),r=x(n=>n.total);return i.default.createElement("nav",{className:"ip-tabs","aria-label":a("\u72B6\u6001\u7B5B\u9009")},ci.map(n=>{let o=n.key==="all"?t.all||r||0:t[n.key]||0;return i.default.createElement("button",{key:n.key,type:"button",className:`ip-tab ${e===n.key?"is-on":""}`,"aria-pressed":e===n.key,onClick:()=>Be(n.key)},i.default.createElement("span",null,a(n.label)),i.default.createElement("span",{className:"ip-tab-count"},o))}))}function wi({idea:e,active:t,onClick:r}){let n=Array.isArray(e.tags)?e.tags:[];return i.default.createElement("button",{type:"button",className:`ip-card ${t?"is-on":""}`,"aria-current":t?"true":void 0,onClick:r},i.default.createElement("div",{className:"ip-card-head"},i.default.createElement(me,{status:e.status},Q(e.status)),i.default.createElement("span",{className:"ip-card-no"},e.idea_no),i.default.createElement("time",{className:"ip-card-time",dateTime:e.updated_at||void 0},mi(e.updated_at))),i.default.createElement("div",{className:"ip-card-title"},q(e)),e.summary?i.default.createElement("div",{className:"ip-card-sum"},e.summary):null,i.default.createElement("div",{className:"ip-card-foot"},n.slice(0,4).map(o=>i.default.createElement(ge,{key:o},o)),n.length>4?i.default.createElement("span",{className:"ip-muted"},"+",n.length-4):null,i.default.createElement("span",{className:"ip-card-meta"},qe(e.n_updates||0,"1 \u6761\u8FDB\u5C55","{n} \u6761\u8FDB\u5C55"),i.default.createElement("span",{className:"ip-sep"},"\xB7"),qe(e.n_links||0,"1 \u4E2A\u4EA7\u51FA","{n} \u4E2A\u4EA7\u51FA"))))}function ki({narrow:e}){let t=x(s=>s.ideas),r=x(s=>s.listLoading),n=x(s=>s.status),o=x(s=>s.query),d=x(s=>s.selectedNo),p=n!=="all"||!!o.trim();return r&&!t.length?i.default.createElement(G,{label:a("\u6B63\u5728\u52A0\u8F7D\u2026")}):t.length?i.default.createElement("div",{className:"ip-scroll"},i.default.createElement("div",{className:"ip-list"},t.map(s=>i.default.createElement(wi,{key:s.idea_no,idea:s,active:!e&&s.idea_no===d,onClick:()=>Y(s.idea_no)}))),r?i.default.createElement("div",{className:"ip-list-note"},a("\u6B63\u5728\u5237\u65B0\u2026")):null):i.default.createElement(fe,{icon:"note",title:p?a("\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5"):a("\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684"),hint:p?a("\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002"):a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002")})}function Ni({update:e}){let[t,r]=i.default.useState(!1),n=e.content||"",o=n.length>320;return i.default.createElement("li",{className:"ip-tl-item"},i.default.createElement("div",{className:"ip-tl-meta"},i.default.createElement("span",{className:"ip-tl-time"},xe(e.created_at)),e.source?i.default.createElement("span",{className:"ip-src",title:e.source},i.default.createElement(z,{name:"monitor",size:11}),We(e.source)):null),i.default.createElement("div",{className:`ip-tl-content ${o&&!t?"is-clamped":""}`},n),o?i.default.createElement("button",{type:"button",className:"ip-tl-toggle",onClick:()=>r(d=>!d)},t?a("\u6536\u8D77"):a("\u5C55\u5F00\u5168\u90E8")):null)}function Si({link:e}){let t=gi(e.url),r=/^https?:\/\//i.test(t);return i.default.createElement("li",null,i.default.createElement("span",{className:"ip-link-icon"},i.default.createElement(z,{name:"link",size:13})),i.default.createElement("a",{href:t,title:e.url,target:r?"_blank":void 0,rel:r?"noreferrer noopener":void 0},e.title||e.url),e.ref_type==="doc"?i.default.createElement("span",{className:"ip-link-kind"},a("\u6587\u6863")):null,r?i.default.createElement("span",{className:"ip-link-icon"},i.default.createElement(z,{name:"upRight",size:12})):null)}function zi({no:e}){let[t,r]=i.default.useState(""),[n,o]=i.default.useState(!1),d=async p=>{p.preventDefault();let s=t.trim();if(!s){k(a("\u5148\u5199\u70B9\u5185\u5BB9"),{error:!0});return}o(!0);let g=await $e(e,s);o(!1),g&&r("")};return i.default.createElement("form",{className:"ip-abox",onSubmit:d},i.default.createElement(L,{label:a("\u65B0\u589E\u8FDB\u5C55")},i.default.createElement("textarea",{rows:3,value:t,placeholder:a("\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026"),onChange:p=>r(p.target.value),onKeyDown:p=>{(p.metaKey||p.ctrlKey)&&p.key==="Enter"&&d(p)}})),i.default.createElement("div",{className:"ip-abox-foot"},i.default.createElement("span",{className:"ip-muted"},a("\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B")),i.default.createElement("span",{className:"ip-spacer"}),i.default.createElement(N,{size:"sm",variant:"primary",type:"submit",disabled:n},n?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u8BB0\u5F55\u8FDB\u5C55"))))}function Ci({no:e}){let[t,r]=i.default.useState(""),[n,o]=i.default.useState(""),[d,p]=i.default.useState(!1);return i.default.createElement("form",{className:"ip-abox",onSubmit:async g=>{g.preventDefault();let c=n.trim();if(!c){k(a("\u5148\u586B\u94FE\u63A5"),{error:!0});return}if(!/^https?:\/\//i.test(c)&&/^[\w-]+(\.[\w-]+)+/.test(c)&&(c=`https://${c}`),!/^https?:\/\//i.test(c)){k(a("\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}p(!0);let f=await Ae(e,{title:t.trim()||c,url:c});p(!1),f&&(r(""),o(""))}},i.default.createElement(L,{label:a("\u4EA7\u51FA\u6807\u9898")},i.default.createElement("input",{value:t,placeholder:a("\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55"),onChange:g=>r(g.target.value)})),i.default.createElement(L,{label:a("\u94FE\u63A5")},i.default.createElement("input",{value:n,placeholder:"https://\u2026",onChange:g=>o(g.target.value)})),i.default.createElement("div",{className:"ip-abox-foot"},i.default.createElement("span",{className:"ip-spacer"}),i.default.createElement(N,{size:"sm",variant:"primary",type:"submit",disabled:d},d?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58\u4EA7\u51FA"))))}function Ei({idea:e,onClose:t}){let[r,n]=i.default.useState(e.title||""),[o,d]=i.default.useState(e.summary||""),[p,s]=i.default.useState(e.raw_text||""),[g,c]=i.default.useState((e.tags||[]).join(", ")),[f,O]=i.default.useState(e.source_note||""),[D,B]=i.default.useState(!1),S=async l=>{l.preventDefault();let T=r.trim();if(!T){k(a("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}B(!0);let $=await de(e.idea_no,{title:T,summary:o.trim(),raw_text:p,tags:Ye(g),source_note:f.trim()},a("\u5DF2\u4FDD\u5B58"));B(!1),$&&t()};return i.default.createElement(V,{title:a("\u7F16\u8F91\u60F3\u6CD5"),onClose:t,width:560,footer:i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{className:"ip-spacer"}),i.default.createElement(N,{onClick:t},a("\u53D6\u6D88")),i.default.createElement(N,{variant:"primary",type:"submit",form:"ip-edit-form",disabled:D},D?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},i.default.createElement("form",{id:"ip-edit-form",className:"ip-dialog-rows",onSubmit:S},i.default.createElement(L,{label:a("\u6807\u9898")},i.default.createElement("input",{value:r,onChange:l=>n(l.target.value)})),i.default.createElement(L,{label:a("\u6458\u8981")},i.default.createElement("textarea",{rows:2,value:o,onChange:l=>d(l.target.value)})),i.default.createElement(L,{label:a("\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09")},i.default.createElement("textarea",{rows:6,value:p,onChange:l=>s(l.target.value)})),i.default.createElement(L,{label:a("\u6807\u7B7E"),hint:a("\u9017\u53F7\u5206\u9694")},i.default.createElement("input",{value:g,onChange:l=>c(l.target.value)})),i.default.createElement(L,{label:a("\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883")},i.default.createElement("input",{value:f,onChange:l=>O(l.target.value)}))))}function Mi({idea:e,onClose:t}){let[r,n]=i.default.useState(!1),o=async()=>{n(!0);let d=await Oe(e.idea_no);n(!1),d&&t()};return i.default.createElement(V,{title:a("\u5220\u9664\u60F3\u6CD5"),onClose:t,width:420,footer:i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{className:"ip-spacer"}),i.default.createElement(N,{onClick:t},a("\u53D6\u6D88")),i.default.createElement(N,{variant:"danger-solid",onClick:o,disabled:r},r?a("\u5220\u9664\u4E2D\u2026"):a("\u786E\u8BA4\u5220\u9664")))},i.default.createElement("p",{className:"ip-dialog-note"},a("\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002",{title:q(e),no:e.idea_no})))}function Li({narrow:e}){let t=x(m=>m.selectedNo),r=x(m=>m.detail),n=x(m=>m.detailLoading),o=x(m=>m.detailError),[d,p]=i.default.useState(!1),[s,g]=i.default.useState(!1),[c,f]=i.default.useState(!1),[O,D]=i.default.useState(!1),[B,S]=i.default.useState(!1);if(i.default.useEffect(()=>{p(!1),g(!1),f(!1),D(!1)},[t]),!t)return i.default.createElement("div",{className:"ip-detail-pane"},i.default.createElement("div",{className:"ip-scroll"},i.default.createElement(fe,{icon:"note",title:a("\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5"),hint:a("\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002")})));if(o&&!r)return i.default.createElement("div",{className:"ip-detail-pane"},i.default.createElement("div",{className:"ip-scroll"},i.default.createElement("div",{className:"ip-error-pane"},i.default.createElement("span",{className:"ip-empty-icon"},i.default.createElement(z,{name:"alert",size:24})),i.default.createElement("p",{className:"ip-empty-title"},a("\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25")),i.default.createElement("p",{className:"ip-empty-hint"},o),i.default.createElement(N,{icon:"refresh",onClick:()=>Y(t)},a("\u91CD\u8BD5")))));if(!r)return i.default.createElement("div",{className:"ip-detail-pane"},i.default.createElement(G,{label:a("\u6B63\u5728\u5C55\u5F00\u2026")}));let l=r.idea||{},T=Array.isArray(r.updates)?r.updates:[],$=Array.isArray(r.links)?r.links:[],h=l.idea_no||t,v=async m=>{B||m===l.status||(S(!0),await de(h,{status:m},a("\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D",{label:Q(m)})),S(!1))},w=()=>X(fi(l),a("\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4")),C=()=>X(`\u7075\u611F\u6C60 ${h}\u300A${q(l)}\u300B\uFF08\u672C\u673A\u6A21\u5F0F\uFF1A\u7528 idea_pool \u5DE5\u5177\u6309\u7F16\u53F7\u8BFB\u53D6\uFF0C\u6216\u5728 DSH \u4FA7\u680F\u300C\u7075\u611F\u6C60\u300D\u67E5\u770B\uFF09`,a("\u5DF2\u590D\u5236\u5F15\u7528"));return i.default.createElement("div",{className:"ip-detail-pane"},i.default.createElement("div",{className:"ip-scroll"},i.default.createElement("div",{className:"ip-detail"},i.default.createElement("div",{className:"ip-detail-head"},e?i.default.createElement("div",{className:"ip-detail-back"},i.default.createElement(N,{size:"sm",variant:"ghost",icon:"chevL",onClick:pe},a("\u8FD4\u56DE\u5217\u8868"))):null,i.default.createElement("div",{className:"ip-detail-title-row"},i.default.createElement("h2",{className:"ip-detail-title"},q(l)||h),i.default.createElement(F,{icon:"edit",label:a("\u7F16\u8F91"),onClick:()=>p(!0)}),i.default.createElement(F,{icon:"trash",label:a("\u5220\u9664"),onClick:()=>g(!0)})),i.default.createElement("div",{className:"ip-detail-meta"},i.default.createElement(me,{status:l.status},Q(l.status)),i.default.createElement("span",{className:"ip-card-no"},h),l.source?i.default.createElement("span",null,a("\u6765\u6E90\uFF1A{source}",{source:We(l.source)})):null,i.default.createElement("span",null,a("\u521B\u5EFA {time}",{time:xe(l.created_at)})),i.default.createElement("span",null,a("\u66F4\u65B0 {time}",{time:xe(l.updated_at)}))),Array.isArray(l.tags)&&l.tags.length?i.default.createElement("div",{className:"ip-detail-tags"},l.tags.map(m=>i.default.createElement(ge,{key:m},m))):null,i.default.createElement("div",{className:"ip-detail-actions"},i.default.createElement(N,{size:"sm",icon:"copy",onClick:w},a("\u590D\u5236\u5C55\u5F00\u6307\u4EE4")),i.default.createElement(N,{size:"sm",icon:"link",onClick:C},a("\u590D\u5236\u5F15\u7528")),i.default.createElement("span",{className:"ip-spacer"}),i.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":a("\u5207\u6362\u72B6\u6001")},Je.map(m=>i.default.createElement("button",{key:m,type:"button",className:l.status===m?"is-on":"","aria-pressed":l.status===m,disabled:B,onClick:()=>v(m)},Q(m)))))),i.default.createElement("div",{className:"ip-detail-body"},i.default.createElement("section",{className:"ip-section"},i.default.createElement("div",{className:"ip-section-head"},i.default.createElement("span",{className:"ip-section-title"},a("\u539F\u6587")),i.default.createElement("span",{className:"ip-section-count"},a("\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB")),i.default.createElement("span",{className:"ip-spacer"}),i.default.createElement(F,{icon:"copy",size:13,label:a("\u590D\u5236\u539F\u6587"),onClick:()=>X(l.raw_text||"",a("\u5DF2\u590D\u5236\u539F\u6587"))})),i.default.createElement("pre",{className:"ip-raw"},l.raw_text||a("\uFF08\u65E0\u539F\u6587\uFF09"))),l.summary?i.default.createElement("section",{className:"ip-section"},i.default.createElement("div",{className:"ip-section-head"},i.default.createElement("span",{className:"ip-section-title"},a("\u6458\u8981"))),i.default.createElement("div",{className:"ip-summary"},l.summary)):null,l.source_note?i.default.createElement("section",{className:"ip-section"},i.default.createElement("div",{className:"ip-section-head"},i.default.createElement("span",{className:"ip-section-title"},a("\u5907\u6CE8"))),i.default.createElement("div",{className:"ip-text"},l.source_note)):null,i.default.createElement("section",{className:"ip-section"},i.default.createElement("div",{className:"ip-section-head"},i.default.createElement("span",{className:"ip-section-title"},a("\u5173\u8054\u4EA7\u51FA")),i.default.createElement("span",{className:"ip-section-count"},$.length),i.default.createElement("span",{className:"ip-spacer"}),i.default.createElement(N,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>D(m=>!m)},a("\u52A0\u4EA7\u51FA"))),$.length?i.default.createElement("ul",{className:"ip-links"},$.map(m=>i.default.createElement(Si,{key:m.id||m.url,link:m}))):i.default.createElement("p",{className:"ip-muted"},a("\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002")),O?i.default.createElement(Ci,{no:h}):null),i.default.createElement("section",{className:"ip-section"},i.default.createElement("div",{className:"ip-section-head"},i.default.createElement("span",{className:"ip-section-title"},a("\u8FDB\u5C55")),i.default.createElement("span",{className:"ip-section-count"},T.length),i.default.createElement("span",{className:"ip-spacer"}),i.default.createElement(N,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>f(m=>!m)},a("\u52A0\u8FDB\u5C55"))),T.length?i.default.createElement("ul",{className:"ip-timeline"},T.map(m=>i.default.createElement(Ni,{key:m.id||m.created_at,update:m}))):i.default.createElement("p",{className:"ip-muted"},a("\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002")),c?i.default.createElement(zi,{no:h}):null)))),d?i.default.createElement(Ei,{idea:l,onClose:()=>p(!1)}):null,s?i.default.createElement(Mi,{idea:l,onClose:()=>g(!1)}):null)}function Ti({onClose:e}){let t=x(f=>f.settings),r=x(f=>f.storagePath),n=x(f=>f.device),o=x(f=>f.mode),[d,p]=i.default.useState(n),[s,g]=i.default.useState(!1);i.default.useEffect(()=>{Fe()},[]),i.default.useEffect(()=>{t&&typeof t.device=="string"&&p(t.device)},[t]);let c=async()=>{let f=d.trim();if(!f){k(a("\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}g(!0),await Ie(f),g(!1)};return i.default.createElement(V,{title:a("\u8BBE\u7F6E"),onClose:e,width:548,footer:i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{className:"ip-spacer"}),i.default.createElement(N,{variant:"primary",onClick:e},a("\u5B8C\u6210")))},i.default.createElement("div",{className:"ip-dialog-rows"},i.default.createElement("div",{className:"ip-dialog-row"},i.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5B58\u50A8\u8DEF\u5F84")),i.default.createElement("div",{className:"ip-dialog-row-main"},i.default.createElement("code",{className:"ip-dialog-code"},r||a("\u672A\u77E5")),i.default.createElement("p",{className:"ip-dialog-note"},a("\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002")))),i.default.createElement("div",{className:"ip-dialog-row"},i.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8FD0\u884C\u6A21\u5F0F")),i.default.createElement("div",{className:"ip-dialog-row-main"},i.default.createElement("div",{className:"ip-inline-row"},i.default.createElement(ue,{tone:"neutral"},i.default.createElement("i",{className:"ip-dot","aria-hidden":"true"}),o==="cloud"?a("\u4E91\u7AEF\u6A21\u5F0F"):a("\u672C\u673A\u6A21\u5F0F"))),i.default.createElement("p",{className:"ip-dialog-note"},a("\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002\u4E91\u7AEF\u6A21\u5F0F\u540E\u7EED\u7248\u672C\u5F00\u653E\u3002")))),i.default.createElement("div",{className:"ip-dialog-row"},i.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8BBE\u5907\u6807\u8BC6")),i.default.createElement("div",{className:"ip-dialog-row-main"},i.default.createElement("div",{className:"ip-inline-row"},i.default.createElement("input",{className:"ip-inline-input",value:d,placeholder:"dsh-mac / dsh-win / volcano",onChange:f=>p(f.target.value)}),i.default.createElement(N,{size:"sm",onClick:c,disabled:s},s?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58"))),i.default.createElement("p",{className:"ip-dialog-note"},a("\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002")))),i.default.createElement("div",{className:"ip-dialog-row"},i.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u51FA")),i.default.createElement("div",{className:"ip-dialog-row-main"},i.default.createElement("div",{className:"ip-inline-row"},i.default.createElement(N,{icon:"download",onClick:()=>Ue()},a("\u5BFC\u51FA JSON"))),i.default.createElement("p",{className:"ip-dialog-note"},a("\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002"))))))}function Ve(){Ne();let e=x(v=>v.booted),t=x(v=>v.loading),r=x(v=>v.error),n=x(v=>v.canUndo),o=x(v=>v.ideas),d=x(v=>v.status),p=x(v=>v.query),s=x(v=>v.selectedNo),g=i.default.useRef(null),c=i.default.useRef(null),[f,O]=i.default.useState(1200),[D,B]=i.default.useState(!1),S=f<880,l=f<600;i.default.useEffect(()=>{se()},[]),i.default.useEffect(()=>{let v=g.current;if(!v||typeof ResizeObserver>"u")return;let w=new ResizeObserver(([C])=>{C&&C.contentRect&&O(C.contentRect.width)});return w.observe(v),()=>w.disconnect()},[]),i.default.useEffect(()=>{!e||S||s||p.trim()||o.length&&Y(o[0].idea_no)},[e,S,s,p,o]),i.default.useEffect(()=>{let v=w=>{let C=w.target,m=C&&C.tagName||"",J=/^(INPUT|TEXTAREA|SELECT)$/.test(m)||!!(C&&C.isContentEditable);if((w.metaKey||w.ctrlKey)&&!w.shiftKey&&(w.key==="z"||w.key==="Z")&&!J&&n){w.preventDefault(),ce();return}if(w.key==="/"&&!J&&!w.metaKey&&!w.ctrlKey&&!w.altKey){w.preventDefault(),c.current?.focus();return}w.key==="Escape"&&S&&s&&pe()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[n,S,s]);let T=!S||!s,$=!S||!!s,h=e&&!t&&!r&&o.length===0&&d==="all"&&!p.trim();return i.default.createElement("div",{className:`ip-root ${S?"is-narrow":""} ${l?"is-compact":""}`,ref:g},i.default.createElement("style",null,ve),i.default.createElement(xi,{searchRef:c,onOpenSettings:()=>B(!0)}),i.default.createElement(bi,{highlight:h}),e?i.default.createElement(yi,null):null,i.default.createElement("div",{className:"ip-body"},t&&!e?i.default.createElement(G,{label:a("\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026")}):r&&!e?i.default.createElement("div",{className:"ip-error-pane"},i.default.createElement("span",{className:"ip-empty-icon"},i.default.createElement(z,{name:"alert",size:24})),i.default.createElement("p",{className:"ip-empty-title"},a("\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25")),i.default.createElement("p",{className:"ip-empty-hint"},r),i.default.createElement(N,{icon:"refresh",onClick:()=>Te()},a("\u91CD\u8BD5"))):i.default.createElement(i.default.Fragment,null,T?i.default.createElement("div",{className:"ip-list-pane"},i.default.createElement(ki,{narrow:S})):null,$?i.default.createElement(Li,{narrow:S}):null)),D?i.default.createElement(Ti,{onClose:()=>B(!1)}):null,i.default.createElement(je,null))}function Di({size:e}){return i.default.createElement(z,{name:"bulb",size:e})}var Bi=["slots"];function _i(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:He},Ve)),e.effect(()=>{let t=null,r=()=>{t?.(),t=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:He,order:15,label:()=>a("\u7075\u611F\u6C60")},Di))};r();let n=ie(r);return()=>{n(),t?.()}},"dsh-idea-pool: sidebar entry")}
return module.exports}})
