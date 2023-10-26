import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/schemas/catalogo/categories.schema';
import * as xlsx from "xlsx";

@Injectable()
export class ExcelService {
    constructor(@InjectModel(Category.name) private excelModel : Model <Category>){}

    async processExcel (file : any){
        const workbook = xlsx.read(file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);
            return data;

    }

}
