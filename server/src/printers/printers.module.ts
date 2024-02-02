import { Module } from '@nestjs/common';
import { PrintersController } from './printers.controller';
import { PrintersService } from './printers.service';

@Module({
  controllers: [PrintersController],
  providers: [PrintersService]
})
export class PrintersModule {}
