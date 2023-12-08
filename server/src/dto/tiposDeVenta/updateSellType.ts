import { IsString, Length, IsOptional, IsNumber } from 'class-validator';

export class UpdateSellTypeDto {
  @IsOptional()
  @IsNumber()
  @Length(1, 35)
  code?: number;

  @IsOptional()
  @Length(1, 35)
  @IsNumber()
  SellName?: string;

  @IsOptional()
  @Length(1, 35)
  @IsNumber()
  color?: string;

  @IsOptional()
  @Length(1, 35)
  @IsNumber()
  status?: 'enabled' | 'disabled';
}
