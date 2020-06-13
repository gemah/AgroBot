import Telegraf from "telegraf";
import { TelegrafContext } from "telegraf/typings/context";
import * as commands from './'

export function registerCommands(bot: Telegraf<TelegrafContext>)
{
    bot.command("convertunits",commands.convertCommand);
    bot.command("meme", commands.memeCommand);
    bot.command("mani", commands.maniCommand);
    bot.command("agro",commands.agroCommand);
    bot.command("gemah",commands.gemahCommand);
    /*bot.command("join_game",commands.joinCommand);
    bot.command("list_players",commands.listCommand);
    bot.command("start_game",commands.startCommand);
    bot.command("cancel_game",commands.cancelGameCommand);
    bot.command("launch_game",commands.launchCommand);*/
    bot.command("tiny",commands.tinyCommand);
    bot.command("time",commands.timeCommand);
    commands.addTimeCallbackButtons(bot);
    commands.addConvertCallbackButtons(bot);
    bot.telegram.setMyCommands(([
        {
            command: '/convertunits',
            description: 'converts various units'
        },
        {
            command: '/meme',
            description: 'Generates memes DUH'
        },
        {
            command: '/agro',
            description: 'Find out for yourself'
        },
        {
            command: '/tiny',
            description: 'converts normal text into small text'
        },
        {
            command: '/time',
            description: 'gives you the current time in a specific country'
        }
    ]));
}