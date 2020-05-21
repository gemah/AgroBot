import { TelegrafContext } from "telegraf/typings/context";
import { MyContext } from "../extensions";
import Telegraf from "telegraf";
import { startCommand, cancelGameCommand } from "../commands";

export function onMessage(ctx: MyContext){

    if(ctx.session.isInGame) ctx.session.game.update(ctx);

}

export function addGameButons(bot:Telegraf<TelegrafContext>)
{
    
    bot.action("DICE_YES",(ctx: MyContext) => {
            ctx.session.startedGame = false;
            startCommand(ctx);
    });
    bot.action("DICE_NO",cancelGameCommand)
        

}