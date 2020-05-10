require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const request = require('request');
// Created instance of TelegramBot
const bot = new TelegramBot(token, {

   polling: true
});

bot.onText(/\/meme/, (msg,match) => 
{
   const chatID = msg.chat.id;

   request('https://meme-api.herokuapp.com/gimme', { json: true }, (err, res, body) => 
   {
      if (err) { return console.log(err); }
      bot.sendMessage(chatID,body.url);

   });

   bot.onText(/\/convertunits/, (msg) => {
      const chatID = msg.from.id;
      const number = match.input.split(' ')[1];

      if(isNaN(num))
      {
         bot.sendMessage(chatID,"The entered number is not a valid Number!");
         return;
      }

      bot.sendMessage(chatID, 'In what unit is this Number?', {
         'reply_markup': {
            'keyboard': [['Metric', 'Imperial'], ['Celsius', 'Fahrenheit']],
            resize_keyboard: true,
            one_time_keyboard: true,
            force_reply: true,
         }
      });
   });

});