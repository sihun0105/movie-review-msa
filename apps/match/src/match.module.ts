import { Module } from '@nestjs/common';
import { PrismaModule } from '@app/prisma';
import { UtilsModule } from '@app/utils';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CHAT_PACKAGE_NAME } from '@app/common/protobuf';
import { join } from 'path';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';

@Module({
  imports: [
    PrismaModule,
    UtilsModule,
    ClientsModule.register([
      {
        name: 'CHAT_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: CHAT_PACKAGE_NAME,
          protoPath: join(__dirname, '../../../../proto/chat.proto'),
          url: '0.0.0.0:50057',
        },
      },
    ]),
  ],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
