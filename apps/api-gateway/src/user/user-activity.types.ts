export type UserActivityType = 'comments' | 'ratings' | 'articles' | 'likes';

export interface UserActivityPage {
  items: UserActivityItem[];
  totalCount: number;
  hasNext: boolean;
}

export type UserActivityItem =
  | {
      type: 'comment';
      id: number;
      articleId: number;
      articleTitle: string;
      content: string;
      createdAt: Date;
    }
  | {
      type: 'rating';
      movieCd: number;
      movieTitle: string;
      poster: string;
      score: number;
      ratedAt: Date;
    }
  | {
      type: 'article' | 'like';
      articleId: number;
      title: string;
      createdAt: Date;
      likeCount: number;
      commentCount: number;
    };

export interface ActivityPagination {
  skip: number;
  take: number;
}
