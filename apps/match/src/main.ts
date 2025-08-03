import { NestFactory } from '@nestjs/core';
import { MATCH_PACKAGE_NAME } from '@app/common/protobuf';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MatchModule } from './match.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MatchModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../match.proto'),
        package: MATCH_PACKAGE_NAME,
        url: '0.0.0.0:50059',
      },
    },
  );

  await app.listen();
  console.log('match is running on:0.0.0.0:50059');
}

bootstrap();
