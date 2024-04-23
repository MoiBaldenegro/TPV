import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDailyRegisterDto } from 'src/dto/dailyRegister/createDailyregister.dto';
import { DailyRegister } from 'src/schemas/dailyRegister/createDailyRegister';

@Injectable()
export class DailyRegisterService {
  constructor(
    @InjectModel(DailyRegister.name)
    private dailyRegisterModel: Model<DailyRegister>,
  ) {}

  async create(body: CreateDailyRegisterDto) {
    // aca verificamos si hay un inicio de dia
    const newRegister = new this.dailyRegisterModel(body);
    return await newRegister.save();
  }
}
