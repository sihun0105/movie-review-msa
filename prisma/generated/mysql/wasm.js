
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  movieId: 'movieId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  userno: 'userno',
  comment: 'comment'
};

exports.Prisma.MovieScalarFieldEnum = {
  id: 'id',
  audience: 'audience',
  movieCd: 'movieCd',
  title: 'title',
  rank: 'rank',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  poster: 'poster',
  vector: 'vector',
  rankInten: 'rankInten',
  plot: 'plot',
  rankOldAndNew: 'rankOldAndNew',
  openDt: 'openDt',
  genre: 'genre',
  director: 'director',
  ratting: 'ratting'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  nickname: 'nickname',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  provider: 'provider',
  image: 'image'
};

exports.Prisma.ChannelchatsScalarFieldEnum = {
  id: 'id',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  UserId: 'UserId',
  ChannelId: 'ChannelId'
};

exports.Prisma.ChannelmembersScalarFieldEnum = {
  ChannelId: 'ChannelId',
  UserId: 'UserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ChannelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  private: 'private',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  WorkspaceId: 'WorkspaceId'
};

exports.Prisma.WorkspaceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  url: 'url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  OwnerId: 'OwnerId'
};

exports.Prisma.WorkspacemembersScalarFieldEnum = {
  WorkspaceId: 'WorkspaceId',
  UserId: 'UserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  loggedInAt: 'loggedInAt'
};

exports.Prisma.MovieScoreScalarFieldEnum = {
  id: 'id',
  movieCd: 'movieCd',
  score: 'score',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  Userno: 'Userno'
};

exports.Prisma.MovieVodScalarFieldEnum = {
  id: 'id',
  vodUrl: 'vodUrl',
  movieCd: 'movieCd',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.RecruitScalarFieldEnum = {
  id: 'id',
  userno: 'userno',
  title: 'title',
  content: 'content',
  screening_date: 'screening_date',
  location: 'location',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  theater_name: 'theater_name'
};

exports.Prisma.RecruitCommentScalarFieldEnum = {
  id: 'id',
  recruit_id: 'recruit_id',
  userno: 'userno',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.MatchesScalarFieldEnum = {
  id: 'id',
  recruit_id: 'recruit_id',
  requester_id: 'requester_id',
  owner_id: 'owner_id',
  acceptedAt: 'acceptedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  status: 'status'
};

exports.Prisma.ArticleScalarFieldEnum = {
  id: 'id',
  userno: 'userno',
  title: 'title',
  content: 'content',
  like_count: 'like_count',
  dislike_count: 'dislike_count',
  comment_count: 'comment_count',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ArticleCommentsScalarFieldEnum = {
  id: 'id',
  articleId: 'articleId',
  userno: 'userno',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ArticleLikesScalarFieldEnum = {
  id: 'id',
  article_id: 'article_id',
  userno: 'userno',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Recruit_status = exports.$Enums.Recruit_status = {
  open: 'open',
  matched: 'matched',
  closed: 'closed'
};

exports.Matches_status = exports.$Enums.Matches_status = {
  pending: 'pending',
  confirmed: 'confirmed',
  cancelled: 'cancelled'
};

exports.articleLikes_type = exports.$Enums.articleLikes_type = {
  like: 'like',
  dislike: 'dislike'
};

exports.Prisma.ModelName = {
  Comment: 'Comment',
  Movie: 'Movie',
  User: 'User',
  channelchats: 'channelchats',
  channelmembers: 'channelmembers',
  channels: 'channels',
  workspace: 'workspace',
  workspacemembers: 'workspacemembers',
  movieScore: 'movieScore',
  MovieVod: 'MovieVod',
  Recruit: 'Recruit',
  RecruitComment: 'RecruitComment',
  Matches: 'Matches',
  article: 'article',
  articleComments: 'articleComments',
  articleLikes: 'articleLikes'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
