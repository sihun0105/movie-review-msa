import { DEFAULT_PROFILE_IMAGE_URL } from '@app/common/constants/profile';
import { ArticleComment } from '@app/common/protobuf';
import { UtilsService } from '@app/utils';

type CommentWithRelations = {
  id: number;
  articleId: number;
  userno: number;
  content: string;
  parentId?: number | null;
  isEdited?: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  User?: { nickname: string; image?: string | null };
  reactions?: Array<{ userno: number; type: string }>;
  replies?: CommentWithRelations[];
};

export function mapArticleComment(
  comment: CommentWithRelations,
  utils: UtilsService,
  viewerId = 0,
): ArticleComment {
  const deleted = Boolean(comment.deletedAt);
  const reactions = comment.reactions ?? [];
  return {
    id: comment.id,
    articleId: comment.articleId,
    userno: comment.userno,
    content: deleted ? '삭제된 댓글입니다.' : comment.content,
    createdAt: comment.createdAt.toISOString(),
    updatedAt: comment.updatedAt.toISOString(),
    deletedAt: utils.toNullableISOString(comment.deletedAt),
    nickname: deleted ? '' : comment.User?.nickname ?? '',
    avatar: deleted
      ? ''
      : comment.User?.image?.trim() || DEFAULT_PROFILE_IMAGE_URL,
    parentId: comment.parentId ?? 0,
    replies: (comment.replies ?? []).map((reply) =>
      mapArticleComment(reply, utils, viewerId),
    ),
    likeCount: reactions.filter(({ type }) => type === 'like').length,
    dislikeCount: reactions.filter(({ type }) => type === 'dislike').length,
    userReaction:
      reactions.find(({ userno }) => userno === viewerId)?.type ?? '',
    isEdited: Boolean(comment.isEdited),
    isDeleted: deleted,
  };
}
