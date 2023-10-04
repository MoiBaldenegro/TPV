import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/createUser.dto';

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
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
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
