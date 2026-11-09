window.__ModuleLoader__.load({id:"dsh-idea-pool",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Vi=Object.create;var ze=Object.defineProperty;var Gi=Object.getOwnPropertyDescriptor;var Xi=Object.getOwnPropertyNames;var Qi=Object.getPrototypeOf,Zi=Object.prototype.hasOwnProperty;var Ri=(i,n)=>{for(var o in n)ze(i,o,{get:n[o],enumerable:!0})},oi=(i,n,o,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let s of Xi(n))!Zi.call(i,s)&&s!==o&&ze(i,s,{get:()=>n[s],enumerable:!(a=Gi(n,s))||a.enumerable});return i};var _e=(i,n,o)=>(o=i!=null?Vi(Qi(i)):{},oi(n||!i||!i.__esModule?ze(o,"default",{value:i,enumerable:!0}):o,i)),et=i=>oi(ze({},"__esModule",{value:!0}),i);var Ft={};Ri(Ft,{App:()=>Hi,apply:()=>Ut,inject:()=>$t});module.exports=et(Ft);var e=_e(require("react"),1);var ai=`/* dsh-idea-pool \u5BA2\u6237\u7AEF\u6837\u5F0F\uFF1A\u989C\u8272\u53EA\u8D70 --dsw-alias-* \u8BED\u4E49 token\uFF08\u5E26 fallback\uFF09\uFF0C\u660E\u6697\u4E3B\u9898\u7531\u5BBF\u4E3B\u5207\u6362\u3002 */
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

/* ---------- \u53CC\u6A21\u8FDE\u7EED\u6027\u63D0\u793A\u6761\uFF08\u672C\u673A\u6A21\u5F0F\uFF0C\u5951\u7EA6 \xA712\uFF09 ---------- */
.ip-continuity {
  flex: none;
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0 16px 8px;
  padding: 5px 10px;
  min-height: 30px;
  border-radius: var(--ip-r-sm);
  border: 1px solid var(--ip-line);
  background: color-mix(in srgb, var(--ip-hover) 55%, transparent);
  color: var(--ip-ink3);
  font-size: 12px;
  line-height: 18px;
}
.ip-continuity-icon { display: inline-flex; flex: none; color: var(--ip-ink4); }
.ip-continuity-text { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ip-continuity-spacer { flex: 1; min-width: 4px; }
.ip-continuity .ip-btn { flex: none; }
.ip-continuity.is-drift {
  border-color: color-mix(in srgb, var(--ip-business) 34%, var(--ip-line));
  background: color-mix(in srgb, var(--ip-business) 7%, transparent);
  color: var(--ip-ink2);
}
.ip-continuity.is-drift .ip-continuity-icon { color: var(--ip-business); }
.ip-continuity.is-offline {
  border-color: color-mix(in srgb, var(--ip-warn) 30%, var(--ip-line));
  background: color-mix(in srgb, var(--ip-warn) 6%, transparent);
  color: var(--ip-ink2);
}
.ip-continuity.is-offline .ip-continuity-icon { color: var(--ip-warn); }
.ip-continuity.is-ok .ip-continuity-icon { color: var(--ip-success); }
.ip-continuity.is-muted .ip-continuity-icon { color: var(--ip-ink4); }

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
.ip-root.is-narrow .ip-continuity { margin: 0 10px 8px; }
.ip-root.is-narrow .ip-continuity-text { white-space: normal; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
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
`;var ri=_e(require("react"),1);var si={\u7075\u611F\u6C60:"Idea Pool",\u672C\u673A\u6A21\u5F0F:"Local mode",\u4E91\u7AEF\u6A21\u5F0F:"Cloud mode",\u641C\u7D22\u60F3\u6CD5:"Search ideas","\u641C\u7D22\u60F3\u6CD5\u2026":"Search ideas\u2026",\u6E05\u7A7A\u641C\u7D22:"Clear search",\u64A4\u9500\u4E0A\u4E00\u6B65:"Undo last step",\u5237\u65B0:"Refresh",\u8BBE\u7F6E:"Settings",\u5173\u95ED:"Close",\u91CD\u8BD5:"Retry",\u5F55\u5165\u7075\u611F:"Capture an idea",\u60F3\u6CD5\u539F\u6587:"Raw idea text","\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60":"Type whatever comes to mind. Enter for a new line, \u2318/Ctrl+Enter to add.","\u2318/Ctrl+Enter \u4FDD\u5B58":"\u2318/Ctrl+Enter to save",\u66F4\u591A\u9009\u9879:"More options",\u6536\u8D77\u9009\u9879:"Hide options",\u5165\u6C60:"Add","\u4FDD\u5B58\u4E2D\u2026":"Saving\u2026",\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60:"Write something first","\u6807\u9898\uFF08\u53EF\u9009\uFF09":"Title (optional)","\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57":"Leave empty to use the first 40 characters","\u6807\u7B7E\uFF08\u53EF\u9009\uFF09":"Tags (optional)","\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053":"Comma-separated, e.g. research, channels","\u6458\u8981\uFF08\u53EF\u9009\uFF09":"Summary (optional)","\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"One-line summary to scan later",\u72B6\u6001\u7B5B\u9009:"Filter by status",\u5168\u90E8:"All",\u5DF2\u5165\u6C60:"Pool",\u63A8\u8FDB\u4E2D:"In progress",\u5DF2\u6536\u53E3:"Done",\u6401\u7F6E:"Parked",\u5207\u6362\u72B6\u6001:"Change status","\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D":"Status changed to \u201C{label}\u201D","1 \u6761\u8FDB\u5C55":"1 update","{n} \u6761\u8FDB\u5C55":"{n} updates","1 \u4E2A\u4EA7\u51FA":"1 output","{n} \u4E2A\u4EA7\u51FA":"{n} outputs","\u6B63\u5728\u52A0\u8F7D\u2026":"Loading\u2026","\u6B63\u5728\u5237\u65B0\u2026":"Refreshing\u2026","\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026":"Loading the idea pool\u2026",\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25:"Failed to load the idea pool",\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684:"The idea pool is empty",\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5:"No matching ideas","\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002":"Try another keyword or status.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add. In local mode the data stays on this machine.",\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5:"Select an idea","\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002":"The list is on the left. On wide screens, click a card to read its raw text, progress and outputs.","\u6B63\u5728\u5C55\u5F00\u2026":"Loading\u2026",\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25:"Failed to load this idea",\u8FD4\u56DE\u5217\u8868:"Back to list",\u539F\u6587:"Raw text","\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB":"Verbatim \xB7 read-only",\u590D\u5236\u539F\u6587:"Copy raw text",\u5DF2\u590D\u5236\u539F\u6587:"Raw text copied",\u6458\u8981:"Summary",\u5907\u6CE8:"Note","\u6765\u6E90\uFF1A{source}":"Source: {source}","\u521B\u5EFA {time}":"Created {time}","\u66F4\u65B0 {time}":"Updated {time}",\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Copy expand prompt",\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Expand prompt copied",\u590D\u5236\u5F15\u7528:"Copy reference",\u5DF2\u590D\u5236\u5F15\u7528:"Reference copied",\u590D\u5236\u94FE\u63A5:"Copy link",\u5DF2\u590D\u5236\u94FE\u63A5:"Link copied",\u7F16\u8F91:"Edit",\u5220\u9664:"Delete",\u5173\u8054\u4EA7\u51FA:"Outputs",\u52A0\u4EA7\u51FA:"Add output","\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002":"No outputs yet \u2014 attach result links once there is progress.",\u4EA7\u51FA\u6807\u9898:"Output title","\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55":"e.g. research report / progress log",\u94FE\u63A5:"Link","\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934":"The link must start with http(s)://",\u5148\u586B\u94FE\u63A5:"Fill in a link first",\u4FDD\u5B58\u4EA7\u51FA:"Save output",\u8FDB\u5C55:"Progress",\u52A0\u8FDB\u5C55:"Add progress","\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002":"No progress entries yet.",\u65B0\u589E\u8FDB\u5C55:"New progress entry","\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026":"Log progress (conclusion / research status / next step)\u2026",\u5148\u5199\u70B9\u5185\u5BB9:"Write something first","\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B":"Entries are append-only; note the machine and next step for cross-machine handoff",\u8BB0\u5F55\u8FDB\u5C55:"Save progress",\u5C55\u5F00\u5168\u90E8:"Show all",\u6536\u8D77:"Collapse",\u6587\u6863:"Doc","\uFF08\u65E0\u539F\u6587\uFF09":"(no raw text)",\u7F16\u8F91\u60F3\u6CD5:"Edit idea",\u6807\u9898:"Title","\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09":"Raw text (keep verbatim)",\u6807\u7B7E:"Tags",\u9017\u53F7\u5206\u9694:"Comma-separated","\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883":"Note / context",\u53D6\u6D88:"Cancel",\u4FDD\u5B58:"Save",\u5DF2\u4FDD\u5B58:"Saved",\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A:"Title can\u2019t be empty",\u5220\u9664\u60F3\u6CD5:"Delete idea","\u5220\u9664\u4E2D\u2026":"Deleting\u2026",\u786E\u8BA4\u5220\u9664:"Delete","\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002":"Deleting \u201C{title}\u201D ({no}) also removes its progress and outputs.",\u5B58\u50A8\u8DEF\u5F84:"Storage path",\u672A\u77E5:"Unknown","\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002":"In local mode every idea lives in this one JSON file; deleting it clears the idea pool.",\u8FD0\u884C\u6A21\u5F0F:"Run mode","\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002":"Local mode: data lives under this machine\u2019s DSH_HOME/idea-pool/ and is read and written directly by the plugin, with no network. Other machines can\u2019t see it.","\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002":"Cloud mode: data lives in the cloud at {base}; local data stays untouched.",\u4E91\u7AEF\u5730\u5740:"Cloud base URL","\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002":"Base URL of the cloud ideas-api; defaults to {base}.",\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A:"Cloud base URL can\u2019t be empty","\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934":"Cloud base URL must start with http(s)://","API Key":"API Key","\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}":"Saved, last four: {hint}","\u7C98\u8D34\u4E91\u7AEF API Key":"Paste the cloud API key","\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002":"API key saved (last four: {hint}); leave empty to keep it.","\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002":"No API key configured yet \u2014 cloud reads and writes need one.","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key":"Clear saved key","\u6E05\u9664\u4E2D\u2026":"Clearing\u2026","\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key":"Saved API key cleared","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002":"Clear the saved API key? Cloud reads and writes will fail until you add it again.","\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002":"No saved API key yet, so importing is unavailable. Fill in a key and save it first.","\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key":"Connection failed: cloud authentication failed \u2014 check the API Key",\u6D4B\u8BD5\u8FDE\u63A5:"Test connection","\u6D4B\u8BD5\u4E2D\u2026":"Testing\u2026","\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5":"Ping the cloud health endpoint with the URL and key above","\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms":"Connected \xB7 {count} ideas in the cloud \xB7 {ms} ms","\u8FDE\u63A5\u5931\u8D25\uFF1A{error}":"Connection failed: {error}",\u672A\u77E5\u9519\u8BEF:"Unknown error",\u5BFC\u5165\u5230\u672C\u673A:"Import to local",\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A:"Import cloud \u2192 local","\u5BFC\u5165\u4E2D\u2026":"Importing\u2026","\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002":"Fetch everything with the saved cloud configuration and merge it locally by idea number. Does not switch mode or delete local data.","\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761":"Imported {imported} and updated {updated} ideas from the cloud",\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165:"The cloud has no new ideas to import",\u8BBE\u5907\u6807\u8BC6:"Device ID","\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"Written into the source field of ideas and progress entries so the origin can be located across machines.",\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A:"Device ID can\u2019t be empty",\u5BFC\u51FA:"Export","\u5BFC\u51FA JSON":"Export JSON","\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002":"Export all ideas, progress and outputs into a single JSON file for backup or migration.","\u5DF2\u5BFC\u51FA JSON":"JSON exported",\u521A\u521A:"just now","{n} \u5206\u949F\u524D":"{n} min ago",\u672C\u673A:"Local",\u706B\u5C71\u4E91:"Volcano Cloud",\u624B\u52A8:"Manual",\u7F51\u9875:"Web",\u98DE\u4E66:"Feishu",\u5DF2\u590D\u5236:"Copied","\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236":"Copy failed \u2014 select and copy manually","\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}":"Can\u2019t reach the local service: {error}","\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09":"Request failed ({status})","\u5DF2\u5165\u6C60 {no}":"Added {no}","\u5DF2\u5220\u9664 {no}":"Deleted {no}",\u5DF2\u8BB0\u5F55\u8FDB\u5C55:"Progress saved",\u5DF2\u6DFB\u52A0\u4EA7\u51FA:"Output added",\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65:"Undid the last step","\u5DF2\u64A4\u9500\uFF1A{label}":"Undone: {label}",\u5DF2\u5237\u65B0:"Refreshed",\u8BBE\u7F6E\u5DF2\u4FDD\u5B58:"Settings saved",\u6E05\u7A7A\u641C\u7D22\u4E0E\u7B5B\u9009:"Clear search and filters",\u5199\u7B2C\u4E00\u6761:"Write the first one",\u6CA1\u6709\u53EF\u663E\u793A\u7684\u8BE6\u60C5:"No detail to show","\u5148\u6E05\u7A7A\u641C\u7D22\u6216\u5207\u6362\u72B6\u6001\uFF0C\u518D\u9009\u4E00\u6761\u60F3\u6CD5\u3002":"Clear the search or filters, then pick an idea.","\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F":"You have unsaved changes. Close anyway?","\u627E\u5230 {n} \u6761\u60F3\u6CD5":"Found {n} ideas","\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002":"Pick one from the list to view it.",\u663E\u793A\u5168\u90E8\u72B6\u6001:"Show all statuses","\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58":"Reading mode \xB7 verbatim",\u590D\u5236\u5C55\u5F00\u63D0\u793A\u8BCD:"Copy expand prompt",\u590D\u5236\u63A5\u529B\u63D0\u793A\u8BCD:"Copy relay prompt","\u5DF2\u590D\u5236\u63D0\u793A\u8BCD\uFF0C\u53EF\u7C98\u8D34\u5230\u5BF9\u8BDD\u7EE7\u7EED":"Prompt copied. Paste it into the conversation to continue.",\u4E0B\u4E00\u6B65\u4ECE\u8FD9\u91CC\u63A5\u7740\u63A8\u8FDB:"Continue from here","\u6CA1\u6709\u66F4\u65E9\u7684\u8FDB\u5C55\u3002":"No earlier updates.","\u539F\u6587\u9ED8\u8BA4\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00":"Original is folded by default. Click to expand.","\u590D\u5236\u540E\u7C98\u8D34\u7ED9 agent\uFF0C\u7EE7\u7EED\u5C55\u5F00\u6216\u63A5\u529B":"Paste to an agent to expand or relay",\u6536\u8D77\u539F\u6587:"Collapse original",\u5C55\u5F00\u539F\u6587:"Expand original",\u8BB0\u8FDB\u5C55:"Log update",\u6570\u636E\u4F4D\u7F6E:"Data location","\u5148\u9009\u6570\u636E\u5B58\u5728\u54EA\u91CC\uFF1B\u5207\u6362\u6A21\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u642C\u6570\u636E\u3002":"Choose where data lives. Switching modes does not move data automatically.",\u8FDE\u63A5\u914D\u7F6E:"Connection","\u4E91\u7AEF\u5730\u5740\u4E0E API Key\uFF1B\u6D4B\u8BD5\u4F7F\u7528\u5F53\u524D\u586B\u5199\u7684\u503C\u3002":"Cloud base and API key. Test uses the values currently filled in.","\u672C\u673A\u6A21\u5F0F\u4E0D\u9700\u8981\u8FDE\u63A5\uFF1B\u5207\u5230\u4E91\u7AEF\u6A21\u5F0F\u540E\u518D\u586B\u5199\u5730\u5740\u4E0E Key\u3002":"Local mode needs no connection. Switch to cloud mode to fill in the base and key.","\u7528\u5F53\u524D\u586B\u5199\u914D\u7F6E\u8BD5\u62C9\u4E00\u6B21\uFF0C\u4E0D\u9700\u8981\u5148\u4FDD\u5B58":"Test the current values without saving first","\u5F53\u524D\u662F\u672C\u673A\u6A21\u5F0F\u3002":"Currently in local mode.",\u6570\u636E\u8FC1\u79FB:"Data migration","\u5BFC\u5165\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\uFF1B\u4E0D\u4F1A\u5220\u9664\u672C\u673A\u73B0\u6709\u6570\u636E\u3002":"Import uses the saved cloud config and does not delete local data.",\u9AD8\u7EA7:"Advanced","\u8BBE\u5907\u6807\u8BC6\u4F1A\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"The device ID is written to the source field of ideas and updates for cross-device handoff.","\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1B\u5148\u4FDD\u5B58\uFF0C\u518D\u5BFC\u5165\u3002":"Connection settings have unsaved changes. Save first, then import.","\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1A\u5148\u70B9\u300C\u4FDD\u5B58\u300D\uFF0C\u518D\u5BFC\u5165\uFF0C\u907F\u514D\u7528\u9519\u5730\u5740\u6216 Key\u3002":"Connection settings have unsaved changes: save first, then import, so the right base and key are used.",\u6700\u65B0\u8FDB\u5C55:"Latest update",\u8FDB\u5C55\u5386\u53F2:"Update history",\u9010\u5B57\u4FDD\u5B58:"Verbatim",\u72B6\u6001:"Status",\u6392\u5E8F:"Sort",\u6700\u8FD1\u521B\u5EFA:"Recently created",\u6700\u8FD1\u66F4\u65B0:"Recently updated",\u4E0B\u4E00\u6B65:"Next step",\u5217\u8868:"List",\u68B3\u7406:"Review",\u89C6\u56FE:"View","{n} \u6761":"{n}",\u5F85\u51B3\u5B9A:"To decide","\u8BB0\u4E0B\u6765\u8FD8\u6CA1\u5F00\u59CB\u7684\uFF0C\u5148\u635E\u4E00\u6761\u770B\u770B":"Captured but not started. Pick one and take a look.",\u968F\u673A\u4E00\u6761:"Random one",\u8BE5\u63A8\u8FDB\u4E86:"Needs a push","\u8D85\u8FC7 14 \u5929\u6CA1\u52A8\uFF0C\u6700\u4E45\u672A\u52A8\u7684\u6392\u524D\u9762":"No updates for 14+ days, stalest first.",\u6B63\u5728\u63A8\u8FDB:"In progress","\u6700\u8FD1 14 \u5929\u6709\u66F4\u65B0":"Updated in the last 14 days","\u5DF2\u6536\u53E3 / \u6401\u7F6E":"Done / parked","\u5DF2\u6536\u53E3 {done} \xB7 \u6401\u7F6E {parked}":"{done} done \xB7 {parked} parked","\u5165\u6C60 {n} \u5929":"Captured {n}d ago","{n} \u5929\u672A\u52A8":"No updates for {n}d","{n} \u8FDB\u5C55":"{n} updates","{n} \u6761\u60F3\u6CD5":"{n} ideas","{n} \u5F85\u51B3\u5B9A":"{n} to decide","{n} \u4E45\u672A\u63A8\u8FDB":"{n} stale","{n} \u6700\u8FD1\u63A8\u8FDB":"{n} moving",\u968F\u673A\u635E\u4E00\u6761:"Pick one at random","\u968F\u673A\u635E\u5230 {no}\uFF0C\u770B\u770B\u6709\u6CA1\u6709\u9057\u6F0F\u3002":"Random pick: {no}. Anything missed?","\u4E00\u53E5\u8BDD\u6458\u8981\uFF08\u53EF\u9009\uFF09":"One-line gist (optional)","\u226460 \u5B57\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"Up to 60 chars, easy to scan later",\u4E00\u53E5\u8BDD\u6458\u8981:"One-line gist","\u226460 \u5B57\uFF0C\u65B9\u4FBF\u626B\u5217\u8868":"Up to 60 chars, easy to scan",\u8BE6\u7EC6\u6458\u8981:"Detailed summary","\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u4F1A\u8BDD\u641C\u7D22\u3002":"Session search is not available here.",\u641C\u7D22\u4F1A\u8BDD\u5931\u8D25:"Session search failed","\u5173\u8054 DSH \u4F1A\u8BDD":"Link a DSH session","\u6309\u7F16\u53F7\u300C{no}\u300D\u641C\u7D22\u5F53\u524D DSH \u7684\u4F1A\u8BDD\u5185\u5BB9\uFF1B\u70B9\u4E00\u6761\u5373\u53EF\u7ED1\u5B9A\u3002":'Search this DSH for content containing "{no}"; click one to link it.',"\u6B63\u5728\u641C\u7D22\u4F1A\u8BDD\u2026":"Searching sessions\u2026","\u6CA1\u6709\u641C\u5230\u5305\u542B\u8FD9\u4E2A\u7F16\u53F7\u7684\u4F1A\u8BDD\u3002\u53D1\u9001\u8FC7\u300C\u4E00\u952E\u63A8\u8FDB\u300D\u7684\u4F1A\u8BDD\u901A\u5E38\u80FD\u88AB\u641C\u5230\u3002":"No session contains this idea number yet. Sessions created via One-click advance are usually searchable.",\u8FD9\u6761\u4F1A\u8BDD\u5DF2\u7ECF\u5173\u8054\u8FC7\u4E86:"This session is already linked.",\u5DF2\u5173\u8054\u4F1A\u8BDD:"Session linked",\u4E00\u952E\u63A8\u8FDB:"One-click advance","\u5DF2\u6253\u5F00\u65B0\u4F1A\u8BDD\u5E76\u9884\u586B\u63A8\u8FDB\u63D0\u793A\u8BCD\uFF1B\u53D1\u9001\u540E\u53EF\u56DE\u6765\u300C\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD\u300D\u7ED1\u5B9A\u3002":"Opened a new session with the advance prompt prefilled. After sending, use Find sessions to link it.","\u5F53\u524D\u754C\u9762\u4E0D\u80FD\u76F4\u63A5\u5F00\u65B0\u4F1A\u8BDD\uFF0C\u5DF2\u590D\u5236\u63A8\u8FDB\u63D0\u793A\u8BCD":"This UI cannot open a new session directly; the prompt has been copied.","\u5F53\u524D\u73AF\u5883\u4E0D\u80FD\u6253\u5F00 DSH \u4F1A\u8BDD":"Cannot open DSH sessions here.","\u6253\u5F00\u4F1A\u8BDD\u5931\u8D25\uFF1A{error}":"Could not open session: {error}",\u5173\u8054\u4F1A\u8BDD:"Linked sessions",\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD:"Find sessions","\u8FD8\u6CA1\u6709\u5173\u8054\u4F1A\u8BDD\uFF1B\u4E00\u952E\u63A8\u8FDB\u540E\u53EF\u7528\u300C\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD\u300D\u7ED1\u5B9A\u3002":"No linked sessions yet. After One-click advance, use Find sessions to link it.","\u4F1A\u8BDD\u641C\u7D22\u7D22\u5F15\u672A\u5F00\u542F\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\uFF1B\u4E5F\u53EF\u4EE5\u624B\u52A8\u6311\u9009\u3002":"Session search index is off; showing recent sessions instead.","\u6CA1\u6709\u641C\u5230\u5305\u542B\u7F16\u53F7\u7684\u4F1A\u8BDD\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002":"No session matched the idea number; showing recent sessions.","\u4F1A\u8BDD\u641C\u7D22\u5931\u8D25\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002":"Session search failed; showing recent sessions.","\u4F1A\u8BDD\u641C\u7D22\u4E0D\u53EF\u7528\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002":"Session search is unavailable; showing recent sessions.","\u6CA1\u6709\u53EF\u7528\u7684\u4F1A\u8BDD\u5217\u8868\u3002":"No session list is available.",\u4E00\u952E\u63A8\u8FDB\u4F1A\u8A71:"Advance session",\u4E00\u952E\u63A8\u8FDB\u4F1A\u8BDD:"Advance session",\u5DF2\u81EA\u52A8\u5173\u8054\u65B0\u4F1A\u8BDD:"New session linked automatically","\u5DF2\u6253\u5F00\u65B0\u4F1A\u8BDD\u5E76\u9884\u586B\u63A8\u8FDB\u63D0\u793A\u8BCD\uFF1B\u82E5\u53EA\u65B0\u589E\u4E86\u4E00\u4E2A\u4F1A\u8BDD\uFF0C\u4F1A\u81EA\u52A8\u5173\u8054\u3002":"Opened a new session with the prompt prefilled; if exactly one new session appears, it will be linked automatically.",\u4E91\u7AEF\u8FDE\u7EED\u6027:"Cloud continuity","\u672C\u673A\u8D26\u672C\u4E0E\u4E91\u7AEF\u8D26\u672C\u7684\u5DEE\u5F02\uFF1B\u5237\u65B0\u662F\u5355\u5411\u7684\uFF0C\u53EA\u628A\u4E91\u7AEF\u65B0\u5185\u5BB9\u5E76\u8FDB\u672C\u673A\u3002":"How the local ledger differs from the cloud ledger. Refresh is one-way: it only merges new cloud content into local.","\u672C\u673A\u8D26\u672C \xB7 \u672A\u914D\u7F6E\u4E91\u7AEF Key\uFF0C\u6682\u4E0D\u6BD4\u8F83\u4E91\u7AEF\u5DEE\u5F02":"Local ledger \xB7 no cloud API key yet, so the cloud diff is unavailable","\u672C\u673A\u8D26\u672C \xB7 \u4E91\u7AEF\u6682\u4E0D\u53EF\u8FBE\uFF1A{error}\uFF08\u672C\u673A\u529F\u80FD\u4E0D\u53D7\u5F71\u54CD\uFF09":"Local ledger \xB7 cloud unreachable: {error} (local features are unaffected)","\u4E91\u7AEF\u6709\u65B0\u5185\u5BB9\uFF1A{detail}":"New content in the cloud: {detail}","\u4E0A\u6B21\u5237\u65B0 {time}":"last refreshed {time}","\u672C\u673A\u8D26\u672C\u4E0E\u4E91\u7AEF\u4E00\u81F4\uFF08\u4E91\u7AEF {n} \u6761\uFF09":"Local ledger matches the cloud ({n} ideas)","+{n} \u6761\u60F3\u6CD5":"+{n} ideas","+{n} \u6761\u8FDB\u5C55":"+{n} updates","+{n} \u4E2A\u4EA7\u51FA":"+{n} links","{n} \u6761\u60F3\u6CD5\u6709\u4E91\u7AEF\u66F4\u65B0":"{n} ideas have cloud changes",\u4ECE\u4E91\u7AEF\u5237\u65B0:"Refresh from cloud","\u5237\u65B0\u4E2D\u2026":"Refreshing\u2026","\u68C0\u67E5\u4E2D\u2026":"Checking\u2026",\u8FDE\u63A5\u5931\u8D25:"connection failed",\u4E91\u7AEF\u72B6\u6001:"Cloud status","\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF\uFF0C\u672C\u673A\u8D26\u672C\u4E0D\u53C2\u4E0E\u6BD4\u8F83":"Cloud mode: data lives in the cloud, so the local ledger is not compared","\u672A\u914D\u7F6E\u4E91\u7AEF Key":"No cloud API key configured","\u4E91\u7AEF\u6682\u4E0D\u53EF\u8FBE\uFF1A{error}":"Cloud unreachable: {error}","\u4E91\u7AEF\u53EF\u8FBE \xB7 \u5171 {n} \u6761":"Cloud reachable \xB7 {n} ideas",\u5C1A\u672A\u68C0\u67E5:"Not checked yet","\u5207\u6362\u56DE\u672C\u673A\u6A21\u5F0F\u540E\uFF0C\u53EF\u5728\u8FD9\u91CC\u6BD4\u8F83\u672C\u673A\u8D26\u672C\u4E0E\u4E91\u7AEF\u7684\u5DEE\u5F02":"Switch back to local mode to compare the local and cloud ledgers here","\u672A\u914D\u7F6E Key\uFF0C\u65E0\u6CD5\u6BD4\u8F83\u4E91\u7AEF\u5DEE\u5F02\uFF1B\u672C\u673A\u529F\u80FD\u4E0D\u53D7\u5F71\u54CD":"No API key, so the cloud diff is unavailable; local features are unaffected",\u4E91\u7AEF\u5DEE\u5F02\u6682\u4E0D\u53EF\u7528:"Cloud diff is unavailable right now","\u843D\u540E\u4E91\u7AEF\uFF1A{detail}":"Behind the cloud: {detail}","\u4E91\u7AEF\u6CA1\u6709\u65B0\u5185\u5BB9\uFF1B\u672C\u673A\u72EC\u6709 {n} \u6761\u60F3\u6CD5\u4F1A\u4FDD\u7559":"Nothing new in the cloud; {n} local-only ideas are kept",\u4E0E\u4E91\u7AEF\u4E00\u81F4:"In sync with the cloud","{time} \xB7 \u4E91\u7AEF {n} \u6761 \xB7 \u5F53\u65F6\u65B0\u589E {u} \u6761\u8FDB\u5C55 / {l} \u4E2A\u4EA7\u51FA":"{time} \xB7 {n} ideas in the cloud \xB7 added {u} updates / {l} links",\u4ECE\u672A\u5237\u65B0\u8FC7:"Never refreshed",\u4ECE\u672A\u5237\u65B0:"never refreshed",\u4ECE\u4E91\u7AEF\u589E\u91CF\u5237\u65B0:"Incremental refresh from cloud",\u91CD\u65B0\u68C0\u67E5:"Check again","\u5148\u5728\u4E0A\u9762\u7684\u300C\u8FDE\u63A5\u914D\u7F6E\u300D\u91CC\u4FDD\u5B58 API Key\uFF0C\u518D\u5237\u65B0\u4E91\u7AEF\u5DEE\u5F02\u3002":"Save an API key under Connection settings above, then refresh the cloud diff.","\u5355\u5411\u5237\u65B0\uFF1A\u53EA\u628A\u4E91\u7AEF\u65B0\u5185\u5BB9\u5408\u5E76\u5230\u672C\u673A\uFF1B\u672C\u673A\u7684\u65B0\u5185\u5BB9\u4E0D\u4F1A\u56DE\u5199\u4E91\u7AEF\uFF0C\u4E0D\u662F\u53CC\u5411\u540C\u6B65\u3002":"One-way refresh: only new cloud content is merged into local; new local content is never written back to the cloud. This is not two-way sync.","\u5DF2\u4ECE\u4E91\u7AEF\u5237\u65B0\uFF1A+{updates} \u6761\u8FDB\u5C55\u3001+{links} \u4E2A\u4EA7\u51FA\u3001+{ideas} \u6761\u60F3\u6CD5":"Refreshed from cloud: +{updates} updates, +{links} links, +{ideas} ideas","\u672C\u673A\u5DF2\u662F\u6700\u65B0\uFF08\u4E91\u7AEF {n} \u6761\uFF09":"Local is up to date ({n} ideas in the cloud)","\u5F53\u524D\u7075\u611F\u6C60=\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u56DE\u586B\u8BF7\u7528 idea_pool \u5DE5\u5177\uFF08\u8DDF\u968F\u4E91\u7AEF\u6A21\u5F0F\uFF09\u6216 ideas.py \u7684\u4E91\u7AEF\u540E\u7AEF\u3002":"The idea pool is in CLOUD mode. Write progress through the idea_pool tool (follows cloud mode) or the ideas.py cloud backend.","\u5F53\u524D\u7075\u611F\u6C60=\u672C\u673A\u6A21\u5F0F\uFF1A\u56DE\u586B\u8BF7\u7528 idea_pool \u5DE5\u5177\uFF08\u8DDF\u968F\u672C\u673A\u6A21\u5F0F\uFF09\u6216\u672C\u673A /idea-pool/api/\uFF0C\u4E0D\u8981\u53EA\u5199\u4E91\u7AEF\u8D26\u672C\u3002":"The idea pool is in LOCAL mode. Write progress through the idea_pool tool (follows local mode) or the local /idea-pool/api/; do not write only to the cloud ledger."};var De=li(),Ie=new Set;function li(){return typeof document>"u"||(document.documentElement.lang||navigator.language||"zh").toLowerCase().startsWith("zh")?"zh":"en"}function tt(){Ie.forEach(i=>{try{i()}catch(n){console.error("[idea-pool] lang listener failed",n)}})}typeof document<"u"&&typeof MutationObserver<"u"&&new MutationObserver(()=>{let i=li();i!==De&&(De=i,tt())}).observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function pi(){return De}function Ae(i){return Ie.add(i),()=>Ie.delete(i)}function di(){return ri.default.useSyncExternalStore(Ae,pi)}function t(i,n){let o=pi()==="en"?si[i]??i:i;return n?o.replace(/\{(\w+)\}/g,(a,s)=>n[s]===void 0?a:String(n[s])):o}var ui=_e(require("react"),1);var nt="idea-pool/",ot=500;function at(){return{all:0,pool:0,active:0,done:0,parked:0}}var f={booted:!1,loading:!0,error:null,mode:"local",device:"",storagePath:"",cloudBase:"",canUndo:!1,counts:at(),total:0,status:"all",query:"",sortBy:"created",view:"list",ideas:[],listLoading:!1,selectedNo:null,newIdeaNo:null,suppressAutoSelect:!1,detail:null,detailLoading:!1,detailError:null,settings:null,settingsLoading:!1,continuity:null,continuityLoading:!1,continuityRefreshing:!1,continuityAt:0,toast:null},Ke=new Set;function y(i){f={...f,...typeof i=="function"?i(f):i},Ke.forEach(n=>{try{n()}catch(o){console.error("[idea-pool] store listener failed",o)}})}function st(i){return Ke.add(i),()=>Ke.delete(i)}function v(i){return ui.default.useSyncExternalStore(st,()=>i(f))}var $e=null,Be=null;function _(i,{error:n=!1,duration:o=0}={}){clearTimeout($e);let a=Date.now()+Math.random();y({toast:{id:a,text:i,error:n}}),$e=setTimeout(()=>{f.toast&&f.toast.id===a&&y({toast:null})},o||(n?6e3:3200))}function mi(){clearTimeout($e),y({toast:null})}function U(i){_(i&&i.message||String(i),{error:!0}),i&&Number(i.status)===409&&Promise.allSettled([ne(),G(),pe()])}async function F(i,n){let o={credentials:"same-origin",...n||{}},a;try{a=await fetch(nt+i,o)}catch(r){throw new Error(t("\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}",{error:r&&r.message||String(r)}))}let s=null;try{s=await a.json()}catch{s=null}if(!a.ok||s&&s.ok===!1){let r=new Error(s&&s.error||t("\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09",{status:a.status}));throw r.status=a.status,r}return s||{}}function ie(i,n){return{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(n??{})}}function $(i){let n=Number(i);return Number.isFinite(n)&&n>0?Math.floor(n):0}function gi(i,n){let o=i&&typeof i=="object"?i:{},a={pool:$(o.pool),active:$(o.active),done:$(o.done),parked:$(o.parked)},s=a.pool+a.active+a.done+a.parked;return a.all=$(o.all)||$(o.total)||$(n)||s,a}function fi(i){if(!i||typeof i!="object")return;let n={mode:typeof i.mode=="string"?i.mode:f.mode,canUndo:!!i.canUndo,counts:gi(i.counts,i.total),total:$(i.total)};typeof i.device=="string"&&(n.device=i.device),Object.hasOwn(i,"storagePath")&&(n.storagePath=typeof i.storagePath=="string"?i.storagePath:""),Object.hasOwn(i,"cloudBase")&&(n.cloudBase=typeof i.cloudBase=="string"?i.cloudBase:""),y(n)}async function ne(){let i=await F("api/state");return fi(i),i}var Me=0;async function G(){let i=++Me,n=new URLSearchParams;f.status!=="all"&&n.set("status",f.status);let o=f.query.trim();o&&n.set("q",o),n.set("limit",String(ot)),n.set("offset","0"),y({listLoading:!0});try{let a=await F("api/ideas?"+n.toString());if(i!==Me)return;let s=Array.isArray(a.ideas)?a.ideas:[];y({ideas:s,listLoading:!1,counts:gi(a.counts,a.total),total:$(a.total)||s.length,error:null})}catch(a){throw i===Me&&y({listLoading:!1}),a}}var Pe=0;async function Ue(i){let n=++Pe;y({detailLoading:!0,detailError:null});try{let o=await F("api/ideas/"+encodeURIComponent(i));return n!==Pe||y({detail:o,detailLoading:!1,detailError:null}),o}catch(o){throw n===Pe&&y({detailLoading:!1,detailError:o.message}),o}}async function pe(){let i=f.selectedNo;if(i)try{await Ue(i)}catch{y({selectedNo:null,detail:null,detailError:null})}}async function hi({withDetail:i=!1}={}){let n=[ne(),G()];i&&f.selectedNo&&n.push(Ue(f.selectedNo)),await Promise.allSettled(n)}var be=null;function Fe(){return be?(f.booted&&Promise.allSettled([ne(),G()]),be):(be=(async()=>{y({loading:!0,error:null});try{await Promise.all([ne(),G()]),y({booted:!0,loading:!1}),f.mode==="local"&&oe().catch(()=>{})}catch(i){y({loading:!1,error:i.message})}})(),be)}function vi(){return be=null,Fe()}async function xi({quiet:i=!1}={}){try{await Promise.all([ne(),G()]),await pe(),y({booted:!0,loading:!1,error:null}),f.mode==="local"&&oe({force:!0}).catch(()=>{}),i||_(t("\u5DF2\u5237\u65B0"))}catch(n){U(n)}}var ci=null;function He(i){y({view:i==="review"?"review":"list"})}function bi(i){y({sortBy:i==="updated"?"updated":"created"})}function je(i){f.status!==i&&(y({status:i,selectedNo:null,detail:null,detailError:null}),G().catch(U))}function Le(i){y({query:i,selectedNo:null,detail:null,detailError:null}),clearTimeout(ci),ci=setTimeout(()=>{G().catch(U)},220)}function de(i){if(!i){y({selectedNo:null,detail:null,detailError:null});return}if(f.selectedNo===i&&f.detail)return;let n=f.selectedNo===i?f.detail:null;y({selectedNo:i,detail:n,detailLoading:!0,detailError:null}),Ue(i).catch(U)}function qe(){y({selectedNo:null,detail:null,detailError:null})}async function yi(i){try{let n={...i};!n.source&&f.device&&(n.source=f.device);let a=(await F("api/ideas",ie("POST",n))).idea||null;return await hi(),_(t("\u5DF2\u5165\u6C60 {no}",{no:a?a.idea_no:""}).trim()),a&&(clearTimeout(Be),y({newIdeaNo:a.idea_no}),Be=setTimeout(()=>{Be=null,f.newIdeaNo===a.idea_no&&y({newIdeaNo:null})},1100)),a}catch(n){return U(n),null}}async function ye(i,n,o){let a={ideas:f.ideas,detail:f.detail,counts:f.counts},s=n.status&&f.ideas.find(r=>r.idea_no===i)?.status;if(n.status&&s&&s!==n.status){let r={...f.counts};r[s]=Math.max(0,(r[s]||0)-1),r[n.status]=(r[n.status]||0)+1,y({counts:r,ideas:f.ideas.map(l=>l.idea_no===i?{...l,status:n.status}:l),detail:f.detail&&f.detail.idea&&f.detail.idea.idea_no===i?{...f.detail,idea:{...f.detail.idea,status:n.status}}:f.detail})}try{let l=(await F("api/ideas/"+encodeURIComponent(i),ie("PATCH",n))).idea||null;return l&&y({ideas:f.ideas.map(p=>p.idea_no===i?{...p,...l}:p),detail:f.detail&&f.detail.idea&&f.detail.idea.idea_no===i?{...f.detail,idea:{...f.detail.idea,...l}}:f.detail}),o&&_(o),l}catch(r){return y(a),U(r),null}}async function wi(i){let n=f.selectedNo===i;try{await F("api/ideas/"+encodeURIComponent(i),{method:"DELETE"}),n&&y({selectedNo:null,detail:null,detailError:null,suppressAutoSelect:!0});try{await hi()}finally{n&&y({suppressAutoSelect:!1})}return _(t("\u5DF2\u5220\u9664 {no}",{no:i})),!0}catch(o){return U(o),!1}}async function ki(i,n){let o={id:"tmp-"+Date.now(),content:n,source:f.device||"",created_at:new Date().toISOString()},a=f.detail,s=f.ideas,r=f.detail&&f.detail.idea&&f.detail.idea.idea_no===i;r&&y({detail:{...f.detail,updates:[...f.detail.updates||[],o]}});try{let l={content:n};f.device&&(l.source=f.device);let p=await F("api/ideas/"+encodeURIComponent(i)+"/updates",ie("POST",l));if(r){let m=p.update||null;y({detail:{...f.detail,updates:[...(f.detail.updates||[]).filter(g=>g.id!==o.id),...m?[m]:[]]},ideas:f.ideas.map(g=>g.idea_no===i?{...g,n_updates:(g.n_updates||0)+1}:g)})}return _(t("\u5DF2\u8BB0\u5F55\u8FDB\u5C55")),!0}catch(l){return r&&y({detail:a,ideas:s}),U(l),!1}}async function We(){try{let i=await F("api/undo",ie("POST",{}));i.state&&fi(i.state),await Promise.allSettled([G(),pe()]);let n=typeof i.label=="string"?i.label.trim():"";return _(n?t("\u5DF2\u64A4\u9500\uFF1A{label}",{label:n}):t("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")),!0}catch(i){return U(i),!1}}async function Ni(){y({settingsLoading:!0});try{let i=await F("api/settings");return y({settings:i.settings||null,settingsLoading:!1}),i.settings||null}catch(i){return y({settingsLoading:!1}),U(i),null}}async function Si(i){try{let o=(await F("api/settings",ie("POST",i))).settings||null,a=f.mode;y({settings:o}),o&&o.mode&&o.mode!==a&&y({ideas:[],selectedNo:null,detail:null,detailError:null,canUndo:!1,continuity:null,continuityAt:0}),_(t("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58"));try{await ne(),await G(),await pe(),y({booted:!0,loading:!1,error:null}),f.mode==="local"&&oe({force:!0}).catch(()=>{})}catch(s){U(s)}return o}catch(n){return U(n),null}}async function Ci({base:i,apiKey:n}={}){let o={},a=typeof i=="string"?i.trim():"",s=typeof n=="string"?n.trim():"";a&&(o.base=a),s&&(o.apiKey=s);try{let r=await F("api/cloud/test",ie("POST",o));return{ok:!0,base:typeof r.base=="string"?r.base:"",count:$(r.count),latencyMs:$(r.latencyMs)}}catch(r){return{ok:!1,error:r&&r.message||String(r),status:r&&Number.isInteger(r.status)?r.status:0}}}async function zi(){try{let i=await F("api/settings",ie("POST",{cloud:{clearKey:!0}}));return y({settings:i.settings||f.settings}),_(t("\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key")),i.settings||null}catch(i){return U(i),null}}async function _i(){try{let i=await F("api/cloud/import-local",ie("POST",{})),n=$(i.imported),o=$(i.updated),a=$(i.total);return _(n||o?t("\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761",{imported:n,updated:o}):t("\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165")),await Promise.allSettled([ne(),G(),pe()]),oe({force:!0}).catch(()=>{}),{imported:n,updated:o,total:a}}catch(i){return U(i),null}}var Oe=0,rt=6e4;async function oe({force:i=!1}={}){if(!i&&f.continuity&&Date.now()-f.continuityAt<rt)return f.continuity;let n=++Oe;y({continuityLoading:!0});try{let o=await F("api/continuity");return n!==Oe||y({continuity:o,continuityLoading:!1,continuityAt:Date.now()}),o}catch{return n===Oe&&y({continuityLoading:!1}),null}}async function Je(){if(f.continuityRefreshing)return null;y({continuityRefreshing:!0});try{let i=await F("api/continuity/refresh",ie("POST",{}));y({continuityRefreshing:!1});let n=$(i.added_updates),o=$(i.added_links),a=$(i.imported);return _(n||o||a?t("\u5DF2\u4ECE\u4E91\u7AEF\u5237\u65B0\uFF1A+{updates} \u6761\u8FDB\u5C55\u3001+{links} \u4E2A\u4EA7\u51FA\u3001+{ideas} \u6761\u60F3\u6CD5",{updates:n,links:o,ideas:a}):t("\u672C\u673A\u5DF2\u662F\u6700\u65B0\uFF08\u4E91\u7AEF {n} \u6761\uFF09",{n:$(i.cloud_total)})),await Promise.allSettled([ne(),G(),pe()]),await oe({force:!0}),i}catch(i){return y({continuityRefreshing:!1}),U(i),null}}function lt(){let i=new Date,n=o=>String(o).padStart(2,"0");return`${i.getFullYear()}${n(i.getMonth()+1)}${n(i.getDate())}`}function pt(i,n){let o=new Blob([n],{type:"application/json;charset=utf-8"}),a=URL.createObjectURL(o),s=document.createElement("a");s.href=a,s.download=i,s.style.display="none",document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(a),1e3)}async function Li(){try{let i=await F("api/export"),n=i&&i.data?i.data:i;return pt(`idea-pool-${lt()}.json`,JSON.stringify(n,null,2)),_(t("\u5DF2\u5BFC\u51FA JSON")),!0}catch(i){return U(i),!1}}var k=_e(require("react"),1);var dt={bulb:"M12 3a6 6 0 0 1 3.5 10.9c-.9.6-1.5 1.5-1.5 2.5v.6h-4v-.6c0-1-.6-1.9-1.5-2.5A6 6 0 0 1 12 3zM10 20h4M12 7.5v3.5",note:"M6 4h8l4 4v12H6zM14 4v4h4M9 12h6M9 16h6",settings:"M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",undo:"M8 6L4 10l4 4M4 10h10a5 5 0 0 1 0 10h-3",refresh:"M19 8a8 8 0 0 0-14-1L4 9M5 16a8 8 0 0 0 14 1l1-2M4 4v5h5M20 20v-5h-5",search:"M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",close:"M6 6l12 12M18 6L6 18",check:"M5 12.5l4.5 4.5L19 7",chevD:"M6 9.5l6 6 6-6",chevL:"M14.5 5.5L8 12l6.5 6.5",chevR:"M9.5 5.5L16 12l-6.5 6.5",plus:"M12 5v14M5 12h14",edit:"M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",trash:"M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",copy:"M9 9h10v11H9zM5 15V4h10",link:"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",upRight:"M7 17L17 7M8 7h9v9",monitor:"M4 5h16v11H4zM9 20h6M12 16v4",clock:"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l2.5 1.5",download:"M12 4v11M7 11l5 5 5-5M5 20h14",alert:"M12 4l9 16H3zM12 10v4M12 17.5h.01",folder:"M4 7h6l2 2h10v10H4z",tag:"M4 5h8l8 8-6 6-8-8zM8 8.5h.01",spark:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",bolt:"M13 3L5 14h6l-1 7 8-11h-6z",cloud:"M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8.5z",dot:"M12 12h.01"};function D({name:i,size:n=16,stroke:o=1.6,className:a=""}){let s=dt[i];return s?k.default.createElement("svg",{className:a,width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},k.default.createElement("path",{d:s})):null}function te({icon:i,label:n,onClick:o,disabled:a,active:s,size:r=16,className:l="",...p}){return k.default.createElement("button",{type:"button",className:`ip-iconbtn ${s?"is-on":""} ${l}`,"aria-label":n,title:n,onClick:o,disabled:a,...p},k.default.createElement(D,{name:i,size:r}))}function S({variant:i="plain",size:n="md",icon:o,children:a,className:s="",title:r,...l}){return k.default.createElement("button",{type:"button",className:`ip-btn is-${i} is-${n} ${s}`,title:r,...l},o?k.default.createElement(D,{name:o,size:n==="sm"?13:15}):null,a?k.default.createElement("span",null,a):null)}function ct({tone:i="neutral",children:n,title:o,className:a=""}){return k.default.createElement("span",{className:`ip-badge is-${i} ${a}`,title:o},n)}function Ei({status:i,children:n}){return k.default.createElement(ct,{tone:i==="pool"||i==="active"||i==="done"||i==="parked"?i:"neutral"},k.default.createElement("i",{className:"ip-dot","aria-hidden":"true"}),n)}function Ye({children:i}){return k.default.createElement("span",{className:"ip-tag"},i)}function Y({label:i,hint:n,children:o}){return k.default.createElement("label",{className:"ip-field"},k.default.createElement("span",{className:"ip-field-label"},i),o,n?k.default.createElement("small",{className:"ip-field-hint"},n):null)}function we({title:i,onClose:n,children:o,footer:a,width:s=460}){let r=k.default.useRef(null),l=k.default.useRef(n),p=k.default.useRef(null);return l.current=n,k.default.useEffect(()=>{p.current=document.activeElement;let m=()=>{let u=r.current;return u?[...u.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')].filter(L=>!L.disabled&&L.offsetParent!==null):[]},g=u=>{if(u.key==="Escape"){u.preventDefault(),u.stopPropagation(),l.current();return}if(u.key!=="Tab")return;let L=m();if(!L.length)return;let I=L[0],M=L[L.length-1];u.shiftKey&&document.activeElement===I?(u.preventDefault(),M.focus()):!u.shiftKey&&document.activeElement===M&&(u.preventDefault(),I.focus())};window.addEventListener("keydown",g,!0);let h=r.current,x=h&&(h.querySelector("textarea, input, select")||h.querySelector("button"));x&&x.focus({preventScroll:!0});let c=h&&h.closest(".ip-dialog-body");return c&&(c.scrollTop=0),()=>{window.removeEventListener("keydown",g,!0);let u=p.current;u&&typeof u.focus=="function"&&u.isConnected&&u.focus()}},[]),k.default.createElement("div",{className:"ip-dialog-mask",onPointerDown:m=>{m.target===m.currentTarget&&n()}},k.default.createElement("div",{className:"ip-dialog",role:"dialog","aria-modal":"true","aria-label":i,style:{width:s},ref:r},k.default.createElement("div",{className:"ip-dialog-head"},k.default.createElement("h2",null,i),k.default.createElement(te,{icon:"close",label:t("\u5173\u95ED"),onClick:n})),k.default.createElement("div",{className:"ip-dialog-body"},o),a?k.default.createElement("div",{className:"ip-dialog-foot"},a):null))}function Di(){let i=v(n=>n.toast);return i?k.default.createElement("div",{key:i.id,className:`ip-toast ${i.error?"is-error":""}`,role:i.error?"alert":"status"},k.default.createElement(D,{name:i.error?"alert":"check",size:14}),k.default.createElement("span",{className:"ip-toast-text"},i.text),k.default.createElement("button",{type:"button",className:"ip-toast-close","aria-label":t("\u5173\u95ED"),onClick:mi},k.default.createElement(D,{name:"close",size:12}))):null}function Ve({icon:i="bulb",title:n,hint:o,children:a}){return k.default.createElement("div",{className:"ip-empty"},k.default.createElement("span",{className:"ip-empty-icon"},k.default.createElement(D,{name:i,size:26})),k.default.createElement("p",{className:"ip-empty-title"},n),o?k.default.createElement("p",{className:"ip-empty-hint"},o):null,a)}function ke({label:i}){return k.default.createElement("div",{className:"ip-loading",role:"status"},k.default.createElement("span",{className:"ip-spinner","aria-hidden":"true"}),k.default.createElement("span",null,i))}function Ti(i){let n=document.createElement("textarea");n.value=i,n.setAttribute("readonly",""),n.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0",document.body.appendChild(n),n.select();try{document.execCommand("copy")}finally{n.remove()}}function ce(i,n=t("\u5DF2\u590D\u5236")){let o=()=>_(n),a=()=>_(t("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236"),{error:!0});try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(i).then(o,()=>{try{Ti(i),o()}catch{a()}});return}Ti(i),o()}catch{a()}}var Ii="idea-pool",ut="https://www.zhaoningyuan.com",ue="https://www.zhaoningyuan.com/ideas/api",Pi=["pool","active","done","parked"],Oi={pool:"\u5DF2\u5165\u6C60",active:"\u63A8\u8FDB\u4E2D",done:"\u5DF2\u6536\u53E3",parked:"\u6401\u7F6E"},mt=[{key:"all",label:"\u5168\u90E8"},...Pi.map(i=>({key:i,label:Oi[i]}))],gt={mac:"Mac","dsh-mac":"Mac",win:"Windows","dsh-win":"Windows",dsh:"\u672C\u673A",volcano:"\u706B\u5C71\u4E91",manual:"\u624B\u52A8",web:"\u7F51\u9875",feishu:"\u98DE\u4E66"};function Z(i){return String(i).padStart(2,"0")}function ge(i){if(!i)return"";let n=new Date(i);return Number.isNaN(n.getTime())?String(i):`${n.getFullYear()}-${Z(n.getMonth()+1)}-${Z(n.getDate())} ${Z(n.getHours())}:${Z(n.getMinutes())}`}function Qe(i){if(!i)return"";let n=new Date(i);if(Number.isNaN(n.getTime()))return String(i);let o=Date.now()-n.getTime();if(o>=0&&o<60*1e3)return t("\u521A\u521A");if(o>=0&&o<3600*1e3)return t("{n} \u5206\u949F\u524D",{n:Math.floor(o/6e4)});let a=new Date,s=new Date(a.getFullYear(),a.getMonth(),a.getDate()).getTime();return n.getTime()>=s?`${Z(n.getHours())}:${Z(n.getMinutes())}`:n.getFullYear()===a.getFullYear()?`${Z(n.getMonth()+1)}-${Z(n.getDate())}`:`${n.getFullYear()}-${Z(n.getMonth()+1)}-${Z(n.getDate())}`}function Xe(i){if(!i)return"";let n=String(i).toLowerCase();return t(gt[n]||String(i))}function Se(i){return t(Oi[i]||i||"")}function ft(i){let n=String(i||"").trim();return!n||/^(javascript|data|vbscript):/i.test(n)?"#":n}function ht(i){return`${ut}/ideas/#${i.idea_no}`}function fe(i){return String(i&&i.title||"").replace(/\s+/g," ").trim()||i&&i.idea_no||""}function Ki(i){return String(i||"").split(/[,，]/).map(n=>n.trim()).filter(Boolean)}function Ai(i,n,o){return t(i===1?n:o,{n:i})}function $i(i){if(!i)return"";let n=[];return i.missing_ideas&&n.push(t("+{n} \u6761\u60F3\u6CD5",{n:i.missing_ideas})),i.missing_updates&&n.push(t("+{n} \u6761\u8FDB\u5C55",{n:i.missing_updates})),i.missing_links&&n.push(t("+{n} \u4E2A\u4EA7\u51FA",{n:i.missing_links})),n.length===0&&i.changed_ideas?t("{n} \u6761\u60F3\u6CD5\u6709\u4E91\u7AEF\u66F4\u65B0",{n:i.changed_ideas}):n.join("\u3001")}function vt(i){return i&&i.at?Qe(i.at):""}var xt=1440*60*1e3;function se(i){let n=new Date(i||0).getTime();return!n||Number.isNaN(n)?0:Math.max(0,Math.floor((Date.now()-n)/xt))}function bt(i){let o=(String(i.gist||"").trim()||String(i.summary||"").trim()||String(i.raw_text||"").trim()).replace(/\s+/g," ");if(!o)return"";let a=o.split(/[。！？!?]/)[0].trim()||o;return a.length>90?a.slice(0,90)+"\u2026":a}function Bi(i){let n=i.idea_no,o=fe(i);return"\u8BF7\u5C55\u5F00\u63A8\u8FDB\u7075\u611F\u6C60 "+n+"\u300A"+o+`\u300B\u3002

\u3010\u7EE7\u627F\u8FDB\u5EA6\xB7\u9632\u91CD\u590D\u3011\u5148\u8BFB\u60F3\u6CD5\u8BE6\u60C5\u2014\u2014\u539F\u6587\u3001\u6458\u8981\u3001\u5168\u90E8\u300C\u8FDB\u5C55\u300D\u4E0E\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 get \u52A8\u4F5C\uFF0C\u6216\u8BFB\u672C\u673A /idea-pool/api/ideas/`+n+`\uFF09\u3002
\uFF08\u300C\u8FDB\u5C55\u300D=\u63A5\u529B\u8D26\u672C\uFF1A\u4EE5\u6700\u65B0\u6761\u76EE\u4E3A\u51C6\u7EE7\u627F\uFF0C\u5DF2\u5B8C\u6210\u7684\u4E0D\u91CD\u505A\u2014\u2014\u5305\u62EC\u5176\u4ED6\u673A\u5668\u505A\u8FC7\u7684\uFF09
\u5982\u672C\u60F3\u6CD5\u66FE\u5728\u5176\u4ED6\u673A\u5668/\u4F1A\u8BDD\u63A8\u8FDB\u8FC7\uFF08\u4E0D\u786E\u5B9A\u5C31\u5148\u67E5\uFF09\uFF1A\u5F00\u5DE5\u524D\u5148\u505A\u8DE8\u673A\u67E5\u91CD\uFF08\u68C0\u7D22\u5404\u673A\u4F1A\u8BDD\u5E93\u3001\u5B9A\u65F6\u4EFB\u52A1\u4E0E\u6280\u80FD\uFF09\uFF0C\u5E76\u56DE\u586B\u4E00\u6761\u300C\u5F00\u5DE5\u5BF9\u9F50\u300D\u8FDB\u5C55\uFF08\u672C\u6B21\u8303\u56F4+\u4E0D\u91CD\u505A\u9879\uFF09\u3002
\u3010\u63A8\u8FDB\u8BB0\u5F55\u3011\u5148\u8BFB\u8BB0\u5F55\u6587\u6863\uFF08\u82E5\u6709\uFF09\u5E76\u5728\u5B8C\u6210\u540E\u8FFD\u52A0\u672C\u8F6E\u6761\u76EE\u3002
\u3010\u5148\u6F84\u6E05\u540E\u5F00\u5DE5\u3011\u7EE7\u627F\u68C0\u67E5\u4E4B\u540E\u3001\u52A8\u624B\u4E4B\u524D\uFF1A\u6309 brainstorming \u6F84\u6E05\u671F\u7EAA\u5F8B\u5411\u7528\u6237\u8FFD\u95EE 3~5 \u4E2A\u5173\u952E\u95EE\u9898\u2014\u2014\u53EA\u95EE\u4F1A\u6539\u53D8\u65B9\u5411\u3001\u53EA\u6709\u7528\u6237\u80FD\u7B54\u7684\uFF08\u80FD\u81EA\u67E5\u7684\u5148\u67E5\uFF09\uFF1B\u5C0F\u60F3\u6CD5\u53EF\u5C11\u95EE\uFF1B\u7528\u6237\u8BF4\u300C\u76F4\u63A5\u5C55\u5F00\u300D\u5219\u8DF3\u8FC7\u3002
\u5B8C\u6210\u540E\u56DE\u586B\u300C\u5DF2\u5B8C\u6210/\u672A\u5B8C\u6210/\u4E0B\u4E00\u6B65\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 progress \u52A8\u4F5C\uFF09\uFF1B\u4EA7\u51FA\u53D1\u5E03\u540E\u6302\u5230\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF0C\u7136\u540E\u5F00\u59CB\u7814\u7A76/\u63A8\u8FDB\u3002`}function yt({searchRef:i,onOpenSettings:n}){let o=v(c=>c.mode),a=v(c=>c.device),s=v(c=>c.cloudBase),r=v(c=>c.canUndo),l=v(c=>c.query),[p,m]=e.default.useState(l);e.default.useEffect(()=>{m(l)},[l]);let g=o==="cloud",h=g?t("\u4E91\u7AEF\u6A21\u5F0F"):t("\u672C\u673A\u6A21\u5F0F"),x=g?s?`${h} \xB7 ${s}`:h:a?`${h} \xB7 ${a}`:h;return e.default.createElement("header",{className:"ip-topbar","data-window-drag":""},e.default.createElement("div",{className:"ip-brand"},e.default.createElement("span",{className:"ip-brand-mark"},e.default.createElement(D,{name:"bulb",size:17,stroke:1.7})),e.default.createElement("span",{className:"ip-title"},t("\u7075\u611F\u6C60")),e.default.createElement("span",{className:`ip-mode ${g?"is-cloud":""}`,title:x},e.default.createElement("i",{"aria-hidden":"true"}),h)),e.default.createElement("span",{className:"ip-topbar-spacer"}),e.default.createElement("div",{className:"ip-search"},e.default.createElement("span",{className:"ip-search-icon"},e.default.createElement(D,{name:"search",size:14})),e.default.createElement("input",{ref:i,type:"text",value:p,placeholder:t("\u641C\u7D22\u60F3\u6CD5\u2026"),"aria-label":t("\u641C\u7D22\u60F3\u6CD5"),onChange:c=>{m(c.target.value),Le(c.target.value)}}),p?e.default.createElement("span",{className:"ip-search-clear"},e.default.createElement(te,{icon:"close",size:12,label:t("\u6E05\u7A7A\u641C\u7D22"),onClick:()=>{m(""),Le(""),i.current?.focus()}})):null),r&&!g?e.default.createElement(te,{icon:"undo",label:t("\u64A4\u9500\u4E0A\u4E00\u6B65"),onClick:()=>We()}):null,e.default.createElement(te,{icon:"refresh",label:t("\u5237\u65B0"),onClick:()=>xi()}),e.default.createElement(te,{icon:"settings",label:t("\u8BBE\u7F6E"),onClick:n}))}var wt=208;function kt(i){i&&(i.style.height="auto",i.style.height=`${Math.min(i.scrollHeight,wt)}px`)}function Nt({highlight:i}){let[n,o]=e.default.useState(""),[a,s]=e.default.useState(""),[r,l]=e.default.useState(""),[p,m]=e.default.useState(""),[g,h]=e.default.useState(""),[x,c]=e.default.useState(!1),[u,L]=e.default.useState(!1),[I,M]=e.default.useState(!1),O=e.default.useRef(null),B=e.default.useRef({raw:n,title:a,summary:r,gist:p,tags:g});B.current={raw:n,title:a,summary:r,gist:p,tags:g},e.default.useEffect(()=>{kt(O.current)},[n,x]);let E=async()=>{if(u)return;let N=n.trim(),V=a.trim();if(!N&&!V){_(t("\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60"),{error:!0}),O.current?.focus();return}let w={raw_text:N};V&&(w.title=V);let C=r.trim();C&&(w.summary=C);let P=p.trim();P&&(w.gist=P);let X=Ki(g);X.length&&(w.tags=X);let K={raw:n,title:a,summary:r,gist:p,tags:g};L(!0);let R=await yi(w);if(L(!1),!R)return;o(T=>T===K.raw?"":T),s(T=>T===K.title?"":T),l(T=>T===K.summary?"":T),m(T=>T===K.gist?"":T),h(T=>T===K.tags?"":T);let b=B.current;b.raw===K.raw&&b.title===K.title&&b.summary===K.summary&&b.gist===K.gist&&b.tags===K.tags&&(c(!1),window.requestAnimationFrame(()=>{let T=O.current;T&&(T.style.height="auto",T.focus())}))},W=N=>{if((N.metaKey||N.ctrlKey)&&N.key==="Enter"){N.preventDefault(),E();return}N.key==="Escape"&&x&&(N.stopPropagation(),c(!1))};return e.default.createElement("section",{className:`ip-capture ${!I&&!x&&!n&&!a&&!r&&!p&&!g?"is-collapsed":""} ${I?"is-focused":""} ${i?"is-highlight":""}`,"aria-label":t("\u5F55\u5165\u7075\u611F")},e.default.createElement("div",{className:"ip-capture-main"},e.default.createElement("textarea",{ref:O,className:"ip-capture-input",rows:2,value:n,placeholder:t("\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60"),"aria-label":t("\u60F3\u6CD5\u539F\u6587"),onFocus:()=>M(!0),onBlur:()=>M(!1),onChange:N=>o(N.target.value),onKeyDown:W}),e.default.createElement("div",{className:"ip-capture-side"},e.default.createElement("button",{type:"button",className:`ip-capture-toggle ${x?"is-open":""}`,"aria-expanded":x,onClick:()=>c(N=>!N)},e.default.createElement(D,{name:"chevD",size:13}),e.default.createElement("span",null,t(x?"\u6536\u8D77\u9009\u9879":"\u66F4\u591A\u9009\u9879"))),e.default.createElement("span",{className:"ip-cmdhint"},t("\u2318/Ctrl+Enter \u4FDD\u5B58")),e.default.createElement(S,{variant:"primary",icon:"plus",onClick:E,disabled:u},u?t("\u4FDD\u5B58\u4E2D\u2026"):t("\u5165\u6C60")))),x?e.default.createElement("div",{className:"ip-capture-extra"},e.default.createElement(Y,{label:t("\u6807\u9898\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:a,onChange:N=>s(N.target.value),placeholder:t("\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57")})),e.default.createElement(Y,{label:t("\u4E00\u53E5\u8BDD\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:p,onChange:N=>m(N.target.value),placeholder:t("\u226460 \u5B57\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868"),maxLength:200})),e.default.createElement(Y,{label:t("\u6807\u7B7E\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:g,onChange:N=>h(N.target.value),placeholder:t("\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053")})),e.default.createElement("div",{className:"ip-span2"},e.default.createElement(Y,{label:t("\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("textarea",{rows:2,value:r,onChange:N=>l(N.target.value),placeholder:t("\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868")})))):null)}function St(){let i=v(p=>p.status),n=v(p=>p.counts),o=v(p=>p.total),a=v(p=>p.sortBy),[s,r]=e.default.useState(!1),l=e.default.useRef(null);return e.default.useEffect(()=>{if(!s)return;let p=g=>{(!l.current||!l.current.contains(g.target))&&r(!1)},m=g=>{g.key==="Escape"&&r(!1)};return document.addEventListener("pointerdown",p),document.addEventListener("keydown",m),()=>{document.removeEventListener("pointerdown",p),document.removeEventListener("keydown",m)}},[s]),e.default.createElement("nav",{className:"ip-tabs","aria-label":t("\u72B6\u6001\u7B5B\u9009")},mt.map(p=>{let m=p.key==="all"?n.all||o||0:n[p.key]||0;return e.default.createElement("button",{key:p.key,type:"button",className:`ip-tab ${i===p.key?"is-on":""}`,"aria-pressed":i===p.key,onClick:()=>je(p.key)},e.default.createElement("span",null,t(p.label)),e.default.createElement("span",{className:"ip-tab-count"},m))}),e.default.createElement("div",{className:"ip-sort",ref:l},e.default.createElement("button",{type:"button",className:"ip-sort-trigger","aria-haspopup":"menu","aria-expanded":s,onClick:()=>r(p=>!p)},e.default.createElement("span",null,t("\u6392\u5E8F")),e.default.createElement("strong",null,a==="updated"?t("\u6700\u8FD1\u66F4\u65B0"):t("\u6700\u8FD1\u521B\u5EFA")),e.default.createElement(D,{name:"chevD",size:12})),s?e.default.createElement("div",{className:"ip-sort-pop",role:"menu","aria-label":t("\u6392\u5E8F")},[{key:"created",label:t("\u6700\u8FD1\u521B\u5EFA")},{key:"updated",label:t("\u6700\u8FD1\u66F4\u65B0")}].map(p=>e.default.createElement("button",{key:p.key,type:"button",role:"menuitemradio","aria-checked":a===p.key,className:a===p.key?"is-on":"",onClick:()=>{bi(p.key),r(!1)}},e.default.createElement("span",null,p.label),a===p.key?e.default.createElement(D,{name:"check",size:13}):null))):null))}var Ui="\u5355\u5411\u5237\u65B0\uFF1A\u53EA\u628A\u4E91\u7AEF\u65B0\u5185\u5BB9\u5408\u5E76\u5230\u672C\u673A\uFF1B\u672C\u673A\u7684\u65B0\u5185\u5BB9\u4E0D\u4F1A\u56DE\u5199\u4E91\u7AEF\uFF0C\u4E0D\u662F\u53CC\u5411\u540C\u6B65\u3002";function Ct({onOpenSettings:i}){let n=v(x=>x.continuity),o=v(x=>x.continuityLoading),a=v(x=>x.continuityRefreshing),s=n&&n.drift,r=n&&n.cloud||{},l=n&&n.lastSync;if(!n||n.applicable===!1||!r.configured&&!l)return null;let p=vt(l),m="",g="cloud",h="";if(!r.configured)m="is-muted",g="alert",h=t("\u672C\u673A\u8D26\u672C \xB7 \u672A\u914D\u7F6E\u4E91\u7AEF Key\uFF0C\u6682\u4E0D\u6BD4\u8F83\u4E91\u7AEF\u5DEE\u5F02");else if(r.reachable===!1)m="is-offline",g="alert",h=t("\u672C\u673A\u8D26\u672C \xB7 \u4E91\u7AEF\u6682\u4E0D\u53EF\u8FBE\uFF1A{error}\uFF08\u672C\u673A\u529F\u80FD\u4E0D\u53D7\u5F71\u54CD\uFF09",{error:r.error||t("\u8FDE\u63A5\u5931\u8D25")});else if(r.reachable&&s&&s.behind)m="is-drift",g="cloud",h=[t("\u4E91\u7AEF\u6709\u65B0\u5185\u5BB9\uFF1A{detail}",{detail:$i(s)}),p?t("\u4E0A\u6B21\u5237\u65B0 {time}",{time:p}):t("\u4ECE\u672A\u5237\u65B0")].filter(Boolean).join(" \xB7 ");else if(r.reachable&&s)m="is-ok",g="check",h=[t("\u672C\u673A\u8D26\u672C\u4E0E\u4E91\u7AEF\u4E00\u81F4\uFF08\u4E91\u7AEF {n} \u6761\uFF09",{n:s.cloud_total}),p?t("\u4E0A\u6B21\u5237\u65B0 {time}",{time:p}):""].filter(Boolean).join(" \xB7 ");else return null;return e.default.createElement("div",{className:`ip-continuity ${m}`,title:t(Ui),role:"status"},e.default.createElement("span",{className:"ip-continuity-icon"},e.default.createElement(D,{name:g,size:13})),e.default.createElement("span",{className:"ip-continuity-text"},h),e.default.createElement("span",{className:"ip-continuity-spacer"}),m==="is-drift"?e.default.createElement(S,{size:"sm",variant:"primary",icon:"download",onClick:()=>Je(),disabled:a},a?t("\u5237\u65B0\u4E2D\u2026"):t("\u4ECE\u4E91\u7AEF\u5237\u65B0")):null,m==="is-offline"?e.default.createElement(S,{size:"sm",variant:"ghost",icon:"refresh",onClick:()=>oe({force:!0}),disabled:o},o?t("\u68C0\u67E5\u4E2D\u2026"):t("\u91CD\u8BD5")):null,m==="is-muted"?e.default.createElement(S,{size:"sm",variant:"ghost",icon:"settings",onClick:i},t("\u8BBE\u7F6E")):null)}function zt({idea:i,active:n,highlight:o,onClick:a}){let s=Array.isArray(i.tags)?i.tags:[];return e.default.createElement("button",{type:"button",className:`ip-card ${n?"is-on":""} ${o?"is-new":""}`,"aria-current":n?"true":void 0,onClick:a},e.default.createElement("div",{className:"ip-card-title"},fe(i)),i.gist||i.summary?e.default.createElement("div",{className:"ip-card-sum"},i.gist||i.summary):null,e.default.createElement("div",{className:"ip-card-foot"},e.default.createElement("span",{className:`ip-card-status is-${i.status}`},e.default.createElement("i",{"aria-hidden":"true"}),Se(i.status)),e.default.createElement("span",{className:"ip-card-no"},i.idea_no),e.default.createElement("time",{className:"ip-card-time",dateTime:i.updated_at||void 0,title:ge(i.updated_at)},Qe(i.updated_at)),s.slice(0,1).map(r=>e.default.createElement(Ye,{key:r},r)),s.length>1?e.default.createElement("span",{className:"ip-muted"},"+",s.length-1):null,i.n_updates||i.n_links?e.default.createElement("span",{className:"ip-card-meta"},i.n_updates?Ai(i.n_updates,"1 \u6761\u8FDB\u5C55","{n} \u6761\u8FDB\u5C55"):null,i.n_updates&&i.n_links?e.default.createElement("span",{className:"ip-sep"},"\xB7"):null,i.n_links?Ai(i.n_links,"1 \u4E2A\u4EA7\u51FA","{n} \u4E2A\u4EA7\u51FA"):null):null))}function Fi({idea:i}){let n=i.status==="active"&&se(i.updated_at)>14,o=i.status==="pool"?t("\u5165\u6C60 {n} \u5929",{n:se(i.created_at)}):n?t("{n} \u5929\u672A\u52A8",{n:se(i.updated_at)}):Qe(i.updated_at);return e.default.createElement("button",{type:"button",className:"ip-review-row",onClick:()=>de(i.idea_no)},e.default.createElement("i",{className:`ip-review-dot is-${i.status}`,"aria-hidden":"true"}),e.default.createElement("span",{className:"ip-review-main"},e.default.createElement("span",{className:"ip-review-title"},fe(i)),e.default.createElement("span",{className:"ip-review-sum"},bt(i))),e.default.createElement("span",{className:"ip-review-meta"},e.default.createElement("span",{className:n?"is-stale":""},o),i.n_updates?e.default.createElement("span",null,t("{n} \u8FDB\u5C55",{n:i.n_updates})):null))}function Ge({title:i,hint:n,items:o,action:a}){return o.length?e.default.createElement("section",{className:"ip-review-section"},e.default.createElement("div",{className:"ip-review-head"},e.default.createElement("h3",null,i),e.default.createElement("span",{className:"ip-review-count"},o.length),e.default.createElement("span",{className:"ip-review-hint"},n),a?e.default.createElement("span",{className:"ip-review-action"},a):null),e.default.createElement("div",{className:"ip-review-rows"},o.map(s=>e.default.createElement(Fi,{key:s.idea_no,idea:s})))):null}function _t(){let i=v(c=>c.ideas),n=v(c=>c.status),[o,a]=e.default.useState(!1);e.default.useEffect(()=>{(n==="done"||n==="parked")&&a(!0)},[n]);let s=i.filter(c=>c.status==="pool"),r=i.filter(c=>c.status==="active"),l=r.filter(c=>se(c.updated_at)>14).sort((c,u)=>se(u.updated_at)-se(c.updated_at)),p=r.filter(c=>se(c.updated_at)<=14).sort((c,u)=>String(u.updated_at||"").localeCompare(String(c.updated_at||""))),m=i.filter(c=>c.status==="done"||c.status==="parked"),g=i.filter(c=>c.status==="done").length,h=i.filter(c=>c.status==="parked").length,x=()=>{let c=s.length?s:l.length?l:p.length?p:i;if(!c.length)return;let u=c[Math.floor(Math.random()*c.length)];_(t("\u968F\u673A\u635E\u5230 {no}\uFF0C\u770B\u770B\u6709\u6CA1\u6709\u9057\u6F0F\u3002",{no:u.idea_no})),de(u.idea_no)};return e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-review"},e.default.createElement("div",{className:"ip-review-summary"},e.default.createElement("div",null,e.default.createElement("strong",null,t("{n} \u6761\u60F3\u6CD5",{n:i.length})),e.default.createElement("span",null,t("{n} \u5F85\u51B3\u5B9A",{n:s.length})," \xB7 ",t("{n} \u4E45\u672A\u63A8\u8FDB",{n:l.length})," \xB7 ",t("{n} \u6700\u8FD1\u63A8\u8FDB",{n:p.length}))),e.default.createElement(S,{size:"sm",variant:"ghost",icon:"spark",onClick:x,disabled:!i.length},t("\u968F\u673A\u635E\u4E00\u6761"))),e.default.createElement(Ge,{title:t("\u5F85\u51B3\u5B9A"),hint:t("\u8BB0\u4E0B\u6765\u8FD8\u6CA1\u5F00\u59CB\u7684\uFF0C\u5148\u635E\u4E00\u6761\u770B\u770B"),items:s,action:s.length?e.default.createElement(S,{size:"sm",variant:"ghost",onClick:x},t("\u968F\u673A\u4E00\u6761")):null}),e.default.createElement(Ge,{title:t("\u8BE5\u63A8\u8FDB\u4E86"),hint:t("\u8D85\u8FC7 14 \u5929\u6CA1\u52A8\uFF0C\u6700\u4E45\u672A\u52A8\u7684\u6392\u524D\u9762"),items:l}),e.default.createElement(Ge,{title:t("\u6B63\u5728\u63A8\u8FDB"),hint:t("\u6700\u8FD1 14 \u5929\u6709\u66F4\u65B0"),items:p}),m.length?e.default.createElement("section",{className:"ip-review-section is-archived"},e.default.createElement("button",{type:"button",className:"ip-review-head is-button","aria-expanded":o,onClick:()=>a(c=>!c)},e.default.createElement("h3",null,t("\u5DF2\u6536\u53E3 / \u6401\u7F6E")),e.default.createElement("span",{className:"ip-review-count"},m.length),e.default.createElement("span",{className:"ip-review-hint"},t("\u5DF2\u6536\u53E3 {done} \xB7 \u6401\u7F6E {parked}",{done:g,parked:h})),e.default.createElement("span",{className:"ip-review-action"},e.default.createElement(D,{name:o?"chevD":"chevR",size:13}))),o?e.default.createElement("div",{className:"ip-review-rows"},m.map(c=>e.default.createElement(Fi,{key:c.idea_no,idea:c}))):null):null))}function Lt({narrow:i}){let n=v(u=>u.ideas),o=v(u=>u.listLoading),a=v(u=>u.status),s=v(u=>u.query),r=v(u=>u.selectedNo),l=v(u=>u.mode),p=v(u=>u.sortBy),m=v(u=>u.view),g=v(u=>u.newIdeaNo),h=e.default.useRef(null),x=a!=="all"||!!s.trim(),c=e.default.useMemo(()=>{let u=p==="updated"?"updated_at":"created_at";return[...n].sort((L,I)=>{let M=typeof L[u]=="string"?L[u]:"",O=typeof I[u]=="string"?I[u]:"";return M!==O?M<O?1:-1:String(L.idea_no)<String(I.idea_no)?1:-1})},[n,p]);return e.default.useEffect(()=>{g&&h.current?.scrollTo({top:0,behavior:"smooth"})},[g]),o&&!n.length?e.default.createElement(ke,{label:t("\u6B63\u5728\u52A0\u8F7D\u2026")}):n.length?m==="review"?e.default.createElement(_t,null):e.default.createElement("div",{className:"ip-scroll",ref:h},e.default.createElement("div",{className:"ip-list"},c.map(u=>e.default.createElement(zt,{key:u.idea_no,idea:u,active:!i&&u.idea_no===r,highlight:u.idea_no===g,onClick:()=>de(u.idea_no)}))),o?e.default.createElement("div",{className:"ip-list-note"},t("\u6B63\u5728\u5237\u65B0\u2026")):null):e.default.createElement(Ve,{icon:"note",title:x?t("\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5"):t("\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684"),hint:x?t("\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002"):l==="cloud"?t("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002"):t("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002")},s.trim()?e.default.createElement(S,{size:"sm",onClick:()=>Le("")},t("\u6E05\u7A7A\u641C\u7D22")):a!=="all"?e.default.createElement(S,{size:"sm",onClick:()=>je("all")},t("\u663E\u793A\u5168\u90E8\u72B6\u6001")):e.default.createElement(S,{size:"sm",onClick:()=>document.querySelector(".ip-capture-input")?.focus()},t("\u5199\u7B2C\u4E00\u6761")))}function Tt({update:i}){let[n,o]=e.default.useState(!1),a=i.content||"",s=a.length>320;return e.default.createElement("li",{className:"ip-tl-item"},e.default.createElement("div",{className:"ip-tl-meta"},e.default.createElement("span",{className:"ip-tl-time"},ge(i.created_at)),i.source?e.default.createElement("span",{className:"ip-src",title:i.source},e.default.createElement(D,{name:"monitor",size:11}),Xe(i.source)):null),e.default.createElement("div",{className:`ip-tl-content ${s&&!n?"is-clamped":""}`},a),s?e.default.createElement("button",{type:"button",className:"ip-tl-toggle",onClick:()=>o(r=>!r)},n?t("\u6536\u8D77"):t("\u5C55\u5F00\u5168\u90E8")):null)}function Et({link:i}){let n=ft(i.url),o=/^https?:\/\//i.test(n);return e.default.createElement("li",null,e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(D,{name:"link",size:13})),e.default.createElement("a",{href:n,title:i.url,target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0},i.title||i.url),i.ref_type==="doc"?e.default.createElement("span",{className:"ip-link-kind"},t("\u6587\u6863")):null,o?e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(D,{name:"upRight",size:12})):null)}function Dt({no:i}){let[n,o]=e.default.useState(""),[a,s]=e.default.useState(!1),r=async l=>{l.preventDefault();let p=n.trim();if(!p){_(t("\u5148\u5199\u70B9\u5185\u5BB9"),{error:!0});return}let m=n;s(!0);let g=await ki(i,p);s(!1),g&&o(h=>h===m?"":h)};return e.default.createElement("form",{className:"ip-abox",onSubmit:r},e.default.createElement(Y,{label:t("\u65B0\u589E\u8FDB\u5C55")},e.default.createElement("textarea",{rows:3,value:n,placeholder:t("\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026"),onChange:l=>o(l.target.value),onKeyDown:l=>{(l.metaKey||l.ctrlKey)&&l.key==="Enter"&&r(l)}})),e.default.createElement("div",{className:"ip-abox-foot"},e.default.createElement("span",{className:"ip-muted"},t("\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(S,{size:"sm",variant:"primary",type:"submit",disabled:a},a?t("\u4FDD\u5B58\u4E2D\u2026"):t("\u8BB0\u5F55\u8FDB\u5C55"))))}function It({idea:i,onClose:n}){let[o,a]=e.default.useState(i.title||""),[s,r]=e.default.useState(i.summary||""),[l,p]=e.default.useState(i.gist||""),[m,g]=e.default.useState(i.raw_text||""),[h,x]=e.default.useState((i.tags||[]).join(", ")),[c,u]=e.default.useState(i.source_note||""),[L,I]=e.default.useState(!1),M=o!==(i.title||"")||s!==(i.summary||"")||l!==(i.gist||"")||m!==(i.raw_text||"")||h!==(i.tags||[]).join(", ")||c!==(i.source_note||""),O=()=>{M&&!window.confirm(t("\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F"))||n()},B=async E=>{E.preventDefault();let W=o.trim();if(!W){_(t("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}I(!0);let J=await ye(i.idea_no,{title:W,summary:s.trim(),gist:l.trim(),raw_text:m,tags:Ki(h),source_note:c.trim()},t("\u5DF2\u4FDD\u5B58"));I(!1),J&&n()};return e.default.createElement(we,{title:t("\u7F16\u8F91\u60F3\u6CD5"),onClose:O,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(S,{onClick:O},t("\u53D6\u6D88")),e.default.createElement(S,{variant:"primary",type:"submit",form:"ip-edit-form",disabled:L},L?t("\u4FDD\u5B58\u4E2D\u2026"):t("\u4FDD\u5B58")))},e.default.createElement("form",{id:"ip-edit-form",className:"ip-dialog-rows",onSubmit:B},e.default.createElement(Y,{label:t("\u6807\u9898")},e.default.createElement("input",{value:o,onChange:E=>a(E.target.value)})),e.default.createElement(Y,{label:t("\u4E00\u53E5\u8BDD\u6458\u8981")},e.default.createElement("input",{value:l,maxLength:200,onChange:E=>p(E.target.value),placeholder:t("\u226460 \u5B57\uFF0C\u65B9\u4FBF\u626B\u5217\u8868")})),e.default.createElement(Y,{label:t("\u8BE6\u7EC6\u6458\u8981")},e.default.createElement("textarea",{rows:2,value:s,onChange:E=>r(E.target.value)})),e.default.createElement(Y,{label:t("\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09")},e.default.createElement("textarea",{rows:6,value:m,onChange:E=>g(E.target.value)})),e.default.createElement(Y,{label:t("\u6807\u7B7E"),hint:t("\u9017\u53F7\u5206\u9694")},e.default.createElement("input",{value:h,onChange:E=>x(E.target.value)})),e.default.createElement(Y,{label:t("\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883")},e.default.createElement("input",{value:c,onChange:E=>u(E.target.value)}))))}function At({idea:i,onClose:n}){let[o,a]=e.default.useState(!1),s=async()=>{a(!0);let r=await wi(i.idea_no);a(!1),r&&n()};return e.default.createElement(we,{title:t("\u5220\u9664\u60F3\u6CD5"),onClose:n,width:420,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(S,{onClick:n},t("\u53D6\u6D88")),e.default.createElement(S,{variant:"danger-solid",onClick:s,disabled:o},o?t("\u5220\u9664\u4E2D\u2026"):t("\u786E\u8BA4\u5220\u9664")))},e.default.createElement("p",{className:"ip-dialog-note"},t("\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002",{title:fe(i),no:i.idea_no})))}function Mi(i){let n=String(i||"").match(/(?:^|\n)\s*(?:下一步|next step)[：:]\s*([^\n]+)/i);return n?n[1].trim():""}function Bt({idea:i,onClose:n}){let o=v(l=>l.device),[a,s]=e.default.useState({loading:!0,note:"",error:"",items:[]});e.default.useEffect(()=>{let l=me.sessions;if(!l){s({loading:!1,note:"",error:t("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u4F1A\u8BDD\u641C\u7D22\u3002"),items:[]});return}let p=()=>{let h=l.list&&typeof l.list.getSnapshot=="function"?l.list.getSnapshot():null,x=Array.isArray(h&&h.ids)?h.ids:[],c=h&&h.byId||{};return x.slice(0,30).map(u=>{let L=c[u]||{},I=String(L.title||L.name||u);return{sessionId:u,snippet:I}})},m=new AbortController;s({loading:!0,note:"",error:"",items:[]});let g=h=>{let x=p();x.length?s({loading:!1,note:h,error:"",items:x}):s({loading:!1,note:"",error:t("\u6CA1\u6709\u53EF\u7528\u7684\u4F1A\u8BDD\u5217\u8868\u3002"),items:[]})};if(typeof l.search!="function"){g(t("\u4F1A\u8BDD\u641C\u7D22\u4E0D\u53EF\u7528\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002"));return}return Promise.resolve(l.search(i.idea_no,m.signal)).then(h=>{if(m.signal.aborted)return;if(h&&h.ok===!1){g(t("\u4F1A\u8BDD\u641C\u7D22\u7D22\u5F15\u672A\u5F00\u542F\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\uFF1B\u4E5F\u53EF\u4EE5\u624B\u52A8\u6311\u9009\u3002"));return}let x=h&&h.ok?h.value:h,c=Array.isArray(x&&x.items)?x.items:[];if(!c.length){g(t("\u6CA1\u6709\u641C\u5230\u5305\u542B\u7F16\u53F7\u7684\u4F1A\u8BDD\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002"));return}s({loading:!1,note:"",error:"",items:c})}).catch(()=>{m.signal.aborted||g(t("\u4F1A\u8BDD\u641C\u7D22\u5931\u8D25\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002"))}),()=>m.abort()},[i.idea_no]);let r=async l=>{let p=Array.isArray(i.session_refs)?i.session_refs:[];if(p.some(h=>h.session_id===l.sessionId)){_(t("\u8FD9\u6761\u4F1A\u8BDD\u5DF2\u7ECF\u5173\u8054\u8FC7\u4E86"));return}let m=[...p,{session_id:l.sessionId,title:String(l.snippet||"").replace(/\s+/g," ").slice(0,120),device:o||"",bound_at:new Date().toISOString(),reason:"search"}];await ye(i.idea_no,{session_refs:m},t("\u5DF2\u5173\u8054\u4F1A\u8BDD"))&&n()};return e.default.createElement(we,{title:t("\u5173\u8054 DSH \u4F1A\u8BDD"),onClose:n,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(S,{onClick:n},t("\u5173\u95ED")))},e.default.createElement("p",{className:"ip-dialog-note"},t("\u6309\u7F16\u53F7\u300C{no}\u300D\u641C\u7D22\u5F53\u524D DSH \u7684\u4F1A\u8BDD\u5185\u5BB9\uFF1B\u70B9\u4E00\u6761\u5373\u53EF\u7ED1\u5B9A\u3002",{no:i.idea_no})),a.loading?e.default.createElement(ke,{label:t("\u6B63\u5728\u641C\u7D22\u4F1A\u8BDD\u2026")}):null,a.note?e.default.createElement("p",{className:"ip-dialog-note"},a.note):null,a.error?e.default.createElement("p",{className:"ip-dialog-note is-error"},a.error):null,!a.loading&&!a.error&&!a.items.length?e.default.createElement("p",{className:"ip-dialog-note"},t("\u6CA1\u6709\u641C\u5230\u5305\u542B\u8FD9\u4E2A\u7F16\u53F7\u7684\u4F1A\u8BDD\u3002\u53D1\u9001\u8FC7\u300C\u4E00\u952E\u63A8\u8FDB\u300D\u7684\u4F1A\u8BDD\u901A\u5E38\u80FD\u88AB\u641C\u5230\u3002")):null,e.default.createElement("div",{className:"ip-session-results"},a.items.map(l=>e.default.createElement("button",{key:l.sessionId,type:"button",className:"ip-session-result",onClick:()=>r(l)},e.default.createElement("span",{className:"ip-session-id"},String(l.sessionId).slice(0,18)),e.default.createElement("span",{className:"ip-session-snippet"},String(l.snippet||"").replace(/\s+/g," ").slice(0,180))))))}function Mt({narrow:i}){let n=v(d=>d.selectedNo),o=v(d=>d.query),a=v(d=>d.status),s=v(d=>d.ideas),r=v(d=>d.total),l=v(d=>d.detail),p=v(d=>d.detailLoading),m=v(d=>d.detailError),g=v(d=>d.mode),h=v(d=>d.device),[x,c]=e.default.useState(!1),[u,L]=e.default.useState(!1),[I,M]=e.default.useState(!1),[O,B]=e.default.useState(!1),[E,W]=e.default.useState(!1),[J,N]=e.default.useState(!1),[V,w]=e.default.useState(!1),[C,P]=e.default.useState(!1),[X,K]=e.default.useState(!1),R=e.default.useRef(null);if(e.default.useEffect(()=>{c(!1),L(!1),M(!1),B(!1),N(!1),w(!1),P(!1),K(!1)},[n]),e.default.useEffect(()=>{if(!C)return;let d=j=>{(!R.current||!R.current.contains(j.target))&&P(!1)},H=j=>{j.key==="Escape"&&P(!1)};return document.addEventListener("pointerdown",d),document.addEventListener("keydown",H),()=>{document.removeEventListener("pointerdown",d),document.removeEventListener("keydown",H)}},[C]),!n){let d=o.trim()!==""||a!=="all";return s.length===0||d&&r===0?e.default.createElement("div",{className:"ip-detail-pane"}):e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement(Ve,{icon:"note",title:d?t("\u627E\u5230 {n} \u6761\u60F3\u6CD5",{n:r}):t("\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5"),hint:d?t("\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002"):t("\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002")})))}if(m&&!l)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(D,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},t("\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},m),e.default.createElement(S,{icon:"refresh",onClick:()=>de(n)},t("\u91CD\u8BD5")))));if(!l)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement(ke,{label:t("\u6B63\u5728\u5C55\u5F00\u2026")}));let b=l.idea||{},T=Array.isArray(l.updates)?l.updates:[],he=Array.isArray(l.links)?l.links:[],ee=b.idea_no||n,Te=async d=>{E||d===b.status||(W(!0),await ye(ee,{status:d},t("\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D",{label:Se(d)})),W(!1))},q=T.length?T[T.length-1]:null,z=T.slice(0,-1).reverse(),A=!!b.summary||!!b.source_note||T.length>0,Q=e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u539F\u6587")),e.default.createElement("span",{className:"ip-section-count"},t("\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(te,{icon:"copy",size:13,label:t("\u590D\u5236\u539F\u6587"),onClick:()=>ce(b.raw_text||"",t("\u5DF2\u590D\u5236\u539F\u6587"))}),A?e.default.createElement(S,{size:"sm",variant:"ghost",onClick:()=>N(d=>!d)},J?t("\u6536\u8D77\u539F\u6587"):t("\u5C55\u5F00\u539F\u6587")):null),A&&!J?e.default.createElement("button",{type:"button",className:"ip-raw-fold",onClick:()=>N(!0)},e.default.createElement("span",null,t("\u539F\u6587\u9ED8\u8BA4\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00")),e.default.createElement("span",{className:"ip-muted"},t("\u9010\u5B57\u4FDD\u5B58"))):e.default.createElement("pre",{className:"ip-raw"},b.raw_text||t("\uFF08\u65E0\u539F\u6587\uFF09"))),Ce=b.status==="pool"&&T.length===0?t("\u590D\u5236\u5C55\u5F00\u63D0\u793A\u8BCD"):t("\u590D\u5236\u63A5\u529B\u63D0\u793A\u8BCD"),re=()=>ce(Bi(b),t("\u5DF2\u590D\u5236\u63D0\u793A\u8BCD\uFF0C\u53EF\u7C98\u8D34\u5230\u5BF9\u8BDD\u7EE7\u7EED")),le=g==="cloud"?t("\u5F53\u524D\u7075\u611F\u6C60=\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u56DE\u586B\u8BF7\u7528 idea_pool \u5DE5\u5177\uFF08\u8DDF\u968F\u4E91\u7AEF\u6A21\u5F0F\uFF09\u6216 ideas.py \u7684\u4E91\u7AEF\u540E\u7AEF\u3002"):t("\u5F53\u524D\u7075\u611F\u6C60=\u672C\u673A\u6A21\u5F0F\uFF1A\u56DE\u586B\u8BF7\u7528 idea_pool \u5DE5\u5177\uFF08\u8DDF\u968F\u672C\u673A\u6A21\u5F0F\uFF09\u6216\u672C\u673A /idea-pool/api/\uFF0C\u4E0D\u8981\u53EA\u5199\u4E91\u7AEF\u8D26\u672C\u3002"),ve=`${Bi(b)}

${le}
\uFF08\u672C\u6B21\u4ECE\u7075\u611F\u6C60 ${ee} \u4E00\u952E\u63A8\u8FDB\uFF1B\u5B8C\u6210\u540E\u56DE\u586B\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002\uFF09`,Ze=(d,H=0)=>{let j=me.sessions,ae=j&&j.list&&typeof j.list.getSnapshot=="function"?j.list.getSnapshot():null,Ee=Array.isArray(ae&&ae.ids)?ae.ids:[],ei=Ee.filter(xe=>!d.includes(xe)),ii=ei.length===1?ei[0]:Ee.length===1?Ee[0]:null;if(ii){let xe=ii,ti=ae.byId&&ae.byId[xe]||{},ni=Array.isArray(b.session_refs)?b.session_refs:[];if(ni.some(Yi=>Yi.session_id===xe))return;let Ji={session_id:xe,title:String(ti.title||ti.name||t("\u4E00\u952E\u63A8\u8FDB\u4F1A\u8BDD")).slice(0,200),device:h||"",bound_at:new Date().toISOString(),reason:"advance"};ye(ee,{session_refs:[...ni,Ji]},t("\u5DF2\u81EA\u52A8\u5173\u8054\u65B0\u4F1A\u8BDD"));return}H<9&&window.setTimeout(()=>Ze(d,H+1),400)},ji=()=>{let d=me.uiWorkspace;if(d&&typeof d.startSession=="function")try{let H=me.sessions,j=H&&H.list&&typeof H.list.getSnapshot=="function"?H.list.getSnapshot():null,ae=Array.isArray(j&&j.ids)?[...j.ids]:[];d.startSession(void 0,{prompt:ve,whenDraftExists:"append"}),_(t("\u5DF2\u6253\u5F00\u65B0\u4F1A\u8BDD\u5E76\u9884\u586B\u63A8\u8FDB\u63D0\u793A\u8BCD\uFF1B\u82E5\u53EA\u65B0\u589E\u4E86\u4E00\u4E2A\u4F1A\u8BDD\uFF0C\u4F1A\u81EA\u52A8\u5173\u8054\u3002")),window.setTimeout(()=>Ze(ae),600);return}catch{}ce(ve,t("\u5F53\u524D\u754C\u9762\u4E0D\u80FD\u76F4\u63A5\u5F00\u65B0\u4F1A\u8BDD\uFF0C\u5DF2\u590D\u5236\u63A8\u8FDB\u63D0\u793A\u8BCD"))},qi=d=>{let H=me.uiWorkspace;if(!H||typeof H.openSession!="function"){_(t("\u5F53\u524D\u73AF\u5883\u4E0D\u80FD\u6253\u5F00 DSH \u4F1A\u8BDD"),{error:!0});return}try{H.openSession(d.session_id)}catch(j){_(t("\u6253\u5F00\u4F1A\u8BDD\u5931\u8D25\uFF1A{error}",{error:j.message||j}),{error:!0})}},Re=g==="cloud",Wi=()=>{if(Re){ce(ht(b),t("\u5DF2\u590D\u5236\u94FE\u63A5"));return}ce(`\u7075\u611F\u6C60 ${ee}\u300A${fe(b)}\u300B\uFF08\u672C\u673A\u6A21\u5F0F\uFF1A\u7528 idea_pool \u5DE5\u5177\u6309\u7F16\u53F7\u8BFB\u53D6\uFF0C\u6216\u5728 DSH \u4FA7\u680F\u300C\u7075\u611F\u6C60\u300D\u67E5\u770B\uFF09`,t("\u5DF2\u590D\u5236\u5F15\u7528"))};return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-detail"},e.default.createElement("div",{className:"ip-detail-head"},i?e.default.createElement("div",{className:"ip-detail-back"},e.default.createElement(S,{size:"sm",variant:"ghost",icon:"chevL",onClick:qe},t("\u8FD4\u56DE\u5217\u8868"))):null,e.default.createElement("div",{className:"ip-detail-title-row"},e.default.createElement("h2",{className:"ip-detail-title"},fe(b)||ee),e.default.createElement(te,{icon:"edit",label:t("\u7F16\u8F91"),onClick:()=>c(!0)}),e.default.createElement(te,{icon:"trash",label:t("\u5220\u9664"),onClick:()=>L(!0)})),e.default.createElement("div",{className:"ip-detail-meta"},e.default.createElement(Ei,{status:b.status},Se(b.status)),e.default.createElement("span",{className:"ip-card-no"},ee),b.source?e.default.createElement("span",null,t("\u6765\u6E90\uFF1A{source}",{source:Xe(b.source)})):null,e.default.createElement("span",null,t("\u521B\u5EFA {time}",{time:ge(b.created_at)})),e.default.createElement("span",null,t("\u66F4\u65B0 {time}",{time:ge(b.updated_at)}))),Array.isArray(b.tags)&&b.tags.length?e.default.createElement("div",{className:"ip-detail-tags"},b.tags.map(d=>e.default.createElement(Ye,{key:d},d))):null,e.default.createElement("div",{className:"ip-detail-actions"},e.default.createElement(S,{size:"sm",variant:"primary",icon:"spark",onClick:ji},t("\u4E00\u952E\u63A8\u8FDB")),e.default.createElement(S,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>{M(!0),window.requestAnimationFrame(()=>document.querySelector(".ip-abox")?.scrollIntoView({block:"center"}))}},t("\u8BB0\u8FDB\u5C55")),e.default.createElement(S,{size:"sm",icon:"copy",onClick:re,title:t("\u590D\u5236\u540E\u7C98\u8D34\u7ED9 agent\uFF0C\u7EE7\u7EED\u5C55\u5F00\u6216\u63A5\u529B")},Ce),e.default.createElement(S,{size:"sm",icon:"link",onClick:Wi},t(Re?"\u590D\u5236\u94FE\u63A5":"\u590D\u5236\u5F15\u7528")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement("div",{className:"ip-status-menu",ref:R},e.default.createElement("button",{type:"button",className:"ip-status-trigger","aria-haspopup":"menu","aria-expanded":C,disabled:E,onClick:()=>P(d=>!d)},e.default.createElement("span",{className:"ip-status-label"},t("\u72B6\u6001")),e.default.createElement("i",{className:`ip-dot is-${b.status}`,"aria-hidden":"true"}),e.default.createElement("span",null,Se(b.status)),e.default.createElement(D,{name:"chevD",size:12})),C?e.default.createElement("div",{className:"ip-status-pop",role:"menu","aria-label":t("\u5207\u6362\u72B6\u6001")},Pi.map(d=>e.default.createElement("button",{key:d,type:"button",role:"menuitemradio","aria-checked":b.status===d,className:b.status===d?"is-on":"",disabled:E,onClick:()=>{P(!1),Te(d)}},e.default.createElement("i",{className:`ip-dot is-${d}`,"aria-hidden":"true"}),e.default.createElement("span",null,Se(d)),b.status===d?e.default.createElement(D,{name:"check",size:13}):null))):null))),e.default.createElement("div",{className:"ip-detail-body"},b.gist?e.default.createElement("div",{className:"ip-gist"},b.gist):null,A?null:Q,b.summary?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u6458\u8981"))),e.default.createElement("div",{className:"ip-summary"},b.summary)):null,b.source_note?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u5907\u6CE8"))),e.default.createElement("div",{className:"ip-text"},b.source_note)):null,q?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u6700\u65B0\u8FDB\u5C55")),e.default.createElement("span",{className:"ip-section-count"},ge(q.created_at)),e.default.createElement("span",{className:"ip-spacer"}),q.source?e.default.createElement("span",{className:"ip-src"},e.default.createElement(D,{name:"monitor",size:11}),Xe(q.source)):null),e.default.createElement("div",{className:"ip-latest"},Mi(q.content)?e.default.createElement("div",{className:"ip-next-step"},e.default.createElement("span",{className:"ip-next-step-label"},t("\u4E0B\u4E00\u6B65")),e.default.createElement("span",null,Mi(q.content))):null,e.default.createElement("div",{className:`ip-latest-content ${q.content&&q.content.length>300&&!V?"is-clamped":""}`},q.content),e.default.createElement("div",{className:"ip-latest-foot"},e.default.createElement("span",{className:"ip-muted"},t("\u4E0B\u4E00\u6B65\u4ECE\u8FD9\u91CC\u63A5\u7740\u63A8\u8FDB")),e.default.createElement("span",{className:"ip-spacer"}),q.content&&q.content.length>300?e.default.createElement(S,{size:"sm",variant:"ghost",onClick:()=>w(d=>!d)},V?t("\u6536\u8D77"):t("\u5C55\u5F00\u5168\u90E8")):null,e.default.createElement(S,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>M(!0)},t("\u8BB0\u8FDB\u5C55"))))):null,e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u5173\u8054\u4F1A\u8BDD")),e.default.createElement("span",{className:"ip-section-count"},(b.session_refs||[]).length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(S,{size:"sm",variant:"ghost",icon:"search",onClick:()=>K(!0)},t("\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD"))),(b.session_refs||[]).length?e.default.createElement("div",{className:"ip-session-chips"},b.session_refs.map(d=>e.default.createElement("button",{key:d.session_id,type:"button",className:"ip-session-chip",onClick:()=>qi(d),title:d.session_id},e.default.createElement(D,{name:"monitor",size:12}),e.default.createElement("span",null,d.title||String(d.session_id).slice(0,18)),d.device?e.default.createElement("span",{className:"ip-session-device"},d.device):null))):e.default.createElement("p",{className:"ip-muted"},t("\u8FD8\u6CA1\u6709\u5173\u8054\u4F1A\u8BDD\uFF1B\u4E00\u952E\u63A8\u8FDB\u540E\u53EF\u7528\u300C\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD\u300D\u7ED1\u5B9A\u3002"))),e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u5173\u8054\u4EA7\u51FA")),e.default.createElement("span",{className:"ip-section-count"},he.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(S,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>B(d=>!d)},t("\u52A0\u4EA7\u51FA"))),he.length?e.default.createElement("ul",{className:"ip-links"},he.map(d=>e.default.createElement(Et,{key:d.id||d.url,link:d}))):e.default.createElement("p",{className:"ip-muted"},t("\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002"))),e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},t("\u8FDB\u5C55\u5386\u53F2")),e.default.createElement("span",{className:"ip-section-count"},z.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(S,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>M(d=>!d)},t("\u52A0\u8FDB\u5C55"))),z.length?e.default.createElement("ul",{className:"ip-timeline"},z.map(d=>e.default.createElement(Tt,{key:d.id||d.created_at,update:d}))):e.default.createElement("p",{className:"ip-muted"},q?t("\u6CA1\u6709\u66F4\u65E9\u7684\u8FDB\u5C55\u3002"):t("\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002")),I?e.default.createElement(Dt,{no:ee}):null),A?Q:null))),x?e.default.createElement(It,{idea:b,onClose:()=>c(!1)}):null,u?e.default.createElement(At,{idea:b,onClose:()=>L(!1)}):null,X?e.default.createElement(Bt,{idea:b,onClose:()=>K(!1)}):null)}function Pt(){let i=v(h=>h.continuity),n=v(h=>h.continuityLoading),o=v(h=>h.continuityRefreshing),a=i&&i.cloud||{},s=i&&i.drift,r=i&&i.lastSync,l=!!a.configured,p=!i||i.applicable!==!1,m;!i&&n?m=t("\u68C0\u67E5\u4E2D\u2026"):p?l?a.reachable===!1?m=t("\u4E91\u7AEF\u6682\u4E0D\u53EF\u8FBE\uFF1A{error}",{error:a.error||t("\u8FDE\u63A5\u5931\u8D25")}):a.reachable?m=t("\u4E91\u7AEF\u53EF\u8FBE \xB7 \u5171 {n} \u6761",{n:s?s.cloud_total:0}):m=t("\u5C1A\u672A\u68C0\u67E5"):m=t("\u672A\u914D\u7F6E\u4E91\u7AEF Key"):m=t("\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF\uFF0C\u672C\u673A\u8D26\u672C\u4E0D\u53C2\u4E0E\u6BD4\u8F83");let g;return p?l?s?s.behind?g=t("\u843D\u540E\u4E91\u7AEF\uFF1A{detail}",{detail:$i(s)}):s.local_only_ideas?g=t("\u4E91\u7AEF\u6CA1\u6709\u65B0\u5185\u5BB9\uFF1B\u672C\u673A\u72EC\u6709 {n} \u6761\u60F3\u6CD5\u4F1A\u4FDD\u7559",{n:s.local_only_ideas}):g=t("\u4E0E\u4E91\u7AEF\u4E00\u81F4"):g=n?t("\u68C0\u67E5\u4E2D\u2026"):t("\u4E91\u7AEF\u5DEE\u5F02\u6682\u4E0D\u53EF\u7528"):g=t("\u672A\u914D\u7F6E Key\uFF0C\u65E0\u6CD5\u6BD4\u8F83\u4E91\u7AEF\u5DEE\u5F02\uFF1B\u672C\u673A\u529F\u80FD\u4E0D\u53D7\u5F71\u54CD"):g=t("\u5207\u6362\u56DE\u672C\u673A\u6A21\u5F0F\u540E\uFF0C\u53EF\u5728\u8FD9\u91CC\u6BD4\u8F83\u672C\u673A\u8D26\u672C\u4E0E\u4E91\u7AEF\u7684\u5DEE\u5F02"),e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u4E91\u7AEF\u72B6\u6001")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("p",{className:"ip-dialog-note"},m))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u4E0A\u6B21\u5237\u65B0")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("p",{className:"ip-dialog-note"},r?t("{time} \xB7 \u4E91\u7AEF {n} \u6761 \xB7 \u5F53\u65F6\u65B0\u589E {u} \u6761\u8FDB\u5C55 / {l} \u4E2A\u4EA7\u51FA",{time:ge(r.at),n:r.cloud_total,u:r.added_updates,l:r.added_links}):t("\u4ECE\u672A\u5237\u65B0\u8FC7")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u5DEE\u5F02")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("p",{className:"ip-dialog-note"},g))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u5237\u65B0")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(S,{size:"sm",icon:"download",onClick:()=>Je(),disabled:!p||!l||o,title:l?void 0:t("\u5148\u5728\u4E0A\u9762\u7684\u300C\u8FDE\u63A5\u914D\u7F6E\u300D\u91CC\u4FDD\u5B58 API Key\uFF0C\u518D\u5237\u65B0\u4E91\u7AEF\u5DEE\u5F02\u3002")},o?t("\u5237\u65B0\u4E2D\u2026"):t("\u4ECE\u4E91\u7AEF\u589E\u91CF\u5237\u65B0")),e.default.createElement(S,{size:"sm",variant:"ghost",icon:"refresh",onClick:()=>oe({force:!0}),disabled:n||!p},n?t("\u68C0\u67E5\u4E2D\u2026"):t("\u91CD\u65B0\u68C0\u67E5"))),e.default.createElement("p",{className:"ip-dialog-note"},t(Ui)))))}function Ne(i){return String(i||"").trim().replace(/\/+$/,"")}function Ot({onClose:i}){let n=v(z=>z.settings),o=v(z=>z.storagePath),a=v(z=>z.device),s=v(z=>z.mode),[r,l]=e.default.useState(s==="cloud"?"cloud":"local"),[p,m]=e.default.useState(a),[g,h]=e.default.useState(ue),[x,c]=e.default.useState(""),[u,L]=e.default.useState(!1),[I,M]=e.default.useState(!1),[O,B]=e.default.useState(!1),[E,W]=e.default.useState(!1),[J,N]=e.default.useState(null);e.default.useEffect(()=>{Ni()},[]);let V=e.default.useRef(!1);e.default.useEffect(()=>{if(!n||V.current)return;V.current=!0,l(n.mode==="cloud"?"cloud":"local"),typeof n.device=="string"&&m(n.device);let z=n.cloud&&typeof n.cloud.base=="string"?n.cloud.base:"";h(z||ue)},[n]);let w=n&&n.cloud||{},C=!!w.hasKey,P=typeof w.keyHint=="string"?w.keyHint:"",X=typeof w.base=="string"?w.base:"",K=Ne(g)||X||ue,R=Ne(g)!==Ne(X||ue)||x.trim()!=="",b=n&&typeof n.storagePath=="string"&&n.storagePath||o,T=z=>{l(z),N(null)},he=async()=>{if(I)return;let z=Ne(g);if(!z){_(t("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(z)){_(t("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}M(!0),N(null);let A=await Ci({base:z,apiKey:x.trim()});if(M(!1),A&&A.ok){N({ok:!0,text:t("\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms",{count:A.count,ms:A.latencyMs})});return}let Q=A&&Number(A.status);N({ok:!1,text:Q===401||Q===403?t("\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key"):t("\u8FDE\u63A5\u5931\u8D25\uFF1A{error}",{error:A&&A.error||t("\u672A\u77E5\u9519\u8BEF")})})},ee=async()=>{if(E||!C||typeof window>"u"||typeof window.confirm!="function"||!window.confirm(t("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002")))return;W(!0);let A=await zi();W(!1),A&&(c(""),N(null))},Te=async()=>{O||(B(!0),await _i(),B(!1))},q=async()=>{if(u)return;let z=r==="cloud"?"cloud":"local",A={};n?z!==n.mode&&(A.mode=z):z!==s&&(A.mode=z);let Q=p.trim();if(!Q){_(t("\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if((n?Q!==n.device:Q!==a)&&(A.device=Q),z==="cloud"){let re=Ne(g);if(!re){_(t("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(re)){_(t("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}let le={};re!==X&&(le.base=re);let ve=x.trim();ve&&(le.apiKey=ve),Object.keys(le).length&&(A.cloud=le)}if(Object.keys(A).length===0){i();return}L(!0);let Ce=await Si(A);L(!1),Ce&&i()};return e.default.createElement(we,{title:t("\u8BBE\u7F6E"),onClose:i,width:568,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(S,{onClick:i},t("\u5173\u95ED")),e.default.createElement(S,{variant:"primary",onClick:q,disabled:u},u?t("\u4FDD\u5B58\u4E2D\u2026"):t("\u4FDD\u5B58")))},e.default.createElement("div",{className:"ip-dialog-rows"},e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,t("\u6570\u636E\u4F4D\u7F6E")),e.default.createElement("p",null,t("\u5148\u9009\u6570\u636E\u5B58\u5728\u54EA\u91CC\uFF1B\u5207\u6362\u6A21\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u642C\u6570\u636E\u3002"))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u8FD0\u884C\u6A21\u5F0F")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":t("\u8FD0\u884C\u6A21\u5F0F")},e.default.createElement("button",{type:"button",className:r==="local"?"is-on":"","aria-pressed":r==="local",onClick:()=>T("local")},t("\u672C\u673A\u6A21\u5F0F")),e.default.createElement("button",{type:"button",className:r==="cloud"?"is-on":"","aria-pressed":r==="cloud",onClick:()=>T("cloud")},t("\u4E91\u7AEF\u6A21\u5F0F"))),e.default.createElement("p",{className:"ip-dialog-note"},r==="cloud"?t("\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002",{base:K}):t("\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002")))),r==="local"?e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u5B58\u50A8\u8DEF\u5F84")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("code",{className:"ip-dialog-code"},b||t("\u672A\u77E5")),e.default.createElement("p",{className:"ip-dialog-note"},t("\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002")))):null),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,t("\u8FDE\u63A5\u914D\u7F6E")),e.default.createElement("p",null,r==="cloud"?t("\u4E91\u7AEF\u5730\u5740\u4E0E API Key\uFF1B\u6D4B\u8BD5\u4F7F\u7528\u5F53\u524D\u586B\u5199\u7684\u503C\u3002"):t("\u672C\u673A\u6A21\u5F0F\u4E0D\u9700\u8981\u8FDE\u63A5\uFF1B\u5207\u5230\u4E91\u7AEF\u6A21\u5F0F\u540E\u518D\u586B\u5199\u5730\u5740\u4E0E Key\u3002"))),r==="cloud"?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u4E91\u7AEF\u5730\u5740")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:g,placeholder:ue,onChange:z=>{h(z.target.value),N(null)}})),e.default.createElement("p",{className:"ip-dialog-note"},t("\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002",{base:ue})))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("API Key")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",type:"password",autoComplete:"off",value:x,placeholder:C?t("\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}",{hint:P||"****"}):t("\u7C98\u8D34\u4E91\u7AEF API Key"),onChange:z=>{c(z.target.value),N(null)}}),C?e.default.createElement(S,{size:"sm",variant:"danger",onClick:ee,disabled:E||u},E?t("\u6E05\u9664\u4E2D\u2026"):t("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key")):null),e.default.createElement("p",{className:"ip-dialog-note"},C?t("\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002",{hint:P||"****"}):t("\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u6D4B\u8BD5\u8FDE\u63A5")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(S,{size:"sm",icon:"bolt",onClick:he,disabled:I},I?t("\u6D4B\u8BD5\u4E2D\u2026"):t("\u6D4B\u8BD5\u8FDE\u63A5")),J?e.default.createElement("span",{className:`ip-cloud-status ${J.ok?"is-ok":"is-error"}`},e.default.createElement(D,{name:J.ok?"check":"alert",size:12}),J.text):e.default.createElement("span",{className:"ip-cloud-status"},t("\u7528\u5F53\u524D\u586B\u5199\u914D\u7F6E\u8BD5\u62C9\u4E00\u6B21\uFF0C\u4E0D\u9700\u8981\u5148\u4FDD\u5B58")))))):e.default.createElement("p",{className:"ip-dialog-note"},t("\u5F53\u524D\u662F\u672C\u673A\u6A21\u5F0F\u3002"))),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,t("\u6570\u636E\u8FC1\u79FB")),e.default.createElement("p",null,t("\u5BFC\u5165\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\uFF1B\u4E0D\u4F1A\u5220\u9664\u672C\u673A\u73B0\u6709\u6570\u636E\u3002"))),r==="local"?e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u5BFC\u51FA")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(S,{icon:"download",onClick:()=>Li()},t("\u5BFC\u51FA JSON"))),e.default.createElement("p",{className:"ip-dialog-note"},t("\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002")))):null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u5BFC\u5165\u5230\u672C\u673A")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(S,{size:"sm",icon:"download",onClick:Te,disabled:O||!C||R,title:C?R?t("\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1B\u5148\u4FDD\u5B58\uFF0C\u518D\u5BFC\u5165\u3002"):void 0:t("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")},O?t("\u5BFC\u5165\u4E2D\u2026"):t("\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A"))),e.default.createElement("p",{className:"ip-dialog-note"},C?R?t("\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1A\u5148\u70B9\u300C\u4FDD\u5B58\u300D\uFF0C\u518D\u5BFC\u5165\uFF0C\u907F\u514D\u7528\u9519\u5730\u5740\u6216 Key\u3002"):t("\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002"):t("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002"))))),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,t("\u4E91\u7AEF\u8FDE\u7EED\u6027")),e.default.createElement("p",null,t("\u672C\u673A\u8D26\u672C\u4E0E\u4E91\u7AEF\u8D26\u672C\u7684\u5DEE\u5F02\uFF1B\u5237\u65B0\u662F\u5355\u5411\u7684\uFF0C\u53EA\u628A\u4E91\u7AEF\u65B0\u5185\u5BB9\u5E76\u8FDB\u672C\u673A\u3002"))),e.default.createElement(Pt,null)),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,t("\u9AD8\u7EA7")),e.default.createElement("p",null,t("\u8BBE\u5907\u6807\u8BC6\u4F1A\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002"))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},t("\u8BBE\u5907\u6807\u8BC6")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:p,placeholder:"dsh-mac / dsh-win / volcano",onChange:z=>m(z.target.value)})))))))}function Hi(){di();let i=v(w=>w.booted),n=v(w=>w.loading),o=v(w=>w.error),a=v(w=>w.canUndo),s=v(w=>w.mode),r=v(w=>w.ideas),l=v(w=>w.status),p=v(w=>w.query),m=v(w=>w.selectedNo),g=v(w=>w.total),h=v(w=>w.suppressAutoSelect),x=v(w=>w.view),c=e.default.useRef(null),u=e.default.useRef(null),[L,I]=e.default.useState(1200),[M,O]=e.default.useState(!1),B=L<880,E=L<640;e.default.useEffect(()=>{Fe()},[]),e.default.useEffect(()=>{let w=c.current;if(!w||typeof ResizeObserver>"u")return;let C=new ResizeObserver(([P])=>{P&&P.contentRect&&I(P.contentRect.width)});return C.observe(w),()=>C.disconnect()},[]),e.default.useEffect(()=>{!i||B||m||h||p.trim()||r.length&&de(r[0].idea_no)},[i,B,m,h,p,r]),e.default.useEffect(()=>{let w=C=>{let P=C.target,X=P&&P.tagName||"",K=/^(INPUT|TEXTAREA|SELECT)$/.test(X)||!!(P&&P.isContentEditable);if((C.metaKey||C.ctrlKey)&&!C.shiftKey&&(C.key==="z"||C.key==="Z")&&!K&&a){C.preventDefault(),We();return}if(C.key==="/"&&!K&&!C.metaKey&&!C.ctrlKey&&!C.altKey){C.preventDefault(),u.current?.focus();return}C.key==="Escape"&&B&&m&&qe()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[a,B,m]);let W=!B||!m,J=!B||!!m,N=B&&!!m,V=i&&!n&&!o&&r.length===0&&l==="all"&&!p.trim();return e.default.createElement("div",{className:`ip-root ${B?"is-narrow":""} ${E?"is-compact":""} ${N?"is-reading":""} ${x==="review"?"is-review":""}`,ref:c},e.default.createElement("style",null,ai),e.default.createElement(yt,{searchRef:u,onOpenSettings:()=>O(!0)}),N?null:e.default.createElement(Nt,{highlight:V}),i&&!N?e.default.createElement(St,null):null,i&&!N&&!o&&s==="local"?e.default.createElement(Ct,{onOpenSettings:()=>O(!0)}):null,e.default.createElement("div",{className:"ip-body"},n&&!i?e.default.createElement(ke,{label:t("\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026")}):o&&!i?e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(D,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},t("\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},o),e.default.createElement(S,{icon:"refresh",onClick:()=>vi()},t("\u91CD\u8BD5"))):e.default.createElement(e.default.Fragment,null,W?e.default.createElement("div",{className:"ip-list-pane"},e.default.createElement("div",{className:"ip-list-viewbar"},e.default.createElement("div",{className:"ip-view-switch",role:"group","aria-label":t("\u89C6\u56FE")},e.default.createElement("button",{type:"button",className:x==="list"?"is-on":"","aria-pressed":x==="list",onClick:()=>He("list")},t("\u5217\u8868")),e.default.createElement("button",{type:"button",className:x==="review"?"is-on":"","aria-pressed":x==="review",onClick:()=>He("review")},t("\u68B3\u7406"))),e.default.createElement("span",{className:"ip-list-count"},t("{n} \u6761",{n:g}))),e.default.createElement(Lt,{narrow:B})):null,J?e.default.createElement(Mt,{narrow:B}):null)),M?e.default.createElement(Ot,{onClose:()=>O(!1)}):null,e.default.createElement(Di,null))}var me={sessions:null,uiWorkspace:null};function Kt({size:i}){return e.default.createElement(D,{name:"bulb",size:i})}var $t=["slots","sessions","uiWorkspace"];function Ut(i){let n=o=>{try{return typeof i.get=="function"?i.get(o):i[o]}catch{return}};me={sessions:n("sessions")??i.sessions??null,uiWorkspace:n("uiWorkspace")??i.uiWorkspace??null},i.slots.inject("main",()=>i.slots.register({name:"main",key:Ii},Hi)),i.effect(()=>{let o=null,a=()=>{o?.(),o=i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:Ii,order:15,label:()=>t("\u7075\u611F\u6C60")},Kt))};a();let s=Ae(a);return()=>{s(),o?.()}},"dsh-idea-pool: sidebar entry")}
return module.exports}})
