import { JwtStrategy } from '@app/common/guards/jwtauth/jwt.strategy';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';
import { ReplyModule } from './reply/reply.module';
import { UserModule } from './user/user.module';
import { SentryModule } from '@sentry/nestjs/setup';

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
    SentryModule.forRoot(),
    AuthModule,
    UserModule,
    ReplyModule,
    MovieModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
