import { IsOptional, IsString } from 'class-validator';

export class CreateDailyRegisterDto {
  @IsString()
  userId: string;
  /*
  @IsBoolean()
  active: boolean;
  */
  @IsOptional()
  @IsString()
  firstTime?: string;

  @IsOptional()
  @IsString()
  secondTime?: string;

  @IsOptional()
  @IsString()
  thirdTime?: string;

  @IsOptional()
  @IsString()
  fourthTime?: string;
}
