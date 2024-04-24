import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OperatingPeriod } from 'src/schemas/operatingPeriod/operatingPeriod.schema';

@Injectable()
export class OperatingPeriodService {
  constructor(
    @InjectModel(OperatingPeriod.name)
    private operatingPeriodModel: Model<OperatingPeriod>,
  ) {}

  async findAll() {
    return this.operatingPeriodModel.find();
  }
}
