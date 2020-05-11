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
const Scenes = __importStar(require("./Scenes"));
const dotenv = require('dotenv');
dotenv.config();
const stage = Scenes.stage;
const bot = new telegraf_1.Telegraf(process.env.TOKEN);
console.log("Starting Bot");
bot.use(telegraf_2.session());
bot.use(stage.middleware());
bot.command("convertunits", commands.convertCommand);
bot.command("meme", commands.memeCommand);
bot.command("mani", commands.maniCommand);
bot.command("agro", commands.agroCommand);
commands.addConvertButtons(bot);
bot.startPolling();
//# sourceMappingURL=App.js.map