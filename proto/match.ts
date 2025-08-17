/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'match';

/** Match Post Messages */
export interface MatchPost {
  id: string;
  title: string;
  userno: number;
  author: string;
  authorGender: string;
  content: string;
  movieTitle: string;
  theaterName: string;
  showTime: string;
  maxParticipants: number;
  currentParticipants: number;
  location: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface MatchApplication {
  id: string;
  matchPostId: string;
  applicantUserno: number;
  applicantName: string;
  message: string;
  /** pending, accepted, rejected */
  status: string;
  createdAt: string;
}

/** Request Messages */
export interface GetMatchPostsRequest {
  page: number;
  pageSize: number;
}

export interface CreateMatchPostRequest {
  title: string;
  content: string;
  movieTitle: string;
  theaterName: string;
  showTime: string;
  maxParticipants: number;
  location: string;
  userno: number;
  author: string;
}

export interface GetMatchPostRequest {
  matchId: string;
}

export interface UpdateMatchPostRequest {
  matchId: string;
  title: string;
  content: string;
  movieTitle: string;
  theaterName: string;
  showTime: string;
  maxParticipants: number;
  location: string;
  userno: number;
}

export interface DeleteMatchPostRequest {
  matchId: string;
  userno: number;
}

export interface ApplyToMatchRequest {
  matchId: string;
  applicantUserno: number;
  applicantName: string;
  message: string;
}

export interface GetMatchApplicationsRequest {
  matchId: string;
  userno: number;
}

export interface UpdateApplicationStatusRequest {
  matchId: string;
  applicationId: string;
  /** accepted, rejected */
  status: string;
  userno: number;
}

export interface GetMyPostsRequest {
  userno: number;
  page: number;
  pageSize: number;
}

export interface GetMyApplicationsRequest {
  userno: number;
  page: number;
  pageSize: number;
}

export interface GetMyApplicationStatusRequest {
  matchId: string;
  userno: number;
}

/** Response Messages */
export interface MatchPostResponse {
  matchPosts: MatchPost[];
  hasNext: boolean;
}

export interface SingleMatchPostResponse {
  matchPost: MatchPost | undefined;
}

export interface MatchApplicationsResponse {
  applications: MatchApplication[];
}

export interface CommonResponse {
  success: boolean;
  message: string;
}

export interface ApplicationResponse {
  success: boolean;
  message: string;
  /** 수락된 경우 채팅방 ID 반환 */
  chatRoomId: string;
}

export interface MyApplicationStatusResponse {
  application: MatchApplication | undefined;
  /** 신청했는지 여부 */
  hasApplication: boolean;
}

export const MATCH_PACKAGE_NAME = 'match';

/** Service Definition */

export interface MatchServiceClient {
  getMatchPosts(request: GetMatchPostsRequest): Observable<MatchPostResponse>;

  createMatchPost(
    request: CreateMatchPostRequest,
  ): Observable<SingleMatchPostResponse>;

  getMatchPost(
    request: GetMatchPostRequest,
  ): Observable<SingleMatchPostResponse>;

  updateMatchPost(
    request: UpdateMatchPostRequest,
  ): Observable<SingleMatchPostResponse>;

  deleteMatchPost(request: DeleteMatchPostRequest): Observable<CommonResponse>;

  applyToMatch(request: ApplyToMatchRequest): Observable<CommonResponse>;

  getMatchApplications(
    request: GetMatchApplicationsRequest,
  ): Observable<MatchApplicationsResponse>;

  updateApplicationStatus(
    request: UpdateApplicationStatusRequest,
  ): Observable<ApplicationResponse>;

  getMyPosts(request: GetMyPostsRequest): Observable<MatchPostResponse>;

  getMyApplications(
    request: GetMyApplicationsRequest,
  ): Observable<MatchApplicationsResponse>;

  getMyApplicationStatus(
    request: GetMyApplicationStatusRequest,
  ): Observable<MyApplicationStatusResponse>;
}

/** Service Definition */

export interface MatchServiceController {
  getMatchPosts(
    request: GetMatchPostsRequest,
  ):
    | Promise<MatchPostResponse>
    | Observable<MatchPostResponse>
    | MatchPostResponse;

  createMatchPost(
    request: CreateMatchPostRequest,
  ):
    | Promise<SingleMatchPostResponse>
    | Observable<SingleMatchPostResponse>
    | SingleMatchPostResponse;

  getMatchPost(
    request: GetMatchPostRequest,
  ):
    | Promise<SingleMatchPostResponse>
    | Observable<SingleMatchPostResponse>
    | SingleMatchPostResponse;

  updateMatchPost(
    request: UpdateMatchPostRequest,
  ):
    | Promise<SingleMatchPostResponse>
    | Observable<SingleMatchPostResponse>
    | SingleMatchPostResponse;

  deleteMatchPost(
    request: DeleteMatchPostRequest,
  ): Promise<CommonResponse> | Observable<CommonResponse> | CommonResponse;

  applyToMatch(
    request: ApplyToMatchRequest,
  ): Promise<CommonResponse> | Observable<CommonResponse> | CommonResponse;

  getMatchApplications(
    request: GetMatchApplicationsRequest,
  ):
    | Promise<MatchApplicationsResponse>
    | Observable<MatchApplicationsResponse>
    | MatchApplicationsResponse;

  updateApplicationStatus(
    request: UpdateApplicationStatusRequest,
  ):
    | Promise<ApplicationResponse>
    | Observable<ApplicationResponse>
    | ApplicationResponse;

  getMyPosts(
    request: GetMyPostsRequest,
  ):
    | Promise<MatchPostResponse>
    | Observable<MatchPostResponse>
    | MatchPostResponse;

  getMyApplications(
    request: GetMyApplicationsRequest,
  ):
    | Promise<MatchApplicationsResponse>
    | Observable<MatchApplicationsResponse>
    | MatchApplicationsResponse;

  getMyApplicationStatus(
    request: GetMyApplicationStatusRequest,
  ):
    | Promise<MyApplicationStatusResponse>
    | Observable<MyApplicationStatusResponse>
    | MyApplicationStatusResponse;
}

export function MatchServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getMatchPosts',
      'createMatchPost',
      'getMatchPost',
      'updateMatchPost',
      'deleteMatchPost',
      'applyToMatch',
      'getMatchApplications',
      'updateApplicationStatus',
      'getMyPosts',
      'getMyApplications',
      'getMyApplicationStatus',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('MatchService', method)(
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
      GrpcStreamMethod('MatchService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const MATCH_SERVICE_NAME = 'MatchService';
