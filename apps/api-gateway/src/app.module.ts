import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ReplyModule } from './reply/reply.module';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { JwtStrategy } from '@app/common/guards/jwtauth/jwt.strategy';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

const rabbitHost = '127.0.0.1';
const rabbitPort = '5672';
const uri = `amqp://guest:guest@${rabbitHost}:${rabbitPort}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.env.production'
          : '.env.development',
      cache: true,
      isGlobal: true,
    }),
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      useFactory: () => ({
        exchanges: [
          {
            name: 'hello',
            type: 'topic',
          },
        ],
        uri,
        connectionInitOptions: { wait: true, reject: true, timeout: 3000 },
      }),
    }),
    AuthModule,
    UserModule,
    ReplyModule,
    MovieModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
