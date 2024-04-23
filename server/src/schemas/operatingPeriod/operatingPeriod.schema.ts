import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class OperatingPeriod {
  @Prop({ default: true })
  status: boolean;

  /*
  @Prop({ required: true })
  totalRevenue: string;
  */
}

export const OperatingPeriodSchema =
  SchemaFactory.createForClass(OperatingPeriod);
