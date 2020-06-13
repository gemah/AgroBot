import {Telegraf} from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context';
import {Markup} from 'telegraf'

import {TemperatureWizard}from './ConvertTemperaturesWizard'
import * as getTimeWizard from './GetTimeWizard'
import { GetTimeWizard } from './GetTimeWizard';
const Stage = require('telegraf/stage');

export function SceneStage(){
  var stage = new Stage();
  stage.register(TemperatureWizard);
  stage.register(GetTimeWizard);
  stage.command('cancel', (ctx) => {
  if(ctx.scene.current != null){
    ctx.reply("Operation canceled");
    return ctx.scene.leave();
  }
  });
  return stage;
}

//export const SceneStage = new Stage();
