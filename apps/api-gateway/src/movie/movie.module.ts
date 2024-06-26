import { MOVIE_PACKAGE_NAME } from '@app/common/protobuf';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MovieController } from './movie.controller';
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
          url:
            process.env.NODE_ENV === 'production'
              ? 'host.docker.internal:50054'
              : '0.0.0.0:50054',
        },
      },
    ]),
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
