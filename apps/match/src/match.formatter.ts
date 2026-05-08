import { MatchApplication, MatchPost } from '@app/common/protobuf';

type PostWithUserAndCount = {
  id: string;
  title: string;
  userno: number;
  content: string;
  movieTitle: string;
  theaterName: string;
  showTime: string;
  maxParticipants: number;
  location: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  User: { nickname: string | null; gender: string | null };
  _count: { MatchApplication: number };
};

export function formatMatchPost(post: PostWithUserAndCount): MatchPost {
  return {
    id: post.id,
    title: post.title,
    userno: post.userno,
    author: post.User.nickname || 'Unknown',
    authorGender: post.User.gender || '',
    content: post.content,
    movieTitle: post.movieTitle,
    theaterName: post.theaterName,
    showTime: post.showTime,
    maxParticipants: post.maxParticipants,
    currentParticipants: post._count.MatchApplication,
    location: post.location,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt?.toISOString() || '',
    deletedAt: post.deletedAt?.toISOString() || '',
  };
}

type ApplicationWithUser = {
  id: string;
  matchPostId: string;
  applicantUserno: number;
  applicantName: string;
  message: string;
  status: string;
  createdAt: Date;
  User?: { gender: string | null } | null;
};

export function formatMatchApplication(
  app: ApplicationWithUser,
): MatchApplication {
  return {
    id: app.id,
    matchPostId: app.matchPostId,
    applicantUserno: app.applicantUserno,
    applicantName: app.applicantName,
    message: app.message,
    status: app.status,
    createdAt: app.createdAt.toISOString(),
    gender: app.User?.gender || '',
  };
}
