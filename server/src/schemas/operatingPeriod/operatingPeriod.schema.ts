import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class OperatingPeriod {
  @Prop({ required: true })
  startDate: string;

  @Prop({ required: true })
  endDate: string;

  @Prop({ required: true })
  totalCash: string;

  @Prop({ required: true })
  totalDebit: string;

  @Prop({ required: true })
  totalCredit: string;

  /*
  @Prop({ required: true })
  totalRevenue: string;
  */
}

export const OperatingPeriodSchema =
  SchemaFactory.createForClass(OperatingPeriod);
