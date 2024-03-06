import {
  IsString,
  IsDefined,
  Length,
  IsOptional,
  IsNumber,
  IsArray,
} from 'class-validator';

export class UpdateBillDto {
  @IsOptional()
  @IsString()
  @Length(1, 6)
  sellType?: 'onSite' | 'toGo' | 'rappi' | 'phone';

  @IsString()
  user?: string;

  @IsOptional()
  @IsString()
  checkTotal?: string;

  @IsOptional()
  @IsString()
  status?: 'enabled' | 'disabled' | 'pending' | 'cancel';

  @IsOptional()
  @IsArray()
  products?: [];

  @IsOptional()
  @IsArray()
  payment?: [];

  @IsOptional()
  @IsString()
  tableNum?: string;

  @IsString()
  table?: string;

  @IsOptional()
  @IsString()
  billName?: string;

  @IsOptional()
  @IsString()
  comments?: string;

  /*
  @IsDefined()
  @IsString()
  devide: string;
  */
}
