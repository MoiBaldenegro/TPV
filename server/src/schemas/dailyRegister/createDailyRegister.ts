import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../users.schema';

@Schema({ versionKey: false, timestamps: true })
export class DailyRegister {
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ required: true })
  timeStart: string;

  @Prop()
  timeEnd: string;

  @Prop({ required: true })
  active: boolean;
}

export const DailyRegisterSchema = SchemaFactory.createForClass(DailyRegister);
