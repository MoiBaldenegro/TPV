import { Module } from '@nestjs/common';
import { DailyRegisterService } from './daily-register.service';
import { DailyRegisterController } from './daily-register.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DailyRegister,
  DailyRegisterSchema,
} from 'src/schemas/dailyRegister/createDailyRegister';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DailyRegister.name,
        schema: DailyRegisterSchema,
      },
    ]),
  ],
  providers: [DailyRegisterService],
  controllers: [DailyRegisterController],
})
export class DailyRegisterModule {}
