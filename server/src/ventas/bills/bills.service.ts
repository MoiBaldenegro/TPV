import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBillDto } from 'src/dto/ventas/bills/createBill.Dto';
import { UpdateBillDto } from 'src/dto/ventas/bills/updateBill.Dto';
import { Bills } from 'src/schemas/ventas/bills.schema';

@Injectable()
export class BillsService {
    constructor(@InjectModel(Bills.name) private billsModel : Model <Bills>){}

    async findAll(){
        return  await this.billsModel.find();
    }

    async findOne(id: string){
        return await this.billsModel.findById(id);
    }
    async create(createBill : CreateBillDto){
        const billCreated =  new this.billsModel(createBill);
        return await billCreated.save();
    }

    async delete(id: string){
        return await this.billsModel.findByIdAndDelete(id);
    }

    async update(id: string, updatedBill: UpdateBillDto){
        return await this.billsModel.findByIdAndUpdate(id, updatedBill, { new: true });
    }

}
