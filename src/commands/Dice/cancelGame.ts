import {Telegraf} from 'telegraf'

import {MyContext}from '../../extensions'




export function cancelGameCommand(ctx: MyContext)
{
  
    console.log(`${ctx.from.first_name}(${ctx.from.username}) used /cancelGame`);
    if(ctx.chat.type != "group"){
        ctx.reply("You can only use this command in a group!");
        return;
    }
    ctx.reply("game has been canceled");
    ctx.session.game = null;
    ctx.session.startedGame = false;
    ctx.session.isInGame = false;

}

