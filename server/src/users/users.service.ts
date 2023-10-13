import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/users.schema';
// interfaces
import { CreateUserDto } from 'src/dto/users/createUser.dto';

@Injectable()
export class UsersService {
  async findAll() {
    return await this.UserModel.find().exec();
  }
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async findByEmail(email: string) {
    return await this.UserModel.findOne({ email }).exec();
  }

  async create(createUser: CreateUserDto) {
    const newUser = new this.UserModel(createUser);
    return await newUser.save();
  }
}
