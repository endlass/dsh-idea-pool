/**
 * dsh-idea-pool：Host 半片。
 *
 * - /idea-pool/* 前缀路由（Node 原生 req/res）：本机 state.json 的 HTTP 接口；
 * - idea_pool agent 工具：与 UI 走同一个 IdeaService；
 * - 两个注册都用 ctx.effect 包起来，插件卸载/重载时自动摘掉。
 *
 * 契约见 CONTRACT.md；Host 只 import Node 内置模块，不 import 任何 @deepseek-ai/*。
 */
import { IdeaService } from './lib/service.mjs'
import { Settings } from './lib/settings.mjs'
import { LocalStore, ideaPoolRoot } from './lib/store-local.mjs'
import { createRouteHandler } from './lib/routes.mjs'
import { createToolDefinition } from './lib/tools.mjs'

export const name = 'dsh-idea-pool'
export const inject = ['webServer', 'connection', 'tools']

export function apply(ctx) {
  const root = ideaPoolRoot()
  const store = new LocalStore({ root })
  const settings = new Settings({ root, device: store.device })
  const service = new IdeaService({ store, settings })
  const handler = createRouteHandler({ ctx, service })

  ctx.effect(
    () => ctx.webServer.register({ kind: 'prefix', path: '/idea-pool', handler }),
    'dsh-idea-pool routes',
  )
  ctx.effect(() => ctx.tools.register(createToolDefinition({ service })), 'dsh-idea-pool tool')
}
