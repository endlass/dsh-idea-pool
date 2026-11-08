window.__ModuleLoader__.load({id:"dsh-idea-pool",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var vi=Object.create;var me=Object.defineProperty;var bi=Object.getOwnPropertyDescriptor;var yi=Object.getOwnPropertyNames;var wi=Object.getPrototypeOf,ki=Object.prototype.hasOwnProperty;var Ni=(i,t)=>{for(var o in t)me(i,o,{get:t[o],enumerable:!0})},Oe=(i,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of yi(t))!ki.call(i,r)&&r!==o&&me(i,r,{get:()=>t[r],enumerable:!(n=bi(t,r))||n.enumerable});return i};var ge=(i,t,o)=>(o=i!=null?vi(wi(i)):{},Oe(t||!i||!i.__esModule?me(o,"default",{value:i,enumerable:!0}):o,i)),Si=i=>Oe(me({},"__esModule",{value:!0}),i);var at={};Ni(at,{App:()=>xi,apply:()=>tt,inject:()=>it});module.exports=Si(at);var e=ge(require("react"),1);var Ke=`/* dsh-idea-pool \u5BA2\u6237\u7AEF\u6837\u5F0F\uFF1A\u989C\u8272\u53EA\u8D70 --dsw-alias-* \u8BED\u4E49 token\uFF08\u5E26 fallback\uFF09\uFF0C\u660E\u6697\u4E3B\u9898\u7531\u5BBF\u4E3B\u5207\u6362\u3002 */
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
`;var Ue=ge(require("react"),1);var $e={\u7075\u611F\u6C60:"Idea Pool",\u672C\u673A\u6A21\u5F0F:"Local mode",\u4E91\u7AEF\u6A21\u5F0F:"Cloud mode",\u641C\u7D22\u60F3\u6CD5:"Search ideas","\u641C\u7D22\u60F3\u6CD5\u2026":"Search ideas\u2026",\u6E05\u7A7A\u641C\u7D22:"Clear search",\u64A4\u9500\u4E0A\u4E00\u6B65:"Undo last step",\u5237\u65B0:"Refresh",\u8BBE\u7F6E:"Settings",\u5173\u95ED:"Close",\u91CD\u8BD5:"Retry",\u5F55\u5165\u7075\u611F:"Capture an idea",\u60F3\u6CD5\u539F\u6587:"Raw idea text","\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60":"Type whatever comes to mind. Enter for a new line, \u2318/Ctrl+Enter to add.","\u2318/Ctrl+Enter \u4FDD\u5B58":"\u2318/Ctrl+Enter to save",\u66F4\u591A\u9009\u9879:"More options",\u6536\u8D77\u9009\u9879:"Hide options",\u5165\u6C60:"Add","\u4FDD\u5B58\u4E2D\u2026":"Saving\u2026",\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60:"Write something first","\u6807\u9898\uFF08\u53EF\u9009\uFF09":"Title (optional)","\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57":"Leave empty to use the first 40 characters","\u6807\u7B7E\uFF08\u53EF\u9009\uFF09":"Tags (optional)","\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053":"Comma-separated, e.g. research, channels","\u6458\u8981\uFF08\u53EF\u9009\uFF09":"Summary (optional)","\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"One-line summary to scan later",\u72B6\u6001\u7B5B\u9009:"Filter by status",\u5168\u90E8:"All",\u5DF2\u5165\u6C60:"Pool",\u63A8\u8FDB\u4E2D:"In progress",\u5DF2\u6536\u53E3:"Done",\u6401\u7F6E:"Parked",\u5207\u6362\u72B6\u6001:"Change status","\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D":"Status changed to \u201C{label}\u201D","1 \u6761\u8FDB\u5C55":"1 update","{n} \u6761\u8FDB\u5C55":"{n} updates","1 \u4E2A\u4EA7\u51FA":"1 output","{n} \u4E2A\u4EA7\u51FA":"{n} outputs","\u6B63\u5728\u52A0\u8F7D\u2026":"Loading\u2026","\u6B63\u5728\u5237\u65B0\u2026":"Refreshing\u2026","\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026":"Loading the idea pool\u2026",\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25:"Failed to load the idea pool",\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684:"The idea pool is empty",\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5:"No matching ideas","\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002":"Try another keyword or status.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add. In local mode the data stays on this machine.",\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5:"Select an idea","\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002":"The list is on the left. On wide screens, click a card to read its raw text, progress and outputs.","\u6B63\u5728\u5C55\u5F00\u2026":"Loading\u2026",\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25:"Failed to load this idea",\u8FD4\u56DE\u5217\u8868:"Back to list",\u539F\u6587:"Raw text","\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB":"Verbatim \xB7 read-only",\u590D\u5236\u539F\u6587:"Copy raw text",\u5DF2\u590D\u5236\u539F\u6587:"Raw text copied",\u6458\u8981:"Summary",\u5907\u6CE8:"Note","\u6765\u6E90\uFF1A{source}":"Source: {source}","\u521B\u5EFA {time}":"Created {time}","\u66F4\u65B0 {time}":"Updated {time}",\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Copy expand prompt",\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Expand prompt copied",\u590D\u5236\u5F15\u7528:"Copy reference",\u5DF2\u590D\u5236\u5F15\u7528:"Reference copied",\u590D\u5236\u94FE\u63A5:"Copy link",\u5DF2\u590D\u5236\u94FE\u63A5:"Link copied",\u7F16\u8F91:"Edit",\u5220\u9664:"Delete",\u5173\u8054\u4EA7\u51FA:"Outputs",\u52A0\u4EA7\u51FA:"Add output","\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002":"No outputs yet \u2014 attach result links once there is progress.",\u4EA7\u51FA\u6807\u9898:"Output title","\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55":"e.g. research report / progress log",\u94FE\u63A5:"Link","\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934":"The link must start with http(s)://",\u5148\u586B\u94FE\u63A5:"Fill in a link first",\u4FDD\u5B58\u4EA7\u51FA:"Save output",\u8FDB\u5C55:"Progress",\u52A0\u8FDB\u5C55:"Add progress","\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002":"No progress entries yet.",\u65B0\u589E\u8FDB\u5C55:"New progress entry","\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026":"Log progress (conclusion / research status / next step)\u2026",\u5148\u5199\u70B9\u5185\u5BB9:"Write something first","\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B":"Entries are append-only; note the machine and next step for cross-machine handoff",\u8BB0\u5F55\u8FDB\u5C55:"Save progress",\u5C55\u5F00\u5168\u90E8:"Show all",\u6536\u8D77:"Collapse",\u6587\u6863:"Doc","\uFF08\u65E0\u539F\u6587\uFF09":"(no raw text)",\u7F16\u8F91\u60F3\u6CD5:"Edit idea",\u6807\u9898:"Title","\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09":"Raw text (keep verbatim)",\u6807\u7B7E:"Tags",\u9017\u53F7\u5206\u9694:"Comma-separated","\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883":"Note / context",\u53D6\u6D88:"Cancel",\u4FDD\u5B58:"Save",\u5DF2\u4FDD\u5B58:"Saved",\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A:"Title can\u2019t be empty",\u5220\u9664\u60F3\u6CD5:"Delete idea","\u5220\u9664\u4E2D\u2026":"Deleting\u2026",\u786E\u8BA4\u5220\u9664:"Delete","\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002":"Deleting \u201C{title}\u201D ({no}) also removes its progress and outputs.",\u5B58\u50A8\u8DEF\u5F84:"Storage path",\u672A\u77E5:"Unknown","\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002":"In local mode every idea lives in this one JSON file; deleting it clears the idea pool.",\u8FD0\u884C\u6A21\u5F0F:"Run mode","\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002":"Local mode: data lives under this machine\u2019s DSH_HOME/idea-pool/ and is read and written directly by the plugin, with no network. Other machines can\u2019t see it.","\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002":"Cloud mode: data lives in the cloud at {base}; local data stays untouched.",\u4E91\u7AEF\u5730\u5740:"Cloud base URL","\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002":"Base URL of the cloud ideas-api; defaults to {base}.",\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A:"Cloud base URL can\u2019t be empty","\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934":"Cloud base URL must start with http(s)://","API Key":"API Key","\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}":"Saved, last four: {hint}","\u7C98\u8D34\u4E91\u7AEF API Key":"Paste the cloud API key","\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002":"API key saved (last four: {hint}); leave empty to keep it.","\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002":"No API key configured yet \u2014 cloud reads and writes need one.","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key":"Clear saved key","\u6E05\u9664\u4E2D\u2026":"Clearing\u2026","\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key":"Saved API key cleared","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002":"Clear the saved API key? Cloud reads and writes will fail until you add it again.","\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002":"No saved API key yet, so importing is unavailable. Fill in a key and save it first.","\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key":"Connection failed: cloud authentication failed \u2014 check the API Key",\u6D4B\u8BD5\u8FDE\u63A5:"Test connection","\u6D4B\u8BD5\u4E2D\u2026":"Testing\u2026","\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5":"Ping the cloud health endpoint with the URL and key above","\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms":"Connected \xB7 {count} ideas in the cloud \xB7 {ms} ms","\u8FDE\u63A5\u5931\u8D25\uFF1A{error}":"Connection failed: {error}",\u672A\u77E5\u9519\u8BEF:"Unknown error",\u5BFC\u5165\u5230\u672C\u673A:"Import to local",\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A:"Import cloud \u2192 local","\u5BFC\u5165\u4E2D\u2026":"Importing\u2026","\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002":"Fetch everything with the saved cloud configuration and merge it locally by idea number. Does not switch mode or delete local data.","\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761":"Imported {imported} and updated {updated} ideas from the cloud",\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165:"The cloud has no new ideas to import",\u8BBE\u5907\u6807\u8BC6:"Device ID","\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"Written into the source field of ideas and progress entries so the origin can be located across machines.",\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A:"Device ID can\u2019t be empty",\u5BFC\u51FA:"Export","\u5BFC\u51FA JSON":"Export JSON","\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002":"Export all ideas, progress and outputs into a single JSON file for backup or migration.","\u5DF2\u5BFC\u51FA JSON":"JSON exported",\u521A\u521A:"just now","{n} \u5206\u949F\u524D":"{n} min ago",\u672C\u673A:"Local",\u706B\u5C71\u4E91:"Volcano Cloud",\u624B\u52A8:"Manual",\u7F51\u9875:"Web",\u98DE\u4E66:"Feishu",\u5DF2\u590D\u5236:"Copied","\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236":"Copy failed \u2014 select and copy manually","\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}":"Can\u2019t reach the local service: {error}","\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09":"Request failed ({status})","\u5DF2\u5165\u6C60 {no}":"Added {no}","\u5DF2\u5220\u9664 {no}":"Deleted {no}",\u5DF2\u8BB0\u5F55\u8FDB\u5C55:"Progress saved",\u5DF2\u6DFB\u52A0\u4EA7\u51FA:"Output added",\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65:"Undid the last step","\u5DF2\u64A4\u9500\uFF1A{label}":"Undone: {label}",\u5DF2\u5237\u65B0:"Refreshed",\u8BBE\u7F6E\u5DF2\u4FDD\u5B58:"Settings saved",\u6E05\u7A7A\u641C\u7D22\u4E0E\u7B5B\u9009:"Clear search and filters",\u5199\u7B2C\u4E00\u6761:"Write the first one",\u6CA1\u6709\u53EF\u663E\u793A\u7684\u8BE6\u60C5:"No detail to show","\u5148\u6E05\u7A7A\u641C\u7D22\u6216\u5207\u6362\u72B6\u6001\uFF0C\u518D\u9009\u4E00\u6761\u60F3\u6CD5\u3002":"Clear the search or filters, then pick an idea.","\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F":"You have unsaved changes. Close anyway?","\u627E\u5230 {n} \u6761\u60F3\u6CD5":"Found {n} ideas","\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002":"Pick one from the list to view it.",\u663E\u793A\u5168\u90E8\u72B6\u6001:"Show all statuses","\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58":"Reading mode \xB7 verbatim",\u590D\u5236\u5C55\u5F00\u63D0\u793A\u8BCD:"Copy expand prompt",\u590D\u5236\u63A5\u529B\u63D0\u793A\u8BCD:"Copy relay prompt","\u5DF2\u590D\u5236\u63D0\u793A\u8BCD\uFF0C\u53EF\u7C98\u8D34\u5230\u5BF9\u8BDD\u7EE7\u7EED":"Prompt copied. Paste it into the conversation to continue.",\u4E0B\u4E00\u6B65\u4ECE\u8FD9\u91CC\u63A5\u7740\u63A8\u8FDB:"Continue from here","\u6CA1\u6709\u66F4\u65E9\u7684\u8FDB\u5C55\u3002":"No earlier updates.","\u539F\u6587\u9ED8\u8BA4\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00":"Original is folded by default. Click to expand.","\u590D\u5236\u540E\u7C98\u8D34\u7ED9 agent\uFF0C\u7EE7\u7EED\u5C55\u5F00\u6216\u63A5\u529B":"Paste to an agent to expand or relay",\u6536\u8D77\u539F\u6587:"Collapse original",\u5C55\u5F00\u539F\u6587:"Expand original",\u8BB0\u8FDB\u5C55:"Log update",\u6570\u636E\u4F4D\u7F6E:"Data location","\u5148\u9009\u6570\u636E\u5B58\u5728\u54EA\u91CC\uFF1B\u5207\u6362\u6A21\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u642C\u6570\u636E\u3002":"Choose where data lives. Switching modes does not move data automatically.",\u8FDE\u63A5\u914D\u7F6E:"Connection","\u4E91\u7AEF\u5730\u5740\u4E0E API Key\uFF1B\u6D4B\u8BD5\u4F7F\u7528\u5F53\u524D\u586B\u5199\u7684\u503C\u3002":"Cloud base and API key. Test uses the values currently filled in.","\u672C\u673A\u6A21\u5F0F\u4E0D\u9700\u8981\u8FDE\u63A5\uFF1B\u5207\u5230\u4E91\u7AEF\u6A21\u5F0F\u540E\u518D\u586B\u5199\u5730\u5740\u4E0E Key\u3002":"Local mode needs no connection. Switch to cloud mode to fill in the base and key.","\u7528\u5F53\u524D\u586B\u5199\u914D\u7F6E\u8BD5\u62C9\u4E00\u6B21\uFF0C\u4E0D\u9700\u8981\u5148\u4FDD\u5B58":"Test the current values without saving first","\u5F53\u524D\u662F\u672C\u673A\u6A21\u5F0F\u3002":"Currently in local mode.",\u6570\u636E\u8FC1\u79FB:"Data migration","\u5BFC\u5165\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\uFF1B\u4E0D\u4F1A\u5220\u9664\u672C\u673A\u73B0\u6709\u6570\u636E\u3002":"Import uses the saved cloud config and does not delete local data.",\u9AD8\u7EA7:"Advanced","\u8BBE\u5907\u6807\u8BC6\u4F1A\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"The device ID is written to the source field of ideas and updates for cross-device handoff.","\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1B\u5148\u4FDD\u5B58\uFF0C\u518D\u5BFC\u5165\u3002":"Connection settings have unsaved changes. Save first, then import.","\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1A\u5148\u70B9\u300C\u4FDD\u5B58\u300D\uFF0C\u518D\u5BFC\u5165\uFF0C\u907F\u514D\u7528\u9519\u5730\u5740\u6216 Key\u3002":"Connection settings have unsaved changes: save first, then import, so the right base and key are used.",\u6700\u65B0\u8FDB\u5C55:"Latest update",\u8FDB\u5C55\u5386\u53F2:"Update history",\u9010\u5B57\u4FDD\u5B58:"Verbatim",\u72B6\u6001:"Status",\u6392\u5E8F:"Sort",\u6700\u8FD1\u521B\u5EFA:"Recently created",\u6700\u8FD1\u66F4\u65B0:"Recently updated",\u4E0B\u4E00\u6B65:"Next step"};var ye=Fe(),we=new Set;function Fe(){return typeof document>"u"||(document.documentElement.lang||navigator.language||"zh").toLowerCase().startsWith("zh")?"zh":"en"}function zi(){we.forEach(i=>{try{i()}catch(t){console.error("[idea-pool] lang listener failed",t)}})}typeof document<"u"&&typeof MutationObserver<"u"&&new MutationObserver(()=>{let i=Fe();i!==ye&&(ye=i,zi())}).observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function je(){return ye}function ke(i){return we.add(i),()=>we.delete(i)}function qe(){return Ue.default.useSyncExternalStore(ke,je)}function a(i,t){let o=je()==="en"?$e[i]??i:i;return t?o.replace(/\{(\w+)\}/g,(n,r)=>t[r]===void 0?n:String(t[r])):o}var Je=ge(require("react"),1);var Ei="idea-pool/",Li=500;function Mi(){return{all:0,pool:0,active:0,done:0,parked:0}}var u={booted:!1,loading:!0,error:null,mode:"local",device:"",storagePath:"",cloudBase:"",canUndo:!1,counts:Mi(),total:0,status:"all",query:"",sortBy:"created",ideas:[],listLoading:!1,selectedNo:null,newIdeaNo:null,suppressAutoSelect:!1,detail:null,detailLoading:!1,detailError:null,settings:null,settingsLoading:!1,toast:null},ze=new Set;function b(i){u={...u,...typeof i=="function"?i(u):i},ze.forEach(t=>{try{t()}catch(o){console.error("[idea-pool] store listener failed",o)}})}function Ti(i){return ze.add(i),()=>ze.delete(i)}function m(i){return Je.default.useSyncExternalStore(Ti,()=>i(u))}var Ee=null,Ne=null;function B(i,{error:t=!1,duration:o=0}={}){clearTimeout(Ee);let n=Date.now()+Math.random();b({toast:{id:n,text:i,error:t}}),Ee=setTimeout(()=>{u.toast&&u.toast.id===n&&b({toast:null})},o||(t?6e3:3200))}function We(){clearTimeout(Ee),b({toast:null})}function $(i){B(i&&i.message||String(i),{error:!0}),i&&Number(i.status)===409&&Promise.allSettled([Z(),J(),ne()])}async function q(i,t){let o={credentials:"same-origin",...t||{}},n;try{n=await fetch(Ei+i,o)}catch(s){throw new Error(a("\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}",{error:s&&s.message||String(s)}))}let r=null;try{r=await n.json()}catch{r=null}if(!n.ok||r&&r.ok===!1){let s=new Error(r&&r.error||a("\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09",{status:n.status}));throw s.status=n.status,s}return r||{}}function R(i,t){return{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(t??{})}}function K(i){let t=Number(i);return Number.isFinite(t)&&t>0?Math.floor(t):0}function Ye(i,t){let o=i&&typeof i=="object"?i:{},n={pool:K(o.pool),active:K(o.active),done:K(o.done),parked:K(o.parked)},r=n.pool+n.active+n.done+n.parked;return n.all=K(o.all)||K(o.total)||K(t)||r,n}function Ve(i){if(!i||typeof i!="object")return;let t={mode:typeof i.mode=="string"?i.mode:u.mode,canUndo:!!i.canUndo,counts:Ye(i.counts,i.total),total:K(i.total)};typeof i.device=="string"&&(t.device=i.device),Object.hasOwn(i,"storagePath")&&(t.storagePath=typeof i.storagePath=="string"?i.storagePath:""),Object.hasOwn(i,"cloudBase")&&(t.cloudBase=typeof i.cloudBase=="string"?i.cloudBase:""),b(t)}async function Z(){let i=await q("api/state");return Ve(i),i}var Se=0;async function J(){let i=++Se,t=new URLSearchParams;u.status!=="all"&&t.set("status",u.status);let o=u.query.trim();o&&t.set("q",o),t.set("limit",String(Li)),t.set("offset","0"),b({listLoading:!0});try{let n=await q("api/ideas?"+t.toString());if(i!==Se)return;let r=Array.isArray(n.ideas)?n.ideas:[];b({ideas:r,listLoading:!1,counts:Ye(n.counts,n.total),total:K(n.total)||r.length,error:null})}catch(n){throw i===Se&&b({listLoading:!1}),n}}var Ce=0;async function Le(i){let t=++Ce;b({detailLoading:!0,detailError:null});try{let o=await q("api/ideas/"+encodeURIComponent(i));return t!==Ce||b({detail:o,detailLoading:!1,detailError:null}),o}catch(o){throw t===Ce&&b({detailLoading:!1,detailError:o.message}),o}}async function ne(){let i=u.selectedNo;if(i)try{await Le(i)}catch{b({selectedNo:null,detail:null,detailError:null})}}async function Ge({withDetail:i=!1}={}){let t=[Z(),J()];i&&u.selectedNo&&t.push(Le(u.selectedNo)),await Promise.allSettled(t)}var oe=null;function Me(){return oe?(u.booted&&Promise.allSettled([Z(),J()]),oe):(oe=(async()=>{b({loading:!0,error:null});try{await Promise.all([Z(),J()]),b({booted:!0,loading:!1})}catch(i){b({loading:!1,error:i.message})}})(),oe)}function Xe(){return oe=null,Me()}async function Qe({quiet:i=!1}={}){try{await Promise.all([Z(),J()]),await ne(),b({booted:!0,loading:!1,error:null}),i||B(a("\u5DF2\u5237\u65B0"))}catch(t){$(t)}}var He=null;function Ze(i){b({sortBy:i==="updated"?"updated":"created"})}function Te(i){u.status!==i&&(b({status:i,selectedNo:null,detail:null,detailError:null}),J().catch($))}function fe(i){b({query:i,selectedNo:null,detail:null,detailError:null}),clearTimeout(He),He=setTimeout(()=>{J().catch($)},220)}function he(i){if(!i){b({selectedNo:null,detail:null,detailError:null});return}if(u.selectedNo===i&&u.detail)return;let t=u.selectedNo===i?u.detail:null;b({selectedNo:i,detail:t,detailLoading:!0,detailError:null}),Le(i).catch($)}function De(){b({selectedNo:null,detail:null,detailError:null})}async function Re(i){try{let t={...i};!t.source&&u.device&&(t.source=u.device);let n=(await q("api/ideas",R("POST",t))).idea||null;return await Ge(),B(a("\u5DF2\u5165\u6C60 {no}",{no:n?n.idea_no:""}).trim()),n&&(clearTimeout(Ne),b({newIdeaNo:n.idea_no}),Ne=setTimeout(()=>{Ne=null,u.newIdeaNo===n.idea_no&&b({newIdeaNo:null})},1100)),n}catch(t){return $(t),null}}async function Be(i,t,o){let n={ideas:u.ideas,detail:u.detail,counts:u.counts},r=t.status&&u.ideas.find(s=>s.idea_no===i)?.status;if(t.status&&r&&r!==t.status){let s={...u.counts};s[r]=Math.max(0,(s[r]||0)-1),s[t.status]=(s[t.status]||0)+1,b({counts:s,ideas:u.ideas.map(c=>c.idea_no===i?{...c,status:t.status}:c),detail:u.detail&&u.detail.idea&&u.detail.idea.idea_no===i?{...u.detail,idea:{...u.detail.idea,status:t.status}}:u.detail})}try{let c=(await q("api/ideas/"+encodeURIComponent(i),R("PATCH",t))).idea||null;return c&&b({ideas:u.ideas.map(l=>l.idea_no===i?{...l,...c}:l),detail:u.detail&&u.detail.idea&&u.detail.idea.idea_no===i?{...u.detail,idea:{...u.detail.idea,...c}}:u.detail}),o&&B(o),c}catch(s){return b(n),$(s),null}}async function ei(i){let t=u.selectedNo===i;try{await q("api/ideas/"+encodeURIComponent(i),{method:"DELETE"}),t&&b({selectedNo:null,detail:null,detailError:null,suppressAutoSelect:!0});try{await Ge()}finally{t&&b({suppressAutoSelect:!1})}return B(a("\u5DF2\u5220\u9664 {no}",{no:i})),!0}catch(o){return $(o),!1}}async function Ie(){try{let i=await q("api/undo",R("POST",{}));i.state&&Ve(i.state),await Promise.allSettled([J(),ne()]);let t=typeof i.label=="string"?i.label.trim():"";return B(t?a("\u5DF2\u64A4\u9500\uFF1A{label}",{label:t}):a("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")),!0}catch(i){return $(i),!1}}async function ii(){b({settingsLoading:!0});try{let i=await q("api/settings");return b({settings:i.settings||null,settingsLoading:!1}),i.settings||null}catch(i){return b({settingsLoading:!1}),$(i),null}}async function ti(i){try{let o=(await q("api/settings",R("POST",i))).settings||null,n=u.mode;b({settings:o}),o&&o.mode&&o.mode!==n&&b({ideas:[],selectedNo:null,detail:null,detailError:null,canUndo:!1}),B(a("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58"));try{await Z(),await J(),await ne(),b({booted:!0,loading:!1,error:null})}catch(r){$(r)}return o}catch(t){return $(t),null}}async function ai({base:i,apiKey:t}={}){let o={},n=typeof i=="string"?i.trim():"",r=typeof t=="string"?t.trim():"";n&&(o.base=n),r&&(o.apiKey=r);try{let s=await q("api/cloud/test",R("POST",o));return{ok:!0,base:typeof s.base=="string"?s.base:"",count:K(s.count),latencyMs:K(s.latencyMs)}}catch(s){return{ok:!1,error:s&&s.message||String(s),status:s&&Number.isInteger(s.status)?s.status:0}}}async function oi(){try{let i=await q("api/settings",R("POST",{cloud:{clearKey:!0}}));return b({settings:i.settings||u.settings}),B(a("\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key")),i.settings||null}catch(i){return $(i),null}}async function ni(){try{let i=await q("api/cloud/import-local",R("POST",{})),t=K(i.imported),o=K(i.updated),n=K(i.total);return B(t||o?a("\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761",{imported:t,updated:o}):a("\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165")),await Promise.allSettled([Z(),J(),ne()]),{imported:t,updated:o,total:n}}catch(i){return $(i),null}}function Di(){let i=new Date,t=o=>String(o).padStart(2,"0");return`${i.getFullYear()}${t(i.getMonth()+1)}${t(i.getDate())}`}function Bi(i,t){let o=new Blob([t],{type:"application/json;charset=utf-8"}),n=URL.createObjectURL(o),r=document.createElement("a");r.href=n,r.download=i,r.style.display="none",document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function ri(){try{let i=await q("api/export"),t=i&&i.data?i.data:i;return Bi(`idea-pool-${Di()}.json`,JSON.stringify(t,null,2)),B(a("\u5DF2\u5BFC\u51FA JSON")),!0}catch(i){return $(i),!1}}var f=ge(require("react"),1);var Ii={bulb:"M12 3a6 6 0 0 1 3.5 10.9c-.9.6-1.5 1.5-1.5 2.5v.6h-4v-.6c0-1-.6-1.9-1.5-2.5A6 6 0 0 1 12 3zM10 20h4M12 7.5v3.5",note:"M6 4h8l4 4v12H6zM14 4v4h4M9 12h6M9 16h6",settings:"M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",undo:"M8 6L4 10l4 4M4 10h10a5 5 0 0 1 0 10h-3",refresh:"M19 8a8 8 0 0 0-14-1L4 9M5 16a8 8 0 0 0 14 1l1-2M4 4v5h5M20 20v-5h-5",search:"M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",close:"M6 6l12 12M18 6L6 18",check:"M5 12.5l4.5 4.5L19 7",chevD:"M6 9.5l6 6 6-6",chevL:"M14.5 5.5L8 12l6.5 6.5",chevR:"M9.5 5.5L16 12l-6.5 6.5",plus:"M12 5v14M5 12h14",edit:"M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",trash:"M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",copy:"M9 9h10v11H9zM5 15V4h10",link:"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",upRight:"M7 17L17 7M8 7h9v9",monitor:"M4 5h16v11H4zM9 20h6M12 16v4",clock:"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l2.5 1.5",download:"M12 4v11M7 11l5 5 5-5M5 20h14",alert:"M12 4l9 16H3zM12 10v4M12 17.5h.01",folder:"M4 7h6l2 2h10v10H4z",tag:"M4 5h8l8 8-6 6-8-8zM8 8.5h.01",spark:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",bolt:"M13 3L5 14h6l-1 7 8-11h-6z",cloud:"M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8.5z",dot:"M12 12h.01"};function I({name:i,size:t=16,stroke:o=1.6,className:n=""}){let r=Ii[i];return r?f.default.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},f.default.createElement("path",{d:r})):null}function Y({icon:i,label:t,onClick:o,disabled:n,active:r,size:s=16,className:c="",...l}){return f.default.createElement("button",{type:"button",className:`ip-iconbtn ${r?"is-on":""} ${c}`,"aria-label":t,title:t,onClick:o,disabled:n,...l},f.default.createElement(I,{name:i,size:s}))}function E({variant:i="plain",size:t="md",icon:o,children:n,className:r="",title:s,...c}){return f.default.createElement("button",{type:"button",className:`ip-btn is-${i} is-${t} ${r}`,title:s,...c},o?f.default.createElement(I,{name:o,size:t==="sm"?13:15}):null,n?f.default.createElement("span",null,n):null)}function _i({tone:i="neutral",children:t,title:o,className:n=""}){return f.default.createElement("span",{className:`ip-badge is-${i} ${n}`,title:o},t)}function li({status:i,children:t}){return f.default.createElement(_i,{tone:i==="pool"||i==="active"||i==="done"||i==="parked"?i:"neutral"},f.default.createElement("i",{className:"ip-dot","aria-hidden":"true"}),t)}function _e({children:i}){return f.default.createElement("span",{className:"ip-tag"},i)}function V({label:i,hint:t,children:o}){return f.default.createElement("label",{className:"ip-field"},f.default.createElement("span",{className:"ip-field-label"},i),o,t?f.default.createElement("small",{className:"ip-field-hint"},t):null)}function xe({title:i,onClose:t,children:o,footer:n,width:r=460}){let s=f.default.useRef(null),c=f.default.useRef(t),l=f.default.useRef(null);return c.current=t,f.default.useEffect(()=>{l.current=document.activeElement;let y=()=>{let h=s.current;return h?[...h.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')].filter(T=>!T.disabled&&T.offsetParent!==null):[]},v=h=>{if(h.key==="Escape"){h.preventDefault(),h.stopPropagation(),c.current();return}if(h.key!=="Tab")return;let T=y();if(!T.length)return;let w=T[0],A=T[T.length-1];h.shiftKey&&document.activeElement===w?(h.preventDefault(),A.focus()):!h.shiftKey&&document.activeElement===A&&(h.preventDefault(),w.focus())};window.addEventListener("keydown",v,!0);let N=s.current,L=N&&(N.querySelector("textarea, input, select")||N.querySelector("button"));L&&L.focus({preventScroll:!0});let d=N&&N.closest(".ip-dialog-body");return d&&(d.scrollTop=0),()=>{window.removeEventListener("keydown",v,!0);let h=l.current;h&&typeof h.focus=="function"&&h.isConnected&&h.focus()}},[]),f.default.createElement("div",{className:"ip-dialog-mask",onPointerDown:y=>{y.target===y.currentTarget&&t()}},f.default.createElement("div",{className:"ip-dialog",role:"dialog","aria-modal":"true","aria-label":i,style:{width:r},ref:s},f.default.createElement("div",{className:"ip-dialog-head"},f.default.createElement("h2",null,i),f.default.createElement(Y,{icon:"close",label:a("\u5173\u95ED"),onClick:t})),f.default.createElement("div",{className:"ip-dialog-body"},o),n?f.default.createElement("div",{className:"ip-dialog-foot"},n):null))}function pi(){let i=m(t=>t.toast);return i?f.default.createElement("div",{key:i.id,className:`ip-toast ${i.error?"is-error":""}`,role:i.error?"alert":"status"},f.default.createElement(I,{name:i.error?"alert":"check",size:14}),f.default.createElement("span",{className:"ip-toast-text"},i.text),f.default.createElement("button",{type:"button",className:"ip-toast-close","aria-label":a("\u5173\u95ED"),onClick:We},f.default.createElement(I,{name:"close",size:12}))):null}function Pe({icon:i="bulb",title:t,hint:o,children:n}){return f.default.createElement("div",{className:"ip-empty"},f.default.createElement("span",{className:"ip-empty-icon"},f.default.createElement(I,{name:i,size:26})),f.default.createElement("p",{className:"ip-empty-title"},t),o?f.default.createElement("p",{className:"ip-empty-hint"},o):null,n)}function ve({label:i}){return f.default.createElement("div",{className:"ip-loading",role:"status"},f.default.createElement("span",{className:"ip-spinner","aria-hidden":"true"}),f.default.createElement("span",null,i))}function si(i){let t=document.createElement("textarea");t.value=i,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0",document.body.appendChild(t),t.select();try{document.execCommand("copy")}finally{t.remove()}}function re(i,t=a("\u5DF2\u590D\u5236")){let o=()=>B(t),n=()=>B(a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236"),{error:!0});try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(i).then(o,()=>{try{si(i),o()}catch{n()}});return}si(i),o()}catch{n()}}var di="idea-pool",Pi="https://www.zhaoningyuan.com",ae="https://www.zhaoningyuan.com/ideas/api",gi=["pool","active","done","parked"],fi={pool:"\u5DF2\u5165\u6C60",active:"\u63A8\u8FDB\u4E2D",done:"\u5DF2\u6536\u53E3",parked:"\u6401\u7F6E"},Ai=[{key:"all",label:"\u5168\u90E8"},...gi.map(i=>({key:i,label:fi[i]}))],Oi={mac:"Mac","dsh-mac":"Mac",win:"Windows","dsh-win":"Windows",dsh:"\u672C\u673A",volcano:"\u706B\u5C71\u4E91",manual:"\u624B\u52A8",web:"\u7F51\u9875",feishu:"\u98DE\u4E66"};function W(i){return String(i).padStart(2,"0")}function be(i){if(!i)return"";let t=new Date(i);return Number.isNaN(t.getTime())?String(i):`${t.getFullYear()}-${W(t.getMonth()+1)}-${W(t.getDate())} ${W(t.getHours())}:${W(t.getMinutes())}`}function Ki(i){if(!i)return"";let t=new Date(i);if(Number.isNaN(t.getTime()))return String(i);let o=Date.now()-t.getTime();if(o>=0&&o<60*1e3)return a("\u521A\u521A");if(o>=0&&o<3600*1e3)return a("{n} \u5206\u949F\u524D",{n:Math.floor(o/6e4)});let n=new Date,r=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime();return t.getTime()>=r?`${W(t.getHours())}:${W(t.getMinutes())}`:t.getFullYear()===n.getFullYear()?`${W(t.getMonth()+1)}-${W(t.getDate())}`:`${t.getFullYear()}-${W(t.getMonth()+1)}-${W(t.getDate())}`}function ci(i){if(!i)return"";let t=String(i).toLowerCase();return a(Oi[t]||String(i))}function le(i){return a(fi[i]||i||"")}function $i(i){let t=String(i||"").trim();return!t||/^(javascript|data|vbscript):/i.test(t)?"#":t}function Ui(i){return`${Pi}/ideas/#${i.idea_no}`}function pe(i){return String(i&&i.title||"").replace(/\s+/g," ").trim()||i&&i.idea_no||""}function hi(i){return String(i||"").split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function ui(i,t,o){return a(i===1?t:o,{n:i})}function Fi(i){let t=i.idea_no,o=pe(i);return"\u8BF7\u5C55\u5F00\u63A8\u8FDB\u7075\u611F\u6C60 "+t+"\u300A"+o+`\u300B\u3002

\u3010\u7EE7\u627F\u8FDB\u5EA6\xB7\u9632\u91CD\u590D\u3011\u5148\u8BFB\u60F3\u6CD5\u8BE6\u60C5\u2014\u2014\u539F\u6587\u3001\u6458\u8981\u3001\u5168\u90E8\u300C\u8FDB\u5C55\u300D\u4E0E\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 get \u52A8\u4F5C\uFF0C\u6216\u8BFB\u672C\u673A /idea-pool/api/ideas/`+t+`\uFF09\u3002
\uFF08\u300C\u8FDB\u5C55\u300D=\u63A5\u529B\u8D26\u672C\uFF1A\u4EE5\u6700\u65B0\u6761\u76EE\u4E3A\u51C6\u7EE7\u627F\uFF0C\u5DF2\u5B8C\u6210\u7684\u4E0D\u91CD\u505A\u2014\u2014\u5305\u62EC\u5176\u4ED6\u673A\u5668\u505A\u8FC7\u7684\uFF09
\u5982\u672C\u60F3\u6CD5\u66FE\u5728\u5176\u4ED6\u673A\u5668/\u4F1A\u8BDD\u63A8\u8FDB\u8FC7\uFF08\u4E0D\u786E\u5B9A\u5C31\u5148\u67E5\uFF09\uFF1A\u5F00\u5DE5\u524D\u5148\u505A\u8DE8\u673A\u67E5\u91CD\uFF08\u68C0\u7D22\u5404\u673A\u4F1A\u8BDD\u5E93\u3001\u5B9A\u65F6\u4EFB\u52A1\u4E0E\u6280\u80FD\uFF09\uFF0C\u5E76\u56DE\u586B\u4E00\u6761\u300C\u5F00\u5DE5\u5BF9\u9F50\u300D\u8FDB\u5C55\uFF08\u672C\u6B21\u8303\u56F4+\u4E0D\u91CD\u505A\u9879\uFF09\u3002
\u3010\u63A8\u8FDB\u8BB0\u5F55\u3011\u5148\u8BFB\u8BB0\u5F55\u6587\u6863\uFF08\u82E5\u6709\uFF09\u5E76\u5728\u5B8C\u6210\u540E\u8FFD\u52A0\u672C\u8F6E\u6761\u76EE\u3002
\u3010\u5148\u6F84\u6E05\u540E\u5F00\u5DE5\u3011\u7EE7\u627F\u68C0\u67E5\u4E4B\u540E\u3001\u52A8\u624B\u4E4B\u524D\uFF1A\u6309 brainstorming \u6F84\u6E05\u671F\u7EAA\u5F8B\u5411\u7528\u6237\u8FFD\u95EE 3~5 \u4E2A\u5173\u952E\u95EE\u9898\u2014\u2014\u53EA\u95EE\u4F1A\u6539\u53D8\u65B9\u5411\u3001\u53EA\u6709\u7528\u6237\u80FD\u7B54\u7684\uFF08\u80FD\u81EA\u67E5\u7684\u5148\u67E5\uFF09\uFF1B\u5C0F\u60F3\u6CD5\u53EF\u5C11\u95EE\uFF1B\u7528\u6237\u8BF4\u300C\u76F4\u63A5\u5C55\u5F00\u300D\u5219\u8DF3\u8FC7\u3002
\u5B8C\u6210\u540E\u56DE\u586B\u300C\u5DF2\u5B8C\u6210/\u672A\u5B8C\u6210/\u4E0B\u4E00\u6B65\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 progress \u52A8\u4F5C\uFF09\uFF1B\u4EA7\u51FA\u53D1\u5E03\u540E\u6302\u5230\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF0C\u7136\u540E\u5F00\u59CB\u7814\u7A76/\u63A8\u8FDB\u3002`}function ji({searchRef:i,onOpenSettings:t}){let o=m(d=>d.mode),n=m(d=>d.device),r=m(d=>d.cloudBase),s=m(d=>d.canUndo),c=m(d=>d.query),[l,y]=e.default.useState(c);e.default.useEffect(()=>{y(c)},[c]);let v=o==="cloud",N=v?a("\u4E91\u7AEF\u6A21\u5F0F"):a("\u672C\u673A\u6A21\u5F0F"),L=v?r?`${N} \xB7 ${r}`:N:n?`${N} \xB7 ${n}`:N;return e.default.createElement("header",{className:"ip-topbar","data-window-drag":""},e.default.createElement("div",{className:"ip-brand"},e.default.createElement("span",{className:"ip-brand-mark"},e.default.createElement(I,{name:"bulb",size:17,stroke:1.7})),e.default.createElement("span",{className:"ip-title"},a("\u7075\u611F\u6C60")),e.default.createElement("span",{className:`ip-mode ${v?"is-cloud":""}`,title:L},e.default.createElement("i",{"aria-hidden":"true"}),N)),e.default.createElement("span",{className:"ip-topbar-spacer"}),e.default.createElement("div",{className:"ip-search"},e.default.createElement("span",{className:"ip-search-icon"},e.default.createElement(I,{name:"search",size:14})),e.default.createElement("input",{ref:i,type:"text",value:l,placeholder:a("\u641C\u7D22\u60F3\u6CD5\u2026"),"aria-label":a("\u641C\u7D22\u60F3\u6CD5"),onChange:d=>{y(d.target.value),fe(d.target.value)}}),l?e.default.createElement("span",{className:"ip-search-clear"},e.default.createElement(Y,{icon:"close",size:12,label:a("\u6E05\u7A7A\u641C\u7D22"),onClick:()=>{y(""),fe(""),i.current?.focus()}})):null),s&&!v?e.default.createElement(Y,{icon:"undo",label:a("\u64A4\u9500\u4E0A\u4E00\u6B65"),onClick:()=>Ie()}):null,e.default.createElement(Y,{icon:"refresh",label:a("\u5237\u65B0"),onClick:()=>Qe()}),e.default.createElement(Y,{icon:"settings",label:a("\u8BBE\u7F6E"),onClick:t}))}var qi=208;function Hi(i){i&&(i.style.height="auto",i.style.height=`${Math.min(i.scrollHeight,qi)}px`)}function Ji({highlight:i}){let[t,o]=e.default.useState(""),[n,r]=e.default.useState(""),[s,c]=e.default.useState(""),[l,y]=e.default.useState(""),[v,N]=e.default.useState(!1),[L,d]=e.default.useState(!1),[h,T]=e.default.useState(!1),w=e.default.useRef(null),A=e.default.useRef({raw:t,title:n,summary:s,tags:l});A.current={raw:t,title:n,summary:s,tags:l},e.default.useEffect(()=>{Hi(w.current)},[t,v]);let D=async()=>{if(L)return;let C=t.trim(),x=n.trim();if(!C&&!x){B(a("\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60"),{error:!0}),w.current?.focus();return}let k={raw_text:C};x&&(k.title=x);let P=s.trim();P&&(k.summary=P);let O=hi(l);O.length&&(k.tags=O);let z={raw:t,title:n,summary:s,tags:l};d(!0);let G=await Re(k);if(d(!1),!G)return;o(M=>M===z.raw?"":M),r(M=>M===z.title?"":M),c(M=>M===z.summary?"":M),y(M=>M===z.tags?"":M);let g=A.current;g.raw===z.raw&&g.title===z.title&&g.summary===z.summary&&g.tags===z.tags&&(N(!1),window.requestAnimationFrame(()=>{let M=w.current;M&&(M.style.height="auto",M.focus())}))},U=C=>{if((C.metaKey||C.ctrlKey)&&C.key==="Enter"){C.preventDefault(),D();return}C.key==="Escape"&&v&&(C.stopPropagation(),N(!1))};return e.default.createElement("section",{className:`ip-capture ${!h&&!v&&!t&&!n&&!s&&!l?"is-collapsed":""} ${h?"is-focused":""} ${i?"is-highlight":""}`,"aria-label":a("\u5F55\u5165\u7075\u611F")},e.default.createElement("div",{className:"ip-capture-main"},e.default.createElement("textarea",{ref:w,className:"ip-capture-input",rows:2,value:t,placeholder:a("\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60"),"aria-label":a("\u60F3\u6CD5\u539F\u6587"),onFocus:()=>T(!0),onBlur:()=>T(!1),onChange:C=>o(C.target.value),onKeyDown:U}),e.default.createElement("div",{className:"ip-capture-side"},e.default.createElement("button",{type:"button",className:`ip-capture-toggle ${v?"is-open":""}`,"aria-expanded":v,onClick:()=>N(C=>!C)},e.default.createElement(I,{name:"chevD",size:13}),e.default.createElement("span",null,a(v?"\u6536\u8D77\u9009\u9879":"\u66F4\u591A\u9009\u9879"))),e.default.createElement("span",{className:"ip-cmdhint"},a("\u2318/Ctrl+Enter \u4FDD\u5B58")),e.default.createElement(E,{variant:"primary",icon:"plus",onClick:D,disabled:L},L?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u5165\u6C60")))),v?e.default.createElement("div",{className:"ip-capture-extra"},e.default.createElement(V,{label:a("\u6807\u9898\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:n,onChange:C=>r(C.target.value),placeholder:a("\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57")})),e.default.createElement(V,{label:a("\u6807\u7B7E\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:l,onChange:C=>y(C.target.value),placeholder:a("\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053")})),e.default.createElement("div",{className:"ip-span2"},e.default.createElement(V,{label:a("\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("textarea",{rows:2,value:s,onChange:C=>c(C.target.value),placeholder:a("\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868")})))):null)}function Wi(){let i=m(l=>l.status),t=m(l=>l.counts),o=m(l=>l.total),n=m(l=>l.sortBy),[r,s]=e.default.useState(!1),c=e.default.useRef(null);return e.default.useEffect(()=>{if(!r)return;let l=v=>{(!c.current||!c.current.contains(v.target))&&s(!1)},y=v=>{v.key==="Escape"&&s(!1)};return document.addEventListener("pointerdown",l),document.addEventListener("keydown",y),()=>{document.removeEventListener("pointerdown",l),document.removeEventListener("keydown",y)}},[r]),e.default.createElement("nav",{className:"ip-tabs","aria-label":a("\u72B6\u6001\u7B5B\u9009")},Ai.map(l=>{let y=l.key==="all"?t.all||o||0:t[l.key]||0;return e.default.createElement("button",{key:l.key,type:"button",className:`ip-tab ${i===l.key?"is-on":""}`,"aria-pressed":i===l.key,onClick:()=>Te(l.key)},e.default.createElement("span",null,a(l.label)),e.default.createElement("span",{className:"ip-tab-count"},y))}),e.default.createElement("div",{className:"ip-sort",ref:c},e.default.createElement("button",{type:"button",className:"ip-sort-trigger","aria-haspopup":"menu","aria-expanded":r,onClick:()=>s(l=>!l)},e.default.createElement("span",null,a("\u6392\u5E8F")),e.default.createElement("strong",null,n==="updated"?a("\u6700\u8FD1\u66F4\u65B0"):a("\u6700\u8FD1\u521B\u5EFA")),e.default.createElement(I,{name:"chevD",size:12})),r?e.default.createElement("div",{className:"ip-sort-pop",role:"menu","aria-label":a("\u6392\u5E8F")},[{key:"created",label:a("\u6700\u8FD1\u521B\u5EFA")},{key:"updated",label:a("\u6700\u8FD1\u66F4\u65B0")}].map(l=>e.default.createElement("button",{key:l.key,type:"button",role:"menuitemradio","aria-checked":n===l.key,className:n===l.key?"is-on":"",onClick:()=>{Ze(l.key),s(!1)}},e.default.createElement("span",null,l.label),n===l.key?e.default.createElement(I,{name:"check",size:13}):null))):null))}function Yi({idea:i,active:t,highlight:o,onClick:n}){let r=Array.isArray(i.tags)?i.tags:[];return e.default.createElement("button",{type:"button",className:`ip-card ${t?"is-on":""} ${o?"is-new":""}`,"aria-current":t?"true":void 0,onClick:n},e.default.createElement("div",{className:"ip-card-title"},pe(i)),i.summary?e.default.createElement("div",{className:"ip-card-sum"},i.summary):null,e.default.createElement("div",{className:"ip-card-foot"},e.default.createElement("span",{className:`ip-card-status is-${i.status}`},e.default.createElement("i",{"aria-hidden":"true"}),le(i.status)),e.default.createElement("span",{className:"ip-card-no"},i.idea_no),e.default.createElement("time",{className:"ip-card-time",dateTime:i.updated_at||void 0,title:be(i.updated_at)},Ki(i.updated_at)),r.slice(0,1).map(s=>e.default.createElement(_e,{key:s},s)),r.length>1?e.default.createElement("span",{className:"ip-muted"},"+",r.length-1):null,i.n_updates||i.n_links?e.default.createElement("span",{className:"ip-card-meta"},i.n_updates?ui(i.n_updates,"1 \u6761\u8FDB\u5C55","{n} \u6761\u8FDB\u5C55"):null,i.n_updates&&i.n_links?e.default.createElement("span",{className:"ip-sep"},"\xB7"):null,i.n_links?ui(i.n_links,"1 \u4E2A\u4EA7\u51FA","{n} \u4E2A\u4EA7\u51FA"):null):null))}function Vi({narrow:i}){let t=m(d=>d.ideas),o=m(d=>d.listLoading),n=m(d=>d.status),r=m(d=>d.query),s=m(d=>d.selectedNo),c=m(d=>d.mode),l=m(d=>d.sortBy),y=m(d=>d.newIdeaNo),v=e.default.useRef(null),N=n!=="all"||!!r.trim(),L=e.default.useMemo(()=>{let d=l==="updated"?"updated_at":"created_at";return[...t].sort((h,T)=>{let w=typeof h[d]=="string"?h[d]:"",A=typeof T[d]=="string"?T[d]:"";return w!==A?w<A?1:-1:String(h.idea_no)<String(T.idea_no)?1:-1})},[t,l]);return e.default.useEffect(()=>{y&&v.current?.scrollTo({top:0,behavior:"smooth"})},[y]),o&&!t.length?e.default.createElement(ve,{label:a("\u6B63\u5728\u52A0\u8F7D\u2026")}):t.length?e.default.createElement("div",{className:"ip-scroll",ref:v},e.default.createElement("div",{className:"ip-list"},L.map(d=>e.default.createElement(Yi,{key:d.idea_no,idea:d,active:!i&&d.idea_no===s,highlight:d.idea_no===y,onClick:()=>he(d.idea_no)}))),o?e.default.createElement("div",{className:"ip-list-note"},a("\u6B63\u5728\u5237\u65B0\u2026")):null):e.default.createElement(Pe,{icon:"note",title:N?a("\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5"):a("\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684"),hint:N?a("\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002"):c==="cloud"?a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002"):a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002")},r.trim()?e.default.createElement(E,{size:"sm",onClick:()=>fe("")},a("\u6E05\u7A7A\u641C\u7D22")):n!=="all"?e.default.createElement(E,{size:"sm",onClick:()=>Te("all")},a("\u663E\u793A\u5168\u90E8\u72B6\u6001")):e.default.createElement(E,{size:"sm",onClick:()=>document.querySelector(".ip-capture-input")?.focus()},a("\u5199\u7B2C\u4E00\u6761")))}function Gi({link:i}){let t=$i(i.url),o=/^https?:\/\//i.test(t);return e.default.createElement("li",null,e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(I,{name:"link",size:13})),e.default.createElement("a",{href:t,title:i.url,target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0},i.title||i.url),i.ref_type==="doc"?e.default.createElement("span",{className:"ip-link-kind"},a("\u6587\u6863")):null,o?e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(I,{name:"upRight",size:12})):null)}function Xi({idea:i,onClose:t}){let[o,n]=e.default.useState(i.title||""),[r,s]=e.default.useState(i.summary||""),[c,l]=e.default.useState(i.raw_text||""),[y,v]=e.default.useState((i.tags||[]).join(", ")),[N,L]=e.default.useState(i.source_note||""),[d,h]=e.default.useState(!1),T=o!==(i.title||"")||r!==(i.summary||"")||c!==(i.raw_text||"")||y!==(i.tags||[]).join(", ")||N!==(i.source_note||""),w=()=>{T&&!window.confirm(a("\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F"))||t()},A=async D=>{D.preventDefault();let U=o.trim();if(!U){B(a("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}h(!0);let F=await Be(i.idea_no,{title:U,summary:r.trim(),raw_text:c,tags:hi(y),source_note:N.trim()},a("\u5DF2\u4FDD\u5B58"));h(!1),F&&t()};return e.default.createElement(xe,{title:a("\u7F16\u8F91\u60F3\u6CD5"),onClose:w,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{onClick:w},a("\u53D6\u6D88")),e.default.createElement(E,{variant:"primary",type:"submit",form:"ip-edit-form",disabled:d},d?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},e.default.createElement("form",{id:"ip-edit-form",className:"ip-dialog-rows",onSubmit:A},e.default.createElement(V,{label:a("\u6807\u9898")},e.default.createElement("input",{value:o,onChange:D=>n(D.target.value)})),e.default.createElement(V,{label:a("\u6458\u8981")},e.default.createElement("textarea",{rows:2,value:r,onChange:D=>s(D.target.value)})),e.default.createElement(V,{label:a("\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09")},e.default.createElement("textarea",{rows:6,value:c,onChange:D=>l(D.target.value)})),e.default.createElement(V,{label:a("\u6807\u7B7E"),hint:a("\u9017\u53F7\u5206\u9694")},e.default.createElement("input",{value:y,onChange:D=>v(D.target.value)})),e.default.createElement(V,{label:a("\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883")},e.default.createElement("input",{value:N,onChange:D=>L(D.target.value)}))))}function Qi({idea:i,onClose:t}){let[o,n]=e.default.useState(!1),r=async()=>{n(!0);let s=await ei(i.idea_no);n(!1),s&&t()};return e.default.createElement(xe,{title:a("\u5220\u9664\u60F3\u6CD5"),onClose:t,width:420,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{onClick:t},a("\u53D6\u6D88")),e.default.createElement(E,{variant:"danger-solid",onClick:r,disabled:o},o?a("\u5220\u9664\u4E2D\u2026"):a("\u786E\u8BA4\u5220\u9664")))},e.default.createElement("p",{className:"ip-dialog-note"},a("\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002",{title:pe(i),no:i.idea_no})))}function mi(i){let t=String(i||"").match(/(?:^|\n)\s*(?:下一步|next step)[：:]\s*([^\n]+)/i);return t?t[1].trim():""}function Zi({narrow:i}){let t=m(p=>p.selectedNo),o=m(p=>p.query),n=m(p=>p.status),r=m(p=>p.ideas),s=m(p=>p.total),c=m(p=>p.detail),l=m(p=>p.detailLoading),y=m(p=>p.detailError),v=m(p=>p.mode),[N,L]=e.default.useState(!1),[d,h]=e.default.useState(!1),[T,w]=e.default.useState(!1),[A,D]=e.default.useState(!1),[U,F]=e.default.useState(!1),[C,x]=e.default.useState(!1),[k,P]=e.default.useState(!1),[O,z]=e.default.useState(!1),G=e.default.useRef(null);if(e.default.useEffect(()=>{L(!1),h(!1),w(!1),D(!1),x(!1),P(!1),z(!1)},[t]),e.default.useEffect(()=>{if(!O)return;let p=te=>{(!G.current||!G.current.contains(te.target))&&z(!1)},Q=te=>{te.key==="Escape"&&z(!1)};return document.addEventListener("pointerdown",p),document.addEventListener("keydown",Q),()=>{document.removeEventListener("pointerdown",p),document.removeEventListener("keydown",Q)}},[O]),!t){let p=o.trim()!==""||n!=="all";return r.length===0||p&&s===0?e.default.createElement("div",{className:"ip-detail-pane"}):e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement(Pe,{icon:"note",title:p?a("\u627E\u5230 {n} \u6761\u60F3\u6CD5",{n:s}):a("\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5"),hint:p?a("\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002"):a("\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002")})))}if(y&&!c)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(I,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},a("\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},y),e.default.createElement(E,{icon:"refresh",onClick:()=>he(t)},a("\u91CD\u8BD5")))));if(!c)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement(ve,{label:a("\u6B63\u5728\u5C55\u5F00\u2026")}));let g=c.idea||{},M=Array.isArray(c.updates)?c.updates:[],X=Array.isArray(c.links)?c.links:[],ee=g.idea_no||t,de=async p=>{U||p===g.status||(F(!0),await Be(ee,{status:p},a("\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D",{label:le(p)})),F(!1))},j=M.length?M[M.length-1]:null,Ae=M.slice(0,-1).reverse(),ie=!!g.summary||!!g.source_note||M.length>0,ce=e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u539F\u6587")),e.default.createElement("span",{className:"ip-section-count"},a("\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(Y,{icon:"copy",size:13,label:a("\u590D\u5236\u539F\u6587"),onClick:()=>re(g.raw_text||"",a("\u5DF2\u590D\u5236\u539F\u6587"))}),ie?e.default.createElement(E,{size:"sm",variant:"ghost",onClick:()=>x(p=>!p)},C?a("\u6536\u8D77\u539F\u6587"):a("\u5C55\u5F00\u539F\u6587")):null),ie&&!C?e.default.createElement("button",{type:"button",className:"ip-raw-fold",onClick:()=>x(!0)},e.default.createElement("span",null,a("\u539F\u6587\u9ED8\u8BA4\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00")),e.default.createElement("span",{className:"ip-muted"},a("\u9010\u5B57\u4FDD\u5B58"))):e.default.createElement("pre",{className:"ip-raw"},g.raw_text||a("\uFF08\u65E0\u539F\u6587\uFF09"))),S=g.status==="pool"&&M.length===0?a("\u590D\u5236\u5C55\u5F00\u63D0\u793A\u8BCD"):a("\u590D\u5236\u63A5\u529B\u63D0\u793A\u8BCD"),_=()=>re(Fi(g),a("\u5DF2\u590D\u5236\u63D0\u793A\u8BCD\uFF0C\u53EF\u7C98\u8D34\u5230\u5BF9\u8BDD\u7EE7\u7EED")),H=v==="cloud",ue=()=>{if(H){re(Ui(g),a("\u5DF2\u590D\u5236\u94FE\u63A5"));return}re(`\u7075\u611F\u6C60 ${ee}\u300A${pe(g)}\u300B\uFF08\u672C\u673A\u6A21\u5F0F\uFF1A\u7528 idea_pool \u5DE5\u5177\u6309\u7F16\u53F7\u8BFB\u53D6\uFF0C\u6216\u5728 DSH \u4FA7\u680F\u300C\u7075\u611F\u6C60\u300D\u67E5\u770B\uFF09`,a("\u5DF2\u590D\u5236\u5F15\u7528"))};return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-detail"},e.default.createElement("div",{className:"ip-detail-head"},i?e.default.createElement("div",{className:"ip-detail-back"},e.default.createElement(E,{size:"sm",variant:"ghost",icon:"chevL",onClick:De},a("\u8FD4\u56DE\u5217\u8868"))):null,e.default.createElement("div",{className:"ip-detail-title-row"},e.default.createElement("h2",{className:"ip-detail-title"},pe(g)||ee),e.default.createElement(Y,{icon:"edit",label:a("\u7F16\u8F91"),onClick:()=>L(!0)}),e.default.createElement(Y,{icon:"trash",label:a("\u5220\u9664"),onClick:()=>h(!0)})),e.default.createElement("div",{className:"ip-detail-meta"},e.default.createElement(li,{status:g.status},le(g.status)),e.default.createElement("span",{className:"ip-card-no"},ee),g.source?e.default.createElement("span",null,a("\u6765\u6E90\uFF1A{source}",{source:ci(g.source)})):null,e.default.createElement("span",null,a("\u521B\u5EFA {time}",{time:be(g.created_at)})),e.default.createElement("span",null,a("\u66F4\u65B0 {time}",{time:be(g.updated_at)}))),Array.isArray(g.tags)&&g.tags.length?e.default.createElement("div",{className:"ip-detail-tags"},g.tags.map(p=>e.default.createElement(_e,{key:p},p))):null,e.default.createElement("div",{className:"ip-detail-actions"},e.default.createElement(E,{size:"sm",variant:"primary",icon:"plus",onClick:()=>{w(!0),window.requestAnimationFrame(()=>document.querySelector(".ip-abox")?.scrollIntoView({block:"center"}))}},a("\u8BB0\u8FDB\u5C55")),e.default.createElement(E,{size:"sm",icon:"copy",onClick:_,title:a("\u590D\u5236\u540E\u7C98\u8D34\u7ED9 agent\uFF0C\u7EE7\u7EED\u5C55\u5F00\u6216\u63A5\u529B")},S),e.default.createElement(E,{size:"sm",icon:"link",onClick:ue},a(H?"\u590D\u5236\u94FE\u63A5":"\u590D\u5236\u5F15\u7528")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement("div",{className:"ip-status-menu",ref:G},e.default.createElement("button",{type:"button",className:"ip-status-trigger","aria-haspopup":"menu","aria-expanded":O,disabled:U,onClick:()=>z(p=>!p)},e.default.createElement("span",{className:"ip-status-label"},a("\u72B6\u6001")),e.default.createElement("i",{className:`ip-dot is-${g.status}`,"aria-hidden":"true"}),e.default.createElement("span",null,le(g.status)),e.default.createElement(I,{name:"chevD",size:12})),O?e.default.createElement("div",{className:"ip-status-pop",role:"menu","aria-label":a("\u5207\u6362\u72B6\u6001")},gi.map(p=>e.default.createElement("button",{key:p,type:"button",role:"menuitemradio","aria-checked":g.status===p,className:g.status===p?"is-on":"",disabled:U,onClick:()=>{z(!1),de(p)}},e.default.createElement("i",{className:`ip-dot is-${p}`,"aria-hidden":"true"}),e.default.createElement("span",null,le(p)),g.status===p?e.default.createElement(I,{name:"check",size:13}):null))):null))),e.default.createElement("div",{className:"ip-detail-body"},ie?null:ce,g.summary?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u6458\u8981"))),e.default.createElement("div",{className:"ip-summary"},g.summary)):null,g.source_note?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u5907\u6CE8"))),e.default.createElement("div",{className:"ip-text"},g.source_note)):null,j?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u6700\u65B0\u8FDB\u5C55")),e.default.createElement("span",{className:"ip-section-count"},be(j.created_at)),e.default.createElement("span",{className:"ip-spacer"}),j.source?e.default.createElement("span",{className:"ip-src"},e.default.createElement(I,{name:"monitor",size:11}),ci(j.source)):null),e.default.createElement("div",{className:"ip-latest"},mi(j.content)?e.default.createElement("div",{className:"ip-next-step"},e.default.createElement("span",{className:"ip-next-step-label"},a("\u4E0B\u4E00\u6B65")),e.default.createElement("span",null,mi(j.content))):null,e.default.createElement("div",{className:`ip-latest-content ${j.content&&j.content.length>300&&!k?"is-clamped":""}`},j.content),e.default.createElement("div",{className:"ip-latest-foot"},e.default.createElement("span",{className:"ip-muted"},a("\u4E0B\u4E00\u6B65\u4ECE\u8FD9\u91CC\u63A5\u7740\u63A8\u8FDB")),e.default.createElement("span",{className:"ip-spacer"}),j.content&&j.content.length>300?e.default.createElement(E,{size:"sm",variant:"ghost",onClick:()=>P(p=>!p)},k?a("\u6536\u8D77"):a("\u5C55\u5F00\u5168\u90E8")):null,e.default.createElement(E,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>w(!0)},a("\u8BB0\u8FDB\u5C55"))))):null,e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u5173\u8054\u4EA7\u51FA")),e.default.createElement("span",{className:"ip-section-count"},X.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>D(p=>!p)},a("\u52A0\u4EA7\u51FA"))),X.length?e.default.createElement("ul",{className:"ip-links"},X.map(p=>e.default.createElement(Gi,{key:p.id||p.url,link:p}))):e.default.createElement("p",{className:"ip-muted"},a("\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002"))),ie?ce:null))),N?e.default.createElement(Xi,{idea:g,onClose:()=>L(!1)}):null,d?e.default.createElement(Qi,{idea:g,onClose:()=>h(!1)}):null)}function se(i){return String(i||"").trim().replace(/\/+$/,"")}function Ri({onClose:i}){let t=m(S=>S.settings),o=m(S=>S.storagePath),n=m(S=>S.device),r=m(S=>S.mode),[s,c]=e.default.useState(r==="cloud"?"cloud":"local"),[l,y]=e.default.useState(n),[v,N]=e.default.useState(ae),[L,d]=e.default.useState(""),[h,T]=e.default.useState(!1),[w,A]=e.default.useState(!1),[D,U]=e.default.useState(!1),[F,C]=e.default.useState(!1),[x,k]=e.default.useState(null);e.default.useEffect(()=>{ii()},[]);let P=e.default.useRef(!1);e.default.useEffect(()=>{if(!t||P.current)return;P.current=!0,c(t.mode==="cloud"?"cloud":"local"),typeof t.device=="string"&&y(t.device);let S=t.cloud&&typeof t.cloud.base=="string"?t.cloud.base:"";N(S||ae)},[t]);let O=t&&t.cloud||{},z=!!O.hasKey,G=typeof O.keyHint=="string"?O.keyHint:"",g=typeof O.base=="string"?O.base:"",M=se(v)||g||ae,X=se(v)!==se(g||ae)||L.trim()!=="",ee=t&&typeof t.storagePath=="string"&&t.storagePath||o,de=S=>{c(S),k(null)},j=async()=>{if(w)return;let S=se(v);if(!S){B(a("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(S)){B(a("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}A(!0),k(null);let _=await ai({base:S,apiKey:L.trim()});if(A(!1),_&&_.ok){k({ok:!0,text:a("\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms",{count:_.count,ms:_.latencyMs})});return}let H=_&&Number(_.status);k({ok:!1,text:H===401||H===403?a("\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key"):a("\u8FDE\u63A5\u5931\u8D25\uFF1A{error}",{error:_&&_.error||a("\u672A\u77E5\u9519\u8BEF")})})},Ae=async()=>{if(F||!z||typeof window>"u"||typeof window.confirm!="function"||!window.confirm(a("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002")))return;C(!0);let _=await oi();C(!1),_&&(d(""),k(null))},ie=async()=>{D||(U(!0),await ni(),U(!1))},ce=async()=>{if(h)return;let S=s==="cloud"?"cloud":"local",_={};t?S!==t.mode&&(_.mode=S):S!==r&&(_.mode=S);let H=l.trim();if(!H){B(a("\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if((t?H!==t.device:H!==n)&&(_.device=H),S==="cloud"){let p=se(v);if(!p){B(a("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(p)){B(a("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}let Q={};p!==g&&(Q.base=p);let te=L.trim();te&&(Q.apiKey=te),Object.keys(Q).length&&(_.cloud=Q)}if(Object.keys(_).length===0){i();return}T(!0);let ue=await ti(_);T(!1),ue&&i()};return e.default.createElement(xe,{title:a("\u8BBE\u7F6E"),onClose:i,width:568,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(E,{onClick:i},a("\u5173\u95ED")),e.default.createElement(E,{variant:"primary",onClick:ce,disabled:h},h?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},e.default.createElement("div",{className:"ip-dialog-rows"},e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,a("\u6570\u636E\u4F4D\u7F6E")),e.default.createElement("p",null,a("\u5148\u9009\u6570\u636E\u5B58\u5728\u54EA\u91CC\uFF1B\u5207\u6362\u6A21\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u642C\u6570\u636E\u3002"))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8FD0\u884C\u6A21\u5F0F")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":a("\u8FD0\u884C\u6A21\u5F0F")},e.default.createElement("button",{type:"button",className:s==="local"?"is-on":"","aria-pressed":s==="local",onClick:()=>de("local")},a("\u672C\u673A\u6A21\u5F0F")),e.default.createElement("button",{type:"button",className:s==="cloud"?"is-on":"","aria-pressed":s==="cloud",onClick:()=>de("cloud")},a("\u4E91\u7AEF\u6A21\u5F0F"))),e.default.createElement("p",{className:"ip-dialog-note"},s==="cloud"?a("\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002",{base:M}):a("\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002")))),s==="local"?e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5B58\u50A8\u8DEF\u5F84")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("code",{className:"ip-dialog-code"},ee||a("\u672A\u77E5")),e.default.createElement("p",{className:"ip-dialog-note"},a("\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002")))):null),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,a("\u8FDE\u63A5\u914D\u7F6E")),e.default.createElement("p",null,s==="cloud"?a("\u4E91\u7AEF\u5730\u5740\u4E0E API Key\uFF1B\u6D4B\u8BD5\u4F7F\u7528\u5F53\u524D\u586B\u5199\u7684\u503C\u3002"):a("\u672C\u673A\u6A21\u5F0F\u4E0D\u9700\u8981\u8FDE\u63A5\uFF1B\u5207\u5230\u4E91\u7AEF\u6A21\u5F0F\u540E\u518D\u586B\u5199\u5730\u5740\u4E0E Key\u3002"))),s==="cloud"?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u4E91\u7AEF\u5730\u5740")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:v,placeholder:ae,onChange:S=>{N(S.target.value),k(null)}})),e.default.createElement("p",{className:"ip-dialog-note"},a("\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002",{base:ae})))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("API Key")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",type:"password",autoComplete:"off",value:L,placeholder:z?a("\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}",{hint:G||"****"}):a("\u7C98\u8D34\u4E91\u7AEF API Key"),onChange:S=>{d(S.target.value),k(null)}}),z?e.default.createElement(E,{size:"sm",variant:"danger",onClick:Ae,disabled:F||h},F?a("\u6E05\u9664\u4E2D\u2026"):a("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key")):null),e.default.createElement("p",{className:"ip-dialog-note"},z?a("\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002",{hint:G||"****"}):a("\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u6D4B\u8BD5\u8FDE\u63A5")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(E,{size:"sm",icon:"bolt",onClick:j,disabled:w},w?a("\u6D4B\u8BD5\u4E2D\u2026"):a("\u6D4B\u8BD5\u8FDE\u63A5")),x?e.default.createElement("span",{className:`ip-cloud-status ${x.ok?"is-ok":"is-error"}`},e.default.createElement(I,{name:x.ok?"check":"alert",size:12}),x.text):e.default.createElement("span",{className:"ip-cloud-status"},a("\u7528\u5F53\u524D\u586B\u5199\u914D\u7F6E\u8BD5\u62C9\u4E00\u6B21\uFF0C\u4E0D\u9700\u8981\u5148\u4FDD\u5B58")))))):e.default.createElement("p",{className:"ip-dialog-note"},a("\u5F53\u524D\u662F\u672C\u673A\u6A21\u5F0F\u3002"))),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,a("\u6570\u636E\u8FC1\u79FB")),e.default.createElement("p",null,a("\u5BFC\u5165\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\uFF1B\u4E0D\u4F1A\u5220\u9664\u672C\u673A\u73B0\u6709\u6570\u636E\u3002"))),s==="local"?e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u51FA")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(E,{icon:"download",onClick:()=>ri()},a("\u5BFC\u51FA JSON"))),e.default.createElement("p",{className:"ip-dialog-note"},a("\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002")))):null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u5165\u5230\u672C\u673A")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(E,{size:"sm",icon:"download",onClick:ie,disabled:D||!z||X,title:z?X?a("\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1B\u5148\u4FDD\u5B58\uFF0C\u518D\u5BFC\u5165\u3002"):void 0:a("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")},D?a("\u5BFC\u5165\u4E2D\u2026"):a("\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A"))),e.default.createElement("p",{className:"ip-dialog-note"},z?X?a("\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1A\u5148\u70B9\u300C\u4FDD\u5B58\u300D\uFF0C\u518D\u5BFC\u5165\uFF0C\u907F\u514D\u7528\u9519\u5730\u5740\u6216 Key\u3002"):a("\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002"):a("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002"))))),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,a("\u9AD8\u7EA7")),e.default.createElement("p",null,a("\u8BBE\u5907\u6807\u8BC6\u4F1A\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002"))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8BBE\u5907\u6807\u8BC6")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:l,placeholder:"dsh-mac / dsh-win / volcano",onChange:S=>y(S.target.value)})))))))}function xi(){qe();let i=m(x=>x.booted),t=m(x=>x.loading),o=m(x=>x.error),n=m(x=>x.canUndo),r=m(x=>x.ideas),s=m(x=>x.status),c=m(x=>x.query),l=m(x=>x.selectedNo),y=m(x=>x.suppressAutoSelect),v=e.default.useRef(null),N=e.default.useRef(null),[L,d]=e.default.useState(1200),[h,T]=e.default.useState(!1),w=L<880,A=L<640;e.default.useEffect(()=>{Me()},[]),e.default.useEffect(()=>{let x=v.current;if(!x||typeof ResizeObserver>"u")return;let k=new ResizeObserver(([P])=>{P&&P.contentRect&&d(P.contentRect.width)});return k.observe(x),()=>k.disconnect()},[]),e.default.useEffect(()=>{!i||w||l||y||c.trim()||r.length&&he(r[0].idea_no)},[i,w,l,y,c,r]),e.default.useEffect(()=>{let x=k=>{let P=k.target,O=P&&P.tagName||"",z=/^(INPUT|TEXTAREA|SELECT)$/.test(O)||!!(P&&P.isContentEditable);if((k.metaKey||k.ctrlKey)&&!k.shiftKey&&(k.key==="z"||k.key==="Z")&&!z&&n){k.preventDefault(),Ie();return}if(k.key==="/"&&!z&&!k.metaKey&&!k.ctrlKey&&!k.altKey){k.preventDefault(),N.current?.focus();return}k.key==="Escape"&&w&&l&&De()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[n,w,l]);let D=!w||!l,U=!w||!!l,F=w&&!!l,C=i&&!t&&!o&&r.length===0&&s==="all"&&!c.trim();return e.default.createElement("div",{className:`ip-root ${w?"is-narrow":""} ${A?"is-compact":""} ${F?"is-reading":""}`,ref:v},e.default.createElement("style",null,Ke),e.default.createElement(ji,{searchRef:N,onOpenSettings:()=>T(!0)}),F?null:e.default.createElement(Ji,{highlight:C}),i&&!F?e.default.createElement(Wi,null):null,e.default.createElement("div",{className:"ip-body"},t&&!i?e.default.createElement(ve,{label:a("\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026")}):o&&!i?e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(I,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},a("\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},o),e.default.createElement(E,{icon:"refresh",onClick:()=>Xe()},a("\u91CD\u8BD5"))):e.default.createElement(e.default.Fragment,null,D?e.default.createElement("div",{className:"ip-list-pane"},e.default.createElement(Vi,{narrow:w})):null,U?e.default.createElement(Zi,{narrow:w}):null)),h?e.default.createElement(Ri,{onClose:()=>T(!1)}):null,e.default.createElement(pi,null))}function et({size:i}){return e.default.createElement(I,{name:"bulb",size:i})}var it=["slots"];function tt(i){i.slots.inject("main",()=>i.slots.register({name:"main",key:di},xi)),i.effect(()=>{let t=null,o=()=>{t?.(),t=i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:di,order:15,label:()=>a("\u7075\u611F\u6C60")},et))};o();let n=ke(o);return()=>{n(),t?.()}},"dsh-idea-pool: sidebar entry")}
return module.exports}})
