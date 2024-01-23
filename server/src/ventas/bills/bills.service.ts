import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ClientSession } from 'mongoose';
import { CreateBillDto } from 'src/dto/ventas/bills/createBill.Dto';
import { UpdateBillDto } from 'src/dto/ventas/bills/updateBill.Dto';
import { Bills, BillsDocument } from 'src/schemas/ventas/bills.schema';

@Injectable()
export class BillsService {
  constructor(
    @InjectModel(Bills.name) private billsModel: Model<BillsDocument>,
  ) {}

  async findAll() {
    return await this.billsModel.find();
  }

  async findOne(id: string) {
    return await this.billsModel.findById(id);
  }
  async create(createBill: CreateBillDto) {
    try {
      // Obtener el último documento insertado ordenado por fecha de creación
      const lastBill = await this.billsModel
        .findOne({})
        .sort({ createdAt: -1 })
        .exec();

      // Calcular el siguiente billCode
      const nextBillCode = lastBill ? lastBill.billCode + 1 : 1;

      // Crear la nueva factura con el billCode calculado
      const billToCreate = new this.billsModel({
        ...createBill,
        billCode: nextBillCode,
      });

      // Guardar la nueva factura en la base de datos
      await billToCreate.save();

      return billToCreate;
    } catch (error) {
      throw error;
    }
  }

  /*
  async create(createBill: CreateBillDto) {
    const session = await this.billsModel.startSession();
    session.startTransaction();

    try {
      // Obtener el valor actual del contador y formatear el billCode
      const billCodeCounter = await this.getNextBillCodeCounter(session);
      const formattedBillCode = this.formatBillCode(billCodeCounter);

      // Incrementar el contador en la base de datos
      await this.incrementBillCodeCounter(session);

      // Crear la nueva factura con el billCode formateado
      const billToCreate = new this.billsModel({
        ...createBill,
        billCode: formattedBillCode,
      });

      await billToCreate.save({ session });

      await session.commitTransaction();
      session.endSession();

      return billToCreate;
    } catch (error) {
      await session.abortTransaction();
      session.endSession();

      throw error;
    }
  }
 */
  async delete(id: string) {
    return await this.billsModel.findByIdAndDelete(id);
  }

  async update(id: string, updatedBill: UpdateBillDto) {
    return await this.billsModel.findByIdAndUpdate(id, updatedBill, {
      new: true,
    });
  }
  /*

  async getNextBillCodeCounter(session?: ClientSession): Promise<number> {
    const result = await this.billsModel.findOneAndUpdate(
      {},
      { $inc: { billCodeCounter: 1 } },
      { new: true, upsert: true, select: 'billCodeCounter', session },
    );

    return result ? result.billCodeCounter : 1;
  }

  async incrementBillCodeCounter(session?: ClientSession): Promise<void> {
    await this.billsModel.updateOne(
      {},
      { $inc: { billCodeCounter: 1 } },
      { session },
    );
  }

  private formatBillCode(counter: number): string {
    // Formatear el contador como "001"
    return counter.toString().padStart(3, '0');
  }
  */
}
