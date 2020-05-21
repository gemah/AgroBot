import Telegraf from "telegraf";
import { TelegrafContext } from "telegraf/typings/context";
import * as commands from './'

export function registerCommands(bot: Telegraf<TelegrafContext>)
{
    bot.command("convertUnits",commands.convertCommand);
    bot.command("meme", commands.memeCommand);
    bot.command("mani", commands.maniCommand);
    bot.command("agro",commands.agroCommand);
    bot.command("gemah",commands.gemahCommand);
    bot.command("join_game",commands.joinCommand);
    bot.command("list_players",commands.listCommand);
    bot.command("start_game",commands.startCommand);
    bot.command("cancel_game",commands.cancelGameCommand);
    bot.command("launch_game",commands.launchCommand);
    bot.command("tiny",commands.tinyCommand);
}