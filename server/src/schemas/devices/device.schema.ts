import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Device {
  @Prop({
    required: true,
    trim: true,
  })
  deviceIdn: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
