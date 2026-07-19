import { Injectable } from '@nestjs/common';
import { MatchPost } from '@app/common/protobuf';
import { formatMatchPost, PostWithUserAndCount } from './match.formatter';
import { MatchPosterService } from './match-poster.service';

@Injectable()
export class MatchPostPresenter {
  constructor(private readonly posters: MatchPosterService) {}

  async many(posts: PostWithUserAndCount[]): Promise<MatchPost[]> {
    const posterMap = await this.posters.getPosterMap(
      posts.map((post) => post.movieTitle),
    );
    return posts.map((post) =>
      formatMatchPost(post, posterMap.get(post.movieTitle) || ''),
    );
  }

  async one(post: PostWithUserAndCount): Promise<MatchPost> {
    const [formatted] = await this.many([post]);
    return formatted;
  }
}
