import { Module } from '@nestjs/common';
import { TogoOrderController } from './togo-order.controller';
import { TogoOrderService } from './togo-order.service';

@Module({
  controllers: [TogoOrderController],
  providers: [TogoOrderService]
})
export class TogoOrderModule {}
