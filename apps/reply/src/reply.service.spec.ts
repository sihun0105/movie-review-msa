import { ReplyService } from './reply.service';

describe('ReplyService movie comment replies', () => {
  const user = {
    id: 4,
    email: 'movie@bollae.kr',
    nickname: '영화좋아용',
    image: 'https://cdn.bollae.kr/profile.png',
  };
  const prisma = {
    user: { findUnique: jest.fn() },
    movie: { findUniqueOrThrow: jest.fn() },
    comment: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      count: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    commentReaction: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
    },
  };
  const service = new ReplyService(prisma as never);

  beforeEach(() => {
    jest.clearAllMocks();
    prisma.user.findUnique.mockResolvedValue(user);
    prisma.movie.findUniqueOrThrow.mockResolvedValue({ movieCd: 20233219 });
  });

  it('toggles the same reaction off and returns updated counts', async () => {
    prisma.comment.findUnique.mockResolvedValue({ id: 10, deletedAt: null });
    prisma.commentReaction.findUnique.mockResolvedValue({
      id: 3,
      type: 'like',
    });
    prisma.commentReaction.delete.mockResolvedValue({ id: 3 });
    prisma.commentReaction.count
      .mockResolvedValueOnce(2)
      .mockResolvedValueOnce(1);

    const result = await (service as any).react({
      userId: 4,
      commentId: 10,
      reaction: 'like',
    });

    expect(prisma.commentReaction.delete).toHaveBeenCalledWith({
      where: { id: 3 },
    });
    expect(result).toEqual({ likeCount: 2, dislikeCount: 1, reaction: '' });
  });

  it('switches an existing reaction to the opposite type', async () => {
    prisma.comment.findUnique.mockResolvedValue({ id: 10, deletedAt: null });
    prisma.commentReaction.findUnique.mockResolvedValue({
      id: 3,
      type: 'like',
    });
    prisma.commentReaction.update.mockResolvedValue({ id: 3, type: 'dislike' });
    prisma.commentReaction.count
      .mockResolvedValueOnce(1)
      .mockResolvedValueOnce(3);

    const result = await (service as any).react({
      userId: 4,
      commentId: 10,
      reaction: 'dislike',
    });

    expect(prisma.commentReaction.update).toHaveBeenCalledWith({
      where: { id: 3 },
      data: { type: 'dislike' },
    });
    expect(result).toEqual({ likeCount: 1, dislikeCount: 3, reaction: 'dislike' });
  });

  it('creates a one-level reply under a comment from the same movie', async () => {
    prisma.comment.findUnique.mockResolvedValue({
      id: 10,
      movieId: 20233219,
      parentId: null,
      deletedAt: null,
    });
    prisma.comment.create.mockResolvedValue({
      id: 11,
      movieId: 20233219,
      parentId: 10,
      comment: '저도 그렇게 생각해요',
      createdAt: new Date('2026-07-17T00:00:00Z'),
      updatedAt: new Date('2026-07-17T00:00:00Z'),
    });

    const result = await service.create({
      userId: 4,
      movieId: 20233219,
      comment: '저도 그렇게 생각해요',
      parentId: 10,
    } as never);

    expect(prisma.comment.create).toHaveBeenCalledWith({
      data: expect.objectContaining({ parentId: 10 }),
    });
    expect(result).toMatchObject({ parentId: 10, avatar: user.image });
  });

  it('returns top-level comments with their replies and profile images', async () => {
    const reply = {
      id: 11,
      userno: 4,
      comment: '대댓글',
      parentId: 10,
      createdAt: new Date('2026-07-17T00:01:00Z'),
      updatedAt: new Date('2026-07-17T00:01:00Z'),
      User: user,
    };
    prisma.comment.findMany.mockResolvedValue([
      {
        id: 10,
        userno: 4,
        comment: '원댓글',
        parentId: null,
        createdAt: new Date('2026-07-17T00:00:00Z'),
        updatedAt: new Date('2026-07-17T00:00:00Z'),
        User: user,
        replies: [reply],
      },
    ]);
    prisma.comment.count.mockResolvedValue(1);

    const result = await service.getReplies({ movieId: 20233219, page: 1 });

    expect(prisma.comment.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          movieId: 20233219,
          parentId: null,
          OR: expect.any(Array),
        }),
      }),
    );
    expect(result.replies[0]).toMatchObject({
      avatar: user.image,
      replies: [expect.objectContaining({ parentId: 10, avatar: user.image })],
    });
  });

  it('marks an updated comment as edited', async () => {
    prisma.comment.findUnique.mockResolvedValue({ id: 10, userno: 4 });
    prisma.comment.update.mockResolvedValue({
      id: 10,
      userno: 4,
      comment: '수정한 댓글',
      parentId: null,
      isEdited: true,
      deletedAt: null,
      createdAt: new Date('2026-07-17T00:00:00Z'),
      updatedAt: new Date('2026-07-17T00:01:00Z'),
    });

    const result = await service.update({
      userId: 4,
      commentId: 10,
      comment: '수정한 댓글',
    } as never);

    expect(prisma.comment.update).toHaveBeenCalledWith({
      where: { id: 10 },
      data: expect.objectContaining({ isEdited: true }),
    });
    expect((result as any).isEdited).toBe(true);
  });
});
