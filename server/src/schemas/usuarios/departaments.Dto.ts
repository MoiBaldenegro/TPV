import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Departament {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  code: true;

  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  departamentName: string;
}

export const departamentSchema = SchemaFactory.createForClass(Departament);
