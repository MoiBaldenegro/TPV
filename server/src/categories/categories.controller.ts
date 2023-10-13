import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from 'src/dto/categories/createCategory.dto';
import { UpdateCategoryDto } from 'src/dto/categories/updateCategory.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get()
  async findAll() {
    try {
      const categoriesArray = await this.categoriesService.findAll();
      if (!categoriesArray || categoriesArray.length === 0)
        throw new NotFoundException('No se encontraron categorías.');
      return categoriesArray;
    } catch (error) {
      throw new ConflictException(
        'Ocurrió un error inesperado al buscar categorías.',
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const category = await this.categoriesService.findOne(id);
      if (!category) throw new NotFoundException('Esta categoria no existe');
      return category;
    } catch (error) {
      throw new ConflictException('Ocurrio algo inesperado');
    }
  }

  @Post()
  async create(@Body() body: CreateCategoryDto) {
    try {
      return await this.categoriesService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('La categoria ya existe');
      }
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    try {
      const categoryDeleted = await this.categoriesService.delete(id);
      if (!categoryDeleted)
        throw new NotFoundException('La categoria no existe');
      return categoryDeleted;
    } catch (error) {
      throw new ConflictException('Ocurrio algo inesperado');
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateCategoryDto) {
    try {
      const categoryUpdated = await this.categoriesService.update(id, body);
      if (!categoryUpdated)
        throw new NotFoundException('No se encontro la categoria');
      return categoryUpdated;
    } catch (error) {
      throw new ConflictException('Ocurrio algo inesperado');
    }
  }
}
