window.__ModuleLoader__.load({id:"dsh-idea-pool",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var xi=Object.create;var oe=Object.defineProperty;var vi=Object.getOwnPropertyDescriptor;var bi=Object.getOwnPropertyNames;var yi=Object.getPrototypeOf,wi=Object.prototype.hasOwnProperty;var ki=(i,t)=>{for(var o in t)oe(i,o,{get:t[o],enumerable:!0})},Be=(i,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of bi(t))!wi.call(i,n)&&n!==o&&oe(i,n,{get:()=>t[n],enumerable:!(r=vi(t,n))||r.enumerable});return i};var re=(i,t,o)=>(o=i!=null?xi(yi(i)):{},Be(t||!i||!i.__esModule?oe(o,"default",{value:i,enumerable:!0}):o,i)),Ni=i=>Be(oe({},"__esModule",{value:!0}),i);var rt={};ki(rt,{App:()=>ci,apply:()=>ot,inject:()=>at});module.exports=Ni(rt);var e=re(require("react"),1);var Ie=`/* dsh-idea-pool \u5BA2\u6237\u7AEF\u6837\u5F0F\uFF1A\u989C\u8272\u53EA\u8D70 --dsw-alias-* \u8BED\u4E49 token\uFF08\u5E26 fallback\uFF09\uFF0C\u660E\u6697\u4E3B\u9898\u7531\u5BBF\u4E3B\u5207\u6362\u3002 */
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
`;var Ae=re(require("react"),1);var Pe={\u7075\u611F\u6C60:"Idea Pool",\u672C\u673A\u6A21\u5F0F:"Local mode",\u4E91\u7AEF\u6A21\u5F0F:"Cloud mode",\u641C\u7D22\u60F3\u6CD5:"Search ideas","\u641C\u7D22\u60F3\u6CD5\u2026":"Search ideas\u2026",\u6E05\u7A7A\u641C\u7D22:"Clear search",\u64A4\u9500\u4E0A\u4E00\u6B65:"Undo last step",\u5237\u65B0:"Refresh",\u8BBE\u7F6E:"Settings",\u5173\u95ED:"Close",\u91CD\u8BD5:"Retry",\u5F55\u5165\u7075\u611F:"Capture an idea",\u60F3\u6CD5\u539F\u6587:"Raw idea text","\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60":"Type whatever comes to mind. Enter for a new line, \u2318/Ctrl+Enter to add.","\u2318/Ctrl+Enter \u4FDD\u5B58":"\u2318/Ctrl+Enter to save",\u66F4\u591A\u9009\u9879:"More options",\u6536\u8D77\u9009\u9879:"Hide options",\u5165\u6C60:"Add","\u4FDD\u5B58\u4E2D\u2026":"Saving\u2026",\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60:"Write something first","\u6807\u9898\uFF08\u53EF\u9009\uFF09":"Title (optional)","\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57":"Leave empty to use the first 40 characters","\u6807\u7B7E\uFF08\u53EF\u9009\uFF09":"Tags (optional)","\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053":"Comma-separated, e.g. research, channels","\u6458\u8981\uFF08\u53EF\u9009\uFF09":"Summary (optional)","\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"One-line summary to scan later",\u72B6\u6001\u7B5B\u9009:"Filter by status",\u5168\u90E8:"All",\u5DF2\u5165\u6C60:"Pool",\u63A8\u8FDB\u4E2D:"In progress",\u5DF2\u6536\u53E3:"Done",\u6401\u7F6E:"Parked",\u5207\u6362\u72B6\u6001:"Change status","\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D":"Status changed to \u201C{label}\u201D","1 \u6761\u8FDB\u5C55":"1 update","{n} \u6761\u8FDB\u5C55":"{n} updates","1 \u4E2A\u4EA7\u51FA":"1 output","{n} \u4E2A\u4EA7\u51FA":"{n} outputs","\u6B63\u5728\u52A0\u8F7D\u2026":"Loading\u2026","\u6B63\u5728\u5237\u65B0\u2026":"Refreshing\u2026","\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026":"Loading the idea pool\u2026",\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25:"Failed to load the idea pool",\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684:"The idea pool is empty",\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5:"No matching ideas","\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002":"Try another keyword or status.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add. In local mode the data stays on this machine.",\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5:"Select an idea","\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002":"The list is on the left. On wide screens, click a card to read its raw text, progress and outputs.","\u6B63\u5728\u5C55\u5F00\u2026":"Loading\u2026",\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25:"Failed to load this idea",\u8FD4\u56DE\u5217\u8868:"Back to list",\u539F\u6587:"Raw text","\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB":"Verbatim \xB7 read-only",\u590D\u5236\u539F\u6587:"Copy raw text",\u5DF2\u590D\u5236\u539F\u6587:"Raw text copied",\u6458\u8981:"Summary",\u5907\u6CE8:"Note","\u6765\u6E90\uFF1A{source}":"Source: {source}","\u521B\u5EFA {time}":"Created {time}","\u66F4\u65B0 {time}":"Updated {time}",\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Copy expand prompt",\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Expand prompt copied",\u590D\u5236\u5F15\u7528:"Copy reference",\u5DF2\u590D\u5236\u5F15\u7528:"Reference copied",\u590D\u5236\u94FE\u63A5:"Copy link",\u5DF2\u590D\u5236\u94FE\u63A5:"Link copied",\u7F16\u8F91:"Edit",\u5220\u9664:"Delete",\u5173\u8054\u4EA7\u51FA:"Outputs",\u52A0\u4EA7\u51FA:"Add output","\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002":"No outputs yet \u2014 attach result links once there is progress.",\u4EA7\u51FA\u6807\u9898:"Output title","\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55":"e.g. research report / progress log",\u94FE\u63A5:"Link","\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934":"The link must start with http(s)://",\u5148\u586B\u94FE\u63A5:"Fill in a link first",\u4FDD\u5B58\u4EA7\u51FA:"Save output",\u8FDB\u5C55:"Progress",\u52A0\u8FDB\u5C55:"Add progress","\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002":"No progress entries yet.",\u65B0\u589E\u8FDB\u5C55:"New progress entry","\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026":"Log progress (conclusion / research status / next step)\u2026",\u5148\u5199\u70B9\u5185\u5BB9:"Write something first","\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B":"Entries are append-only; note the machine and next step for cross-machine handoff",\u8BB0\u5F55\u8FDB\u5C55:"Save progress",\u5C55\u5F00\u5168\u90E8:"Show all",\u6536\u8D77:"Collapse",\u6587\u6863:"Doc","\uFF08\u65E0\u539F\u6587\uFF09":"(no raw text)",\u7F16\u8F91\u60F3\u6CD5:"Edit idea",\u6807\u9898:"Title","\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09":"Raw text (keep verbatim)",\u6807\u7B7E:"Tags",\u9017\u53F7\u5206\u9694:"Comma-separated","\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883":"Note / context",\u53D6\u6D88:"Cancel",\u4FDD\u5B58:"Save",\u5DF2\u4FDD\u5B58:"Saved",\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A:"Title can\u2019t be empty",\u5220\u9664\u60F3\u6CD5:"Delete idea","\u5220\u9664\u4E2D\u2026":"Deleting\u2026",\u786E\u8BA4\u5220\u9664:"Delete","\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002":"Deleting \u201C{title}\u201D ({no}) also removes its progress and outputs.",\u5B58\u50A8\u8DEF\u5F84:"Storage path",\u672A\u77E5:"Unknown","\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002":"In local mode every idea lives in this one JSON file; deleting it clears the idea pool.",\u8FD0\u884C\u6A21\u5F0F:"Run mode","\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002":"Local mode: data lives under this machine\u2019s DSH_HOME/idea-pool/ and is read and written directly by the plugin, with no network. Other machines can\u2019t see it.","\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002":"Cloud mode: data lives in the cloud at {base}; local data stays untouched.",\u4E91\u7AEF\u5730\u5740:"Cloud base URL","\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002":"Base URL of the cloud ideas-api; defaults to {base}.",\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A:"Cloud base URL can\u2019t be empty","\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934":"Cloud base URL must start with http(s)://","API Key":"API Key","\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}":"Saved, last four: {hint}","\u7C98\u8D34\u4E91\u7AEF API Key":"Paste the cloud API key","\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002":"API key saved (last four: {hint}); leave empty to keep it.","\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002":"No API key configured yet \u2014 cloud reads and writes need one.","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key":"Clear saved key","\u6E05\u9664\u4E2D\u2026":"Clearing\u2026","\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key":"Saved API key cleared","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002":"Clear the saved API key? Cloud reads and writes will fail until you add it again.","\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002":"No saved API key yet, so importing is unavailable. Fill in a key and save it first.","\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key":"Connection failed: cloud authentication failed \u2014 check the API Key",\u6D4B\u8BD5\u8FDE\u63A5:"Test connection","\u6D4B\u8BD5\u4E2D\u2026":"Testing\u2026","\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5":"Ping the cloud health endpoint with the URL and key above","\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms":"Connected \xB7 {count} ideas in the cloud \xB7 {ms} ms","\u8FDE\u63A5\u5931\u8D25\uFF1A{error}":"Connection failed: {error}",\u672A\u77E5\u9519\u8BEF:"Unknown error",\u5BFC\u5165\u5230\u672C\u673A:"Import to local",\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A:"Import cloud \u2192 local","\u5BFC\u5165\u4E2D\u2026":"Importing\u2026","\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002":"Fetch everything with the saved cloud configuration and merge it locally by idea number. Does not switch mode or delete local data.","\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761":"Imported {imported} and updated {updated} ideas from the cloud",\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165:"The cloud has no new ideas to import",\u8BBE\u5907\u6807\u8BC6:"Device ID","\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"Written into the source field of ideas and progress entries so the origin can be located across machines.",\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A:"Device ID can\u2019t be empty",\u5BFC\u51FA:"Export","\u5BFC\u51FA JSON":"Export JSON","\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002":"Export all ideas, progress and outputs into a single JSON file for backup or migration.","\u5DF2\u5BFC\u51FA JSON":"JSON exported",\u521A\u521A:"just now","{n} \u5206\u949F\u524D":"{n} min ago",\u672C\u673A:"Local",\u706B\u5C71\u4E91:"Volcano Cloud",\u624B\u52A8:"Manual",\u7F51\u9875:"Web",\u98DE\u4E66:"Feishu",\u5DF2\u590D\u5236:"Copied","\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236":"Copy failed \u2014 select and copy manually","\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}":"Can\u2019t reach the local service: {error}","\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09":"Request failed ({status})","\u5DF2\u5165\u6C60 {no}":"Added {no}","\u5DF2\u5220\u9664 {no}":"Deleted {no}",\u5DF2\u8BB0\u5F55\u8FDB\u5C55:"Progress saved",\u5DF2\u6DFB\u52A0\u4EA7\u51FA:"Output added",\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65:"Undid the last step","\u5DF2\u64A4\u9500\uFF1A{label}":"Undone: {label}",\u5DF2\u5237\u65B0:"Refreshed",\u8BBE\u7F6E\u5DF2\u4FDD\u5B58:"Settings saved",\u6E05\u7A7A\u641C\u7D22\u4E0E\u7B5B\u9009:"Clear search and filters",\u5199\u7B2C\u4E00\u6761:"Write the first one",\u6CA1\u6709\u53EF\u663E\u793A\u7684\u8BE6\u60C5:"No detail to show","\u5148\u6E05\u7A7A\u641C\u7D22\u6216\u5207\u6362\u72B6\u6001\uFF0C\u518D\u9009\u4E00\u6761\u60F3\u6CD5\u3002":"Clear the search or filters, then pick an idea.","\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F":"You have unsaved changes. Close anyway?","\u627E\u5230 {n} \u6761\u60F3\u6CD5":"Found {n} ideas","\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002":"Pick one from the list to view it.",\u663E\u793A\u5168\u90E8\u72B6\u6001:"Show all statuses","\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58":"Reading mode \xB7 verbatim"};var ue=_e(),me=new Set;function _e(){return typeof document>"u"||(document.documentElement.lang||navigator.language||"zh").toLowerCase().startsWith("zh")?"zh":"en"}function Ci(){me.forEach(i=>{try{i()}catch(t){console.error("[idea-pool] lang listener failed",t)}})}typeof document<"u"&&typeof MutationObserver<"u"&&new MutationObserver(()=>{let i=_e();i!==ue&&(ue=i,Ci())}).observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function Ke(){return ue}function fe(i){return me.add(i),()=>me.delete(i)}function Oe(){return Ae.default.useSyncExternalStore(fe,Ke)}function a(i,t){let o=Ke()==="en"?Pe[i]??i:i;return t?o.replace(/\{(\w+)\}/g,(r,n)=>t[n]===void 0?r:String(t[n])):o}var Ue=re(require("react"),1);var zi="idea-pool/",Ei=500;function Ti(){return{all:0,pool:0,active:0,done:0,parked:0}}var N={booted:!1,loading:!0,error:null,mode:"local",device:"",storagePath:"",cloudBase:"",canUndo:!1,counts:Ti(),total:0,status:"all",query:"",ideas:[],listLoading:!1,selectedNo:null,newIdeaNo:null,suppressAutoSelect:!1,detail:null,detailLoading:!1,detailError:null,settings:null,settingsLoading:!1,toast:null},ve=new Set;function v(i){N={...N,...typeof i=="function"?i(N):i},ve.forEach(t=>{try{t()}catch(o){console.error("[idea-pool] store listener failed",o)}})}function Mi(i){return ve.add(i),()=>ve.delete(i)}function f(i){return Ue.default.useSyncExternalStore(Mi,()=>i(N))}var be=null,ge=null;function S(i,{error:t=!1,duration:o=0}={}){clearTimeout(be);let r=Date.now()+Math.random();v({toast:{id:r,text:i,error:t}}),be=setTimeout(()=>{N.toast&&N.toast.id===r&&v({toast:null})},o||(t?6e3:3200))}function Fe(){clearTimeout(be),v({toast:null})}function I(i){S(i&&i.message||String(i),{error:!0}),i&&Number(i.status)===409&&Promise.allSettled([G(),H(),Q()])}async function _(i,t){let o={credentials:"same-origin",...t||{}},r;try{r=await fetch(zi+i,o)}catch(s){throw new Error(a("\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}",{error:s&&s.message||String(s)}))}let n=null;try{n=await r.json()}catch{n=null}if(!r.ok||n&&n.ok===!1){let s=new Error(n&&n.error||a("\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09",{status:r.status}));throw s.status=r.status,s}return n||{}}function W(i,t){return{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(t??{})}}function O(i){let t=Number(i);return Number.isFinite(t)&&t>0?Math.floor(t):0}function je(i,t){let o=i&&typeof i=="object"?i:{},r={pool:O(o.pool),active:O(o.active),done:O(o.done),parked:O(o.parked)},n=r.pool+r.active+r.done+r.parked;return r.all=O(o.all)||O(o.total)||O(t)||n,r}function qe(i){if(!i||typeof i!="object")return;let t={mode:typeof i.mode=="string"?i.mode:N.mode,canUndo:!!i.canUndo,counts:je(i.counts,i.total),total:O(i.total)};typeof i.device=="string"&&(t.device=i.device),Object.hasOwn(i,"storagePath")&&(t.storagePath=typeof i.storagePath=="string"?i.storagePath:""),Object.hasOwn(i,"cloudBase")&&(t.cloudBase=typeof i.cloudBase=="string"?i.cloudBase:""),v(t)}async function G(){let i=await _("api/state");return qe(i),i}var he=0;async function H(){let i=++he,t=new URLSearchParams;N.status!=="all"&&t.set("status",N.status);let o=N.query.trim();o&&t.set("q",o),t.set("limit",String(Ei)),t.set("offset","0"),v({listLoading:!0});try{let r=await _("api/ideas?"+t.toString());if(i!==he)return;let n=Array.isArray(r.ideas)?r.ideas:[];v({ideas:n,listLoading:!1,counts:je(r.counts,r.total),total:O(r.total)||n.length,error:null})}catch(r){throw i===he&&v({listLoading:!1}),r}}var xe=0;async function ye(i){let t=++xe;v({detailLoading:!0,detailError:null});try{let o=await _("api/ideas/"+encodeURIComponent(i));return t!==xe||v({detail:o,detailLoading:!1,detailError:null}),o}catch(o){throw t===xe&&v({detailLoading:!1,detailError:o.message}),o}}async function Q(){let i=N.selectedNo;if(i)try{await ye(i)}catch{v({selectedNo:null,detail:null,detailError:null})}}async function Z({withDetail:i=!1}={}){let t=[G(),H()];i&&N.selectedNo&&t.push(ye(N.selectedNo)),await Promise.allSettled(t)}var X=null;function we(){return X?(N.booted&&Promise.allSettled([G(),H()]),X):(X=(async()=>{v({loading:!0,error:null});try{await Promise.all([G(),H()]),v({booted:!0,loading:!1})}catch(i){v({loading:!1,error:i.message})}})(),X)}function He(){return X=null,we()}async function Je({quiet:i=!1}={}){try{await Promise.all([G(),H()]),await Q(),v({booted:!0,loading:!1,error:null}),i||S(a("\u5DF2\u5237\u65B0"))}catch(t){I(t)}}var $e=null;function ke(i){N.status!==i&&(v({status:i,selectedNo:null,detail:null,detailError:null}),H().catch(I))}function ne(i){v({query:i,selectedNo:null,detail:null,detailError:null}),clearTimeout($e),$e=setTimeout(()=>{H().catch(I)},220)}function se(i){if(!i){v({selectedNo:null,detail:null,detailError:null});return}if(N.selectedNo===i&&N.detail)return;let t=N.selectedNo===i?N.detail:null;v({selectedNo:i,detail:t,detailLoading:!0,detailError:null}),ye(i).catch(I)}function Ne(){v({selectedNo:null,detail:null,detailError:null})}async function We(i){try{let t={...i};!t.source&&N.device&&(t.source=N.device);let r=(await _("api/ideas",W("POST",t))).idea||null;return await Z(),S(a("\u5DF2\u5165\u6C60 {no}",{no:r?r.idea_no:""}).trim()),r&&(clearTimeout(ge),v({newIdeaNo:r.idea_no}),ge=setTimeout(()=>{ge=null,N.newIdeaNo===r.idea_no&&v({newIdeaNo:null})},1100)),r}catch(t){return I(t),null}}async function Se(i,t,o){try{let r=await _("api/ideas/"+encodeURIComponent(i),W("PATCH",t));return await Z({withDetail:!0}),o&&S(o),r.idea||null}catch(r){return I(r),null}}async function Ye(i){let t=N.selectedNo===i;try{await _("api/ideas/"+encodeURIComponent(i),{method:"DELETE"}),t&&v({selectedNo:null,detail:null,detailError:null,suppressAutoSelect:!0});try{await Z()}finally{t&&v({suppressAutoSelect:!1})}return S(a("\u5DF2\u5220\u9664 {no}",{no:i})),!0}catch(o){return I(o),!1}}async function Ve(i,t){try{let o={content:t};return N.device&&(o.source=N.device),await _("api/ideas/"+encodeURIComponent(i)+"/updates",W("POST",o)),await Z({withDetail:!0}),S(a("\u5DF2\u8BB0\u5F55\u8FDB\u5C55")),!0}catch(o){return I(o),!1}}async function Ge(i,{title:t,url:o}){try{return await _("api/ideas/"+encodeURIComponent(i)+"/links",W("POST",{title:t,url:o})),await Z({withDetail:!0}),S(a("\u5DF2\u6DFB\u52A0\u4EA7\u51FA")),!0}catch(r){return I(r),!1}}async function Ce(){try{let i=await _("api/undo",W("POST",{}));i.state&&qe(i.state),await Promise.allSettled([H(),Q()]);let t=typeof i.label=="string"?i.label.trim():"";return S(t?a("\u5DF2\u64A4\u9500\uFF1A{label}",{label:t}):a("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")),!0}catch(i){return I(i),!1}}async function Xe(){v({settingsLoading:!0});try{let i=await _("api/settings");return v({settings:i.settings||null,settingsLoading:!1}),i.settings||null}catch(i){return v({settingsLoading:!1}),I(i),null}}async function Qe(i){try{let o=(await _("api/settings",W("POST",i))).settings||null,r=N.mode;v({settings:o}),o&&o.mode&&o.mode!==r&&v({ideas:[],selectedNo:null,detail:null,detailError:null,canUndo:!1}),S(a("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58"));try{await G(),await H(),await Q(),v({booted:!0,loading:!1,error:null})}catch(n){I(n)}return o}catch(t){return I(t),null}}async function Ze({base:i,apiKey:t}={}){let o={},r=typeof i=="string"?i.trim():"",n=typeof t=="string"?t.trim():"";r&&(o.base=r),n&&(o.apiKey=n);try{let s=await _("api/cloud/test",W("POST",o));return{ok:!0,base:typeof s.base=="string"?s.base:"",count:O(s.count),latencyMs:O(s.latencyMs)}}catch(s){return{ok:!1,error:s&&s.message||String(s),status:s&&Number.isInteger(s.status)?s.status:0}}}async function Re(){try{let i=await _("api/settings",W("POST",{cloud:{clearKey:!0}}));return v({settings:i.settings||N.settings}),S(a("\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key")),i.settings||null}catch(i){return I(i),null}}async function ei(){try{let i=await _("api/cloud/import-local",W("POST",{})),t=O(i.imported),o=O(i.updated),r=O(i.total);return S(t||o?a("\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761",{imported:t,updated:o}):a("\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165")),await Promise.allSettled([G(),H(),Q()]),{imported:t,updated:o,total:r}}catch(i){return I(i),null}}function Li(){let i=new Date,t=o=>String(o).padStart(2,"0");return`${i.getFullYear()}${t(i.getMonth()+1)}${t(i.getDate())}`}function Di(i,t){let o=new Blob([t],{type:"application/json;charset=utf-8"}),r=URL.createObjectURL(o),n=document.createElement("a");n.href=r,n.download=i,n.style.display="none",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function ii(){try{let i=await _("api/export"),t=i&&i.data?i.data:i;return Di(`idea-pool-${Li()}.json`,JSON.stringify(t,null,2)),S(a("\u5DF2\u5BFC\u51FA JSON")),!0}catch(i){return I(i),!1}}var g=re(require("react"),1);var Bi={bulb:"M12 3a6 6 0 0 1 3.5 10.9c-.9.6-1.5 1.5-1.5 2.5v.6h-4v-.6c0-1-.6-1.9-1.5-2.5A6 6 0 0 1 12 3zM10 20h4M12 7.5v3.5",note:"M6 4h8l4 4v12H6zM14 4v4h4M9 12h6M9 16h6",settings:"M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",undo:"M8 6L4 10l4 4M4 10h10a5 5 0 0 1 0 10h-3",refresh:"M19 8a8 8 0 0 0-14-1L4 9M5 16a8 8 0 0 0 14 1l1-2M4 4v5h5M20 20v-5h-5",search:"M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",close:"M6 6l12 12M18 6L6 18",check:"M5 12.5l4.5 4.5L19 7",chevD:"M6 9.5l6 6 6-6",chevL:"M14.5 5.5L8 12l6.5 6.5",chevR:"M9.5 5.5L16 12l-6.5 6.5",plus:"M12 5v14M5 12h14",edit:"M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",trash:"M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",copy:"M9 9h10v11H9zM5 15V4h10",link:"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",upRight:"M7 17L17 7M8 7h9v9",monitor:"M4 5h16v11H4zM9 20h6M12 16v4",clock:"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l2.5 1.5",download:"M12 4v11M7 11l5 5 5-5M5 20h14",alert:"M12 4l9 16H3zM12 10v4M12 17.5h.01",folder:"M4 7h6l2 2h10v10H4z",tag:"M4 5h8l8 8-6 6-8-8zM8 8.5h.01",spark:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",bolt:"M13 3L5 14h6l-1 7 8-11h-6z",cloud:"M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8.5z",dot:"M12 12h.01"};function P({name:i,size:t=16,stroke:o=1.6,className:r=""}){let n=Bi[i];return n?g.default.createElement("svg",{className:r,width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},g.default.createElement("path",{d:n})):null}function Y({icon:i,label:t,onClick:o,disabled:r,active:n,size:s=16,className:u="",...x}){return g.default.createElement("button",{type:"button",className:`ip-iconbtn ${n?"is-on":""} ${u}`,"aria-label":t,title:t,onClick:o,disabled:r,...x},g.default.createElement(P,{name:i,size:s}))}function C({variant:i="plain",size:t="md",icon:o,children:r,className:n="",title:s,...u}){return g.default.createElement("button",{type:"button",className:`ip-btn is-${i} is-${t} ${n}`,title:s,...u},o?g.default.createElement(P,{name:o,size:t==="sm"?13:15}):null,r?g.default.createElement("span",null,r):null)}function Ii({tone:i="neutral",children:t,title:o,className:r=""}){return g.default.createElement("span",{className:`ip-badge is-${i} ${r}`,title:o},t)}function ai({status:i,children:t}){return g.default.createElement(Ii,{tone:i==="pool"||i==="active"||i==="done"||i==="parked"?i:"neutral"},g.default.createElement("i",{className:"ip-dot","aria-hidden":"true"}),t)}function ze({children:i}){return g.default.createElement("span",{className:"ip-tag"},i)}function U({label:i,hint:t,children:o}){return g.default.createElement("label",{className:"ip-field"},g.default.createElement("span",{className:"ip-field-label"},i),o,t?g.default.createElement("small",{className:"ip-field-hint"},t):null)}function le({title:i,onClose:t,children:o,footer:r,width:n=460}){let s=g.default.useRef(null),u=g.default.useRef(t),x=g.default.useRef(null);return u.current=t,g.default.useEffect(()=>{x.current=document.activeElement;let h=()=>{let d=s.current;return d?[...d.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')].filter(E=>!E.disabled&&E.offsetParent!==null):[]},m=d=>{if(d.key==="Escape"){d.preventDefault(),d.stopPropagation(),u.current();return}if(d.key!=="Tab")return;let E=h();if(!E.length)return;let A=E[0],k=E[E.length-1];d.shiftKey&&document.activeElement===A?(d.preventDefault(),k.focus()):!d.shiftKey&&document.activeElement===k&&(d.preventDefault(),A.focus())};window.addEventListener("keydown",m,!0);let p=s.current,z=p&&(p.querySelector("textarea, input, select")||p.querySelector("button"));return z&&z.focus(),()=>{window.removeEventListener("keydown",m,!0);let d=x.current;d&&typeof d.focus=="function"&&d.isConnected&&d.focus()}},[]),g.default.createElement("div",{className:"ip-dialog-mask",onPointerDown:h=>{h.target===h.currentTarget&&t()}},g.default.createElement("div",{className:"ip-dialog",role:"dialog","aria-modal":"true","aria-label":i,style:{width:n},ref:s},g.default.createElement("div",{className:"ip-dialog-head"},g.default.createElement("h2",null,i),g.default.createElement(Y,{icon:"close",label:a("\u5173\u95ED"),onClick:t})),g.default.createElement("div",{className:"ip-dialog-body"},o),r?g.default.createElement("div",{className:"ip-dialog-foot"},r):null))}function oi(){let i=f(t=>t.toast);return i?g.default.createElement("div",{key:i.id,className:`ip-toast ${i.error?"is-error":""}`,role:i.error?"alert":"status"},g.default.createElement(P,{name:i.error?"alert":"check",size:14}),g.default.createElement("span",{className:"ip-toast-text"},i.text),g.default.createElement("button",{type:"button",className:"ip-toast-close","aria-label":a("\u5173\u95ED"),onClick:Fe},g.default.createElement(P,{name:"close",size:12}))):null}function Ee({icon:i="bulb",title:t,hint:o,children:r}){return g.default.createElement("div",{className:"ip-empty"},g.default.createElement("span",{className:"ip-empty-icon"},g.default.createElement(P,{name:i,size:26})),g.default.createElement("p",{className:"ip-empty-title"},t),o?g.default.createElement("p",{className:"ip-empty-hint"},o):null,r)}function pe({label:i}){return g.default.createElement("div",{className:"ip-loading",role:"status"},g.default.createElement("span",{className:"ip-spinner","aria-hidden":"true"}),g.default.createElement("span",null,i))}function ti(i){let t=document.createElement("textarea");t.value=i,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0",document.body.appendChild(t),t.select();try{document.execCommand("copy")}finally{t.remove()}}function R(i,t=a("\u5DF2\u590D\u5236")){let o=()=>S(t),r=()=>S(a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236"),{error:!0});try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(i).then(o,()=>{try{ti(i),o()}catch{r()}});return}ti(i),o()}catch{r()}}var ri="idea-pool",Pi="https://www.zhaoningyuan.com",ee="https://www.zhaoningyuan.com/ideas/api",si=["pool","active","done","parked"],li={pool:"\u5DF2\u5165\u6C60",active:"\u63A8\u8FDB\u4E2D",done:"\u5DF2\u6536\u53E3",parked:"\u6401\u7F6E"},Ai=[{key:"all",label:"\u5168\u90E8"},...si.map(i=>({key:i,label:li[i]}))],_i={mac:"Mac","dsh-mac":"Mac",win:"Windows","dsh-win":"Windows",dsh:"\u672C\u673A",volcano:"\u706B\u5C71\u4E91",manual:"\u624B\u52A8",web:"\u7F51\u9875",feishu:"\u98DE\u4E66"};function J(i){return String(i).padStart(2,"0")}function ce(i){if(!i)return"";let t=new Date(i);return Number.isNaN(t.getTime())?String(i):`${t.getFullYear()}-${J(t.getMonth()+1)}-${J(t.getDate())} ${J(t.getHours())}:${J(t.getMinutes())}`}function Ki(i){if(!i)return"";let t=new Date(i);if(Number.isNaN(t.getTime()))return String(i);let o=Date.now()-t.getTime();if(o>=0&&o<60*1e3)return a("\u521A\u521A");if(o>=0&&o<3600*1e3)return a("{n} \u5206\u949F\u524D",{n:Math.floor(o/6e4)});let r=new Date,n=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime();return t.getTime()>=n?`${J(t.getHours())}:${J(t.getMinutes())}`:t.getFullYear()===r.getFullYear()?`${J(t.getMonth()+1)}-${J(t.getDate())}`:`${t.getFullYear()}-${J(t.getMonth()+1)}-${J(t.getDate())}`}function pi(i){if(!i)return"";let t=String(i).toLowerCase();return a(_i[t]||String(i))}function de(i){return a(li[i]||i||"")}function Oi(i){let t=String(i||"").trim();return!t||/^(javascript|data|vbscript):/i.test(t)?"#":t}function $i(i){return`${Pi}/ideas/#${i.idea_no}`}function ie(i){return String(i&&i.title||"").replace(/\s+/g," ").trim()||i&&i.idea_no||""}function di(i){return String(i||"").split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function ni(i,t,o){return a(i===1?t:o,{n:i})}function Ui(i){let t=i.idea_no,o=ie(i);return"\u8BF7\u5C55\u5F00\u63A8\u8FDB\u7075\u611F\u6C60 "+t+"\u300A"+o+`\u300B\u3002

\u3010\u7EE7\u627F\u8FDB\u5EA6\xB7\u9632\u91CD\u590D\u3011\u5148\u8BFB\u60F3\u6CD5\u8BE6\u60C5\u2014\u2014\u539F\u6587\u3001\u6458\u8981\u3001\u5168\u90E8\u300C\u8FDB\u5C55\u300D\u4E0E\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 get \u52A8\u4F5C\uFF0C\u6216\u8BFB\u672C\u673A /idea-pool/api/ideas/`+t+`\uFF09\u3002
\uFF08\u300C\u8FDB\u5C55\u300D=\u63A5\u529B\u8D26\u672C\uFF1A\u4EE5\u6700\u65B0\u6761\u76EE\u4E3A\u51C6\u7EE7\u627F\uFF0C\u5DF2\u5B8C\u6210\u7684\u4E0D\u91CD\u505A\u2014\u2014\u5305\u62EC\u5176\u4ED6\u673A\u5668\u505A\u8FC7\u7684\uFF09
\u5982\u672C\u60F3\u6CD5\u66FE\u5728\u5176\u4ED6\u673A\u5668/\u4F1A\u8BDD\u63A8\u8FDB\u8FC7\uFF08\u4E0D\u786E\u5B9A\u5C31\u5148\u67E5\uFF09\uFF1A\u5F00\u5DE5\u524D\u5148\u505A\u8DE8\u673A\u67E5\u91CD\uFF08\u68C0\u7D22\u5404\u673A\u4F1A\u8BDD\u5E93\u3001\u5B9A\u65F6\u4EFB\u52A1\u4E0E\u6280\u80FD\uFF09\uFF0C\u5E76\u56DE\u586B\u4E00\u6761\u300C\u5F00\u5DE5\u5BF9\u9F50\u300D\u8FDB\u5C55\uFF08\u672C\u6B21\u8303\u56F4+\u4E0D\u91CD\u505A\u9879\uFF09\u3002
\u3010\u63A8\u8FDB\u8BB0\u5F55\u3011\u5148\u8BFB\u8BB0\u5F55\u6587\u6863\uFF08\u82E5\u6709\uFF09\u5E76\u5728\u5B8C\u6210\u540E\u8FFD\u52A0\u672C\u8F6E\u6761\u76EE\u3002
\u3010\u5148\u6F84\u6E05\u540E\u5F00\u5DE5\u3011\u7EE7\u627F\u68C0\u67E5\u4E4B\u540E\u3001\u52A8\u624B\u4E4B\u524D\uFF1A\u6309 brainstorming \u6F84\u6E05\u671F\u7EAA\u5F8B\u5411\u7528\u6237\u8FFD\u95EE 3~5 \u4E2A\u5173\u952E\u95EE\u9898\u2014\u2014\u53EA\u95EE\u4F1A\u6539\u53D8\u65B9\u5411\u3001\u53EA\u6709\u7528\u6237\u80FD\u7B54\u7684\uFF08\u80FD\u81EA\u67E5\u7684\u5148\u67E5\uFF09\uFF1B\u5C0F\u60F3\u6CD5\u53EF\u5C11\u95EE\uFF1B\u7528\u6237\u8BF4\u300C\u76F4\u63A5\u5C55\u5F00\u300D\u5219\u8DF3\u8FC7\u3002
\u5B8C\u6210\u540E\u56DE\u586B\u300C\u5DF2\u5B8C\u6210/\u672A\u5B8C\u6210/\u4E0B\u4E00\u6B65\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 progress \u52A8\u4F5C\uFF09\uFF1B\u4EA7\u51FA\u53D1\u5E03\u540E\u6302\u5230\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF0C\u7136\u540E\u5F00\u59CB\u7814\u7A76/\u63A8\u8FDB\u3002`}function Fi({searchRef:i,onOpenSettings:t}){let o=f(d=>d.mode),r=f(d=>d.device),n=f(d=>d.cloudBase),s=f(d=>d.canUndo),u=f(d=>d.query),[x,h]=e.default.useState(u);e.default.useEffect(()=>{h(u)},[u]);let m=o==="cloud",p=m?a("\u4E91\u7AEF\u6A21\u5F0F"):a("\u672C\u673A\u6A21\u5F0F"),z=m?n?`${p} \xB7 ${n}`:p:r?`${p} \xB7 ${r}`:p;return e.default.createElement("header",{className:"ip-topbar","data-window-drag":""},e.default.createElement("div",{className:"ip-brand"},e.default.createElement("span",{className:"ip-brand-mark"},e.default.createElement(P,{name:"bulb",size:17,stroke:1.7})),e.default.createElement("span",{className:"ip-title"},a("\u7075\u611F\u6C60")),e.default.createElement("span",{className:`ip-mode ${m?"is-cloud":""}`,title:z},e.default.createElement("i",{"aria-hidden":"true"}),p)),e.default.createElement("span",{className:"ip-topbar-spacer"}),e.default.createElement("div",{className:"ip-search"},e.default.createElement("span",{className:"ip-search-icon"},e.default.createElement(P,{name:"search",size:14})),e.default.createElement("input",{ref:i,type:"text",value:x,placeholder:a("\u641C\u7D22\u60F3\u6CD5\u2026"),"aria-label":a("\u641C\u7D22\u60F3\u6CD5"),onChange:d=>{h(d.target.value),ne(d.target.value)}}),x?e.default.createElement("span",{className:"ip-search-clear"},e.default.createElement(Y,{icon:"close",size:12,label:a("\u6E05\u7A7A\u641C\u7D22"),onClick:()=>{h(""),ne(""),i.current?.focus()}})):null),s&&!m?e.default.createElement(Y,{icon:"undo",label:a("\u64A4\u9500\u4E0A\u4E00\u6B65"),onClick:()=>Ce()}):null,e.default.createElement(Y,{icon:"refresh",label:a("\u5237\u65B0"),onClick:()=>Je()}),e.default.createElement(Y,{icon:"settings",label:a("\u8BBE\u7F6E"),onClick:t}))}var ji=208;function qi(i){i&&(i.style.height="auto",i.style.height=`${Math.min(i.scrollHeight,ji)}px`)}function Hi({highlight:i}){let[t,o]=e.default.useState(""),[r,n]=e.default.useState(""),[s,u]=e.default.useState(""),[x,h]=e.default.useState(""),[m,p]=e.default.useState(!1),[z,d]=e.default.useState(!1),[E,A]=e.default.useState(!1),k=e.default.useRef(null),F=e.default.useRef({raw:t,title:r,summary:s,tags:x});F.current={raw:t,title:r,summary:s,tags:x},e.default.useEffect(()=>{qi(k.current)},[t,m]);let T=async()=>{if(z)return;let b=t.trim(),l=r.trim();if(!b&&!l){S(a("\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60"),{error:!0}),k.current?.focus();return}let y={raw_text:b};l&&(y.title=l);let M=s.trim();M&&(y.summary=M);let K=di(x);K.length&&(y.tags=K);let D={raw:t,title:r,summary:s,tags:x};d(!0);let j=await We(y);if(d(!1),!j)return;o(L=>L===D.raw?"":L),n(L=>L===D.title?"":L),u(L=>L===D.summary?"":L),h(L=>L===D.tags?"":L);let q=F.current;q.raw===D.raw&&q.title===D.title&&q.summary===D.summary&&q.tags===D.tags&&(p(!1),window.requestAnimationFrame(()=>{let L=k.current;L&&(L.style.height="auto",L.focus())}))},$=b=>{if((b.metaKey||b.ctrlKey)&&b.key==="Enter"){b.preventDefault(),T();return}b.key==="Escape"&&m&&(b.stopPropagation(),p(!1))};return e.default.createElement("section",{className:`ip-capture ${E?"is-focused":""} ${i?"is-highlight":""}`,"aria-label":a("\u5F55\u5165\u7075\u611F")},e.default.createElement("div",{className:"ip-capture-main"},e.default.createElement("textarea",{ref:k,className:"ip-capture-input",rows:2,value:t,placeholder:a("\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60"),"aria-label":a("\u60F3\u6CD5\u539F\u6587"),onFocus:()=>A(!0),onBlur:()=>A(!1),onChange:b=>o(b.target.value),onKeyDown:$}),e.default.createElement("div",{className:"ip-capture-side"},e.default.createElement("button",{type:"button",className:`ip-capture-toggle ${m?"is-open":""}`,"aria-expanded":m,onClick:()=>p(b=>!b)},e.default.createElement(P,{name:"chevD",size:13}),e.default.createElement("span",null,a(m?"\u6536\u8D77\u9009\u9879":"\u66F4\u591A\u9009\u9879"))),e.default.createElement("span",{className:"ip-cmdhint"},a("\u2318/Ctrl+Enter \u4FDD\u5B58")),e.default.createElement(C,{variant:"primary",icon:"plus",onClick:T,disabled:z},z?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u5165\u6C60")))),m?e.default.createElement("div",{className:"ip-capture-extra"},e.default.createElement(U,{label:a("\u6807\u9898\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:r,onChange:b=>n(b.target.value),placeholder:a("\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57")})),e.default.createElement(U,{label:a("\u6807\u7B7E\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:x,onChange:b=>h(b.target.value),placeholder:a("\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053")})),e.default.createElement("div",{className:"ip-span2"},e.default.createElement(U,{label:a("\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("textarea",{rows:2,value:s,onChange:b=>u(b.target.value),placeholder:a("\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868")})))):null)}function Ji(){let i=f(r=>r.status),t=f(r=>r.counts),o=f(r=>r.total);return e.default.createElement("nav",{className:"ip-tabs","aria-label":a("\u72B6\u6001\u7B5B\u9009")},Ai.map(r=>{let n=r.key==="all"?t.all||o||0:t[r.key]||0;return e.default.createElement("button",{key:r.key,type:"button",className:`ip-tab ${i===r.key?"is-on":""}`,"aria-pressed":i===r.key,onClick:()=>ke(r.key)},e.default.createElement("span",null,a(r.label)),e.default.createElement("span",{className:"ip-tab-count"},n))}))}function Wi({idea:i,active:t,highlight:o,onClick:r}){let n=Array.isArray(i.tags)?i.tags:[];return e.default.createElement("button",{type:"button",className:`ip-card ${t?"is-on":""} ${o?"is-new":""}`,"aria-current":t?"true":void 0,onClick:r},e.default.createElement("div",{className:"ip-card-title"},ie(i)),i.summary?e.default.createElement("div",{className:"ip-card-sum"},i.summary):null,e.default.createElement("div",{className:"ip-card-foot"},e.default.createElement("span",{className:`ip-card-status is-${i.status}`},e.default.createElement("i",{"aria-hidden":"true"}),de(i.status)),e.default.createElement("span",{className:"ip-card-no"},i.idea_no),e.default.createElement("time",{className:"ip-card-time",dateTime:i.updated_at||void 0,title:ce(i.updated_at)},Ki(i.updated_at)),n.slice(0,1).map(s=>e.default.createElement(ze,{key:s},s)),n.length>1?e.default.createElement("span",{className:"ip-muted"},"+",n.length-1):null,i.n_updates||i.n_links?e.default.createElement("span",{className:"ip-card-meta"},i.n_updates?ni(i.n_updates,"1 \u6761\u8FDB\u5C55","{n} \u6761\u8FDB\u5C55"):null,i.n_updates&&i.n_links?e.default.createElement("span",{className:"ip-sep"},"\xB7"):null,i.n_links?ni(i.n_links,"1 \u4E2A\u4EA7\u51FA","{n} \u4E2A\u4EA7\u51FA"):null):null))}function Yi({narrow:i}){let t=f(p=>p.ideas),o=f(p=>p.listLoading),r=f(p=>p.status),n=f(p=>p.query),s=f(p=>p.selectedNo),u=f(p=>p.mode),x=f(p=>p.newIdeaNo),h=e.default.useRef(null),m=r!=="all"||!!n.trim();return e.default.useEffect(()=>{x&&h.current?.scrollTo({top:0,behavior:"smooth"})},[x]),o&&!t.length?e.default.createElement(pe,{label:a("\u6B63\u5728\u52A0\u8F7D\u2026")}):t.length?e.default.createElement("div",{className:"ip-scroll",ref:h},e.default.createElement("div",{className:"ip-list"},t.map(p=>e.default.createElement(Wi,{key:p.idea_no,idea:p,active:!i&&p.idea_no===s,highlight:p.idea_no===x,onClick:()=>se(p.idea_no)}))),o?e.default.createElement("div",{className:"ip-list-note"},a("\u6B63\u5728\u5237\u65B0\u2026")):null):e.default.createElement(Ee,{icon:"note",title:m?a("\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5"):a("\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684"),hint:m?a("\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002"):u==="cloud"?a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002"):a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002")},n.trim()?e.default.createElement(C,{size:"sm",onClick:()=>ne("")},a("\u6E05\u7A7A\u641C\u7D22")):r!=="all"?e.default.createElement(C,{size:"sm",onClick:()=>ke("all")},a("\u663E\u793A\u5168\u90E8\u72B6\u6001")):e.default.createElement(C,{size:"sm",onClick:()=>document.querySelector(".ip-capture-input")?.focus()},a("\u5199\u7B2C\u4E00\u6761")))}function Vi({update:i}){let[t,o]=e.default.useState(!1),r=i.content||"",n=r.length>320;return e.default.createElement("li",{className:"ip-tl-item"},e.default.createElement("div",{className:"ip-tl-meta"},e.default.createElement("span",{className:"ip-tl-time"},ce(i.created_at)),i.source?e.default.createElement("span",{className:"ip-src",title:i.source},e.default.createElement(P,{name:"monitor",size:11}),pi(i.source)):null),e.default.createElement("div",{className:`ip-tl-content ${n&&!t?"is-clamped":""}`},r),n?e.default.createElement("button",{type:"button",className:"ip-tl-toggle",onClick:()=>o(s=>!s)},t?a("\u6536\u8D77"):a("\u5C55\u5F00\u5168\u90E8")):null)}function Gi({link:i}){let t=Oi(i.url),o=/^https?:\/\//i.test(t);return e.default.createElement("li",null,e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(P,{name:"link",size:13})),e.default.createElement("a",{href:t,title:i.url,target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0},i.title||i.url),i.ref_type==="doc"?e.default.createElement("span",{className:"ip-link-kind"},a("\u6587\u6863")):null,o?e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(P,{name:"upRight",size:12})):null)}function Xi({no:i}){let[t,o]=e.default.useState(""),[r,n]=e.default.useState(!1),s=async u=>{u.preventDefault();let x=t.trim();if(!x){S(a("\u5148\u5199\u70B9\u5185\u5BB9"),{error:!0});return}let h=t;n(!0);let m=await Ve(i,x);n(!1),m&&o(p=>p===h?"":p)};return e.default.createElement("form",{className:"ip-abox",onSubmit:s},e.default.createElement(U,{label:a("\u65B0\u589E\u8FDB\u5C55")},e.default.createElement("textarea",{rows:3,value:t,placeholder:a("\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026"),onChange:u=>o(u.target.value),onKeyDown:u=>{(u.metaKey||u.ctrlKey)&&u.key==="Enter"&&s(u)}})),e.default.createElement("div",{className:"ip-abox-foot"},e.default.createElement("span",{className:"ip-muted"},a("\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"primary",type:"submit",disabled:r},r?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u8BB0\u5F55\u8FDB\u5C55"))))}function Qi({no:i}){let[t,o]=e.default.useState(""),[r,n]=e.default.useState(""),[s,u]=e.default.useState(!1);return e.default.createElement("form",{className:"ip-abox",onSubmit:async h=>{h.preventDefault();let m=r.trim();if(!m){S(a("\u5148\u586B\u94FE\u63A5"),{error:!0});return}if(!/^https?:\/\//i.test(m)&&/^[\w-]+(\.[\w-]+)+/.test(m)&&(m=`https://${m}`),!/^https?:\/\//i.test(m)){S(a("\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}let p={title:t,url:r};u(!0);let z=await Ge(i,{title:t.trim()||m,url:m});u(!1),z&&(o(d=>d===p.title?"":d),n(d=>d===p.url?"":d))}},e.default.createElement(U,{label:a("\u4EA7\u51FA\u6807\u9898")},e.default.createElement("input",{value:t,placeholder:a("\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55"),onChange:h=>o(h.target.value)})),e.default.createElement(U,{label:a("\u94FE\u63A5")},e.default.createElement("input",{value:r,placeholder:"https://\u2026",onChange:h=>n(h.target.value)})),e.default.createElement("div",{className:"ip-abox-foot"},e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"primary",type:"submit",disabled:s},s?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58\u4EA7\u51FA"))))}function Zi({idea:i,onClose:t}){let[o,r]=e.default.useState(i.title||""),[n,s]=e.default.useState(i.summary||""),[u,x]=e.default.useState(i.raw_text||""),[h,m]=e.default.useState((i.tags||[]).join(", ")),[p,z]=e.default.useState(i.source_note||""),[d,E]=e.default.useState(!1),A=o!==(i.title||"")||n!==(i.summary||"")||u!==(i.raw_text||"")||h!==(i.tags||[]).join(", ")||p!==(i.source_note||""),k=()=>{A&&!window.confirm(a("\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F"))||t()},F=async T=>{T.preventDefault();let $=o.trim();if(!$){S(a("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}E(!0);let b=await Se(i.idea_no,{title:$,summary:n.trim(),raw_text:u,tags:di(h),source_note:p.trim()},a("\u5DF2\u4FDD\u5B58"));E(!1),b&&t()};return e.default.createElement(le,{title:a("\u7F16\u8F91\u60F3\u6CD5"),onClose:k,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{onClick:k},a("\u53D6\u6D88")),e.default.createElement(C,{variant:"primary",type:"submit",form:"ip-edit-form",disabled:d},d?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},e.default.createElement("form",{id:"ip-edit-form",className:"ip-dialog-rows",onSubmit:F},e.default.createElement(U,{label:a("\u6807\u9898")},e.default.createElement("input",{value:o,onChange:T=>r(T.target.value)})),e.default.createElement(U,{label:a("\u6458\u8981")},e.default.createElement("textarea",{rows:2,value:n,onChange:T=>s(T.target.value)})),e.default.createElement(U,{label:a("\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09")},e.default.createElement("textarea",{rows:6,value:u,onChange:T=>x(T.target.value)})),e.default.createElement(U,{label:a("\u6807\u7B7E"),hint:a("\u9017\u53F7\u5206\u9694")},e.default.createElement("input",{value:h,onChange:T=>m(T.target.value)})),e.default.createElement(U,{label:a("\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883")},e.default.createElement("input",{value:p,onChange:T=>z(T.target.value)}))))}function Ri({idea:i,onClose:t}){let[o,r]=e.default.useState(!1),n=async()=>{r(!0);let s=await Ye(i.idea_no);r(!1),s&&t()};return e.default.createElement(le,{title:a("\u5220\u9664\u60F3\u6CD5"),onClose:t,width:420,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{onClick:t},a("\u53D6\u6D88")),e.default.createElement(C,{variant:"danger-solid",onClick:n,disabled:o},o?a("\u5220\u9664\u4E2D\u2026"):a("\u786E\u8BA4\u5220\u9664")))},e.default.createElement("p",{className:"ip-dialog-note"},a("\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002",{title:ie(i),no:i.idea_no})))}function et({narrow:i}){let t=f(c=>c.selectedNo),o=f(c=>c.query),r=f(c=>c.status),n=f(c=>c.ideas),s=f(c=>c.total),u=f(c=>c.detail),x=f(c=>c.detailLoading),h=f(c=>c.detailError),m=f(c=>c.mode),[p,z]=e.default.useState(!1),[d,E]=e.default.useState(!1),[A,k]=e.default.useState(!1),[F,T]=e.default.useState(!1),[$,b]=e.default.useState(!1);if(e.default.useEffect(()=>{z(!1),E(!1),k(!1),T(!1)},[t]),!t){let c=o.trim()!==""||r!=="all";return n.length===0||c&&s===0?e.default.createElement("div",{className:"ip-detail-pane"}):e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement(Ee,{icon:"note",title:c?a("\u627E\u5230 {n} \u6761\u60F3\u6CD5",{n:s}):a("\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5"),hint:c?a("\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002"):a("\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002")})))}if(h&&!u)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(P,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},a("\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},h),e.default.createElement(C,{icon:"refresh",onClick:()=>se(t)},a("\u91CD\u8BD5")))));if(!u)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement(pe,{label:a("\u6B63\u5728\u5C55\u5F00\u2026")}));let l=u.idea||{},y=Array.isArray(u.updates)?u.updates:[],M=Array.isArray(u.links)?u.links:[],K=l.idea_no||t,D=async c=>{$||c===l.status||(b(!0),await Se(K,{status:c},a("\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D",{label:de(c)})),b(!1))},j=()=>R(Ui(l),a("\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4")),q=m==="cloud",L=()=>{if(q){R($i(l),a("\u5DF2\u590D\u5236\u94FE\u63A5"));return}R(`\u7075\u611F\u6C60 ${K}\u300A${ie(l)}\u300B\uFF08\u672C\u673A\u6A21\u5F0F\uFF1A\u7528 idea_pool \u5DE5\u5177\u6309\u7F16\u53F7\u8BFB\u53D6\uFF0C\u6216\u5728 DSH \u4FA7\u680F\u300C\u7075\u611F\u6C60\u300D\u67E5\u770B\uFF09`,a("\u5DF2\u590D\u5236\u5F15\u7528"))};return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-detail"},e.default.createElement("div",{className:"ip-detail-head"},i?e.default.createElement("div",{className:"ip-detail-back"},e.default.createElement(C,{size:"sm",variant:"ghost",icon:"chevL",onClick:Ne},a("\u8FD4\u56DE\u5217\u8868"))):null,e.default.createElement("div",{className:"ip-detail-title-row"},e.default.createElement("h2",{className:"ip-detail-title"},ie(l)||K),e.default.createElement(Y,{icon:"edit",label:a("\u7F16\u8F91"),onClick:()=>z(!0)}),e.default.createElement(Y,{icon:"trash",label:a("\u5220\u9664"),onClick:()=>E(!0)})),e.default.createElement("div",{className:"ip-detail-meta"},e.default.createElement(ai,{status:l.status},de(l.status)),e.default.createElement("span",{className:"ip-card-no"},K),l.source?e.default.createElement("span",null,a("\u6765\u6E90\uFF1A{source}",{source:pi(l.source)})):null,e.default.createElement("span",null,a("\u521B\u5EFA {time}",{time:ce(l.created_at)})),e.default.createElement("span",null,a("\u66F4\u65B0 {time}",{time:ce(l.updated_at)}))),Array.isArray(l.tags)&&l.tags.length?e.default.createElement("div",{className:"ip-detail-tags"},l.tags.map(c=>e.default.createElement(ze,{key:c},c))):null,e.default.createElement("div",{className:"ip-detail-actions"},e.default.createElement(C,{size:"sm",icon:"copy",onClick:j},a("\u590D\u5236\u5C55\u5F00\u6307\u4EE4")),e.default.createElement(C,{size:"sm",icon:"link",onClick:L},a(q?"\u590D\u5236\u94FE\u63A5":"\u590D\u5236\u5F15\u7528")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":a("\u5207\u6362\u72B6\u6001")},si.map(c=>e.default.createElement("button",{key:c,type:"button",className:l.status===c?"is-on":"","aria-pressed":l.status===c,disabled:$,onClick:()=>D(c)},de(c)))))),e.default.createElement("div",{className:"ip-detail-body"},e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u539F\u6587")),e.default.createElement("span",{className:"ip-section-count"},a("\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(Y,{icon:"copy",size:13,label:a("\u590D\u5236\u539F\u6587"),onClick:()=>R(l.raw_text||"",a("\u5DF2\u590D\u5236\u539F\u6587"))})),e.default.createElement("pre",{className:"ip-raw"},l.raw_text||a("\uFF08\u65E0\u539F\u6587\uFF09"))),l.summary?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u6458\u8981"))),e.default.createElement("div",{className:"ip-summary"},l.summary)):null,l.source_note?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u5907\u6CE8"))),e.default.createElement("div",{className:"ip-text"},l.source_note)):null,e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u5173\u8054\u4EA7\u51FA")),e.default.createElement("span",{className:"ip-section-count"},M.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>T(c=>!c)},a("\u52A0\u4EA7\u51FA"))),M.length?e.default.createElement("ul",{className:"ip-links"},M.map(c=>e.default.createElement(Gi,{key:c.id||c.url,link:c}))):e.default.createElement("p",{className:"ip-muted"},a("\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002")),F?e.default.createElement(Qi,{no:K}):null),e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u8FDB\u5C55")),e.default.createElement("span",{className:"ip-section-count"},y.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>k(c=>!c)},a("\u52A0\u8FDB\u5C55"))),y.length?e.default.createElement("ul",{className:"ip-timeline"},y.map(c=>e.default.createElement(Vi,{key:c.id||c.created_at,update:c}))):e.default.createElement("p",{className:"ip-muted"},a("\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002")),A?e.default.createElement(Xi,{no:K}):null)))),p?e.default.createElement(Zi,{idea:l,onClose:()=>z(!1)}):null,d?e.default.createElement(Ri,{idea:l,onClose:()=>E(!1)}):null)}function Te(i){return String(i||"").trim().replace(/\/+$/,"")}function it({onClose:i}){let t=f(w=>w.settings),o=f(w=>w.storagePath),r=f(w=>w.device),n=f(w=>w.mode),[s,u]=e.default.useState(n==="cloud"?"cloud":"local"),[x,h]=e.default.useState(r),[m,p]=e.default.useState(ee),[z,d]=e.default.useState(""),[E,A]=e.default.useState(!1),[k,F]=e.default.useState(!1),[T,$]=e.default.useState(!1),[b,l]=e.default.useState(!1),[y,M]=e.default.useState(null);e.default.useEffect(()=>{Xe()},[]);let K=e.default.useRef(!1);e.default.useEffect(()=>{if(!t||K.current)return;K.current=!0,u(t.mode==="cloud"?"cloud":"local"),typeof t.device=="string"&&h(t.device);let w=t.cloud&&typeof t.cloud.base=="string"?t.cloud.base:"";p(w||ee)},[t]);let D=t&&t.cloud||{},j=!!D.hasKey,q=typeof D.keyHint=="string"?D.keyHint:"",L=typeof D.base=="string"?D.base:"",c=Te(m)||L||ee,ui=t&&typeof t.storagePath=="string"&&t.storagePath||o,Me=w=>{u(w),M(null)},mi=async()=>{if(k)return;let w=Te(m);if(!w){S(a("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(w)){S(a("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}F(!0),M(null);let B=await Ze({base:w,apiKey:z.trim()});if(F(!1),B&&B.ok){M({ok:!0,text:a("\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms",{count:B.count,ms:B.latencyMs})});return}let V=B&&Number(B.status);M({ok:!1,text:V===401||V===403?a("\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key"):a("\u8FDE\u63A5\u5931\u8D25\uFF1A{error}",{error:B&&B.error||a("\u672A\u77E5\u9519\u8BEF")})})},fi=async()=>{if(b||!j||typeof window>"u"||typeof window.confirm!="function"||!window.confirm(a("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002")))return;l(!0);let B=await Re();l(!1),B&&(d(""),M(null))},gi=async()=>{T||($(!0),await ei(),$(!1))},hi=async()=>{if(E)return;let w=s==="cloud"?"cloud":"local",B={};t?w!==t.mode&&(B.mode=w):w!==n&&(B.mode=w);let V=x.trim();if(!V){S(a("\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if((t?V!==t.device:V!==r)&&(B.device=V),w==="cloud"){let te=Te(m);if(!te){S(a("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(te)){S(a("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}let ae={};te!==L&&(ae.base=te);let De=z.trim();De&&(ae.apiKey=De),Object.keys(ae).length&&(B.cloud=ae)}if(Object.keys(B).length===0){i();return}A(!0);let Le=await Qe(B);A(!1),Le&&i()};return e.default.createElement(le,{title:a("\u8BBE\u7F6E"),onClose:i,width:568,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{onClick:i},a("\u5173\u95ED")),e.default.createElement(C,{variant:"primary",onClick:hi,disabled:E},E?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},e.default.createElement("div",{className:"ip-dialog-rows"},e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8FD0\u884C\u6A21\u5F0F")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":a("\u8FD0\u884C\u6A21\u5F0F")},e.default.createElement("button",{type:"button",className:s==="local"?"is-on":"","aria-pressed":s==="local",onClick:()=>Me("local")},a("\u672C\u673A\u6A21\u5F0F")),e.default.createElement("button",{type:"button",className:s==="cloud"?"is-on":"","aria-pressed":s==="cloud",onClick:()=>Me("cloud")},a("\u4E91\u7AEF\u6A21\u5F0F"))),e.default.createElement("p",{className:"ip-dialog-note"},s==="cloud"?a("\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002",{base:c}):a("\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002")))),s==="local"?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5B58\u50A8\u8DEF\u5F84")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("code",{className:"ip-dialog-code"},ui||a("\u672A\u77E5")),e.default.createElement("p",{className:"ip-dialog-note"},a("\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8BBE\u5907\u6807\u8BC6")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:x,placeholder:"dsh-mac / dsh-win / volcano",onChange:w=>h(w.target.value)})),e.default.createElement("p",{className:"ip-dialog-note"},a("\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u51FA")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(C,{icon:"download",onClick:()=>ii()},a("\u5BFC\u51FA JSON"))),e.default.createElement("p",{className:"ip-dialog-note"},a("\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002"))))):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u4E91\u7AEF\u5730\u5740")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:m,placeholder:ee,onChange:w=>{p(w.target.value),M(null)}})),e.default.createElement("p",{className:"ip-dialog-note"},a("\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002",{base:ee})))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("API Key")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",type:"password",autoComplete:"off",value:z,placeholder:j?a("\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}",{hint:q||"****"}):a("\u7C98\u8D34\u4E91\u7AEF API Key"),onChange:w=>{d(w.target.value),M(null)}}),j?e.default.createElement(C,{size:"sm",variant:"danger",onClick:fi,disabled:b||E},b?a("\u6E05\u9664\u4E2D\u2026"):a("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key")):null),e.default.createElement("p",{className:"ip-dialog-note"},j?a("\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002",{hint:q||"****"}):a("\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u6D4B\u8BD5\u8FDE\u63A5")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(C,{size:"sm",icon:"bolt",onClick:mi,disabled:k},k?a("\u6D4B\u8BD5\u4E2D\u2026"):a("\u6D4B\u8BD5\u8FDE\u63A5")),y?e.default.createElement("span",{className:`ip-cloud-status ${y.ok?"is-ok":"is-error"}`},e.default.createElement(P,{name:y.ok?"check":"alert",size:12}),y.text):e.default.createElement("span",{className:"ip-cloud-status"},a("\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5"))))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u5165\u5230\u672C\u673A")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(C,{size:"sm",icon:"download",onClick:gi,disabled:T||!j,title:j?void 0:a("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")},T?a("\u5BFC\u5165\u4E2D\u2026"):a("\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A"))),e.default.createElement("p",{className:"ip-dialog-note"},j?a("\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002"):a("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")))))))}function ci(){Oe();let i=f(l=>l.booted),t=f(l=>l.loading),o=f(l=>l.error),r=f(l=>l.canUndo),n=f(l=>l.ideas),s=f(l=>l.status),u=f(l=>l.query),x=f(l=>l.selectedNo),h=f(l=>l.suppressAutoSelect),m=e.default.useRef(null),p=e.default.useRef(null),[z,d]=e.default.useState(1200),[E,A]=e.default.useState(!1),k=z<880,F=z<640;e.default.useEffect(()=>{we()},[]),e.default.useEffect(()=>{let l=m.current;if(!l||typeof ResizeObserver>"u")return;let y=new ResizeObserver(([M])=>{M&&M.contentRect&&d(M.contentRect.width)});return y.observe(l),()=>y.disconnect()},[]),e.default.useEffect(()=>{!i||k||x||h||u.trim()||n.length&&se(n[0].idea_no)},[i,k,x,h,u,n]),e.default.useEffect(()=>{let l=y=>{let M=y.target,K=M&&M.tagName||"",D=/^(INPUT|TEXTAREA|SELECT)$/.test(K)||!!(M&&M.isContentEditable);if((y.metaKey||y.ctrlKey)&&!y.shiftKey&&(y.key==="z"||y.key==="Z")&&!D&&r){y.preventDefault(),Ce();return}if(y.key==="/"&&!D&&!y.metaKey&&!y.ctrlKey&&!y.altKey){y.preventDefault(),p.current?.focus();return}y.key==="Escape"&&k&&x&&Ne()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r,k,x]);let T=!k||!x,$=!k||!!x,b=i&&!t&&!o&&n.length===0&&s==="all"&&!u.trim();return e.default.createElement("div",{className:`ip-root ${k?"is-narrow":""} ${F?"is-compact":""}`,ref:m},e.default.createElement("style",null,Ie),e.default.createElement(Fi,{searchRef:p,onOpenSettings:()=>A(!0)}),e.default.createElement(Hi,{highlight:b}),i?e.default.createElement(Ji,null):null,e.default.createElement("div",{className:"ip-body"},t&&!i?e.default.createElement(pe,{label:a("\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026")}):o&&!i?e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(P,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},a("\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},o),e.default.createElement(C,{icon:"refresh",onClick:()=>He()},a("\u91CD\u8BD5"))):e.default.createElement(e.default.Fragment,null,T?e.default.createElement("div",{className:"ip-list-pane"},e.default.createElement(Yi,{narrow:k})):null,$?e.default.createElement(et,{narrow:k}):null)),E?e.default.createElement(it,{onClose:()=>A(!1)}):null,e.default.createElement(oi,null))}function tt({size:i}){return e.default.createElement(P,{name:"bulb",size:i})}var at=["slots"];function ot(i){i.slots.inject("main",()=>i.slots.register({name:"main",key:ri},ci)),i.effect(()=>{let t=null,o=()=>{t?.(),t=i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:ri,order:15,label:()=>a("\u7075\u611F\u6C60")},tt))};o();let r=fe(o);return()=>{r(),t?.()}},"dsh-idea-pool: sidebar entry")}
return module.exports}})
