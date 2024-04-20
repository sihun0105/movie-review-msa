import { USER_PACKAGE_NAME } from '@app/common/protobuf';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserService } from './user.service';
import { UserController } from './user.controller';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, '../../../../proto/user.proto'),
          package: USER_PACKAGE_NAME,
          url:
            process.env.NODE_ENV === 'production'
              ? 'host.docker.internal:50052'
              : '0.0.0.0:50052',
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
