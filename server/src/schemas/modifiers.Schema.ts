import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Modifier {
  @Prop({
    required: true,
    trim: true,
  })
  category: string;

  @Prop({
    required: true,
    trim: true,
  })
  modifierName: string;
}

export const ModifierSchema = SchemaFactory.createForClass(Modifier);
