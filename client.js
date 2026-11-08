window.__ModuleLoader__.load({id:"dsh-idea-pool",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var hi=Object.create;var ie=Object.defineProperty;var xi=Object.getOwnPropertyDescriptor;var vi=Object.getOwnPropertyNames;var bi=Object.getPrototypeOf,yi=Object.prototype.hasOwnProperty;var wi=(i,t)=>{for(var r in t)ie(i,r,{get:t[r],enumerable:!0})},Te=(i,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of vi(t))!yi.call(i,n)&&n!==r&&ie(i,n,{get:()=>t[n],enumerable:!(o=xi(t,n))||o.enumerable});return i};var te=(i,t,r)=>(r=i!=null?hi(bi(i)):{},Te(t||!i||!i.__esModule?ie(r,"default",{value:i,enumerable:!0}):r,i)),ki=i=>Te(ie({},"__esModule",{value:!0}),i);var rt={};wi(rt,{App:()=>pi,apply:()=>at,inject:()=>tt});module.exports=ki(rt);var e=te(require("react"),1);var De=`/* dsh-idea-pool \u5BA2\u6237\u7AEF\u6837\u5F0F\uFF1A\u989C\u8272\u53EA\u8D70 --dsw-alias-* \u8BED\u4E49 token\uFF08\u5E26 fallback\uFF09\uFF0C\u660E\u6697\u4E3B\u9898\u7531\u5BBF\u4E3B\u5207\u6362\u3002 */
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
.ip-mode.is-cloud i { background: var(--ip-business); }
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
.ip-cloud-status { display: inline-flex; align-items: center; gap: 4px; min-width: 0; font-size: 12px; line-height: 18px; color: var(--ip-ink4); overflow-wrap: anywhere; }
.ip-cloud-status > svg { flex: none; }
.ip-cloud-status.is-ok { color: var(--ip-success); }
.ip-cloud-status.is-error { color: var(--ip-error); }

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

/* \u7A84\u5C4F\uFF08<640px\uFF09\u8BBE\u7F6E\u5BF9\u8BDD\u6846\uFF1A\u6807\u7B7E\u6362\u884C\u3001\u8F93\u5165\u81EA\u9002\u5E94\u3001\u6309\u94AE\u6362\u884C\uFF0C\u4E0D\u6EA2\u51FA\u88C1\u5207 */
.ip-root.is-compact .ip-dialog-mask { padding: 10px; }
.ip-root.is-compact .ip-dialog-row { flex-direction: column; gap: 5px; }
.ip-root.is-compact .ip-dialog-row-label { width: auto; padding-top: 0; }
.ip-root.is-compact .ip-inline-row { flex-wrap: wrap; }
.ip-root.is-compact .ip-inline-input { flex: 1 1 100%; }
.ip-root.is-compact .ip-status-switch { flex-wrap: wrap; }
.ip-root.is-compact .ip-cloud-status { flex: 1 1 100%; }
.ip-root.is-compact .ip-dialog-foot { flex-wrap: wrap; }

@media (prefers-reduced-motion: reduce) {
  .ip-root *,
  .ip-root *::before,
  .ip-root *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}
`;var Ae=te(require("react"),1);var Be={\u7075\u611F\u6C60:"Idea Pool",\u672C\u673A\u6A21\u5F0F:"Local mode",\u4E91\u7AEF\u6A21\u5F0F:"Cloud mode",\u641C\u7D22\u60F3\u6CD5:"Search ideas","\u641C\u7D22\u60F3\u6CD5\u2026":"Search ideas\u2026",\u6E05\u7A7A\u641C\u7D22:"Clear search",\u64A4\u9500\u4E0A\u4E00\u6B65:"Undo last step",\u5237\u65B0:"Refresh",\u8BBE\u7F6E:"Settings",\u5173\u95ED:"Close",\u91CD\u8BD5:"Retry",\u5F55\u5165\u7075\u611F:"Capture an idea",\u60F3\u6CD5\u539F\u6587:"Raw idea text","\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60":"Type whatever comes to mind. Enter for a new line, \u2318/Ctrl+Enter to add.","\u2318/Ctrl+Enter \u4FDD\u5B58":"\u2318/Ctrl+Enter to save",\u66F4\u591A\u9009\u9879:"More options",\u6536\u8D77\u9009\u9879:"Hide options",\u5165\u6C60:"Add","\u4FDD\u5B58\u4E2D\u2026":"Saving\u2026",\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60:"Write something first","\u6807\u9898\uFF08\u53EF\u9009\uFF09":"Title (optional)","\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57":"Leave empty to use the first 40 characters","\u6807\u7B7E\uFF08\u53EF\u9009\uFF09":"Tags (optional)","\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053":"Comma-separated, e.g. research, channels","\u6458\u8981\uFF08\u53EF\u9009\uFF09":"Summary (optional)","\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"One-line summary to scan later",\u72B6\u6001\u7B5B\u9009:"Filter by status",\u5168\u90E8:"All",\u5DF2\u5165\u6C60:"Pool",\u63A8\u8FDB\u4E2D:"In progress",\u5DF2\u6536\u53E3:"Done",\u6401\u7F6E:"Parked",\u5207\u6362\u72B6\u6001:"Change status","\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D":"Status changed to \u201C{label}\u201D","1 \u6761\u8FDB\u5C55":"1 update","{n} \u6761\u8FDB\u5C55":"{n} updates","1 \u4E2A\u4EA7\u51FA":"1 output","{n} \u4E2A\u4EA7\u51FA":"{n} outputs","\u6B63\u5728\u52A0\u8F7D\u2026":"Loading\u2026","\u6B63\u5728\u5237\u65B0\u2026":"Refreshing\u2026","\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026":"Loading the idea pool\u2026",\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25:"Failed to load the idea pool",\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684:"The idea pool is empty",\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5:"No matching ideas","\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002":"Try another keyword or status.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add. In local mode the data stays on this machine.",\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5:"Select an idea","\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002":"The list is on the left. On wide screens, click a card to read its raw text, progress and outputs.","\u6B63\u5728\u5C55\u5F00\u2026":"Loading\u2026",\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25:"Failed to load this idea",\u8FD4\u56DE\u5217\u8868:"Back to list",\u539F\u6587:"Raw text","\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB":"Verbatim \xB7 read-only",\u590D\u5236\u539F\u6587:"Copy raw text",\u5DF2\u590D\u5236\u539F\u6587:"Raw text copied",\u6458\u8981:"Summary",\u5907\u6CE8:"Note","\u6765\u6E90\uFF1A{source}":"Source: {source}","\u521B\u5EFA {time}":"Created {time}","\u66F4\u65B0 {time}":"Updated {time}",\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Copy expand prompt",\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Expand prompt copied",\u590D\u5236\u5F15\u7528:"Copy reference",\u5DF2\u590D\u5236\u5F15\u7528:"Reference copied",\u590D\u5236\u94FE\u63A5:"Copy link",\u5DF2\u590D\u5236\u94FE\u63A5:"Link copied",\u7F16\u8F91:"Edit",\u5220\u9664:"Delete",\u5173\u8054\u4EA7\u51FA:"Outputs",\u52A0\u4EA7\u51FA:"Add output","\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002":"No outputs yet \u2014 attach result links once there is progress.",\u4EA7\u51FA\u6807\u9898:"Output title","\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55":"e.g. research report / progress log",\u94FE\u63A5:"Link","\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934":"The link must start with http(s)://",\u5148\u586B\u94FE\u63A5:"Fill in a link first",\u4FDD\u5B58\u4EA7\u51FA:"Save output",\u8FDB\u5C55:"Progress",\u52A0\u8FDB\u5C55:"Add progress","\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002":"No progress entries yet.",\u65B0\u589E\u8FDB\u5C55:"New progress entry","\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026":"Log progress (conclusion / research status / next step)\u2026",\u5148\u5199\u70B9\u5185\u5BB9:"Write something first","\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B":"Entries are append-only; note the machine and next step for cross-machine handoff",\u8BB0\u5F55\u8FDB\u5C55:"Save progress",\u5C55\u5F00\u5168\u90E8:"Show all",\u6536\u8D77:"Collapse",\u6587\u6863:"Doc","\uFF08\u65E0\u539F\u6587\uFF09":"(no raw text)",\u7F16\u8F91\u60F3\u6CD5:"Edit idea",\u6807\u9898:"Title","\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09":"Raw text (keep verbatim)",\u6807\u7B7E:"Tags",\u9017\u53F7\u5206\u9694:"Comma-separated","\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883":"Note / context",\u53D6\u6D88:"Cancel",\u4FDD\u5B58:"Save",\u5DF2\u4FDD\u5B58:"Saved",\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A:"Title can\u2019t be empty",\u5220\u9664\u60F3\u6CD5:"Delete idea","\u5220\u9664\u4E2D\u2026":"Deleting\u2026",\u786E\u8BA4\u5220\u9664:"Delete","\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002":"Deleting \u201C{title}\u201D ({no}) also removes its progress and outputs.",\u5B58\u50A8\u8DEF\u5F84:"Storage path",\u672A\u77E5:"Unknown","\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002":"In local mode every idea lives in this one JSON file; deleting it clears the idea pool.",\u8FD0\u884C\u6A21\u5F0F:"Run mode","\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002":"Local mode: data lives under this machine\u2019s DSH_HOME/idea-pool/ and is read and written directly by the plugin, with no network. Other machines can\u2019t see it.","\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002":"Cloud mode: data lives in the cloud at {base}; local data stays untouched.",\u4E91\u7AEF\u5730\u5740:"Cloud base URL","\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002":"Base URL of the cloud ideas-api; defaults to {base}.",\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A:"Cloud base URL can\u2019t be empty","\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934":"Cloud base URL must start with http(s)://","API Key":"API Key","\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}":"Saved, last four: {hint}","\u7C98\u8D34\u4E91\u7AEF API Key":"Paste the cloud API key","\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002":"API key saved (last four: {hint}); leave empty to keep it.","\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002":"No API key configured yet \u2014 cloud reads and writes need one.","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key":"Clear saved key","\u6E05\u9664\u4E2D\u2026":"Clearing\u2026","\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key":"Saved API key cleared","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002":"Clear the saved API key? Cloud reads and writes will fail until you add it again.","\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002":"No saved API key yet, so importing is unavailable. Fill in a key and save it first.","\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key":"Connection failed: cloud authentication failed \u2014 check the API Key",\u6D4B\u8BD5\u8FDE\u63A5:"Test connection","\u6D4B\u8BD5\u4E2D\u2026":"Testing\u2026","\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5":"Ping the cloud health endpoint with the URL and key above","\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms":"Connected \xB7 {count} ideas in the cloud \xB7 {ms} ms","\u8FDE\u63A5\u5931\u8D25\uFF1A{error}":"Connection failed: {error}",\u672A\u77E5\u9519\u8BEF:"Unknown error",\u5BFC\u5165\u5230\u672C\u673A:"Import to local",\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A:"Import cloud \u2192 local","\u5BFC\u5165\u4E2D\u2026":"Importing\u2026","\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002":"Fetch everything with the saved cloud configuration and merge it locally by idea number. Does not switch mode or delete local data.","\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761":"Imported {imported} and updated {updated} ideas from the cloud",\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165:"The cloud has no new ideas to import",\u8BBE\u5907\u6807\u8BC6:"Device ID","\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"Written into the source field of ideas and progress entries so the origin can be located across machines.",\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A:"Device ID can\u2019t be empty",\u5BFC\u51FA:"Export","\u5BFC\u51FA JSON":"Export JSON","\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002":"Export all ideas, progress and outputs into a single JSON file for backup or migration.","\u5DF2\u5BFC\u51FA JSON":"JSON exported",\u521A\u521A:"just now","{n} \u5206\u949F\u524D":"{n} min ago",\u672C\u673A:"Local",\u706B\u5C71\u4E91:"Volcano Cloud",\u624B\u52A8:"Manual",\u7F51\u9875:"Web",\u98DE\u4E66:"Feishu",\u5DF2\u590D\u5236:"Copied","\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236":"Copy failed \u2014 select and copy manually","\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}":"Can\u2019t reach the local service: {error}","\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09":"Request failed ({status})","\u5DF2\u5165\u6C60 {no}":"Added {no}","\u5DF2\u5220\u9664 {no}":"Deleted {no}",\u5DF2\u8BB0\u5F55\u8FDB\u5C55:"Progress saved",\u5DF2\u6DFB\u52A0\u4EA7\u51FA:"Output added",\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65:"Undid the last step","\u5DF2\u64A4\u9500\uFF1A{label}":"Undone: {label}",\u5DF2\u5237\u65B0:"Refreshed",\u8BBE\u7F6E\u5DF2\u4FDD\u5B58:"Settings saved"};var se=Pe(),le=new Set;function Pe(){return typeof document>"u"||(document.documentElement.lang||navigator.language||"zh").toLowerCase().startsWith("zh")?"zh":"en"}function Si(){le.forEach(i=>{try{i()}catch(t){console.error("[idea-pool] lang listener failed",t)}})}typeof document<"u"&&typeof MutationObserver<"u"&&new MutationObserver(()=>{let i=Pe();i!==se&&(se=i,Si())}).observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function Ie(){return se}function pe(i){return le.add(i),()=>le.delete(i)}function Oe(){return Ae.default.useSyncExternalStore(pe,Ie)}function a(i,t){let r=Ie()==="en"?Be[i]??i:i;return t?r.replace(/\{(\w+)\}/g,(o,n)=>t[n]===void 0?o:String(t[n])):r}var _e=te(require("react"),1);var Ci="idea-pool/",zi=500;function Ei(){return{all:0,pool:0,active:0,done:0,parked:0}}var S={booted:!1,loading:!0,error:null,mode:"local",device:"",storagePath:"",cloudBase:"",canUndo:!1,counts:Ei(),total:0,status:"all",query:"",ideas:[],listLoading:!1,selectedNo:null,suppressAutoSelect:!1,detail:null,detailLoading:!1,detailError:null,settings:null,settingsLoading:!1,toast:null},ue=new Set;function v(i){S={...S,...typeof i=="function"?i(S):i},ue.forEach(t=>{try{t()}catch(r){console.error("[idea-pool] store listener failed",r)}})}function Mi(i){return ue.add(i),()=>ue.delete(i)}function g(i){return _e.default.useSyncExternalStore(Mi,()=>i(S))}var me=null;function w(i,{error:t=!1,duration:r=0}={}){clearTimeout(me);let o=Date.now()+Math.random();v({toast:{id:o,text:i,error:t}}),me=setTimeout(()=>{S.toast&&S.toast.id===o&&v({toast:null})},r||(t?6e3:3200))}function Ue(){clearTimeout(me),v({toast:null})}function D(i){w(i&&i.message||String(i),{error:!0}),i&&Number(i.status)===409&&Promise.allSettled([W(),U(),V()])}async function A(i,t){let r={credentials:"same-origin",...t||{}},o;try{o=await fetch(Ci+i,r)}catch(s){throw new Error(a("\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}",{error:s&&s.message||String(s)}))}let n=null;try{n=await o.json()}catch{n=null}if(!o.ok||n&&n.ok===!1){let s=new Error(n&&n.error||a("\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09",{status:o.status}));throw s.status=o.status,s}return n||{}}function F(i,t){return{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(t??{})}}function I(i){let t=Number(i);return Number.isFinite(t)&&t>0?Math.floor(t):0}function $e(i,t){let r=i&&typeof i=="object"?i:{},o={pool:I(r.pool),active:I(r.active),done:I(r.done),parked:I(r.parked)},n=o.pool+o.active+o.done+o.parked;return o.all=I(r.all)||I(r.total)||I(t)||n,o}function Fe(i){if(!i||typeof i!="object")return;let t={mode:typeof i.mode=="string"?i.mode:S.mode,canUndo:!!i.canUndo,counts:$e(i.counts,i.total),total:I(i.total)};typeof i.device=="string"&&(t.device=i.device),Object.hasOwn(i,"storagePath")&&(t.storagePath=typeof i.storagePath=="string"?i.storagePath:""),Object.hasOwn(i,"cloudBase")&&(t.cloudBase=typeof i.cloudBase=="string"?i.cloudBase:""),v(t)}async function W(){let i=await A("api/state");return Fe(i),i}var de=0;async function U(){let i=++de,t=new URLSearchParams;S.status!=="all"&&t.set("status",S.status);let r=S.query.trim();r&&t.set("q",r),t.set("limit",String(zi)),t.set("offset","0"),v({listLoading:!0});try{let o=await A("api/ideas?"+t.toString());if(i!==de)return;let n=Array.isArray(o.ideas)?o.ideas:[];v({ideas:n,listLoading:!1,counts:$e(o.counts,o.total),total:I(o.total)||n.length,error:null})}catch(o){throw i===de&&v({listLoading:!1}),o}}var ce=0;async function fe(i){let t=++ce;v({detailLoading:!0,detailError:null});try{let r=await A("api/ideas/"+encodeURIComponent(i));return t!==ce||v({detail:r,detailLoading:!1,detailError:null}),r}catch(r){throw t===ce&&v({detailLoading:!1,detailError:r.message}),r}}async function V(){let i=S.selectedNo;if(i)try{await fe(i)}catch{v({selectedNo:null,detail:null,detailError:null})}}async function G({withDetail:i=!1}={}){let t=[W(),U()];i&&S.selectedNo&&t.push(fe(S.selectedNo)),await Promise.allSettled(t)}var Y=null;function ge(){return Y?(S.booted&&Promise.allSettled([W(),U()]),Y):(Y=(async()=>{v({loading:!0,error:null});try{await Promise.all([W(),U()]),v({booted:!0,loading:!1})}catch(i){v({loading:!1,error:i.message})}})(),Y)}function je(){return Y=null,ge()}async function He({quiet:i=!1}={}){try{await Promise.all([W(),U()]),await V(),v({booted:!0,loading:!1,error:null}),i||w(a("\u5DF2\u5237\u65B0"))}catch(t){D(t)}}var Ke=null;function qe(i){S.status!==i&&(v({status:i,selectedNo:null,detail:null,detailError:null}),U().catch(D))}function he(i){v({query:i,selectedNo:null,detail:null,detailError:null}),clearTimeout(Ke),Ke=setTimeout(()=>{U().catch(D)},220)}function ae(i){if(!i){v({selectedNo:null,detail:null,detailError:null});return}if(S.selectedNo===i&&S.detail)return;let t=S.selectedNo===i?S.detail:null;v({selectedNo:i,detail:t,detailLoading:!0,detailError:null}),fe(i).catch(D)}function xe(){v({selectedNo:null,detail:null,detailError:null})}async function Je(i){try{let t={...i};!t.source&&S.device&&(t.source=S.device);let o=(await A("api/ideas",F("POST",t))).idea||null;return await G(),w(a("\u5DF2\u5165\u6C60 {no}",{no:o?o.idea_no:""}).trim()),o}catch(t){return D(t),null}}async function ve(i,t,r){try{let o=await A("api/ideas/"+encodeURIComponent(i),F("PATCH",t));return await G({withDetail:!0}),r&&w(r),o.idea||null}catch(o){return D(o),null}}async function We(i){let t=S.selectedNo===i;try{await A("api/ideas/"+encodeURIComponent(i),{method:"DELETE"}),t&&v({selectedNo:null,detail:null,detailError:null,suppressAutoSelect:!0});try{await G()}finally{t&&v({suppressAutoSelect:!1})}return w(a("\u5DF2\u5220\u9664 {no}",{no:i})),!0}catch(r){return D(r),!1}}async function Ye(i,t){try{let r={content:t};return S.device&&(r.source=S.device),await A("api/ideas/"+encodeURIComponent(i)+"/updates",F("POST",r)),await G({withDetail:!0}),w(a("\u5DF2\u8BB0\u5F55\u8FDB\u5C55")),!0}catch(r){return D(r),!1}}async function Ve(i,{title:t,url:r}){try{return await A("api/ideas/"+encodeURIComponent(i)+"/links",F("POST",{title:t,url:r})),await G({withDetail:!0}),w(a("\u5DF2\u6DFB\u52A0\u4EA7\u51FA")),!0}catch(o){return D(o),!1}}async function be(){try{let i=await A("api/undo",F("POST",{}));i.state&&Fe(i.state),await Promise.allSettled([U(),V()]);let t=typeof i.label=="string"?i.label.trim():"";return w(t?a("\u5DF2\u64A4\u9500\uFF1A{label}",{label:t}):a("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")),!0}catch(i){return D(i),!1}}async function Ge(){v({settingsLoading:!0});try{let i=await A("api/settings");return v({settings:i.settings||null,settingsLoading:!1}),i.settings||null}catch(i){return v({settingsLoading:!1}),D(i),null}}async function Xe(i){try{let r=(await A("api/settings",F("POST",i))).settings||null,o=S.mode;v({settings:r}),r&&r.mode&&r.mode!==o&&v({ideas:[],selectedNo:null,detail:null,detailError:null,canUndo:!1}),w(a("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58"));try{await W(),await U(),await V(),v({booted:!0,loading:!1,error:null})}catch(n){D(n)}return r}catch(t){return D(t),null}}async function Qe({base:i,apiKey:t}={}){let r={},o=typeof i=="string"?i.trim():"",n=typeof t=="string"?t.trim():"";o&&(r.base=o),n&&(r.apiKey=n);try{let s=await A("api/cloud/test",F("POST",r));return{ok:!0,base:typeof s.base=="string"?s.base:"",count:I(s.count),latencyMs:I(s.latencyMs)}}catch(s){return{ok:!1,error:s&&s.message||String(s),status:s&&Number.isInteger(s.status)?s.status:0}}}async function Ze(){try{let i=await A("api/settings",F("POST",{cloud:{clearKey:!0}}));return v({settings:i.settings||S.settings}),w(a("\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key")),i.settings||null}catch(i){return D(i),null}}async function Re(){try{let i=await A("api/cloud/import-local",F("POST",{})),t=I(i.imported),r=I(i.updated),o=I(i.total);return w(t||r?a("\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761",{imported:t,updated:r}):a("\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165")),await Promise.allSettled([W(),U(),V()]),{imported:t,updated:r,total:o}}catch(i){return D(i),null}}function Li(){let i=new Date,t=r=>String(r).padStart(2,"0");return`${i.getFullYear()}${t(i.getMonth()+1)}${t(i.getDate())}`}function Ti(i,t){let r=new Blob([t],{type:"application/json;charset=utf-8"}),o=URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=i,n.style.display="none",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}async function ei(){try{let i=await A("api/export"),t=i&&i.data?i.data:i;return Ti(`idea-pool-${Li()}.json`,JSON.stringify(t,null,2)),w(a("\u5DF2\u5BFC\u51FA JSON")),!0}catch(i){return D(i),!1}}var c=te(require("react"),1);var Di={bulb:"M12 3a6 6 0 0 1 3.5 10.9c-.9.6-1.5 1.5-1.5 2.5v.6h-4v-.6c0-1-.6-1.9-1.5-2.5A6 6 0 0 1 12 3zM10 20h4M12 7.5v3.5",note:"M6 4h8l4 4v12H6zM14 4v4h4M9 12h6M9 16h6",settings:"M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",undo:"M8 6L4 10l4 4M4 10h10a5 5 0 0 1 0 10h-3",refresh:"M19 8a8 8 0 0 0-14-1L4 9M5 16a8 8 0 0 0 14 1l1-2M4 4v5h5M20 20v-5h-5",search:"M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",close:"M6 6l12 12M18 6L6 18",check:"M5 12.5l4.5 4.5L19 7",chevD:"M6 9.5l6 6 6-6",chevL:"M14.5 5.5L8 12l6.5 6.5",chevR:"M9.5 5.5L16 12l-6.5 6.5",plus:"M12 5v14M5 12h14",edit:"M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",trash:"M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",copy:"M9 9h10v11H9zM5 15V4h10",link:"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",upRight:"M7 17L17 7M8 7h9v9",monitor:"M4 5h16v11H4zM9 20h6M12 16v4",clock:"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l2.5 1.5",download:"M12 4v11M7 11l5 5 5-5M5 20h14",alert:"M12 4l9 16H3zM12 10v4M12 17.5h.01",folder:"M4 7h6l2 2h10v10H4z",tag:"M4 5h8l8 8-6 6-8-8zM8 8.5h.01",spark:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",bolt:"M13 3L5 14h6l-1 7 8-11h-6z",cloud:"M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8.5z",dot:"M12 12h.01"};function B({name:i,size:t=16,stroke:r=1.6,className:o=""}){let n=Di[i];return n?c.default.createElement("svg",{className:o,width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},c.default.createElement("path",{d:n})):null}function j({icon:i,label:t,onClick:r,disabled:o,active:n,size:s=16,className:d="",...m}){return c.default.createElement("button",{type:"button",className:`ip-iconbtn ${n?"is-on":""} ${d}`,"aria-label":t,title:t,onClick:r,disabled:o,...m},c.default.createElement(B,{name:i,size:s}))}function E({variant:i="plain",size:t="md",icon:r,children:o,className:n="",title:s,...d}){return c.default.createElement("button",{type:"button",className:`ip-btn is-${i} is-${t} ${n}`,title:s,...d},r?c.default.createElement(B,{name:r,size:t==="sm"?13:15}):null,o?c.default.createElement("span",null,o):null)}function Bi({tone:i="neutral",children:t,title:r,className:o=""}){return c.default.createElement("span",{className:`ip-badge is-${i} ${o}`,title:r},t)}function ye({status:i,children:t}){return c.default.createElement(Bi,{tone:i==="pool"||i==="active"||i==="done"||i==="parked"?i:"neutral"},c.default.createElement("i",{className:"ip-dot","aria-hidden":"true"}),t)}function we({children:i}){return c.default.createElement("span",{className:"ip-tag"},i)}function _({label:i,hint:t,children:r}){return c.default.createElement("label",{className:"ip-field"},c.default.createElement("span",{className:"ip-field-label"},i),r,t?c.default.createElement("small",{className:"ip-field-hint"},t):null)}function re({title:i,onClose:t,children:r,footer:o,width:n=460}){let s=c.default.useRef(null),d=c.default.useRef(t);return d.current=t,c.default.useEffect(()=>{let m=k=>{k.key==="Escape"&&(k.preventDefault(),k.stopPropagation(),d.current())};window.addEventListener("keydown",m,!0);let p=s.current,u=p&&(p.querySelector("textarea, input, select")||p.querySelector("button"));return u&&u.focus(),()=>window.removeEventListener("keydown",m,!0)},[]),c.default.createElement("div",{className:"ip-dialog-mask",onPointerDown:m=>{m.target===m.currentTarget&&t()}},c.default.createElement("div",{className:"ip-dialog",role:"dialog","aria-modal":"true","aria-label":i,style:{width:n},ref:s},c.default.createElement("div",{className:"ip-dialog-head"},c.default.createElement("h2",null,i),c.default.createElement(j,{icon:"close",label:a("\u5173\u95ED"),onClick:t})),c.default.createElement("div",{className:"ip-dialog-body"},r),o?c.default.createElement("div",{className:"ip-dialog-foot"},o):null))}function ti(){let i=g(t=>t.toast);return i?c.default.createElement("div",{key:i.id,className:`ip-toast ${i.error?"is-error":""}`,role:i.error?"alert":"status"},c.default.createElement(B,{name:i.error?"alert":"check",size:14}),c.default.createElement("span",{className:"ip-toast-text"},i.text),c.default.createElement("button",{type:"button",className:"ip-toast-close","aria-label":a("\u5173\u95ED"),onClick:Ue},c.default.createElement(B,{name:"close",size:12}))):null}function ke({icon:i="bulb",title:t,hint:r,children:o}){return c.default.createElement("div",{className:"ip-empty"},c.default.createElement("span",{className:"ip-empty-icon"},c.default.createElement(B,{name:i,size:26})),c.default.createElement("p",{className:"ip-empty-title"},t),r?c.default.createElement("p",{className:"ip-empty-hint"},r):null,o)}function oe({label:i}){return c.default.createElement("div",{className:"ip-loading",role:"status"},c.default.createElement("span",{className:"ip-spinner","aria-hidden":"true"}),c.default.createElement("span",null,i))}function ii(i){let t=document.createElement("textarea");t.value=i,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0",document.body.appendChild(t),t.select();try{document.execCommand("copy")}finally{t.remove()}}function X(i,t=a("\u5DF2\u590D\u5236")){let r=()=>w(t),o=()=>w(a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236"),{error:!0});try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(i).then(r,()=>{try{ii(i),r()}catch{o()}});return}ii(i),r()}catch{o()}}var ai="idea-pool",Ai="https://www.zhaoningyuan.com",Q="https://www.zhaoningyuan.com/ideas/api",oi=["pool","active","done","parked"],ni={pool:"\u5DF2\u5165\u6C60",active:"\u63A8\u8FDB\u4E2D",done:"\u5DF2\u6536\u53E3",parked:"\u6401\u7F6E"},Pi=[{key:"all",label:"\u5168\u90E8"},...oi.map(i=>({key:i,label:ni[i]}))],Ii={mac:"Mac","dsh-mac":"Mac",win:"Windows","dsh-win":"Windows",dsh:"\u672C\u673A",volcano:"\u706B\u5C71\u4E91",manual:"\u624B\u52A8",web:"\u7F51\u9875",feishu:"\u98DE\u4E66"};function $(i){return String(i).padStart(2,"0")}function Se(i){if(!i)return"";let t=new Date(i);return Number.isNaN(t.getTime())?String(i):`${t.getFullYear()}-${$(t.getMonth()+1)}-${$(t.getDate())} ${$(t.getHours())}:${$(t.getMinutes())}`}function Oi(i){if(!i)return"";let t=new Date(i);if(Number.isNaN(t.getTime()))return String(i);let r=Date.now()-t.getTime();if(r>=0&&r<60*1e3)return a("\u521A\u521A");if(r>=0&&r<3600*1e3)return a("{n} \u5206\u949F\u524D",{n:Math.floor(r/6e4)});let o=new Date,n=new Date(o.getFullYear(),o.getMonth(),o.getDate()).getTime();return t.getTime()>=n?`${$(t.getHours())}:${$(t.getMinutes())}`:t.getFullYear()===o.getFullYear()?`${$(t.getMonth()+1)}-${$(t.getDate())}`:`${t.getFullYear()}-${$(t.getMonth()+1)}-${$(t.getDate())}`}function si(i){if(!i)return"";let t=String(i).toLowerCase();return a(Ii[t]||String(i))}function ne(i){return a(ni[i]||i||"")}function Ki(i){let t=String(i||"").trim();return!t||/^(javascript|data|vbscript):/i.test(t)?"#":t}function _i(i){return`${Ai}/ideas/#${i.idea_no}`}function Z(i){return String(i&&i.title||"").replace(/\s+/g," ").trim()||i&&i.idea_no||""}function li(i){return String(i||"").split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function ri(i,t,r){return a(i===1?t:r,{n:i})}function Ui(i){let t=i.idea_no,r=Z(i);return"\u8BF7\u5C55\u5F00\u63A8\u8FDB\u7075\u611F\u6C60 "+t+"\u300A"+r+`\u300B\u3002

\u3010\u7EE7\u627F\u8FDB\u5EA6\xB7\u9632\u91CD\u590D\u3011\u5148\u8BFB\u60F3\u6CD5\u8BE6\u60C5\u2014\u2014\u539F\u6587\u3001\u6458\u8981\u3001\u5168\u90E8\u300C\u8FDB\u5C55\u300D\u4E0E\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 get \u52A8\u4F5C\uFF0C\u6216\u8BFB\u672C\u673A /idea-pool/api/ideas/`+t+`\uFF09\u3002
\uFF08\u300C\u8FDB\u5C55\u300D=\u63A5\u529B\u8D26\u672C\uFF1A\u4EE5\u6700\u65B0\u6761\u76EE\u4E3A\u51C6\u7EE7\u627F\uFF0C\u5DF2\u5B8C\u6210\u7684\u4E0D\u91CD\u505A\u2014\u2014\u5305\u62EC\u5176\u4ED6\u673A\u5668\u505A\u8FC7\u7684\uFF09
\u5982\u672C\u60F3\u6CD5\u66FE\u5728\u5176\u4ED6\u673A\u5668/\u4F1A\u8BDD\u63A8\u8FDB\u8FC7\uFF08\u4E0D\u786E\u5B9A\u5C31\u5148\u67E5\uFF09\uFF1A\u5F00\u5DE5\u524D\u5148\u505A\u8DE8\u673A\u67E5\u91CD\uFF08\u68C0\u7D22\u5404\u673A\u4F1A\u8BDD\u5E93\u3001\u5B9A\u65F6\u4EFB\u52A1\u4E0E\u6280\u80FD\uFF09\uFF0C\u5E76\u56DE\u586B\u4E00\u6761\u300C\u5F00\u5DE5\u5BF9\u9F50\u300D\u8FDB\u5C55\uFF08\u672C\u6B21\u8303\u56F4+\u4E0D\u91CD\u505A\u9879\uFF09\u3002
\u3010\u63A8\u8FDB\u8BB0\u5F55\u3011\u5148\u8BFB\u8BB0\u5F55\u6587\u6863\uFF08\u82E5\u6709\uFF09\u5E76\u5728\u5B8C\u6210\u540E\u8FFD\u52A0\u672C\u8F6E\u6761\u76EE\u3002
\u3010\u5148\u6F84\u6E05\u540E\u5F00\u5DE5\u3011\u7EE7\u627F\u68C0\u67E5\u4E4B\u540E\u3001\u52A8\u624B\u4E4B\u524D\uFF1A\u6309 brainstorming \u6F84\u6E05\u671F\u7EAA\u5F8B\u5411\u7528\u6237\u8FFD\u95EE 3~5 \u4E2A\u5173\u952E\u95EE\u9898\u2014\u2014\u53EA\u95EE\u4F1A\u6539\u53D8\u65B9\u5411\u3001\u53EA\u6709\u7528\u6237\u80FD\u7B54\u7684\uFF08\u80FD\u81EA\u67E5\u7684\u5148\u67E5\uFF09\uFF1B\u5C0F\u60F3\u6CD5\u53EF\u5C11\u95EE\uFF1B\u7528\u6237\u8BF4\u300C\u76F4\u63A5\u5C55\u5F00\u300D\u5219\u8DF3\u8FC7\u3002
\u5B8C\u6210\u540E\u56DE\u586B\u300C\u5DF2\u5B8C\u6210/\u672A\u5B8C\u6210/\u4E0B\u4E00\u6B65\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 progress \u52A8\u4F5C\uFF09\uFF1B\u4EA7\u51FA\u53D1\u5E03\u540E\u6302\u5230\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF0C\u7136\u540E\u5F00\u59CB\u7814\u7A76/\u63A8\u8FDB\u3002`}function $i({searchRef:i,onOpenSettings:t}){let r=g(C=>C.mode),o=g(C=>C.device),n=g(C=>C.cloudBase),s=g(C=>C.canUndo),d=g(C=>C.query),[m,p]=e.default.useState(d);e.default.useEffect(()=>{p(d)},[d]);let u=r==="cloud",k=u?a("\u4E91\u7AEF\u6A21\u5F0F"):a("\u672C\u673A\u6A21\u5F0F"),M=u?n?`${k} \xB7 ${n}`:k:o?`${k} \xB7 ${o}`:k;return e.default.createElement("header",{className:"ip-topbar","data-window-drag":""},e.default.createElement("div",{className:"ip-brand"},e.default.createElement("span",{className:"ip-brand-mark"},e.default.createElement(B,{name:"bulb",size:17,stroke:1.7})),e.default.createElement("span",{className:"ip-title"},a("\u7075\u611F\u6C60")),e.default.createElement("span",{className:`ip-mode ${u?"is-cloud":""}`,title:M},e.default.createElement("i",{"aria-hidden":"true"}),k)),e.default.createElement("span",{className:"ip-topbar-spacer"}),e.default.createElement("div",{className:"ip-search"},e.default.createElement("span",{className:"ip-search-icon"},e.default.createElement(B,{name:"search",size:14})),e.default.createElement("input",{ref:i,type:"text",value:m,placeholder:a("\u641C\u7D22\u60F3\u6CD5\u2026"),"aria-label":a("\u641C\u7D22\u60F3\u6CD5"),onChange:C=>{p(C.target.value),he(C.target.value)}}),m?e.default.createElement("span",{className:"ip-search-clear"},e.default.createElement(j,{icon:"close",size:12,label:a("\u6E05\u7A7A\u641C\u7D22"),onClick:()=>{p(""),he(""),i.current?.focus()}})):null),s&&!u?e.default.createElement(j,{icon:"undo",label:a("\u64A4\u9500\u4E0A\u4E00\u6B65"),onClick:()=>be()}):null,e.default.createElement(j,{icon:"refresh",label:a("\u5237\u65B0"),onClick:()=>He()}),e.default.createElement(j,{icon:"settings",label:a("\u8BBE\u7F6E"),onClick:t}))}var Fi=208;function ji(i){i&&(i.style.height="auto",i.style.height=`${Math.min(i.scrollHeight,Fi)}px`)}function Hi({highlight:i}){let[t,r]=e.default.useState(""),[o,n]=e.default.useState(""),[s,d]=e.default.useState(""),[m,p]=e.default.useState(""),[u,k]=e.default.useState(!1),[M,C]=e.default.useState(!1),[P,O]=e.default.useState(!1),h=e.default.useRef(null);e.default.useEffect(()=>{ji(h.current)},[t,u]);let f=async()=>{if(M)return;let b=t.trim(),T=o.trim();if(!b&&!T){w(a("\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60"),{error:!0}),h.current?.focus();return}let x={raw_text:b};T&&(x.title=T);let N=s.trim();N&&(x.summary=N);let z=li(m);z.length&&(x.tags=z),C(!0);let H=await Je(x);C(!1),H&&(r(""),n(""),d(""),p(""),k(!1),window.requestAnimationFrame(()=>{let l=h.current;l&&(l.style.height="auto",l.focus())}))},K=b=>{if((b.metaKey||b.ctrlKey)&&b.key==="Enter"){b.preventDefault(),f();return}b.key==="Escape"&&u&&(b.stopPropagation(),k(!1))};return e.default.createElement("section",{className:`ip-capture ${P?"is-focused":""} ${i?"is-highlight":""}`,"aria-label":a("\u5F55\u5165\u7075\u611F")},e.default.createElement("div",{className:"ip-capture-main"},e.default.createElement("textarea",{ref:h,className:"ip-capture-input",rows:2,value:t,placeholder:a("\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60"),"aria-label":a("\u60F3\u6CD5\u539F\u6587"),onFocus:()=>O(!0),onBlur:()=>O(!1),onChange:b=>r(b.target.value),onKeyDown:K}),e.default.createElement("div",{className:"ip-capture-side"},e.default.createElement("button",{type:"button",className:`ip-capture-toggle ${u?"is-open":""}`,"aria-expanded":u,onClick:()=>k(b=>!b)},e.default.createElement(B,{name:"chevD",size:13}),e.default.createElement("span",null,a(u?"\u6536\u8D77\u9009\u9879":"\u66F4\u591A\u9009\u9879"))),e.default.createElement("span",{className:"ip-cmdhint"},a("\u2318/Ctrl+Enter \u4FDD\u5B58")),e.default.createElement(E,{variant:"primary",icon:"plus",onClick:f,disabled:M},M?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u5165\u6C60")))),u?e.default.createElement("div",{className:"ip-capture-extra"},e.default.createElement(_,{label:a("\u6807\u9898\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:o,onChange:b=>n(b.target.value),placeholder:a("\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57")})),e.default.createElement(_,{label:a("\u6807\u7B7E\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:m,onChange:b=>p(b.target.value),placeholder:a("\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053")})),e.default.createElement("div",{className:"ip-span2"},e.default.createElement(_,{label:a("\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("textarea",{rows:2,value:s,onChange:b=>d(b.target.value),placeholder:a("\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868")})))):null)}function qi(){let i=g(o=>o.status),t=g(o=>o.counts),r=g(o=>o.total);return e.default.createElement("nav",{className:"ip-tabs","aria-label":a("\u72B6\u6001\u7B5B\u9009")},Pi.map(o=>{let n=o.key==="all"?t.all||r||0:t[o.key]||0;return e.default.createElement("button",{key:o.key,type:"button",className:`ip-tab ${i===o.key?"is-on":""}`,"aria-pressed":i===o.key,onClick:()=>qe(o.key)},e.default.createElement("span",null,a(o.label)),e.default.createElement("span",{className:"ip-tab-count"},n))}))}function Ji({idea:i,active:t,onClick:r}){let o=Array.isArray(i.tags)?i.tags:[];return e.default.createElement("button",{type:"button",className:`ip-card ${t?"is-on":""}`,"aria-current":t?"true":void 0,onClick:r},e.default.createElement("div",{className:"ip-card-head"},e.default.createElement(ye,{status:i.status},ne(i.status)),e.default.createElement("span",{className:"ip-card-no"},i.idea_no),e.default.createElement("time",{className:"ip-card-time",dateTime:i.updated_at||void 0},Oi(i.updated_at))),e.default.createElement("div",{className:"ip-card-title"},Z(i)),i.summary?e.default.createElement("div",{className:"ip-card-sum"},i.summary):null,e.default.createElement("div",{className:"ip-card-foot"},o.slice(0,4).map(n=>e.default.createElement(we,{key:n},n)),o.length>4?e.default.createElement("span",{className:"ip-muted"},"+",o.length-4):null,e.default.createElement("span",{className:"ip-card-meta"},ri(i.n_updates||0,"1 \u6761\u8FDB\u5C55","{n} \u6761\u8FDB\u5C55"),e.default.createElement("span",{className:"ip-sep"},"\xB7"),ri(i.n_links||0,"1 \u4E2A\u4EA7\u51FA","{n} \u4E2A\u4EA7\u51FA"))))}function Wi({narrow:i}){let t=g(p=>p.ideas),r=g(p=>p.listLoading),o=g(p=>p.status),n=g(p=>p.query),s=g(p=>p.selectedNo),d=g(p=>p.mode),m=o!=="all"||!!n.trim();return r&&!t.length?e.default.createElement(oe,{label:a("\u6B63\u5728\u52A0\u8F7D\u2026")}):t.length?e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-list"},t.map(p=>e.default.createElement(Ji,{key:p.idea_no,idea:p,active:!i&&p.idea_no===s,onClick:()=>ae(p.idea_no)}))),r?e.default.createElement("div",{className:"ip-list-note"},a("\u6B63\u5728\u5237\u65B0\u2026")):null):e.default.createElement(ke,{icon:"note",title:m?a("\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5"):a("\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684"),hint:m?a("\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002"):d==="cloud"?a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002"):a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002")})}function Yi({update:i}){let[t,r]=e.default.useState(!1),o=i.content||"",n=o.length>320;return e.default.createElement("li",{className:"ip-tl-item"},e.default.createElement("div",{className:"ip-tl-meta"},e.default.createElement("span",{className:"ip-tl-time"},Se(i.created_at)),i.source?e.default.createElement("span",{className:"ip-src",title:i.source},e.default.createElement(B,{name:"monitor",size:11}),si(i.source)):null),e.default.createElement("div",{className:`ip-tl-content ${n&&!t?"is-clamped":""}`},o),n?e.default.createElement("button",{type:"button",className:"ip-tl-toggle",onClick:()=>r(s=>!s)},t?a("\u6536\u8D77"):a("\u5C55\u5F00\u5168\u90E8")):null)}function Vi({link:i}){let t=Ki(i.url),r=/^https?:\/\//i.test(t);return e.default.createElement("li",null,e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(B,{name:"link",size:13})),e.default.createElement("a",{href:t,title:i.url,target:r?"_blank":void 0,rel:r?"noreferrer noopener":void 0},i.title||i.url),i.ref_type==="doc"?e.default.createElement("span",{className:"ip-link-kind"},a("\u6587\u6863")):null,r?e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(B,{name:"upRight",size:12})):null)}function Gi({no:i}){let[t,r]=e.default.useState(""),[o,n]=e.default.useState(!1),s=async d=>{d.preventDefault();let m=t.trim();if(!m){w(a("\u5148\u5199\u70B9\u5185\u5BB9"),{error:!0});return}n(!0);let p=await Ye(i,m);n(!1),p&&r("")};return e.default.createElement("form",{className:"ip-abox",onSubmit:s},e.default.createElement(_,{label:a("\u65B0\u589E\u8FDB\u5C55")},e.default.createElement("textarea",{rows:3,value:t,placeholder:a("\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026"),onChange:d=>r(d.target.value),onKeyDown:d=>{(d.metaKey||d.ctrlKey)&&d.key==="Enter"&&s(d)}})),e.default.createElement("div",{className:"ip-abox-foot"},e.default.createElement("span",{className:"ip-muted"},a("\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{size:"sm",variant:"primary",type:"submit",disabled:o},o?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u8BB0\u5F55\u8FDB\u5C55"))))}function Xi({no:i}){let[t,r]=e.default.useState(""),[o,n]=e.default.useState(""),[s,d]=e.default.useState(!1);return e.default.createElement("form",{className:"ip-abox",onSubmit:async p=>{p.preventDefault();let u=o.trim();if(!u){w(a("\u5148\u586B\u94FE\u63A5"),{error:!0});return}if(!/^https?:\/\//i.test(u)&&/^[\w-]+(\.[\w-]+)+/.test(u)&&(u=`https://${u}`),!/^https?:\/\//i.test(u)){w(a("\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}d(!0);let k=await Ve(i,{title:t.trim()||u,url:u});d(!1),k&&(r(""),n(""))}},e.default.createElement(_,{label:a("\u4EA7\u51FA\u6807\u9898")},e.default.createElement("input",{value:t,placeholder:a("\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55"),onChange:p=>r(p.target.value)})),e.default.createElement(_,{label:a("\u94FE\u63A5")},e.default.createElement("input",{value:o,placeholder:"https://\u2026",onChange:p=>n(p.target.value)})),e.default.createElement("div",{className:"ip-abox-foot"},e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{size:"sm",variant:"primary",type:"submit",disabled:s},s?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58\u4EA7\u51FA"))))}function Qi({idea:i,onClose:t}){let[r,o]=e.default.useState(i.title||""),[n,s]=e.default.useState(i.summary||""),[d,m]=e.default.useState(i.raw_text||""),[p,u]=e.default.useState((i.tags||[]).join(", ")),[k,M]=e.default.useState(i.source_note||""),[C,P]=e.default.useState(!1),O=async h=>{h.preventDefault();let f=r.trim();if(!f){w(a("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}P(!0);let K=await ve(i.idea_no,{title:f,summary:n.trim(),raw_text:d,tags:li(p),source_note:k.trim()},a("\u5DF2\u4FDD\u5B58"));P(!1),K&&t()};return e.default.createElement(re,{title:a("\u7F16\u8F91\u60F3\u6CD5"),onClose:t,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{onClick:t},a("\u53D6\u6D88")),e.default.createElement(E,{variant:"primary",type:"submit",form:"ip-edit-form",disabled:C},C?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},e.default.createElement("form",{id:"ip-edit-form",className:"ip-dialog-rows",onSubmit:O},e.default.createElement(_,{label:a("\u6807\u9898")},e.default.createElement("input",{value:r,onChange:h=>o(h.target.value)})),e.default.createElement(_,{label:a("\u6458\u8981")},e.default.createElement("textarea",{rows:2,value:n,onChange:h=>s(h.target.value)})),e.default.createElement(_,{label:a("\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09")},e.default.createElement("textarea",{rows:6,value:d,onChange:h=>m(h.target.value)})),e.default.createElement(_,{label:a("\u6807\u7B7E"),hint:a("\u9017\u53F7\u5206\u9694")},e.default.createElement("input",{value:p,onChange:h=>u(h.target.value)})),e.default.createElement(_,{label:a("\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883")},e.default.createElement("input",{value:k,onChange:h=>M(h.target.value)}))))}function Zi({idea:i,onClose:t}){let[r,o]=e.default.useState(!1),n=async()=>{o(!0);let s=await We(i.idea_no);o(!1),s&&t()};return e.default.createElement(re,{title:a("\u5220\u9664\u60F3\u6CD5"),onClose:t,width:420,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{onClick:t},a("\u53D6\u6D88")),e.default.createElement(E,{variant:"danger-solid",onClick:n,disabled:r},r?a("\u5220\u9664\u4E2D\u2026"):a("\u786E\u8BA4\u5220\u9664")))},e.default.createElement("p",{className:"ip-dialog-note"},a("\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002",{title:Z(i),no:i.idea_no})))}function Ri({narrow:i}){let t=g(l=>l.selectedNo),r=g(l=>l.detail),o=g(l=>l.detailLoading),n=g(l=>l.detailError),s=g(l=>l.mode),[d,m]=e.default.useState(!1),[p,u]=e.default.useState(!1),[k,M]=e.default.useState(!1),[C,P]=e.default.useState(!1),[O,h]=e.default.useState(!1);if(e.default.useEffect(()=>{m(!1),u(!1),M(!1),P(!1)},[t]),!t)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement(ke,{icon:"note",title:a("\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5"),hint:a("\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002")})));if(n&&!r)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(B,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},a("\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},n),e.default.createElement(E,{icon:"refresh",onClick:()=>ae(t)},a("\u91CD\u8BD5")))));if(!r)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement(oe,{label:a("\u6B63\u5728\u5C55\u5F00\u2026")}));let f=r.idea||{},K=Array.isArray(r.updates)?r.updates:[],b=Array.isArray(r.links)?r.links:[],T=f.idea_no||t,x=async l=>{O||l===f.status||(h(!0),await ve(T,{status:l},a("\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D",{label:ne(l)})),h(!1))},N=()=>X(Ui(f),a("\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4")),z=s==="cloud",H=()=>{if(z){X(_i(f),a("\u5DF2\u590D\u5236\u94FE\u63A5"));return}X(`\u7075\u611F\u6C60 ${T}\u300A${Z(f)}\u300B\uFF08\u672C\u673A\u6A21\u5F0F\uFF1A\u7528 idea_pool \u5DE5\u5177\u6309\u7F16\u53F7\u8BFB\u53D6\uFF0C\u6216\u5728 DSH \u4FA7\u680F\u300C\u7075\u611F\u6C60\u300D\u67E5\u770B\uFF09`,a("\u5DF2\u590D\u5236\u5F15\u7528"))};return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-detail"},e.default.createElement("div",{className:"ip-detail-head"},i?e.default.createElement("div",{className:"ip-detail-back"},e.default.createElement(E,{size:"sm",variant:"ghost",icon:"chevL",onClick:xe},a("\u8FD4\u56DE\u5217\u8868"))):null,e.default.createElement("div",{className:"ip-detail-title-row"},e.default.createElement("h2",{className:"ip-detail-title"},Z(f)||T),e.default.createElement(j,{icon:"edit",label:a("\u7F16\u8F91"),onClick:()=>m(!0)}),e.default.createElement(j,{icon:"trash",label:a("\u5220\u9664"),onClick:()=>u(!0)})),e.default.createElement("div",{className:"ip-detail-meta"},e.default.createElement(ye,{status:f.status},ne(f.status)),e.default.createElement("span",{className:"ip-card-no"},T),f.source?e.default.createElement("span",null,a("\u6765\u6E90\uFF1A{source}",{source:si(f.source)})):null,e.default.createElement("span",null,a("\u521B\u5EFA {time}",{time:Se(f.created_at)})),e.default.createElement("span",null,a("\u66F4\u65B0 {time}",{time:Se(f.updated_at)}))),Array.isArray(f.tags)&&f.tags.length?e.default.createElement("div",{className:"ip-detail-tags"},f.tags.map(l=>e.default.createElement(we,{key:l},l))):null,e.default.createElement("div",{className:"ip-detail-actions"},e.default.createElement(E,{size:"sm",icon:"copy",onClick:N},a("\u590D\u5236\u5C55\u5F00\u6307\u4EE4")),e.default.createElement(E,{size:"sm",icon:"link",onClick:H},a(z?"\u590D\u5236\u94FE\u63A5":"\u590D\u5236\u5F15\u7528")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":a("\u5207\u6362\u72B6\u6001")},oi.map(l=>e.default.createElement("button",{key:l,type:"button",className:f.status===l?"is-on":"","aria-pressed":f.status===l,disabled:O,onClick:()=>x(l)},ne(l)))))),e.default.createElement("div",{className:"ip-detail-body"},e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u539F\u6587")),e.default.createElement("span",{className:"ip-section-count"},a("\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(j,{icon:"copy",size:13,label:a("\u590D\u5236\u539F\u6587"),onClick:()=>X(f.raw_text||"",a("\u5DF2\u590D\u5236\u539F\u6587"))})),e.default.createElement("pre",{className:"ip-raw"},f.raw_text||a("\uFF08\u65E0\u539F\u6587\uFF09"))),f.summary?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u6458\u8981"))),e.default.createElement("div",{className:"ip-summary"},f.summary)):null,f.source_note?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u5907\u6CE8"))),e.default.createElement("div",{className:"ip-text"},f.source_note)):null,e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u5173\u8054\u4EA7\u51FA")),e.default.createElement("span",{className:"ip-section-count"},b.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>P(l=>!l)},a("\u52A0\u4EA7\u51FA"))),b.length?e.default.createElement("ul",{className:"ip-links"},b.map(l=>e.default.createElement(Vi,{key:l.id||l.url,link:l}))):e.default.createElement("p",{className:"ip-muted"},a("\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002")),C?e.default.createElement(Xi,{no:T}):null),e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u8FDB\u5C55")),e.default.createElement("span",{className:"ip-section-count"},K.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>M(l=>!l)},a("\u52A0\u8FDB\u5C55"))),K.length?e.default.createElement("ul",{className:"ip-timeline"},K.map(l=>e.default.createElement(Yi,{key:l.id||l.created_at,update:l}))):e.default.createElement("p",{className:"ip-muted"},a("\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002")),k?e.default.createElement(Gi,{no:T}):null)))),d?e.default.createElement(Qi,{idea:f,onClose:()=>m(!1)}):null,p?e.default.createElement(Zi,{idea:f,onClose:()=>u(!1)}):null)}function Ne(i){return String(i||"").trim().replace(/\/+$/,"")}function et({onClose:i}){let t=g(y=>y.settings),r=g(y=>y.storagePath),o=g(y=>y.device),n=g(y=>y.mode),[s,d]=e.default.useState(n==="cloud"?"cloud":"local"),[m,p]=e.default.useState(o),[u,k]=e.default.useState(Q),[M,C]=e.default.useState(""),[P,O]=e.default.useState(!1),[h,f]=e.default.useState(!1),[K,b]=e.default.useState(!1),[T,x]=e.default.useState(!1),[N,z]=e.default.useState(null);e.default.useEffect(()=>{Ge()},[]);let H=e.default.useRef(!1);e.default.useEffect(()=>{if(!t||H.current)return;H.current=!0,d(t.mode==="cloud"?"cloud":"local"),typeof t.device=="string"&&p(t.device);let y=t.cloud&&typeof t.cloud.base=="string"?t.cloud.base:"";k(y||Q)},[t]);let l=t&&t.cloud||{},q=!!l.hasKey,Ce=typeof l.keyHint=="string"?l.keyHint:"",ze=typeof l.base=="string"?l.base:"",di=Ne(u)||ze||Q,ci=t&&typeof t.storagePath=="string"&&t.storagePath||r,Ee=y=>{d(y),z(null)},ui=async()=>{if(h)return;let y=Ne(u);if(!y){w(a("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(y)){w(a("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}f(!0),z(null);let L=await Qe({base:y,apiKey:M.trim()});if(f(!1),L&&L.ok){z({ok:!0,text:a("\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms",{count:L.count,ms:L.latencyMs})});return}let J=L&&Number(L.status);z({ok:!1,text:J===401||J===403?a("\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key"):a("\u8FDE\u63A5\u5931\u8D25\uFF1A{error}",{error:L&&L.error||a("\u672A\u77E5\u9519\u8BEF")})})},mi=async()=>{if(T||!q||typeof window>"u"||typeof window.confirm!="function"||!window.confirm(a("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002")))return;x(!0);let L=await Ze();x(!1),L&&(C(""),z(null))},fi=async()=>{K||(b(!0),await Re(),b(!1))},gi=async()=>{if(P)return;let y=s==="cloud"?"cloud":"local",L={};t?y!==t.mode&&(L.mode=y):y!==n&&(L.mode=y);let J=m.trim();if(!J){w(a("\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if((t?J!==t.device:J!==o)&&(L.device=J),y==="cloud"){let R=Ne(u);if(!R){w(a("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(R)){w(a("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}let ee={};R!==ze&&(ee.base=R);let Le=M.trim();Le&&(ee.apiKey=Le),Object.keys(ee).length&&(L.cloud=ee)}if(Object.keys(L).length===0){i();return}O(!0);let Me=await Xe(L);O(!1),Me&&i()};return e.default.createElement(re,{title:a("\u8BBE\u7F6E"),onClose:i,width:568,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{onClick:i},a("\u5173\u95ED")),e.default.createElement(E,{variant:"primary",onClick:gi,disabled:P},P?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},e.default.createElement("div",{className:"ip-dialog-rows"},e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8FD0\u884C\u6A21\u5F0F")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":a("\u8FD0\u884C\u6A21\u5F0F")},e.default.createElement("button",{type:"button",className:s==="local"?"is-on":"","aria-pressed":s==="local",onClick:()=>Ee("local")},a("\u672C\u673A\u6A21\u5F0F")),e.default.createElement("button",{type:"button",className:s==="cloud"?"is-on":"","aria-pressed":s==="cloud",onClick:()=>Ee("cloud")},a("\u4E91\u7AEF\u6A21\u5F0F"))),e.default.createElement("p",{className:"ip-dialog-note"},s==="cloud"?a("\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002",{base:di}):a("\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002")))),s==="local"?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5B58\u50A8\u8DEF\u5F84")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("code",{className:"ip-dialog-code"},ci||a("\u672A\u77E5")),e.default.createElement("p",{className:"ip-dialog-note"},a("\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8BBE\u5907\u6807\u8BC6")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:m,placeholder:"dsh-mac / dsh-win / volcano",onChange:y=>p(y.target.value)})),e.default.createElement("p",{className:"ip-dialog-note"},a("\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u51FA")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(E,{icon:"download",onClick:()=>ei()},a("\u5BFC\u51FA JSON"))),e.default.createElement("p",{className:"ip-dialog-note"},a("\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002"))))):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u4E91\u7AEF\u5730\u5740")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:u,placeholder:Q,onChange:y=>{k(y.target.value),z(null)}})),e.default.createElement("p",{className:"ip-dialog-note"},a("\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002",{base:Q})))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("API Key")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",type:"password",autoComplete:"off",value:M,placeholder:q?a("\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}",{hint:Ce||"****"}):a("\u7C98\u8D34\u4E91\u7AEF API Key"),onChange:y=>{C(y.target.value),z(null)}}),q?e.default.createElement(E,{size:"sm",variant:"danger",onClick:mi,disabled:T||P},T?a("\u6E05\u9664\u4E2D\u2026"):a("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key")):null),e.default.createElement("p",{className:"ip-dialog-note"},q?a("\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002",{hint:Ce||"****"}):a("\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u6D4B\u8BD5\u8FDE\u63A5")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(E,{size:"sm",icon:"bolt",onClick:ui,disabled:h},h?a("\u6D4B\u8BD5\u4E2D\u2026"):a("\u6D4B\u8BD5\u8FDE\u63A5")),N?e.default.createElement("span",{className:`ip-cloud-status ${N.ok?"is-ok":"is-error"}`},e.default.createElement(B,{name:N.ok?"check":"alert",size:12}),N.text):e.default.createElement("span",{className:"ip-cloud-status"},a("\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5"))))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u5165\u5230\u672C\u673A")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(E,{size:"sm",icon:"download",onClick:fi,disabled:K||!q,title:q?void 0:a("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")},K?a("\u5BFC\u5165\u4E2D\u2026"):a("\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A"))),e.default.createElement("p",{className:"ip-dialog-note"},q?a("\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002"):a("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")))))))}function pi(){Oe();let i=g(x=>x.booted),t=g(x=>x.loading),r=g(x=>x.error),o=g(x=>x.canUndo),n=g(x=>x.ideas),s=g(x=>x.status),d=g(x=>x.query),m=g(x=>x.selectedNo),p=g(x=>x.suppressAutoSelect),u=e.default.useRef(null),k=e.default.useRef(null),[M,C]=e.default.useState(1200),[P,O]=e.default.useState(!1),h=M<880,f=M<640;e.default.useEffect(()=>{ge()},[]),e.default.useEffect(()=>{let x=u.current;if(!x||typeof ResizeObserver>"u")return;let N=new ResizeObserver(([z])=>{z&&z.contentRect&&C(z.contentRect.width)});return N.observe(x),()=>N.disconnect()},[]),e.default.useEffect(()=>{!i||h||m||p||d.trim()||n.length&&ae(n[0].idea_no)},[i,h,m,p,d,n]),e.default.useEffect(()=>{let x=N=>{let z=N.target,H=z&&z.tagName||"",l=/^(INPUT|TEXTAREA|SELECT)$/.test(H)||!!(z&&z.isContentEditable);if((N.metaKey||N.ctrlKey)&&!N.shiftKey&&(N.key==="z"||N.key==="Z")&&!l&&o){N.preventDefault(),be();return}if(N.key==="/"&&!l&&!N.metaKey&&!N.ctrlKey&&!N.altKey){N.preventDefault(),k.current?.focus();return}N.key==="Escape"&&h&&m&&xe()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[o,h,m]);let K=!h||!m,b=!h||!!m,T=i&&!t&&!r&&n.length===0&&s==="all"&&!d.trim();return e.default.createElement("div",{className:`ip-root ${h?"is-narrow":""} ${f?"is-compact":""}`,ref:u},e.default.createElement("style",null,De),e.default.createElement($i,{searchRef:k,onOpenSettings:()=>O(!0)}),e.default.createElement(Hi,{highlight:T}),i?e.default.createElement(qi,null):null,e.default.createElement("div",{className:"ip-body"},t&&!i?e.default.createElement(oe,{label:a("\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026")}):r&&!i?e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(B,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},a("\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},r),e.default.createElement(E,{icon:"refresh",onClick:()=>je()},a("\u91CD\u8BD5"))):e.default.createElement(e.default.Fragment,null,K?e.default.createElement("div",{className:"ip-list-pane"},e.default.createElement(Wi,{narrow:h})):null,b?e.default.createElement(Ri,{narrow:h}):null)),P?e.default.createElement(et,{onClose:()=>O(!1)}):null,e.default.createElement(ti,null))}function it({size:i}){return e.default.createElement(B,{name:"bulb",size:i})}var tt=["slots"];function at(i){i.slots.inject("main",()=>i.slots.register({name:"main",key:ai},pi)),i.effect(()=>{let t=null,r=()=>{t?.(),t=i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:ai,order:15,label:()=>a("\u7075\u611F\u6C60")},it))};r();let o=pe(r);return()=>{o(),t?.()}},"dsh-idea-pool: sidebar entry")}
return module.exports}})
