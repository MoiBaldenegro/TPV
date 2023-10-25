import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Discount {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  checkCode: string;

  @Prop({
    required: true,
    trim: true,
  })
  sellType: string; // este sera un enum

  @Prop({
    trim: true,
    default: '0,00',
  })
  checkTotal: string;

  @Prop({
    trim: true,
    default: '0,00',
  })
  discountMount: string;

  @Prop({
    required: true,
    trim: true,
  })
  discountByUser: string;

  @Prop({
    required: true,
    trim: true,
  })
  discountFor: string;

  @Prop({
    required: true,
    trim: true,
  })
  discountReason: string;

  @Prop({
    required: true,
    trim: true,
  })

  // Verificar si esta prop se va quedar
  @Prop({
    trim: true,
  })
  discountDate: string;
  // verificar si esta prop se va quedar
  @Prop({
    trim: true,
    default: 'enabled',
  })
  checkStatus: 'enabled' | 'disabled';
}

export const DiscountSchema = SchemaFactory.createForClass(Discount);
