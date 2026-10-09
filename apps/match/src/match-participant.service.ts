import { Injectable, NotFoundException } from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';

type ParticipantUser = {
  nickname: string | null;
  image: string | null;
  deletedAt: Date | null;
};

@Injectable()
export class MatchParticipantService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async get(request: { matchId: string }) {
    const match = await this.prisma.matchPost.findFirst({
      where: { id: request.matchId, deletedAt: null },
      include: {
        User: {
          select: { nickname: true, image: true, deletedAt: true },
        },
        MatchApplication: {
          where: { status: 'accepted' },
          orderBy: { createdAt: 'asc' },
          include: {
            User: {
              select: {
                nickname: true,
                image: true,
                deletedAt: true,
              },
            },
          },
        },
      },
    });

    if (!match) throw new NotFoundException('Match post not found');

    const participants = [];
    if (!match.User.deletedAt) {
      participants.push(this.format(match.User, 'host'));
    }
    for (const application of match.MatchApplication) {
      if (!application.User.deletedAt) {
        participants.push(this.format(application.User, 'participant'));
      }
    }
    return { participants };
  }

  private format(user: ParticipantUser, role: 'host' | 'participant') {
    return {
      nickname: user.nickname || '알 수 없음',
      image: user.image || '',
      role,
    };
  }
}
