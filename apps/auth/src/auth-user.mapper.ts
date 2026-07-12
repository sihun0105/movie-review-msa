import { User } from '@app/common/protobuf';

export function toAuthUser(user: any): User {
  const { password: _, ...safeUser } = user;
  return {
    ...safeUser,
    nickname: safeUser.nickname ?? '',
    createdAt: safeUser.createdAt.toISOString(),
    updatedAt: safeUser.updatedAt.toISOString(),
    deletedAt: safeUser.deletedAt ? safeUser.deletedAt.toISOString() : null,
    gender: safeUser.gender ?? '',
  } as User;
}
