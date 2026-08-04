import { BadRequestException } from '@nestjs/common';
import { UserActivityService } from './user-activity.service';

describe('UserActivityService activity lists', () => {
  const prisma = {
    user: { count: jest.fn() },
    articleComments: { findMany: jest.fn(), count: jest.fn() },
    movieScore: {
      findMany: jest.fn(),
      count: jest.fn(),
      updateMany: jest.fn(),
    },
    article: { findMany: jest.fn(), count: jest.fn() },
  };
  const commentActivity = { getPage: jest.fn(), getCount: jest.fn() };
  const service = new UserActivityService(
    prisma as never,
    commentActivity as never,
  );

  beforeEach(() => {
    jest.clearAllMocks();
    prisma.user.count.mockResolvedValue(1);
  });

  it('delegates comments to the combined comment activity service', async () => {
    const page = { items: [], totalCount: 0, hasNext: false };
    commentActivity.getPage.mockResolvedValue(page);

    await expect(service.getActivity(4, 'comments', 1, 10)).resolves.toBe(page);
    expect(commentActivity.getPage).toHaveBeenCalledWith(4, {
      skip: 0,
      take: 10,
    });
  });

  it('lists ratings with movie metadata', async () => {
    prisma.movieScore.findMany.mockResolvedValue([
      {
        movieCd: 20233219,
        score: 4.5,
        updatedAt: new Date('2026-08-02T00:00:00Z'),
        Movie: { title: '스파이더맨', poster: 'poster.jpg' },
      },
    ]);
    prisma.movieScore.count.mockResolvedValue(1);

    const result = await service.getActivity(4, 'ratings', 1, 10);

    expect(result.items[0]).toEqual(
      expect.objectContaining({
        type: 'rating',
        movieCd: 20233219,
        movieTitle: '스파이더맨',
        poster: 'poster.jpg',
        score: 4.5,
      }),
    );
    expect(prisma.movieScore.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { Userno: 4, deletedAt: null } }),
    );
  });

  it.each([
    ['articles', 'article'],
    ['likes', 'like'],
  ] as const)(
    'lists %s by authored article',
    async (activityType, itemType) => {
      prisma.article.findMany.mockResolvedValue([
        {
          id: 5,
          title: '내 영화 후기',
          createdAt: new Date('2026-08-03T00:00:00Z'),
          like_count: 7,
          comment_count: 2,
        },
      ]);
      prisma.article.count.mockResolvedValue(1);

      const result = await service.getActivity(4, activityType, 1, 10);

      expect(result.items[0]).toEqual(
        expect.objectContaining({ type: itemType, articleId: 5, likeCount: 7 }),
      );
      expect(prisma.article.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where:
            activityType === 'likes'
              ? { userno: 4, deletedAt: null, like_count: { gt: 0 } }
              : { userno: 4, deletedAt: null },
        }),
      );
    },
  );

  it('soft deletes only the signed-in user rating', async () => {
    prisma.movieScore.updateMany.mockResolvedValue({ count: 1 });

    await expect(service.deleteRating(4, 20233219)).resolves.toEqual({
      success: true,
    });
    expect(prisma.movieScore.updateMany).toHaveBeenCalledWith({
      where: { Userno: 4, movieCd: 20233219, deletedAt: null },
      data: { deletedAt: expect.any(Date) },
    });
  });

  it('rejects an unsupported activity type', async () => {
    await expect(
      service.getActivity(4, 'unknown' as never, 1, 10),
    ).rejects.toBeInstanceOf(BadRequestException);
  });
});
