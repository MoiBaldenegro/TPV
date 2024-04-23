import { IsString } from 'class-validator';

export class CreateDailyRegisterDto {
  @IsString()
  userId: string;
  /*
  @IsBoolean()
  active: boolean;
  */
  @IsString()
  firstTime?: string;

  @IsString()
  secondTime?: string;

  @IsString()
  thirdTime?: string;

  @IsString()
  fourthTime?: string;
}
