/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Empty } from './common';

export const replyProtobufPackage = 'reply';

export interface Reply {
  rating?: number;
  replyId: number;
  userId: number;
  nickname: string;
  email: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  avatar: string;
  parentId?: number | undefined;
  replies: Reply[];
  likeCount: number;
  dislikeCount: number;
  userReaction: string;
  isEdited: boolean;
  isDeleted: boolean;
}

export interface RepliesResult {
  replies: Reply[];
  hasNext: boolean;
}

export interface GetReplyDto {
  movieId: number;
  page: number;
  userId?: number | undefined;
}

export interface ReactReplyDto {
  userId: number;
  commentId: number;
  reaction: string;
}

export interface ReplyReactionResult {
  likeCount: number;
  dislikeCount: number;
  reaction: string;
}

export interface CreateReplyDto {
  userId: number;
  movieId: number;
  comment: string;
  parentId?: number | undefined;
}

export interface UpdateReplyDto {
  userId: number;
  commentId: number;
  comment: string;
}

export interface DeleteReplyDto {
  userId: number;
  commentId: number;
}

export const REPLY_PACKAGE_NAME = 'reply';

export interface ReplyServiceClient {
  getReply(request: GetReplyDto): Observable<RepliesResult>;

  createReply(request: CreateReplyDto): Observable<Empty>;

  updateReply(request: UpdateReplyDto): Observable<Empty>;

  deleteReply(request: DeleteReplyDto): Observable<Empty>;

  reactReply(request: ReactReplyDto): Observable<ReplyReactionResult>;
}

export interface ReplyServiceController {
  getReply(
    request: GetReplyDto,
  ): Promise<RepliesResult> | Observable<RepliesResult> | RepliesResult;

  createReply(
    request: CreateReplyDto,
  ): Promise<Empty> | Observable<Empty> | Empty;

  updateReply(
    request: UpdateReplyDto,
  ): Promise<Empty> | Observable<Empty> | Empty;

  deleteReply(
    request: DeleteReplyDto,
  ): Promise<Empty> | Observable<Empty> | Empty;

  reactReply(
    request: ReactReplyDto,
  ):
    | Promise<ReplyReactionResult>
    | Observable<ReplyReactionResult>
    | ReplyReactionResult;
}

export function ReplyServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getReply',
      'createReply',
      'updateReply',
      'deleteReply',
      'reactReply',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('ReplyService', method)(
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
      GrpcStreamMethod('ReplyService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const REPLY_SERVICE_NAME = 'ReplyService';
