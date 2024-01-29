import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Table {
  @Prop({
    required: true,
    trim: true,
  })
  tableNum: string;
  @Prop({
    default: 'N/A',
    required: true,
    trim: true,
  })
  server: string;
  @Prop({
    default: 'free',
    required: true,
    trim: true,
  })
  status: string;
}

export const TableSchema = SchemaFactory.createForClass(Table);
