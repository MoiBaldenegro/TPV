import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Profile {
  @Prop({
    required: true,
    trim: true,
  })
  departament: string;

  @Prop({
    required: true,
    trim: true,
  })
  code: string;
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  profileName: true;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
