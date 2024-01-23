import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Bills {
  @Prop({
    required: true,
    trim: true,
  })
  billCode: string;

  @Prop({
    required: true,
    trim: true,
  })
  sellType: 'onSite' | 'toGo' | 'rappi' | 'phone';

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
  status: 'enabled' | 'disabled' | 'pending' | 'cancel';

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
}

export interface BillsDocument extends Document, Bills {}

export const BillSchema = SchemaFactory.createForClass(Bills);
