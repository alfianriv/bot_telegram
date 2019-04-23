const Telegram = require('node-telegram-bot-api');
const dbot = require('dbot-js')

const token = '839511924:AAH7t3zVeKKrv8RKdWtxkEs77fjpNRxUIME'
const ksatria_bot = new Telegram(token, { polling: true });

ksatria_bot.on('message', function(msg) {
    var chatId = msg.chat.id;
    var message = msg.text.toString()

dbot.get_response(message, function(err, result){
     if (!err) {
      ksatria_bot.sendMessage(chatId, result)
     }
  })
})

require('http')
  .createServer((req, res) => {
    res.end('Hello from a vanilla server!')
  })
  .listen()
