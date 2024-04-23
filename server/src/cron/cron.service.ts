import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as cron from 'node-cron';
import { OperatingPeriod } from 'src/schemas/operatingPeriod/operatingPeriod.schema';

@Injectable()
export class CronService {
  constructor(
    @InjectModel(OperatingPeriod.name)
    private operatingPeriodModel: Model<OperatingPeriod>,
  ) {
    this.initializeCronJobs();
  }

  private initializeCronJobs() {
    // Ejecutar una tarea cada minuto

    cron.schedule('* * * * *', async () => {
      const newOperatingPeriod = new this.operatingPeriodModel();
      await newOperatingPeriod.save();
      console.log('Se creo un Item');
      console.log(newOperatingPeriod);
      return newOperatingPeriod;
    });
  }
}
