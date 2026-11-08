window.__ModuleLoader__.load({id:"dsh-idea-pool",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Ni=Object.create;var fe=Object.defineProperty;var Si=Object.getOwnPropertyDescriptor;var Ci=Object.getOwnPropertyNames;var zi=Object.getPrototypeOf,Ei=Object.prototype.hasOwnProperty;var Li=(i,t)=>{for(var n in t)fe(i,n,{get:t[n],enumerable:!0})},Ue=(i,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ci(t))!Ei.call(i,r)&&r!==n&&fe(i,r,{get:()=>t[r],enumerable:!(o=Si(t,r))||o.enumerable});return i};var ve=(i,t,n)=>(n=i!=null?Ni(zi(i)):{},Ue(t||!i||!i.__esModule?fe(n,"default",{value:i,enumerable:!0}):n,i)),Mi=i=>Ue(fe({},"__esModule",{value:!0}),i);var dt={};Li(dt,{App:()=>ki,apply:()=>pt,inject:()=>lt});module.exports=Mi(dt);var e=ve(require("react"),1);var Fe=`/* dsh-idea-pool \u5BA2\u6237\u7AEF\u6837\u5F0F\uFF1A\u989C\u8272\u53EA\u8D70 --dsw-alias-* \u8BED\u4E49 token\uFF08\u5E26 fallback\uFF09\uFF0C\u660E\u6697\u4E3B\u9898\u7531\u5BBF\u4E3B\u5207\u6362\u3002 */
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
`;var qe=ve(require("react"),1);var je={\u7075\u611F\u6C60:"Idea Pool",\u672C\u673A\u6A21\u5F0F:"Local mode",\u4E91\u7AEF\u6A21\u5F0F:"Cloud mode",\u641C\u7D22\u60F3\u6CD5:"Search ideas","\u641C\u7D22\u60F3\u6CD5\u2026":"Search ideas\u2026",\u6E05\u7A7A\u641C\u7D22:"Clear search",\u64A4\u9500\u4E0A\u4E00\u6B65:"Undo last step",\u5237\u65B0:"Refresh",\u8BBE\u7F6E:"Settings",\u5173\u95ED:"Close",\u91CD\u8BD5:"Retry",\u5F55\u5165\u7075\u611F:"Capture an idea",\u60F3\u6CD5\u539F\u6587:"Raw idea text","\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60":"Type whatever comes to mind. Enter for a new line, \u2318/Ctrl+Enter to add.","\u2318/Ctrl+Enter \u4FDD\u5B58":"\u2318/Ctrl+Enter to save",\u66F4\u591A\u9009\u9879:"More options",\u6536\u8D77\u9009\u9879:"Hide options",\u5165\u6C60:"Add","\u4FDD\u5B58\u4E2D\u2026":"Saving\u2026",\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60:"Write something first","\u6807\u9898\uFF08\u53EF\u9009\uFF09":"Title (optional)","\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57":"Leave empty to use the first 40 characters","\u6807\u7B7E\uFF08\u53EF\u9009\uFF09":"Tags (optional)","\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053":"Comma-separated, e.g. research, channels","\u6458\u8981\uFF08\u53EF\u9009\uFF09":"Summary (optional)","\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"One-line summary to scan later",\u72B6\u6001\u7B5B\u9009:"Filter by status",\u5168\u90E8:"All",\u5DF2\u5165\u6C60:"Pool",\u63A8\u8FDB\u4E2D:"In progress",\u5DF2\u6536\u53E3:"Done",\u6401\u7F6E:"Parked",\u5207\u6362\u72B6\u6001:"Change status","\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D":"Status changed to \u201C{label}\u201D","1 \u6761\u8FDB\u5C55":"1 update","{n} \u6761\u8FDB\u5C55":"{n} updates","1 \u4E2A\u4EA7\u51FA":"1 output","{n} \u4E2A\u4EA7\u51FA":"{n} outputs","\u6B63\u5728\u52A0\u8F7D\u2026":"Loading\u2026","\u6B63\u5728\u5237\u65B0\u2026":"Refreshing\u2026","\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026":"Loading the idea pool\u2026",\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25:"Failed to load the idea pool",\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684:"The idea pool is empty",\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5:"No matching ideas","\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002":"Try another keyword or status.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add. In local mode the data stays on this machine.",\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5:"Select an idea","\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002":"The list is on the left. On wide screens, click a card to read its raw text, progress and outputs.","\u6B63\u5728\u5C55\u5F00\u2026":"Loading\u2026",\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25:"Failed to load this idea",\u8FD4\u56DE\u5217\u8868:"Back to list",\u539F\u6587:"Raw text","\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB":"Verbatim \xB7 read-only",\u590D\u5236\u539F\u6587:"Copy raw text",\u5DF2\u590D\u5236\u539F\u6587:"Raw text copied",\u6458\u8981:"Summary",\u5907\u6CE8:"Note","\u6765\u6E90\uFF1A{source}":"Source: {source}","\u521B\u5EFA {time}":"Created {time}","\u66F4\u65B0 {time}":"Updated {time}",\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Copy expand prompt",\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Expand prompt copied",\u590D\u5236\u5F15\u7528:"Copy reference",\u5DF2\u590D\u5236\u5F15\u7528:"Reference copied",\u590D\u5236\u94FE\u63A5:"Copy link",\u5DF2\u590D\u5236\u94FE\u63A5:"Link copied",\u7F16\u8F91:"Edit",\u5220\u9664:"Delete",\u5173\u8054\u4EA7\u51FA:"Outputs",\u52A0\u4EA7\u51FA:"Add output","\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002":"No outputs yet \u2014 attach result links once there is progress.",\u4EA7\u51FA\u6807\u9898:"Output title","\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55":"e.g. research report / progress log",\u94FE\u63A5:"Link","\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934":"The link must start with http(s)://",\u5148\u586B\u94FE\u63A5:"Fill in a link first",\u4FDD\u5B58\u4EA7\u51FA:"Save output",\u8FDB\u5C55:"Progress",\u52A0\u8FDB\u5C55:"Add progress","\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002":"No progress entries yet.",\u65B0\u589E\u8FDB\u5C55:"New progress entry","\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026":"Log progress (conclusion / research status / next step)\u2026",\u5148\u5199\u70B9\u5185\u5BB9:"Write something first","\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B":"Entries are append-only; note the machine and next step for cross-machine handoff",\u8BB0\u5F55\u8FDB\u5C55:"Save progress",\u5C55\u5F00\u5168\u90E8:"Show all",\u6536\u8D77:"Collapse",\u6587\u6863:"Doc","\uFF08\u65E0\u539F\u6587\uFF09":"(no raw text)",\u7F16\u8F91\u60F3\u6CD5:"Edit idea",\u6807\u9898:"Title","\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09":"Raw text (keep verbatim)",\u6807\u7B7E:"Tags",\u9017\u53F7\u5206\u9694:"Comma-separated","\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883":"Note / context",\u53D6\u6D88:"Cancel",\u4FDD\u5B58:"Save",\u5DF2\u4FDD\u5B58:"Saved",\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A:"Title can\u2019t be empty",\u5220\u9664\u60F3\u6CD5:"Delete idea","\u5220\u9664\u4E2D\u2026":"Deleting\u2026",\u786E\u8BA4\u5220\u9664:"Delete","\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002":"Deleting \u201C{title}\u201D ({no}) also removes its progress and outputs.",\u5B58\u50A8\u8DEF\u5F84:"Storage path",\u672A\u77E5:"Unknown","\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002":"In local mode every idea lives in this one JSON file; deleting it clears the idea pool.",\u8FD0\u884C\u6A21\u5F0F:"Run mode","\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002":"Local mode: data lives under this machine\u2019s DSH_HOME/idea-pool/ and is read and written directly by the plugin, with no network. Other machines can\u2019t see it.","\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002":"Cloud mode: data lives in the cloud at {base}; local data stays untouched.",\u4E91\u7AEF\u5730\u5740:"Cloud base URL","\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002":"Base URL of the cloud ideas-api; defaults to {base}.",\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A:"Cloud base URL can\u2019t be empty","\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934":"Cloud base URL must start with http(s)://","API Key":"API Key","\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}":"Saved, last four: {hint}","\u7C98\u8D34\u4E91\u7AEF API Key":"Paste the cloud API key","\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002":"API key saved (last four: {hint}); leave empty to keep it.","\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002":"No API key configured yet \u2014 cloud reads and writes need one.","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key":"Clear saved key","\u6E05\u9664\u4E2D\u2026":"Clearing\u2026","\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key":"Saved API key cleared","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002":"Clear the saved API key? Cloud reads and writes will fail until you add it again.","\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002":"No saved API key yet, so importing is unavailable. Fill in a key and save it first.","\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key":"Connection failed: cloud authentication failed \u2014 check the API Key",\u6D4B\u8BD5\u8FDE\u63A5:"Test connection","\u6D4B\u8BD5\u4E2D\u2026":"Testing\u2026","\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5":"Ping the cloud health endpoint with the URL and key above","\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms":"Connected \xB7 {count} ideas in the cloud \xB7 {ms} ms","\u8FDE\u63A5\u5931\u8D25\uFF1A{error}":"Connection failed: {error}",\u672A\u77E5\u9519\u8BEF:"Unknown error",\u5BFC\u5165\u5230\u672C\u673A:"Import to local",\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A:"Import cloud \u2192 local","\u5BFC\u5165\u4E2D\u2026":"Importing\u2026","\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002":"Fetch everything with the saved cloud configuration and merge it locally by idea number. Does not switch mode or delete local data.","\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761":"Imported {imported} and updated {updated} ideas from the cloud",\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165:"The cloud has no new ideas to import",\u8BBE\u5907\u6807\u8BC6:"Device ID","\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"Written into the source field of ideas and progress entries so the origin can be located across machines.",\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A:"Device ID can\u2019t be empty",\u5BFC\u51FA:"Export","\u5BFC\u51FA JSON":"Export JSON","\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002":"Export all ideas, progress and outputs into a single JSON file for backup or migration.","\u5DF2\u5BFC\u51FA JSON":"JSON exported",\u521A\u521A:"just now","{n} \u5206\u949F\u524D":"{n} min ago",\u672C\u673A:"Local",\u706B\u5C71\u4E91:"Volcano Cloud",\u624B\u52A8:"Manual",\u7F51\u9875:"Web",\u98DE\u4E66:"Feishu",\u5DF2\u590D\u5236:"Copied","\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236":"Copy failed \u2014 select and copy manually","\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}":"Can\u2019t reach the local service: {error}","\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09":"Request failed ({status})","\u5DF2\u5165\u6C60 {no}":"Added {no}","\u5DF2\u5220\u9664 {no}":"Deleted {no}",\u5DF2\u8BB0\u5F55\u8FDB\u5C55:"Progress saved",\u5DF2\u6DFB\u52A0\u4EA7\u51FA:"Output added",\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65:"Undid the last step","\u5DF2\u64A4\u9500\uFF1A{label}":"Undone: {label}",\u5DF2\u5237\u65B0:"Refreshed",\u8BBE\u7F6E\u5DF2\u4FDD\u5B58:"Settings saved",\u6E05\u7A7A\u641C\u7D22\u4E0E\u7B5B\u9009:"Clear search and filters",\u5199\u7B2C\u4E00\u6761:"Write the first one",\u6CA1\u6709\u53EF\u663E\u793A\u7684\u8BE6\u60C5:"No detail to show","\u5148\u6E05\u7A7A\u641C\u7D22\u6216\u5207\u6362\u72B6\u6001\uFF0C\u518D\u9009\u4E00\u6761\u60F3\u6CD5\u3002":"Clear the search or filters, then pick an idea.","\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F":"You have unsaved changes. Close anyway?","\u627E\u5230 {n} \u6761\u60F3\u6CD5":"Found {n} ideas","\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002":"Pick one from the list to view it.",\u663E\u793A\u5168\u90E8\u72B6\u6001:"Show all statuses","\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58":"Reading mode \xB7 verbatim",\u590D\u5236\u5C55\u5F00\u63D0\u793A\u8BCD:"Copy expand prompt",\u590D\u5236\u63A5\u529B\u63D0\u793A\u8BCD:"Copy relay prompt","\u5DF2\u590D\u5236\u63D0\u793A\u8BCD\uFF0C\u53EF\u7C98\u8D34\u5230\u5BF9\u8BDD\u7EE7\u7EED":"Prompt copied. Paste it into the conversation to continue.",\u4E0B\u4E00\u6B65\u4ECE\u8FD9\u91CC\u63A5\u7740\u63A8\u8FDB:"Continue from here","\u6CA1\u6709\u66F4\u65E9\u7684\u8FDB\u5C55\u3002":"No earlier updates.","\u539F\u6587\u9ED8\u8BA4\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00":"Original is folded by default. Click to expand.","\u590D\u5236\u540E\u7C98\u8D34\u7ED9 agent\uFF0C\u7EE7\u7EED\u5C55\u5F00\u6216\u63A5\u529B":"Paste to an agent to expand or relay",\u6536\u8D77\u539F\u6587:"Collapse original",\u5C55\u5F00\u539F\u6587:"Expand original",\u8BB0\u8FDB\u5C55:"Log update",\u6570\u636E\u4F4D\u7F6E:"Data location","\u5148\u9009\u6570\u636E\u5B58\u5728\u54EA\u91CC\uFF1B\u5207\u6362\u6A21\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u642C\u6570\u636E\u3002":"Choose where data lives. Switching modes does not move data automatically.",\u8FDE\u63A5\u914D\u7F6E:"Connection","\u4E91\u7AEF\u5730\u5740\u4E0E API Key\uFF1B\u6D4B\u8BD5\u4F7F\u7528\u5F53\u524D\u586B\u5199\u7684\u503C\u3002":"Cloud base and API key. Test uses the values currently filled in.","\u672C\u673A\u6A21\u5F0F\u4E0D\u9700\u8981\u8FDE\u63A5\uFF1B\u5207\u5230\u4E91\u7AEF\u6A21\u5F0F\u540E\u518D\u586B\u5199\u5730\u5740\u4E0E Key\u3002":"Local mode needs no connection. Switch to cloud mode to fill in the base and key.","\u7528\u5F53\u524D\u586B\u5199\u914D\u7F6E\u8BD5\u62C9\u4E00\u6B21\uFF0C\u4E0D\u9700\u8981\u5148\u4FDD\u5B58":"Test the current values without saving first","\u5F53\u524D\u662F\u672C\u673A\u6A21\u5F0F\u3002":"Currently in local mode.",\u6570\u636E\u8FC1\u79FB:"Data migration","\u5BFC\u5165\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\uFF1B\u4E0D\u4F1A\u5220\u9664\u672C\u673A\u73B0\u6709\u6570\u636E\u3002":"Import uses the saved cloud config and does not delete local data.",\u9AD8\u7EA7:"Advanced","\u8BBE\u5907\u6807\u8BC6\u4F1A\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"The device ID is written to the source field of ideas and updates for cross-device handoff.","\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1B\u5148\u4FDD\u5B58\uFF0C\u518D\u5BFC\u5165\u3002":"Connection settings have unsaved changes. Save first, then import.","\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1A\u5148\u70B9\u300C\u4FDD\u5B58\u300D\uFF0C\u518D\u5BFC\u5165\uFF0C\u907F\u514D\u7528\u9519\u5730\u5740\u6216 Key\u3002":"Connection settings have unsaved changes: save first, then import, so the right base and key are used.",\u6700\u65B0\u8FDB\u5C55:"Latest update",\u8FDB\u5C55\u5386\u53F2:"Update history",\u9010\u5B57\u4FDD\u5B58:"Verbatim",\u72B6\u6001:"Status",\u6392\u5E8F:"Sort",\u6700\u8FD1\u521B\u5EFA:"Recently created",\u6700\u8FD1\u66F4\u65B0:"Recently updated",\u4E0B\u4E00\u6B65:"Next step",\u5217\u8868:"List",\u68B3\u7406:"Review",\u89C6\u56FE:"View","{n} \u6761":"{n}",\u5F85\u51B3\u5B9A:"To decide","\u8BB0\u4E0B\u6765\u8FD8\u6CA1\u5F00\u59CB\u7684\uFF0C\u5148\u635E\u4E00\u6761\u770B\u770B":"Captured but not started. Pick one and take a look.",\u968F\u673A\u4E00\u6761:"Random one",\u8BE5\u63A8\u8FDB\u4E86:"Needs a push","\u8D85\u8FC7 14 \u5929\u6CA1\u52A8\uFF0C\u6700\u4E45\u672A\u52A8\u7684\u6392\u524D\u9762":"No updates for 14+ days, stalest first.",\u6B63\u5728\u63A8\u8FDB:"In progress","\u6700\u8FD1 14 \u5929\u6709\u66F4\u65B0":"Updated in the last 14 days","\u5DF2\u6536\u53E3 / \u6401\u7F6E":"Done / parked","\u5DF2\u6536\u53E3 {done} \xB7 \u6401\u7F6E {parked}":"{done} done \xB7 {parked} parked","\u5165\u6C60 {n} \u5929":"Captured {n}d ago","{n} \u5929\u672A\u52A8":"No updates for {n}d","{n} \u8FDB\u5C55":"{n} updates","{n} \u6761\u60F3\u6CD5":"{n} ideas","{n} \u5F85\u51B3\u5B9A":"{n} to decide","{n} \u4E45\u672A\u63A8\u8FDB":"{n} stale","{n} \u6700\u8FD1\u63A8\u8FDB":"{n} moving",\u968F\u673A\u635E\u4E00\u6761:"Pick one at random","\u968F\u673A\u635E\u5230 {no}\uFF0C\u770B\u770B\u6709\u6CA1\u6709\u9057\u6F0F\u3002":"Random pick: {no}. Anything missed?"};var ye=He(),ke=new Set;function He(){return typeof document>"u"||(document.documentElement.lang||navigator.language||"zh").toLowerCase().startsWith("zh")?"zh":"en"}function _i(){ke.forEach(i=>{try{i()}catch(t){console.error("[idea-pool] lang listener failed",t)}})}typeof document<"u"&&typeof MutationObserver<"u"&&new MutationObserver(()=>{let i=He();i!==ye&&(ye=i,_i())}).observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function Je(){return ye}function Ne(i){return ke.add(i),()=>ke.delete(i)}function We(){return qe.default.useSyncExternalStore(Ne,Je)}function a(i,t){let n=Je()==="en"?je[i]??i:i;return t?n.replace(/\{(\w+)\}/g,(o,r)=>t[r]===void 0?o:String(t[r])):n}var Ye=ve(require("react"),1);var Di="idea-pool/",Bi=500;function Ii(){return{all:0,pool:0,active:0,done:0,parked:0}}var g={booted:!1,loading:!0,error:null,mode:"local",device:"",storagePath:"",cloudBase:"",canUndo:!1,counts:Ii(),total:0,status:"all",query:"",sortBy:"created",view:"list",ideas:[],listLoading:!1,selectedNo:null,newIdeaNo:null,suppressAutoSelect:!1,detail:null,detailLoading:!1,detailError:null,settings:null,settingsLoading:!1,toast:null},Ee=new Set;function b(i){g={...g,...typeof i=="function"?i(g):i},Ee.forEach(t=>{try{t()}catch(n){console.error("[idea-pool] store listener failed",n)}})}function Pi(i){return Ee.add(i),()=>Ee.delete(i)}function m(i){return Ye.default.useSyncExternalStore(Pi,()=>i(g))}var Le=null,Se=null;function _(i,{error:t=!1,duration:n=0}={}){clearTimeout(Le);let o=Date.now()+Math.random();b({toast:{id:o,text:i,error:t}}),Le=setTimeout(()=>{g.toast&&g.toast.id===o&&b({toast:null})},n||(t?6e3:3200))}function Ge(){clearTimeout(Le),b({toast:null})}function $(i){_(i&&i.message||String(i),{error:!0}),i&&Number(i.status)===409&&Promise.allSettled([Z(),W(),le()])}async function j(i,t){let n={credentials:"same-origin",...t||{}},o;try{o=await fetch(Di+i,n)}catch(s){throw new Error(a("\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}",{error:s&&s.message||String(s)}))}let r=null;try{r=await o.json()}catch{r=null}if(!o.ok||r&&r.ok===!1){let s=new Error(r&&r.error||a("\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09",{status:o.status}));throw s.status=o.status,s}return r||{}}function R(i,t){return{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(t??{})}}function K(i){let t=Number(i);return Number.isFinite(t)&&t>0?Math.floor(t):0}function Xe(i,t){let n=i&&typeof i=="object"?i:{},o={pool:K(n.pool),active:K(n.active),done:K(n.done),parked:K(n.parked)},r=o.pool+o.active+o.done+o.parked;return o.all=K(n.all)||K(n.total)||K(t)||r,o}function Qe(i){if(!i||typeof i!="object")return;let t={mode:typeof i.mode=="string"?i.mode:g.mode,canUndo:!!i.canUndo,counts:Xe(i.counts,i.total),total:K(i.total)};typeof i.device=="string"&&(t.device=i.device),Object.hasOwn(i,"storagePath")&&(t.storagePath=typeof i.storagePath=="string"?i.storagePath:""),Object.hasOwn(i,"cloudBase")&&(t.cloudBase=typeof i.cloudBase=="string"?i.cloudBase:""),b(t)}async function Z(){let i=await j("api/state");return Qe(i),i}var Ce=0;async function W(){let i=++Ce,t=new URLSearchParams;g.status!=="all"&&t.set("status",g.status);let n=g.query.trim();n&&t.set("q",n),t.set("limit",String(Bi)),t.set("offset","0"),b({listLoading:!0});try{let o=await j("api/ideas?"+t.toString());if(i!==Ce)return;let r=Array.isArray(o.ideas)?o.ideas:[];b({ideas:r,listLoading:!1,counts:Xe(o.counts,o.total),total:K(o.total)||r.length,error:null})}catch(o){throw i===Ce&&b({listLoading:!1}),o}}var ze=0;async function Me(i){let t=++ze;b({detailLoading:!0,detailError:null});try{let n=await j("api/ideas/"+encodeURIComponent(i));return t!==ze||b({detail:n,detailLoading:!1,detailError:null}),n}catch(n){throw t===ze&&b({detailLoading:!1,detailError:n.message}),n}}async function le(){let i=g.selectedNo;if(i)try{await Me(i)}catch{b({selectedNo:null,detail:null,detailError:null})}}async function Ze({withDetail:i=!1}={}){let t=[Z(),W()];i&&g.selectedNo&&t.push(Me(g.selectedNo)),await Promise.allSettled(t)}var se=null;function Te(){return se?(g.booted&&Promise.allSettled([Z(),W()]),se):(se=(async()=>{b({loading:!0,error:null});try{await Promise.all([Z(),W()]),b({booted:!0,loading:!1})}catch(i){b({loading:!1,error:i.message})}})(),se)}function Re(){return se=null,Te()}async function ei({quiet:i=!1}={}){try{await Promise.all([Z(),W()]),await le(),b({booted:!0,loading:!1,error:null}),i||_(a("\u5DF2\u5237\u65B0"))}catch(t){$(t)}}var Ve=null;function _e(i){b({view:i==="review"?"review":"list"})}function ii(i){b({sortBy:i==="updated"?"updated":"created"})}function De(i){g.status!==i&&(b({status:i,selectedNo:null,detail:null,detailError:null}),W().catch($))}function he(i){b({query:i,selectedNo:null,detail:null,detailError:null}),clearTimeout(Ve),Ve=setTimeout(()=>{W().catch($)},220)}function ne(i){if(!i){b({selectedNo:null,detail:null,detailError:null});return}if(g.selectedNo===i&&g.detail)return;let t=g.selectedNo===i?g.detail:null;b({selectedNo:i,detail:t,detailLoading:!0,detailError:null}),Me(i).catch($)}function Be(){b({selectedNo:null,detail:null,detailError:null})}async function ti(i){try{let t={...i};!t.source&&g.device&&(t.source=g.device);let o=(await j("api/ideas",R("POST",t))).idea||null;return await Ze(),_(a("\u5DF2\u5165\u6C60 {no}",{no:o?o.idea_no:""}).trim()),o&&(clearTimeout(Se),b({newIdeaNo:o.idea_no}),Se=setTimeout(()=>{Se=null,g.newIdeaNo===o.idea_no&&b({newIdeaNo:null})},1100)),o}catch(t){return $(t),null}}async function Ie(i,t,n){let o={ideas:g.ideas,detail:g.detail,counts:g.counts},r=t.status&&g.ideas.find(s=>s.idea_no===i)?.status;if(t.status&&r&&r!==t.status){let s={...g.counts};s[r]=Math.max(0,(s[r]||0)-1),s[t.status]=(s[t.status]||0)+1,b({counts:s,ideas:g.ideas.map(u=>u.idea_no===i?{...u,status:t.status}:u),detail:g.detail&&g.detail.idea&&g.detail.idea.idea_no===i?{...g.detail,idea:{...g.detail.idea,status:t.status}}:g.detail})}try{let u=(await j("api/ideas/"+encodeURIComponent(i),R("PATCH",t))).idea||null;return u&&b({ideas:g.ideas.map(p=>p.idea_no===i?{...p,...u}:p),detail:g.detail&&g.detail.idea&&g.detail.idea.idea_no===i?{...g.detail,idea:{...g.detail.idea,...u}}:g.detail}),n&&_(n),u}catch(s){return b(o),$(s),null}}async function ai(i){let t=g.selectedNo===i;try{await j("api/ideas/"+encodeURIComponent(i),{method:"DELETE"}),t&&b({selectedNo:null,detail:null,detailError:null,suppressAutoSelect:!0});try{await Ze()}finally{t&&b({suppressAutoSelect:!1})}return _(a("\u5DF2\u5220\u9664 {no}",{no:i})),!0}catch(n){return $(n),!1}}async function Pe(){try{let i=await j("api/undo",R("POST",{}));i.state&&Qe(i.state),await Promise.allSettled([W(),le()]);let t=typeof i.label=="string"?i.label.trim():"";return _(t?a("\u5DF2\u64A4\u9500\uFF1A{label}",{label:t}):a("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")),!0}catch(i){return $(i),!1}}async function ni(){b({settingsLoading:!0});try{let i=await j("api/settings");return b({settings:i.settings||null,settingsLoading:!1}),i.settings||null}catch(i){return b({settingsLoading:!1}),$(i),null}}async function oi(i){try{let n=(await j("api/settings",R("POST",i))).settings||null,o=g.mode;b({settings:n}),n&&n.mode&&n.mode!==o&&b({ideas:[],selectedNo:null,detail:null,detailError:null,canUndo:!1}),_(a("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58"));try{await Z(),await W(),await le(),b({booted:!0,loading:!1,error:null})}catch(r){$(r)}return n}catch(t){return $(t),null}}async function ri({base:i,apiKey:t}={}){let n={},o=typeof i=="string"?i.trim():"",r=typeof t=="string"?t.trim():"";o&&(n.base=o),r&&(n.apiKey=r);try{let s=await j("api/cloud/test",R("POST",n));return{ok:!0,base:typeof s.base=="string"?s.base:"",count:K(s.count),latencyMs:K(s.latencyMs)}}catch(s){return{ok:!1,error:s&&s.message||String(s),status:s&&Number.isInteger(s.status)?s.status:0}}}async function si(){try{let i=await j("api/settings",R("POST",{cloud:{clearKey:!0}}));return b({settings:i.settings||g.settings}),_(a("\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key")),i.settings||null}catch(i){return $(i),null}}async function li(){try{let i=await j("api/cloud/import-local",R("POST",{})),t=K(i.imported),n=K(i.updated),o=K(i.total);return _(t||n?a("\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761",{imported:t,updated:n}):a("\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165")),await Promise.allSettled([Z(),W(),le()]),{imported:t,updated:n,total:o}}catch(i){return $(i),null}}function Ai(){let i=new Date,t=n=>String(n).padStart(2,"0");return`${i.getFullYear()}${t(i.getMonth()+1)}${t(i.getDate())}`}function Oi(i,t){let n=new Blob([t],{type:"application/json;charset=utf-8"}),o=URL.createObjectURL(n),r=document.createElement("a");r.href=o,r.download=i,r.style.display="none",document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}async function pi(){try{let i=await j("api/export"),t=i&&i.data?i.data:i;return Oi(`idea-pool-${Ai()}.json`,JSON.stringify(t,null,2)),_(a("\u5DF2\u5BFC\u51FA JSON")),!0}catch(i){return $(i),!1}}var v=ve(require("react"),1);var Ki={bulb:"M12 3a6 6 0 0 1 3.5 10.9c-.9.6-1.5 1.5-1.5 2.5v.6h-4v-.6c0-1-.6-1.9-1.5-2.5A6 6 0 0 1 12 3zM10 20h4M12 7.5v3.5",note:"M6 4h8l4 4v12H6zM14 4v4h4M9 12h6M9 16h6",settings:"M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",undo:"M8 6L4 10l4 4M4 10h10a5 5 0 0 1 0 10h-3",refresh:"M19 8a8 8 0 0 0-14-1L4 9M5 16a8 8 0 0 0 14 1l1-2M4 4v5h5M20 20v-5h-5",search:"M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",close:"M6 6l12 12M18 6L6 18",check:"M5 12.5l4.5 4.5L19 7",chevD:"M6 9.5l6 6 6-6",chevL:"M14.5 5.5L8 12l6.5 6.5",chevR:"M9.5 5.5L16 12l-6.5 6.5",plus:"M12 5v14M5 12h14",edit:"M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",trash:"M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",copy:"M9 9h10v11H9zM5 15V4h10",link:"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",upRight:"M7 17L17 7M8 7h9v9",monitor:"M4 5h16v11H4zM9 20h6M12 16v4",clock:"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l2.5 1.5",download:"M12 4v11M7 11l5 5 5-5M5 20h14",alert:"M12 4l9 16H3zM12 10v4M12 17.5h.01",folder:"M4 7h6l2 2h10v10H4z",tag:"M4 5h8l8 8-6 6-8-8zM8 8.5h.01",spark:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",bolt:"M13 3L5 14h6l-1 7 8-11h-6z",cloud:"M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8.5z",dot:"M12 12h.01"};function B({name:i,size:t=16,stroke:n=1.6,className:o=""}){let r=Ki[i];return r?v.default.createElement("svg",{className:o,width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},v.default.createElement("path",{d:r})):null}function Y({icon:i,label:t,onClick:n,disabled:o,active:r,size:s=16,className:u="",...p}){return v.default.createElement("button",{type:"button",className:`ip-iconbtn ${r?"is-on":""} ${u}`,"aria-label":t,title:t,onClick:n,disabled:o,...p},v.default.createElement(B,{name:i,size:s}))}function L({variant:i="plain",size:t="md",icon:n,children:o,className:r="",title:s,...u}){return v.default.createElement("button",{type:"button",className:`ip-btn is-${i} is-${t} ${r}`,title:s,...u},n?v.default.createElement(B,{name:n,size:t==="sm"?13:15}):null,o?v.default.createElement("span",null,o):null)}function $i({tone:i="neutral",children:t,title:n,className:o=""}){return v.default.createElement("span",{className:`ip-badge is-${i} ${o}`,title:n},t)}function ci({status:i,children:t}){return v.default.createElement($i,{tone:i==="pool"||i==="active"||i==="done"||i==="parked"?i:"neutral"},v.default.createElement("i",{className:"ip-dot","aria-hidden":"true"}),t)}function Ae({children:i}){return v.default.createElement("span",{className:"ip-tag"},i)}function G({label:i,hint:t,children:n}){return v.default.createElement("label",{className:"ip-field"},v.default.createElement("span",{className:"ip-field-label"},i),n,t?v.default.createElement("small",{className:"ip-field-hint"},t):null)}function xe({title:i,onClose:t,children:n,footer:o,width:r=460}){let s=v.default.useRef(null),u=v.default.useRef(t),p=v.default.useRef(null);return u.current=t,v.default.useEffect(()=>{p.current=document.activeElement;let k=()=>{let l=s.current;return l?[...l.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')].filter(D=>!D.disabled&&D.offsetParent!==null):[]},h=l=>{if(l.key==="Escape"){l.preventDefault(),l.stopPropagation(),u.current();return}if(l.key!=="Tab")return;let D=k();if(!D.length)return;let M=D[0],P=D[D.length-1];l.shiftKey&&document.activeElement===M?(l.preventDefault(),P.focus()):!l.shiftKey&&document.activeElement===P&&(l.preventDefault(),M.focus())};window.addEventListener("keydown",h,!0);let w=s.current,z=w&&(w.querySelector("textarea, input, select")||w.querySelector("button"));z&&z.focus({preventScroll:!0});let d=w&&w.closest(".ip-dialog-body");return d&&(d.scrollTop=0),()=>{window.removeEventListener("keydown",h,!0);let l=p.current;l&&typeof l.focus=="function"&&l.isConnected&&l.focus()}},[]),v.default.createElement("div",{className:"ip-dialog-mask",onPointerDown:k=>{k.target===k.currentTarget&&t()}},v.default.createElement("div",{className:"ip-dialog",role:"dialog","aria-modal":"true","aria-label":i,style:{width:r},ref:s},v.default.createElement("div",{className:"ip-dialog-head"},v.default.createElement("h2",null,i),v.default.createElement(Y,{icon:"close",label:a("\u5173\u95ED"),onClick:t})),v.default.createElement("div",{className:"ip-dialog-body"},n),o?v.default.createElement("div",{className:"ip-dialog-foot"},o):null))}function ui(){let i=m(t=>t.toast);return i?v.default.createElement("div",{key:i.id,className:`ip-toast ${i.error?"is-error":""}`,role:i.error?"alert":"status"},v.default.createElement(B,{name:i.error?"alert":"check",size:14}),v.default.createElement("span",{className:"ip-toast-text"},i.text),v.default.createElement("button",{type:"button",className:"ip-toast-close","aria-label":a("\u5173\u95ED"),onClick:Ge},v.default.createElement(B,{name:"close",size:12}))):null}function Oe({icon:i="bulb",title:t,hint:n,children:o}){return v.default.createElement("div",{className:"ip-empty"},v.default.createElement("span",{className:"ip-empty-icon"},v.default.createElement(B,{name:i,size:26})),v.default.createElement("p",{className:"ip-empty-title"},t),n?v.default.createElement("p",{className:"ip-empty-hint"},n):null,o)}function be({label:i}){return v.default.createElement("div",{className:"ip-loading",role:"status"},v.default.createElement("span",{className:"ip-spinner","aria-hidden":"true"}),v.default.createElement("span",null,i))}function di(i){let t=document.createElement("textarea");t.value=i,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0",document.body.appendChild(t),t.select();try{document.execCommand("copy")}finally{t.remove()}}function pe(i,t=a("\u5DF2\u590D\u5236")){let n=()=>_(t),o=()=>_(a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236"),{error:!0});try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(i).then(n,()=>{try{di(i),n()}catch{o()}});return}di(i),n()}catch{o()}}var mi="idea-pool",Ui="https://www.zhaoningyuan.com",oe="https://www.zhaoningyuan.com/ideas/api",hi=["pool","active","done","parked"],xi={pool:"\u5DF2\u5165\u6C60",active:"\u63A8\u8FDB\u4E2D",done:"\u5DF2\u6536\u53E3",parked:"\u6401\u7F6E"},Fi=[{key:"all",label:"\u5168\u90E8"},...hi.map(i=>({key:i,label:xi[i]}))],ji={mac:"Mac","dsh-mac":"Mac",win:"Windows","dsh-win":"Windows",dsh:"\u672C\u673A",volcano:"\u706B\u5C71\u4E91",manual:"\u624B\u52A8",web:"\u7F51\u9875",feishu:"\u98DE\u4E66"};function V(i){return String(i).padStart(2,"0")}function we(i){if(!i)return"";let t=new Date(i);return Number.isNaN(t.getTime())?String(i):`${t.getFullYear()}-${V(t.getMonth()+1)}-${V(t.getDate())} ${V(t.getHours())}:${V(t.getMinutes())}`}function bi(i){if(!i)return"";let t=new Date(i);if(Number.isNaN(t.getTime()))return String(i);let n=Date.now()-t.getTime();if(n>=0&&n<60*1e3)return a("\u521A\u521A");if(n>=0&&n<3600*1e3)return a("{n} \u5206\u949F\u524D",{n:Math.floor(n/6e4)});let o=new Date,r=new Date(o.getFullYear(),o.getMonth(),o.getDate()).getTime();return t.getTime()>=r?`${V(t.getHours())}:${V(t.getMinutes())}`:t.getFullYear()===o.getFullYear()?`${V(t.getMonth()+1)}-${V(t.getDate())}`:`${t.getFullYear()}-${V(t.getMonth()+1)}-${V(t.getDate())}`}function gi(i){if(!i)return"";let t=String(i).toLowerCase();return a(ji[t]||String(i))}function ce(i){return a(xi[i]||i||"")}function qi(i){let t=String(i||"").trim();return!t||/^(javascript|data|vbscript):/i.test(t)?"#":t}function Hi(i){return`${Ui}/ideas/#${i.idea_no}`}function re(i){return String(i&&i.title||"").replace(/\s+/g," ").trim()||i&&i.idea_no||""}function wi(i){return String(i||"").split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function fi(i,t,n){return a(i===1?t:n,{n:i})}var Ji=1440*60*1e3;function ee(i){let t=new Date(i||0).getTime();return!t||Number.isNaN(t)?0:Math.max(0,Math.floor((Date.now()-t)/Ji))}function Wi(i){let n=(String(i.summary||"").trim()||String(i.raw_text||"").trim()).replace(/\s+/g," ");if(!n)return"";let o=n.split(/[。！？!?]/)[0].trim()||n;return o.length>90?o.slice(0,90)+"\u2026":o}function Vi(i){let t=i.idea_no,n=re(i);return"\u8BF7\u5C55\u5F00\u63A8\u8FDB\u7075\u611F\u6C60 "+t+"\u300A"+n+`\u300B\u3002

\u3010\u7EE7\u627F\u8FDB\u5EA6\xB7\u9632\u91CD\u590D\u3011\u5148\u8BFB\u60F3\u6CD5\u8BE6\u60C5\u2014\u2014\u539F\u6587\u3001\u6458\u8981\u3001\u5168\u90E8\u300C\u8FDB\u5C55\u300D\u4E0E\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 get \u52A8\u4F5C\uFF0C\u6216\u8BFB\u672C\u673A /idea-pool/api/ideas/`+t+`\uFF09\u3002
\uFF08\u300C\u8FDB\u5C55\u300D=\u63A5\u529B\u8D26\u672C\uFF1A\u4EE5\u6700\u65B0\u6761\u76EE\u4E3A\u51C6\u7EE7\u627F\uFF0C\u5DF2\u5B8C\u6210\u7684\u4E0D\u91CD\u505A\u2014\u2014\u5305\u62EC\u5176\u4ED6\u673A\u5668\u505A\u8FC7\u7684\uFF09
\u5982\u672C\u60F3\u6CD5\u66FE\u5728\u5176\u4ED6\u673A\u5668/\u4F1A\u8BDD\u63A8\u8FDB\u8FC7\uFF08\u4E0D\u786E\u5B9A\u5C31\u5148\u67E5\uFF09\uFF1A\u5F00\u5DE5\u524D\u5148\u505A\u8DE8\u673A\u67E5\u91CD\uFF08\u68C0\u7D22\u5404\u673A\u4F1A\u8BDD\u5E93\u3001\u5B9A\u65F6\u4EFB\u52A1\u4E0E\u6280\u80FD\uFF09\uFF0C\u5E76\u56DE\u586B\u4E00\u6761\u300C\u5F00\u5DE5\u5BF9\u9F50\u300D\u8FDB\u5C55\uFF08\u672C\u6B21\u8303\u56F4+\u4E0D\u91CD\u505A\u9879\uFF09\u3002
\u3010\u63A8\u8FDB\u8BB0\u5F55\u3011\u5148\u8BFB\u8BB0\u5F55\u6587\u6863\uFF08\u82E5\u6709\uFF09\u5E76\u5728\u5B8C\u6210\u540E\u8FFD\u52A0\u672C\u8F6E\u6761\u76EE\u3002
\u3010\u5148\u6F84\u6E05\u540E\u5F00\u5DE5\u3011\u7EE7\u627F\u68C0\u67E5\u4E4B\u540E\u3001\u52A8\u624B\u4E4B\u524D\uFF1A\u6309 brainstorming \u6F84\u6E05\u671F\u7EAA\u5F8B\u5411\u7528\u6237\u8FFD\u95EE 3~5 \u4E2A\u5173\u952E\u95EE\u9898\u2014\u2014\u53EA\u95EE\u4F1A\u6539\u53D8\u65B9\u5411\u3001\u53EA\u6709\u7528\u6237\u80FD\u7B54\u7684\uFF08\u80FD\u81EA\u67E5\u7684\u5148\u67E5\uFF09\uFF1B\u5C0F\u60F3\u6CD5\u53EF\u5C11\u95EE\uFF1B\u7528\u6237\u8BF4\u300C\u76F4\u63A5\u5C55\u5F00\u300D\u5219\u8DF3\u8FC7\u3002
\u5B8C\u6210\u540E\u56DE\u586B\u300C\u5DF2\u5B8C\u6210/\u672A\u5B8C\u6210/\u4E0B\u4E00\u6B65\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 progress \u52A8\u4F5C\uFF09\uFF1B\u4EA7\u51FA\u53D1\u5E03\u540E\u6302\u5230\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF0C\u7136\u540E\u5F00\u59CB\u7814\u7A76/\u63A8\u8FDB\u3002`}function Yi({searchRef:i,onOpenSettings:t}){let n=m(d=>d.mode),o=m(d=>d.device),r=m(d=>d.cloudBase),s=m(d=>d.canUndo),u=m(d=>d.query),[p,k]=e.default.useState(u);e.default.useEffect(()=>{k(u)},[u]);let h=n==="cloud",w=h?a("\u4E91\u7AEF\u6A21\u5F0F"):a("\u672C\u673A\u6A21\u5F0F"),z=h?r?`${w} \xB7 ${r}`:w:o?`${w} \xB7 ${o}`:w;return e.default.createElement("header",{className:"ip-topbar","data-window-drag":""},e.default.createElement("div",{className:"ip-brand"},e.default.createElement("span",{className:"ip-brand-mark"},e.default.createElement(B,{name:"bulb",size:17,stroke:1.7})),e.default.createElement("span",{className:"ip-title"},a("\u7075\u611F\u6C60")),e.default.createElement("span",{className:`ip-mode ${h?"is-cloud":""}`,title:z},e.default.createElement("i",{"aria-hidden":"true"}),w)),e.default.createElement("span",{className:"ip-topbar-spacer"}),e.default.createElement("div",{className:"ip-search"},e.default.createElement("span",{className:"ip-search-icon"},e.default.createElement(B,{name:"search",size:14})),e.default.createElement("input",{ref:i,type:"text",value:p,placeholder:a("\u641C\u7D22\u60F3\u6CD5\u2026"),"aria-label":a("\u641C\u7D22\u60F3\u6CD5"),onChange:d=>{k(d.target.value),he(d.target.value)}}),p?e.default.createElement("span",{className:"ip-search-clear"},e.default.createElement(Y,{icon:"close",size:12,label:a("\u6E05\u7A7A\u641C\u7D22"),onClick:()=>{k(""),he(""),i.current?.focus()}})):null),s&&!h?e.default.createElement(Y,{icon:"undo",label:a("\u64A4\u9500\u4E0A\u4E00\u6B65"),onClick:()=>Pe()}):null,e.default.createElement(Y,{icon:"refresh",label:a("\u5237\u65B0"),onClick:()=>ei()}),e.default.createElement(Y,{icon:"settings",label:a("\u8BBE\u7F6E"),onClick:t}))}var Gi=208;function Xi(i){i&&(i.style.height="auto",i.style.height=`${Math.min(i.scrollHeight,Gi)}px`)}function Qi({highlight:i}){let[t,n]=e.default.useState(""),[o,r]=e.default.useState(""),[s,u]=e.default.useState(""),[p,k]=e.default.useState(""),[h,w]=e.default.useState(!1),[z,d]=e.default.useState(!1),[l,D]=e.default.useState(!1),M=e.default.useRef(null),P=e.default.useRef({raw:t,title:o,summary:s,tags:p});P.current={raw:t,title:o,summary:s,tags:p},e.default.useEffect(()=>{Xi(M.current)},[t,h]);let y=async()=>{if(z)return;let E=t.trim(),O=o.trim();if(!E&&!O){_(a("\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60"),{error:!0}),M.current?.focus();return}let A={raw_text:E};O&&(A.title=O);let x=s.trim();x&&(A.summary=x);let S=wi(p);S.length&&(A.tags=S);let N={raw:t,title:o,summary:s,tags:p};d(!0);let H=await ti(A);if(d(!1),!H)return;n(T=>T===N.raw?"":T),r(T=>T===N.title?"":T),u(T=>T===N.summary?"":T),k(T=>T===N.tags?"":T);let f=P.current;f.raw===N.raw&&f.title===N.title&&f.summary===N.summary&&f.tags===N.tags&&(w(!1),window.requestAnimationFrame(()=>{let T=M.current;T&&(T.style.height="auto",T.focus())}))},U=E=>{if((E.metaKey||E.ctrlKey)&&E.key==="Enter"){E.preventDefault(),y();return}E.key==="Escape"&&h&&(E.stopPropagation(),w(!1))};return e.default.createElement("section",{className:`ip-capture ${!l&&!h&&!t&&!o&&!s&&!p?"is-collapsed":""} ${l?"is-focused":""} ${i?"is-highlight":""}`,"aria-label":a("\u5F55\u5165\u7075\u611F")},e.default.createElement("div",{className:"ip-capture-main"},e.default.createElement("textarea",{ref:M,className:"ip-capture-input",rows:2,value:t,placeholder:a("\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60"),"aria-label":a("\u60F3\u6CD5\u539F\u6587"),onFocus:()=>D(!0),onBlur:()=>D(!1),onChange:E=>n(E.target.value),onKeyDown:U}),e.default.createElement("div",{className:"ip-capture-side"},e.default.createElement("button",{type:"button",className:`ip-capture-toggle ${h?"is-open":""}`,"aria-expanded":h,onClick:()=>w(E=>!E)},e.default.createElement(B,{name:"chevD",size:13}),e.default.createElement("span",null,a(h?"\u6536\u8D77\u9009\u9879":"\u66F4\u591A\u9009\u9879"))),e.default.createElement("span",{className:"ip-cmdhint"},a("\u2318/Ctrl+Enter \u4FDD\u5B58")),e.default.createElement(L,{variant:"primary",icon:"plus",onClick:y,disabled:z},z?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u5165\u6C60")))),h?e.default.createElement("div",{className:"ip-capture-extra"},e.default.createElement(G,{label:a("\u6807\u9898\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:o,onChange:E=>r(E.target.value),placeholder:a("\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57")})),e.default.createElement(G,{label:a("\u6807\u7B7E\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:p,onChange:E=>k(E.target.value),placeholder:a("\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053")})),e.default.createElement("div",{className:"ip-span2"},e.default.createElement(G,{label:a("\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("textarea",{rows:2,value:s,onChange:E=>u(E.target.value),placeholder:a("\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868")})))):null)}function Zi(){let i=m(p=>p.status),t=m(p=>p.counts),n=m(p=>p.total),o=m(p=>p.sortBy),[r,s]=e.default.useState(!1),u=e.default.useRef(null);return e.default.useEffect(()=>{if(!r)return;let p=h=>{(!u.current||!u.current.contains(h.target))&&s(!1)},k=h=>{h.key==="Escape"&&s(!1)};return document.addEventListener("pointerdown",p),document.addEventListener("keydown",k),()=>{document.removeEventListener("pointerdown",p),document.removeEventListener("keydown",k)}},[r]),e.default.createElement("nav",{className:"ip-tabs","aria-label":a("\u72B6\u6001\u7B5B\u9009")},Fi.map(p=>{let k=p.key==="all"?t.all||n||0:t[p.key]||0;return e.default.createElement("button",{key:p.key,type:"button",className:`ip-tab ${i===p.key?"is-on":""}`,"aria-pressed":i===p.key,onClick:()=>De(p.key)},e.default.createElement("span",null,a(p.label)),e.default.createElement("span",{className:"ip-tab-count"},k))}),e.default.createElement("div",{className:"ip-sort",ref:u},e.default.createElement("button",{type:"button",className:"ip-sort-trigger","aria-haspopup":"menu","aria-expanded":r,onClick:()=>s(p=>!p)},e.default.createElement("span",null,a("\u6392\u5E8F")),e.default.createElement("strong",null,o==="updated"?a("\u6700\u8FD1\u66F4\u65B0"):a("\u6700\u8FD1\u521B\u5EFA")),e.default.createElement(B,{name:"chevD",size:12})),r?e.default.createElement("div",{className:"ip-sort-pop",role:"menu","aria-label":a("\u6392\u5E8F")},[{key:"created",label:a("\u6700\u8FD1\u521B\u5EFA")},{key:"updated",label:a("\u6700\u8FD1\u66F4\u65B0")}].map(p=>e.default.createElement("button",{key:p.key,type:"button",role:"menuitemradio","aria-checked":o===p.key,className:o===p.key?"is-on":"",onClick:()=>{ii(p.key),s(!1)}},e.default.createElement("span",null,p.label),o===p.key?e.default.createElement(B,{name:"check",size:13}):null))):null))}function Ri({idea:i,active:t,highlight:n,onClick:o}){let r=Array.isArray(i.tags)?i.tags:[];return e.default.createElement("button",{type:"button",className:`ip-card ${t?"is-on":""} ${n?"is-new":""}`,"aria-current":t?"true":void 0,onClick:o},e.default.createElement("div",{className:"ip-card-title"},re(i)),i.summary?e.default.createElement("div",{className:"ip-card-sum"},i.summary):null,e.default.createElement("div",{className:"ip-card-foot"},e.default.createElement("span",{className:`ip-card-status is-${i.status}`},e.default.createElement("i",{"aria-hidden":"true"}),ce(i.status)),e.default.createElement("span",{className:"ip-card-no"},i.idea_no),e.default.createElement("time",{className:"ip-card-time",dateTime:i.updated_at||void 0,title:we(i.updated_at)},bi(i.updated_at)),r.slice(0,1).map(s=>e.default.createElement(Ae,{key:s},s)),r.length>1?e.default.createElement("span",{className:"ip-muted"},"+",r.length-1):null,i.n_updates||i.n_links?e.default.createElement("span",{className:"ip-card-meta"},i.n_updates?fi(i.n_updates,"1 \u6761\u8FDB\u5C55","{n} \u6761\u8FDB\u5C55"):null,i.n_updates&&i.n_links?e.default.createElement("span",{className:"ip-sep"},"\xB7"):null,i.n_links?fi(i.n_links,"1 \u4E2A\u4EA7\u51FA","{n} \u4E2A\u4EA7\u51FA"):null):null))}function yi({idea:i}){let t=i.status==="active"&&ee(i.updated_at)>14,n=i.status==="pool"?a("\u5165\u6C60 {n} \u5929",{n:ee(i.created_at)}):t?a("{n} \u5929\u672A\u52A8",{n:ee(i.updated_at)}):bi(i.updated_at);return e.default.createElement("button",{type:"button",className:"ip-review-row",onClick:()=>ne(i.idea_no)},e.default.createElement("i",{className:`ip-review-dot is-${i.status}`,"aria-hidden":"true"}),e.default.createElement("span",{className:"ip-review-main"},e.default.createElement("span",{className:"ip-review-title"},re(i)),e.default.createElement("span",{className:"ip-review-sum"},Wi(i))),e.default.createElement("span",{className:"ip-review-meta"},e.default.createElement("span",{className:t?"is-stale":""},n),i.n_updates?e.default.createElement("span",null,a("{n} \u8FDB\u5C55",{n:i.n_updates})):null))}function Ke({title:i,hint:t,items:n,action:o}){return n.length?e.default.createElement("section",{className:"ip-review-section"},e.default.createElement("div",{className:"ip-review-head"},e.default.createElement("h3",null,i),e.default.createElement("span",{className:"ip-review-count"},n.length),e.default.createElement("span",{className:"ip-review-hint"},t),o?e.default.createElement("span",{className:"ip-review-action"},o):null),e.default.createElement("div",{className:"ip-review-rows"},n.map(r=>e.default.createElement(yi,{key:r.idea_no,idea:r})))):null}function et(){let i=m(d=>d.ideas),t=m(d=>d.status),[n,o]=e.default.useState(!1);e.default.useEffect(()=>{(t==="done"||t==="parked")&&o(!0)},[t]);let r=i.filter(d=>d.status==="pool"),s=i.filter(d=>d.status==="active"),u=s.filter(d=>ee(d.updated_at)>14).sort((d,l)=>ee(l.updated_at)-ee(d.updated_at)),p=s.filter(d=>ee(d.updated_at)<=14).sort((d,l)=>String(l.updated_at||"").localeCompare(String(d.updated_at||""))),k=i.filter(d=>d.status==="done"||d.status==="parked"),h=i.filter(d=>d.status==="done").length,w=i.filter(d=>d.status==="parked").length,z=()=>{let d=r.length?r:u.length?u:p.length?p:i;if(!d.length)return;let l=d[Math.floor(Math.random()*d.length)];_(a("\u968F\u673A\u635E\u5230 {no}\uFF0C\u770B\u770B\u6709\u6CA1\u6709\u9057\u6F0F\u3002",{no:l.idea_no})),ne(l.idea_no)};return e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-review"},e.default.createElement("div",{className:"ip-review-summary"},e.default.createElement("div",null,e.default.createElement("strong",null,a("{n} \u6761\u60F3\u6CD5",{n:i.length})),e.default.createElement("span",null,a("{n} \u5F85\u51B3\u5B9A",{n:r.length})," \xB7 ",a("{n} \u4E45\u672A\u63A8\u8FDB",{n:u.length})," \xB7 ",a("{n} \u6700\u8FD1\u63A8\u8FDB",{n:p.length}))),e.default.createElement(L,{size:"sm",variant:"ghost",icon:"spark",onClick:z,disabled:!i.length},a("\u968F\u673A\u635E\u4E00\u6761"))),e.default.createElement(Ke,{title:a("\u5F85\u51B3\u5B9A"),hint:a("\u8BB0\u4E0B\u6765\u8FD8\u6CA1\u5F00\u59CB\u7684\uFF0C\u5148\u635E\u4E00\u6761\u770B\u770B"),items:r,action:r.length?e.default.createElement(L,{size:"sm",variant:"ghost",onClick:z},a("\u968F\u673A\u4E00\u6761")):null}),e.default.createElement(Ke,{title:a("\u8BE5\u63A8\u8FDB\u4E86"),hint:a("\u8D85\u8FC7 14 \u5929\u6CA1\u52A8\uFF0C\u6700\u4E45\u672A\u52A8\u7684\u6392\u524D\u9762"),items:u}),e.default.createElement(Ke,{title:a("\u6B63\u5728\u63A8\u8FDB"),hint:a("\u6700\u8FD1 14 \u5929\u6709\u66F4\u65B0"),items:p}),k.length?e.default.createElement("section",{className:"ip-review-section is-archived"},e.default.createElement("button",{type:"button",className:"ip-review-head is-button","aria-expanded":n,onClick:()=>o(d=>!d)},e.default.createElement("h3",null,a("\u5DF2\u6536\u53E3 / \u6401\u7F6E")),e.default.createElement("span",{className:"ip-review-count"},k.length),e.default.createElement("span",{className:"ip-review-hint"},a("\u5DF2\u6536\u53E3 {done} \xB7 \u6401\u7F6E {parked}",{done:h,parked:w})),e.default.createElement("span",{className:"ip-review-action"},e.default.createElement(B,{name:n?"chevD":"chevR",size:13}))),n?e.default.createElement("div",{className:"ip-review-rows"},k.map(d=>e.default.createElement(yi,{key:d.idea_no,idea:d}))):null):null))}function it({narrow:i}){let t=m(l=>l.ideas),n=m(l=>l.listLoading),o=m(l=>l.status),r=m(l=>l.query),s=m(l=>l.selectedNo),u=m(l=>l.mode),p=m(l=>l.sortBy),k=m(l=>l.view),h=m(l=>l.newIdeaNo),w=e.default.useRef(null),z=o!=="all"||!!r.trim(),d=e.default.useMemo(()=>{let l=p==="updated"?"updated_at":"created_at";return[...t].sort((D,M)=>{let P=typeof D[l]=="string"?D[l]:"",y=typeof M[l]=="string"?M[l]:"";return P!==y?P<y?1:-1:String(D.idea_no)<String(M.idea_no)?1:-1})},[t,p]);return e.default.useEffect(()=>{h&&w.current?.scrollTo({top:0,behavior:"smooth"})},[h]),n&&!t.length?e.default.createElement(be,{label:a("\u6B63\u5728\u52A0\u8F7D\u2026")}):t.length?k==="review"?e.default.createElement(et,null):e.default.createElement("div",{className:"ip-scroll",ref:w},e.default.createElement("div",{className:"ip-list"},d.map(l=>e.default.createElement(Ri,{key:l.idea_no,idea:l,active:!i&&l.idea_no===s,highlight:l.idea_no===h,onClick:()=>ne(l.idea_no)}))),n?e.default.createElement("div",{className:"ip-list-note"},a("\u6B63\u5728\u5237\u65B0\u2026")):null):e.default.createElement(Oe,{icon:"note",title:z?a("\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5"):a("\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684"),hint:z?a("\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002"):u==="cloud"?a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002"):a("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002")},r.trim()?e.default.createElement(L,{size:"sm",onClick:()=>he("")},a("\u6E05\u7A7A\u641C\u7D22")):o!=="all"?e.default.createElement(L,{size:"sm",onClick:()=>De("all")},a("\u663E\u793A\u5168\u90E8\u72B6\u6001")):e.default.createElement(L,{size:"sm",onClick:()=>document.querySelector(".ip-capture-input")?.focus()},a("\u5199\u7B2C\u4E00\u6761")))}function tt({link:i}){let t=qi(i.url),n=/^https?:\/\//i.test(t);return e.default.createElement("li",null,e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(B,{name:"link",size:13})),e.default.createElement("a",{href:t,title:i.url,target:n?"_blank":void 0,rel:n?"noreferrer noopener":void 0},i.title||i.url),i.ref_type==="doc"?e.default.createElement("span",{className:"ip-link-kind"},a("\u6587\u6863")):null,n?e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(B,{name:"upRight",size:12})):null)}function at({idea:i,onClose:t}){let[n,o]=e.default.useState(i.title||""),[r,s]=e.default.useState(i.summary||""),[u,p]=e.default.useState(i.raw_text||""),[k,h]=e.default.useState((i.tags||[]).join(", ")),[w,z]=e.default.useState(i.source_note||""),[d,l]=e.default.useState(!1),D=n!==(i.title||"")||r!==(i.summary||"")||u!==(i.raw_text||"")||k!==(i.tags||[]).join(", ")||w!==(i.source_note||""),M=()=>{D&&!window.confirm(a("\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F"))||t()},P=async y=>{y.preventDefault();let U=n.trim();if(!U){_(a("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}l(!0);let q=await Ie(i.idea_no,{title:U,summary:r.trim(),raw_text:u,tags:wi(k),source_note:w.trim()},a("\u5DF2\u4FDD\u5B58"));l(!1),q&&t()};return e.default.createElement(xe,{title:a("\u7F16\u8F91\u60F3\u6CD5"),onClose:M,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(L,{onClick:M},a("\u53D6\u6D88")),e.default.createElement(L,{variant:"primary",type:"submit",form:"ip-edit-form",disabled:d},d?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},e.default.createElement("form",{id:"ip-edit-form",className:"ip-dialog-rows",onSubmit:P},e.default.createElement(G,{label:a("\u6807\u9898")},e.default.createElement("input",{value:n,onChange:y=>o(y.target.value)})),e.default.createElement(G,{label:a("\u6458\u8981")},e.default.createElement("textarea",{rows:2,value:r,onChange:y=>s(y.target.value)})),e.default.createElement(G,{label:a("\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09")},e.default.createElement("textarea",{rows:6,value:u,onChange:y=>p(y.target.value)})),e.default.createElement(G,{label:a("\u6807\u7B7E"),hint:a("\u9017\u53F7\u5206\u9694")},e.default.createElement("input",{value:k,onChange:y=>h(y.target.value)})),e.default.createElement(G,{label:a("\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883")},e.default.createElement("input",{value:w,onChange:y=>z(y.target.value)}))))}function nt({idea:i,onClose:t}){let[n,o]=e.default.useState(!1),r=async()=>{o(!0);let s=await ai(i.idea_no);o(!1),s&&t()};return e.default.createElement(xe,{title:a("\u5220\u9664\u60F3\u6CD5"),onClose:t,width:420,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(L,{onClick:t},a("\u53D6\u6D88")),e.default.createElement(L,{variant:"danger-solid",onClick:r,disabled:n},n?a("\u5220\u9664\u4E2D\u2026"):a("\u786E\u8BA4\u5220\u9664")))},e.default.createElement("p",{className:"ip-dialog-note"},a("\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002",{title:re(i),no:i.idea_no})))}function vi(i){let t=String(i||"").match(/(?:^|\n)\s*(?:下一步|next step)[：:]\s*([^\n]+)/i);return t?t[1].trim():""}function ot({narrow:i}){let t=m(c=>c.selectedNo),n=m(c=>c.query),o=m(c=>c.status),r=m(c=>c.ideas),s=m(c=>c.total),u=m(c=>c.detail),p=m(c=>c.detailLoading),k=m(c=>c.detailError),h=m(c=>c.mode),[w,z]=e.default.useState(!1),[d,l]=e.default.useState(!1),[D,M]=e.default.useState(!1),[P,y]=e.default.useState(!1),[U,q]=e.default.useState(!1),[E,O]=e.default.useState(!1),[A,x]=e.default.useState(!1),[S,N]=e.default.useState(!1),H=e.default.useRef(null);if(e.default.useEffect(()=>{z(!1),l(!1),M(!1),y(!1),O(!1),x(!1),N(!1)},[t]),e.default.useEffect(()=>{if(!S)return;let c=ae=>{(!H.current||!H.current.contains(ae.target))&&N(!1)},Q=ae=>{ae.key==="Escape"&&N(!1)};return document.addEventListener("pointerdown",c),document.addEventListener("keydown",Q),()=>{document.removeEventListener("pointerdown",c),document.removeEventListener("keydown",Q)}},[S]),!t){let c=n.trim()!==""||o!=="all";return r.length===0||c&&s===0?e.default.createElement("div",{className:"ip-detail-pane"}):e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement(Oe,{icon:"note",title:c?a("\u627E\u5230 {n} \u6761\u60F3\u6CD5",{n:s}):a("\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5"),hint:c?a("\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002"):a("\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002")})))}if(k&&!u)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(B,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},a("\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},k),e.default.createElement(L,{icon:"refresh",onClick:()=>ne(t)},a("\u91CD\u8BD5")))));if(!u)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement(be,{label:a("\u6B63\u5728\u5C55\u5F00\u2026")}));let f=u.idea||{},T=Array.isArray(u.updates)?u.updates:[],X=Array.isArray(u.links)?u.links:[],ie=f.idea_no||t,ue=async c=>{U||c===f.status||(q(!0),await Ie(ie,{status:c},a("\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D",{label:ce(c)})),q(!1))},F=T.length?T[T.length-1]:null,$e=T.slice(0,-1).reverse(),te=!!f.summary||!!f.source_note||T.length>0,me=e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u539F\u6587")),e.default.createElement("span",{className:"ip-section-count"},a("\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(Y,{icon:"copy",size:13,label:a("\u590D\u5236\u539F\u6587"),onClick:()=>pe(f.raw_text||"",a("\u5DF2\u590D\u5236\u539F\u6587"))}),te?e.default.createElement(L,{size:"sm",variant:"ghost",onClick:()=>O(c=>!c)},E?a("\u6536\u8D77\u539F\u6587"):a("\u5C55\u5F00\u539F\u6587")):null),te&&!E?e.default.createElement("button",{type:"button",className:"ip-raw-fold",onClick:()=>O(!0)},e.default.createElement("span",null,a("\u539F\u6587\u9ED8\u8BA4\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00")),e.default.createElement("span",{className:"ip-muted"},a("\u9010\u5B57\u4FDD\u5B58"))):e.default.createElement("pre",{className:"ip-raw"},f.raw_text||a("\uFF08\u65E0\u539F\u6587\uFF09"))),C=f.status==="pool"&&T.length===0?a("\u590D\u5236\u5C55\u5F00\u63D0\u793A\u8BCD"):a("\u590D\u5236\u63A5\u529B\u63D0\u793A\u8BCD"),I=()=>pe(Vi(f),a("\u5DF2\u590D\u5236\u63D0\u793A\u8BCD\uFF0C\u53EF\u7C98\u8D34\u5230\u5BF9\u8BDD\u7EE7\u7EED")),J=h==="cloud",ge=()=>{if(J){pe(Hi(f),a("\u5DF2\u590D\u5236\u94FE\u63A5"));return}pe(`\u7075\u611F\u6C60 ${ie}\u300A${re(f)}\u300B\uFF08\u672C\u673A\u6A21\u5F0F\uFF1A\u7528 idea_pool \u5DE5\u5177\u6309\u7F16\u53F7\u8BFB\u53D6\uFF0C\u6216\u5728 DSH \u4FA7\u680F\u300C\u7075\u611F\u6C60\u300D\u67E5\u770B\uFF09`,a("\u5DF2\u590D\u5236\u5F15\u7528"))};return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-detail"},e.default.createElement("div",{className:"ip-detail-head"},i?e.default.createElement("div",{className:"ip-detail-back"},e.default.createElement(L,{size:"sm",variant:"ghost",icon:"chevL",onClick:Be},a("\u8FD4\u56DE\u5217\u8868"))):null,e.default.createElement("div",{className:"ip-detail-title-row"},e.default.createElement("h2",{className:"ip-detail-title"},re(f)||ie),e.default.createElement(Y,{icon:"edit",label:a("\u7F16\u8F91"),onClick:()=>z(!0)}),e.default.createElement(Y,{icon:"trash",label:a("\u5220\u9664"),onClick:()=>l(!0)})),e.default.createElement("div",{className:"ip-detail-meta"},e.default.createElement(ci,{status:f.status},ce(f.status)),e.default.createElement("span",{className:"ip-card-no"},ie),f.source?e.default.createElement("span",null,a("\u6765\u6E90\uFF1A{source}",{source:gi(f.source)})):null,e.default.createElement("span",null,a("\u521B\u5EFA {time}",{time:we(f.created_at)})),e.default.createElement("span",null,a("\u66F4\u65B0 {time}",{time:we(f.updated_at)}))),Array.isArray(f.tags)&&f.tags.length?e.default.createElement("div",{className:"ip-detail-tags"},f.tags.map(c=>e.default.createElement(Ae,{key:c},c))):null,e.default.createElement("div",{className:"ip-detail-actions"},e.default.createElement(L,{size:"sm",variant:"primary",icon:"plus",onClick:()=>{M(!0),window.requestAnimationFrame(()=>document.querySelector(".ip-abox")?.scrollIntoView({block:"center"}))}},a("\u8BB0\u8FDB\u5C55")),e.default.createElement(L,{size:"sm",icon:"copy",onClick:I,title:a("\u590D\u5236\u540E\u7C98\u8D34\u7ED9 agent\uFF0C\u7EE7\u7EED\u5C55\u5F00\u6216\u63A5\u529B")},C),e.default.createElement(L,{size:"sm",icon:"link",onClick:ge},a(J?"\u590D\u5236\u94FE\u63A5":"\u590D\u5236\u5F15\u7528")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement("div",{className:"ip-status-menu",ref:H},e.default.createElement("button",{type:"button",className:"ip-status-trigger","aria-haspopup":"menu","aria-expanded":S,disabled:U,onClick:()=>N(c=>!c)},e.default.createElement("span",{className:"ip-status-label"},a("\u72B6\u6001")),e.default.createElement("i",{className:`ip-dot is-${f.status}`,"aria-hidden":"true"}),e.default.createElement("span",null,ce(f.status)),e.default.createElement(B,{name:"chevD",size:12})),S?e.default.createElement("div",{className:"ip-status-pop",role:"menu","aria-label":a("\u5207\u6362\u72B6\u6001")},hi.map(c=>e.default.createElement("button",{key:c,type:"button",role:"menuitemradio","aria-checked":f.status===c,className:f.status===c?"is-on":"",disabled:U,onClick:()=>{N(!1),ue(c)}},e.default.createElement("i",{className:`ip-dot is-${c}`,"aria-hidden":"true"}),e.default.createElement("span",null,ce(c)),f.status===c?e.default.createElement(B,{name:"check",size:13}):null))):null))),e.default.createElement("div",{className:"ip-detail-body"},te?null:me,f.summary?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u6458\u8981"))),e.default.createElement("div",{className:"ip-summary"},f.summary)):null,f.source_note?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u5907\u6CE8"))),e.default.createElement("div",{className:"ip-text"},f.source_note)):null,F?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u6700\u65B0\u8FDB\u5C55")),e.default.createElement("span",{className:"ip-section-count"},we(F.created_at)),e.default.createElement("span",{className:"ip-spacer"}),F.source?e.default.createElement("span",{className:"ip-src"},e.default.createElement(B,{name:"monitor",size:11}),gi(F.source)):null),e.default.createElement("div",{className:"ip-latest"},vi(F.content)?e.default.createElement("div",{className:"ip-next-step"},e.default.createElement("span",{className:"ip-next-step-label"},a("\u4E0B\u4E00\u6B65")),e.default.createElement("span",null,vi(F.content))):null,e.default.createElement("div",{className:`ip-latest-content ${F.content&&F.content.length>300&&!A?"is-clamped":""}`},F.content),e.default.createElement("div",{className:"ip-latest-foot"},e.default.createElement("span",{className:"ip-muted"},a("\u4E0B\u4E00\u6B65\u4ECE\u8FD9\u91CC\u63A5\u7740\u63A8\u8FDB")),e.default.createElement("span",{className:"ip-spacer"}),F.content&&F.content.length>300?e.default.createElement(L,{size:"sm",variant:"ghost",onClick:()=>x(c=>!c)},A?a("\u6536\u8D77"):a("\u5C55\u5F00\u5168\u90E8")):null,e.default.createElement(L,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>M(!0)},a("\u8BB0\u8FDB\u5C55"))))):null,e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},a("\u5173\u8054\u4EA7\u51FA")),e.default.createElement("span",{className:"ip-section-count"},X.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(L,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>y(c=>!c)},a("\u52A0\u4EA7\u51FA"))),X.length?e.default.createElement("ul",{className:"ip-links"},X.map(c=>e.default.createElement(tt,{key:c.id||c.url,link:c}))):e.default.createElement("p",{className:"ip-muted"},a("\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002"))),te?me:null))),w?e.default.createElement(at,{idea:f,onClose:()=>z(!1)}):null,d?e.default.createElement(nt,{idea:f,onClose:()=>l(!1)}):null)}function de(i){return String(i||"").trim().replace(/\/+$/,"")}function rt({onClose:i}){let t=m(C=>C.settings),n=m(C=>C.storagePath),o=m(C=>C.device),r=m(C=>C.mode),[s,u]=e.default.useState(r==="cloud"?"cloud":"local"),[p,k]=e.default.useState(o),[h,w]=e.default.useState(oe),[z,d]=e.default.useState(""),[l,D]=e.default.useState(!1),[M,P]=e.default.useState(!1),[y,U]=e.default.useState(!1),[q,E]=e.default.useState(!1),[O,A]=e.default.useState(null);e.default.useEffect(()=>{ni()},[]);let x=e.default.useRef(!1);e.default.useEffect(()=>{if(!t||x.current)return;x.current=!0,u(t.mode==="cloud"?"cloud":"local"),typeof t.device=="string"&&k(t.device);let C=t.cloud&&typeof t.cloud.base=="string"?t.cloud.base:"";w(C||oe)},[t]);let S=t&&t.cloud||{},N=!!S.hasKey,H=typeof S.keyHint=="string"?S.keyHint:"",f=typeof S.base=="string"?S.base:"",T=de(h)||f||oe,X=de(h)!==de(f||oe)||z.trim()!=="",ie=t&&typeof t.storagePath=="string"&&t.storagePath||n,ue=C=>{u(C),A(null)},F=async()=>{if(M)return;let C=de(h);if(!C){_(a("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(C)){_(a("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}P(!0),A(null);let I=await ri({base:C,apiKey:z.trim()});if(P(!1),I&&I.ok){A({ok:!0,text:a("\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms",{count:I.count,ms:I.latencyMs})});return}let J=I&&Number(I.status);A({ok:!1,text:J===401||J===403?a("\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key"):a("\u8FDE\u63A5\u5931\u8D25\uFF1A{error}",{error:I&&I.error||a("\u672A\u77E5\u9519\u8BEF")})})},$e=async()=>{if(q||!N||typeof window>"u"||typeof window.confirm!="function"||!window.confirm(a("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002")))return;E(!0);let I=await si();E(!1),I&&(d(""),A(null))},te=async()=>{y||(U(!0),await li(),U(!1))},me=async()=>{if(l)return;let C=s==="cloud"?"cloud":"local",I={};t?C!==t.mode&&(I.mode=C):C!==r&&(I.mode=C);let J=p.trim();if(!J){_(a("\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if((t?J!==t.device:J!==o)&&(I.device=J),C==="cloud"){let c=de(h);if(!c){_(a("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(c)){_(a("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}let Q={};c!==f&&(Q.base=c);let ae=z.trim();ae&&(Q.apiKey=ae),Object.keys(Q).length&&(I.cloud=Q)}if(Object.keys(I).length===0){i();return}D(!0);let ge=await oi(I);D(!1),ge&&i()};return e.default.createElement(xe,{title:a("\u8BBE\u7F6E"),onClose:i,width:568,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(L,{onClick:i},a("\u5173\u95ED")),e.default.createElement(L,{variant:"primary",onClick:me,disabled:l},l?a("\u4FDD\u5B58\u4E2D\u2026"):a("\u4FDD\u5B58")))},e.default.createElement("div",{className:"ip-dialog-rows"},e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,a("\u6570\u636E\u4F4D\u7F6E")),e.default.createElement("p",null,a("\u5148\u9009\u6570\u636E\u5B58\u5728\u54EA\u91CC\uFF1B\u5207\u6362\u6A21\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u642C\u6570\u636E\u3002"))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8FD0\u884C\u6A21\u5F0F")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":a("\u8FD0\u884C\u6A21\u5F0F")},e.default.createElement("button",{type:"button",className:s==="local"?"is-on":"","aria-pressed":s==="local",onClick:()=>ue("local")},a("\u672C\u673A\u6A21\u5F0F")),e.default.createElement("button",{type:"button",className:s==="cloud"?"is-on":"","aria-pressed":s==="cloud",onClick:()=>ue("cloud")},a("\u4E91\u7AEF\u6A21\u5F0F"))),e.default.createElement("p",{className:"ip-dialog-note"},s==="cloud"?a("\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002",{base:T}):a("\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002")))),s==="local"?e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5B58\u50A8\u8DEF\u5F84")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("code",{className:"ip-dialog-code"},ie||a("\u672A\u77E5")),e.default.createElement("p",{className:"ip-dialog-note"},a("\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002")))):null),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,a("\u8FDE\u63A5\u914D\u7F6E")),e.default.createElement("p",null,s==="cloud"?a("\u4E91\u7AEF\u5730\u5740\u4E0E API Key\uFF1B\u6D4B\u8BD5\u4F7F\u7528\u5F53\u524D\u586B\u5199\u7684\u503C\u3002"):a("\u672C\u673A\u6A21\u5F0F\u4E0D\u9700\u8981\u8FDE\u63A5\uFF1B\u5207\u5230\u4E91\u7AEF\u6A21\u5F0F\u540E\u518D\u586B\u5199\u5730\u5740\u4E0E Key\u3002"))),s==="cloud"?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u4E91\u7AEF\u5730\u5740")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:h,placeholder:oe,onChange:C=>{w(C.target.value),A(null)}})),e.default.createElement("p",{className:"ip-dialog-note"},a("\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002",{base:oe})))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("API Key")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",type:"password",autoComplete:"off",value:z,placeholder:N?a("\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}",{hint:H||"****"}):a("\u7C98\u8D34\u4E91\u7AEF API Key"),onChange:C=>{d(C.target.value),A(null)}}),N?e.default.createElement(L,{size:"sm",variant:"danger",onClick:$e,disabled:q||l},q?a("\u6E05\u9664\u4E2D\u2026"):a("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key")):null),e.default.createElement("p",{className:"ip-dialog-note"},N?a("\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002",{hint:H||"****"}):a("\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u6D4B\u8BD5\u8FDE\u63A5")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(L,{size:"sm",icon:"bolt",onClick:F,disabled:M},M?a("\u6D4B\u8BD5\u4E2D\u2026"):a("\u6D4B\u8BD5\u8FDE\u63A5")),O?e.default.createElement("span",{className:`ip-cloud-status ${O.ok?"is-ok":"is-error"}`},e.default.createElement(B,{name:O.ok?"check":"alert",size:12}),O.text):e.default.createElement("span",{className:"ip-cloud-status"},a("\u7528\u5F53\u524D\u586B\u5199\u914D\u7F6E\u8BD5\u62C9\u4E00\u6B21\uFF0C\u4E0D\u9700\u8981\u5148\u4FDD\u5B58")))))):e.default.createElement("p",{className:"ip-dialog-note"},a("\u5F53\u524D\u662F\u672C\u673A\u6A21\u5F0F\u3002"))),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,a("\u6570\u636E\u8FC1\u79FB")),e.default.createElement("p",null,a("\u5BFC\u5165\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\uFF1B\u4E0D\u4F1A\u5220\u9664\u672C\u673A\u73B0\u6709\u6570\u636E\u3002"))),s==="local"?e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u51FA")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(L,{icon:"download",onClick:()=>pi()},a("\u5BFC\u51FA JSON"))),e.default.createElement("p",{className:"ip-dialog-note"},a("\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002")))):null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u5BFC\u5165\u5230\u672C\u673A")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(L,{size:"sm",icon:"download",onClick:te,disabled:y||!N||X,title:N?X?a("\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1B\u5148\u4FDD\u5B58\uFF0C\u518D\u5BFC\u5165\u3002"):void 0:a("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")},y?a("\u5BFC\u5165\u4E2D\u2026"):a("\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A"))),e.default.createElement("p",{className:"ip-dialog-note"},N?X?a("\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1A\u5148\u70B9\u300C\u4FDD\u5B58\u300D\uFF0C\u518D\u5BFC\u5165\uFF0C\u907F\u514D\u7528\u9519\u5730\u5740\u6216 Key\u3002"):a("\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002"):a("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002"))))),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,a("\u9AD8\u7EA7")),e.default.createElement("p",null,a("\u8BBE\u5907\u6807\u8BC6\u4F1A\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002"))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},a("\u8BBE\u5907\u6807\u8BC6")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:p,placeholder:"dsh-mac / dsh-win / volcano",onChange:C=>k(C.target.value)})))))))}function ki(){We();let i=m(x=>x.booted),t=m(x=>x.loading),n=m(x=>x.error),o=m(x=>x.canUndo),r=m(x=>x.ideas),s=m(x=>x.status),u=m(x=>x.query),p=m(x=>x.selectedNo),k=m(x=>x.total),h=m(x=>x.suppressAutoSelect),w=m(x=>x.view),z=e.default.useRef(null),d=e.default.useRef(null),[l,D]=e.default.useState(1200),[M,P]=e.default.useState(!1),y=l<880,U=l<640;e.default.useEffect(()=>{Te()},[]),e.default.useEffect(()=>{let x=z.current;if(!x||typeof ResizeObserver>"u")return;let S=new ResizeObserver(([N])=>{N&&N.contentRect&&D(N.contentRect.width)});return S.observe(x),()=>S.disconnect()},[]),e.default.useEffect(()=>{!i||y||p||h||u.trim()||r.length&&ne(r[0].idea_no)},[i,y,p,h,u,r]),e.default.useEffect(()=>{let x=S=>{let N=S.target,H=N&&N.tagName||"",f=/^(INPUT|TEXTAREA|SELECT)$/.test(H)||!!(N&&N.isContentEditable);if((S.metaKey||S.ctrlKey)&&!S.shiftKey&&(S.key==="z"||S.key==="Z")&&!f&&o){S.preventDefault(),Pe();return}if(S.key==="/"&&!f&&!S.metaKey&&!S.ctrlKey&&!S.altKey){S.preventDefault(),d.current?.focus();return}S.key==="Escape"&&y&&p&&Be()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[o,y,p]);let q=!y||!p,E=!y||!!p,O=y&&!!p,A=i&&!t&&!n&&r.length===0&&s==="all"&&!u.trim();return e.default.createElement("div",{className:`ip-root ${y?"is-narrow":""} ${U?"is-compact":""} ${O?"is-reading":""} ${w==="review"?"is-review":""}`,ref:z},e.default.createElement("style",null,Fe),e.default.createElement(Yi,{searchRef:d,onOpenSettings:()=>P(!0)}),O?null:e.default.createElement(Qi,{highlight:A}),i&&!O?e.default.createElement(Zi,null):null,e.default.createElement("div",{className:"ip-body"},t&&!i?e.default.createElement(be,{label:a("\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026")}):n&&!i?e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(B,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},a("\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},n),e.default.createElement(L,{icon:"refresh",onClick:()=>Re()},a("\u91CD\u8BD5"))):e.default.createElement(e.default.Fragment,null,q?e.default.createElement("div",{className:"ip-list-pane"},e.default.createElement("div",{className:"ip-list-viewbar"},e.default.createElement("div",{className:"ip-view-switch",role:"group","aria-label":a("\u89C6\u56FE")},e.default.createElement("button",{type:"button",className:w==="list"?"is-on":"","aria-pressed":w==="list",onClick:()=>_e("list")},a("\u5217\u8868")),e.default.createElement("button",{type:"button",className:w==="review"?"is-on":"","aria-pressed":w==="review",onClick:()=>_e("review")},a("\u68B3\u7406"))),e.default.createElement("span",{className:"ip-list-count"},a("{n} \u6761",{n:k}))),e.default.createElement(it,{narrow:y})):null,E?e.default.createElement(ot,{narrow:y}):null)),M?e.default.createElement(rt,{onClose:()=>P(!1)}):null,e.default.createElement(ui,null))}function st({size:i}){return e.default.createElement(B,{name:"bulb",size:i})}var lt=["slots"];function pt(i){i.slots.inject("main",()=>i.slots.register({name:"main",key:mi},ki)),i.effect(()=>{let t=null,n=()=>{t?.(),t=i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:mi,order:15,label:()=>a("\u7075\u611F\u6C60")},st))};n();let o=Ne(n);return()=>{o(),t?.()}},"dsh-idea-pool: sidebar entry")}
return module.exports}})
