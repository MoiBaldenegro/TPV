import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class CashierSession {
  @Prop({ required: true, trim: true })
  startDate: string;

  @Prop({ required: true, trim: true })
  endDate: string;

  @Prop({ required: true, trim: true })
  enable: string;

  @Prop({ required: true, trim: true })
  totalDebit: string;

  @Prop({ required: true, trim: true })
  totalCredit: string;

  @Prop({ required: true, trim: true })
  totalCash: string;
}

export const CashierSessionSchema =
  SchemaFactory.createForClass(CashierSession);
