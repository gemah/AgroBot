import {Telegraf} from 'telegraf'

import {MyContext}from '../extensions'




export function tinyCommand(ctx: MyContext)
{
    var chars = {
        'a':'ᵃ',
        'b':'ᵇ',
        'c':'ᶜ',
        'd':'ᵈ',
        'e':'ᵉ',
        'f':'ᶠ',
        'g':'ᵍ',
        'h':'ʰ',
        'i':'ᶦ',
        'j':'ʲ',
        'k':'ᵏ',
        'l':'ˡ',
        'm':'ᵐ',
        'n':'ⁿ',
        'o':'ᵒ',
        'p':'ᵖ',
        'q':'ᵠ',
        'r':'ʳ',
        's':'ˢ',
        't':'ᵗ',
        'u':'ᵘ',
        'v':'ᵛ',
        'w':'ʷ',
        'x':'ˣ',
        'y':'ʸ',
        'z':'ᶻ',
    };
    console.log(`${ctx.from.first_name}(${ctx.from.username}) used /tiny`);   
    var text = ctx.message.text.toLowerCase().match(/\/tiny ([\s\S]+)/);
    if(! (text))
        ctx.reply("Please include the sting you want to convert into tiny text\nFor example /tiny test");
    else
    {
        if(text[1].trimLeft().length < 1)   
            ctx.reply("Please include the sting you want to convert into tiny text\nFor example /tiny test");
        else 
            ctx.reply(text[1].trimLeft().replace(/[abcdefghijklmnopqrstuvwxyz]/gi,m => chars[m]));
    }
   
}

