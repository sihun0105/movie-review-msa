import { MatchPosterService } from './match-poster.service';

describe('MatchPosterService', () => {
  it('중복 제목을 한 번만 조회하고 포스터 URL을 제목별로 반환한다', async () => {
    const findMany = jest.fn().mockResolvedValue([
      { title: '군체', poster: 'https://cdn.example.com/colony.jpg' },
      { title: '모아나', poster: null },
    ]);
    const service = new MatchPosterService({ movie: { findMany } } as never);

    const posters = await service.getPosterMap(['군체', '군체', '모아나']);

    expect(findMany).toHaveBeenCalledTimes(1);
    expect(findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { title: { in: ['군체', '모아나'] }, poster: { not: null } },
      }),
    );
    expect(posters.get('군체')).toBe('https://cdn.example.com/colony.jpg');
    expect(posters.has('모아나')).toBe(false);
  });
});
