import { Module } from '@nestjs/common';
import { CashierSessionController } from './cashier-session.controller';
import { CashierSessionService } from './cashier-session.service';

@Module({
  controllers: [CashierSessionController],
  providers: [CashierSessionService]
})
export class CashierSessionModule {}
