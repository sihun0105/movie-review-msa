import { NestFactory } from '@nestjs/core';
import { DatabaseModule } from './database.module';

async function bootstrap() {
  const app = await NestFactory.create(DatabaseModule);
  await app.listen(3002);
}
bootstrap();
