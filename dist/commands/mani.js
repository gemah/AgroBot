"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maniCommand(ctx) {
    ctx.reply(`Is cute ^^`);
    /*const id = ctx.chat.id;
    ctx.telegram.sendSticker(id,'https://raw.githubusercontent.com/Agronaut022/AgroBot/master/sticker/mani/hug.webp');*/
    ctx.replyWithSticker('https://raw.githubusercontent.com/Agronaut022/AgroBot/master/sticker/mani/hug.webp');
}
exports.maniCommand = maniCommand;
//# sourceMappingURL=mani.js.map