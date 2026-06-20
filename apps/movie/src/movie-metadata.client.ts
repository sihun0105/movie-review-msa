import {
  KmdbMovie,
  KmdbResponse,
  KobisMovie,
  KobisMovieDetailResponse,
  KobisResponse,
} from '@app/common/types/movie-response';
import { Logger } from '@nestjs/common';
import axios from 'axios';
import moment from 'moment';

export class MovieMetadataClient {
  private readonly logger = new Logger(MovieMetadataClient.name);
  private readonly koficKey = process.env.KOFIC_API_KEY;
  private readonly kmdbKey = process.env.KMDB_API_KEY;
  private readonly tmdbAccessToken = process.env.TMDB_API_ACCESS_TOKEN;
  private readonly koficBoxOfficeUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
  private readonly koficMovieDetailUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json';
  private readonly kmdbUrl =
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp';

  async fetchKoficBoxOffice(date: string): Promise<KobisMovie[] | null> {
    const url = `${this.koficBoxOfficeUrl}?key=${this.koficKey}&targetDt=${date}`;
    const response = await axios.get<KobisResponse>(url);
    return response.data?.boxOfficeResult?.dailyBoxOfficeList ?? null;
  }

  async fetchKoficDirector(movieCd: string): Promise<string> {
    try {
      const url = `${this.koficMovieDetailUrl}?key=${this.koficKey}&movieCd=${movieCd}`;
      const response = await axios.get<KobisMovieDetailResponse>(url);
      return (
        response.data?.movieInfoResult?.movieInfo?.directors
          ?.map((director) => director.peopleNm?.trim())
          ?.filter(Boolean)
          ?.join(', ') ?? ''
      );
    } catch (error) {
      this.logger.warn(`fetchKoficDirector failed for "${movieCd}": ${error}`);
      return '';
    }
  }

  async fetchKmdbData(title: string): Promise<Partial<KmdbMovie>> {
    const thisYear = moment().format('YYYY') + '0101';
    let url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,0&releaseDts=${thisYear}`;
    let response = await axios.get<KmdbResponse>(url);

    if (!response.data?.Data?.[0]?.Result?.[0]) {
      url = `${this.kmdbUrl}?collection=kmdb_new2&ServiceKey=${this.kmdbKey}&detail=Y&title=${title}&sort=prodYear,0`;
      response = await axios.get<KmdbResponse>(url);
      if (!response.data?.Data?.[0]?.Result?.[0]) return null;
    }

    const result = response.data.Data[0].Result[0];
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

  async fetchTmdbData(title: string) {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${title}&language=ko-KR`;
      const response = await axios.get(url, {
        headers: this.getTmdbHeaders(),
      });
      return response.data.results[0];
    } catch (error) {
      this.logger.warn(`fetchTmdbData failed for "${title}": ${error}`);
      return null;
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

  private getHighResKmdbPoster(posters: string): string {
    const urls = posters?.split('|') ?? [];
    return urls.find((url) => url.includes('/MD/')) || urls[0] || '';
  }
}
