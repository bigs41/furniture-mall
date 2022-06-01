"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeGenerate = void 0;
const moment = require("moment-timezone");
class TimeGenerate {
    getTime() {
        return moment().tz('Asia/Bangkok').format("YYYY-MM-DDTHH:mm:ss.SSSSZ");
    }
}
exports.TimeGenerate = TimeGenerate;
//# sourceMappingURL=timeFormat.js.map