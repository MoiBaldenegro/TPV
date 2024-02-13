import { IsString, IsDefined } from 'class-validator';

export interface Transaction {
  paymentType: string;
  quantity: string;
}

export class CreatePaymentDto {
  @IsString()
  paymentCode?: string;

  @IsDefined()
  @IsString()
  check: string;

  @IsString()
  noteCode?: string;

  @IsString()
  checkTotal: true;

  @IsString()
  tips: string;

  @IsDefined()
  Transactions: Transaction[];

  @IsString()
  paymentTotal: string;

  @IsString()
  paymentType: true;

  @IsDefined()
  cashier: string;

  @IsString()
  paymentDate: string;

  @IsString()
  billing: boolean;
}
