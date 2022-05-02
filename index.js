const { Telegraf, Context } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)
const command = require('./const')

bot.start((ctx) => ctx.reply('Привет, студент'))
bot.help((ctx) => ctx.reply(command.commands))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.on('message', (ctx) => console.log(ctx.message))
/* bot.on('message', (ctx) => console.log(text)) */
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))