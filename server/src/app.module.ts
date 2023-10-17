import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './catalogo/categories/categories.module';
import { DishesModule } from './catalogo/dishes/dishes.module';
import { ProductsModule } from './catalogo/products/products.module';
import { ModificationsModule } from './catalogo/modifications/modifications.module';
import { MenusYrecetasModule } from './catalogo/menus-yrecetas/menus-yrecetas.module';

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
    ModificationsModule,
    MenusYrecetasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
