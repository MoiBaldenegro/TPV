import { Category } from "src/schemas/categories.schema";
import { IsString, IsDefined, IsNotEmpty,IsArray,Length, IsOptional } from "class-validator";

export class CreateCategoryDto{
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @Length(2, 9)
    code: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @Length(1, 45)
    categoryName: string;

    @IsArray()
    @IsOptional()
    subCategories: Category[];
    
    @IsOptional()
    parentCategory: Category | null;
}

