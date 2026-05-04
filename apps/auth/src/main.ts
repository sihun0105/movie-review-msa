import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, LogLevel } from '@nestjs/common';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from '@app/common/protobuf';

const logLevels: LogLevel[] =
  process.env.NODE_ENV === 'production'
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'debug', 'verbose'];

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      logger: logLevels,
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../auth.proto'),
        package: AUTH_PACKAGE_NAME,
        url: `0.0.0.0:${process.env.AUTH_GRPC_PORT || '50051'}`,
      },
    },
  );
  await app.listen();
  new Logger('Bootstrap').log(`Auth is running on: 0.0.0.0:${process.env.AUTH_GRPC_PORT || '50051'}`);
}

bootstrap();
