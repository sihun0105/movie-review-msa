import { MovieCastService } from './movie-cast.service';

describe('MovieCastService', () => {
  const cachedActor = {
    tmdbPersonId: 6193,
    name: '맷 데이먼',
    character: '오디세우스',
    profileUrl: 'https://image.tmdb.org/t/p/w342/matt.jpg',
    sortOrder: 0,
  };

  it('returns ordered cached actors without calling TMDB', async () => {
    const findMany = jest.fn().mockResolvedValue([cachedActor]);
    const metadata = {
      fetchTmdbData: jest.fn(),
      fetchTmdbCast: jest.fn(),
    };
    const service = new MovieCastService(
      { movieActor: { findMany } } as any,
      metadata as any,
    );

    await expect(
      service.getCast({
        movieCd: 20250654,
        title: '오디세이',
        releaseYear: 2026,
      }),
    ).resolves.toEqual([
      {
        id: 6193,
        name: '맷 데이먼',
        character: '오디세우스',
        profileUrl: cachedActor.profileUrl,
        sortOrder: 0,
      },
    ]);
    expect(metadata.fetchTmdbData).not.toHaveBeenCalled();
    expect(findMany).toHaveBeenCalledWith({
      where: { movieCd: 20250654 },
      orderBy: { sortOrder: 'asc' },
      take: 8,
    });
  });

  it('fetches, persists, and limits valid TMDB cast on a cache miss', async () => {
    const createMany = jest.fn().mockResolvedValue({ count: 1 });
    const metadata = {
      fetchTmdbData: jest.fn().mockResolvedValue({ id: 123 }),
      fetchTmdbCast: jest.fn().mockResolvedValue([
        {
          id: 6193,
          name: '맷 데이먼',
          character: '오디세우스',
          profile_path: '/matt.jpg',
        },
        { id: 0, name: '사진 없음', profile_path: null },
      ]),
    };
    const service = new MovieCastService(
      {
        movieActor: {
          findMany: jest.fn().mockResolvedValue([]),
          createMany,
        },
      } as any,
      metadata as any,
    );

    const result = await service.getCast({
      movieCd: 20250654,
      title: '오디세이',
      releaseYear: 2026,
    });

    expect(result).toHaveLength(1);
    expect(result[0].profileUrl).toBe(
      'https://image.tmdb.org/t/p/w342/matt.jpg',
    );
    expect(createMany).toHaveBeenCalledWith({
      data: [
        {
          movieCd: 20250654,
          tmdbPersonId: 6193,
          name: '맷 데이먼',
          character: '오디세우스',
          profileUrl: 'https://image.tmdb.org/t/p/w342/matt.jpg',
          sortOrder: 0,
        },
      ],
      skipDuplicates: true,
    });
  });

  it('returns an empty cast when enrichment fails', async () => {
    const service = new MovieCastService(
      {
        movieActor: { findMany: jest.fn().mockRejectedValue(new Error('db')) },
      } as any,
      {} as any,
    );

    await expect(
      service.getCast({
        movieCd: 20250654,
        title: '오디세이',
        releaseYear: 2026,
      }),
    ).resolves.toEqual([]);
  });
});
