import { MoviePosterBackfillService } from './movie-poster-backfill.service';

describe('MoviePosterBackfillService', () => {
  const movies = [
    {
      movieCd: 20266051,
      title: '바다 탐험대 옥토넛',
      openDt: new Date('2026-09-23'),
    },
  ];
  const prisma = {
    movie: {
      findMany: jest.fn().mockResolvedValue(movies),
      update: jest.fn().mockResolvedValue({}),
    },
  };
  const resolver = {
    resolve: jest.fn().mockResolvedValue({
      poster: 'https://image.tmdb.org/t/p/w500/poster.jpg',
      plot: '',
      director: '',
      genre: '',
      rating: '',
    }),
  };
  const storage = {
    mirrorPoster: jest
      .fn()
      .mockResolvedValue('https://bucket.example/posters/20266051.jpg'),
  };

  beforeEach(() => jest.clearAllMocks());

  it('stores a resolved poster for a recent movie with no poster', async () => {
    const service = new MoviePosterBackfillService(
      prisma as never,
      resolver as never,
      storage as never,
    );

    await service.run();

    expect(resolver.resolve).toHaveBeenCalledWith({
      movieCd: '20266051',
      title: '바다 탐험대 옥토넛',
      releaseYear: 2026,
    });
    expect(prisma.movie.update).toHaveBeenCalledWith({
      where: { movieCd: 20266051 },
      data: expect.objectContaining({
        poster: 'https://bucket.example/posters/20266051.jpg',
      }),
    });
  });
});
