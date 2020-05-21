
require('log-timestamp')(function(){ return TimeStamp()+"%s"});
import  { Telegraf, Context } from 'telegraf'
import {MyContext} from './extensions'
import {session} from 'telegraf'

import * as Scenes from './Scenes'
import * as Game  from './Game'
import * as commands  from './commands'
import {registerCommands} from './commands'

const dotenv = require('dotenv');
dotenv.config();

const stage = Scenes.stage;

const bot = new Telegraf(process.env.TOKEN);
console.log("Starting Bot");
bot.use(session({ getSessionKey: ctx => String(ctx.chat.id) }));
bot.use(stage.middleware());
registerCommands(bot);

bot.on("message",Game.onMessage);
//U+1D43  U+1D47
/*
meme - sends a random meme
convertunits - converts various units
cancel - cancels wizards
agro - Ice derg things
start_game - starts a new Dice Game
joing_game - lets users join a Started DiceGame
list_players - lists all players in a DiceGame
launch_game - launches a new game
cancel_game - cancels a running Dice Game

*/




var test="s";



commands.addConvertButtons(bot);
Game.addGameButons(bot);

bot.launch();

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