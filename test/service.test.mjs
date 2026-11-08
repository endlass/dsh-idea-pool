// IdeaService 单测：编号、状态机、搜索/计数、删除、撤销（含之后有新改动）、设置、导出。
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { IdeaService } from '../lib/service.mjs'
import { LocalStore } from '../lib/store-local.mjs'
import { Settings } from '../lib/settings.mjs'
import { ContractError } from '../lib/contract.mjs'
import { cleanup, tempRoot } from './helpers.mjs'

/** 固定且单调的时钟：每次取时间前进 1 秒，测试里时间关系可断言。 */
function makeClock(start = Date.UTC(2026, 10, 8, 12, 0, 0)) {
  let ms = start
  return () => new Date((ms += 1000))
}

function makeService(root, { device = 'dsh-test', now = makeClock() } = {}) {
  const store = new LocalStore({ root, device, now })
  const settings = new Settings({ root, device })
  return new IdeaService({ store, settings })
}

async function withService(fn) {
  const root = await tempRoot('idea-pool-service')
  try {
    return await fn({ root, service: makeService(root) })
  } finally {
    await cleanup(root)
  }
}

test('add：编号 IDEA-001 起递增，status 默认 pool，rev 1，时间是 ISO', async () => {
  await withService(async ({ service }) => {
    const first = await service.add({ raw_text: '第一个想法' })
    assert.equal(first.ok, true)
    assert.equal(first.idea.idea_no, 'IDEA-001')
    assert.equal(first.idea.title, '第一个想法')
    assert.equal(first.idea.status, 'pool')
    assert.equal(first.idea.rev, 1)
    assert.equal(first.idea.source, 'dsh-test')
    assert.equal(new Date(first.idea.created_at).toISOString(), first.idea.created_at)
    assert.equal(first.idea.n_updates, 0)
    assert.equal(first.idea.n_links, 0)

    const second = await service.add({ title: '只有标题' })
    const third = await service.add({ raw_text: '  带缩进\n  多行  ' })
    assert.equal(second.idea.idea_no, 'IDEA-002')
    assert.equal(third.idea.idea_no, 'IDEA-003')
    assert.equal(second.idea.raw_text, '')
    assert.equal(third.idea.raw_text, '带缩进\n  多行')
    assert.equal(third.idea.title, '带缩进\n  多行')
  })
})

test('add：raw_text 逐字保真（内部换行/空格/制表符一个不动）', async () => {
  await withService(async ({ service }) => {
    const raw = '第一行\n\n  第二行有  两个空格\r\n第三行\tTab 结束'
    const added = await service.add({ raw_text: `  ${raw}  ` })
    assert.equal(added.idea.raw_text, raw)
    const detail = await service.get(added.idea.idea_no)
    assert.equal(detail.idea.raw_text, raw)
  })
})

test('add：tags 字符串/数组归一化，非法输入 400', async () => {
  await withService(async ({ service }) => {
    const one = await service.add({ raw_text: 'x', tags: 'DSH, 插件,DSH' })
    assert.deepEqual(one.idea.tags, ['DSH', '插件'])
    const two = await service.add({ raw_text: 'y', tags: ['a', ' b '] })
    assert.deepEqual(two.idea.tags, ['a', 'b'])
    await assert.rejects(service.add({}), (err) => err instanceof ContractError && err.status === 400)
    // 入池时 status 不在白名单里：静默丢弃，新想法一律 pool
    const dropped = await service.add({ raw_text: 'x', status: 'done', rev: 99 })
    assert.equal(dropped.idea.status, 'pool')
    assert.equal(dropped.idea.rev, 1)
  })
})

test('状态机：只允许 pool/active/parked/done，rev 每次 PATCH +1', async () => {
  await withService(async ({ service }) => {
    const added = await service.add({ raw_text: '状态测试' })
    const ideaNo = added.idea.idea_no
    let current = added.idea
    for (const status of ['active', 'parked', 'done', 'pool']) {
      const patched = await service.update(ideaNo, { status })
      assert.equal(patched.idea.status, status)
      assert.equal(patched.idea.rev, current.rev + 1)
      current = patched.idea
    }
    await assert.rejects(service.update(ideaNo, { status: 'doing' }), (err) => err.status === 400 && /status 不合法/.test(err.message))
    // 非法状态不会写进去
    const detail = await service.get(ideaNo)
    assert.equal(detail.idea.status, 'pool')
  })
})

