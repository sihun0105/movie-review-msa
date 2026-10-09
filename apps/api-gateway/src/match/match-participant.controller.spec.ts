import { MatchController } from './match.controller';

describe('MatchController participants', () => {
  const getMatchParticipants = jest.fn();
  const controller = new MatchController({ getMatchParticipants } as any);

  beforeEach(() => getMatchParticipants.mockReset());

  it('exposes public participants for a match', async () => {
    const response = {
      participants: [{ nickname: '호스트', image: 'host.jpg', role: 'host' }],
    };
    getMatchParticipants.mockResolvedValue(response);

    await expect(controller.getMatchParticipants('match-1')).resolves.toBe(
      response,
    );
    expect(getMatchParticipants).toHaveBeenCalledWith({ matchId: 'match-1' });
  });
});
