import axios from 'axios';
import { MovieActorStorageService } from './movie-actor-storage.service';

jest.mock('axios');

describe('MovieActorStorageService', () => {
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
      expect.objectContaining({ abortSignal: expect.anything() }),
    );
  });

  it('reuses one in-flight upload for the same actor', async () => {
    let resolveDownload: (value: object) => void = () => undefined;
    (axios.get as jest.Mock).mockReturnValue(
      new Promise((resolve) => {
        resolveDownload = resolve;
      }),
    );
    const service = new MovieActorStorageService();
    jest.spyOn((service as any).s3Client, 'send').mockResolvedValue({});

    const first = service.mirrorActor('https://tmdb.test/matt.jpg', 6193);
    const second = service.mirrorActor('https://tmdb.test/matt.jpg', 6193);
    resolveDownload({
      data: Buffer.from('image'),
      headers: { 'content-type': 'image/jpeg' },
    });

    await Promise.all([first, second]);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('keeps the source URL when S3 upload fails', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: Buffer.from('image'),
      headers: { 'content-type': 'image/jpeg' },
    });
    const service = new MovieActorStorageService();
    jest
      .spyOn((service as any).s3Client, 'send')
      .mockRejectedValue(new Error('s3 unavailable'));
    const sourceUrl = 'https://image.tmdb.org/t/p/w342/matt.jpg';

    await expect(service.mirrorActor(sourceUrl, 6193)).resolves.toBe(sourceUrl);
  });
});
