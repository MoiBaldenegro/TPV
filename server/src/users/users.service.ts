import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/users.schema';

// interfaces
import { CreateUserDto } from 'src/dto/users/createUser.dto';
import { UpdateUserDto } from 'src/dto/users/updateUserDto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async findAll() {
    return await this.UserModel.find()
      .populate({
        path: 'role',
        populate: [
          {
            path: 'departament',
          },
          {
            path: 'role',
          },
        ],
      })
      .populate({
        path: 'tables',
      })
      .populate({
        path: 'dailyRegister',
      });
  }

  async findByEmail(email: string) {
    return await this.UserModel.findOne({ email })
      .populate({
        path: 'role',
        populate: [
          {
            path: 'departament',
          },
          {
            path: 'role',
          },
        ],
      })
      .populate({
        path: 'tables',
      });
  }

  async findByEmployeeNumber(employeeNumber: number) {
    return await this.UserModel.findOne({ employeeNumber })
      .populate({
        path: 'role',
        populate: [
          {
            path: 'departament',
          },
          {
            path: 'role',
          },
        ],
      })
      .populate({
        path: 'tables',
        populate: [
          {
            path: 'bill',
          },
        ],
      });
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

  async update(id: any, body: any) {
    return this.UserModel.findByIdAndUpdate(id, body, { new: true });
  }

  async cleanTables() {
    return await this.UserModel.updateMany({}, { $set: { tables: [] } });
  }
  async resetDailyRegister() {
    return await this.UserModel.updateMany(
      {},
      { $set: { dailyRegister: null } },
    );
  }
}
