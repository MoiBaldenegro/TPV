import { Module } from '@nestjs/common';
import { BillsController } from './bills.controller';
import { BillsService } from './bills.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BillSchema, Bills } from 'src/schemas/ventas/bills.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Bills.name,
      schema: BillSchema
    }
  ])],
  controllers: [BillsController],
  providers: [BillsService]
})
export class BillsModule {}
