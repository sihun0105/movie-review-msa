import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
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
  constructor(private readonly matchService: MatchService) {}

  @Get()
  async getMatchPosts(
    @Query('page') page: string,
    @Query('pageSize') pageSize: string,
  ) {
    return this.matchService.getMatchPosts({
      page: Number(page) || 1,
      pageSize: Number(pageSize) || 10,
    });
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createMatchPost(@Body() body: CreateMatchPostRequest, @Req() req) {
    const userNumber = req.user.userId;
    const userName = req.user.nickname || 'Unknown';
    console.log('Creating match post with user:', userName);
    console.log('Request body:', body);
    console.log('User number:', userNumber);
    return this.matchService.createMatchPost({
      ...body,
      userno: userNumber,
      author: userName,
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

  @Patch(':matchId/applications/:applicationId')
  @UseGuards(JwtAuthGuard)
  async updateApplicationStatus(
    @Param('matchId') matchId: string,
    @Param('applicationId') applicationId: string,
    @Body() body: UpdateApplicationStatusRequest,
    @Req() req,
  ) {
    const userNumber = req.user.userId;
    return this.matchService.updateApplicationStatus({
      matchId,
      applicationId,
      status: body.status,
      userno: userNumber,
    });
  }
}
