import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { ChatModule } from './chat.module';

async function bootstrap() {
  const app = await NestFactory.create(ChatModule);
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(3031);
}
bootstrap();
