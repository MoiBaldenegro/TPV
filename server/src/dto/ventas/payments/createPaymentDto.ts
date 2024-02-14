import { IsString, IsDefined, IsOptional } from 'class-validator';

export interface Transaction {
  paymentType: string;
  quantity: string;
}

export class CreatePaymentDto {
  @IsOptional()
  @IsString()
  paymentCode?: string;

  @IsDefined()
  @IsString()
  check: string;

  @IsOptional()
  @IsString()
  noteCode?: string;

  @IsString()
  checkTotal: true;

  @IsString()
  tips: string;

  Transactions?: Transaction[];

  @IsString()
  paymentTotal: string;

  @IsDefined()
  cashier: string;

  @IsString()
  paymentDate: string;

  billing: boolean;
}
