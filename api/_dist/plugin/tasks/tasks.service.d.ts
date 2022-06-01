import { ProductsService } from 'src/products/products.service';
export declare class TasksService {
    private productsService;
    constructor(productsService: ProductsService);
    syncZortout(): Promise<void>;
}
