import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

@Schema({ timestamps: true })
export class Category {
  @Prop({ 
    unique: true,
    required: true,
    trim: true
  })
  code: number;

  @Prop({ 
    unique: true,
    required: true,
    trim: true
  })
  categoryName: string;

  @Prop() 
  subCategories: any;

  @Prop() 
  parentCategory: any;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
