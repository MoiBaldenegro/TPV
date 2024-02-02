import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AppModule } from './app.module';
import { MachineIdentifierService } from './machine-identifier/machine-identifier.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración del CORS y pipes global
  app.enableCors({
    origin: [
      'https://tomate-pos.vercel.app',
      'https://tomate-ksuxm5zwf-tomatepvs-projects.vercel.app',
      'http://localhost:5173',
    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });
  app.useGlobalPipes(new ValidationPipe());

  // Crear el identificador de la máquina
  const machineIdentifierService = app.get(MachineIdentifierService);
  machineIdentifierService.generateAndSaveIdentifier();

  // Iniciar la aplicación
  await app.listen(8000);
}
bootstrap();
