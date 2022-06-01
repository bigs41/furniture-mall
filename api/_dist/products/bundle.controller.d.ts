import { ProductsService } from './products.service';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class BundleController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    syncZortout(): Promise<string>;
    count(): any;
    findAll(query: QueryDto): any;
    findOne(id: string): Promise<unknown>;
    save(id: string, body: any): Promise<any>;
}
