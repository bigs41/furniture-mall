import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    save(id: string, body: any): any;
    count(): any;
    searchCode(code: string): Promise<any>;
    syncZortout(): Promise<string>;
    findAll(query: QueryDto): any;
    findOne(id: string): any;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
