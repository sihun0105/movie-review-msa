import {
  KmdbMovie,
  KmdbResponse,
  KobisMovieListItem,
  KobisMovieListResponse,
  KobisMovie,
  KobisMovieDetailResponse,
  KobisResponse,
} from '@app/common/types/movie-response';
import { Logger } from '@nestjs/common';
import axios from 'axios';

interface KoficMovieMetadata {
  director: string;
  genre: string;
  rating: string;
}
export interface TmdbCastMember {
  id: number;
  name?: string;
  character?: string;
  profile_path?: string | null;
}
export class MovieMetadataClient {
  private readonly logger = new Logger(MovieMetadataClient.name);
  private readonly koficKey = process.env.KOFIC_API_KEY;
  private readonly kmdbKey = process.env.KMDB_API_KEY;
  private readonly tmdbAccessToken = process.env.TMDB_API_ACCESS_TOKEN;
  private readonly koficBoxOfficeUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
  private readonly koficMovieDetailUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json';
  private readonly koficMovieListUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json';
  private readonly kmdbUrl =
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp';

  async fetchKoficBoxOffice(date: string): Promise<KobisMovie[] | null> {
    const url = `${this.koficBoxOfficeUrl}?key=${this.koficKey}&targetDt=${date}`;
    const response = await axios.get<KobisResponse>(url);
    return response.data?.boxOfficeResult?.dailyBoxOfficeList ?? null;
  }
  async fetchKoficMetadata(movieCd: string): Promise<KoficMovieMetadata> {
    try {
      const url = `${this.koficMovieDetailUrl}?key=${this.koficKey}&movieCd=${movieCd}`;
      const response = await axios.get<KobisMovieDetailResponse>(url);
      const movieInfo = response.data?.movieInfoResult?.movieInfo;
      return {
        director: this.joinNames(movieInfo?.directors, 'peopleNm'),
        genre: this.joinNames(movieInfo?.genres, 'genreNm'),
        rating: this.joinNames(movieInfo?.audits, 'watchGradeNm'),
      };
    } catch (error) {
      this.logger.warn(`fetchKoficMetadata failed for "${movieCd}": ${error}`);
      return { director: '', genre: '', rating: '' };
    }
  }
  async fetchKoficMoviesByDirector(
    directorName: string,
    limit: number,
  ): Promise<KobisMovieListItem[]> {
    if (!this.koficKey || !directorName.trim()) return [];

    try {
      const url = `${this.koficMovieListUrl}?key=${
        this.koficKey
      }&directorNm=${encodeURIComponent(directorName)}&curPage=1&itemPerPage=${
        limit || 12
      }`;
      const response = await axios.get<KobisMovieListResponse>(url);
      const movies = response.data?.movieListResult?.movieList ?? [];
      return movies.filter(
        (movie) =>
          movie.directors?.some(
            (director) => director.peopleNm?.trim() === directorName.trim(),
          ),
      );
    } catch (error) {
      this.logger.warn(
        `fetchKoficMoviesByDirector failed for "${directorName}": ${error}`,
      );
      return [];
    }
  }
  async fetchKmdbData(
    title: string,
    releaseYear?: number,
  ): Promise<Partial<KmdbMovie>> {
    const year = releaseYear || new Date().getFullYear();
    let url = this.buildKmdbUrl(title, year);
    let response = await axios.get<KmdbResponse>(url);

    if (!response.data?.Data?.[0]?.Result?.length && !releaseYear) {
      url = this.buildKmdbUrl(title);
      response = await axios.get<KmdbResponse>(url);
    }

    const results = response.data?.Data?.[0]?.Result ?? [];
    const result = releaseYear
      ? results.find((movie) => Number(movie.prodYear) === releaseYear)
      : results[0];
    if (!result) return null;
    return {
      title: result.title,
      plots: result.plots,
      posters: this.getHighResKmdbPoster(result.posters),
      vods: result.vods,
      directors: result.directors,
      genre: result.genre,
      rating: result.rating,
    };
  }
  async fetchTmdbData(title: string, releaseYear?: number) {
    try {
      const yearQuery = releaseYear
        ? `&primary_release_year=${releaseYear}`
        : '';
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        title,
      )}&language=ko-KR${yearQuery}`;
      const response = await axios.get(url, {
        headers: this.getTmdbHeaders(),
      });
      const results = response.data?.results ?? [];
      if (!releaseYear) return results[0] ?? null;
      return (
        results.find(
          (movie) => Number(movie.release_date?.slice(0, 4)) === releaseYear,
        ) ?? null
      );
    } catch (error) {
      this.logger.warn(`fetchTmdbData failed for "${title}": ${error}`);
      return null;
    }
  }
  async fetchTmdbCast(movieId: number): Promise<TmdbCastMember[]> {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`;
      const response = await axios.get(url, {
        headers: this.getTmdbHeaders(),
      });
      return response.data?.cast ?? [];
    } catch (error) {
      this.logger.warn(`fetchTmdbCast failed for "${movieId}": ${error}`);
      return [];
    }
  }
  async fetchTmdbDirector(movieId: number): Promise<string> {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`;
      const response = await axios.get(url, {
        headers: this.getTmdbHeaders(),
      });
      return (
        response.data?.crew
          ?.filter((person) => person.job === 'Director')
          ?.map((person) => person.name?.trim())
          ?.filter(Boolean)
          ?.join(', ') ?? ''
      );
    } catch (error) {
      this.logger.warn(`fetchTmdbDirector failed for "${movieId}": ${error}`);
      return '';
    }
  }

  private getTmdbHeaders() {
    return {
      Authorization: `Bearer ${this.tmdbAccessToken}`,
      'Content-Type': 'application/json',
    };
  }

  private buildKmdbUrl(title: string, releaseYear?: number) {
    const yearQuery = releaseYear
      ? `&releaseDts=${releaseYear}0101&releaseDte=${releaseYear}1231`
      : '';
    return `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${
      this.kmdbKey
    }&detail=Y&title=${encodeURIComponent(title)}&sort=prodYear,0${yearQuery}`;
  }

  private getHighResKmdbPoster(posters: string): string {
    const urls = posters?.split('|') ?? [];
    return urls.find((url) => url.includes('/MD/')) || urls[0] || '';
  }

  private joinNames<T extends Record<string, string>>(
    items: T[] | undefined,
    key: keyof T,
  ): string {
    return (
      items
        ?.map((item) => item[key]?.trim())
        ?.filter(Boolean)
        ?.join(', ') ?? ''
    );
  }
}
