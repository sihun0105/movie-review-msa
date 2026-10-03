import { getCurrentParticipants, hasAvailableSeat } from './match-capacity';

describe('match capacity', () => {
  it('호스트를 현재 참여 인원에 포함한다', () => {
    expect(getCurrentParticipants(0)).toBe(1);
    expect(getCurrentParticipants(2)).toBe(3);
  });

  it('호스트를 포함한 전체 인원으로 마감 여부를 계산한다', () => {
    expect(hasAvailableSeat(0, 2)).toBe(true);
    expect(hasAvailableSeat(1, 2)).toBe(false);
  });
});
