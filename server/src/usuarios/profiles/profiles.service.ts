import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createProfileDto } from 'src/dto/usuarios/profiles/createProfileDto';
import { updateProfileDto } from 'src/dto/usuarios/profiles/updateProfileDto';
import { Profile } from 'src/schemas/usuarios/profiles.Schema';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name) private readonly profileModel: Model<Profile>,
  ) {}

  async findAll() {
    return await this.profileModel.find();
  }

  async findOne(id: string) {
    return await this.profileModel.findById(id);
  }

  async create(body: createProfileDto) {
    const newProfile = new this.profileModel(body);
    return await newProfile.save();
  }

  async delete(id: string) {
    return await this.profileModel.findByIdAndDelete(id);
  }

  async update(id: string, body: updateProfileDto) {
    return await this.profileModel.findByIdAndUpdate(id, body, { new: true });
  }
}
