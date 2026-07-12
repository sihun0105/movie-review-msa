import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AnalyticsService } from './analytics.service';

@Injectable()
export class UserActivityInterceptor implements NestInterceptor {
  private readonly logger = new Logger(UserActivityInterceptor.name);

  constructor(private readonly analyticsService: AnalyticsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();
    const userId = Number(request.user?.userId);
    return next.handle().pipe(
      tap(() => {
        if (!userId) return;
        void this.analyticsService.touchUser(userId).catch((error) => {
          this.logger.warn(`Failed to update activity for user ${userId}`, error);
        });
      }),
    );
  }
}
