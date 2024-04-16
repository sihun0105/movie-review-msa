import { REPLY_PACKAGE_NAME } from '@app/common/protobuf';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: REPLY_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, '../../../../proto/reply.proto'),
          package: REPLY_PACKAGE_NAME,
          url: `host.docker.internal:50053`,
        },
      },
    ]),
  ],
  controllers: [ReplyController],
  providers: [ReplyService],
})
export class ReplyModule {}
