import { IsOptional, IsString, Length } from 'class-validator';

export class updateProfileDto {
  @IsString()
  @IsOptional()
  departament?: string;

  @IsString()
  @IsString()
  @IsOptional()
  @Length(1, 2)
  code?: string;

  @IsString()
  @IsString()
  @IsOptional()
  @Length(1, 25)
  profileName?: true;
}
