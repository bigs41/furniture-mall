import { OrderService } from './order.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class CartController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(req: any, createOrderDto: CreateCartDto): Promise<any>;
    findAll(req: any, query: QueryDto): any;
    findOne(id: string): any;
    update(id: string, updateOrderDto: any): any;
    remove(id: string): any;
}
