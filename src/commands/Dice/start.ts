import {Telegraf} from 'telegraf'

import {MyContext}from '../../extensions'
import { TelegrafContext } from 'telegraf/typings/context';
import { StartGame, DiceGame } from '../../Game/Dice/DiceGame';




export function startCommand(ctx: MyContext)
{
  
    console.log(`${ctx.from.first_name}(${ctx.from.username}) used /start`);
    if(ctx.chat.type != "group"){
        ctx.reply("You can only use this command in a group!");
        return;
    }
    if(ctx.session.startedGame) {
        ctx.reply("There already is a Game in Progress!");
        return;
    };

    ctx.reply("A new Dice Game has Started!\nuse /launch_game to launch the game!\nuse /join_game to join the game\nuse /list_players to see the current players\nand /cancel_game to cancel the game");
    ctx.session.startedGame = true;
    ctx.session.game = new DiceGame();
}

