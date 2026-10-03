import { Injectable, NotFoundException } from '@nestjs/common';
import {
  GetMyApplicationsRequest,
  MatchApplicationsResponse,
} from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { formatMatchApplication } from './match.formatter';

@Injectable()
export class MatchApplicationQueryService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async getMine(
    request: GetMyApplicationsRequest,
  ): Promise<MatchApplicationsResponse> {
    const { userno, page = 1, pageSize = 10 } = request;
    const applications = await this.prisma.matchApplication.findMany({
      where: { applicantUserno: userno },
      include: {
        MatchPost: { include: { User: true } },
        User: { select: { gender: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    return { applications: applications.map(formatMatchApplication) };
  }

  async getStatus(request: { matchId: string; userno: number }) {
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
}
