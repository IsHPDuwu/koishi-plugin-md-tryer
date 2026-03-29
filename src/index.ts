import { Context, Schema } from 'koishi'

export const name = 'md-tryer'

const logger = 'echo-md'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

async function sendMarkdown(session, content: string) {
  if (session.platform !== 'qq') {
    return '此指令仅支持 QQ 平台的原生 Markdown。'
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
    session.app.logger(logger).error('发送失败:', e)
    return `发送失败，请确认是否已开通原生 MD 权限。错误信息: ${e.message}`
  }
}

export function apply(ctx: Context) {
  ctx.command('echo-md <text:text>', '以原生 Markdown 形式回显内容')
    .action(async ({ session }, text) => {
      if (!text) return '请输入内容'

      return sendMarkdown(session, text)
    })

  ctx.command('echo-md-passage', '进入文稿态并将下一条消息以原生 Markdown 回显')
    .action(async ({ session }) => {
      if (session.platform !== 'qq') {
        return '此指令仅支持 QQ 平台的原生 Markdown。'
      }

      session.send('请发送下一条消息作为 Markdown 文稿内容。')

      const next = await session.prompt()
      if (!next) return '未获取到文稿内容。'

      return sendMarkdown(session, next)
    })
}