window.__ModuleLoader__.load({id:"dsh-idea-pool",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Hi=Object.create;var Ce=Object.defineProperty;var ji=Object.getOwnPropertyDescriptor;var qi=Object.getOwnPropertyNames;var Wi=Object.getPrototypeOf,Ji=Object.prototype.hasOwnProperty;var Vi=(i,n)=>{for(var a in n)Ce(i,a,{get:n[a],enumerable:!0})},Re=(i,n,a,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of qi(n))!Ji.call(i,o)&&o!==a&&Ce(i,o,{get:()=>n[o],enumerable:!(s=ji(n,o))||s.enumerable});return i};var ze=(i,n,a)=>(a=i!=null?Hi(Wi(i)):{},Re(n||!i||!i.__esModule?Ce(a,"default",{value:i,enumerable:!0}):a,i)),Yi=i=>Re(Ce({},"__esModule",{value:!0}),i);var Tt={};Vi(Tt,{App:()=>Pi,apply:()=>Lt,inject:()=>Dt});module.exports=Yi(Tt);var e=ze(require("react"),1);var ei=`/* dsh-idea-pool \u5BA2\u6237\u7AEF\u6837\u5F0F\uFF1A\u989C\u8272\u53EA\u8D70 --dsw-alias-* \u8BED\u4E49 token\uFF08\u5E26 fallback\uFF09\uFF0C\u660E\u6697\u4E3B\u9898\u7531\u5BBF\u4E3B\u5207\u6362\u3002 */
.ip-root {
  --ip-ink: var(--dsw-alias-label-primary, #1f2329);
  --ip-ink2: var(--dsw-alias-label-secondary, #4e5969);
  --ip-ink3: var(--dsw-alias-label-tertiary, #7a828e);
  --ip-ink4: var(--dsw-alias-label-caption, #a9aeb8);
  /* \u5FC5\u8981\u5143\u4FE1\u606F\uFF1A\u6BD4 ink3 \u6DF1\u4E00\u6863\uFF0C\u6EE1\u8DB3 12px \u6587\u5B57\u7684 4.5:1 \u5BF9\u6BD4\u5EA6 */
  --ip-meta: color-mix(in srgb, var(--ip-ink2) 78%, var(--ip-ink3));
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
  position: relative;
  width: 100%;
  display: flex; flex-direction: column; gap: 6px;
  padding: 11px 12px 10px;
  border-radius: var(--ip-r-md);
  border: 1px solid var(--ip-line);
  background: var(--ip-card);
  text-align: left;
  transition: border-color 0.16s ease, background 0.16s ease, box-shadow 0.16s ease;
}
.ip-card:hover { border-color: var(--ip-line-strong); background: color-mix(in srgb, var(--ip-hover) 45%, var(--ip-card)); }
.ip-card.is-on {
  border-color: color-mix(in srgb, var(--ip-primary) 20%, var(--ip-line));
  background: color-mix(in srgb, var(--ip-primary) 5%, var(--ip-card));
  box-shadow: none;
}
.ip-card.is-on::before {
  content: "";
  position: absolute; left: -1px; top: 11px; bottom: 11px; width: 3px;
  border-radius: 3px; background: var(--ip-primary);
}
@keyframes ip-card-flash {
  from { background: color-mix(in srgb, var(--ip-primary) 16%, var(--ip-card)); }
  to { background: var(--ip-card); }
}
.ip-card.is-new { animation: ip-card-flash 1s ease-out; }
.ip-card-head { display: flex; align-items: center; gap: 8px; min-width: 0; }
.ip-card-no { font-family: var(--ip-mono); font-size: 12px; letter-spacing: 0.3px; color: var(--ip-ink3); white-space: nowrap; }
.ip-card-time { font-size: 12px; color: var(--ip-meta); white-space: nowrap; }
.ip-card-title { font-size: 14.5px; font-weight: 650; line-height: 21px; color: var(--ip-ink); overflow-wrap: anywhere; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.ip-card-sum { font-size: 12.5px; line-height: 18px; color: var(--ip-ink2); overflow-wrap: anywhere; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
.ip-card-foot { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; margin-top: 1px; font-size: 12px; color: var(--ip-meta); }
.ip-card-status { display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; font-weight: 600; color: var(--ip-meta); }
.ip-card-status i { width: 6px; height: 6px; border-radius: 50%; background: var(--ip-ink3); flex: none; }
.ip-card-status.is-active i { background: var(--ip-business); }
.ip-card-status.is-done i { background: var(--ip-success); }
.ip-card-status.is-parked i { background: var(--ip-warn); }
.ip-card-status.is-pool i { background: var(--ip-ink3); }
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
/* \u5F69\u70B9\u627F\u62C5\u72B6\u6001\u8BED\u4E49\uFF0C\u6587\u5B57\u4FDD\u6301\u4E2D\u6027\u8272\u4EE5\u901A\u8FC7\u5BF9\u6BD4\u5EA6 */
.ip-badge { color: var(--ip-ink2); background: var(--ip-hover); }
.ip-badge .ip-dot { background: var(--ip-ink3); }
.ip-badge.is-pool { background: color-mix(in srgb, var(--ip-ink3) 10%, transparent); }
.ip-badge.is-pool .ip-dot { background: var(--ip-ink3); }
.ip-badge.is-active { background: color-mix(in srgb, var(--ip-business) 10%, transparent); }
.ip-badge.is-active .ip-dot { background: var(--ip-business); }
.ip-badge.is-done { background: color-mix(in srgb, var(--ip-success) 10%, transparent); }
.ip-badge.is-done .ip-dot { background: var(--ip-success); }
.ip-badge.is-parked { background: color-mix(in srgb, var(--ip-warn) 10%, transparent); }
.ip-badge.is-parked .ip-dot { background: var(--ip-warn); }
.ip-badge.is-neutral { color: var(--ip-ink2); background: var(--ip-hover); }
.ip-badge.is-neutral .ip-dot { background: var(--ip-ink3); }

/* ---------- \u8BE6\u60C5 ---------- */
.ip-detail { display: flex; flex-direction: column; }
.ip-detail-head { padding: 14px 18px 12px; display: flex; flex-direction: column; gap: 8px; }
.ip-detail-back { display: none; }
.ip-detail-title-row { display: flex; align-items: flex-start; gap: 10px; }
.ip-detail-title { flex: 1; min-width: 0; font-size: 17px; font-weight: 650; line-height: 26px; overflow-wrap: anywhere; }
.ip-detail-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-size: 12px; color: var(--ip-meta); }
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
.ip-detail-body { width: 100%; max-width: 760px; margin: 0 auto; padding: 0 18px 28px; }
.ip-section { padding: 16px 0 6px; border-top: 1px solid var(--ip-line); }
.ip-section:first-child { border-top: 0; }
.ip-section-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; min-height: 26px; }
.ip-section-title { font-size: 12px; font-weight: 650; color: var(--ip-ink2); letter-spacing: 0.04em; }
.ip-section-count { font-size: 12px; color: var(--ip-meta); font-variant-numeric: tabular-nums; }
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
.ip-summary { font-size: 14px; line-height: 23px; color: var(--ip-ink); white-space: pre-wrap; overflow-wrap: anywhere; }
.ip-text { font-size: 14px; line-height: 23px; color: var(--ip-ink2); white-space: pre-wrap; overflow-wrap: anywhere; }
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
.ip-tl-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 3px; font-size: 12px; color: var(--ip-meta); }
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
.ip-root.is-narrow .ip-mode { display: inline-flex; height: 19px; padding: 0 6px; font-size: 11px; line-height: 19px; }
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


/* \u52A8\u6548\u964D\u7EA7\uFF1A\u5BBF\u4E3B/\u7CFB\u7EDF\u5F00\u542F\u300C\u51CF\u5C11\u52A8\u6001\u6548\u679C\u300D\u65F6\u4E0D\u505A\u4F4D\u79FB\u52A8\u753B */
@media (prefers-reduced-motion: reduce) {
  .ip-root *, .ip-root *::before, .ip-root *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.ip-latest {
  border: 1px solid color-mix(in srgb, var(--ip-business) 16%, var(--ip-line));
  background: color-mix(in srgb, var(--ip-business) 4%, var(--ip-card));
  border-radius: var(--ip-r-md);
  padding: 12px 14px;
}
.ip-latest-content { font-size: 14px; line-height: 23px; color: var(--ip-ink); white-space: pre-wrap; overflow-wrap: anywhere; }
.ip-latest-content.is-clamped { display: -webkit-box; -webkit-line-clamp: 7; -webkit-box-orient: vertical; overflow: hidden; }
.ip-latest-foot { display: flex; align-items: center; gap: 8px; margin-top: 9px; padding-top: 7px; border-top: 1px solid var(--ip-line); }
.ip-raw-fold {
  width: 100%;
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  padding: 10px 12px;
  border: 1px dashed var(--ip-line-strong, var(--ip-line));
  border-radius: var(--ip-r-sm);
  background: var(--ip-hover);
  color: var(--ip-ink2); font-size: 12px; text-align: left; cursor: pointer;
}
.ip-raw-fold:hover { border-color: color-mix(in srgb, var(--ip-business) 35%, var(--ip-line)); color: var(--ip-ink); }

.ip-settings-group {
  border: 1px solid var(--ip-line);
  border-radius: var(--ip-r-md);
  padding: 0 12px 6px;
  margin: 10px 0;
  background: var(--ip-card);
}
.ip-settings-head {
  padding: 10px 0 7px;
  margin-bottom: 2px;
  border-bottom: 1px solid var(--ip-line);
}
.ip-settings-head h3 { margin: 0 0 2px; font-size: 13px; font-weight: 650; color: var(--ip-ink); }
.ip-settings-head p { margin: 0; font-size: 12px; line-height: 18px; color: var(--ip-ink3); }
.ip-settings-group .ip-dialog-row { padding-top: 9px; padding-bottom: 7px; }

/* \u7A7A\u95F2\u5F55\u5165\u6761\u6536\u6210\u5355\u884C\u5165\u53E3\uFF1B\u805A\u7126/\u6709\u5185\u5BB9\u518D\u5C55\u5F00 */
.ip-capture.is-collapsed { padding: 6px 10px; }
.ip-capture.is-collapsed .ip-capture-input { height: 22px !important; min-height: 22px; padding: 0; }
.ip-capture.is-collapsed .ip-capture-toggle,
.ip-capture.is-collapsed .ip-cmdhint { display: none; }
.ip-capture.is-collapsed .ip-capture-side { align-items: center; }
/* \u7A84\u5C4F\u9605\u8BFB\u8BE6\u60C5\u65F6\u6536\u8D77\u641C\u7D22\uFF0C\u628A\u9AD8\u5EA6\u7559\u7ED9\u6B63\u6587 */
.ip-root.is-narrow.is-reading .ip-search { display: none; }

/* \u8BE6\u60C5\u72B6\u6001\uFF1A\u4E0B\u62C9\u52A8\u4F5C\u83DC\u5355\uFF0C\u907F\u514D\u548C\u5217\u8868\u7B5B\u9009\u9875\u7B7E\u6DF7\u6DC6 */
.ip-dot.is-pool { background: var(--ip-ink3); }
.ip-dot.is-active { background: var(--ip-business); }
.ip-dot.is-done { background: var(--ip-success); }
.ip-dot.is-parked { background: var(--ip-warn); }
.ip-status-menu { position: relative; display: inline-flex; }
.ip-status-trigger {
  display: inline-flex; align-items: center; gap: 6px;
  height: 28px; padding: 0 9px;
  border: 1px solid var(--ip-line); border-radius: var(--ip-r-sm);
  background: var(--ip-card); color: var(--ip-ink2); font-size: 12px; cursor: pointer;
}
.ip-status-trigger:hover { background: var(--ip-hover); }
.ip-status-trigger[disabled] { opacity: 0.6; cursor: default; }
.ip-status-trigger .ip-status-label { color: var(--ip-ink3); font-size: 11px; }
.ip-status-trigger .ip-dot { width: 6px; height: 6px; border-radius: 50%; flex: none; }
.ip-status-pop {
  position: absolute; right: 0; top: calc(100% + 5px); z-index: 30;
  min-width: 150px; padding: 4px;
  background: var(--ip-card); border: 1px solid var(--ip-line); border-radius: 10px;
  box-shadow: 0 10px 28px color-mix(in srgb, #000 18%, transparent);
}
.ip-status-pop button {
  display: flex; align-items: center; gap: 8px; width: 100%; height: 30px; padding: 0 8px;
  border-radius: 6px; color: var(--ip-ink2); font-size: 12.5px; text-align: left; cursor: pointer;
}
.ip-status-pop button:hover { background: var(--ip-hover); }
.ip-status-pop button.is-on { background: var(--ip-hover); color: var(--ip-ink); font-weight: 600; }
.ip-status-pop button .ip-dot { width: 6px; height: 6px; border-radius: 50%; flex: none; }
.ip-status-pop button svg { margin-left: auto; }

.ip-sort { margin-left: auto; flex: none; position: relative; display: inline-flex; }
.ip-sort-trigger {
  display: inline-flex; align-items: center; gap: 5px; height: 28px; padding: 0 7px;
  border-radius: var(--ip-r-sm); color: var(--ip-ink2); font-size: 12px; white-space: nowrap;
}
.ip-sort-trigger:hover { background: var(--ip-hover); }
.ip-sort-trigger span { color: var(--ip-ink3); font-size: 11px; }
.ip-sort-trigger strong { font-weight: 600; }
.ip-sort-pop {
  position: absolute; right: 0; top: calc(100% + 4px); z-index: 30;
  min-width: 132px; padding: 4px;
  background: var(--ip-card); border: 1px solid var(--ip-line); border-radius: 10px;
  box-shadow: 0 10px 28px color-mix(in srgb, #000 18%, transparent);
}
.ip-sort-pop button {
  display: flex; align-items: center; gap: 8px; width: 100%; height: 30px; padding: 0 8px;
  border-radius: 6px; color: var(--ip-ink2); font-size: 12.5px; text-align: left; cursor: pointer;
}
.ip-sort-pop button:hover { background: var(--ip-hover); }
.ip-sort-pop button.is-on { color: var(--ip-ink); font-weight: 600; background: var(--ip-hover); }
.ip-sort-pop button svg { margin-left: auto; }
.ip-root.is-compact .ip-sort-trigger span { display: none; }

.ip-next-step {
  display: flex; align-items: baseline; gap: 8px;
  margin-bottom: 8px; padding: 7px 10px;
  border-radius: 7px; background: var(--ip-card);
  border: 1px solid color-mix(in srgb, var(--ip-business) 22%, var(--ip-line));
  font-size: 13px; line-height: 20px; color: var(--ip-ink);
}
.ip-next-step-label { flex: none; font-size: 11px; font-weight: 650; color: var(--ip-business); letter-spacing: .04em; }

/* ---------- \u5217\u8868 / \u68B3\u7406\u89C6\u56FE ---------- */
.ip-list-viewbar {
  flex: none;
  display: flex; align-items: center; gap: 8px;
  padding: 7px 12px 6px;
  border-bottom: 1px solid var(--ip-line);
}
.ip-view-switch { display: inline-flex; gap: 2px; padding: 2px; border-radius: 7px; background: var(--ip-hover); }
.ip-view-switch button { height: 23px; padding: 0 9px; border-radius: 5px; font-size: 12px; color: var(--ip-ink3); }
.ip-view-switch button.is-on { background: var(--ip-card); color: var(--ip-ink); font-weight: 600; box-shadow: 0 1px 2px color-mix(in srgb, #000 8%, transparent); }
.ip-list-count { margin-left: auto; font-size: 11.5px; color: var(--ip-ink4); font-variant-numeric: tabular-nums; }
.ip-root.is-review .ip-sort { display: none; }
.ip-review { padding: 10px 12px 22px; }
.ip-review-summary {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 10px; border: 1px solid var(--ip-line); border-radius: var(--ip-r-md);
  background: var(--ip-card);
}
.ip-review-summary > div { min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.ip-review-summary strong { font-size: 13px; font-weight: 650; color: var(--ip-ink); }
.ip-review-summary span { font-size: 11.5px; color: var(--ip-ink3); }
.ip-review-summary .ip-btn { margin-left: auto; flex: none; }
.ip-review-section { margin-top: 14px; }
.ip-review-head {
  display: flex; align-items: baseline; gap: 7px;
  padding: 6px 2px 7px; width: 100%; text-align: left;
}
.ip-review-head h3 { margin: 0; font-size: 12.5px; font-weight: 650; color: var(--ip-ink); letter-spacing: .02em; }
.ip-review-count { font-size: 11px; font-weight: 600; color: var(--ip-ink3); background: var(--ip-hover); border-radius: 999px; padding: 1px 6px; font-variant-numeric: tabular-nums; }
.ip-review-hint { font-size: 11.5px; color: var(--ip-ink4); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ip-review-action { margin-left: auto; flex: none; display: inline-flex; align-items: center; color: var(--ip-ink3); }
.ip-review-head.is-button { border: 0; cursor: pointer; }
.ip-review-head.is-button:hover h3 { color: var(--ip-ink); }
.ip-review-rows { display: flex; flex-direction: column; gap: 1px; }
.ip-review-row {
  display: flex; align-items: flex-start; gap: 9px;
  width: 100%; padding: 8px 7px; border-radius: 7px;
  text-align: left; color: var(--ip-ink2);
}
.ip-review-row:hover { background: var(--ip-hover); }
.ip-review-dot { width: 7px; height: 7px; border-radius: 50%; margin-top: 6px; flex: none; background: var(--ip-ink3); }
.ip-review-dot.is-pool { background: var(--ip-ink3); }
.ip-review-dot.is-active { background: var(--ip-business); }
.ip-review-dot.is-done { background: var(--ip-success); }
.ip-review-dot.is-parked { background: var(--ip-warn); }
.ip-review-main { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 2px; }
.ip-review-title { font-size: 13.5px; font-weight: 600; line-height: 19px; color: var(--ip-ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ip-review-sum { font-size: 12px; line-height: 17px; color: var(--ip-ink3); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ip-review-meta { flex: none; display: flex; flex-direction: column; align-items: flex-end; gap: 1px; font-size: 10.5px; line-height: 15px; color: var(--ip-ink4); font-variant-numeric: tabular-nums; white-space: nowrap; }
.ip-review-meta .is-stale { color: var(--ip-warn); font-weight: 600; }
.ip-root.is-narrow .ip-review { padding: 8px 10px 20px; }

.ip-gist {
  margin: 12px 0 4px;
  padding: 10px 12px;
  border-left: 3px solid var(--ip-business);
  border-radius: 0 var(--ip-r-sm) var(--ip-r-sm) 0;
  background: color-mix(in srgb, var(--ip-business) 5%, var(--ip-card));
  font-size: 14px; line-height: 23px; color: var(--ip-ink); white-space: pre-wrap;
}
.ip-session-chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 2px 0 4px; }
.ip-session-chip {
  display: inline-flex; align-items: center; gap: 6px; max-width: 100%;
  padding: 5px 8px; border: 1px solid var(--ip-line); border-radius: 7px;
  background: var(--ip-card); color: var(--ip-ink2); font-size: 12px; text-align: left;
}
.ip-session-chip:hover { background: var(--ip-hover); border-color: var(--ip-line-strong); }
.ip-session-chip span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ip-session-device { flex: none; color: var(--ip-ink4); font-size: 10.5px; }
.ip-session-results { display: flex; flex-direction: column; gap: 4px; margin-top: 8px; }
.ip-session-result {
  display: flex; flex-direction: column; gap: 2px; width: 100%;
  padding: 8px 9px; border: 1px solid var(--ip-line); border-radius: 7px;
  background: var(--ip-card); text-align: left;
}
.ip-session-result:hover { background: var(--ip-hover); }
.ip-session-id { font-family: var(--ip-mono); font-size: 11px; color: var(--ip-ink3); }
.ip-session-snippet { font-size: 12px; line-height: 18px; color: var(--ip-ink2); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
`;var ti=ze(require("react"),1);var ii={\u7075\u611F\u6C60:"Idea Pool",\u672C\u673A\u6A21\u5F0F:"Local mode",\u4E91\u7AEF\u6A21\u5F0F:"Cloud mode",\u641C\u7D22\u60F3\u6CD5:"Search ideas","\u641C\u7D22\u60F3\u6CD5\u2026":"Search ideas\u2026",\u6E05\u7A7A\u641C\u7D22:"Clear search",\u64A4\u9500\u4E0A\u4E00\u6B65:"Undo last step",\u5237\u65B0:"Refresh",\u8BBE\u7F6E:"Settings",\u5173\u95ED:"Close",\u91CD\u8BD5:"Retry",\u5F55\u5165\u7075\u611F:"Capture an idea",\u60F3\u6CD5\u539F\u6587:"Raw idea text","\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60":"Type whatever comes to mind. Enter for a new line, \u2318/Ctrl+Enter to add.","\u2318/Ctrl+Enter \u4FDD\u5B58":"\u2318/Ctrl+Enter to save",\u66F4\u591A\u9009\u9879:"More options",\u6536\u8D77\u9009\u9879:"Hide options",\u5165\u6C60:"Add","\u4FDD\u5B58\u4E2D\u2026":"Saving\u2026",\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60:"Write something first","\u6807\u9898\uFF08\u53EF\u9009\uFF09":"Title (optional)","\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57":"Leave empty to use the first 40 characters","\u6807\u7B7E\uFF08\u53EF\u9009\uFF09":"Tags (optional)","\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053":"Comma-separated, e.g. research, channels","\u6458\u8981\uFF08\u53EF\u9009\uFF09":"Summary (optional)","\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"One-line summary to scan later",\u72B6\u6001\u7B5B\u9009:"Filter by status",\u5168\u90E8:"All",\u5DF2\u5165\u6C60:"Pool",\u63A8\u8FDB\u4E2D:"In progress",\u5DF2\u6536\u53E3:"Done",\u6401\u7F6E:"Parked",\u5207\u6362\u72B6\u6001:"Change status","\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D":"Status changed to \u201C{label}\u201D","1 \u6761\u8FDB\u5C55":"1 update","{n} \u6761\u8FDB\u5C55":"{n} updates","1 \u4E2A\u4EA7\u51FA":"1 output","{n} \u4E2A\u4EA7\u51FA":"{n} outputs","\u6B63\u5728\u52A0\u8F7D\u2026":"Loading\u2026","\u6B63\u5728\u5237\u65B0\u2026":"Refreshing\u2026","\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026":"Loading the idea pool\u2026",\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25:"Failed to load the idea pool",\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684:"The idea pool is empty",\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5:"No matching ideas","\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002":"Try another keyword or status.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add. In local mode the data stays on this machine.",\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5:"Select an idea","\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002":"The list is on the left. On wide screens, click a card to read its raw text, progress and outputs.","\u6B63\u5728\u5C55\u5F00\u2026":"Loading\u2026",\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25:"Failed to load this idea",\u8FD4\u56DE\u5217\u8868:"Back to list",\u539F\u6587:"Raw text","\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB":"Verbatim \xB7 read-only",\u590D\u5236\u539F\u6587:"Copy raw text",\u5DF2\u590D\u5236\u539F\u6587:"Raw text copied",\u6458\u8981:"Summary",\u5907\u6CE8:"Note","\u6765\u6E90\uFF1A{source}":"Source: {source}","\u521B\u5EFA {time}":"Created {time}","\u66F4\u65B0 {time}":"Updated {time}",\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Copy expand prompt",\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Expand prompt copied",\u590D\u5236\u5F15\u7528:"Copy reference",\u5DF2\u590D\u5236\u5F15\u7528:"Reference copied",\u590D\u5236\u94FE\u63A5:"Copy link",\u5DF2\u590D\u5236\u94FE\u63A5:"Link copied",\u7F16\u8F91:"Edit",\u5220\u9664:"Delete",\u5173\u8054\u4EA7\u51FA:"Outputs",\u52A0\u4EA7\u51FA:"Add output","\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002":"No outputs yet \u2014 attach result links once there is progress.",\u4EA7\u51FA\u6807\u9898:"Output title","\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55":"e.g. research report / progress log",\u94FE\u63A5:"Link","\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934":"The link must start with http(s)://",\u5148\u586B\u94FE\u63A5:"Fill in a link first",\u4FDD\u5B58\u4EA7\u51FA:"Save output",\u8FDB\u5C55:"Progress",\u52A0\u8FDB\u5C55:"Add progress","\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002":"No progress entries yet.",\u65B0\u589E\u8FDB\u5C55:"New progress entry","\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026":"Log progress (conclusion / research status / next step)\u2026",\u5148\u5199\u70B9\u5185\u5BB9:"Write something first","\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B":"Entries are append-only; note the machine and next step for cross-machine handoff",\u8BB0\u5F55\u8FDB\u5C55:"Save progress",\u5C55\u5F00\u5168\u90E8:"Show all",\u6536\u8D77:"Collapse",\u6587\u6863:"Doc","\uFF08\u65E0\u539F\u6587\uFF09":"(no raw text)",\u7F16\u8F91\u60F3\u6CD5:"Edit idea",\u6807\u9898:"Title","\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09":"Raw text (keep verbatim)",\u6807\u7B7E:"Tags",\u9017\u53F7\u5206\u9694:"Comma-separated","\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883":"Note / context",\u53D6\u6D88:"Cancel",\u4FDD\u5B58:"Save",\u5DF2\u4FDD\u5B58:"Saved",\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A:"Title can\u2019t be empty",\u5220\u9664\u60F3\u6CD5:"Delete idea","\u5220\u9664\u4E2D\u2026":"Deleting\u2026",\u786E\u8BA4\u5220\u9664:"Delete","\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002":"Deleting \u201C{title}\u201D ({no}) also removes its progress and outputs.",\u5B58\u50A8\u8DEF\u5F84:"Storage path",\u672A\u77E5:"Unknown","\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002":"In local mode every idea lives in this one JSON file; deleting it clears the idea pool.",\u8FD0\u884C\u6A21\u5F0F:"Run mode","\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002":"Local mode: data lives under this machine\u2019s DSH_HOME/idea-pool/ and is read and written directly by the plugin, with no network. Other machines can\u2019t see it.","\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002":"Cloud mode: data lives in the cloud at {base}; local data stays untouched.",\u4E91\u7AEF\u5730\u5740:"Cloud base URL","\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002":"Base URL of the cloud ideas-api; defaults to {base}.",\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A:"Cloud base URL can\u2019t be empty","\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934":"Cloud base URL must start with http(s)://","API Key":"API Key","\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}":"Saved, last four: {hint}","\u7C98\u8D34\u4E91\u7AEF API Key":"Paste the cloud API key","\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002":"API key saved (last four: {hint}); leave empty to keep it.","\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002":"No API key configured yet \u2014 cloud reads and writes need one.","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key":"Clear saved key","\u6E05\u9664\u4E2D\u2026":"Clearing\u2026","\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key":"Saved API key cleared","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002":"Clear the saved API key? Cloud reads and writes will fail until you add it again.","\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002":"No saved API key yet, so importing is unavailable. Fill in a key and save it first.","\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key":"Connection failed: cloud authentication failed \u2014 check the API Key",\u6D4B\u8BD5\u8FDE\u63A5:"Test connection","\u6D4B\u8BD5\u4E2D\u2026":"Testing\u2026","\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5":"Ping the cloud health endpoint with the URL and key above","\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms":"Connected \xB7 {count} ideas in the cloud \xB7 {ms} ms","\u8FDE\u63A5\u5931\u8D25\uFF1A{error}":"Connection failed: {error}",\u672A\u77E5\u9519\u8BEF:"Unknown error",\u5BFC\u5165\u5230\u672C\u673A:"Import to local",\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A:"Import cloud \u2192 local","\u5BFC\u5165\u4E2D\u2026":"Importing\u2026","\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002":"Fetch everything with the saved cloud configuration and merge it locally by idea number. Does not switch mode or delete local data.","\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761":"Imported {imported} and updated {updated} ideas from the cloud",\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165:"The cloud has no new ideas to import",\u8BBE\u5907\u6807\u8BC6:"Device ID","\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"Written into the source field of ideas and progress entries so the origin can be located across machines.",\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A:"Device ID can\u2019t be empty",\u5BFC\u51FA:"Export","\u5BFC\u51FA JSON":"Export JSON","\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002":"Export all ideas, progress and outputs into a single JSON file for backup or migration.","\u5DF2\u5BFC\u51FA JSON":"JSON exported",\u521A\u521A:"just now","{n} \u5206\u949F\u524D":"{n} min ago",\u672C\u673A:"Local",\u706B\u5C71\u4E91:"Volcano Cloud",\u624B\u52A8:"Manual",\u7F51\u9875:"Web",\u98DE\u4E66:"Feishu",\u5DF2\u590D\u5236:"Copied","\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236":"Copy failed \u2014 select and copy manually","\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}":"Can\u2019t reach the local service: {error}","\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09":"Request failed ({status})","\u5DF2\u5165\u6C60 {no}":"Added {no}","\u5DF2\u5220\u9664 {no}":"Deleted {no}",\u5DF2\u8BB0\u5F55\u8FDB\u5C55:"Progress saved",\u5DF2\u6DFB\u52A0\u4EA7\u51FA:"Output added",\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65:"Undid the last step","\u5DF2\u64A4\u9500\uFF1A{label}":"Undone: {label}",\u5DF2\u5237\u65B0:"Refreshed",\u8BBE\u7F6E\u5DF2\u4FDD\u5B58:"Settings saved",\u6E05\u7A7A\u641C\u7D22\u4E0E\u7B5B\u9009:"Clear search and filters",\u5199\u7B2C\u4E00\u6761:"Write the first one",\u6CA1\u6709\u53EF\u663E\u793A\u7684\u8BE6\u60C5:"No detail to show","\u5148\u6E05\u7A7A\u641C\u7D22\u6216\u5207\u6362\u72B6\u6001\uFF0C\u518D\u9009\u4E00\u6761\u60F3\u6CD5\u3002":"Clear the search or filters, then pick an idea.","\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F":"You have unsaved changes. Close anyway?","\u627E\u5230 {n} \u6761\u60F3\u6CD5":"Found {n} ideas","\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002":"Pick one from the list to view it.",\u663E\u793A\u5168\u90E8\u72B6\u6001:"Show all statuses","\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58":"Reading mode \xB7 verbatim",\u590D\u5236\u5C55\u5F00\u63D0\u793A\u8BCD:"Copy expand prompt",\u590D\u5236\u63A5\u529B\u63D0\u793A\u8BCD:"Copy relay prompt","\u5DF2\u590D\u5236\u63D0\u793A\u8BCD\uFF0C\u53EF\u7C98\u8D34\u5230\u5BF9\u8BDD\u7EE7\u7EED":"Prompt copied. Paste it into the conversation to continue.",\u4E0B\u4E00\u6B65\u4ECE\u8FD9\u91CC\u63A5\u7740\u63A8\u8FDB:"Continue from here","\u6CA1\u6709\u66F4\u65E9\u7684\u8FDB\u5C55\u3002":"No earlier updates.","\u539F\u6587\u9ED8\u8BA4\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00":"Original is folded by default. Click to expand.","\u590D\u5236\u540E\u7C98\u8D34\u7ED9 agent\uFF0C\u7EE7\u7EED\u5C55\u5F00\u6216\u63A5\u529B":"Paste to an agent to expand or relay",\u6536\u8D77\u539F\u6587:"Collapse original",\u5C55\u5F00\u539F\u6587:"Expand original",\u8BB0\u8FDB\u5C55:"Log update",\u6570\u636E\u4F4D\u7F6E:"Data location","\u5148\u9009\u6570\u636E\u5B58\u5728\u54EA\u91CC\uFF1B\u5207\u6362\u6A21\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u642C\u6570\u636E\u3002":"Choose where data lives. Switching modes does not move data automatically.",\u8FDE\u63A5\u914D\u7F6E:"Connection","\u4E91\u7AEF\u5730\u5740\u4E0E API Key\uFF1B\u6D4B\u8BD5\u4F7F\u7528\u5F53\u524D\u586B\u5199\u7684\u503C\u3002":"Cloud base and API key. Test uses the values currently filled in.","\u672C\u673A\u6A21\u5F0F\u4E0D\u9700\u8981\u8FDE\u63A5\uFF1B\u5207\u5230\u4E91\u7AEF\u6A21\u5F0F\u540E\u518D\u586B\u5199\u5730\u5740\u4E0E Key\u3002":"Local mode needs no connection. Switch to cloud mode to fill in the base and key.","\u7528\u5F53\u524D\u586B\u5199\u914D\u7F6E\u8BD5\u62C9\u4E00\u6B21\uFF0C\u4E0D\u9700\u8981\u5148\u4FDD\u5B58":"Test the current values without saving first","\u5F53\u524D\u662F\u672C\u673A\u6A21\u5F0F\u3002":"Currently in local mode.",\u6570\u636E\u8FC1\u79FB:"Data migration","\u5BFC\u5165\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\uFF1B\u4E0D\u4F1A\u5220\u9664\u672C\u673A\u73B0\u6709\u6570\u636E\u3002":"Import uses the saved cloud config and does not delete local data.",\u9AD8\u7EA7:"Advanced","\u8BBE\u5907\u6807\u8BC6\u4F1A\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"The device ID is written to the source field of ideas and updates for cross-device handoff.","\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1B\u5148\u4FDD\u5B58\uFF0C\u518D\u5BFC\u5165\u3002":"Connection settings have unsaved changes. Save first, then import.","\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1A\u5148\u70B9\u300C\u4FDD\u5B58\u300D\uFF0C\u518D\u5BFC\u5165\uFF0C\u907F\u514D\u7528\u9519\u5730\u5740\u6216 Key\u3002":"Connection settings have unsaved changes: save first, then import, so the right base and key are used.",\u6700\u65B0\u8FDB\u5C55:"Latest update",\u8FDB\u5C55\u5386\u53F2:"Update history",\u9010\u5B57\u4FDD\u5B58:"Verbatim",\u72B6\u6001:"Status",\u6392\u5E8F:"Sort",\u6700\u8FD1\u521B\u5EFA:"Recently created",\u6700\u8FD1\u66F4\u65B0:"Recently updated",\u4E0B\u4E00\u6B65:"Next step",\u5217\u8868:"List",\u68B3\u7406:"Review",\u89C6\u56FE:"View","{n} \u6761":"{n}",\u5F85\u51B3\u5B9A:"To decide","\u8BB0\u4E0B\u6765\u8FD8\u6CA1\u5F00\u59CB\u7684\uFF0C\u5148\u635E\u4E00\u6761\u770B\u770B":"Captured but not started. Pick one and take a look.",\u968F\u673A\u4E00\u6761:"Random one",\u8BE5\u63A8\u8FDB\u4E86:"Needs a push","\u8D85\u8FC7 14 \u5929\u6CA1\u52A8\uFF0C\u6700\u4E45\u672A\u52A8\u7684\u6392\u524D\u9762":"No updates for 14+ days, stalest first.",\u6B63\u5728\u63A8\u8FDB:"In progress","\u6700\u8FD1 14 \u5929\u6709\u66F4\u65B0":"Updated in the last 14 days","\u5DF2\u6536\u53E3 / \u6401\u7F6E":"Done / parked","\u5DF2\u6536\u53E3 {done} \xB7 \u6401\u7F6E {parked}":"{done} done \xB7 {parked} parked","\u5165\u6C60 {n} \u5929":"Captured {n}d ago","{n} \u5929\u672A\u52A8":"No updates for {n}d","{n} \u8FDB\u5C55":"{n} updates","{n} \u6761\u60F3\u6CD5":"{n} ideas","{n} \u5F85\u51B3\u5B9A":"{n} to decide","{n} \u4E45\u672A\u63A8\u8FDB":"{n} stale","{n} \u6700\u8FD1\u63A8\u8FDB":"{n} moving",\u968F\u673A\u635E\u4E00\u6761:"Pick one at random","\u968F\u673A\u635E\u5230 {no}\uFF0C\u770B\u770B\u6709\u6CA1\u6709\u9057\u6F0F\u3002":"Random pick: {no}. Anything missed?","\u4E00\u53E5\u8BDD\u6458\u8981\uFF08\u53EF\u9009\uFF09":"One-line gist (optional)","\u226460 \u5B57\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"Up to 60 chars, easy to scan later",\u4E00\u53E5\u8BDD\u6458\u8981:"One-line gist","\u226460 \u5B57\uFF0C\u65B9\u4FBF\u626B\u5217\u8868":"Up to 60 chars, easy to scan",\u8BE6\u7EC6\u6458\u8981:"Detailed summary","\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u4F1A\u8BDD\u641C\u7D22\u3002":"Session search is not available here.",\u641C\u7D22\u4F1A\u8BDD\u5931\u8D25:"Session search failed","\u5173\u8054 DSH \u4F1A\u8BDD":"Link a DSH session","\u6309\u7F16\u53F7\u300C{no}\u300D\u641C\u7D22\u5F53\u524D DSH \u7684\u4F1A\u8BDD\u5185\u5BB9\uFF1B\u70B9\u4E00\u6761\u5373\u53EF\u7ED1\u5B9A\u3002":'Search this DSH for content containing "{no}"; click one to link it.',"\u6B63\u5728\u641C\u7D22\u4F1A\u8BDD\u2026":"Searching sessions\u2026","\u6CA1\u6709\u641C\u5230\u5305\u542B\u8FD9\u4E2A\u7F16\u53F7\u7684\u4F1A\u8BDD\u3002\u53D1\u9001\u8FC7\u300C\u4E00\u952E\u63A8\u8FDB\u300D\u7684\u4F1A\u8BDD\u901A\u5E38\u80FD\u88AB\u641C\u5230\u3002":"No session contains this idea number yet. Sessions created via One-click advance are usually searchable.",\u8FD9\u6761\u4F1A\u8BDD\u5DF2\u7ECF\u5173\u8054\u8FC7\u4E86:"This session is already linked.",\u5DF2\u5173\u8054\u4F1A\u8BDD:"Session linked",\u4E00\u952E\u63A8\u8FDB:"One-click advance","\u5DF2\u6253\u5F00\u65B0\u4F1A\u8BDD\u5E76\u9884\u586B\u63A8\u8FDB\u63D0\u793A\u8BCD\uFF1B\u53D1\u9001\u540E\u53EF\u56DE\u6765\u300C\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD\u300D\u7ED1\u5B9A\u3002":"Opened a new session with the advance prompt prefilled. After sending, use Find sessions to link it.","\u5F53\u524D\u754C\u9762\u4E0D\u80FD\u76F4\u63A5\u5F00\u65B0\u4F1A\u8BDD\uFF0C\u5DF2\u590D\u5236\u63A8\u8FDB\u63D0\u793A\u8BCD":"This UI cannot open a new session directly; the prompt has been copied.","\u5F53\u524D\u73AF\u5883\u4E0D\u80FD\u6253\u5F00 DSH \u4F1A\u8BDD":"Cannot open DSH sessions here.","\u6253\u5F00\u4F1A\u8BDD\u5931\u8D25\uFF1A{error}":"Could not open session: {error}",\u5173\u8054\u4F1A\u8BDD:"Linked sessions",\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD:"Find sessions","\u8FD8\u6CA1\u6709\u5173\u8054\u4F1A\u8BDD\uFF1B\u4E00\u952E\u63A8\u8FDB\u540E\u53EF\u7528\u300C\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD\u300D\u7ED1\u5B9A\u3002":"No linked sessions yet. After One-click advance, use Find sessions to link it.","\u4F1A\u8BDD\u641C\u7D22\u7D22\u5F15\u672A\u5F00\u542F\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\uFF1B\u4E5F\u53EF\u4EE5\u624B\u52A8\u6311\u9009\u3002":"Session search index is off; showing recent sessions instead.","\u6CA1\u6709\u641C\u5230\u5305\u542B\u7F16\u53F7\u7684\u4F1A\u8BDD\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002":"No session matched the idea number; showing recent sessions.","\u4F1A\u8BDD\u641C\u7D22\u5931\u8D25\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002":"Session search failed; showing recent sessions.","\u4F1A\u8BDD\u641C\u7D22\u4E0D\u53EF\u7528\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002":"Session search is unavailable; showing recent sessions.","\u6CA1\u6709\u53EF\u7528\u7684\u4F1A\u8BDD\u5217\u8868\u3002":"No session list is available.",\u4E00\u952E\u63A8\u8FDB\u4F1A\u8A71:"Advance session",\u4E00\u952E\u63A8\u8FDB\u4F1A\u8BDD:"Advance session",\u5DF2\u81EA\u52A8\u5173\u8054\u65B0\u4F1A\u8BDD:"New session linked automatically","\u5DF2\u6253\u5F00\u65B0\u4F1A\u8BDD\u5E76\u9884\u586B\u63A8\u8FDB\u63D0\u793A\u8BCD\uFF1B\u82E5\u53EA\u65B0\u589E\u4E86\u4E00\u4E2A\u4F1A\u8BDD\uFF0C\u4F1A\u81EA\u52A8\u5173\u8054\u3002":"Opened a new session with the prompt prefilled; if exactly one new session appears, it will be linked automatically."};var Le=ni(),Te=new Set;function ni(){return typeof document>"u"||(document.documentElement.lang||navigator.language||"zh").toLowerCase().startsWith("zh")?"zh":"en"}function Xi(){Te.forEach(i=>{try{i()}catch(n){console.error("[idea-pool] lang listener failed",n)}})}typeof document<"u"&&typeof MutationObserver<"u"&&new MutationObserver(()=>{let i=ni();i!==Le&&(Le=i,Xi())}).observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function ai(){return Le}function Me(i){return Te.add(i),()=>Te.delete(i)}function si(){return ti.default.useSyncExternalStore(Me,ai)}function t(i,n){let a=ai()==="en"?ii[i]??i:i;return n?a.replace(/\{(\w+)\}/g,(s,o)=>n[o]===void 0?s:String(n[o])):a}var ri=ze(require("react"),1);var Qi="idea-pool/",Zi=500;function Ri(){return{all:0,pool:0,active:0,done:0,parked:0}}var m={booted:!1,loading:!0,error:null,mode:"local",device:"",storagePath:"",cloudBase:"",canUndo:!1,counts:Ri(),total:0,status:"all",query:"",sortBy:"created",view:"list",ideas:[],listLoading:!1,selectedNo:null,newIdeaNo:null,suppressAutoSelect:!1,detail:null,detailLoading:!1,detailError:null,settings:null,settingsLoading:!1,toast:null},Pe=new Set;function w(i){m={...m,...typeof i=="function"?i(m):i},Pe.forEach(n=>{try{n()}catch(a){console.error("[idea-pool] store listener failed",a)}})}function et(i){return Pe.add(i),()=>Pe.delete(i)}function v(i){return ri.default.useSyncExternalStore(et,()=>i(m))}var Oe=null,Ie=null;function E(i,{error:n=!1,duration:a=0}={}){clearTimeout(Oe);let s=Date.now()+Math.random();w({toast:{id:s,text:i,error:n}}),Oe=setTimeout(()=>{m.toast&&m.toast.id===s&&w({toast:null})},a||(n?6e3:3200))}function li(){clearTimeout(Oe),w({toast:null})}function U(i){E(i&&i.message||String(i),{error:!0}),i&&Number(i.status)===409&&Promise.allSettled([se(),Q(),he()])}async function q(i,n){let a={credentials:"same-origin",...n||{}},s;try{s=await fetch(Qi+i,a)}catch(r){throw new Error(t("\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}",{error:r&&r.message||String(r)}))}let o=null;try{o=await s.json()}catch{o=null}if(!s.ok||o&&o.ok===!1){let r=new Error(o&&o.error||t("\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09",{status:s.status}));throw r.status=s.status,r}return o||{}}function te(i,n){return{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(n??{})}}function j(i){let n=Number(i);return Number.isFinite(n)&&n>0?Math.floor(n):0}function pi(i,n){let a=i&&typeof i=="object"?i:{},s={pool:j(a.pool),active:j(a.active),done:j(a.done),parked:j(a.parked)},o=s.pool+s.active+s.done+s.parked;return s.all=j(a.all)||j(a.total)||j(n)||o,s}function di(i){if(!i||typeof i!="object")return;let n={mode:typeof i.mode=="string"?i.mode:m.mode,canUndo:!!i.canUndo,counts:pi(i.counts,i.total),total:j(i.total)};typeof i.device=="string"&&(n.device=i.device),Object.hasOwn(i,"storagePath")&&(n.storagePath=typeof i.storagePath=="string"?i.storagePath:""),Object.hasOwn(i,"cloudBase")&&(n.cloudBase=typeof i.cloudBase=="string"?i.cloudBase:""),w(n)}async function se(){let i=await q("api/state");return di(i),i}var Be=0;async function Q(){let i=++Be,n=new URLSearchParams;m.status!=="all"&&n.set("status",m.status);let a=m.query.trim();a&&n.set("q",a),n.set("limit",String(Zi)),n.set("offset","0"),w({listLoading:!0});try{let s=await q("api/ideas?"+n.toString());if(i!==Be)return;let o=Array.isArray(s.ideas)?s.ideas:[];w({ideas:o,listLoading:!1,counts:pi(s.counts,s.total),total:j(s.total)||o.length,error:null})}catch(s){throw i===Be&&w({listLoading:!1}),s}}var Ae=0;async function Ke(i){let n=++Ae;w({detailLoading:!0,detailError:null});try{let a=await q("api/ideas/"+encodeURIComponent(i));return n!==Ae||w({detail:a,detailLoading:!1,detailError:null}),a}catch(a){throw n===Ae&&w({detailLoading:!1,detailError:a.message}),a}}async function he(){let i=m.selectedNo;if(i)try{await Ke(i)}catch{w({selectedNo:null,detail:null,detailError:null})}}async function ci({withDetail:i=!1}={}){let n=[se(),Q()];i&&m.selectedNo&&n.push(Ke(m.selectedNo)),await Promise.allSettled(n)}var ve=null;function $e(){return ve?(m.booted&&Promise.allSettled([se(),Q()]),ve):(ve=(async()=>{w({loading:!0,error:null});try{await Promise.all([se(),Q()]),w({booted:!0,loading:!1})}catch(i){w({loading:!1,error:i.message})}})(),ve)}function ui(){return ve=null,$e()}async function mi({quiet:i=!1}={}){try{await Promise.all([se(),Q()]),await he(),w({booted:!0,loading:!1,error:null}),i||E(t("\u5DF2\u5237\u65B0"))}catch(n){U(n)}}var oi=null;function Ue(i){w({view:i==="review"?"review":"list"})}function gi(i){w({sortBy:i==="updated"?"updated":"created"})}function Fe(i){m.status!==i&&(w({status:i,selectedNo:null,detail:null,detailError:null}),Q().catch(U))}function _e(i){w({query:i,selectedNo:null,detail:null,detailError:null}),clearTimeout(oi),oi=setTimeout(()=>{Q().catch(U)},220)}function le(i){if(!i){w({selectedNo:null,detail:null,detailError:null});return}if(m.selectedNo===i&&m.detail)return;let n=m.selectedNo===i?m.detail:null;w({selectedNo:i,detail:n,detailLoading:!0,detailError:null}),Ke(i).catch(U)}function He(){w({selectedNo:null,detail:null,detailError:null})}async function fi(i){try{let n={...i};!n.source&&m.device&&(n.source=m.device);let s=(await q("api/ideas",te("POST",n))).idea||null;return await ci(),E(t("\u5DF2\u5165\u6C60 {no}",{no:s?s.idea_no:""}).trim()),s&&(clearTimeout(Ie),w({newIdeaNo:s.idea_no}),Ie=setTimeout(()=>{Ie=null,m.newIdeaNo===s.idea_no&&w({newIdeaNo:null})},1100)),s}catch(n){return U(n),null}}async function xe(i,n,a){let s={ideas:m.ideas,detail:m.detail,counts:m.counts},o=n.status&&m.ideas.find(r=>r.idea_no===i)?.status;if(n.status&&o&&o!==n.status){let r={...m.counts};r[o]=Math.max(0,(r[o]||0)-1),r[n.status]=(r[n.status]||0)+1,w({counts:r,ideas:m.ideas.map(l=>l.idea_no===i?{...l,status:n.status}:l),detail:m.detail&&m.detail.idea&&m.detail.idea.idea_no===i?{...m.detail,idea:{...m.detail.idea,status:n.status}}:m.detail})}try{let l=(await q("api/ideas/"+encodeURIComponent(i),te("PATCH",n))).idea||null;return l&&w({ideas:m.ideas.map(p=>p.idea_no===i?{...p,...l}:p),detail:m.detail&&m.detail.idea&&m.detail.idea.idea_no===i?{...m.detail,idea:{...m.detail.idea,...l}}:m.detail}),a&&E(a),l}catch(r){return w(s),U(r),null}}async function vi(i){let n=m.selectedNo===i;try{await q("api/ideas/"+encodeURIComponent(i),{method:"DELETE"}),n&&w({selectedNo:null,detail:null,detailError:null,suppressAutoSelect:!0});try{await ci()}finally{n&&w({suppressAutoSelect:!1})}return E(t("\u5DF2\u5220\u9664 {no}",{no:i})),!0}catch(a){return U(a),!1}}async function hi(i,n){let a={id:"tmp-"+Date.now(),content:n,source:m.device||"",created_at:new Date().toISOString()},s=m.detail,o=m.ideas,r=m.detail&&m.detail.idea&&m.detail.idea.idea_no===i;r&&w({detail:{...m.detail,updates:[...m.detail.updates||[],a]}});try{let l={content:n};m.device&&(l.source=m.device);let p=await q("api/ideas/"+encodeURIComponent(i)+"/updates",te("POST",l));if(r){let x=p.update||null;w({detail:{...m.detail,updates:[...(m.detail.updates||[]).filter(f=>f.id!==a.id),...x?[x]:[]]},ideas:m.ideas.map(f=>f.idea_no===i?{...f,n_updates:(f.n_updates||0)+1}:f)})}return E(t("\u5DF2\u8BB0\u5F55\u8FDB\u5C55")),!0}catch(l){return r&&w({detail:s,ideas:o}),U(l),!1}}async function je(){try{let i=await q("api/undo",te("POST",{}));i.state&&di(i.state),await Promise.allSettled([Q(),he()]);let n=typeof i.label=="string"?i.label.trim():"";return E(n?t("\u5DF2\u64A4\u9500\uFF1A{label}",{label:n}):t("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")),!0}catch(i){return U(i),!1}}async function xi(){w({settingsLoading:!0});try{let i=await q("api/settings");return w({settings:i.settings||null,settingsLoading:!1}),i.settings||null}catch(i){return w({settingsLoading:!1}),U(i),null}}async function bi(i){try{let a=(await q("api/settings",te("POST",i))).settings||null,s=m.mode;w({settings:a}),a&&a.mode&&a.mode!==s&&w({ideas:[],selectedNo:null,detail:null,detailError:null,canUndo:!1}),E(t("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58"));try{await se(),await Q(),await he(),w({booted:!0,loading:!1,error:null})}catch(o){U(o)}return a}catch(n){return U(n),null}}async function wi({base:i,apiKey:n}={}){let a={},s=typeof i=="string"?i.trim():"",o=typeof n=="string"?n.trim():"";s&&(a.base=s),o&&(a.apiKey=o);try{let r=await q("api/cloud/test",te("POST",a));return{ok:!0,base:typeof r.base=="string"?r.base:"",count:j(r.count),latencyMs:j(r.latencyMs)}}catch(r){return{ok:!1,error:r&&r.message||String(r),status:r&&Number.isInteger(r.status)?r.status:0}}}async function yi(){try{let i=await q("api/settings",te("POST",{cloud:{clearKey:!0}}));return w({settings:i.settings||m.settings}),E(t("\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key")),i.settings||null}catch(i){return U(i),null}}async function ki(){try{let i=await q("api/cloud/import-local",te("POST",{})),n=j(i.imported),a=j(i.updated),s=j(i.total);return E(n||a?t("\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761",{imported:n,updated:a}):t("\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165")),await Promise.allSettled([se(),Q(),he()]),{imported:n,updated:a,total:s}}catch(i){return U(i),null}}function it(){let i=new Date,n=a=>String(a).padStart(2,"0");return`${i.getFullYear()}${n(i.getMonth()+1)}${n(i.getDate())}`}function tt(i,n){let a=new Blob([n],{type:"application/json;charset=utf-8"}),s=URL.createObjectURL(a),o=document.createElement("a");o.href=s,o.download=i,o.style.display="none",document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}async function Ni(){try{let i=await q("api/export"),n=i&&i.data?i.data:i;return tt(`idea-pool-${it()}.json`,JSON.stringify(n,null,2)),E(t("\u5DF2\u5BFC\u51FA JSON")),!0}catch(i){return U(i),!1}}var y=ze(require("react"),1);var nt={bulb:"M12 3a6 6 0 0 1 3.5 10.9c-.9.6-1.5 1.5-1.5 2.5v.6h-4v-.6c0-1-.6-1.9-1.5-2.5A6 6 0 0 1 12 3zM10 20h4M12 7.5v3.5",note:"M6 4h8l4 4v12H6zM14 4v4h4M9 12h6M9 16h6",settings:"M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",undo:"M8 6L4 10l4 4M4 10h10a5 5 0 0 1 0 10h-3",refresh:"M19 8a8 8 0 0 0-14-1L4 9M5 16a8 8 0 0 0 14 1l1-2M4 4v5h5M20 20v-5h-5",search:"M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",close:"M6 6l12 12M18 6L6 18",check:"M5 12.5l4.5 4.5L19 7",chevD:"M6 9.5l6 6 6-6",chevL:"M14.5 5.5L8 12l6.5 6.5",chevR:"M9.5 5.5L16 12l-6.5 6.5",plus:"M12 5v14M5 12h14",edit:"M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",trash:"M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",copy:"M9 9h10v11H9zM5 15V4h10",link:"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",upRight:"M7 17L17 7M8 7h9v9",monitor:"M4 5h16v11H4zM9 20h6M12 16v4",clock:"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l2.5 1.5",download:"M12 4v11M7 11l5 5 5-5M5 20h14",alert:"M12 4l9 16H3zM12 10v4M12 17.5h.01",folder:"M4 7h6l2 2h10v10H4z",tag:"M4 5h8l8 8-6 6-8-8zM8 8.5h.01",spark:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",bolt:"M13 3L5 14h6l-1 7 8-11h-6z",cloud:"M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8.5z",dot:"M12 12h.01"};function I({name:i,size:n=16,stroke:a=1.6,className:s=""}){let o=nt[i];return o?y.default.createElement("svg",{className:s,width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},y.default.createElement("path",{d:o})):null}function ie({icon:i,label:n,onClick:a,disabled:s,active:o,size:r=16,className:l="",...p}){return y.default.createElement("button",{type:"button",className:`ip-iconbtn ${o?"is-on":""} ${l}`,"aria-label":n,title:n,onClick:a,disabled:s,...p},y.default.createElement(I,{name:i,size:r}))}function C({variant:i="plain",size:n="md",icon:a,children:s,className:o="",title:r,...l}){return y.default.createElement("button",{type:"button",className:`ip-btn is-${i} is-${n} ${o}`,title:r,...l},a?y.default.createElement(I,{name:a,size:n==="sm"?13:15}):null,s?y.default.createElement("span",null,s):null)}function at({tone:i="neutral",children:n,title:a,className:s=""}){return y.default.createElement("span",{className:`ip-badge is-${i} ${s}`,title:a},n)}function Ci({status:i,children:n}){return y.default.createElement(at,{tone:i==="pool"||i==="active"||i==="done"||i==="parked"?i:"neutral"},y.default.createElement("i",{className:"ip-dot","aria-hidden":"true"}),n)}function qe({children:i}){return y.default.createElement("span",{className:"ip-tag"},i)}function Y({label:i,hint:n,children:a}){return y.default.createElement("label",{className:"ip-field"},y.default.createElement("span",{className:"ip-field-label"},i),a,n?y.default.createElement("small",{className:"ip-field-hint"},n):null)}function be({title:i,onClose:n,children:a,footer:s,width:o=460}){let r=y.default.useRef(null),l=y.default.useRef(n),p=y.default.useRef(null);return l.current=n,y.default.useEffect(()=>{p.current=document.activeElement;let x=()=>{let u=r.current;return u?[...u.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')].filter(_=>!_.disabled&&_.offsetParent!==null):[]},f=u=>{if(u.key==="Escape"){u.preventDefault(),u.stopPropagation(),l.current();return}if(u.key!=="Tab")return;let _=x();if(!_.length)return;let B=_[0],P=_[_.length-1];u.shiftKey&&document.activeElement===B?(u.preventDefault(),P.focus()):!u.shiftKey&&document.activeElement===P&&(u.preventDefault(),B.focus())};window.addEventListener("keydown",f,!0);let g=r.current,b=g&&(g.querySelector("textarea, input, select")||g.querySelector("button"));b&&b.focus({preventScroll:!0});let c=g&&g.closest(".ip-dialog-body");return c&&(c.scrollTop=0),()=>{window.removeEventListener("keydown",f,!0);let u=p.current;u&&typeof u.focus=="function"&&u.isConnected&&u.focus()}},[]),y.default.createElement("div",{className:"ip-dialog-mask",onPointerDown:x=>{x.target===x.currentTarget&&n()}},y.default.createElement("div",{className:"ip-dialog",role:"dialog","aria-modal":"true","aria-label":i,style:{width:o},ref:r},y.default.createElement("div",{className:"ip-dialog-head"},y.default.createElement("h2",null,i),y.default.createElement(ie,{icon:"close",label:t("\u5173\u95ED"),onClick:n})),y.default.createElement("div",{className:"ip-dialog-body"},a),s?y.default.createElement("div",{className:"ip-dialog-foot"},s):null))}function zi(){let i=v(n=>n.toast);return i?y.default.createElement("div",{key:i.id,className:`ip-toast ${i.error?"is-error":""}`,role:i.error?"alert":"status"},y.default.createElement(I,{name:i.error?"alert":"check",size:14}),y.default.createElement("span",{className:"ip-toast-text"},i.text),y.default.createElement("button",{type:"button",className:"ip-toast-close","aria-label":t("\u5173\u95ED"),onClick:li},y.default.createElement(I,{name:"close",size:12}))):null}function We({icon:i="bulb",title:n,hint:a,children:s}){return y.default.createElement("div",{className:"ip-empty"},y.default.createElement("span",{className:"ip-empty-icon"},y.default.createElement(I,{name:i,size:26})),y.default.createElement("p",{className:"ip-empty-title"},n),a?y.default.createElement("p",{className:"ip-empty-hint"},a):null,s)}function we({label:i}){return y.default.createElement("div",{className:"ip-loading",role:"status"},y.default.createElement("span",{className:"ip-spinner","aria-hidden":"true"}),y.default.createElement("span",null,i))}function Si(i){let n=document.createElement("textarea");n.value=i,n.setAttribute("readonly",""),n.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0",document.body.appendChild(n),n.select();try{document.execCommand("copy")}finally{n.remove()}}function pe(i,n=t("\u5DF2\u590D\u5236")){let a=()=>E(n),s=()=>E(t("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236"),{error:!0});try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(i).then(a,()=>{try{Si(i),a()}catch{s()}});return}Si(i),a()}catch{s()}}var _i="idea-pool",st="https://www.zhaoningyuan.com",de="https://www.zhaoningyuan.com/ideas/api",Ti=["pool","active","done","parked"],Mi={pool:"\u5DF2\u5165\u6C60",active:"\u63A8\u8FDB\u4E2D",done:"\u5DF2\u6536\u53E3",parked:"\u6401\u7F6E"},ot=[{key:"all",label:"\u5168\u90E8"},...Ti.map(i=>({key:i,label:Mi[i]}))],rt={mac:"Mac","dsh-mac":"Mac",win:"Windows","dsh-win":"Windows",dsh:"\u672C\u673A",volcano:"\u706B\u5C71\u4E91",manual:"\u624B\u52A8",web:"\u7F51\u9875",feishu:"\u98DE\u4E66"};function Z(i){return String(i).padStart(2,"0")}function Ne(i){if(!i)return"";let n=new Date(i);return Number.isNaN(n.getTime())?String(i):`${n.getFullYear()}-${Z(n.getMonth()+1)}-${Z(n.getDate())} ${Z(n.getHours())}:${Z(n.getMinutes())}`}function Ii(i){if(!i)return"";let n=new Date(i);if(Number.isNaN(n.getTime()))return String(i);let a=Date.now()-n.getTime();if(a>=0&&a<60*1e3)return t("\u521A\u521A");if(a>=0&&a<3600*1e3)return t("{n} \u5206\u949F\u524D",{n:Math.floor(a/6e4)});let s=new Date,o=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime();return n.getTime()>=o?`${Z(n.getHours())}:${Z(n.getMinutes())}`:n.getFullYear()===s.getFullYear()?`${Z(n.getMonth()+1)}-${Z(n.getDate())}`:`${n.getFullYear()}-${Z(n.getMonth()+1)}-${Z(n.getDate())}`}function Ve(i){if(!i)return"";let n=String(i).toLowerCase();return t(rt[n]||String(i))}function ke(i){return t(Mi[i]||i||"")}function lt(i){let n=String(i||"").trim();return!n||/^(javascript|data|vbscript):/i.test(n)?"#":n}function pt(i){return`${st}/ideas/#${i.idea_no}`}function ue(i){return String(i&&i.title||"").replace(/\s+/g," ").trim()||i&&i.idea_no||""}function Bi(i){return String(i||"").split(/[,，]/).map(n=>n.trim()).filter(Boolean)}function Ei(i,n,a){return t(i===1?n:a,{n:i})}var dt=1440*60*1e3;function oe(i){let n=new Date(i||0).getTime();return!n||Number.isNaN(n)?0:Math.max(0,Math.floor((Date.now()-n)/dt))}function ct(i){let a=(String(i.gist||"").trim()||String(i.summary||"").trim()||String(i.raw_text||"").trim()).replace(/\s+/g," ");if(!a)return"";let s=a.split(/[。！？!?]/)[0].trim()||a;return s.length>90?s.slice(0,90)+"\u2026":s}function Di(i){let n=i.idea_no,a=ue(i);return"\u8BF7\u5C55\u5F00\u63A8\u8FDB\u7075\u611F\u6C60 "+n+"\u300A"+a+`\u300B\u3002

\u3010\u7EE7\u627F\u8FDB\u5EA6\xB7\u9632\u91CD\u590D\u3011\u5148\u8BFB\u60F3\u6CD5\u8BE6\u60C5\u2014\u2014\u539F\u6587\u3001\u6458\u8981\u3001\u5168\u90E8\u300C\u8FDB\u5C55\u300D\u4E0E\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 get \u52A8\u4F5C\uFF0C\u6216\u8BFB\u672C\u673A /idea-pool/api/ideas/`+n+`\uFF09\u3002
\uFF08\u300C\u8FDB\u5C55\u300D=\u63A5\u529B\u8D26\u672C\uFF1A\u4EE5\u6700\u65B0\u6761\u76EE\u4E3A\u51C6\u7EE7\u627F\uFF0C\u5DF2\u5B8C\u6210\u7684\u4E0D\u91CD\u505A\u2014\u2014\u5305\u62EC\u5176\u4ED6\u673A\u5668\u505A\u8FC7\u7684\uFF09
\u5982\u672C\u60F3\u6CD5\u66FE\u5728\u5176\u4ED6\u673A\u5668/\u4F1A\u8BDD\u63A8\u8FDB\u8FC7\uFF08\u4E0D\u786E\u5B9A\u5C31\u5148\u67E5\uFF09\uFF1A\u5F00\u5DE5\u524D\u5148\u505A\u8DE8\u673A\u67E5\u91CD\uFF08\u68C0\u7D22\u5404\u673A\u4F1A\u8BDD\u5E93\u3001\u5B9A\u65F6\u4EFB\u52A1\u4E0E\u6280\u80FD\uFF09\uFF0C\u5E76\u56DE\u586B\u4E00\u6761\u300C\u5F00\u5DE5\u5BF9\u9F50\u300D\u8FDB\u5C55\uFF08\u672C\u6B21\u8303\u56F4+\u4E0D\u91CD\u505A\u9879\uFF09\u3002
\u3010\u63A8\u8FDB\u8BB0\u5F55\u3011\u5148\u8BFB\u8BB0\u5F55\u6587\u6863\uFF08\u82E5\u6709\uFF09\u5E76\u5728\u5B8C\u6210\u540E\u8FFD\u52A0\u672C\u8F6E\u6761\u76EE\u3002
\u3010\u5148\u6F84\u6E05\u540E\u5F00\u5DE5\u3011\u7EE7\u627F\u68C0\u67E5\u4E4B\u540E\u3001\u52A8\u624B\u4E4B\u524D\uFF1A\u6309 brainstorming \u6F84\u6E05\u671F\u7EAA\u5F8B\u5411\u7528\u6237\u8FFD\u95EE 3~5 \u4E2A\u5173\u952E\u95EE\u9898\u2014\u2014\u53EA\u95EE\u4F1A\u6539\u53D8\u65B9\u5411\u3001\u53EA\u6709\u7528\u6237\u80FD\u7B54\u7684\uFF08\u80FD\u81EA\u67E5\u7684\u5148\u67E5\uFF09\uFF1B\u5C0F\u60F3\u6CD5\u53EF\u5C11\u95EE\uFF1B\u7528\u6237\u8BF4\u300C\u76F4\u63A5\u5C55\u5F00\u300D\u5219\u8DF3\u8FC7\u3002
\u5B8C\u6210\u540E\u56DE\u586B\u300C\u5DF2\u5B8C\u6210/\u672A\u5B8C\u6210/\u4E0B\u4E00\u6B65\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 progress \u52A8\u4F5C\uFF09\uFF1B\u4EA7\u51FA\u53D1\u5E03\u540E\u6302\u5230\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF0C\u7136\u540E\u5F00\u59CB\u7814\u7A76/\u63A8\u8FDB\u3002`}function ut({searchRef:i,onOpenSettings:n}){let a=v(c=>c.mode),s=v(c=>c.device),o=v(c=>c.cloudBase),r=v(c=>c.canUndo),l=v(c=>c.query),[p,x]=e.default.useState(l);e.default.useEffect(()=>{x(l)},[l]);let f=a==="cloud",g=f?t("\u4E91\u7AEF\u6A21\u5F0F"):t("\u672C\u673A\u6A21\u5F0F"),b=f?o?`${g} \xB7 ${o}`:g:s?`${g} \xB7 ${s}`:g;return e.default.createElement("header",{className:"ip-topbar","data-window-drag":""},e.default.createElement("div",{className:"ip-brand"},e.default.createElement("span",{className:"ip-brand-mark"},e.default.createElement(I,{name:"bulb",size:17,stroke:1.7})),e.default.createElement("span",{className:"ip-title"},t("\u7075\u611F\u6C60")),e.default.createElement("span",{className:`ip-mode ${f?"is-cloud":""}`,title:b},e.default.createElement("i",{"aria-hidden":"true"}),g)),e.default.createElement("span",{className:"ip-topbar-spacer"}),e.default.createElement("div",{className:"ip-search"},e.default.createElement("span",{className:"ip-search-icon"},e.default.createElement(I,{name:"search",size:14})),e.default.createElement("input",{ref:i,type:"text",value:p,placeholder:t("\u641C\u7D22\u60F3\u6CD5\u2026"),"aria-label":t("\u641C\u7D22\u60F3\u6CD5"),onChange:c=>{x(c.target.value),_e(c.target.value)}}),p?e.default.createElement("span",{className:"ip-search-clear"},e.default.createElement(ie,{icon:"close",size:12,label:t("\u6E05\u7A7A\u641C\u7D22"),onClick:()=>{x(""),_e(""),i.current?.focus()}})):null),r&&!f?e.default.createElement(ie,{icon:"undo",label:t("\u64A4\u9500\u4E0A\u4E00\u6B65"),onClick:()=>je()}):null,e.default.createElement(ie,{icon:"refresh",label:t("\u5237\u65B0"),onClick:()=>mi()}),e.default.createElement(ie,{icon:"settings",label:t("\u8BBE\u7F6E"),onClick:n}))}var mt=208;function gt(i){i&&(i.style.height="auto",i.style.height=`${Math.min(i.scrollHeight,mt)}px`)}function ft({highlight:i}){let[n,a]=e.default.useState(""),[s,o]=e.default.useState(""),[r,l]=e.default.useState(""),[p,x]=e.default.useState(""),[f,g]=e.default.useState(""),[b,c]=e.default.useState(!1),[u,_]=e.default.useState(!1),[B,P]=e.default.useState(!1),L=e.default.useRef(null),J=e.default.useRef({raw:n,title:s,summary:r,gist:p,tags:f});J.current={raw:n,title:s,summary:r,gist:p,tags:f},e.default.useEffect(()=>{gt(L.current)},[n,b]);let T=async()=>{if(u)return;let N=n.trim(),k=s.trim();if(!N&&!k){E(t("\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60"),{error:!0}),L.current?.focus();return}let z={raw_text:N};k&&(z.title=k);let M=r.trim();M&&(z.summary=M);let W=p.trim();W&&(z.gist=W);let G=Bi(f);G.length&&(z.tags=G);let O={raw:n,title:s,summary:r,gist:p,tags:f};_(!0);let R=await fi(z);if(_(!1),!R)return;a(D=>D===O.raw?"":D),o(D=>D===O.title?"":D),l(D=>D===O.summary?"":D),x(D=>D===O.gist?"":D),g(D=>D===O.tags?"":D);let h=J.current;h.raw===O.raw&&h.title===O.title&&h.summary===O.summary&&h.gist===O.gist&&h.tags===O.tags&&(c(!1),window.requestAnimationFrame(()=>{let D=L.current;D&&(D.style.height="auto",D.focus())}))},V=N=>{if((N.metaKey||N.ctrlKey)&&N.key==="Enter"){N.preventDefault(),T();return}N.key==="Escape"&&b&&(N.stopPropagation(),c(!1))};return e.default.createElement("section",{className:`ip-capture ${!B&&!b&&!n&&!s&&!r&&!p&&!f?"is-collapsed":""} ${B?"is-focused":""} ${i?"is-highlight":""}`,"aria-label":t("\u5F55\u5165\u7075\u611F")},e.default.createElement("div",{className:"ip-capture-main"},e.default.createElement("textarea",{ref:L,className:"ip-capture-input",rows:2,value:n,placeholder:t("\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60"),"aria-label":t("\u60F3\u6CD5\u539F\u6587"),onFocus:()=>P(!0),onBlur:()=>P(!1),onChange:N=>a(N.target.value),onKeyDown:V}),e.default.createElement("div",{className:"ip-capture-side"},e.default.createElement("button",{type:"button",className:`ip-capture-toggle ${b?"is-open":""}`,"aria-expanded":b,onClick:()=>c(N=>!N)},e.default.createElement(I,{name:"chevD",size:13}),e.default.createElement("span",null,t(b?"\u6536\u8D77\u9009\u9879":"\u66F4\u591A\u9009\u9879"))),e.default.createElement("span",{className:"ip-cmdhint"},t("\u2318/Ctrl+Enter \u4FDD\u5B58")),e.default.createElement(C,{variant:"primary",icon:"plus",onClick:T,disabled:u},u?t("\u4FDD\u5B58\u4E2D\u2026"):t("\u5165\u6C60")))),b?e.default.createElement("div",{className:"ip-capture-extra"},e.default.createElement(Y,{label:t("\u6807\u9898\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:s,onChange:N=>o(N.target.value),placeholder:t("\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57")})),e.default.createElement(Y,{label:t("\u4E00\u53E5\u8BDD\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:p,onChange:N=>x(N.target.value),placeholder:t("\u226460 \u5B57\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868"),maxLength:200})),e.default.createElement(Y,{label:t("\u6807\u7B7E\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:f,onChange:N=>g(N.target.value),placeholder:t("\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053")})),e.default.createElement("div",{className:"ip-span2"},e.default.createElement(Y,{label:t("\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("textarea",{rows:2,value:r,onChange:N=>l(N.target.value),placeholder:t("\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868")})))):null)}function vt(){let i=v(p=>p.status),n=v(p=>p.counts),a=v(p=>p.total),s=v(p=>p.sortBy),[o,r]=e.default.useState(!1),l=e.default.useRef(null);return e.default.useEffect(()=>{if(!o)return;let p=f=>{(!l.current||!l.current.contains(f.target))&&r(!1)},x=f=>{f.key==="Escape"&&r(!1)};return document.addEventListener("pointerdown",p),document.addEventListener("keydown",x),()=>{document.removeEventListener("pointerdown",p),document.removeEventListener("keydown",x)}},[o]),e.default.createElement("nav",{className:"ip-tabs","aria-label":t("\u72B6\u6001\u7B5B\u9009")},ot.map(p=>{let x=p.key==="all"?n.all||a||0:n[p.key]||0;return e.default.createElement("button",{key:p.key,type:"button",className:`ip-tab ${i===p.key?"is-on":""}`,"aria-pressed":i===p.key,onClick:()=>Fe(p.key)},e.default.createElement("span",null,t(p.label)),e.default.createElement("span",{className:"ip-tab-count"},x))}),e.default.createElement("div",{className:"ip-sort",ref:l},e.default.createElement("button",{type:"button",className:"ip-sort-trigger","aria-haspopup":"menu","aria-expanded":o,onClick:()=>r(p=>!p)},e.default.createElement("span",null,t("\u6392\u5E8F")),e.default.createElement("strong",null,s==="updated"?t("\u6700\u8FD1\u66F4\u65B0"):t("\u6700\u8FD1\u521B\u5EFA")),e.default.createElement(I,{name:"chevD",size:12})),o?e.default.createElement("div",{className:"ip-sort-pop",role:"menu","aria-label":t("\u6392\u5E8F")},[{key:"created",label:t("\u6700\u8FD1\u521B\u5EFA")},{key:"updated",label:t("\u6700\u8FD1\u66F4\u65B0")}].map(p=>e.default.createElement("button",{key:p.key,type:"button",role:"menuitemradio","aria-checked":s===p.key,className:s===p.key?"is-on":"",onClick:()=>{gi(p.key),r(!1)}},e.default.createElement("span",null,p.label),s===p.key?e.default.createElement(I,{name:"check",size:13}):null))):null))}function ht({idea:i,active:n,highlight:a,onClick:s}){let o=Array.isArray(i.tags)?i.tags:[];return e.default.createElement("button",{type:"button",className:`ip-card ${n?"is-on":""} ${a?"is-new":""}`,"aria-current":n?"true":void 0,onClick:s},e.default.createElement("div",{className:"ip-card-title"},ue(i)),i.gist||i.summary?e.default.createElement("div",{className:"ip-card-sum"},i.gist||i.summary):null,e.default.createElement("div",{className:"ip-card-foot"},e.default.createElement("span",{className:`ip-card-status is-${i.status}`},e.default.createElement("i",{"aria-hidden":"true"}),ke(i.status)),e.default.createElement("span",{className:"ip-card-no"},i.idea_no),e.default.createElement("time",{className:"ip-card-time",dateTime:i.updated_at||void 0,title:Ne(i.updated_at)},Ii(i.updated_at)),o.slice(0,1).map(r=>e.default.createElement(qe,{key:r},r)),o.length>1?e.default.createElement("span",{className:"ip-muted"},"+",o.length-1):null,i.n_updates||i.n_links?e.default.createElement("span",{className:"ip-card-meta"},i.n_updates?Ei(i.n_updates,"1 \u6761\u8FDB\u5C55","{n} \u6761\u8FDB\u5C55"):null,i.n_updates&&i.n_links?e.default.createElement("span",{className:"ip-sep"},"\xB7"):null,i.n_links?Ei(i.n_links,"1 \u4E2A\u4EA7\u51FA","{n} \u4E2A\u4EA7\u51FA"):null):null))}function Ai({idea:i}){let n=i.status==="active"&&oe(i.updated_at)>14,a=i.status==="pool"?t("\u5165\u6C60 {n} \u5929",{n:oe(i.created_at)}):n?t("{n} \u5929\u672A\u52A8",{n:oe(i.updated_at)}):Ii(i.updated_at);return e.default.createElement("button",{type:"button",className:"ip-review-row",onClick:()=>le(i.idea_no)},e.default.createElement("i",{className:`ip-review-dot is-${i.status}`,"aria-hidden":"true"}),e.default.createElement("span",{className:"ip-review-main"},e.default.createElement("span",{className:"ip-review-title"},ue(i)),e.default.createElement("span",{className:"ip-review-sum"},ct(i))),e.default.createElement("span",{className:"ip-review-meta"},e.default.createElement("span",{className:n?"is-stale":""},a),i.n_updates?e.default.createElement("span",null,t("{n} \u8FDB\u5C55",{n:i.n_updates})):null))}function Je({title:i,hint:n,items:a,action:s}){return a.length?e.default.createElement("section",{className:"ip-review-section"},e.default.createElement("div",{className:"ip-review-head"},e.default.createElement("h3",null,i),e.default.createElement("span",{className:"ip-review-count"},a.length),e.default.createElement("span",{className:"ip-review-hint"},n),s?e.default.createElement("span",{className:"ip-review-action"},s):null),e.default.createElement("div",{className:"ip-review-rows"},a.map(o=>e.default.createElement(Ai,{key:o.idea_no,idea:o})))):null}function xt(){let i=v(c=>c.ideas),n=v(c=>c.status),[a,s]=e.default.useState(!1);e.default.useEffect(()=>{(n==="done"||n==="parked")&&s(!0)},[n]);let o=i.filter(c=>c.status==="pool"),r=i.filter(c=>c.status==="active"),l=r.filter(c=>oe(c.updated_at)>14).sort((c,u)=>oe(u.updated_at)-oe(c.updated_at)),p=r.filter(c=>oe(c.updated_at)<=14).sort((c,u)=>String(u.updated_at||"").localeCompare(String(c.updated_at||""))),x=i.filter(c=>c.status==="done"||c.status==="parked"),f=i.filter(c=>c.status==="done").length,g=i.filter(c=>c.status==="parked").length,b=()=>{let c=o.length?o:l.length?l:p.length?p:i;if(!c.length)return;let u=c[Math.floor(Math.random()*c.length)];E(t("\u968F\u673A\u635E\u5230 {no}\uFF0C\u770B\u770B\u6709\u6CA1\u6709\u9057\u6F0F\u3002",{no:u.idea_no})),le(u.idea_no)};return e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-review"},e.default.createElement("div",{className:"ip-review-summary"},e.default.createElement("div",null,e.default.createElement("strong",null,t("{n} \u6761\u60F3\u6CD5",{n:i.length})),e.default.createElement("span",null,t("{n} \u5F85\u51B3\u5B9A",{n:o.length})," \xB7 ",t("{n} \u4E45\u672A\u63A8\u8FDB",{n:l.length})," \xB7 ",t("{n} \u6700\u8FD1\u63A8\u8FDB",{n:p.length}))),e.default.createElement(C,{size:"sm",variant:"ghost",icon:"spark",onClick:b,disabled:!i.length},t("\u968F\u673A\u635E\u4E00\u6761"))),e.default.createElement(Je,{title:t("\u5F85\u51B3\u5B9A"),hint:t("\u8BB0\u4E0B\u6765\u8FD8\u6CA1\u5F00\u59CB\u7684\uFF0C\u5148\u635E\u4E00\u6761\u770B\u770B"),items:o,action:o.length?e.default.createElement(C,{size:"sm",variant:"ghost",onClick:b},t("\u968F\u673A\u4E00\u6761")):null}),e.default.createElement(Je,{title:t("\u8BE5\u63A8\u8FDB\u4E86"),hint:t("\u8D85\u8FC7 14 \u5929\u6CA1\u52A8\uFF0C\u6700\u4E45\u672A\u52A8\u7684\u6392\u524D\u9762"),items:l}),e.default.createElement(Je,{title:t("\u6B63\u5728\u63A8\u8FDB"),hint:t("\u6700\u8FD1 14 \u5929\u6709\u66F4\u65B0"),items:p}),x.length?e.default.createElement("section",{className:"ip-review-section is-archived"},e.default.createElement("button",{type:"button",className:"ip-review-head is-button","aria-expanded":a,onClick:()=>s(c=>!c)},e.default.createElement("h3",null,t("\u5DF2\u6536\u53E3 / \u6401\u7F6E")),e.default.createElement("span",{className:"ip-review-count"},x.length),e.default.createElement("span",{className:"ip-review-hint"},t("\u5DF2\u6536\u53E3 {done} \xB7 \u6401\u7F6E {parked}",{done:f,parked:g})),e.default.createElement("span",{className:"ip-review-action"},e.default.createElement(I,{name:a?"chevD":"chevR",size:13}))),a?e.default.createElement("div",{className:"ip-review-rows"},x.map(c=>e.default.createElement(Ai,{key:c.idea_no,idea:c}))):null):null))}function bt({narrow:i}){let n=v(u=>u.ideas),a=v(u=>u.listLoading),s=v(u=>u.status),o=v(u=>u.query),r=v(u=>u.selectedNo),l=v(u=>u.mode),p=v(u=>u.sortBy),x=v(u=>u.view),f=v(u=>u.newIdeaNo),g=e.default.useRef(null),b=s!=="all"||!!o.trim(),c=e.default.useMemo(()=>{let u=p==="updated"?"updated_at":"created_at";return[...n].sort((_,B)=>{let P=typeof _[u]=="string"?_[u]:"",L=typeof B[u]=="string"?B[u]:"";return P!==L?P<L?1:-1:String(_.idea_no)<String(B.idea_no)?1:-1})},[n,p]);return e.default.useEffect(()=>{f&&g.current?.scrollTo({top:0,behavior:"smooth"})},[f]),a&&!n.length?e.default.createElement(we,{label:t("\u6B63\u5728\u52A0\u8F7D\u2026")}):n.length?x==="review"?e.default.createElement(xt,null):e.default.createElement("div",{className:"ip-scroll",ref:g},e.default.createElement("div",{className:"ip-list"},c.map(u=>e.default.createElement(ht,{key:u.idea_no,idea:u,active:!i&&u.idea_no===r,highlight:u.idea_no===f,onClick:()=>le(u.idea_no)}))),a?e.default.createElement("div",{className:"ip-list-note"},t("\u6B63\u5728\u5237\u65B0\u2026")):null):e.default.createElement(We,{icon:"note",title:b?t("\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5"):t("\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684"),hint:b?t("\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002"):l==="cloud"?t("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002"):t("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002")},o.trim()?e.default.createElement(C,{size:"sm",onClick:()=>_e("")},t("\u6E05\u7A7A\u641C\u7D22")):s!=="all"?e.default.createElement(C,{size:"sm",onClick:()=>Fe("all")},t("\u663E\u793A\u5168\u90E8\u72B6\u6001")):e.default.createElement(C,{size:"sm",onClick:()=>document.querySelector(".ip-capture-input")?.focus()},t("\u5199\u7B2C\u4E00\u6761")))}function wt({update:i}){let[n,a]=e.default.useState(!1),s=i.content||"",o=s.length>320;return e.default.createElement("li",{className:"ip-tl-item"},e.default.createElement("div",{className:"ip-tl-meta"},e.default.createElement("span",{className:"ip-tl-time"},Ne(i.created_at)),i.source?e.default.createElement("span",{className:"ip-src",title:i.source},e.default.createElement(I,{name:"monitor",size:11}),Ve(i.source)):null),e.default.createElement("div",{className:`ip-tl-content ${o&&!n?"is-clamped":""}`},s),o?e.default.createElement("button",{type:"button",className:"ip-tl-toggle",onClick:()=>a(r=>!r)},n?t("\u6536\u8D77"):t("\u5C55\u5F00\u5168\u90E8")):null)}function yt({link:i}){let n=lt(i.url),a=/^https?:\/\//i.test(n);return e.default.createElement("li",null,e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(I,{name:"link",size:13})),e.default.createElement("a",{href:n,title:i.url,target:a?"_blank":void 0,rel:a?"noreferrer noopener":void 0},i.title||i.url),i.ref_type==="doc"?e.default.createElement("span",{className:"ip-link-kind"},t("\u6587\u6863")):null,a?e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(I,{name:"upRight",size:12})):null)}function kt({no:i}){let[n,a]=e.default.useState(""),[s,o]=e.default.useState(!1),r=async l=>{l.preventDefault();let p=n.trim();if(!p){E(t("\u5148\u5199\u70B9\u5185\u5BB9"),{error:!0});return}let x=n;o(!0);let f=await hi(i,p);o(!1),f&&a(g=>g===x?"":g)};return e.default.createElement("form",{className:"ip-abox",onSubmit:r},e.default.createElement(Y,{label:t("\u65B0\u589E\u8FDB\u5C55")},e.default.createElement("textarea",{rows:3,value:n,placeholder:t("\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026"),onChange:l=>a(l.target.value),onKeyDown:l=>{(l.metaKey||l.ctrlKey)&&l.key==="Enter"&&r(l)}})),e.default.createElement("div",{className:"ip-abox-foot"},e.default.createElement("span",{className:"ip-muted"},t("\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"primary",type:"submit",disabled:s},s?t("\u4FDD\u5B58\u4E2D\u2026"):t("\u8BB0\u5F55\u8FDB\u5C55"))))}function Nt({idea:i,onClose:n}){let[a,s]=e.default.useState(i.title||""),[o,r]=e.default.useState(i.summary||""),[l,p]=e.default.useState(i.gist||""),[x,f]=e.default.useState(i.raw_text||""),[g,b]=e.default.useState((i.tags||[]).join(", ")),[c,u]=e.default.useState(i.source_note||""),[_,B]=e.default.useState(!1),P=a!==(i.title||"")||o!==(i.summary||"")||l!==(i.gist||"")||x!==(i.raw_text||"")||g!==(i.tags||[]).join(", ")||c!==(i.source_note||""),L=()=>{P&&!window.confirm(t("\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F"))||n()},J=async T=>{T.preventDefault();let V=a.trim();if(!V){E(t("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}B(!0);let F=await xe(i.idea_no,{title:V,summary:o.trim(),gist:l.trim(),raw_text:x,tags:Bi(g),source_note:c.trim()},t("\u5DF2\u4FDD\u5B58"));B(!1),F&&n()};return e.default.createElement(be,{title:t("\u7F16\u8F91\u60F3\u6CD5"),onClose:L,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{onClick:L},t("\u53D6\u6D88")),e.default.createElement(C,{variant:"primary",type:"submit",form:"ip-edit-form",disabled:_},_?t("\u4FDD\u5B58\u4E2D\u2026"):t("\u4FDD\u5B58")))},e.default.createElement("form",{id:"ip-edit-form",className:"ip-dialog-rows",onSubmit:J},e.default.createElement(Y,{label:t("\u6807\u9898")},e.default.createElement("input",{value:a,onChange:T=>s(T.target.value)})),e.default.createElement(Y,{label:t("\u4E00\u53E5\u8BDD\u6458\u8981")},e.default.createElement("input",{value:l,maxLength:200,onChange:T=>p(T.target.value),placeholder:t("\u226460 \u5B57\uFF0C\u65B9\u4FBF\u626B\u5217\u8868")})),e.default.createElement(Y,{label:t("\u8BE6\u7EC6\u6458\u8981")},e.default.createElement("textarea",{rows:2,value:o,onChange:T=>r(T.target.value)})),e.default.createElement(Y,{label:t("\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09")},e.default.createElement("textarea",{rows:6,value:x,onChange:T=>f(T.target.value)})),e.default.createElement(Y,{label:t("\u6807\u7B7E"),hint:t("\u9017\u53F7\u5206\u9694")},e.default.createElement("input",{value:g,onChange:T=>b(T.target.value)})),e.default.createElement(Y,{label:t("\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883")},e.default.createElement("input",{value:c,onChange:T=>u(T.target.value)}))))}function St({idea:i,onClose:n}){let[a,s]=e.default.useState(!1),o=async()=>{s(!0);let r=await vi(i.idea_no);s(!1),r&&n()};return e.default.createElement(be,{title:t("\u5220\u9664\u60F3\u6CD5"),onClose:n,width:420,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{onClick:n},t("\u53D6\u6D88")),e.default.createElement(C,{variant:"danger-solid",onClick:o,disabled:a},a?t("\u5220\u9664\u4E2D\u2026"):t("\u786E\u8BA4\u5220\u9664")))},e.default.createElement("p",{className:"ip-dialog-note"},t("\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002",{title:ue(i),no:i.idea_no})))}function Li(i){let n=String(i||"").match(/(?:^|\n)\s*(?:下一步|next step)[：:]\s*([^\n]+)/i);return n?n[1].trim():""}function Ct({idea:i,onClose:n}){let a=v(l=>l.device),[s,o]=e.default.useState({loading:!0,note:"",error:"",items:[]});e.default.useEffect(()=>{let l=ce.sessions;if(!l){o({loading:!1,note:"",error:t("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u4F1A\u8BDD\u641C\u7D22\u3002"),items:[]});return}let p=()=>{let g=l.list&&typeof l.list.getSnapshot=="function"?l.list.getSnapshot():null,b=Array.isArray(g&&g.ids)?g.ids:[],c=g&&g.byId||{};return b.slice(0,30).map(u=>{let _=c[u]||{},B=String(_.title||_.name||u);return{sessionId:u,snippet:B}})},x=new AbortController;o({loading:!0,note:"",error:"",items:[]});let f=g=>{let b=p();b.length?o({loading:!1,note:g,error:"",items:b}):o({loading:!1,note:"",error:t("\u6CA1\u6709\u53EF\u7528\u7684\u4F1A\u8BDD\u5217\u8868\u3002"),items:[]})};if(typeof l.search!="function"){f(t("\u4F1A\u8BDD\u641C\u7D22\u4E0D\u53EF\u7528\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002"));return}return Promise.resolve(l.search(i.idea_no,x.signal)).then(g=>{if(x.signal.aborted)return;if(g&&g.ok===!1){f(t("\u4F1A\u8BDD\u641C\u7D22\u7D22\u5F15\u672A\u5F00\u542F\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\uFF1B\u4E5F\u53EF\u4EE5\u624B\u52A8\u6311\u9009\u3002"));return}let b=g&&g.ok?g.value:g,c=Array.isArray(b&&b.items)?b.items:[];if(!c.length){f(t("\u6CA1\u6709\u641C\u5230\u5305\u542B\u7F16\u53F7\u7684\u4F1A\u8BDD\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002"));return}o({loading:!1,note:"",error:"",items:c})}).catch(()=>{x.signal.aborted||f(t("\u4F1A\u8BDD\u641C\u7D22\u5931\u8D25\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002"))}),()=>x.abort()},[i.idea_no]);let r=async l=>{let p=Array.isArray(i.session_refs)?i.session_refs:[];if(p.some(g=>g.session_id===l.sessionId)){E(t("\u8FD9\u6761\u4F1A\u8BDD\u5DF2\u7ECF\u5173\u8054\u8FC7\u4E86"));return}let x=[...p,{session_id:l.sessionId,title:String(l.snippet||"").replace(/\s+/g," ").slice(0,120),device:a||"",bound_at:new Date().toISOString(),reason:"search"}];await xe(i.idea_no,{session_refs:x},t("\u5DF2\u5173\u8054\u4F1A\u8BDD"))&&n()};return e.default.createElement(be,{title:t("\u5173\u8054 DSH \u4F1A\u8BDD"),onClose:n,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{onClick:n},t("\u5173\u95ED")))},e.default.createElement("p",{className:"ip-dialog-note"},t("\u6309\u7F16\u53F7\u300C{no}\u300D\u641C\u7D22\u5F53\u524D DSH \u7684\u4F1A\u8BDD\u5185\u5BB9\uFF1B\u70B9\u4E00\u6761\u5373\u53EF\u7ED1\u5B9A\u3002",{no:i.idea_no})),s.loading?e.default.createElement(we,{label:t("\u6B63\u5728\u641C\u7D22\u4F1A\u8BDD\u2026")}):null,s.note?e.default.createElement("p",{className:"ip-dialog-note"},s.note):null,s.error?e.default.createElement("p",{className:"ip-dialog-note is-error"},s.error):null,!s.loading&&!s.error&&!s.items.length?e.default.createElement("p",{className:"ip-dialog-note"},t("\u6CA1\u6709\u641C\u5230\u5305\u542B\u8FD9\u4E2A\u7F16\u53F7\u7684\u4F1A\u8BDD\u3002\u53D1\u9001\u8FC7\u300C\u4E00\u952E\u63A8\u8FDB\u300D\u7684\u4F1A\u8BDD\u901A\u5E38\u80FD\u88AB\u641C\u5230\u3002")):null,e.default.createElement("div",{className:"ip-session-results"},s.items.map(l=>e.default.createElement("button",{key:l.sessionId,type:"button",className:"ip-session-result",onClick:()=>r(l)},e.default.createElement("span",{className:"ip-session-id"},String(l.sessionId).slice(0,18)),e.default.createElement("span",{className:"ip-session-snippet"},String(l.snippet||"").replace(/\s+/g," ").slice(0,180))))))}function zt({narrow:i}){let n=v(d=>d.selectedNo),a=v(d=>d.query),s=v(d=>d.status),o=v(d=>d.ideas),r=v(d=>d.total),l=v(d=>d.detail),p=v(d=>d.detailLoading),x=v(d=>d.detailError),f=v(d=>d.mode),g=v(d=>d.device),[b,c]=e.default.useState(!1),[u,_]=e.default.useState(!1),[B,P]=e.default.useState(!1),[L,J]=e.default.useState(!1),[T,V]=e.default.useState(!1),[F,N]=e.default.useState(!1),[k,z]=e.default.useState(!1),[M,W]=e.default.useState(!1),[G,O]=e.default.useState(!1),R=e.default.useRef(null);if(e.default.useEffect(()=>{c(!1),_(!1),P(!1),J(!1),N(!1),z(!1),W(!1),O(!1)},[n]),e.default.useEffect(()=>{if(!M)return;let d=$=>{(!R.current||!R.current.contains($.target))&&W(!1)},K=$=>{$.key==="Escape"&&W(!1)};return document.addEventListener("pointerdown",d),document.addEventListener("keydown",K),()=>{document.removeEventListener("pointerdown",d),document.removeEventListener("keydown",K)}},[M]),!n){let d=a.trim()!==""||s!=="all";return o.length===0||d&&r===0?e.default.createElement("div",{className:"ip-detail-pane"}):e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement(We,{icon:"note",title:d?t("\u627E\u5230 {n} \u6761\u60F3\u6CD5",{n:r}):t("\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5"),hint:d?t("\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002"):t("\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002")})))}if(x&&!l)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(I,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},t("\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},x),e.default.createElement(C,{icon:"refresh",onClick:()=>le(n)},t("\u91CD\u8BD5")))));if(!l)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement(we,{label:t("\u6B63\u5728\u5C55\u5F00\u2026")}));let h=l.idea||{},D=Array.isArray(l.updates)?l.updates:[],me=Array.isArray(l.links)?l.links:[],ee=h.idea_no||n,Ee=async d=>{T||d===h.status||(V(!0),await xe(ee,{status:d},t("\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D",{label:ke(d)})),V(!1))},H=D.length?D[D.length-1]:null,S=D.slice(0,-1).reverse(),A=!!h.summary||!!h.source_note||D.length>0,X=e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u539F\u6587")),e.default.createElement("span",{className:"ip-section-count"},t("\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(ie,{icon:"copy",size:13,label:t("\u590D\u5236\u539F\u6587"),onClick:()=>pe(h.raw_text||"",t("\u5DF2\u590D\u5236\u539F\u6587"))}),A?e.default.createElement(C,{size:"sm",variant:"ghost",onClick:()=>N(d=>!d)},F?t("\u6536\u8D77\u539F\u6587"):t("\u5C55\u5F00\u539F\u6587")):null),A&&!F?e.default.createElement("button",{type:"button",className:"ip-raw-fold",onClick:()=>N(!0)},e.default.createElement("span",null,t("\u539F\u6587\u9ED8\u8BA4\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00")),e.default.createElement("span",{className:"ip-muted"},t("\u9010\u5B57\u4FDD\u5B58"))):e.default.createElement("pre",{className:"ip-raw"},h.raw_text||t("\uFF08\u65E0\u539F\u6587\uFF09"))),Se=h.status==="pool"&&D.length===0?t("\u590D\u5236\u5C55\u5F00\u63D0\u793A\u8BCD"):t("\u590D\u5236\u63A5\u529B\u63D0\u793A\u8BCD"),re=()=>pe(Di(h),t("\u5DF2\u590D\u5236\u63D0\u793A\u8BCD\uFF0C\u53EF\u7C98\u8D34\u5230\u5BF9\u8BDD\u7EE7\u7EED")),ne=`${Di(h)}

\uFF08\u672C\u6B21\u4ECE\u7075\u611F\u6C60 ${ee} \u4E00\u952E\u63A8\u8FDB\uFF1B\u5B8C\u6210\u540E\u56DE\u586B\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002\uFF09`,ge=(d,K=0)=>{let $=ce.sessions,ae=$&&$.list&&typeof $.list.getSnapshot=="function"?$.list.getSnapshot():null,De=Array.isArray(ae&&ae.ids)?ae.ids:[],Ge=De.filter(fe=>!d.includes(fe)),Xe=Ge.length===1?Ge[0]:De.length===1?De[0]:null;if(Xe){let fe=Xe,Qe=ae.byId&&ae.byId[fe]||{},Ze=Array.isArray(h.session_refs)?h.session_refs:[];if(Ze.some(Fi=>Fi.session_id===fe))return;let Ui={session_id:fe,title:String(Qe.title||Qe.name||t("\u4E00\u952E\u63A8\u8FDB\u4F1A\u8BDD")).slice(0,200),device:g||"",bound_at:new Date().toISOString(),reason:"advance"};xe(ee,{session_refs:[...Ze,Ui]},t("\u5DF2\u81EA\u52A8\u5173\u8054\u65B0\u4F1A\u8BDD"));return}K<9&&window.setTimeout(()=>ge(d,K+1),400)},Oi=()=>{let d=ce.uiWorkspace;if(d&&typeof d.startSession=="function")try{let K=ce.sessions,$=K&&K.list&&typeof K.list.getSnapshot=="function"?K.list.getSnapshot():null,ae=Array.isArray($&&$.ids)?[...$.ids]:[];d.startSession(void 0,{prompt:ne,whenDraftExists:"append"}),E(t("\u5DF2\u6253\u5F00\u65B0\u4F1A\u8BDD\u5E76\u9884\u586B\u63A8\u8FDB\u63D0\u793A\u8BCD\uFF1B\u82E5\u53EA\u65B0\u589E\u4E86\u4E00\u4E2A\u4F1A\u8BDD\uFF0C\u4F1A\u81EA\u52A8\u5173\u8054\u3002")),window.setTimeout(()=>ge(ae),600);return}catch{}pe(ne,t("\u5F53\u524D\u754C\u9762\u4E0D\u80FD\u76F4\u63A5\u5F00\u65B0\u4F1A\u8BDD\uFF0C\u5DF2\u590D\u5236\u63A8\u8FDB\u63D0\u793A\u8BCD"))},Ki=d=>{let K=ce.uiWorkspace;if(!K||typeof K.openSession!="function"){E(t("\u5F53\u524D\u73AF\u5883\u4E0D\u80FD\u6253\u5F00 DSH \u4F1A\u8BDD"),{error:!0});return}try{K.openSession(d.session_id)}catch($){E(t("\u6253\u5F00\u4F1A\u8BDD\u5931\u8D25\uFF1A{error}",{error:$.message||$}),{error:!0})}},Ye=f==="cloud",$i=()=>{if(Ye){pe(pt(h),t("\u5DF2\u590D\u5236\u94FE\u63A5"));return}pe(`\u7075\u611F\u6C60 ${ee}\u300A${ue(h)}\u300B\uFF08\u672C\u673A\u6A21\u5F0F\uFF1A\u7528 idea_pool \u5DE5\u5177\u6309\u7F16\u53F7\u8BFB\u53D6\uFF0C\u6216\u5728 DSH \u4FA7\u680F\u300C\u7075\u611F\u6C60\u300D\u67E5\u770B\uFF09`,t("\u5DF2\u590D\u5236\u5F15\u7528"))};return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-detail"},e.default.createElement("div",{className:"ip-detail-head"},i?e.default.createElement("div",{className:"ip-detail-back"},e.default.createElement(C,{size:"sm",variant:"ghost",icon:"chevL",onClick:He},t("\u8FD4\u56DE\u5217\u8868"))):null,e.default.createElement("div",{className:"ip-detail-title-row"},e.default.createElement("h2",{className:"ip-detail-title"},ue(h)||ee),e.default.createElement(ie,{icon:"edit",label:t("\u7F16\u8F91"),onClick:()=>c(!0)}),e.default.createElement(ie,{icon:"trash",label:t("\u5220\u9664"),onClick:()=>_(!0)})),e.default.createElement("div",{className:"ip-detail-meta"},e.default.createElement(Ci,{status:h.status},ke(h.status)),e.default.createElement("span",{className:"ip-card-no"},ee),h.source?e.default.createElement("span",null,t("\u6765\u6E90\uFF1A{source}",{source:Ve(h.source)})):null,e.default.createElement("span",null,t("\u521B\u5EFA {time}",{time:Ne(h.created_at)})),e.default.createElement("span",null,t("\u66F4\u65B0 {time}",{time:Ne(h.updated_at)}))),Array.isArray(h.tags)&&h.tags.length?e.default.createElement("div",{className:"ip-detail-tags"},h.tags.map(d=>e.default.createElement(qe,{key:d},d))):null,e.default.createElement("div",{className:"ip-detail-actions"},e.default.createElement(C,{size:"sm",variant:"primary",icon:"spark",onClick:Oi},t("\u4E00\u952E\u63A8\u8FDB")),e.default.createElement(C,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>{P(!0),window.requestAnimationFrame(()=>document.querySelector(".ip-abox")?.scrollIntoView({block:"center"}))}},t("\u8BB0\u8FDB\u5C55")),e.default.createElement(C,{size:"sm",icon:"copy",onClick:re,title:t("\u590D\u5236\u540E\u7C98\u8D34\u7ED9 agent\uFF0C\u7EE7\u7EED\u5C55\u5F00\u6216\u63A5\u529B")},Se),e.default.createElement(C,{size:"sm",icon:"link",onClick:$i},t(Ye?"\u590D\u5236\u94FE\u63A5":"\u590D\u5236\u5F15\u7528")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement("div",{className:"ip-status-menu",ref:R},e.default.createElement("button",{type:"button",className:"ip-status-trigger","aria-haspopup":"menu","aria-expanded":M,disabled:T,onClick:()=>W(d=>!d)},e.default.createElement("span",{className:"ip-status-label"},t("\u72B6\u6001")),e.default.createElement("i",{className:`ip-dot is-${h.status}`,"aria-hidden":"true"}),e.default.createElement("span",null,ke(h.status)),e.default.createElement(I,{name:"chevD",size:12})),M?e.default.createElement("div",{className:"ip-status-pop",role:"menu","aria-label":t("\u5207\u6362\u72B6\u6001")},Ti.map(d=>e.default.createElement("button",{key:d,type:"button",role:"menuitemradio","aria-checked":h.status===d,className:h.status===d?"is-on":"",disabled:T,onClick:()=>{W(!1),Ee(d)}},e.default.createElement("i",{className:`ip-dot is-${d}`,"aria-hidden":"true"}),e.default.createElement("span",null,ke(d)),h.status===d?e.default.createElement(I,{name:"check",size:13}):null))):null))),e.default.createElement("div",{className:"ip-detail-body"},h.gist?e.default.createElement("div",{className:"ip-gist"},h.gist):null,A?null:X,h.summary?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u6458\u8981"))),e.default.createElement("div",{className:"ip-summary"},h.summary)):null,h.source_note?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u5907\u6CE8"))),e.default.createElement("div",{className:"ip-text"},h.source_note)):null,H?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u6700\u65B0\u8FDB\u5C55")),e.default.createElement("span",{className:"ip-section-count"},Ne(H.created_at)),e.default.createElement("span",{className:"ip-spacer"}),H.source?e.default.createElement("span",{className:"ip-src"},e.default.createElement(I,{name:"monitor",size:11}),Ve(H.source)):null),e.default.createElement("div",{className:"ip-latest"},Li(H.content)?e.default.createElement("div",{className:"ip-next-step"},e.default.createElement("span",{className:"ip-next-step-label"},t("\u4E0B\u4E00\u6B65")),e.default.createElement("span",null,Li(H.content))):null,e.default.createElement("div",{className:`ip-latest-content ${H.content&&H.content.length>300&&!k?"is-clamped":""}`},H.content),e.default.createElement("div",{className:"ip-latest-foot"},e.default.createElement("span",{className:"ip-muted"},t("\u4E0B\u4E00\u6B65\u4ECE\u8FD9\u91CC\u63A5\u7740\u63A8\u8FDB")),e.default.createElement("span",{className:"ip-spacer"}),H.content&&H.content.length>300?e.default.createElement(C,{size:"sm",variant:"ghost",onClick:()=>z(d=>!d)},k?t("\u6536\u8D77"):t("\u5C55\u5F00\u5168\u90E8")):null,e.default.createElement(C,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>P(!0)},t("\u8BB0\u8FDB\u5C55"))))):null,e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u5173\u8054\u4F1A\u8BDD")),e.default.createElement("span",{className:"ip-section-count"},(h.session_refs||[]).length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"ghost",icon:"search",onClick:()=>O(!0)},t("\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD"))),(h.session_refs||[]).length?e.default.createElement("div",{className:"ip-session-chips"},h.session_refs.map(d=>e.default.createElement("button",{key:d.session_id,type:"button",className:"ip-session-chip",onClick:()=>Ki(d),title:d.session_id},e.default.createElement(I,{name:"monitor",size:12}),e.default.createElement("span",null,d.title||String(d.session_id).slice(0,18)),d.device?e.default.createElement("span",{className:"ip-session-device"},d.device):null))):e.default.createElement("p",{className:"ip-muted"},t("\u8FD8\u6CA1\u6709\u5173\u8054\u4F1A\u8BDD\uFF1B\u4E00\u952E\u63A8\u8FDB\u540E\u53EF\u7528\u300C\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD\u300D\u7ED1\u5B9A\u3002"))),e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u5173\u8054\u4EA7\u51FA")),e.default.createElement("span",{className:"ip-section-count"},me.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>J(d=>!d)},t("\u52A0\u4EA7\u51FA"))),me.length?e.default.createElement("ul",{className:"ip-links"},me.map(d=>e.default.createElement(yt,{key:d.id||d.url,link:d}))):e.default.createElement("p",{className:"ip-muted"},t("\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002"))),e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u8FDB\u5C55\u5386\u53F2")),e.default.createElement("span",{className:"ip-section-count"},S.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>P(d=>!d)},t("\u52A0\u8FDB\u5C55"))),S.length?e.default.createElement("ul",{className:"ip-timeline"},S.map(d=>e.default.createElement(wt,{key:d.id||d.created_at,update:d}))):e.default.createElement("p",{className:"ip-muted"},H?t("\u6CA1\u6709\u66F4\u65E9\u7684\u8FDB\u5C55\u3002"):t("\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002")),B?e.default.createElement(kt,{no:ee}):null),A?X:null))),b?e.default.createElement(Nt,{idea:h,onClose:()=>c(!1)}):null,u?e.default.createElement(St,{idea:h,onClose:()=>_(!1)}):null,G?e.default.createElement(Ct,{idea:h,onClose:()=>O(!1)}):null)}function ye(i){return String(i||"").trim().replace(/\/+$/,"")}function _t({onClose:i}){let n=v(S=>S.settings),a=v(S=>S.storagePath),s=v(S=>S.device),o=v(S=>S.mode),[r,l]=e.default.useState(o==="cloud"?"cloud":"local"),[p,x]=e.default.useState(s),[f,g]=e.default.useState(de),[b,c]=e.default.useState(""),[u,_]=e.default.useState(!1),[B,P]=e.default.useState(!1),[L,J]=e.default.useState(!1),[T,V]=e.default.useState(!1),[F,N]=e.default.useState(null);e.default.useEffect(()=>{xi()},[]);let k=e.default.useRef(!1);e.default.useEffect(()=>{if(!n||k.current)return;k.current=!0,l(n.mode==="cloud"?"cloud":"local"),typeof n.device=="string"&&x(n.device);let S=n.cloud&&typeof n.cloud.base=="string"?n.cloud.base:"";g(S||de)},[n]);let z=n&&n.cloud||{},M=!!z.hasKey,W=typeof z.keyHint=="string"?z.keyHint:"",G=typeof z.base=="string"?z.base:"",O=ye(f)||G||de,R=ye(f)!==ye(G||de)||b.trim()!=="",h=n&&typeof n.storagePath=="string"&&n.storagePath||a,D=S=>{l(S),N(null)},me=async()=>{if(B)return;let S=ye(f);if(!S){E(t("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(S)){E(t("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}P(!0),N(null);let A=await wi({base:S,apiKey:b.trim()});if(P(!1),A&&A.ok){N({ok:!0,text:t("\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms",{count:A.count,ms:A.latencyMs})});return}let X=A&&Number(A.status);N({ok:!1,text:X===401||X===403?t("\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key"):t("\u8FDE\u63A5\u5931\u8D25\uFF1A{error}",{error:A&&A.error||t("\u672A\u77E5\u9519\u8BEF")})})},ee=async()=>{if(T||!M||typeof window>"u"||typeof window.confirm!="function"||!window.confirm(t("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002")))return;V(!0);let A=await yi();V(!1),A&&(c(""),N(null))},Ee=async()=>{L||(J(!0),await ki(),J(!1))},H=async()=>{if(u)return;let S=r==="cloud"?"cloud":"local",A={};n?S!==n.mode&&(A.mode=S):S!==o&&(A.mode=S);let X=p.trim();if(!X){E(t("\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if((n?X!==n.device:X!==s)&&(A.device=X),S==="cloud"){let re=ye(f);if(!re){E(t("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(re)){E(t("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}let ne={};re!==G&&(ne.base=re);let ge=b.trim();ge&&(ne.apiKey=ge),Object.keys(ne).length&&(A.cloud=ne)}if(Object.keys(A).length===0){i();return}_(!0);let Se=await bi(A);_(!1),Se&&i()};return e.default.createElement(be,{title:t("\u8BBE\u7F6E"),onClose:i,width:568,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{onClick:i},t("\u5173\u95ED")),e.default.createElement(C,{variant:"primary",onClick:H,disabled:u},u?t("\u4FDD\u5B58\u4E2D\u2026"):t("\u4FDD\u5B58")))},e.default.createElement("div",{className:"ip-dialog-rows"},e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,t("\u6570\u636E\u4F4D\u7F6E")),e.default.createElement("p",null,t("\u5148\u9009\u6570\u636E\u5B58\u5728\u54EA\u91CC\uFF1B\u5207\u6362\u6A21\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u642C\u6570\u636E\u3002"))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u8FD0\u884C\u6A21\u5F0F")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":t("\u8FD0\u884C\u6A21\u5F0F")},e.default.createElement("button",{type:"button",className:r==="local"?"is-on":"","aria-pressed":r==="local",onClick:()=>D("local")},t("\u672C\u673A\u6A21\u5F0F")),e.default.createElement("button",{type:"button",className:r==="cloud"?"is-on":"","aria-pressed":r==="cloud",onClick:()=>D("cloud")},t("\u4E91\u7AEF\u6A21\u5F0F"))),e.default.createElement("p",{className:"ip-dialog-note"},r==="cloud"?t("\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002",{base:O}):t("\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002")))),r==="local"?e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u5B58\u50A8\u8DEF\u5F84")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("code",{className:"ip-dialog-code"},h||t("\u672A\u77E5")),e.default.createElement("p",{className:"ip-dialog-note"},t("\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002")))):null),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,t("\u8FDE\u63A5\u914D\u7F6E")),e.default.createElement("p",null,r==="cloud"?t("\u4E91\u7AEF\u5730\u5740\u4E0E API Key\uFF1B\u6D4B\u8BD5\u4F7F\u7528\u5F53\u524D\u586B\u5199\u7684\u503C\u3002"):t("\u672C\u673A\u6A21\u5F0F\u4E0D\u9700\u8981\u8FDE\u63A5\uFF1B\u5207\u5230\u4E91\u7AEF\u6A21\u5F0F\u540E\u518D\u586B\u5199\u5730\u5740\u4E0E Key\u3002"))),r==="cloud"?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u4E91\u7AEF\u5730\u5740")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:f,placeholder:de,onChange:S=>{g(S.target.value),N(null)}})),e.default.createElement("p",{className:"ip-dialog-note"},t("\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002",{base:de})))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("API Key")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",type:"password",autoComplete:"off",value:b,placeholder:M?t("\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}",{hint:W||"****"}):t("\u7C98\u8D34\u4E91\u7AEF API Key"),onChange:S=>{c(S.target.value),N(null)}}),M?e.default.createElement(C,{size:"sm",variant:"danger",onClick:ee,disabled:T||u},T?t("\u6E05\u9664\u4E2D\u2026"):t("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key")):null),e.default.createElement("p",{className:"ip-dialog-note"},M?t("\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002",{hint:W||"****"}):t("\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u6D4B\u8BD5\u8FDE\u63A5")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(C,{size:"sm",icon:"bolt",onClick:me,disabled:B},B?t("\u6D4B\u8BD5\u4E2D\u2026"):t("\u6D4B\u8BD5\u8FDE\u63A5")),F?e.default.createElement("span",{className:`ip-cloud-status ${F.ok?"is-ok":"is-error"}`},e.default.createElement(I,{name:F.ok?"check":"alert",size:12}),F.text):e.default.createElement("span",{className:"ip-cloud-status"},t("\u7528\u5F53\u524D\u586B\u5199\u914D\u7F6E\u8BD5\u62C9\u4E00\u6B21\uFF0C\u4E0D\u9700\u8981\u5148\u4FDD\u5B58")))))):e.default.createElement("p",{className:"ip-dialog-note"},t("\u5F53\u524D\u662F\u672C\u673A\u6A21\u5F0F\u3002"))),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,t("\u6570\u636E\u8FC1\u79FB")),e.default.createElement("p",null,t("\u5BFC\u5165\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\uFF1B\u4E0D\u4F1A\u5220\u9664\u672C\u673A\u73B0\u6709\u6570\u636E\u3002"))),r==="local"?e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u5BFC\u51FA")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(C,{icon:"download",onClick:()=>Ni()},t("\u5BFC\u51FA JSON"))),e.default.createElement("p",{className:"ip-dialog-note"},t("\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002")))):null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u5BFC\u5165\u5230\u672C\u673A")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(C,{size:"sm",icon:"download",onClick:Ee,disabled:L||!M||R,title:M?R?t("\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1B\u5148\u4FDD\u5B58\uFF0C\u518D\u5BFC\u5165\u3002"):void 0:t("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")},L?t("\u5BFC\u5165\u4E2D\u2026"):t("\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A"))),e.default.createElement("p",{className:"ip-dialog-note"},M?R?t("\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1A\u5148\u70B9\u300C\u4FDD\u5B58\u300D\uFF0C\u518D\u5BFC\u5165\uFF0C\u907F\u514D\u7528\u9519\u5730\u5740\u6216 Key\u3002"):t("\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002"):t("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002"))))),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,t("\u9AD8\u7EA7")),e.default.createElement("p",null,t("\u8BBE\u5907\u6807\u8BC6\u4F1A\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002"))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u8BBE\u5907\u6807\u8BC6")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:p,placeholder:"dsh-mac / dsh-win / volcano",onChange:S=>x(S.target.value)})))))))}function Pi(){si();let i=v(k=>k.booted),n=v(k=>k.loading),a=v(k=>k.error),s=v(k=>k.canUndo),o=v(k=>k.ideas),r=v(k=>k.status),l=v(k=>k.query),p=v(k=>k.selectedNo),x=v(k=>k.total),f=v(k=>k.suppressAutoSelect),g=v(k=>k.view),b=e.default.useRef(null),c=e.default.useRef(null),[u,_]=e.default.useState(1200),[B,P]=e.default.useState(!1),L=u<880,J=u<640;e.default.useEffect(()=>{$e()},[]),e.default.useEffect(()=>{let k=b.current;if(!k||typeof ResizeObserver>"u")return;let z=new ResizeObserver(([M])=>{M&&M.contentRect&&_(M.contentRect.width)});return z.observe(k),()=>z.disconnect()},[]),e.default.useEffect(()=>{!i||L||p||f||l.trim()||o.length&&le(o[0].idea_no)},[i,L,p,f,l,o]),e.default.useEffect(()=>{let k=z=>{let M=z.target,W=M&&M.tagName||"",G=/^(INPUT|TEXTAREA|SELECT)$/.test(W)||!!(M&&M.isContentEditable);if((z.metaKey||z.ctrlKey)&&!z.shiftKey&&(z.key==="z"||z.key==="Z")&&!G&&s){z.preventDefault(),je();return}if(z.key==="/"&&!G&&!z.metaKey&&!z.ctrlKey&&!z.altKey){z.preventDefault(),c.current?.focus();return}z.key==="Escape"&&L&&p&&He()};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[s,L,p]);let T=!L||!p,V=!L||!!p,F=L&&!!p,N=i&&!n&&!a&&o.length===0&&r==="all"&&!l.trim();return e.default.createElement("div",{className:`ip-root ${L?"is-narrow":""} ${J?"is-compact":""} ${F?"is-reading":""} ${g==="review"?"is-review":""}`,ref:b},e.default.createElement("style",null,ei),e.default.createElement(ut,{searchRef:c,onOpenSettings:()=>P(!0)}),F?null:e.default.createElement(ft,{highlight:N}),i&&!F?e.default.createElement(vt,null):null,e.default.createElement("div",{className:"ip-body"},n&&!i?e.default.createElement(we,{label:t("\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026")}):a&&!i?e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(I,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},t("\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},a),e.default.createElement(C,{icon:"refresh",onClick:()=>ui()},t("\u91CD\u8BD5"))):e.default.createElement(e.default.Fragment,null,T?e.default.createElement("div",{className:"ip-list-pane"},e.default.createElement("div",{className:"ip-list-viewbar"},e.default.createElement("div",{className:"ip-view-switch",role:"group","aria-label":t("\u89C6\u56FE")},e.default.createElement("button",{type:"button",className:g==="list"?"is-on":"","aria-pressed":g==="list",onClick:()=>Ue("list")},t("\u5217\u8868")),e.default.createElement("button",{type:"button",className:g==="review"?"is-on":"","aria-pressed":g==="review",onClick:()=>Ue("review")},t("\u68B3\u7406"))),e.default.createElement("span",{className:"ip-list-count"},t("{n} \u6761",{n:x}))),e.default.createElement(bt,{narrow:L})):null,V?e.default.createElement(zt,{narrow:L}):null)),B?e.default.createElement(_t,{onClose:()=>P(!1)}):null,e.default.createElement(zi,null))}var ce={sessions:null,uiWorkspace:null};function Et({size:i}){return e.default.createElement(I,{name:"bulb",size:i})}var Dt=["slots","sessions","uiWorkspace"];function Lt(i){let n=a=>{try{return typeof i.get=="function"?i.get(a):i[a]}catch{return}};ce={sessions:n("sessions")??i.sessions??null,uiWorkspace:n("uiWorkspace")??i.uiWorkspace??null},i.slots.inject("main",()=>i.slots.register({name:"main",key:_i},Pi)),i.effect(()=>{let a=null,s=()=>{a?.(),a=i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:_i,order:15,label:()=>t("\u7075\u611F\u6C60")},Et))};s();let o=Me(s);return()=>{o(),a?.()}},"dsh-idea-pool: sidebar entry")}
return module.exports}})
