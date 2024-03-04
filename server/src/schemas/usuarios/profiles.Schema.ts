import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Profile {
  @Prop({
    required: true,
    trim: true,
  })
  departament: string;

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
