import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createDepartamentDto } from 'src/dto/usuarios/departaments/createDepartamentsDto';
import { updateDepartamentDto } from 'src/dto/usuarios/departaments/updateDepartamentsDto';
import { Departament } from 'src/schemas/usuarios/departaments.Dto';

@Injectable()
export class DepartamentsService {
  constructor(
    @InjectModel(Departament.name) private departamentModel: Model<Departament>,
  ) {}

  async findAll() {
    return await this.departamentModel.find();
  }

  async findOne(id: string) {
    return await this.departamentModel.findById(id);
  }

  async create(body: createDepartamentDto) {
    const newDepartament = new this.departamentModel(body);
    return await newDepartament.save();
  }

  async delete(id: string) {
    return await this.departamentModel.findByIdAndDelete(id);
  }

  async update(id: string, body: updateDepartamentDto) {
    return await this.departamentModel.findByIdAndUpdate(id, body, {
      new: true,
    });
  }
}
