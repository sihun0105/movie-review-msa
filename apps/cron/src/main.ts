import { NestFactory } from '@nestjs/core';
import { CronModule } from './cron.module';

async function bootstrap() {
  const app = await NestFactory.create(CronModule);
  await app.listen(3001);
  console.log(`Cron is running on:0.0.0.0:50051`);
}

bootstrap();
