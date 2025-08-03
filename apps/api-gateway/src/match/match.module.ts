import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MATCH_PACKAGE_NAME } from '@app/common/protobuf';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MATCH_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, '../../../../proto/match.proto'),
          package: MATCH_PACKAGE_NAME,
          url:
            process.env.NODE_ENV === 'production'
              ? 'host.docker.internal:50059'
              : '0.0.0.0:50059',
        },
      },
    ]),
  ],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
