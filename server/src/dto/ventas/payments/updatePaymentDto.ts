import { IsString, IsOptional } from 'class-validator';

export interface Transaction {
  paymentType: string;
  quantity: string;
}
// update
export class UpdatePaymentDto {
  @IsString()
  @IsOptional()
  accountId?: string;

  @IsOptional()
  @IsString()
  paymentCode?: string;

  @IsOptional()
  @IsString()
  check?: string;

  @IsOptional()
  @IsString()
  noteCode?: string;

  @IsOptional()
  @IsString()
  checkTotal?: true;

  @IsOptional()
  @IsString()
  tips?: string;

  @IsOptional()
  Transactions?: Transaction[];

  @IsOptional()
  @IsString()
  paymentTotal?: string;

  @IsOptional()
  cashier?: string;

  @IsOptional()
  @IsString()
  paymentDate?: string;

  @IsOptional()
  billing?: boolean;

  @IsString()
  @IsOptional()
  difference?: string;
}
