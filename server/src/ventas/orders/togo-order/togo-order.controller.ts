import {
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { TogoOrderService } from './togo-order.service';
import { createToGoOrderDto } from 'src/dto/ventas/orders/createToGoOrder.dto';

@Controller('togo-order')
export class TogoOrderController {
  constructor(private togoOrderService: TogoOrderService) {}

  @Post()
  async create(@Body() body: createToGoOrderDto) {
    try {
      const newOrder = await this.togoOrderService.create(body);
      return newOrder;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException(`Ya existe esta orden`);
      }
      throw new NotFoundException(
        `Ha ocurrido un error inesperado, mas informacion: ${error}`,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      const orderArray = await this.togoOrderService.findAll();
      if (!orderArray) {
        throw new NotFoundException(`No encontraron ordenes`);
      }
      return orderArray;
    } catch (error) {
      throw new NotFoundException(
        `Ha ocurrido un error inesperado. Mas informacion: ${error}`,
      );
    }
  }
}
