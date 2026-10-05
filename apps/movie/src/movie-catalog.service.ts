import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import { convertMovieDataWithCounts } from './movie.formatter';

const CATALOG_INCLUDE = {
  MovieVod: true,
  movieScores: { where: { deletedAt: null } },
  _count: {
    select: {
      Comment: { where: { deletedAt: null } },
      movieScores: { where: { deletedAt: null } },
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
        orderBy: [{ openDt: 'desc' }, { audience: 'desc' }],
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
