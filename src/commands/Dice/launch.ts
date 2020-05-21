import {Telegraf} from 'telegraf'

import {MyContext}from '../../extensions'




export function launchCommand(ctx: MyContext)
{
  
    console.log(`${ctx.from.first_name}(${ctx.from.username}) used /launch`);  
    if(ctx.chat.type != "group"){
        ctx.reply("You can only use this command in a group!");
        return;
    }
    if(!ctx.session.startedGame)
    {
        ctx.reply("You can only use this command when you are in a game!");
        return;
    }
    if(ctx.session.game.players.length < 1)
    {
        ctx.reply("You need atleast 2 people");
        return;
    }

    ctx.reply(`Starting the round with ${ctx.session.game.players.length} players`);
    ctx.session.isInGame = true;
    ctx.session.game.startRound(ctx);
}

