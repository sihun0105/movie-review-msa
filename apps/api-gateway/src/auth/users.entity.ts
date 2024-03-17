import { User } from '@app/common';

export function convertToUserEntity(arg: any) {
  const result = {
    id: arg.id,
    email: arg.email,
    nickname: arg.nickname,
    createdAt: arg.createdAt,
    updatedAt: arg.updatedAt,
    deletedAt: arg.deletedAt ?? null,
  };
  assertUserEntity(result);
  return result;
}

export function assertUserEntity(arg: any): asserts arg is User {
  if (!isUserEntity(arg)) {
    throw new Error('Invalid user');
  }
}

export function isUserEntity(arg: any): arg is User {
  return (
    typeof arg.id === 'number' &&
    typeof arg.email === 'string' &&
    typeof arg.nickname === 'string' &&
    typeof arg.createdAt === 'string' &&
    typeof arg.updatedAt === 'string' &&
    (arg.deletedAt === null || typeof arg.deletedAt === 'string')
  );
}
