import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from 'src/dto/ventas/payments/createPaymentDto';
import { UpdatePaymentDto } from 'src/dto/ventas/payments/updatePaymentDto';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentService: PaymentsService) {}

  @Get()
  async findAll() {
    try {
      const paymentsArray = await this.paymentService.findAll();
      if (!paymentsArray) {
        throw new NotFoundException('No se encuentran registros de pagos');
      }
      return paymentsArray;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const selectedPayment = await this.paymentService.findOne(id);
      if (!selectedPayment) {
        throw new NotFoundException('El pago que intentas encontrar no existe');
      }
      return selectedPayment;
    } catch (error) {}
  }

  @Post()
  async create(@Body() body: CreatePaymentDto) {
    console.log('entre aca al controller');
    try {
      const newPayment = await this.paymentService.create(body);
      return newPayment;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Esta nota ya fue pagada');
      }
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    try {
      const deletedPayment = await this.paymentService.delete(id);
      if (!deletedPayment) {
        throw new NotFoundException('No existe el pago');
      }
      return deletedPayment;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdatePaymentDto) {
    try {
      const updatedPayment = await this.paymentService.update(id, body);
      if (!updatedPayment) {
        throw new NotFoundException('No existe el pago');
      }
      return updatedPayment;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }
}
