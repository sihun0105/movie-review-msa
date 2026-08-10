import axios from 'axios';
import { MovieActorStorageService } from './movie-actor-storage.service';

jest.mock('axios');

describe('MovieActorStorageService', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      FILE_STORAGE_DRIVER: 's3',
      AWS_S3_BUCKET: 'bollae-uploads',
      AWS_REGION: 'ap-northeast-2',
      AWS_S3_PUBLIC_URL: 'https://cdn.bollae.kr/',
    };
  });

  afterEach(() => {
    process.env = originalEnv;
    jest.restoreAllMocks();
  });

  it('mirrors a TMDB profile image under the actors prefix', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: Buffer.from('image'),
      headers: { 'content-type': 'image/jpeg' },
    });
    const service = new MovieActorStorageService();
    const send = jest
      .spyOn((service as any).s3Client, 'send')
      .mockResolvedValue({});

    await expect(
      service.mirrorActor('https://image.tmdb.org/t/p/w342/matt.jpg', 6193),
    ).resolves.toBe('https://cdn.bollae.kr/actors/6193.jpg');

    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        input: expect.objectContaining({
          Bucket: 'bollae-uploads',
          Key: 'actors/6193.jpg',
          ContentType: 'image/jpeg',
        }),
      }),
    );
  });
});
