import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from "./entities/todo.schema";
import { Query } from "src/helper/utils/query";
import * as _ from 'lodash';
const collect = require('collect.js');
@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly TodoModel: Model<TodoDocument>,
  ) {}
  async create(createTodoDto: CreateTodoDto) {
    return await this.TodoModel.create(createTodoDto);
  }
  async creates(createTodoDto: CreateTodoDto) {
    let many = [];
    for (let i = 0; i < 10000; i++) {
      let $tmp = JSON.parse(JSON.stringify(createTodoDto));
      _.set($tmp, 'description', `${_.get($tmp,'name','none')}-${new Date().getTime()}-${i}`);
      many.push($tmp);
    }
    return await this.TodoModel.insertMany(many);
  }
  async findAll() {
    // let $query:any = this.TodoModel
    // $query = $query.aggregate([{$match: {}}])
    // async function count($data:any,$page=1,$limit=10) {
    //   $data.count('total').then(res=>{
    //     console.log('====================================');
    //     console.log(res);
    //     console.log('====================================');
    //   })
    // }
    // const $count = await count($query,1,2);

    // let $data = await new Query(this.TodoModel).aggregate([{$match: {}}]).pagination(1,20);
    let $data = await this.TodoModel.aggregate([{$match: {}}]).sort({name: -1}).skip(0).limit(10);
    return $data;
    //return await this.TodoModel.aggregate([{$match: {}}]).count("userCount");
  }
  raw() {
    return this.TodoModel;
  }
  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
