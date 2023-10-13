import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { DishesModule } from './dishes/dishes.module';
import { ProductsModule } from './products/products.module';
import { DishesModule } from './dishes/dishes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tomateDataBase:tomatemasqueunataqueria@cluster0.ficwm8y.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    AuthModule,
    CategoriesModule,
    DishesModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
