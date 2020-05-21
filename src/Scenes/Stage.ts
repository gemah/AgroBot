import {Telegraf} from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context';
import {Markup} from 'telegraf'
import {Stage} from 'telegraf'
import * as temperatureWizard from './ConvertTemperaturesWizard'
export const stage = new Stage([temperatureWizard.TemperatureWizard]);
stage.command('cancel', (ctx) => {
  if(ctx.scene.current != null){
    ctx.reply("Operation canceled");
    return ctx.scene.leave();
  }
});