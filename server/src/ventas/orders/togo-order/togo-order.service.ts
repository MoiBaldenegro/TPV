import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createToGoOrderDto } from 'src/dto/ventas/orders/createToGoOrder.dto';
import { ToGoOrder } from 'src/schemas/ventas/orders/toGoOrder.schema';

@Injectable()
export class TogoOrderService {
  constructor(
    @InjectModel(ToGoOrder.name) private toGoOrderModel: Model<ToGoOrder>,
  ) {}

  async create(body: createToGoOrderDto) {
    const newOrder = new this.toGoOrderModel(body);
    return newOrder.save();
  }
}
