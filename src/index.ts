import { Context, Schema } from 'koishi'
import { examples } from './markdown-example'

export const name = 'md-tryer'

export interface Config {
  verboseConsoleInfo?: boolean
}

export const Config: Schema<Config> = Schema.object({
  verboseConsoleInfo: Schema.boolean().default(false).description('是否开启调试模式，在console发送更多信息，比如打印 发送的 Markdown 内容')
})

export function apply(ctx: Context, config: Config) {
  ctx.command('echo-md <text:text>', '以原生 Markdown 形式回显内容')
    .option('example', '-e, --example <index:number> 发送预置的 Markdown 示例 (0-9)')
    .option('raw', '--raw')
    .action(async ({ session, options }, text) => {
      if (options.example !== undefined) {
        const index = Number(options.example)
        if (isNaN(index) || index < 0 || index > 9) {
          return '示例索引必须在 0-9 之间'
        }
        text = examples[index]
      } else if (!text) {
        return '请输入内容或使用 --example 选项'
      }

      if (options.raw) {
        if (config.verboseConsoleInfo) {
          ctx.logger.info('[RAW模式] 发送内容:', text)
        }
        await session.send(text)
        return
      }

      if (session.platform !== 'qq') {
        return '此指令仅支持 QQ 平台的原生 Markdown。'
      }

      if (config.verboseConsoleInfo) {
        ctx.logger.info('[Markdown模式] 发送内容:', text)
      }

      try {
        await session.bot.internal.sendMessage(session.channelId, {
            msg_id: session.messageId,
            msg_type: 2,
            markdown: {
              content: text 
            }
          })
      } catch (e) {
        ctx.logger('echo-md').error('发送失败:', e)
        return `发送失败，请确认是否已开通原生 MD 权限。错误信息: ${e.message}`
      }
    })
}