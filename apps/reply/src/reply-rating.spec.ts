import { toReply } from './reply.mapper';
import { ReplyQueryService } from './reply-query.service';

const comment = (id: number, userId: number) => ({
  id, User: { id: userId, nickname: '작성자', email: '', image: '' },
  comment: '감상', createdAt: new Date(), updatedAt: new Date(), replies: [],
});

describe('movie comment ratings', () => {
  it('keeps zero scores and omits unrated or deleted authors', () => {
    const ratings = new Map([[4, 0]]);
    expect(toReply(comment(1, 4), undefined, ratings).rating).toBe(0);
    expect(toReply(comment(2, 5), undefined, ratings).rating).toBeUndefined();
    expect(toReply({ ...comment(1, 4), deletedAt: new Date() }, undefined, ratings).rating).toBeUndefined();
  });

  it('loads current ratings once for parents and distinct child authors', async () => {
    const prisma = {
      comment: {
        findMany: jest.fn().mockResolvedValue([{ ...comment(1, 4), replies: [comment(2, 5)] }]),
        count: jest.fn().mockResolvedValue(1),
      },
      movieScore: { findMany: jest.fn().mockResolvedValue([{ Userno: 5, score: 3.5 }]) },
    };
    const result = await new ReplyQueryService(prisma as never).getReplies({ movieId: 20250654, page: 1 });
    expect(result.replies[0].rating).toBeUndefined();
    expect(result.replies[0].replies[0].rating).toBe(3.5);
    expect(prisma.movieScore.findMany).toHaveBeenCalledTimes(1);
    expect(prisma.movieScore.findMany).toHaveBeenCalledWith({
      where: { movieCd: 20250654, Userno: { in: [4, 5] }, deletedAt: null },
      select: { Userno: true, score: true },
    });
  });

  it('skips the ratings query on an empty page', async () => {
    const prisma = {
      comment: { findMany: jest.fn().mockResolvedValue([]), count: jest.fn().mockResolvedValue(0) },
      movieScore: { findMany: jest.fn() },
    };
    await new ReplyQueryService(prisma as never).getReplies({ movieId: 20250654, page: 1 });
    expect(prisma.movieScore.findMany).not.toHaveBeenCalled();
  });
});
