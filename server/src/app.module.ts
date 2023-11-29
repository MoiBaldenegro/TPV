import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './catalogo/categories/categories.module';
import { DishesModule } from './catalogo/dishes/dishes.module';
import { ProductsModule } from './catalogo/products/products.module';
import { ModificationsModule } from './catalogo/modifications/modifications.module';
import { MenusYrecetasModule } from './catalogo/menus-yrecetas/menus-yrecetas.module';
import { BillsModule } from './ventas/bills/bills.module';
import { NotesModule } from './ventas/notes/notes.module';
import { ProductModule } from './ventas/product/product.module';
import { PaymentsModule } from './ventas/payments/payments.module';
import { DiscountsModule } from './ventas/discounts/discounts.module';
import { CancellationsModule } from './ventas/cancellations/cancellations.module';
import { CancellationReasonModule } from './ventas/cancellation-reason/cancellation-reason.module';
import { ExcelModule } from './utils/chargeFiles/excel/excel/excel.module';
import { TillModule } from './caja/till/till.module';
import { ShiftsModule } from './usuarios/shifts/shifts.module';
import { DepartamentsModule } from './usuarios/departaments/departaments.module';
import { ProfilesModule } from './usuarios/profiles/profiles.module';
import { SubcategoryOneModule } from './catalogo/categories/subcategory-one/subcategory-one.module';
import { SubcategoryTwoModule } from './catalogo/categories/subcategory-two/subcategory-two.module';
import { SubcategoryFourModule } from './catalogo/categories/subcategory-four/subcategory-four.module';
import { SubcategoryThreeModule } from './subcategory-three/subcategory-three.module';

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
    BillsModule,
    NotesModule,
    ProductModule, // este modulo probablemente se elimine (revisar)
    PaymentsModule,
    DiscountsModule,
    CancellationsModule,
    CancellationReasonModule,
    ExcelModule,
    TillModule,
    ShiftsModule,
    DepartamentsModule,
    ProfilesModule,
    SubcategoryOneModule,
    SubcategoryTwoModule,
    SubcategoryThreeModule,
    SubcategoryFourModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
