import { User } from '@app/common/protobuf';

export function convertToUserEntity(arg: any) {
  const result = {
    id: arg.id,
    email: arg.email,
    nickname: arg.nickname ?? '',
    image: resolveImageUrl(arg.image),
    createdAt: arg.createdAt,
    updatedAt: arg.updatedAt,
    deletedAt: arg.deletedAt ?? null,
    gender: arg.gender ?? '',
  };
  assertUserEntity(result);
  return result;
}

function resolveImageUrl(image: string | null | undefined): string {
  if (!image) return '';
  if (/^https?:\/\//.test(image)) return image;
  return `${(process.env.FILE_SERVER_API ?? '').replace(/\/$/, '')}${image}`;
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
    (arg.deletedAt === null || typeof arg.deletedAt === 'string') &&
    (arg.gender === null || typeof arg.gender === 'string')
  );
}
