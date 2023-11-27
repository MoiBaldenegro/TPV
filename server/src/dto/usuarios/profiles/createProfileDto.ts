import { IsDefined, IsNotEmpty, IsString, Length } from 'class-validator';

export class createProfileDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  departament: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 2)
  code: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 25)
  profileName: true;
}
