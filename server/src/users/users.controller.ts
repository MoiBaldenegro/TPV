import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  ConflictException,
  HttpCode,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/users/createUser.dto';
import { Error } from 'mongoose';
import { UpdateUserDto } from 'src/dto/users/updateUserDto';
import { NotFoundError } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'Retornando el usuario con el id';
  }
  @Post()
  @HttpCode(204)
  async create(@Body() body: CreateUserDto) {
    try {
      return await this.usersService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('El usuario y/o email ya estan en uso');
      }
      throw error;
    }
  }
  @Delete(':id')
  delete() {
    return 'Usuario eliminado con exito';
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    try {
      const userUpdated = await this.usersService.updateSamples(id, body);
      if (!userUpdated) {
        throw new NotFoundException(
          'No se encontro el usuario que deseas actualizar',
        );
      }
      return userUpdated;
    } catch (error) {
      throw new NotFoundException('Ha ocurrido algo inesperado');
    }
  }

  @Post('biometrics/auth')
  async autenticate(@Body() body: any[]) {
    return 'si jala';
  }
}
