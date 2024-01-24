import { Module } from '@nestjs/common';
import { ServiceController } from './service/service.controller';
import { PrintController } from './print.controller';
import { PrintService } from './print.service';

@Module({
  controllers: [ServiceController, PrintController],
  providers: [PrintService]
})
export class PrintModule {}
