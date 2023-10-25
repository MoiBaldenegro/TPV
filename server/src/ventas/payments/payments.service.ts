import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePaymentDto } from 'src/dto/ventas/payments/createPaymentDto';
import { UpdatePaymentDto } from 'src/dto/ventas/payments/updatePaymentDto';
import { Payment } from 'src/schemas/ventas/payment.schema';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  async findAll() {
    return await this.paymentModel.find();
  }

  async findOne(id: string) {
    return await this.paymentModel.findById(id);
  }

  async create(createdPayment: CreatePaymentDto) {
    const newPayment = new this.paymentModel(createdPayment);
    return await newPayment.save();
  }

  async delete(id: string) {
    return await this.paymentModel.findByIdAndDelete(id);
  }

  async update(id: string, updatePayment: UpdatePaymentDto) {
    return await this.paymentModel.findByIdAndUpdate(id, updatePayment, {
      new: true,
    });
  }
}
