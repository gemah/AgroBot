import {Telegraf} from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context';
import path from 'path'
import fs from 'fs'

const folderPath:string = "./sticker/agro";
let fileNames: Array<string> = new Array();
let index: number;

export function agroCommand(ctx: TelegrafContext)
{
  

    fs.readdirSync(folderPath).forEach(file => fileNames.push(file));
    
    index = getRandomInt(fileNames.length);

    ctx.replyWithSticker(`https://raw.githubusercontent.com/Agronaut022/AgroBot/master/sticker/Agro/${fileNames[index]}`);
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }