import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Model } from 'mongoose';
import { OrderDocument } from './entities/order.schema';
import { CartDocument } from './entities/cart.schema';
export declare class OrderService {
    private readonly $OrderModel;
    private readonly $CartModel;
    constructor($OrderModel: Model<OrderDocument>, $CartModel: Model<CartDocument>);
    $model(model: any): any;
    create(createOrderDto: CreateOrderDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): string;
}
