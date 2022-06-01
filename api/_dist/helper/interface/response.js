"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStd = void 0;
class ResponseStd {
    constructor(data, message, result, statusCode) {
        this.result = result;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data ? data : {};
    }
}
exports.ResponseStd = ResponseStd;
//# sourceMappingURL=response.js.map