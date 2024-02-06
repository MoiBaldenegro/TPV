import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from 'src/dto/devices/createDeviceDto';
import { UpdateDeviceDto } from 'src/dto/devices/updateDeviceDto';

@Controller('device')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Get()
  async findAll() {
    try {
      const devicesArray = await this.deviceService.findAll();
      if (!devicesArray) {
        throw new NotFoundException(
          `No se encontraron dispositivos disponibles`,
        );
      }
      return devicesArray;
    } catch (error) {
      throw new NotFoundException(
        `Ha ocurrido un error inesperado el buscar dispositivos disponibles ${error}`,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const deviceSelected = await this.deviceService.findOne(id);
      if (!deviceSelected) {
        throw new NotFoundException(
          `El dispositivo ${id}, no se encuentra disponible o no existe`,
        );
      }
      return deviceSelected;
    } catch (error) {
      throw new NotFoundException(
        `Ha ocurrido un error inesperado en la busqueda ${error}`,
      );
    }
  }

  @Post()
  async create(@Body() body: CreateDeviceDto) {
    try {
      const newDevice = await this.deviceService.create(body);
      return newDevice;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException(`Este disposito ya se encuetra listado`);
      }
      throw new NotFoundException(`Ha ocurrido algo inesperado ${error}`);
    }
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateDeviceDto) {
    try {
      const deviceUpdated = await this.deviceService.update(id, body);
      if (!deviceUpdated) {
        throw new NotFoundException(
          `El dispositivo ${id} no se encuentra disponible para actualizar o no existe`,
        );
      }
      return deviceUpdated;
    } catch (error) {
      throw new NotFoundException(`Ha ocurrido algo inesperado ${error}`);
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    try {
      const deviceDeleted = await this.deviceService.delete(id);
      if (!deviceDeleted) {
        throw new NotFoundException(
          `No se ha podido eliminar. El dispositivo ${id} no se encuentra disponible o no existe`,
        );
      }
      return deviceDeleted;
    } catch (error) {
      throw new NotFoundException(`Ha ocurrido un error inesperado ${error}`);
    }
  }
}
