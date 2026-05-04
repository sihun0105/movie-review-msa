import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, LogLevel } from '@nestjs/common';
import { join } from 'path';
import { USER_PACKAGE_NAME } from '@app/common/protobuf';
import { UserModule } from './user.module';

const logLevels: LogLevel[] =
  process.env.NODE_ENV === 'production'
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'debug', 'verbose'];

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      logger: logLevels,
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../user.proto'),
        package: USER_PACKAGE_NAME,
        url: `0.0.0.0:${process.env.USER_GRPC_PORT || '50052'}`,
      },
    },
  );
  await app.listen();
  new Logger('Bootstrap').log(`User is running on: 0.0.0.0:${process.env.USER_GRPC_PORT || '50052'}`);
}
bootstrap();
