import { Controller, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService:ProductsService){}

    @Get()
    getProduct():string{
        return this.productService.getProduct()
    }
    @Post()
    createProduct():string{
        return this.productService.createProduct()
    }
    @Put()
    updateProduct():string{
        return this.productService.updateProduct()
    }

}
