import { Transform } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  MinLength,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsOptional()
  role?: string;
}
