import axios from 'axios';
import { MovieMetadataClient } from './movie-metadata.client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
process.env.KMDB_API_KEY = 'test-kmdb-key';

describe('MovieMetadataClient identity matching', () => {
  const client = new MovieMetadataClient();

  beforeEach(() => jest.resetAllMocks());

  it('selects the TMDB result whose release year matches the KOFIC movie', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        results: [
          {
            id: 1,
            title: '인턴',
            release_date: '2015-09-24',
            poster_path: '/us.jpg',
          },
          {
            id: 2,
            title: '인턴',
            release_date: '2026-09-16',
            poster_path: '/kr.jpg',
          },
        ],
      },
    });

    await expect(client.fetchTmdbData('인턴', 2026)).resolves.toMatchObject({
      id: 2,
      poster_path: '/kr.jpg',
    });
  });

  it('does not fall back to a different-year TMDB movie', async () => {
    mockedAxios.get.mockResolvedValue({
      data: { results: [{ id: 1, title: '인턴', release_date: '2015-09-24' }] },
    });

    await expect(client.fetchTmdbData('인턴', 2026)).resolves.toBeNull();
  });

  it('uses the KOFIC English title to find a matching TV poster', async () => {
    mockedAxios.get
      .mockResolvedValueOnce({ data: { results: [] } })
      .mockResolvedValueOnce({ data: { results: [] } })
      .mockResolvedValueOnce({
        data: {
          results: [
            {
              id: 123,
              name: '바다 탐험대 옥토넛 A&B',
              original_name: 'Octonauts: Above & Beyond',
              poster_path: '/octonauts.jpg',
            },
          ],
        },
      });

    await expect(
      client.fetchTmdbData(
        '바다 탐험대 옥토넛 어보브 앤 비욘드',
        2026,
        'Octonauts: Above and Beyond - Season 2',
      ),
    ).resolves.toMatchObject({
      id: 123,
      media_type: 'tv',
      poster_path: '/octonauts.jpg',
    });
  });

  it('returns the English title from KOFIC metadata', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        movieInfoResult: {
          movieInfo: {
            movieNmEn: 'Octonauts: Above and Beyond - Season 2',
            directors: [],
            genres: [],
            audits: [],
          },
        },
      },
    });

    await expect(client.fetchKoficMetadata('20266051')).resolves.toMatchObject({
      englishTitle: 'Octonauts: Above and Beyond - Season 2',
    });
  });

  it('finds the original release for a marked re-release title', async () => {
    mockedAxios.get
      .mockResolvedValueOnce({ data: { results: [] } })
      .mockResolvedValueOnce({
        data: {
          results: [
            {
              id: 299534,
              title: '어벤져스: 엔드게임',
              release_date: '2019-04-24',
              poster_path: '/endgame.jpg',
            },
          ],
        },
      });

    await expect(
      client.fetchTmdbData('어벤져스: 엔드게임 앙코르', 2026),
    ).resolves.toMatchObject({
      id: 299534,
      poster_path: '/endgame.jpg',
    });
    expect(mockedAxios.get).toHaveBeenCalledTimes(2);
    expect(mockedAxios.get.mock.calls[1][0]).toContain(
      'query=%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4%3A%20%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84',
    );
  });

  it('selects only the matching-year KMDB movie', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        Data: [
          {
            Result: [
              { title: '인턴', prodYear: '2015', posters: 'us.jpg' },
              { title: '인턴', prodYear: '2026', posters: 'kr.jpg' },
            ],
          },
        ],
      },
    });

    await expect(client.fetchKmdbData('인턴', 2026)).resolves.toMatchObject({
      posters: 'kr.jpg',
    });
  });
});
