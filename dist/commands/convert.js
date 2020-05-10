"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const telegraf_2 = require("telegraf");
const wizard = __importStar(require("../Scenes/ConvertTemperaturesWizard"));
const stage = new telegraf_2.Stage([wizard.TemperatureWizard]);
function convertCommand(ctx) {
    ctx.reply(`What do you wish to convert?`, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.callbackButton("Temperatures", "TEMP"), telegraf_1.Markup.callbackButton("Money", "MONEY")]).extra());
}
exports.convertCommand = convertCommand;
function addConvertButtons(bot) {
    bot.action("TEMP", telegraf_2.Stage.enter('temperature_converter'));
    bot.action("temp_yes", telegraf_2.Stage.enter('temperature_converter'));
    bot.action("temp_no", (ctx) => ctx.reply("Done!"));
}
exports.addConvertButtons = addConvertButtons;
//# sourceMappingURL=convert.js.map