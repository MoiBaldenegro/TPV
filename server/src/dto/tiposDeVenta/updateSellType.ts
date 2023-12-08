import { IsString, Length, IsOptional } from 'class-validator';

export class UpdateSellTypeDto {
  @IsOptional()
  @IsString()
  @Length(1, 35)
  code?: string;

  @IsOptional()
  @Length(1, 35)
  @IsString()
  SellName?: string;

  @IsOptional()
  @Length(1, 35)
  @IsString()
  color?: string;

  @IsOptional()
  @Length(1, 35)
  @IsString()
  status?: 'enabled' | 'disabled';
}
