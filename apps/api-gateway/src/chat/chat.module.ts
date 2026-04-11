import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { CHAT_PACKAGE_NAME } from '@app/common/protobuf';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CHAT_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: 'chat',
          protoPath: join(__dirname, '../../../../proto/chat.proto'),
          url: process.env.CHAT_GRPC_URL || '0.0.0.0:50057',
        },
      },
    ]),
  ],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
