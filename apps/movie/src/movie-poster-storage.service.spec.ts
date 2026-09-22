import axios from 'axios';
import { MoviePosterStorageService } from './movie-poster-storage.service';

jest.mock('axios');

describe('MoviePosterStorageService', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      FILE_STORAGE_DRIVER: 's3',
      AWS_S3_BUCKET: 'bollae-uploads',
      AWS_REGION: 'ap-northeast-2',
      AWS_S3_PUBLIC_URL: 'https://cdn.bollae.kr/',
    };
    (axios.get as jest.Mock).mockResolvedValue({
      data: Buffer.from('image'),
      headers: { 'content-type': 'image/jpeg' },
    });
  });

  afterEach(() => {
    process.env = originalEnv;
    jest.restoreAllMocks();
  });

  it('changes the S3 key when the matched source poster changes', async () => {
    const service = new MoviePosterStorageService();
    const send = jest
      .spyOn((service as any).s3Client, 'send')
      .mockResolvedValue({});

    const oldUrl = await service.mirrorPoster(
      'https://tmdb.test/us.jpg',
      20256308,
    );
    const correctedUrl = await service.mirrorPoster(
      'https://tmdb.test/kr.jpg',
      20256308,
    );

    expect(oldUrl).not.toBe(correctedUrl);
    expect(oldUrl).toMatch(/posters\/20256308-[a-f0-9]{12}\.jpg$/);
    expect(correctedUrl).toMatch(/posters\/20256308-[a-f0-9]{12}\.jpg$/);
    expect(send).toHaveBeenCalledTimes(2);
  });
});
