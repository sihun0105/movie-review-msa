import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { REPLY_PACKAGE_NAME } from '@app/common';
import { ReplyModule } from './reply.module';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ReplyModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../reply.proto'),
        package: REPLY_PACKAGE_NAME,
        url: `0.0.0.0:50053`,
      },
    },
  );
  await app.listen();
  console.log(`is running on:0.0.0.0:50053`);
}

bootstrap();
