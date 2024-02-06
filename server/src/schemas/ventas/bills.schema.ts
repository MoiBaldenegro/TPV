import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Printer } from '../configuracion/printer.schema';

@Schema({ timestamps: true })
export class Bills {
  @Prop({
    required: true,
    trim: true,
  })
  billCode: number;

  @Prop({
    required: true,
    trim: true,
  })
  sellType: 'onSite' | 'toGo' | 'rappi' | 'phone';

  @Prop({
    required: true,
    trim: true,
  })
  user: string;

  @Prop({
    required: true,
    trim: true,
  })
  checkTotal: string;

  @Prop({
    required: true,
  })
  status: 'enable' | 'disabled' | 'pending' | 'cancel';

  @Prop({
    default: [],
    trim: true,
  })
  products: [{}];

  @Prop({
    required: true,
    trim: true,
  })
  paymentDate: string;

  @Prop({
    required: true,
    trim: true,
  })
  tableNum: string;

  @Prop({
    required: true,
    trim: true,
  })
  table: string | undefined;

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Printer' }],
    default: [],
  })
  printerLocation?: Printer[];

  /* 
  @Prop({
    required: true,
    trim: true,
  })
  device: string;
  */
}

export const BillSchema = SchemaFactory.createForClass(Bills);
