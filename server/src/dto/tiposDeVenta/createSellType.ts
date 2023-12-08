import {
  Length,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateSellTypeDto {
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  code: string;

  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  @IsString()
  SellName: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  color: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  status: 'enabled' | 'disabled';
}
