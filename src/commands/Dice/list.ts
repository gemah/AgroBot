import {Telegraf} from 'telegraf'

import {MyContext}from '../../extensions'
import { Player } from '../../Game/Dice/Player';
import { DiceGame } from '../../Game/Dice/DiceGame';




export function listCommand(ctx: MyContext)
{
    
    console.log(`${ctx.from.first_name}(${ctx.from.username}) used /list`);   
    if(ctx.chat.type != "group"){
        ctx.reply("You can only use this command in a group!");
        return;
    }
    if(!ctx.session.startedGame)
    {
        ctx.reply("You can only use this command when you are in a game!");
        return;
    }
    ctx.reply("Players in the Game\n" + ctx.session.game.listPlayers());

}

