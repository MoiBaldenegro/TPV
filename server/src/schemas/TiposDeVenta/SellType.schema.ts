import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema()
export class SellType {
  @Prop({
    unique: true,
    trim: true,
    required: true,
  })
  code: string;

  @Prop({
    trim: true,
    required: true,
  })
  SellName: string;

  @Prop({
    trim: true,
    required: true,
  })
  color: string;

  @Prop({
    trim: true,
    required: true,
  })
  status: 'enabled' | 'disabled';
}

export const SellTypeSchema = SchemaFactory.createForClass(SellType);
