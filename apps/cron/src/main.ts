import { NestFactory } from '@nestjs/core';
import { CronModule } from './cron.module';
import { Logger, LogLevel } from '@nestjs/common';

const logLevels: LogLevel[] =
  process.env.NODE_ENV === 'production'
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'debug', 'verbose'];

async function bootstrap() {
  const app = await NestFactory.create(CronModule, { logger: logLevels });
  await app.listen(3001);
  new Logger('Bootstrap').log('Cron is running on: 0.0.0.0:3001');
}

bootstrap();
