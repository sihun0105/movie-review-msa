import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import { convertMovieDataWithCounts } from './movie.formatter';

const ACTIVE_SCORE_WHERE = { deletedAt: null, score: { not: null } } as const;

const CATALOG_INCLUDE = {
  MovieVod: true,
  movieScores: { where: ACTIVE_SCORE_WHERE },
  _count: {
    select: {
      Comment: { where: { deletedAt: null } },
      movieScores: { where: ACTIVE_SCORE_WHERE },
    },
  },
} as const;

interface CatalogQuery {
  query: string;
  genre: string;
  page: number;
  pageSize: number;
}

@Injectable()
export class MovieCatalogService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async getTopRated(limit: number) {
    const safeLimit = normalizeTopRatedLimit(limit);
    const scoreGroups = await this.prisma.movieScore.groupBy({
      by: ['movieCd'],
      where: ACTIVE_SCORE_WHERE,
    });
    if (scoreGroups.length === 0) return [];

    const movies = await this.prisma.movie.findMany({
      where: { movieCd: { in: scoreGroups.map(({ movieCd }) => movieCd) } },
      include: CATALOG_INCLUDE,
    });

    return movies
      .map(convertMovieDataWithCounts)
      .sort((left, right) => {
        return (
          right.averageScore - left.averageScore ||
          right.scoreCount - left.scoreCount ||
          toTimestamp(right.openDt) - toTimestamp(left.openDt) ||
          left.movieCd - right.movieCd
        );
      })
      .slice(0, safeLimit);
  }

  async getCatalog({ query, genre, page, pageSize }: CatalogQuery) {
    const safePage = Math.max(page || 1, 1);
    const safePageSize = Math.min(Math.max(pageSize || 24, 1), 48);
    const title = query.trim();
    const genreName = genre.trim();
    const where = {
      ...(title ? { title: { contains: title } } : {}),
      ...(genreName ? { genre: { contains: genreName } } : {}),
    };
    const [total, movies] = await Promise.all([
      this.prisma.movie.count({ where }),
      this.prisma.movie.findMany({
        where,
        include: CATALOG_INCLUDE,
        skip: (safePage - 1) * safePageSize,
        take: safePageSize,
        orderBy: [
          { openDt: 'desc' },
          { audience: 'desc' },
          { movieCd: 'desc' },
        ],
      }),
    ]);

    return {
      movies: movies.map(convertMovieDataWithCounts),
      page: safePage,
      pageSize: safePageSize,
      total,
      hasNext: safePage * safePageSize < total,
    };
  }
}

function normalizeTopRatedLimit(limit: number) {
  if (!Number.isFinite(limit)) return 12;
  return Math.min(Math.max(Math.trunc(limit), 1), 24);
}

function toTimestamp(value: string | Date) {
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}
