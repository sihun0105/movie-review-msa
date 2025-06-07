import { NestFactory } from '@nestjs/core';
import { ArticleModule } from './article.module';
import { ARTICLE_PACKAGE_NAME } from '@app/common/protobuf';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ArticleModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../article.proto'),
        package: ARTICLE_PACKAGE_NAME,
        url: '0.0.0.0:50055',
      },
    },
  );

  await app.listen();
  console.log('article is running on:0.0.0.0:50055');
}

bootstrap();
