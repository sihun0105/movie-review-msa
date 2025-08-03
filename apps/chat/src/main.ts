import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { ChatModule } from './chat.module';
import { CHAT_PACKAGE_NAME } from '@app/common/protobuf';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // gRPC 마이크로서비스 생성
  const grpcApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    ChatModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../../../proto/chat.proto'),
        package: CHAT_PACKAGE_NAME,
        url: '0.0.0.0:50057',
      },
    },
  );

  // WebSocket 서버도 유지 (기존 기능)
  const httpApp = await NestFactory.create(ChatModule);
  httpApp.useWebSocketAdapter(new IoAdapter(httpApp));

  // 두 서버 모두 시작
  await grpcApp.listen();
  await httpApp.listen(3031);

  console.log('Chat gRPC service is running on: 0.0.0.0:50057');
  console.log('Chat WebSocket service is running on: http://localhost:3031');
}

bootstrap();
