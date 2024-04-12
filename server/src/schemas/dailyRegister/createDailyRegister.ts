import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DailyEntryDocument = DailyEntry & Document;

@Schema()
export class DailyEntry {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  timeStart: Date;

  @Prop({ type: [{ start: Date, end: Date }] })
  breaks: { start: Date; end: Date }[];

  @Prop()
  timeEnd: Date;

  @Prop({ default: 0 })
  totalTimeWorked: number;

  @Prop({ default: 0 })
  totalBreakTime: number;
}

export const DailyEntrySchema = SchemaFactory.createForClass(DailyEntry);

// Método pre-save para calcular las estadísticas de tiempo antes de guardar
DailyEntrySchema.pre('save', function (next) {
  let totalTimeWorked = 0;
  let totalBreakTime = 0;

  // Calcular el tiempo total trabajado
  if (this.timeStart && this.timeEnd) {
    totalTimeWorked = Math.round(
      (this.timeEnd.getTime() - this.timeStart.getTime()) / (1000 * 60),
    ); // Convertir de milisegundos a minutos
  }

  // Calcular el tiempo total de descanso
  this.breaks.forEach((breakPeriod) => {
    if (breakPeriod.start && breakPeriod.end) {
      totalBreakTime += Math.round(
        (breakPeriod.end.getTime() - breakPeriod.start.getTime()) / (1000 * 60),
      ); // Convertir de milisegundos a minutos
    }
  });

  this.totalTimeWorked = totalTimeWorked;
  this.totalBreakTime = totalBreakTime;

  next();
});
