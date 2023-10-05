import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dto/createUser.dto';

@Controller('auth')
export class AuthController {
    constructor( private readonly authService:AuthService){}

    @Post("register")
    register(@Body() createUserDto : CreateUserDto){
        return this.authService.register(createUserDto);
    }

    @Post("login")
    login(){
        return this.authService.login();
    }

}

    
 