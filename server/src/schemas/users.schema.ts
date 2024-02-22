import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  name: string;

  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  lastName: string;

  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  email: string;

  @Prop({
    required: true,
    trim: true,
  })
  password: string;

  @Prop({
    default: 'user',
  })
  role: string;

  @Prop({
    default: false,
  })
  active: boolean;

  @Prop({
    trim: true,
  })
  employeeNumber: number;

  @Prop({
    trim: true,
  })
  pinPos: number;

  @Prop({
    trim: true,
  })
  shift: string;

  @Prop({
    trim: true,
  })
  entryDate: string;

  @Prop({
    trim: true,
  })
  color: string;
  @Prop({
    required: false,
    default: [],
  })
  samples?: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
