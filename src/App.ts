
require('log-timestamp')(function(){ return TimeStamp()+"%s"});
import  { Telegraf, Context, Stage } from 'telegraf'
import {MyContext} from './extensions'
import {session} from 'telegraf'

import * as Scenes from './Scenes'
import * as Game  from './Game'
import * as commands  from './commands'
import * as Wizards from './Scenes'
import {registerCommands} from './commands'
import { SceneStage } from './Scenes';

const dotenv = require('dotenv');
const sceneStage = SceneStage();

dotenv.config();
const bot = new Telegraf(process.env.TOKEN);

console.log("Starting Bot");

//const stage = Scenes.stage;
bot.use(session({ getSessionKey: ctx => String(ctx.chat.id) }));
bot.use(sceneStage.middleware());

registerCommands(bot);
bot.on("message",Game.onMessage);


Game.addGameButons(bot);





bot.launch();
//bot.telegram.getMyCommands().then((result) => console.log(JSON.stringify(result)));
function TimeStamp() : string{
    

 
    var date = new Date();
    var day = String(date.getDay());
    var month =  String(date.getMonth());
    var year = String(date.getFullYear());
    var hours = String(date.getHours());
    var minutes = String(date.getMinutes());
    var second = String(date.getSeconds());


    return `[${day.padStart(2,'0')}.${month.padStart(2,'0')}.${year}-${hours.padStart(2,'0')}:${minutes.padStart(2,'0')}:${second.padStart(2,'0')}]`;

}