import { IsString, IsOptional } from 'class-validator';

export interface Transaction {
  paymentType: string;
  quantity: string;
}

export class UpdatePaymentDto {
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

  @IsString()
  @IsOptional()
  paymentType?: true;

  @IsOptional()
  cashier?: string;

  @IsOptional()
  @IsString()
  paymentDate?: string;

  @IsString()
  @IsOptional()
  billing?: boolean;
}
