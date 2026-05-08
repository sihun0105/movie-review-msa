import { Injectable } from '@nestjs/common';
import {
  CreateArticleRequest,
  CreateCommentRequest,
  DeleteArticleRequest,
  DeleteCommentRequest,
  GetArticleLikeStatsRequest,
  GetCommentRequest,
  LikeArticleRequest,
  ListArticlesRequest,
  ListCommentsRequest,
  UpdateArticleRequest,
  UpdateCommentRequest,
} from '@app/common/protobuf';
import { GetArticleRequest } from 'proto/article';
import { ArticleCrudService } from './article-crud.service';
import { ArticleCommentService } from './article-comment.service';
import { ArticleLikeService } from './article-like.service';

@Injectable()
export class ArticleService {
  constructor(
    private readonly crud: ArticleCrudService,
    private readonly commentService: ArticleCommentService,
    private readonly likeService: ArticleLikeService,
  ) {}

  // Article CRUD
  createArticle(req: CreateArticleRequest) {
    return this.crud.createArticle(req);
  }
  getArticle(req: GetArticleRequest) {
    return this.crud.getArticle(req);
  }
  listArticles(req: ListArticlesRequest) {
    return this.crud.listArticles(req);
  }
  updateArticle(req: UpdateArticleRequest) {
    return this.crud.updateArticle(req);
  }
  deleteArticle(req: DeleteArticleRequest) {
    return this.crud.deleteArticle(req);
  }

  // Comments
  createComment(req: CreateCommentRequest) {
    return this.commentService.createComment(req);
  }
  getComment(req: GetCommentRequest) {
    return this.commentService.getComment(req);
  }
  updateComment(req: UpdateCommentRequest) {
    return this.commentService.updateComment(req);
  }
  deleteComment(req: DeleteCommentRequest) {
    return this.commentService.deleteComment(req);
  }
  listComments(req: ListCommentsRequest) {
    return this.commentService.listComments(req);
  }

  // Likes
  likeArticle(req: LikeArticleRequest) {
    return this.likeService.likeArticle(req);
  }
  getArticleLikeStats(req: GetArticleLikeStatsRequest) {
    return this.likeService.getArticleLikeStats(req);
  }
}
