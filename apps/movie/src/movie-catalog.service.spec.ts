import { MovieCatalogService } from './movie-catalog.service';

describe('MovieCatalogService', () => {
  const prisma = {
    movie: { count: jest.fn(), findMany: jest.fn() },
    movieScore: { groupBy: jest.fn() },
  };
  const service = new MovieCatalogService(prisma as never);

  beforeEach(() => jest.resetAllMocks());

  it('returns a searchable, paginated movie catalog', async () => {
    prisma.movie.count.mockResolvedValue(25);
    prisma.movie.findMany.mockResolvedValue([
      {
        movieCd: 20256308,
        title: '인턴',
        openDt: new Date('2025-09-01'),
        _count: { Comment: 1, movieScores: 1 },
        movieScores: [{ score: 5 }],
      },
    ]);

    const result = await service.getCatalog({
      query: ' 인턴 ',
      genre: ' 드라마 ',
      page: 2,
      pageSize: 100,
    });

    expect(prisma.movie.count).toHaveBeenCalledWith({
      where: {
        title: { contains: '인턴' },
        genre: { contains: '드라마' },
      },
    });
    expect(prisma.movie.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        include: expect.objectContaining({
          _count: {
            select: {
              Comment: { where: { deletedAt: null } },
              movieScores: {
                where: { deletedAt: null, score: { not: null } },
              },
            },
          },
        }),
        skip: 48,
        take: 48,
        orderBy: [{ openDt: 'desc' }, { audience: 'desc' }],
      }),
    );
    expect(result).toMatchObject({
      page: 2,
      pageSize: 48,
      total: 25,
      hasNext: false,
      movies: [
        {
          movieCd: 20256308,
          title: '인턴',
          scoreCount: 1,
          averageScore: 5,
        },
      ],
    });
  });

  it('returns active scored movies in a deterministic order', async () => {
    prisma.movieScore.groupBy.mockResolvedValue([
      { movieCd: 1 },
      { movieCd: 2 },
      { movieCd: 3 },
      { movieCd: 4 },
      { movieCd: 999 },
    ]);
    prisma.movie.findMany.mockResolvedValue([
      movie(1, [4.5, 4.5], '2026-01-01'),
      movie(2, [4.5, 4.5, 4.5], '2025-01-01'),
      movie(3, [4.5, 4.5, 4.5], '2026-02-01'),
      movie(4, [4.5, 4.5, 4.5], '2026-02-01'),
    ]);

    const result = await service.getTopRated(12);

    expect(prisma.movieScore.groupBy).toHaveBeenCalledWith({
      by: ['movieCd'],
      where: { deletedAt: null, score: { not: null } },
    });
    expect(prisma.movie.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { movieCd: { in: [1, 2, 3, 4, 999] } },
        include: expect.objectContaining({
          movieScores: {
            where: { deletedAt: null, score: { not: null } },
          },
        }),
      }),
    );
    expect(result.map(({ movieCd }) => movieCd)).toEqual([3, 4, 2, 1]);
  });

  it('normalizes the result limit to the supported range', async () => {
    prisma.movieScore.groupBy.mockResolvedValue(
      Array.from({ length: 30 }, (_, index) => ({ movieCd: index + 1 })),
    );
    prisma.movie.findMany.mockResolvedValue(
      Array.from({ length: 30 }, (_, index) =>
        movie(index + 1, [5], '2026-01-01'),
      ),
    );

    await expect(service.getTopRated(-1)).resolves.toHaveLength(1);
    await expect(service.getTopRated(99)).resolves.toHaveLength(24);
    await expect(service.getTopRated(Number.NaN)).resolves.toHaveLength(12);
  });

  it('does not query movie rows when no active scores exist', async () => {
    prisma.movieScore.groupBy.mockResolvedValue([]);

    await expect(service.getTopRated(12)).resolves.toEqual([]);
    expect(prisma.movie.findMany).not.toHaveBeenCalled();
  });
});

function movie(
  movieCd: number,
  scores: number[],
  openDt: string,
): Record<string, unknown> {
  return {
    movieCd,
    title: `영화 ${movieCd}`,
    openDt: new Date(openDt),
    _count: { Comment: 0, movieScores: scores.length },
    movieScores: scores.map((score) => ({ score })),
  };
}
