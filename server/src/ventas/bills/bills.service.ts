import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBillDto } from 'src/dto/ventas/bills/createBill.Dto';
import { UpdateBillDto } from 'src/dto/ventas/bills/updateBill.Dto';
import { Bills } from 'src/schemas/ventas/bills.schema';

@Injectable()
export class BillsService {
  constructor(@InjectModel(Bills.name) private billsModel: Model<Bills>) {}

  async findAll() {
    return await this.billsModel.find();
  }

  async findOne(id: string) {
    return await this.billsModel.findById(id);
  }

  async create(createBill: CreateBillDto) {
    // Obtener el valor actual del contador y formatear el billCode
    const billCodeCounter = await this.getNextBillCodeCounter();
    const formattedBillCode = this.formatBillCode(billCodeCounter);

    // Incrementar el contador en la base de datos
    await this.incrementBillCodeCounter();

    // Crear la nueva factura con el billCode formateado
    const billToCreate = new this.billsModel({
      ...createBill,
      billCode: formattedBillCode,
    });

    return await billToCreate.save();
  }

  async delete(id: string) {
    return await this.billsModel.findByIdAndDelete(id);
  }

  async update(id: string, updatedBill: UpdateBillDto) {
    return await this.billsModel.findByIdAndUpdate(id, updatedBill, {
      new: true,
    });
  }

  async getNextBillCodeCounter(): Promise<number> {
    const result = await this.billsModel.findOneAndUpdate(
      {},
      { $inc: { billCodeCounter: 1 } },
      { new: true, upsert: true, select: 'billCodeCounter' },
    );

    return result ? result.billCodeCounter : 1;
  }

  async incrementBillCodeCounter(): Promise<void> {
    await this.billsModel.updateOne({}, { $inc: { billCodeCounter: 1 } });
  }

  private formatBillCode(counter: number): string {
    // Formatear el contador como "001"
    return counter.toString().padStart(3, '0');
  }
}
