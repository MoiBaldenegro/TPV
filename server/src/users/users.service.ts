import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/users.schema';
// interfaces
import { CreateUserDto } from 'src/dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async create(createUser: CreateUserDto) {
    const newUser = new this.UserModel(createUser);
    return await newUser.save();
  }
}
