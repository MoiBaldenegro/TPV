import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  NotFoundException,
  ConflictException,
  Param,
  Body,
} from '@nestjs/common';
import { DishesService } from './dishes.service';
import { createDishesDto } from 'src/dto/dishes/createdDishes.dto';
import { HttpCode } from '@nestjs/common';
import { updateDishesDto } from 'src/dto/dishes/updatedDishes.dto';

@Controller('dishes')
export class DishesController {
  constructor(private dishesService: DishesService) {}

  @Get()
  async findAll() {
    try {
      const dishesArray = await this.dishesService.findAll();
      if (!dishesArray || dishesArray.length === 0)
        throw new NotFoundException('No se han encontrado complementos');
      return dishesArray;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const dishesSelected = await this.dishesService.findOne(id);
      if (!dishesSelected)
        throw new NotFoundException(
          'El complemento que intentas buscar no existe',
        );
      return dishesSelected;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }

  @Post()
  async create(@Body() body: createDishesDto) {
    try {
      return await this.dishesService.create(body);
    } catch (error) {
      if (error.code === 11000)
        throw new ConflictException('El complemento ya existe');
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    try {
      const dishesDeleted = this.dishesService.delete(id);
      if (!dishesDeleted)
        throw new NotFoundException('No existe el complemento');
      return dishesDeleted;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: updateDishesDto) {
    try {
      const updatedDishes = await this.dishesService.update(id, body);
      if (!updatedDishes)
        throw new NotFoundException('No existe el complemento');
      return updatedDishes;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }
}
