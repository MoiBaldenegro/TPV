import { IsOptional, IsString, Length } from 'class-validator';

export class updateDepartamentDto {
  @IsString()
  @IsOptional()
  @Length(1, 2)
  code: true;

  @IsString()
  @IsOptional()
  @Length(1, 25)
  departamentName: string;
}
