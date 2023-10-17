import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  ConflictException,
  NotFoundException,
  Body,
  HttpCode,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { createDishesDto } from 'src/dto/catalogo/dishes/createdDishes.dto';
import { createProductDto } from 'src/dto/catalogo/products/createProduct.dto';
import { updateProductDto } from 'src/dto/catalogo/products/updatedProduct.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async findAll() {
    try {
      const productsArray = await this.productService.findAll();
      if (!productsArray || productsArray.length === 0)
        throw new NotFoundException('No se encontraron productos');
      return productsArray;
    } catch (error) {
      throw new NotFoundException('Ocurrio algo inesperado');
    }
  }

  @Get(':id')
  async findOne(@Body() body: string) {
    try {
      const selectedProduct = await this.productService.findOne(body);
      if (!selectedProduct)
        throw new ConflictException(
          'El producto que intentas encontrar no existe',
        );
      return;
    } catch (error) {}
  }

  @Post()
  async create(@Body() body: createProductDto) {
    try {
      return await this.productService.create(body);
    } catch (error) {
      if (error.code === 11000)
        throw new ConflictException('Este producto ya existe');
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    try {
      const deletedProduct = await this.productService.delete(id);
      if (!deletedProduct) throw new NotFoundException('No existe el producto');
      return deletedProduct;
    } catch (error) {
      throw new NotFoundException('Ha ocurrdo algo inesperado');
    }
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: updateProductDto) {
    try {
      const updatedProduct = await this.productService.update(id, body);
      if (!updatedProduct) throw new NotFoundException('No existe el producto');
      return updatedProduct;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }
}
