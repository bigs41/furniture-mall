import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { ProductDocument } from "./entities/product.schema";
import { CategoryDocument } from "./entities/category.schema";
import { BundleDocument } from "./entities/bundle.schema";
export declare class ProductsService {
    private readonly $ProductModel;
    private readonly $CategoryModel;
    private readonly $BundleModel;
    constructor($ProductModel: Model<ProductDocument>, $CategoryModel: Model<CategoryDocument>, $BundleModel: Model<BundleDocument>);
    $model(model: any): any;
    syncZortoutBundles(): Promise<string>;
    syncZortoutCategory(): Promise<string>;
    syncZortout(): Promise<string>;
    create(createProductDto: CreateProductDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
