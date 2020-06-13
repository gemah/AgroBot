import {Telegraf, Stage, Markup} from 'telegraf'

import {MyContext}from '../extensions'
import { TelegrafContext } from 'telegraf/typings/context';




export function timeCommand(ctx: any)
{
  
    console.log(`${ctx.from.first_name}(${ctx.from.username}) used /time`);
    ctx.chat.id = ctx.from.id;
    try{
        ctx.scene.enter('get_time');
    
    }
    catch{
        console.log("eeerre");
    }
}

export function addTimeCallbackButtons(bot: Telegraf<TelegrafContext>)
{
    bot.action("TIME", Stage.enter('TEMP'));

}
