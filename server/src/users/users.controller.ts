import { Controller, Get, Post, Delete, Put, Body,ConflictException, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { Error } from 'mongoose';

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
      if(error.code === 11000){
        throw new ConflictException("El usuario y/o email ya estan en uso")
      }
      throw error;
    }
  }
  @Delete(':id')
  delete() {
    return 'Usuario eliminado con exito';
  }
  @Put(':id')
  update() {
    return 'Usuario actualizado por exito';
  }
}
