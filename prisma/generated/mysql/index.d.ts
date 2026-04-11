
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model movieScore
 * 
 */
export type movieScore = $Result.DefaultSelection<Prisma.$movieScorePayload>
/**
 * Model MovieVod
 * 
 */
export type MovieVod = $Result.DefaultSelection<Prisma.$MovieVodPayload>
/**
 * Model article
 * 
 */
export type article = $Result.DefaultSelection<Prisma.$articlePayload>
/**
 * Model articleComments
 * 
 */
export type articleComments = $Result.DefaultSelection<Prisma.$articleCommentsPayload>
/**
 * Model articleLikes
 * 
 */
export type articleLikes = $Result.DefaultSelection<Prisma.$articleLikesPayload>
/**
 * Model MatchPost
 * 
 */
export type MatchPost = $Result.DefaultSelection<Prisma.$MatchPostPayload>
/**
 * Model MatchApplication
 * 
 */
export type MatchApplication = $Result.DefaultSelection<Prisma.$MatchApplicationPayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model ChatRoomMember
 * 
 */
export type ChatRoomMember = $Result.DefaultSelection<Prisma.$ChatRoomMemberPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const User_gender: {
  male: 'male',
  female: 'female'
};

export type User_gender = (typeof User_gender)[keyof typeof User_gender]


export const articleLikes_type: {
  like: 'like',
  dislike: 'dislike'
};

export type articleLikes_type = (typeof articleLikes_type)[keyof typeof articleLikes_type]


export const MatchApplication_status: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type MatchApplication_status = (typeof MatchApplication_status)[keyof typeof MatchApplication_status]


export const ChatRoom_type: {
  direct: 'direct',
  group: 'group'
};

export type ChatRoom_type = (typeof ChatRoom_type)[keyof typeof ChatRoom_type]

}

export type User_gender = $Enums.User_gender

export const User_gender: typeof $Enums.User_gender

export type articleLikes_type = $Enums.articleLikes_type

export const articleLikes_type: typeof $Enums.articleLikes_type

export type MatchApplication_status = $Enums.MatchApplication_status

export const MatchApplication_status: typeof $Enums.MatchApplication_status

export type ChatRoom_type = $Enums.ChatRoom_type

