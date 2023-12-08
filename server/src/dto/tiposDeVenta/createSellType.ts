import { Length, IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSellTypeDto {
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  code: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  SellName: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  color: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  status: 'enabled' | 'disabled';
}
