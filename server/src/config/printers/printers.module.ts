import { Module } from '@nestjs/common';
import { PrintersController } from './printers.controller';
import { PrintersService } from './printers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Printer } from 'escpos';
import { PrinterSchema } from 'src/schemas/configuracion/printer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Printer.name,
        schema: PrinterSchema,
      },
    ]),
  ],
  controllers: [PrintersController],
  providers: [PrintersService],
})
export class PrintersModule {}
