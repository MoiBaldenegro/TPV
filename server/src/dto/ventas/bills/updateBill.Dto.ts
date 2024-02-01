import { IsString, Length, IsOptional, IsDefined } from 'class-validator';

export class UpdateBillDto {
  @IsOptional()
  billCode?: number;

  @IsOptional()
  @IsString()
  @Length(1, 6)
  sellType?: 'onSite' | 'toGo' | 'rappi' | 'phone';

  @IsOptional()
  @IsString()
  user?: string;

  @IsOptional()
  @IsString()
  checkTotal?: string;

  @IsOptional()
  @IsString()
  status?: 'enabled' | 'disabled' | 'pending' | 'cancel';

  @IsOptional()
  @IsString()
  paymentDate?: string;

  @IsDefined()
  @IsString()
  table: string;
}
