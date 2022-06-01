require('dotenv').config();
import * as help from 'src/helper/utils';
const Config = process.env
export const config = {
    MINIO_ENDPOINT: Config.MINIO_ENDPOINT || 'localhost',
    MINIO_PORT: help.getNumber(Config.MINIO_PORT) ||9000,
    MINIO_ACCESSKEY: Config.MINIO_ACCESSKEY ||'AKIAIOSFODNN7EXAMPLE',
    MINIO_SECRETKEY: Config.MINIO_SECRETKEY ||'wJalrXUtnFEMIK7MDENGbPxRfiCYEXAMPLEKEY',
    MINIO_BUCKET: Config.MINIO_BUCKET ||'test'
  }