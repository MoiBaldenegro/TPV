import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from 'src/schemas/ventas/payment.schema';

@Module({
  imports: [MongooseModule.forFeature(
    [
      {
        name: Payment.name,
        schema: PaymentSchema
      }
    ]
  )],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
