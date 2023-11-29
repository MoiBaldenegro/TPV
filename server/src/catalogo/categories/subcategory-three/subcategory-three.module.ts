import { Module } from '@nestjs/common';
import { SubcategoryThreeController } from './subcategory-three.controller';
import { SubcategoryThreeService } from './subcategory-three.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SubCategoryThree,
  SubCategoryThreeSchema,
} from 'src/schemas/catalogo/subcategories/subCategoryThree.Schema';
import {
  SubCategoryTwo,
  SubCategoryTwoSchema,
} from 'src/schemas/catalogo/subcategories/subCategoryTwo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SubCategoryThree.name,
        schema: SubCategoryThreeSchema,
      },
      {
        name: SubCategoryTwo.name,
        schema: SubCategoryTwoSchema,
      },
    ]),
  ],
  controllers: [SubcategoryThreeController],
  providers: [SubcategoryThreeService],
})
export class SubcategoryThreeModule {}
