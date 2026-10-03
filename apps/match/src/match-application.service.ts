import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import {
  ApplicationResponse,
  ApplyToMatchRequest,
  CommonResponse,
  GetMatchApplicationsRequest,
  GetMyApplicationsRequest,
  MatchApplicationsResponse,
  UpdateApplicationStatusRequest,
} from '@app/common/protobuf';
import { formatMatchApplication } from './match.formatter';
import { hasAvailableSeat } from './match-capacity';
import { isGenderEligible } from './match-gender-condition';
import { MatchChatService } from './match-chat.service';
import { MatchApplicationQueryService } from './match-application-query.service';

@Injectable()
export class MatchApplicationService {
  private readonly logger = new Logger(MatchApplicationService.name);

  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly matchChat: MatchChatService,
    private readonly query: MatchApplicationQueryService,
  ) {}

  async applyToMatch(request: ApplyToMatchRequest): Promise<CommonResponse> {
    const { matchId, applicantUserno, applicantName, message } = request;
    this.logger.log(
      `applyToMatch matchId=${matchId} applicant=${applicantUserno}`,
    );

    const matchPost = await this.prisma.matchPost.findFirst({
      where: { id: matchId, deletedAt: null },
      include: {
        _count: {
          select: { MatchApplication: { where: { status: 'accepted' } } },
        },
      },
    });

    if (!matchPost) throw new NotFoundException('Match post not found');
    if (matchPost.userno === applicantUserno) {
      throw new BadRequestException('You cannot apply to your own match post');
    }
    if (
      !hasAvailableSeat(
        matchPost._count.MatchApplication,
        matchPost.maxParticipants,
      )
    ) {
      throw new BadRequestException('Match post is already full');
    }

    const applicant = await this.prisma.user.findUnique({
      where: { id: applicantUserno },
      select: { gender: true },
    });
    if (!isGenderEligible(matchPost.genderCondition, applicant?.gender)) {
      throw new BadRequestException(
        'Applicant does not meet the gender condition',
      );
    }

    const existingApplication = await this.prisma.matchApplication.findFirst({
      where: { matchPostId: matchId, applicantUserno },
    });
    if (existingApplication) {
      throw new BadRequestException(
        'You have already applied to this match post',
      );
    }

    await this.prisma.matchApplication.create({
      data: {
        matchPostId: matchId,
        applicantUserno,
        applicantName,
        message,
        status: 'pending',
      },
    });

    await this.prisma.notification
      .create({
        data: {
          userId: matchPost.userno,
          type: 'match_apply',
          title: '새로운 매칭 신청',
          body: `${applicantName}님이 "${matchPost.title}"에 신청했습니다.`,
          targetId: matchId,
        },
      })
      .catch(() => {});

    return { success: true, message: 'Application submitted successfully' };
  }

  async getMatchApplications(
    request: GetMatchApplicationsRequest,
  ): Promise<MatchApplicationsResponse> {
    const { matchId, userno } = request;

    const matchPost = await this.prisma.matchPost.findFirst({
      where: { id: matchId, deletedAt: null },
    });
    if (!matchPost) throw new NotFoundException('Match post not found');
    if (matchPost.userno !== userno) return { applications: [] };

    const applications = await this.prisma.matchApplication.findMany({
      where: { matchPostId: matchId },
      include: { User: { select: { gender: true } } },
      orderBy: { createdAt: 'desc' },
    });

    return { applications: applications.map(formatMatchApplication) };
  }

  async updateApplicationStatus(
    request: UpdateApplicationStatusRequest,
  ): Promise<ApplicationResponse> {
    const { matchId, applicationId, status, userno } = request;
    this.logger.log(
      `updateApplicationStatus match=${matchId} app=${applicationId} status=${status} userId=${userno}`,
    );

    const matchPost = await this.prisma.matchPost.findFirst({
      where: { id: matchId, deletedAt: null },
    });
    if (!matchPost) throw new NotFoundException('Match post not found');
    if (matchPost.userno !== userno) {
      throw new ForbiddenException(
        'You can only manage applications for your own posts',
      );
    }

    const application = await this.prisma.matchApplication.findFirst({
      where: { id: applicationId, matchPostId: matchId },
    });
    if (!application) throw new NotFoundException('Application not found');
    if (application.status !== 'pending') {
      throw new BadRequestException('Application has already been processed');
    }

    if (status === 'accepted') {
      const acceptedCount = await this.prisma.matchApplication.count({
        where: { matchPostId: matchId, status: 'accepted' },
      });
      if (!hasAvailableSeat(acceptedCount, matchPost.maxParticipants)) {
        throw new BadRequestException('Match post is already full');
      }
    }

    await this.prisma.matchApplication.update({
      where: { id: applicationId },
      data: { status: status as any },
    });

    let chatRoomId = '';
    let message = '';
    if (status === 'accepted') {
      chatRoomId = await this.matchChat.createRoom(
        matchId,
        matchPost.userno,
        application.applicantUserno,
      );
      message = 'Application accepted successfully. Chat room created.';
    } else if (status === 'rejected') {
      message = 'Application rejected successfully.';
    }

    return { success: true, message, chatRoomId };
  }

  async getMyApplications(
    request: GetMyApplicationsRequest,
  ): Promise<MatchApplicationsResponse> {
    return this.query.getMine(request);
  }

  async getMyApplicationStatus(request: { matchId: string; userno: number }) {
    return this.query.getStatus(request);
  }
}
