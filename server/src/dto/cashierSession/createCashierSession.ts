import { IsString } from 'class-validator';

export class createCashierSessionDto {
  @IsString()
  user: string;

  @IsString()
  initialQuantity: string;
}
