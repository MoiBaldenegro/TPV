import { Module } from '@nestjs/common';
import { OperatingPeriodController } from './operating-period.controller';
import { OperatingPeriodService } from './operating-period.service';

@Module({
  controllers: [OperatingPeriodController],
  providers: [OperatingPeriodService]
})
export class OperatingPeriodModule {}
