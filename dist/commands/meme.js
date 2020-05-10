"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const URL = 'https://meme-api.herokuapp.com/gimme';
function memeCommand(ctx) {
    request_1.default('https://meme-api.herokuapp.com/gimme', { json: true }, (err, res, body) => {
        if (err)
            ctx.reply("There was an error while Loading a meme uwu");
        else if (body.url != undefined)
            ctx.reply(body.url);
        else
            ctx.reply("uwu error uwu");
    });
}
exports.memeCommand = memeCommand;
//# sourceMappingURL=meme.js.map