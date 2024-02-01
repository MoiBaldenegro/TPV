import { IsString, IsDefined, Length } from 'class-validator';

export class CreateBillDto {
  @IsDefined()
  @IsString()
  @Length(1, 6)
  sellType: 'onSite' | 'toGo' | 'rappi' | 'phone';

  @IsDefined()
  @IsString()
  user: string;

  @IsDefined()
  @IsString()
  checkTotal: string;

  @IsDefined()
  @IsString()
  status: 'enabled' | 'disabled' | 'pending' | 'cancel';

  @IsDefined()
  @IsString()
  paymentDate: string;

  @IsDefined()
  @IsString()
  table: string;
}
