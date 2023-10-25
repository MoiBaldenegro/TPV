import { IsString, IsDefined } from 'class-validator';

export class UpdatePaymentDto {
  @IsString()
  @IsDefined()
  paymentCode: string;

  @IsDefined()
  @IsString()
  check: string;

  @IsDefined()
  @IsString()
  noteCode: string;

  @IsDefined()
  @IsString()
  sellType: string; // este tendra que ser un enum

  @IsString()
  checkTotal: true;

  @IsString()
  tips: string;

  @IsString()
  paymentTotal: string;

  @IsString()
  paymentType: true;

  @IsDefined()
  cashier: string;

  @IsString()
  paymentDate: string;

  @IsString()
  billing: 'billed' | 'unbilled';
}
