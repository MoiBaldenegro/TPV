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
    unique: true,
    required: true,
    trim: true,
  })
  productName: string;
  @Prop({
    required: true,
    trim: true,
    default: 0.0,
  })
  priceInSite: number;
  @Prop({
    required: true,
    trim: true,
    default: 0.0,
  })
  priceToGo: number;
  @Prop({
    required: true,
    trim: true,
    default: 0.0,
  })
  priceCallOrder: number;
  @Prop({
    required: true,
    trim: true,
    default: 0.0,
  })
  priceDelivery: number;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
