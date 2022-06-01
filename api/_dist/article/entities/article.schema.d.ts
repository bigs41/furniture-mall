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
export declare type ArticleDocument = Article & Document;
export declare class Article {
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
export declare const ArticleSchema: import("mongoose").Schema<Document<Article, any, any>, import("mongoose").Model<Document<Article, any, any>, any, any, any>, any, any>;
