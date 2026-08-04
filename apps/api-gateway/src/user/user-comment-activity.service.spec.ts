import { UserCommentActivityService } from './user-comment-activity.service';

describe('UserCommentActivityService', () => {
  const prisma = {
    comment: { findMany: jest.fn(), count: jest.fn() },
    articleComments: { findMany: jest.fn(), count: jest.fn() },
  };
  const service = new UserCommentActivityService(prisma as never);

  beforeEach(() => jest.clearAllMocks());

  it('combines movie and article comments in newest-first order', async () => {
    prisma.comment.findMany.mockResolvedValue([
      {
        id: 12,
        movieId: 20262770,
        comment: '영화 댓글',
        createdAt: new Date('2026-08-04T12:00:00Z'),
        Movie: { title: '신작 영화' },
      },
    ]);
    prisma.articleComments.findMany.mockResolvedValue([
      {
        id: 7,
        articleId: 5,
        content: '게시글 댓글',
        createdAt: new Date('2026-08-03T12:00:00Z'),
        article: { title: '영화 후기' },
      },
    ]);
    prisma.comment.count.mockResolvedValue(1);
    prisma.articleComments.count.mockResolvedValue(1);

    await expect(service.getPage(4, { skip: 0, take: 10 })).resolves.toEqual({
      items: [
        expect.objectContaining({
          targetType: 'movie',
          targetId: 20262770,
          targetTitle: '신작 영화',
        }),
        expect.objectContaining({
          targetType: 'article',
          targetId: 5,
          targetTitle: '영화 후기',
        }),
      ],
      totalCount: 2,
      hasNext: false,
    });
  });

  it('counts comments from both sources', async () => {
    prisma.comment.count.mockResolvedValue(3);
    prisma.articleComments.count.mockResolvedValue(4);

    await expect(service.getCount(4)).resolves.toBe(7);
  });
});
