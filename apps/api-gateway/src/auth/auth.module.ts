import { AUTH_PACKAGE_NAME } from '@app/common';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTH_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, '../../../../proto/auth.proto'),
          package: AUTH_PACKAGE_NAME,
          url: `host.docker.internal:50051`,
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
