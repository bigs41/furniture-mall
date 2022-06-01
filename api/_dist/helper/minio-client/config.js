"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
const help = require("../utils");
const Config = process.env;
exports.config = {
    MINIO_ENDPOINT: Config.MINIO_ENDPOINT || 'localhost',
    MINIO_PORT: help.getNumber(Config.MINIO_PORT) || 9000,
    MINIO_ACCESSKEY: Config.MINIO_ACCESSKEY || 'AKIAIOSFODNN7EXAMPLE',
    MINIO_SECRETKEY: Config.MINIO_SECRETKEY || 'wJalrXUtnFEMIK7MDENGbPxRfiCYEXAMPLEKEY',
    MINIO_BUCKET: Config.MINIO_BUCKET || 'test'
};
//# sourceMappingURL=config.js.map