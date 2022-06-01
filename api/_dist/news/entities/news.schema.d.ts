/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose-delete/node_modules/mongoose" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose-paginate-v2" />
import { Document } from 'mongoose';
export declare type NewsDocument = News & Document;
export declare class News {
    name: {
        th: string;
        en: string;
    };
    sort: number;
    description: {
        th: string;
        en: string;
    };
}
export declare const NewsSchema: import("mongoose").Schema<Document<News, any, any>, import("mongoose").Model<Document<News, any, any>, any, any, any>, any, any>;
