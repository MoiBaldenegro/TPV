import { IsString, Length, IsOptional } from 'class-validator';
import { Printer } from 'src/schemas/configuracion/printer.schema';

export class UpdateBillDto {
  @IsOptional()
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
  @IsString()
  paymentDate?: string;

  @IsOptional()
  @IsString()
  table?: string;

  @IsOptional()
  printerLocation?: Printer[];

  @IsOptional()
  @IsString()
  devide?: string;
}
