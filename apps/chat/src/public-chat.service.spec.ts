import { PublicChatService } from './public-chat.service';

describe('PublicChatService', () => {
  it('uses the current user profile for stored chat history', async () => {
    const prisma = {
      publicChatMessage: {
        findMany: jest.fn().mockResolvedValue([
          {
            id: 'message-1',
            clientId: 'client-1',
            userId: 4,
            nickName: '이전 닉네임',
            image: 'old.png',
            content: '안녕하세요',
            createdAt: new Date('2026-07-17T00:00:00.000Z'),
          },
        ]),
      },
      user: {
        findMany: jest
          .fn()
          .mockResolvedValue([
            { id: 4, nickname: '현재 닉네임', image: 'current.png' },
          ]),
      },
    };
    const service = new PublicChatService(prisma as any);

    const [message] = await service.getHistory();

    expect(message).toMatchObject({
      nickName: '현재 닉네임',
      image: 'current.png',
    });
    expect(prisma.user.findMany).toHaveBeenCalledWith({
      where: { id: { in: [4] }, deletedAt: null },
      select: { id: true, nickname: true, image: true },
    });
  });
});
