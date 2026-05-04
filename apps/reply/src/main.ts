import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, LogLevel } from '@nestjs/common';
import { join } from 'path';
import { REPLY_PACKAGE_NAME } from '@app/common/protobuf';
import { ReplyModule } from './reply.module';

const logLevels: LogLevel[] =
  process.env.NODE_ENV === 'production'
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'debug', 'verbose'];

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ReplyModule,
    {
      logger: logLevels,
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../reply.proto'),
        package: REPLY_PACKAGE_NAME,
        url: `0.0.0.0:${process.env.REPLY_GRPC_PORT || '50053'}`,
      },
    },
  );
  await app.listen();
  new Logger('Bootstrap').log(`Reply is running on: 0.0.0.0:${process.env.REPLY_GRPC_PORT || '50053'}`);
}

bootstrap();
