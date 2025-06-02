/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty } from "./common";

export const protobufPackage = "recruit";

export enum RecruitStatus {
  OPEN = 0,
  MATCHED = 1,
  CLOSED = 2,
  UNRECOGNIZED = -1,
}

export enum MatchStatus {
  PENDING = 0,
  CONFIRMED = 1,
  CANCELLED = 2,
  UNRECOGNIZED = -1,
}

/** Recruit */
export interface Recruit {
  id: number;
  userno: number;
  title: string;
  content: string;
  screeningDate: string;
  location: string;
  status: RecruitStatus;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  theaterName: string;
}

export interface GetRecruitsRequest {
  page: number;
  size: number;
}

export interface GetRecruitsResponse {
  recruits: Recruit[];
  hasNext: boolean;
}

export interface GetRecruitRequest {
  id: number;
}

export interface PostRecruitRequest {
  userno: number;
  title: string;
  content: string;
  screeningDate: string;
  location: string;
}

export interface DeleteRecruitRequest {
  id: number;
}

export interface UpdateRecruitRequest {
  id: number;
  title: string;
  content: string;
  screeningDate: string;
  location: string;
}

/** RecruitComment */
export interface RecruitComment {
  id: number;
  recruitId: number;
  userno: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface GetRecruitCommentRequest {
  recruitId: number;
  page: number;
  size: number;
}

export interface GetRecruitCommentResponse {
  comments: RecruitComment[];
  hasNext: boolean;
}

export interface PostRecruitCommentRequest {
  recruitId: number;
  userno: number;
  content: string;
}

export interface UpdateRecruitCommentRequest {
  id: number;
  content: string;
}

export interface DeleteRecruitCommentRequest {
  id: number;
}

/** Match */
export interface Match {
  id: number;
  recruitId: number;
  requesterId: number;
  ownerId: number;
  acceptedAt: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  status: MatchStatus;
}

export interface GetMatchRequest {
  id: number;
}

export interface PostMatchRequest {
  recruitId: number;
  requesterId: number;
  ownerId: number;
}

export interface UpdateMatchRequest {
  id: number;
  status: MatchStatus;
}

export interface DeleteMatchRequest {
  id: number;
}

export const RECRUIT_PACKAGE_NAME = "recruit";

export interface RecruitServiceClient {
  /** Recruit */

  getRecruits(request: GetRecruitsRequest): Observable<GetRecruitsResponse>;

  getRecruit(request: GetRecruitRequest): Observable<Recruit>;

  postRecruit(request: PostRecruitRequest): Observable<Empty>;

  updateRecruit(request: UpdateRecruitRequest): Observable<Empty>;

  deleteRecruit(request: DeleteRecruitRequest): Observable<Empty>;

  /** RecruitComment */

  getRecruitComment(request: GetRecruitCommentRequest): Observable<GetRecruitCommentResponse>;

  postRecruitComment(request: PostRecruitCommentRequest): Observable<Empty>;

  updateRecruitComment(request: UpdateRecruitCommentRequest): Observable<Empty>;

  deleteRecruitComment(request: DeleteRecruitCommentRequest): Observable<Empty>;

  /** Match */

  getMatch(request: GetMatchRequest): Observable<Match>;

  postMatch(request: PostMatchRequest): Observable<Empty>;

  updateMatch(request: UpdateMatchRequest): Observable<Empty>;

  deleteMatch(request: DeleteMatchRequest): Observable<Empty>;
}

export interface RecruitServiceController {
  /** Recruit */

  getRecruits(
    request: GetRecruitsRequest,
  ): Promise<GetRecruitsResponse> | Observable<GetRecruitsResponse> | GetRecruitsResponse;

  getRecruit(request: GetRecruitRequest): Promise<Recruit> | Observable<Recruit> | Recruit;

  postRecruit(request: PostRecruitRequest): Promise<Empty> | Observable<Empty> | Empty;

  updateRecruit(request: UpdateRecruitRequest): Promise<Empty> | Observable<Empty> | Empty;

  deleteRecruit(request: DeleteRecruitRequest): Promise<Empty> | Observable<Empty> | Empty;

  /** RecruitComment */

  getRecruitComment(
    request: GetRecruitCommentRequest,
  ): Promise<GetRecruitCommentResponse> | Observable<GetRecruitCommentResponse> | GetRecruitCommentResponse;

  postRecruitComment(request: PostRecruitCommentRequest): Promise<Empty> | Observable<Empty> | Empty;

  updateRecruitComment(request: UpdateRecruitCommentRequest): Promise<Empty> | Observable<Empty> | Empty;

  deleteRecruitComment(request: DeleteRecruitCommentRequest): Promise<Empty> | Observable<Empty> | Empty;

  /** Match */

  getMatch(request: GetMatchRequest): Promise<Match> | Observable<Match> | Match;

  postMatch(request: PostMatchRequest): Promise<Empty> | Observable<Empty> | Empty;

  updateMatch(request: UpdateMatchRequest): Promise<Empty> | Observable<Empty> | Empty;

  deleteMatch(request: DeleteMatchRequest): Promise<Empty> | Observable<Empty> | Empty;
}

export function RecruitServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getRecruits",
      "getRecruit",
      "postRecruit",
      "updateRecruit",
      "deleteRecruit",
      "getRecruitComment",
      "postRecruitComment",
      "updateRecruitComment",
      "deleteRecruitComment",
      "getMatch",
      "postMatch",
      "updateMatch",
      "deleteMatch",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("RecruitService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("RecruitService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const RECRUIT_SERVICE_NAME = "RecruitService";
