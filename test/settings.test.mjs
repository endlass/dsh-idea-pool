// settings.json 单测（v0.2）：模式、云端配置、600 权限、密钥只落盘不回传。
import test from 'node:test'
import assert from 'node:assert/strict'
import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { CLOUD_DEFAULT_BASE, Settings, cloudKeyHint, defaultSettings, publicSettings } from '../lib/settings.mjs'
import { cleanup, tempRoot } from './helpers.mjs'

async function withRoot(fn) {
  const root = await tempRoot('idea-pool-settings')
  try {
    return await fn(root)
  } finally {
    await cleanup(root)
  }
}

const json = async (file) => JSON.parse(await readFile(file, 'utf8'))

test('默认设置：local 模式 + 默认云端 base，读不凭空建文件', async () => {
  await withRoot(async (root) => {
    const settings = new Settings({ root, device: 'dsh-test' })
    const value = await settings.read()
    assert.deepEqual(value, { device: 'dsh-test', mode: 'local', cloud: { base: CLOUD_DEFAULT_BASE, apiKey: '' } })
    assert.deepEqual(defaultSettings('dsh-test'), value)
    assert.equal(CLOUD_DEFAULT_BASE, 'https://www.zhaoningyuan.com/ideas/api')
    await assert.rejects(stat(join(root, 'settings.json')), (err) => err.code === 'ENOENT')
    // 公开视图：无密钥
    assert.deepEqual(publicSettings(value).cloud, { base: CLOUD_DEFAULT_BASE, hasKey: false, keyHint: '' })
  })
})

test('读取迁移：v0.1 文件（空 base / hasKey）→ v0.2 形态，mode 合法则保留', async () => {
  await withRoot(async (root) => {
    const file = join(root, 'settings.json')
    await writeFile(
      file,
      JSON.stringify({ device: 'dsh-old', mode: 'cloud', cloud: { base: '', hasKey: true }, apiKey: 'sk-old-top' }),
    )
    const value = await new Settings({ root }).read()
    assert.equal(value.mode, 'cloud')
    assert.equal(value.cloud.base, CLOUD_DEFAULT_BASE)
    // v0.1 没落盘 key：只会读 cloud.apiKey；顶层 apiKey 与 hasKey 都不采信
    assert.equal(value.cloud.apiKey, '')
    // 读时把文件权限修回 600
    assert.equal((await stat(file)).mode & 0o777, 0o600)
  })
})

test('读取清洗：非法 mode/base/apiKey 回默认值，合法 apiKey 保留', async () => {
  await withRoot(async (root) => {
    await writeFile(
      join(root, 'settings.json'),
      JSON.stringify({ device: '', mode: 'sync', cloud: { base: 'ftp://bad', apiKey: '  sk-keep-1234  ' } }),
    )
    const value = await new Settings({ root, device: 'fallback' }).read()
    assert.equal(value.device, 'fallback')
    assert.equal(value.mode, 'local')
    assert.equal(value.cloud.base, CLOUD_DEFAULT_BASE)
    assert.equal(value.cloud.apiKey, 'sk-keep-1234')
    const publicValue = publicSettings(value)
    assert.deepEqual(publicValue.cloud, { base: CLOUD_DEFAULT_BASE, hasKey: true, keyHint: '1234' })
  })
})

test('update：写入 600、原子写、只留一份、目录 700', async () => {
  await withRoot(async (root) => {
    const settings = new Settings({ root, device: 'dsh-test' })
    const next = await settings.update({ device: 'dsh-new', mode: 'cloud' })
    assert.equal(next.device, 'dsh-new')
    assert.equal(next.mode, 'cloud')
    const file = join(root, 'settings.json')
    assert.equal((await stat(file)).mode & 0o777, 0o600)
    assert.equal((await stat(root)).mode & 0o777, 0o700)
    const files = await readdir(root)
    assert.deepEqual(files.filter((name) => name.includes('.tmp')), [])
    const saved = await json(file)
    assert.deepEqual(saved, {
      device: 'dsh-new',
      mode: 'cloud',
      cloud: { base: CLOUD_DEFAULT_BASE, apiKey: '' },
    })
    assert.deepEqual(await new Settings({ root }).read(), saved)
  })
})

