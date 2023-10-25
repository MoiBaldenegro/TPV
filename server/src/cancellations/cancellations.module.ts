import { Module } from '@nestjs/common';
import { CancellationsController } from './cancellations.controller';
import { CancellationsService } from './cancellations.service';

@Module({
  controllers: [CancellationsController],
  providers: [CancellationsService]
})
export class CancellationsModule {}
