import { JwtStrategy } from '@app/common/guards/jwtauth/jwt.strategy';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';
import { ReplyModule } from './reply/reply.module';
import { UserModule } from './user/user.module';
import { SentryModule } from '@sentry/nestjs/setup';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ArticleModule } from './article/article.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../../uploads'),
      serveRoot: '/uploads',
    }),
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
    ArticleModule,
    MatchModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
