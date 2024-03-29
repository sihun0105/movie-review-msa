/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Empty } from './user';

export const movieProtobufPackage = 'movie';

export interface FetchMoviesRequest {
  fetchDate: string;
}

export const MOVIE_PACKAGE_NAME = 'movie';

export interface MovieServiceClient {
  fetchMovies(request: FetchMoviesRequest): Observable<Empty>;
}

export interface MovieServiceController {
  fetchMovies(
    request: FetchMoviesRequest,
  ): Promise<Empty> | Observable<Empty> | Empty;
}

export function MovieServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['fetchMovies'];
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
