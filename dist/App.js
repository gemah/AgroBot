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
const commands = __importStar(require("./commands"));
const test = __importStar(require("./Scenes/ConvertTemperaturesWizard"));
const stage = new telegraf_1.Stage([test.TemperatureWizard]);
const bot = new telegraf_1.Telegraf("1135406683:AAEweez7_rB2iNuS5zucL_mpwHWnYMOUpVU"); //process.env.TOKEN);
bot.use(telegraf_2.session());
bot.use(stage.middleware());
bot.command("convertunits", commands.convertCommand);
bot.command("meme", commands.memeCommand);
commands.addConvertButtons(bot);
bot.startPolling();
//# sourceMappingURL=App.js.map