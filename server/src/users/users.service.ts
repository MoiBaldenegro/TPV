import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/users.schema';

// interfaces
import { CreateUserDto } from 'src/dto/users/createUser.dto';
import { UpdateUserDto } from 'src/dto/users/updateUserDto';

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

  async updateSamples(id: string, body: UpdateUserDto) {
    // const sampleByte = base64.decode(body.samples); //
    console.log(body.samples);

    const updatedUser = await this.UserModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return updatedUser;
  }
}
