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
export declare type TodoDocument = Todo & Document;
export declare class Todo {
    name: string;
    description: string;
}
export declare const TodoSchema: import("mongoose").Schema<Document<Todo, any, any>, import("mongoose").Model<Document<Todo, any, any>, any, any, any>, any, any>;
