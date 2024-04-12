import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateDailyRegisterDto {
  @IsNumber()
  userId: number;

  @IsDate()
  timeStart: Date;

  @IsDate()
  timeEnd: Date;
}
