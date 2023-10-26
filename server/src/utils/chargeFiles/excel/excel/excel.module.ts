import { Module } from '@nestjs/common';
import { ExcelController } from './excel.controller';
import { ExcelService } from './excel.service';
import { MulterModule } from '@nestjs/platform-express';
import { multerOptions } from '../multer.config';

@Module({
  imports: [MulterModule.register(multerOptions)],
  controllers: [ExcelController],
  providers: [ExcelService]
})
export class ExcelModule {}
