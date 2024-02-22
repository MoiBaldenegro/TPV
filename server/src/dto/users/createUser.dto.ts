import { Transform } from 'class-transformer';
import {
  Length,
  IsString,
  IsOptional,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsNumber,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  @Length(2, 35)
  name: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  @Length(2, 45)
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  role?: string;

  @IsOptional()
  active?: boolean;

  @IsOptional()
  @IsNumber()
  @MinLength(4)
  @MaxLength(4)
  employeeNumber?: number;

  @IsNumber()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(4)
  pinPos: number;

  shift?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(2, 35)
  entryDate?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  samples?: string[];
}
