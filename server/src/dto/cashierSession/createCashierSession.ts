import { IsString } from 'class-validator';

export class createCashierSessionDto {
  @IsString()
  initialQuantity: string;
}