test('update：base 规范化（http(s)/去尾斜杠），apiKey 非空才更新、clearKey 清空', async () => {
  await withRoot(async (root) => {
    const settings = new Settings({ root, device: 'dsh-test' })
    await settings.update({ cloud: { base: 'https://Cloud.Example/ideas/api///', apiKey: 'sk-first-1111' } })
    let saved = await json(join(root, 'settings.json'))
    assert.equal(saved.cloud.base, 'https://cloud.example/ideas/api')
    assert.equal(saved.cloud.apiKey, 'sk-first-1111')

    // 空 apiKey 表示不改
    await settings.update({ cloud: { apiKey: '' } })
    saved = await json(join(root, 'settings.json'))
    assert.equal(saved.cloud.apiKey, 'sk-first-1111')

    // 非空 apiKey 更新，keyHint 跟着变
    await settings.update({ cloud: { apiKey: 'sk-second-2222' } })
    saved = await json(join(root, 'settings.json'))
    assert.equal(saved.cloud.apiKey, 'sk-second-2222')
    assert.equal(publicSettings(await settings.read()).cloud.keyHint, '2222')

    // clearKey 清空（与同请求里的 apiKey 同时出现时 clearKey 优先）
    await settings.update({ cloud: { clearKey: true, apiKey: 'sk-third-3333' } })
    saved = await json(join(root, 'settings.json'))
    assert.equal(saved.cloud.apiKey, '')
    assert.equal(publicSettings(await settings.read()).cloud.hasKey, false)
    assert.equal(cloudKeyHint(''), '')
  })
})

test('publicSettings：永远不返回 apiKey，只给 hasKey/keyHint/末四位/默认 base', async () => {
  await withRoot(async (root) => {
    const file = join(root, 'settings.json')
    await writeFile(
      file,
      JSON.stringify({ device: 'dsh-old', mode: 'cloud', cloud: { base: 'https://cloud.example', apiKey: 'sk-top-secret-9876' } }),
    )
    const value = await new Settings({ root }).read()
    const publicValue = publicSettings(value)
    assert.equal(JSON.stringify(publicValue).includes('sk-top-secret'), false)
    assert.equal(JSON.stringify(publicValue).includes('apiKey'), false)
    assert.deepEqual(Object.keys(publicValue).sort(), ['cloud', 'device', 'mode'])
    assert.deepEqual(publicValue.cloud, { base: 'https://cloud.example', hasKey: true, keyHint: '9876' })
    assert.equal(publicValue.mode, 'cloud')
    // 缺省参数也能用
    assert.deepEqual(Object.keys(publicSettings(undefined)).sort(), ['cloud', 'device', 'mode'])
    assert.equal(publicSettings(undefined).cloud.hasKey, false)
  })
})

test('update：非法 mode/base/apiKey/clearKey 拒绝且不写文件', async () => {
  await withRoot(async (root) => {
    const settings = new Settings({ root, device: 'dsh-test' })
    await assert.rejects(settings.update({ mode: 'sync' }), (err) => err.status === 400 && /mode 不合法/.test(err.message))
    await assert.rejects(settings.update({ cloud: { base: 'ftp://x' } }), (err) => err.status === 400)
    await assert.rejects(settings.update({ cloud: { base: 'nope' } }), (err) => err.status === 400)
    await assert.rejects(settings.update({ cloud: { apiKey: 42 } }), (err) => err.status === 400)
    await assert.rejects(settings.update({ cloud: { clearKey: 1 } }), (err) => err.status === 400)
    await assert.rejects(settings.update('nope'), (err) => err.status === 400)
    await assert.rejects(stat(join(root, 'settings.json')), (err) => err.code === 'ENOENT')
  })
})
