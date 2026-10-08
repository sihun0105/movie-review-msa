import { Injectable } from '@nestjs/common';
import { MovieSyncService } from './movie-sync.service';
import { MovieReadService } from './movie-read.service';
import { MovieScoreService } from './movie-score.service';
import { MovieSitemapService } from './movie-sitemap.service';
import { MovieCatalogService } from './movie-catalog.service';

@Injectable()
export class MovieService {
  constructor(
    private readonly syncService: MovieSyncService,
    private readonly readService: MovieReadService,
    private readonly scoreService: MovieScoreService,
    private readonly sitemapService: MovieSitemapService,
    private readonly catalogService: MovieCatalogService,
  ) {}

  // Sync
  fetchMovies() {
    return this.syncService.fetchMovies();
  }

  // Read
  getMovieDatas() {
    return this.readService.getMovieDatas();
  }
  getMovieSitemapEntries() {
    return this.sitemapService.getEntries();
  }
  recommendMovies(movieCd: number) {
    return this.readService.recommendMovies(movieCd);
  }
  getMovieDetail(movieCd: number) {
    return this.readService.getMovieDetail(movieCd);
  }
  getMovieCatalog(req: {
    query: string;
    genre: string;
    page: number;
    pageSize: number;
  }) {
    return this.catalogService.getCatalog(req);
  }
  getTopRatedMovies(limit: number) {
    return this.catalogService.getTopRated(limit);
  }
  getMoviesByDirector(req: {
    name: string;
    excludeMovieCd: number;
    limit: number;
  }) {
    return this.readService.getMoviesByDirector(req);
  }

  // Score
  upsertMovieScore(req: { movieCd: number; score: number; userId: number }) {
    return this.scoreService.upsertMovieScore(req);
  }
  getMovieScore(req: { movieCd: number; userId: number }) {
    return this.scoreService.getMovieScore(req);
  }
  getAverageMovieScore(movieCd: number) {
    return this.scoreService.getAverageMovieScore(movieCd);
  }
}
