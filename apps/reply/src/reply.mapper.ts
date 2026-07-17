import { Reply } from '@app/common/protobuf';

export function toReply(reply: any): Reply {
  return {
    replyId: reply.id,
    comment: reply.comment,
    email: reply.User.email,
    nickname: reply.User.nickname,
    avatar: reply.User.image ?? '',
    userId: reply.User.id,
    createdAt: reply.createdAt.toISOString(),
    updatedAt: reply.updatedAt.toISOString(),
    parentId: reply.parentId ?? undefined,
    replies: (reply.replies ?? []).map(toReply),
  };
}
