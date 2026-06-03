import { GetMatchPostsRequest } from '@app/common/protobuf';

function getWeekRange() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(start.getDate() + 7);

  return {
    start: start.toISOString().slice(0, 10),
    end: end.toISOString().slice(0, 10),
  };
}

export function buildMatchPostWhere(request: GetMatchPostsRequest) {
  const { movieTitle, filter, userno } = request;
  const trimmedMovieTitle = movieTitle?.trim();
  const weekRange = filter === 'week' ? getWeekRange() : null;

  return {
    deletedAt: null,
    ...(trimmedMovieTitle
      ? { movieTitle: { contains: trimmedMovieTitle } }
      : {}),
    ...(filter === 'week' && weekRange
      ? { showTime: { gte: weekRange.start, lte: weekRange.end } }
      : {}),
    ...(filter === 'mine' && userno ? { userno } : {}),
  };
}

export function isAvailablePost(post: {
  maxParticipants: number;
  _count: { MatchApplication: number };
}) {
  return post._count.MatchApplication < post.maxParticipants;
}

export function paginate<T>(items: T[], skip: number, pageSize: number) {
  return items.slice(skip, skip + pageSize);
}
