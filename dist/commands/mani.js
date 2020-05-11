"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maniCommand(ctx) {
    ctx.reply(`Is cute ^^`);
    const id = ctx.chat.id;
    ctx.telegram.sendSticker(id, 'D:\\projekte\\TelegramBot\\sticker\\mani\\hug.webp');
}
exports.maniCommand = maniCommand;
//# sourceMappingURL=mani.js.map