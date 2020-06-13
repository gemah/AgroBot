
import {Telegraf,Markup,Stage,session, Context,} from 'telegraf'
import mysql from 'mysql'
import { TelegrafContext } from 'telegraf/typings/context'
import * as time from 'countries-and-timezones'
import { Button, CallbackButton } from 'telegraf/typings/markup';
const WizardScene = require("telegraf/scenes/wizard");
export const GetTimeWizard = new WizardScene(
    "get_time",
    ctx => {
      ctx.reply("Please Input the country you would like to have the current time from");
      return ctx.wizard.next();
    },
    ctx => {
        if(!ctx.message)
        {
         
            ctx.reply("There was an error pleas try again");
            ctx.wizard.back();  // Set the listener to the previous function
            return ctx.wizard.steps[ctx.wizard.cursor](ctx);
        }
        const countries = time.getAllCountries();
        var found = false;
        var id;
        console.log(time.getCountry("US").name);
        for(var country in countries){
           if(countries[country].name.toLowerCase() == ctx.message.text.toLowerCase()){
               id = country;
               found = true;
               break;
           }
        }
        if(!found){
           
            ctx.reply(`The country ${ctx.message.text} could not be found\n Please try again or cancel with /\\cancel`);
            ctx.wizard.back();  // Set the listener to the previous function
            return ctx.wizard.steps[ctx.wizard.cursor](ctx);
        }
        ctx.wizard.state.id = id;
       
        var timezones = time.getTimezonesForCountry(id);
        var buttons: Array<Array<CallbackButton>> = new Array();
        var timezoneNames = Array<string>();

        for(var i = 0; i < timezones.length; i++){
            if(timezones[i].aliasOf == null) timezoneNames.push(timezones[i].name);
       
        }
        ctx.wizard.state.timezoneNames = timezoneNames;

        for(var i = 0; i < timezoneNames.length; i++){
            var row = new Array<CallbackButton>();
            row.push(Markup.callbackButton(timezoneNames[i],"tz:"+i));
            i++;
            if(i < timezoneNames.length)row.push(Markup.callbackButton(timezoneNames[i],"tz:"+i))

           
            buttons.push(row);

        }
      
        ctx.reply(`The country ${ctx.message.text} has ${timezoneNames.length} tim6ezones\nPlease select the one you wish to use or just pick the Default one:`,
        Markup.inlineKeyboard(buttons/*buttons*/).extra());
        
        return ctx.wizard.next();
    },
    ctx => {
        
        const timeOffset = new Date().getTimezoneOffset() * 60000;
        const index=Number(ctx.callbackQuery.data.replace("tz:",""));
        const timeData = time.getTimezone(ctx.wizard.state.timezoneNames[index]);
        const offsetUTC:number = timeData["utcOffset"];
        const offsetDST:number = timeData["dstOffset"];
        const UTCTime = new Date(Date.now() + timeOffset + (offsetUTC)*60000);
        const UTCTimeString =  `${String(UTCTime.getHours()).padStart(2,"0")}:${String(UTCTime.getMinutes()).padStart(2,"0")}:${String(UTCTime.getSeconds()).padStart(2,"0")}`;
        if(offsetUTC == offsetDST){
            
            ctx.reply(`The current time in ${ctx.wizard.state.timezoneNames[index]} is:\n${UTCTimeString}`);
           
        }
        else{
            const DSTTime = new Date(Date.now() + timeOffset + (offsetDST * 60000));
           
            const DSTTimeString =  `${String(DSTTime.getHours()).padStart(2,"0")}:${String(DSTTime.getMinutes()).padStart(2,"0")}:${String(DSTTime.getSeconds()).padStart(2,"0")}`;
            
            ctx.reply(`The current time in ${ctx.wizard.state.timezoneNames[index].replace("_","\\_")} is:\n*${UTCTimeString}* if it isnt Daylight savings time\\.\n*${DSTTimeString}* if it is Daylight savings Time`,{parse_mode: 'markdownv2'});
        }

        console.log(timeData);
        return ctx.scene.leave();
    }
  );