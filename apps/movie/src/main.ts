import { NestFactory } from '@nestjs/core';
import { MovieModule } from './movie.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MOVIE_PACKAGE_NAME } from '@app/common/protobuf';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MovieModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../movie.proto'),
        package: MOVIE_PACKAGE_NAME,
        url: `0.0.0.0:50054`,
      },
    },
  );
  await app.listen();
  console.log(`Movie is running on:0.0.0.0:50054`);
}
bootstrap();
