import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards, Res, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ResponseFormat } from 'src/helper/interceptor/responseFromat.interceptor';
import { JwtAuthGuard, Public } from 'src/auth/jwt-auth.guard';
import { MinioClientService } from 'src/helper/minio-client/minio-client.service';
import * as help from 'src/helper/utils';
import * as _ from 'lodash';
import { QueryDto } from 'src/helper/DTO/query.dto';
@UseInterceptors(ResponseFormat)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  save(@Param('id') id: string, @Body() body: any) {
    if (['create', 'add', '0'].includes(id)) { 
      return this.productsService.$model('Product').create(body);
    } else {
      return this.productsService.$model('Product').findOneAndUpdate({ _id: id }, body, { new: true });
    }
  }

  @Get('count')
  count() {
    return this.productsService.$model('Product').countDocuments();
  }

  @Get('code/:sku')
  async searchCode(@Param('code') code: string) {
    let item = await this.productsService.$model('Product').findOne({ sku:code });
    if (!item) {
      item = await this.productsService.$model('Bundle').findOne({ sku: code });
    }
    return item
  }

  @Get('/syncZortout')
  async syncZortout() {
    return await this.productsService.syncZortout();
  }

  @Get()
  findAll(@Query() query:QueryDto) {

    return help.queryPagination(this.productsService.$model('Product'), {
      params: query
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.$model('Product').findOne({ _id: id });
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
