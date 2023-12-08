import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  providers: [EmployeesService],
  controllers: [EmployeesController]
})
export class EmployeesModule {}
