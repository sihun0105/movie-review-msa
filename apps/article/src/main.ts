import { NestFactory } from '@nestjs/core';
import { ArticleModule } from './article.module';
import { ARTICLE_PACKAGE_NAME } from '@app/common/protobuf';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, LogLevel } from '@nestjs/common';
import { join } from 'path';

const logLevels: LogLevel[] =
  process.env.NODE_ENV === 'production'
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'debug', 'verbose'];

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ArticleModule,
    {
      logger: logLevels,
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../article.proto'),
        package: ARTICLE_PACKAGE_NAME,
        url: `0.0.0.0:${process.env.ARTICLE_GRPC_PORT || '50055'}`,
      },
    },
  );

  await app.listen();
  new Logger('Bootstrap').log(`Article is running on: 0.0.0.0:${process.env.ARTICLE_GRPC_PORT || '50055'}`);
}

bootstrap();
