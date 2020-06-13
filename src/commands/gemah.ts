import {Telegraf} from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context';
export function gemahCommand(ctx: TelegrafContext)
{
    console.log(`${ctx.from.first_name}(${ctx.from.username}) used /gemah`); 
    ctx.reply(`Is a very awesome bearson`);
    ctx.replyWithSticker('https://raw.githubusercontent.com/Agronaut022/AgroBot/master/sticker/gemah/kira.webp');
  
}
