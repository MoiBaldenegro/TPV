import { Module } from '@nestjs/common';
import { SubcategoryFourService } from './subcategory-four.service';
import { SubcategoryFourController } from './subcategory-four.controller';

@Module({
  providers: [SubcategoryFourService],
  controllers: [SubcategoryFourController]
})
export class SubcategoryFourModule {}
