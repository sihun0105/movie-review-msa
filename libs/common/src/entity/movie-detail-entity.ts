import { MovieDetailData } from '@app/common/types/movie-detail-response';

export function convertToMovieDetailEntity(arg: any) {
  const result = {
    title: arg.title,
    titleEng: arg.titleEng,
    titleOrg: arg.titleOrg,
    directorNm: arg.directorNm,
    directorEnNm: arg.directorEnNm,
    actorNm: arg.actorNm,
    plot: arg.plot,
    company: arg.company,
    nation: arg.nation,
    rating: arg.rating,
    genre: arg.genre,
    releaseDate: arg.releaseDate,
    runtime: arg.runtime,
    posterUrl: arg.posterUrl,
  };
  assertMovieDetailEntity(result);
  return result;
}

export function assertMovieDetailEntity(
  arg: any,
): asserts arg is MovieDetailData {
  if (!isMovieDetailEntity(arg)) {
    throw new Error('Invalid movie detail data');
  }
}

export function isMovieDetailEntity(arg: any): arg is MovieDetailData {
  return (
    typeof arg.title === 'string' &&
    typeof arg.titleEng === 'string' &&
    typeof arg.titleOrg === 'string' &&
    typeof arg.directorNm === 'string' &&
    typeof arg.directorEnNm === 'string' &&
    typeof arg.actorNm === 'string' &&
    typeof arg.plot === 'string' &&
    typeof arg.company === 'string' &&
    typeof arg.nation === 'string' &&
    typeof arg.rating === 'string' &&
    typeof arg.genre === 'string' &&
    typeof arg.releaseDate === 'string' &&
    typeof arg.runtime === 'string' &&
    typeof arg.posterUrl === 'string'
  );
}
