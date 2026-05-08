import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { MySQLPrismaService } from '@app/prisma';
import {
  ApplicationResponse,
  ApplyToMatchRequest,
  ChatService,
  CommonResponse,
  GetMatchApplicationsRequest,
  GetMyApplicationsRequest,
  MatchApplicationsResponse,
  UpdateApplicationStatusRequest,
} from '@app/common/protobuf';
import { formatMatchApplication } from './match.formatter';

@Injectable()
export class MatchApplicationService implements OnModuleInit {
  private readonly logger = new Logger(MatchApplicationService.name);
  private chatService: ChatService;

  constructor(
    private readonly prisma: MySQLPrismaService,
    @Inject('CHAT_SERVICE') private readonly chatServiceClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.chatService =
      this.chatServiceClient.getService<ChatService>('ChatService');
  }

  async applyToMatch(request: ApplyToMatchRequest): Promise<CommonResponse> {
    const { matchId, applicantUserno, applicantName, message } = request;
    this.logger.log(`applyToMatch matchId=${matchId} applicant=${applicantUserno}`);

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
    if (matchPost._count.MatchApplication >= matchPost.maxParticipants) {
      throw new BadRequestException('Match post is already full');
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

    await this.prisma.notification.create({
      data: {
        userId: matchPost.userno,
        type: 'match_apply',
        title: '새로운 매칭 신청',
        body: `${applicantName}님이 "${matchPost.title}"에 신청했습니다.`,
        targetId: matchId,
      },
    }).catch(() => {});

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
    this.logger.log(`updateApplicationStatus match=${matchId} app=${applicationId} status=${status} userId=${userno}`);

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
      if (acceptedCount >= matchPost.maxParticipants) {
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
      chatRoomId = await this.createChatRoom(
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
    const { userno, page = 1, pageSize = 10 } = request;
    const skip = (page - 1) * pageSize;

    const applications = await this.prisma.matchApplication.findMany({
      where: { applicantUserno: userno },
      include: {
        MatchPost: { include: { User: true } },
        User: { select: { gender: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: pageSize,
    });

    return { applications: applications.map(formatMatchApplication) };
  }

  async getMyApplicationStatus(request: { matchId: string; userno: number }) {
    const { matchId, userno } = request;
    const matchPost = await this.prisma.matchPost.findFirst({
      where: { id: matchId, deletedAt: null },
    });
    if (!matchPost) throw new NotFoundException('Match post not found');

    const application = await this.prisma.matchApplication.findFirst({
      where: { matchPostId: matchId, applicantUserno: userno },
      include: { User: { select: { gender: true } } },
    });

    if (!application) return { hasApplication: false };

    return {
      application: formatMatchApplication(application),
      hasApplication: true,
    };
  }

  private async createChatRoom(
    authorUserno: number,
    applicantUserno: number,
  ): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.chatService.createChatRoom({
          memberIds: [authorUserno, applicantUserno],
          roomName: `Match Chat ${authorUserno}-${applicantUserno}`,
          type: 'direct',
        }),
      );
      return response.chatRoom.id;
    } catch (error) {
      this.logger.error('Failed to create chat room', error?.stack ?? error);
      throw new BadRequestException('Failed to create chat room');
    }
  }
}
