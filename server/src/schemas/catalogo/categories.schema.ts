import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { CreateCategoryDto } from 'src/dto/catalogo/categories/createCategory.dto';

@Schema({ timestamps: true })
export class Category {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  code: string;

  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  categoryName: string;

  @Prop({
    type: Array,
    default: () => [],
    validate: {
      validator: function (value: any[]) {
        // La validación personalizada para asegurar que siempre haya información hasta el nivel 5
        return validateSubCategories(value, 1);
      },
      message: 'subCategories must have information up to level 5',
    },
  })
  subCategories: CreateCategoryDto[];

  @Prop()
  parentCategory: string | null;

  @Prop({
    default: 'enabled',
  })
  status: 'disabled' | 'enabled';
}

function validateSubCategories(subCategories: any[], depth: number): boolean {
  // Validar hasta el nivel 5
  if (depth > 5) {
    return true;
  }

  for (const subCategory of subCategories) {
    // Establecer valores predeterminados si faltan
    subCategory.code = subCategory.code || `default-code-${depth}`;
    subCategory.categoryName =
      subCategory.categoryName || `Default Category ${depth}`;
    subCategory.parentCategory =
      subCategory.parentCategory || `default-parent-${depth}`;
    subCategory.status = subCategory.status || 'enabled';

    // Validar subcategorías recursivamente
    if (!validateSubCategories(subCategory.subCategories, depth + 1)) {
      return false;
    }
  }

  return true;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
