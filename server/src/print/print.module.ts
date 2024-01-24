// src/print/print.controller.ts
import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import * as printer from 'printer';

@ApiTags('Print')
@Controller('print')
export class PrintController {
  @Post()
  @ApiOperation({ summary: 'Imprimir contenido en una impresora específica' })
  @ApiBody({ type: PrintRequestDto })
  @ApiResponse({ status: 200, description: 'Impresión exitosa' })
  @ApiResponse({ status: 400, description: 'Datos de impresión inválidos' })
  @ApiResponse({ status: 404, description: 'Impresora no encontrada' })
  @ApiResponse({ status: 500, description: 'Error de impresión' })
  async print(@Body() printRequest: PrintRequestDto) {
    const { content, printerName } = printRequest;

    if (!content || !printerName) {
      throw new HttpException('Se requiere contenido y nombre de impresora.', HttpStatus.BAD_REQUEST);
    }

    const printers = printer.getPrinters();
    const selectedPrinter = printers.find(p => p.name === printerName);

    if (!selectedPrinter) {
      throw new HttpException('Impresora no encontrada.', HttpStatus.NOT_FOUND);
    }

    const printOptions = {
      media: 'A4',
      'fit-to-page': true,
      // Otras opciones según sea necesario
    };

    try {
      const jobId = await this.printDirectAsync(content, selectedPrinter, printOptions);
      return { success: true, jobId };
    } catch (error) {
      console.error('Error de impresión:', error);
      throw new HttpException('Error de impresión.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private printDirectAsync(content: string, printerInfo: printer.PrinterInfo, options: any): Promise<string> {
    return new Promise((resolve, reject) => {
      printer.printDirect({
        data: content,
        type: 'RAW',
        options,
        success: (jobId) => {
          console.log(`Impresión exitosa. Trabajo ID: ${jobId}`);
          resolve(jobId);
        },
        error: (error) => {
          console.error('Error de impresión:', error);
          reject(error);
        },
      }, printerInfo);
    });
  }
}

class PrintRequestDto {
  content: string;
  printerName: string;
}