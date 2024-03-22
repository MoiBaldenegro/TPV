import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Departament } from './departaments.Schema';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Profile {
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Departament' }],
  })
  departament: Departament;

  @Prop({
    trim: true,
  })
  code?: number;

  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  profileName: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
