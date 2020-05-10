"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const WizardScene = require("telegraf/scenes/wizard");
exports.TemperatureWizard = new WizardScene("temperature_converter", ctx => {
    ctx.reply("Please, select the Base temperature", telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.callbackButton("Celsius", "C"), telegraf_1.Markup.callbackButton("Fahrenheit", "F")]).extra());
    return ctx.wizard.next();
}, ctx => {
    if (ctx.wizard.state.unit == undefined) {
        if (ctx.callbackQuery != undefined)
            ctx.wizard.state.unit = ctx.callbackQuery.data;
        else {
            ctx.reply("Wrong Input! Please try Again");
            ctx.wizard.back(); // Set the listener to the previous function
            return ctx.wizard.steps[ctx.wizard.cursor](ctx);
        }
    }
    ctx.reply(`You selected the Base Temperature: ${ctx.wizard.state.unit == 'C' ? 'Celsius' : 'Fahrenheit'}\nWhich means it will be converted into:${ctx.wizard.state.unit == 'C' ? ' Fahrenheit' : ' Celsius'}\nPlease Enter the Temperature you want to convert `);
    return ctx.wizard.next();
}, ctx => {
    ctx.wizard.state.TempValue = ctx.message.text;
    if (isNaN(ctx.wizard.state.TempValue)) {
        ctx.reply("Wrong Input! You need to enter a Number\nPlease try Again");
        ctx.wizard.back(); // Set the listener to the previous function
        return ctx.wizard.steps[ctx.wizard.cursor](ctx);
    }
    const baseTemp = parseFloat(ctx.wizard.state.TempValue);
    const unit = ctx.wizard.state.unit;
    const newTemP = (unit == "C" ? baseTemp * 1.8 + 32 : (baseTemp - 32) / 1.8);
    ctx.reply(`Done! ${baseTemp}°${unit} is ${newTemP}°${(unit == 'C' ? 'F' : 'C')}\nDo you want to do it again?`, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.callbackButton("Yes", "temp_yes"), telegraf_1.Markup.callbackButton("No", "temp_no")]).extra());
    return ctx.scene.leave();
});
//# sourceMappingURL=ConvertTemperaturesWizard.js.map