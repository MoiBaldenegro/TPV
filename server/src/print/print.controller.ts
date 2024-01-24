import { Body, Controller, Post } from '@nestjs/common';
import * as printer from 'printer';

@Controller('print')
export class PrintController {
    @Post()
  async print(@Body() printRequest: { content: string; printerName: string }) {
    const { content, printerName } = printRequest;

    if (!content || !printerName) {
      throw new Error('Se requiere contenido y nombre de impresora.');
    }

    const printers = printer.getPrinters();
    const selectedPrinter = printers.find(p => p.name === printerName);

    if (!selectedPrinter) {
      throw new Error('Impresora no encontrada.');
    }

    const jobFromContent = {
      data: content,
      type: 'RAW',
      options: {
        media: 'A4',
        'fit-to-page': true,
      },
    };

    return new Promise((resolve, reject) => {
      printer.printDirect({
        data: jobFromContent.data,
        type: jobFromContent.type,
        success: (jobId) => {
          console.log(`Impresión exitosa. Trabajo ID: ${jobId}`);
          resolve({ success: true, jobId });
        },
        error: (error) => {
          console.error('Error de impresión:', error);
          reject({ error: 'Error de impresión.' });
        },
      }, selectedPrinter);
    });
  }

}
