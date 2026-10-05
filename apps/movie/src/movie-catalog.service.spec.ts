import { MovieCatalogService } from './movie-catalog.service';

describe('MovieCatalogService', () => {
  const prisma = { movie: { count: jest.fn(), findMany: jest.fn() } };
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
              movieScores: { where: { deletedAt: null } },
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
});
