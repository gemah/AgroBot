import {Telegraf} from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context';
export function gemahCommand(ctx: TelegrafContext)
{
    ctx.reply(`Is a very awesome bearson`);
    ctx.replyWithSticker('https://raw.githubusercontent.com/Agronaut022/AgroBot/master/sticker/gemah/kira.webp');
    
}
