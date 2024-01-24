import { Controller, Post, Body } from '@nestjs/common';
import * as printer from 'node-printer';


@Controller('print')
export class PrintController {
    @Post('ticket')
    async printTicket(@Body() content: string): Promise<{ success: boolean }> {
    try {
      const printers = printer.getPrinters();

      // Supongamos que hay al menos una impresora instalada
      const printerName = printers[0].name;

      // Imprimir el contenido en la impresora seleccionada
      printer.printDirect({
        printer: printerName,
        data: content,
        type: 'TEXT',
        success: function (jobID) {
          console.log(`Impresión exitosa. ID de trabajo: ${jobID}`);
        },
        error: function (err) {
          console.error(`Error al imprimir: ${err}`);
        },
      });

      return { success: true };
    } catch (error) {
      console.error(`Error al imprimir: ${error}`);
      return { success: false };
    }
  }
}

