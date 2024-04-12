import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DailyEntryDocument = DailyRegister & Document;

@Schema()
export class DailyRegister {
  @Prop({ required: true })
  userId: number;

  @Prop({ required: true })
  timeStart: Date;
  /*
  @Prop({ type: [{ start: Date, end: Date }] })
  breaks: { start: Date; end: Date }[];

  */

  @Prop()
  timeEnd: Date;

  @Prop({ default: 0 })
  totalTimeWorked: number;

  @Prop({ default: 0 })
  totalBreakTime: number;
}

export const DailyRegisterSchema = SchemaFactory.createForClass(DailyRegister);

// Método pre-save para calcular las estadísticas de tiempo antes de guardar
DailyRegisterSchema.pre('save', function (next) {
  let totalTimeWorked = 0;
  let totalBreakTime = 0;

  // Calcular el tiempo total trabajado
  if (this.timeStart && this.timeEnd) {
    totalTimeWorked = Math.round(
      (this.timeEnd.getTime() - this.timeStart.getTime()) / (1000 * 60),
    ); // Convertir de milisegundos a minutos
  }
  /*

  // Calcular el tiempo total de descanso
  this.breaks.forEach((breakPeriod) => {
    if (breakPeriod.start && breakPeriod.end) {
      totalBreakTime += Math.round(
        (breakPeriod.end.getTime() - breakPeriod.start.getTime()) / (1000 * 60),
      ); // Convertir de milisegundos a minutos
    }
  });
  */

  this.totalTimeWorked = totalTimeWorked;
  this.totalBreakTime = totalBreakTime;

  next();
});
