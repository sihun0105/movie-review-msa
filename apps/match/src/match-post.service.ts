import {
  Injectable,
  Logger,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { MySQLPrismaService } from '@app/prisma';
import {
  CreateMatchPostRequest,
  DeleteMatchPostRequest,
  GetMatchPostRequest,
  GetMatchPostsRequest,
  GetMyPostsRequest,
  UpdateMatchPostRequest,
  MatchPostResponse,
  SingleMatchPostResponse,
  CommonResponse,
} from '@app/common/protobuf';
import { formatMatchPost } from './match.formatter';

const POST_INCLUDE = {
  User: true,
  _count: {
    select: {
      MatchApplication: { where: { status: 'accepted' } },
    },
  },
} as const;

@Injectable()
export class MatchPostService {
  private readonly logger = new Logger(MatchPostService.name);
  constructor(private readonly prisma: MySQLPrismaService) {}

  async getMatchPosts(
    request: GetMatchPostsRequest,
  ): Promise<MatchPostResponse> {
    const { page = 1, pageSize = 10, movieTitle } = request;
    const skip = (page - 1) * pageSize;
    const trimmedMovieTitle = movieTitle?.trim();

    const matchPosts = await this.prisma.matchPost.findMany({
      where: {
        deletedAt: null,
        ...(trimmedMovieTitle
          ? { movieTitle: { contains: trimmedMovieTitle } }
          : {}),
      },
      include: POST_INCLUDE,
      orderBy: { createdAt: 'desc' },
      skip,
      take: pageSize + 1,
    });

    const hasNext = matchPosts.length > pageSize;
    if (hasNext) matchPosts.pop();

    return {
      matchPosts: matchPosts.map(formatMatchPost),
      hasNext,
    };
  }

  async createMatchPost(
    request: CreateMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    const {
      title,
      content,
      movieTitle,
      theaterName,
      showTime,
      maxParticipants,
      location,
      userno,
    } = request;

    const matchPost = await this.prisma.matchPost.create({
      data: {
        title,
        content,
        movieTitle,
        theaterName,
        showTime,
        maxParticipants,
        location,
        userno,
      },
      include: POST_INCLUDE,
    });

    return { matchPost: formatMatchPost(matchPost) };
  }

  async getMatchPost(
    request: GetMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    const matchPost = await this.prisma.matchPost.findFirst({
      where: { id: request.matchId, deletedAt: null },
      include: POST_INCLUDE,
    });
    if (!matchPost) return { matchPost: null };
    return { matchPost: formatMatchPost(matchPost) };
  }

  async updateMatchPost(
    request: UpdateMatchPostRequest,
  ): Promise<SingleMatchPostResponse> {
    const { matchId, userno, ...data } = request;
    const existingPost = await this.prisma.matchPost.findFirst({
      where: { id: matchId, deletedAt: null },
    });

    if (!existingPost) throw new NotFoundException('Match post not found');
    if (existingPost.userno !== userno) {
      throw new ForbiddenException('You can only update your own posts');
    }

    const updatedPost = await this.prisma.matchPost.update({
      where: { id: matchId },
      data: { ...data, updatedAt: new Date() },
      include: POST_INCLUDE,
    });

    return { matchPost: formatMatchPost(updatedPost) };
  }

  async deleteMatchPost(
    request: DeleteMatchPostRequest,
  ): Promise<CommonResponse> {
    const { matchId, userno } = request;
    const existingPost = await this.prisma.matchPost.findFirst({
      where: { id: matchId, deletedAt: null },
    });

    if (!existingPost) throw new NotFoundException('Match post not found');
    if (existingPost.userno !== userno) {
      throw new ForbiddenException('You can only delete your own posts');
    }

    await this.prisma.matchPost.update({
      where: { id: matchId },
      data: { deletedAt: new Date() },
    });

    return { success: true, message: 'Match post deleted successfully' };
  }

  async getMyPosts(request: GetMyPostsRequest): Promise<MatchPostResponse> {
    const { userno, page = 1, pageSize = 10 } = request;
    const skip = (page - 1) * pageSize;

    const matchPosts = await this.prisma.matchPost.findMany({
      where: { userno, deletedAt: null },
      include: POST_INCLUDE,
      orderBy: { createdAt: 'desc' },
      skip,
      take: pageSize + 1,
    });

    const hasNext = matchPosts.length > pageSize;
    if (hasNext) matchPosts.pop();

    return {
      matchPosts: matchPosts.map(formatMatchPost),
      hasNext,
    };
  }
}
