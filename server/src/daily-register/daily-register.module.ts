import { Module } from '@nestjs/common';
import { DailyRegisterService } from './daily-register.service';
import { DailyRegisterController } from './daily-register.controller';

@Module({
  providers: [DailyRegisterService],
  controllers: [DailyRegisterController]
})
export class DailyRegisterModule {}
