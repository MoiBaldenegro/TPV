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
      const newRegister = new this.dailyRegisterModel(body);
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
    console.log('Ya se creo este horario');
  }
}
