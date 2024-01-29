import {
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from 'src/dto/tables/createTableDto';

@Controller('tables')
export class TablesController {
  constructor(private tableService: TablesService) {}

  @Get()
  async findAll() {
    try {
      const tablesArray = await this.tableService.findAll();
      if (!tablesArray || tablesArray.length === 0)
        throw new NotFoundException('No se han encontrado mesas');
      return tablesArray;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }

  @Post()
  async create(@Body() body: CreateTableDto | CreateTableDto[]) {
    const tableService = this.tableService;
    try {
      if (Array.isArray(body)) {
        await this.tableService.replace();
        const createdTables = await Promise.all(
          body.map(async (element: CreateTableDto) => {
            return await tableService.create(element);
          }),
        );
        return createdTables;
      } else {
        const createdTables = await this.tableService.create(body);
        return createdTables;
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
