
require('log-timestamp')(function(){ return TimeStamp()+"%s"});
import {Telegraf, Stage} from 'telegraf'
import {session} from 'telegraf'
import * as commands from './commands'
import * as Scenes from './Scenes'
const dotenv = require('dotenv');
dotenv.config();
const stage = Scenes.stage;

const bot = new Telegraf(process.env.TOKEN);
console.log("Starting Bot");
bot.use(session());
bot.use(stage.middleware());

bot.command("convertunits",commands.convertCommand);
bot.command("meme", commands.memeCommand);
bot.command("mani", commands.maniCommand);
bot.command("agro",commands.agroCommand);
bot.command("gemah",commands.gemahCommand);

commands.addConvertButtons(bot);


bot.startPolling();

function TimeStamp() : string{
    
    var date = new Date(Date.now());
    var day = String(date.getDay());
    var month =  String(date.getMonth());
    var year = String(date.getFullYear());
    var hours = String(date.getHours());
    var minutes = String(date.getMinutes());
    var second = String(date.getSeconds());


    return `[${day.padStart(2,'0')}.${month.padStart(2,'0')}.${year}-${hours.padStart(2,'0')}:${minutes.padStart(2,'0')}:${second.padStart(2,'0')}]`;

}