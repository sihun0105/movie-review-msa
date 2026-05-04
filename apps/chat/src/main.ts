import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { ChatModule } from './chat.module';
import { CHAT_PACKAGE_NAME } from '@app/common/protobuf';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, LogLevel } from '@nestjs/common';
import { join } from 'path';

const logLevels: LogLevel[] =
  process.env.NODE_ENV === 'production'
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'debug', 'verbose'];

async function bootstrap() {
  const grpcApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    ChatModule,
    {
      logger: logLevels,
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../chat.proto'),
        package: CHAT_PACKAGE_NAME,
        url: `0.0.0.0:${process.env.CHAT_GRPC_PORT || '50057'}`,
      },
    },
  );

  const httpApp = await NestFactory.create(ChatModule, { logger: logLevels });
  httpApp.useWebSocketAdapter(new IoAdapter(httpApp));

  await grpcApp.listen();
  await httpApp.listen(Number(process.env.CHAT_WS_PORT) || 3031);

  const logger = new Logger('Bootstrap');
  logger.log(`Chat gRPC service is running on: 0.0.0.0:${process.env.CHAT_GRPC_PORT || '50057'}`);
  logger.log(`Chat WebSocket service is running on: http://localhost:${process.env.CHAT_WS_PORT || '3031'}`);
}

bootstrap();
