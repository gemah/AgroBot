import {Telegraf} from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context';
export function maniCommand(ctx: TelegrafContext)
{
    ctx.reply(`Is cute ^^`);
    const id = ctx.chat.id;
    ctx.telegram.sendSticker(id,'D:\\projekte\\TelegramBot\\sticker\\mani\\hug.webp');
}
