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

  it('hides deleted content and preserves its active child replies', () => {
    const now = new Date('2026-07-17T00:00:00.000Z');
    const user = {
      id: 4,
      email: 'user@example.com',
      nickname: '영화조아용',
      image: null,
    };
    const result = toReply({
      id: 1,
      comment: '삭제 전 내용',
      deletedAt: now,
      isEdited: false,
      parentId: null,
      createdAt: now,
      updatedAt: now,
      reactions: [],
      replies: [
        {
          id: 2,
          comment: '남아 있는 대댓글',
          deletedAt: null,
          isEdited: false,
          parentId: 1,
          createdAt: now,
          updatedAt: now,
          reactions: [],
          replies: [],
          User: user,
        },
      ],
      User: user,
    });

    expect(result).toMatchObject({
      comment: '삭제된 댓글입니다.',
      isDeleted: true,
      replies: [expect.objectContaining({ comment: '남아 있는 대댓글' })],
    });
  });

  it('maps edit and reaction state for the current user', () => {
    const now = new Date('2026-07-17T00:00:00.000Z');
    const result = (toReply as any)(
      {
        id: 1,
        comment: '수정된 댓글',
        deletedAt: null,
        isEdited: true,
        parentId: null,
        createdAt: now,
        updatedAt: now,
        replies: [],
        reactions: [
          { userno: 4, type: 'like' },
          { userno: 5, type: 'like' },
          { userno: 6, type: 'dislike' },
        ],
        User: {
          id: 4,
          email: 'user@example.com',
          nickname: '영화조아용',
          image: null,
        },
      },
      4,
    );

    expect(result).toMatchObject({
      isEdited: true,
      isDeleted: false,
      likeCount: 2,
      dislikeCount: 1,
      userReaction: 'like',
    });
  });
});
