/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose-delete/node_modules/mongoose" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
/// <reference types="mongoose-paginate-v2" />
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): Promise<import("./entities/todo.schema").Todo & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    createMany(createTodoDto: CreateTodoDto): Promise<(import("./entities/todo.schema").Todo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findAlls(): Promise<any>;
    findRaw(page?: number, limit?: number): import("mongoose").Query<(import("./entities/todo.schema").Todo & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], import("./entities/todo.schema").Todo & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/todo.schema").TodoDocument>;
    findAll(page?: number, limit?: number): Promise<any[]>;
    findOne(id: string): string;
    update(id: string, updateTodoDto: UpdateTodoDto): string;
    remove(id: string): string;
}
