import { IsString, Length, IsDefined, IsNotEmpty } from 'class-validator';

export class CreateSellTypeDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(1, 35)
  code: string;

  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  @IsString()
  SellName: string;

  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  @IsString()
  color: string;

  @IsDefined()
  @IsNotEmpty()
  @Length(1, 35)
  @IsString()
  status: 'enabled' | 'disabled';
}