export const ChatRoom_type: typeof $Enums.ChatRoom_type

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Comments
 * const comments = await prisma.comment.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Comments
   * const comments = await prisma.comment.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.movieScore`: Exposes CRUD operations for the **movieScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieScores
    * const movieScores = await prisma.movieScore.findMany()
    * ```
    */
  get movieScore(): Prisma.movieScoreDelegate<ExtArgs>;

  /**
   * `prisma.movieVod`: Exposes CRUD operations for the **MovieVod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieVods
    * const movieVods = await prisma.movieVod.findMany()
    * ```
    */
  get movieVod(): Prisma.MovieVodDelegate<ExtArgs>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.articleDelegate<ExtArgs>;

  /**
   * `prisma.articleComments`: Exposes CRUD operations for the **articleComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleComments
    * const articleComments = await prisma.articleComments.findMany()
    * ```
    */
  get articleComments(): Prisma.articleCommentsDelegate<ExtArgs>;

  /**
   * `prisma.articleLikes`: Exposes CRUD operations for the **articleLikes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleLikes
    * const articleLikes = await prisma.articleLikes.findMany()
    * ```
    */
  get articleLikes(): Prisma.articleLikesDelegate<ExtArgs>;

  /**
   * `prisma.matchPost`: Exposes CRUD operations for the **MatchPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchPosts
    * const matchPosts = await prisma.matchPost.findMany()
    * ```
    */
  get matchPost(): Prisma.MatchPostDelegate<ExtArgs>;

  /**
   * `prisma.matchApplication`: Exposes CRUD operations for the **MatchApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchApplications
    * const matchApplications = await prisma.matchApplication.findMany()
    * ```
    */
  get matchApplication(): Prisma.MatchApplicationDelegate<ExtArgs>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs>;

  /**
   * `prisma.chatRoomMember`: Exposes CRUD operations for the **ChatRoomMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRoomMembers
    * const chatRoomMembers = await prisma.chatRoomMember.findMany()
    * ```
    */
  get chatRoomMember(): Prisma.ChatRoomMemberDelegate<ExtArgs>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Comment: 'Comment',
    Movie: 'Movie',
    User: 'User',
    movieScore: 'movieScore',
    MovieVod: 'MovieVod',
    article: 'article',
    articleComments: 'articleComments',
    articleLikes: 'articleLikes',
    MatchPost: 'MatchPost',
    MatchApplication: 'MatchApplication',
    ChatRoom: 'ChatRoom',
    ChatRoomMember: 'ChatRoomMember',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'comment' | 'movie' | 'user' | 'movieScore' | 'movieVod' | 'article' | 'articleComments' | 'articleLikes' | 'matchPost' | 'matchApplication' | 'chatRoom' | 'chatRoomMember' | 'chatMessage'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>,
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      movieScore: {
        payload: Prisma.$movieScorePayload<ExtArgs>
        fields: Prisma.movieScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movieScoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$movieScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movieScoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$movieScorePayload>
          }
          findFirst: {
            args: Prisma.movieScoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$movieScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movieScoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$movieScorePayload>
          }
          findMany: {
            args: Prisma.movieScoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$movieScorePayload>[]
          }
          create: {
            args: Prisma.movieScoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$movieScorePayload>
          }
          createMany: {
            args: Prisma.movieScoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.movieScoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$movieScorePayload>
          }
          update: {
            args: Prisma.movieScoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$movieScorePayload>
          }
          deleteMany: {
            args: Prisma.movieScoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.movieScoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.movieScoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$movieScorePayload>
          }
          aggregate: {
            args: Prisma.MovieScoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovieScore>
          }
          groupBy: {
            args: Prisma.movieScoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovieScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.movieScoreCountArgs<ExtArgs>,
            result: $Utils.Optional<MovieScoreCountAggregateOutputType> | number
          }
        }
      }
      MovieVod: {
        payload: Prisma.$MovieVodPayload<ExtArgs>
        fields: Prisma.MovieVodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieVodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieVodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieVodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieVodPayload>
          }
          findFirst: {
            args: Prisma.MovieVodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieVodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieVodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieVodPayload>
          }
          findMany: {
            args: Prisma.MovieVodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieVodPayload>[]
          }
          create: {
            args: Prisma.MovieVodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieVodPayload>
          }
          createMany: {
            args: Prisma.MovieVodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MovieVodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieVodPayload>
          }
          update: {
            args: Prisma.MovieVodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieVodPayload>
          }
          deleteMany: {
            args: Prisma.MovieVodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MovieVodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MovieVodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieVodPayload>
          }
          aggregate: {
            args: Prisma.MovieVodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovieVod>
          }
          groupBy: {
            args: Prisma.MovieVodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovieVodGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieVodCountArgs<ExtArgs>,
            result: $Utils.Optional<MovieVodCountAggregateOutputType> | number
          }
        }
      }
      article: {
        payload: Prisma.$articlePayload<ExtArgs>
        fields: Prisma.articleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          findFirst: {
            args: Prisma.articleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          findMany: {
            args: Prisma.articleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlePayload>[]
          }
          create: {
            args: Prisma.articleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          createMany: {
            args: Prisma.articleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.articleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          update: {
            args: Prisma.articleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          deleteMany: {
            args: Prisma.articleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.articleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.articleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.articleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.articleCountArgs<ExtArgs>,
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      articleComments: {
        payload: Prisma.$articleCommentsPayload<ExtArgs>
        fields: Prisma.articleCommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articleCommentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articleCommentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleCommentsPayload>
          }
          findFirst: {
            args: Prisma.articleCommentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articleCommentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleCommentsPayload>
          }
          findMany: {
            args: Prisma.articleCommentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleCommentsPayload>[]
          }
          create: {
            args: Prisma.articleCommentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleCommentsPayload>
          }
          createMany: {
            args: Prisma.articleCommentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.articleCommentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleCommentsPayload>
          }
          update: {
            args: Prisma.articleCommentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleCommentsPayload>
          }
          deleteMany: {
            args: Prisma.articleCommentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.articleCommentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.articleCommentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleCommentsPayload>
          }
          aggregate: {
            args: Prisma.ArticleCommentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArticleComments>
          }
          groupBy: {
            args: Prisma.articleCommentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArticleCommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.articleCommentsCountArgs<ExtArgs>,
            result: $Utils.Optional<ArticleCommentsCountAggregateOutputType> | number
          }
        }
      }
      articleLikes: {
        payload: Prisma.$articleLikesPayload<ExtArgs>
        fields: Prisma.articleLikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articleLikesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleLikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articleLikesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleLikesPayload>
          }
          findFirst: {
            args: Prisma.articleLikesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleLikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articleLikesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleLikesPayload>
          }
          findMany: {
            args: Prisma.articleLikesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleLikesPayload>[]
          }
          create: {
            args: Prisma.articleLikesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleLikesPayload>
          }
          createMany: {
            args: Prisma.articleLikesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.articleLikesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleLikesPayload>
          }
          update: {
            args: Prisma.articleLikesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleLikesPayload>
          }
          deleteMany: {
            args: Prisma.articleLikesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.articleLikesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.articleLikesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articleLikesPayload>
          }
          aggregate: {
            args: Prisma.ArticleLikesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArticleLikes>
          }
          groupBy: {
            args: Prisma.articleLikesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArticleLikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.articleLikesCountArgs<ExtArgs>,
            result: $Utils.Optional<ArticleLikesCountAggregateOutputType> | number
          }
        }
      }
      MatchPost: {
        payload: Prisma.$MatchPostPayload<ExtArgs>
        fields: Prisma.MatchPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchPostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchPostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPostPayload>
          }
          findFirst: {
            args: Prisma.MatchPostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchPostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPostPayload>
          }
          findMany: {
            args: Prisma.MatchPostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPostPayload>[]
          }
          create: {
            args: Prisma.MatchPostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPostPayload>
          }
          createMany: {
            args: Prisma.MatchPostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MatchPostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPostPayload>
          }
          update: {
            args: Prisma.MatchPostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPostPayload>
          }
          deleteMany: {
            args: Prisma.MatchPostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MatchPostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MatchPostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPostPayload>
          }
          aggregate: {
            args: Prisma.MatchPostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMatchPost>
          }
          groupBy: {
            args: Prisma.MatchPostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MatchPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchPostCountArgs<ExtArgs>,
            result: $Utils.Optional<MatchPostCountAggregateOutputType> | number
          }
        }
      }
      MatchApplication: {
        payload: Prisma.$MatchApplicationPayload<ExtArgs>
        fields: Prisma.MatchApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchApplicationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchApplicationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          findFirst: {
            args: Prisma.MatchApplicationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchApplicationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          findMany: {
            args: Prisma.MatchApplicationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>[]
          }
          create: {
            args: Prisma.MatchApplicationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          createMany: {
            args: Prisma.MatchApplicationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MatchApplicationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          update: {
            args: Prisma.MatchApplicationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          deleteMany: {
            args: Prisma.MatchApplicationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MatchApplicationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MatchApplicationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          aggregate: {
            args: Prisma.MatchApplicationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMatchApplication>
          }
          groupBy: {
            args: Prisma.MatchApplicationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MatchApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchApplicationCountArgs<ExtArgs>,
            result: $Utils.Optional<MatchApplicationCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      ChatRoomMember: {
        payload: Prisma.$ChatRoomMemberPayload<ExtArgs>
        fields: Prisma.ChatRoomMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomMemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomMemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomMemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomMemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          findMany: {
            args: Prisma.ChatRoomMemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>[]
          }
          create: {
            args: Prisma.ChatRoomMemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          createMany: {
            args: Prisma.ChatRoomMemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatRoomMemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          update: {
            args: Prisma.ChatRoomMemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomMemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomMemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatRoomMemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomMemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatRoomMember>
          }
          groupBy: {
            args: Prisma.ChatRoomMemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatRoomMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomMemberCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatRoomMemberCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    Comment: number
    MovieVod: number
    movieScores: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comment?: boolean | MovieCountOutputTypeCountCommentArgs
    MovieVod?: boolean | MovieCountOutputTypeCountMovieVodArgs
    movieScores?: boolean | MovieCountOutputTypeCountMovieScoresArgs
  }

  // Custom InputTypes

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountMovieVodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieVodWhereInput
  }


  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountMovieScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieScoreWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Comment: number
    article: number
    articleComments: number
    articleLikes: number
    movieScores: number
    MatchPost: number
    MatchApplication: number
    ChatRoomMember: number
    ChatMessage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comment?: boolean | UserCountOutputTypeCountCommentArgs
    article?: boolean | UserCountOutputTypeCountArticleArgs
    articleComments?: boolean | UserCountOutputTypeCountArticleCommentsArgs
    articleLikes?: boolean | UserCountOutputTypeCountArticleLikesArgs
    movieScores?: boolean | UserCountOutputTypeCountMovieScoresArgs
    MatchPost?: boolean | UserCountOutputTypeCountMatchPostArgs
    MatchApplication?: boolean | UserCountOutputTypeCountMatchApplicationArgs
    ChatRoomMember?: boolean | UserCountOutputTypeCountChatRoomMemberArgs
    ChatMessage?: boolean | UserCountOutputTypeCountChatMessageArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticleCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleCommentsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticleLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleLikesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMovieScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieScoreWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchPostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchApplicationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomMemberWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }



  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    articleComments: number
    articleLikes: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articleComments?: boolean | ArticleCountOutputTypeCountArticleCommentsArgs
    articleLikes?: boolean | ArticleCountOutputTypeCountArticleLikesArgs
  }

  // Custom InputTypes

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountArticleCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleCommentsWhereInput
  }


  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountArticleLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleLikesWhereInput
  }



  /**
   * Count Type MatchPostCountOutputType
   */

  export type MatchPostCountOutputType = {
    MatchApplication: number
  }

  export type MatchPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MatchApplication?: boolean | MatchPostCountOutputTypeCountMatchApplicationArgs
  }

  // Custom InputTypes

  /**
   * MatchPostCountOutputType without action
   */
  export type MatchPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPostCountOutputType
     */
    select?: MatchPostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MatchPostCountOutputType without action
   */
  export type MatchPostCountOutputTypeCountMatchApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchApplicationWhereInput
  }



  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    ChatMessage: number
    ChatRoomMember: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatMessage?: boolean | ChatRoomCountOutputTypeCountChatMessageArgs
    ChatRoomMember?: boolean | ChatRoomCountOutputTypeCountChatRoomMemberArgs
  }

  // Custom InputTypes

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountChatRoomMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomMemberWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
    userno: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    movieId: number | null
    userno: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    movieId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userno: number | null
    comment: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    movieId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userno: number | null
    comment: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    movieId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userno: number
    comment: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    movieId?: true
    userno?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    movieId?: true
    userno?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    movieId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userno?: true
    comment?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    movieId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userno?: true
    comment?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    movieId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userno?: true
    comment?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    movieId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userno: number
    comment: string | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userno?: boolean
    comment?: boolean
    Movie?: boolean | MovieDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    movieId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userno?: boolean
    comment?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Movie?: boolean | MovieDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      Movie: Prisma.$MoviePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userno: number
      comment: string | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }


  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly movieId: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly deletedAt: FieldRef<"Comment", 'DateTime'>
    readonly userno: FieldRef<"Comment", 'Int'>
    readonly comment: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
  }



  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
    audience: number | null
    movieCd: number | null
    rank: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
    audience: bigint | null
    movieCd: number | null
    rank: bigint | null
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    audience: bigint | null
    movieCd: number | null
    title: string | null
    rank: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    poster: string | null
    rankInten: string | null
    plot: string | null
    rankOldAndNew: string | null
    openDt: Date | null
    genre: string | null
    director: string | null
    ratting: string | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    audience: bigint | null
    movieCd: number | null
    title: string | null
    rank: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    poster: string | null
    rankInten: string | null
    plot: string | null
    rankOldAndNew: string | null
    openDt: Date | null
    genre: string | null
    director: string | null
    ratting: string | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    audience: number
    movieCd: number
    title: number
    rank: number
    createdAt: number
    updatedAt: number
    poster: number
    vector: number
    rankInten: number
    plot: number
    rankOldAndNew: number
    openDt: number
    genre: number
    director: number
    ratting: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
    audience?: true
    movieCd?: true
    rank?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
    audience?: true
    movieCd?: true
    rank?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    audience?: true
    movieCd?: true
    title?: true
    rank?: true
    createdAt?: true
    updatedAt?: true
    poster?: true
    rankInten?: true
    plot?: true
    rankOldAndNew?: true
    openDt?: true
    genre?: true
    director?: true
    ratting?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    audience?: true
    movieCd?: true
    title?: true
    rank?: true
    createdAt?: true
    updatedAt?: true
    poster?: true
    rankInten?: true
    plot?: true
    rankOldAndNew?: true
    openDt?: true
    genre?: true
    director?: true
    ratting?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    audience?: true
    movieCd?: true
    title?: true
    rank?: true
    createdAt?: true
    updatedAt?: true
    poster?: true
    vector?: true
    rankInten?: true
    plot?: true
    rankOldAndNew?: true
    openDt?: true
    genre?: true
    director?: true
    ratting?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    audience: bigint | null
    movieCd: number
    title: string | null
    rank: bigint | null
    createdAt: Date
    updatedAt: Date
    poster: string | null
    vector: JsonValue | null
    rankInten: string | null
    plot: string | null
    rankOldAndNew: string | null
    openDt: Date | null
    genre: string | null
    director: string | null
    ratting: string | null
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    audience?: boolean
    movieCd?: boolean
    title?: boolean
    rank?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    poster?: boolean
    vector?: boolean
    rankInten?: boolean
    plot?: boolean
    rankOldAndNew?: boolean
    openDt?: boolean
    genre?: boolean
    director?: boolean
    ratting?: boolean
    Comment?: boolean | Movie$CommentArgs<ExtArgs>
    MovieVod?: boolean | Movie$MovieVodArgs<ExtArgs>
    movieScores?: boolean | Movie$movieScoresArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    id?: boolean
    audience?: boolean
    movieCd?: boolean
    title?: boolean
    rank?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    poster?: boolean
    vector?: boolean
    rankInten?: boolean
    plot?: boolean
    rankOldAndNew?: boolean
    openDt?: boolean
    genre?: boolean
    director?: boolean
    ratting?: boolean
  }

  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comment?: boolean | Movie$CommentArgs<ExtArgs>
    MovieVod?: boolean | Movie$MovieVodArgs<ExtArgs>
    movieScores?: boolean | Movie$movieScoresArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      Comment: Prisma.$CommentPayload<ExtArgs>[]
      MovieVod: Prisma.$MovieVodPayload<ExtArgs>[]
      movieScores: Prisma.$movieScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      audience: bigint | null
      movieCd: number
      title: string | null
      rank: bigint | null
      createdAt: Date
      updatedAt: Date
      poster: string | null
      vector: Prisma.JsonValue | null
      rankInten: string | null
      plot: string | null
      rankOldAndNew: string | null
      openDt: Date | null
      genre: string | null
      director: string | null
      ratting: string | null
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }


  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Movie that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
    **/
    create<T extends MovieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieCreateArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Movies.
     *     @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
    **/
    delete<T extends MovieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
    **/
    upsert<T extends MovieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Comment<T extends Movie$CommentArgs<ExtArgs> = {}>(args?: Subset<T, Movie$CommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    MovieVod<T extends Movie$MovieVodArgs<ExtArgs> = {}>(args?: Subset<T, Movie$MovieVodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieVodPayload<ExtArgs>, T, 'findMany'> | Null>;

    movieScores<T extends Movie$movieScoresArgs<ExtArgs> = {}>(args?: Subset<T, Movie$movieScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Movie model
   */ 
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'Int'>
    readonly audience: FieldRef<"Movie", 'BigInt'>
    readonly movieCd: FieldRef<"Movie", 'Int'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly rank: FieldRef<"Movie", 'BigInt'>
    readonly createdAt: FieldRef<"Movie", 'DateTime'>
    readonly updatedAt: FieldRef<"Movie", 'DateTime'>
    readonly poster: FieldRef<"Movie", 'String'>
    readonly vector: FieldRef<"Movie", 'Json'>
    readonly rankInten: FieldRef<"Movie", 'String'>
    readonly plot: FieldRef<"Movie", 'String'>
    readonly rankOldAndNew: FieldRef<"Movie", 'String'>
    readonly openDt: FieldRef<"Movie", 'DateTime'>
    readonly genre: FieldRef<"Movie", 'String'>
    readonly director: FieldRef<"Movie", 'String'>
    readonly ratting: FieldRef<"Movie", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }


  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }


  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
  }


  /**
   * Movie.Comment
   */
  export type Movie$CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Movie.MovieVod
   */
  export type Movie$MovieVodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
    where?: MovieVodWhereInput
    orderBy?: MovieVodOrderByWithRelationInput | MovieVodOrderByWithRelationInput[]
    cursor?: MovieVodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieVodScalarFieldEnum | MovieVodScalarFieldEnum[]
  }


  /**
   * Movie.movieScores
   */
  export type Movie$movieScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    where?: movieScoreWhereInput
    orderBy?: movieScoreOrderByWithRelationInput | movieScoreOrderByWithRelationInput[]
    cursor?: movieScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScoreScalarFieldEnum | MovieScoreScalarFieldEnum[]
  }


  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    nickname: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    provider: string | null
    image: string | null
    marketing_agreed: boolean | null
    gender: $Enums.User_gender | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    nickname: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    provider: string | null
    image: string | null
    marketing_agreed: boolean | null
    gender: $Enums.User_gender | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    nickname: number
    password: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    provider: number
    image: number
    marketing_agreed: number
    gender: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    provider?: true
    image?: true
    marketing_agreed?: true
    gender?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    provider?: true
    image?: true
    marketing_agreed?: true
    gender?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    provider?: true
    image?: true
    marketing_agreed?: true
    gender?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    nickname: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    provider: string
    image: string | null
    marketing_agreed: boolean
    gender: $Enums.User_gender | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nickname?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    provider?: boolean
    image?: boolean
    marketing_agreed?: boolean
    gender?: boolean
    Comment?: boolean | User$CommentArgs<ExtArgs>
    article?: boolean | User$articleArgs<ExtArgs>
    articleComments?: boolean | User$articleCommentsArgs<ExtArgs>
    articleLikes?: boolean | User$articleLikesArgs<ExtArgs>
    movieScores?: boolean | User$movieScoresArgs<ExtArgs>
    MatchPost?: boolean | User$MatchPostArgs<ExtArgs>
    MatchApplication?: boolean | User$MatchApplicationArgs<ExtArgs>
    ChatRoomMember?: boolean | User$ChatRoomMemberArgs<ExtArgs>
    ChatMessage?: boolean | User$ChatMessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    nickname?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    provider?: boolean
    image?: boolean
    marketing_agreed?: boolean
    gender?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comment?: boolean | User$CommentArgs<ExtArgs>
    article?: boolean | User$articleArgs<ExtArgs>
    articleComments?: boolean | User$articleCommentsArgs<ExtArgs>
    articleLikes?: boolean | User$articleLikesArgs<ExtArgs>
    movieScores?: boolean | User$movieScoresArgs<ExtArgs>
    MatchPost?: boolean | User$MatchPostArgs<ExtArgs>
    MatchApplication?: boolean | User$MatchApplicationArgs<ExtArgs>
    ChatRoomMember?: boolean | User$ChatRoomMemberArgs<ExtArgs>
    ChatMessage?: boolean | User$ChatMessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Comment: Prisma.$CommentPayload<ExtArgs>[]
      article: Prisma.$articlePayload<ExtArgs>[]
      articleComments: Prisma.$articleCommentsPayload<ExtArgs>[]
      articleLikes: Prisma.$articleLikesPayload<ExtArgs>[]
      movieScores: Prisma.$movieScorePayload<ExtArgs>[]
      MatchPost: Prisma.$MatchPostPayload<ExtArgs>[]
      MatchApplication: Prisma.$MatchApplicationPayload<ExtArgs>[]
      ChatRoomMember: Prisma.$ChatRoomMemberPayload<ExtArgs>[]
      ChatMessage: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      nickname: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      provider: string
      image: string | null
      marketing_agreed: boolean
      gender: $Enums.User_gender | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Comment<T extends User$CommentArgs<ExtArgs> = {}>(args?: Subset<T, User$CommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    article<T extends User$articleArgs<ExtArgs> = {}>(args?: Subset<T, User$articleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'findMany'> | Null>;

    articleComments<T extends User$articleCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$articleCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    articleLikes<T extends User$articleLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$articleLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'findMany'> | Null>;

    movieScores<T extends User$movieScoresArgs<ExtArgs> = {}>(args?: Subset<T, User$movieScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'findMany'> | Null>;

    MatchPost<T extends User$MatchPostArgs<ExtArgs> = {}>(args?: Subset<T, User$MatchPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'findMany'> | Null>;

    MatchApplication<T extends User$MatchApplicationArgs<ExtArgs> = {}>(args?: Subset<T, User$MatchApplicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    ChatRoomMember<T extends User$ChatRoomMemberArgs<ExtArgs> = {}>(args?: Subset<T, User$ChatRoomMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    ChatMessage<T extends User$ChatMessageArgs<ExtArgs> = {}>(args?: Subset<T, User$ChatMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly provider: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly marketing_agreed: FieldRef<"User", 'Boolean'>
    readonly gender: FieldRef<"User", 'User_gender'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Comment
   */
  export type User$CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * User.article
   */
  export type User$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
    where?: articleWhereInput
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    cursor?: articleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }


  /**
   * User.articleComments
   */
  export type User$articleCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    where?: articleCommentsWhereInput
    orderBy?: articleCommentsOrderByWithRelationInput | articleCommentsOrderByWithRelationInput[]
    cursor?: articleCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleCommentsScalarFieldEnum | ArticleCommentsScalarFieldEnum[]
  }


  /**
   * User.articleLikes
   */
  export type User$articleLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    where?: articleLikesWhereInput
    orderBy?: articleLikesOrderByWithRelationInput | articleLikesOrderByWithRelationInput[]
    cursor?: articleLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleLikesScalarFieldEnum | ArticleLikesScalarFieldEnum[]
  }


  /**
   * User.movieScores
   */
  export type User$movieScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    where?: movieScoreWhereInput
    orderBy?: movieScoreOrderByWithRelationInput | movieScoreOrderByWithRelationInput[]
    cursor?: movieScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScoreScalarFieldEnum | MovieScoreScalarFieldEnum[]
  }


  /**
   * User.MatchPost
   */
  export type User$MatchPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
    where?: MatchPostWhereInput
    orderBy?: MatchPostOrderByWithRelationInput | MatchPostOrderByWithRelationInput[]
    cursor?: MatchPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchPostScalarFieldEnum | MatchPostScalarFieldEnum[]
  }


  /**
   * User.MatchApplication
   */
  export type User$MatchApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    where?: MatchApplicationWhereInput
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    cursor?: MatchApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * User.ChatRoomMember
   */
  export type User$ChatRoomMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    where?: ChatRoomMemberWhereInput
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    cursor?: ChatRoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }


  /**
   * User.ChatMessage
   */
  export type User$ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model movieScore
   */

  export type AggregateMovieScore = {
    _count: MovieScoreCountAggregateOutputType | null
    _avg: MovieScoreAvgAggregateOutputType | null
    _sum: MovieScoreSumAggregateOutputType | null
    _min: MovieScoreMinAggregateOutputType | null
    _max: MovieScoreMaxAggregateOutputType | null
  }

  export type MovieScoreAvgAggregateOutputType = {
    id: number | null
    movieCd: number | null
    score: number | null
    Userno: number | null
  }

  export type MovieScoreSumAggregateOutputType = {
    id: number | null
    movieCd: number | null
    score: number | null
    Userno: number | null
  }

  export type MovieScoreMinAggregateOutputType = {
    id: number | null
    movieCd: number | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    Userno: number | null
  }

  export type MovieScoreMaxAggregateOutputType = {
    id: number | null
    movieCd: number | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    Userno: number | null
  }

  export type MovieScoreCountAggregateOutputType = {
    id: number
    movieCd: number
    score: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    Userno: number
    _all: number
  }


  export type MovieScoreAvgAggregateInputType = {
    id?: true
    movieCd?: true
    score?: true
    Userno?: true
  }

  export type MovieScoreSumAggregateInputType = {
    id?: true
    movieCd?: true
    score?: true
    Userno?: true
  }

  export type MovieScoreMinAggregateInputType = {
    id?: true
    movieCd?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    Userno?: true
  }

  export type MovieScoreMaxAggregateInputType = {
    id?: true
    movieCd?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    Userno?: true
  }

  export type MovieScoreCountAggregateInputType = {
    id?: true
    movieCd?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    Userno?: true
    _all?: true
  }

  export type MovieScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movieScore to aggregate.
     */
    where?: movieScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieScores to fetch.
     */
    orderBy?: movieScoreOrderByWithRelationInput | movieScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movieScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movieScores
    **/
    _count?: true | MovieScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieScoreMaxAggregateInputType
  }

  export type GetMovieScoreAggregateType<T extends MovieScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieScore[P]>
      : GetScalarType<T[P], AggregateMovieScore[P]>
  }




  export type movieScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieScoreWhereInput
    orderBy?: movieScoreOrderByWithAggregationInput | movieScoreOrderByWithAggregationInput[]
    by: MovieScoreScalarFieldEnum[] | MovieScoreScalarFieldEnum
    having?: movieScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieScoreCountAggregateInputType | true
    _avg?: MovieScoreAvgAggregateInputType
    _sum?: MovieScoreSumAggregateInputType
    _min?: MovieScoreMinAggregateInputType
    _max?: MovieScoreMaxAggregateInputType
  }

  export type MovieScoreGroupByOutputType = {
    id: number
    movieCd: number
    score: number | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    Userno: number
    _count: MovieScoreCountAggregateOutputType | null
    _avg: MovieScoreAvgAggregateOutputType | null
    _sum: MovieScoreSumAggregateOutputType | null
    _min: MovieScoreMinAggregateOutputType | null
    _max: MovieScoreMaxAggregateOutputType | null
  }

  type GetMovieScoreGroupByPayload<T extends movieScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieScoreGroupByOutputType[P]>
            : GetScalarType<T[P], MovieScoreGroupByOutputType[P]>
        }
      >
    >


  export type movieScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieCd?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Userno?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieScore"]>

  export type movieScoreSelectScalar = {
    id?: boolean
    movieCd?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Userno?: boolean
  }

  export type movieScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Movie?: boolean | MovieDefaultArgs<ExtArgs>
  }


  export type $movieScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movieScore"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieCd: number
      score: number | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      Userno: number
    }, ExtArgs["result"]["movieScore"]>
    composites: {}
  }


  type movieScoreGetPayload<S extends boolean | null | undefined | movieScoreDefaultArgs> = $Result.GetResult<Prisma.$movieScorePayload, S>

  type movieScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<movieScoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieScoreCountAggregateInputType | true
    }

  export interface movieScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movieScore'], meta: { name: 'movieScore' } }
    /**
     * Find zero or one MovieScore that matches the filter.
     * @param {movieScoreFindUniqueArgs} args - Arguments to find a MovieScore
     * @example
     * // Get one MovieScore
     * const movieScore = await prisma.movieScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends movieScoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, movieScoreFindUniqueArgs<ExtArgs>>
    ): Prisma__movieScoreClient<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MovieScore that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {movieScoreFindUniqueOrThrowArgs} args - Arguments to find a MovieScore
     * @example
     * // Get one MovieScore
     * const movieScore = await prisma.movieScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends movieScoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieScoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__movieScoreClient<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MovieScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieScoreFindFirstArgs} args - Arguments to find a MovieScore
     * @example
     * // Get one MovieScore
     * const movieScore = await prisma.movieScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends movieScoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, movieScoreFindFirstArgs<ExtArgs>>
    ): Prisma__movieScoreClient<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MovieScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieScoreFindFirstOrThrowArgs} args - Arguments to find a MovieScore
     * @example
     * // Get one MovieScore
     * const movieScore = await prisma.movieScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends movieScoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieScoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__movieScoreClient<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MovieScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieScoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieScores
     * const movieScores = await prisma.movieScore.findMany()
     * 
     * // Get first 10 MovieScores
     * const movieScores = await prisma.movieScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieScoreWithIdOnly = await prisma.movieScore.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends movieScoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieScoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MovieScore.
     * @param {movieScoreCreateArgs} args - Arguments to create a MovieScore.
     * @example
     * // Create one MovieScore
     * const MovieScore = await prisma.movieScore.create({
     *   data: {
     *     // ... data to create a MovieScore
     *   }
     * })
     * 
    **/
    create<T extends movieScoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, movieScoreCreateArgs<ExtArgs>>
    ): Prisma__movieScoreClient<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MovieScores.
     *     @param {movieScoreCreateManyArgs} args - Arguments to create many MovieScores.
     *     @example
     *     // Create many MovieScores
     *     const movieScore = await prisma.movieScore.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends movieScoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieScoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovieScore.
     * @param {movieScoreDeleteArgs} args - Arguments to delete one MovieScore.
     * @example
     * // Delete one MovieScore
     * const MovieScore = await prisma.movieScore.delete({
     *   where: {
     *     // ... filter to delete one MovieScore
     *   }
     * })
     * 
    **/
    delete<T extends movieScoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, movieScoreDeleteArgs<ExtArgs>>
    ): Prisma__movieScoreClient<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MovieScore.
     * @param {movieScoreUpdateArgs} args - Arguments to update one MovieScore.
     * @example
     * // Update one MovieScore
     * const movieScore = await prisma.movieScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends movieScoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, movieScoreUpdateArgs<ExtArgs>>
    ): Prisma__movieScoreClient<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MovieScores.
     * @param {movieScoreDeleteManyArgs} args - Arguments to filter MovieScores to delete.
     * @example
     * // Delete a few MovieScores
     * const { count } = await prisma.movieScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends movieScoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieScoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieScores
     * const movieScore = await prisma.movieScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends movieScoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, movieScoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieScore.
     * @param {movieScoreUpsertArgs} args - Arguments to update or create a MovieScore.
     * @example
     * // Update or create a MovieScore
     * const movieScore = await prisma.movieScore.upsert({
     *   create: {
     *     // ... data to create a MovieScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieScore we want to update
     *   }
     * })
    **/
    upsert<T extends movieScoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, movieScoreUpsertArgs<ExtArgs>>
    ): Prisma__movieScoreClient<$Result.GetResult<Prisma.$movieScorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MovieScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieScoreCountArgs} args - Arguments to filter MovieScores to count.
     * @example
     * // Count the number of MovieScores
     * const count = await prisma.movieScore.count({
     *   where: {
     *     // ... the filter for the MovieScores we want to count
     *   }
     * })
    **/
    count<T extends movieScoreCountArgs>(
      args?: Subset<T, movieScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieScoreAggregateArgs>(args: Subset<T, MovieScoreAggregateArgs>): Prisma.PrismaPromise<GetMovieScoreAggregateType<T>>

    /**
     * Group by MovieScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends movieScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movieScoreGroupByArgs['orderBy'] }
        : { orderBy?: movieScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, movieScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movieScore model
   */
  readonly fields: movieScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movieScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movieScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the movieScore model
   */ 
  interface movieScoreFieldRefs {
    readonly id: FieldRef<"movieScore", 'Int'>
    readonly movieCd: FieldRef<"movieScore", 'Int'>
    readonly score: FieldRef<"movieScore", 'Float'>
    readonly createdAt: FieldRef<"movieScore", 'DateTime'>
    readonly updatedAt: FieldRef<"movieScore", 'DateTime'>
    readonly deletedAt: FieldRef<"movieScore", 'DateTime'>
    readonly Userno: FieldRef<"movieScore", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * movieScore findUnique
   */
  export type movieScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    /**
     * Filter, which movieScore to fetch.
     */
    where: movieScoreWhereUniqueInput
  }


  /**
   * movieScore findUniqueOrThrow
   */
  export type movieScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    /**
     * Filter, which movieScore to fetch.
     */
    where: movieScoreWhereUniqueInput
  }


  /**
   * movieScore findFirst
   */
  export type movieScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    /**
     * Filter, which movieScore to fetch.
     */
    where?: movieScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieScores to fetch.
     */
    orderBy?: movieScoreOrderByWithRelationInput | movieScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movieScores.
     */
    cursor?: movieScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movieScores.
     */
    distinct?: MovieScoreScalarFieldEnum | MovieScoreScalarFieldEnum[]
  }


  /**
   * movieScore findFirstOrThrow
   */
  export type movieScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    /**
     * Filter, which movieScore to fetch.
     */
    where?: movieScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieScores to fetch.
     */
    orderBy?: movieScoreOrderByWithRelationInput | movieScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movieScores.
     */
    cursor?: movieScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movieScores.
     */
    distinct?: MovieScoreScalarFieldEnum | MovieScoreScalarFieldEnum[]
  }


  /**
   * movieScore findMany
   */
  export type movieScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    /**
     * Filter, which movieScores to fetch.
     */
    where?: movieScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieScores to fetch.
     */
    orderBy?: movieScoreOrderByWithRelationInput | movieScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movieScores.
     */
    cursor?: movieScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieScores.
     */
    skip?: number
    distinct?: MovieScoreScalarFieldEnum | MovieScoreScalarFieldEnum[]
  }


  /**
   * movieScore create
   */
  export type movieScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a movieScore.
     */
    data: XOR<movieScoreCreateInput, movieScoreUncheckedCreateInput>
  }


  /**
   * movieScore createMany
   */
  export type movieScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movieScores.
     */
    data: movieScoreCreateManyInput | movieScoreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * movieScore update
   */
  export type movieScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a movieScore.
     */
    data: XOR<movieScoreUpdateInput, movieScoreUncheckedUpdateInput>
    /**
     * Choose, which movieScore to update.
     */
    where: movieScoreWhereUniqueInput
  }


  /**
   * movieScore updateMany
   */
  export type movieScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movieScores.
     */
    data: XOR<movieScoreUpdateManyMutationInput, movieScoreUncheckedUpdateManyInput>
    /**
     * Filter which movieScores to update
     */
    where?: movieScoreWhereInput
  }


  /**
   * movieScore upsert
   */
  export type movieScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the movieScore to update in case it exists.
     */
    where: movieScoreWhereUniqueInput
    /**
     * In case the movieScore found by the `where` argument doesn't exist, create a new movieScore with this data.
     */
    create: XOR<movieScoreCreateInput, movieScoreUncheckedCreateInput>
    /**
     * In case the movieScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movieScoreUpdateInput, movieScoreUncheckedUpdateInput>
  }


  /**
   * movieScore delete
   */
  export type movieScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
    /**
     * Filter which movieScore to delete.
     */
    where: movieScoreWhereUniqueInput
  }


  /**
   * movieScore deleteMany
   */
  export type movieScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movieScores to delete
     */
    where?: movieScoreWhereInput
  }


  /**
   * movieScore without action
   */
  export type movieScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieScore
     */
    select?: movieScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieScoreInclude<ExtArgs> | null
  }



  /**
   * Model MovieVod
   */

  export type AggregateMovieVod = {
    _count: MovieVodCountAggregateOutputType | null
    _avg: MovieVodAvgAggregateOutputType | null
    _sum: MovieVodSumAggregateOutputType | null
    _min: MovieVodMinAggregateOutputType | null
    _max: MovieVodMaxAggregateOutputType | null
  }

  export type MovieVodAvgAggregateOutputType = {
    id: number | null
    movieCd: number | null
  }

  export type MovieVodSumAggregateOutputType = {
    id: number | null
    movieCd: number | null
  }

  export type MovieVodMinAggregateOutputType = {
    id: number | null
    vodUrl: string | null
    movieCd: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MovieVodMaxAggregateOutputType = {
    id: number | null
    vodUrl: string | null
    movieCd: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MovieVodCountAggregateOutputType = {
    id: number
    vodUrl: number
    movieCd: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type MovieVodAvgAggregateInputType = {
    id?: true
    movieCd?: true
  }

  export type MovieVodSumAggregateInputType = {
    id?: true
    movieCd?: true
  }

  export type MovieVodMinAggregateInputType = {
    id?: true
    vodUrl?: true
    movieCd?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MovieVodMaxAggregateInputType = {
    id?: true
    vodUrl?: true
    movieCd?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MovieVodCountAggregateInputType = {
    id?: true
    vodUrl?: true
    movieCd?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type MovieVodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieVod to aggregate.
     */
    where?: MovieVodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieVods to fetch.
     */
    orderBy?: MovieVodOrderByWithRelationInput | MovieVodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieVodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieVods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieVods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieVods
    **/
    _count?: true | MovieVodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieVodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieVodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieVodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieVodMaxAggregateInputType
  }

  export type GetMovieVodAggregateType<T extends MovieVodAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieVod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieVod[P]>
      : GetScalarType<T[P], AggregateMovieVod[P]>
  }




  export type MovieVodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieVodWhereInput
    orderBy?: MovieVodOrderByWithAggregationInput | MovieVodOrderByWithAggregationInput[]
    by: MovieVodScalarFieldEnum[] | MovieVodScalarFieldEnum
    having?: MovieVodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieVodCountAggregateInputType | true
    _avg?: MovieVodAvgAggregateInputType
    _sum?: MovieVodSumAggregateInputType
    _min?: MovieVodMinAggregateInputType
    _max?: MovieVodMaxAggregateInputType
  }

  export type MovieVodGroupByOutputType = {
    id: number
    vodUrl: string
    movieCd: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: MovieVodCountAggregateOutputType | null
    _avg: MovieVodAvgAggregateOutputType | null
    _sum: MovieVodSumAggregateOutputType | null
    _min: MovieVodMinAggregateOutputType | null
    _max: MovieVodMaxAggregateOutputType | null
  }

  type GetMovieVodGroupByPayload<T extends MovieVodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieVodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieVodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieVodGroupByOutputType[P]>
            : GetScalarType<T[P], MovieVodGroupByOutputType[P]>
        }
      >
    >


  export type MovieVodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vodUrl?: boolean
    movieCd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieVod"]>

  export type MovieVodSelectScalar = {
    id?: boolean
    vodUrl?: boolean
    movieCd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type MovieVodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Movie?: boolean | MovieDefaultArgs<ExtArgs>
  }


  export type $MovieVodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieVod"
    objects: {
      Movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vodUrl: string
      movieCd: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["movieVod"]>
    composites: {}
  }


  type MovieVodGetPayload<S extends boolean | null | undefined | MovieVodDefaultArgs> = $Result.GetResult<Prisma.$MovieVodPayload, S>

  type MovieVodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovieVodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieVodCountAggregateInputType | true
    }

  export interface MovieVodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieVod'], meta: { name: 'MovieVod' } }
    /**
     * Find zero or one MovieVod that matches the filter.
     * @param {MovieVodFindUniqueArgs} args - Arguments to find a MovieVod
     * @example
     * // Get one MovieVod
     * const movieVod = await prisma.movieVod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieVodFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MovieVodFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieVodClient<$Result.GetResult<Prisma.$MovieVodPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MovieVod that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MovieVodFindUniqueOrThrowArgs} args - Arguments to find a MovieVod
     * @example
     * // Get one MovieVod
     * const movieVod = await prisma.movieVod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieVodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieVodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieVodClient<$Result.GetResult<Prisma.$MovieVodPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MovieVod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieVodFindFirstArgs} args - Arguments to find a MovieVod
     * @example
     * // Get one MovieVod
     * const movieVod = await prisma.movieVod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieVodFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieVodFindFirstArgs<ExtArgs>>
    ): Prisma__MovieVodClient<$Result.GetResult<Prisma.$MovieVodPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MovieVod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieVodFindFirstOrThrowArgs} args - Arguments to find a MovieVod
     * @example
     * // Get one MovieVod
     * const movieVod = await prisma.movieVod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieVodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieVodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieVodClient<$Result.GetResult<Prisma.$MovieVodPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MovieVods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieVodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieVods
     * const movieVods = await prisma.movieVod.findMany()
     * 
     * // Get first 10 MovieVods
     * const movieVods = await prisma.movieVod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieVodWithIdOnly = await prisma.movieVod.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovieVodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieVodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieVodPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MovieVod.
     * @param {MovieVodCreateArgs} args - Arguments to create a MovieVod.
     * @example
     * // Create one MovieVod
     * const MovieVod = await prisma.movieVod.create({
     *   data: {
     *     // ... data to create a MovieVod
     *   }
     * })
     * 
    **/
    create<T extends MovieVodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieVodCreateArgs<ExtArgs>>
    ): Prisma__MovieVodClient<$Result.GetResult<Prisma.$MovieVodPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MovieVods.
     *     @param {MovieVodCreateManyArgs} args - Arguments to create many MovieVods.
     *     @example
     *     // Create many MovieVods
     *     const movieVod = await prisma.movieVod.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieVodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieVodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovieVod.
     * @param {MovieVodDeleteArgs} args - Arguments to delete one MovieVod.
     * @example
     * // Delete one MovieVod
     * const MovieVod = await prisma.movieVod.delete({
     *   where: {
     *     // ... filter to delete one MovieVod
     *   }
     * })
     * 
    **/
    delete<T extends MovieVodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MovieVodDeleteArgs<ExtArgs>>
    ): Prisma__MovieVodClient<$Result.GetResult<Prisma.$MovieVodPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MovieVod.
     * @param {MovieVodUpdateArgs} args - Arguments to update one MovieVod.
     * @example
     * // Update one MovieVod
     * const movieVod = await prisma.movieVod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieVodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieVodUpdateArgs<ExtArgs>>
    ): Prisma__MovieVodClient<$Result.GetResult<Prisma.$MovieVodPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MovieVods.
     * @param {MovieVodDeleteManyArgs} args - Arguments to filter MovieVods to delete.
     * @example
     * // Delete a few MovieVods
     * const { count } = await prisma.movieVod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieVodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieVodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieVods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieVodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieVods
     * const movieVod = await prisma.movieVod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieVodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MovieVodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieVod.
     * @param {MovieVodUpsertArgs} args - Arguments to update or create a MovieVod.
     * @example
     * // Update or create a MovieVod
     * const movieVod = await prisma.movieVod.upsert({
     *   create: {
     *     // ... data to create a MovieVod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieVod we want to update
     *   }
     * })
    **/
    upsert<T extends MovieVodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MovieVodUpsertArgs<ExtArgs>>
    ): Prisma__MovieVodClient<$Result.GetResult<Prisma.$MovieVodPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MovieVods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieVodCountArgs} args - Arguments to filter MovieVods to count.
     * @example
     * // Count the number of MovieVods
     * const count = await prisma.movieVod.count({
     *   where: {
     *     // ... the filter for the MovieVods we want to count
     *   }
     * })
    **/
    count<T extends MovieVodCountArgs>(
      args?: Subset<T, MovieVodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieVodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieVod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieVodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieVodAggregateArgs>(args: Subset<T, MovieVodAggregateArgs>): Prisma.PrismaPromise<GetMovieVodAggregateType<T>>

    /**
     * Group by MovieVod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieVodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieVodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieVodGroupByArgs['orderBy'] }
        : { orderBy?: MovieVodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieVodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieVodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieVod model
   */
  readonly fields: MovieVodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieVod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieVodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MovieVod model
   */ 
  interface MovieVodFieldRefs {
    readonly id: FieldRef<"MovieVod", 'Int'>
    readonly vodUrl: FieldRef<"MovieVod", 'String'>
    readonly movieCd: FieldRef<"MovieVod", 'Int'>
    readonly createdAt: FieldRef<"MovieVod", 'DateTime'>
    readonly updatedAt: FieldRef<"MovieVod", 'DateTime'>
    readonly deletedAt: FieldRef<"MovieVod", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MovieVod findUnique
   */
  export type MovieVodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
    /**
     * Filter, which MovieVod to fetch.
     */
    where: MovieVodWhereUniqueInput
  }


  /**
   * MovieVod findUniqueOrThrow
   */
  export type MovieVodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
    /**
     * Filter, which MovieVod to fetch.
     */
    where: MovieVodWhereUniqueInput
  }


  /**
   * MovieVod findFirst
   */
  export type MovieVodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
    /**
     * Filter, which MovieVod to fetch.
     */
    where?: MovieVodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieVods to fetch.
     */
    orderBy?: MovieVodOrderByWithRelationInput | MovieVodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieVods.
     */
    cursor?: MovieVodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieVods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieVods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieVods.
     */
    distinct?: MovieVodScalarFieldEnum | MovieVodScalarFieldEnum[]
  }


  /**
   * MovieVod findFirstOrThrow
   */
  export type MovieVodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
    /**
     * Filter, which MovieVod to fetch.
     */
    where?: MovieVodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieVods to fetch.
     */
    orderBy?: MovieVodOrderByWithRelationInput | MovieVodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieVods.
     */
    cursor?: MovieVodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieVods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieVods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieVods.
     */
    distinct?: MovieVodScalarFieldEnum | MovieVodScalarFieldEnum[]
  }


  /**
   * MovieVod findMany
   */
  export type MovieVodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
    /**
     * Filter, which MovieVods to fetch.
     */
    where?: MovieVodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieVods to fetch.
     */
    orderBy?: MovieVodOrderByWithRelationInput | MovieVodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieVods.
     */
    cursor?: MovieVodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieVods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieVods.
     */
    skip?: number
    distinct?: MovieVodScalarFieldEnum | MovieVodScalarFieldEnum[]
  }


  /**
   * MovieVod create
   */
  export type MovieVodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieVod.
     */
    data: XOR<MovieVodCreateInput, MovieVodUncheckedCreateInput>
  }


  /**
   * MovieVod createMany
   */
  export type MovieVodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieVods.
     */
    data: MovieVodCreateManyInput | MovieVodCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MovieVod update
   */
  export type MovieVodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieVod.
     */
    data: XOR<MovieVodUpdateInput, MovieVodUncheckedUpdateInput>
    /**
     * Choose, which MovieVod to update.
     */
    where: MovieVodWhereUniqueInput
  }


  /**
   * MovieVod updateMany
   */
  export type MovieVodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieVods.
     */
    data: XOR<MovieVodUpdateManyMutationInput, MovieVodUncheckedUpdateManyInput>
    /**
     * Filter which MovieVods to update
     */
    where?: MovieVodWhereInput
  }


  /**
   * MovieVod upsert
   */
  export type MovieVodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieVod to update in case it exists.
     */
    where: MovieVodWhereUniqueInput
    /**
     * In case the MovieVod found by the `where` argument doesn't exist, create a new MovieVod with this data.
     */
    create: XOR<MovieVodCreateInput, MovieVodUncheckedCreateInput>
    /**
     * In case the MovieVod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieVodUpdateInput, MovieVodUncheckedUpdateInput>
  }


  /**
   * MovieVod delete
   */
  export type MovieVodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
    /**
     * Filter which MovieVod to delete.
     */
    where: MovieVodWhereUniqueInput
  }


  /**
   * MovieVod deleteMany
   */
  export type MovieVodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieVods to delete
     */
    where?: MovieVodWhereInput
  }


  /**
   * MovieVod without action
   */
  export type MovieVodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieVod
     */
    select?: MovieVodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieVodInclude<ExtArgs> | null
  }



  /**
   * Model article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
    userno: number | null
    like_count: number | null
    dislike_count: number | null
    comment_count: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: number | null
    userno: number | null
    like_count: number | null
    dislike_count: number | null
    comment_count: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: number | null
    userno: number | null
    title: string | null
    content: string | null
    like_count: number | null
    dislike_count: number | null
    comment_count: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: number | null
    userno: number | null
    title: string | null
    content: string | null
    like_count: number | null
    dislike_count: number | null
    comment_count: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    userno: number
    title: number
    content: number
    like_count: number
    dislike_count: number
    comment_count: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
    userno?: true
    like_count?: true
    dislike_count?: true
    comment_count?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
    userno?: true
    like_count?: true
    dislike_count?: true
    comment_count?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    userno?: true
    title?: true
    content?: true
    like_count?: true
    dislike_count?: true
    comment_count?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    userno?: true
    title?: true
    content?: true
    like_count?: true
    dislike_count?: true
    comment_count?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    userno?: true
    title?: true
    content?: true
    like_count?: true
    dislike_count?: true
    comment_count?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article to aggregate.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type articleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleWhereInput
    orderBy?: articleOrderByWithAggregationInput | articleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: articleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: number
    userno: number
    title: string
    content: string
    like_count: number
    dislike_count: number
    comment_count: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends articleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type articleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userno?: boolean
    title?: boolean
    content?: boolean
    like_count?: boolean
    dislike_count?: boolean
    comment_count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    articleComments?: boolean | article$articleCommentsArgs<ExtArgs>
    articleLikes?: boolean | article$articleLikesArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type articleSelectScalar = {
    id?: boolean
    userno?: boolean
    title?: boolean
    content?: boolean
    like_count?: boolean
    dislike_count?: boolean
    comment_count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type articleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    articleComments?: boolean | article$articleCommentsArgs<ExtArgs>
    articleLikes?: boolean | article$articleLikesArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $articlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "article"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      articleComments: Prisma.$articleCommentsPayload<ExtArgs>[]
      articleLikes: Prisma.$articleLikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userno: number
      title: string
      content: string
      like_count: number
      dislike_count: number
      comment_count: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["article"]>
    composites: {}
  }


  type articleGetPayload<S extends boolean | null | undefined | articleDefaultArgs> = $Result.GetResult<Prisma.$articlePayload, S>

  type articleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<articleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface articleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['article'], meta: { name: 'article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {articleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends articleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, articleFindUniqueArgs<ExtArgs>>
    ): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Article that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {articleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends articleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, articleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends articleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, articleFindFirstArgs<ExtArgs>>
    ): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends articleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, articleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends articleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Article.
     * @param {articleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
    **/
    create<T extends articleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, articleCreateArgs<ExtArgs>>
    ): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Articles.
     *     @param {articleCreateManyArgs} args - Arguments to create many Articles.
     *     @example
     *     // Create many Articles
     *     const article = await prisma.article.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends articleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {articleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
    **/
    delete<T extends articleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, articleDeleteArgs<ExtArgs>>
    ): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Article.
     * @param {articleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends articleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, articleUpdateArgs<ExtArgs>>
    ): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Articles.
     * @param {articleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends articleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends articleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, articleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {articleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
    **/
    upsert<T extends articleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, articleUpsertArgs<ExtArgs>>
    ): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends articleCountArgs>(
      args?: Subset<T, articleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends articleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articleGroupByArgs['orderBy'] }
        : { orderBy?: articleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, articleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the article model
   */
  readonly fields: articleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    articleComments<T extends article$articleCommentsArgs<ExtArgs> = {}>(args?: Subset<T, article$articleCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    articleLikes<T extends article$articleLikesArgs<ExtArgs> = {}>(args?: Subset<T, article$articleLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the article model
   */ 
  interface articleFieldRefs {
    readonly id: FieldRef<"article", 'Int'>
    readonly userno: FieldRef<"article", 'Int'>
    readonly title: FieldRef<"article", 'String'>
    readonly content: FieldRef<"article", 'String'>
    readonly like_count: FieldRef<"article", 'Int'>
    readonly dislike_count: FieldRef<"article", 'Int'>
    readonly comment_count: FieldRef<"article", 'Int'>
    readonly createdAt: FieldRef<"article", 'DateTime'>
    readonly updatedAt: FieldRef<"article", 'DateTime'>
    readonly deletedAt: FieldRef<"article", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * article findUnique
   */
  export type articleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where: articleWhereUniqueInput
  }


  /**
   * article findUniqueOrThrow
   */
  export type articleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where: articleWhereUniqueInput
  }


  /**
   * article findFirst
   */
  export type articleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }


  /**
   * article findFirstOrThrow
   */
  export type articleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }


  /**
   * article findMany
   */
  export type articleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }


  /**
   * article create
   */
  export type articleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * The data needed to create a article.
     */
    data: XOR<articleCreateInput, articleUncheckedCreateInput>
  }


  /**
   * article createMany
   */
  export type articleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articles.
     */
    data: articleCreateManyInput | articleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * article update
   */
  export type articleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * The data needed to update a article.
     */
    data: XOR<articleUpdateInput, articleUncheckedUpdateInput>
    /**
     * Choose, which article to update.
     */
    where: articleWhereUniqueInput
  }


  /**
   * article updateMany
   */
  export type articleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articles.
     */
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articleWhereInput
  }


  /**
   * article upsert
   */
  export type articleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * The filter to search for the article to update in case it exists.
     */
    where: articleWhereUniqueInput
    /**
     * In case the article found by the `where` argument doesn't exist, create a new article with this data.
     */
    create: XOR<articleCreateInput, articleUncheckedCreateInput>
    /**
     * In case the article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articleUpdateInput, articleUncheckedUpdateInput>
  }


  /**
   * article delete
   */
  export type articleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter which article to delete.
     */
    where: articleWhereUniqueInput
  }


  /**
   * article deleteMany
   */
  export type articleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to delete
     */
    where?: articleWhereInput
  }


  /**
   * article.articleComments
   */
  export type article$articleCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    where?: articleCommentsWhereInput
    orderBy?: articleCommentsOrderByWithRelationInput | articleCommentsOrderByWithRelationInput[]
    cursor?: articleCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleCommentsScalarFieldEnum | ArticleCommentsScalarFieldEnum[]
  }


  /**
   * article.articleLikes
   */
  export type article$articleLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    where?: articleLikesWhereInput
    orderBy?: articleLikesOrderByWithRelationInput | articleLikesOrderByWithRelationInput[]
    cursor?: articleLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleLikesScalarFieldEnum | ArticleLikesScalarFieldEnum[]
  }


  /**
   * article without action
   */
  export type articleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleInclude<ExtArgs> | null
  }



  /**
   * Model articleComments
   */

  export type AggregateArticleComments = {
    _count: ArticleCommentsCountAggregateOutputType | null
    _avg: ArticleCommentsAvgAggregateOutputType | null
    _sum: ArticleCommentsSumAggregateOutputType | null
    _min: ArticleCommentsMinAggregateOutputType | null
    _max: ArticleCommentsMaxAggregateOutputType | null
  }

  export type ArticleCommentsAvgAggregateOutputType = {
    id: number | null
    articleId: number | null
    userno: number | null
  }

  export type ArticleCommentsSumAggregateOutputType = {
    id: number | null
    articleId: number | null
    userno: number | null
  }

  export type ArticleCommentsMinAggregateOutputType = {
    id: number | null
    articleId: number | null
    userno: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ArticleCommentsMaxAggregateOutputType = {
    id: number | null
    articleId: number | null
    userno: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ArticleCommentsCountAggregateOutputType = {
    id: number
    articleId: number
    userno: number
    content: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ArticleCommentsAvgAggregateInputType = {
    id?: true
    articleId?: true
    userno?: true
  }

  export type ArticleCommentsSumAggregateInputType = {
    id?: true
    articleId?: true
    userno?: true
  }

  export type ArticleCommentsMinAggregateInputType = {
    id?: true
    articleId?: true
    userno?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ArticleCommentsMaxAggregateInputType = {
    id?: true
    articleId?: true
    userno?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ArticleCommentsCountAggregateInputType = {
    id?: true
    articleId?: true
    userno?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ArticleCommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articleComments to aggregate.
     */
    where?: articleCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articleComments to fetch.
     */
    orderBy?: articleCommentsOrderByWithRelationInput | articleCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articleCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articleComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articleComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articleComments
    **/
    _count?: true | ArticleCommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleCommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleCommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleCommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleCommentsMaxAggregateInputType
  }

  export type GetArticleCommentsAggregateType<T extends ArticleCommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleComments[P]>
      : GetScalarType<T[P], AggregateArticleComments[P]>
  }




  export type articleCommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleCommentsWhereInput
    orderBy?: articleCommentsOrderByWithAggregationInput | articleCommentsOrderByWithAggregationInput[]
    by: ArticleCommentsScalarFieldEnum[] | ArticleCommentsScalarFieldEnum
    having?: articleCommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCommentsCountAggregateInputType | true
    _avg?: ArticleCommentsAvgAggregateInputType
    _sum?: ArticleCommentsSumAggregateInputType
    _min?: ArticleCommentsMinAggregateInputType
    _max?: ArticleCommentsMaxAggregateInputType
  }

  export type ArticleCommentsGroupByOutputType = {
    id: number
    articleId: number
    userno: number
    content: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ArticleCommentsCountAggregateOutputType | null
    _avg: ArticleCommentsAvgAggregateOutputType | null
    _sum: ArticleCommentsSumAggregateOutputType | null
    _min: ArticleCommentsMinAggregateOutputType | null
    _max: ArticleCommentsMaxAggregateOutputType | null
  }

  type GetArticleCommentsGroupByPayload<T extends articleCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleCommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleCommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleCommentsGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleCommentsGroupByOutputType[P]>
        }
      >
    >


  export type articleCommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userno?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleComments"]>

  export type articleCommentsSelectScalar = {
    id?: boolean
    articleId?: boolean
    userno?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type articleCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $articleCommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articleComments"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      articleId: number
      userno: number
      content: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["articleComments"]>
    composites: {}
  }


  type articleCommentsGetPayload<S extends boolean | null | undefined | articleCommentsDefaultArgs> = $Result.GetResult<Prisma.$articleCommentsPayload, S>

  type articleCommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<articleCommentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArticleCommentsCountAggregateInputType | true
    }

  export interface articleCommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['articleComments'], meta: { name: 'articleComments' } }
    /**
     * Find zero or one ArticleComments that matches the filter.
     * @param {articleCommentsFindUniqueArgs} args - Arguments to find a ArticleComments
     * @example
     * // Get one ArticleComments
     * const articleComments = await prisma.articleComments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends articleCommentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, articleCommentsFindUniqueArgs<ExtArgs>>
    ): Prisma__articleCommentsClient<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ArticleComments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {articleCommentsFindUniqueOrThrowArgs} args - Arguments to find a ArticleComments
     * @example
     * // Get one ArticleComments
     * const articleComments = await prisma.articleComments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends articleCommentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, articleCommentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__articleCommentsClient<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ArticleComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleCommentsFindFirstArgs} args - Arguments to find a ArticleComments
     * @example
     * // Get one ArticleComments
     * const articleComments = await prisma.articleComments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends articleCommentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, articleCommentsFindFirstArgs<ExtArgs>>
    ): Prisma__articleCommentsClient<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ArticleComments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleCommentsFindFirstOrThrowArgs} args - Arguments to find a ArticleComments
     * @example
     * // Get one ArticleComments
     * const articleComments = await prisma.articleComments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends articleCommentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, articleCommentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__articleCommentsClient<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ArticleComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleCommentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleComments
     * const articleComments = await prisma.articleComments.findMany()
     * 
     * // Get first 10 ArticleComments
     * const articleComments = await prisma.articleComments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleCommentsWithIdOnly = await prisma.articleComments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends articleCommentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articleCommentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ArticleComments.
     * @param {articleCommentsCreateArgs} args - Arguments to create a ArticleComments.
     * @example
     * // Create one ArticleComments
     * const ArticleComments = await prisma.articleComments.create({
     *   data: {
     *     // ... data to create a ArticleComments
     *   }
     * })
     * 
    **/
    create<T extends articleCommentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, articleCommentsCreateArgs<ExtArgs>>
    ): Prisma__articleCommentsClient<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ArticleComments.
     *     @param {articleCommentsCreateManyArgs} args - Arguments to create many ArticleComments.
     *     @example
     *     // Create many ArticleComments
     *     const articleComments = await prisma.articleComments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends articleCommentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articleCommentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleComments.
     * @param {articleCommentsDeleteArgs} args - Arguments to delete one ArticleComments.
     * @example
     * // Delete one ArticleComments
     * const ArticleComments = await prisma.articleComments.delete({
     *   where: {
     *     // ... filter to delete one ArticleComments
     *   }
     * })
     * 
    **/
    delete<T extends articleCommentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, articleCommentsDeleteArgs<ExtArgs>>
    ): Prisma__articleCommentsClient<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ArticleComments.
     * @param {articleCommentsUpdateArgs} args - Arguments to update one ArticleComments.
     * @example
     * // Update one ArticleComments
     * const articleComments = await prisma.articleComments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends articleCommentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, articleCommentsUpdateArgs<ExtArgs>>
    ): Prisma__articleCommentsClient<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ArticleComments.
     * @param {articleCommentsDeleteManyArgs} args - Arguments to filter ArticleComments to delete.
     * @example
     * // Delete a few ArticleComments
     * const { count } = await prisma.articleComments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends articleCommentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articleCommentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleCommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleComments
     * const articleComments = await prisma.articleComments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends articleCommentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, articleCommentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleComments.
     * @param {articleCommentsUpsertArgs} args - Arguments to update or create a ArticleComments.
     * @example
     * // Update or create a ArticleComments
     * const articleComments = await prisma.articleComments.upsert({
     *   create: {
     *     // ... data to create a ArticleComments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleComments we want to update
     *   }
     * })
    **/
    upsert<T extends articleCommentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, articleCommentsUpsertArgs<ExtArgs>>
    ): Prisma__articleCommentsClient<$Result.GetResult<Prisma.$articleCommentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ArticleComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleCommentsCountArgs} args - Arguments to filter ArticleComments to count.
     * @example
     * // Count the number of ArticleComments
     * const count = await prisma.articleComments.count({
     *   where: {
     *     // ... the filter for the ArticleComments we want to count
     *   }
     * })
    **/
    count<T extends articleCommentsCountArgs>(
      args?: Subset<T, articleCommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleCommentsAggregateArgs>(args: Subset<T, ArticleCommentsAggregateArgs>): Prisma.PrismaPromise<GetArticleCommentsAggregateType<T>>

    /**
     * Group by ArticleComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleCommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends articleCommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articleCommentsGroupByArgs['orderBy'] }
        : { orderBy?: articleCommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, articleCommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the articleComments model
   */
  readonly fields: articleCommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for articleComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articleCommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    article<T extends articleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articleDefaultArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the articleComments model
   */ 
  interface articleCommentsFieldRefs {
    readonly id: FieldRef<"articleComments", 'Int'>
    readonly articleId: FieldRef<"articleComments", 'Int'>
    readonly userno: FieldRef<"articleComments", 'Int'>
    readonly content: FieldRef<"articleComments", 'String'>
    readonly createdAt: FieldRef<"articleComments", 'DateTime'>
    readonly updatedAt: FieldRef<"articleComments", 'DateTime'>
    readonly deletedAt: FieldRef<"articleComments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * articleComments findUnique
   */
  export type articleCommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    /**
     * Filter, which articleComments to fetch.
     */
    where: articleCommentsWhereUniqueInput
  }


  /**
   * articleComments findUniqueOrThrow
   */
  export type articleCommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    /**
     * Filter, which articleComments to fetch.
     */
    where: articleCommentsWhereUniqueInput
  }


  /**
   * articleComments findFirst
   */
  export type articleCommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    /**
     * Filter, which articleComments to fetch.
     */
    where?: articleCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articleComments to fetch.
     */
    orderBy?: articleCommentsOrderByWithRelationInput | articleCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articleComments.
     */
    cursor?: articleCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articleComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articleComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articleComments.
     */
    distinct?: ArticleCommentsScalarFieldEnum | ArticleCommentsScalarFieldEnum[]
  }


  /**
   * articleComments findFirstOrThrow
   */
  export type articleCommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    /**
     * Filter, which articleComments to fetch.
     */
    where?: articleCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articleComments to fetch.
     */
    orderBy?: articleCommentsOrderByWithRelationInput | articleCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articleComments.
     */
    cursor?: articleCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articleComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articleComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articleComments.
     */
    distinct?: ArticleCommentsScalarFieldEnum | ArticleCommentsScalarFieldEnum[]
  }


  /**
   * articleComments findMany
   */
  export type articleCommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    /**
     * Filter, which articleComments to fetch.
     */
    where?: articleCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articleComments to fetch.
     */
    orderBy?: articleCommentsOrderByWithRelationInput | articleCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articleComments.
     */
    cursor?: articleCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articleComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articleComments.
     */
    skip?: number
    distinct?: ArticleCommentsScalarFieldEnum | ArticleCommentsScalarFieldEnum[]
  }


  /**
   * articleComments create
   */
  export type articleCommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a articleComments.
     */
    data: XOR<articleCommentsCreateInput, articleCommentsUncheckedCreateInput>
  }


  /**
   * articleComments createMany
   */
  export type articleCommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articleComments.
     */
    data: articleCommentsCreateManyInput | articleCommentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * articleComments update
   */
  export type articleCommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a articleComments.
     */
    data: XOR<articleCommentsUpdateInput, articleCommentsUncheckedUpdateInput>
    /**
     * Choose, which articleComments to update.
     */
    where: articleCommentsWhereUniqueInput
  }


  /**
   * articleComments updateMany
   */
  export type articleCommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articleComments.
     */
    data: XOR<articleCommentsUpdateManyMutationInput, articleCommentsUncheckedUpdateManyInput>
    /**
     * Filter which articleComments to update
     */
    where?: articleCommentsWhereInput
  }


  /**
   * articleComments upsert
   */
  export type articleCommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the articleComments to update in case it exists.
     */
    where: articleCommentsWhereUniqueInput
    /**
     * In case the articleComments found by the `where` argument doesn't exist, create a new articleComments with this data.
     */
    create: XOR<articleCommentsCreateInput, articleCommentsUncheckedCreateInput>
    /**
     * In case the articleComments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articleCommentsUpdateInput, articleCommentsUncheckedUpdateInput>
  }


  /**
   * articleComments delete
   */
  export type articleCommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
    /**
     * Filter which articleComments to delete.
     */
    where: articleCommentsWhereUniqueInput
  }


  /**
   * articleComments deleteMany
   */
  export type articleCommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articleComments to delete
     */
    where?: articleCommentsWhereInput
  }


  /**
   * articleComments without action
   */
  export type articleCommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleComments
     */
    select?: articleCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleCommentsInclude<ExtArgs> | null
  }



  /**
   * Model articleLikes
   */

  export type AggregateArticleLikes = {
    _count: ArticleLikesCountAggregateOutputType | null
    _avg: ArticleLikesAvgAggregateOutputType | null
    _sum: ArticleLikesSumAggregateOutputType | null
    _min: ArticleLikesMinAggregateOutputType | null
    _max: ArticleLikesMaxAggregateOutputType | null
  }

  export type ArticleLikesAvgAggregateOutputType = {
    id: number | null
    article_id: number | null
    userno: number | null
  }

  export type ArticleLikesSumAggregateOutputType = {
    id: number | null
    article_id: number | null
    userno: number | null
  }

  export type ArticleLikesMinAggregateOutputType = {
    id: number | null
    article_id: number | null
    userno: number | null
    type: $Enums.articleLikes_type | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleLikesMaxAggregateOutputType = {
    id: number | null
    article_id: number | null
    userno: number | null
    type: $Enums.articleLikes_type | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleLikesCountAggregateOutputType = {
    id: number
    article_id: number
    userno: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleLikesAvgAggregateInputType = {
    id?: true
    article_id?: true
    userno?: true
  }

  export type ArticleLikesSumAggregateInputType = {
    id?: true
    article_id?: true
    userno?: true
  }

  export type ArticleLikesMinAggregateInputType = {
    id?: true
    article_id?: true
    userno?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleLikesMaxAggregateInputType = {
    id?: true
    article_id?: true
    userno?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleLikesCountAggregateInputType = {
    id?: true
    article_id?: true
    userno?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleLikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articleLikes to aggregate.
     */
    where?: articleLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articleLikes to fetch.
     */
    orderBy?: articleLikesOrderByWithRelationInput | articleLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articleLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articleLikes
    **/
    _count?: true | ArticleLikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleLikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleLikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleLikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleLikesMaxAggregateInputType
  }

  export type GetArticleLikesAggregateType<T extends ArticleLikesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleLikes[P]>
      : GetScalarType<T[P], AggregateArticleLikes[P]>
  }




  export type articleLikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleLikesWhereInput
    orderBy?: articleLikesOrderByWithAggregationInput | articleLikesOrderByWithAggregationInput[]
    by: ArticleLikesScalarFieldEnum[] | ArticleLikesScalarFieldEnum
    having?: articleLikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleLikesCountAggregateInputType | true
    _avg?: ArticleLikesAvgAggregateInputType
    _sum?: ArticleLikesSumAggregateInputType
    _min?: ArticleLikesMinAggregateInputType
    _max?: ArticleLikesMaxAggregateInputType
  }

  export type ArticleLikesGroupByOutputType = {
    id: number
    article_id: number
    userno: number
    type: $Enums.articleLikes_type
    createdAt: Date
    updatedAt: Date
    _count: ArticleLikesCountAggregateOutputType | null
    _avg: ArticleLikesAvgAggregateOutputType | null
    _sum: ArticleLikesSumAggregateOutputType | null
    _min: ArticleLikesMinAggregateOutputType | null
    _max: ArticleLikesMaxAggregateOutputType | null
  }

  type GetArticleLikesGroupByPayload<T extends articleLikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleLikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleLikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleLikesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleLikesGroupByOutputType[P]>
        }
      >
    >


  export type articleLikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    article_id?: boolean
    userno?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleLikes"]>

  export type articleLikesSelectScalar = {
    id?: boolean
    article_id?: boolean
    userno?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type articleLikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $articleLikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articleLikes"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      article_id: number
      userno: number
      type: $Enums.articleLikes_type
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleLikes"]>
    composites: {}
  }


  type articleLikesGetPayload<S extends boolean | null | undefined | articleLikesDefaultArgs> = $Result.GetResult<Prisma.$articleLikesPayload, S>

  type articleLikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<articleLikesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArticleLikesCountAggregateInputType | true
    }

  export interface articleLikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['articleLikes'], meta: { name: 'articleLikes' } }
    /**
     * Find zero or one ArticleLikes that matches the filter.
     * @param {articleLikesFindUniqueArgs} args - Arguments to find a ArticleLikes
     * @example
     * // Get one ArticleLikes
     * const articleLikes = await prisma.articleLikes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends articleLikesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, articleLikesFindUniqueArgs<ExtArgs>>
    ): Prisma__articleLikesClient<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ArticleLikes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {articleLikesFindUniqueOrThrowArgs} args - Arguments to find a ArticleLikes
     * @example
     * // Get one ArticleLikes
     * const articleLikes = await prisma.articleLikes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends articleLikesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, articleLikesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__articleLikesClient<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ArticleLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleLikesFindFirstArgs} args - Arguments to find a ArticleLikes
     * @example
     * // Get one ArticleLikes
     * const articleLikes = await prisma.articleLikes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends articleLikesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, articleLikesFindFirstArgs<ExtArgs>>
    ): Prisma__articleLikesClient<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ArticleLikes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleLikesFindFirstOrThrowArgs} args - Arguments to find a ArticleLikes
     * @example
     * // Get one ArticleLikes
     * const articleLikes = await prisma.articleLikes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends articleLikesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, articleLikesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__articleLikesClient<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ArticleLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleLikesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleLikes
     * const articleLikes = await prisma.articleLikes.findMany()
     * 
     * // Get first 10 ArticleLikes
     * const articleLikes = await prisma.articleLikes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleLikesWithIdOnly = await prisma.articleLikes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends articleLikesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articleLikesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ArticleLikes.
     * @param {articleLikesCreateArgs} args - Arguments to create a ArticleLikes.
     * @example
     * // Create one ArticleLikes
     * const ArticleLikes = await prisma.articleLikes.create({
     *   data: {
     *     // ... data to create a ArticleLikes
     *   }
     * })
     * 
    **/
    create<T extends articleLikesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, articleLikesCreateArgs<ExtArgs>>
    ): Prisma__articleLikesClient<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ArticleLikes.
     *     @param {articleLikesCreateManyArgs} args - Arguments to create many ArticleLikes.
     *     @example
     *     // Create many ArticleLikes
     *     const articleLikes = await prisma.articleLikes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends articleLikesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articleLikesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleLikes.
     * @param {articleLikesDeleteArgs} args - Arguments to delete one ArticleLikes.
     * @example
     * // Delete one ArticleLikes
     * const ArticleLikes = await prisma.articleLikes.delete({
     *   where: {
     *     // ... filter to delete one ArticleLikes
     *   }
     * })
     * 
    **/
    delete<T extends articleLikesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, articleLikesDeleteArgs<ExtArgs>>
    ): Prisma__articleLikesClient<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ArticleLikes.
     * @param {articleLikesUpdateArgs} args - Arguments to update one ArticleLikes.
     * @example
     * // Update one ArticleLikes
     * const articleLikes = await prisma.articleLikes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends articleLikesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, articleLikesUpdateArgs<ExtArgs>>
    ): Prisma__articleLikesClient<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ArticleLikes.
     * @param {articleLikesDeleteManyArgs} args - Arguments to filter ArticleLikes to delete.
     * @example
     * // Delete a few ArticleLikes
     * const { count } = await prisma.articleLikes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends articleLikesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articleLikesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleLikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleLikes
     * const articleLikes = await prisma.articleLikes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends articleLikesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, articleLikesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleLikes.
     * @param {articleLikesUpsertArgs} args - Arguments to update or create a ArticleLikes.
     * @example
     * // Update or create a ArticleLikes
     * const articleLikes = await prisma.articleLikes.upsert({
     *   create: {
     *     // ... data to create a ArticleLikes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleLikes we want to update
     *   }
     * })
    **/
    upsert<T extends articleLikesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, articleLikesUpsertArgs<ExtArgs>>
    ): Prisma__articleLikesClient<$Result.GetResult<Prisma.$articleLikesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ArticleLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleLikesCountArgs} args - Arguments to filter ArticleLikes to count.
     * @example
     * // Count the number of ArticleLikes
     * const count = await prisma.articleLikes.count({
     *   where: {
     *     // ... the filter for the ArticleLikes we want to count
     *   }
     * })
    **/
    count<T extends articleLikesCountArgs>(
      args?: Subset<T, articleLikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleLikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleLikesAggregateArgs>(args: Subset<T, ArticleLikesAggregateArgs>): Prisma.PrismaPromise<GetArticleLikesAggregateType<T>>

    /**
     * Group by ArticleLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleLikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends articleLikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articleLikesGroupByArgs['orderBy'] }
        : { orderBy?: articleLikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, articleLikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the articleLikes model
   */
  readonly fields: articleLikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for articleLikes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articleLikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    article<T extends articleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articleDefaultArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the articleLikes model
   */ 
  interface articleLikesFieldRefs {
    readonly id: FieldRef<"articleLikes", 'Int'>
    readonly article_id: FieldRef<"articleLikes", 'Int'>
    readonly userno: FieldRef<"articleLikes", 'Int'>
    readonly type: FieldRef<"articleLikes", 'articleLikes_type'>
    readonly createdAt: FieldRef<"articleLikes", 'DateTime'>
    readonly updatedAt: FieldRef<"articleLikes", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * articleLikes findUnique
   */
  export type articleLikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    /**
     * Filter, which articleLikes to fetch.
     */
    where: articleLikesWhereUniqueInput
  }


  /**
   * articleLikes findUniqueOrThrow
   */
  export type articleLikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    /**
     * Filter, which articleLikes to fetch.
     */
    where: articleLikesWhereUniqueInput
  }


  /**
   * articleLikes findFirst
   */
  export type articleLikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    /**
     * Filter, which articleLikes to fetch.
     */
    where?: articleLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articleLikes to fetch.
     */
    orderBy?: articleLikesOrderByWithRelationInput | articleLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articleLikes.
     */
    cursor?: articleLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articleLikes.
     */
    distinct?: ArticleLikesScalarFieldEnum | ArticleLikesScalarFieldEnum[]
  }


  /**
   * articleLikes findFirstOrThrow
   */
  export type articleLikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    /**
     * Filter, which articleLikes to fetch.
     */
    where?: articleLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articleLikes to fetch.
     */
    orderBy?: articleLikesOrderByWithRelationInput | articleLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articleLikes.
     */
    cursor?: articleLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articleLikes.
     */
    distinct?: ArticleLikesScalarFieldEnum | ArticleLikesScalarFieldEnum[]
  }


  /**
   * articleLikes findMany
   */
  export type articleLikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    /**
     * Filter, which articleLikes to fetch.
     */
    where?: articleLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articleLikes to fetch.
     */
    orderBy?: articleLikesOrderByWithRelationInput | articleLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articleLikes.
     */
    cursor?: articleLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articleLikes.
     */
    skip?: number
    distinct?: ArticleLikesScalarFieldEnum | ArticleLikesScalarFieldEnum[]
  }


  /**
   * articleLikes create
   */
  export type articleLikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    /**
     * The data needed to create a articleLikes.
     */
    data: XOR<articleLikesCreateInput, articleLikesUncheckedCreateInput>
  }


  /**
   * articleLikes createMany
   */
  export type articleLikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articleLikes.
     */
    data: articleLikesCreateManyInput | articleLikesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * articleLikes update
   */
  export type articleLikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    /**
     * The data needed to update a articleLikes.
     */
    data: XOR<articleLikesUpdateInput, articleLikesUncheckedUpdateInput>
    /**
     * Choose, which articleLikes to update.
     */
    where: articleLikesWhereUniqueInput
  }


  /**
   * articleLikes updateMany
   */
  export type articleLikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articleLikes.
     */
    data: XOR<articleLikesUpdateManyMutationInput, articleLikesUncheckedUpdateManyInput>
    /**
     * Filter which articleLikes to update
     */
    where?: articleLikesWhereInput
  }


  /**
   * articleLikes upsert
   */
  export type articleLikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    /**
     * The filter to search for the articleLikes to update in case it exists.
     */
    where: articleLikesWhereUniqueInput
    /**
     * In case the articleLikes found by the `where` argument doesn't exist, create a new articleLikes with this data.
     */
    create: XOR<articleLikesCreateInput, articleLikesUncheckedCreateInput>
    /**
     * In case the articleLikes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articleLikesUpdateInput, articleLikesUncheckedUpdateInput>
  }


  /**
   * articleLikes delete
   */
  export type articleLikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
    /**
     * Filter which articleLikes to delete.
     */
    where: articleLikesWhereUniqueInput
  }


  /**
   * articleLikes deleteMany
   */
  export type articleLikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articleLikes to delete
     */
    where?: articleLikesWhereInput
  }


  /**
   * articleLikes without action
   */
  export type articleLikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articleLikes
     */
    select?: articleLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articleLikesInclude<ExtArgs> | null
  }



  /**
   * Model MatchPost
   */

  export type AggregateMatchPost = {
    _count: MatchPostCountAggregateOutputType | null
    _avg: MatchPostAvgAggregateOutputType | null
    _sum: MatchPostSumAggregateOutputType | null
    _min: MatchPostMinAggregateOutputType | null
    _max: MatchPostMaxAggregateOutputType | null
  }

  export type MatchPostAvgAggregateOutputType = {
    maxParticipants: number | null
    userno: number | null
  }

  export type MatchPostSumAggregateOutputType = {
    maxParticipants: number | null
    userno: number | null
  }

  export type MatchPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    movieTitle: string | null
    theaterName: string | null
    showTime: string | null
    maxParticipants: number | null
    location: string | null
    userno: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MatchPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    movieTitle: string | null
    theaterName: string | null
    showTime: string | null
    maxParticipants: number | null
    location: string | null
    userno: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MatchPostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    movieTitle: number
    theaterName: number
    showTime: number
    maxParticipants: number
    location: number
    userno: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type MatchPostAvgAggregateInputType = {
    maxParticipants?: true
    userno?: true
  }

  export type MatchPostSumAggregateInputType = {
    maxParticipants?: true
    userno?: true
  }

  export type MatchPostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    movieTitle?: true
    theaterName?: true
    showTime?: true
    maxParticipants?: true
    location?: true
    userno?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MatchPostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    movieTitle?: true
    theaterName?: true
    showTime?: true
    maxParticipants?: true
    location?: true
    userno?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MatchPostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    movieTitle?: true
    theaterName?: true
    showTime?: true
    maxParticipants?: true
    location?: true
    userno?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type MatchPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchPost to aggregate.
     */
    where?: MatchPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPosts to fetch.
     */
    orderBy?: MatchPostOrderByWithRelationInput | MatchPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchPosts
    **/
    _count?: true | MatchPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchPostMaxAggregateInputType
  }

  export type GetMatchPostAggregateType<T extends MatchPostAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchPost[P]>
      : GetScalarType<T[P], AggregateMatchPost[P]>
  }




  export type MatchPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchPostWhereInput
    orderBy?: MatchPostOrderByWithAggregationInput | MatchPostOrderByWithAggregationInput[]
    by: MatchPostScalarFieldEnum[] | MatchPostScalarFieldEnum
    having?: MatchPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchPostCountAggregateInputType | true
    _avg?: MatchPostAvgAggregateInputType
    _sum?: MatchPostSumAggregateInputType
    _min?: MatchPostMinAggregateInputType
    _max?: MatchPostMaxAggregateInputType
  }

  export type MatchPostGroupByOutputType = {
    id: string
    title: string
    content: string
    movieTitle: string
    theaterName: string
    showTime: string
    maxParticipants: number
    location: string
    userno: number
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: MatchPostCountAggregateOutputType | null
    _avg: MatchPostAvgAggregateOutputType | null
    _sum: MatchPostSumAggregateOutputType | null
    _min: MatchPostMinAggregateOutputType | null
    _max: MatchPostMaxAggregateOutputType | null
  }

  type GetMatchPostGroupByPayload<T extends MatchPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchPostGroupByOutputType[P]>
            : GetScalarType<T[P], MatchPostGroupByOutputType[P]>
        }
      >
    >


  export type MatchPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    movieTitle?: boolean
    theaterName?: boolean
    showTime?: boolean
    maxParticipants?: boolean
    location?: boolean
    userno?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    MatchApplication?: boolean | MatchPost$MatchApplicationArgs<ExtArgs>
    _count?: boolean | MatchPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchPost"]>

  export type MatchPostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    movieTitle?: boolean
    theaterName?: boolean
    showTime?: boolean
    maxParticipants?: boolean
    location?: boolean
    userno?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type MatchPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    MatchApplication?: boolean | MatchPost$MatchApplicationArgs<ExtArgs>
    _count?: boolean | MatchPostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MatchPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchPost"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      MatchApplication: Prisma.$MatchApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      movieTitle: string
      theaterName: string
      showTime: string
      maxParticipants: number
      location: string
      userno: number
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["matchPost"]>
    composites: {}
  }


  type MatchPostGetPayload<S extends boolean | null | undefined | MatchPostDefaultArgs> = $Result.GetResult<Prisma.$MatchPostPayload, S>

  type MatchPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatchPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchPostCountAggregateInputType | true
    }

  export interface MatchPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchPost'], meta: { name: 'MatchPost' } }
    /**
     * Find zero or one MatchPost that matches the filter.
     * @param {MatchPostFindUniqueArgs} args - Arguments to find a MatchPost
     * @example
     * // Get one MatchPost
     * const matchPost = await prisma.matchPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MatchPostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MatchPostFindUniqueArgs<ExtArgs>>
    ): Prisma__MatchPostClient<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MatchPost that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MatchPostFindUniqueOrThrowArgs} args - Arguments to find a MatchPost
     * @example
     * // Get one MatchPost
     * const matchPost = await prisma.matchPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MatchPostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchPostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MatchPostClient<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MatchPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPostFindFirstArgs} args - Arguments to find a MatchPost
     * @example
     * // Get one MatchPost
     * const matchPost = await prisma.matchPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MatchPostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchPostFindFirstArgs<ExtArgs>>
    ): Prisma__MatchPostClient<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MatchPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPostFindFirstOrThrowArgs} args - Arguments to find a MatchPost
     * @example
     * // Get one MatchPost
     * const matchPost = await prisma.matchPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MatchPostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchPostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MatchPostClient<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MatchPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchPosts
     * const matchPosts = await prisma.matchPost.findMany()
     * 
     * // Get first 10 MatchPosts
     * const matchPosts = await prisma.matchPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchPostWithIdOnly = await prisma.matchPost.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MatchPostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchPostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MatchPost.
     * @param {MatchPostCreateArgs} args - Arguments to create a MatchPost.
     * @example
     * // Create one MatchPost
     * const MatchPost = await prisma.matchPost.create({
     *   data: {
     *     // ... data to create a MatchPost
     *   }
     * })
     * 
    **/
    create<T extends MatchPostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchPostCreateArgs<ExtArgs>>
    ): Prisma__MatchPostClient<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MatchPosts.
     *     @param {MatchPostCreateManyArgs} args - Arguments to create many MatchPosts.
     *     @example
     *     // Create many MatchPosts
     *     const matchPost = await prisma.matchPost.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MatchPostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchPostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MatchPost.
     * @param {MatchPostDeleteArgs} args - Arguments to delete one MatchPost.
     * @example
     * // Delete one MatchPost
     * const MatchPost = await prisma.matchPost.delete({
     *   where: {
     *     // ... filter to delete one MatchPost
     *   }
     * })
     * 
    **/
    delete<T extends MatchPostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MatchPostDeleteArgs<ExtArgs>>
    ): Prisma__MatchPostClient<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MatchPost.
     * @param {MatchPostUpdateArgs} args - Arguments to update one MatchPost.
     * @example
     * // Update one MatchPost
     * const matchPost = await prisma.matchPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MatchPostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchPostUpdateArgs<ExtArgs>>
    ): Prisma__MatchPostClient<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MatchPosts.
     * @param {MatchPostDeleteManyArgs} args - Arguments to filter MatchPosts to delete.
     * @example
     * // Delete a few MatchPosts
     * const { count } = await prisma.matchPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MatchPostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchPostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchPosts
     * const matchPost = await prisma.matchPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MatchPostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MatchPostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatchPost.
     * @param {MatchPostUpsertArgs} args - Arguments to update or create a MatchPost.
     * @example
     * // Update or create a MatchPost
     * const matchPost = await prisma.matchPost.upsert({
     *   create: {
     *     // ... data to create a MatchPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchPost we want to update
     *   }
     * })
    **/
    upsert<T extends MatchPostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MatchPostUpsertArgs<ExtArgs>>
    ): Prisma__MatchPostClient<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MatchPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPostCountArgs} args - Arguments to filter MatchPosts to count.
     * @example
     * // Count the number of MatchPosts
     * const count = await prisma.matchPost.count({
     *   where: {
     *     // ... the filter for the MatchPosts we want to count
     *   }
     * })
    **/
    count<T extends MatchPostCountArgs>(
      args?: Subset<T, MatchPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchPostAggregateArgs>(args: Subset<T, MatchPostAggregateArgs>): Prisma.PrismaPromise<GetMatchPostAggregateType<T>>

    /**
     * Group by MatchPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchPostGroupByArgs['orderBy'] }
        : { orderBy?: MatchPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchPost model
   */
  readonly fields: MatchPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    MatchApplication<T extends MatchPost$MatchApplicationArgs<ExtArgs> = {}>(args?: Subset<T, MatchPost$MatchApplicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MatchPost model
   */ 
  interface MatchPostFieldRefs {
    readonly id: FieldRef<"MatchPost", 'String'>
    readonly title: FieldRef<"MatchPost", 'String'>
    readonly content: FieldRef<"MatchPost", 'String'>
    readonly movieTitle: FieldRef<"MatchPost", 'String'>
    readonly theaterName: FieldRef<"MatchPost", 'String'>
    readonly showTime: FieldRef<"MatchPost", 'String'>
    readonly maxParticipants: FieldRef<"MatchPost", 'Int'>
    readonly location: FieldRef<"MatchPost", 'String'>
    readonly userno: FieldRef<"MatchPost", 'Int'>
    readonly createdAt: FieldRef<"MatchPost", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchPost", 'DateTime'>
    readonly deletedAt: FieldRef<"MatchPost", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MatchPost findUnique
   */
  export type MatchPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
    /**
     * Filter, which MatchPost to fetch.
     */
    where: MatchPostWhereUniqueInput
  }


  /**
   * MatchPost findUniqueOrThrow
   */
  export type MatchPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
    /**
     * Filter, which MatchPost to fetch.
     */
    where: MatchPostWhereUniqueInput
  }


  /**
   * MatchPost findFirst
   */
  export type MatchPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
    /**
     * Filter, which MatchPost to fetch.
     */
    where?: MatchPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPosts to fetch.
     */
    orderBy?: MatchPostOrderByWithRelationInput | MatchPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchPosts.
     */
    cursor?: MatchPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchPosts.
     */
    distinct?: MatchPostScalarFieldEnum | MatchPostScalarFieldEnum[]
  }


  /**
   * MatchPost findFirstOrThrow
   */
  export type MatchPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
    /**
     * Filter, which MatchPost to fetch.
     */
    where?: MatchPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPosts to fetch.
     */
    orderBy?: MatchPostOrderByWithRelationInput | MatchPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchPosts.
     */
    cursor?: MatchPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchPosts.
     */
    distinct?: MatchPostScalarFieldEnum | MatchPostScalarFieldEnum[]
  }


  /**
   * MatchPost findMany
   */
  export type MatchPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
    /**
     * Filter, which MatchPosts to fetch.
     */
    where?: MatchPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPosts to fetch.
     */
    orderBy?: MatchPostOrderByWithRelationInput | MatchPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchPosts.
     */
    cursor?: MatchPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPosts.
     */
    skip?: number
    distinct?: MatchPostScalarFieldEnum | MatchPostScalarFieldEnum[]
  }


  /**
   * MatchPost create
   */
  export type MatchPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchPost.
     */
    data: XOR<MatchPostCreateInput, MatchPostUncheckedCreateInput>
  }


  /**
   * MatchPost createMany
   */
  export type MatchPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchPosts.
     */
    data: MatchPostCreateManyInput | MatchPostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MatchPost update
   */
  export type MatchPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchPost.
     */
    data: XOR<MatchPostUpdateInput, MatchPostUncheckedUpdateInput>
    /**
     * Choose, which MatchPost to update.
     */
    where: MatchPostWhereUniqueInput
  }


  /**
   * MatchPost updateMany
   */
  export type MatchPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchPosts.
     */
    data: XOR<MatchPostUpdateManyMutationInput, MatchPostUncheckedUpdateManyInput>
    /**
     * Filter which MatchPosts to update
     */
    where?: MatchPostWhereInput
  }


  /**
   * MatchPost upsert
   */
  export type MatchPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchPost to update in case it exists.
     */
    where: MatchPostWhereUniqueInput
    /**
     * In case the MatchPost found by the `where` argument doesn't exist, create a new MatchPost with this data.
     */
    create: XOR<MatchPostCreateInput, MatchPostUncheckedCreateInput>
    /**
     * In case the MatchPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchPostUpdateInput, MatchPostUncheckedUpdateInput>
  }


  /**
   * MatchPost delete
   */
  export type MatchPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
    /**
     * Filter which MatchPost to delete.
     */
    where: MatchPostWhereUniqueInput
  }


  /**
   * MatchPost deleteMany
   */
  export type MatchPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchPosts to delete
     */
    where?: MatchPostWhereInput
  }


  /**
   * MatchPost.MatchApplication
   */
  export type MatchPost$MatchApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    where?: MatchApplicationWhereInput
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    cursor?: MatchApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * MatchPost without action
   */
  export type MatchPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPost
     */
    select?: MatchPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchPostInclude<ExtArgs> | null
  }



  /**
   * Model MatchApplication
   */

  export type AggregateMatchApplication = {
    _count: MatchApplicationCountAggregateOutputType | null
    _avg: MatchApplicationAvgAggregateOutputType | null
    _sum: MatchApplicationSumAggregateOutputType | null
    _min: MatchApplicationMinAggregateOutputType | null
    _max: MatchApplicationMaxAggregateOutputType | null
  }

  export type MatchApplicationAvgAggregateOutputType = {
    applicantUserno: number | null
  }

  export type MatchApplicationSumAggregateOutputType = {
    applicantUserno: number | null
  }

  export type MatchApplicationMinAggregateOutputType = {
    id: string | null
    matchPostId: string | null
    applicantUserno: number | null
    applicantName: string | null
    message: string | null
    status: $Enums.MatchApplication_status | null
    createdAt: Date | null
  }

  export type MatchApplicationMaxAggregateOutputType = {
    id: string | null
    matchPostId: string | null
    applicantUserno: number | null
    applicantName: string | null
    message: string | null
    status: $Enums.MatchApplication_status | null
    createdAt: Date | null
  }

  export type MatchApplicationCountAggregateOutputType = {
    id: number
    matchPostId: number
    applicantUserno: number
    applicantName: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type MatchApplicationAvgAggregateInputType = {
    applicantUserno?: true
  }

  export type MatchApplicationSumAggregateInputType = {
    applicantUserno?: true
  }

  export type MatchApplicationMinAggregateInputType = {
    id?: true
    matchPostId?: true
    applicantUserno?: true
    applicantName?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type MatchApplicationMaxAggregateInputType = {
    id?: true
    matchPostId?: true
    applicantUserno?: true
    applicantName?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type MatchApplicationCountAggregateInputType = {
    id?: true
    matchPostId?: true
    applicantUserno?: true
    applicantName?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MatchApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchApplication to aggregate.
     */
    where?: MatchApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchApplications to fetch.
     */
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchApplications
    **/
    _count?: true | MatchApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchApplicationMaxAggregateInputType
  }

  export type GetMatchApplicationAggregateType<T extends MatchApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchApplication[P]>
      : GetScalarType<T[P], AggregateMatchApplication[P]>
  }




  export type MatchApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchApplicationWhereInput
    orderBy?: MatchApplicationOrderByWithAggregationInput | MatchApplicationOrderByWithAggregationInput[]
    by: MatchApplicationScalarFieldEnum[] | MatchApplicationScalarFieldEnum
    having?: MatchApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchApplicationCountAggregateInputType | true
    _avg?: MatchApplicationAvgAggregateInputType
    _sum?: MatchApplicationSumAggregateInputType
    _min?: MatchApplicationMinAggregateInputType
    _max?: MatchApplicationMaxAggregateInputType
  }

  export type MatchApplicationGroupByOutputType = {
    id: string
    matchPostId: string
    applicantUserno: number
    applicantName: string
    message: string
    status: $Enums.MatchApplication_status
    createdAt: Date
    _count: MatchApplicationCountAggregateOutputType | null
    _avg: MatchApplicationAvgAggregateOutputType | null
    _sum: MatchApplicationSumAggregateOutputType | null
    _min: MatchApplicationMinAggregateOutputType | null
    _max: MatchApplicationMaxAggregateOutputType | null
  }

  type GetMatchApplicationGroupByPayload<T extends MatchApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], MatchApplicationGroupByOutputType[P]>
        }
      >
    >


  export type MatchApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchPostId?: boolean
    applicantUserno?: boolean
    applicantName?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    MatchPost?: boolean | MatchPostDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchApplication"]>

  export type MatchApplicationSelectScalar = {
    id?: boolean
    matchPostId?: boolean
    applicantUserno?: boolean
    applicantName?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MatchApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MatchPost?: boolean | MatchPostDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MatchApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchApplication"
    objects: {
      MatchPost: Prisma.$MatchPostPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchPostId: string
      applicantUserno: number
      applicantName: string
      message: string
      status: $Enums.MatchApplication_status
      createdAt: Date
    }, ExtArgs["result"]["matchApplication"]>
    composites: {}
  }


  type MatchApplicationGetPayload<S extends boolean | null | undefined | MatchApplicationDefaultArgs> = $Result.GetResult<Prisma.$MatchApplicationPayload, S>

  type MatchApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatchApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchApplicationCountAggregateInputType | true
    }

  export interface MatchApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchApplication'], meta: { name: 'MatchApplication' } }
    /**
     * Find zero or one MatchApplication that matches the filter.
     * @param {MatchApplicationFindUniqueArgs} args - Arguments to find a MatchApplication
     * @example
     * // Get one MatchApplication
     * const matchApplication = await prisma.matchApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MatchApplicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationFindUniqueArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MatchApplication that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MatchApplicationFindUniqueOrThrowArgs} args - Arguments to find a MatchApplication
     * @example
     * // Get one MatchApplication
     * const matchApplication = await prisma.matchApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MatchApplicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MatchApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationFindFirstArgs} args - Arguments to find a MatchApplication
     * @example
     * // Get one MatchApplication
     * const matchApplication = await prisma.matchApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MatchApplicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationFindFirstArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MatchApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationFindFirstOrThrowArgs} args - Arguments to find a MatchApplication
     * @example
     * // Get one MatchApplication
     * const matchApplication = await prisma.matchApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MatchApplicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MatchApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchApplications
     * const matchApplications = await prisma.matchApplication.findMany()
     * 
     * // Get first 10 MatchApplications
     * const matchApplications = await prisma.matchApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchApplicationWithIdOnly = await prisma.matchApplication.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MatchApplicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MatchApplication.
     * @param {MatchApplicationCreateArgs} args - Arguments to create a MatchApplication.
     * @example
     * // Create one MatchApplication
     * const MatchApplication = await prisma.matchApplication.create({
     *   data: {
     *     // ... data to create a MatchApplication
     *   }
     * })
     * 
    **/
    create<T extends MatchApplicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationCreateArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MatchApplications.
     *     @param {MatchApplicationCreateManyArgs} args - Arguments to create many MatchApplications.
     *     @example
     *     // Create many MatchApplications
     *     const matchApplication = await prisma.matchApplication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MatchApplicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MatchApplication.
     * @param {MatchApplicationDeleteArgs} args - Arguments to delete one MatchApplication.
     * @example
     * // Delete one MatchApplication
     * const MatchApplication = await prisma.matchApplication.delete({
     *   where: {
     *     // ... filter to delete one MatchApplication
     *   }
     * })
     * 
    **/
    delete<T extends MatchApplicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationDeleteArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MatchApplication.
     * @param {MatchApplicationUpdateArgs} args - Arguments to update one MatchApplication.
     * @example
     * // Update one MatchApplication
     * const matchApplication = await prisma.matchApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MatchApplicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationUpdateArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MatchApplications.
     * @param {MatchApplicationDeleteManyArgs} args - Arguments to filter MatchApplications to delete.
     * @example
     * // Delete a few MatchApplications
     * const { count } = await prisma.matchApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MatchApplicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchApplications
     * const matchApplication = await prisma.matchApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MatchApplicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatchApplication.
     * @param {MatchApplicationUpsertArgs} args - Arguments to update or create a MatchApplication.
     * @example
     * // Update or create a MatchApplication
     * const matchApplication = await prisma.matchApplication.upsert({
     *   create: {
     *     // ... data to create a MatchApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchApplication we want to update
     *   }
     * })
    **/
    upsert<T extends MatchApplicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationUpsertArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MatchApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationCountArgs} args - Arguments to filter MatchApplications to count.
     * @example
     * // Count the number of MatchApplications
     * const count = await prisma.matchApplication.count({
     *   where: {
     *     // ... the filter for the MatchApplications we want to count
     *   }
     * })
    **/
    count<T extends MatchApplicationCountArgs>(
      args?: Subset<T, MatchApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchApplicationAggregateArgs>(args: Subset<T, MatchApplicationAggregateArgs>): Prisma.PrismaPromise<GetMatchApplicationAggregateType<T>>

    /**
     * Group by MatchApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchApplicationGroupByArgs['orderBy'] }
        : { orderBy?: MatchApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchApplication model
   */
  readonly fields: MatchApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    MatchPost<T extends MatchPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchPostDefaultArgs<ExtArgs>>): Prisma__MatchPostClient<$Result.GetResult<Prisma.$MatchPostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MatchApplication model
   */ 
  interface MatchApplicationFieldRefs {
    readonly id: FieldRef<"MatchApplication", 'String'>
    readonly matchPostId: FieldRef<"MatchApplication", 'String'>
    readonly applicantUserno: FieldRef<"MatchApplication", 'Int'>
    readonly applicantName: FieldRef<"MatchApplication", 'String'>
    readonly message: FieldRef<"MatchApplication", 'String'>
    readonly status: FieldRef<"MatchApplication", 'MatchApplication_status'>
    readonly createdAt: FieldRef<"MatchApplication", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MatchApplication findUnique
   */
  export type MatchApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter, which MatchApplication to fetch.
     */
    where: MatchApplicationWhereUniqueInput
  }


  /**
   * MatchApplication findUniqueOrThrow
   */
  export type MatchApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter, which MatchApplication to fetch.
     */
    where: MatchApplicationWhereUniqueInput
  }


  /**
   * MatchApplication findFirst
   */
  export type MatchApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter, which MatchApplication to fetch.
     */
    where?: MatchApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchApplications to fetch.
     */
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchApplications.
     */
    cursor?: MatchApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchApplications.
     */
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * MatchApplication findFirstOrThrow
   */
  export type MatchApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter, which MatchApplication to fetch.
     */
    where?: MatchApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchApplications to fetch.
     */
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchApplications.
     */
    cursor?: MatchApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchApplications.
     */
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * MatchApplication findMany
   */
  export type MatchApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter, which MatchApplications to fetch.
     */
    where?: MatchApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchApplications to fetch.
     */
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchApplications.
     */
    cursor?: MatchApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchApplications.
     */
    skip?: number
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * MatchApplication create
   */
  export type MatchApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchApplication.
     */
    data: XOR<MatchApplicationCreateInput, MatchApplicationUncheckedCreateInput>
  }


  /**
   * MatchApplication createMany
   */
  export type MatchApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchApplications.
     */
    data: MatchApplicationCreateManyInput | MatchApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MatchApplication update
   */
  export type MatchApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchApplication.
     */
    data: XOR<MatchApplicationUpdateInput, MatchApplicationUncheckedUpdateInput>
    /**
     * Choose, which MatchApplication to update.
     */
    where: MatchApplicationWhereUniqueInput
  }


  /**
   * MatchApplication updateMany
   */
  export type MatchApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchApplications.
     */
    data: XOR<MatchApplicationUpdateManyMutationInput, MatchApplicationUncheckedUpdateManyInput>
    /**
     * Filter which MatchApplications to update
     */
    where?: MatchApplicationWhereInput
  }


  /**
   * MatchApplication upsert
   */
  export type MatchApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchApplication to update in case it exists.
     */
    where: MatchApplicationWhereUniqueInput
    /**
     * In case the MatchApplication found by the `where` argument doesn't exist, create a new MatchApplication with this data.
     */
    create: XOR<MatchApplicationCreateInput, MatchApplicationUncheckedCreateInput>
    /**
     * In case the MatchApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchApplicationUpdateInput, MatchApplicationUncheckedUpdateInput>
  }


  /**
   * MatchApplication delete
   */
  export type MatchApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter which MatchApplication to delete.
     */
    where: MatchApplicationWhereUniqueInput
  }


  /**
   * MatchApplication deleteMany
   */
  export type MatchApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchApplications to delete
     */
    where?: MatchApplicationWhereInput
  }


  /**
   * MatchApplication without action
   */
  export type MatchApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
  }



  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ChatRoom_type | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ChatRoom_type | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    name: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatRoomMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ChatRoom_type
    createdAt: Date
    updatedAt: Date
    _count: ChatRoomCountAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ChatMessage?: boolean | ChatRoom$ChatMessageArgs<ExtArgs>
    ChatRoomMember?: boolean | ChatRoom$ChatRoomMemberArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatMessage?: boolean | ChatRoom$ChatMessageArgs<ExtArgs>
    ChatRoomMember?: boolean | ChatRoom$ChatRoomMemberArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      ChatMessage: Prisma.$ChatMessagePayload<ExtArgs>[]
      ChatRoomMember: Prisma.$ChatRoomMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ChatRoom_type
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }


  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatRoomFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatRoom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatRoomFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatRoomFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
    **/
    create<T extends ChatRoomCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatRooms.
     *     @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     *     @example
     *     // Create many ChatRooms
     *     const chatRoom = await prisma.chatRoom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatRoomCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
    **/
    delete<T extends ChatRoomDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatRoomUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatRoomDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatRoomUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
    **/
    upsert<T extends ChatRoomUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ChatMessage<T extends ChatRoom$ChatMessageArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$ChatMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    ChatRoomMember<T extends ChatRoom$ChatRoomMemberArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$ChatRoomMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatRoom model
   */ 
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'String'>
    readonly name: FieldRef<"ChatRoom", 'String'>
    readonly type: FieldRef<"ChatRoom", 'ChatRoom_type'>
    readonly createdAt: FieldRef<"ChatRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatRoom", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }


  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }


  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }


  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }


  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }


  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }


  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }


  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
  }


  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }


  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }


  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
  }


  /**
   * ChatRoom.ChatMessage
   */
  export type ChatRoom$ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }


  /**
   * ChatRoom.ChatRoomMember
   */
  export type ChatRoom$ChatRoomMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    where?: ChatRoomMemberWhereInput
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    cursor?: ChatRoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }


  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }



  /**
   * Model ChatRoomMember
   */

  export type AggregateChatRoomMember = {
    _count: ChatRoomMemberCountAggregateOutputType | null
    _avg: ChatRoomMemberAvgAggregateOutputType | null
    _sum: ChatRoomMemberSumAggregateOutputType | null
    _min: ChatRoomMemberMinAggregateOutputType | null
    _max: ChatRoomMemberMaxAggregateOutputType | null
  }

  export type ChatRoomMemberAvgAggregateOutputType = {
    userId: number | null
  }

  export type ChatRoomMemberSumAggregateOutputType = {
    userId: number | null
  }

  export type ChatRoomMemberMinAggregateOutputType = {
    id: string | null
    chatRoomId: string | null
    userId: number | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type ChatRoomMemberMaxAggregateOutputType = {
    id: string | null
    chatRoomId: string | null
    userId: number | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type ChatRoomMemberCountAggregateOutputType = {
    id: number
    chatRoomId: number
    userId: number
    joinedAt: number
    leftAt: number
    _all: number
  }


  export type ChatRoomMemberAvgAggregateInputType = {
    userId?: true
  }

  export type ChatRoomMemberSumAggregateInputType = {
    userId?: true
  }

  export type ChatRoomMemberMinAggregateInputType = {
    id?: true
    chatRoomId?: true
    userId?: true
    joinedAt?: true
    leftAt?: true
  }

  export type ChatRoomMemberMaxAggregateInputType = {
    id?: true
    chatRoomId?: true
    userId?: true
    joinedAt?: true
    leftAt?: true
  }

  export type ChatRoomMemberCountAggregateInputType = {
    id?: true
    chatRoomId?: true
    userId?: true
    joinedAt?: true
    leftAt?: true
    _all?: true
  }

  export type ChatRoomMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoomMember to aggregate.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRoomMembers
    **/
    _count?: true | ChatRoomMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMemberMaxAggregateInputType
  }

  export type GetChatRoomMemberAggregateType<T extends ChatRoomMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoomMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoomMember[P]>
      : GetScalarType<T[P], AggregateChatRoomMember[P]>
  }




  export type ChatRoomMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomMemberWhereInput
    orderBy?: ChatRoomMemberOrderByWithAggregationInput | ChatRoomMemberOrderByWithAggregationInput[]
    by: ChatRoomMemberScalarFieldEnum[] | ChatRoomMemberScalarFieldEnum
    having?: ChatRoomMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomMemberCountAggregateInputType | true
    _avg?: ChatRoomMemberAvgAggregateInputType
    _sum?: ChatRoomMemberSumAggregateInputType
    _min?: ChatRoomMemberMinAggregateInputType
    _max?: ChatRoomMemberMaxAggregateInputType
  }

  export type ChatRoomMemberGroupByOutputType = {
    id: string
    chatRoomId: string
    userId: number
    joinedAt: Date
    leftAt: Date | null
    _count: ChatRoomMemberCountAggregateOutputType | null
    _avg: ChatRoomMemberAvgAggregateOutputType | null
    _sum: ChatRoomMemberSumAggregateOutputType | null
    _min: ChatRoomMemberMinAggregateOutputType | null
    _max: ChatRoomMemberMaxAggregateOutputType | null
  }

  type GetChatRoomMemberGroupByPayload<T extends ChatRoomMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomMemberGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatRoomId?: boolean
    userId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    ChatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoomMember"]>

  export type ChatRoomMemberSelectScalar = {
    id?: boolean
    chatRoomId?: boolean
    userId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
  }

  export type ChatRoomMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ChatRoomMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoomMember"
    objects: {
      ChatRoom: Prisma.$ChatRoomPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatRoomId: string
      userId: number
      joinedAt: Date
      leftAt: Date | null
    }, ExtArgs["result"]["chatRoomMember"]>
    composites: {}
  }


  type ChatRoomMemberGetPayload<S extends boolean | null | undefined | ChatRoomMemberDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomMemberPayload, S>

  type ChatRoomMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatRoomMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatRoomMemberCountAggregateInputType | true
    }

  export interface ChatRoomMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoomMember'], meta: { name: 'ChatRoomMember' } }
    /**
     * Find zero or one ChatRoomMember that matches the filter.
     * @param {ChatRoomMemberFindUniqueArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatRoomMemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatRoomMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatRoomMemberFindUniqueOrThrowArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatRoomMemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatRoomMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberFindFirstArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatRoomMemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomMemberFindFirstArgs<ExtArgs>>
    ): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatRoomMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberFindFirstOrThrowArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatRoomMemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatRoomMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRoomMembers
     * const chatRoomMembers = await prisma.chatRoomMember.findMany()
     * 
     * // Get first 10 ChatRoomMembers
     * const chatRoomMembers = await prisma.chatRoomMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomMemberWithIdOnly = await prisma.chatRoomMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatRoomMemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatRoomMember.
     * @param {ChatRoomMemberCreateArgs} args - Arguments to create a ChatRoomMember.
     * @example
     * // Create one ChatRoomMember
     * const ChatRoomMember = await prisma.chatRoomMember.create({
     *   data: {
     *     // ... data to create a ChatRoomMember
     *   }
     * })
     * 
    **/
    create<T extends ChatRoomMemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomMemberCreateArgs<ExtArgs>>
    ): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatRoomMembers.
     *     @param {ChatRoomMemberCreateManyArgs} args - Arguments to create many ChatRoomMembers.
     *     @example
     *     // Create many ChatRoomMembers
     *     const chatRoomMember = await prisma.chatRoomMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatRoomMemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatRoomMember.
     * @param {ChatRoomMemberDeleteArgs} args - Arguments to delete one ChatRoomMember.
     * @example
     * // Delete one ChatRoomMember
     * const ChatRoomMember = await prisma.chatRoomMember.delete({
     *   where: {
     *     // ... filter to delete one ChatRoomMember
     *   }
     * })
     * 
    **/
    delete<T extends ChatRoomMemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomMemberDeleteArgs<ExtArgs>>
    ): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatRoomMember.
     * @param {ChatRoomMemberUpdateArgs} args - Arguments to update one ChatRoomMember.
     * @example
     * // Update one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatRoomMemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomMemberUpdateArgs<ExtArgs>>
    ): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatRoomMembers.
     * @param {ChatRoomMemberDeleteManyArgs} args - Arguments to filter ChatRoomMembers to delete.
     * @example
     * // Delete a few ChatRoomMembers
     * const { count } = await prisma.chatRoomMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatRoomMemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRoomMembers
     * const chatRoomMember = await prisma.chatRoomMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatRoomMemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatRoomMember.
     * @param {ChatRoomMemberUpsertArgs} args - Arguments to update or create a ChatRoomMember.
     * @example
     * // Update or create a ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.upsert({
     *   create: {
     *     // ... data to create a ChatRoomMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoomMember we want to update
     *   }
     * })
    **/
    upsert<T extends ChatRoomMemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomMemberUpsertArgs<ExtArgs>>
    ): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChatRoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberCountArgs} args - Arguments to filter ChatRoomMembers to count.
     * @example
     * // Count the number of ChatRoomMembers
     * const count = await prisma.chatRoomMember.count({
     *   where: {
     *     // ... the filter for the ChatRoomMembers we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomMemberCountArgs>(
      args?: Subset<T, ChatRoomMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomMemberAggregateArgs>(args: Subset<T, ChatRoomMemberAggregateArgs>): Prisma.PrismaPromise<GetChatRoomMemberAggregateType<T>>

    /**
     * Group by ChatRoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoomMember model
   */
  readonly fields: ChatRoomMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoomMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ChatRoom<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatRoomMember model
   */ 
  interface ChatRoomMemberFieldRefs {
    readonly id: FieldRef<"ChatRoomMember", 'String'>
    readonly chatRoomId: FieldRef<"ChatRoomMember", 'String'>
    readonly userId: FieldRef<"ChatRoomMember", 'Int'>
    readonly joinedAt: FieldRef<"ChatRoomMember", 'DateTime'>
    readonly leftAt: FieldRef<"ChatRoomMember", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChatRoomMember findUnique
   */
  export type ChatRoomMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where: ChatRoomMemberWhereUniqueInput
  }


  /**
   * ChatRoomMember findUniqueOrThrow
   */
  export type ChatRoomMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where: ChatRoomMemberWhereUniqueInput
  }


  /**
   * ChatRoomMember findFirst
   */
  export type ChatRoomMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRoomMembers.
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRoomMembers.
     */
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }


  /**
   * ChatRoomMember findFirstOrThrow
   */
  export type ChatRoomMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRoomMembers.
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRoomMembers.
     */
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }


  /**
   * ChatRoomMember findMany
   */
  export type ChatRoomMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMembers to fetch.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRoomMembers.
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }


  /**
   * ChatRoomMember create
   */
  export type ChatRoomMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoomMember.
     */
    data: XOR<ChatRoomMemberCreateInput, ChatRoomMemberUncheckedCreateInput>
  }


  /**
   * ChatRoomMember createMany
   */
  export type ChatRoomMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRoomMembers.
     */
    data: ChatRoomMemberCreateManyInput | ChatRoomMemberCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChatRoomMember update
   */
  export type ChatRoomMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoomMember.
     */
    data: XOR<ChatRoomMemberUpdateInput, ChatRoomMemberUncheckedUpdateInput>
    /**
     * Choose, which ChatRoomMember to update.
     */
    where: ChatRoomMemberWhereUniqueInput
  }


  /**
   * ChatRoomMember updateMany
   */
  export type ChatRoomMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRoomMembers.
     */
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatRoomMembers to update
     */
    where?: ChatRoomMemberWhereInput
  }


  /**
   * ChatRoomMember upsert
   */
  export type ChatRoomMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoomMember to update in case it exists.
     */
    where: ChatRoomMemberWhereUniqueInput
    /**
     * In case the ChatRoomMember found by the `where` argument doesn't exist, create a new ChatRoomMember with this data.
     */
    create: XOR<ChatRoomMemberCreateInput, ChatRoomMemberUncheckedCreateInput>
    /**
     * In case the ChatRoomMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomMemberUpdateInput, ChatRoomMemberUncheckedUpdateInput>
  }


  /**
   * ChatRoomMember delete
   */
  export type ChatRoomMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter which ChatRoomMember to delete.
     */
    where: ChatRoomMemberWhereUniqueInput
  }


  /**
   * ChatRoomMember deleteMany
   */
  export type ChatRoomMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoomMembers to delete
     */
    where?: ChatRoomMemberWhereInput
  }


  /**
   * ChatRoomMember without action
   */
  export type ChatRoomMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
  }



  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    senderId: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    senderId: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    chatRoomId: string | null
    senderId: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    chatRoomId: string | null
    senderId: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    chatRoomId: number
    senderId: number
    content: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    senderId?: true
  }

  export type ChatMessageSumAggregateInputType = {
    senderId?: true
  }

  export type ChatMessageMinAggregateInputType = {
    id?: true
    chatRoomId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    chatRoomId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    chatRoomId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    chatRoomId: string
    senderId: number
    content: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatRoomId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ChatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    chatRoomId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      ChatRoom: Prisma.$ChatRoomPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatRoomId: string
      senderId: number
      content: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }


  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
    **/
    create<T extends ChatMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatMessages.
     *     @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     *     @example
     *     // Create many ChatMessages
     *     const chatMessage = await prisma.chatMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
    **/
    delete<T extends ChatMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
    **/
    upsert<T extends ChatMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ChatRoom<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly chatRoomId: FieldRef<"ChatMessage", 'String'>
    readonly senderId: FieldRef<"ChatMessage", 'Int'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly deletedAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }


  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }


  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }


  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }


  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }


  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }


  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }


  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
  }


  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }


  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }


  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
  }


  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CommentScalarFieldEnum: {
    id: 'id',
    movieId: 'movieId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userno: 'userno',
    comment: 'comment'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const MovieScalarFieldEnum: {
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

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nickname: 'nickname',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    provider: 'provider',
    image: 'image',
    marketing_agreed: 'marketing_agreed',
    gender: 'gender'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MovieScoreScalarFieldEnum: {
    id: 'id',
    movieCd: 'movieCd',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    Userno: 'Userno'
  };

  export type MovieScoreScalarFieldEnum = (typeof MovieScoreScalarFieldEnum)[keyof typeof MovieScoreScalarFieldEnum]


  export const MovieVodScalarFieldEnum: {
    id: 'id',
    vodUrl: 'vodUrl',
    movieCd: 'movieCd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type MovieVodScalarFieldEnum = (typeof MovieVodScalarFieldEnum)[keyof typeof MovieVodScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
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

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const ArticleCommentsScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    userno: 'userno',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ArticleCommentsScalarFieldEnum = (typeof ArticleCommentsScalarFieldEnum)[keyof typeof ArticleCommentsScalarFieldEnum]


  export const ArticleLikesScalarFieldEnum: {
    id: 'id',
    article_id: 'article_id',
    userno: 'userno',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleLikesScalarFieldEnum = (typeof ArticleLikesScalarFieldEnum)[keyof typeof ArticleLikesScalarFieldEnum]


  export const MatchPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    movieTitle: 'movieTitle',
    theaterName: 'theaterName',
    showTime: 'showTime',
    maxParticipants: 'maxParticipants',
    location: 'location',
    userno: 'userno',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type MatchPostScalarFieldEnum = (typeof MatchPostScalarFieldEnum)[keyof typeof MatchPostScalarFieldEnum]


  export const MatchApplicationScalarFieldEnum: {
    id: 'id',
    matchPostId: 'matchPostId',
    applicantUserno: 'applicantUserno',
    applicantName: 'applicantName',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MatchApplicationScalarFieldEnum = (typeof MatchApplicationScalarFieldEnum)[keyof typeof MatchApplicationScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ChatRoomMemberScalarFieldEnum: {
    id: 'id',
    chatRoomId: 'chatRoomId',
    userId: 'userId',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt'
  };

  export type ChatRoomMemberScalarFieldEnum = (typeof ChatRoomMemberScalarFieldEnum)[keyof typeof ChatRoomMemberScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    chatRoomId: 'chatRoomId',
    senderId: 'senderId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'User_gender'
   */
  export type EnumUser_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'articleLikes_type'
   */
  export type EnumarticleLikes_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'articleLikes_type'>
    


  /**
   * Reference to a field of type 'MatchApplication_status'
   */
  export type EnumMatchApplication_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchApplication_status'>
    


  /**
   * Reference to a field of type 'ChatRoom_type'
   */
  export type EnumChatRoom_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatRoom_type'>
    
  /**
   * Deep Input Types
   */


  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    movieId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    userno?: IntFilter<"Comment"> | number
    comment?: StringNullableFilter<"Comment"> | string | null
    Movie?: XOR<MovieRelationFilter, MovieWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userno?: SortOrder
    comment?: SortOrderInput | SortOrder
    Movie?: MovieOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    movieId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    userno?: IntFilter<"Comment"> | number
    comment?: StringNullableFilter<"Comment"> | string | null
    Movie?: XOR<MovieRelationFilter, MovieWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userno?: SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    movieId?: IntWithAggregatesFilter<"Comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
    userno?: IntWithAggregatesFilter<"Comment"> | number
    comment?: StringNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: IntFilter<"Movie"> | number
    audience?: BigIntNullableFilter<"Movie"> | bigint | number | null
    movieCd?: IntFilter<"Movie"> | number
    title?: StringNullableFilter<"Movie"> | string | null
    rank?: BigIntNullableFilter<"Movie"> | bigint | number | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    poster?: StringNullableFilter<"Movie"> | string | null
    vector?: JsonNullableFilter<"Movie">
    rankInten?: StringNullableFilter<"Movie"> | string | null
    plot?: StringNullableFilter<"Movie"> | string | null
    rankOldAndNew?: StringNullableFilter<"Movie"> | string | null
    openDt?: DateTimeNullableFilter<"Movie"> | Date | string | null
    genre?: StringNullableFilter<"Movie"> | string | null
    director?: StringNullableFilter<"Movie"> | string | null
    ratting?: StringNullableFilter<"Movie"> | string | null
    Comment?: CommentListRelationFilter
    MovieVod?: MovieVodListRelationFilter
    movieScores?: MovieScoreListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    audience?: SortOrderInput | SortOrder
    movieCd?: SortOrder
    title?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    poster?: SortOrderInput | SortOrder
    vector?: SortOrderInput | SortOrder
    rankInten?: SortOrderInput | SortOrder
    plot?: SortOrderInput | SortOrder
    rankOldAndNew?: SortOrderInput | SortOrder
    openDt?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    director?: SortOrderInput | SortOrder
    ratting?: SortOrderInput | SortOrder
    Comment?: CommentOrderByRelationAggregateInput
    MovieVod?: MovieVodOrderByRelationAggregateInput
    movieScores?: movieScoreOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    movieCd?: number
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    audience?: BigIntNullableFilter<"Movie"> | bigint | number | null
    title?: StringNullableFilter<"Movie"> | string | null
    rank?: BigIntNullableFilter<"Movie"> | bigint | number | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    poster?: StringNullableFilter<"Movie"> | string | null
    vector?: JsonNullableFilter<"Movie">
    rankInten?: StringNullableFilter<"Movie"> | string | null
    plot?: StringNullableFilter<"Movie"> | string | null
    rankOldAndNew?: StringNullableFilter<"Movie"> | string | null
    openDt?: DateTimeNullableFilter<"Movie"> | Date | string | null
    genre?: StringNullableFilter<"Movie"> | string | null
    director?: StringNullableFilter<"Movie"> | string | null
    ratting?: StringNullableFilter<"Movie"> | string | null
    Comment?: CommentListRelationFilter
    MovieVod?: MovieVodListRelationFilter
    movieScores?: MovieScoreListRelationFilter
  }, "id" | "movieCd">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    audience?: SortOrderInput | SortOrder
    movieCd?: SortOrder
    title?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    poster?: SortOrderInput | SortOrder
    vector?: SortOrderInput | SortOrder
    rankInten?: SortOrderInput | SortOrder
    plot?: SortOrderInput | SortOrder
    rankOldAndNew?: SortOrderInput | SortOrder
    openDt?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    director?: SortOrderInput | SortOrder
    ratting?: SortOrderInput | SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movie"> | number
    audience?: BigIntNullableWithAggregatesFilter<"Movie"> | bigint | number | null
    movieCd?: IntWithAggregatesFilter<"Movie"> | number
    title?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    rank?: BigIntNullableWithAggregatesFilter<"Movie"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
    poster?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    vector?: JsonNullableWithAggregatesFilter<"Movie">
    rankInten?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    plot?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    rankOldAndNew?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    openDt?: DateTimeNullableWithAggregatesFilter<"Movie"> | Date | string | null
    genre?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    director?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    ratting?: StringNullableWithAggregatesFilter<"Movie"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    nickname?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    provider?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    marketing_agreed?: BoolFilter<"User"> | boolean
    gender?: EnumUser_genderNullableFilter<"User"> | $Enums.User_gender | null
    Comment?: CommentListRelationFilter
    article?: ArticleListRelationFilter
    articleComments?: ArticleCommentsListRelationFilter
    articleLikes?: ArticleLikesListRelationFilter
    movieScores?: MovieScoreListRelationFilter
    MatchPost?: MatchPostListRelationFilter
    MatchApplication?: MatchApplicationListRelationFilter
    ChatRoomMember?: ChatRoomMemberListRelationFilter
    ChatMessage?: ChatMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    provider?: SortOrder
    image?: SortOrderInput | SortOrder
    marketing_agreed?: SortOrder
    gender?: SortOrderInput | SortOrder
    Comment?: CommentOrderByRelationAggregateInput
    article?: articleOrderByRelationAggregateInput
    articleComments?: articleCommentsOrderByRelationAggregateInput
    articleLikes?: articleLikesOrderByRelationAggregateInput
    movieScores?: movieScoreOrderByRelationAggregateInput
    MatchPost?: MatchPostOrderByRelationAggregateInput
    MatchApplication?: MatchApplicationOrderByRelationAggregateInput
    ChatRoomMember?: ChatRoomMemberOrderByRelationAggregateInput
    ChatMessage?: ChatMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nickname?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    provider?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    marketing_agreed?: BoolFilter<"User"> | boolean
    gender?: EnumUser_genderNullableFilter<"User"> | $Enums.User_gender | null
    Comment?: CommentListRelationFilter
    article?: ArticleListRelationFilter
    articleComments?: ArticleCommentsListRelationFilter
    articleLikes?: ArticleLikesListRelationFilter
    movieScores?: MovieScoreListRelationFilter
    MatchPost?: MatchPostListRelationFilter
    MatchApplication?: MatchApplicationListRelationFilter
    ChatRoomMember?: ChatRoomMemberListRelationFilter
    ChatMessage?: ChatMessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    provider?: SortOrder
    image?: SortOrderInput | SortOrder
    marketing_agreed?: SortOrder
    gender?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    provider?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    marketing_agreed?: BoolWithAggregatesFilter<"User"> | boolean
    gender?: EnumUser_genderNullableWithAggregatesFilter<"User"> | $Enums.User_gender | null
  }

  export type movieScoreWhereInput = {
    AND?: movieScoreWhereInput | movieScoreWhereInput[]
    OR?: movieScoreWhereInput[]
    NOT?: movieScoreWhereInput | movieScoreWhereInput[]
    id?: IntFilter<"movieScore"> | number
    movieCd?: IntFilter<"movieScore"> | number
    score?: FloatNullableFilter<"movieScore"> | number | null
    createdAt?: DateTimeFilter<"movieScore"> | Date | string
    updatedAt?: DateTimeFilter<"movieScore"> | Date | string
    deletedAt?: DateTimeNullableFilter<"movieScore"> | Date | string | null
    Userno?: IntFilter<"movieScore"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }

  export type movieScoreOrderByWithRelationInput = {
    id?: SortOrder
    movieCd?: SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Userno?: SortOrder
    User?: UserOrderByWithRelationInput
    Movie?: MovieOrderByWithRelationInput
  }

  export type movieScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    movieCd_Userno?: movieScoreMovieCdUsernoCompoundUniqueInput
    AND?: movieScoreWhereInput | movieScoreWhereInput[]
    OR?: movieScoreWhereInput[]
    NOT?: movieScoreWhereInput | movieScoreWhereInput[]
    movieCd?: IntFilter<"movieScore"> | number
    score?: FloatNullableFilter<"movieScore"> | number | null
    createdAt?: DateTimeFilter<"movieScore"> | Date | string
    updatedAt?: DateTimeFilter<"movieScore"> | Date | string
    deletedAt?: DateTimeNullableFilter<"movieScore"> | Date | string | null
    Userno?: IntFilter<"movieScore"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }, "id" | "movieCd_Userno">

  export type movieScoreOrderByWithAggregationInput = {
    id?: SortOrder
    movieCd?: SortOrder
    score?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Userno?: SortOrder
    _count?: movieScoreCountOrderByAggregateInput
    _avg?: movieScoreAvgOrderByAggregateInput
    _max?: movieScoreMaxOrderByAggregateInput
    _min?: movieScoreMinOrderByAggregateInput
    _sum?: movieScoreSumOrderByAggregateInput
  }

  export type movieScoreScalarWhereWithAggregatesInput = {
    AND?: movieScoreScalarWhereWithAggregatesInput | movieScoreScalarWhereWithAggregatesInput[]
    OR?: movieScoreScalarWhereWithAggregatesInput[]
    NOT?: movieScoreScalarWhereWithAggregatesInput | movieScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movieScore"> | number
    movieCd?: IntWithAggregatesFilter<"movieScore"> | number
    score?: FloatNullableWithAggregatesFilter<"movieScore"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"movieScore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"movieScore"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"movieScore"> | Date | string | null
    Userno?: IntWithAggregatesFilter<"movieScore"> | number
  }

  export type MovieVodWhereInput = {
    AND?: MovieVodWhereInput | MovieVodWhereInput[]
    OR?: MovieVodWhereInput[]
    NOT?: MovieVodWhereInput | MovieVodWhereInput[]
    id?: IntFilter<"MovieVod"> | number
    vodUrl?: StringFilter<"MovieVod"> | string
    movieCd?: IntFilter<"MovieVod"> | number
    createdAt?: DateTimeFilter<"MovieVod"> | Date | string
    updatedAt?: DateTimeFilter<"MovieVod"> | Date | string
    deletedAt?: DateTimeNullableFilter<"MovieVod"> | Date | string | null
    Movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }

  export type MovieVodOrderByWithRelationInput = {
    id?: SortOrder
    vodUrl?: SortOrder
    movieCd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Movie?: MovieOrderByWithRelationInput
  }

  export type MovieVodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovieVodWhereInput | MovieVodWhereInput[]
    OR?: MovieVodWhereInput[]
    NOT?: MovieVodWhereInput | MovieVodWhereInput[]
    vodUrl?: StringFilter<"MovieVod"> | string
    movieCd?: IntFilter<"MovieVod"> | number
    createdAt?: DateTimeFilter<"MovieVod"> | Date | string
    updatedAt?: DateTimeFilter<"MovieVod"> | Date | string
    deletedAt?: DateTimeNullableFilter<"MovieVod"> | Date | string | null
    Movie?: XOR<MovieRelationFilter, MovieWhereInput>
  }, "id">

  export type MovieVodOrderByWithAggregationInput = {
    id?: SortOrder
    vodUrl?: SortOrder
    movieCd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: MovieVodCountOrderByAggregateInput
    _avg?: MovieVodAvgOrderByAggregateInput
    _max?: MovieVodMaxOrderByAggregateInput
    _min?: MovieVodMinOrderByAggregateInput
    _sum?: MovieVodSumOrderByAggregateInput
  }

  export type MovieVodScalarWhereWithAggregatesInput = {
    AND?: MovieVodScalarWhereWithAggregatesInput | MovieVodScalarWhereWithAggregatesInput[]
    OR?: MovieVodScalarWhereWithAggregatesInput[]
    NOT?: MovieVodScalarWhereWithAggregatesInput | MovieVodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MovieVod"> | number
    vodUrl?: StringWithAggregatesFilter<"MovieVod"> | string
    movieCd?: IntWithAggregatesFilter<"MovieVod"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MovieVod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MovieVod"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"MovieVod"> | Date | string | null
  }

  export type articleWhereInput = {
    AND?: articleWhereInput | articleWhereInput[]
    OR?: articleWhereInput[]
    NOT?: articleWhereInput | articleWhereInput[]
    id?: IntFilter<"article"> | number
    userno?: IntFilter<"article"> | number
    title?: StringFilter<"article"> | string
    content?: StringFilter<"article"> | string
    like_count?: IntFilter<"article"> | number
    dislike_count?: IntFilter<"article"> | number
    comment_count?: IntFilter<"article"> | number
    createdAt?: DateTimeFilter<"article"> | Date | string
    updatedAt?: DateTimeFilter<"article"> | Date | string
    deletedAt?: DateTimeNullableFilter<"article"> | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    articleComments?: ArticleCommentsListRelationFilter
    articleLikes?: ArticleLikesListRelationFilter
  }

  export type articleOrderByWithRelationInput = {
    id?: SortOrder
    userno?: SortOrder
    title?: SortOrder
    content?: SortOrder
    like_count?: SortOrder
    dislike_count?: SortOrder
    comment_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    articleComments?: articleCommentsOrderByRelationAggregateInput
    articleLikes?: articleLikesOrderByRelationAggregateInput
  }

  export type articleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: articleWhereInput | articleWhereInput[]
    OR?: articleWhereInput[]
    NOT?: articleWhereInput | articleWhereInput[]
    userno?: IntFilter<"article"> | number
    title?: StringFilter<"article"> | string
    content?: StringFilter<"article"> | string
    like_count?: IntFilter<"article"> | number
    dislike_count?: IntFilter<"article"> | number
    comment_count?: IntFilter<"article"> | number
    createdAt?: DateTimeFilter<"article"> | Date | string
    updatedAt?: DateTimeFilter<"article"> | Date | string
    deletedAt?: DateTimeNullableFilter<"article"> | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    articleComments?: ArticleCommentsListRelationFilter
    articleLikes?: ArticleLikesListRelationFilter
  }, "id">

  export type articleOrderByWithAggregationInput = {
    id?: SortOrder
    userno?: SortOrder
    title?: SortOrder
    content?: SortOrder
    like_count?: SortOrder
    dislike_count?: SortOrder
    comment_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: articleCountOrderByAggregateInput
    _avg?: articleAvgOrderByAggregateInput
    _max?: articleMaxOrderByAggregateInput
    _min?: articleMinOrderByAggregateInput
    _sum?: articleSumOrderByAggregateInput
  }

  export type articleScalarWhereWithAggregatesInput = {
    AND?: articleScalarWhereWithAggregatesInput | articleScalarWhereWithAggregatesInput[]
    OR?: articleScalarWhereWithAggregatesInput[]
    NOT?: articleScalarWhereWithAggregatesInput | articleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"article"> | number
    userno?: IntWithAggregatesFilter<"article"> | number
    title?: StringWithAggregatesFilter<"article"> | string
    content?: StringWithAggregatesFilter<"article"> | string
    like_count?: IntWithAggregatesFilter<"article"> | number
    dislike_count?: IntWithAggregatesFilter<"article"> | number
    comment_count?: IntWithAggregatesFilter<"article"> | number
    createdAt?: DateTimeWithAggregatesFilter<"article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"article"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"article"> | Date | string | null
  }

  export type articleCommentsWhereInput = {
    AND?: articleCommentsWhereInput | articleCommentsWhereInput[]
    OR?: articleCommentsWhereInput[]
    NOT?: articleCommentsWhereInput | articleCommentsWhereInput[]
    id?: IntFilter<"articleComments"> | number
    articleId?: IntFilter<"articleComments"> | number
    userno?: IntFilter<"articleComments"> | number
    content?: StringFilter<"articleComments"> | string
    createdAt?: DateTimeFilter<"articleComments"> | Date | string
    updatedAt?: DateTimeFilter<"articleComments"> | Date | string
    deletedAt?: DateTimeNullableFilter<"articleComments"> | Date | string | null
    article?: XOR<ArticleRelationFilter, articleWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type articleCommentsOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    userno?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    article?: articleOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type articleCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: articleCommentsWhereInput | articleCommentsWhereInput[]
    OR?: articleCommentsWhereInput[]
    NOT?: articleCommentsWhereInput | articleCommentsWhereInput[]
    articleId?: IntFilter<"articleComments"> | number
    userno?: IntFilter<"articleComments"> | number
    content?: StringFilter<"articleComments"> | string
    createdAt?: DateTimeFilter<"articleComments"> | Date | string
    updatedAt?: DateTimeFilter<"articleComments"> | Date | string
    deletedAt?: DateTimeNullableFilter<"articleComments"> | Date | string | null
    article?: XOR<ArticleRelationFilter, articleWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type articleCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    userno?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: articleCommentsCountOrderByAggregateInput
    _avg?: articleCommentsAvgOrderByAggregateInput
    _max?: articleCommentsMaxOrderByAggregateInput
    _min?: articleCommentsMinOrderByAggregateInput
    _sum?: articleCommentsSumOrderByAggregateInput
  }

  export type articleCommentsScalarWhereWithAggregatesInput = {
    AND?: articleCommentsScalarWhereWithAggregatesInput | articleCommentsScalarWhereWithAggregatesInput[]
    OR?: articleCommentsScalarWhereWithAggregatesInput[]
    NOT?: articleCommentsScalarWhereWithAggregatesInput | articleCommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"articleComments"> | number
    articleId?: IntWithAggregatesFilter<"articleComments"> | number
    userno?: IntWithAggregatesFilter<"articleComments"> | number
    content?: StringWithAggregatesFilter<"articleComments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"articleComments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"articleComments"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"articleComments"> | Date | string | null
  }

  export type articleLikesWhereInput = {
    AND?: articleLikesWhereInput | articleLikesWhereInput[]
    OR?: articleLikesWhereInput[]
    NOT?: articleLikesWhereInput | articleLikesWhereInput[]
    id?: IntFilter<"articleLikes"> | number
    article_id?: IntFilter<"articleLikes"> | number
    userno?: IntFilter<"articleLikes"> | number
    type?: EnumarticleLikes_typeFilter<"articleLikes"> | $Enums.articleLikes_type
    createdAt?: DateTimeFilter<"articleLikes"> | Date | string
    updatedAt?: DateTimeFilter<"articleLikes"> | Date | string
    article?: XOR<ArticleRelationFilter, articleWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type articleLikesOrderByWithRelationInput = {
    id?: SortOrder
    article_id?: SortOrder
    userno?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: articleOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type articleLikesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    article_id_userno_type?: articleLikesArticle_idUsernoTypeCompoundUniqueInput
    AND?: articleLikesWhereInput | articleLikesWhereInput[]
    OR?: articleLikesWhereInput[]
    NOT?: articleLikesWhereInput | articleLikesWhereInput[]
    article_id?: IntFilter<"articleLikes"> | number
    userno?: IntFilter<"articleLikes"> | number
    type?: EnumarticleLikes_typeFilter<"articleLikes"> | $Enums.articleLikes_type
    createdAt?: DateTimeFilter<"articleLikes"> | Date | string
    updatedAt?: DateTimeFilter<"articleLikes"> | Date | string
    article?: XOR<ArticleRelationFilter, articleWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "article_id_userno_type">

  export type articleLikesOrderByWithAggregationInput = {
    id?: SortOrder
    article_id?: SortOrder
    userno?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: articleLikesCountOrderByAggregateInput
    _avg?: articleLikesAvgOrderByAggregateInput
    _max?: articleLikesMaxOrderByAggregateInput
    _min?: articleLikesMinOrderByAggregateInput
    _sum?: articleLikesSumOrderByAggregateInput
  }

  export type articleLikesScalarWhereWithAggregatesInput = {
    AND?: articleLikesScalarWhereWithAggregatesInput | articleLikesScalarWhereWithAggregatesInput[]
    OR?: articleLikesScalarWhereWithAggregatesInput[]
    NOT?: articleLikesScalarWhereWithAggregatesInput | articleLikesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"articleLikes"> | number
    article_id?: IntWithAggregatesFilter<"articleLikes"> | number
    userno?: IntWithAggregatesFilter<"articleLikes"> | number
    type?: EnumarticleLikes_typeWithAggregatesFilter<"articleLikes"> | $Enums.articleLikes_type
    createdAt?: DateTimeWithAggregatesFilter<"articleLikes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"articleLikes"> | Date | string
  }

  export type MatchPostWhereInput = {
    AND?: MatchPostWhereInput | MatchPostWhereInput[]
    OR?: MatchPostWhereInput[]
    NOT?: MatchPostWhereInput | MatchPostWhereInput[]
    id?: StringFilter<"MatchPost"> | string
    title?: StringFilter<"MatchPost"> | string
    content?: StringFilter<"MatchPost"> | string
    movieTitle?: StringFilter<"MatchPost"> | string
    theaterName?: StringFilter<"MatchPost"> | string
    showTime?: StringFilter<"MatchPost"> | string
    maxParticipants?: IntFilter<"MatchPost"> | number
    location?: StringFilter<"MatchPost"> | string
    userno?: IntFilter<"MatchPost"> | number
    createdAt?: DateTimeFilter<"MatchPost"> | Date | string
    updatedAt?: DateTimeNullableFilter<"MatchPost"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"MatchPost"> | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    MatchApplication?: MatchApplicationListRelationFilter
  }

  export type MatchPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    movieTitle?: SortOrder
    theaterName?: SortOrder
    showTime?: SortOrder
    maxParticipants?: SortOrder
    location?: SortOrder
    userno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    MatchApplication?: MatchApplicationOrderByRelationAggregateInput
  }

  export type MatchPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchPostWhereInput | MatchPostWhereInput[]
    OR?: MatchPostWhereInput[]
    NOT?: MatchPostWhereInput | MatchPostWhereInput[]
    title?: StringFilter<"MatchPost"> | string
    content?: StringFilter<"MatchPost"> | string
    movieTitle?: StringFilter<"MatchPost"> | string
    theaterName?: StringFilter<"MatchPost"> | string
    showTime?: StringFilter<"MatchPost"> | string
    maxParticipants?: IntFilter<"MatchPost"> | number
    location?: StringFilter<"MatchPost"> | string
    userno?: IntFilter<"MatchPost"> | number
    createdAt?: DateTimeFilter<"MatchPost"> | Date | string
    updatedAt?: DateTimeNullableFilter<"MatchPost"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"MatchPost"> | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    MatchApplication?: MatchApplicationListRelationFilter
  }, "id">

  export type MatchPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    movieTitle?: SortOrder
    theaterName?: SortOrder
    showTime?: SortOrder
    maxParticipants?: SortOrder
    location?: SortOrder
    userno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: MatchPostCountOrderByAggregateInput
    _avg?: MatchPostAvgOrderByAggregateInput
    _max?: MatchPostMaxOrderByAggregateInput
    _min?: MatchPostMinOrderByAggregateInput
    _sum?: MatchPostSumOrderByAggregateInput
  }

  export type MatchPostScalarWhereWithAggregatesInput = {
    AND?: MatchPostScalarWhereWithAggregatesInput | MatchPostScalarWhereWithAggregatesInput[]
    OR?: MatchPostScalarWhereWithAggregatesInput[]
    NOT?: MatchPostScalarWhereWithAggregatesInput | MatchPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchPost"> | string
    title?: StringWithAggregatesFilter<"MatchPost"> | string
    content?: StringWithAggregatesFilter<"MatchPost"> | string
    movieTitle?: StringWithAggregatesFilter<"MatchPost"> | string
    theaterName?: StringWithAggregatesFilter<"MatchPost"> | string
    showTime?: StringWithAggregatesFilter<"MatchPost"> | string
    maxParticipants?: IntWithAggregatesFilter<"MatchPost"> | number
    location?: StringWithAggregatesFilter<"MatchPost"> | string
    userno?: IntWithAggregatesFilter<"MatchPost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MatchPost"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"MatchPost"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"MatchPost"> | Date | string | null
  }

  export type MatchApplicationWhereInput = {
    AND?: MatchApplicationWhereInput | MatchApplicationWhereInput[]
    OR?: MatchApplicationWhereInput[]
    NOT?: MatchApplicationWhereInput | MatchApplicationWhereInput[]
    id?: StringFilter<"MatchApplication"> | string
    matchPostId?: StringFilter<"MatchApplication"> | string
    applicantUserno?: IntFilter<"MatchApplication"> | number
    applicantName?: StringFilter<"MatchApplication"> | string
    message?: StringFilter<"MatchApplication"> | string
    status?: EnumMatchApplication_statusFilter<"MatchApplication"> | $Enums.MatchApplication_status
    createdAt?: DateTimeFilter<"MatchApplication"> | Date | string
    MatchPost?: XOR<MatchPostRelationFilter, MatchPostWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MatchApplicationOrderByWithRelationInput = {
    id?: SortOrder
    matchPostId?: SortOrder
    applicantUserno?: SortOrder
    applicantName?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    MatchPost?: MatchPostOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type MatchApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchPostId_applicantUserno?: MatchApplicationMatchPostIdApplicantUsernoCompoundUniqueInput
    AND?: MatchApplicationWhereInput | MatchApplicationWhereInput[]
    OR?: MatchApplicationWhereInput[]
    NOT?: MatchApplicationWhereInput | MatchApplicationWhereInput[]
    matchPostId?: StringFilter<"MatchApplication"> | string
    applicantUserno?: IntFilter<"MatchApplication"> | number
    applicantName?: StringFilter<"MatchApplication"> | string
    message?: StringFilter<"MatchApplication"> | string
    status?: EnumMatchApplication_statusFilter<"MatchApplication"> | $Enums.MatchApplication_status
    createdAt?: DateTimeFilter<"MatchApplication"> | Date | string
    MatchPost?: XOR<MatchPostRelationFilter, MatchPostWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "matchPostId_applicantUserno">

  export type MatchApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    matchPostId?: SortOrder
    applicantUserno?: SortOrder
    applicantName?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MatchApplicationCountOrderByAggregateInput
    _avg?: MatchApplicationAvgOrderByAggregateInput
    _max?: MatchApplicationMaxOrderByAggregateInput
    _min?: MatchApplicationMinOrderByAggregateInput
    _sum?: MatchApplicationSumOrderByAggregateInput
  }

  export type MatchApplicationScalarWhereWithAggregatesInput = {
    AND?: MatchApplicationScalarWhereWithAggregatesInput | MatchApplicationScalarWhereWithAggregatesInput[]
    OR?: MatchApplicationScalarWhereWithAggregatesInput[]
    NOT?: MatchApplicationScalarWhereWithAggregatesInput | MatchApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchApplication"> | string
    matchPostId?: StringWithAggregatesFilter<"MatchApplication"> | string
    applicantUserno?: IntWithAggregatesFilter<"MatchApplication"> | number
    applicantName?: StringWithAggregatesFilter<"MatchApplication"> | string
    message?: StringWithAggregatesFilter<"MatchApplication"> | string
    status?: EnumMatchApplication_statusWithAggregatesFilter<"MatchApplication"> | $Enums.MatchApplication_status
    createdAt?: DateTimeWithAggregatesFilter<"MatchApplication"> | Date | string
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    name?: StringFilter<"ChatRoom"> | string
    type?: EnumChatRoom_typeFilter<"ChatRoom"> | $Enums.ChatRoom_type
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    ChatMessage?: ChatMessageListRelationFilter
    ChatRoomMember?: ChatRoomMemberListRelationFilter
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ChatMessage?: ChatMessageOrderByRelationAggregateInput
    ChatRoomMember?: ChatRoomMemberOrderByRelationAggregateInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    name?: StringFilter<"ChatRoom"> | string
    type?: EnumChatRoom_typeFilter<"ChatRoom"> | $Enums.ChatRoom_type
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    ChatMessage?: ChatMessageListRelationFilter
    ChatRoomMember?: ChatRoomMemberListRelationFilter
  }, "id">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatRoom"> | string
    name?: StringWithAggregatesFilter<"ChatRoom"> | string
    type?: EnumChatRoom_typeWithAggregatesFilter<"ChatRoom"> | $Enums.ChatRoom_type
    createdAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
  }

  export type ChatRoomMemberWhereInput = {
    AND?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    OR?: ChatRoomMemberWhereInput[]
    NOT?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    id?: StringFilter<"ChatRoomMember"> | string
    chatRoomId?: StringFilter<"ChatRoomMember"> | string
    userId?: IntFilter<"ChatRoomMember"> | number
    joinedAt?: DateTimeFilter<"ChatRoomMember"> | Date | string
    leftAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
    ChatRoom?: XOR<ChatRoomRelationFilter, ChatRoomWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ChatRoomMemberOrderByWithRelationInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    ChatRoom?: ChatRoomOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ChatRoomMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatRoomId_userId?: ChatRoomMemberChatRoomIdUserIdCompoundUniqueInput
    AND?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    OR?: ChatRoomMemberWhereInput[]
    NOT?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    chatRoomId?: StringFilter<"ChatRoomMember"> | string
    userId?: IntFilter<"ChatRoomMember"> | number
    joinedAt?: DateTimeFilter<"ChatRoomMember"> | Date | string
    leftAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
    ChatRoom?: XOR<ChatRoomRelationFilter, ChatRoomWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "chatRoomId_userId">

  export type ChatRoomMemberOrderByWithAggregationInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    _count?: ChatRoomMemberCountOrderByAggregateInput
    _avg?: ChatRoomMemberAvgOrderByAggregateInput
    _max?: ChatRoomMemberMaxOrderByAggregateInput
    _min?: ChatRoomMemberMinOrderByAggregateInput
    _sum?: ChatRoomMemberSumOrderByAggregateInput
  }

  export type ChatRoomMemberScalarWhereWithAggregatesInput = {
    AND?: ChatRoomMemberScalarWhereWithAggregatesInput | ChatRoomMemberScalarWhereWithAggregatesInput[]
    OR?: ChatRoomMemberScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomMemberScalarWhereWithAggregatesInput | ChatRoomMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatRoomMember"> | string
    chatRoomId?: StringWithAggregatesFilter<"ChatRoomMember"> | string
    userId?: IntWithAggregatesFilter<"ChatRoomMember"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"ChatRoomMember"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"ChatRoomMember"> | Date | string | null
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    chatRoomId?: StringFilter<"ChatMessage"> | string
    senderId?: IntFilter<"ChatMessage"> | number
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ChatMessage"> | Date | string | null
    ChatRoom?: XOR<ChatRoomRelationFilter, ChatRoomWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ChatRoom?: ChatRoomOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    chatRoomId?: StringFilter<"ChatMessage"> | string
    senderId?: IntFilter<"ChatMessage"> | number
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ChatMessage"> | Date | string | null
    ChatRoom?: XOR<ChatRoomRelationFilter, ChatRoomWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _avg?: ChatMessageAvgOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
    _sum?: ChatMessageSumOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    chatRoomId?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderId?: IntWithAggregatesFilter<"ChatMessage"> | number
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ChatMessage"> | Date | string | null
  }

  export type CommentCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    comment?: string | null
    Movie: MovieCreateNestedOneWithoutCommentInput
    User: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userno: number
    comment?: string | null
  }

  export type CommentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    Movie?: MovieUpdateOneRequiredWithoutCommentNestedInput
    User?: UserUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userno?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userno: number
    comment?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userno?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieCreateInput = {
    audience?: bigint | number | null
    movieCd: number
    title?: string | null
    rank?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster?: string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: string | null
    plot?: string | null
    rankOldAndNew?: string | null
    openDt?: Date | string | null
    genre?: string | null
    director?: string | null
    ratting?: string | null
    Comment?: CommentCreateNestedManyWithoutMovieInput
    MovieVod?: MovieVodCreateNestedManyWithoutMovieInput
    movieScores?: movieScoreCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: number
    audience?: bigint | number | null
    movieCd: number
    title?: string | null
    rank?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster?: string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: string | null
    plot?: string | null
    rankOldAndNew?: string | null
    openDt?: Date | string | null
    genre?: string | null
    director?: string | null
    ratting?: string | null
    Comment?: CommentUncheckedCreateNestedManyWithoutMovieInput
    MovieVod?: MovieVodUncheckedCreateNestedManyWithoutMovieInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    audience?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    movieCd?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: NullableStringFieldUpdateOperationsInput | string | null
    plot?: NullableStringFieldUpdateOperationsInput | string | null
    rankOldAndNew?: NullableStringFieldUpdateOperationsInput | string | null
    openDt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    ratting?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: CommentUpdateManyWithoutMovieNestedInput
    MovieVod?: MovieVodUpdateManyWithoutMovieNestedInput
    movieScores?: movieScoreUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    audience?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    movieCd?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: NullableStringFieldUpdateOperationsInput | string | null
    plot?: NullableStringFieldUpdateOperationsInput | string | null
    rankOldAndNew?: NullableStringFieldUpdateOperationsInput | string | null
    openDt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    ratting?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    MovieVod?: MovieVodUncheckedUpdateManyWithoutMovieNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    id?: number
    audience?: bigint | number | null
    movieCd: number
    title?: string | null
    rank?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster?: string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: string | null
    plot?: string | null
    rankOldAndNew?: string | null
    openDt?: Date | string | null
    genre?: string | null
    director?: string | null
    ratting?: string | null
  }

  export type MovieUpdateManyMutationInput = {
    audience?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    movieCd?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: NullableStringFieldUpdateOperationsInput | string | null
    plot?: NullableStringFieldUpdateOperationsInput | string | null
    rankOldAndNew?: NullableStringFieldUpdateOperationsInput | string | null
    openDt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    ratting?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    audience?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    movieCd?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: NullableStringFieldUpdateOperationsInput | string | null
    plot?: NullableStringFieldUpdateOperationsInput | string | null
    rankOldAndNew?: NullableStringFieldUpdateOperationsInput | string | null
    openDt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    ratting?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentCreateNestedManyWithoutUserInput
    article?: articleCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesCreateNestedManyWithoutUserInput
    movieScores?: movieScoreCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    article?: articleUncheckedCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutUserInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostUncheckedCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUpdateManyWithoutUserNestedInput
    article?: articleUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    article?: articleUncheckedUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUncheckedUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUncheckedUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
  }

  export type movieScoreCreateInput = {
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutMovieScoresInput
    Movie: MovieCreateNestedOneWithoutMovieScoresInput
  }

  export type movieScoreUncheckedCreateInput = {
    id?: number
    movieCd: number
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Userno: number
  }

  export type movieScoreUpdateInput = {
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutMovieScoresNestedInput
    Movie?: MovieUpdateOneRequiredWithoutMovieScoresNestedInput
  }

  export type movieScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieCd?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Userno?: IntFieldUpdateOperationsInput | number
  }

  export type movieScoreCreateManyInput = {
    id?: number
    movieCd: number
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Userno: number
  }

  export type movieScoreUpdateManyMutationInput = {
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movieScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieCd?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Userno?: IntFieldUpdateOperationsInput | number
  }

  export type MovieVodCreateInput = {
    vodUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Movie: MovieCreateNestedOneWithoutMovieVodInput
  }

  export type MovieVodUncheckedCreateInput = {
    id?: number
    vodUrl: string
    movieCd: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MovieVodUpdateInput = {
    vodUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Movie?: MovieUpdateOneRequiredWithoutMovieVodNestedInput
  }

  export type MovieVodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vodUrl?: StringFieldUpdateOperationsInput | string
    movieCd?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MovieVodCreateManyInput = {
    id?: number
    vodUrl: string
    movieCd: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MovieVodUpdateManyMutationInput = {
    vodUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MovieVodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vodUrl?: StringFieldUpdateOperationsInput | string
    movieCd?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleCreateInput = {
    title: string
    content: string
    like_count?: number
    dislike_count?: number
    comment_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutArticleInput
    articleComments?: articleCommentsCreateNestedManyWithoutArticleInput
    articleLikes?: articleLikesCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateInput = {
    id?: number
    userno: number
    title: string
    content: string
    like_count?: number
    dislike_count?: number
    comment_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutArticleInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutArticleNestedInput
    articleComments?: articleCommentsUpdateManyWithoutArticleNestedInput
    articleLikes?: articleLikesUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articleComments?: articleCommentsUncheckedUpdateManyWithoutArticleNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articleCreateManyInput = {
    id?: number
    userno: number
    title: string
    content: string
    like_count?: number
    dislike_count?: number
    comment_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type articleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleCommentsCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    article: articleCreateNestedOneWithoutArticleCommentsInput
    User: UserCreateNestedOneWithoutArticleCommentsInput
  }

  export type articleCommentsUncheckedCreateInput = {
    id?: number
    articleId: number
    userno: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type articleCommentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articleUpdateOneRequiredWithoutArticleCommentsNestedInput
    User?: UserUpdateOneRequiredWithoutArticleCommentsNestedInput
  }

  export type articleCommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleCommentsCreateManyInput = {
    id?: number
    articleId: number
    userno: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type articleCommentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleCommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleLikesCreateInput = {
    type: $Enums.articleLikes_type
    createdAt?: Date | string
    updatedAt?: Date | string
    article: articleCreateNestedOneWithoutArticleLikesInput
    User: UserCreateNestedOneWithoutArticleLikesInput
  }

  export type articleLikesUncheckedCreateInput = {
    id?: number
    article_id: number
    userno: number
    type: $Enums.articleLikes_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articleLikesUpdateInput = {
    type?: EnumarticleLikes_typeFieldUpdateOperationsInput | $Enums.articleLikes_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: articleUpdateOneRequiredWithoutArticleLikesNestedInput
    User?: UserUpdateOneRequiredWithoutArticleLikesNestedInput
  }

  export type articleLikesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    type?: EnumarticleLikes_typeFieldUpdateOperationsInput | $Enums.articleLikes_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articleLikesCreateManyInput = {
    id?: number
    article_id: number
    userno: number
    type: $Enums.articleLikes_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articleLikesUpdateManyMutationInput = {
    type?: EnumarticleLikes_typeFieldUpdateOperationsInput | $Enums.articleLikes_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articleLikesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    type?: EnumarticleLikes_typeFieldUpdateOperationsInput | $Enums.articleLikes_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPostCreateInput = {
    id?: string
    title: string
    content: string
    movieTitle: string
    theaterName: string
    showTime: string
    maxParticipants: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutMatchPostInput
    MatchApplication?: MatchApplicationCreateNestedManyWithoutMatchPostInput
  }

  export type MatchPostUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    movieTitle: string
    theaterName: string
    showTime: string
    maxParticipants: number
    location: string
    userno: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutMatchPostInput
  }

  export type MatchPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    movieTitle?: StringFieldUpdateOperationsInput | string
    theaterName?: StringFieldUpdateOperationsInput | string
    showTime?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutMatchPostNestedInput
    MatchApplication?: MatchApplicationUpdateManyWithoutMatchPostNestedInput
  }

  export type MatchPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    movieTitle?: StringFieldUpdateOperationsInput | string
    theaterName?: StringFieldUpdateOperationsInput | string
    showTime?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    userno?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutMatchPostNestedInput
  }

  export type MatchPostCreateManyInput = {
    id?: string
    title: string
    content: string
    movieTitle: string
    theaterName: string
    showTime: string
    maxParticipants: number
    location: string
    userno: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MatchPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    movieTitle?: StringFieldUpdateOperationsInput | string
    theaterName?: StringFieldUpdateOperationsInput | string
    showTime?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    movieTitle?: StringFieldUpdateOperationsInput | string
    theaterName?: StringFieldUpdateOperationsInput | string
    showTime?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    userno?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchApplicationCreateInput = {
    id?: string
    applicantName: string
    message: string
    status?: $Enums.MatchApplication_status
    createdAt?: Date | string
    MatchPost: MatchPostCreateNestedOneWithoutMatchApplicationInput
    User: UserCreateNestedOneWithoutMatchApplicationInput
  }

  export type MatchApplicationUncheckedCreateInput = {
    id?: string
    matchPostId: string
    applicantUserno: number
    applicantName: string
    message: string
    status?: $Enums.MatchApplication_status
    createdAt?: Date | string
  }

  export type MatchApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchApplication_statusFieldUpdateOperationsInput | $Enums.MatchApplication_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchPost?: MatchPostUpdateOneRequiredWithoutMatchApplicationNestedInput
    User?: UserUpdateOneRequiredWithoutMatchApplicationNestedInput
  }

  export type MatchApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchPostId?: StringFieldUpdateOperationsInput | string
    applicantUserno?: IntFieldUpdateOperationsInput | number
    applicantName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchApplication_statusFieldUpdateOperationsInput | $Enums.MatchApplication_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchApplicationCreateManyInput = {
    id?: string
    matchPostId: string
    applicantUserno: number
    applicantName: string
    message: string
    status?: $Enums.MatchApplication_status
    createdAt?: Date | string
  }

  export type MatchApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchApplication_statusFieldUpdateOperationsInput | $Enums.MatchApplication_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchPostId?: StringFieldUpdateOperationsInput | string
    applicantUserno?: IntFieldUpdateOperationsInput | number
    applicantName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchApplication_statusFieldUpdateOperationsInput | $Enums.MatchApplication_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomCreateInput = {
    id?: string
    name: string
    type?: $Enums.ChatRoom_type
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatMessage?: ChatMessageCreateNestedManyWithoutChatRoomInput
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: string
    name: string
    type?: $Enums.ChatRoom_type
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChatRoom_typeFieldUpdateOperationsInput | $Enums.ChatRoom_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatMessage?: ChatMessageUpdateManyWithoutChatRoomNestedInput
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChatRoom_typeFieldUpdateOperationsInput | $Enums.ChatRoom_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id?: string
    name: string
    type?: $Enums.ChatRoom_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChatRoom_typeFieldUpdateOperationsInput | $Enums.ChatRoom_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChatRoom_typeFieldUpdateOperationsInput | $Enums.ChatRoom_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomMemberCreateInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    ChatRoom: ChatRoomCreateNestedOneWithoutChatRoomMemberInput
    User: UserCreateNestedOneWithoutChatRoomMemberInput
  }

  export type ChatRoomMemberUncheckedCreateInput = {
    id?: string
    chatRoomId: string
    userId: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type ChatRoomMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatRoom?: ChatRoomUpdateOneRequiredWithoutChatRoomMemberNestedInput
    User?: UserUpdateOneRequiredWithoutChatRoomMemberNestedInput
  }

  export type ChatRoomMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberCreateManyInput = {
    id?: string
    chatRoomId: string
    userId: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type ChatRoomMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ChatRoom: ChatRoomCreateNestedOneWithoutChatMessageInput
    User: UserCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    chatRoomId: string
    senderId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatRoom?: ChatRoomUpdateOneRequiredWithoutChatMessageNestedInput
    User?: UserUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    chatRoomId: string
    senderId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MovieRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userno?: SortOrder
    comment?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userno?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userno?: SortOrder
    comment?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userno?: SortOrder
    comment?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userno?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type MovieVodListRelationFilter = {
    every?: MovieVodWhereInput
    some?: MovieVodWhereInput
    none?: MovieVodWhereInput
  }

  export type MovieScoreListRelationFilter = {
    every?: movieScoreWhereInput
    some?: movieScoreWhereInput
    none?: movieScoreWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieVodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type movieScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    audience?: SortOrder
    movieCd?: SortOrder
    title?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    poster?: SortOrder
    vector?: SortOrder
    rankInten?: SortOrder
    plot?: SortOrder
    rankOldAndNew?: SortOrder
    openDt?: SortOrder
    genre?: SortOrder
    director?: SortOrder
    ratting?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    id?: SortOrder
    audience?: SortOrder
    movieCd?: SortOrder
    rank?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    audience?: SortOrder
    movieCd?: SortOrder
    title?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    poster?: SortOrder
    rankInten?: SortOrder
    plot?: SortOrder
    rankOldAndNew?: SortOrder
    openDt?: SortOrder
    genre?: SortOrder
    director?: SortOrder
    ratting?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    audience?: SortOrder
    movieCd?: SortOrder
    title?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    poster?: SortOrder
    rankInten?: SortOrder
    plot?: SortOrder
    rankOldAndNew?: SortOrder
    openDt?: SortOrder
    genre?: SortOrder
    director?: SortOrder
    ratting?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    id?: SortOrder
    audience?: SortOrder
    movieCd?: SortOrder
    rank?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUser_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.User_gender | EnumUser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.User_gender[] | null
    notIn?: $Enums.User_gender[] | null
    not?: NestedEnumUser_genderNullableFilter<$PrismaModel> | $Enums.User_gender | null
  }

  export type ArticleListRelationFilter = {
    every?: articleWhereInput
    some?: articleWhereInput
    none?: articleWhereInput
  }

  export type ArticleCommentsListRelationFilter = {
    every?: articleCommentsWhereInput
    some?: articleCommentsWhereInput
    none?: articleCommentsWhereInput
  }

  export type ArticleLikesListRelationFilter = {
    every?: articleLikesWhereInput
    some?: articleLikesWhereInput
    none?: articleLikesWhereInput
  }

  export type MatchPostListRelationFilter = {
    every?: MatchPostWhereInput
    some?: MatchPostWhereInput
    none?: MatchPostWhereInput
  }

  export type MatchApplicationListRelationFilter = {
    every?: MatchApplicationWhereInput
    some?: MatchApplicationWhereInput
    none?: MatchApplicationWhereInput
  }

  export type ChatRoomMemberListRelationFilter = {
    every?: ChatRoomMemberWhereInput
    some?: ChatRoomMemberWhereInput
    none?: ChatRoomMemberWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type articleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articleCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articleLikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    provider?: SortOrder
    image?: SortOrder
    marketing_agreed?: SortOrder
    gender?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    provider?: SortOrder
    image?: SortOrder
    marketing_agreed?: SortOrder
    gender?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    provider?: SortOrder
    image?: SortOrder
    marketing_agreed?: SortOrder
    gender?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUser_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_gender | EnumUser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.User_gender[] | null
    notIn?: $Enums.User_gender[] | null
    not?: NestedEnumUser_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.User_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUser_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumUser_genderNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type movieScoreMovieCdUsernoCompoundUniqueInput = {
    movieCd: number
    Userno: number
  }

  export type movieScoreCountOrderByAggregateInput = {
    id?: SortOrder
    movieCd?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    Userno?: SortOrder
  }

  export type movieScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    movieCd?: SortOrder
    score?: SortOrder
    Userno?: SortOrder
  }

  export type movieScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    movieCd?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    Userno?: SortOrder
  }

  export type movieScoreMinOrderByAggregateInput = {
    id?: SortOrder
    movieCd?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    Userno?: SortOrder
  }

  export type movieScoreSumOrderByAggregateInput = {
    id?: SortOrder
    movieCd?: SortOrder
    score?: SortOrder
    Userno?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MovieVodCountOrderByAggregateInput = {
    id?: SortOrder
    vodUrl?: SortOrder
    movieCd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MovieVodAvgOrderByAggregateInput = {
    id?: SortOrder
    movieCd?: SortOrder
  }

  export type MovieVodMaxOrderByAggregateInput = {
    id?: SortOrder
    vodUrl?: SortOrder
    movieCd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MovieVodMinOrderByAggregateInput = {
    id?: SortOrder
    vodUrl?: SortOrder
    movieCd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MovieVodSumOrderByAggregateInput = {
    id?: SortOrder
    movieCd?: SortOrder
  }

  export type articleCountOrderByAggregateInput = {
    id?: SortOrder
    userno?: SortOrder
    title?: SortOrder
    content?: SortOrder
    like_count?: SortOrder
    dislike_count?: SortOrder
    comment_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type articleAvgOrderByAggregateInput = {
    id?: SortOrder
    userno?: SortOrder
    like_count?: SortOrder
    dislike_count?: SortOrder
    comment_count?: SortOrder
  }

  export type articleMaxOrderByAggregateInput = {
    id?: SortOrder
    userno?: SortOrder
    title?: SortOrder
    content?: SortOrder
    like_count?: SortOrder
    dislike_count?: SortOrder
    comment_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type articleMinOrderByAggregateInput = {
    id?: SortOrder
    userno?: SortOrder
    title?: SortOrder
    content?: SortOrder
    like_count?: SortOrder
    dislike_count?: SortOrder
    comment_count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type articleSumOrderByAggregateInput = {
    id?: SortOrder
    userno?: SortOrder
    like_count?: SortOrder
    dislike_count?: SortOrder
    comment_count?: SortOrder
  }

  export type ArticleRelationFilter = {
    is?: articleWhereInput
    isNot?: articleWhereInput
  }

  export type articleCommentsCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userno?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type articleCommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userno?: SortOrder
  }

  export type articleCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userno?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type articleCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userno?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type articleCommentsSumOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userno?: SortOrder
  }

  export type EnumarticleLikes_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.articleLikes_type | EnumarticleLikes_typeFieldRefInput<$PrismaModel>
    in?: $Enums.articleLikes_type[]
    notIn?: $Enums.articleLikes_type[]
    not?: NestedEnumarticleLikes_typeFilter<$PrismaModel> | $Enums.articleLikes_type
  }

  export type articleLikesArticle_idUsernoTypeCompoundUniqueInput = {
    article_id: number
    userno: number
    type: $Enums.articleLikes_type
  }

  export type articleLikesCountOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    userno?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type articleLikesAvgOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    userno?: SortOrder
  }

  export type articleLikesMaxOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    userno?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type articleLikesMinOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    userno?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type articleLikesSumOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    userno?: SortOrder
  }

  export type EnumarticleLikes_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.articleLikes_type | EnumarticleLikes_typeFieldRefInput<$PrismaModel>
    in?: $Enums.articleLikes_type[]
    notIn?: $Enums.articleLikes_type[]
    not?: NestedEnumarticleLikes_typeWithAggregatesFilter<$PrismaModel> | $Enums.articleLikes_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumarticleLikes_typeFilter<$PrismaModel>
    _max?: NestedEnumarticleLikes_typeFilter<$PrismaModel>
  }

  export type MatchPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    movieTitle?: SortOrder
    theaterName?: SortOrder
    showTime?: SortOrder
    maxParticipants?: SortOrder
    location?: SortOrder
    userno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MatchPostAvgOrderByAggregateInput = {
    maxParticipants?: SortOrder
    userno?: SortOrder
  }

  export type MatchPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    movieTitle?: SortOrder
    theaterName?: SortOrder
    showTime?: SortOrder
    maxParticipants?: SortOrder
    location?: SortOrder
    userno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MatchPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    movieTitle?: SortOrder
    theaterName?: SortOrder
    showTime?: SortOrder
    maxParticipants?: SortOrder
    location?: SortOrder
    userno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MatchPostSumOrderByAggregateInput = {
    maxParticipants?: SortOrder
    userno?: SortOrder
  }

  export type EnumMatchApplication_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchApplication_status | EnumMatchApplication_statusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchApplication_status[]
    notIn?: $Enums.MatchApplication_status[]
    not?: NestedEnumMatchApplication_statusFilter<$PrismaModel> | $Enums.MatchApplication_status
  }

  export type MatchPostRelationFilter = {
    is?: MatchPostWhereInput
    isNot?: MatchPostWhereInput
  }

  export type MatchApplicationMatchPostIdApplicantUsernoCompoundUniqueInput = {
    matchPostId: string
    applicantUserno: number
  }

  export type MatchApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    matchPostId?: SortOrder
    applicantUserno?: SortOrder
    applicantName?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchApplicationAvgOrderByAggregateInput = {
    applicantUserno?: SortOrder
  }

  export type MatchApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    matchPostId?: SortOrder
    applicantUserno?: SortOrder
    applicantName?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    matchPostId?: SortOrder
    applicantUserno?: SortOrder
    applicantName?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchApplicationSumOrderByAggregateInput = {
    applicantUserno?: SortOrder
  }

  export type EnumMatchApplication_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchApplication_status | EnumMatchApplication_statusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchApplication_status[]
    notIn?: $Enums.MatchApplication_status[]
    not?: NestedEnumMatchApplication_statusWithAggregatesFilter<$PrismaModel> | $Enums.MatchApplication_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchApplication_statusFilter<$PrismaModel>
    _max?: NestedEnumMatchApplication_statusFilter<$PrismaModel>
  }

  export type EnumChatRoom_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRoom_type | EnumChatRoom_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRoom_type[]
    notIn?: $Enums.ChatRoom_type[]
    not?: NestedEnumChatRoom_typeFilter<$PrismaModel> | $Enums.ChatRoom_type
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumChatRoom_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRoom_type | EnumChatRoom_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRoom_type[]
    notIn?: $Enums.ChatRoom_type[]
    not?: NestedEnumChatRoom_typeWithAggregatesFilter<$PrismaModel> | $Enums.ChatRoom_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatRoom_typeFilter<$PrismaModel>
    _max?: NestedEnumChatRoom_typeFilter<$PrismaModel>
  }

  export type ChatRoomRelationFilter = {
    is?: ChatRoomWhereInput
    isNot?: ChatRoomWhereInput
  }

  export type ChatRoomMemberChatRoomIdUserIdCompoundUniqueInput = {
    chatRoomId: string
    userId: number
  }

  export type ChatRoomMemberCountOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type ChatRoomMemberAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ChatRoomMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type ChatRoomMemberMinOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type ChatRoomMemberSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatMessageAvgOrderByAggregateInput = {
    senderId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatMessageSumOrderByAggregateInput = {
    senderId?: SortOrder
  }

  export type MovieCreateNestedOneWithoutCommentInput = {
    create?: XOR<MovieCreateWithoutCommentInput, MovieUncheckedCreateWithoutCommentInput>
    connectOrCreate?: MovieCreateOrConnectWithoutCommentInput
    connect?: MovieWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MovieUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<MovieCreateWithoutCommentInput, MovieUncheckedCreateWithoutCommentInput>
    connectOrCreate?: MovieCreateOrConnectWithoutCommentInput
    upsert?: MovieUpsertWithoutCommentInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutCommentInput, MovieUpdateWithoutCommentInput>, MovieUncheckedUpdateWithoutCommentInput>
  }

  export type UserUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentInput, UserUpdateWithoutCommentInput>, UserUncheckedUpdateWithoutCommentInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentCreateNestedManyWithoutMovieInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type MovieVodCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieVodCreateWithoutMovieInput, MovieVodUncheckedCreateWithoutMovieInput> | MovieVodCreateWithoutMovieInput[] | MovieVodUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieVodCreateOrConnectWithoutMovieInput | MovieVodCreateOrConnectWithoutMovieInput[]
    createMany?: MovieVodCreateManyMovieInputEnvelope
    connect?: MovieVodWhereUniqueInput | MovieVodWhereUniqueInput[]
  }

  export type movieScoreCreateNestedManyWithoutMovieInput = {
    create?: XOR<movieScoreCreateWithoutMovieInput, movieScoreUncheckedCreateWithoutMovieInput> | movieScoreCreateWithoutMovieInput[] | movieScoreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: movieScoreCreateOrConnectWithoutMovieInput | movieScoreCreateOrConnectWithoutMovieInput[]
    createMany?: movieScoreCreateManyMovieInputEnvelope
    connect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type MovieVodUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieVodCreateWithoutMovieInput, MovieVodUncheckedCreateWithoutMovieInput> | MovieVodCreateWithoutMovieInput[] | MovieVodUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieVodCreateOrConnectWithoutMovieInput | MovieVodCreateOrConnectWithoutMovieInput[]
    createMany?: MovieVodCreateManyMovieInputEnvelope
    connect?: MovieVodWhereUniqueInput | MovieVodWhereUniqueInput[]
  }

  export type movieScoreUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<movieScoreCreateWithoutMovieInput, movieScoreUncheckedCreateWithoutMovieInput> | movieScoreCreateWithoutMovieInput[] | movieScoreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: movieScoreCreateOrConnectWithoutMovieInput | movieScoreCreateOrConnectWithoutMovieInput[]
    createMany?: movieScoreCreateManyMovieInputEnvelope
    connect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type CommentUpdateManyWithoutMovieNestedInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMovieInput | CommentUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMovieInput | CommentUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMovieInput | CommentUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type MovieVodUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieVodCreateWithoutMovieInput, MovieVodUncheckedCreateWithoutMovieInput> | MovieVodCreateWithoutMovieInput[] | MovieVodUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieVodCreateOrConnectWithoutMovieInput | MovieVodCreateOrConnectWithoutMovieInput[]
    upsert?: MovieVodUpsertWithWhereUniqueWithoutMovieInput | MovieVodUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieVodCreateManyMovieInputEnvelope
    set?: MovieVodWhereUniqueInput | MovieVodWhereUniqueInput[]
    disconnect?: MovieVodWhereUniqueInput | MovieVodWhereUniqueInput[]
    delete?: MovieVodWhereUniqueInput | MovieVodWhereUniqueInput[]
    connect?: MovieVodWhereUniqueInput | MovieVodWhereUniqueInput[]
    update?: MovieVodUpdateWithWhereUniqueWithoutMovieInput | MovieVodUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieVodUpdateManyWithWhereWithoutMovieInput | MovieVodUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieVodScalarWhereInput | MovieVodScalarWhereInput[]
  }

  export type movieScoreUpdateManyWithoutMovieNestedInput = {
    create?: XOR<movieScoreCreateWithoutMovieInput, movieScoreUncheckedCreateWithoutMovieInput> | movieScoreCreateWithoutMovieInput[] | movieScoreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: movieScoreCreateOrConnectWithoutMovieInput | movieScoreCreateOrConnectWithoutMovieInput[]
    upsert?: movieScoreUpsertWithWhereUniqueWithoutMovieInput | movieScoreUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: movieScoreCreateManyMovieInputEnvelope
    set?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    disconnect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    delete?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    connect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    update?: movieScoreUpdateWithWhereUniqueWithoutMovieInput | movieScoreUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: movieScoreUpdateManyWithWhereWithoutMovieInput | movieScoreUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: movieScoreScalarWhereInput | movieScoreScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMovieInput | CommentUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMovieInput | CommentUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMovieInput | CommentUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type MovieVodUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieVodCreateWithoutMovieInput, MovieVodUncheckedCreateWithoutMovieInput> | MovieVodCreateWithoutMovieInput[] | MovieVodUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieVodCreateOrConnectWithoutMovieInput | MovieVodCreateOrConnectWithoutMovieInput[]
    upsert?: MovieVodUpsertWithWhereUniqueWithoutMovieInput | MovieVodUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieVodCreateManyMovieInputEnvelope
    set?: MovieVodWhereUniqueInput | MovieVodWhereUniqueInput[]
    disconnect?: MovieVodWhereUniqueInput | MovieVodWhereUniqueInput[]
    delete?: MovieVodWhereUniqueInput | MovieVodWhereUniqueInput[]
    connect?: MovieVodWhereUniqueInput | MovieVodWhereUniqueInput[]
    update?: MovieVodUpdateWithWhereUniqueWithoutMovieInput | MovieVodUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieVodUpdateManyWithWhereWithoutMovieInput | MovieVodUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieVodScalarWhereInput | MovieVodScalarWhereInput[]
  }

  export type movieScoreUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<movieScoreCreateWithoutMovieInput, movieScoreUncheckedCreateWithoutMovieInput> | movieScoreCreateWithoutMovieInput[] | movieScoreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: movieScoreCreateOrConnectWithoutMovieInput | movieScoreCreateOrConnectWithoutMovieInput[]
    upsert?: movieScoreUpsertWithWhereUniqueWithoutMovieInput | movieScoreUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: movieScoreCreateManyMovieInputEnvelope
    set?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    disconnect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    delete?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    connect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    update?: movieScoreUpdateWithWhereUniqueWithoutMovieInput | movieScoreUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: movieScoreUpdateManyWithWhereWithoutMovieInput | movieScoreUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: movieScoreScalarWhereInput | movieScoreScalarWhereInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type articleCreateNestedManyWithoutUserInput = {
    create?: XOR<articleCreateWithoutUserInput, articleUncheckedCreateWithoutUserInput> | articleCreateWithoutUserInput[] | articleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleCreateOrConnectWithoutUserInput | articleCreateOrConnectWithoutUserInput[]
    createMany?: articleCreateManyUserInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type articleCommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<articleCommentsCreateWithoutUserInput, articleCommentsUncheckedCreateWithoutUserInput> | articleCommentsCreateWithoutUserInput[] | articleCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleCommentsCreateOrConnectWithoutUserInput | articleCommentsCreateOrConnectWithoutUserInput[]
    createMany?: articleCommentsCreateManyUserInputEnvelope
    connect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
  }

  export type articleLikesCreateNestedManyWithoutUserInput = {
    create?: XOR<articleLikesCreateWithoutUserInput, articleLikesUncheckedCreateWithoutUserInput> | articleLikesCreateWithoutUserInput[] | articleLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleLikesCreateOrConnectWithoutUserInput | articleLikesCreateOrConnectWithoutUserInput[]
    createMany?: articleLikesCreateManyUserInputEnvelope
    connect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
  }

  export type movieScoreCreateNestedManyWithoutUserInput = {
    create?: XOR<movieScoreCreateWithoutUserInput, movieScoreUncheckedCreateWithoutUserInput> | movieScoreCreateWithoutUserInput[] | movieScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: movieScoreCreateOrConnectWithoutUserInput | movieScoreCreateOrConnectWithoutUserInput[]
    createMany?: movieScoreCreateManyUserInputEnvelope
    connect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
  }

  export type MatchPostCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchPostCreateWithoutUserInput, MatchPostUncheckedCreateWithoutUserInput> | MatchPostCreateWithoutUserInput[] | MatchPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchPostCreateOrConnectWithoutUserInput | MatchPostCreateOrConnectWithoutUserInput[]
    createMany?: MatchPostCreateManyUserInputEnvelope
    connect?: MatchPostWhereUniqueInput | MatchPostWhereUniqueInput[]
  }

  export type MatchApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchApplicationCreateWithoutUserInput, MatchApplicationUncheckedCreateWithoutUserInput> | MatchApplicationCreateWithoutUserInput[] | MatchApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutUserInput | MatchApplicationCreateOrConnectWithoutUserInput[]
    createMany?: MatchApplicationCreateManyUserInputEnvelope
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
  }

  export type ChatRoomMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type articleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<articleCreateWithoutUserInput, articleUncheckedCreateWithoutUserInput> | articleCreateWithoutUserInput[] | articleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleCreateOrConnectWithoutUserInput | articleCreateOrConnectWithoutUserInput[]
    createMany?: articleCreateManyUserInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type articleCommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<articleCommentsCreateWithoutUserInput, articleCommentsUncheckedCreateWithoutUserInput> | articleCommentsCreateWithoutUserInput[] | articleCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleCommentsCreateOrConnectWithoutUserInput | articleCommentsCreateOrConnectWithoutUserInput[]
    createMany?: articleCommentsCreateManyUserInputEnvelope
    connect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
  }

  export type articleLikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<articleLikesCreateWithoutUserInput, articleLikesUncheckedCreateWithoutUserInput> | articleLikesCreateWithoutUserInput[] | articleLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleLikesCreateOrConnectWithoutUserInput | articleLikesCreateOrConnectWithoutUserInput[]
    createMany?: articleLikesCreateManyUserInputEnvelope
    connect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
  }

  export type movieScoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<movieScoreCreateWithoutUserInput, movieScoreUncheckedCreateWithoutUserInput> | movieScoreCreateWithoutUserInput[] | movieScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: movieScoreCreateOrConnectWithoutUserInput | movieScoreCreateOrConnectWithoutUserInput[]
    createMany?: movieScoreCreateManyUserInputEnvelope
    connect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
  }

  export type MatchPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchPostCreateWithoutUserInput, MatchPostUncheckedCreateWithoutUserInput> | MatchPostCreateWithoutUserInput[] | MatchPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchPostCreateOrConnectWithoutUserInput | MatchPostCreateOrConnectWithoutUserInput[]
    createMany?: MatchPostCreateManyUserInputEnvelope
    connect?: MatchPostWhereUniqueInput | MatchPostWhereUniqueInput[]
  }

  export type MatchApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchApplicationCreateWithoutUserInput, MatchApplicationUncheckedCreateWithoutUserInput> | MatchApplicationCreateWithoutUserInput[] | MatchApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutUserInput | MatchApplicationCreateOrConnectWithoutUserInput[]
    createMany?: MatchApplicationCreateManyUserInputEnvelope
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
  }

  export type ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumUser_genderFieldUpdateOperationsInput = {
    set?: $Enums.User_gender | null
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type articleUpdateManyWithoutUserNestedInput = {
    create?: XOR<articleCreateWithoutUserInput, articleUncheckedCreateWithoutUserInput> | articleCreateWithoutUserInput[] | articleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleCreateOrConnectWithoutUserInput | articleCreateOrConnectWithoutUserInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutUserInput | articleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: articleCreateManyUserInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutUserInput | articleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: articleUpdateManyWithWhereWithoutUserInput | articleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type articleCommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<articleCommentsCreateWithoutUserInput, articleCommentsUncheckedCreateWithoutUserInput> | articleCommentsCreateWithoutUserInput[] | articleCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleCommentsCreateOrConnectWithoutUserInput | articleCommentsCreateOrConnectWithoutUserInput[]
    upsert?: articleCommentsUpsertWithWhereUniqueWithoutUserInput | articleCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: articleCommentsCreateManyUserInputEnvelope
    set?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    disconnect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    delete?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    connect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    update?: articleCommentsUpdateWithWhereUniqueWithoutUserInput | articleCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: articleCommentsUpdateManyWithWhereWithoutUserInput | articleCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: articleCommentsScalarWhereInput | articleCommentsScalarWhereInput[]
  }

  export type articleLikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<articleLikesCreateWithoutUserInput, articleLikesUncheckedCreateWithoutUserInput> | articleLikesCreateWithoutUserInput[] | articleLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleLikesCreateOrConnectWithoutUserInput | articleLikesCreateOrConnectWithoutUserInput[]
    upsert?: articleLikesUpsertWithWhereUniqueWithoutUserInput | articleLikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: articleLikesCreateManyUserInputEnvelope
    set?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    disconnect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    delete?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    connect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    update?: articleLikesUpdateWithWhereUniqueWithoutUserInput | articleLikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: articleLikesUpdateManyWithWhereWithoutUserInput | articleLikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: articleLikesScalarWhereInput | articleLikesScalarWhereInput[]
  }

  export type movieScoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<movieScoreCreateWithoutUserInput, movieScoreUncheckedCreateWithoutUserInput> | movieScoreCreateWithoutUserInput[] | movieScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: movieScoreCreateOrConnectWithoutUserInput | movieScoreCreateOrConnectWithoutUserInput[]
    upsert?: movieScoreUpsertWithWhereUniqueWithoutUserInput | movieScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: movieScoreCreateManyUserInputEnvelope
    set?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    disconnect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    delete?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    connect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    update?: movieScoreUpdateWithWhereUniqueWithoutUserInput | movieScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: movieScoreUpdateManyWithWhereWithoutUserInput | movieScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: movieScoreScalarWhereInput | movieScoreScalarWhereInput[]
  }

  export type MatchPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchPostCreateWithoutUserInput, MatchPostUncheckedCreateWithoutUserInput> | MatchPostCreateWithoutUserInput[] | MatchPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchPostCreateOrConnectWithoutUserInput | MatchPostCreateOrConnectWithoutUserInput[]
    upsert?: MatchPostUpsertWithWhereUniqueWithoutUserInput | MatchPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchPostCreateManyUserInputEnvelope
    set?: MatchPostWhereUniqueInput | MatchPostWhereUniqueInput[]
    disconnect?: MatchPostWhereUniqueInput | MatchPostWhereUniqueInput[]
    delete?: MatchPostWhereUniqueInput | MatchPostWhereUniqueInput[]
    connect?: MatchPostWhereUniqueInput | MatchPostWhereUniqueInput[]
    update?: MatchPostUpdateWithWhereUniqueWithoutUserInput | MatchPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchPostUpdateManyWithWhereWithoutUserInput | MatchPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchPostScalarWhereInput | MatchPostScalarWhereInput[]
  }

  export type MatchApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchApplicationCreateWithoutUserInput, MatchApplicationUncheckedCreateWithoutUserInput> | MatchApplicationCreateWithoutUserInput[] | MatchApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutUserInput | MatchApplicationCreateOrConnectWithoutUserInput[]
    upsert?: MatchApplicationUpsertWithWhereUniqueWithoutUserInput | MatchApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchApplicationCreateManyUserInputEnvelope
    set?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    disconnect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    delete?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    update?: MatchApplicationUpdateWithWhereUniqueWithoutUserInput | MatchApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchApplicationUpdateManyWithWhereWithoutUserInput | MatchApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
  }

  export type ChatRoomMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput | ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput | ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutUserInput | ChatRoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type articleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<articleCreateWithoutUserInput, articleUncheckedCreateWithoutUserInput> | articleCreateWithoutUserInput[] | articleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleCreateOrConnectWithoutUserInput | articleCreateOrConnectWithoutUserInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutUserInput | articleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: articleCreateManyUserInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutUserInput | articleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: articleUpdateManyWithWhereWithoutUserInput | articleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type articleCommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<articleCommentsCreateWithoutUserInput, articleCommentsUncheckedCreateWithoutUserInput> | articleCommentsCreateWithoutUserInput[] | articleCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleCommentsCreateOrConnectWithoutUserInput | articleCommentsCreateOrConnectWithoutUserInput[]
    upsert?: articleCommentsUpsertWithWhereUniqueWithoutUserInput | articleCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: articleCommentsCreateManyUserInputEnvelope
    set?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    disconnect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    delete?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    connect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    update?: articleCommentsUpdateWithWhereUniqueWithoutUserInput | articleCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: articleCommentsUpdateManyWithWhereWithoutUserInput | articleCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: articleCommentsScalarWhereInput | articleCommentsScalarWhereInput[]
  }

  export type articleLikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<articleLikesCreateWithoutUserInput, articleLikesUncheckedCreateWithoutUserInput> | articleLikesCreateWithoutUserInput[] | articleLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: articleLikesCreateOrConnectWithoutUserInput | articleLikesCreateOrConnectWithoutUserInput[]
    upsert?: articleLikesUpsertWithWhereUniqueWithoutUserInput | articleLikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: articleLikesCreateManyUserInputEnvelope
    set?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    disconnect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    delete?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    connect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    update?: articleLikesUpdateWithWhereUniqueWithoutUserInput | articleLikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: articleLikesUpdateManyWithWhereWithoutUserInput | articleLikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: articleLikesScalarWhereInput | articleLikesScalarWhereInput[]
  }

  export type movieScoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<movieScoreCreateWithoutUserInput, movieScoreUncheckedCreateWithoutUserInput> | movieScoreCreateWithoutUserInput[] | movieScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: movieScoreCreateOrConnectWithoutUserInput | movieScoreCreateOrConnectWithoutUserInput[]
    upsert?: movieScoreUpsertWithWhereUniqueWithoutUserInput | movieScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: movieScoreCreateManyUserInputEnvelope
    set?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    disconnect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    delete?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    connect?: movieScoreWhereUniqueInput | movieScoreWhereUniqueInput[]
    update?: movieScoreUpdateWithWhereUniqueWithoutUserInput | movieScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: movieScoreUpdateManyWithWhereWithoutUserInput | movieScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: movieScoreScalarWhereInput | movieScoreScalarWhereInput[]
  }

  export type MatchPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchPostCreateWithoutUserInput, MatchPostUncheckedCreateWithoutUserInput> | MatchPostCreateWithoutUserInput[] | MatchPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchPostCreateOrConnectWithoutUserInput | MatchPostCreateOrConnectWithoutUserInput[]
    upsert?: MatchPostUpsertWithWhereUniqueWithoutUserInput | MatchPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchPostCreateManyUserInputEnvelope
    set?: MatchPostWhereUniqueInput | MatchPostWhereUniqueInput[]
    disconnect?: MatchPostWhereUniqueInput | MatchPostWhereUniqueInput[]
    delete?: MatchPostWhereUniqueInput | MatchPostWhereUniqueInput[]
    connect?: MatchPostWhereUniqueInput | MatchPostWhereUniqueInput[]
    update?: MatchPostUpdateWithWhereUniqueWithoutUserInput | MatchPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchPostUpdateManyWithWhereWithoutUserInput | MatchPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchPostScalarWhereInput | MatchPostScalarWhereInput[]
  }

  export type MatchApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchApplicationCreateWithoutUserInput, MatchApplicationUncheckedCreateWithoutUserInput> | MatchApplicationCreateWithoutUserInput[] | MatchApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutUserInput | MatchApplicationCreateOrConnectWithoutUserInput[]
    upsert?: MatchApplicationUpsertWithWhereUniqueWithoutUserInput | MatchApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchApplicationCreateManyUserInputEnvelope
    set?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    disconnect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    delete?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    update?: MatchApplicationUpdateWithWhereUniqueWithoutUserInput | MatchApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchApplicationUpdateManyWithWhereWithoutUserInput | MatchApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput | ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput | ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutUserInput | ChatRoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMovieScoresInput = {
    create?: XOR<UserCreateWithoutMovieScoresInput, UserUncheckedCreateWithoutMovieScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovieScoresInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutMovieScoresInput = {
    create?: XOR<MovieCreateWithoutMovieScoresInput, MovieUncheckedCreateWithoutMovieScoresInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieScoresInput
    connect?: MovieWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMovieScoresNestedInput = {
    create?: XOR<UserCreateWithoutMovieScoresInput, UserUncheckedCreateWithoutMovieScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovieScoresInput
    upsert?: UserUpsertWithoutMovieScoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMovieScoresInput, UserUpdateWithoutMovieScoresInput>, UserUncheckedUpdateWithoutMovieScoresInput>
  }

  export type MovieUpdateOneRequiredWithoutMovieScoresNestedInput = {
    create?: XOR<MovieCreateWithoutMovieScoresInput, MovieUncheckedCreateWithoutMovieScoresInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieScoresInput
    upsert?: MovieUpsertWithoutMovieScoresInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutMovieScoresInput, MovieUpdateWithoutMovieScoresInput>, MovieUncheckedUpdateWithoutMovieScoresInput>
  }

  export type MovieCreateNestedOneWithoutMovieVodInput = {
    create?: XOR<MovieCreateWithoutMovieVodInput, MovieUncheckedCreateWithoutMovieVodInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieVodInput
    connect?: MovieWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutMovieVodNestedInput = {
    create?: XOR<MovieCreateWithoutMovieVodInput, MovieUncheckedCreateWithoutMovieVodInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieVodInput
    upsert?: MovieUpsertWithoutMovieVodInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutMovieVodInput, MovieUpdateWithoutMovieVodInput>, MovieUncheckedUpdateWithoutMovieVodInput>
  }

  export type UserCreateNestedOneWithoutArticleInput = {
    create?: XOR<UserCreateWithoutArticleInput, UserUncheckedCreateWithoutArticleInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleInput
    connect?: UserWhereUniqueInput
  }

  export type articleCommentsCreateNestedManyWithoutArticleInput = {
    create?: XOR<articleCommentsCreateWithoutArticleInput, articleCommentsUncheckedCreateWithoutArticleInput> | articleCommentsCreateWithoutArticleInput[] | articleCommentsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: articleCommentsCreateOrConnectWithoutArticleInput | articleCommentsCreateOrConnectWithoutArticleInput[]
    createMany?: articleCommentsCreateManyArticleInputEnvelope
    connect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
  }

  export type articleLikesCreateNestedManyWithoutArticleInput = {
    create?: XOR<articleLikesCreateWithoutArticleInput, articleLikesUncheckedCreateWithoutArticleInput> | articleLikesCreateWithoutArticleInput[] | articleLikesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: articleLikesCreateOrConnectWithoutArticleInput | articleLikesCreateOrConnectWithoutArticleInput[]
    createMany?: articleLikesCreateManyArticleInputEnvelope
    connect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
  }

  export type articleCommentsUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<articleCommentsCreateWithoutArticleInput, articleCommentsUncheckedCreateWithoutArticleInput> | articleCommentsCreateWithoutArticleInput[] | articleCommentsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: articleCommentsCreateOrConnectWithoutArticleInput | articleCommentsCreateOrConnectWithoutArticleInput[]
    createMany?: articleCommentsCreateManyArticleInputEnvelope
    connect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
  }

  export type articleLikesUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<articleLikesCreateWithoutArticleInput, articleLikesUncheckedCreateWithoutArticleInput> | articleLikesCreateWithoutArticleInput[] | articleLikesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: articleLikesCreateOrConnectWithoutArticleInput | articleLikesCreateOrConnectWithoutArticleInput[]
    createMany?: articleLikesCreateManyArticleInputEnvelope
    connect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutArticleNestedInput = {
    create?: XOR<UserCreateWithoutArticleInput, UserUncheckedCreateWithoutArticleInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleInput
    upsert?: UserUpsertWithoutArticleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticleInput, UserUpdateWithoutArticleInput>, UserUncheckedUpdateWithoutArticleInput>
  }

  export type articleCommentsUpdateManyWithoutArticleNestedInput = {
    create?: XOR<articleCommentsCreateWithoutArticleInput, articleCommentsUncheckedCreateWithoutArticleInput> | articleCommentsCreateWithoutArticleInput[] | articleCommentsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: articleCommentsCreateOrConnectWithoutArticleInput | articleCommentsCreateOrConnectWithoutArticleInput[]
    upsert?: articleCommentsUpsertWithWhereUniqueWithoutArticleInput | articleCommentsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: articleCommentsCreateManyArticleInputEnvelope
    set?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    disconnect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    delete?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    connect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    update?: articleCommentsUpdateWithWhereUniqueWithoutArticleInput | articleCommentsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: articleCommentsUpdateManyWithWhereWithoutArticleInput | articleCommentsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: articleCommentsScalarWhereInput | articleCommentsScalarWhereInput[]
  }

  export type articleLikesUpdateManyWithoutArticleNestedInput = {
    create?: XOR<articleLikesCreateWithoutArticleInput, articleLikesUncheckedCreateWithoutArticleInput> | articleLikesCreateWithoutArticleInput[] | articleLikesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: articleLikesCreateOrConnectWithoutArticleInput | articleLikesCreateOrConnectWithoutArticleInput[]
    upsert?: articleLikesUpsertWithWhereUniqueWithoutArticleInput | articleLikesUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: articleLikesCreateManyArticleInputEnvelope
    set?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    disconnect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    delete?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    connect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    update?: articleLikesUpdateWithWhereUniqueWithoutArticleInput | articleLikesUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: articleLikesUpdateManyWithWhereWithoutArticleInput | articleLikesUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: articleLikesScalarWhereInput | articleLikesScalarWhereInput[]
  }

  export type articleCommentsUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<articleCommentsCreateWithoutArticleInput, articleCommentsUncheckedCreateWithoutArticleInput> | articleCommentsCreateWithoutArticleInput[] | articleCommentsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: articleCommentsCreateOrConnectWithoutArticleInput | articleCommentsCreateOrConnectWithoutArticleInput[]
    upsert?: articleCommentsUpsertWithWhereUniqueWithoutArticleInput | articleCommentsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: articleCommentsCreateManyArticleInputEnvelope
    set?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    disconnect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    delete?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    connect?: articleCommentsWhereUniqueInput | articleCommentsWhereUniqueInput[]
    update?: articleCommentsUpdateWithWhereUniqueWithoutArticleInput | articleCommentsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: articleCommentsUpdateManyWithWhereWithoutArticleInput | articleCommentsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: articleCommentsScalarWhereInput | articleCommentsScalarWhereInput[]
  }

  export type articleLikesUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<articleLikesCreateWithoutArticleInput, articleLikesUncheckedCreateWithoutArticleInput> | articleLikesCreateWithoutArticleInput[] | articleLikesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: articleLikesCreateOrConnectWithoutArticleInput | articleLikesCreateOrConnectWithoutArticleInput[]
    upsert?: articleLikesUpsertWithWhereUniqueWithoutArticleInput | articleLikesUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: articleLikesCreateManyArticleInputEnvelope
    set?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    disconnect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    delete?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    connect?: articleLikesWhereUniqueInput | articleLikesWhereUniqueInput[]
    update?: articleLikesUpdateWithWhereUniqueWithoutArticleInput | articleLikesUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: articleLikesUpdateManyWithWhereWithoutArticleInput | articleLikesUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: articleLikesScalarWhereInput | articleLikesScalarWhereInput[]
  }

  export type articleCreateNestedOneWithoutArticleCommentsInput = {
    create?: XOR<articleCreateWithoutArticleCommentsInput, articleUncheckedCreateWithoutArticleCommentsInput>
    connectOrCreate?: articleCreateOrConnectWithoutArticleCommentsInput
    connect?: articleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArticleCommentsInput = {
    create?: XOR<UserCreateWithoutArticleCommentsInput, UserUncheckedCreateWithoutArticleCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type articleUpdateOneRequiredWithoutArticleCommentsNestedInput = {
    create?: XOR<articleCreateWithoutArticleCommentsInput, articleUncheckedCreateWithoutArticleCommentsInput>
    connectOrCreate?: articleCreateOrConnectWithoutArticleCommentsInput
    upsert?: articleUpsertWithoutArticleCommentsInput
    connect?: articleWhereUniqueInput
    update?: XOR<XOR<articleUpdateToOneWithWhereWithoutArticleCommentsInput, articleUpdateWithoutArticleCommentsInput>, articleUncheckedUpdateWithoutArticleCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutArticleCommentsNestedInput = {
    create?: XOR<UserCreateWithoutArticleCommentsInput, UserUncheckedCreateWithoutArticleCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleCommentsInput
    upsert?: UserUpsertWithoutArticleCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticleCommentsInput, UserUpdateWithoutArticleCommentsInput>, UserUncheckedUpdateWithoutArticleCommentsInput>
  }

  export type articleCreateNestedOneWithoutArticleLikesInput = {
    create?: XOR<articleCreateWithoutArticleLikesInput, articleUncheckedCreateWithoutArticleLikesInput>
    connectOrCreate?: articleCreateOrConnectWithoutArticleLikesInput
    connect?: articleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArticleLikesInput = {
    create?: XOR<UserCreateWithoutArticleLikesInput, UserUncheckedCreateWithoutArticleLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleLikesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumarticleLikes_typeFieldUpdateOperationsInput = {
    set?: $Enums.articleLikes_type
  }

  export type articleUpdateOneRequiredWithoutArticleLikesNestedInput = {
    create?: XOR<articleCreateWithoutArticleLikesInput, articleUncheckedCreateWithoutArticleLikesInput>
    connectOrCreate?: articleCreateOrConnectWithoutArticleLikesInput
    upsert?: articleUpsertWithoutArticleLikesInput
    connect?: articleWhereUniqueInput
    update?: XOR<XOR<articleUpdateToOneWithWhereWithoutArticleLikesInput, articleUpdateWithoutArticleLikesInput>, articleUncheckedUpdateWithoutArticleLikesInput>
  }

  export type UserUpdateOneRequiredWithoutArticleLikesNestedInput = {
    create?: XOR<UserCreateWithoutArticleLikesInput, UserUncheckedCreateWithoutArticleLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleLikesInput
    upsert?: UserUpsertWithoutArticleLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticleLikesInput, UserUpdateWithoutArticleLikesInput>, UserUncheckedUpdateWithoutArticleLikesInput>
  }

  export type UserCreateNestedOneWithoutMatchPostInput = {
    create?: XOR<UserCreateWithoutMatchPostInput, UserUncheckedCreateWithoutMatchPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchPostInput
    connect?: UserWhereUniqueInput
  }

  export type MatchApplicationCreateNestedManyWithoutMatchPostInput = {
    create?: XOR<MatchApplicationCreateWithoutMatchPostInput, MatchApplicationUncheckedCreateWithoutMatchPostInput> | MatchApplicationCreateWithoutMatchPostInput[] | MatchApplicationUncheckedCreateWithoutMatchPostInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutMatchPostInput | MatchApplicationCreateOrConnectWithoutMatchPostInput[]
    createMany?: MatchApplicationCreateManyMatchPostInputEnvelope
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
  }

  export type MatchApplicationUncheckedCreateNestedManyWithoutMatchPostInput = {
    create?: XOR<MatchApplicationCreateWithoutMatchPostInput, MatchApplicationUncheckedCreateWithoutMatchPostInput> | MatchApplicationCreateWithoutMatchPostInput[] | MatchApplicationUncheckedCreateWithoutMatchPostInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutMatchPostInput | MatchApplicationCreateOrConnectWithoutMatchPostInput[]
    createMany?: MatchApplicationCreateManyMatchPostInputEnvelope
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMatchPostNestedInput = {
    create?: XOR<UserCreateWithoutMatchPostInput, UserUncheckedCreateWithoutMatchPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchPostInput
    upsert?: UserUpsertWithoutMatchPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchPostInput, UserUpdateWithoutMatchPostInput>, UserUncheckedUpdateWithoutMatchPostInput>
  }

  export type MatchApplicationUpdateManyWithoutMatchPostNestedInput = {
    create?: XOR<MatchApplicationCreateWithoutMatchPostInput, MatchApplicationUncheckedCreateWithoutMatchPostInput> | MatchApplicationCreateWithoutMatchPostInput[] | MatchApplicationUncheckedCreateWithoutMatchPostInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutMatchPostInput | MatchApplicationCreateOrConnectWithoutMatchPostInput[]
    upsert?: MatchApplicationUpsertWithWhereUniqueWithoutMatchPostInput | MatchApplicationUpsertWithWhereUniqueWithoutMatchPostInput[]
    createMany?: MatchApplicationCreateManyMatchPostInputEnvelope
    set?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    disconnect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    delete?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    update?: MatchApplicationUpdateWithWhereUniqueWithoutMatchPostInput | MatchApplicationUpdateWithWhereUniqueWithoutMatchPostInput[]
    updateMany?: MatchApplicationUpdateManyWithWhereWithoutMatchPostInput | MatchApplicationUpdateManyWithWhereWithoutMatchPostInput[]
    deleteMany?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
  }

  export type MatchApplicationUncheckedUpdateManyWithoutMatchPostNestedInput = {
    create?: XOR<MatchApplicationCreateWithoutMatchPostInput, MatchApplicationUncheckedCreateWithoutMatchPostInput> | MatchApplicationCreateWithoutMatchPostInput[] | MatchApplicationUncheckedCreateWithoutMatchPostInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutMatchPostInput | MatchApplicationCreateOrConnectWithoutMatchPostInput[]
    upsert?: MatchApplicationUpsertWithWhereUniqueWithoutMatchPostInput | MatchApplicationUpsertWithWhereUniqueWithoutMatchPostInput[]
    createMany?: MatchApplicationCreateManyMatchPostInputEnvelope
    set?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    disconnect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    delete?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    update?: MatchApplicationUpdateWithWhereUniqueWithoutMatchPostInput | MatchApplicationUpdateWithWhereUniqueWithoutMatchPostInput[]
    updateMany?: MatchApplicationUpdateManyWithWhereWithoutMatchPostInput | MatchApplicationUpdateManyWithWhereWithoutMatchPostInput[]
    deleteMany?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
  }

  export type MatchPostCreateNestedOneWithoutMatchApplicationInput = {
    create?: XOR<MatchPostCreateWithoutMatchApplicationInput, MatchPostUncheckedCreateWithoutMatchApplicationInput>
    connectOrCreate?: MatchPostCreateOrConnectWithoutMatchApplicationInput
    connect?: MatchPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchApplicationInput = {
    create?: XOR<UserCreateWithoutMatchApplicationInput, UserUncheckedCreateWithoutMatchApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchApplicationInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMatchApplication_statusFieldUpdateOperationsInput = {
    set?: $Enums.MatchApplication_status
  }

  export type MatchPostUpdateOneRequiredWithoutMatchApplicationNestedInput = {
    create?: XOR<MatchPostCreateWithoutMatchApplicationInput, MatchPostUncheckedCreateWithoutMatchApplicationInput>
    connectOrCreate?: MatchPostCreateOrConnectWithoutMatchApplicationInput
    upsert?: MatchPostUpsertWithoutMatchApplicationInput
    connect?: MatchPostWhereUniqueInput
    update?: XOR<XOR<MatchPostUpdateToOneWithWhereWithoutMatchApplicationInput, MatchPostUpdateWithoutMatchApplicationInput>, MatchPostUncheckedUpdateWithoutMatchApplicationInput>
  }

  export type UserUpdateOneRequiredWithoutMatchApplicationNestedInput = {
    create?: XOR<UserCreateWithoutMatchApplicationInput, UserUncheckedCreateWithoutMatchApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchApplicationInput
    upsert?: UserUpsertWithoutMatchApplicationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchApplicationInput, UserUpdateWithoutMatchApplicationInput>, UserUncheckedUpdateWithoutMatchApplicationInput>
  }

  export type ChatMessageCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatRoomMemberCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput> | ChatRoomMemberCreateWithoutChatRoomInput[] | ChatRoomMemberUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutChatRoomInput | ChatRoomMemberCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatRoomMemberCreateManyChatRoomInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatRoomMemberUncheckedCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput> | ChatRoomMemberCreateWithoutChatRoomInput[] | ChatRoomMemberUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutChatRoomInput | ChatRoomMemberCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatRoomMemberCreateManyChatRoomInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type EnumChatRoom_typeFieldUpdateOperationsInput = {
    set?: $Enums.ChatRoom_type
  }

  export type ChatMessageUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput | ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput | ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatRoomInput | ChatMessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomMemberUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput> | ChatRoomMemberCreateWithoutChatRoomInput[] | ChatRoomMemberUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutChatRoomInput | ChatRoomMemberCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutChatRoomInput | ChatRoomMemberUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatRoomMemberCreateManyChatRoomInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutChatRoomInput | ChatRoomMemberUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutChatRoomInput | ChatRoomMemberUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput | ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput | ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatRoomInput | ChatMessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput> | ChatRoomMemberCreateWithoutChatRoomInput[] | ChatRoomMemberUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutChatRoomInput | ChatRoomMemberCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutChatRoomInput | ChatRoomMemberUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatRoomMemberCreateManyChatRoomInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutChatRoomInput | ChatRoomMemberUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutChatRoomInput | ChatRoomMemberUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type ChatRoomCreateNestedOneWithoutChatRoomMemberInput = {
    create?: XOR<ChatRoomCreateWithoutChatRoomMemberInput, ChatRoomUncheckedCreateWithoutChatRoomMemberInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatRoomMemberInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatRoomMemberInput = {
    create?: XOR<UserCreateWithoutChatRoomMemberInput, UserUncheckedCreateWithoutChatRoomMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomMemberInput
    connect?: UserWhereUniqueInput
  }

  export type ChatRoomUpdateOneRequiredWithoutChatRoomMemberNestedInput = {
    create?: XOR<ChatRoomCreateWithoutChatRoomMemberInput, ChatRoomUncheckedCreateWithoutChatRoomMemberInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatRoomMemberInput
    upsert?: ChatRoomUpsertWithoutChatRoomMemberInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutChatRoomMemberInput, ChatRoomUpdateWithoutChatRoomMemberInput>, ChatRoomUncheckedUpdateWithoutChatRoomMemberInput>
  }

  export type UserUpdateOneRequiredWithoutChatRoomMemberNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomMemberInput, UserUncheckedCreateWithoutChatRoomMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomMemberInput
    upsert?: UserUpsertWithoutChatRoomMemberInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatRoomMemberInput, UserUpdateWithoutChatRoomMemberInput>, UserUncheckedUpdateWithoutChatRoomMemberInput>
  }

  export type ChatRoomCreateNestedOneWithoutChatMessageInput = {
    create?: XOR<ChatRoomCreateWithoutChatMessageInput, ChatRoomUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatMessageInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMessageInput = {
    create?: XOR<UserCreateWithoutChatMessageInput, UserUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessageInput
    connect?: UserWhereUniqueInput
  }

  export type ChatRoomUpdateOneRequiredWithoutChatMessageNestedInput = {
    create?: XOR<ChatRoomCreateWithoutChatMessageInput, ChatRoomUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatMessageInput
    upsert?: ChatRoomUpsertWithoutChatMessageInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutChatMessageInput, ChatRoomUpdateWithoutChatMessageInput>, ChatRoomUncheckedUpdateWithoutChatMessageInput>
  }

  export type UserUpdateOneRequiredWithoutChatMessageNestedInput = {
    create?: XOR<UserCreateWithoutChatMessageInput, UserUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessageInput
    upsert?: UserUpsertWithoutChatMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessageInput, UserUpdateWithoutChatMessageInput>, UserUncheckedUpdateWithoutChatMessageInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUser_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.User_gender | EnumUser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.User_gender[] | null
    notIn?: $Enums.User_gender[] | null
    not?: NestedEnumUser_genderNullableFilter<$PrismaModel> | $Enums.User_gender | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUser_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_gender | EnumUser_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.User_gender[] | null
    notIn?: $Enums.User_gender[] | null
    not?: NestedEnumUser_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.User_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUser_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumUser_genderNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumarticleLikes_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.articleLikes_type | EnumarticleLikes_typeFieldRefInput<$PrismaModel>
    in?: $Enums.articleLikes_type[]
    notIn?: $Enums.articleLikes_type[]
    not?: NestedEnumarticleLikes_typeFilter<$PrismaModel> | $Enums.articleLikes_type
  }

  export type NestedEnumarticleLikes_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.articleLikes_type | EnumarticleLikes_typeFieldRefInput<$PrismaModel>
    in?: $Enums.articleLikes_type[]
    notIn?: $Enums.articleLikes_type[]
    not?: NestedEnumarticleLikes_typeWithAggregatesFilter<$PrismaModel> | $Enums.articleLikes_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumarticleLikes_typeFilter<$PrismaModel>
    _max?: NestedEnumarticleLikes_typeFilter<$PrismaModel>
  }

  export type NestedEnumMatchApplication_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchApplication_status | EnumMatchApplication_statusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchApplication_status[]
    notIn?: $Enums.MatchApplication_status[]
    not?: NestedEnumMatchApplication_statusFilter<$PrismaModel> | $Enums.MatchApplication_status
  }

  export type NestedEnumMatchApplication_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchApplication_status | EnumMatchApplication_statusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchApplication_status[]
    notIn?: $Enums.MatchApplication_status[]
    not?: NestedEnumMatchApplication_statusWithAggregatesFilter<$PrismaModel> | $Enums.MatchApplication_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchApplication_statusFilter<$PrismaModel>
    _max?: NestedEnumMatchApplication_statusFilter<$PrismaModel>
  }

  export type NestedEnumChatRoom_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRoom_type | EnumChatRoom_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRoom_type[]
    notIn?: $Enums.ChatRoom_type[]
    not?: NestedEnumChatRoom_typeFilter<$PrismaModel> | $Enums.ChatRoom_type
  }

  export type NestedEnumChatRoom_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRoom_type | EnumChatRoom_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRoom_type[]
    notIn?: $Enums.ChatRoom_type[]
    not?: NestedEnumChatRoom_typeWithAggregatesFilter<$PrismaModel> | $Enums.ChatRoom_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatRoom_typeFilter<$PrismaModel>
    _max?: NestedEnumChatRoom_typeFilter<$PrismaModel>
  }

  export type MovieCreateWithoutCommentInput = {
    audience?: bigint | number | null
    movieCd: number
    title?: string | null
    rank?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster?: string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: string | null
    plot?: string | null
    rankOldAndNew?: string | null
    openDt?: Date | string | null
    genre?: string | null
    director?: string | null
    ratting?: string | null
    MovieVod?: MovieVodCreateNestedManyWithoutMovieInput
    movieScores?: movieScoreCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutCommentInput = {
    id?: number
    audience?: bigint | number | null
    movieCd: number
    title?: string | null
    rank?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster?: string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: string | null
    plot?: string | null
    rankOldAndNew?: string | null
    openDt?: Date | string | null
    genre?: string | null
    director?: string | null
    ratting?: string | null
    MovieVod?: MovieVodUncheckedCreateNestedManyWithoutMovieInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutCommentInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutCommentInput, MovieUncheckedCreateWithoutCommentInput>
  }

  export type UserCreateWithoutCommentInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    article?: articleCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesCreateNestedManyWithoutUserInput
    movieScores?: movieScoreCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    article?: articleUncheckedCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutUserInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostUncheckedCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
  }

  export type MovieUpsertWithoutCommentInput = {
    update: XOR<MovieUpdateWithoutCommentInput, MovieUncheckedUpdateWithoutCommentInput>
    create: XOR<MovieCreateWithoutCommentInput, MovieUncheckedCreateWithoutCommentInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutCommentInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutCommentInput, MovieUncheckedUpdateWithoutCommentInput>
  }

  export type MovieUpdateWithoutCommentInput = {
    audience?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    movieCd?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: NullableStringFieldUpdateOperationsInput | string | null
    plot?: NullableStringFieldUpdateOperationsInput | string | null
    rankOldAndNew?: NullableStringFieldUpdateOperationsInput | string | null
    openDt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    ratting?: NullableStringFieldUpdateOperationsInput | string | null
    MovieVod?: MovieVodUpdateManyWithoutMovieNestedInput
    movieScores?: movieScoreUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    audience?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    movieCd?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: NullableStringFieldUpdateOperationsInput | string | null
    plot?: NullableStringFieldUpdateOperationsInput | string | null
    rankOldAndNew?: NullableStringFieldUpdateOperationsInput | string | null
    openDt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    ratting?: NullableStringFieldUpdateOperationsInput | string | null
    MovieVod?: MovieVodUncheckedUpdateManyWithoutMovieNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
  }

  export type UserUpdateWithoutCommentInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    article?: articleUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    article?: articleUncheckedUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUncheckedUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUncheckedUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentCreateWithoutMovieInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    comment?: string | null
    User: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutMovieInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userno: number
    comment?: string | null
  }

  export type CommentCreateOrConnectWithoutMovieInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput>
  }

  export type CommentCreateManyMovieInputEnvelope = {
    data: CommentCreateManyMovieInput | CommentCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type MovieVodCreateWithoutMovieInput = {
    vodUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MovieVodUncheckedCreateWithoutMovieInput = {
    id?: number
    vodUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MovieVodCreateOrConnectWithoutMovieInput = {
    where: MovieVodWhereUniqueInput
    create: XOR<MovieVodCreateWithoutMovieInput, MovieVodUncheckedCreateWithoutMovieInput>
  }

  export type MovieVodCreateManyMovieInputEnvelope = {
    data: MovieVodCreateManyMovieInput | MovieVodCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type movieScoreCreateWithoutMovieInput = {
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutMovieScoresInput
  }

  export type movieScoreUncheckedCreateWithoutMovieInput = {
    id?: number
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Userno: number
  }

  export type movieScoreCreateOrConnectWithoutMovieInput = {
    where: movieScoreWhereUniqueInput
    create: XOR<movieScoreCreateWithoutMovieInput, movieScoreUncheckedCreateWithoutMovieInput>
  }

  export type movieScoreCreateManyMovieInputEnvelope = {
    data: movieScoreCreateManyMovieInput | movieScoreCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutMovieInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutMovieInput, CommentUncheckedUpdateWithoutMovieInput>
    create: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutMovieInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutMovieInput, CommentUncheckedUpdateWithoutMovieInput>
  }

  export type CommentUpdateManyWithWhereWithoutMovieInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutMovieInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    movieId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    userno?: IntFilter<"Comment"> | number
    comment?: StringNullableFilter<"Comment"> | string | null
  }

  export type MovieVodUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieVodWhereUniqueInput
    update: XOR<MovieVodUpdateWithoutMovieInput, MovieVodUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieVodCreateWithoutMovieInput, MovieVodUncheckedCreateWithoutMovieInput>
  }

  export type MovieVodUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieVodWhereUniqueInput
    data: XOR<MovieVodUpdateWithoutMovieInput, MovieVodUncheckedUpdateWithoutMovieInput>
  }

  export type MovieVodUpdateManyWithWhereWithoutMovieInput = {
    where: MovieVodScalarWhereInput
    data: XOR<MovieVodUpdateManyMutationInput, MovieVodUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieVodScalarWhereInput = {
    AND?: MovieVodScalarWhereInput | MovieVodScalarWhereInput[]
    OR?: MovieVodScalarWhereInput[]
    NOT?: MovieVodScalarWhereInput | MovieVodScalarWhereInput[]
    id?: IntFilter<"MovieVod"> | number
    vodUrl?: StringFilter<"MovieVod"> | string
    movieCd?: IntFilter<"MovieVod"> | number
    createdAt?: DateTimeFilter<"MovieVod"> | Date | string
    updatedAt?: DateTimeFilter<"MovieVod"> | Date | string
    deletedAt?: DateTimeNullableFilter<"MovieVod"> | Date | string | null
  }

  export type movieScoreUpsertWithWhereUniqueWithoutMovieInput = {
    where: movieScoreWhereUniqueInput
    update: XOR<movieScoreUpdateWithoutMovieInput, movieScoreUncheckedUpdateWithoutMovieInput>
    create: XOR<movieScoreCreateWithoutMovieInput, movieScoreUncheckedCreateWithoutMovieInput>
  }

  export type movieScoreUpdateWithWhereUniqueWithoutMovieInput = {
    where: movieScoreWhereUniqueInput
    data: XOR<movieScoreUpdateWithoutMovieInput, movieScoreUncheckedUpdateWithoutMovieInput>
  }

  export type movieScoreUpdateManyWithWhereWithoutMovieInput = {
    where: movieScoreScalarWhereInput
    data: XOR<movieScoreUpdateManyMutationInput, movieScoreUncheckedUpdateManyWithoutMovieInput>
  }

  export type movieScoreScalarWhereInput = {
    AND?: movieScoreScalarWhereInput | movieScoreScalarWhereInput[]
    OR?: movieScoreScalarWhereInput[]
    NOT?: movieScoreScalarWhereInput | movieScoreScalarWhereInput[]
    id?: IntFilter<"movieScore"> | number
    movieCd?: IntFilter<"movieScore"> | number
    score?: FloatNullableFilter<"movieScore"> | number | null
    createdAt?: DateTimeFilter<"movieScore"> | Date | string
    updatedAt?: DateTimeFilter<"movieScore"> | Date | string
    deletedAt?: DateTimeNullableFilter<"movieScore"> | Date | string | null
    Userno?: IntFilter<"movieScore"> | number
  }

  export type CommentCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    comment?: string | null
    Movie: MovieCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    comment?: string | null
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type articleCreateWithoutUserInput = {
    title: string
    content: string
    like_count?: number
    dislike_count?: number
    comment_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articleComments?: articleCommentsCreateNestedManyWithoutArticleInput
    articleLikes?: articleLikesCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    like_count?: number
    dislike_count?: number
    comment_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutArticleInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutUserInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutUserInput, articleUncheckedCreateWithoutUserInput>
  }

  export type articleCreateManyUserInputEnvelope = {
    data: articleCreateManyUserInput | articleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type articleCommentsCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    article: articleCreateNestedOneWithoutArticleCommentsInput
  }

  export type articleCommentsUncheckedCreateWithoutUserInput = {
    id?: number
    articleId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type articleCommentsCreateOrConnectWithoutUserInput = {
    where: articleCommentsWhereUniqueInput
    create: XOR<articleCommentsCreateWithoutUserInput, articleCommentsUncheckedCreateWithoutUserInput>
  }

  export type articleCommentsCreateManyUserInputEnvelope = {
    data: articleCommentsCreateManyUserInput | articleCommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type articleLikesCreateWithoutUserInput = {
    type: $Enums.articleLikes_type
    createdAt?: Date | string
    updatedAt?: Date | string
    article: articleCreateNestedOneWithoutArticleLikesInput
  }

  export type articleLikesUncheckedCreateWithoutUserInput = {
    id?: number
    article_id: number
    type: $Enums.articleLikes_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articleLikesCreateOrConnectWithoutUserInput = {
    where: articleLikesWhereUniqueInput
    create: XOR<articleLikesCreateWithoutUserInput, articleLikesUncheckedCreateWithoutUserInput>
  }

  export type articleLikesCreateManyUserInputEnvelope = {
    data: articleLikesCreateManyUserInput | articleLikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type movieScoreCreateWithoutUserInput = {
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Movie: MovieCreateNestedOneWithoutMovieScoresInput
  }

  export type movieScoreUncheckedCreateWithoutUserInput = {
    id?: number
    movieCd: number
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type movieScoreCreateOrConnectWithoutUserInput = {
    where: movieScoreWhereUniqueInput
    create: XOR<movieScoreCreateWithoutUserInput, movieScoreUncheckedCreateWithoutUserInput>
  }

  export type movieScoreCreateManyUserInputEnvelope = {
    data: movieScoreCreateManyUserInput | movieScoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchPostCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    movieTitle: string
    theaterName: string
    showTime: string
    maxParticipants: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    MatchApplication?: MatchApplicationCreateNestedManyWithoutMatchPostInput
  }

  export type MatchPostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    movieTitle: string
    theaterName: string
    showTime: string
    maxParticipants: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutMatchPostInput
  }

  export type MatchPostCreateOrConnectWithoutUserInput = {
    where: MatchPostWhereUniqueInput
    create: XOR<MatchPostCreateWithoutUserInput, MatchPostUncheckedCreateWithoutUserInput>
  }

  export type MatchPostCreateManyUserInputEnvelope = {
    data: MatchPostCreateManyUserInput | MatchPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchApplicationCreateWithoutUserInput = {
    id?: string
    applicantName: string
    message: string
    status?: $Enums.MatchApplication_status
    createdAt?: Date | string
    MatchPost: MatchPostCreateNestedOneWithoutMatchApplicationInput
  }

  export type MatchApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    matchPostId: string
    applicantName: string
    message: string
    status?: $Enums.MatchApplication_status
    createdAt?: Date | string
  }

  export type MatchApplicationCreateOrConnectWithoutUserInput = {
    where: MatchApplicationWhereUniqueInput
    create: XOR<MatchApplicationCreateWithoutUserInput, MatchApplicationUncheckedCreateWithoutUserInput>
  }

  export type MatchApplicationCreateManyUserInputEnvelope = {
    data: MatchApplicationCreateManyUserInput | MatchApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomMemberCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    ChatRoom: ChatRoomCreateNestedOneWithoutChatRoomMemberInput
  }

  export type ChatRoomMemberUncheckedCreateWithoutUserInput = {
    id?: string
    chatRoomId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type ChatRoomMemberCreateOrConnectWithoutUserInput = {
    where: ChatRoomMemberWhereUniqueInput
    create: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomMemberCreateManyUserInputEnvelope = {
    data: ChatRoomMemberCreateManyUserInput | ChatRoomMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ChatRoom: ChatRoomCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    chatRoomId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type articleUpsertWithWhereUniqueWithoutUserInput = {
    where: articleWhereUniqueInput
    update: XOR<articleUpdateWithoutUserInput, articleUncheckedUpdateWithoutUserInput>
    create: XOR<articleCreateWithoutUserInput, articleUncheckedCreateWithoutUserInput>
  }

  export type articleUpdateWithWhereUniqueWithoutUserInput = {
    where: articleWhereUniqueInput
    data: XOR<articleUpdateWithoutUserInput, articleUncheckedUpdateWithoutUserInput>
  }

  export type articleUpdateManyWithWhereWithoutUserInput = {
    where: articleScalarWhereInput
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyWithoutUserInput>
  }

  export type articleScalarWhereInput = {
    AND?: articleScalarWhereInput | articleScalarWhereInput[]
    OR?: articleScalarWhereInput[]
    NOT?: articleScalarWhereInput | articleScalarWhereInput[]
    id?: IntFilter<"article"> | number
    userno?: IntFilter<"article"> | number
    title?: StringFilter<"article"> | string
    content?: StringFilter<"article"> | string
    like_count?: IntFilter<"article"> | number
    dislike_count?: IntFilter<"article"> | number
    comment_count?: IntFilter<"article"> | number
    createdAt?: DateTimeFilter<"article"> | Date | string
    updatedAt?: DateTimeFilter<"article"> | Date | string
    deletedAt?: DateTimeNullableFilter<"article"> | Date | string | null
  }

  export type articleCommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: articleCommentsWhereUniqueInput
    update: XOR<articleCommentsUpdateWithoutUserInput, articleCommentsUncheckedUpdateWithoutUserInput>
    create: XOR<articleCommentsCreateWithoutUserInput, articleCommentsUncheckedCreateWithoutUserInput>
  }

  export type articleCommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: articleCommentsWhereUniqueInput
    data: XOR<articleCommentsUpdateWithoutUserInput, articleCommentsUncheckedUpdateWithoutUserInput>
  }

  export type articleCommentsUpdateManyWithWhereWithoutUserInput = {
    where: articleCommentsScalarWhereInput
    data: XOR<articleCommentsUpdateManyMutationInput, articleCommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type articleCommentsScalarWhereInput = {
    AND?: articleCommentsScalarWhereInput | articleCommentsScalarWhereInput[]
    OR?: articleCommentsScalarWhereInput[]
    NOT?: articleCommentsScalarWhereInput | articleCommentsScalarWhereInput[]
    id?: IntFilter<"articleComments"> | number
    articleId?: IntFilter<"articleComments"> | number
    userno?: IntFilter<"articleComments"> | number
    content?: StringFilter<"articleComments"> | string
    createdAt?: DateTimeFilter<"articleComments"> | Date | string
    updatedAt?: DateTimeFilter<"articleComments"> | Date | string
    deletedAt?: DateTimeNullableFilter<"articleComments"> | Date | string | null
  }

  export type articleLikesUpsertWithWhereUniqueWithoutUserInput = {
    where: articleLikesWhereUniqueInput
    update: XOR<articleLikesUpdateWithoutUserInput, articleLikesUncheckedUpdateWithoutUserInput>
    create: XOR<articleLikesCreateWithoutUserInput, articleLikesUncheckedCreateWithoutUserInput>
  }

  export type articleLikesUpdateWithWhereUniqueWithoutUserInput = {
    where: articleLikesWhereUniqueInput
    data: XOR<articleLikesUpdateWithoutUserInput, articleLikesUncheckedUpdateWithoutUserInput>
  }

  export type articleLikesUpdateManyWithWhereWithoutUserInput = {
    where: articleLikesScalarWhereInput
    data: XOR<articleLikesUpdateManyMutationInput, articleLikesUncheckedUpdateManyWithoutUserInput>
  }

  export type articleLikesScalarWhereInput = {
    AND?: articleLikesScalarWhereInput | articleLikesScalarWhereInput[]
    OR?: articleLikesScalarWhereInput[]
    NOT?: articleLikesScalarWhereInput | articleLikesScalarWhereInput[]
    id?: IntFilter<"articleLikes"> | number
    article_id?: IntFilter<"articleLikes"> | number
    userno?: IntFilter<"articleLikes"> | number
    type?: EnumarticleLikes_typeFilter<"articleLikes"> | $Enums.articleLikes_type
    createdAt?: DateTimeFilter<"articleLikes"> | Date | string
    updatedAt?: DateTimeFilter<"articleLikes"> | Date | string
  }

  export type movieScoreUpsertWithWhereUniqueWithoutUserInput = {
    where: movieScoreWhereUniqueInput
    update: XOR<movieScoreUpdateWithoutUserInput, movieScoreUncheckedUpdateWithoutUserInput>
    create: XOR<movieScoreCreateWithoutUserInput, movieScoreUncheckedCreateWithoutUserInput>
  }

  export type movieScoreUpdateWithWhereUniqueWithoutUserInput = {
    where: movieScoreWhereUniqueInput
    data: XOR<movieScoreUpdateWithoutUserInput, movieScoreUncheckedUpdateWithoutUserInput>
  }

  export type movieScoreUpdateManyWithWhereWithoutUserInput = {
    where: movieScoreScalarWhereInput
    data: XOR<movieScoreUpdateManyMutationInput, movieScoreUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchPostUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchPostWhereUniqueInput
    update: XOR<MatchPostUpdateWithoutUserInput, MatchPostUncheckedUpdateWithoutUserInput>
    create: XOR<MatchPostCreateWithoutUserInput, MatchPostUncheckedCreateWithoutUserInput>
  }

  export type MatchPostUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchPostWhereUniqueInput
    data: XOR<MatchPostUpdateWithoutUserInput, MatchPostUncheckedUpdateWithoutUserInput>
  }

  export type MatchPostUpdateManyWithWhereWithoutUserInput = {
    where: MatchPostScalarWhereInput
    data: XOR<MatchPostUpdateManyMutationInput, MatchPostUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchPostScalarWhereInput = {
    AND?: MatchPostScalarWhereInput | MatchPostScalarWhereInput[]
    OR?: MatchPostScalarWhereInput[]
    NOT?: MatchPostScalarWhereInput | MatchPostScalarWhereInput[]
    id?: StringFilter<"MatchPost"> | string
    title?: StringFilter<"MatchPost"> | string
    content?: StringFilter<"MatchPost"> | string
    movieTitle?: StringFilter<"MatchPost"> | string
    theaterName?: StringFilter<"MatchPost"> | string
    showTime?: StringFilter<"MatchPost"> | string
    maxParticipants?: IntFilter<"MatchPost"> | number
    location?: StringFilter<"MatchPost"> | string
    userno?: IntFilter<"MatchPost"> | number
    createdAt?: DateTimeFilter<"MatchPost"> | Date | string
    updatedAt?: DateTimeNullableFilter<"MatchPost"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"MatchPost"> | Date | string | null
  }

  export type MatchApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchApplicationWhereUniqueInput
    update: XOR<MatchApplicationUpdateWithoutUserInput, MatchApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<MatchApplicationCreateWithoutUserInput, MatchApplicationUncheckedCreateWithoutUserInput>
  }

  export type MatchApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchApplicationWhereUniqueInput
    data: XOR<MatchApplicationUpdateWithoutUserInput, MatchApplicationUncheckedUpdateWithoutUserInput>
  }

  export type MatchApplicationUpdateManyWithWhereWithoutUserInput = {
    where: MatchApplicationScalarWhereInput
    data: XOR<MatchApplicationUpdateManyMutationInput, MatchApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchApplicationScalarWhereInput = {
    AND?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
    OR?: MatchApplicationScalarWhereInput[]
    NOT?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
    id?: StringFilter<"MatchApplication"> | string
    matchPostId?: StringFilter<"MatchApplication"> | string
    applicantUserno?: IntFilter<"MatchApplication"> | number
    applicantName?: StringFilter<"MatchApplication"> | string
    message?: StringFilter<"MatchApplication"> | string
    status?: EnumMatchApplication_statusFilter<"MatchApplication"> | $Enums.MatchApplication_status
    createdAt?: DateTimeFilter<"MatchApplication"> | Date | string
  }

  export type ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatRoomMemberWhereUniqueInput
    update: XOR<ChatRoomMemberUpdateWithoutUserInput, ChatRoomMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatRoomMemberWhereUniqueInput
    data: XOR<ChatRoomMemberUpdateWithoutUserInput, ChatRoomMemberUncheckedUpdateWithoutUserInput>
  }

  export type ChatRoomMemberUpdateManyWithWhereWithoutUserInput = {
    where: ChatRoomMemberScalarWhereInput
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatRoomMemberScalarWhereInput = {
    AND?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
    OR?: ChatRoomMemberScalarWhereInput[]
    NOT?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
    id?: StringFilter<"ChatRoomMember"> | string
    chatRoomId?: StringFilter<"ChatRoomMember"> | string
    userId?: IntFilter<"ChatRoomMember"> | number
    joinedAt?: DateTimeFilter<"ChatRoomMember"> | Date | string
    leftAt?: DateTimeNullableFilter<"ChatRoomMember"> | Date | string | null
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    chatRoomId?: StringFilter<"ChatMessage"> | string
    senderId?: IntFilter<"ChatMessage"> | number
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ChatMessage"> | Date | string | null
  }

  export type UserCreateWithoutMovieScoresInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentCreateNestedManyWithoutUserInput
    article?: articleCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMovieScoresInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    article?: articleUncheckedCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostUncheckedCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMovieScoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMovieScoresInput, UserUncheckedCreateWithoutMovieScoresInput>
  }

  export type MovieCreateWithoutMovieScoresInput = {
    audience?: bigint | number | null
    movieCd: number
    title?: string | null
    rank?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster?: string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: string | null
    plot?: string | null
    rankOldAndNew?: string | null
    openDt?: Date | string | null
    genre?: string | null
    director?: string | null
    ratting?: string | null
    Comment?: CommentCreateNestedManyWithoutMovieInput
    MovieVod?: MovieVodCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutMovieScoresInput = {
    id?: number
    audience?: bigint | number | null
    movieCd: number
    title?: string | null
    rank?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster?: string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: string | null
    plot?: string | null
    rankOldAndNew?: string | null
    openDt?: Date | string | null
    genre?: string | null
    director?: string | null
    ratting?: string | null
    Comment?: CommentUncheckedCreateNestedManyWithoutMovieInput
    MovieVod?: MovieVodUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutMovieScoresInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovieScoresInput, MovieUncheckedCreateWithoutMovieScoresInput>
  }

  export type UserUpsertWithoutMovieScoresInput = {
    update: XOR<UserUpdateWithoutMovieScoresInput, UserUncheckedUpdateWithoutMovieScoresInput>
    create: XOR<UserCreateWithoutMovieScoresInput, UserUncheckedCreateWithoutMovieScoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMovieScoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMovieScoresInput, UserUncheckedUpdateWithoutMovieScoresInput>
  }

  export type UserUpdateWithoutMovieScoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUpdateManyWithoutUserNestedInput
    article?: articleUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMovieScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    article?: articleUncheckedUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUncheckedUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUncheckedUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieUpsertWithoutMovieScoresInput = {
    update: XOR<MovieUpdateWithoutMovieScoresInput, MovieUncheckedUpdateWithoutMovieScoresInput>
    create: XOR<MovieCreateWithoutMovieScoresInput, MovieUncheckedCreateWithoutMovieScoresInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutMovieScoresInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutMovieScoresInput, MovieUncheckedUpdateWithoutMovieScoresInput>
  }

  export type MovieUpdateWithoutMovieScoresInput = {
    audience?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    movieCd?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: NullableStringFieldUpdateOperationsInput | string | null
    plot?: NullableStringFieldUpdateOperationsInput | string | null
    rankOldAndNew?: NullableStringFieldUpdateOperationsInput | string | null
    openDt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    ratting?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: CommentUpdateManyWithoutMovieNestedInput
    MovieVod?: MovieVodUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutMovieScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    audience?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    movieCd?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: NullableStringFieldUpdateOperationsInput | string | null
    plot?: NullableStringFieldUpdateOperationsInput | string | null
    rankOldAndNew?: NullableStringFieldUpdateOperationsInput | string | null
    openDt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    ratting?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    MovieVod?: MovieVodUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateWithoutMovieVodInput = {
    audience?: bigint | number | null
    movieCd: number
    title?: string | null
    rank?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster?: string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: string | null
    plot?: string | null
    rankOldAndNew?: string | null
    openDt?: Date | string | null
    genre?: string | null
    director?: string | null
    ratting?: string | null
    Comment?: CommentCreateNestedManyWithoutMovieInput
    movieScores?: movieScoreCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutMovieVodInput = {
    id?: number
    audience?: bigint | number | null
    movieCd: number
    title?: string | null
    rank?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster?: string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: string | null
    plot?: string | null
    rankOldAndNew?: string | null
    openDt?: Date | string | null
    genre?: string | null
    director?: string | null
    ratting?: string | null
    Comment?: CommentUncheckedCreateNestedManyWithoutMovieInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutMovieVodInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovieVodInput, MovieUncheckedCreateWithoutMovieVodInput>
  }

  export type MovieUpsertWithoutMovieVodInput = {
    update: XOR<MovieUpdateWithoutMovieVodInput, MovieUncheckedUpdateWithoutMovieVodInput>
    create: XOR<MovieCreateWithoutMovieVodInput, MovieUncheckedCreateWithoutMovieVodInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutMovieVodInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutMovieVodInput, MovieUncheckedUpdateWithoutMovieVodInput>
  }

  export type MovieUpdateWithoutMovieVodInput = {
    audience?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    movieCd?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: NullableStringFieldUpdateOperationsInput | string | null
    plot?: NullableStringFieldUpdateOperationsInput | string | null
    rankOldAndNew?: NullableStringFieldUpdateOperationsInput | string | null
    openDt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    ratting?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: CommentUpdateManyWithoutMovieNestedInput
    movieScores?: movieScoreUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutMovieVodInput = {
    id?: IntFieldUpdateOperationsInput | number
    audience?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    movieCd?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    vector?: NullableJsonNullValueInput | InputJsonValue
    rankInten?: NullableStringFieldUpdateOperationsInput | string | null
    plot?: NullableStringFieldUpdateOperationsInput | string | null
    rankOldAndNew?: NullableStringFieldUpdateOperationsInput | string | null
    openDt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    ratting?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: CommentUncheckedUpdateManyWithoutMovieNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type UserCreateWithoutArticleInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesCreateNestedManyWithoutUserInput
    movieScores?: movieScoreCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticleInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutUserInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostUncheckedCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticleInput, UserUncheckedCreateWithoutArticleInput>
  }

  export type articleCommentsCreateWithoutArticleInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutArticleCommentsInput
  }

  export type articleCommentsUncheckedCreateWithoutArticleInput = {
    id?: number
    userno: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type articleCommentsCreateOrConnectWithoutArticleInput = {
    where: articleCommentsWhereUniqueInput
    create: XOR<articleCommentsCreateWithoutArticleInput, articleCommentsUncheckedCreateWithoutArticleInput>
  }

  export type articleCommentsCreateManyArticleInputEnvelope = {
    data: articleCommentsCreateManyArticleInput | articleCommentsCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type articleLikesCreateWithoutArticleInput = {
    type: $Enums.articleLikes_type
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutArticleLikesInput
  }

  export type articleLikesUncheckedCreateWithoutArticleInput = {
    id?: number
    userno: number
    type: $Enums.articleLikes_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articleLikesCreateOrConnectWithoutArticleInput = {
    where: articleLikesWhereUniqueInput
    create: XOR<articleLikesCreateWithoutArticleInput, articleLikesUncheckedCreateWithoutArticleInput>
  }

  export type articleLikesCreateManyArticleInputEnvelope = {
    data: articleLikesCreateManyArticleInput | articleLikesCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArticleInput = {
    update: XOR<UserUpdateWithoutArticleInput, UserUncheckedUpdateWithoutArticleInput>
    create: XOR<UserCreateWithoutArticleInput, UserUncheckedCreateWithoutArticleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticleInput, UserUncheckedUpdateWithoutArticleInput>
  }

  export type UserUpdateWithoutArticleInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUncheckedUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUncheckedUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type articleCommentsUpsertWithWhereUniqueWithoutArticleInput = {
    where: articleCommentsWhereUniqueInput
    update: XOR<articleCommentsUpdateWithoutArticleInput, articleCommentsUncheckedUpdateWithoutArticleInput>
    create: XOR<articleCommentsCreateWithoutArticleInput, articleCommentsUncheckedCreateWithoutArticleInput>
  }

  export type articleCommentsUpdateWithWhereUniqueWithoutArticleInput = {
    where: articleCommentsWhereUniqueInput
    data: XOR<articleCommentsUpdateWithoutArticleInput, articleCommentsUncheckedUpdateWithoutArticleInput>
  }

  export type articleCommentsUpdateManyWithWhereWithoutArticleInput = {
    where: articleCommentsScalarWhereInput
    data: XOR<articleCommentsUpdateManyMutationInput, articleCommentsUncheckedUpdateManyWithoutArticleInput>
  }

  export type articleLikesUpsertWithWhereUniqueWithoutArticleInput = {
    where: articleLikesWhereUniqueInput
    update: XOR<articleLikesUpdateWithoutArticleInput, articleLikesUncheckedUpdateWithoutArticleInput>
    create: XOR<articleLikesCreateWithoutArticleInput, articleLikesUncheckedCreateWithoutArticleInput>
  }

  export type articleLikesUpdateWithWhereUniqueWithoutArticleInput = {
    where: articleLikesWhereUniqueInput
    data: XOR<articleLikesUpdateWithoutArticleInput, articleLikesUncheckedUpdateWithoutArticleInput>
  }

  export type articleLikesUpdateManyWithWhereWithoutArticleInput = {
    where: articleLikesScalarWhereInput
    data: XOR<articleLikesUpdateManyMutationInput, articleLikesUncheckedUpdateManyWithoutArticleInput>
  }

  export type articleCreateWithoutArticleCommentsInput = {
    title: string
    content: string
    like_count?: number
    dislike_count?: number
    comment_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutArticleInput
    articleLikes?: articleLikesCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutArticleCommentsInput = {
    id?: number
    userno: number
    title: string
    content: string
    like_count?: number
    dislike_count?: number
    comment_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutArticleCommentsInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutArticleCommentsInput, articleUncheckedCreateWithoutArticleCommentsInput>
  }

  export type UserCreateWithoutArticleCommentsInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentCreateNestedManyWithoutUserInput
    article?: articleCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesCreateNestedManyWithoutUserInput
    movieScores?: movieScoreCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticleCommentsInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    article?: articleUncheckedCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutUserInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostUncheckedCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticleCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticleCommentsInput, UserUncheckedCreateWithoutArticleCommentsInput>
  }

  export type articleUpsertWithoutArticleCommentsInput = {
    update: XOR<articleUpdateWithoutArticleCommentsInput, articleUncheckedUpdateWithoutArticleCommentsInput>
    create: XOR<articleCreateWithoutArticleCommentsInput, articleUncheckedCreateWithoutArticleCommentsInput>
    where?: articleWhereInput
  }

  export type articleUpdateToOneWithWhereWithoutArticleCommentsInput = {
    where?: articleWhereInput
    data: XOR<articleUpdateWithoutArticleCommentsInput, articleUncheckedUpdateWithoutArticleCommentsInput>
  }

  export type articleUpdateWithoutArticleCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutArticleNestedInput
    articleLikes?: articleLikesUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutArticleCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articleLikes?: articleLikesUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserUpsertWithoutArticleCommentsInput = {
    update: XOR<UserUpdateWithoutArticleCommentsInput, UserUncheckedUpdateWithoutArticleCommentsInput>
    create: XOR<UserCreateWithoutArticleCommentsInput, UserUncheckedCreateWithoutArticleCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticleCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticleCommentsInput, UserUncheckedUpdateWithoutArticleCommentsInput>
  }

  export type UserUpdateWithoutArticleCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUpdateManyWithoutUserNestedInput
    article?: articleUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticleCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    article?: articleUncheckedUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUncheckedUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type articleCreateWithoutArticleLikesInput = {
    title: string
    content: string
    like_count?: number
    dislike_count?: number
    comment_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutArticleInput
    articleComments?: articleCommentsCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutArticleLikesInput = {
    id?: number
    userno: number
    title: string
    content: string
    like_count?: number
    dislike_count?: number
    comment_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutArticleLikesInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutArticleLikesInput, articleUncheckedCreateWithoutArticleLikesInput>
  }

  export type UserCreateWithoutArticleLikesInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentCreateNestedManyWithoutUserInput
    article?: articleCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsCreateNestedManyWithoutUserInput
    movieScores?: movieScoreCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticleLikesInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    article?: articleUncheckedCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutUserInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostUncheckedCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticleLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticleLikesInput, UserUncheckedCreateWithoutArticleLikesInput>
  }

  export type articleUpsertWithoutArticleLikesInput = {
    update: XOR<articleUpdateWithoutArticleLikesInput, articleUncheckedUpdateWithoutArticleLikesInput>
    create: XOR<articleCreateWithoutArticleLikesInput, articleUncheckedCreateWithoutArticleLikesInput>
    where?: articleWhereInput
  }

  export type articleUpdateToOneWithWhereWithoutArticleLikesInput = {
    where?: articleWhereInput
    data: XOR<articleUpdateWithoutArticleLikesInput, articleUncheckedUpdateWithoutArticleLikesInput>
  }

  export type articleUpdateWithoutArticleLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutArticleNestedInput
    articleComments?: articleCommentsUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutArticleLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articleComments?: articleCommentsUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserUpsertWithoutArticleLikesInput = {
    update: XOR<UserUpdateWithoutArticleLikesInput, UserUncheckedUpdateWithoutArticleLikesInput>
    create: XOR<UserCreateWithoutArticleLikesInput, UserUncheckedCreateWithoutArticleLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticleLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticleLikesInput, UserUncheckedUpdateWithoutArticleLikesInput>
  }

  export type UserUpdateWithoutArticleLikesInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUpdateManyWithoutUserNestedInput
    article?: articleUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticleLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    article?: articleUncheckedUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUncheckedUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUncheckedUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMatchPostInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentCreateNestedManyWithoutUserInput
    article?: articleCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesCreateNestedManyWithoutUserInput
    movieScores?: movieScoreCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchPostInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    article?: articleUncheckedCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutUserInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchPostInput, UserUncheckedCreateWithoutMatchPostInput>
  }

  export type MatchApplicationCreateWithoutMatchPostInput = {
    id?: string
    applicantName: string
    message: string
    status?: $Enums.MatchApplication_status
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutMatchApplicationInput
  }

  export type MatchApplicationUncheckedCreateWithoutMatchPostInput = {
    id?: string
    applicantUserno: number
    applicantName: string
    message: string
    status?: $Enums.MatchApplication_status
    createdAt?: Date | string
  }

  export type MatchApplicationCreateOrConnectWithoutMatchPostInput = {
    where: MatchApplicationWhereUniqueInput
    create: XOR<MatchApplicationCreateWithoutMatchPostInput, MatchApplicationUncheckedCreateWithoutMatchPostInput>
  }

  export type MatchApplicationCreateManyMatchPostInputEnvelope = {
    data: MatchApplicationCreateManyMatchPostInput | MatchApplicationCreateManyMatchPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMatchPostInput = {
    update: XOR<UserUpdateWithoutMatchPostInput, UserUncheckedUpdateWithoutMatchPostInput>
    create: XOR<UserCreateWithoutMatchPostInput, UserUncheckedCreateWithoutMatchPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchPostInput, UserUncheckedUpdateWithoutMatchPostInput>
  }

  export type UserUpdateWithoutMatchPostInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUpdateManyWithoutUserNestedInput
    article?: articleUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    article?: articleUncheckedUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUncheckedUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MatchApplicationUpsertWithWhereUniqueWithoutMatchPostInput = {
    where: MatchApplicationWhereUniqueInput
    update: XOR<MatchApplicationUpdateWithoutMatchPostInput, MatchApplicationUncheckedUpdateWithoutMatchPostInput>
    create: XOR<MatchApplicationCreateWithoutMatchPostInput, MatchApplicationUncheckedCreateWithoutMatchPostInput>
  }

  export type MatchApplicationUpdateWithWhereUniqueWithoutMatchPostInput = {
    where: MatchApplicationWhereUniqueInput
    data: XOR<MatchApplicationUpdateWithoutMatchPostInput, MatchApplicationUncheckedUpdateWithoutMatchPostInput>
  }

  export type MatchApplicationUpdateManyWithWhereWithoutMatchPostInput = {
    where: MatchApplicationScalarWhereInput
    data: XOR<MatchApplicationUpdateManyMutationInput, MatchApplicationUncheckedUpdateManyWithoutMatchPostInput>
  }

  export type MatchPostCreateWithoutMatchApplicationInput = {
    id?: string
    title: string
    content: string
    movieTitle: string
    theaterName: string
    showTime: string
    maxParticipants: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutMatchPostInput
  }

  export type MatchPostUncheckedCreateWithoutMatchApplicationInput = {
    id?: string
    title: string
    content: string
    movieTitle: string
    theaterName: string
    showTime: string
    maxParticipants: number
    location: string
    userno: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MatchPostCreateOrConnectWithoutMatchApplicationInput = {
    where: MatchPostWhereUniqueInput
    create: XOR<MatchPostCreateWithoutMatchApplicationInput, MatchPostUncheckedCreateWithoutMatchApplicationInput>
  }

  export type UserCreateWithoutMatchApplicationInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentCreateNestedManyWithoutUserInput
    article?: articleCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesCreateNestedManyWithoutUserInput
    movieScores?: movieScoreCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchApplicationInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    article?: articleUncheckedCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutUserInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostUncheckedCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchApplicationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchApplicationInput, UserUncheckedCreateWithoutMatchApplicationInput>
  }

  export type MatchPostUpsertWithoutMatchApplicationInput = {
    update: XOR<MatchPostUpdateWithoutMatchApplicationInput, MatchPostUncheckedUpdateWithoutMatchApplicationInput>
    create: XOR<MatchPostCreateWithoutMatchApplicationInput, MatchPostUncheckedCreateWithoutMatchApplicationInput>
    where?: MatchPostWhereInput
  }

  export type MatchPostUpdateToOneWithWhereWithoutMatchApplicationInput = {
    where?: MatchPostWhereInput
    data: XOR<MatchPostUpdateWithoutMatchApplicationInput, MatchPostUncheckedUpdateWithoutMatchApplicationInput>
  }

  export type MatchPostUpdateWithoutMatchApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    movieTitle?: StringFieldUpdateOperationsInput | string
    theaterName?: StringFieldUpdateOperationsInput | string
    showTime?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutMatchPostNestedInput
  }

  export type MatchPostUncheckedUpdateWithoutMatchApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    movieTitle?: StringFieldUpdateOperationsInput | string
    theaterName?: StringFieldUpdateOperationsInput | string
    showTime?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    userno?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutMatchApplicationInput = {
    update: XOR<UserUpdateWithoutMatchApplicationInput, UserUncheckedUpdateWithoutMatchApplicationInput>
    create: XOR<UserCreateWithoutMatchApplicationInput, UserUncheckedCreateWithoutMatchApplicationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchApplicationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchApplicationInput, UserUncheckedUpdateWithoutMatchApplicationInput>
  }

  export type UserUpdateWithoutMatchApplicationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUpdateManyWithoutUserNestedInput
    article?: articleUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    article?: articleUncheckedUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUncheckedUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUncheckedUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageCreateWithoutChatRoomInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessageUncheckedCreateWithoutChatRoomInput = {
    id?: string
    senderId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ChatMessageCreateOrConnectWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatMessageCreateManyChatRoomInputEnvelope = {
    data: ChatMessageCreateManyChatRoomInput | ChatMessageCreateManyChatRoomInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomMemberCreateWithoutChatRoomInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    User: UserCreateNestedOneWithoutChatRoomMemberInput
  }

  export type ChatRoomMemberUncheckedCreateWithoutChatRoomInput = {
    id?: string
    userId: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type ChatRoomMemberCreateOrConnectWithoutChatRoomInput = {
    where: ChatRoomMemberWhereUniqueInput
    create: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatRoomMemberCreateManyChatRoomInputEnvelope = {
    data: ChatRoomMemberCreateManyChatRoomInput | ChatRoomMemberCreateManyChatRoomInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatRoomInput, ChatMessageUncheckedUpdateWithoutChatRoomInput>
    create: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatRoomInput, ChatMessageUncheckedUpdateWithoutChatRoomInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatRoomInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatRoomInput>
  }

  export type ChatRoomMemberUpsertWithWhereUniqueWithoutChatRoomInput = {
    where: ChatRoomMemberWhereUniqueInput
    update: XOR<ChatRoomMemberUpdateWithoutChatRoomInput, ChatRoomMemberUncheckedUpdateWithoutChatRoomInput>
    create: XOR<ChatRoomMemberCreateWithoutChatRoomInput, ChatRoomMemberUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatRoomMemberUpdateWithWhereUniqueWithoutChatRoomInput = {
    where: ChatRoomMemberWhereUniqueInput
    data: XOR<ChatRoomMemberUpdateWithoutChatRoomInput, ChatRoomMemberUncheckedUpdateWithoutChatRoomInput>
  }

  export type ChatRoomMemberUpdateManyWithWhereWithoutChatRoomInput = {
    where: ChatRoomMemberScalarWhereInput
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyWithoutChatRoomInput>
  }

  export type ChatRoomCreateWithoutChatRoomMemberInput = {
    id?: string
    name: string
    type?: $Enums.ChatRoom_type
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatMessage?: ChatMessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutChatRoomMemberInput = {
    id?: string
    name: string
    type?: $Enums.ChatRoom_type
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutChatRoomMemberInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutChatRoomMemberInput, ChatRoomUncheckedCreateWithoutChatRoomMemberInput>
  }

  export type UserCreateWithoutChatRoomMemberInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentCreateNestedManyWithoutUserInput
    article?: articleCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesCreateNestedManyWithoutUserInput
    movieScores?: movieScoreCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatRoomMemberInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    article?: articleUncheckedCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutUserInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostUncheckedCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatRoomMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomMemberInput, UserUncheckedCreateWithoutChatRoomMemberInput>
  }

  export type ChatRoomUpsertWithoutChatRoomMemberInput = {
    update: XOR<ChatRoomUpdateWithoutChatRoomMemberInput, ChatRoomUncheckedUpdateWithoutChatRoomMemberInput>
    create: XOR<ChatRoomCreateWithoutChatRoomMemberInput, ChatRoomUncheckedCreateWithoutChatRoomMemberInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutChatRoomMemberInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutChatRoomMemberInput, ChatRoomUncheckedUpdateWithoutChatRoomMemberInput>
  }

  export type ChatRoomUpdateWithoutChatRoomMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChatRoom_typeFieldUpdateOperationsInput | $Enums.ChatRoom_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatMessage?: ChatMessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutChatRoomMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChatRoom_typeFieldUpdateOperationsInput | $Enums.ChatRoom_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type UserUpsertWithoutChatRoomMemberInput = {
    update: XOR<UserUpdateWithoutChatRoomMemberInput, UserUncheckedUpdateWithoutChatRoomMemberInput>
    create: XOR<UserCreateWithoutChatRoomMemberInput, UserUncheckedCreateWithoutChatRoomMemberInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatRoomMemberInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatRoomMemberInput, UserUncheckedUpdateWithoutChatRoomMemberInput>
  }

  export type UserUpdateWithoutChatRoomMemberInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUpdateManyWithoutUserNestedInput
    article?: articleUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    article?: articleUncheckedUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUncheckedUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUncheckedUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatRoomCreateWithoutChatMessageInput = {
    id?: string
    name: string
    type?: $Enums.ChatRoom_type
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutChatMessageInput = {
    id?: string
    name: string
    type?: $Enums.ChatRoom_type
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutChatMessageInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutChatMessageInput, ChatRoomUncheckedCreateWithoutChatMessageInput>
  }

  export type UserCreateWithoutChatMessageInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentCreateNestedManyWithoutUserInput
    article?: articleCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesCreateNestedManyWithoutUserInput
    movieScores?: movieScoreCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessageInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    image?: string | null
    marketing_agreed?: boolean
    gender?: $Enums.User_gender | null
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    article?: articleUncheckedCreateNestedManyWithoutUserInput
    articleComments?: articleCommentsUncheckedCreateNestedManyWithoutUserInput
    articleLikes?: articleLikesUncheckedCreateNestedManyWithoutUserInput
    movieScores?: movieScoreUncheckedCreateNestedManyWithoutUserInput
    MatchPost?: MatchPostUncheckedCreateNestedManyWithoutUserInput
    MatchApplication?: MatchApplicationUncheckedCreateNestedManyWithoutUserInput
    ChatRoomMember?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessageInput, UserUncheckedCreateWithoutChatMessageInput>
  }

  export type ChatRoomUpsertWithoutChatMessageInput = {
    update: XOR<ChatRoomUpdateWithoutChatMessageInput, ChatRoomUncheckedUpdateWithoutChatMessageInput>
    create: XOR<ChatRoomCreateWithoutChatMessageInput, ChatRoomUncheckedCreateWithoutChatMessageInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutChatMessageInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutChatMessageInput, ChatRoomUncheckedUpdateWithoutChatMessageInput>
  }

  export type ChatRoomUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChatRoom_typeFieldUpdateOperationsInput | $Enums.ChatRoom_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChatRoom_typeFieldUpdateOperationsInput | $Enums.ChatRoom_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type UserUpsertWithoutChatMessageInput = {
    update: XOR<UserUpdateWithoutChatMessageInput, UserUncheckedUpdateWithoutChatMessageInput>
    create: XOR<UserCreateWithoutChatMessageInput, UserUncheckedCreateWithoutChatMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessageInput, UserUncheckedUpdateWithoutChatMessageInput>
  }

  export type UserUpdateWithoutChatMessageInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUpdateManyWithoutUserNestedInput
    article?: articleUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    marketing_agreed?: BoolFieldUpdateOperationsInput | boolean
    gender?: NullableEnumUser_genderFieldUpdateOperationsInput | $Enums.User_gender | null
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    article?: articleUncheckedUpdateManyWithoutUserNestedInput
    articleComments?: articleCommentsUncheckedUpdateManyWithoutUserNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutUserNestedInput
    movieScores?: movieScoreUncheckedUpdateManyWithoutUserNestedInput
    MatchPost?: MatchPostUncheckedUpdateManyWithoutUserNestedInput
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutUserNestedInput
    ChatRoomMember?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentCreateManyMovieInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userno: number
    comment?: string | null
  }

  export type MovieVodCreateManyMovieInput = {
    id?: number
    vodUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type movieScoreCreateManyMovieInput = {
    id?: number
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Userno: number
  }

  export type CommentUpdateWithoutMovieInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userno?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userno?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieVodUpdateWithoutMovieInput = {
    vodUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MovieVodUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    vodUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MovieVodUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    vodUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movieScoreUpdateWithoutMovieInput = {
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutMovieScoresNestedInput
  }

  export type movieScoreUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Userno?: IntFieldUpdateOperationsInput | number
  }

  export type movieScoreUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Userno?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateManyUserInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    comment?: string | null
  }

  export type articleCreateManyUserInput = {
    id?: number
    title: string
    content: string
    like_count?: number
    dislike_count?: number
    comment_count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type articleCommentsCreateManyUserInput = {
    id?: number
    articleId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type articleLikesCreateManyUserInput = {
    id?: number
    article_id: number
    type: $Enums.articleLikes_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type movieScoreCreateManyUserInput = {
    id?: number
    movieCd: number
    score?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MatchPostCreateManyUserInput = {
    id?: string
    title: string
    content: string
    movieTitle: string
    theaterName: string
    showTime: string
    maxParticipants: number
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MatchApplicationCreateManyUserInput = {
    id?: string
    matchPostId: string
    applicantName: string
    message: string
    status?: $Enums.MatchApplication_status
    createdAt?: Date | string
  }

  export type ChatRoomMemberCreateManyUserInput = {
    id?: string
    chatRoomId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    chatRoomId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CommentUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    Movie?: MovieUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type articleUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articleComments?: articleCommentsUpdateManyWithoutArticleNestedInput
    articleLikes?: articleLikesUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articleComments?: articleCommentsUncheckedUpdateManyWithoutArticleNestedInput
    articleLikes?: articleLikesUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    dislike_count?: IntFieldUpdateOperationsInput | number
    comment_count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleCommentsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articleUpdateOneRequiredWithoutArticleCommentsNestedInput
  }

  export type articleCommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleCommentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleLikesUpdateWithoutUserInput = {
    type?: EnumarticleLikes_typeFieldUpdateOperationsInput | $Enums.articleLikes_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: articleUpdateOneRequiredWithoutArticleLikesNestedInput
  }

  export type articleLikesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    type?: EnumarticleLikes_typeFieldUpdateOperationsInput | $Enums.articleLikes_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articleLikesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    type?: EnumarticleLikes_typeFieldUpdateOperationsInput | $Enums.articleLikes_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type movieScoreUpdateWithoutUserInput = {
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Movie?: MovieUpdateOneRequiredWithoutMovieScoresNestedInput
  }

  export type movieScoreUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieCd?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movieScoreUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieCd?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    movieTitle?: StringFieldUpdateOperationsInput | string
    theaterName?: StringFieldUpdateOperationsInput | string
    showTime?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MatchApplication?: MatchApplicationUpdateManyWithoutMatchPostNestedInput
  }

  export type MatchPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    movieTitle?: StringFieldUpdateOperationsInput | string
    theaterName?: StringFieldUpdateOperationsInput | string
    showTime?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MatchApplication?: MatchApplicationUncheckedUpdateManyWithoutMatchPostNestedInput
  }

  export type MatchPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    movieTitle?: StringFieldUpdateOperationsInput | string
    theaterName?: StringFieldUpdateOperationsInput | string
    showTime?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchApplication_statusFieldUpdateOperationsInput | $Enums.MatchApplication_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchPost?: MatchPostUpdateOneRequiredWithoutMatchApplicationNestedInput
  }

  export type MatchApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchPostId?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchApplication_statusFieldUpdateOperationsInput | $Enums.MatchApplication_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchPostId?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchApplication_statusFieldUpdateOperationsInput | $Enums.MatchApplication_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatRoom?: ChatRoomUpdateOneRequiredWithoutChatRoomMemberNestedInput
  }

  export type ChatRoomMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ChatRoom?: ChatRoomUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleCommentsCreateManyArticleInput = {
    id?: number
    userno: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type articleLikesCreateManyArticleInput = {
    id?: number
    userno: number
    type: $Enums.articleLikes_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articleCommentsUpdateWithoutArticleInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutArticleCommentsNestedInput
  }

  export type articleCommentsUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleCommentsUncheckedUpdateManyWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleLikesUpdateWithoutArticleInput = {
    type?: EnumarticleLikes_typeFieldUpdateOperationsInput | $Enums.articleLikes_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutArticleLikesNestedInput
  }

  export type articleLikesUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    type?: EnumarticleLikes_typeFieldUpdateOperationsInput | $Enums.articleLikes_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articleLikesUncheckedUpdateManyWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userno?: IntFieldUpdateOperationsInput | number
    type?: EnumarticleLikes_typeFieldUpdateOperationsInput | $Enums.articleLikes_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchApplicationCreateManyMatchPostInput = {
    id?: string
    applicantUserno: number
    applicantName: string
    message: string
    status?: $Enums.MatchApplication_status
    createdAt?: Date | string
  }

  export type MatchApplicationUpdateWithoutMatchPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchApplication_statusFieldUpdateOperationsInput | $Enums.MatchApplication_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutMatchApplicationNestedInput
  }

  export type MatchApplicationUncheckedUpdateWithoutMatchPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantUserno?: IntFieldUpdateOperationsInput | number
    applicantName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchApplication_statusFieldUpdateOperationsInput | $Enums.MatchApplication_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchApplicationUncheckedUpdateManyWithoutMatchPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantUserno?: IntFieldUpdateOperationsInput | number
    applicantName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchApplication_statusFieldUpdateOperationsInput | $Enums.MatchApplication_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyChatRoomInput = {
    id?: string
    senderId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ChatRoomMemberCreateManyChatRoomInput = {
    id?: string
    userId: number
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type ChatMessageUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutChatRoomMemberNestedInput
  }

  export type ChatRoomMemberUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MovieCountOutputTypeDefaultArgs instead
     */
    export type MovieCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArticleCountOutputTypeDefaultArgs instead
     */
    export type ArticleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArticleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchPostCountOutputTypeDefaultArgs instead
     */
    export type MatchPostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchPostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatRoomCountOutputTypeDefaultArgs instead
     */
    export type ChatRoomCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieDefaultArgs instead
     */
    export type MovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use movieScoreDefaultArgs instead
     */
    export type movieScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = movieScoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieVodDefaultArgs instead
     */
    export type MovieVodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieVodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use articleDefaultArgs instead
     */
    export type articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = articleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use articleCommentsDefaultArgs instead
     */
    export type articleCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = articleCommentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use articleLikesDefaultArgs instead
     */
    export type articleLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = articleLikesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchPostDefaultArgs instead
     */
    export type MatchPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchApplicationDefaultArgs instead
     */
    export type MatchApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatRoomDefaultArgs instead
     */
    export type ChatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatRoomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatRoomMemberDefaultArgs instead
     */
    export type ChatRoomMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatRoomMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatMessageDefaultArgs instead
     */
    export type ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatMessageDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}