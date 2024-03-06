import { IsString, Length, IsOptional, IsNumber } from 'class-validator';
import { Printer } from 'src/schemas/configuracion/printer.schema';
import { Payment } from 'src/schemas/ventas/payment.schema';

export class UpdateBillDto {
  @IsOptional()
  @IsNumber()
  billCode?: number;

  @IsOptional()
  @IsString()
  @Length(1, 6)
  sellType?: 'onSite' | 'toGo' | 'rappi' | 'phone';

  @IsOptional()
  @IsString()
  user?: string;

  @IsOptional()
  @IsString()
  checkTotal?: string;

  @IsOptional()
  @IsString()
  status?: 'enabled' | 'disabled' | 'pending' | 'cancel';

  @IsOptional()
  payment?: string[];

  @IsOptional()
  @IsString()
  table?: string;

  @IsOptional()
  @IsString()
  billName?: string;

  @IsOptional()
  @IsString()
  comments?: string;

  /*
  @IsOptional()
  @IsString()
  devide?: string;
  */
}
