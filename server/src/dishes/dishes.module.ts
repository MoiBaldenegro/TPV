import { Module } from '@nestjs/common';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';

@Module({
  controllers: [DishesController],
  providers: [DishesService]
})
export class DishesModule {}
