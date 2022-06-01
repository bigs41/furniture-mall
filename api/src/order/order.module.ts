import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { CartController } from './cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './entities/order.schema';
import { Cart, CartSchema } from './entities/cart.schema';
@Module({
  imports: [MongooseModule.forFeature([
    { name: Order.name, schema: OrderSchema },
    { name: Cart.name, schema: CartSchema },
  ])],
  controllers: [OrderController, CartController],
  providers: [OrderService]
})
export class OrderModule {}
