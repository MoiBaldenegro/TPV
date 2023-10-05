import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor( private readonly UsersService: UsersService){}

    register(createUserDto: CreateUserDto){
        return this.UsersService. // ACA CONTINUAMOS A CODEAR, LO PRIMERO ES GENERAR UN FindOne o UN FindByEmail para buscar y validar si el usuario que se intenta registrar ya existe.
    }
    login(){
        return "login"
    }
}
