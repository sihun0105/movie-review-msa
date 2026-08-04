import { MovieScoreService } from './movie-score.service';

describe('MovieScoreService soft-deleted ratings', () => {
  const prisma = {
    movieScore: {
      upsert: jest.fn(),
      findFirst: jest.fn(),
      aggregate: jest.fn(),
      count: jest.fn(),
    },
  };
  const utils = { dateToTimestamp: jest.fn(() => ({ seconds: 1 })) };
  const service = new MovieScoreService(prisma as never, utils as never);

  beforeEach(() => jest.clearAllMocks());

  it('reactivates a deleted rating when the user scores again', async () => {
    prisma.movieScore.upsert.mockResolvedValue({
      id: 1,
      movieCd: 20233219,
      Userno: 4,
      score: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });

    await service.upsertMovieScore({ movieCd: 20233219, userId: 4, score: 4 });

    expect(prisma.movieScore.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        update: expect.objectContaining({ score: 4, deletedAt: null }),
      }),
    );
  });

  it('reads only an active rating', async () => {
    prisma.movieScore.findFirst.mockResolvedValue(null);

    await service.getMovieScore({ movieCd: 20233219, userId: 4 });

    expect(prisma.movieScore.findFirst).toHaveBeenCalledWith({
      where: { movieCd: 20233219, Userno: 4, deletedAt: null },
    });
  });

  it('excludes deleted ratings from the average and count', async () => {
    prisma.movieScore.aggregate.mockResolvedValue({ _avg: { score: 4.5 } });
    prisma.movieScore.count.mockResolvedValue(2);

    await expect(service.getAverageMovieScore(20233219)).resolves.toEqual({
      movieCd: 20233219,
      averageScore: 4.5,
      scoreCount: 2,
    });
    expect(prisma.movieScore.aggregate).toHaveBeenCalledWith({
      where: { movieCd: 20233219, deletedAt: null },
      _avg: { score: true },
    });
    expect(prisma.movieScore.count).toHaveBeenCalledWith({
      where: { movieCd: 20233219, deletedAt: null },
    });
  });
});
