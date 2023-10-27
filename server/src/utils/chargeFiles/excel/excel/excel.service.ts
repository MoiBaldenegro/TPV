import { Injectable } from '@nestjs/common';
import * as xlsx from "xlsx";

@Injectable()
export class ExcelService {

    async processExcel(file: any) {
        try {
            const workbook = xlsx.read(file.buffer, { type: 'buffer' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = xlsx.utils.sheet_to_json(sheet);
            return data;
        } catch (error) {
            console.error('Error al procesar el archivo Excel:', error);
            throw new Error('Error al procesar el archivo Excel');
        }
    }
    

}
