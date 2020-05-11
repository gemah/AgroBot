"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const folderPath = "./sticker/agro";
let fileNames = new Array();
let index;
function agroCommand(ctx) {
    fs_1.default.readdirSync(folderPath).forEach(file => fileNames.push(file));
    index = getRandomInt(fileNames.length);
    ctx.replyWithSticker(`https://raw.githubusercontent.com/Agronaut022/AgroBot/master/sticker/Agro/${fileNames[index]}`);
}
exports.agroCommand = agroCommand;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//# sourceMappingURL=agro.js.map