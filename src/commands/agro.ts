import {Telegraf} from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context';
export function agroCommand(ctx: TelegrafContext)
{
    ctx.reply(`Is cute ^^`);
    /*const id = ctx.chat.id;
    ctx.telegram.sendSticker(id,'https://raw.githubusercontent.com/Agronaut022/AgroBot/master/sticker/mani/hug.webp');*/
    ctx.replyWithSticker('https://raw.githubusercontent.com/Agronaut022/AgroBot/master/sticker/mani/hug.webp');
    
}