import { Reply } from '@app/common/protobuf';
import { DEFAULT_PROFILE_IMAGE_URL } from '@app/common/constants/profile';

export function toReply(reply: any): Reply {
  return {
    replyId: reply.id,
    comment: reply.comment,
    email: reply.User.email,
    nickname: reply.User.nickname,
    avatar: reply.User.image?.trim() || DEFAULT_PROFILE_IMAGE_URL,
    userId: reply.User.id,
    createdAt: reply.createdAt.toISOString(),
    updatedAt: reply.updatedAt.toISOString(),
    parentId: reply.parentId ?? undefined,
    replies: (reply.replies ?? []).map(toReply),
  };
}
