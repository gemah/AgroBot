import {Telegraf} from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context';
import {Markup} from 'telegraf'
import {Stage} from 'telegraf'
import * as wizard from '../Scenes/ConvertTemperaturesWizard'

const stage = new Stage([wizard.TemperatureWizard]);

export function convertCommand(ctx: TelegrafContext)
{
    console.log(`${ctx.from.first_name}(${ctx.from.username} used) /convertunits`);
    ctx.chat.id = ctx.from.id;
    ctx.reply(
        `What do you wish to convert?`,
        Markup.inlineKeyboard([Markup.callbackButton("Temperatures","TEMP"), Markup.callbackButton("Money","MONEY")]).extra()
    )
}

export function addConvertButtons(bot: Telegraf<TelegrafContext>)
{
    bot.action("TEMP", Stage.enter('temperature_converter'));
    bot.action("temp_yes", Stage.enter('temperature_converter'));
    bot.action("temp_no",(ctx) => ctx.reply("Done!"));
}