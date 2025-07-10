/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Empty } from './common';

export const protobufPackage = 'article';

/** ===== Like ===== */
export enum LikeType {
  LIKE = 0,
  DISLIKE = 1,
  UNRECOGNIZED = -1,
}

/** ===== Article ===== */
export interface Article {
  id: number;
  userno: number;
  title: string;
  content: string;
  likeCount: number;
  dislikeCount: number;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  author: string;
}

export interface CreateArticleRequest {
  userno: number;
  title: string;
  content: string;
}

export interface CreateArticleResponse {
  article: Article | undefined;
}

export interface GetArticleRequest {
  id: number;
}

export interface GetArticleResponse {
  article: Article | undefined;
}

export interface ListArticlesRequest {
  page: number;
  pageSize: number;
}

export interface ListArticlesResponse {
  articles: Article[];
  hasNext: boolean;
}

export interface UpdateArticleRequest {
  id: number;
  userno: number;
  title: string;
  content: string;
}

export interface DeleteArticleRequest {
  id: number;
  userno: number;
}

/** ===== Comment ===== */
export interface ArticleComment {
  id: number;
  articleId: number;
  userno: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  nickname: string;
  avatar: string;
}

export interface CreateCommentRequest {
  articleId: number;
  userno: number;
  content: string;
}

export interface GetCommentRequest {
  id: number;
}

export interface UpdateCommentRequest {
  id: number;
  userno: number;
  content: string;
}

export interface DeleteCommentRequest {
  id: number;
  userno: number;
}

export interface ListCommentsRequest {
  articleId: number;
  page: number;
  pageSize: number;
}

export interface ListCommentsResponse {
  comments: ArticleComment[];
  hasNext: boolean;
  totalCount: number;
}

export interface ArticleLike {
  id: number;
  articleId: number;
  userno: number;
  type: LikeType;
  createdAt: string;
}

export interface LikeArticleRequest {
  articleId: number;
  userno: number;
  type: LikeType;
}

export interface GetArticleLikeStatsRequest {
  articleId: number;
  userno: number;
}

export interface GetArticleLikeStatsResponse {
  userno: number;
  articleId: number;
  hasLiked: boolean;
  hasDisliked: boolean;
}

export const ARTICLE_PACKAGE_NAME = 'article';

/** ===== Service ===== */

export interface ArticleServiceClient {
  /** Article */

  createArticle(
    request: CreateArticleRequest,
  ): Observable<CreateArticleResponse>;

  getArticle(request: GetArticleRequest): Observable<GetArticleResponse>;

  listArticles(request: ListArticlesRequest): Observable<ListArticlesResponse>;

  updateArticle(
    request: UpdateArticleRequest,
  ): Observable<CreateArticleResponse>;

  deleteArticle(request: DeleteArticleRequest): Observable<Empty>;

  /** Comment */

  createComment(request: CreateCommentRequest): Observable<ArticleComment>;

  getComment(request: GetCommentRequest): Observable<ArticleComment>;

  updateComment(request: UpdateCommentRequest): Observable<ArticleComment>;

  deleteComment(request: DeleteCommentRequest): Observable<Empty>;

  listComments(request: ListCommentsRequest): Observable<ListCommentsResponse>;

  /** Like */

  likeArticle(request: LikeArticleRequest): Observable<ArticleLike>;

  getArticleLikeStats(
    request: GetArticleLikeStatsRequest,
  ): Observable<GetArticleLikeStatsResponse>;
}

/** ===== Service ===== */

export interface ArticleServiceController {
  /** Article */

  createArticle(
    request: CreateArticleRequest,
  ):
    | Promise<CreateArticleResponse>
    | Observable<CreateArticleResponse>
    | CreateArticleResponse;

  getArticle(
    request: GetArticleRequest,
  ):
    | Promise<GetArticleResponse>
    | Observable<GetArticleResponse>
    | GetArticleResponse;

  listArticles(
    request: ListArticlesRequest,
  ):
    | Promise<ListArticlesResponse>
    | Observable<ListArticlesResponse>
    | ListArticlesResponse;

  updateArticle(
    request: UpdateArticleRequest,
  ):
    | Promise<CreateArticleResponse>
    | Observable<CreateArticleResponse>
    | CreateArticleResponse;

  deleteArticle(
    request: DeleteArticleRequest,
  ): Promise<Empty> | Observable<Empty> | Empty;

  /** Comment */

  createComment(
    request: CreateCommentRequest,
  ): Promise<ArticleComment> | Observable<ArticleComment> | ArticleComment;

  getComment(
    request: GetCommentRequest,
  ): Promise<ArticleComment> | Observable<ArticleComment> | ArticleComment;

  updateComment(
    request: UpdateCommentRequest,
  ): Promise<ArticleComment> | Observable<ArticleComment> | ArticleComment;

  deleteComment(
    request: DeleteCommentRequest,
  ): Promise<Empty> | Observable<Empty> | Empty;

  listComments(
    request: ListCommentsRequest,
  ):
    | Promise<ListCommentsResponse>
    | Observable<ListCommentsResponse>
    | ListCommentsResponse;

  /** Like */

  likeArticle(
    request: LikeArticleRequest,
  ): Promise<ArticleLike> | Observable<ArticleLike> | ArticleLike;

  getArticleLikeStats(
    request: GetArticleLikeStatsRequest,
  ):
    | Promise<GetArticleLikeStatsResponse>
    | Observable<GetArticleLikeStatsResponse>
    | GetArticleLikeStatsResponse;
}

export function ArticleServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createArticle',
      'getArticle',
      'listArticles',
      'updateArticle',
      'deleteArticle',
      'createComment',
      'getComment',
      'updateComment',
      'deleteComment',
      'listComments',
      'likeArticle',
      'getArticleLikeStats',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('ArticleService', method)(
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
      GrpcStreamMethod('ArticleService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const ARTICLE_SERVICE_NAME = 'ArticleService';
