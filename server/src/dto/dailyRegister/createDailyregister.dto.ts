import { IsString } from 'class-validator';

export class CreateDailyRegisterDto {
  @IsString()
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
