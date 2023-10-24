import { IsDefined, IsString } from 'class-validator';

export class createNoteDto {
  @IsDefined()
  @IsString()
  checkCode: string;

  @IsDefined()
  @IsString()
  noteNumber: string;

  @IsDefined()
  @IsString()
  paymentCode: string;

  @IsDefined()
  @IsString()
  sellType: string;

  @IsDefined()
  @IsString()
  user: string;

  @IsString()
  checkTotal: string;

  @IsDefined()
  @IsString()
  status: 'enabled' | 'disabled' | 'pending' | 'cancel';

  @IsDefined()
  @IsString()
  cashier: string;

  @IsString()
  paymentDate: string;
}
