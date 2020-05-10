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
const temperatureWizard = __importStar(require("./ConvertTemperaturesWizard"));
exports.stage = new telegraf_1.Stage([temperatureWizard.TemperatureWizard]);
//# sourceMappingURL=Stage.js.map