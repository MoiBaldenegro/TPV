import { Module } from '@nestjs/common';
import { ServiceController } from './service/service.controller';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema, Products } from 'src/schemas/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Products.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ServiceController, ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
