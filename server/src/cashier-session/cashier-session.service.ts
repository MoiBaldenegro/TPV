import { User } from '@digitalpersona/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createCashierSessionDto } from 'src/dto/cashierSession/createCashierSession';
import { updateCashierSessionDto } from 'src/dto/cashierSession/updateCashierSession';
import { OperatingPeriodService } from 'src/operating-period/operating-period.service';
import { CashierSession } from 'src/schemas/cashierSession/cashierSession';
import { OperatingPeriod } from 'src/schemas/operatingPeriod/operatingPeriod.schema';

@Injectable()
export class CashierSessionService {
  constructor(
    @InjectModel(CashierSession.name)
    private cashierSessionModel: Model<CashierSession>,
    @InjectModel(OperatingPeriod.name)
    private readonly operatingPeriodModel: Model<OperatingPeriod>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async findAll() {
    return await this.cashierSessionModel.find();
  }

  async findOne(id: string) {
    return await this.cashierSessionModel.findById(id);
  }

  async delete(id: string) {
    return await this.cashierSessionModel.findByIdAndDelete(id);
  }

  async create(body: createCashierSessionDto) {
    console.log(body);
    const data = { ...body, startDate: new Date().toISOString() };

    // Crear nueva sesión de cajero
    const newSession = new this.cashierSessionModel(data);
    await newSession.save();

    // Obtener el último documento de operatingPeriodModel
    const updatedOperatingPeriod = await this.operatingPeriodModel
      .findOne()
      .sort({ _id: -1 });

    if (updatedOperatingPeriod && newSession._id) {
      const sellProcess = [...updatedOperatingPeriod.sellProcess, newSession];

      // Actualizar operatingPeriodModel con la nueva sesión si existe
      await this.operatingPeriodModel.findByIdAndUpdate(
        updatedOperatingPeriod._id,
        { sellProcess },
        { new: true }, // Devuelve el documento actualizado
      );
    }

    if (newSession._id) {
      console.log('por aca el log al editar el ususario');
      console.log(body.user);
      try {
        const updatedUser = await this.userModel.findByIdAndUpdate(
          body.user,
          { cashierSession: newSession._id },
          { new: true },
        );
      } catch (error) {
        throw new NotFoundException(
          'No se completo la actualizacion de usuario',
        );
      }
    }

    // Se retorna la nueva sesión creada
    return newSession;
  }

  async update(id: string, body: updateCashierSessionDto) {
    return await this.cashierSessionModel.findByIdAndUpdate(id, body, {
      new: true,
    });
  }
}
