import { BadRequestException } from '@nestjs/common';
import { KobisMovie } from '@app/common/types/movie-response';
import { MovieData } from '@app/common/protobuf';

function assertKobisMovieData(unknown: any): asserts unknown is KobisMovie {
  if (
    !unknown.rnum || !unknown.rank || !unknown.rankInten ||
    !unknown.rankOldAndNew || !unknown.movieCd || !unknown.movieNm ||
    !unknown.openDt || !unknown.audiAcc || !unknown.audiChange ||
    !unknown.audiCnt || !unknown.audiInten || !unknown.salesAcc ||
    !unknown.salesAmt || !unknown.salesChange || !unknown.salesInten ||
    !unknown.salesShare || !unknown.scrnCnt || !unknown.showCnt
  ) {
    throw new BadRequestException('Invalid KobisMovie data');
  }
}

export function convertKobisMovieData(unknown: any): KobisMovie {
  if (unknown.openDt === ' ') unknown.openDt = '0';
  assertKobisMovieData(unknown);
  return {
    rnum: unknown.rnum ?? '',
    rank: unknown.rank ?? '',
    rankInten: unknown.rankInten ?? '',
    rankOldAndNew: unknown.rankOldAndNew ?? '',
    movieCd: unknown.movieCd ?? '',
    movieNm: unknown.movieNm ?? '',
    openDt: unknown.openDt ?? '',
    audiAcc: unknown.audiAcc ?? '',
    audiChange: unknown.audiChange ?? '',
    audiCnt: unknown.audiCnt ?? '',
    audiInten: unknown.audiInten ?? '',
    salesAcc: unknown.salesAcc ?? '',
    salesAmt: unknown.salesAmt ?? '',
    salesChange: unknown.salesChange ?? '',
    salesInten: unknown.salesInten ?? '',
    salesShare: unknown.salesShare ?? '',
    scrnCnt: unknown.scrnCnt ?? '',
    showCnt: unknown.showCnt ?? '',
  };
}

export function convertMovieDataWithCounts(
  movieData: any,
): Omit<MovieData, 'vector'> {
  const scoreSum =
    movieData.movieScores?.reduce((sum, score) => sum + score.score, 0) || 0;
  const scoreCount = movieData._count?.movieScores || 0;
  const averageScore =
    Math.round((scoreCount > 0 ? scoreSum / scoreCount : 0) * 10) / 10;

  return {
    title: movieData.title ?? '',
    audience: Number(movieData.audience) ?? 0,
    rank: Number(movieData.rank) ?? 0,
    createdAt: movieData.createdAt ?? new Date(0),
    updatedAt: movieData.updatedAt ?? new Date(0),
    id: Number(movieData.id) ?? 0,
    movieCd: Number(movieData.movieCd) ?? 0,
    poster: movieData.poster ?? '',
    rankInten: movieData.rankInten ?? 0,
    plot: movieData.plot ?? '',
    rankOldAndNew: movieData.rankOldAndNew ?? '',
    openDt: movieData.openDt ?? new Date(0),
    genre: movieData.genre ?? '',
    director: movieData.director ?? '',
    ratting: movieData.ratting ?? '',
    vods: movieData.MovieVod ?? [],
    commentCount: movieData._count?.Comment ?? 0,
    scoreCount: scoreCount,
    averageScore: averageScore,
  } as Omit<MovieData, 'vector'>;
}
