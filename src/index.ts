import { Context, Schema } from 'koishi'

export const name = 'md-tryer'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('echo-md <text:text>', '以原生 Markdown 形式回显内容')
    .action(async ({ session }, text) => {
      if (!text) return '请输入内容'

      // 仅处理 QQ 平台
      if (session.platform !== 'qq') {
        return '此指令仅支持 QQ 平台的原生 Markdown。'
      }

      try {
        // 使用 internal 调用底层 API
        // 发送原生 Markdown 关键在于直接给 markdown 字段传 content
        await session.bot.internal.sendMessage(session.channelId, {
            msg_id: session.messageId,
            msg_type: 2, // 显式指定消息类型为 Markdown
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