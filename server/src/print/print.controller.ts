import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
} from 'node-thermal-printer';
import * as sharp from 'sharp';

@Controller('print')
export class PrintController {
  @Post('ticket')
  async imprimirTicket(@Body() data: any): Promise<string> {
    const date = new Date().toDateString();
    try {
      // Crear instancia de la impresora térmica
      const printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: 'tcp://192.168.1.88',
        characterSet: CharacterSet.SLOVENIA,
        removeSpecialCharacters: false,
        width: 42,
      });
      printer.alignCenter();

      /* DISEÑO DE TICKET */
      await printer.printImage('./src/assets/icon/TomateTaqueria.png');

      printer.println('');

      printer.alignLeft();
      printer.println('TOMATE TAQUERIA SA DE CV');
      printer.println('Av. Chapultepec 361-A');
      printer.println('Col. Americana, Guadalajara, Jalisco.');
      printer.println('Whatsapp: 333-446-5374   RFC: TTA200827EW2');

      printer.println('');

      printer.println(`Fecha ${date}`);
      printer.println('Usuario: 1016 Moises Baldenegro');

      printer.println('');

      printer.println('Restaurante');
      printer.leftRight('Cuenta: 000', 'Nota: 00');
      printer.println('Folio: 000000');

      const tableConfig: {
        text: string;
        align?: 'LEFT' | 'CENTER' | 'RIGHT';
        width?: number;
        cols?: number;
        bold?: boolean;
      }[] = [
        { text: '000', align: 'LEFT', width: 0.075 },
        { text: 'Nombre del product', align: 'LEFT', width: 0.45 },
        { text: '$0,000.00', align: 'LEFT', width: 0.22 },
        { text: '$0,000.00', align: 'LEFT', width: 0.22 },
      ];

      // Imprimir la tabla
      printer.tableCustom(tableConfig);

      // Cortar el papel
      printer.cut();

      // Otros comandos de impresión según sea necesario

      // ...

      // Ejecutar todos los comandos
      printer.execute();

      return 'Ticket impreso correctamente';
    } catch (error) {
      // Capturar y manejar cualquier error durante la impresión
      throw new HttpException(
        'Error al imprimir el ticket',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
