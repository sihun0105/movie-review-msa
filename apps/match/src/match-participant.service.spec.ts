import { MatchParticipantService } from './match-participant.service';

describe('MatchParticipantService', () => {
  const findFirst = jest.fn();
  const service = new MatchParticipantService({
    matchPost: { findFirst },
  } as any);

  beforeEach(() => findFirst.mockReset());

  it('returns the active host first and only accepted active participants', async () => {
    findFirst.mockResolvedValue({
      User: {
        id: 4,
        nickname: '호스트',
        image: 'host.jpg',
        deletedAt: null,
      },
      MatchApplication: [
        {
          status: 'accepted',
          User: {
            id: 7,
            nickname: '참여자',
            image: 'member.jpg',
            deletedAt: null,
          },
        },
        {
          status: 'accepted',
          User: {
            id: 8,
            nickname: '탈퇴 사용자',
            image: 'deleted.jpg',
            deletedAt: new Date(),
          },
        },
      ],
    });

    await expect(service.get({ matchId: 'match-1' })).resolves.toEqual({
      participants: [
        { nickname: '호스트', image: 'host.jpg', role: 'host' },
        {
          nickname: '참여자',
          image: 'member.jpg',
          role: 'participant',
        },
      ],
    });
    expect(findFirst).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 'match-1', deletedAt: null },
        include: expect.objectContaining({
          MatchApplication: expect.objectContaining({
            where: { status: 'accepted' },
          }),
        }),
      }),
    );
  });

  it('omits a deleted host and keeps accepted active participants', async () => {
    findFirst.mockResolvedValue({
      User: {
        id: 4,
        nickname: '탈퇴 호스트',
        image: null,
        deletedAt: new Date(),
      },
      MatchApplication: [
        {
          status: 'accepted',
          User: { id: 7, nickname: '참여자', image: null, deletedAt: null },
        },
      ],
    });

    await expect(service.get({ matchId: 'match-1' })).resolves.toEqual({
      participants: [{ nickname: '참여자', image: '', role: 'participant' }],
    });
  });

  it('returns an empty list for a missing match', async () => {
    findFirst.mockResolvedValue(null);

    await expect(service.get({ matchId: 'missing' })).resolves.toEqual({
      participants: [],
    });
  });
});
