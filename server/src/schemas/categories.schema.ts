import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { CreateCategoryDto } from 'src/dto/categories/createCategory.dto';

@Schema({ timestamps: true })
export class Category {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  code: number;

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
}

export const CategorySchema = SchemaFactory.createForClass(Category);
