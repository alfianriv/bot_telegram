const Bot = require('node-telegram-bot-api');
const token = '839511924:AAH7t3zVeKKrv8RKdWtxkEs77fjpNRxUIME'
const bot = new Bot(token, {polling: true});

bot.on('message', (msg) => {
  console.log(msg);

  bot.sendMessage(msg.chat.id, msg.text.toString());
});
