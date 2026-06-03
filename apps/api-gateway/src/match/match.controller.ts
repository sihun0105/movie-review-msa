import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  CreateMatchPostRequest,
  UpdateMatchPostRequest,
  ApplyToMatchRequest,
  UpdateApplicationStatusRequest,
} from '@app/common/protobuf';
import { JwtAuthGuard } from '@app/common/guards/jwtauth/jwtauth.guard';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
  private readonly logger = new Logger(MatchController.name);
  constructor(private readonly matchService: MatchService) {}

  @Get()
  async getMatchPosts(
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
    @Query('movieTitle') movieTitle: string,
    @Query('filter') filter: string,
    @Query('userno') userno: string,
  ) {
    return this.matchService.getMatchPosts({
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 10,
      movieTitle: movieTitle?.trim() || '',
      filter: filter?.trim() || '',
      userno: Number(userno) || 0,
    });
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createMatchPost(@Body() body: CreateMatchPostRequest, @Req() req) {
    const userNumber = req.user.userId;
    const userName = req.user.nickname || 'Unknown';
    this.logger.log(`createMatchPost userId=${userNumber} user=${userName}`);
    return this.matchService.createMatchPost({
      ...body,
      userno: userNumber,
      author: userName,
    });
  }

  // 특정 라우트는 :matchId 파라미터 라우트보다 반드시 먼저 선언해야 함
  @Get('my-posts')
  @UseGuards(JwtAuthGuard)
  async getMyPosts(
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    return this.matchService.getMyPosts({
      userno: userNumber,
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 10,
    });
  }

  @Get('my-applications')
  @UseGuards(JwtAuthGuard)
  async getMyApplications(
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    this.logger.debug(`getMyApplications userId=${userNumber}`);
    return this.matchService.getMyApplications({
      userno: userNumber,
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 10,
    });
  }

  @Get(':matchId')
  async getMatchPost(@Param('matchId') matchId: string) {
    return this.matchService.getMatchPost({ matchId });
  }

  @Patch(':matchId')
  @UseGuards(JwtAuthGuard)
  async updateMatchPost(
    @Param('matchId') matchId: string,
    @Body() body: UpdateMatchPostRequest,
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    return this.matchService.updateMatchPost({
      ...body,
      matchId,
      userno: userNumber,
    });
  }

  @Delete(':matchId')
  @UseGuards(JwtAuthGuard)
  async deleteMatchPost(@Param('matchId') matchId: string, @Req() req) {
    const userNumber = req.user.userId;
    return this.matchService.deleteMatchPost({
      matchId,
      userno: userNumber,
    });
  }

  @Post(':matchId/apply')
  @UseGuards(JwtAuthGuard)
  async applyToMatch(
    @Param('matchId') matchId: string,
    @Body() body: ApplyToMatchRequest,
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    const userName = req.user.nickname || 'Unknown';
    return this.matchService.applyToMatch({
      matchId,
      applicantUserno: userNumber,
      applicantName: userName,
      message: body.message,
    });
  }

  @Get(':matchId/applications')
  @UseGuards(JwtAuthGuard)
  async getMatchApplications(@Param('matchId') matchId: string, @Req() req) {
    const userNumber = req.user.userId;
    return this.matchService.getMatchApplications({
      matchId,
      userno: userNumber,
    });
  }

  @Put(':matchId/applications/:applicationId')
  @UseGuards(JwtAuthGuard)
  async updateApplicationStatus(
    @Param('matchId') matchId: string,
    @Param('applicationId') applicationId: string,
    @Body() body: UpdateApplicationStatusRequest,
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    this.logger.log(`updateApplicationStatus match=${matchId} app=${applicationId} status=${body.status} userId=${userNumber}`);
    return this.matchService.updateApplicationStatus({
      matchId,
      applicationId,
      status: body.status,
      userno: userNumber,
    });
  }

  @Get(':matchId/my-application')
  @UseGuards(JwtAuthGuard)
  async getMyApplicationStatus(@Param('matchId') matchId: string, @Req() req) {
    const userNumber = req.user.userId;
    return this.matchService.getMyApplicationStatus({
      matchId,
      userno: userNumber,
    });
  }
}
