import { IsString } from 'class-validator';

export class createCashierSessionDto {
  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsString()
  enable: string;

  @IsString()
  totalDebit: string;

  @IsString()
  totalCredit: string;

  @IsString()
  totalCash: string;
}
