import { MovieSitemapEntries } from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';

const CACHE_TTL_MS = 5 * 60 * 1000;
const MAX_SITEMAP_MOVIES = 50_000;

@Injectable()
export class MovieSitemapService {
  private cache?: { expiresAt: number; data: MovieSitemapEntries };

  constructor(private readonly prisma: MySQLPrismaService) {}

  async getEntries(): Promise<MovieSitemapEntries> {
    if (this.cache && this.cache.expiresAt > Date.now()) {
      return this.cache.data;
    }

    const movies = await this.prisma.movie.findMany({
      where: { movieCd: { gt: 0 } },
      select: { movieCd: true, updatedAt: true },
      take: MAX_SITEMAP_MOVIES,
    });
    const data = {
      movies: movies.map(({ movieCd, updatedAt }) => ({
        movieCd,
        updatedAt: updatedAt.toISOString(),
      })),
    };

    this.cache = { expiresAt: Date.now() + CACHE_TTL_MS, data };
    return data;
  }
}
