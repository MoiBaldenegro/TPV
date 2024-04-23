import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateDailyRegisterDto {
  @IsNumber()
  userId: string;
  /*
  @IsBoolean()
  active: boolean;
  */

  @IsString()
  timeStart: string;

  @IsString()
  timeEnd: string;
}