test('PATCH：白名单字段生效，未知字段丢弃；title 清空时回退 raw_text 前缀', async () => {
  await withService(async ({ service }) => {
    const added = await service.add({ raw_text: 'abcdefghij'.repeat(8) })
    const ideaNo = added.idea.idea_no
    const patched = await service.update(ideaNo, {
      summary: '摘要',
      tags: ['x'],
      source_note: '备注',
      source: '伪造来源',
      created_at: '2000-01-01',
    })
    assert.equal(patched.idea.summary, '摘要')
    assert.deepEqual(patched.idea.tags, ['x'])
    assert.equal(patched.idea.source_note, '备注')
    assert.equal(patched.idea.source, 'dsh-test')
    assert.notEqual(patched.idea.created_at, '2000-01-01')

    const cleared = await service.update(ideaNo, { title: '' })
    assert.equal(cleared.idea.title, added.idea.raw_text.slice(0, 40))
    await assert.rejects(service.update(ideaNo, { raw_text: '', title: '' }), /raw_text 或 title 至少填一个/)
  })
})

test('progress / link：追加、rev 递增、时间升序、source 缺省 settings.device', async () => {
  await withService(async ({ service }) => {
    const added = await service.add({ raw_text: '推进测试' })
    const ideaNo = added.idea.idea_no
    const first = await service.progress(ideaNo, { content: '第一步' })
    assert.match(first.update.id, /^u_/)
    assert.equal(first.update.content, '第一步')
    assert.equal(first.update.source, 'dsh-test')
    const second = await service.progress(ideaNo, { content: '第二步', source: 'cli' })
    assert.equal(second.update.source, 'cli')
    const link = await service.link(ideaNo, { url: 'https://example.com/x' })
    assert.match(link.link.id, /^l_/)
    assert.equal(link.link.title, 'https://example.com/x')
    assert.equal(link.link.ref_type, 'external')

    const detail = await service.get(ideaNo)
    assert.deepEqual(detail.updates.map((row) => row.content), ['第一步', '第二步'])
    assert.equal(detail.links.length, 1)
    assert.equal(detail.idea.rev, 4)
    assert.equal(detail.idea.n_updates, 2)
    assert.equal(detail.idea.n_links, 1)

    await assert.rejects(service.progress(ideaNo, { content: '  ' }), /进展内容不能为空/)
    await assert.rejects(service.link(ideaNo, { url: 'not a url' }), /url 必须是 http/)
  })
})

test('get / 404：未知编号报 idea not found，大小写不敏感', async () => {
  await withService(async ({ service }) => {
    const added = await service.add({ raw_text: '大写测试' })
    assert.equal((await service.get(added.idea.idea_no.toLowerCase())).idea.idea_no, 'IDEA-001')
    await assert.rejects(service.get('IDEA-999'), (err) => err.status === 404 && err.message === 'idea not found: IDEA-999')
    await assert.rejects(service.update('IDEA-999', { status: 'active' }), (err) => err.status === 404)
    await assert.rejects(service.progress('IDEA-999', { content: 'x' }), (err) => err.status === 404)
  })
})

