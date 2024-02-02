import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MachineIdentifierService {
  generateAndSaveIdentifier() {
    console.log('FUNCIONA COMO PEDRADA!!!!');
    console.log('FUNCIONA COMO PEDRADA!!!!');
    console.log('FUNCIONA COMO PEDRADA!!!!');
    const uniqueCode = 'codigoUnico'; // Puedes usar algún método para generar un código único
    const fileContent = `Identificador de máquina: ${uniqueCode}`;

    // Especificar la ruta y el nombre del archivo
    const filePath = path.join(__dirname, 'machineIdentifier.txt');

    // Escribir el contenido en el archivo
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error('Error al crear el archivo:', err);
      } else {
        console.log('Archivo creado exitosamente.');
      }
    });
  }
}
