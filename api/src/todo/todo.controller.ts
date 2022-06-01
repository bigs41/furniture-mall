import { Controller, Get, Post, Body, Patch, Param, Delete,Query, UseInterceptors } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ResponseFormat } from 'src/helper/interceptor/responseFromat.interceptor';
import * as $mongoose from '@nestjs/mongoose';
import {getModelToken} from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
const mongoose = require('mongoose')
const schema = require('./todo.schema')
@UseInterceptors(ResponseFormat)
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }
  @Post('many')
  createMany(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.creates(createTodoDto);
  }
  @Get('test')
  async findAlls() {
    mongoose.connect('mongodb://root:123456@localhost:27017/deals?authSource=admin')
    const {TodoDocument,TodoSchema} = require('./entities/todo.schema')
    const Todo = mongoose.model('Todo', TodoSchema);
    // const schema = new mongoose.Schema({ name: 'string', size: 'string' });
    // const Tank = mongoose.model('Tank', schema);
    // const small = new Tank({ size: 'small' });
    // await small.save();
    const data = await Todo.find({});
    return data
  }
  @Get('raw')
  findRaw(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {

    return this.todoService.raw().find({}).skip((page - 1) * limit).limit(limit);
  }
  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.todoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
