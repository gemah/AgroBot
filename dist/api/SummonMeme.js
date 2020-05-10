"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const url = "https://meme-api.herokuapp.com/gimme";
var link = "";
function getMeme() {
    request_1.default(url, { json: true }, (err, res, body) => {
        if (err)
            link = "An error occured while trying to get the meme";
        else if (body.url != undefined)
            link = "saddas"; //body.url;
        else
            link = "No link could be generated";
        link = "s";
    });
    return link;
}
exports.getMeme = getMeme;
//# sourceMappingURL=SummonMeme.js.map