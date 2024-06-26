import { MOVIE_PACKAGE_NAME } from '@app/common/protobuf';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MovieService } from './movie.service';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: MOVIE_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, '../../../../proto/movie.proto'),
          package: MOVIE_PACKAGE_NAME,
          url: `0.0.0.0:50054`,
        },
      },
    ]),
  ],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
