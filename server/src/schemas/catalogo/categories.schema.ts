// category.schema.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class SubCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

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

  @Prop({ type: [{ name: String }], default: () => [] })
  @ValidateNested({ each: true })
  @Type(() => SubCategoryDto)
  subCategories: SubCategoryDto[];

  @Prop()
  parentCategory: string | null;

  @Prop({
    default: 'enabled',
  })
  status: 'disabled' | 'enabled';
}

export const CategorySchema = SchemaFactory.createForClass(Category);
