import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class CategoryController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): string;
    count(): any;
    syncZortout(): Promise<string>;
    findAll(query: QueryDto): any;
    findOne(id: string): any;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
