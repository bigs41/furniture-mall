/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose-delete/node_modules/mongoose" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose-paginate-v2" />
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from "./entities/todo.schema";
export declare class TodoService {
    private readonly TodoModel;
    constructor(TodoModel: Model<TodoDocument>);
    create(createTodoDto: CreateTodoDto): Promise<Todo & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    creates(createTodoDto: CreateTodoDto): Promise<(Todo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findAll(): Promise<any[]>;
    raw(): Model<TodoDocument, {}, {}, {}>;
    findOne(id: number): string;
    update(id: number, updateTodoDto: UpdateTodoDto): string;
    remove(id: number): string;
}
