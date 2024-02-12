import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Printer } from '../configuracion/printer.schema';

@Schema({ timestamps: true })
export class Bills {
  @Prop({
    required: true,
    trim: true,
  })
  billCode: number;

  @Prop({
    required: true,
    trim: true,
  })
  sellType: 'onSite' | 'toGo' | 'rappi' | 'phone' | 'n/A';

  @Prop({
    required: true,
    trim: true,
  })
  user: string;

  @Prop({
    required: true,
    trim: true,
  })
  checkTotal: string;

  @Prop({
    required: true,
  })
  status: 'enable' | 'disabled' | 'pending' | 'cancel';

  @Prop({
    default: [],
    trim: true,
  })
  products: [{}];

  @Prop({
    required: true,
    trim: true,
  })
  paymentDate: string;

  @Prop({
    required: true,
    trim: true,
  })
  tableNum: string;

  @Prop({
    required: true,
    trim: true,
  })
  table: string | undefined;

  /* 
  @Prop({
    required: true,
    trim: true,
  })
  device: string;
  */
}

export interface BillsDocument extends Document, Bills {}

export const BillSchema = SchemaFactory.createForClass(Bills);
