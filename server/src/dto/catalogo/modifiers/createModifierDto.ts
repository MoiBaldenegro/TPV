import { IsDefined, IsString, Length, IsNotEmpty } from 'class-validator';

export class createModifierDto {
  @IsNotEmpty()
  @IsDefined()
  @Length(1, 35)
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsDefined()
  @Length(1, 35)
  @IsString()
  modifierName: string;
}