test('list：状态筛选、搜索、分页、计数', async () => {
  await withService(async ({ service }) => {
    const a = await service.add({ raw_text: 'Alpha 想法' })
    const b = await service.add({ raw_text: 'Beta 想法', tags: ['DSH'] })
    await service.add({ raw_text: 'Gamma 想法' })
    await service.update(a.idea.idea_no, { status: 'active' })
    await service.update(b.idea.idea_no, { status: 'done' })

    const all = await service.list({})
    assert.equal(all.total, 3)
    assert.deepEqual(all.ideas.map((idea) => idea.idea_no), ['IDEA-003', 'IDEA-002', 'IDEA-001'])
    assert.deepEqual(all.counts, { pool: 1, active: 1, parked: 0, done: 1, total: 3 })

    const active = await service.list({ status: 'active' })
    assert.equal(active.total, 1)
    assert.equal(active.ideas[0].idea_no, a.idea.idea_no)

    const searched = await service.list({ q: 'beta' })
    assert.equal(searched.total, 1)
    assert.equal(searched.ideas[0].idea_no, b.idea.idea_no)
    const byTag = await service.list({ q: 'dsh' })
    assert.equal(byTag.total, 1)
    // 搜索跨筛选：状态不匹配时为空
    assert.equal((await service.list({ status: 'done', q: 'alpha' })).total, 0)

    const page = await service.list({ limit: 2, offset: 1 })
    assert.equal(page.total, 3)
    assert.equal(page.ideas.length, 2)
    assert.deepEqual(page.ideas.map((idea) => idea.idea_no), ['IDEA-002', 'IDEA-001'])

    await assert.rejects(service.list({ status: 'nope' }), (err) => err.status === 400)
    await assert.rejects(service.list({ limit: 0 }), (err) => err.status === 400)
    await assert.rejects(service.list({ offset: -1 }), (err) => err.status === 400)
  })
})

test('remove：删除想法，编号不回收，撤销能连进展/产出一起恢复', async () => {
  await withService(async ({ service }) => {
    const first = await service.add({ raw_text: '要删的想法' })
    await service.add({ raw_text: '第二条' })
    await service.progress(first.idea.idea_no, { content: '进展' })
    await service.link(first.idea.idea_no, { url: 'https://example.com/p' })

    const removed = await service.remove(first.idea.idea_no)
    assert.equal(removed.ok, true)
    await assert.rejects(service.get('IDEA-001'), (err) => err.status === 404)
    const third = await service.add({ raw_text: '第三条' })
    assert.equal(third.idea.idea_no, 'IDEA-003')

    const undoneAdd = await service.undo()
    assert.match(undoneAdd.label, /入池/)
    const undone = await service.undo()
    assert.match(undone.label, /删除 IDEA-001/)
    assert.equal(undone.state.ideas.length, 2)
    const restored = await service.get('IDEA-001')
    assert.equal(restored.updates.length, 1)
    assert.equal(restored.links.length, 1)
    assert.equal(restored.idea.raw_text, '要删的想法')
  })
})

test('overview / health / export', async () => {
  await withService(async ({ service }) => {
    const added = await service.add({ raw_text: '导出测试', summary: '摘要' })
    await service.progress(added.idea.idea_no, { content: '一条进展' })
    const overview = await service.overview()
    assert.equal(overview.ok, true)
    assert.equal(overview.mode, 'local')
    assert.equal(overview.device, 'dsh-test')
    assert.match(overview.storagePath, /state\.json$/)
    assert.equal(overview.total, 1)
    assert.equal(overview.canUndo, true)
    assert.equal(overview.ideas[0].raw_text, undefined) // 首屏是摘要，不带原文
    assert.equal(overview.counts.total, 1)
    assert.equal((await service.health()).count, 1)

    const exported = await service.exportData()
    assert.equal(exported.ok, true)
    assert.equal(exported.data.schema, 1)
    assert.equal(exported.data.device, 'dsh-test')
    assert.equal(new Date(exported.data.exported_at).toISOString(), exported.data.exported_at)
    assert.equal(exported.data.ideas[0].raw_text, '导出测试')
    assert.equal(exported.data.ideas[0].updates.length, 1)
  })
})

test('撤销：加进展后新增的进展保留，撤销不抹掉之后的新改动', async () => {
  await withService(async ({ root, service }) => {
    const added = await service.add({ raw_text: '撤销测试' })
    const ideaNo = added.idea.idea_no
    await service.progress(ideaNo, { content: '第一步' })
    // 另一个入口（CLI/另一个窗口）之后又加了一条进展，不在本进程撤销栈里
    const other = makeService(root)
    const at = new Date().toISOString()
    await other.store.mutate(
      '外部加进展',
      (draft) => {
        const idea = draft.ideas.find((row) => row.idea_no === ideaNo)
        idea.updates.push({ id: 'u_external', content: '别人加的', source: 'cli', created_at: at })
        idea.rev += 1
        idea.updated_at = at
        draft.meta.updated_at = at
      },
      { undoable: false },
    )
    const undone = await service.undo()
    assert.match(undone.label, /加进展/)
    const detail = await service.get(ideaNo)
    assert.deepEqual(detail.updates.map((row) => row.content), ['别人加的'])
    assert.equal(detail.idea.raw_text, '撤销测试')
  })
})

