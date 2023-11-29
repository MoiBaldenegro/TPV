import { Module } from '@nestjs/common';
import { SubcategoryThreeController } from './subcategory-three.controller';
import { SubcategoryThreeService } from './subcategory-three.service';

@Module({
  controllers: [SubcategoryThreeController],
  providers: [SubcategoryThreeService]
})
export class SubcategoryThreeModule {}
