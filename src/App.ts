
import {Telegraf, Stage} from 'telegraf'
import {session} from 'telegraf'
import * as commands from './commands'
import * as test from './Scenes/ConvertTemperaturesWizard'
const stage = new Stage([test.TemperatureWizard]);

const bot = new Telegraf("1135406683:AAEweez7_rB2iNuS5zucL_mpwHWnYMOUpVU");//process.env.TOKEN);
bot.use(session());
bot.use(stage.middleware());

bot.command("convertunits",commands.convertCommand);

bot.command("meme", commands.memeCommand);

commands.addConvertButtons(bot);


bot.startPolling();
