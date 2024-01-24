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
} from 'node-thermal-printer'; // Importa las clases específicas

@Controller('print')
export class PrintController {
  @Post('ticket')
  async imprimirTicket(@Body() data: any): Promise<string> {
    // Ejecutar todos los comandos. Devuelve éxito o lanza un error en caso de fallo
    try {
      const printer = new ThermalPrinter({
        type: PrinterTypes.EPSON, // Ajusta según tu tipo de impresora
        interface: 'tcp://192.168.1.88', // Nombre o IP de tu impresora
        characterSet: CharacterSet.SLOVENIA, // Configura según tus necesidades
        removeSpecialCharacters: false,
      });

      // Generar contenido del ticket
      const { items, total } = data;
      printer.alignCenter();
      printer.print('=== Ticket de Venta ===\n');

      items.forEach((item) => {
        printer.print(`${item.name} x${item.quantity} $${item.price}\n`);
      });

      printer.print(`Total: $${total}\n`);
      printer.cut();
      printer.execute();

      return 'Ticket impreso correctamente';
    } catch (error) {
      throw new HttpException(
        'Error al imprimir el ticket',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
// new commit
