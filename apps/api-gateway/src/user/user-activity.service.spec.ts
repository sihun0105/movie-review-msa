import { UserActivityService } from './user-activity.service';

describe('UserActivityService', () => {
  const prisma = {
    user: { count: jest.fn() },
    articleComments: { count: jest.fn() },
    movieScore: { count: jest.fn() },
    article: {
      count: jest.fn(),
      aggregate: jest.fn(),
    },
  };

  const service = new UserActivityService(prisma as never);

  beforeEach(() => {
    jest.clearAllMocks();
    prisma.user.count.mockResolvedValue(1);
  });

  it('returns the signed-in user community activity summary', async () => {
    prisma.articleComments.count.mockResolvedValue(7);
    prisma.movieScore.count.mockResolvedValue(4);
    prisma.article.count.mockResolvedValue(2);
    prisma.article.aggregate.mockResolvedValue({ _sum: { like_count: 13 } });

    await expect(service.getSummary(4)).resolves.toEqual({
      articleCommentCount: 7,
      movieRatingCount: 4,
      articleCount: 2,
      receivedLikeCount: 13,
    });
    expect(prisma.articleComments.count).toHaveBeenCalledWith({
      where: {
        userno: 4,
        deletedAt: null,
        article: { deletedAt: null },
      },
    });
    expect(prisma.movieScore.count).toHaveBeenCalledWith({
      where: { Userno: 4, deletedAt: null },
    });
    expect(prisma.article.aggregate).toHaveBeenCalledWith({
      where: { userno: 4, deletedAt: null },
      _sum: { like_count: true },
    });
  });

  it('normalizes an empty received-like sum to zero', async () => {
    prisma.articleComments.count.mockResolvedValue(0);
    prisma.movieScore.count.mockResolvedValue(0);
    prisma.article.count.mockResolvedValue(0);
    prisma.article.aggregate.mockResolvedValue({ _sum: { like_count: null } });

    await expect(service.getSummary(4)).resolves.toMatchObject({
      receivedLikeCount: 0,
    });
  });

  it('rejects a soft-deleted user even with a signed token', async () => {
    prisma.user.count.mockResolvedValue(0);

    await expect(service.getSummary(4)).rejects.toThrow('로그인이 필요합니다.');
    expect(prisma.articleComments.count).not.toHaveBeenCalled();
  });
});
