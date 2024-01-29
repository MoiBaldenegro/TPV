import {
  Body,
  ConflictException,
  Controller,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from 'src/dto/tables/createTableDto';

@Controller('tables')
export class TablesController {
  constructor(private tableService: TablesService) {}

  @Post()
  async create(@Body() body: CreateTableDto | CreateTableDto[]) {
    const dishService = this.tableService;
    try {
      if (Array.isArray(body)) {
        await this.tableService.replace();
        const createdDishes = await Promise.all(
          body.map(async (element: CreateTableDto) => {
            return await dishService.create(element);
          }),
        );
        return createdDishes;
      } else {
        const createdDishes = await this.tableService.create(body);
        return createdDishes;
      }
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('La mesa ya existe');
      } else {
        throw new NotFoundException('Ha ocurrido algo inesperado');
      }
    }
  }
}
