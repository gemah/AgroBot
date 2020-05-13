import {Telegraf} from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context';
import path from 'path'
import fs from 'fs'

const folderPath:string =path.resolve(__dirname, "../../sticker/agro")
let fileNames: Array<string> = new Array();
let index: number;



export function agroCommand(ctx: TelegrafContext)
{
  
    console.log(`${ctx.from.first_name}(${ctx.from.username}) used /agro`); 

    fs.readdirSync(folderPath).forEach(file => fileNames.push(file));
    
    index = getRandomInt(fileNames.length);

    ctx.replyWithSticker(`https://raw.githubusercontent.com/Agronaut022/AgroBot/master/sticker/agro/${fileNames[index]}`);
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }