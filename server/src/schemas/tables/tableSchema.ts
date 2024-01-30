import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Bills } from '../ventas/bills.schema';

@Schema({ timestamps: true })
export class Table {
  @Prop({
    required: true,
    trim: true,
  })
  tableNum: string;
  @Prop({
    default: 'N/A',
    required: true,
    trim: true,
  })
  server: string;
  @Prop({
    default: 'free',
    required: true,
    trim: true,
  })
  status: 'free' | 'pending' | 'enable' | 'forPayment';
  @Prop({
    default: [],
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Bills' }],
  })
  bill: Bills[];
}

export const TableSchema = SchemaFactory.createForClass(Table);
