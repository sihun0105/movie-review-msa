import { JwtStrategy } from '@app/common/guards/jwtauth/jwt.strategy';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';
import { ReplyModule } from './reply/reply.module';
import { UserModule } from './user/user.module';
import { SentryModule } from '@sentry/nestjs/setup';
import { ArticleModule } from './article/article.module';
import { MatchModule } from './match/match.module';
import { ChatModule } from './chat/chat.module';
import { NotificationModule } from './notification/notification.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserActivityInterceptor } from './analytics/user-activity.interceptor';

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
    ArticleModule,
    MatchModule,
    ChatModule,
    NotificationModule,
    AnalyticsModule,
  ],
  controllers: [],
  providers: [
    JwtStrategy,
    { provide: APP_INTERCEPTOR, useClass: UserActivityInterceptor },
  ],
})
export class AppModule {}
