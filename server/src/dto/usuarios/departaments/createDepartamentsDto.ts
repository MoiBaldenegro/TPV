import { IsDefined, IsNotEmpty, IsString, Length } from 'class-validator';

export class createDepartamentDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 2)
  code: true;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Length(1, 25)
  departamentName: string;
}
