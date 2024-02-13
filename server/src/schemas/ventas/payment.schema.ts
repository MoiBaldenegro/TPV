import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

export interface Transaction {
  paymentType: string;
  quantity: string;
}

@Schema({ timestamps: true })
export class Payment {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  paymentCode?: string;

  @Prop({
    required: true,
    trim: true,
  })
  check: string;
  @Prop({
    required: true,
    trim: true,
  })
  note?: string;

  @Prop({
    required: true,
    trim: true,
  })
  checkTotal: string;

  @Prop({
    required: true,
    trim: true,
  })
  tips: string;

  @Prop({
    required: true,
  })
  transactions: Transaction[];

  @Prop({
    required: true,
    trim: true,
    default: '0.00',
  })
  paymentTotal: string;

  @Prop({
    required: true,
    trim: true,
  })
  cashier: string;

  @Prop({
    required: true,
    trim: true,
  })
  paymentDate: string;

  @Prop({
    required: true,
    trim: true,
    default: false,
  })
  billing: boolean;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
