import { Injectable } from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import { UtilsService } from '@app/utils';
import { AverageMovieScore, MovieScore } from '@app/common/protobuf';

@Injectable()
export class MovieScoreService {
  constructor(
    private readonly prisma: MySQLPrismaService,
    private readonly utilsService: UtilsService,
  ) {}

  async upsertMovieScore({
    movieCd,
    score,
    userId,
  }: {
    movieCd: number;
    score: number;
    userId: number;
  }): Promise<MovieScore> | null {
    const movieScore = await this.prisma.movieScore.upsert({
      where: {
        movieCd_Userno: { movieCd, Userno: userId },
      },
      update: { score, updatedAt: new Date() },
      create: { movieCd, Userno: userId, score },
    });

    if (!movieScore) return null;

    return {
      ...movieScore,
      userId: movieScore.Userno,
      createdAt: this.utilsService.dateToTimestamp(movieScore.createdAt as Date),
      updatedAt: this.utilsService.dateToTimestamp(movieScore.updatedAt as Date),
    } as MovieScore;
  }

  async getMovieScore({
    movieCd,
    userId,
  }: {
    movieCd: number;
    userId: number;
  }): Promise<MovieScore> {
    const movieScore = await this.prisma.movieScore.findUnique({
      where: {
        movieCd_Userno: { movieCd, Userno: userId },
      },
    });

    if (!movieScore) {
      return {
        movieCd,
        score: 0,
        userId,
        createdAt: this.utilsService.dateToTimestamp(new Date(0)),
        updatedAt: this.utilsService.dateToTimestamp(new Date(0)),
      } as MovieScore;
    }

    return {
      ...movieScore,
      userId: movieScore.Userno,
      createdAt: this.utilsService.dateToTimestamp(movieScore.createdAt as Date),
      updatedAt: this.utilsService.dateToTimestamp(movieScore.updatedAt as Date),
    } as MovieScore;
  }

  async getAverageMovieScore(movieCd: number): Promise<AverageMovieScore> {
    const aggregate = await this.prisma.movieScore.aggregate({
      where: { movieCd },
      _avg: { score: true },
    });

    if (!aggregate) {
      return { movieCd, averageScore: 0, scoreCount: 0 };
    }

    const scoreCount = await this.prisma.movieScore.count({
      where: { movieCd },
    });
    return {
      movieCd,
      averageScore: aggregate._avg.score ?? 0,
      scoreCount,
    } as AverageMovieScore;
  }
}
