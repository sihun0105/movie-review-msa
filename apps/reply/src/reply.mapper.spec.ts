import { DEFAULT_PROFILE_IMAGE_URL } from '@app/common/constants/profile';
import { toReply } from './reply.mapper';

describe('toReply', () => {
  it('uses the default profile image for legacy users without an image', () => {
    const now = new Date('2026-07-17T00:00:00.000Z');
    const result = toReply({
      id: 1,
      comment: '댓글',
      parentId: null,
      createdAt: now,
      updatedAt: now,
      replies: [],
      User: {
        id: 4,
        email: 'user@example.com',
        nickname: '영화조아용',
        image: null,
      },
    });

    expect(result.avatar).toBe(DEFAULT_PROFILE_IMAGE_URL);
  });
});
