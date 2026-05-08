import { Controller, Get, Patch, Param, Query, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { NotificationService } from './notification.service';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getNotifications(
    @Req() req,
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
  ) {
    return this.notificationService.getNotifications(
      req.user.userId,
      Number(page) || 1,
      Number(pageSize) || 20,
    );
  }

  @Get('unread-count')
  getUnreadCount(@Req() req) {
    return this.notificationService.getUnreadCount(req.user.userId);
  }

  @Patch('read-all')
  markAllAsRead(@Req() req) {
    return this.notificationService.markAllAsRead(req.user.userId);
  }

  @Patch(':id/read')
  markAsRead(@Req() req, @Param('id') id: string) {
    return this.notificationService.markAsRead(req.user.userId, id);
  }
}
