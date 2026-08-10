import { MovieActorData } from '@app/common/protobuf';
import { MySQLPrismaService } from '@app/prisma';
import { Injectable, Logger, Optional } from '@nestjs/common';
import { MovieMetadataClient, TmdbCastMember } from './movie-metadata.client';
import { MovieActorStorageService } from './movie-actor-storage.service';

const CAST_LIMIT = 8;
const PROFILE_BASE_URL = 'https://image.tmdb.org/t/p/w342';

interface CastQuery {
  movieCd: number;
  title: string;
  releaseYear?: number;
}

interface CachedActor {
  tmdbPersonId: number;
  name: string;
  character: string | null;
  profileUrl: string;
  sortOrder: number;
}

interface MovieActorStore {
  findMany(args: object): Promise<CachedActor[]>;
  createMany(args: object): Promise<{ count: number }>;
  updateMany(args: object): Promise<{ count: number }>;
}

@Injectable()
export class MovieCastService {
  private readonly logger = new Logger(MovieCastService.name);
  private readonly metadata: MovieMetadataClient;
  private readonly storage: MovieActorStorageService;

  constructor(
    private readonly prisma: MySQLPrismaService,
    @Optional() metadata?: MovieMetadataClient,
    @Optional() storage?: MovieActorStorageService,
  ) {
    this.metadata = metadata ?? new MovieMetadataClient();
    this.storage = storage ?? new MovieActorStorageService();
  }

  async getCast(query: CastQuery): Promise<MovieActorData[]> {
    try {
      const actorStore = this.getActorStore();
      const cached = await actorStore.findMany({
        where: { movieCd: query.movieCd },
        orderBy: { sortOrder: 'asc' },
        take: CAST_LIMIT,
      });
      if (cached.length > 0) {
        void this.migrateCachedActors(actorStore, cached);
        return cached.map(this.toMovieActorData);
      }

      const movie = await this.metadata.fetchTmdbData(
        query.title,
        query.releaseYear,
      );
      if (!movie?.id) return [];

      const cast = await this.metadata.fetchTmdbCast(movie.id);
      const candidates = cast
        .filter(this.hasProfile)
        .slice(0, CAST_LIMIT)
        .map((actor, sortOrder) => ({
          movieCd: query.movieCd,
          tmdbPersonId: actor.id,
          name: actor.name.trim(),
          character: actor.character?.trim() ?? '',
          profileUrl: `${PROFILE_BASE_URL}${actor.profile_path}`,
          sortOrder,
        }));
      const actors = await Promise.all(
        candidates.map(async (actor) => ({
          ...actor,
          profileUrl: await this.storage.mirrorActor(
            actor.profileUrl,
            actor.tmdbPersonId,
          ),
        })),
      );

      if (actors.length === 0) return [];
      await actorStore.createMany({
        data: actors,
        skipDuplicates: true,
      });
      return actors.map(this.toMovieActorData);
    } catch (error) {
      this.logger.warn(`Cast enrichment failed for ${query.movieCd}: ${error}`);
      return [];
    }
  }

  private getActorStore(): MovieActorStore {
    return (this.prisma as unknown as { movieActor: MovieActorStore })
      .movieActor;
  }

  private async migrateCachedActors(
    actorStore: MovieActorStore,
    actors: CachedActor[],
  ): Promise<void> {
    await Promise.allSettled(
      actors.map((actor) => this.migrateCachedActor(actorStore, actor)),
    );
  }

  private async migrateCachedActor(
    actorStore: MovieActorStore,
    actor: CachedActor,
  ): Promise<void> {
    try {
      const profileUrl = await this.storage.mirrorActor(
        actor.profileUrl,
        actor.tmdbPersonId,
      );
      if (profileUrl !== actor.profileUrl) {
        await actorStore.updateMany({
          where: { tmdbPersonId: actor.tmdbPersonId },
          data: { profileUrl },
        });
      }
    } catch (error) {
      this.logger.warn(
        `Actor cache migration failed for ${actor.tmdbPersonId}: ${error}`,
      );
    }
  }

  private hasProfile(actor: TmdbCastMember): actor is TmdbCastMember & {
    id: number;
    name: string;
    profile_path: string;
  } {
    return Boolean(actor.id > 0 && actor.name?.trim() && actor.profile_path);
  }

  private toMovieActorData(actor: {
    tmdbPersonId: number;
    name: string;
    character: string | null;
    profileUrl: string;
    sortOrder: number;
  }): MovieActorData {
    return {
      id: actor.tmdbPersonId,
      name: actor.name,
      character: actor.character ?? '',
      profileUrl: actor.profileUrl,
      sortOrder: actor.sortOrder,
    };
  }
}
