import {Telegraf} from 'telegraf'
import {MyContext} from '../../extensions'
import {Player} from  '../../Game/Dice/Player'

export function joinCommand(ctx: MyContext){ 
    console.log(`${ctx.from.first_name}(${ctx.from.username}) used /join`);
    if(ctx.chat.type != "group"){
        ctx.reply("You can only use this command in a group!");
        return;
    }
    if(!ctx.session.startedGame)
    {
        ctx.reply("You can only use this command when you are in a game!");
        return;
    }
    if(!ctx.session.startedGame)
    {
        ctx.reply("You cant join an existing Session!");
        return;
    }
    if(!ctx.session.game.addPlayer(ctx.from)) ctx.reply("The user already exists!");
    else ctx.reply(`${ctx.from.first_name} has joined the Dice game!`)

}


