import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Role {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  value: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
