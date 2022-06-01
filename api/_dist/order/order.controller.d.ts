import { OrderService } from './order.service';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: any): any;
    findAll(req: any, query: QueryDto): any;
    report(): Promise<any>;
    findOne(id: string): any;
    update(id: string, updateOrderDto: any): any;
    remove(id: string): any;
}
