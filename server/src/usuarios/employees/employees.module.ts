import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from 'src/schemas/usuarios/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Employee.name,
        schema: EmployeeSchema,
      },
    ]),
  ],
  providers: [EmployeesService],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
