/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty } from "./common";

export const protobufPackage = "reply";

export interface Reply {
  replyId: number;
  userId: number;
  nickname: string;
  email: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface RepliesResult {
  replies: Reply[];
  hasNext: boolean;
}

export interface GetReplyDto {
  movieId: number;
  page: number;
}

export interface CreateReplyDto {
  userId: number;
  movieId: number;
  comment: string;
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

export const REPLY_PACKAGE_NAME = "reply";

export interface ReplyServiceClient {
  getReply(request: GetReplyDto): Observable<RepliesResult>;

  createReply(request: CreateReplyDto): Observable<Empty>;

  updateReply(request: UpdateReplyDto): Observable<Empty>;

  deleteReply(request: DeleteReplyDto): Observable<Empty>;
}

export interface ReplyServiceController {
  getReply(request: GetReplyDto): Promise<RepliesResult> | Observable<RepliesResult> | RepliesResult;

  createReply(request: CreateReplyDto): Promise<Empty> | Observable<Empty> | Empty;

  updateReply(request: UpdateReplyDto): Promise<Empty> | Observable<Empty> | Empty;

  deleteReply(request: DeleteReplyDto): Promise<Empty> | Observable<Empty> | Empty;
}

export function ReplyServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getReply", "createReply", "updateReply", "deleteReply"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ReplyService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ReplyService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const REPLY_SERVICE_NAME = "ReplyService";
