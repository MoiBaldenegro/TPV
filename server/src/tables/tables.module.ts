import { Module } from '@nestjs/common';
import { TablesController } from './tables.controller';
import { TablesService } from './tables.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Table, TableSchema } from 'src/schemas/tables/tableSchema';
import { BillSchema, Bills } from 'src/schemas/ventas/bills.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Table.name,
        schema: TableSchema,
      },
      {
        name: Bills.name,
        schema: BillSchema,
      },
    ]),
  ],
  controllers: [TablesController],
  providers: [TablesService],
})
export class TablesModule {}
