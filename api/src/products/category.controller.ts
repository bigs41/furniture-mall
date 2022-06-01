import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards, Res, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ResponseFormat } from 'src/helper/interceptor/responseFromat.interceptor';
import { JwtAuthGuard, Public } from 'src/auth/jwt-auth.guard';
import * as help from 'src/helper/utils';
import * as _ from 'lodash';
import { QueryDto } from 'src/helper/DTO/query.dto';
@UseInterceptors(ResponseFormat)
@Controller('category')
export class CategoryController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('count')
  count() {
    return this.productsService.$model('category').countDocuments();
  }

  @Get('/syncZortout')
  async syncZortout() {
    return await this.productsService.syncZortoutCategory();
  }

  @Get()
  findAll(@Query() query:QueryDto) {

    return help.queryPagination(this.productsService.$model('category'), {
      params: query
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.$model('category').findOne({ _id: id });
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
