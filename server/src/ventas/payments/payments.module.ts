import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from 'src/schemas/ventas/payment.schema';
import { BillsService } from '../bills/bills.service';
import { BillSchema, Bills } from 'src/schemas/ventas/bills.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Payment.name,
        schema: PaymentSchema,
      },
      {
        name: Bills.name,
        schema: BillSchema,
      },
    ]),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService, BillsService],
})
export class PaymentsModule {}
