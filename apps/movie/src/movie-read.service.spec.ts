import { RpcException } from '@nestjs/microservices';
import { mapRpcExceptionToStatusCode } from '@app/common/entity/rpc-exception.entity';
import { MovieReadService } from './movie-read.service';

describe('MovieReadService missing movie contract', () => {
  const prisma = { movie: { findUnique: jest.fn() } };
  const cast = { getCast: jest.fn() };
  const service = new MovieReadService(
    prisma as never,
    {} as never,
    {} as never,
    cast as never,
  );

  beforeEach(() => jest.resetAllMocks());

  it('returns gRPC NOT_FOUND which the gateway maps to HTTP 404', async () => {
    prisma.movie.findUnique.mockResolvedValue(null);
    const error = await service
      .getMovieDetail(99999999)
      .catch((error) => error);

    expect(error).toBeInstanceOf(RpcException);
    expect(error.getError()).toEqual({
      code: 5,
      message: 'Movie with movieCd 99999999 not found',
    });
    expect(mapRpcExceptionToStatusCode(error.getError().code)).toBe(404);
    expect(cast.getCast).not.toHaveBeenCalled();
  });

  it('preserves database errors instead of reporting missing movies', async () => {
    const failure = new Error('Database unavailable');
    prisma.movie.findUnique.mockRejectedValue(failure);

    await expect(service.getMovieDetail(99999999)).rejects.toBe(failure);
    expect(cast.getCast).not.toHaveBeenCalled();
  });

  it('continues returning existing movies with cast and counts', async () => {
    prisma.movie.findUnique.mockResolvedValue({
      movieCd: 20233219,
      title: 'Existing movie',
      openDt: new Date('2024-01-01'),
      _count: { Comment: 2 },
      movieScores: [{ score: 4 }],
    });
    cast.getCast.mockResolvedValue([]);

    await expect(service.getMovieDetail(20233219)).resolves.toMatchObject({
      movieCd: 20233219,
      title: 'Existing movie',
      commentCount: 2,
      scoreCount: 1,
      averageScore: 4,
      actors: [],
    });
  });
});
