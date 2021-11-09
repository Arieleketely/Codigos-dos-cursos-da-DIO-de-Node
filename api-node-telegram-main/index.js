const TelegramBot = require('node-telegram-bot-api');
 const dialogflow=require('/dialogflow');

const token = '';

const bot = new TelegramBot(token, {polling: true});
 
bot.onText(/\/echo (.+)/, (msg, match) => {

 
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
 const response= dialogflow.sendMassage(chatId.toString(),msg.text)

  bot.sendMessage(chatId, 'Deus te ilumine,obrigado pelo contato');
});
