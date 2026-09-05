import { Reply } from '@app/common/protobuf';
import { DEFAULT_PROFILE_IMAGE_URL } from '@app/common/constants/profile';

export function toReply(reply: any, userId?: number, ratings = new Map<number, number>()): Reply {
  const reactions = reply.reactions ?? [];
  const isDeleted = Boolean(reply.deletedAt);
  return {
    replyId: reply.id,
    comment: isDeleted ? '삭제된 댓글입니다.' : reply.comment,
    email: reply.User.email,
    nickname: reply.User.nickname,
    avatar: reply.User.image?.trim() || DEFAULT_PROFILE_IMAGE_URL,
    userId: reply.User.id,
    rating: isDeleted ? undefined : ratings.get(reply.User.id),
    createdAt: reply.createdAt.toISOString(),
    updatedAt: reply.updatedAt.toISOString(),
    parentId: reply.parentId ?? undefined,
    replies: (reply.replies ?? []).map((child) => toReply(child, userId, ratings)),
    likeCount: reactions.filter((item) => item.type === 'like').length,
    dislikeCount: reactions.filter((item) => item.type === 'dislike').length,
    userReaction: reactions.find((item) => item.userno === userId)?.type ?? '',
    isEdited: Boolean(reply.isEdited),
    isDeleted,
  };
}
