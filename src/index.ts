import { Context, Schema, h } from 'koishi'
import { examples } from './markdown-example'

export const name = 'md-tryer'

export interface Config {
  verboseConsoleInfo?: boolean
  allowOtherPlatform?: boolean
  enableQuote?: boolean
  examples?: string[]
}

export const Config: Schema<Config> = Schema.object({
  verboseConsoleInfo: Schema.boolean().default(false).description('是否开启调试模式，在console发送更多信息，比如打印 发送的 Markdown 内容'),
  allowOtherPlatform: Schema.boolean().default(false).description('是否允许非 QQ 平台发送（以纯文本形式发送）'),
  enableQuote: Schema.boolean().default(true).description('是否引用回复触发指令的消息'),
  examples: Schema.array(Schema.string().role('textarea', { rows: [10, 20] }),).default(examples).role('').description('Markdown 示例数组'),
})

async function sendMarkdown(session, content: string, config: Config) {
  if (session.platform !== 'qq') {
    return config.enableQuote ? h.quote(session.messageId) + '此指令仅支持 QQ 平台的原生 Markdown。' : '此指令仅支持 QQ 平台的原生 Markdown。'
  }

  try {
    await session.bot.internal.sendMessage(session.channelId, {
      msg_id: session.messageId,
      msg_type: 2,
      markdown: {
        content,
      },
    })
  } catch (e) {
    session.app.logger('echo-md').error('发送失败:', e)
    const errorMsg = `发送失败，请确认是否已开通原生 MD 权限。错误信息: ${e.message}`
    return config.enableQuote ? h.quote(session.messageId) + errorMsg : errorMsg
  }
}

export function apply(ctx: Context, config: Config) {
  ctx.command('echo-md <text:text>', '以原生 Markdown 形式回显内容')
    .option('example', '-e, --example <index:number> 发送预置的 Markdown 示例 (0-9)')
    .option('raw', '--raw')
    .action(async ({ session, options }, text) => {
      const quote = config.enableQuote ? h.quote(session.messageId) : ''

      if (options.example !== undefined) {
        const exampleList = config.examples || examples
        const index = Number(options.example)
        const maxIndex = exampleList.length - 1
        if (isNaN(index) || index < 0 || index > maxIndex) {
          return quote + `示例索引必须在 0-${maxIndex} 之间`
        }
        text = exampleList[index]
      } else if (!text) {
        return quote + '请输入内容或使用 --example 选项'
      }

      if (session.platform !== 'qq') {
        if (!config.allowOtherPlatform) {
          return quote + '此指令仅支持 QQ 平台的原生 Markdown。'
        }
        if (config.verboseConsoleInfo) {
          ctx.logger.info('[RAW模式] 发送内容:', text)
        }
        await session.send(quote + text)
        return
      }

      if (options.raw) {
        if (config.verboseConsoleInfo) {
          ctx.logger.info('[RAW模式] 发送内容:', text)
        }
        await session.send(quote + text)
        return
      }

      if (config.verboseConsoleInfo) {
        ctx.logger.info('[Markdown模式] 发送内容:', text)
      }

      return sendMarkdown(session, text, config)
      
    })

  ctx.command('echo-md-prompt', '使用session.prompt() 将下一条消息以原生 Markdown 回显')
    .action(async ({ session }) => {
      const quote = config.enableQuote ? h.quote(session.messageId) : ''

      if (session.platform !== 'qq') {
        if (!config.allowOtherPlatform) {
          return quote + '此指令仅支持 QQ 平台的原生 Markdown。'
        }
        await session.send(quote + '请发送下一条消息作为 Markdown 内容。')
        const next = await session.prompt()
        if (!next) return quote + '未获取到内容。'
        if (config.verboseConsoleInfo) {
          ctx.logger.info('[RAW模式] 发送内容:', next)
        }
        await session.send(quote + next)
        return
      }

      await session.send(quote + '请发送下一条消息作为 Markdown 文稿内容。')

      const next = await session.prompt()
      if (!next) return quote + '未获取到文稿内容。'

      return sendMarkdown(session, next, config)
    })
}