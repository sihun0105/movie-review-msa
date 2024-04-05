import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RateLimitGuard implements CanActivate {
  private readonly ttl = 1 * 1000;
  private readonly limit = 10;
  private readonly buckets = new Map<
    string,
    { tokens: number; resetTime: number }
  >();

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const id = request.user.userid;
    let bucket = this.buckets.get(id);
    const currentTime = Date.now();

    if (bucket && currentTime < bucket.resetTime) {
      if (bucket.tokens > 0) {
        bucket.tokens--;
      } else {
        throw new BadRequestException('Rate limit exceeded');
      }
    } else {
      bucket = {
        tokens: this.limit - 1,
        resetTime: currentTime + this.ttl,
      };
      this.buckets.set(id, bucket);
    }

    return true;
  }
}
