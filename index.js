const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = 'TELEGRAM_TOKEN';
const simsimiKey = 'SIMSIMI_KEY';
const url = `http://sandbox.api.simsimi.com/request.p?key=${simsimiKey}&lc=id&ft=1.0&text=`;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    request(url + msg.text.toString(), (err, response, body) => {
        bot.sendMessage(chatId, JSON.parse(body).response);
    });
});
