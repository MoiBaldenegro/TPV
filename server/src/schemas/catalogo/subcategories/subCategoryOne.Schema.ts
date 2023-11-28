import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { CreateCategoryDto } from 'src/dto/catalogo/categories/createCategory.dto';

@Schema({ timestamps: true })
export class SubCategoryOne {
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
}

export const SubCategoryOneSchema =
  SchemaFactory.createForClass(SubCategoryOne);