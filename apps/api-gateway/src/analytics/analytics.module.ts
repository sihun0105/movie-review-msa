import { PrismaModule } from '@app/prisma';
import { Module } from '@nestjs/common';
import { AnalyticsAdminGuard } from './analytics-admin.guard';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';

@Module({
  imports: [PrismaModule],
  controllers: [AnalyticsController],
  providers: [AnalyticsService, AnalyticsAdminGuard],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
