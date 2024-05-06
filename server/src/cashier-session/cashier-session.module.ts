import { Module } from '@nestjs/common';
import { CashierSessionController } from './cashier-session.controller';
import { CashierSessionService } from './cashier-session.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CashierSession } from 'src/schemas/cashierSession/cashierSession';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CashierSession.name,
        schema: CashierSession,
      },
    ]),
  ],
  controllers: [CashierSessionController],
  providers: [CashierSessionService],
})
export class CashierSessionModule {}
