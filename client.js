window.__ModuleLoader__.load({id:"dsh-idea-pool",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Mi=Object.create;var ye=Object.defineProperty;var Ti=Object.getOwnPropertyDescriptor;var Bi=Object.getOwnPropertyNames;var Ii=Object.getPrototypeOf,Ai=Object.prototype.hasOwnProperty;var Pi=(i,t)=>{for(var a in t)ye(i,a,{get:t[a],enumerable:!0})},Je=(i,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Bi(t))!Ai.call(i,s)&&s!==a&&ye(i,s,{get:()=>t[s],enumerable:!(o=Ti(t,s))||o.enumerable});return i};var ke=(i,t,a)=>(a=i!=null?Mi(Ii(i)):{},Je(t||!i||!i.__esModule?ye(a,"default",{value:i,enumerable:!0}):a,i)),Oi=i=>Je(ye({},"__esModule",{value:!0}),i);var wt={};Pi(wt,{App:()=>Di,apply:()=>bt,inject:()=>xt});module.exports=Oi(wt);var e=ke(require("react"),1);var Ve=`/* dsh-idea-pool \u5BA2\u6237\u7AEF\u6837\u5F0F\uFF1A\u989C\u8272\u53EA\u8D70 --dsw-alias-* \u8BED\u4E49 token\uFF08\u5E26 fallback\uFF09\uFF0C\u660E\u6697\u4E3B\u9898\u7531\u5BBF\u4E3B\u5207\u6362\u3002 */
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
`;var Ge=ke(require("react"),1);var Ye={\u7075\u611F\u6C60:"Idea Pool",\u672C\u673A\u6A21\u5F0F:"Local mode",\u4E91\u7AEF\u6A21\u5F0F:"Cloud mode",\u641C\u7D22\u60F3\u6CD5:"Search ideas","\u641C\u7D22\u60F3\u6CD5\u2026":"Search ideas\u2026",\u6E05\u7A7A\u641C\u7D22:"Clear search",\u64A4\u9500\u4E0A\u4E00\u6B65:"Undo last step",\u5237\u65B0:"Refresh",\u8BBE\u7F6E:"Settings",\u5173\u95ED:"Close",\u91CD\u8BD5:"Retry",\u5F55\u5165\u7075\u611F:"Capture an idea",\u60F3\u6CD5\u539F\u6587:"Raw idea text","\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60":"Type whatever comes to mind. Enter for a new line, \u2318/Ctrl+Enter to add.","\u2318/Ctrl+Enter \u4FDD\u5B58":"\u2318/Ctrl+Enter to save",\u66F4\u591A\u9009\u9879:"More options",\u6536\u8D77\u9009\u9879:"Hide options",\u5165\u6C60:"Add","\u4FDD\u5B58\u4E2D\u2026":"Saving\u2026",\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60:"Write something first","\u6807\u9898\uFF08\u53EF\u9009\uFF09":"Title (optional)","\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57":"Leave empty to use the first 40 characters","\u6807\u7B7E\uFF08\u53EF\u9009\uFF09":"Tags (optional)","\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053":"Comma-separated, e.g. research, channels","\u6458\u8981\uFF08\u53EF\u9009\uFF09":"Summary (optional)","\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"One-line summary to scan later",\u72B6\u6001\u7B5B\u9009:"Filter by status",\u5168\u90E8:"All",\u5DF2\u5165\u6C60:"Pool",\u63A8\u8FDB\u4E2D:"In progress",\u5DF2\u6536\u53E3:"Done",\u6401\u7F6E:"Parked",\u5207\u6362\u72B6\u6001:"Change status","\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D":"Status changed to \u201C{label}\u201D","1 \u6761\u8FDB\u5C55":"1 update","{n} \u6761\u8FDB\u5C55":"{n} updates","1 \u4E2A\u4EA7\u51FA":"1 output","{n} \u4E2A\u4EA7\u51FA":"{n} outputs","\u6B63\u5728\u52A0\u8F7D\u2026":"Loading\u2026","\u6B63\u5728\u5237\u65B0\u2026":"Refreshing\u2026","\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026":"Loading the idea pool\u2026",\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25:"Failed to load the idea pool",\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684:"The idea pool is empty",\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5:"No matching ideas","\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002":"Try another keyword or status.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add.","\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002":"Write a line above \u2014 Enter for a new line, \u2318/Ctrl+Enter to add. In local mode the data stays on this machine.",\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5:"Select an idea","\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002":"The list is on the left. On wide screens, click a card to read its raw text, progress and outputs.","\u6B63\u5728\u5C55\u5F00\u2026":"Loading\u2026",\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25:"Failed to load this idea",\u8FD4\u56DE\u5217\u8868:"Back to list",\u539F\u6587:"Raw text","\u9010\u5B57\u4FDD\u5B58 \xB7 \u53EA\u8BFB":"Verbatim \xB7 read-only",\u590D\u5236\u539F\u6587:"Copy raw text",\u5DF2\u590D\u5236\u539F\u6587:"Raw text copied",\u6458\u8981:"Summary",\u5907\u6CE8:"Note","\u6765\u6E90\uFF1A{source}":"Source: {source}","\u521B\u5EFA {time}":"Created {time}","\u66F4\u65B0 {time}":"Updated {time}",\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Copy expand prompt",\u5DF2\u590D\u5236\u5C55\u5F00\u6307\u4EE4:"Expand prompt copied",\u590D\u5236\u5F15\u7528:"Copy reference",\u5DF2\u590D\u5236\u5F15\u7528:"Reference copied",\u590D\u5236\u94FE\u63A5:"Copy link",\u5DF2\u590D\u5236\u94FE\u63A5:"Link copied",\u7F16\u8F91:"Edit",\u5220\u9664:"Delete",\u5173\u8054\u4EA7\u51FA:"Outputs",\u52A0\u4EA7\u51FA:"Add output","\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002":"No outputs yet \u2014 attach result links once there is progress.",\u4EA7\u51FA\u6807\u9898:"Output title","\u5982\uFF1A\u7814\u7A76\u62A5\u544A / \u63A8\u8FDB\u8BB0\u5F55":"e.g. research report / progress log",\u94FE\u63A5:"Link","\u94FE\u63A5\u8981\u4EE5 http(s):// \u5F00\u5934":"The link must start with http(s)://",\u5148\u586B\u94FE\u63A5:"Fill in a link first",\u4FDD\u5B58\u4EA7\u51FA:"Save output",\u8FDB\u5C55:"Progress",\u52A0\u8FDB\u5C55:"Add progress","\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002":"No progress entries yet.",\u65B0\u589E\u8FDB\u5C55:"New progress entry","\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026":"Log progress (conclusion / research status / next step)\u2026",\u5148\u5199\u70B9\u5185\u5BB9:"Write something first","\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B":"Entries are append-only; note the machine and next step for cross-machine handoff",\u8BB0\u5F55\u8FDB\u5C55:"Save progress",\u5C55\u5F00\u5168\u90E8:"Show all",\u6536\u8D77:"Collapse",\u6587\u6863:"Doc","\uFF08\u65E0\u539F\u6587\uFF09":"(no raw text)",\u7F16\u8F91\u60F3\u6CD5:"Edit idea",\u6807\u9898:"Title","\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09":"Raw text (keep verbatim)",\u6807\u7B7E:"Tags",\u9017\u53F7\u5206\u9694:"Comma-separated","\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883":"Note / context",\u53D6\u6D88:"Cancel",\u4FDD\u5B58:"Save",\u5DF2\u4FDD\u5B58:"Saved",\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A:"Title can\u2019t be empty",\u5220\u9664\u60F3\u6CD5:"Delete idea","\u5220\u9664\u4E2D\u2026":"Deleting\u2026",\u786E\u8BA4\u5220\u9664:"Delete","\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002":"Deleting \u201C{title}\u201D ({no}) also removes its progress and outputs.",\u5B58\u50A8\u8DEF\u5F84:"Storage path",\u672A\u77E5:"Unknown","\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002":"In local mode every idea lives in this one JSON file; deleting it clears the idea pool.",\u8FD0\u884C\u6A21\u5F0F:"Run mode","\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002":"Local mode: data lives under this machine\u2019s DSH_HOME/idea-pool/ and is read and written directly by the plugin, with no network. Other machines can\u2019t see it.","\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002":"Cloud mode: data lives in the cloud at {base}; local data stays untouched.",\u4E91\u7AEF\u5730\u5740:"Cloud base URL","\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002":"Base URL of the cloud ideas-api; defaults to {base}.",\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A:"Cloud base URL can\u2019t be empty","\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934":"Cloud base URL must start with http(s)://","API Key":"API Key","\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}":"Saved, last four: {hint}","\u7C98\u8D34\u4E91\u7AEF API Key":"Paste the cloud API key","\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002":"API key saved (last four: {hint}); leave empty to keep it.","\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002":"No API key configured yet \u2014 cloud reads and writes need one.","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key":"Clear saved key","\u6E05\u9664\u4E2D\u2026":"Clearing\u2026","\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key":"Saved API key cleared","\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002":"Clear the saved API key? Cloud reads and writes will fail until you add it again.","\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002":"No saved API key yet, so importing is unavailable. Fill in a key and save it first.","\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key":"Connection failed: cloud authentication failed \u2014 check the API Key",\u6D4B\u8BD5\u8FDE\u63A5:"Test connection","\u6D4B\u8BD5\u4E2D\u2026":"Testing\u2026","\u7528\u5F53\u524D\u586B\u5199\u7684\u5730\u5740\u4E0E Key \u8BD5\u62C9\u4E00\u6B21\u4E91\u7AEF\u5065\u5EB7\u68C0\u67E5":"Ping the cloud health endpoint with the URL and key above","\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms":"Connected \xB7 {count} ideas in the cloud \xB7 {ms} ms","\u8FDE\u63A5\u5931\u8D25\uFF1A{error}":"Connection failed: {error}",\u672A\u77E5\u9519\u8BEF:"Unknown error",\u5BFC\u5165\u5230\u672C\u673A:"Import to local",\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A:"Import cloud \u2192 local","\u5BFC\u5165\u4E2D\u2026":"Importing\u2026","\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002":"Fetch everything with the saved cloud configuration and merge it locally by idea number. Does not switch mode or delete local data.","\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761":"Imported {imported} and updated {updated} ideas from the cloud",\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165:"The cloud has no new ideas to import",\u8BBE\u5907\u6807\u8BC6:"Device ID","\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"Written into the source field of ideas and progress entries so the origin can be located across machines.",\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A:"Device ID can\u2019t be empty",\u5BFC\u51FA:"Export","\u5BFC\u51FA JSON":"Export JSON","\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002":"Export all ideas, progress and outputs into a single JSON file for backup or migration.","\u5DF2\u5BFC\u51FA JSON":"JSON exported",\u521A\u521A:"just now","{n} \u5206\u949F\u524D":"{n} min ago",\u672C\u673A:"Local",\u706B\u5C71\u4E91:"Volcano Cloud",\u624B\u52A8:"Manual",\u7F51\u9875:"Web",\u98DE\u4E66:"Feishu",\u5DF2\u590D\u5236:"Copied","\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236":"Copy failed \u2014 select and copy manually","\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}":"Can\u2019t reach the local service: {error}","\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09":"Request failed ({status})","\u5DF2\u5165\u6C60 {no}":"Added {no}","\u5DF2\u5220\u9664 {no}":"Deleted {no}",\u5DF2\u8BB0\u5F55\u8FDB\u5C55:"Progress saved",\u5DF2\u6DFB\u52A0\u4EA7\u51FA:"Output added",\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65:"Undid the last step","\u5DF2\u64A4\u9500\uFF1A{label}":"Undone: {label}",\u5DF2\u5237\u65B0:"Refreshed",\u8BBE\u7F6E\u5DF2\u4FDD\u5B58:"Settings saved",\u6E05\u7A7A\u641C\u7D22\u4E0E\u7B5B\u9009:"Clear search and filters",\u5199\u7B2C\u4E00\u6761:"Write the first one",\u6CA1\u6709\u53EF\u663E\u793A\u7684\u8BE6\u60C5:"No detail to show","\u5148\u6E05\u7A7A\u641C\u7D22\u6216\u5207\u6362\u72B6\u6001\uFF0C\u518D\u9009\u4E00\u6761\u60F3\u6CD5\u3002":"Clear the search or filters, then pick an idea.","\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F":"You have unsaved changes. Close anyway?","\u627E\u5230 {n} \u6761\u60F3\u6CD5":"Found {n} ideas","\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002":"Pick one from the list to view it.",\u663E\u793A\u5168\u90E8\u72B6\u6001:"Show all statuses","\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58":"Reading mode \xB7 verbatim",\u590D\u5236\u5C55\u5F00\u63D0\u793A\u8BCD:"Copy expand prompt",\u590D\u5236\u63A5\u529B\u63D0\u793A\u8BCD:"Copy relay prompt","\u5DF2\u590D\u5236\u63D0\u793A\u8BCD\uFF0C\u53EF\u7C98\u8D34\u5230\u5BF9\u8BDD\u7EE7\u7EED":"Prompt copied. Paste it into the conversation to continue.",\u4E0B\u4E00\u6B65\u4ECE\u8FD9\u91CC\u63A5\u7740\u63A8\u8FDB:"Continue from here","\u6CA1\u6709\u66F4\u65E9\u7684\u8FDB\u5C55\u3002":"No earlier updates.","\u539F\u6587\u9ED8\u8BA4\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00":"Original is folded by default. Click to expand.","\u590D\u5236\u540E\u7C98\u8D34\u7ED9 agent\uFF0C\u7EE7\u7EED\u5C55\u5F00\u6216\u63A5\u529B":"Paste to an agent to expand or relay",\u6536\u8D77\u539F\u6587:"Collapse original",\u5C55\u5F00\u539F\u6587:"Expand original",\u8BB0\u8FDB\u5C55:"Log update",\u6570\u636E\u4F4D\u7F6E:"Data location","\u5148\u9009\u6570\u636E\u5B58\u5728\u54EA\u91CC\uFF1B\u5207\u6362\u6A21\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u642C\u6570\u636E\u3002":"Choose where data lives. Switching modes does not move data automatically.",\u8FDE\u63A5\u914D\u7F6E:"Connection","\u4E91\u7AEF\u5730\u5740\u4E0E API Key\uFF1B\u6D4B\u8BD5\u4F7F\u7528\u5F53\u524D\u586B\u5199\u7684\u503C\u3002":"Cloud base and API key. Test uses the values currently filled in.","\u672C\u673A\u6A21\u5F0F\u4E0D\u9700\u8981\u8FDE\u63A5\uFF1B\u5207\u5230\u4E91\u7AEF\u6A21\u5F0F\u540E\u518D\u586B\u5199\u5730\u5740\u4E0E Key\u3002":"Local mode needs no connection. Switch to cloud mode to fill in the base and key.","\u7528\u5F53\u524D\u586B\u5199\u914D\u7F6E\u8BD5\u62C9\u4E00\u6B21\uFF0C\u4E0D\u9700\u8981\u5148\u4FDD\u5B58":"Test the current values without saving first","\u5F53\u524D\u662F\u672C\u673A\u6A21\u5F0F\u3002":"Currently in local mode.",\u6570\u636E\u8FC1\u79FB:"Data migration","\u5BFC\u5165\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\uFF1B\u4E0D\u4F1A\u5220\u9664\u672C\u673A\u73B0\u6709\u6570\u636E\u3002":"Import uses the saved cloud config and does not delete local data.",\u9AD8\u7EA7:"Advanced","\u8BBE\u5907\u6807\u8BC6\u4F1A\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002":"The device ID is written to the source field of ideas and updates for cross-device handoff.","\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1B\u5148\u4FDD\u5B58\uFF0C\u518D\u5BFC\u5165\u3002":"Connection settings have unsaved changes. Save first, then import.","\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1A\u5148\u70B9\u300C\u4FDD\u5B58\u300D\uFF0C\u518D\u5BFC\u5165\uFF0C\u907F\u514D\u7528\u9519\u5730\u5740\u6216 Key\u3002":"Connection settings have unsaved changes: save first, then import, so the right base and key are used.",\u6700\u65B0\u8FDB\u5C55:"Latest update",\u8FDB\u5C55\u5386\u53F2:"Update history",\u9010\u5B57\u4FDD\u5B58:"Verbatim",\u72B6\u6001:"Status",\u6392\u5E8F:"Sort",\u6700\u8FD1\u521B\u5EFA:"Recently created",\u6700\u8FD1\u66F4\u65B0:"Recently updated",\u4E0B\u4E00\u6B65:"Next step",\u5217\u8868:"List",\u68B3\u7406:"Review",\u89C6\u56FE:"View","{n} \u6761":"{n}",\u5F85\u51B3\u5B9A:"To decide","\u8BB0\u4E0B\u6765\u8FD8\u6CA1\u5F00\u59CB\u7684\uFF0C\u5148\u635E\u4E00\u6761\u770B\u770B":"Captured but not started. Pick one and take a look.",\u968F\u673A\u4E00\u6761:"Random one",\u8BE5\u63A8\u8FDB\u4E86:"Needs a push","\u8D85\u8FC7 14 \u5929\u6CA1\u52A8\uFF0C\u6700\u4E45\u672A\u52A8\u7684\u6392\u524D\u9762":"No updates for 14+ days, stalest first.",\u6B63\u5728\u63A8\u8FDB:"In progress","\u6700\u8FD1 14 \u5929\u6709\u66F4\u65B0":"Updated in the last 14 days","\u5DF2\u6536\u53E3 / \u6401\u7F6E":"Done / parked","\u5DF2\u6536\u53E3 {done} \xB7 \u6401\u7F6E {parked}":"{done} done \xB7 {parked} parked","\u5165\u6C60 {n} \u5929":"Captured {n}d ago","{n} \u5929\u672A\u52A8":"No updates for {n}d","{n} \u8FDB\u5C55":"{n} updates","{n} \u6761\u60F3\u6CD5":"{n} ideas","{n} \u5F85\u51B3\u5B9A":"{n} to decide","{n} \u4E45\u672A\u63A8\u8FDB":"{n} stale","{n} \u6700\u8FD1\u63A8\u8FDB":"{n} moving",\u968F\u673A\u635E\u4E00\u6761:"Pick one at random","\u968F\u673A\u635E\u5230 {no}\uFF0C\u770B\u770B\u6709\u6CA1\u6709\u9057\u6F0F\u3002":"Random pick: {no}. Anything missed?","\u4E00\u53E5\u8BDD\u6458\u8981\uFF08\u53EF\u9009\uFF09":"One-line gist (optional)","\u226460 \u5B57\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868":"Up to 60 chars, easy to scan later",\u4E00\u53E5\u8BDD\u6458\u8981:"One-line gist","\u226460 \u5B57\uFF0C\u65B9\u4FBF\u626B\u5217\u8868":"Up to 60 chars, easy to scan",\u8BE6\u7EC6\u6458\u8981:"Detailed summary","\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u4F1A\u8BDD\u641C\u7D22\u3002":"Session search is not available here.",\u641C\u7D22\u4F1A\u8BDD\u5931\u8D25:"Session search failed","\u5173\u8054 DSH \u4F1A\u8BDD":"Link a DSH session","\u6309\u7F16\u53F7\u300C{no}\u300D\u641C\u7D22\u5F53\u524D DSH \u7684\u4F1A\u8BDD\u5185\u5BB9\uFF1B\u70B9\u4E00\u6761\u5373\u53EF\u7ED1\u5B9A\u3002":'Search this DSH for content containing "{no}"; click one to link it.',"\u6B63\u5728\u641C\u7D22\u4F1A\u8BDD\u2026":"Searching sessions\u2026","\u6CA1\u6709\u641C\u5230\u5305\u542B\u8FD9\u4E2A\u7F16\u53F7\u7684\u4F1A\u8BDD\u3002\u53D1\u9001\u8FC7\u300C\u4E00\u952E\u63A8\u8FDB\u300D\u7684\u4F1A\u8BDD\u901A\u5E38\u80FD\u88AB\u641C\u5230\u3002":"No session contains this idea number yet. Sessions created via One-click advance are usually searchable.",\u8FD9\u6761\u4F1A\u8BDD\u5DF2\u7ECF\u5173\u8054\u8FC7\u4E86:"This session is already linked.",\u5DF2\u5173\u8054\u4F1A\u8BDD:"Session linked",\u4E00\u952E\u63A8\u8FDB:"One-click advance","\u5DF2\u6253\u5F00\u65B0\u4F1A\u8BDD\u5E76\u9884\u586B\u63A8\u8FDB\u63D0\u793A\u8BCD\uFF1B\u53D1\u9001\u540E\u53EF\u56DE\u6765\u300C\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD\u300D\u7ED1\u5B9A\u3002":"Opened a new session with the advance prompt prefilled. After sending, use Find sessions to link it.","\u5F53\u524D\u754C\u9762\u4E0D\u80FD\u76F4\u63A5\u5F00\u65B0\u4F1A\u8BDD\uFF0C\u5DF2\u590D\u5236\u63A8\u8FDB\u63D0\u793A\u8BCD":"This UI cannot open a new session directly; the prompt has been copied.","\u5F53\u524D\u73AF\u5883\u4E0D\u80FD\u6253\u5F00 DSH \u4F1A\u8BDD":"Cannot open DSH sessions here.","\u6253\u5F00\u4F1A\u8BDD\u5931\u8D25\uFF1A{error}":"Could not open session: {error}",\u5173\u8054\u4F1A\u8BDD:"Linked sessions",\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD:"Find sessions","\u8FD8\u6CA1\u6709\u5173\u8054\u4F1A\u8BDD\uFF1B\u4E00\u952E\u63A8\u8FDB\u540E\u53EF\u7528\u300C\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD\u300D\u7ED1\u5B9A\u3002":"No linked sessions yet. After One-click advance, use Find sessions to link it.","\u4F1A\u8BDD\u641C\u7D22\u7D22\u5F15\u672A\u5F00\u542F\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\uFF1B\u4E5F\u53EF\u4EE5\u624B\u52A8\u6311\u9009\u3002":"Session search index is off; showing recent sessions instead.","\u6CA1\u6709\u641C\u5230\u5305\u542B\u7F16\u53F7\u7684\u4F1A\u8BDD\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002":"No session matched the idea number; showing recent sessions.","\u4F1A\u8BDD\u641C\u7D22\u5931\u8D25\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002":"Session search failed; showing recent sessions.","\u4F1A\u8BDD\u641C\u7D22\u4E0D\u53EF\u7528\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002":"Session search is unavailable; showing recent sessions.","\u6CA1\u6709\u53EF\u7528\u7684\u4F1A\u8BDD\u5217\u8868\u3002":"No session list is available."};var _e=Xe(),Ee=new Set;function Xe(){return typeof document>"u"||(document.documentElement.lang||navigator.language||"zh").toLowerCase().startsWith("zh")?"zh":"en"}function $i(){Ee.forEach(i=>{try{i()}catch(t){console.error("[idea-pool] lang listener failed",t)}})}typeof document<"u"&&typeof MutationObserver<"u"&&new MutationObserver(()=>{let i=Xe();i!==_e&&(_e=i,$i())}).observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});function Qe(){return _e}function De(i){return Ee.add(i),()=>Ee.delete(i)}function Ze(){return Ge.default.useSyncExternalStore(De,Qe)}function n(i,t){let a=Qe()==="en"?Ye[i]??i:i;return t?a.replace(/\{(\w+)\}/g,(o,s)=>t[s]===void 0?o:String(t[s])):a}var ei=ke(require("react"),1);var Ui="idea-pool/",Fi=500;function Hi(){return{all:0,pool:0,active:0,done:0,parked:0}}var m={booted:!1,loading:!0,error:null,mode:"local",device:"",storagePath:"",cloudBase:"",canUndo:!1,counts:Hi(),total:0,status:"all",query:"",sortBy:"created",view:"list",ideas:[],listLoading:!1,selectedNo:null,newIdeaNo:null,suppressAutoSelect:!1,detail:null,detailLoading:!1,detailError:null,settings:null,settingsLoading:!1,toast:null},Be=new Set;function w(i){m={...m,...typeof i=="function"?i(m):i},Be.forEach(t=>{try{t()}catch(a){console.error("[idea-pool] store listener failed",a)}})}function ji(i){return Be.add(i),()=>Be.delete(i)}function v(i){return ei.default.useSyncExternalStore(ji,()=>i(m))}var Ie=null,Le=null;function _(i,{error:t=!1,duration:a=0}={}){clearTimeout(Ie);let o=Date.now()+Math.random();w({toast:{id:o,text:i,error:t}}),Ie=setTimeout(()=>{m.toast&&m.toast.id===o&&w({toast:null})},a||(t?6e3:3200))}function ii(){clearTimeout(Ie),w({toast:null})}function $(i){_(i&&i.message||String(i),{error:!0}),i&&Number(i.status)===409&&Promise.allSettled([ne(),Y(),me()])}async function j(i,t){let a={credentials:"same-origin",...t||{}},o;try{o=await fetch(Ui+i,a)}catch(r){throw new Error(n("\u8FDE\u4E0D\u4E0A\u672C\u673A\u670D\u52A1\uFF1A{error}",{error:r&&r.message||String(r)}))}let s=null;try{s=await o.json()}catch{s=null}if(!o.ok||s&&s.ok===!1){let r=new Error(s&&s.error||n("\u8BF7\u6C42\u5931\u8D25\uFF08{status}\uFF09",{status:o.status}));throw r.status=o.status,r}return s||{}}function ee(i,t){return{method:i,headers:{"content-type":"application/json"},body:JSON.stringify(t??{})}}function H(i){let t=Number(i);return Number.isFinite(t)&&t>0?Math.floor(t):0}function ti(i,t){let a=i&&typeof i=="object"?i:{},o={pool:H(a.pool),active:H(a.active),done:H(a.done),parked:H(a.parked)},s=o.pool+o.active+o.done+o.parked;return o.all=H(a.all)||H(a.total)||H(t)||s,o}function ni(i){if(!i||typeof i!="object")return;let t={mode:typeof i.mode=="string"?i.mode:m.mode,canUndo:!!i.canUndo,counts:ti(i.counts,i.total),total:H(i.total)};typeof i.device=="string"&&(t.device=i.device),Object.hasOwn(i,"storagePath")&&(t.storagePath=typeof i.storagePath=="string"?i.storagePath:""),Object.hasOwn(i,"cloudBase")&&(t.cloudBase=typeof i.cloudBase=="string"?i.cloudBase:""),w(t)}async function ne(){let i=await j("api/state");return ni(i),i}var Me=0;async function Y(){let i=++Me,t=new URLSearchParams;m.status!=="all"&&t.set("status",m.status);let a=m.query.trim();a&&t.set("q",a),t.set("limit",String(Fi)),t.set("offset","0"),w({listLoading:!0});try{let o=await j("api/ideas?"+t.toString());if(i!==Me)return;let s=Array.isArray(o.ideas)?o.ideas:[];w({ideas:s,listLoading:!1,counts:ti(o.counts,o.total),total:H(o.total)||s.length,error:null})}catch(o){throw i===Me&&w({listLoading:!1}),o}}var Te=0;async function Ae(i){let t=++Te;w({detailLoading:!0,detailError:null});try{let a=await j("api/ideas/"+encodeURIComponent(i));return t!==Te||w({detail:a,detailLoading:!1,detailError:null}),a}catch(a){throw t===Te&&w({detailLoading:!1,detailError:a.message}),a}}async function me(){let i=m.selectedNo;if(i)try{await Ae(i)}catch{w({selectedNo:null,detail:null,detailError:null})}}async function ai({withDetail:i=!1}={}){let t=[ne(),Y()];i&&m.selectedNo&&t.push(Ae(m.selectedNo)),await Promise.allSettled(t)}var ue=null;function Pe(){return ue?(m.booted&&Promise.allSettled([ne(),Y()]),ue):(ue=(async()=>{w({loading:!0,error:null});try{await Promise.all([ne(),Y()]),w({booted:!0,loading:!1})}catch(i){w({loading:!1,error:i.message})}})(),ue)}function oi(){return ue=null,Pe()}async function si({quiet:i=!1}={}){try{await Promise.all([ne(),Y()]),await me(),w({booted:!0,loading:!1,error:null}),i||_(n("\u5DF2\u5237\u65B0"))}catch(t){$(t)}}var Re=null;function Oe(i){w({view:i==="review"?"review":"list"})}function ri(i){w({sortBy:i==="updated"?"updated":"created"})}function Ke(i){m.status!==i&&(w({status:i,selectedNo:null,detail:null,detailError:null}),Y().catch($))}function Ne(i){w({query:i,selectedNo:null,detail:null,detailError:null}),clearTimeout(Re),Re=setTimeout(()=>{Y().catch($)},220)}function re(i){if(!i){w({selectedNo:null,detail:null,detailError:null});return}if(m.selectedNo===i&&m.detail)return;let t=m.selectedNo===i?m.detail:null;w({selectedNo:i,detail:t,detailLoading:!0,detailError:null}),Ae(i).catch($)}function $e(){w({selectedNo:null,detail:null,detailError:null})}async function li(i){try{let t={...i};!t.source&&m.device&&(t.source=m.device);let o=(await j("api/ideas",ee("POST",t))).idea||null;return await ai(),_(n("\u5DF2\u5165\u6C60 {no}",{no:o?o.idea_no:""}).trim()),o&&(clearTimeout(Le),w({newIdeaNo:o.idea_no}),Le=setTimeout(()=>{Le=null,m.newIdeaNo===o.idea_no&&w({newIdeaNo:null})},1100)),o}catch(t){return $(t),null}}async function Se(i,t,a){let o={ideas:m.ideas,detail:m.detail,counts:m.counts},s=t.status&&m.ideas.find(r=>r.idea_no===i)?.status;if(t.status&&s&&s!==t.status){let r={...m.counts};r[s]=Math.max(0,(r[s]||0)-1),r[t.status]=(r[t.status]||0)+1,w({counts:r,ideas:m.ideas.map(l=>l.idea_no===i?{...l,status:t.status}:l),detail:m.detail&&m.detail.idea&&m.detail.idea.idea_no===i?{...m.detail,idea:{...m.detail.idea,status:t.status}}:m.detail})}try{let l=(await j("api/ideas/"+encodeURIComponent(i),ee("PATCH",t))).idea||null;return l&&w({ideas:m.ideas.map(p=>p.idea_no===i?{...p,...l}:p),detail:m.detail&&m.detail.idea&&m.detail.idea.idea_no===i?{...m.detail,idea:{...m.detail.idea,...l}}:m.detail}),a&&_(a),l}catch(r){return w(o),$(r),null}}async function pi(i){let t=m.selectedNo===i;try{await j("api/ideas/"+encodeURIComponent(i),{method:"DELETE"}),t&&w({selectedNo:null,detail:null,detailError:null,suppressAutoSelect:!0});try{await ai()}finally{t&&w({suppressAutoSelect:!1})}return _(n("\u5DF2\u5220\u9664 {no}",{no:i})),!0}catch(a){return $(a),!1}}async function di(i,t){let a={id:"tmp-"+Date.now(),content:t,source:m.device||"",created_at:new Date().toISOString()},o=m.detail,s=m.ideas,r=m.detail&&m.detail.idea&&m.detail.idea.idea_no===i;r&&w({detail:{...m.detail,updates:[...m.detail.updates||[],a]}});try{let l={content:t};m.device&&(l.source=m.device);let p=await j("api/ideas/"+encodeURIComponent(i)+"/updates",ee("POST",l));if(r){let h=p.update||null;w({detail:{...m.detail,updates:[...(m.detail.updates||[]).filter(f=>f.id!==a.id),...h?[h]:[]]},ideas:m.ideas.map(f=>f.idea_no===i?{...f,n_updates:(f.n_updates||0)+1}:f)})}return _(n("\u5DF2\u8BB0\u5F55\u8FDB\u5C55")),!0}catch(l){return r&&w({detail:o,ideas:s}),$(l),!1}}async function Ue(){try{let i=await j("api/undo",ee("POST",{}));i.state&&ni(i.state),await Promise.allSettled([Y(),me()]);let t=typeof i.label=="string"?i.label.trim():"";return _(t?n("\u5DF2\u64A4\u9500\uFF1A{label}",{label:t}):n("\u5DF2\u64A4\u9500\u4E0A\u4E00\u6B65")),!0}catch(i){return $(i),!1}}async function ci(){w({settingsLoading:!0});try{let i=await j("api/settings");return w({settings:i.settings||null,settingsLoading:!1}),i.settings||null}catch(i){return w({settingsLoading:!1}),$(i),null}}async function ui(i){try{let a=(await j("api/settings",ee("POST",i))).settings||null,o=m.mode;w({settings:a}),a&&a.mode&&a.mode!==o&&w({ideas:[],selectedNo:null,detail:null,detailError:null,canUndo:!1}),_(n("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58"));try{await ne(),await Y(),await me(),w({booted:!0,loading:!1,error:null})}catch(s){$(s)}return a}catch(t){return $(t),null}}async function mi({base:i,apiKey:t}={}){let a={},o=typeof i=="string"?i.trim():"",s=typeof t=="string"?t.trim():"";o&&(a.base=o),s&&(a.apiKey=s);try{let r=await j("api/cloud/test",ee("POST",a));return{ok:!0,base:typeof r.base=="string"?r.base:"",count:H(r.count),latencyMs:H(r.latencyMs)}}catch(r){return{ok:!1,error:r&&r.message||String(r),status:r&&Number.isInteger(r.status)?r.status:0}}}async function gi(){try{let i=await j("api/settings",ee("POST",{cloud:{clearKey:!0}}));return w({settings:i.settings||m.settings}),_(n("\u5DF2\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key")),i.settings||null}catch(i){return $(i),null}}async function fi(){try{let i=await j("api/cloud/import-local",ee("POST",{})),t=H(i.imported),a=H(i.updated),o=H(i.total);return _(t||a?n("\u5DF2\u4ECE\u4E91\u7AEF\u5BFC\u5165 {imported} \u6761\uFF0C\u66F4\u65B0 {updated} \u6761",{imported:t,updated:a}):n("\u4E91\u7AEF\u6CA1\u6709\u65B0\u7684\u60F3\u6CD5\u53EF\u5BFC\u5165")),await Promise.allSettled([ne(),Y(),me()]),{imported:t,updated:a,total:o}}catch(i){return $(i),null}}function qi(){let i=new Date,t=a=>String(a).padStart(2,"0");return`${i.getFullYear()}${t(i.getMonth()+1)}${t(i.getDate())}`}function Wi(i,t){let a=new Blob([t],{type:"application/json;charset=utf-8"}),o=URL.createObjectURL(a),s=document.createElement("a");s.href=o,s.download=i,s.style.display="none",document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}async function vi(){try{let i=await j("api/export"),t=i&&i.data?i.data:i;return Wi(`idea-pool-${qi()}.json`,JSON.stringify(t,null,2)),_(n("\u5DF2\u5BFC\u51FA JSON")),!0}catch(i){return $(i),!1}}var y=ke(require("react"),1);var Ji={bulb:"M12 3a6 6 0 0 1 3.5 10.9c-.9.6-1.5 1.5-1.5 2.5v.6h-4v-.6c0-1-.6-1.9-1.5-2.5A6 6 0 0 1 12 3zM10 20h4M12 7.5v3.5",note:"M6 4h8l4 4v12H6zM14 4v4h4M9 12h6M9 16h6",settings:"M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6",undo:"M8 6L4 10l4 4M4 10h10a5 5 0 0 1 0 10h-3",refresh:"M19 8a8 8 0 0 0-14-1L4 9M5 16a8 8 0 0 0 14 1l1-2M4 4v5h5M20 20v-5h-5",search:"M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",close:"M6 6l12 12M18 6L6 18",check:"M5 12.5l4.5 4.5L19 7",chevD:"M6 9.5l6 6 6-6",chevL:"M14.5 5.5L8 12l6.5 6.5",chevR:"M9.5 5.5L16 12l-6.5 6.5",plus:"M12 5v14M5 12h14",edit:"M4 20l1-4L16 5l3 3L8 19zM14 7l3 3",trash:"M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",copy:"M9 9h10v11H9zM5 15V4h10",link:"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",upRight:"M7 17L17 7M8 7h9v9",monitor:"M4 5h16v11H4zM9 20h6M12 16v4",clock:"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l2.5 1.5",download:"M12 4v11M7 11l5 5 5-5M5 20h14",alert:"M12 4l9 16H3zM12 10v4M12 17.5h.01",folder:"M4 7h6l2 2h10v10H4z",tag:"M4 5h8l8 8-6 6-8-8zM8 8.5h.01",spark:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",bolt:"M13 3L5 14h6l-1 7 8-11h-6z",cloud:"M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 8.5z",dot:"M12 12h.01"};function I({name:i,size:t=16,stroke:a=1.6,className:o=""}){let s=Ji[i];return s?y.default.createElement("svg",{className:o,width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},y.default.createElement("path",{d:s})):null}function Z({icon:i,label:t,onClick:a,disabled:o,active:s,size:r=16,className:l="",...p}){return y.default.createElement("button",{type:"button",className:`ip-iconbtn ${s?"is-on":""} ${l}`,"aria-label":t,title:t,onClick:a,disabled:o,...p},y.default.createElement(I,{name:i,size:r}))}function z({variant:i="plain",size:t="md",icon:a,children:o,className:s="",title:r,...l}){return y.default.createElement("button",{type:"button",className:`ip-btn is-${i} is-${t} ${s}`,title:r,...l},a?y.default.createElement(I,{name:a,size:t==="sm"?13:15}):null,o?y.default.createElement("span",null,o):null)}function Vi({tone:i="neutral",children:t,title:a,className:o=""}){return y.default.createElement("span",{className:`ip-badge is-${i} ${o}`,title:a},t)}function xi({status:i,children:t}){return y.default.createElement(Vi,{tone:i==="pool"||i==="active"||i==="done"||i==="parked"?i:"neutral"},y.default.createElement("i",{className:"ip-dot","aria-hidden":"true"}),t)}function Fe({children:i}){return y.default.createElement("span",{className:"ip-tag"},i)}function V({label:i,hint:t,children:a}){return y.default.createElement("label",{className:"ip-field"},y.default.createElement("span",{className:"ip-field-label"},i),a,t?y.default.createElement("small",{className:"ip-field-hint"},t):null)}function ge({title:i,onClose:t,children:a,footer:o,width:s=460}){let r=y.default.useRef(null),l=y.default.useRef(t),p=y.default.useRef(null);return l.current=t,y.default.useEffect(()=>{p.current=document.activeElement;let h=()=>{let d=r.current;return d?[...d.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')].filter(D=>!D.disabled&&D.offsetParent!==null):[]},f=d=>{if(d.key==="Escape"){d.preventDefault(),d.stopPropagation(),l.current();return}if(d.key!=="Tab")return;let D=h();if(!D.length)return;let L=D[0],P=D[D.length-1];d.shiftKey&&document.activeElement===L?(d.preventDefault(),P.focus()):!d.shiftKey&&document.activeElement===P&&(d.preventDefault(),L.focus())};window.addEventListener("keydown",f,!0);let g=r.current,b=g&&(g.querySelector("textarea, input, select")||g.querySelector("button"));b&&b.focus({preventScroll:!0});let u=g&&g.closest(".ip-dialog-body");return u&&(u.scrollTop=0),()=>{window.removeEventListener("keydown",f,!0);let d=p.current;d&&typeof d.focus=="function"&&d.isConnected&&d.focus()}},[]),y.default.createElement("div",{className:"ip-dialog-mask",onPointerDown:h=>{h.target===h.currentTarget&&t()}},y.default.createElement("div",{className:"ip-dialog",role:"dialog","aria-modal":"true","aria-label":i,style:{width:s},ref:r},y.default.createElement("div",{className:"ip-dialog-head"},y.default.createElement("h2",null,i),y.default.createElement(Z,{icon:"close",label:n("\u5173\u95ED"),onClick:t})),y.default.createElement("div",{className:"ip-dialog-body"},a),o?y.default.createElement("div",{className:"ip-dialog-foot"},o):null))}function bi(){let i=v(t=>t.toast);return i?y.default.createElement("div",{key:i.id,className:`ip-toast ${i.error?"is-error":""}`,role:i.error?"alert":"status"},y.default.createElement(I,{name:i.error?"alert":"check",size:14}),y.default.createElement("span",{className:"ip-toast-text"},i.text),y.default.createElement("button",{type:"button",className:"ip-toast-close","aria-label":n("\u5173\u95ED"),onClick:ii},y.default.createElement(I,{name:"close",size:12}))):null}function He({icon:i="bulb",title:t,hint:a,children:o}){return y.default.createElement("div",{className:"ip-empty"},y.default.createElement("span",{className:"ip-empty-icon"},y.default.createElement(I,{name:i,size:26})),y.default.createElement("p",{className:"ip-empty-title"},t),a?y.default.createElement("p",{className:"ip-empty-hint"},a):null,o)}function fe({label:i}){return y.default.createElement("div",{className:"ip-loading",role:"status"},y.default.createElement("span",{className:"ip-spinner","aria-hidden":"true"}),y.default.createElement("span",null,i))}function hi(i){let t=document.createElement("textarea");t.value=i,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:-1000px;left:-1000px;opacity:0",document.body.appendChild(t),t.select();try{document.execCommand("copy")}finally{t.remove()}}function le(i,t=n("\u5DF2\u590D\u5236")){let a=()=>_(t),o=()=>_(n("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u590D\u5236"),{error:!0});try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(i).then(a,()=>{try{hi(i),a()}catch{o()}});return}hi(i),a()}catch{o()}}var wi="idea-pool",Yi="https://www.zhaoningyuan.com",pe="https://www.zhaoningyuan.com/ideas/api",Si=["pool","active","done","parked"],Ci={pool:"\u5DF2\u5165\u6C60",active:"\u63A8\u8FDB\u4E2D",done:"\u5DF2\u6536\u53E3",parked:"\u6401\u7F6E"},Gi=[{key:"all",label:"\u5168\u90E8"},...Si.map(i=>({key:i,label:Ci[i]}))],Xi={mac:"Mac","dsh-mac":"Mac",win:"Windows","dsh-win":"Windows",dsh:"\u672C\u673A",volcano:"\u706B\u5C71\u4E91",manual:"\u624B\u52A8",web:"\u7F51\u9875",feishu:"\u98DE\u4E66"};function G(i){return String(i).padStart(2,"0")}function xe(i){if(!i)return"";let t=new Date(i);return Number.isNaN(t.getTime())?String(i):`${t.getFullYear()}-${G(t.getMonth()+1)}-${G(t.getDate())} ${G(t.getHours())}:${G(t.getMinutes())}`}function zi(i){if(!i)return"";let t=new Date(i);if(Number.isNaN(t.getTime()))return String(i);let a=Date.now()-t.getTime();if(a>=0&&a<60*1e3)return n("\u521A\u521A");if(a>=0&&a<3600*1e3)return n("{n} \u5206\u949F\u524D",{n:Math.floor(a/6e4)});let o=new Date,s=new Date(o.getFullYear(),o.getMonth(),o.getDate()).getTime();return t.getTime()>=s?`${G(t.getHours())}:${G(t.getMinutes())}`:t.getFullYear()===o.getFullYear()?`${G(t.getMonth()+1)}-${G(t.getDate())}`:`${t.getFullYear()}-${G(t.getMonth()+1)}-${G(t.getDate())}`}function qe(i){if(!i)return"";let t=String(i).toLowerCase();return n(Xi[t]||String(i))}function he(i){return n(Ci[i]||i||"")}function Qi(i){let t=String(i||"").trim();return!t||/^(javascript|data|vbscript):/i.test(t)?"#":t}function Zi(i){return`${Yi}/ideas/#${i.idea_no}`}function de(i){return String(i&&i.title||"").replace(/\s+/g," ").trim()||i&&i.idea_no||""}function _i(i){return String(i||"").split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function yi(i,t,a){return n(i===1?t:a,{n:i})}var Ri=1440*60*1e3;function ae(i){let t=new Date(i||0).getTime();return!t||Number.isNaN(t)?0:Math.max(0,Math.floor((Date.now()-t)/Ri))}function et(i){let a=(String(i.gist||"").trim()||String(i.summary||"").trim()||String(i.raw_text||"").trim()).replace(/\s+/g," ");if(!a)return"";let o=a.split(/[。！？!?]/)[0].trim()||a;return o.length>90?o.slice(0,90)+"\u2026":o}function ki(i){let t=i.idea_no,a=de(i);return"\u8BF7\u5C55\u5F00\u63A8\u8FDB\u7075\u611F\u6C60 "+t+"\u300A"+a+`\u300B\u3002

\u3010\u7EE7\u627F\u8FDB\u5EA6\xB7\u9632\u91CD\u590D\u3011\u5148\u8BFB\u60F3\u6CD5\u8BE6\u60C5\u2014\u2014\u539F\u6587\u3001\u6458\u8981\u3001\u5168\u90E8\u300C\u8FDB\u5C55\u300D\u4E0E\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 get \u52A8\u4F5C\uFF0C\u6216\u8BFB\u672C\u673A /idea-pool/api/ideas/`+t+`\uFF09\u3002
\uFF08\u300C\u8FDB\u5C55\u300D=\u63A5\u529B\u8D26\u672C\uFF1A\u4EE5\u6700\u65B0\u6761\u76EE\u4E3A\u51C6\u7EE7\u627F\uFF0C\u5DF2\u5B8C\u6210\u7684\u4E0D\u91CD\u505A\u2014\u2014\u5305\u62EC\u5176\u4ED6\u673A\u5668\u505A\u8FC7\u7684\uFF09
\u5982\u672C\u60F3\u6CD5\u66FE\u5728\u5176\u4ED6\u673A\u5668/\u4F1A\u8BDD\u63A8\u8FDB\u8FC7\uFF08\u4E0D\u786E\u5B9A\u5C31\u5148\u67E5\uFF09\uFF1A\u5F00\u5DE5\u524D\u5148\u505A\u8DE8\u673A\u67E5\u91CD\uFF08\u68C0\u7D22\u5404\u673A\u4F1A\u8BDD\u5E93\u3001\u5B9A\u65F6\u4EFB\u52A1\u4E0E\u6280\u80FD\uFF09\uFF0C\u5E76\u56DE\u586B\u4E00\u6761\u300C\u5F00\u5DE5\u5BF9\u9F50\u300D\u8FDB\u5C55\uFF08\u672C\u6B21\u8303\u56F4+\u4E0D\u91CD\u505A\u9879\uFF09\u3002
\u3010\u63A8\u8FDB\u8BB0\u5F55\u3011\u5148\u8BFB\u8BB0\u5F55\u6587\u6863\uFF08\u82E5\u6709\uFF09\u5E76\u5728\u5B8C\u6210\u540E\u8FFD\u52A0\u672C\u8F6E\u6761\u76EE\u3002
\u3010\u5148\u6F84\u6E05\u540E\u5F00\u5DE5\u3011\u7EE7\u627F\u68C0\u67E5\u4E4B\u540E\u3001\u52A8\u624B\u4E4B\u524D\uFF1A\u6309 brainstorming \u6F84\u6E05\u671F\u7EAA\u5F8B\u5411\u7528\u6237\u8FFD\u95EE 3~5 \u4E2A\u5173\u952E\u95EE\u9898\u2014\u2014\u53EA\u95EE\u4F1A\u6539\u53D8\u65B9\u5411\u3001\u53EA\u6709\u7528\u6237\u80FD\u7B54\u7684\uFF08\u80FD\u81EA\u67E5\u7684\u5148\u67E5\uFF09\uFF1B\u5C0F\u60F3\u6CD5\u53EF\u5C11\u95EE\uFF1B\u7528\u6237\u8BF4\u300C\u76F4\u63A5\u5C55\u5F00\u300D\u5219\u8DF3\u8FC7\u3002
\u5B8C\u6210\u540E\u56DE\u586B\u300C\u5DF2\u5B8C\u6210/\u672A\u5B8C\u6210/\u4E0B\u4E00\u6B65\u300D\uFF08\u7528 idea_pool \u5DE5\u5177\u7684 progress \u52A8\u4F5C\uFF09\uFF1B\u4EA7\u51FA\u53D1\u5E03\u540E\u6302\u5230\u300C\u5173\u8054\u4EA7\u51FA\u300D\uFF0C\u7136\u540E\u5F00\u59CB\u7814\u7A76/\u63A8\u8FDB\u3002`}function it({searchRef:i,onOpenSettings:t}){let a=v(u=>u.mode),o=v(u=>u.device),s=v(u=>u.cloudBase),r=v(u=>u.canUndo),l=v(u=>u.query),[p,h]=e.default.useState(l);e.default.useEffect(()=>{h(l)},[l]);let f=a==="cloud",g=f?n("\u4E91\u7AEF\u6A21\u5F0F"):n("\u672C\u673A\u6A21\u5F0F"),b=f?s?`${g} \xB7 ${s}`:g:o?`${g} \xB7 ${o}`:g;return e.default.createElement("header",{className:"ip-topbar","data-window-drag":""},e.default.createElement("div",{className:"ip-brand"},e.default.createElement("span",{className:"ip-brand-mark"},e.default.createElement(I,{name:"bulb",size:17,stroke:1.7})),e.default.createElement("span",{className:"ip-title"},n("\u7075\u611F\u6C60")),e.default.createElement("span",{className:`ip-mode ${f?"is-cloud":""}`,title:b},e.default.createElement("i",{"aria-hidden":"true"}),g)),e.default.createElement("span",{className:"ip-topbar-spacer"}),e.default.createElement("div",{className:"ip-search"},e.default.createElement("span",{className:"ip-search-icon"},e.default.createElement(I,{name:"search",size:14})),e.default.createElement("input",{ref:i,type:"text",value:p,placeholder:n("\u641C\u7D22\u60F3\u6CD5\u2026"),"aria-label":n("\u641C\u7D22\u60F3\u6CD5"),onChange:u=>{h(u.target.value),Ne(u.target.value)}}),p?e.default.createElement("span",{className:"ip-search-clear"},e.default.createElement(Z,{icon:"close",size:12,label:n("\u6E05\u7A7A\u641C\u7D22"),onClick:()=>{h(""),Ne(""),i.current?.focus()}})):null),r&&!f?e.default.createElement(Z,{icon:"undo",label:n("\u64A4\u9500\u4E0A\u4E00\u6B65"),onClick:()=>Ue()}):null,e.default.createElement(Z,{icon:"refresh",label:n("\u5237\u65B0"),onClick:()=>si()}),e.default.createElement(Z,{icon:"settings",label:n("\u8BBE\u7F6E"),onClick:t}))}var tt=208;function nt(i){i&&(i.style.height="auto",i.style.height=`${Math.min(i.scrollHeight,tt)}px`)}function at({highlight:i}){let[t,a]=e.default.useState(""),[o,s]=e.default.useState(""),[r,l]=e.default.useState(""),[p,h]=e.default.useState(""),[f,g]=e.default.useState(""),[b,u]=e.default.useState(!1),[d,D]=e.default.useState(!1),[L,P]=e.default.useState(!1),E=e.default.useRef(null),q=e.default.useRef({raw:t,title:o,summary:r,gist:p,tags:f});q.current={raw:t,title:o,summary:r,gist:p,tags:f},e.default.useEffect(()=>{nt(E.current)},[t,b]);let M=async()=>{if(d)return;let N=t.trim(),k=o.trim();if(!N&&!k){_(n("\u5199\u70B9\u5185\u5BB9\u518D\u5165\u6C60"),{error:!0}),E.current?.focus();return}let S={raw_text:N};k&&(S.title=k);let T=r.trim();T&&(S.summary=T);let X=p.trim();X&&(S.gist=X);let W=_i(f);W.length&&(S.tags=W);let O={raw:t,title:o,summary:r,gist:p,tags:f};D(!0);let x=await li(S);if(D(!1),!x)return;a(B=>B===O.raw?"":B),s(B=>B===O.title?"":B),l(B=>B===O.summary?"":B),h(B=>B===O.gist?"":B),g(B=>B===O.tags?"":B);let U=q.current;U.raw===O.raw&&U.title===O.title&&U.summary===O.summary&&U.gist===O.gist&&U.tags===O.tags&&(u(!1),window.requestAnimationFrame(()=>{let B=E.current;B&&(B.style.height="auto",B.focus())}))},J=N=>{if((N.metaKey||N.ctrlKey)&&N.key==="Enter"){N.preventDefault(),M();return}N.key==="Escape"&&b&&(N.stopPropagation(),u(!1))};return e.default.createElement("section",{className:`ip-capture ${!L&&!b&&!t&&!o&&!r&&!p&&!f?"is-collapsed":""} ${L?"is-focused":""} ${i?"is-highlight":""}`,"aria-label":n("\u5F55\u5165\u7075\u611F")},e.default.createElement("div",{className:"ip-capture-main"},e.default.createElement("textarea",{ref:E,className:"ip-capture-input",rows:2,value:t,placeholder:n("\u60F3\u5230\u4EC0\u4E48\u5C31\u5199\u4EC0\u4E48\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60"),"aria-label":n("\u60F3\u6CD5\u539F\u6587"),onFocus:()=>P(!0),onBlur:()=>P(!1),onChange:N=>a(N.target.value),onKeyDown:J}),e.default.createElement("div",{className:"ip-capture-side"},e.default.createElement("button",{type:"button",className:`ip-capture-toggle ${b?"is-open":""}`,"aria-expanded":b,onClick:()=>u(N=>!N)},e.default.createElement(I,{name:"chevD",size:13}),e.default.createElement("span",null,n(b?"\u6536\u8D77\u9009\u9879":"\u66F4\u591A\u9009\u9879"))),e.default.createElement("span",{className:"ip-cmdhint"},n("\u2318/Ctrl+Enter \u4FDD\u5B58")),e.default.createElement(z,{variant:"primary",icon:"plus",onClick:M,disabled:d},d?n("\u4FDD\u5B58\u4E2D\u2026"):n("\u5165\u6C60")))),b?e.default.createElement("div",{className:"ip-capture-extra"},e.default.createElement(V,{label:n("\u6807\u9898\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:o,onChange:N=>s(N.target.value),placeholder:n("\u7559\u7A7A\u65F6\u81EA\u52A8\u53D6\u539F\u6587\u524D 40 \u5B57")})),e.default.createElement(V,{label:n("\u4E00\u53E5\u8BDD\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:p,onChange:N=>h(N.target.value),placeholder:n("\u226460 \u5B57\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868"),maxLength:200})),e.default.createElement(V,{label:n("\u6807\u7B7E\uFF08\u53EF\u9009\uFF09")},e.default.createElement("input",{value:f,onChange:N=>g(N.target.value),placeholder:n("\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u7814\u7A76, \u6E20\u9053")})),e.default.createElement("div",{className:"ip-span2"},e.default.createElement(V,{label:n("\u6458\u8981\uFF08\u53EF\u9009\uFF09")},e.default.createElement("textarea",{rows:2,value:r,onChange:N=>l(N.target.value),placeholder:n("\u4E00\u53E5\u8BDD\u6982\u62EC\uFF0C\u65B9\u4FBF\u65E5\u540E\u626B\u5217\u8868")})))):null)}function ot(){let i=v(p=>p.status),t=v(p=>p.counts),a=v(p=>p.total),o=v(p=>p.sortBy),[s,r]=e.default.useState(!1),l=e.default.useRef(null);return e.default.useEffect(()=>{if(!s)return;let p=f=>{(!l.current||!l.current.contains(f.target))&&r(!1)},h=f=>{f.key==="Escape"&&r(!1)};return document.addEventListener("pointerdown",p),document.addEventListener("keydown",h),()=>{document.removeEventListener("pointerdown",p),document.removeEventListener("keydown",h)}},[s]),e.default.createElement("nav",{className:"ip-tabs","aria-label":n("\u72B6\u6001\u7B5B\u9009")},Gi.map(p=>{let h=p.key==="all"?t.all||a||0:t[p.key]||0;return e.default.createElement("button",{key:p.key,type:"button",className:`ip-tab ${i===p.key?"is-on":""}`,"aria-pressed":i===p.key,onClick:()=>Ke(p.key)},e.default.createElement("span",null,n(p.label)),e.default.createElement("span",{className:"ip-tab-count"},h))}),e.default.createElement("div",{className:"ip-sort",ref:l},e.default.createElement("button",{type:"button",className:"ip-sort-trigger","aria-haspopup":"menu","aria-expanded":s,onClick:()=>r(p=>!p)},e.default.createElement("span",null,n("\u6392\u5E8F")),e.default.createElement("strong",null,o==="updated"?n("\u6700\u8FD1\u66F4\u65B0"):n("\u6700\u8FD1\u521B\u5EFA")),e.default.createElement(I,{name:"chevD",size:12})),s?e.default.createElement("div",{className:"ip-sort-pop",role:"menu","aria-label":n("\u6392\u5E8F")},[{key:"created",label:n("\u6700\u8FD1\u521B\u5EFA")},{key:"updated",label:n("\u6700\u8FD1\u66F4\u65B0")}].map(p=>e.default.createElement("button",{key:p.key,type:"button",role:"menuitemradio","aria-checked":o===p.key,className:o===p.key?"is-on":"",onClick:()=>{ri(p.key),r(!1)}},e.default.createElement("span",null,p.label),o===p.key?e.default.createElement(I,{name:"check",size:13}):null))):null))}function st({idea:i,active:t,highlight:a,onClick:o}){let s=Array.isArray(i.tags)?i.tags:[];return e.default.createElement("button",{type:"button",className:`ip-card ${t?"is-on":""} ${a?"is-new":""}`,"aria-current":t?"true":void 0,onClick:o},e.default.createElement("div",{className:"ip-card-title"},de(i)),i.gist||i.summary?e.default.createElement("div",{className:"ip-card-sum"},i.gist||i.summary):null,e.default.createElement("div",{className:"ip-card-foot"},e.default.createElement("span",{className:`ip-card-status is-${i.status}`},e.default.createElement("i",{"aria-hidden":"true"}),he(i.status)),e.default.createElement("span",{className:"ip-card-no"},i.idea_no),e.default.createElement("time",{className:"ip-card-time",dateTime:i.updated_at||void 0,title:xe(i.updated_at)},zi(i.updated_at)),s.slice(0,1).map(r=>e.default.createElement(Fe,{key:r},r)),s.length>1?e.default.createElement("span",{className:"ip-muted"},"+",s.length-1):null,i.n_updates||i.n_links?e.default.createElement("span",{className:"ip-card-meta"},i.n_updates?yi(i.n_updates,"1 \u6761\u8FDB\u5C55","{n} \u6761\u8FDB\u5C55"):null,i.n_updates&&i.n_links?e.default.createElement("span",{className:"ip-sep"},"\xB7"):null,i.n_links?yi(i.n_links,"1 \u4E2A\u4EA7\u51FA","{n} \u4E2A\u4EA7\u51FA"):null):null))}function Ei({idea:i}){let t=i.status==="active"&&ae(i.updated_at)>14,a=i.status==="pool"?n("\u5165\u6C60 {n} \u5929",{n:ae(i.created_at)}):t?n("{n} \u5929\u672A\u52A8",{n:ae(i.updated_at)}):zi(i.updated_at);return e.default.createElement("button",{type:"button",className:"ip-review-row",onClick:()=>re(i.idea_no)},e.default.createElement("i",{className:`ip-review-dot is-${i.status}`,"aria-hidden":"true"}),e.default.createElement("span",{className:"ip-review-main"},e.default.createElement("span",{className:"ip-review-title"},de(i)),e.default.createElement("span",{className:"ip-review-sum"},et(i))),e.default.createElement("span",{className:"ip-review-meta"},e.default.createElement("span",{className:t?"is-stale":""},a),i.n_updates?e.default.createElement("span",null,n("{n} \u8FDB\u5C55",{n:i.n_updates})):null))}function je({title:i,hint:t,items:a,action:o}){return a.length?e.default.createElement("section",{className:"ip-review-section"},e.default.createElement("div",{className:"ip-review-head"},e.default.createElement("h3",null,i),e.default.createElement("span",{className:"ip-review-count"},a.length),e.default.createElement("span",{className:"ip-review-hint"},t),o?e.default.createElement("span",{className:"ip-review-action"},o):null),e.default.createElement("div",{className:"ip-review-rows"},a.map(s=>e.default.createElement(Ei,{key:s.idea_no,idea:s})))):null}function rt(){let i=v(u=>u.ideas),t=v(u=>u.status),[a,o]=e.default.useState(!1);e.default.useEffect(()=>{(t==="done"||t==="parked")&&o(!0)},[t]);let s=i.filter(u=>u.status==="pool"),r=i.filter(u=>u.status==="active"),l=r.filter(u=>ae(u.updated_at)>14).sort((u,d)=>ae(d.updated_at)-ae(u.updated_at)),p=r.filter(u=>ae(u.updated_at)<=14).sort((u,d)=>String(d.updated_at||"").localeCompare(String(u.updated_at||""))),h=i.filter(u=>u.status==="done"||u.status==="parked"),f=i.filter(u=>u.status==="done").length,g=i.filter(u=>u.status==="parked").length,b=()=>{let u=s.length?s:l.length?l:p.length?p:i;if(!u.length)return;let d=u[Math.floor(Math.random()*u.length)];_(n("\u968F\u673A\u635E\u5230 {no}\uFF0C\u770B\u770B\u6709\u6CA1\u6709\u9057\u6F0F\u3002",{no:d.idea_no})),re(d.idea_no)};return e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-review"},e.default.createElement("div",{className:"ip-review-summary"},e.default.createElement("div",null,e.default.createElement("strong",null,n("{n} \u6761\u60F3\u6CD5",{n:i.length})),e.default.createElement("span",null,n("{n} \u5F85\u51B3\u5B9A",{n:s.length})," \xB7 ",n("{n} \u4E45\u672A\u63A8\u8FDB",{n:l.length})," \xB7 ",n("{n} \u6700\u8FD1\u63A8\u8FDB",{n:p.length}))),e.default.createElement(z,{size:"sm",variant:"ghost",icon:"spark",onClick:b,disabled:!i.length},n("\u968F\u673A\u635E\u4E00\u6761"))),e.default.createElement(je,{title:n("\u5F85\u51B3\u5B9A"),hint:n("\u8BB0\u4E0B\u6765\u8FD8\u6CA1\u5F00\u59CB\u7684\uFF0C\u5148\u635E\u4E00\u6761\u770B\u770B"),items:s,action:s.length?e.default.createElement(z,{size:"sm",variant:"ghost",onClick:b},n("\u968F\u673A\u4E00\u6761")):null}),e.default.createElement(je,{title:n("\u8BE5\u63A8\u8FDB\u4E86"),hint:n("\u8D85\u8FC7 14 \u5929\u6CA1\u52A8\uFF0C\u6700\u4E45\u672A\u52A8\u7684\u6392\u524D\u9762"),items:l}),e.default.createElement(je,{title:n("\u6B63\u5728\u63A8\u8FDB"),hint:n("\u6700\u8FD1 14 \u5929\u6709\u66F4\u65B0"),items:p}),h.length?e.default.createElement("section",{className:"ip-review-section is-archived"},e.default.createElement("button",{type:"button",className:"ip-review-head is-button","aria-expanded":a,onClick:()=>o(u=>!u)},e.default.createElement("h3",null,n("\u5DF2\u6536\u53E3 / \u6401\u7F6E")),e.default.createElement("span",{className:"ip-review-count"},h.length),e.default.createElement("span",{className:"ip-review-hint"},n("\u5DF2\u6536\u53E3 {done} \xB7 \u6401\u7F6E {parked}",{done:f,parked:g})),e.default.createElement("span",{className:"ip-review-action"},e.default.createElement(I,{name:a?"chevD":"chevR",size:13}))),a?e.default.createElement("div",{className:"ip-review-rows"},h.map(u=>e.default.createElement(Ei,{key:u.idea_no,idea:u}))):null):null))}function lt({narrow:i}){let t=v(d=>d.ideas),a=v(d=>d.listLoading),o=v(d=>d.status),s=v(d=>d.query),r=v(d=>d.selectedNo),l=v(d=>d.mode),p=v(d=>d.sortBy),h=v(d=>d.view),f=v(d=>d.newIdeaNo),g=e.default.useRef(null),b=o!=="all"||!!s.trim(),u=e.default.useMemo(()=>{let d=p==="updated"?"updated_at":"created_at";return[...t].sort((D,L)=>{let P=typeof D[d]=="string"?D[d]:"",E=typeof L[d]=="string"?L[d]:"";return P!==E?P<E?1:-1:String(D.idea_no)<String(L.idea_no)?1:-1})},[t,p]);return e.default.useEffect(()=>{f&&g.current?.scrollTo({top:0,behavior:"smooth"})},[f]),a&&!t.length?e.default.createElement(fe,{label:n("\u6B63\u5728\u52A0\u8F7D\u2026")}):t.length?h==="review"?e.default.createElement(rt,null):e.default.createElement("div",{className:"ip-scroll",ref:g},e.default.createElement("div",{className:"ip-list"},u.map(d=>e.default.createElement(st,{key:d.idea_no,idea:d,active:!i&&d.idea_no===r,highlight:d.idea_no===f,onClick:()=>re(d.idea_no)}))),a?e.default.createElement("div",{className:"ip-list-note"},n("\u6B63\u5728\u5237\u65B0\u2026")):null):e.default.createElement(He,{icon:"note",title:b?n("\u6CA1\u6709\u5339\u914D\u7684\u60F3\u6CD5"):n("\u7075\u611F\u6C60\u8FD8\u662F\u7A7A\u7684"),hint:b?n("\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u72B6\u6001\u518D\u8BD5\u8BD5\u3002"):l==="cloud"?n("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002"):n("\u5728\u4E0A\u9762\u5199\u4E00\u53E5\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u2318/Ctrl+Enter \u5165\u6C60\u3002\u672C\u673A\u6A21\u5F0F\u7684\u6570\u636E\u53EA\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\u3002")},s.trim()?e.default.createElement(z,{size:"sm",onClick:()=>Ne("")},n("\u6E05\u7A7A\u641C\u7D22")):o!=="all"?e.default.createElement(z,{size:"sm",onClick:()=>Ke("all")},n("\u663E\u793A\u5168\u90E8\u72B6\u6001")):e.default.createElement(z,{size:"sm",onClick:()=>document.querySelector(".ip-capture-input")?.focus()},n("\u5199\u7B2C\u4E00\u6761")))}function pt({update:i}){let[t,a]=e.default.useState(!1),o=i.content||"",s=o.length>320;return e.default.createElement("li",{className:"ip-tl-item"},e.default.createElement("div",{className:"ip-tl-meta"},e.default.createElement("span",{className:"ip-tl-time"},xe(i.created_at)),i.source?e.default.createElement("span",{className:"ip-src",title:i.source},e.default.createElement(I,{name:"monitor",size:11}),qe(i.source)):null),e.default.createElement("div",{className:`ip-tl-content ${s&&!t?"is-clamped":""}`},o),s?e.default.createElement("button",{type:"button",className:"ip-tl-toggle",onClick:()=>a(r=>!r)},t?n("\u6536\u8D77"):n("\u5C55\u5F00\u5168\u90E8")):null)}function dt({link:i}){let t=Qi(i.url),a=/^https?:\/\//i.test(t);return e.default.createElement("li",null,e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(I,{name:"link",size:13})),e.default.createElement("a",{href:t,title:i.url,target:a?"_blank":void 0,rel:a?"noreferrer noopener":void 0},i.title||i.url),i.ref_type==="doc"?e.default.createElement("span",{className:"ip-link-kind"},n("\u6587\u6863")):null,a?e.default.createElement("span",{className:"ip-link-icon"},e.default.createElement(I,{name:"upRight",size:12})):null)}function ct({no:i}){let[t,a]=e.default.useState(""),[o,s]=e.default.useState(!1),r=async l=>{l.preventDefault();let p=t.trim();if(!p){_(n("\u5148\u5199\u70B9\u5185\u5BB9"),{error:!0});return}let h=t;s(!0);let f=await di(i,p);s(!1),f&&a(g=>g===h?"":g)};return e.default.createElement("form",{className:"ip-abox",onSubmit:r},e.default.createElement(V,{label:n("\u65B0\u589E\u8FDB\u5C55")},e.default.createElement("textarea",{rows:3,value:t,placeholder:n("\u8BB0\u5F55\u4E00\u6761\u8FDB\u5C55\uFF08\u8BA8\u8BBA\u7ED3\u8BBA / \u7814\u7A76\u8FDB\u5EA6 / \u4E0B\u4E00\u6B65\uFF09\u2026"),onChange:l=>a(l.target.value),onKeyDown:l=>{(l.metaKey||l.ctrlKey)&&l.key==="Enter"&&r(l)}})),e.default.createElement("div",{className:"ip-abox-foot"},e.default.createElement("span",{className:"ip-muted"},n("\u8FDB\u5C55\u53EA\u8FFD\u52A0\uFF0C\u5199\u4E0A\u673A\u5668\u4E0E\u4E0B\u4E00\u6B65\u65B9\u4FBF\u8DE8\u673A\u63A5\u529B")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(z,{size:"sm",variant:"primary",type:"submit",disabled:o},o?n("\u4FDD\u5B58\u4E2D\u2026"):n("\u8BB0\u5F55\u8FDB\u5C55"))))}function ut({idea:i,onClose:t}){let[a,o]=e.default.useState(i.title||""),[s,r]=e.default.useState(i.summary||""),[l,p]=e.default.useState(i.gist||""),[h,f]=e.default.useState(i.raw_text||""),[g,b]=e.default.useState((i.tags||[]).join(", ")),[u,d]=e.default.useState(i.source_note||""),[D,L]=e.default.useState(!1),P=a!==(i.title||"")||s!==(i.summary||"")||l!==(i.gist||"")||h!==(i.raw_text||"")||g!==(i.tags||[]).join(", ")||u!==(i.source_note||""),E=()=>{P&&!window.confirm(n("\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F"))||t()},q=async M=>{M.preventDefault();let J=a.trim();if(!J){_(n("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}L(!0);let K=await Se(i.idea_no,{title:J,summary:s.trim(),gist:l.trim(),raw_text:h,tags:_i(g),source_note:u.trim()},n("\u5DF2\u4FDD\u5B58"));L(!1),K&&t()};return e.default.createElement(ge,{title:n("\u7F16\u8F91\u60F3\u6CD5"),onClose:E,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(z,{onClick:E},n("\u53D6\u6D88")),e.default.createElement(z,{variant:"primary",type:"submit",form:"ip-edit-form",disabled:D},D?n("\u4FDD\u5B58\u4E2D\u2026"):n("\u4FDD\u5B58")))},e.default.createElement("form",{id:"ip-edit-form",className:"ip-dialog-rows",onSubmit:q},e.default.createElement(V,{label:n("\u6807\u9898")},e.default.createElement("input",{value:a,onChange:M=>o(M.target.value)})),e.default.createElement(V,{label:n("\u4E00\u53E5\u8BDD\u6458\u8981")},e.default.createElement("input",{value:l,maxLength:200,onChange:M=>p(M.target.value),placeholder:n("\u226460 \u5B57\uFF0C\u65B9\u4FBF\u626B\u5217\u8868")})),e.default.createElement(V,{label:n("\u8BE6\u7EC6\u6458\u8981")},e.default.createElement("textarea",{rows:2,value:s,onChange:M=>r(M.target.value)})),e.default.createElement(V,{label:n("\u539F\u6587\uFF08\u9010\u5B57\u4FDD\u7559\uFF09")},e.default.createElement("textarea",{rows:6,value:h,onChange:M=>f(M.target.value)})),e.default.createElement(V,{label:n("\u6807\u7B7E"),hint:n("\u9017\u53F7\u5206\u9694")},e.default.createElement("input",{value:g,onChange:M=>b(M.target.value)})),e.default.createElement(V,{label:n("\u5907\u6CE8 / \u6765\u6E90\u60C5\u5883")},e.default.createElement("input",{value:u,onChange:M=>d(M.target.value)}))))}function mt({idea:i,onClose:t}){let[a,o]=e.default.useState(!1),s=async()=>{o(!0);let r=await pi(i.idea_no);o(!1),r&&t()};return e.default.createElement(ge,{title:n("\u5220\u9664\u60F3\u6CD5"),onClose:t,width:420,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(z,{onClick:t},n("\u53D6\u6D88")),e.default.createElement(z,{variant:"danger-solid",onClick:s,disabled:a},a?n("\u5220\u9664\u4E2D\u2026"):n("\u786E\u8BA4\u5220\u9664")))},e.default.createElement("p",{className:"ip-dialog-note"},n("\u5220\u9664\u300C{title}\u300D\uFF08{no}\uFF09\u540E\uFF0C\u5B83\u7684\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E5F\u4F1A\u4E00\u8D77\u5220\u9664\u3002",{title:de(i),no:i.idea_no})))}function Ni(i){let t=String(i||"").match(/(?:^|\n)\s*(?:下一步|next step)[：:]\s*([^\n]+)/i);return t?t[1].trim():""}function gt({idea:i,onClose:t}){let a=v(l=>l.device),[o,s]=e.default.useState({loading:!0,note:"",error:"",items:[]});e.default.useEffect(()=>{let l=Ce.sessions;if(!l){s({loading:!1,note:"",error:n("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u4F1A\u8BDD\u641C\u7D22\u3002"),items:[]});return}let p=()=>{let g=l.list&&typeof l.list.getSnapshot=="function"?l.list.getSnapshot():null,b=Array.isArray(g&&g.ids)?g.ids:[],u=g&&g.byId||{};return b.slice(0,30).map(d=>{let D=u[d]||{},L=String(D.title||D.name||d);return{sessionId:d,snippet:L}})},h=new AbortController;s({loading:!0,note:"",error:"",items:[]});let f=g=>{let b=p();b.length?s({loading:!1,note:g,error:"",items:b}):s({loading:!1,note:"",error:n("\u6CA1\u6709\u53EF\u7528\u7684\u4F1A\u8BDD\u5217\u8868\u3002"),items:[]})};if(typeof l.search!="function"){f(n("\u4F1A\u8BDD\u641C\u7D22\u4E0D\u53EF\u7528\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002"));return}return Promise.resolve(l.search(i.idea_no,h.signal)).then(g=>{if(h.signal.aborted)return;if(g&&g.ok===!1){f(n("\u4F1A\u8BDD\u641C\u7D22\u7D22\u5F15\u672A\u5F00\u542F\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\uFF1B\u4E5F\u53EF\u4EE5\u624B\u52A8\u6311\u9009\u3002"));return}let b=g&&g.ok?g.value:g,u=Array.isArray(b&&b.items)?b.items:[];if(!u.length){f(n("\u6CA1\u6709\u641C\u5230\u5305\u542B\u7F16\u53F7\u7684\u4F1A\u8BDD\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002"));return}s({loading:!1,note:"",error:"",items:u})}).catch(()=>{h.signal.aborted||f(n("\u4F1A\u8BDD\u641C\u7D22\u5931\u8D25\uFF0C\u663E\u793A\u6700\u8FD1\u4F1A\u8BDD\u3002"))}),()=>h.abort()},[i.idea_no]);let r=async l=>{let p=Array.isArray(i.session_refs)?i.session_refs:[];if(p.some(g=>g.session_id===l.sessionId)){_(n("\u8FD9\u6761\u4F1A\u8BDD\u5DF2\u7ECF\u5173\u8054\u8FC7\u4E86"));return}let h=[...p,{session_id:l.sessionId,title:String(l.snippet||"").replace(/\s+/g," ").slice(0,120),device:a||"",bound_at:new Date().toISOString(),reason:"search"}];await Se(i.idea_no,{session_refs:h},n("\u5DF2\u5173\u8054\u4F1A\u8BDD"))&&t()};return e.default.createElement(ge,{title:n("\u5173\u8054 DSH \u4F1A\u8BDD"),onClose:t,width:560,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(z,{onClick:t},n("\u5173\u95ED")))},e.default.createElement("p",{className:"ip-dialog-note"},n("\u6309\u7F16\u53F7\u300C{no}\u300D\u641C\u7D22\u5F53\u524D DSH \u7684\u4F1A\u8BDD\u5185\u5BB9\uFF1B\u70B9\u4E00\u6761\u5373\u53EF\u7ED1\u5B9A\u3002",{no:i.idea_no})),o.loading?e.default.createElement(fe,{label:n("\u6B63\u5728\u641C\u7D22\u4F1A\u8BDD\u2026")}):null,o.note?e.default.createElement("p",{className:"ip-dialog-note"},o.note):null,o.error?e.default.createElement("p",{className:"ip-dialog-note is-error"},o.error):null,!o.loading&&!o.error&&!o.items.length?e.default.createElement("p",{className:"ip-dialog-note"},n("\u6CA1\u6709\u641C\u5230\u5305\u542B\u8FD9\u4E2A\u7F16\u53F7\u7684\u4F1A\u8BDD\u3002\u53D1\u9001\u8FC7\u300C\u4E00\u952E\u63A8\u8FDB\u300D\u7684\u4F1A\u8BDD\u901A\u5E38\u80FD\u88AB\u641C\u5230\u3002")):null,e.default.createElement("div",{className:"ip-session-results"},o.items.map(l=>e.default.createElement("button",{key:l.sessionId,type:"button",className:"ip-session-result",onClick:()=>r(l)},e.default.createElement("span",{className:"ip-session-id"},String(l.sessionId).slice(0,18)),e.default.createElement("span",{className:"ip-session-snippet"},String(l.snippet||"").replace(/\s+/g," ").slice(0,180))))))}function ft({narrow:i}){let t=v(c=>c.selectedNo),a=v(c=>c.query),o=v(c=>c.status),s=v(c=>c.ideas),r=v(c=>c.total),l=v(c=>c.detail),p=v(c=>c.detailLoading),h=v(c=>c.detailError),f=v(c=>c.mode),[g,b]=e.default.useState(!1),[u,d]=e.default.useState(!1),[D,L]=e.default.useState(!1),[P,E]=e.default.useState(!1),[q,M]=e.default.useState(!1),[J,K]=e.default.useState(!1),[N,k]=e.default.useState(!1),[S,T]=e.default.useState(!1),[X,W]=e.default.useState(!1),O=e.default.useRef(null);if(e.default.useEffect(()=>{b(!1),d(!1),L(!1),E(!1),K(!1),k(!1),T(!1),W(!1)},[t]),e.default.useEffect(()=>{if(!S)return;let c=se=>{(!O.current||!O.current.contains(se.target))&&T(!1)},te=se=>{se.key==="Escape"&&T(!1)};return document.addEventListener("pointerdown",c),document.addEventListener("keydown",te),()=>{document.removeEventListener("pointerdown",c),document.removeEventListener("keydown",te)}},[S]),!t){let c=a.trim()!==""||o!=="all";return s.length===0||c&&r===0?e.default.createElement("div",{className:"ip-detail-pane"}):e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement(He,{icon:"note",title:c?n("\u627E\u5230 {n} \u6761\u60F3\u6CD5",{n:r}):n("\u9009\u4E00\u6761\u60F3\u6CD5\u770B\u8BE6\u60C5"),hint:c?n("\u4ECE\u5DE6\u8FB9\u9009\u4E00\u6761\u67E5\u770B\u3002"):n("\u5DE6\u8FB9\u662F\u7075\u611F\u5217\u8868\uFF1B\u5BBD\u5C4F\u65F6\u70B9\u4E00\u5F20\u5361\u7247\uFF0C\u8FD9\u91CC\u663E\u793A\u539F\u6587\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002")})))}if(h&&!l)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(I,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},n("\u8BE6\u60C5\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},h),e.default.createElement(z,{icon:"refresh",onClick:()=>re(t)},n("\u91CD\u8BD5")))));if(!l)return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement(fe,{label:n("\u6B63\u5728\u5C55\u5F00\u2026")}));let x=l.idea||{},U=Array.isArray(l.updates)?l.updates:[],B=Array.isArray(l.links)?l.links:[],R=x.idea_no||t,ze=async c=>{q||c===x.status||(M(!0),await Se(R,{status:c},n("\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A\u300C{label}\u300D",{label:he(c)})),M(!1))},F=U.length?U[U.length-1]:null,ce=U.slice(0,-1).reverse(),C=!!x.summary||!!x.source_note||U.length>0,A=e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},n("\u539F\u6587")),e.default.createElement("span",{className:"ip-section-count"},n("\u9605\u8BFB\u6A21\u5F0F \xB7 \u9010\u5B57\u4FDD\u5B58")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(Z,{icon:"copy",size:13,label:n("\u590D\u5236\u539F\u6587"),onClick:()=>le(x.raw_text||"",n("\u5DF2\u590D\u5236\u539F\u6587"))}),C?e.default.createElement(z,{size:"sm",variant:"ghost",onClick:()=>K(c=>!c)},J?n("\u6536\u8D77\u539F\u6587"):n("\u5C55\u5F00\u539F\u6587")):null),C&&!J?e.default.createElement("button",{type:"button",className:"ip-raw-fold",onClick:()=>K(!0)},e.default.createElement("span",null,n("\u539F\u6587\u9ED8\u8BA4\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00")),e.default.createElement("span",{className:"ip-muted"},n("\u9010\u5B57\u4FDD\u5B58"))):e.default.createElement("pre",{className:"ip-raw"},x.raw_text||n("\uFF08\u65E0\u539F\u6587\uFF09"))),Q=x.status==="pool"&&U.length===0?n("\u590D\u5236\u5C55\u5F00\u63D0\u793A\u8BCD"):n("\u590D\u5236\u63A5\u529B\u63D0\u793A\u8BCD"),be=()=>le(ki(x),n("\u5DF2\u590D\u5236\u63D0\u793A\u8BCD\uFF0C\u53EF\u7C98\u8D34\u5230\u5BF9\u8BDD\u7EE7\u7EED")),ie=`${ki(x)}

\uFF08\u672C\u6B21\u4ECE\u7075\u611F\u6C60 ${R} \u4E00\u952E\u63A8\u8FDB\uFF1B\u5B8C\u6210\u540E\u56DE\u586B\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u3002\uFF09`,oe=()=>{let c=Ce.uiWorkspace;if(c&&typeof c.startSession=="function")try{c.startSession(void 0,{prompt:ie,whenDraftExists:"append"}),_(n("\u5DF2\u6253\u5F00\u65B0\u4F1A\u8BDD\u5E76\u9884\u586B\u63A8\u8FDB\u63D0\u793A\u8BCD\uFF1B\u53D1\u9001\u540E\u53EF\u56DE\u6765\u300C\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD\u300D\u7ED1\u5B9A\u3002"));return}catch{}le(ie,n("\u5F53\u524D\u754C\u9762\u4E0D\u80FD\u76F4\u63A5\u5F00\u65B0\u4F1A\u8BDD\uFF0C\u5DF2\u590D\u5236\u63A8\u8FDB\u63D0\u793A\u8BCD"))},we=c=>{let te=Ce.uiWorkspace;if(!te||typeof te.openSession!="function"){_(n("\u5F53\u524D\u73AF\u5883\u4E0D\u80FD\u6253\u5F00 DSH \u4F1A\u8BDD"),{error:!0});return}try{te.openSession(c.session_id)}catch(se){_(n("\u6253\u5F00\u4F1A\u8BDD\u5931\u8D25\uFF1A{error}",{error:se.message||se}),{error:!0})}},We=f==="cloud",Li=()=>{if(We){le(Zi(x),n("\u5DF2\u590D\u5236\u94FE\u63A5"));return}le(`\u7075\u611F\u6C60 ${R}\u300A${de(x)}\u300B\uFF08\u672C\u673A\u6A21\u5F0F\uFF1A\u7528 idea_pool \u5DE5\u5177\u6309\u7F16\u53F7\u8BFB\u53D6\uFF0C\u6216\u5728 DSH \u4FA7\u680F\u300C\u7075\u611F\u6C60\u300D\u67E5\u770B\uFF09`,n("\u5DF2\u590D\u5236\u5F15\u7528"))};return e.default.createElement("div",{className:"ip-detail-pane"},e.default.createElement("div",{className:"ip-scroll"},e.default.createElement("div",{className:"ip-detail"},e.default.createElement("div",{className:"ip-detail-head"},i?e.default.createElement("div",{className:"ip-detail-back"},e.default.createElement(z,{size:"sm",variant:"ghost",icon:"chevL",onClick:$e},n("\u8FD4\u56DE\u5217\u8868"))):null,e.default.createElement("div",{className:"ip-detail-title-row"},e.default.createElement("h2",{className:"ip-detail-title"},de(x)||R),e.default.createElement(Z,{icon:"edit",label:n("\u7F16\u8F91"),onClick:()=>b(!0)}),e.default.createElement(Z,{icon:"trash",label:n("\u5220\u9664"),onClick:()=>d(!0)})),e.default.createElement("div",{className:"ip-detail-meta"},e.default.createElement(xi,{status:x.status},he(x.status)),e.default.createElement("span",{className:"ip-card-no"},R),x.source?e.default.createElement("span",null,n("\u6765\u6E90\uFF1A{source}",{source:qe(x.source)})):null,e.default.createElement("span",null,n("\u521B\u5EFA {time}",{time:xe(x.created_at)})),e.default.createElement("span",null,n("\u66F4\u65B0 {time}",{time:xe(x.updated_at)}))),Array.isArray(x.tags)&&x.tags.length?e.default.createElement("div",{className:"ip-detail-tags"},x.tags.map(c=>e.default.createElement(Fe,{key:c},c))):null,e.default.createElement("div",{className:"ip-detail-actions"},e.default.createElement(z,{size:"sm",variant:"primary",icon:"spark",onClick:oe},n("\u4E00\u952E\u63A8\u8FDB")),e.default.createElement(z,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>{L(!0),window.requestAnimationFrame(()=>document.querySelector(".ip-abox")?.scrollIntoView({block:"center"}))}},n("\u8BB0\u8FDB\u5C55")),e.default.createElement(z,{size:"sm",icon:"copy",onClick:be,title:n("\u590D\u5236\u540E\u7C98\u8D34\u7ED9 agent\uFF0C\u7EE7\u7EED\u5C55\u5F00\u6216\u63A5\u529B")},Q),e.default.createElement(z,{size:"sm",icon:"link",onClick:Li},n(We?"\u590D\u5236\u94FE\u63A5":"\u590D\u5236\u5F15\u7528")),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement("div",{className:"ip-status-menu",ref:O},e.default.createElement("button",{type:"button",className:"ip-status-trigger","aria-haspopup":"menu","aria-expanded":S,disabled:q,onClick:()=>T(c=>!c)},e.default.createElement("span",{className:"ip-status-label"},n("\u72B6\u6001")),e.default.createElement("i",{className:`ip-dot is-${x.status}`,"aria-hidden":"true"}),e.default.createElement("span",null,he(x.status)),e.default.createElement(I,{name:"chevD",size:12})),S?e.default.createElement("div",{className:"ip-status-pop",role:"menu","aria-label":n("\u5207\u6362\u72B6\u6001")},Si.map(c=>e.default.createElement("button",{key:c,type:"button",role:"menuitemradio","aria-checked":x.status===c,className:x.status===c?"is-on":"",disabled:q,onClick:()=>{T(!1),ze(c)}},e.default.createElement("i",{className:`ip-dot is-${c}`,"aria-hidden":"true"}),e.default.createElement("span",null,he(c)),x.status===c?e.default.createElement(I,{name:"check",size:13}):null))):null))),e.default.createElement("div",{className:"ip-detail-body"},x.gist?e.default.createElement("div",{className:"ip-gist"},x.gist):null,C?null:A,x.summary?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},n("\u6458\u8981"))),e.default.createElement("div",{className:"ip-summary"},x.summary)):null,x.source_note?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},n("\u5907\u6CE8"))),e.default.createElement("div",{className:"ip-text"},x.source_note)):null,F?e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},n("\u6700\u65B0\u8FDB\u5C55")),e.default.createElement("span",{className:"ip-section-count"},xe(F.created_at)),e.default.createElement("span",{className:"ip-spacer"}),F.source?e.default.createElement("span",{className:"ip-src"},e.default.createElement(I,{name:"monitor",size:11}),qe(F.source)):null),e.default.createElement("div",{className:"ip-latest"},Ni(F.content)?e.default.createElement("div",{className:"ip-next-step"},e.default.createElement("span",{className:"ip-next-step-label"},n("\u4E0B\u4E00\u6B65")),e.default.createElement("span",null,Ni(F.content))):null,e.default.createElement("div",{className:`ip-latest-content ${F.content&&F.content.length>300&&!N?"is-clamped":""}`},F.content),e.default.createElement("div",{className:"ip-latest-foot"},e.default.createElement("span",{className:"ip-muted"},n("\u4E0B\u4E00\u6B65\u4ECE\u8FD9\u91CC\u63A5\u7740\u63A8\u8FDB")),e.default.createElement("span",{className:"ip-spacer"}),F.content&&F.content.length>300?e.default.createElement(z,{size:"sm",variant:"ghost",onClick:()=>k(c=>!c)},N?n("\u6536\u8D77"):n("\u5C55\u5F00\u5168\u90E8")):null,e.default.createElement(z,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>L(!0)},n("\u8BB0\u8FDB\u5C55"))))):null,e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},n("\u5173\u8054\u4F1A\u8BDD")),e.default.createElement("span",{className:"ip-section-count"},(x.session_refs||[]).length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(z,{size:"sm",variant:"ghost",icon:"search",onClick:()=>W(!0)},n("\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD"))),(x.session_refs||[]).length?e.default.createElement("div",{className:"ip-session-chips"},x.session_refs.map(c=>e.default.createElement("button",{key:c.session_id,type:"button",className:"ip-session-chip",onClick:()=>we(c),title:c.session_id},e.default.createElement(I,{name:"monitor",size:12}),e.default.createElement("span",null,c.title||String(c.session_id).slice(0,18)),c.device?e.default.createElement("span",{className:"ip-session-device"},c.device):null))):e.default.createElement("p",{className:"ip-muted"},n("\u8FD8\u6CA1\u6709\u5173\u8054\u4F1A\u8BDD\uFF1B\u4E00\u952E\u63A8\u8FDB\u540E\u53EF\u7528\u300C\u67E5\u627E\u76F8\u5173\u4F1A\u8BDD\u300D\u7ED1\u5B9A\u3002"))),e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},n("\u5173\u8054\u4EA7\u51FA")),e.default.createElement("span",{className:"ip-section-count"},B.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(z,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>E(c=>!c)},n("\u52A0\u4EA7\u51FA"))),B.length?e.default.createElement("ul",{className:"ip-links"},B.map(c=>e.default.createElement(dt,{key:c.id||c.url,link:c}))):e.default.createElement("p",{className:"ip-muted"},n("\u8FD8\u6CA1\u6709\u5173\u8054\u4EA7\u51FA \u2014\u2014 \u63A8\u8FDB\u540E\u628A\u6210\u679C\u94FE\u63A5\u6302\u5728\u8FD9\u91CC\u3002"))),e.default.createElement("section",{className:"ip-section"},e.default.createElement("div",{className:"ip-section-head"},e.default.createElement("span",{className:"ip-section-title"},n("\u8FDB\u5C55\u5386\u53F2")),e.default.createElement("span",{className:"ip-section-count"},ce.length),e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(z,{size:"sm",variant:"ghost",icon:"plus",onClick:()=>L(c=>!c)},n("\u52A0\u8FDB\u5C55"))),ce.length?e.default.createElement("ul",{className:"ip-timeline"},ce.map(c=>e.default.createElement(pt,{key:c.id||c.created_at,update:c}))):e.default.createElement("p",{className:"ip-muted"},F?n("\u6CA1\u6709\u66F4\u65E9\u7684\u8FDB\u5C55\u3002"):n("\u8FD8\u6CA1\u6709\u8FDB\u5C55\u8BB0\u5F55\u3002")),D?e.default.createElement(ct,{no:R}):null),C?A:null))),g?e.default.createElement(ut,{idea:x,onClose:()=>b(!1)}):null,u?e.default.createElement(mt,{idea:x,onClose:()=>d(!1)}):null,X?e.default.createElement(gt,{idea:x,onClose:()=>W(!1)}):null)}function ve(i){return String(i||"").trim().replace(/\/+$/,"")}function vt({onClose:i}){let t=v(C=>C.settings),a=v(C=>C.storagePath),o=v(C=>C.device),s=v(C=>C.mode),[r,l]=e.default.useState(s==="cloud"?"cloud":"local"),[p,h]=e.default.useState(o),[f,g]=e.default.useState(pe),[b,u]=e.default.useState(""),[d,D]=e.default.useState(!1),[L,P]=e.default.useState(!1),[E,q]=e.default.useState(!1),[M,J]=e.default.useState(!1),[K,N]=e.default.useState(null);e.default.useEffect(()=>{ci()},[]);let k=e.default.useRef(!1);e.default.useEffect(()=>{if(!t||k.current)return;k.current=!0,l(t.mode==="cloud"?"cloud":"local"),typeof t.device=="string"&&h(t.device);let C=t.cloud&&typeof t.cloud.base=="string"?t.cloud.base:"";g(C||pe)},[t]);let S=t&&t.cloud||{},T=!!S.hasKey,X=typeof S.keyHint=="string"?S.keyHint:"",W=typeof S.base=="string"?S.base:"",O=ve(f)||W||pe,x=ve(f)!==ve(W||pe)||b.trim()!=="",U=t&&typeof t.storagePath=="string"&&t.storagePath||a,B=C=>{l(C),N(null)},R=async()=>{if(L)return;let C=ve(f);if(!C){_(n("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(C)){_(n("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}P(!0),N(null);let A=await mi({base:C,apiKey:b.trim()});if(P(!1),A&&A.ok){N({ok:!0,text:n("\u8FDE\u63A5\u6B63\u5E38 \xB7 \u4E91\u7AEF {count} \u6761 \xB7 \u5EF6\u8FDF {ms} ms",{count:A.count,ms:A.latencyMs})});return}let Q=A&&Number(A.status);N({ok:!1,text:Q===401||Q===403?n("\u8FDE\u63A5\u5931\u8D25\uFF1A\u4E91\u7AEF\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API Key"):n("\u8FDE\u63A5\u5931\u8D25\uFF1A{error}",{error:A&&A.error||n("\u672A\u77E5\u9519\u8BEF")})})},ze=async()=>{if(M||!T||typeof window>"u"||typeof window.confirm!="function"||!window.confirm(n("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 API Key\uFF1F\u6E05\u9664\u540E\u4E91\u7AEF\u8BFB\u5199\u4F1A\u5931\u8D25\uFF0C\u76F4\u5230\u91CD\u65B0\u586B\u5165\u3002")))return;J(!0);let A=await gi();J(!1),A&&(u(""),N(null))},F=async()=>{E||(q(!0),await fi(),q(!1))},ce=async()=>{if(d)return;let C=r==="cloud"?"cloud":"local",A={};t?C!==t.mode&&(A.mode=C):C!==s&&(A.mode=C);let Q=p.trim();if(!Q){_(n("\u8BBE\u5907\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if((t?Q!==t.device:Q!==o)&&(A.device=Q),C==="cloud"){let ie=ve(f);if(!ie){_(n("\u4E91\u7AEF\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"),{error:!0});return}if(!/^https?:\/\//i.test(ie)){_(n("\u4E91\u7AEF\u5730\u5740\u8981\u4EE5 http(s):// \u5F00\u5934"),{error:!0});return}let oe={};ie!==W&&(oe.base=ie);let we=b.trim();we&&(oe.apiKey=we),Object.keys(oe).length&&(A.cloud=oe)}if(Object.keys(A).length===0){i();return}D(!0);let be=await ui(A);D(!1),be&&i()};return e.default.createElement(ge,{title:n("\u8BBE\u7F6E"),onClose:i,width:568,footer:e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{className:"ip-spacer"}),e.default.createElement(z,{onClick:i},n("\u5173\u95ED")),e.default.createElement(z,{variant:"primary",onClick:ce,disabled:d},d?n("\u4FDD\u5B58\u4E2D\u2026"):n("\u4FDD\u5B58")))},e.default.createElement("div",{className:"ip-dialog-rows"},e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,n("\u6570\u636E\u4F4D\u7F6E")),e.default.createElement("p",null,n("\u5148\u9009\u6570\u636E\u5B58\u5728\u54EA\u91CC\uFF1B\u5207\u6362\u6A21\u5F0F\u4E0D\u4F1A\u81EA\u52A8\u642C\u6570\u636E\u3002"))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},n("\u8FD0\u884C\u6A21\u5F0F")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-status-switch",role:"group","aria-label":n("\u8FD0\u884C\u6A21\u5F0F")},e.default.createElement("button",{type:"button",className:r==="local"?"is-on":"","aria-pressed":r==="local",onClick:()=>B("local")},n("\u672C\u673A\u6A21\u5F0F")),e.default.createElement("button",{type:"button",className:r==="cloud"?"is-on":"","aria-pressed":r==="cloud",onClick:()=>B("cloud")},n("\u4E91\u7AEF\u6A21\u5F0F"))),e.default.createElement("p",{className:"ip-dialog-note"},r==="cloud"?n("\u4E91\u7AEF\u6A21\u5F0F\uFF1A\u6570\u636E\u5728\u4E91\u7AEF {base}\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u52A8\u3002",{base:O}):n("\u672C\u673A\u6A21\u5F0F\uFF1A\u6570\u636E\u53EA\u5B58\u5728\u8FD9\u53F0\u673A\u5668\u7684 DSH_HOME/idea-pool/ \u4E0B\uFF0C\u7531\u63D2\u4EF6\u76F4\u63A5\u8BFB\u5199\uFF0C\u4E0D\u7ECF\u8FC7\u7F51\u7EDC\uFF1B\u6362\u673A\u5668\u770B\u4E0D\u5230\u3002")))),r==="local"?e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},n("\u5B58\u50A8\u8DEF\u5F84")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("code",{className:"ip-dialog-code"},U||n("\u672A\u77E5")),e.default.createElement("p",{className:"ip-dialog-note"},n("\u672C\u673A\u6A21\u5F0F\u4E0B\u6240\u6709\u60F3\u6CD5\u90FD\u5B58\u5728\u8FD9\u4E2A JSON \u6587\u4EF6\u91CC\uFF0C\u5220\u6389\u6587\u4EF6\u7B49\u4E8E\u6E05\u7A7A\u7075\u611F\u6C60\u3002")))):null),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,n("\u8FDE\u63A5\u914D\u7F6E")),e.default.createElement("p",null,r==="cloud"?n("\u4E91\u7AEF\u5730\u5740\u4E0E API Key\uFF1B\u6D4B\u8BD5\u4F7F\u7528\u5F53\u524D\u586B\u5199\u7684\u503C\u3002"):n("\u672C\u673A\u6A21\u5F0F\u4E0D\u9700\u8981\u8FDE\u63A5\uFF1B\u5207\u5230\u4E91\u7AEF\u6A21\u5F0F\u540E\u518D\u586B\u5199\u5730\u5740\u4E0E Key\u3002"))),r==="cloud"?e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},n("\u4E91\u7AEF\u5730\u5740")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:f,placeholder:pe,onChange:C=>{g(C.target.value),N(null)}})),e.default.createElement("p",{className:"ip-dialog-note"},n("\u4E91\u7AEF ideas-api \u57FA\u5740\uFF0C\u9ED8\u8BA4 {base}\u3002",{base:pe})))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},n("API Key")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",type:"password",autoComplete:"off",value:b,placeholder:T?n("\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D {hint}",{hint:X||"****"}):n("\u7C98\u8D34\u4E91\u7AEF API Key"),onChange:C=>{u(C.target.value),N(null)}}),T?e.default.createElement(z,{size:"sm",variant:"danger",onClick:ze,disabled:M||d},M?n("\u6E05\u9664\u4E2D\u2026"):n("\u6E05\u9664\u5DF2\u4FDD\u5B58\u7684 Key")):null),e.default.createElement("p",{className:"ip-dialog-note"},T?n("\u5DF2\u4FDD\u5B58 API Key\uFF08\u672B\u56DB\u4F4D {hint}\uFF09\uFF1B\u7559\u7A7A\u8868\u793A\u4E0D\u6539\u3002",{hint:X||"****"}):n("\u8FD8\u6CA1\u914D\u7F6E API Key\uFF1B\u4E91\u7AEF\u8BFB\u5199\u9700\u8981\u5B83\u3002")))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},n("\u6D4B\u8BD5\u8FDE\u63A5")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(z,{size:"sm",icon:"bolt",onClick:R,disabled:L},L?n("\u6D4B\u8BD5\u4E2D\u2026"):n("\u6D4B\u8BD5\u8FDE\u63A5")),K?e.default.createElement("span",{className:`ip-cloud-status ${K.ok?"is-ok":"is-error"}`},e.default.createElement(I,{name:K.ok?"check":"alert",size:12}),K.text):e.default.createElement("span",{className:"ip-cloud-status"},n("\u7528\u5F53\u524D\u586B\u5199\u914D\u7F6E\u8BD5\u62C9\u4E00\u6B21\uFF0C\u4E0D\u9700\u8981\u5148\u4FDD\u5B58")))))):e.default.createElement("p",{className:"ip-dialog-note"},n("\u5F53\u524D\u662F\u672C\u673A\u6A21\u5F0F\u3002"))),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,n("\u6570\u636E\u8FC1\u79FB")),e.default.createElement("p",null,n("\u5BFC\u5165\u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\uFF1B\u4E0D\u4F1A\u5220\u9664\u672C\u673A\u73B0\u6709\u6570\u636E\u3002"))),r==="local"?e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},n("\u5BFC\u51FA")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(z,{icon:"download",onClick:()=>vi()},n("\u5BFC\u51FA JSON"))),e.default.createElement("p",{className:"ip-dialog-note"},n("\u5BFC\u51FA\u5168\u90E8\u60F3\u6CD5\u3001\u8FDB\u5C55\u4E0E\u4EA7\u51FA\u4E3A\u4E00\u4E2A JSON \u6587\u4EF6\uFF0C\u4FBF\u4E8E\u5907\u4EFD\u6216\u8FC1\u79FB\u3002")))):null,e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},n("\u5BFC\u5165\u5230\u672C\u673A")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement(z,{size:"sm",icon:"download",onClick:F,disabled:E||!T||x,title:T?x?n("\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1B\u5148\u4FDD\u5B58\uFF0C\u518D\u5BFC\u5165\u3002"):void 0:n("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002")},E?n("\u5BFC\u5165\u4E2D\u2026"):n("\u4ECE\u4E91\u7AEF\u5BFC\u5165\u5230\u672C\u673A"))),e.default.createElement("p",{className:"ip-dialog-note"},T?x?n("\u8FDE\u63A5\u914D\u7F6E\u6709\u672A\u4FDD\u5B58\u4FEE\u6539\uFF1A\u5148\u70B9\u300C\u4FDD\u5B58\u300D\uFF0C\u518D\u5BFC\u5165\uFF0C\u907F\u514D\u7528\u9519\u5730\u5740\u6216 Key\u3002"):n("\u7528\u5DF2\u4FDD\u5B58\u7684\u4E91\u7AEF\u914D\u7F6E\u62C9\u5168\u91CF\uFF0C\u6309\u7F16\u53F7\u5408\u5E76\u8FDB\u672C\u673A\uFF1B\u4E0D\u6539\u5F53\u524D\u6A21\u5F0F\uFF0C\u672C\u673A\u6570\u636E\u4E0D\u4F1A\u88AB\u5220\u3002"):n("\u8FD8\u6CA1\u6709\u4FDD\u5B58 API Key\uFF0C\u65E0\u6CD5\u5BFC\u5165\uFF1B\u5148\u586B Key \u5E76\u4FDD\u5B58\u3002"))))),e.default.createElement("section",{className:"ip-settings-group"},e.default.createElement("div",{className:"ip-settings-head"},e.default.createElement("h3",null,n("\u9AD8\u7EA7")),e.default.createElement("p",null,n("\u8BBE\u5907\u6807\u8BC6\u4F1A\u5199\u8FDB\u60F3\u6CD5\u4E0E\u8FDB\u5C55\u7684 source \u5B57\u6BB5\uFF0C\u8DE8\u673A\u63A5\u529B\u65F6\u7528\u5B83\u5B9A\u4F4D\u6765\u6E90\u3002"))),e.default.createElement("div",{className:"ip-dialog-row"},e.default.createElement("span",{className:"ip-dialog-row-label"},n("\u8BBE\u5907\u6807\u8BC6")),e.default.createElement("div",{className:"ip-dialog-row-main"},e.default.createElement("div",{className:"ip-inline-row"},e.default.createElement("input",{className:"ip-inline-input",value:p,placeholder:"dsh-mac / dsh-win / volcano",onChange:C=>h(C.target.value)})))))))}function Di(){Ze();let i=v(k=>k.booted),t=v(k=>k.loading),a=v(k=>k.error),o=v(k=>k.canUndo),s=v(k=>k.ideas),r=v(k=>k.status),l=v(k=>k.query),p=v(k=>k.selectedNo),h=v(k=>k.total),f=v(k=>k.suppressAutoSelect),g=v(k=>k.view),b=e.default.useRef(null),u=e.default.useRef(null),[d,D]=e.default.useState(1200),[L,P]=e.default.useState(!1),E=d<880,q=d<640;e.default.useEffect(()=>{Pe()},[]),e.default.useEffect(()=>{let k=b.current;if(!k||typeof ResizeObserver>"u")return;let S=new ResizeObserver(([T])=>{T&&T.contentRect&&D(T.contentRect.width)});return S.observe(k),()=>S.disconnect()},[]),e.default.useEffect(()=>{!i||E||p||f||l.trim()||s.length&&re(s[0].idea_no)},[i,E,p,f,l,s]),e.default.useEffect(()=>{let k=S=>{let T=S.target,X=T&&T.tagName||"",W=/^(INPUT|TEXTAREA|SELECT)$/.test(X)||!!(T&&T.isContentEditable);if((S.metaKey||S.ctrlKey)&&!S.shiftKey&&(S.key==="z"||S.key==="Z")&&!W&&o){S.preventDefault(),Ue();return}if(S.key==="/"&&!W&&!S.metaKey&&!S.ctrlKey&&!S.altKey){S.preventDefault(),u.current?.focus();return}S.key==="Escape"&&E&&p&&$e()};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[o,E,p]);let M=!E||!p,J=!E||!!p,K=E&&!!p,N=i&&!t&&!a&&s.length===0&&r==="all"&&!l.trim();return e.default.createElement("div",{className:`ip-root ${E?"is-narrow":""} ${q?"is-compact":""} ${K?"is-reading":""} ${g==="review"?"is-review":""}`,ref:b},e.default.createElement("style",null,Ve),e.default.createElement(it,{searchRef:u,onOpenSettings:()=>P(!0)}),K?null:e.default.createElement(at,{highlight:N}),i&&!K?e.default.createElement(ot,null):null,e.default.createElement("div",{className:"ip-body"},t&&!i?e.default.createElement(fe,{label:n("\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u6C60\u2026")}):a&&!i?e.default.createElement("div",{className:"ip-error-pane"},e.default.createElement("span",{className:"ip-empty-icon"},e.default.createElement(I,{name:"alert",size:24})),e.default.createElement("p",{className:"ip-empty-title"},n("\u7075\u611F\u6C60\u52A0\u8F7D\u5931\u8D25")),e.default.createElement("p",{className:"ip-empty-hint"},a),e.default.createElement(z,{icon:"refresh",onClick:()=>oi()},n("\u91CD\u8BD5"))):e.default.createElement(e.default.Fragment,null,M?e.default.createElement("div",{className:"ip-list-pane"},e.default.createElement("div",{className:"ip-list-viewbar"},e.default.createElement("div",{className:"ip-view-switch",role:"group","aria-label":n("\u89C6\u56FE")},e.default.createElement("button",{type:"button",className:g==="list"?"is-on":"","aria-pressed":g==="list",onClick:()=>Oe("list")},n("\u5217\u8868")),e.default.createElement("button",{type:"button",className:g==="review"?"is-on":"","aria-pressed":g==="review",onClick:()=>Oe("review")},n("\u68B3\u7406"))),e.default.createElement("span",{className:"ip-list-count"},n("{n} \u6761",{n:h}))),e.default.createElement(lt,{narrow:E})):null,J?e.default.createElement(ft,{narrow:E}):null)),L?e.default.createElement(vt,{onClose:()=>P(!1)}):null,e.default.createElement(bi,null))}var Ce={sessions:null,uiWorkspace:null};function ht({size:i}){return e.default.createElement(I,{name:"bulb",size:i})}var xt=["slots","sessions","uiWorkspace"];function bt(i){let t=a=>{try{return typeof i.get=="function"?i.get(a):i[a]}catch{return}};Ce={sessions:t("sessions")??i.sessions??null,uiWorkspace:t("uiWorkspace")??i.uiWorkspace??null},i.slots.inject("main",()=>i.slots.register({name:"main",key:wi},Di)),i.effect(()=>{let a=null,o=()=>{a?.(),a=i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:wi,order:15,label:()=>n("\u7075\u611F\u6C60")},ht))};o();let s=De(o);return()=>{s(),a?.()}},"dsh-idea-pool: sidebar entry")}
return module.exports}})
