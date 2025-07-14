import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductRequest } from '@repo/types';
import type { Product } from '@repo/types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() createProductRequest: CreateProductRequest): Product[] {
    return this.productsService.createProduct(createProductRequest);
  }

  @Get()
  getProducts(): Product[] {
    return this.productsService.getProducts();
  }
}
