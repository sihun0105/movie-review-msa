import { MovieSitemapService } from './movie-sitemap.service';

describe('MovieSitemapService', () => {
  it('returns and caches bounded lightweight movie entries', async () => {
    const updatedAt = new Date('2026-08-10T00:00:00.000Z');
    const findMany = jest.fn().mockResolvedValue([
      { movieCd: 20259946, updatedAt },
      { movieCd: 20159058, updatedAt },
    ]);
    const service = new MovieSitemapService({
      movie: { findMany },
    } as any);
    const expected = {
      movies: [
        { movieCd: 20259946, updatedAt: updatedAt.toISOString() },
        { movieCd: 20159058, updatedAt: updatedAt.toISOString() },
      ],
    };

    await expect(service.getEntries()).resolves.toEqual(expected);
    await expect(service.getEntries()).resolves.toEqual(expected);
    expect(findMany).toHaveBeenCalledTimes(1);
    expect(findMany).toHaveBeenCalledWith({
      where: { movieCd: { gt: 0 } },
      select: { movieCd: true, updatedAt: true },
      take: 50_000,
    });
  });
});
