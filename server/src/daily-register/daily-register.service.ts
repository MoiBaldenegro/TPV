import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDailyRegisterDto } from 'src/dto/dailyRegister/createDailyregister.dto';
import { DailyRegister } from 'src/schemas/dailyRegister/createDailyRegister';
import { User } from 'src/schemas/users.schema';

@Injectable()
export class DailyRegisterService {
  constructor(
    @InjectModel(DailyRegister.name)
    private dailyRegisterModel: Model<DailyRegister>,
    @InjectModel(User.name) // Anotación separada para el modelo User
    private userModel: Model<User>,
  ) {}

  async create(body: CreateDailyRegisterDto) {
    const actuallyUser = await this.userModel.findById(body.userId);
    if (!actuallyUser) {
      throw new NotFoundException('No se encontro el usuario');
    }

    if (actuallyUser && !actuallyUser.dailyRegister) {
      const dataDate = new Date().toTimeString();
      const dataRegister = { userId: body.userId, firstTime: dataDate };
      const newRegister = new this.dailyRegisterModel(dataRegister);
      const registerEntry = await newRegister.save();
      const updateUser = await this.userModel.findByIdAndUpdate(
        actuallyUser._id,
        {
          dailyRegister: registerEntry._id,
        },
      );
      if (!updateUser) {
        throw new NotFoundException('No se pudo actualizar el usuario');
      }
      return updateUser;
    }
    if (
      actuallyUser &&
      actuallyUser.dailyRegister &&
      actuallyUser.dailyRegister.firstTime &&
      !actuallyUser.dailyRegister.secondTime
    ) {
      const dataDate = new Date().toTimeString();
      const dataRegister = { userId: body.userId, secondTime: dataDate };
      const updatedRegister = await this.dailyRegisterModel.findByIdAndUpdate(
        actuallyUser.dailyRegister,
        dataRegister,
        { new: true },
      );
      if (!updatedRegister) {
        throw new NotFoundException('No se pudo actualizar el registro');
      }
      return updatedRegister;
    }
    throw new NotFoundException('Fuera de caso');
  }
}
