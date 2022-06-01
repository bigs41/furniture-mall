import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CategoryController } from './category.controller';
import { BundleController } from './bundle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product,ProductSchema } from './entities/product.schema';
import { Category,CategorySchema } from './entities/category.schema';
import { Bundle,BundleSchema } from './entities/bundle.schema';
@Module({
  imports: [MongooseModule.forFeature([
    { name: Product.name, schema: ProductSchema },
    { name: Category.name, schema: CategorySchema },
    { name: Bundle.name, schema: BundleSchema },
  ])],
  controllers: [ProductsController,CategoryController,BundleController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
