import {Telegraf} from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import request from 'request';
const URL:string = 'https://meme-api.herokuapp.com/gimme';

export function memeCommand(ctx: TelegrafContext) : void
{
    console.log(`${ctx.from.first_name}(${ctx.from.username}) used /meme`); 
    request('https://meme-api.herokuapp.com/gimme', { json: true }, (err, res, body) => 
    {
       if (err) ctx.reply("There was an error while Loading a meme uwu");
       else if(body.url != undefined)  ctx.reply(body.url);
       else ctx.reply("uwu error uwu");
    });
 
}