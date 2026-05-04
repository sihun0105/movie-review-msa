import { NestFactory } from '@nestjs/core';
import { MATCH_PACKAGE_NAME } from '@app/common/protobuf';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, LogLevel } from '@nestjs/common';
import { join } from 'path';
import { MatchModule } from './match.module';

const logLevels: LogLevel[] =
  process.env.NODE_ENV === 'production'
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'debug', 'verbose'];

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MatchModule,
    {
      logger: logLevels,
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../match.proto'),
        package: MATCH_PACKAGE_NAME,
        url: `0.0.0.0:${process.env.MATCH_GRPC_PORT || '50059'}`,
      },
    },
  );

  await app.listen();
  new Logger('Bootstrap').log(`Match is running on: 0.0.0.0:${process.env.MATCH_GRPC_PORT || '50059'}`);
}

bootstrap();
