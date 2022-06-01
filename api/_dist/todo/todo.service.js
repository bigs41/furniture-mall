"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const todo_schema_1 = require("./entities/todo.schema");
const _ = require("lodash");
const collect = require('collect.js');
let TodoService = class TodoService {
    constructor(TodoModel) {
        this.TodoModel = TodoModel;
    }
    async create(createTodoDto) {
        return await this.TodoModel.create(createTodoDto);
    }
    async creates(createTodoDto) {
        let many = [];
        for (let i = 0; i < 10000; i++) {
            let $tmp = JSON.parse(JSON.stringify(createTodoDto));
            _.set($tmp, 'description', `${_.get($tmp, 'name', 'none')}-${new Date().getTime()}-${i}`);
            many.push($tmp);
        }
        return await this.TodoModel.insertMany(many);
    }
    async findAll() {
        let $data = await this.TodoModel.aggregate([{ $match: {} }]).sort({ name: -1 }).skip(0).limit(10);
        return $data;
    }
    raw() {
        return this.TodoModel;
    }
    findOne(id) {
        return `This action returns a #${id} todo`;
    }
    update(id, updateTodoDto) {
        return `This action updates a #${id} todo`;
    }
    remove(id) {
        return `This action removes a #${id} todo`;
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(todo_schema_1.Todo.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map