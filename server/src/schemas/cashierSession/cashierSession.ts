import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class CashierSession {
  @Prop({ trim: true })
  startDate: string;

  @Prop({ trim: true })
  endDate: string;

  @Prop({ trim: true, default: true })
  enable?: boolean;

  @Prop({ required: true })
  initialQuantity: string;

  @Prop({ trim: true, default: '0.00' })
  totalDebit?: string;

  @Prop({ trim: true, default: '0.00' })
  totalCredit?: string;

  @Prop({ trim: true, default: '0.00' })
  totalCash?: string;
}

export const CashierSessionSchema =
  SchemaFactory.createForClass(CashierSession);
