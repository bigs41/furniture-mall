import { Controller, Get, Post, Body, Patch, Param, Delete,Request,Query,UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateCartDto } from './dto/create-cart.dto';
import { JwtAuthGuard, Public } from 'src/auth/jwt-auth.guard';
import  * as help from '../helper/utils'
import * as _ from 'lodash';
const collect = require('collect.js')
import { QueryDto } from 'src/helper/DTO/query.dto';
import e from 'express';
@Controller('cart')
export class CartController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req: any, @Body() createOrderDto: CreateCartDto) {
      const user = _.get(req, 'user', null);
    const cart = await this.orderService.$model('Cart').findOne({ _id: user._id });
    createOrderDto['user'] = user._id;
    if (cart) {
        return this.orderService.$model('Cart').updateOne({ _id: user._id }, createOrderDto);
    } else {
        return this.orderService.$model('Cart').create(createOrderDto);
    }
  }

  @Get()
  findAll(@Request() req: any, @Query() query: QueryDto) {
    return help.queryPagination(this.orderService.$model('Cart'), {
      params: req.query
    });
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.$model('Cart').findOne({ _id: id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: any) {
    return this.orderService.$model('Cart').updateOne({ _id: id }, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.$model('Cart').deleteOne({ _id: id });
  }
}
