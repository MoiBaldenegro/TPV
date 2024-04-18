import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';

@Injectable()
export class CronService {
  constructor() {
    this.initializeCronJobs();
  }

  private initializeCronJobs() {
    // Ejecutar una tarea cada minuto
    cron.schedule('* * * * *', () => {
      console.log('Esta tarea se ejecuta cada minuto');
    });

    // Ejecutar una tarea a las 12 PM cada día
    cron.schedule('0 12 * * *', () => {
      console.log('Esta tarea se ejecuta a las 12 PM cada día');
    });

    // Ejecutar una tarea a las 8 AM de lunes a viernes
    cron.schedule('0 8 * * 1-5', () => {
      console.log('Esta tarea se ejecuta a las 8 AM de lunes a viernes');
    });
  }
}