test('撤销：跨字段合并——撤销进展不清掉之前的标题修改', async () => {
  await withService(async ({ service }) => {
    const added = await service.add({ raw_text: '跨字段' })
    const ideaNo = added.idea.idea_no
    await service.update(ideaNo, { title: '改过的标题' })
    await service.progress(ideaNo, { content: '进展' })
    const first = await service.undo()
    assert.match(first.label, /加进展/)
    let detail = await service.get(ideaNo)
    assert.equal(detail.updates.length, 0)
    assert.equal(detail.idea.title, '改过的标题')
    const second = await service.undo()
    assert.match(second.label, /修改 IDEA-001/)
    detail = await service.get(ideaNo)
    assert.equal(detail.idea.title, '跨字段')
  })
})

test('撤销：同一步之后状态又被改过，拒绝并保留撤销入口', async () => {
  await withService(async ({ root, service }) => {
    const added = await service.add({ raw_text: '冲突测试' })
    const ideaNo = added.idea.idea_no
    await service.update(ideaNo, { status: 'active' })
    const other = makeService(root)
    await other.store.mutate(
      '外部改状态',
      (draft) => {
        const idea = draft.ideas.find((row) => row.idea_no === ideaNo)
        idea.status = 'done'
        idea.rev += 1
        idea.updated_at = new Date().toISOString()
        draft.meta.updated_at = new Date().toISOString()
      },
      { undoable: false },
    )
    await assert.rejects(service.undo(), (err) => err.status === 409 && /撤销冲突/.test(err.message))
    // 撤销入口还在，状态没被改坏
    assert.equal((await service.get(ideaNo)).idea.status, 'done')
    assert.equal((await service.overview()).canUndo, true)
  })
})

test('撤销：没有可撤销操作时 409', async () => {
  await withService(async ({ service }) => {
    await assert.rejects(service.undo(), (err) => err.status === 409 && /没有可以撤销/.test(err.message))
  })
})

test('settings：公开设置没有密钥；改 device 同步 state.device', async () => {
  await withService(async ({ root, service }) => {
    // 直接塞进设置文件里的密钥也不应该出现在公开设置里（v0.2：hasKey/keyHint 会体现它存在）
    await writeFile(
      join(root, 'settings.json'),
      JSON.stringify({ device: 'dsh-old', mode: 'local', cloud: { base: 'https://x.example/api/', apiKey: 'sk-secret-token' } }),
    )
    const publicBefore = await service.settingsPublic()
    assert.equal(JSON.stringify(publicBefore).includes('sk-secret'), false)
    assert.equal(publicBefore.settings.mode, 'local')
    assert.equal(publicBefore.settings.device, 'dsh-old')
    assert.deepEqual(publicBefore.settings.cloud, { base: 'https://x.example/api', hasKey: true, keyHint: 'oken' })
    assert.match(publicBefore.settings.storagePath, /state\.json$/)

    const updated = await service.updateSettings({ device: 'dsh-new' })
    assert.equal(updated.settings.device, 'dsh-new')
    assert.equal((await service.overview()).device, 'dsh-new')
    const savedText = await readFile(join(root, 'settings.json'), 'utf8')
    assert.equal(JSON.parse(savedText).mode, 'local')
    // 内部设置文件可以落盘密钥（600），但公开视图永不包含它
    assert.equal(JSON.parse(savedText).cloud.apiKey, 'sk-secret-token')
    assert.equal(JSON.stringify(await service.settingsPublic()).includes('sk-secret'), false)

    await assert.rejects(service.updateSettings({ device: '   ' }), (err) => err.status === 400)
  })
})

test('add 使用 settings.device 作为 source 缺省值', async () => {
  await withService(async ({ service }) => {
    await service.updateSettings({ device: 'dsh-settings' })
    const added = await service.add({ raw_text: '来源测试' })
    assert.equal(added.idea.source, 'dsh-settings')
  })
})
