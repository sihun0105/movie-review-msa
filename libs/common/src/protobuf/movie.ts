/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Empty } from './common';

export const movieProtobufPackage = 'movie';

export interface UpsertMovieScoreRequest {
  movieCd: number;
  score: number;
  userId: number;
}

export interface GetMovieScoreRequest {
  movieCd: number;
  userId: number;
}

export interface MovieScore {
  id: number;
  movieCd: number;
  score: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export interface RecommendMovieRequest {
  movieCd: number;
}

export interface MovieData {
  id: number;
  movieCd: number;
  audience: number;
  title: string;
  rank: number;
  createdAt: string;
  updatedAt: string;
  poster: string;
  rankInten: string;
  plot: string;
  rankOldAndNew: string;
  openDt: string;
  genre: string;
  director: string;
  ratting: string;
  vods: MovieVod[];
}

export interface MovieVod {
  id: number;
  vodUrl: string;
  movieCd: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface MovieDatas {
  MovieData: MovieData[];
}

export interface AverageMovieScore {
  movieCd: number;
  averageScore: number;
  scoreCount: number;
}

export const MOVIE_PACKAGE_NAME = 'movie';

export interface MovieServiceClient {
  getMovieDatas(request: Empty): Observable<MovieDatas>;

  fetchMovies(request: Empty): Observable<Empty>;

  recommendMovie(request: RecommendMovieRequest): Observable<MovieDatas>;

  getMovieDetailData(request: RecommendMovieRequest): Observable<MovieData>;

  upsertMovieScore(request: UpsertMovieScoreRequest): Observable<MovieScore>;

  getMovieScore(request: GetMovieScoreRequest): Observable<MovieScore>;

  getAverageMovieScore(
    request: RecommendMovieRequest,
  ): Observable<AverageMovieScore>;
}

export interface MovieServiceController {
  getMovieDatas(
    request: Empty,
  ): Promise<MovieDatas> | Observable<MovieDatas> | MovieDatas;

  fetchMovies(request: Empty): Promise<Empty> | Observable<Empty> | Empty;

  recommendMovie(
    request: RecommendMovieRequest,
  ): Promise<MovieDatas> | Observable<MovieDatas> | MovieDatas;

  getMovieDetailData(
    request: RecommendMovieRequest,
  ): Promise<MovieData> | Observable<MovieData> | MovieData;

  upsertMovieScore(
    request: UpsertMovieScoreRequest,
  ): Promise<MovieScore> | Observable<MovieScore> | MovieScore;

  getMovieScore(
    request: GetMovieScoreRequest,
  ): Promise<MovieScore> | Observable<MovieScore> | MovieScore;

  getAverageMovieScore(
    request: RecommendMovieRequest,
  ):
    | Promise<AverageMovieScore>
    | Observable<AverageMovieScore>
    | AverageMovieScore;
}

export function MovieServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getMovieDatas',
      'fetchMovies',
      'recommendMovie',
      'getMovieDetailData',
      'upsertMovieScore',
      'getMovieScore',
      'getAverageMovieScore',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('MovieService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('MovieService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const MOVIE_SERVICE_NAME = 'MovieService';
