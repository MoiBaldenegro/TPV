import mongoose, { Document, Schema } from 'mongoose';

interface ICategory extends Document {
  code: string;
  categoryName: string;
  subCategories: ICategory[];
  parentCategory: ICategory | null;
}

const categorySchema = new Schema<ICategory>({
  code: String, // Esto será la clave jerárquica generada automáticamente
  categoryName: String,
  subCategories: [categorySchema], // Uso recursivo para subcategorías
  parentCategory: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
});

// Función para generar la clave jerárquica automáticamente
categorySchema.pre('save', async function (next) {
  if (!this.isNew) {
    // La categoría ya existe, no se necesita generar una clave
    return next();
  }

  // Genera la clave basada en el nivel de profundidad
  // (Se generará como: 0101, 010101, 01010101, etc.)
  let parentCode = '';
  let level = 1;
  if (this.parentCategory) {
    parentCode = this.parentCategory.code;
    level = this.parentCategory.getSubcategoryCount() + 1;
  }

  // Genera una clave de tres dígitos en formato "001"
  const formattedLevel = level.toString().padStart(3, '0');
  this.code = `${parentCode}${formattedLevel}`;
  next();
});

// Método para obtener la cantidad de subcategorías de esta categoría
categorySchema.methods.getSubcategoryCount = function () {
  return this.subCategories.length;
};

const Category = mongoose.model<ICategory>('Category', categorySchema);

export default Category;

