import { Logger } from '@nestjs/common';
import axios from 'axios';
import {
  getOriginalReleaseTitle,
  isSameMovieTitle,
} from './movie-title-matcher';

export interface TmdbCastMember {
  id: number;
  name?: string;
  character?: string;
  profile_path?: string | null;
}

export class MovieTmdbClient {
  private readonly logger = new Logger(MovieTmdbClient.name);
  private readonly accessToken = process.env.TMDB_API_ACCESS_TOKEN;

  async fetchData(title: string, releaseYear?: number) {
    try {
      const yearQuery = releaseYear
        ? `&primary_release_year=${releaseYear}`
        : '';
      const results = await this.search(title, yearQuery);
      if (!releaseYear) return results[0] ?? null;
      const yearMatch = results.find(
        (movie) => Number(movie.release_date?.slice(0, 4)) === releaseYear,
      );
      if (yearMatch) return yearMatch;

      const originalTitle = getOriginalReleaseTitle(title);
      if (!originalTitle) return null;
      const originals = await this.search(originalTitle);
      return (
        originals.find((movie) =>
          isSameMovieTitle(movie.title ?? '', originalTitle),
        ) ?? null
      );
    } catch (error) {
      this.logger.warn(`fetchData failed for "${title}": ${error}`);
      return null;
    }
  }

  async fetchCast(movieId: number): Promise<TmdbCastMember[]> {
    try {
      const response = await axios.get(this.creditsUrl(movieId), {
        headers: this.headers,
      });
      return response.data?.cast ?? [];
    } catch (error) {
      this.logger.warn(`fetchCast failed for "${movieId}": ${error}`);
      return [];
    }
  }

  async fetchDirector(movieId: number): Promise<string> {
    try {
      const response = await axios.get(this.creditsUrl(movieId), {
        headers: this.headers,
      });
      return (
        response.data?.crew
          ?.filter((person) => person.job === 'Director')
          ?.map((person) => person.name?.trim())
          ?.filter(Boolean)
          ?.join(', ') ?? ''
      );
    } catch (error) {
      this.logger.warn(`fetchDirector failed for "${movieId}": ${error}`);
      return '';
    }
  }

  private async search(title: string, query = ''): Promise<any[]> {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      title,
    )}&language=ko-KR${query}`;
    const response = await axios.get(url, { headers: this.headers });
    return response.data?.results ?? [];
  }

  private creditsUrl(movieId: number) {
    return `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`;
  }

  private get headers() {
    return {
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
  }
}
