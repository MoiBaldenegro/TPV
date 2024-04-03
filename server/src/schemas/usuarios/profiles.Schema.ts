import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Departament } from './departaments.Schema';
import { Schema as MongooseSchema } from 'mongoose';
import { Role } from '../role/role';

const USER_ROLE: Role = {
  name: 'USER',
  value: 'USER_ROLE',
};

@Schema({ timestamps: true })
export class Profile {
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Departament' }],
  })
  departament: Departament[];

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

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Role',
    default: USER_ROLE,
  })
  role: Role;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
