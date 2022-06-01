import { Controller, Get, Post, Body, Patch, Param, Delete,Request,Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import  * as help from '../helper/utils'
import * as _ from 'lodash';
const collect = require('collect.js')
import { QueryDto } from 'src/helper/DTO/query.dto';
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: any) {
    return this.orderService.$model('Order').create(createOrderDto);
  }

  @Get()
  findAll(@Request() req: any, @Query() query: QueryDto) {
    return help.queryPagination(this.orderService.$model('Order'), {
      params: req.query
    });
  }

  @Get('/report')
  async report() {
    let orders = await this.orderService.$model('Order').aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'products',
          foreignField: '_id',
          as: 'products'
        },
      },
      {
          $project: {
            products: {
              $map: {
                input: '$products',
                as: 'product',
                in: {
                  _id: '$$product._id',
                  name: '$$product.name',
                }
              }
          }
        }
      }
    ])
    orders = JSON.parse(JSON.stringify(orders))
    let products = collect(orders)
    .pluck('products')
    .flatten(true)
    .groupBy('_id')
    .map(function(value, key) {
      return {
        _id: key,
        name: value.first().name,
        quantity: value.count()
      }
    })
    .values()
    .sort(function(a, b) {
      return b.quantity - a.quantity
    })
    .forPage(1, 10)
    .all()
    return products
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.$model('Order').findOne({ _id: id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: any) {
    return this.orderService.$model('Order').updateOne({ _id: id }, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.$model('Order').deleteOne({ _id: id });
  }
}
