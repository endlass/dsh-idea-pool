// settings.json 单测：600 权限、原子写、密钥不回传、mode 恒为 local。
import test from 'node:test'
import assert from 'node:assert/strict'
import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Settings, defaultSettings, publicSettings } from '../lib/settings.mjs'
import { cleanup, tempRoot } from './helpers.mjs'

async function withRoot(fn) {
  const root = await tempRoot('idea-pool-settings')
  try {
    return await fn(root)
  } catch (err) {
    throw err
  } finally {
    await cleanup(root)
  }
}

const json = async (file) => JSON.parse(await readFile(file, 'utf8'))

test('首次读取：文件不存在时给默认值，不凭空写文件', async () => {
  await withRoot(async (root) => {
    const settings = new Settings({ root, device: 'dsh-test' })
    const value = await settings.read()
    assert.deepEqual(value, { device: 'dsh-test', mode: 'local', cloud: { base: '', hasKey: false } })
    assert.deepEqual(defaultSettings('dsh-test'), value)
    await assert.rejects(stat(join(root, 'settings.json')), (err) => err.code === 'ENOENT')
  })
})

test('update：写入 600、原子写、只留一份、目录 700', async () => {
  await withRoot(async (root) => {
    const settings = new Settings({ root, device: 'dsh-test' })
    const next = await settings.update({ device: 'dsh-new' })
    assert.equal(next.device, 'dsh-new')
    const file = join(root, 'settings.json')
    assert.equal((await stat(file)).mode & 0o777, 0o600)
    assert.equal((await stat(root)).mode & 0o777, 0o700)
    const files = await readdir(root)
    assert.deepEqual(files.filter((name) => name.includes('.tmp')), [])
    const saved = await json(file)
    assert.deepEqual(saved, { device: 'dsh-new', mode: 'local', cloud: { base: '', hasKey: false } })
    // 再读回来一致
    assert.deepEqual(await new Settings({ root }).read(), saved)
  })
})

test('publicSettings：永远不返回密钥，只给 hasKey 布尔', async () => {
  await withRoot(async (root) => {
    const file = join(root, 'settings.json')
    await writeFile(
      file,
      JSON.stringify({
        device: 'dsh-old',
        mode: 'cloud',
        apiKey: 'sk-top-secret',
        cloud: { base: 'https://cloud.example', apiKey: 'sk-cloud-secret', hasKey: true },
      }),
      { mode: 0o644 },
    )
    const settings = new Settings({ root })
    const value = await settings.read()
    // 密钥不落内存、不回传
    assert.equal(JSON.stringify(value).includes('sk-'), false)
    assert.equal(value.mode, 'local')
    assert.equal(value.device, 'dsh-old')
    assert.deepEqual(value.cloud, { base: 'https://cloud.example', hasKey: true })
    // 文件被顺手修成 600
    assert.equal((await stat(file)).mode & 0o777, 0o600)
    const publicValue = publicSettings(value)
    assert.equal(JSON.stringify(publicValue).includes('secret'), false)
    assert.equal(publicValue.cloud.hasKey, true)
    // 缺省参数也能用
    assert.deepEqual(Object.keys(publicSettings(undefined)).sort(), ['cloud', 'device', 'mode'])
  })
})

test('update：v0.1 只接受 device，其他字段静默丢弃，mode 恒 local', async () => {
  await withRoot(async (root) => {
    const settings = new Settings({ root, device: 'dsh-test' })
    await settings.update({ mode: 'cloud', cloud: { apiKey: 'sk-should-drop' }, device: 'dsh-z' })
    const saved = await json(join(root, 'settings.json'))
    assert.deepEqual(saved, { device: 'dsh-z', mode: 'local', cloud: { base: '', hasKey: false } })
    // 旧密钥写回时会被 sanitize 掉
    await writeFile(join(root, 'settings.json'), JSON.stringify({ device: 'dsh-q', apiKey: 'sk-old' }))
    await settings.update({})
    const rewritten = await readFile(join(root, 'settings.json'), 'utf8')
    assert.equal(rewritten.includes('sk-old'), false)
  })
})

test('update：device 非法拒绝且不写文件', async () => {
  await withRoot(async (root) => {
    const settings = new Settings({ root, device: 'dsh-test' })
    await assert.rejects(settings.update({ device: '' }), (err) => err.status === 400)
    await assert.rejects(settings.update({ device: 'x'.repeat(41) }), (err) => err.status === 400)
    await assert.rejects(settings.update('nope'), (err) => err.status === 400)
    await assert.rejects(stat(join(root, 'settings.json')), (err) => err.code === 'ENOENT')
  })
})
