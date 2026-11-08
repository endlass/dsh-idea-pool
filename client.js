window.__ModuleLoader__.load({id:"dsh-idea-pool",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var xi=Object.create;var te=Object.defineProperty;var vi=Object.getOwnPropertyDescriptor;var bi=Object.getOwnPropertyNames;var yi=Object.getPrototypeOf,wi=Object.prototype.hasOwnProperty;var ki=(i,t)=>{for(var r in t)te(i,r,{get:t[r],enumerable:!0})},De=(i,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of bi(t))!wi.call(i,n)&&n!==r&&te(i,n,{get:()=>t[n],enumerable:!(o=vi(t,n))||o.enumerable});return i};var ae=(i,t,r)=>(r=i!=null?xi(yi(i)):{},De(t||!i||!i.__esModule?te(r,"default",{value:i,enumerable:!0}):r,i)),Ni=i=>De(te({},"__esModule",{value:!0}),i);var ot={};ki(ot,{App:()=>di,apply:()=>rt,inject:()=>at});module.exports=Ni(ot);var e=ae(require("react"),1);var Be=`/* dsh-idea-pool \u5BA2\u6237\u7AEF\u6837\u5F0F\uFF1A\u989C\u8272\u53EA\u8D70 --dsw-alias-* \u8BED\u4E49 token\uFF08\u5E26 fallback\uFF09\uFF0C\u660E\u6697\u4E3B\u9898\u7531\u5BBF\u4E3B\u5207\u6362\u3002 */
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
  padding: 12px 13px 11px;
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
.ip-card-sum { font-size: 12.5px; line-height: 18px; color: var(--ip-ink2); overflow-wrap: anywhere; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
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


/* \u52A8\u6548\u964D\u7EA7\uFF1A\u5BBF\u4E3B/\u7CFB\u7EDF\u5F00\u542F\u300C\u51CF\u5C11\u52A8\u6001\u6548\u679C\u300D\u65F6\u4E0D\u505A\u4F4D\u79FB\u52A8\u753B */
@media (prefers-reduced-motion: reduce) {
  .ip-root *, .ip-root *::before, .ip-root *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;var Ae=ae(require("react"),1);var Ie={\u7075\u611F\u6C60:"Idea Pool",\u672C\u673A\u6A21\u5F0F:"Local mode",\u4E91\u7AEF\u6A21\u5F0F:"Cloud mode",\u641C\u7D22\u60F3\u6CD5:"Search ideas","\u641C\u7D22\u60F3\u6CD5\u2026":"Search ideas\u2026",\u6E05\u7A7A\u641C\u7D22:"Clear search",\u64A4\u9500\u4E0A\u4E00\u6B65:"Undo last step",\u5237\u65B0:"Refresh",\u8BBE\u7F6E:"Settings",\u5173\u95ED:"Close",\u91CD\u8BD5:"Retry",\u5F55\u5165\u7075\u611F:"Capture an idea",\u60F3\u6CD5\u539F\u6587:"Raw idea text","\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60":"Type whatever comes to mind. Enter for a new line, \u2318/Ctrl+Enter to add.","\u2318/Ctrl+Enter \u4FDD\u5B58":"\u2318/Ctrl+Enter to save",\u66F4\u591A\u9009\u9879:"More options",\u6536\u8D77\u9009\u9879:"Hide options",\u5165\u6C60:"Add","\u4FDD\u5B58\u4E2D\u2026":"Saving\u2026",\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60:"Write something first","\u6807\u9898\uFF08\u53EF\u9009\uFF09":"Title (optional)","\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57":"Leave empty to use the first 40 characters","\u6807\u7B7E\uFF08\u53EF\u9009\uFF09":"Tags (optional)","\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053":"Comma-separated, e.g. research, channels","\u6458\u8981\uFF08\u53EF\u9009\uFF09":"Summary (optional)","\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"One-line summary to scan later",\u72B6\u6001\u7B5B\u9009:"Filter by status",\u5168\u90E8:"All",\u5DF2\u5165\u6C60:"Pool",\u63A8\u8FDB\u4E2D:"In progress",\u5DF2\u6536\u53E3:"Done",\u6401\u7F6E:"Parked",\u5207\u6362\u72B6\u6001:"Change status","\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D":"Status changed to \u201C{label}\u201D","1 \u6761\u8FDB\u5C55":"1 update","{n} \u6761\u8FDB\u5C55":"{n} updates","1 \u4E2A\u4EA7\u51FA":"1 output","{n} \u4E2A\u4EA7\u51FA":"{n} outputs","\u6B63\u5728\u52A0\u8F7D\u2026":"Loading\u2026","\u6B63\u5728\u5237\u65B0\u2026":"Refreshing\u2026","\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026":"Loading the idea pool\u2026",\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25:"Failed to load the idea pool",\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684:"The idea pool is empty",\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5:"No matching ideas","\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002":"Try another keyword or status.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add. In local mode the data stays on this machine.",\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5:"Select an idea","\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002":"The list is on the left. On wide screens, click a card to read its raw text, progress and outputs.","\u6B63\u5728\u5C55\u5F00\u2026":"Loading\u2026",\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25:"Failed to load this idea",\u8FD4\u56DE\u5217\u8868:"Back to list",\u539F\u6587:"Raw text","\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB":"Verbatim \xB7 read-only",\u590D\u5236\u539F\u6587:"Copy raw text",\u5DF2\u590D\u5236\u539F\u6587:"Raw text copied",\u6458\u8981:"Summary",\u5907\u6CE8:"Note","\u6765\u6E90\uFF1A{source}":"Source: {source}","\u521B\u5EFA {time}":"Created {time}","\u66F4\u65B0 {time}":"Updated {time}",\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Copy expand prompt",\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Expand prompt copied",\u590D\u5236\u5F15\u7528:"Copy reference",\u5DF2\u590D\u5236\u5F15\u7528:"Reference copied",\u590D\u5236\u94FE\u63A5:"Copy link",\u5DF2\u590D\u5236\u94FE\u63A5:"Link copied",\u7F16\u8F91:"Edit",\u5220\u9664:"Delete",\u5173\u8054\u4EA7\u51FA:"Outputs",\u52A0\u4EA7\u51FA:"Add output","\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002":"No outputs yet \u2014 attach result links once there is progress.",\u4EA7\u51FA\u6807\u9898:"Output title","\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55":"e.g. research report / progress log",\u94FE\u63A5:"Link","\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934":"The link must start with http(s)://",\u5148\u586B\u94FE\u63A5:"Fill in a link first",\u4FDD\u5B58\u4EA7\u51FA:"Save output",\u8FDB\u5C55:"Progress",\u52A0\u8FDB\u5C55:"Add progress","\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002":"No progress entries yet.",\u65B0\u589E\u8FDB\u5C55:"New progress entry","\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026":"Log progress (conclusion / research status / next step)\u2026",\u5148\u5199\u70B9\u5185\u5BB9:"Write something first","\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B":"Entries are append-only; note the machine and next step for cross-machine handoff",\u8BB0\u5F55\u8FDB\u5C55:"Save progress",\u5C55\u5F00\u5168\u90E8:"Show all",\u6536\u8D77:"Collapse",\u6587\u6863:"Doc","\uFF08\u65E0\u539F\u6587\uFF09":"(no raw text)",\u7F16\u8F91\u60F3\u6CD5:"Edit idea",\u6807\u9898:"Title","\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09":"Raw text (keep verbatim)",\u6807\u7B7E:"Tags",\u9017\u53F7\u5206\u9694:"Comma-separated","\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883":"Note / context",\u53D6\u6D88:"Cancel",\u4FDD\u5B58:"Save",\u5DF2\u4FDD\u5B58:"Saved",\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A:"Title can\u2019t be empty",\u5220\u9664\u60F3\u6CD5:"Delete idea","\u5220\u9664\u4E2D\u2026":"Deleting\u2026",\u786E\u8BA4\u5220\u9664:"Delete","\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002":"Deleting \u201C{title}\u201D ({no}) also removes its progress and outputs.",\u5B58\u50A8\u8DEF\u5F84:"Storage path",\u672A\u77E5:"Unknown","\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002":"In local mode every idea lives in this one JSON file; deleting it clears the idea pool.",\u8FD0\u884C\u6A21\u5F0F:"Run mode","\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002":"Local mode: data lives under this machine\u2019s DSH_HOME/idea-pool/ and is read and written directly by the plugin, with no network. Other machines can\u2019t see it.","\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002":"Cloud mode: data lives in the cloud at {base}; local data stays untouched.",\u4E91\u7AEF\u5730\u5740:"Cloud base URL","\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002":"Base URL of the cloud ideas-api; defaults to {base}.",\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A:"Cloud base URL can\u2019t be empty","\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934":"Cloud base URL must start with http(s)://","API Key":"API Key","\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}":"Saved, last four: {hint}","\u7C98\u8D34\u4E91\u7AEF API Key":"Paste the cloud API key","\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002":"API key saved (last four: {hint}); leave empty to keep it.","\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002":"No API key configured yet \u2014 cloud reads and writes need one.","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key":"Clear saved key","\u6E05\u9664\u4E2D\u2026":"Clearing\u2026","\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key":"Saved API key cleared","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002":"Clear the saved API key? Cloud reads and writes will fail until you add it again.","\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002":"No saved API key yet, so importing is unavailable. Fill in a key and save it first.","\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key":"Connection failed: cloud authentication failed \u2014 check the API Key",\u6D4B\u8BD5\u8FDE\u63A5:"Test connection","\u6D4B\u8BD5\u4E2D\u2026":"Testing\u2026","\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5":"Ping the cloud health endpoint with the URL and key above","\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms":"Connected \xB7 {count} ideas in the cloud \xB7 {ms} ms","\u8FDE\u63A5\u5931\u8D25\uFF1A{error}":"Connection failed: {error}",\u672A\u77E5\u9519\u8BEF:"Unknown error",\u5BFC\u5165\u5230\u672C\u673A:"Import to local",\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A:"Import cloud \u2192 local","\u5BFC\u5165\u4E2D\u2026":"Importing\u2026","\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002":"Fetch everything with the saved cloud configuration and merge it locally by idea number. Does not switch mode or delete local data.","\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761":"Imported {imported} and updated {updated} ideas from the cloud",\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165:"The cloud has no new ideas to import",\u8BBE\u5907\u6807\u8BC6:"Device ID","\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"Written into the source field of ideas and progress entries so the origin can be located across machines.",\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A:"Device ID can\u2019t be empty",\u5BFC\u51FA:"Export","\u5BFC\u51FA JSON":"Export JSON","\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002":"Export all ideas, progress and outputs into a single JSON file for backup or migration.","\u5DF2\u5BFC\u51FA JSON":"JSON exported",\u521A\u521A:"just now","{n} \u5206\u949F\u524D":"{n} min ago",\u672C\u673A:"Local",\u706B\u5C71\u4E91:"Volcano Cloud",\u624B\u52A8:"Manual",\u7F51\u9875:"Web",\u98DE\u4E66:"Feishu",\u5DF2\u590D\u5236:"Copied","\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236":"Copy failed \u2014 select and copy manually","\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}":"Can\u2019t reach the local service: {error}","\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09":"Request failed ({status})","\u5DF2\u5165\u6C60 {no}":"Added {no}","\u5DF2\u5220\u9664 {no}":"Deleted {no}",\u5DF2\u8BB0\u5F55\u8FDB\u5C55:"Progress saved",\u5DF2\u6DFB\u52A0\u4EA7\u51FA:"Output added",\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65:"Undid the last step","\u5DF2\u64A4\u9500\uFF1A{label}":"Undone: {label}",\u5DF2\u5237\u65B0:"Refreshed",\u8BBE\u7F6E\u5DF2\u4FDD\u5B58:"Settings saved",\u6E05\u7A7A\u641C\u7D22\u4E0E\u7B5B\u9009:"Clear search and filters",\u5199\u7B2C\u4E00\u6761:"Write the first one",\u6CA1\u6709\u53EF\u663E\u793A\u7684\u8BE6\u60C5:"No detail to show","\u5148\u6E05\u7A7A\u641C\u7D22\u6216\u5207\u6362\u72B6\u6001\uFF0C\u518D\u9009\u4E00\u6761\u60F3\u6CD5\u3002":"Clear the search or filters, then pick an idea."};var de=Pe(),ce=new Set;function Pe(){return typeof document>"u"||(document.documentElement.lang||navigator.language||"zh").toLowerCase().startsWith("zh")?"zh":"en"}function Ci(){ce.forEach(i=>{try{i()}catch(t){console.error("[idea-pool] lang listener failed",t)}})}typeof document<"u"&&typeof MutationObserver<"u"&&new MutationObserver(()=>{let i=Pe();i!==de&&(de=i,Ci())}).observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function Ke(){return de}function ue(i){return ce.add(i),()=>ce.delete(i)}function Oe(){return Ae.default.useSyncExternalStore(ue,Ke)}function a(i,t){let r=Ke()==="en"?Ie[i]??i:i;return t?r.replace(/\{(\w+)\}/g,(o,n)=>t[n]===void 0?o:String(t[n])):r}var $e=ae(require("react"),1);var zi="idea-pool/",Ei=500;function Ti(){return{all:0,pool:0,active:0,done:0,parked:0}}var N={booted:!1,loading:!0,error:null,mode:"local",device:"",storagePath:"",cloudBase:"",canUndo:!1,counts:Ti(),total:0,status:"all",query:"",ideas:[],listLoading:!1,selectedNo:null,newIdeaNo:null,suppressAutoSelect:!1,detail:null,detailLoading:!1,detailError:null,settings:null,settingsLoading:!1,toast:null},he=new Set;function w(i){N={...N,...typeof i=="function"?i(N):i},he.forEach(t=>{try{t()}catch(r){console.error("[idea-pool] store listener failed",r)}})}function Mi(i){return he.add(i),()=>he.delete(i)}function g(i){return $e.default.useSyncExternalStore(Mi,()=>i(N))}var xe=null,me=null;function S(i,{error:t=!1,duration:r=0}={}){clearTimeout(xe);let o=Date.now()+Math.random();w({toast:{id:o,text:i,error:t}}),xe=setTimeout(()=>{N.toast&&N.toast.id===o&&w({toast:null})},r||(t?6e3:3200))}function Ue(){clearTimeout(xe),w({toast:null})}function L(i){S(i&&i.message||String(i),{error:!0}),i&&Number(i.status)===409&&Promise.allSettled([Y(),U(),G()])}async function A(i,t){let r={credentials:"same-origin",...t||{}},o;try{o=await fetch(zi+i,r)}catch(s){throw new Error(a("\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}",{error:s&&s.message||String(s)}))}let n=null;try{n=await o.json()}catch{n=null}if(!o.ok||n&&n.ok===!1){let s=new Error(n&&n.error||a("\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09",{status:o.status}));throw s.status=o.status,s}return n||{}}function q(i,t){return{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(t??{})}}function P(i){let t=Number(i);return Number.isFinite(t)&&t>0?Math.floor(t):0}function Fe(i,t){let r=i&&typeof i=="object"?i:{},o={pool:P(r.pool),active:P(r.active),done:P(r.done),parked:P(r.parked)},n=o.pool+o.active+o.done+o.parked;return o.all=P(r.all)||P(r.total)||P(t)||n,o}function je(i){if(!i||typeof i!="object")return;let t={mode:typeof i.mode=="string"?i.mode:N.mode,canUndo:!!i.canUndo,counts:Fe(i.counts,i.total),total:P(i.total)};typeof i.device=="string"&&(t.device=i.device),Object.hasOwn(i,"storagePath")&&(t.storagePath=typeof i.storagePath=="string"?i.storagePath:""),Object.hasOwn(i,"cloudBase")&&(t.cloudBase=typeof i.cloudBase=="string"?i.cloudBase:""),w(t)}async function Y(){let i=await A("api/state");return je(i),i}var fe=0;async function U(){let i=++fe,t=new URLSearchParams;N.status!=="all"&&t.set("status",N.status);let r=N.query.trim();r&&t.set("q",r),t.set("limit",String(Ei)),t.set("offset","0"),w({listLoading:!0});try{let o=await A("api/ideas?"+t.toString());if(i!==fe)return;let n=Array.isArray(o.ideas)?o.ideas:[];w({ideas:n,listLoading:!1,counts:Fe(o.counts,o.total),total:P(o.total)||n.length,error:null})}catch(o){throw i===fe&&w({listLoading:!1}),o}}var ge=0;async function ve(i){let t=++ge;w({detailLoading:!0,detailError:null});try{let r=await A("api/ideas/"+encodeURIComponent(i));return t!==ge||w({detail:r,detailLoading:!1,detailError:null}),r}catch(r){throw t===ge&&w({detailLoading:!1,detailError:r.message}),r}}async function G(){let i=N.selectedNo;if(i)try{await ve(i)}catch{w({selectedNo:null,detail:null,detailError:null})}}async function X({withDetail:i=!1}={}){let t=[Y(),U()];i&&N.selectedNo&&t.push(ve(N.selectedNo)),await Promise.allSettled(t)}var V=null;function be(){return V?(N.booted&&Promise.allSettled([Y(),U()]),V):(V=(async()=>{w({loading:!0,error:null});try{await Promise.all([Y(),U()]),w({booted:!0,loading:!1})}catch(i){w({loading:!1,error:i.message})}})(),V)}function qe(){return V=null,be()}async function He({quiet:i=!1}={}){try{await Promise.all([Y(),U()]),await G(),w({booted:!0,loading:!1,error:null}),i||S(a("\u5DF2\u5237\u65B0"))}catch(t){L(t)}}var _e=null;function ye(i){N.status!==i&&(w({status:i,selectedNo:null,detail:null,detailError:null}),U().catch(L))}function re(i){w({query:i,selectedNo:null,detail:null,detailError:null}),clearTimeout(_e),_e=setTimeout(()=>{U().catch(L)},220)}function oe(i){if(!i){w({selectedNo:null,detail:null,detailError:null});return}if(N.selectedNo===i&&N.detail)return;let t=N.selectedNo===i?N.detail:null;w({selectedNo:i,detail:t,detailLoading:!0,detailError:null}),ve(i).catch(L)}function we(){w({selectedNo:null,detail:null,detailError:null})}async function Je(i){try{let t={...i};!t.source&&N.device&&(t.source=N.device);let o=(await A("api/ideas",q("POST",t))).idea||null;return await X(),S(a("\u5DF2\u5165\u6C60 {no}",{no:o?o.idea_no:""}).trim()),o&&(clearTimeout(me),w({newIdeaNo:o.idea_no}),me=setTimeout(()=>{me=null,N.newIdeaNo===o.idea_no&&w({newIdeaNo:null})},1100)),o}catch(t){return L(t),null}}async function ke(i,t,r){try{let o=await A("api/ideas/"+encodeURIComponent(i),q("PATCH",t));return await X({withDetail:!0}),r&&S(r),o.idea||null}catch(o){return L(o),null}}async function We(i){let t=N.selectedNo===i;try{await A("api/ideas/"+encodeURIComponent(i),{method:"DELETE"}),t&&w({selectedNo:null,detail:null,detailError:null,suppressAutoSelect:!0});try{await X()}finally{t&&w({suppressAutoSelect:!1})}return S(a("\u5DF2\u5220\u9664 {no}",{no:i})),!0}catch(r){return L(r),!1}}async function Ye(i,t){try{let r={content:t};return N.device&&(r.source=N.device),await A("api/ideas/"+encodeURIComponent(i)+"/updates",q("POST",r)),await X({withDetail:!0}),S(a("\u5DF2\u8BB0\u5F55\u8FDB\u5C55")),!0}catch(r){return L(r),!1}}async function Ve(i,{title:t,url:r}){try{return await A("api/ideas/"+encodeURIComponent(i)+"/links",q("POST",{title:t,url:r})),await X({withDetail:!0}),S(a("\u5DF2\u6DFB\u52A0\u4EA7\u51FA")),!0}catch(o){return L(o),!1}}async function Ne(){try{let i=await A("api/undo",q("POST",{}));i.state&&je(i.state),await Promise.allSettled([U(),G()]);let t=typeof i.label=="string"?i.label.trim():"";return S(t?a("\u5DF2\u64A4\u9500\uFF1A{label}",{label:t}):a("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")),!0}catch(i){return L(i),!1}}async function Ge(){w({settingsLoading:!0});try{let i=await A("api/settings");return w({settings:i.settings||null,settingsLoading:!1}),i.settings||null}catch(i){return w({settingsLoading:!1}),L(i),null}}async function Xe(i){try{let r=(await A("api/settings",q("POST",i))).settings||null,o=N.mode;w({settings:r}),r&&r.mode&&r.mode!==o&&w({ideas:[],selectedNo:null,detail:null,detailError:null,canUndo:!1}),S(a("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58"));try{await Y(),await U(),await G(),w({booted:!0,loading:!1,error:null})}catch(n){L(n)}return r}catch(t){return L(t),null}}async function Qe({base:i,apiKey:t}={}){let r={},o=typeof i=="string"?i.trim():"",n=typeof t=="string"?t.trim():"";o&&(r.base=o),n&&(r.apiKey=n);try{let s=await A("api/cloud/test",q("POST",r));return{ok:!0,base:typeof s.base=="string"?s.base:"",count:P(s.count),latencyMs:P(s.latencyMs)}}catch(s){return{ok:!1,error:s&&s.message||String(s),status:s&&Number.isInteger(s.status)?s.status:0}}}async function Ze(){try{let i=await A("api/settings",q("POST",{cloud:{clearKey:!0}}));return w({settings:i.settings||N.settings}),S(a("\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key")),i.settings||null}catch(i){return L(i),null}}async function Re(){try{let i=await A("api/cloud/import-local",q("POST",{})),t=P(i.imported),r=P(i.updated),o=P(i.total);return S(t||r?a("\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761",{imported:t,updated:r}):a("\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165")),await Promise.allSettled([Y(),U(),G()]),{imported:t,updated:r,total:o}}catch(i){return L(i),null}}function Li(){let i=new Date,t=r=>String(r).padStart(2,"0");return`${i.getFullYear()}${t(i.getMonth()+1)}${t(i.getDate())}`}function Di(i,t){let r=new Blob([t],{type:"application/json;charset=utf-8"}),o=URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=i,n.style.display="none",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}async function ei(){try{let i=await A("api/export"),t=i&&i.data?i.data:i;return Di(`idea-pool-${Li()}.json`,JSON.stringify(t,null,2)),S(a("\u5DF2\u5BFC\u51FA JSON")),!0}catch(i){return L(i),!1}}var f=ae(require("react"),1);var Bi={bulb:"M12 3a6 6 0 0 1 3.5 10.9c-.9.6-1.5 1.5-1.5 2.5v.6h-4v-.6c0-1-.6-1.9-1.5-2.5A6 6 0 0 1 12 3zM10 20h4M12 7.5v3.5",note:"M6 4h8l4 4v12H6zM14 4v4h4M9 12h6M9 16h6",settings:"M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",undo:"M8 6L4 10l4 4M4 10h10a5 5 0 0 1 0 10h-3",refresh:"M19 8a8 8 0 0 0-14-1L4 9M5 16a8 8 0 0 0 14 1l1-2M4 4v5h5M20 20v-5h-5",search:"M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",close:"M6 6l12 12M18 6L6 18",check:"M5 12.5l4.5 4.5L19 7",chevD:"M6 9.5l6 6 6-6",chevL:"M14.5 5.5L8 12l6.5 6.5",chevR:"M9.5 5.5L16 12l-6.5 6.5",plus:"M12 5v14M5 12h14",edit:"M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",trash:"M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",copy:"M9 9h10v11H9zM5 15V4h10",link:"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",upRight:"M7 17L17 7M8 7h9v9",monitor:"M4 5h16v11H4zM9 20h6M12 16v4",clock:"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l2.5 1.5",download:"M12 4v11M7 11l5 5 5-5M5 20h14",alert:"M12 4l9 16H3zM12 10v4M12 17.5h.01",folder:"M4 7h6l2 2h10v10H4z",tag:"M4 5h8l8 8-6 6-8-8zM8 8.5h.01",spark:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",bolt:"M13 3L5 14h6l-1 7 8-11h-6z",cloud:"M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8.5z",dot:"M12 12h.01"};function D({name:i,size:t=16,stroke:r=1.6,className:o=""}){let n=Bi[i];return n?f.default.createElement("svg",{className:o,width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},f.default.createElement("path",{d:n})):null}function H({icon:i,label:t,onClick:r,disabled:o,active:n,size:s=16,className:m="",...b}){return f.default.createElement("button",{type:"button",className:`ip-iconbtn ${n?"is-on":""} ${m}`,"aria-label":t,title:t,onClick:r,disabled:o,...b},f.default.createElement(D,{name:i,size:s}))}function C({variant:i="plain",size:t="md",icon:r,children:o,className:n="",title:s,...m}){return f.default.createElement("button",{type:"button",className:`ip-btn is-${i} is-${t} ${n}`,title:s,...m},r?f.default.createElement(D,{name:r,size:t==="sm"?13:15}):null,o?f.default.createElement("span",null,o):null)}function Ii({tone:i="neutral",children:t,title:r,className:o=""}){return f.default.createElement("span",{className:`ip-badge is-${i} ${o}`,title:r},t)}function ti({status:i,children:t}){return f.default.createElement(Ii,{tone:i==="pool"||i==="active"||i==="done"||i==="parked"?i:"neutral"},f.default.createElement("i",{className:"ip-dot","aria-hidden":"true"}),t)}function Se({children:i}){return f.default.createElement("span",{className:"ip-tag"},i)}function $({label:i,hint:t,children:r}){return f.default.createElement("label",{className:"ip-field"},f.default.createElement("span",{className:"ip-field-label"},i),r,t?f.default.createElement("small",{className:"ip-field-hint"},t):null)}function ne({title:i,onClose:t,children:r,footer:o,width:n=460}){let s=f.default.useRef(null),m=f.default.useRef(t),b=f.default.useRef(null);return m.current=t,f.default.useEffect(()=>{b.current=document.activeElement;let v=()=>{let c=s.current;return c?[...c.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')].filter(z=>!z.disabled&&z.offsetParent!==null):[]},u=c=>{if(c.key==="Escape"){c.preventDefault(),c.stopPropagation(),m.current();return}if(c.key!=="Tab")return;let z=v();if(!z.length)return;let B=z[0],h=z[z.length-1];c.shiftKey&&document.activeElement===B?(c.preventDefault(),h.focus()):!c.shiftKey&&document.activeElement===h&&(c.preventDefault(),B.focus())};window.addEventListener("keydown",u,!0);let p=s.current,E=p&&(p.querySelector("textarea, input, select")||p.querySelector("button"));return E&&E.focus(),()=>{window.removeEventListener("keydown",u,!0);let c=b.current;c&&typeof c.focus=="function"&&c.isConnected&&c.focus()}},[]),f.default.createElement("div",{className:"ip-dialog-mask",onPointerDown:v=>{v.target===v.currentTarget&&t()}},f.default.createElement("div",{className:"ip-dialog",role:"dialog","aria-modal":"true","aria-label":i,style:{width:n},ref:s},f.default.createElement("div",{className:"ip-dialog-head"},f.default.createElement("h2",null,i),f.default.createElement(H,{icon:"close",label:a("\u5173\u95ED"),onClick:t})),f.default.createElement("div",{className:"ip-dialog-body"},r),o?f.default.createElement("div",{className:"ip-dialog-foot"},o):null))}function ai(){let i=g(t=>t.toast);return i?f.default.createElement("div",{key:i.id,className:`ip-toast ${i.error?"is-error":""}`,role:i.error?"alert":"status"},f.default.createElement(D,{name:i.error?"alert":"check",size:14}),f.default.createElement("span",{className:"ip-toast-text"},i.text),f.default.createElement("button",{type:"button",className:"ip-toast-close","aria-label":a("\u5173\u95ED"),onClick:Ue},f.default.createElement(D,{name:"close",size:12}))):null}function Ce({icon:i="bulb",title:t,hint:r,children:o}){return f.default.createElement("div",{className:"ip-empty"},f.default.createElement("span",{className:"ip-empty-icon"},f.default.createElement(D,{name:i,size:26})),f.default.createElement("p",{className:"ip-empty-title"},t),r?f.default.createElement("p",{className:"ip-empty-hint"},r):null,o)}function se({label:i}){return f.default.createElement("div",{className:"ip-loading",role:"status"},f.default.createElement("span",{className:"ip-spinner","aria-hidden":"true"}),f.default.createElement("span",null,i))}function ii(i){let t=document.createElement("textarea");t.value=i,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0",document.body.appendChild(t),t.select();try{document.execCommand("copy")}finally{t.remove()}}function Q(i,t=a("\u5DF2\u590D\u5236")){let r=()=>S(t),o=()=>S(a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236"),{error:!0});try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(i).then(r,()=>{try{ii(i),r()}catch{o()}});return}ii(i),r()}catch{o()}}var ri="idea-pool",Ai="https://www.zhaoningyuan.com",Z="https://www.zhaoningyuan.com/ideas/api",ni=["pool","active","done","parked"],si={pool:"\u5DF2\u5165\u6C60",active:"\u63A8\u8FDB\u4E2D",done:"\u5DF2\u6536\u53E3",parked:"\u6401\u7F6E"},Pi=[{key:"all",label:"\u5168\u90E8"},...ni.map(i=>({key:i,label:si[i]}))],Ki={mac:"Mac","dsh-mac":"Mac",win:"Windows","dsh-win":"Windows",dsh:"\u672C\u673A",volcano:"\u706B\u5C71\u4E91",manual:"\u624B\u52A8",web:"\u7F51\u9875",feishu:"\u98DE\u4E66"};function F(i){return String(i).padStart(2,"0")}function pe(i){if(!i)return"";let t=new Date(i);return Number.isNaN(t.getTime())?String(i):`${t.getFullYear()}-${F(t.getMonth()+1)}-${F(t.getDate())} ${F(t.getHours())}:${F(t.getMinutes())}`}function Oi(i){if(!i)return"";let t=new Date(i);if(Number.isNaN(t.getTime()))return String(i);let r=Date.now()-t.getTime();if(r>=0&&r<60*1e3)return a("\u521A\u521A");if(r>=0&&r<3600*1e3)return a("{n} \u5206\u949F\u524D",{n:Math.floor(r/6e4)});let o=new Date,n=new Date(o.getFullYear(),o.getMonth(),o.getDate()).getTime();return t.getTime()>=n?`${F(t.getHours())}:${F(t.getMinutes())}`:t.getFullYear()===o.getFullYear()?`${F(t.getMonth()+1)}-${F(t.getDate())}`:`${t.getFullYear()}-${F(t.getMonth()+1)}-${F(t.getDate())}`}function li(i){if(!i)return"";let t=String(i).toLowerCase();return a(Ki[t]||String(i))}function le(i){return a(si[i]||i||"")}function _i(i){let t=String(i||"").trim();return!t||/^(javascript|data|vbscript):/i.test(t)?"#":t}function $i(i){return`${Ai}/ideas/#${i.idea_no}`}function R(i){return String(i&&i.title||"").replace(/\s+/g," ").trim()||i&&i.idea_no||""}function pi(i){return String(i||"").split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function oi(i,t,r){return a(i===1?t:r,{n:i})}function Ui(i){let t=i.idea_no,r=R(i);return"\u8BF7\u5C55\u5F00\u63A8\u8FDB\u7075\u611F\u6C60 "+t+"\u300A"+r+`\u300B\u3002

\u3010\u7EE7\u627F\u8FDB\u5EA6\xB7\u9632\u91CD\u590D\u3011\u5148\u8BFB\u60F3\u6CD5\u8BE6\u60C5\u2014\u2014\u539F\u6587\u3001\u6458\u8981\u3001\u5168\u90E8\u300C\u8FDB\u5C55\u300D\u4E0E\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 get \u52A8\u4F5C\uFF0C\u6216\u8BFB\u672C\u673A /idea-pool/api/ideas/`+t+`\uFF09\u3002
\uFF08\u300C\u8FDB\u5C55\u300D=\u63A5\u529B\u8D26\u672C\uFF1A\u4EE5\u6700\u65B0\u6761\u76EE\u4E3A\u51C6\u7EE7\u627F\uFF0C\u5DF2\u5B8C\u6210\u7684\u4E0D\u91CD\u505A\u2014\u2014\u5305\u62EC\u5176\u4ED6\u673A\u5668\u505A\u8FC7\u7684\uFF09
\u5982\u672C\u60F3\u6CD5\u66FE\u5728\u5176\u4ED6\u673A\u5668/\u4F1A\u8BDD\u63A8\u8FDB\u8FC7\uFF08\u4E0D\u786E\u5B9A\u5C31\u5148\u67E5\uFF09\uFF1A\u5F00\u5DE5\u524D\u5148\u505A\u8DE8\u673A\u67E5\u91CD\uFF08\u68C0\u7D22\u5404\u673A\u4F1A\u8BDD\u5E93\u3001\u5B9A\u65F6\u4EFB\u52A1\u4E0E\u6280\u80FD\uFF09\uFF0C\u5E76\u56DE\u586B\u4E00\u6761\u300C\u5F00\u5DE5\u5BF9\u9F50\u300D\u8FDB\u5C55\uFF08\u672C\u6B21\u8303\u56F4+\u4E0D\u91CD\u505A\u9879\uFF09\u3002
\u3010\u63A8\u8FDB\u8BB0\u5F55\u3011\u5148\u8BFB\u8BB0\u5F55\u6587\u6863\uFF08\u82E5\u6709\uFF09\u5E76\u5728\u5B8C\u6210\u540E\u8FFD\u52A0\u672C\u8F6E\u6761\u76EE\u3002
\u3010\u5148\u6F84\u6E05\u540E\u5F00\u5DE5\u3011\u7EE7\u627F\u68C0\u67E5\u4E4B\u540E\u3001\u52A8\u624B\u4E4B\u524D\uFF1A\u6309 brainstorming \u6F84\u6E05\u671F\u7EAA\u5F8B\u5411\u7528\u6237\u8FFD\u95EE 3~5 \u4E2A\u5173\u952E\u95EE\u9898\u2014\u2014\u53EA\u95EE\u4F1A\u6539\u53D8\u65B9\u5411\u3001\u53EA\u6709\u7528\u6237\u80FD\u7B54\u7684\uFF08\u80FD\u81EA\u67E5\u7684\u5148\u67E5\uFF09\uFF1B\u5C0F\u60F3\u6CD5\u53EF\u5C11\u95EE\uFF1B\u7528\u6237\u8BF4\u300C\u76F4\u63A5\u5C55\u5F00\u300D\u5219\u8DF3\u8FC7\u3002
\u5B8C\u6210\u540E\u56DE\u586B\u300C\u5DF2\u5B8C\u6210/\u672A\u5B8C\u6210/\u4E0B\u4E00\u6B65\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 progress \u52A8\u4F5C\uFF09\uFF1B\u4EA7\u51FA\u53D1\u5E03\u540E\u6302\u5230\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF0C\u7136\u540E\u5F00\u59CB\u7814\u7A76/\u63A8\u8FDB\u3002`}function Fi({searchRef:i,onOpenSettings:t}){let r=g(c=>c.mode),o=g(c=>c.device),n=g(c=>c.cloudBase),s=g(c=>c.canUndo),m=g(c=>c.query),[b,v]=e.default.useState(m);e.default.useEffect(()=>{v(m)},[m]);let u=r==="cloud",p=u?a("\u4E91\u7AEF\u6A21\u5F0F"):a("\u672C\u673A\u6A21\u5F0F"),E=u?n?`${p} \xB7 ${n}`:p:o?`${p} \xB7 ${o}`:p;return e.default.createElement("header",{className:"ip-topbar","data-window-drag":""},e.default.createElement("div",{className:"ip-brand"},e.default.createElement("span",{className:"ip-brand-mark"},e.default.createElement(D,{name:"bulb",size:17,stroke:1.7})),e.default.createElement("span",{className:"ip-title"},a("\u7075\u611F\u6C60")),e.default.createElement("span",{className:`ip-mode ${u?"is-cloud":""}`,title:E},e.default.createElement("i",{"aria-hidden":"true"}),p)),e.default.createElement("span",{className:"ip-topbar-spacer"}),e.default.createElement("div",{className:"ip-search"},e.default.createElement("span",{className:"ip-search-icon"},e.default.createElement(D,{name:"search",size:14})),e.default.createElement("input",{ref:i,type:"text",value:b,placeholder:a("\u641C\u7D22\u60F3\u6CD5\u2026"),"aria-label":a("\u641C\u7D22\u60F3\u6CD5"),onChange:c=>{v(c.target.value),re(c.target.value)}}),b?e.default.createElement("span",{className:"ip-search-clear"},e.default.createElement(H,{icon:"close",size:12,label:a("\u6E05\u7A7A\u641C\u7D22"),onClick:()=>{v(""),re(""),i.current?.focus()}})):null),s&&!u?e.default.createElement(H,{icon:"undo",label:a("\u64A4\u9500\u4E0A\u4E00\u6B65"),onClick:()=>Ne()}):null,e.default.createElement(H,{icon:"refresh",label:a("\u5237\u65B0"),onClick:()=>He()}),e.default.createElement(H,{icon:"settings",label:a("\u8BBE\u7F6E"),onClick:t}))}var ji=208;function qi(i){i&&(i.style.height="auto",i.style.height=`${Math.min(i.scrollHeight,ji)}px`)}function Hi({highlight:i}){let[t,r]=e.default.useState(""),[o,n]=e.default.useState(""),[s,m]=e.default.useState(""),[b,v]=e.default.useState(""),[u,p]=e.default.useState(!1),[E,c]=e.default.useState(!1),[z,B]=e.default.useState(!1),h=e.default.useRef(null);e.default.useEffect(()=>{qi(h.current)},[t,u]);let K=async()=>{if(E)return;let l=t.trim(),O=o.trim();if(!l&&!O){S(a("\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60"),{error:!0}),h.current?.focus();return}let x={raw_text:l};O&&(x.title=O);let y=s.trim();y&&(x.summary=y);let T=pi(b);T.length&&(x.tags=T),c(!0);let J=await Je(x);c(!1),J&&(r(""),n(""),m(""),v(""),p(!1),window.requestAnimationFrame(()=>{let I=h.current;I&&(I.style.height="auto",I.focus())}))},_=l=>{if((l.metaKey||l.ctrlKey)&&l.key==="Enter"){l.preventDefault(),K();return}l.key==="Escape"&&u&&(l.stopPropagation(),p(!1))};return e.default.createElement("section",{className:`ip-capture ${z?"is-focused":""} ${i?"is-highlight":""}`,"aria-label":a("\u5F55\u5165\u7075\u611F")},e.default.createElement("div",{className:"ip-capture-main"},e.default.createElement("textarea",{ref:h,className:"ip-capture-input",rows:2,value:t,placeholder:a("\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60"),"aria-label":a("\u60F3\u6CD5\u539F\u6587"),onFocus:()=>B(!0),onBlur:()=>B(!1),onChange:l=>r(l.target.value),onKeyDown:_}),e.default.createElement("div",{className:"ip-capture-side"},e.default.createElement("button",{type:"button",className:`ip-capture-toggle ${u?"is-open":""}`,"aria-expanded":u,onClick:()=>p(l=>!l)},e.default.createElement(D,{name:"chevD",size:13}),e.default.createElement("span",null,a(u?"\u6536\u8D77\u9009\u9879":"\u66F4\u591A\u9009\u9879"))),e.default.createElement("span",{className:"ip-cmdhint"},a("\u2318/Ctrl+Enter \u4FDD\u5B58")),e.default.createElement(C,{variant:"primary",icon:"plus",onClick:K,disabled:E},E?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u5165\u6C60")))),u?e.default.createElement("div",{className:"ip-capture-extra"},e.default.createElement($,{label:a("\u6807\u9898\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:o,onChange:l=>n(l.target.value),placeholder:a("\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57")})),e.default.createElement($,{label:a("\u6807\u7B7E\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:b,onChange:l=>v(l.target.value),placeholder:a("\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053")})),e.default.createElement("div",{className:"ip-span2"},e.default.createElement($,{label:a("\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("textarea",{rows:2,value:s,onChange:l=>m(l.target.value),placeholder:a("\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868")})))):null)}function Ji(){let i=g(o=>o.status),t=g(o=>o.counts),r=g(o=>o.total);return e.default.createElement("nav",{className:"ip-tabs","aria-label":a("\u72B6\u6001\u7B5B\u9009")},Pi.map(o=>{let n=o.key==="all"?t.all||r||0:t[o.key]||0;return e.default.createElement("button",{key:o.key,type:"button",className:`ip-tab ${i===o.key?"is-on":""}`,"aria-pressed":i===o.key,onClick:()=>ye(o.key)},e.default.createElement("span",null,a(o.label)),e.default.createElement("span",{className:"ip-tab-count"},n))}))}function Wi({idea:i,active:t,highlight:r,onClick:o}){let n=Array.isArray(i.tags)?i.tags:[];return e.default.createElement("button",{type:"button",className:`ip-card ${t?"is-on":""} ${r?"is-new":""}`,"aria-current":t?"true":void 0,onClick:o},e.default.createElement("div",{className:"ip-card-title"},R(i)),i.summary?e.default.createElement("div",{className:"ip-card-sum"},i.summary):null,e.default.createElement("div",{className:"ip-card-foot"},e.default.createElement("span",{className:`ip-card-status is-${i.status}`},e.default.createElement("i",{"aria-hidden":"true"}),le(i.status)),e.default.createElement("span",{className:"ip-card-no"},i.idea_no),e.default.createElement("time",{className:"ip-card-time",dateTime:i.updated_at||void 0,title:pe(i.updated_at)},Oi(i.updated_at)),n.slice(0,2).map(s=>e.default.createElement(Se,{key:s},s)),n.length>2?e.default.createElement("span",{className:"ip-muted"},"+",n.length-2):null,e.default.createElement("span",{className:"ip-card-meta"},oi(i.n_updates||0,"1 \u6761\u8FDB\u5C55","{n} \u6761\u8FDB\u5C55"),e.default.createElement("span",{className:"ip-sep"},"\xB7"),oi(i.n_links||0,"1 \u4E2A\u4EA7\u51FA","{n} \u4E2A\u4EA7\u51FA"))))}function Yi({narrow:i}){let t=g(p=>p.ideas),r=g(p=>p.listLoading),o=g(p=>p.status),n=g(p=>p.query),s=g(p=>p.selectedNo),m=g(p=>p.mode),b=g(p=>p.newIdeaNo),v=e.default.useRef(null),u=o!=="all"||!!n.trim();return e.default.useEffect(()=>{b&&v.current?.scrollTo({top:0,behavior:"smooth"})},[b]),r&&!t.length?e.default.createElement(se,{label:a("\u6B63\u5728\u52A0\u8F7D\u2026")}):t.length?e.default.createElement("div",{className:"ip-scroll",ref:v},e.default.createElement("div",{className:"ip-list"},t.map(p=>e.default.createElement(Wi,{key:p.idea_no,idea:p,active:!i&&p.idea_no===s,highlight:p.idea_no===b,onClick:()=>oe(p.idea_no)}))),r?e.default.createElement("div",{className:"ip-list-note"},a("\u6B63\u5728\u5237\u65B0\u2026")):null):e.default.createElement(Ce,{icon:"note",title:u?a("\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5"):a("\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684"),hint:u?a("\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002"):m==="cloud"?a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002"):a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002")},u?e.default.createElement(C,{size:"sm",onClick:()=>{re(""),ye("all")}},a("\u6E05\u7A7A\u641C\u7D22\u4E0E\u7B5B\u9009")):e.default.createElement(C,{size:"sm",onClick:()=>document.querySelector(".ip-capture-input")?.focus()},a("\u5199\u7B2C\u4E00\u6761")))}function Vi({update:i}){let[t,r]=e.default.useState(!1),o=i.content||"",n=o.length>320;return e.default.createElement("li",{className:"ip-tl-item"},e.default.createElement("div",{className:"ip-tl-meta"},e.default.createElement("span",{className:"ip-tl-time"},pe(i.created_at)),i.source?e.default.createElement("span",{className:"ip-src",title:i.source},e.default.createElement(D,{name:"monitor",size:11}),li(i.source)):null),e.default.createElement("div",{className:`ip-tl-content ${n&&!t?"is-clamped":""}`},o),n?e.default.createElement("button",{type:"button",className:"ip-tl-toggle",onClick:()=>r(s=>!s)},t?a("\u6536\u8D77"):a("\u5C55\u5F00\u5168\u90E8")):null)}function Gi({link:i}){let t=_i(i.url),r=/^https?:\/\//i.test(t);return e.default.createElement("li",null,e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(D,{name:"link",size:13})),e.default.createElement("a",{href:t,title:i.url,target:r?"_blank":void 0,rel:r?"noreferrer noopener":void 0},i.title||i.url),i.ref_type==="doc"?e.default.createElement("span",{className:"ip-link-kind"},a("\u6587\u6863")):null,r?e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(D,{name:"upRight",size:12})):null)}function Xi({no:i}){let[t,r]=e.default.useState(""),[o,n]=e.default.useState(!1),s=async m=>{m.preventDefault();let b=t.trim();if(!b){S(a("\u5148\u5199\u70B9\u5185\u5BB9"),{error:!0});return}n(!0);let v=await Ye(i,b);n(!1),v&&r("")};return e.default.createElement("form",{className:"ip-abox",onSubmit:s},e.default.createElement($,{label:a("\u65B0\u589E\u8FDB\u5C55")},e.default.createElement("textarea",{rows:3,value:t,placeholder:a("\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026"),onChange:m=>r(m.target.value),onKeyDown:m=>{(m.metaKey||m.ctrlKey)&&m.key==="Enter"&&s(m)}})),e.default.createElement("div",{className:"ip-abox-foot"},e.default.createElement("span",{className:"ip-muted"},a("\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"primary",type:"submit",disabled:o},o?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u8BB0\u5F55\u8FDB\u5C55"))))}function Qi({no:i}){let[t,r]=e.default.useState(""),[o,n]=e.default.useState(""),[s,m]=e.default.useState(!1);return e.default.createElement("form",{className:"ip-abox",onSubmit:async v=>{v.preventDefault();let u=o.trim();if(!u){S(a("\u5148\u586B\u94FE\u63A5"),{error:!0});return}if(!/^https?:\/\//i.test(u)&&/^[\w-]+(\.[\w-]+)+/.test(u)&&(u=`https://${u}`),!/^https?:\/\//i.test(u)){S(a("\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}m(!0);let p=await Ve(i,{title:t.trim()||u,url:u});m(!1),p&&(r(""),n(""))}},e.default.createElement($,{label:a("\u4EA7\u51FA\u6807\u9898")},e.default.createElement("input",{value:t,placeholder:a("\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55"),onChange:v=>r(v.target.value)})),e.default.createElement($,{label:a("\u94FE\u63A5")},e.default.createElement("input",{value:o,placeholder:"https://\u2026",onChange:v=>n(v.target.value)})),e.default.createElement("div",{className:"ip-abox-foot"},e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"primary",type:"submit",disabled:s},s?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58\u4EA7\u51FA"))))}function Zi({idea:i,onClose:t}){let[r,o]=e.default.useState(i.title||""),[n,s]=e.default.useState(i.summary||""),[m,b]=e.default.useState(i.raw_text||""),[v,u]=e.default.useState((i.tags||[]).join(", ")),[p,E]=e.default.useState(i.source_note||""),[c,z]=e.default.useState(!1),B=async h=>{h.preventDefault();let K=r.trim();if(!K){S(a("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}z(!0);let _=await ke(i.idea_no,{title:K,summary:n.trim(),raw_text:m,tags:pi(v),source_note:p.trim()},a("\u5DF2\u4FDD\u5B58"));z(!1),_&&t()};return e.default.createElement(ne,{title:a("\u7F16\u8F91\u60F3\u6CD5"),onClose:t,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{onClick:t},a("\u53D6\u6D88")),e.default.createElement(C,{variant:"primary",type:"submit",form:"ip-edit-form",disabled:c},c?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},e.default.createElement("form",{id:"ip-edit-form",className:"ip-dialog-rows",onSubmit:B},e.default.createElement($,{label:a("\u6807\u9898")},e.default.createElement("input",{value:r,onChange:h=>o(h.target.value)})),e.default.createElement($,{label:a("\u6458\u8981")},e.default.createElement("textarea",{rows:2,value:n,onChange:h=>s(h.target.value)})),e.default.createElement($,{label:a("\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09")},e.default.createElement("textarea",{rows:6,value:m,onChange:h=>b(h.target.value)})),e.default.createElement($,{label:a("\u6807\u7B7E"),hint:a("\u9017\u53F7\u5206\u9694")},e.default.createElement("input",{value:v,onChange:h=>u(h.target.value)})),e.default.createElement($,{label:a("\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883")},e.default.createElement("input",{value:p,onChange:h=>E(h.target.value)}))))}function Ri({idea:i,onClose:t}){let[r,o]=e.default.useState(!1),n=async()=>{o(!0);let s=await We(i.idea_no);o(!1),s&&t()};return e.default.createElement(ne,{title:a("\u5220\u9664\u60F3\u6CD5"),onClose:t,width:420,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{onClick:t},a("\u53D6\u6D88")),e.default.createElement(C,{variant:"danger-solid",onClick:n,disabled:r},r?a("\u5220\u9664\u4E2D\u2026"):a("\u786E\u8BA4\u5220\u9664")))},e.default.createElement("p",{className:"ip-dialog-note"},a("\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002",{title:R(i),no:i.idea_no})))}function et({narrow:i}){let t=g(d=>d.selectedNo),r=g(d=>d.query),o=g(d=>d.status),n=g(d=>d.detail),s=g(d=>d.detailLoading),m=g(d=>d.detailError),b=g(d=>d.mode),[v,u]=e.default.useState(!1),[p,E]=e.default.useState(!1),[c,z]=e.default.useState(!1),[B,h]=e.default.useState(!1),[K,_]=e.default.useState(!1);if(e.default.useEffect(()=>{u(!1),E(!1),z(!1),h(!1)},[t]),!t){let d=r.trim()!==""||o!=="all";return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement(Ce,{icon:"note",title:d?a("\u6CA1\u6709\u53EF\u663E\u793A\u7684\u8BE6\u60C5"):a("\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5"),hint:d?a("\u5148\u6E05\u7A7A\u641C\u7D22\u6216\u5207\u6362\u72B6\u6001\uFF0C\u518D\u9009\u4E00\u6761\u60F3\u6CD5\u3002"):a("\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002")})))}if(m&&!n)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(D,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},a("\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},m),e.default.createElement(C,{icon:"refresh",onClick:()=>oe(t)},a("\u91CD\u8BD5")))));if(!n)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement(se,{label:a("\u6B63\u5728\u5C55\u5F00\u2026")}));let l=n.idea||{},O=Array.isArray(n.updates)?n.updates:[],x=Array.isArray(n.links)?n.links:[],y=l.idea_no||t,T=async d=>{K||d===l.status||(_(!0),await ke(y,{status:d},a("\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D",{label:le(d)})),_(!1))},J=()=>Q(Ui(l),a("\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4")),I=b==="cloud",j=()=>{if(I){Q($i(l),a("\u5DF2\u590D\u5236\u94FE\u63A5"));return}Q(`\u7075\u611F\u6C60 ${y}\u300A${R(l)}\u300B\uFF08\u672C\u673A\u6A21\u5F0F\uFF1A\u7528 idea_pool \u5DE5\u5177\u6309\u7F16\u53F7\u8BFB\u53D6\uFF0C\u6216\u5728 DSH \u4FA7\u680F\u300C\u7075\u611F\u6C60\u300D\u67E5\u770B\uFF09`,a("\u5DF2\u590D\u5236\u5F15\u7528"))};return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-detail"},e.default.createElement("div",{className:"ip-detail-head"},i?e.default.createElement("div",{className:"ip-detail-back"},e.default.createElement(C,{size:"sm",variant:"ghost",icon:"chevL",onClick:we},a("\u8FD4\u56DE\u5217\u8868"))):null,e.default.createElement("div",{className:"ip-detail-title-row"},e.default.createElement("h2",{className:"ip-detail-title"},R(l)||y),e.default.createElement(H,{icon:"edit",label:a("\u7F16\u8F91"),onClick:()=>u(!0)}),e.default.createElement(H,{icon:"trash",label:a("\u5220\u9664"),onClick:()=>E(!0)})),e.default.createElement("div",{className:"ip-detail-meta"},e.default.createElement(ti,{status:l.status},le(l.status)),e.default.createElement("span",{className:"ip-card-no"},y),l.source?e.default.createElement("span",null,a("\u6765\u6E90\uFF1A{source}",{source:li(l.source)})):null,e.default.createElement("span",null,a("\u521B\u5EFA {time}",{time:pe(l.created_at)})),e.default.createElement("span",null,a("\u66F4\u65B0 {time}",{time:pe(l.updated_at)}))),Array.isArray(l.tags)&&l.tags.length?e.default.createElement("div",{className:"ip-detail-tags"},l.tags.map(d=>e.default.createElement(Se,{key:d},d))):null,e.default.createElement("div",{className:"ip-detail-actions"},e.default.createElement(C,{size:"sm",icon:"copy",onClick:J},a("\u590D\u5236\u5C55\u5F00\u6307\u4EE4")),e.default.createElement(C,{size:"sm",icon:"link",onClick:j},a(I?"\u590D\u5236\u94FE\u63A5":"\u590D\u5236\u5F15\u7528")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":a("\u5207\u6362\u72B6\u6001")},ni.map(d=>e.default.createElement("button",{key:d,type:"button",className:l.status===d?"is-on":"","aria-pressed":l.status===d,disabled:K,onClick:()=>T(d)},le(d)))))),e.default.createElement("div",{className:"ip-detail-body"},e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u539F\u6587")),e.default.createElement("span",{className:"ip-section-count"},a("\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(H,{icon:"copy",size:13,label:a("\u590D\u5236\u539F\u6587"),onClick:()=>Q(l.raw_text||"",a("\u5DF2\u590D\u5236\u539F\u6587"))})),e.default.createElement("pre",{className:"ip-raw"},l.raw_text||a("\uFF08\u65E0\u539F\u6587\uFF09"))),l.summary?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u6458\u8981"))),e.default.createElement("div",{className:"ip-summary"},l.summary)):null,l.source_note?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u5907\u6CE8"))),e.default.createElement("div",{className:"ip-text"},l.source_note)):null,e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u5173\u8054\u4EA7\u51FA")),e.default.createElement("span",{className:"ip-section-count"},x.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>h(d=>!d)},a("\u52A0\u4EA7\u51FA"))),x.length?e.default.createElement("ul",{className:"ip-links"},x.map(d=>e.default.createElement(Gi,{key:d.id||d.url,link:d}))):e.default.createElement("p",{className:"ip-muted"},a("\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002")),B?e.default.createElement(Qi,{no:y}):null),e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u8FDB\u5C55")),e.default.createElement("span",{className:"ip-section-count"},O.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>z(d=>!d)},a("\u52A0\u8FDB\u5C55"))),O.length?e.default.createElement("ul",{className:"ip-timeline"},O.map(d=>e.default.createElement(Vi,{key:d.id||d.created_at,update:d}))):e.default.createElement("p",{className:"ip-muted"},a("\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002")),c?e.default.createElement(Xi,{no:y}):null)))),v?e.default.createElement(Zi,{idea:l,onClose:()=>u(!1)}):null,p?e.default.createElement(Ri,{idea:l,onClose:()=>E(!1)}):null)}function ze(i){return String(i||"").trim().replace(/\/+$/,"")}function it({onClose:i}){let t=g(k=>k.settings),r=g(k=>k.storagePath),o=g(k=>k.device),n=g(k=>k.mode),[s,m]=e.default.useState(n==="cloud"?"cloud":"local"),[b,v]=e.default.useState(o),[u,p]=e.default.useState(Z),[E,c]=e.default.useState(""),[z,B]=e.default.useState(!1),[h,K]=e.default.useState(!1),[_,l]=e.default.useState(!1),[O,x]=e.default.useState(!1),[y,T]=e.default.useState(null);e.default.useEffect(()=>{Ge()},[]);let J=e.default.useRef(!1);e.default.useEffect(()=>{if(!t||J.current)return;J.current=!0,m(t.mode==="cloud"?"cloud":"local"),typeof t.device=="string"&&v(t.device);let k=t.cloud&&typeof t.cloud.base=="string"?t.cloud.base:"";p(k||Z)},[t]);let I=t&&t.cloud||{},j=!!I.hasKey,d=typeof I.keyHint=="string"?I.keyHint:"",Ee=typeof I.base=="string"?I.base:"",ci=ze(u)||Ee||Z,ui=t&&typeof t.storagePath=="string"&&t.storagePath||r,Te=k=>{m(k),T(null)},mi=async()=>{if(h)return;let k=ze(u);if(!k){S(a("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(k)){S(a("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}K(!0),T(null);let M=await Qe({base:k,apiKey:E.trim()});if(K(!1),M&&M.ok){T({ok:!0,text:a("\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms",{count:M.count,ms:M.latencyMs})});return}let W=M&&Number(M.status);T({ok:!1,text:W===401||W===403?a("\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key"):a("\u8FDE\u63A5\u5931\u8D25\uFF1A{error}",{error:M&&M.error||a("\u672A\u77E5\u9519\u8BEF")})})},fi=async()=>{if(O||!j||typeof window>"u"||typeof window.confirm!="function"||!window.confirm(a("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002")))return;x(!0);let M=await Ze();x(!1),M&&(c(""),T(null))},gi=async()=>{_||(l(!0),await Re(),l(!1))},hi=async()=>{if(z)return;let k=s==="cloud"?"cloud":"local",M={};t?k!==t.mode&&(M.mode=k):k!==n&&(M.mode=k);let W=b.trim();if(!W){S(a("\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if((t?W!==t.device:W!==o)&&(M.device=W),k==="cloud"){let ee=ze(u);if(!ee){S(a("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(ee)){S(a("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}let ie={};ee!==Ee&&(ie.base=ee);let Le=E.trim();Le&&(ie.apiKey=Le),Object.keys(ie).length&&(M.cloud=ie)}if(Object.keys(M).length===0){i();return}B(!0);let Me=await Xe(M);B(!1),Me&&i()};return e.default.createElement(ne,{title:a("\u8BBE\u7F6E"),onClose:i,width:568,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(C,{onClick:i},a("\u5173\u95ED")),e.default.createElement(C,{variant:"primary",onClick:hi,disabled:z},z?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},e.default.createElement("div",{className:"ip-dialog-rows"},e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8FD0\u884C\u6A21\u5F0F")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":a("\u8FD0\u884C\u6A21\u5F0F")},e.default.createElement("button",{type:"button",className:s==="local"?"is-on":"","aria-pressed":s==="local",onClick:()=>Te("local")},a("\u672C\u673A\u6A21\u5F0F")),e.default.createElement("button",{type:"button",className:s==="cloud"?"is-on":"","aria-pressed":s==="cloud",onClick:()=>Te("cloud")},a("\u4E91\u7AEF\u6A21\u5F0F"))),e.default.createElement("p",{className:"ip-dialog-note"},s==="cloud"?a("\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002",{base:ci}):a("\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002")))),s==="local"?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5B58\u50A8\u8DEF\u5F84")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("code",{className:"ip-dialog-code"},ui||a("\u672A\u77E5")),e.default.createElement("p",{className:"ip-dialog-note"},a("\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8BBE\u5907\u6807\u8BC6")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:b,placeholder:"dsh-mac / dsh-win / volcano",onChange:k=>v(k.target.value)})),e.default.createElement("p",{className:"ip-dialog-note"},a("\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u51FA")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(C,{icon:"download",onClick:()=>ei()},a("\u5BFC\u51FA JSON"))),e.default.createElement("p",{className:"ip-dialog-note"},a("\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002"))))):e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u4E91\u7AEF\u5730\u5740")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:u,placeholder:Z,onChange:k=>{p(k.target.value),T(null)}})),e.default.createElement("p",{className:"ip-dialog-note"},a("\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002",{base:Z})))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("API Key")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",type:"password",autoComplete:"off",value:E,placeholder:j?a("\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}",{hint:d||"****"}):a("\u7C98\u8D34\u4E91\u7AEF API Key"),onChange:k=>{c(k.target.value),T(null)}}),j?e.default.createElement(C,{size:"sm",variant:"danger",onClick:fi,disabled:O||z},O?a("\u6E05\u9664\u4E2D\u2026"):a("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key")):null),e.default.createElement("p",{className:"ip-dialog-note"},j?a("\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002",{hint:d||"****"}):a("\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u6D4B\u8BD5\u8FDE\u63A5")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(C,{size:"sm",icon:"bolt",onClick:mi,disabled:h},h?a("\u6D4B\u8BD5\u4E2D\u2026"):a("\u6D4B\u8BD5\u8FDE\u63A5")),y?e.default.createElement("span",{className:`ip-cloud-status ${y.ok?"is-ok":"is-error"}`},e.default.createElement(D,{name:y.ok?"check":"alert",size:12}),y.text):e.default.createElement("span",{className:"ip-cloud-status"},a("\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5"))))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u5165\u5230\u672C\u673A")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(C,{size:"sm",icon:"download",onClick:gi,disabled:_||!j,title:j?void 0:a("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")},_?a("\u5BFC\u5165\u4E2D\u2026"):a("\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A"))),e.default.createElement("p",{className:"ip-dialog-note"},j?a("\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002"):a("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")))))))}function di(){Oe();let i=g(x=>x.booted),t=g(x=>x.loading),r=g(x=>x.error),o=g(x=>x.canUndo),n=g(x=>x.ideas),s=g(x=>x.status),m=g(x=>x.query),b=g(x=>x.selectedNo),v=g(x=>x.suppressAutoSelect),u=e.default.useRef(null),p=e.default.useRef(null),[E,c]=e.default.useState(1200),[z,B]=e.default.useState(!1),h=E<880,K=E<640;e.default.useEffect(()=>{be()},[]),e.default.useEffect(()=>{let x=u.current;if(!x||typeof ResizeObserver>"u")return;let y=new ResizeObserver(([T])=>{T&&T.contentRect&&c(T.contentRect.width)});return y.observe(x),()=>y.disconnect()},[]),e.default.useEffect(()=>{!i||h||b||v||m.trim()||n.length&&oe(n[0].idea_no)},[i,h,b,v,m,n]),e.default.useEffect(()=>{let x=y=>{let T=y.target,J=T&&T.tagName||"",I=/^(INPUT|TEXTAREA|SELECT)$/.test(J)||!!(T&&T.isContentEditable);if((y.metaKey||y.ctrlKey)&&!y.shiftKey&&(y.key==="z"||y.key==="Z")&&!I&&o){y.preventDefault(),Ne();return}if(y.key==="/"&&!I&&!y.metaKey&&!y.ctrlKey&&!y.altKey){y.preventDefault(),p.current?.focus();return}y.key==="Escape"&&h&&b&&we()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[o,h,b]);let _=!h||!b,l=!h||!!b,O=i&&!t&&!r&&n.length===0&&s==="all"&&!m.trim();return e.default.createElement("div",{className:`ip-root ${h?"is-narrow":""} ${K?"is-compact":""}`,ref:u},e.default.createElement("style",null,Be),e.default.createElement(Fi,{searchRef:p,onOpenSettings:()=>B(!0)}),e.default.createElement(Hi,{highlight:O}),i?e.default.createElement(Ji,null):null,e.default.createElement("div",{className:"ip-body"},t&&!i?e.default.createElement(se,{label:a("\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026")}):r&&!i?e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(D,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},a("\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},r),e.default.createElement(C,{icon:"refresh",onClick:()=>qe()},a("\u91CD\u8BD5"))):e.default.createElement(e.default.Fragment,null,_?e.default.createElement("div",{className:"ip-list-pane"},e.default.createElement(Yi,{narrow:h})):null,l?e.default.createElement(et,{narrow:h}):null)),z?e.default.createElement(it,{onClose:()=>B(!1)}):null,e.default.createElement(ai,null))}function tt({size:i}){return e.default.createElement(D,{name:"bulb",size:i})}var at=["slots"];function rt(i){i.slots.inject("main",()=>i.slots.register({name:"main",key:ri},di)),i.effect(()=>{let t=null,r=()=>{t?.(),t=i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:ri,order:15,label:()=>a("\u7075\u611F\u6C60")},tt))};r();let o=ue(r);return()=>{o(),t?.()}},"dsh-idea-pool: sidebar entry")}
return module.exports}})
