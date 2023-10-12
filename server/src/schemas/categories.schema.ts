import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

export @Schema({ timestamps: true })
class Category {
  getSubcategoryCount() {
    throw new Error('Method not implemented.');
  }
  @Prop({ 
    unique: true,
    required: true,
    trim: true
  })
  code: string;

  @Prop({ 
    unique: true,
    required: true,
    trim: true
  })
  categoryName: string;

  @Prop({ type: [() => Category] }) // Usamos el mismo esquema para subcategorías
  subCategories: Category[];

  @Prop({ type: () => Category, unique: true }) // Usamos el mismo esquema para el padre
  parentCategory: Category | null; // Esto puede ser null si es la categoría raíz
}

export const CategorySchema = SchemaFactory.createForClass(Category);
