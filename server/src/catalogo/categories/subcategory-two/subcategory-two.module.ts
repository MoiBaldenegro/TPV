import { Module } from '@nestjs/common';
import { SubcategoryTwoController } from './subcategory-two.controller';
import { SubcategoryTwoService } from './subcategory-two.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SubCategoryTwo,
  SubCategoryTwoSchema,
} from 'src/schemas/catalogo/subcategories/subCategoryTwo.schema';
import {
  SubCategoryThree,
  SubCategoryThreeSchema,
} from 'src/schemas/catalogo/subcategories/subCategoryThree.Schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SubCategoryTwo.name,
        schema: SubCategoryTwoSchema,
      },
      {
        name: SubCategoryThree.name,
        schema: SubCategoryThreeSchema,
      },
    ]),
  ],
  controllers: [SubcategoryTwoController],
  providers: [SubcategoryTwoService],
})
export class SubcategoryTwoModule {}
