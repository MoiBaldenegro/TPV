import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class createProfileDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  departament: string;

  @IsOptional()
  code?: number;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 25)
  profileName: true;
}
