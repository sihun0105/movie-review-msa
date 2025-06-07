import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ARTICLE_PACKAGE_NAME } from '@app/common/protobuf';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ARTICLE_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, '../../../../proto/article.proto'),
          package: ARTICLE_PACKAGE_NAME,
          url:
            process.env.NODE_ENV === 'production'
              ? 'host.docker.internal:50055'
              : '0.0.0.0:50055',
        },
      },
    ]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
