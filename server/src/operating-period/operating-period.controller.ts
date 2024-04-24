import { Controller, Get, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OperatingPeriod } from 'src/schemas/operatingPeriod/operatingPeriod.schema';
import { OperatingPeriodService } from './operating-period.service';

@Controller('operating-period')
export class OperatingPeriodController {
  constructor(
    @InjectModel(OperatingPeriod.name)
    private operatingPeriodService: OperatingPeriodService,
  ) {}

  @Get()
  async findAll() {
    try {
      const periodArray = await this.operatingPeriodService.findAll();
      if (!periodArray) {
        throw new NotFoundException(
          'No se encontro ningun periodo actualmente',
        );
      }
      return periodArray;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }
}
