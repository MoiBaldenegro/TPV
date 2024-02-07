import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
} from 'node-thermal-printer';

import {
  headInfoProducts,
  productInfo,
  restaurantDetails,
  userInformation,
} from './utils/format';

@Controller('print')
export class PrintController {
  @Post('ticket')
  async printTicket(@Body() data: any): Promise<string> {
    const date = new Date().toDateString();
    const billData = data.data;

    try {
      const printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: `tcp://${data.tcp}`,
        characterSet: CharacterSet.SLOVENIA,
        removeSpecialCharacters: false,
        width: 42,
        options: {
          timeout: 10000,
        },
        // Adjust the timeout value in milliseconds
      });

      // Función para imprimir una imagen y manejar errores
      const printImage = async (imagePath: string) => {
        try {
          await printer.printImage(imagePath);
        } catch (error) {
          console.error(`Error al imprimir imagen ${imagePath}:`, error);
        }
      };

      // Inicio de la impresión
      printer.alignCenter();
      await printImage('./src/assets/icon/TomateTaqueria.png');
      printer.println('');

      printer.alignLeft();
      printer.println(restaurantDetails[0]);
      printer.println(restaurantDetails[1]);
      printer.println(restaurantDetails[2]);
      printer.println(restaurantDetails[3]);

      printer.println('');

      printer.println(`Fecha ${date}`);
      printer.println(userInformation);

      printer.println('');

      printer.alignCenter();
      printer.leftRight('Restaurante', '');

      printer.alignCenter();
      printer.bold(true);
      printer.leftRight('Cuenta:000', 'Nota:00');
      printer.leftRight('Folio: 000000', '');
      printer.bold(false);

      printer.setTextNormal();

      printer.println('');

      printer.println(headInfoProducts);
      printer.alignCenter();
      await printImage('./src/assets/icon/dividerTicket.png');

      // Simulación de productos
      for (let i = 0; i < 10; i++) {
        printer.println(productInfo);
      }

      printer.alignCenter();
      await printImage('./src/assets/icon/dividerTicket.png');

      printer.println('');

      printer.alignLeft();
      printer.println('11 Productos');

      printer.println('');

      printer.alignCenter();
      printer.leftRight('Subtotal', '$0,000.00');
      printer.leftRight('Subtotal', '10% -$0,000.00');
      printer.leftRight('Subtotal', '10% -$0,000.00');
      printer.leftRight('Subtotal', '10% -$0,000.00');

      printer.println('');
      printer.leftRight('Total por pagar', '$0,000.00');
      printer.setTextNormal();
      printer.alignRight();
      printer.println('(cantidad en texto/mxn)');

      printer.println('');

      printer.alignCenter();
      printer.leftRight('Propina', '$0,000.00');

      printer.println('');

      printer.leftRight('Efectivo', '-$0,000.00');
      printer.leftRight('Tarjeta de débito', '-$0,000.00');

      printer.println('');

      printer.bold(true);
      printer.leftRight('Cambio', '$0,000.00');
      printer.bold(false);
      printer.setTextNormal();

      printer.alignRight();
      printer.println('(cantidad en texto/mxn)');

      printer.alignCenter();
      printer.leftRight('Dolar', '$00.00');

      printer.println('');

      printer.alignCenter();
      await printImage('./src/assets/icon/payIcon.png');

      printer.println('');

      printer.alignLeft();
      printer.println('Propina no incluida');

      printer.println('');

      printer.println(
        'Pago en una sola exhibición. Efectos fiscales al pago. Régimen general de ley. Personas morales.',
      );

      printer.println('');

      printer.println(
        'Si requiere factura favor de indicarle al mesero o solicitarla por whatsapp: 333-446-5374',
      );

      printer.println('');

      printer.alignCenter();
      await printImage('./src/assets/icon/dividerTicket.png');

      printer.alignCenter();
      await printImage('./src/assets/icon/footerTicket.png');

      // Cortar el papel
      printer.cut();

      // Ejecutar todos los comandos
      printer.execute();

