import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://tomate-pos.vercel.app/', 'https://tomate-ksuxm5zwf-tomatepvs-projects.vercel.app/', "http://localhost:5173/"],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });
  
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8000);
}
bootstrap();
