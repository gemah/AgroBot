
import {Telegraf, Stage} from 'telegraf'
import {session} from 'telegraf'
import * as commands from './commands'
import * as test from './Scenes/ConvertTemperaturesWizard'
const stage = new Stage([test.TemperatureWizard]);

const bot = new Telegraf(process.env.TOKEN);
console.log("Starting Bot");
bot.use(session());
bot.use(stage.middleware());

bot.command("convertunits",commands.convertCommand);

bot.command("meme", commands.memeCommand);

commands.addConvertButtons(bot);


bot.startPolling();
