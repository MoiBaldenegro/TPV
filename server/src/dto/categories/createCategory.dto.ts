import { Category } from 'src/schemas/categories.schema';
import {
  IsString,
  IsDefined,
  IsNotEmpty,
  IsArray,
  Length,
  IsOptional,
  ValidateNested,
} from 'class-validator';

export class CreateCategoryDto {
  @IsOptional()
  code: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Length(1, 45)
  categoryName: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  subCategories: Category[];

  @IsOptional()
  parentCategory: string | null;
}
