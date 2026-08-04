import { USER_PACKAGE_NAME } from '@app/common/protobuf';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UploadModule } from '../upload/upload.module';
import { PrismaModule } from '@app/prisma';
import { UserActivityService } from './user-activity.service';
import { UserCommentActivityService } from './user-comment-activity.service';
@Module({
  imports: [
    UploadModule,
    PrismaModule,
    ClientsModule.register([
      {
        name: USER_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, '../../../../proto/user.proto'),
          package: USER_PACKAGE_NAME,
          url: process.env.USER_GRPC_URL || '0.0.0.0:50052',
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserActivityService, UserCommentActivityService],
})
export class UserModule {}
