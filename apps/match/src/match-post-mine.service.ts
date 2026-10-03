import { Injectable } from '@nestjs/common';
import { GetMyPostsRequest, MatchPostResponse } from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { MatchPostPresenter } from './match-post.presenter';

@Injectable()
export class MatchPostMineService {
  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly presenter: MatchPostPresenter,
  ) {}

  async get(request: GetMyPostsRequest): Promise<MatchPostResponse> {
    const { userno, page = 1, pageSize = 10 } = request;
    const matchPosts = await this.prisma.matchPost.findMany({
      where: { userno, deletedAt: null },
      include: {
        User: true,
        _count: {
          select: {
            MatchApplication: { where: { status: 'accepted' } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize + 1,
    });
    const hasNext = matchPosts.length > pageSize;
    if (hasNext) matchPosts.pop();
    return { matchPosts: await this.presenter.many(matchPosts), hasNext };
  }
}
