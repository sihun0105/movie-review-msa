import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AnalyticsAdminGuard } from './analytics-admin.guard';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
@UseGuards(JwtAuthGuard, AnalyticsAdminGuard)
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('summary')
  getSummary() {
    return this.analyticsService.getSummary();
  }
}
