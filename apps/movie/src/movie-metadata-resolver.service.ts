import { Injectable } from '@nestjs/common';
import { MovieMetadataClient } from './movie-metadata.client';

export interface MovieMetadataInput {
  movieCd: string;
  title: string;
  releaseYear?: number;
}

@Injectable()
export class MovieMetadataResolverService {
  private readonly client = new MovieMetadataClient();

  async resolve({ movieCd, title, releaseYear }: MovieMetadataInput) {
    const kofic = await this.client.fetchKoficMetadata(movieCd);
    const kmdb = await this.client.fetchKmdbData(title, releaseYear);
    const tmdb = await this.client.fetchTmdbData(
      title,
      releaseYear,
      kofic.englishTitle,
    );
    const poster = tmdb?.poster_path
      ? `https://image.tmdb.org/t/p/w500${tmdb.poster_path}`
      : kmdb?.posters?.split('|')?.[0] ?? '';
    let director =
      kofic.director || kmdb?.directors?.director?.[0]?.directorNm || '';

    if (!director && tmdb?.id && tmdb.media_type !== 'tv') {
      director = await this.client.fetchTmdbDirector(tmdb.id);
    }

    return {
      plot: tmdb?.overview || kmdb?.plots?.plot?.[0]?.plotText || '',
      poster,
      director,
      genre: kofic.genre || kmdb?.genre || '',
      rating: kofic.rating || kmdb?.rating || '',
      fetchedData: kmdb,
    };
  }
}
