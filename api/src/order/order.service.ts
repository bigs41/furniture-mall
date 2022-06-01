import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderSchema, OrderDocument } from './entities/order.schema';
import { Cart, CartSchema, CartDocument } from './entities/cart.schema';
import * as _ from 'lodash';

import * as mongoosePaginate from 'mongoose-paginate-v2';
OrderSchema.plugin(mongoosePaginate)
CartSchema.plugin(mongoosePaginate)
@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private readonly $OrderModel: Model<OrderDocument>,
    @InjectModel(Cart.name) private readonly $CartModel: Model<CartDocument>,
  ) {}
  $model(model:any) {
    const modelName = `$${_.upperFirst(model)}Model`
    return this[modelName]
  }
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
