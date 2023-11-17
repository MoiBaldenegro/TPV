import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

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
  subCategories: Category[];

  @Prop()
  parentCategory: string | null;

  @Prop({
    default: 'enabled',
  })
  status: 'disabled' | 'enabled';

  fillSubCategories(depth = 1, subCategoriesCount = 2): void {
    if (depth <= 5) {
      for (let i = 0; i < subCategoriesCount; i++) {
        const defaultSubCategory = {
          code: `${this.code}-${i + 1}`,
          categoryName: `Default Category ${depth + 1} - ${i + 1}`,
          parentCategory: this.code,
          status: 'enabled',
          subCategories: [],
        };
        this.subCategories.push({ ...defaultSubCategory });
        this.subCategories[i].fillSubCategories(depth + 1, subCategoriesCount);
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

// commit
