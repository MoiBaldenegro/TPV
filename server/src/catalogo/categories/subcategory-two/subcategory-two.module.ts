import { Module } from '@nestjs/common';
import { SubcategoryTwoController } from './subcategory-two.controller';
import { SubcategoryTwoService } from './subcategory-two.service';

@Module({
  controllers: [SubcategoryTwoController],
  providers: [SubcategoryTwoService]
})
export class SubcategoryTwoModule {}
