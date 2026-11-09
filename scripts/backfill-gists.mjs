// 一次性回填：给 25 条既有想法补一句话摘要（gist）。
// 用法：node scripts/backfill-gists.mjs [root]
// root 默认 ~/.dsh/idea-pool；只填空 gist，不覆盖已有值，不改 updated_at/rev。
import { homedir } from 'node:os'
import { join } from 'node:path'
import { LocalStore } from '../lib/store-local.mjs'

const gists = {
  'IDEA-001': '主流语言在 AI 时代的生产力与选型差异，给技术栈决策一份横向对比。',
  'IDEA-002': '以 LLM 爆火为分界，回看科技行业各条技术线的起落与当下瓶颈。',
  'IDEA-003': '200–300 人企业何时该上重系统、怎么打基础，避免信息化投入失衡。',
  'IDEA-004': '双人对话配音已定方案，差干净音色样本和「三次取中位」听感验证。',
  'IDEA-005': '青浦 AI 会议逐字稿与两版简报已完成，三条内部分歧待裁定。',
  'IDEA-006': 'Hermes 与 DSH 共用的长期记忆后端选型，honcho 断链后的迁移评估。',
  'IDEA-007': 'DSH 自带 LibreOffice 引擎可作第二渲染通路，先观察、暂不接入。',
  'IDEA-008': '从 716 个记忆仓库里筛出 7 条可借鉴机制，重点不是换后端。',
  'IDEA-009': 'DLSS 5 从「提帧」转向「AI 重绘」，值得展开成一篇研究/内容。',
  'IDEA-010': 'AM5 + RTX 5060 Ti 16G 装机配置已定，双 11 前盯价入手。',
  'IDEA-011': '从 Mac 起步、云上练手、新 PC 当试验台，验证大模型训练原理。',
  'IDEA-012': '搭一套泛化+垂类分层的多渠道信息采集能力，供不同研究复用。',
  'IDEA-014': '盘点豆包 106 个 Skill，挑可借鉴机制与可复用资产。',
  'IDEA-015': '给 DSH 桌面端做多设备会话/配置/数据同步的插件方案。',
  'IDEA-016': '把灵感池与推进流程做成 DSH 的 idea-pool preset，已有技能后端。',
  'IDEA-017': '一次 add→get 往返冒烟测试，验证中文保真与站点可见，可删。',
  'IDEA-018': '把豁免白名单扩展成通用的调用级策略插件，内核可复用。',
  'IDEA-019': '上海首套置业测算网页已上线，并抽成可复用 mortgage-planner 技能。',
  'IDEA-020': 'DSH 能否替代 Hermes 主力：先补飞书入口、记忆与多端协同三块。',
  'IDEA-021': '火山云 Node 22→24 与 Mac 三处运行时的升级评估、回滚方案。',
  'IDEA-022': '把云服务器做成多机 DSH 共享工作区，比较插件/挂载/云端/接力账本。',
  'IDEA-023': '给 DSH subagents 加远端 provider，把 macOS/云任务派给子智能体。',
  'IDEA-024': '跨 agent 清点 Playwright/Node/Python 等工具，收敛成统一 owner 与路径。',
  'IDEA-025': '可发布的多格式交付物工作台：PPTX/Excel/PDF/drawio/H5/Mermaid 批注编辑。',
  'IDEA-026': '把灵感池从 preset+技能+网站改成侧栏插件，支持本机/云端双模存储。',
}

const root = process.argv[2] || join(homedir(), '.dsh', 'idea-pool')
const store = new LocalStore({ root })
const count = await store.mutate('回填一句话摘要', (state) => {
  let changed = 0
  for (const idea of state.ideas) {
    if (!idea.gist && gists[idea.idea_no]) {
      idea.gist = gists[idea.idea_no]
      changed += 1
    }
  }
  return changed
}, { undoable: false })
console.log(`已回填 ${count} 条一句话摘要（${root}）`)
