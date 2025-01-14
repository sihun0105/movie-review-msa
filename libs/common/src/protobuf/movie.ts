/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Empty } from './common';

export const movieProtobufPackage = 'movie';

export interface FetchMoviesRequest {
  fetchDate: string;
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
}

export interface MovieDatas {
  MovieData: MovieData[];
}

export const MOVIE_PACKAGE_NAME = 'movie';

export interface MovieServiceClient {
  getMovieDatas(request: Empty): Observable<MovieDatas>;

  fetchMovies(request: FetchMoviesRequest): Observable<Empty>;

  recommendMovie(request: RecommendMovieRequest): Observable<MovieDatas>;
}

export interface MovieServiceController {
  getMovieDatas(
    request: Empty,
  ): Promise<MovieDatas> | Observable<MovieDatas> | MovieDatas;

  fetchMovies(
    request: FetchMoviesRequest,
  ): Promise<Empty> | Observable<Empty> | Empty;

  recommendMovie(
    request: RecommendMovieRequest,
  ): Promise<MovieDatas> | Observable<MovieDatas> | MovieDatas;
}

export function MovieServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getMovieDatas',
      'fetchMovies',
      'recommendMovie',
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
