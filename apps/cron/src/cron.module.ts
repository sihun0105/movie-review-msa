import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MOVIE_PACKAGE_NAME } from '@app/common';
import { join } from 'path';

@Module({
  imports: [
    ScheduleModule.forRoot(),
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
  providers: [CronService],
})
export class CronModule {}
