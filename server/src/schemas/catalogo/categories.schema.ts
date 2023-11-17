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

  @Prop({ type: Array, default: () => [] })
  subCategories: CreateCategoryDto[];

  @Prop()
  parentCategory: string | null;

  @Prop({
    default: 'enabled',
  })
  status: 'disabled' | 'enabled';

  // Método para llenar automáticamente las subcategorías hasta el nivel 5
  fillSubCategories(depth = 1, subCategoriesCount = 2): void {
    // Establecer valores predeterminados si faltan
    this.code = this.code || `default-code-${depth}`;
    this.categoryName = this.categoryName || `Default Category ${depth}`;
    this.parentCategory = this.parentCategory || `default-parent-${depth}`;
    this.status = this.status || 'enabled';

    // Rellenar hasta el nivel 5
    if (depth < 5) {
      const defaultSubCategory = {
        code: `default-code-${depth + 1}`,
        categoryName: `Default Category ${depth + 1}`,
        parentCategory: `default-parent-${depth + 1}`,
        status: 'enabled',
        subCategories: [],
      };

      for (let i = 0; i < subCategoriesCount; i++) {
        const newSubCategory = new Category();
        newSubCategory.fillSubCategories(depth + 1, subCategoriesCount);
        this.subCategories.push(newSubCategory);
      }

      // Inyectar subcategorías predeterminadas hasta el quinto nivel
      for (let i = 0; i < subCategoriesCount; i++) {
        this.subCategories.push({ ...defaultSubCategory });
      }
    }
  }
}

export const CategorySchema = SchemaFactory.createForClass(Category);

// Middleware pre que se ejecuta antes de guardar un documento
CategorySchema.pre('save', function (next) {
  this.fillSubCategories(); // Llenar automáticamente las subcategorías antes de guardar
  next();
});
