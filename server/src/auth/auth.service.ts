import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/users/createUser.dto';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly UsersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ email, password }: CreateUserDto) {
    const user = await this.UsersService.findByEmail(email);
    if (user) {
      throw new BadRequestException('Este correo ya esta en uso');
    }
    return this.UsersService.create({
      email,
      password: await bcryptjs.hash(password, 10),
    });
  }
  async login({ email, password }: LoginDto) {
    const user = await this.UsersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException(
        'El email y/o contraseña son incorrectos',
      );
    }
    const isValidCredentials: LoginDto = await bcryptjs.compare(
      password,
      user.password,
    );
    if (!isValidCredentials) {
      throw new UnauthorizedException(
        'El email y/o contraseña son incorrectos',
      );
    }
    const payload = { email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return { token, email };
  }
}
