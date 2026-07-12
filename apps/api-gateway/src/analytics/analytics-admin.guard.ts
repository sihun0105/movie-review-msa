import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AnalyticsAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const userId = Number(request.user?.userId);
    const adminIds = (process.env.ANALYTICS_ADMIN_USER_IDS ?? '')
      .split(',')
      .map((value) => Number(value.trim()))
      .filter(Number.isInteger);

    if (!userId || !adminIds.includes(userId)) {
      throw new ForbiddenException('통계 접근 권한이 없습니다.');
    }
    return true;
  }
}
