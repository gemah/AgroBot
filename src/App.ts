
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

commands.addConvertButtons(bot);


bot.startPolling();
