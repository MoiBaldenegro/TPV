import { IsString, IsOptional } from 'class-validator';

export class updateNoteDto {
  @IsOptional()
  @IsString()
  checkCode?: string;

  @IsOptional()
  @IsString()
  noteNumber?: string;

  @IsOptional()
  @IsString()
  paymentCode?: string;

  @IsOptional()
  @IsString()
  sellType?: string;

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
  cashier?: string;

  @IsOptional()
  @IsString()
  paymentDate?: string;
}
