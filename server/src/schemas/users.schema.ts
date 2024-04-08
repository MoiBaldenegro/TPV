import { Schema, Prop, SchemaFactory, MongooseModule } from '@nestjs/mongoose';
import { Role } from './role/role';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Profile } from './usuarios/profiles.Schema';
import { Table } from './tables/tableSchema';

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
    type: MongooseSchema.Types.ObjectId,
    ref: 'Profile',
    default: null,
  })
  role?: Profile;

  @Prop({
    default: true,
  })
  active?: boolean;

  @Prop({
    trim: true,
    default: 6666,
  })
  employeeNumber?: number;

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

  @Prop({
    default: true,
  })
  pos: boolean;

  @Prop({
    default: false,
  })
  admin: boolean;

  @Prop({
    default: false,
  })
  authorizations: boolean;
  /*
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Table' }],
    default: [],
  })
  tables: Table[];
  */
}

export const UserSchema = SchemaFactory.createForClass(User);
