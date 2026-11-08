// 本机存储单测：权限、原子写、mtime 重读、锁、每日备份、撤销栈、三方合并。
import test from 'node:test'
import assert from 'node:assert/strict'
import { readdir, readFile, stat, utimes, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { MAX_UNDO, LocalStore, dshHome, ideaPoolRoot, revertChange } from '../lib/store-local.mjs'
import { formatIdeaNo } from '../lib/contract.mjs'
import { cleanup, tempRoot } from './helpers.mjs'

function row(number, created = new Date().toISOString()) {
  return {
    idea_no: formatIdeaNo(number),
    title: `想法 ${number}`,
    raw_text: '',
    summary: '',
    status: 'pool',
    tags: [],
    source: 'test',
    source_note: '',
    created_at: created,
    updated_at: created,
    rev: 1,
    updates: [],
    links: [],
  }
}

const json = async (file) => JSON.parse(await readFile(file, 'utf8'))

async function withStore(fn) {
  const root = await tempRoot('idea-pool-store')
  try {
    return await fn(root)
  } finally {
    await cleanup(root)
  }
}

test('路径：$DSH_HOME/idea-pool，默认 ~/.dsh', () => {
  assert.equal(dshHome({ DSH_HOME: '/tmp/home-x' }), '/tmp/home-x')
  assert.equal(ideaPoolRoot({ DSH_HOME: '/tmp/home-x' }), '/tmp/home-x/idea-pool')
  assert.match(dshHome({}), /\.dsh$/)
})

test('首次访问生成空库；目录 700、state.json 600', async () => {
  await withStore(async (root) => {
    const store = new LocalStore({ root: join(root, 'pool') })
    const state = await store.read()
    assert.deepEqual(state, {
      schema: 1,
      device: state.device,
      next_no: 1,
      ideas: [],
      meta: { updated_at: state.meta.updated_at },
    })
    const info = await stat(store.file)
    assert.equal(info.mode & 0o777, 0o600)
    const dirInfo = await stat(store.root)
    assert.equal(dirInfo.mode & 0o777, 0o700)
  })
})

test('原子写：写完不留 tmp，文件是完整 JSON', async () => {
  await withStore(async (root) => {
    const store = new LocalStore({ root })
    await store.read()
    await store.mutate('加一条', (draft) => {
      draft.ideas.push(row(1))
      draft.next_no = 2
    })
    const files = await readdir(store.root)
    assert.deepEqual(files.filter((name) => name.includes('.tmp')), [])
    const saved = await json(store.file)
    assert.equal(saved.ideas.length, 1)
    assert.equal(saved.ideas[0].idea_no, 'IDEA-001')
  })
})

test('mtime 重读：别的进程写过后，本进程下次读能看到', async () => {
  await withStore(async (root) => {
    const first = new LocalStore({ root })
    await first.read()
    const second = new LocalStore({ root })
    await second.read()
    await second.mutate('另一进程加一条', (draft) => {
      draft.ideas.push(row(1))
      draft.next_no = 2
    })
    const state = await first.read()
    assert.equal(state.ideas.length, 1)
    assert.equal(state.ideas[0].idea_no, 'IDEA-001')
  })
})

test('mutate 回调抛错不落盘，内存态作废后能从磁盘恢复', async () => {
  await withStore(async (root) => {
    const store = new LocalStore({ root })
    await store.read()
    await store.mutate('先加一条', (draft) => {
      draft.ideas.push(row(1))
      draft.next_no = 2
    })
    const before = await readFile(store.file, 'utf8')
    await assert.rejects(
      store.mutate('坏操作', (draft) => {
        draft.ideas.push(row(2))
        throw new Error('boom')
      }),
      /boom/,
    )
    assert.equal(await readFile(store.file, 'utf8'), before)
    const state = await store.read()
    assert.equal(state.ideas.length, 1)
  })
})

test('写锁：活锁占用时等待超时报错', async () => {
  await withStore(async (root) => {
    const store = new LocalStore({ root, lockWaitMs: 150 })
    await store.read()
    await writeFile(store.lockFile, JSON.stringify({ pid: process.pid, at: new Date().toISOString() }))
    await assert.rejects(store.mutate('不该成功', (draft) => draft), /写锁等待超时/)
    // 不影响后续：清掉锁就能写
    const { unlink } = await import('node:fs/promises')
    await unlink(store.lockFile)
    await store.mutate('正常写', (draft) => {
      draft.ideas.push(row(1))
      draft.next_no = 2
    })
    assert.equal((await store.read()).ideas.length, 1)
  })
})

test('写锁：超过 30 秒的残留锁会被清理', async () => {
  await withStore(async (root) => {
    const store = new LocalStore({ root, lockWaitMs: 500, lockStaleMs: 30_000 })
    await store.read()
    const old = new Date(Date.now() - 60_000).toISOString()
    await writeFile(store.lockFile, JSON.stringify({ pid: process.pid, at: old }))
    await store.mutate('接管残留锁', (draft) => {
      draft.ideas.push(row(1))
      draft.next_no = 2
    })
    assert.equal((await store.read()).ideas.length, 1)
    await assert.rejects(stat(store.lockFile), (err) => err.code === 'ENOENT')
  })
})

test('写锁：pid 已不存在的残留锁会被清理', async () => {
  await withStore(async (root) => {
    const store = new LocalStore({ root, lockWaitMs: 500 })
    await store.read()
    await writeFile(store.lockFile, JSON.stringify({ pid: 999_999, at: new Date().toISOString() }))
    await store.mutate('接管僵尸锁', (draft) => {
      draft.ideas.push(row(1))
      draft.next_no = 2
    })
    assert.equal((await store.read()).ideas.length, 1)
  })
})

test('每日备份：写入前复制一份，当天不重复，隔天覆盖，只留一份', async () => {
  await withStore(async (root) => {
    const first = new LocalStore({ root })
    await first.read() // 生成空 state.json
    await first.mutate('加一条', (draft) => {
      draft.ideas.push(row(1))
      draft.next_no = 2
    })
    assert.equal((await json(first.bakFile)).ideas.length, 0)
    const bakBefore = await readFile(first.bakFile, 'utf8')

    // 同一实例当天再写：不重复备份
    await first.mutate('再加一条', (draft) => {
      draft.ideas.push(row(2))
      draft.next_no = 3
    })
    assert.equal(await readFile(first.bakFile, 'utf8'), bakBefore)

    // 新实例同一天：备份文件已是今天的，也不覆盖
    const second = new LocalStore({ root })
    await second.mutate('新实例加一条', (draft) => {
      draft.ideas.push(row(3))
      draft.next_no = 4
    })
    assert.equal(await readFile(first.bakFile, 'utf8'), bakBefore)

    // 把备份改成“昨天”，下一次写入前会覆盖成当前 state
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
    await utimes(first.bakFile, yesterday, yesterday)
    const third = new LocalStore({ root })
    await third.mutate('隔天第一条', (draft) => {
      draft.ideas.push(row(4))
      draft.next_no = 5
    })
    const bak = await json(first.bakFile)
    assert.equal(bak.ideas.length, 3)
    assert.equal((await stat(first.bakFile)).mode & 0o777, 0o600)
    const baks = (await readdir(root)).filter((name) => name.startsWith('state.json.bak'))
    assert.deepEqual(baks, ['state.json.bak'])
  })
})

test('撤销栈：最多 30 条，先进先出淘汰', async () => {
  await withStore(async (root) => {
    const store = new LocalStore({ root })
    await store.read()
    for (let index = 1; index <= 35; index += 1) {
      await store.mutate(`加第 ${index} 条`, (draft) => {
        draft.ideas.push(row(index))
        draft.next_no = index + 1
      })
    }
    assert.equal(store.undo.length, MAX_UNDO)
    assert.equal(MAX_UNDO, 30)
    for (let index = 0; index < MAX_UNDO; index += 1) {
      assert.equal(typeof (await store.undoLast()), 'string')
    }
    assert.equal(await store.undoLast(), null)
    const state = await store.read()
    assert.equal(state.ideas.length, 35 - MAX_UNDO)
  })
})

test('撤销栈：会话内没有可撤销内容 / 未写入的内容不占位', async () => {
  await withStore(async (root) => {
    const store = new LocalStore({ root })
    await store.read()
    assert.equal(await store.undoLast(), null)
    // 什么都没改的 mutate 不占撤销位
    await store.mutate('空操作', () => {})
    assert.equal(store.undo.length, 0)
    // undoable:false 不进栈
    await store.mutate('不记账的写', (draft) => { draft.ideas.push(row(1)) }, { undoable: false })
    assert.equal(store.undo.length, 0)
  })
})

test('revertChange：干净回滚 / 之后的新改动保留 / 冲突拒绝 / 记账字段不动', () => {
  // 干净回滚
  assert.deepEqual(revertChange({ a: 1 }, { a: 2 }, { a: 2 }), { a: 1 })
  // 这一步没动过的子树保持现状
  assert.deepEqual(revertChange({ a: 1 }, { a: 1 }, { a: 9 }), { a: 9 })
  // 标量在这之后又被改过：拒绝
  assert.throws(() => revertChange({ a: 1 }, { a: 2 }, { a: 3 }), (err) => err.status === 409 && /撤销冲突/.test(err.message))
  // 记账字段不冲突
  assert.deepEqual(revertChange({ rev: 1, n: 0 }, { rev: 2, n: 1 }, { rev: 5, n: 1 }), { rev: 5, n: 0 })
  // keyed 数组：撤掉这一步新增的行，保留之后新增的行
  const before = { rows: [] }
  const after = { rows: [{ id: 'a', v: 1 }] }
  const current = { rows: [{ id: 'a', v: 1 }, { id: 'b', v: 2 }] }
  assert.deepEqual(revertChange(before, after, current), { rows: [{ id: 'b', v: 2 }] })
  // keyed 数组：删掉的行放回来
  const deleted = revertChange({ rows: [{ id: 'a' }] }, { rows: [] }, { rows: [] })
  assert.deepEqual(deleted, { rows: [{ id: 'a' }] })
  // 非 keyed 数组（tags）冲突
  assert.throws(() => revertChange({ tags: ['a'] }, { tags: ['a', 'b'] }, { tags: ['c'] }), /撤销冲突/)
})
