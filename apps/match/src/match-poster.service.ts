import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';

@Injectable()
export class MatchPosterService {
  constructor(private readonly prisma: MySQLPrismaService) {}

  async getPosterMap(movieTitles: string[]): Promise<Map<string, string>> {
    const titles = [
      ...new Set(movieTitles.map((title) => title.trim()).filter(Boolean)),
    ];
    if (titles.length === 0) return new Map();

    const movies = await this.prisma.movie.findMany({
      where: { title: { in: titles }, poster: { not: null } },
      select: { title: true, poster: true },
      orderBy: { updatedAt: 'desc' },
    });

    const posters = new Map<string, string>();
    movies.forEach(({ title, poster }) => {
      if (title && poster && !posters.has(title)) posters.set(title, poster);
    });
    return posters;
  }
}
