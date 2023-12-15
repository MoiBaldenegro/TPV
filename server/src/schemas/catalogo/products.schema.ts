import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
//Schema for products
@Schema({ timestamps: true })
export class Products {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  code: string;
  @Prop({
    required: true,
    trim: true,
  })
  category: string;
  @Prop({
    required: true,
    trim: true,
  })
  productName: string;
  @Prop({
    required: true,
    trim: true,
    default: 0.0,
  })
  priceInSite: string;
  @Prop({
    required: true,
    trim: true,
    default: 0.0,
  })
  priceToGo: string;
  @Prop({
    required: true,
    trim: true,
    default: 0.0,
  })
  priceCallOrder: string;
  @Prop({
    required: true,
    trim: true,
    default: 0.0,
  })
  priceDelivery: string;

  @Prop({
    default: 'enabled',
  })
  status: 'disabled' | 'enabled';
}

export const ProductSchema = SchemaFactory.createForClass(Products);
