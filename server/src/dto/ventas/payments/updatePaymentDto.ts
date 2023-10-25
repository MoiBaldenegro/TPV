import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
// Este esquema se decide no usar, por lo menos hasta nuevo aviso.
// no es correcto tener la funcionalidad de modificar datos de los pagos una ves completada la transaccion.
@Schema({ timestamps: true })
export class Payment {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  paymentCode: string;

  @Prop({
    required: true,
    trim: true,
  })
  check: string;

  @Prop({
    required: true,
    trim: true,
  })
  noteCode: string;

  @Prop({
    required: true,
    trim: true,
  })
  sellType: string; // este tendra que ser un enum

  @Prop({
    required: true,
    trim: true,
  })
  checkTotal: true;

  @Prop({
    required: true,
    trim: true,
  })
  tips: string;

  @Prop({
    required: true,
    trim: true,
    default: "0.00"
  })
  paymentTotal: string;

  @Prop({
    required: true,
    trim: true,
    // default: "cash"
  })
  paymentType: true;
  
  @Prop({
    required: true,
    trim: true,
  })
  cashier: string;

  @Prop({
    required: true,
    trim: true,
  })
  paymentDate: string;

  @Prop({
    required: true,
    trim: true,
    default: "unbilled"
  })
  billing: 'billed' | 'unbilled';
}

export const UpdatePaymentDto = SchemaFactory.createForClass(Payment);
