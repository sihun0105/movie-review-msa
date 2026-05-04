import { NestFactory } from '@nestjs/core';
import { MovieModule } from './movie.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, LogLevel } from '@nestjs/common';
import { join } from 'path';
import { MOVIE_PACKAGE_NAME } from '@app/common/protobuf';

const logLevels: LogLevel[] =
  process.env.NODE_ENV === 'production'
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'debug', 'verbose'];

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MovieModule,
    {
      logger: logLevels,
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../movie.proto'),
        package: MOVIE_PACKAGE_NAME,
        url: `0.0.0.0:${process.env.MOVIE_GRPC_PORT || '50054'}`,
      },
    },
  );
  await app.listen();
  new Logger('Bootstrap').log(`Movie is running on: 0.0.0.0:${process.env.MOVIE_GRPC_PORT || '50054'}`);
}
bootstrap();
