// 测试共用工具：临时数据目录、模拟 Node 原生 req/res、模拟 Cordis ctx。
// 文件名不以 .test.mjs 结尾，`node --test test/*.test.mjs` 不会把它当测试跑。
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Readable } from 'node:stream'

export async function tempRoot(label = 'idea-pool-test') {
  return mkdtemp(join(tmpdir(), `${label}-`))
}

export async function cleanup(root) {
  if (!root) return
  await rm(root, { recursive: true, force: true })
}

/** 模拟 IncomingMessage：可异步迭代的 Readable + method/url/headers。 */
export function makeReq({ method = 'GET', url = '/idea-pool/health', headers = {}, body } = {}) {
  const chunks = body === undefined ? [] : [Buffer.isBuffer(body) ? body : Buffer.from(String(body))]
  const req = Readable.from(chunks)
  req.method = method
  req.url = url
  req.headers = headers
  return req
}

/** 模拟 ServerResponse：记录 status/headers/body。 */
export function makeRes() {
  return {
    statusCode: 200,
    headers: {},
    headersSent: false,
    ended: false,
    body: '',
    chunks: [],
    setHeader(name, value) {
      this.headers[String(name).toLowerCase()] = value
    },
    end(data) {
      if (data !== undefined) this.chunks.push(Buffer.isBuffer(data) ? data : Buffer.from(String(data)))
      this.body = Buffer.concat(this.chunks).toString('utf8')
      this.headersSent = true
      this.ended = true
    },
  }
}

export function parseBody(res) {
  return res.body ? JSON.parse(res.body) : null
}

/** 发一个请求并返回 { res, json }。 */
export async function call(handler, options) {
  const req = makeReq(options)
  const res = makeRes()
  await handler(req, res)
  return { res, json: parseBody(res) }
}

/**
 * 模拟 Cordis 上下文：效果注册会被立即执行，disposer 收集起来。
 * @param {{rejection?: number}} [options] - connection.requestRejection 的返回值。
 */
export function makeCtx({ rejection } = {}) {
  const registrations = { webServer: [], tools: [] }
  const disposers = []
  const ctx = {
    connection: { requestRejection: () => rejection },
    webServer: {
      register(route) {
        registrations.webServer.push(route)
        const dispose = () => {}
        disposers.push(dispose)
        return dispose
      },
    },
    tools: {
      register(definition) {
        registrations.tools.push(definition)
        const dispose = () => {}
        disposers.push(dispose)
        return dispose
      },
    },
    effect(callback) {
      const dispose = callback()
      disposers.push(typeof dispose === 'function' ? dispose : () => {})
      return () => {}
    },
  }
  return { ctx, registrations, disposers }
}