      return 'Ticket impreso correctamente';
    } catch (error) {
      // Loguear el error y manejarlo de manera adecuada
      console.error('Error al imprimir el ticket:', error);

      // Check if the error is a Printer Error
      if (error.message === 'Printer Error') {
        // Handle Printer Error
        throw new HttpException(
          'Error al imprimir el ticket: Error en la impresora',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else {
        // Handle other errors
        throw new HttpException(
          'Error al imprimir el ticket',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Post('order')
  async printOrder(@Body() data: any): Promise<string> {
    try {
      const printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: `tcp://${data.tcp}`,
        characterSet: CharacterSet.SLOVENIA,
        removeSpecialCharacters: false,
        width: 42,
        options: {
          timeout: 10000,
        },
      });
      printer.println(userInformation);
      printer.println('');
      printer.alignCenter();
      printer.bold(true);

      data.items?.forEach((item) => {
        printer.println(item.productName);
      });

      // Cortar el papel
      printer.cut();

      // Ejecutar todos los comandos
      printer.execute();

      return 'Ticket impreso correctamente';
    } catch (error) {
      // Loguear el error y manejarlo de manera adecuada
      console.error('Error al imprimir el ticket:', error);

      // Check if the error is a Printer Error
      if (error.message === 'Printer Error') {
        // Handle Printer Error
        throw new HttpException(
          'Error al imprimir el ticket: Error en la impresora',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else {
        // Handle other errors
        throw new HttpException(
          'Error al imprimir el ticket',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
  @Post('billPrint')
  async printBillTicket(@Body() data: any): Promise<string> {
    const date = new Date().toDateString();
    console.log(data.tcp);
    try {
      const printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: `tcp://${data.tcp}`,
        characterSet: CharacterSet.SLOVENIA,
        removeSpecialCharacters: false,
        width: 42,
        options: {
          timeout: 10000,
        },
        // Adjust the timeout value in milliseconds
      });

      // Función para imprimir una imagen y manejar errores
      const printImage = async (imagePath: string) => {
        try {
          await printer.printImage(imagePath);
        } catch (error) {
          console.error(`Error al imprimir imagen ${imagePath}:`, error);
        }
      };

      // Inicio de la impresión
      printer.alignCenter();
      await printImage('./src/assets/icon/TomateTaqueria.png');
      printer.println('');

      printer.alignLeft();
      printer.println(restaurantDetails[0]);
      printer.println(restaurantDetails[1]);
      printer.println(restaurantDetails[2]);
      printer.println(restaurantDetails[3]);

      printer.println('');

      printer.println(`Fecha ${date}`);
      printer.println(userInformation);

      printer.println('');

      printer.alignCenter();
      printer.leftRight('Restaurante', '');

      printer.alignCenter();
      printer.bold(true);
      printer.leftRight('Cuenta:000', 'Nota:00');
      printer.bold(false);

      printer.setTextNormal();

      printer.println('');

      printer.println(headInfoProducts);
      printer.alignCenter();
      await printImage('./src/assets/icon/dividerTicket.png');

      // Simulación de productos
      for (let i = 0; i < 10; i++) {
        printer.println(productInfo);
      }

      printer.alignCenter();
      await printImage('./src/assets/icon/dividerTicket.png');

      printer.println('');

      printer.alignLeft();
      printer.println('11 Productos');

      printer.println('');

      printer.alignCenter();
      printer.leftRight('Subtotal', '$0,000.00');
      printer.leftRight('Subtotal', '10% -$0,000.00');
      printer.leftRight('Subtotal', '10% -$0,000.00');
      printer.leftRight('Subtotal', '10% -$0,000.00');

      printer.println('');
      printer.bold(true);
      printer.leftRight('Total por pagar', '$0,000.00');
      printer.bold(false);
      printer.setTextNormal();
      printer.alignRight();
      printer.println('(cantidad en texto/mxn)');

      printer.println('');

      printer.alignCenter();
      printer.leftRight('Dolar', '$00.00');

      printer.println('');

      printer.alignLeft();
      printer.println('Propina no incluida');

      printer.println('');

      printer.println(
        'Si requiere factura favor de indicarle al mesero o solicitarla por whatsapp: 333-446-5374',
      );

      printer.println('');

      printer.alignCenter();
      await printImage('./src/assets/icon/dividerTicket.png');

      printer.alignCenter();
      await printImage('./src/assets/icon/footerTicket.png');

      // Cortar el papel
      printer.cut();

      // Ejecutar todos los comandos
      printer.execute();

      return 'Ticket impreso correctamente';
    } catch (error) {
      // Loguear el error y manejarlo de manera adecuada
      console.error('Error al imprimir el ticket:', error);

      // Check if the error is a Printer Error
      if (error.message === 'Printer Error') {
        // Handle Printer Error
        throw new HttpException(
          'Error al imprimir el ticket: Error en la impresora',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else {
        // Handle other errors
        throw new HttpException(
          'Error al imprimir el ticket',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
