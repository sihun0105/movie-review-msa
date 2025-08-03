import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  MatchPost,
  MatchApplication,
  GetMatchPostsRequest,
  CreateMatchPostRequest,
  GetMatchPostRequest,
  UpdateMatchPostRequest,
  DeleteMatchPostRequest,
  ApplyToMatchRequest,
  GetMatchApplicationsRequest,
  UpdateApplicationStatusRequest,
  MatchPostResponse,
  SingleMatchPostResponse,
  MatchApplicationsResponse,
  CommonResponse,
  ApplicationResponse,
  ChatService,
} from '@app/common/protobuf';

@Injectable()
export class MatchService {
  private chatService: ChatService;

  constructor(
    private readonly mysqlPrismaService: MySQLPrismaService,
    private readonly utilsService: UtilsService,
    @Inject('CHAT_SERVICE')
    private readonly chatServiceClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.chatService =
      this.chatServiceClient.getService<ChatService>('ChatService');
  }

  async getMatchPosts(
    request: GetMatchPostsRequest,
  ): Promise<MatchPostResponse> {
    const { page = 1, pageSize = 10 } = request;
    const skip = (page - 1) * pageSize;

    const matchPosts = await this.mysqlPrismaService.matchPost.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        User: true,
        _count: {
          select: {
            MatchApplication: {
              where: {
                status: 'accepted',
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip,
      take: pageSize + 1, // 하나 더 가져와서 hasNext 확인
    });

    const hasNext = matchPosts.length > pageSize;
    if (hasNext) {
      matchPosts.pop(); // 마지막 요소 제거
    }

    const formattedPosts: MatchPost[] = matchPosts.map((post) => ({
      id: post.id,
      title: post.title,
      userno: post.userno,
      author: post.User.nickname || 'Unknown',
      content: post.content,
      movieTitle: post.movieTitle,
      theaterName: post.theaterName,
      showTime: post.showTime,
      maxParticipants: post.maxParticipants,
      currentParticipants: post._count.MatchApplication,
      location: post.location,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt?.toISOString() || '',
      deletedAt: post.deletedAt?.toISOString() || '',
    }));

    return {
      matchPosts: formattedPosts,
      hasNext,
    };
  }

  async createMatchPost(
    request: CreateMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    const {
      title,
      content,
      movieTitle,
      theaterName,
      showTime,
      maxParticipants,
      location,
      userno,
    } = request;

    const matchPost = await this.mysqlPrismaService.matchPost.create({
      data: {
        title,
        content,
        movieTitle,
        theaterName,
        showTime,
        maxParticipants,
        location,
        userno,
      },
      include: {
        User: true,
        _count: {
          select: {
            MatchApplication: {
              where: {
                status: 'accepted',
              },
            },
          },
        },
      },
    });

    return {
      matchPost: {
        id: matchPost.id,
        title: matchPost.title,
        userno: matchPost.userno,
        author: matchPost.User.nickname || 'Unknown',
        content: matchPost.content,
        movieTitle: matchPost.movieTitle,
        theaterName: matchPost.theaterName,
        showTime: matchPost.showTime,
        maxParticipants: matchPost.maxParticipants,
        currentParticipants: matchPost._count.MatchApplication,
        location: matchPost.location,
        createdAt: matchPost.createdAt.toISOString(),
        updatedAt: matchPost.updatedAt?.toISOString() || '',
        deletedAt: matchPost.deletedAt?.toISOString() || '',
      },
    };
  }

  async getMatchPost(
    request: GetMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    const { matchId } = request;

    const matchPost = await this.mysqlPrismaService.matchPost.findFirst({
      where: {
        id: matchId,
        deletedAt: null,
      },
      include: {
        User: true,
        _count: {
          select: {
            MatchApplication: {
              where: {
                status: 'accepted',
              },
            },
          },
        },
      },
    });

    if (!matchPost) {
      throw new NotFoundException('Match post not found');
    }

    return {
      matchPost: {
        id: matchPost.id,
        title: matchPost.title,
        userno: matchPost.userno,
        author: matchPost.User.nickname || 'Unknown',
        content: matchPost.content,
        movieTitle: matchPost.movieTitle,
        theaterName: matchPost.theaterName,
        showTime: matchPost.showTime,
        maxParticipants: matchPost.maxParticipants,
        currentParticipants: matchPost._count.MatchApplication,
        location: matchPost.location,
        createdAt: matchPost.createdAt.toISOString(),
        updatedAt: matchPost.updatedAt?.toISOString() || '',
        deletedAt: matchPost.deletedAt?.toISOString() || '',
      },
    };
  }

  async updateMatchPost(
    request: UpdateMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    const {
      matchId,
      title,
      content,
      movieTitle,
      theaterName,
      showTime,
      maxParticipants,
      location,
      userno,
    } = request;

    // 게시글 존재 여부 및 권한 확인
    const existingPost = await this.mysqlPrismaService.matchPost.findFirst({
      where: {
        id: matchId,
        deletedAt: null,
      },
    });

    if (!existingPost) {
      throw new NotFoundException('Match post not found');
    }

    if (existingPost.userno !== userno) {
      throw new ForbiddenException('You can only update your own posts');
    }

    const updatedPost = await this.mysqlPrismaService.matchPost.update({
      where: {
        id: matchId,
      },
      data: {
        title,
        content,
        movieTitle,
        theaterName,
        showTime,
        maxParticipants,
        location,
        updatedAt: new Date(),
      },
      include: {
        User: true,
        _count: {
          select: {
            MatchApplication: {
              where: {
                status: 'accepted',
              },
            },
          },
        },
      },
    });

    return {
      matchPost: {
        id: updatedPost.id,
        title: updatedPost.title,
        userno: updatedPost.userno,
        author: updatedPost.User.nickname || 'Unknown',
        content: updatedPost.content,
        movieTitle: updatedPost.movieTitle,
        theaterName: updatedPost.theaterName,
        showTime: updatedPost.showTime,
        maxParticipants: updatedPost.maxParticipants,
        currentParticipants: updatedPost._count.MatchApplication,
        location: updatedPost.location,
        createdAt: updatedPost.createdAt.toISOString(),
        updatedAt: updatedPost.updatedAt?.toISOString() || '',
        deletedAt: updatedPost.deletedAt?.toISOString() || '',
      },
    };
  }

  async deleteMatchPost(
    request: DeleteMatchPostRequest,
  ): Promise<CommonResponse> {
    const { matchId, userno } = request;

    // 게시글 존재 여부 및 권한 확인
    const existingPost = await this.mysqlPrismaService.matchPost.findFirst({
      where: {
        id: matchId,
        deletedAt: null,
      },
    });

    if (!existingPost) {
      throw new NotFoundException('Match post not found');
    }

    if (existingPost.userno !== userno) {
      throw new ForbiddenException('You can only delete your own posts');
    }

    // Soft delete
    await this.mysqlPrismaService.matchPost.update({
      where: {
        id: matchId,
      },
      data: {
        deletedAt: new Date(),
      },
    });

    return {
      success: true,
      message: 'Match post deleted successfully',
    };
  }

  async applyToMatch(request: ApplyToMatchRequest): Promise<CommonResponse> {
    const { matchId, applicantUserno, applicantName, message } = request;

    // 게시글 존재 여부 확인
    const matchPost = await this.mysqlPrismaService.matchPost.findFirst({
      where: {
        id: matchId,
        deletedAt: null,
      },
      include: {
        _count: {
          select: {
            MatchApplication: {
              where: {
                status: 'accepted',
              },
            },
          },
        },
      },
    });

    if (!matchPost) {
      throw new NotFoundException('Match post not found');
    }

    // 자신의 게시글에는 신청할 수 없음
    if (matchPost.userno === applicantUserno) {
      throw new BadRequestException('You cannot apply to your own match post');
    }

    // 최대 참가자 수 확인
    if (matchPost._count.MatchApplication >= matchPost.maxParticipants) {
      throw new BadRequestException('Match post is already full');
    }

    // 이미 신청한 사용자인지 확인
    const existingApplication =
      await this.mysqlPrismaService.matchApplication.findFirst({
        where: {
          matchPostId: matchId,
          applicantUserno,
        },
      });

    if (existingApplication) {
      throw new BadRequestException(
        'You have already applied to this match post',
      );
    }

    await this.mysqlPrismaService.matchApplication.create({
      data: {
        matchPostId: matchId,
        applicantUserno,
        applicantName,
        message,
        status: 'pending',
      },
    });

    return {
      success: true,
      message: 'Application submitted successfully',
    };
  }

  async getMatchApplications(
    request: GetMatchApplicationsRequest,
  ): Promise<MatchApplicationsResponse> {
    const { matchId, userno } = request;

    // 게시글 존재 여부 및 권한 확인
    const matchPost = await this.mysqlPrismaService.matchPost.findFirst({
      where: {
        id: matchId,
        deletedAt: null,
      },
    });

    if (!matchPost) {
      throw new NotFoundException('Match post not found');
    }

    if (matchPost.userno !== userno) {
      throw new ForbiddenException(
        'You can only view applications for your own posts',
      );
    }

    const applications =
      await this.mysqlPrismaService.matchApplication.findMany({
        where: {
          matchPostId: matchId,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

    const formattedApplications: MatchApplication[] = applications.map(
      (app) => ({
        id: app.id,
        matchPostId: app.matchPostId,
        applicantUserno: app.applicantUserno,
        applicantName: app.applicantName,
        message: app.message,
        status: app.status,
        createdAt: app.createdAt.toISOString(),
      }),
    );

    return {
      applications: formattedApplications,
    };
  }

  async updateApplicationStatus(
    request: UpdateApplicationStatusRequest,
  ): Promise<ApplicationResponse> {
    const { matchId, applicationId, status, userno } = request;

    // 게시글 존재 여부 및 권한 확인
    const matchPost = await this.mysqlPrismaService.matchPost.findFirst({
      where: {
        id: matchId,
        deletedAt: null,
      },
    });

    if (!matchPost) {
      throw new NotFoundException('Match post not found');
    }

    if (matchPost.userno !== userno) {
      throw new ForbiddenException(
        'You can only manage applications for your own posts',
      );
    }

    // 신청서 존재 여부 확인
    const application =
      await this.mysqlPrismaService.matchApplication.findFirst({
        where: {
          id: applicationId,
          matchPostId: matchId,
        },
      });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    // 이미 처리된 신청서인지 확인
    if (application.status !== 'pending') {
      throw new BadRequestException('Application has already been processed');
    }

    // 수락하는 경우 최대 참가자 수 확인
    if (status === 'accepted') {
      const acceptedCount =
        await this.mysqlPrismaService.matchApplication.count({
          where: {
            matchPostId: matchId,
            status: 'accepted',
          },
        });

      if (acceptedCount >= matchPost.maxParticipants) {
        throw new BadRequestException('Match post is already full');
      }
    }

    // 신청서 상태 업데이트
    await this.mysqlPrismaService.matchApplication.update({
      where: {
        id: applicationId,
      },
      data: {
        status: status as any, // Prisma enum type 캐스팅
      },
    });

    let chatRoomId = '';
    let message = '';

    if (status === 'accepted') {
      // 채팅방 생성
      chatRoomId = await this.createChatRoom(
        matchPost.userno,
        application.applicantUserno,
      );
      message = 'Application accepted successfully. Chat room created.';
    } else if (status === 'rejected') {
      message = 'Application rejected successfully.';
    }

    return {
      success: true,
      message,
      chatRoomId,
    };
  }

  // 채팅 서비스와 연동하여 채팅방 생성
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
      console.error('Failed to create chat room:', error);
      throw new BadRequestException('Failed to create chat room');
    }
  }
}
