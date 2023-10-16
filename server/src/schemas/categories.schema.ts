import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { CreateCategoryDto } from 'src/dto/categories/createCategory.dto';

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
  categoryName: number;

  @Prop({ type: Array, default: () => [] })
  subCategories: CreateCategoryDto[];

  @Prop()
  parentCategory: string | null;
}

export const CategorySchema = SchemaFactory.createForClass(Category);