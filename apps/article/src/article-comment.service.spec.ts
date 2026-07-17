import { ArticleCommentService } from './article-comment.service';

describe('ArticleCommentService actions', () => {
  const prisma = {
    article: { update: jest.fn(), findUnique: jest.fn() },
    articleComments: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      count: jest.fn(),
      update: jest.fn(),
    },
    articleCommentReaction: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
    },
    user: { findUnique: jest.fn() },
  };
  const utils = {
    toNullableISOString: jest.fn((value) => value?.toISOString() ?? ''),
  };
  const service = new ArticleCommentService(prisma as never, utils as never);
  const now = new Date('2026-07-17T00:00:00.000Z');
  const user = { id: 4, nickname: '영화조아용', image: 'avatar.png' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('toggles the same reaction off', async () => {
    prisma.articleComments.findUnique.mockResolvedValue({
      id: 10,
      deletedAt: null,
    });
    prisma.articleCommentReaction.findUnique.mockResolvedValue({
      id: 3,
      type: 'like',
    });
    prisma.articleCommentReaction.count
      .mockResolvedValueOnce(2)
      .mockResolvedValueOnce(1);

    const result = await (service as any).reactComment({
      id: 10,
      userno: 4,
      reaction: 'like',
    });

    expect(prisma.articleCommentReaction.delete).toHaveBeenCalledWith({
      where: { id: 3 },
    });
    expect(result).toEqual({ likeCount: 2, dislikeCount: 1, reaction: '' });
  });

  it('creates a one-level reply for the same article', async () => {
    prisma.articleComments.findUnique.mockResolvedValue({
      id: 10,
      articleId: 4,
      parentId: null,
      deletedAt: null,
    });
    prisma.articleComments.create.mockResolvedValue({
      id: 11,
      articleId: 4,
      userno: 4,
      content: '답글',
      parentId: 10,
      isEdited: false,
      deletedAt: null,
      createdAt: now,
      updatedAt: now,
    });
    prisma.article.update.mockResolvedValue({ id: 4 });
    prisma.user.findUnique.mockResolvedValue(user);

    const result = await service.createComment({
      articleId: 4,
      userno: 4,
      content: '답글',
      parentId: 10,
    } as never);

    expect(prisma.articleComments.create).toHaveBeenCalledWith({
      data: expect.objectContaining({ parentId: 10 }),
    });
    expect((result as any).parentId).toBe(10);
  });

  it('returns deleted parents only while active replies remain', async () => {
    prisma.articleComments.findMany.mockResolvedValue([
      {
        id: 10,
        articleId: 4,
        userno: 4,
        content: '삭제 전',
        parentId: null,
        isEdited: false,
        deletedAt: now,
        createdAt: now,
        updatedAt: now,
        User: user,
        reactions: [],
        replies: [
          {
            id: 11,
            articleId: 4,
            userno: 4,
            content: '남은 답글',
            parentId: 10,
            isEdited: false,
            deletedAt: null,
            createdAt: now,
            updatedAt: now,
            User: user,
            reactions: [],
          },
        ],
      },
    ]);
    prisma.articleComments.count.mockResolvedValue(1);

    const result = await service.listComments({
      articleId: 4,
      page: 1,
      pageSize: 10,
      userno: 4,
    } as never);

    expect(prisma.articleComments.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ OR: expect.any(Array) }),
      }),
    );
    expect(result.comments[0]).toMatchObject({
      content: '삭제된 댓글입니다.',
      isDeleted: true,
      replies: [expect.objectContaining({ content: '남은 답글' })],
    });
  });

  it('marks updated comments as edited', async () => {
    prisma.articleComments.findUnique.mockResolvedValue({
      id: 10,
      deletedAt: null,
    });
    prisma.articleComments.update.mockResolvedValue({
      id: 10,
      articleId: 4,
      userno: 4,
      content: '수정됨',
      parentId: null,
      isEdited: true,
      deletedAt: null,
      createdAt: now,
      updatedAt: now,
    });
    prisma.user.findUnique.mockResolvedValue(user);

    const result = await service.updateComment({
      id: 10,
      userno: 4,
      content: '수정됨',
    });

    expect(prisma.articleComments.update).toHaveBeenCalledWith({
      where: { id: 10, userno: 4 },
      data: { content: '수정됨', isEdited: true },
    });
    expect((result as any).isEdited).toBe(true);
  });
});
