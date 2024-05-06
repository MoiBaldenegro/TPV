import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createCashierSessionDto } from 'src/dto/cashierSession/createCashierSession';
import { updateCashierSessionDto } from 'src/dto/cashierSession/updateCashierSession';
import { CashierSession } from 'src/schemas/cashierSession/cashierSession';

@Injectable()
export class CashierSessionService {
  constructor(
    @InjectModel(CashierSession.name)
    private readonly cashierSessionModel: Model<CashierSession>,
  ) {}

  async findAll() {
    return await this.cashierSessionModel.find();
  }

  async findOne(id: string) {
    return await this.cashierSessionModel.findById(id);
  }

  async delete(id: string) {
    return await this.cashierSessionModel.findByIdAndDelete(id);
  }

  async create(body: createCashierSessionDto) {
    const newSession = new this.cashierSessionModel(body);
    return await newSession.save();
  }

  async update(id: string, body: updateCashierSessionDto) {
    return await this.cashierSessionModel.findByIdAndUpdate(id, body, {
      new: true,
    });
  }
}
