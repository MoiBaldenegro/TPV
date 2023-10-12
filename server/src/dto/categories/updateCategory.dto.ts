import { Category } from "src/schemas/categories.schema";

export interface UpdateCategoryDto{
    code?: string;
    categoryName?: string;
    subCategories?: Category[];
    parentCategory?: Category | null;
}

