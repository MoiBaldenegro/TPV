import { IsString, IsDefined, Length, IsOptional } from 'class-validator';
import { Printer } from 'src/schemas/configuracion/printer.schema';
import { Payment } from 'src/schemas/ventas/payment.schema';

export class CreateBillDto {
  @IsDefined()
  @IsString()
  @Length(1, 6)
  sellType: 'onSite' | 'toGo' | 'rappi' | 'phone';

  @IsDefined()
  @IsString()
  user: string;

  @IsDefined()
  @IsString()
  checkTotal: string;

  @IsDefined()
  @IsString()
  status: 'enabled' | 'disabled' | 'pending' | 'cancel';

  @IsDefined()
  payment: string[];

  @IsDefined()
  @IsString()
  table: string;

  /*
  @IsDefined()
  @IsString()
  devide: string;
  */
}
