
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
 * Model channelchats
 * 
 */
export type channelchats = $Result.DefaultSelection<Prisma.$channelchatsPayload>
/**
 * Model channelmembers
 * 
 */
export type channelmembers = $Result.DefaultSelection<Prisma.$channelmembersPayload>
/**
 * Model channels
 * 
 */
export type channels = $Result.DefaultSelection<Prisma.$channelsPayload>
/**
 * Model workspace
 * 
 */
export type workspace = $Result.DefaultSelection<Prisma.$workspacePayload>
/**
 * Model workspacemembers
 * 
 */
export type workspacemembers = $Result.DefaultSelection<Prisma.$workspacemembersPayload>

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
   * `prisma.channelchats`: Exposes CRUD operations for the **channelchats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channelchats
    * const channelchats = await prisma.channelchats.findMany()
    * ```
    */
  get channelchats(): Prisma.channelchatsDelegate<ExtArgs>;

  /**
   * `prisma.channelmembers`: Exposes CRUD operations for the **channelmembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channelmembers
    * const channelmembers = await prisma.channelmembers.findMany()
    * ```
    */
  get channelmembers(): Prisma.channelmembersDelegate<ExtArgs>;

  /**
   * `prisma.channels`: Exposes CRUD operations for the **channels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channels.findMany()
    * ```
    */
  get channels(): Prisma.channelsDelegate<ExtArgs>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.workspaceDelegate<ExtArgs>;

  /**
   * `prisma.workspacemembers`: Exposes CRUD operations for the **workspacemembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspacemembers
    * const workspacemembers = await prisma.workspacemembers.findMany()
    * ```
    */
  get workspacemembers(): Prisma.workspacemembersDelegate<ExtArgs>;
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
    channelchats: 'channelchats',
    channelmembers: 'channelmembers',
    channels: 'channels',
    workspace: 'workspace',
    workspacemembers: 'workspacemembers'
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
      modelProps: 'comment' | 'movie' | 'user' | 'channelchats' | 'channelmembers' | 'channels' | 'workspace' | 'workspacemembers'
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
      channelchats: {
        payload: Prisma.$channelchatsPayload<ExtArgs>
        fields: Prisma.channelchatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.channelchatsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelchatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.channelchatsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelchatsPayload>
          }
          findFirst: {
            args: Prisma.channelchatsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelchatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.channelchatsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelchatsPayload>
          }
          findMany: {
            args: Prisma.channelchatsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelchatsPayload>[]
          }
          create: {
            args: Prisma.channelchatsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelchatsPayload>
          }
          createMany: {
            args: Prisma.channelchatsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.channelchatsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelchatsPayload>
          }
          update: {
            args: Prisma.channelchatsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelchatsPayload>
          }
          deleteMany: {
            args: Prisma.channelchatsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.channelchatsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.channelchatsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelchatsPayload>
          }
          aggregate: {
            args: Prisma.ChannelchatsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChannelchats>
          }
          groupBy: {
            args: Prisma.channelchatsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChannelchatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.channelchatsCountArgs<ExtArgs>,
            result: $Utils.Optional<ChannelchatsCountAggregateOutputType> | number
          }
        }
      }
      channelmembers: {
        payload: Prisma.$channelmembersPayload<ExtArgs>
        fields: Prisma.channelmembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.channelmembersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelmembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.channelmembersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelmembersPayload>
          }
          findFirst: {
            args: Prisma.channelmembersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelmembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.channelmembersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelmembersPayload>
          }
          findMany: {
            args: Prisma.channelmembersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelmembersPayload>[]
          }
          create: {
            args: Prisma.channelmembersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelmembersPayload>
          }
          createMany: {
            args: Prisma.channelmembersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.channelmembersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelmembersPayload>
          }
          update: {
            args: Prisma.channelmembersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelmembersPayload>
          }
          deleteMany: {
            args: Prisma.channelmembersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.channelmembersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.channelmembersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelmembersPayload>
          }
          aggregate: {
            args: Prisma.ChannelmembersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChannelmembers>
          }
          groupBy: {
            args: Prisma.channelmembersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChannelmembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.channelmembersCountArgs<ExtArgs>,
            result: $Utils.Optional<ChannelmembersCountAggregateOutputType> | number
          }
        }
      }
      channels: {
        payload: Prisma.$channelsPayload<ExtArgs>
        fields: Prisma.channelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.channelsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.channelsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          findFirst: {
            args: Prisma.channelsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.channelsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          findMany: {
            args: Prisma.channelsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>[]
          }
          create: {
            args: Prisma.channelsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          createMany: {
            args: Prisma.channelsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.channelsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          update: {
            args: Prisma.channelsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          deleteMany: {
            args: Prisma.channelsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.channelsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.channelsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          aggregate: {
            args: Prisma.ChannelsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChannels>
          }
          groupBy: {
            args: Prisma.channelsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChannelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.channelsCountArgs<ExtArgs>,
            result: $Utils.Optional<ChannelsCountAggregateOutputType> | number
          }
        }
      }
      workspace: {
        payload: Prisma.$workspacePayload<ExtArgs>
        fields: Prisma.workspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspaceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspaceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          findFirst: {
            args: Prisma.workspaceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspaceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          findMany: {
            args: Prisma.workspaceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>[]
          }
          create: {
            args: Prisma.workspaceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          createMany: {
            args: Prisma.workspaceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.workspaceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          update: {
            args: Prisma.workspaceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          deleteMany: {
            args: Prisma.workspaceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.workspaceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.workspaceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.workspaceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspaceCountArgs<ExtArgs>,
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      workspacemembers: {
        payload: Prisma.$workspacemembersPayload<ExtArgs>
        fields: Prisma.workspacemembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspacemembersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacemembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspacemembersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacemembersPayload>
          }
          findFirst: {
            args: Prisma.workspacemembersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacemembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspacemembersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacemembersPayload>
          }
          findMany: {
            args: Prisma.workspacemembersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacemembersPayload>[]
          }
          create: {
            args: Prisma.workspacemembersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacemembersPayload>
          }
          createMany: {
            args: Prisma.workspacemembersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.workspacemembersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacemembersPayload>
          }
          update: {
            args: Prisma.workspacemembersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacemembersPayload>
          }
          deleteMany: {
            args: Prisma.workspacemembersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.workspacemembersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.workspacemembersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$workspacemembersPayload>
          }
          aggregate: {
            args: Prisma.WorkspacemembersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorkspacemembers>
          }
          groupBy: {
            args: Prisma.workspacemembersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorkspacemembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspacemembersCountArgs<ExtArgs>,
            result: $Utils.Optional<WorkspacemembersCountAggregateOutputType> | number
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
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comment?: boolean | MovieCountOutputTypeCountCommentArgs
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Comment: number
    channelchats: number
    channelmembers: number
    workspace: number
    workspacemembers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comment?: boolean | UserCountOutputTypeCountCommentArgs
    channelchats?: boolean | UserCountOutputTypeCountChannelchatsArgs
    channelmembers?: boolean | UserCountOutputTypeCountChannelmembersArgs
    workspace?: boolean | UserCountOutputTypeCountWorkspaceArgs
    workspacemembers?: boolean | UserCountOutputTypeCountWorkspacemembersArgs
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
  export type UserCountOutputTypeCountChannelchatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channelchatsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChannelmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channelmembersWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspaceWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspacemembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacemembersWhereInput
  }



  /**
   * Count Type ChannelsCountOutputType
   */

  export type ChannelsCountOutputType = {
    channelchats: number
  }

  export type ChannelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channelchats?: boolean | ChannelsCountOutputTypeCountChannelchatsArgs
  }

  // Custom InputTypes

  /**
   * ChannelsCountOutputType without action
   */
  export type ChannelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsCountOutputType
     */
    select?: ChannelsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChannelsCountOutputType without action
   */
  export type ChannelsCountOutputTypeCountChannelchatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channelchatsWhereInput
  }



  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    channels: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | WorkspaceCountOutputTypeCountChannelsArgs
  }

  // Custom InputTypes

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channelsWhereInput
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
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      Comment: Prisma.$CommentPayload<ExtArgs>[]
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
    Comment?: boolean | User$CommentArgs<ExtArgs>
    channelchats?: boolean | User$channelchatsArgs<ExtArgs>
    channelmembers?: boolean | User$channelmembersArgs<ExtArgs>
    workspace?: boolean | User$workspaceArgs<ExtArgs>
    workspacemembers?: boolean | User$workspacemembersArgs<ExtArgs>
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
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comment?: boolean | User$CommentArgs<ExtArgs>
    channelchats?: boolean | User$channelchatsArgs<ExtArgs>
    channelmembers?: boolean | User$channelmembersArgs<ExtArgs>
    workspace?: boolean | User$workspaceArgs<ExtArgs>
    workspacemembers?: boolean | User$workspacemembersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Comment: Prisma.$CommentPayload<ExtArgs>[]
      channelchats: Prisma.$channelchatsPayload<ExtArgs>[]
      channelmembers: Prisma.$channelmembersPayload<ExtArgs>[]
      workspace: Prisma.$workspacePayload<ExtArgs>[]
      workspacemembers: Prisma.$workspacemembersPayload<ExtArgs>[]
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

    channelchats<T extends User$channelchatsArgs<ExtArgs> = {}>(args?: Subset<T, User$channelchatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'findMany'> | Null>;

    channelmembers<T extends User$channelmembersArgs<ExtArgs> = {}>(args?: Subset<T, User$channelmembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelmembersPayload<ExtArgs>, T, 'findMany'> | Null>;

    workspace<T extends User$workspaceArgs<ExtArgs> = {}>(args?: Subset<T, User$workspaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'findMany'> | Null>;

    workspacemembers<T extends User$workspacemembersArgs<ExtArgs> = {}>(args?: Subset<T, User$workspacemembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacemembersPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * User.channelchats
   */
  export type User$channelchatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    where?: channelchatsWhereInput
    orderBy?: channelchatsOrderByWithRelationInput | channelchatsOrderByWithRelationInput[]
    cursor?: channelchatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelchatsScalarFieldEnum | ChannelchatsScalarFieldEnum[]
  }


  /**
   * User.channelmembers
   */
  export type User$channelmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
    where?: channelmembersWhereInput
    orderBy?: channelmembersOrderByWithRelationInput | channelmembersOrderByWithRelationInput[]
    cursor?: channelmembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelmembersScalarFieldEnum | ChannelmembersScalarFieldEnum[]
  }


  /**
   * User.workspace
   */
  export type User$workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    where?: workspaceWhereInput
    orderBy?: workspaceOrderByWithRelationInput | workspaceOrderByWithRelationInput[]
    cursor?: workspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }


  /**
   * User.workspacemembers
   */
  export type User$workspacemembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
    where?: workspacemembersWhereInput
    orderBy?: workspacemembersOrderByWithRelationInput | workspacemembersOrderByWithRelationInput[]
    cursor?: workspacemembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacemembersScalarFieldEnum | WorkspacemembersScalarFieldEnum[]
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
   * Model channelchats
   */

  export type AggregateChannelchats = {
    _count: ChannelchatsCountAggregateOutputType | null
    _avg: ChannelchatsAvgAggregateOutputType | null
    _sum: ChannelchatsSumAggregateOutputType | null
    _min: ChannelchatsMinAggregateOutputType | null
    _max: ChannelchatsMaxAggregateOutputType | null
  }

  export type ChannelchatsAvgAggregateOutputType = {
    id: number | null
    UserId: number | null
    ChannelId: number | null
  }

  export type ChannelchatsSumAggregateOutputType = {
    id: number | null
    UserId: number | null
    ChannelId: number | null
  }

  export type ChannelchatsMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    UserId: number | null
    ChannelId: number | null
  }

  export type ChannelchatsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    UserId: number | null
    ChannelId: number | null
  }

  export type ChannelchatsCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    UserId: number
    ChannelId: number
    _all: number
  }


  export type ChannelchatsAvgAggregateInputType = {
    id?: true
    UserId?: true
    ChannelId?: true
  }

  export type ChannelchatsSumAggregateInputType = {
    id?: true
    UserId?: true
    ChannelId?: true
  }

  export type ChannelchatsMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    UserId?: true
    ChannelId?: true
  }

  export type ChannelchatsMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    UserId?: true
    ChannelId?: true
  }

  export type ChannelchatsCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    UserId?: true
    ChannelId?: true
    _all?: true
  }

  export type ChannelchatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channelchats to aggregate.
     */
    where?: channelchatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channelchats to fetch.
     */
    orderBy?: channelchatsOrderByWithRelationInput | channelchatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: channelchatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channelchats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channelchats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned channelchats
    **/
    _count?: true | ChannelchatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelchatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelchatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelchatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelchatsMaxAggregateInputType
  }

  export type GetChannelchatsAggregateType<T extends ChannelchatsAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelchats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelchats[P]>
      : GetScalarType<T[P], AggregateChannelchats[P]>
  }




  export type channelchatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channelchatsWhereInput
    orderBy?: channelchatsOrderByWithAggregationInput | channelchatsOrderByWithAggregationInput[]
    by: ChannelchatsScalarFieldEnum[] | ChannelchatsScalarFieldEnum
    having?: channelchatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelchatsCountAggregateInputType | true
    _avg?: ChannelchatsAvgAggregateInputType
    _sum?: ChannelchatsSumAggregateInputType
    _min?: ChannelchatsMinAggregateInputType
    _max?: ChannelchatsMaxAggregateInputType
  }

  export type ChannelchatsGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    updatedAt: Date
    UserId: number | null
    ChannelId: number | null
    _count: ChannelchatsCountAggregateOutputType | null
    _avg: ChannelchatsAvgAggregateOutputType | null
    _sum: ChannelchatsSumAggregateOutputType | null
    _min: ChannelchatsMinAggregateOutputType | null
    _max: ChannelchatsMaxAggregateOutputType | null
  }

  type GetChannelchatsGroupByPayload<T extends channelchatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelchatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelchatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelchatsGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelchatsGroupByOutputType[P]>
        }
      >
    >


  export type channelchatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserId?: boolean
    ChannelId?: boolean
    channels?: boolean | channelchats$channelsArgs<ExtArgs>
    User?: boolean | channelchats$UserArgs<ExtArgs>
  }, ExtArgs["result"]["channelchats"]>

  export type channelchatsSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserId?: boolean
    ChannelId?: boolean
  }

  export type channelchatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | channelchats$channelsArgs<ExtArgs>
    User?: boolean | channelchats$UserArgs<ExtArgs>
  }


  export type $channelchatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "channelchats"
    objects: {
      channels: Prisma.$channelsPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      updatedAt: Date
      UserId: number | null
      ChannelId: number | null
    }, ExtArgs["result"]["channelchats"]>
    composites: {}
  }


  type channelchatsGetPayload<S extends boolean | null | undefined | channelchatsDefaultArgs> = $Result.GetResult<Prisma.$channelchatsPayload, S>

  type channelchatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<channelchatsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChannelchatsCountAggregateInputType | true
    }

  export interface channelchatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['channelchats'], meta: { name: 'channelchats' } }
    /**
     * Find zero or one Channelchats that matches the filter.
     * @param {channelchatsFindUniqueArgs} args - Arguments to find a Channelchats
     * @example
     * // Get one Channelchats
     * const channelchats = await prisma.channelchats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends channelchatsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, channelchatsFindUniqueArgs<ExtArgs>>
    ): Prisma__channelchatsClient<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Channelchats that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {channelchatsFindUniqueOrThrowArgs} args - Arguments to find a Channelchats
     * @example
     * // Get one Channelchats
     * const channelchats = await prisma.channelchats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends channelchatsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, channelchatsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__channelchatsClient<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Channelchats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelchatsFindFirstArgs} args - Arguments to find a Channelchats
     * @example
     * // Get one Channelchats
     * const channelchats = await prisma.channelchats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends channelchatsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, channelchatsFindFirstArgs<ExtArgs>>
    ): Prisma__channelchatsClient<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Channelchats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelchatsFindFirstOrThrowArgs} args - Arguments to find a Channelchats
     * @example
     * // Get one Channelchats
     * const channelchats = await prisma.channelchats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends channelchatsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, channelchatsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__channelchatsClient<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Channelchats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelchatsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channelchats
     * const channelchats = await prisma.channelchats.findMany()
     * 
     * // Get first 10 Channelchats
     * const channelchats = await prisma.channelchats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelchatsWithIdOnly = await prisma.channelchats.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends channelchatsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelchatsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Channelchats.
     * @param {channelchatsCreateArgs} args - Arguments to create a Channelchats.
     * @example
     * // Create one Channelchats
     * const Channelchats = await prisma.channelchats.create({
     *   data: {
     *     // ... data to create a Channelchats
     *   }
     * })
     * 
    **/
    create<T extends channelchatsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, channelchatsCreateArgs<ExtArgs>>
    ): Prisma__channelchatsClient<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Channelchats.
     *     @param {channelchatsCreateManyArgs} args - Arguments to create many Channelchats.
     *     @example
     *     // Create many Channelchats
     *     const channelchats = await prisma.channelchats.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends channelchatsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelchatsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Channelchats.
     * @param {channelchatsDeleteArgs} args - Arguments to delete one Channelchats.
     * @example
     * // Delete one Channelchats
     * const Channelchats = await prisma.channelchats.delete({
     *   where: {
     *     // ... filter to delete one Channelchats
     *   }
     * })
     * 
    **/
    delete<T extends channelchatsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, channelchatsDeleteArgs<ExtArgs>>
    ): Prisma__channelchatsClient<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Channelchats.
     * @param {channelchatsUpdateArgs} args - Arguments to update one Channelchats.
     * @example
     * // Update one Channelchats
     * const channelchats = await prisma.channelchats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends channelchatsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, channelchatsUpdateArgs<ExtArgs>>
    ): Prisma__channelchatsClient<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Channelchats.
     * @param {channelchatsDeleteManyArgs} args - Arguments to filter Channelchats to delete.
     * @example
     * // Delete a few Channelchats
     * const { count } = await prisma.channelchats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends channelchatsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelchatsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channelchats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelchatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channelchats
     * const channelchats = await prisma.channelchats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends channelchatsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, channelchatsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channelchats.
     * @param {channelchatsUpsertArgs} args - Arguments to update or create a Channelchats.
     * @example
     * // Update or create a Channelchats
     * const channelchats = await prisma.channelchats.upsert({
     *   create: {
     *     // ... data to create a Channelchats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channelchats we want to update
     *   }
     * })
    **/
    upsert<T extends channelchatsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, channelchatsUpsertArgs<ExtArgs>>
    ): Prisma__channelchatsClient<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Channelchats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelchatsCountArgs} args - Arguments to filter Channelchats to count.
     * @example
     * // Count the number of Channelchats
     * const count = await prisma.channelchats.count({
     *   where: {
     *     // ... the filter for the Channelchats we want to count
     *   }
     * })
    **/
    count<T extends channelchatsCountArgs>(
      args?: Subset<T, channelchatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelchatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channelchats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelchatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelchatsAggregateArgs>(args: Subset<T, ChannelchatsAggregateArgs>): Prisma.PrismaPromise<GetChannelchatsAggregateType<T>>

    /**
     * Group by Channelchats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelchatsGroupByArgs} args - Group by arguments.
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
      T extends channelchatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: channelchatsGroupByArgs['orderBy'] }
        : { orderBy?: channelchatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, channelchatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelchatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the channelchats model
   */
  readonly fields: channelchatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for channelchats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__channelchatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    channels<T extends channelchats$channelsArgs<ExtArgs> = {}>(args?: Subset<T, channelchats$channelsArgs<ExtArgs>>): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    User<T extends channelchats$UserArgs<ExtArgs> = {}>(args?: Subset<T, channelchats$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the channelchats model
   */ 
  interface channelchatsFieldRefs {
    readonly id: FieldRef<"channelchats", 'Int'>
    readonly content: FieldRef<"channelchats", 'String'>
    readonly createdAt: FieldRef<"channelchats", 'DateTime'>
    readonly updatedAt: FieldRef<"channelchats", 'DateTime'>
    readonly UserId: FieldRef<"channelchats", 'Int'>
    readonly ChannelId: FieldRef<"channelchats", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * channelchats findUnique
   */
  export type channelchatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    /**
     * Filter, which channelchats to fetch.
     */
    where: channelchatsWhereUniqueInput
  }


  /**
   * channelchats findUniqueOrThrow
   */
  export type channelchatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    /**
     * Filter, which channelchats to fetch.
     */
    where: channelchatsWhereUniqueInput
  }


  /**
   * channelchats findFirst
   */
  export type channelchatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    /**
     * Filter, which channelchats to fetch.
     */
    where?: channelchatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channelchats to fetch.
     */
    orderBy?: channelchatsOrderByWithRelationInput | channelchatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channelchats.
     */
    cursor?: channelchatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channelchats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channelchats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channelchats.
     */
    distinct?: ChannelchatsScalarFieldEnum | ChannelchatsScalarFieldEnum[]
  }


  /**
   * channelchats findFirstOrThrow
   */
  export type channelchatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    /**
     * Filter, which channelchats to fetch.
     */
    where?: channelchatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channelchats to fetch.
     */
    orderBy?: channelchatsOrderByWithRelationInput | channelchatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channelchats.
     */
    cursor?: channelchatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channelchats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channelchats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channelchats.
     */
    distinct?: ChannelchatsScalarFieldEnum | ChannelchatsScalarFieldEnum[]
  }


  /**
   * channelchats findMany
   */
  export type channelchatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    /**
     * Filter, which channelchats to fetch.
     */
    where?: channelchatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channelchats to fetch.
     */
    orderBy?: channelchatsOrderByWithRelationInput | channelchatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing channelchats.
     */
    cursor?: channelchatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channelchats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channelchats.
     */
    skip?: number
    distinct?: ChannelchatsScalarFieldEnum | ChannelchatsScalarFieldEnum[]
  }


  /**
   * channelchats create
   */
  export type channelchatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    /**
     * The data needed to create a channelchats.
     */
    data: XOR<channelchatsCreateInput, channelchatsUncheckedCreateInput>
  }


  /**
   * channelchats createMany
   */
  export type channelchatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many channelchats.
     */
    data: channelchatsCreateManyInput | channelchatsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * channelchats update
   */
  export type channelchatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    /**
     * The data needed to update a channelchats.
     */
    data: XOR<channelchatsUpdateInput, channelchatsUncheckedUpdateInput>
    /**
     * Choose, which channelchats to update.
     */
    where: channelchatsWhereUniqueInput
  }


  /**
   * channelchats updateMany
   */
  export type channelchatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update channelchats.
     */
    data: XOR<channelchatsUpdateManyMutationInput, channelchatsUncheckedUpdateManyInput>
    /**
     * Filter which channelchats to update
     */
    where?: channelchatsWhereInput
  }


  /**
   * channelchats upsert
   */
  export type channelchatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    /**
     * The filter to search for the channelchats to update in case it exists.
     */
    where: channelchatsWhereUniqueInput
    /**
     * In case the channelchats found by the `where` argument doesn't exist, create a new channelchats with this data.
     */
    create: XOR<channelchatsCreateInput, channelchatsUncheckedCreateInput>
    /**
     * In case the channelchats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<channelchatsUpdateInput, channelchatsUncheckedUpdateInput>
  }


  /**
   * channelchats delete
   */
  export type channelchatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    /**
     * Filter which channelchats to delete.
     */
    where: channelchatsWhereUniqueInput
  }


  /**
   * channelchats deleteMany
   */
  export type channelchatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channelchats to delete
     */
    where?: channelchatsWhereInput
  }


  /**
   * channelchats.channels
   */
  export type channelchats$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    where?: channelsWhereInput
  }


  /**
   * channelchats.User
   */
  export type channelchats$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * channelchats without action
   */
  export type channelchatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
  }



  /**
   * Model channelmembers
   */

  export type AggregateChannelmembers = {
    _count: ChannelmembersCountAggregateOutputType | null
    _avg: ChannelmembersAvgAggregateOutputType | null
    _sum: ChannelmembersSumAggregateOutputType | null
    _min: ChannelmembersMinAggregateOutputType | null
    _max: ChannelmembersMaxAggregateOutputType | null
  }

  export type ChannelmembersAvgAggregateOutputType = {
    ChannelId: number | null
    UserId: number | null
  }

  export type ChannelmembersSumAggregateOutputType = {
    ChannelId: number | null
    UserId: number | null
  }

  export type ChannelmembersMinAggregateOutputType = {
    ChannelId: number | null
    UserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelmembersMaxAggregateOutputType = {
    ChannelId: number | null
    UserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelmembersCountAggregateOutputType = {
    ChannelId: number
    UserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChannelmembersAvgAggregateInputType = {
    ChannelId?: true
    UserId?: true
  }

  export type ChannelmembersSumAggregateInputType = {
    ChannelId?: true
    UserId?: true
  }

  export type ChannelmembersMinAggregateInputType = {
    ChannelId?: true
    UserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelmembersMaxAggregateInputType = {
    ChannelId?: true
    UserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelmembersCountAggregateInputType = {
    ChannelId?: true
    UserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChannelmembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channelmembers to aggregate.
     */
    where?: channelmembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channelmembers to fetch.
     */
    orderBy?: channelmembersOrderByWithRelationInput | channelmembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: channelmembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channelmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channelmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned channelmembers
    **/
    _count?: true | ChannelmembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelmembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelmembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelmembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelmembersMaxAggregateInputType
  }

  export type GetChannelmembersAggregateType<T extends ChannelmembersAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelmembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelmembers[P]>
      : GetScalarType<T[P], AggregateChannelmembers[P]>
  }




  export type channelmembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channelmembersWhereInput
    orderBy?: channelmembersOrderByWithAggregationInput | channelmembersOrderByWithAggregationInput[]
    by: ChannelmembersScalarFieldEnum[] | ChannelmembersScalarFieldEnum
    having?: channelmembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelmembersCountAggregateInputType | true
    _avg?: ChannelmembersAvgAggregateInputType
    _sum?: ChannelmembersSumAggregateInputType
    _min?: ChannelmembersMinAggregateInputType
    _max?: ChannelmembersMaxAggregateInputType
  }

  export type ChannelmembersGroupByOutputType = {
    ChannelId: number
    UserId: number
    createdAt: Date
    updatedAt: Date
    _count: ChannelmembersCountAggregateOutputType | null
    _avg: ChannelmembersAvgAggregateOutputType | null
    _sum: ChannelmembersSumAggregateOutputType | null
    _min: ChannelmembersMinAggregateOutputType | null
    _max: ChannelmembersMaxAggregateOutputType | null
  }

  type GetChannelmembersGroupByPayload<T extends channelmembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelmembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelmembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelmembersGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelmembersGroupByOutputType[P]>
        }
      >
    >


  export type channelmembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ChannelId?: boolean
    UserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelmembers"]>

  export type channelmembersSelectScalar = {
    ChannelId?: boolean
    UserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type channelmembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $channelmembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "channelmembers"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ChannelId: number
      UserId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["channelmembers"]>
    composites: {}
  }


  type channelmembersGetPayload<S extends boolean | null | undefined | channelmembersDefaultArgs> = $Result.GetResult<Prisma.$channelmembersPayload, S>

  type channelmembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<channelmembersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChannelmembersCountAggregateInputType | true
    }

  export interface channelmembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['channelmembers'], meta: { name: 'channelmembers' } }
    /**
     * Find zero or one Channelmembers that matches the filter.
     * @param {channelmembersFindUniqueArgs} args - Arguments to find a Channelmembers
     * @example
     * // Get one Channelmembers
     * const channelmembers = await prisma.channelmembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends channelmembersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, channelmembersFindUniqueArgs<ExtArgs>>
    ): Prisma__channelmembersClient<$Result.GetResult<Prisma.$channelmembersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Channelmembers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {channelmembersFindUniqueOrThrowArgs} args - Arguments to find a Channelmembers
     * @example
     * // Get one Channelmembers
     * const channelmembers = await prisma.channelmembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends channelmembersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, channelmembersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__channelmembersClient<$Result.GetResult<Prisma.$channelmembersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Channelmembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelmembersFindFirstArgs} args - Arguments to find a Channelmembers
     * @example
     * // Get one Channelmembers
     * const channelmembers = await prisma.channelmembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends channelmembersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, channelmembersFindFirstArgs<ExtArgs>>
    ): Prisma__channelmembersClient<$Result.GetResult<Prisma.$channelmembersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Channelmembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelmembersFindFirstOrThrowArgs} args - Arguments to find a Channelmembers
     * @example
     * // Get one Channelmembers
     * const channelmembers = await prisma.channelmembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends channelmembersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, channelmembersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__channelmembersClient<$Result.GetResult<Prisma.$channelmembersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Channelmembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelmembersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channelmembers
     * const channelmembers = await prisma.channelmembers.findMany()
     * 
     * // Get first 10 Channelmembers
     * const channelmembers = await prisma.channelmembers.findMany({ take: 10 })
     * 
     * // Only select the `ChannelId`
     * const channelmembersWithChannelIdOnly = await prisma.channelmembers.findMany({ select: { ChannelId: true } })
     * 
    **/
    findMany<T extends channelmembersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelmembersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelmembersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Channelmembers.
     * @param {channelmembersCreateArgs} args - Arguments to create a Channelmembers.
     * @example
     * // Create one Channelmembers
     * const Channelmembers = await prisma.channelmembers.create({
     *   data: {
     *     // ... data to create a Channelmembers
     *   }
     * })
     * 
    **/
    create<T extends channelmembersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, channelmembersCreateArgs<ExtArgs>>
    ): Prisma__channelmembersClient<$Result.GetResult<Prisma.$channelmembersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Channelmembers.
     *     @param {channelmembersCreateManyArgs} args - Arguments to create many Channelmembers.
     *     @example
     *     // Create many Channelmembers
     *     const channelmembers = await prisma.channelmembers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends channelmembersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelmembersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Channelmembers.
     * @param {channelmembersDeleteArgs} args - Arguments to delete one Channelmembers.
     * @example
     * // Delete one Channelmembers
     * const Channelmembers = await prisma.channelmembers.delete({
     *   where: {
     *     // ... filter to delete one Channelmembers
     *   }
     * })
     * 
    **/
    delete<T extends channelmembersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, channelmembersDeleteArgs<ExtArgs>>
    ): Prisma__channelmembersClient<$Result.GetResult<Prisma.$channelmembersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Channelmembers.
     * @param {channelmembersUpdateArgs} args - Arguments to update one Channelmembers.
     * @example
     * // Update one Channelmembers
     * const channelmembers = await prisma.channelmembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends channelmembersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, channelmembersUpdateArgs<ExtArgs>>
    ): Prisma__channelmembersClient<$Result.GetResult<Prisma.$channelmembersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Channelmembers.
     * @param {channelmembersDeleteManyArgs} args - Arguments to filter Channelmembers to delete.
     * @example
     * // Delete a few Channelmembers
     * const { count } = await prisma.channelmembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends channelmembersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelmembersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channelmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelmembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channelmembers
     * const channelmembers = await prisma.channelmembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends channelmembersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, channelmembersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channelmembers.
     * @param {channelmembersUpsertArgs} args - Arguments to update or create a Channelmembers.
     * @example
     * // Update or create a Channelmembers
     * const channelmembers = await prisma.channelmembers.upsert({
     *   create: {
     *     // ... data to create a Channelmembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channelmembers we want to update
     *   }
     * })
    **/
    upsert<T extends channelmembersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, channelmembersUpsertArgs<ExtArgs>>
    ): Prisma__channelmembersClient<$Result.GetResult<Prisma.$channelmembersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Channelmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelmembersCountArgs} args - Arguments to filter Channelmembers to count.
     * @example
     * // Count the number of Channelmembers
     * const count = await prisma.channelmembers.count({
     *   where: {
     *     // ... the filter for the Channelmembers we want to count
     *   }
     * })
    **/
    count<T extends channelmembersCountArgs>(
      args?: Subset<T, channelmembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelmembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channelmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelmembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelmembersAggregateArgs>(args: Subset<T, ChannelmembersAggregateArgs>): Prisma.PrismaPromise<GetChannelmembersAggregateType<T>>

    /**
     * Group by Channelmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelmembersGroupByArgs} args - Group by arguments.
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
      T extends channelmembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: channelmembersGroupByArgs['orderBy'] }
        : { orderBy?: channelmembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, channelmembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelmembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the channelmembers model
   */
  readonly fields: channelmembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for channelmembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__channelmembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

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
   * Fields of the channelmembers model
   */ 
  interface channelmembersFieldRefs {
    readonly ChannelId: FieldRef<"channelmembers", 'Int'>
    readonly UserId: FieldRef<"channelmembers", 'Int'>
    readonly createdAt: FieldRef<"channelmembers", 'DateTime'>
    readonly updatedAt: FieldRef<"channelmembers", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * channelmembers findUnique
   */
  export type channelmembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
    /**
     * Filter, which channelmembers to fetch.
     */
    where: channelmembersWhereUniqueInput
  }


  /**
   * channelmembers findUniqueOrThrow
   */
  export type channelmembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
    /**
     * Filter, which channelmembers to fetch.
     */
    where: channelmembersWhereUniqueInput
  }


  /**
   * channelmembers findFirst
   */
  export type channelmembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
    /**
     * Filter, which channelmembers to fetch.
     */
    where?: channelmembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channelmembers to fetch.
     */
    orderBy?: channelmembersOrderByWithRelationInput | channelmembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channelmembers.
     */
    cursor?: channelmembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channelmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channelmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channelmembers.
     */
    distinct?: ChannelmembersScalarFieldEnum | ChannelmembersScalarFieldEnum[]
  }


  /**
   * channelmembers findFirstOrThrow
   */
  export type channelmembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
    /**
     * Filter, which channelmembers to fetch.
     */
    where?: channelmembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channelmembers to fetch.
     */
    orderBy?: channelmembersOrderByWithRelationInput | channelmembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channelmembers.
     */
    cursor?: channelmembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channelmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channelmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channelmembers.
     */
    distinct?: ChannelmembersScalarFieldEnum | ChannelmembersScalarFieldEnum[]
  }


  /**
   * channelmembers findMany
   */
  export type channelmembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
    /**
     * Filter, which channelmembers to fetch.
     */
    where?: channelmembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channelmembers to fetch.
     */
    orderBy?: channelmembersOrderByWithRelationInput | channelmembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing channelmembers.
     */
    cursor?: channelmembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channelmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channelmembers.
     */
    skip?: number
    distinct?: ChannelmembersScalarFieldEnum | ChannelmembersScalarFieldEnum[]
  }


  /**
   * channelmembers create
   */
  export type channelmembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
    /**
     * The data needed to create a channelmembers.
     */
    data: XOR<channelmembersCreateInput, channelmembersUncheckedCreateInput>
  }


  /**
   * channelmembers createMany
   */
  export type channelmembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many channelmembers.
     */
    data: channelmembersCreateManyInput | channelmembersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * channelmembers update
   */
  export type channelmembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
    /**
     * The data needed to update a channelmembers.
     */
    data: XOR<channelmembersUpdateInput, channelmembersUncheckedUpdateInput>
    /**
     * Choose, which channelmembers to update.
     */
    where: channelmembersWhereUniqueInput
  }


  /**
   * channelmembers updateMany
   */
  export type channelmembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update channelmembers.
     */
    data: XOR<channelmembersUpdateManyMutationInput, channelmembersUncheckedUpdateManyInput>
    /**
     * Filter which channelmembers to update
     */
    where?: channelmembersWhereInput
  }


  /**
   * channelmembers upsert
   */
  export type channelmembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
    /**
     * The filter to search for the channelmembers to update in case it exists.
     */
    where: channelmembersWhereUniqueInput
    /**
     * In case the channelmembers found by the `where` argument doesn't exist, create a new channelmembers with this data.
     */
    create: XOR<channelmembersCreateInput, channelmembersUncheckedCreateInput>
    /**
     * In case the channelmembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<channelmembersUpdateInput, channelmembersUncheckedUpdateInput>
  }


  /**
   * channelmembers delete
   */
  export type channelmembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
    /**
     * Filter which channelmembers to delete.
     */
    where: channelmembersWhereUniqueInput
  }


  /**
   * channelmembers deleteMany
   */
  export type channelmembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channelmembers to delete
     */
    where?: channelmembersWhereInput
  }


  /**
   * channelmembers without action
   */
  export type channelmembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelmembers
     */
    select?: channelmembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelmembersInclude<ExtArgs> | null
  }



  /**
   * Model channels
   */

  export type AggregateChannels = {
    _count: ChannelsCountAggregateOutputType | null
    _avg: ChannelsAvgAggregateOutputType | null
    _sum: ChannelsSumAggregateOutputType | null
    _min: ChannelsMinAggregateOutputType | null
    _max: ChannelsMaxAggregateOutputType | null
  }

  export type ChannelsAvgAggregateOutputType = {
    id: number | null
    WorkspaceId: number | null
  }

  export type ChannelsSumAggregateOutputType = {
    id: number | null
    WorkspaceId: number | null
  }

  export type ChannelsMinAggregateOutputType = {
    id: number | null
    name: string | null
    private: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    WorkspaceId: number | null
  }

  export type ChannelsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    private: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    WorkspaceId: number | null
  }

  export type ChannelsCountAggregateOutputType = {
    id: number
    name: number
    private: number
    createdAt: number
    updatedAt: number
    WorkspaceId: number
    _all: number
  }


  export type ChannelsAvgAggregateInputType = {
    id?: true
    WorkspaceId?: true
  }

  export type ChannelsSumAggregateInputType = {
    id?: true
    WorkspaceId?: true
  }

  export type ChannelsMinAggregateInputType = {
    id?: true
    name?: true
    private?: true
    createdAt?: true
    updatedAt?: true
    WorkspaceId?: true
  }

  export type ChannelsMaxAggregateInputType = {
    id?: true
    name?: true
    private?: true
    createdAt?: true
    updatedAt?: true
    WorkspaceId?: true
  }

  export type ChannelsCountAggregateInputType = {
    id?: true
    name?: true
    private?: true
    createdAt?: true
    updatedAt?: true
    WorkspaceId?: true
    _all?: true
  }

  export type ChannelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channels to aggregate.
     */
    where?: channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelsOrderByWithRelationInput | channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned channels
    **/
    _count?: true | ChannelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelsMaxAggregateInputType
  }

  export type GetChannelsAggregateType<T extends ChannelsAggregateArgs> = {
        [P in keyof T & keyof AggregateChannels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannels[P]>
      : GetScalarType<T[P], AggregateChannels[P]>
  }




  export type channelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channelsWhereInput
    orderBy?: channelsOrderByWithAggregationInput | channelsOrderByWithAggregationInput[]
    by: ChannelsScalarFieldEnum[] | ChannelsScalarFieldEnum
    having?: channelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelsCountAggregateInputType | true
    _avg?: ChannelsAvgAggregateInputType
    _sum?: ChannelsSumAggregateInputType
    _min?: ChannelsMinAggregateInputType
    _max?: ChannelsMaxAggregateInputType
  }

  export type ChannelsGroupByOutputType = {
    id: number
    name: string
    private: boolean | null
    createdAt: Date
    updatedAt: Date
    WorkspaceId: number | null
    _count: ChannelsCountAggregateOutputType | null
    _avg: ChannelsAvgAggregateOutputType | null
    _sum: ChannelsSumAggregateOutputType | null
    _min: ChannelsMinAggregateOutputType | null
    _max: ChannelsMaxAggregateOutputType | null
  }

  type GetChannelsGroupByPayload<T extends channelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelsGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelsGroupByOutputType[P]>
        }
      >
    >


  export type channelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    private?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    WorkspaceId?: boolean
    channelchats?: boolean | channels$channelchatsArgs<ExtArgs>
    workspace?: boolean | channels$workspaceArgs<ExtArgs>
    _count?: boolean | ChannelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channels"]>

  export type channelsSelectScalar = {
    id?: boolean
    name?: boolean
    private?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    WorkspaceId?: boolean
  }

  export type channelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channelchats?: boolean | channels$channelchatsArgs<ExtArgs>
    workspace?: boolean | channels$workspaceArgs<ExtArgs>
    _count?: boolean | ChannelsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $channelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "channels"
    objects: {
      channelchats: Prisma.$channelchatsPayload<ExtArgs>[]
      workspace: Prisma.$workspacePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      private: boolean | null
      createdAt: Date
      updatedAt: Date
      WorkspaceId: number | null
    }, ExtArgs["result"]["channels"]>
    composites: {}
  }


  type channelsGetPayload<S extends boolean | null | undefined | channelsDefaultArgs> = $Result.GetResult<Prisma.$channelsPayload, S>

  type channelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<channelsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChannelsCountAggregateInputType | true
    }

  export interface channelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['channels'], meta: { name: 'channels' } }
    /**
     * Find zero or one Channels that matches the filter.
     * @param {channelsFindUniqueArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends channelsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, channelsFindUniqueArgs<ExtArgs>>
    ): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Channels that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {channelsFindUniqueOrThrowArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends channelsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, channelsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsFindFirstArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends channelsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, channelsFindFirstArgs<ExtArgs>>
    ): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Channels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsFindFirstOrThrowArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends channelsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, channelsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channels.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelsWithIdOnly = await prisma.channels.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends channelsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Channels.
     * @param {channelsCreateArgs} args - Arguments to create a Channels.
     * @example
     * // Create one Channels
     * const Channels = await prisma.channels.create({
     *   data: {
     *     // ... data to create a Channels
     *   }
     * })
     * 
    **/
    create<T extends channelsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, channelsCreateArgs<ExtArgs>>
    ): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Channels.
     *     @param {channelsCreateManyArgs} args - Arguments to create many Channels.
     *     @example
     *     // Create many Channels
     *     const channels = await prisma.channels.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends channelsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Channels.
     * @param {channelsDeleteArgs} args - Arguments to delete one Channels.
     * @example
     * // Delete one Channels
     * const Channels = await prisma.channels.delete({
     *   where: {
     *     // ... filter to delete one Channels
     *   }
     * })
     * 
    **/
    delete<T extends channelsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, channelsDeleteArgs<ExtArgs>>
    ): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Channels.
     * @param {channelsUpdateArgs} args - Arguments to update one Channels.
     * @example
     * // Update one Channels
     * const channels = await prisma.channels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends channelsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, channelsUpdateArgs<ExtArgs>>
    ): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Channels.
     * @param {channelsDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends channelsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channels = await prisma.channels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends channelsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, channelsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channels.
     * @param {channelsUpsertArgs} args - Arguments to update or create a Channels.
     * @example
     * // Update or create a Channels
     * const channels = await prisma.channels.upsert({
     *   create: {
     *     // ... data to create a Channels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channels we want to update
     *   }
     * })
    **/
    upsert<T extends channelsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, channelsUpsertArgs<ExtArgs>>
    ): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channels.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends channelsCountArgs>(
      args?: Subset<T, channelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelsAggregateArgs>(args: Subset<T, ChannelsAggregateArgs>): Prisma.PrismaPromise<GetChannelsAggregateType<T>>

    /**
     * Group by Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsGroupByArgs} args - Group by arguments.
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
      T extends channelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: channelsGroupByArgs['orderBy'] }
        : { orderBy?: channelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, channelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the channels model
   */
  readonly fields: channelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for channels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__channelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    channelchats<T extends channels$channelchatsArgs<ExtArgs> = {}>(args?: Subset<T, channels$channelchatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelchatsPayload<ExtArgs>, T, 'findMany'> | Null>;

    workspace<T extends channels$workspaceArgs<ExtArgs> = {}>(args?: Subset<T, channels$workspaceArgs<ExtArgs>>): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the channels model
   */ 
  interface channelsFieldRefs {
    readonly id: FieldRef<"channels", 'Int'>
    readonly name: FieldRef<"channels", 'String'>
    readonly private: FieldRef<"channels", 'Boolean'>
    readonly createdAt: FieldRef<"channels", 'DateTime'>
    readonly updatedAt: FieldRef<"channels", 'DateTime'>
    readonly WorkspaceId: FieldRef<"channels", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * channels findUnique
   */
  export type channelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where: channelsWhereUniqueInput
  }


  /**
   * channels findUniqueOrThrow
   */
  export type channelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where: channelsWhereUniqueInput
  }


  /**
   * channels findFirst
   */
  export type channelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where?: channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelsOrderByWithRelationInput | channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channels.
     */
    cursor?: channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channels.
     */
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }


  /**
   * channels findFirstOrThrow
   */
  export type channelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where?: channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelsOrderByWithRelationInput | channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channels.
     */
    cursor?: channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channels.
     */
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }


  /**
   * channels findMany
   */
  export type channelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where?: channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelsOrderByWithRelationInput | channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing channels.
     */
    cursor?: channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }


  /**
   * channels create
   */
  export type channelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * The data needed to create a channels.
     */
    data: XOR<channelsCreateInput, channelsUncheckedCreateInput>
  }


  /**
   * channels createMany
   */
  export type channelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many channels.
     */
    data: channelsCreateManyInput | channelsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * channels update
   */
  export type channelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * The data needed to update a channels.
     */
    data: XOR<channelsUpdateInput, channelsUncheckedUpdateInput>
    /**
     * Choose, which channels to update.
     */
    where: channelsWhereUniqueInput
  }


  /**
   * channels updateMany
   */
  export type channelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update channels.
     */
    data: XOR<channelsUpdateManyMutationInput, channelsUncheckedUpdateManyInput>
    /**
     * Filter which channels to update
     */
    where?: channelsWhereInput
  }


  /**
   * channels upsert
   */
  export type channelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * The filter to search for the channels to update in case it exists.
     */
    where: channelsWhereUniqueInput
    /**
     * In case the channels found by the `where` argument doesn't exist, create a new channels with this data.
     */
    create: XOR<channelsCreateInput, channelsUncheckedCreateInput>
    /**
     * In case the channels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<channelsUpdateInput, channelsUncheckedUpdateInput>
  }


  /**
   * channels delete
   */
  export type channelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter which channels to delete.
     */
    where: channelsWhereUniqueInput
  }


  /**
   * channels deleteMany
   */
  export type channelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channels to delete
     */
    where?: channelsWhereInput
  }


  /**
   * channels.channelchats
   */
  export type channels$channelchatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channelchats
     */
    select?: channelchatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelchatsInclude<ExtArgs> | null
    where?: channelchatsWhereInput
    orderBy?: channelchatsOrderByWithRelationInput | channelchatsOrderByWithRelationInput[]
    cursor?: channelchatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelchatsScalarFieldEnum | ChannelchatsScalarFieldEnum[]
  }


  /**
   * channels.workspace
   */
  export type channels$workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    where?: workspaceWhereInput
  }


  /**
   * channels without action
   */
  export type channelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
  }



  /**
   * Model workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceAvgAggregateOutputType = {
    id: number | null
    OwnerId: number | null
  }

  export type WorkspaceSumAggregateOutputType = {
    id: number | null
    OwnerId: number | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    OwnerId: number | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    OwnerId: number | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    url: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    OwnerId: number
    _all: number
  }


  export type WorkspaceAvgAggregateInputType = {
    id?: true
    OwnerId?: true
  }

  export type WorkspaceSumAggregateInputType = {
    id?: true
    OwnerId?: true
  }

  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    OwnerId?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    OwnerId?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    OwnerId?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspace to aggregate.
     */
    where?: workspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspaceOrderByWithRelationInput | workspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type workspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspaceWhereInput
    orderBy?: workspaceOrderByWithAggregationInput | workspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: workspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _avg?: WorkspaceAvgAggregateInputType
    _sum?: WorkspaceSumAggregateInputType
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: number
    name: string
    url: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    OwnerId: number | null
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends workspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type workspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    OwnerId?: boolean
    channels?: boolean | workspace$channelsArgs<ExtArgs>
    User?: boolean | workspace$UserArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type workspaceSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    OwnerId?: boolean
  }

  export type workspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | workspace$channelsArgs<ExtArgs>
    User?: boolean | workspace$UserArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $workspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspace"
    objects: {
      channels: Prisma.$channelsPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      OwnerId: number | null
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }


  type workspaceGetPayload<S extends boolean | null | undefined | workspaceDefaultArgs> = $Result.GetResult<Prisma.$workspacePayload, S>

  type workspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<workspaceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface workspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspace'], meta: { name: 'workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {workspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends workspaceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, workspaceFindUniqueArgs<ExtArgs>>
    ): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Workspace that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {workspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends workspaceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, workspaceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends workspaceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, workspaceFindFirstArgs<ExtArgs>>
    ): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends workspaceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, workspaceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends workspaceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, workspaceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Workspace.
     * @param {workspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
    **/
    create<T extends workspaceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, workspaceCreateArgs<ExtArgs>>
    ): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Workspaces.
     *     @param {workspaceCreateManyArgs} args - Arguments to create many Workspaces.
     *     @example
     *     // Create many Workspaces
     *     const workspace = await prisma.workspace.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends workspaceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, workspaceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workspace.
     * @param {workspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
    **/
    delete<T extends workspaceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, workspaceDeleteArgs<ExtArgs>>
    ): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Workspace.
     * @param {workspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends workspaceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, workspaceUpdateArgs<ExtArgs>>
    ): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Workspaces.
     * @param {workspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends workspaceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, workspaceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends workspaceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, workspaceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workspace.
     * @param {workspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
    **/
    upsert<T extends workspaceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, workspaceUpsertArgs<ExtArgs>>
    ): Prisma__workspaceClient<$Result.GetResult<Prisma.$workspacePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends workspaceCountArgs>(
      args?: Subset<T, workspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspaceGroupByArgs} args - Group by arguments.
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
      T extends workspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspaceGroupByArgs['orderBy'] }
        : { orderBy?: workspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspace model
   */
  readonly fields: workspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    channels<T extends workspace$channelsArgs<ExtArgs> = {}>(args?: Subset<T, workspace$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends workspace$UserArgs<ExtArgs> = {}>(args?: Subset<T, workspace$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the workspace model
   */ 
  interface workspaceFieldRefs {
    readonly id: FieldRef<"workspace", 'Int'>
    readonly name: FieldRef<"workspace", 'String'>
    readonly url: FieldRef<"workspace", 'String'>
    readonly createdAt: FieldRef<"workspace", 'DateTime'>
    readonly updatedAt: FieldRef<"workspace", 'DateTime'>
    readonly deletedAt: FieldRef<"workspace", 'DateTime'>
    readonly OwnerId: FieldRef<"workspace", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * workspace findUnique
   */
  export type workspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter, which workspace to fetch.
     */
    where: workspaceWhereUniqueInput
  }


  /**
   * workspace findUniqueOrThrow
   */
  export type workspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter, which workspace to fetch.
     */
    where: workspaceWhereUniqueInput
  }


  /**
   * workspace findFirst
   */
  export type workspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter, which workspace to fetch.
     */
    where?: workspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspaceOrderByWithRelationInput | workspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }


  /**
   * workspace findFirstOrThrow
   */
  export type workspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter, which workspace to fetch.
     */
    where?: workspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspaceOrderByWithRelationInput | workspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }


  /**
   * workspace findMany
   */
  export type workspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspaceOrderByWithRelationInput | workspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspaces.
     */
    cursor?: workspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }


  /**
   * workspace create
   */
  export type workspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a workspace.
     */
    data: XOR<workspaceCreateInput, workspaceUncheckedCreateInput>
  }


  /**
   * workspace createMany
   */
  export type workspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspaces.
     */
    data: workspaceCreateManyInput | workspaceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * workspace update
   */
  export type workspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a workspace.
     */
    data: XOR<workspaceUpdateInput, workspaceUncheckedUpdateInput>
    /**
     * Choose, which workspace to update.
     */
    where: workspaceWhereUniqueInput
  }


  /**
   * workspace updateMany
   */
  export type workspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspaceUpdateManyMutationInput, workspaceUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspaceWhereInput
  }


  /**
   * workspace upsert
   */
  export type workspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the workspace to update in case it exists.
     */
    where: workspaceWhereUniqueInput
    /**
     * In case the workspace found by the `where` argument doesn't exist, create a new workspace with this data.
     */
    create: XOR<workspaceCreateInput, workspaceUncheckedCreateInput>
    /**
     * In case the workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspaceUpdateInput, workspaceUncheckedUpdateInput>
  }


  /**
   * workspace delete
   */
  export type workspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
    /**
     * Filter which workspace to delete.
     */
    where: workspaceWhereUniqueInput
  }


  /**
   * workspace deleteMany
   */
  export type workspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaces to delete
     */
    where?: workspaceWhereInput
  }


  /**
   * workspace.channels
   */
  export type workspace$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: channelsInclude<ExtArgs> | null
    where?: channelsWhereInput
    orderBy?: channelsOrderByWithRelationInput | channelsOrderByWithRelationInput[]
    cursor?: channelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }


  /**
   * workspace.User
   */
  export type workspace$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * workspace without action
   */
  export type workspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace
     */
    select?: workspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspaceInclude<ExtArgs> | null
  }



  /**
   * Model workspacemembers
   */

  export type AggregateWorkspacemembers = {
    _count: WorkspacemembersCountAggregateOutputType | null
    _avg: WorkspacemembersAvgAggregateOutputType | null
    _sum: WorkspacemembersSumAggregateOutputType | null
    _min: WorkspacemembersMinAggregateOutputType | null
    _max: WorkspacemembersMaxAggregateOutputType | null
  }

  export type WorkspacemembersAvgAggregateOutputType = {
    WorkspaceId: number | null
    UserId: number | null
  }

  export type WorkspacemembersSumAggregateOutputType = {
    WorkspaceId: number | null
    UserId: number | null
  }

  export type WorkspacemembersMinAggregateOutputType = {
    WorkspaceId: number | null
    UserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    loggedInAt: Date | null
  }

  export type WorkspacemembersMaxAggregateOutputType = {
    WorkspaceId: number | null
    UserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    loggedInAt: Date | null
  }

  export type WorkspacemembersCountAggregateOutputType = {
    WorkspaceId: number
    UserId: number
    createdAt: number
    updatedAt: number
    loggedInAt: number
    _all: number
  }


  export type WorkspacemembersAvgAggregateInputType = {
    WorkspaceId?: true
    UserId?: true
  }

  export type WorkspacemembersSumAggregateInputType = {
    WorkspaceId?: true
    UserId?: true
  }

  export type WorkspacemembersMinAggregateInputType = {
    WorkspaceId?: true
    UserId?: true
    createdAt?: true
    updatedAt?: true
    loggedInAt?: true
  }

  export type WorkspacemembersMaxAggregateInputType = {
    WorkspaceId?: true
    UserId?: true
    createdAt?: true
    updatedAt?: true
    loggedInAt?: true
  }

  export type WorkspacemembersCountAggregateInputType = {
    WorkspaceId?: true
    UserId?: true
    createdAt?: true
    updatedAt?: true
    loggedInAt?: true
    _all?: true
  }

  export type WorkspacemembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspacemembers to aggregate.
     */
    where?: workspacemembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacemembers to fetch.
     */
    orderBy?: workspacemembersOrderByWithRelationInput | workspacemembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspacemembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacemembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacemembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspacemembers
    **/
    _count?: true | WorkspacemembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspacemembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspacemembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspacemembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspacemembersMaxAggregateInputType
  }

  export type GetWorkspacemembersAggregateType<T extends WorkspacemembersAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspacemembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspacemembers[P]>
      : GetScalarType<T[P], AggregateWorkspacemembers[P]>
  }




  export type workspacemembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacemembersWhereInput
    orderBy?: workspacemembersOrderByWithAggregationInput | workspacemembersOrderByWithAggregationInput[]
    by: WorkspacemembersScalarFieldEnum[] | WorkspacemembersScalarFieldEnum
    having?: workspacemembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspacemembersCountAggregateInputType | true
    _avg?: WorkspacemembersAvgAggregateInputType
    _sum?: WorkspacemembersSumAggregateInputType
    _min?: WorkspacemembersMinAggregateInputType
    _max?: WorkspacemembersMaxAggregateInputType
  }

  export type WorkspacemembersGroupByOutputType = {
    WorkspaceId: number
    UserId: number
    createdAt: Date
    updatedAt: Date
    loggedInAt: Date | null
    _count: WorkspacemembersCountAggregateOutputType | null
    _avg: WorkspacemembersAvgAggregateOutputType | null
    _sum: WorkspacemembersSumAggregateOutputType | null
    _min: WorkspacemembersMinAggregateOutputType | null
    _max: WorkspacemembersMaxAggregateOutputType | null
  }

  type GetWorkspacemembersGroupByPayload<T extends workspacemembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspacemembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspacemembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspacemembersGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspacemembersGroupByOutputType[P]>
        }
      >
    >


  export type workspacemembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    WorkspaceId?: boolean
    UserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loggedInAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspacemembers"]>

  export type workspacemembersSelectScalar = {
    WorkspaceId?: boolean
    UserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loggedInAt?: boolean
  }

  export type workspacemembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $workspacemembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspacemembers"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      WorkspaceId: number
      UserId: number
      createdAt: Date
      updatedAt: Date
      loggedInAt: Date | null
    }, ExtArgs["result"]["workspacemembers"]>
    composites: {}
  }


  type workspacemembersGetPayload<S extends boolean | null | undefined | workspacemembersDefaultArgs> = $Result.GetResult<Prisma.$workspacemembersPayload, S>

  type workspacemembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<workspacemembersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkspacemembersCountAggregateInputType | true
    }

  export interface workspacemembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspacemembers'], meta: { name: 'workspacemembers' } }
    /**
     * Find zero or one Workspacemembers that matches the filter.
     * @param {workspacemembersFindUniqueArgs} args - Arguments to find a Workspacemembers
     * @example
     * // Get one Workspacemembers
     * const workspacemembers = await prisma.workspacemembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends workspacemembersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, workspacemembersFindUniqueArgs<ExtArgs>>
    ): Prisma__workspacemembersClient<$Result.GetResult<Prisma.$workspacemembersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Workspacemembers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {workspacemembersFindUniqueOrThrowArgs} args - Arguments to find a Workspacemembers
     * @example
     * // Get one Workspacemembers
     * const workspacemembers = await prisma.workspacemembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends workspacemembersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, workspacemembersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__workspacemembersClient<$Result.GetResult<Prisma.$workspacemembersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Workspacemembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacemembersFindFirstArgs} args - Arguments to find a Workspacemembers
     * @example
     * // Get one Workspacemembers
     * const workspacemembers = await prisma.workspacemembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends workspacemembersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, workspacemembersFindFirstArgs<ExtArgs>>
    ): Prisma__workspacemembersClient<$Result.GetResult<Prisma.$workspacemembersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Workspacemembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacemembersFindFirstOrThrowArgs} args - Arguments to find a Workspacemembers
     * @example
     * // Get one Workspacemembers
     * const workspacemembers = await prisma.workspacemembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends workspacemembersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, workspacemembersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__workspacemembersClient<$Result.GetResult<Prisma.$workspacemembersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Workspacemembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacemembersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspacemembers
     * const workspacemembers = await prisma.workspacemembers.findMany()
     * 
     * // Get first 10 Workspacemembers
     * const workspacemembers = await prisma.workspacemembers.findMany({ take: 10 })
     * 
     * // Only select the `WorkspaceId`
     * const workspacemembersWithWorkspaceIdOnly = await prisma.workspacemembers.findMany({ select: { WorkspaceId: true } })
     * 
    **/
    findMany<T extends workspacemembersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, workspacemembersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacemembersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Workspacemembers.
     * @param {workspacemembersCreateArgs} args - Arguments to create a Workspacemembers.
     * @example
     * // Create one Workspacemembers
     * const Workspacemembers = await prisma.workspacemembers.create({
     *   data: {
     *     // ... data to create a Workspacemembers
     *   }
     * })
     * 
    **/
    create<T extends workspacemembersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, workspacemembersCreateArgs<ExtArgs>>
    ): Prisma__workspacemembersClient<$Result.GetResult<Prisma.$workspacemembersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Workspacemembers.
     *     @param {workspacemembersCreateManyArgs} args - Arguments to create many Workspacemembers.
     *     @example
     *     // Create many Workspacemembers
     *     const workspacemembers = await prisma.workspacemembers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends workspacemembersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, workspacemembersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workspacemembers.
     * @param {workspacemembersDeleteArgs} args - Arguments to delete one Workspacemembers.
     * @example
     * // Delete one Workspacemembers
     * const Workspacemembers = await prisma.workspacemembers.delete({
     *   where: {
     *     // ... filter to delete one Workspacemembers
     *   }
     * })
     * 
    **/
    delete<T extends workspacemembersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, workspacemembersDeleteArgs<ExtArgs>>
    ): Prisma__workspacemembersClient<$Result.GetResult<Prisma.$workspacemembersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Workspacemembers.
     * @param {workspacemembersUpdateArgs} args - Arguments to update one Workspacemembers.
     * @example
     * // Update one Workspacemembers
     * const workspacemembers = await prisma.workspacemembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends workspacemembersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, workspacemembersUpdateArgs<ExtArgs>>
    ): Prisma__workspacemembersClient<$Result.GetResult<Prisma.$workspacemembersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Workspacemembers.
     * @param {workspacemembersDeleteManyArgs} args - Arguments to filter Workspacemembers to delete.
     * @example
     * // Delete a few Workspacemembers
     * const { count } = await prisma.workspacemembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends workspacemembersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, workspacemembersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspacemembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacemembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspacemembers
     * const workspacemembers = await prisma.workspacemembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends workspacemembersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, workspacemembersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workspacemembers.
     * @param {workspacemembersUpsertArgs} args - Arguments to update or create a Workspacemembers.
     * @example
     * // Update or create a Workspacemembers
     * const workspacemembers = await prisma.workspacemembers.upsert({
     *   create: {
     *     // ... data to create a Workspacemembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspacemembers we want to update
     *   }
     * })
    **/
    upsert<T extends workspacemembersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, workspacemembersUpsertArgs<ExtArgs>>
    ): Prisma__workspacemembersClient<$Result.GetResult<Prisma.$workspacemembersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Workspacemembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacemembersCountArgs} args - Arguments to filter Workspacemembers to count.
     * @example
     * // Count the number of Workspacemembers
     * const count = await prisma.workspacemembers.count({
     *   where: {
     *     // ... the filter for the Workspacemembers we want to count
     *   }
     * })
    **/
    count<T extends workspacemembersCountArgs>(
      args?: Subset<T, workspacemembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspacemembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspacemembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspacemembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspacemembersAggregateArgs>(args: Subset<T, WorkspacemembersAggregateArgs>): Prisma.PrismaPromise<GetWorkspacemembersAggregateType<T>>

    /**
     * Group by Workspacemembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacemembersGroupByArgs} args - Group by arguments.
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
      T extends workspacemembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspacemembersGroupByArgs['orderBy'] }
        : { orderBy?: workspacemembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workspacemembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspacemembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspacemembers model
   */
  readonly fields: workspacemembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspacemembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspacemembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

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
   * Fields of the workspacemembers model
   */ 
  interface workspacemembersFieldRefs {
    readonly WorkspaceId: FieldRef<"workspacemembers", 'Int'>
    readonly UserId: FieldRef<"workspacemembers", 'Int'>
    readonly createdAt: FieldRef<"workspacemembers", 'DateTime'>
    readonly updatedAt: FieldRef<"workspacemembers", 'DateTime'>
    readonly loggedInAt: FieldRef<"workspacemembers", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * workspacemembers findUnique
   */
  export type workspacemembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
    /**
     * Filter, which workspacemembers to fetch.
     */
    where: workspacemembersWhereUniqueInput
  }


  /**
   * workspacemembers findUniqueOrThrow
   */
  export type workspacemembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
    /**
     * Filter, which workspacemembers to fetch.
     */
    where: workspacemembersWhereUniqueInput
  }


  /**
   * workspacemembers findFirst
   */
  export type workspacemembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
    /**
     * Filter, which workspacemembers to fetch.
     */
    where?: workspacemembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacemembers to fetch.
     */
    orderBy?: workspacemembersOrderByWithRelationInput | workspacemembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspacemembers.
     */
    cursor?: workspacemembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacemembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacemembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacemembers.
     */
    distinct?: WorkspacemembersScalarFieldEnum | WorkspacemembersScalarFieldEnum[]
  }


  /**
   * workspacemembers findFirstOrThrow
   */
  export type workspacemembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
    /**
     * Filter, which workspacemembers to fetch.
     */
    where?: workspacemembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacemembers to fetch.
     */
    orderBy?: workspacemembersOrderByWithRelationInput | workspacemembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspacemembers.
     */
    cursor?: workspacemembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacemembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacemembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspacemembers.
     */
    distinct?: WorkspacemembersScalarFieldEnum | WorkspacemembersScalarFieldEnum[]
  }


  /**
   * workspacemembers findMany
   */
  export type workspacemembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
    /**
     * Filter, which workspacemembers to fetch.
     */
    where?: workspacemembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspacemembers to fetch.
     */
    orderBy?: workspacemembersOrderByWithRelationInput | workspacemembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspacemembers.
     */
    cursor?: workspacemembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspacemembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspacemembers.
     */
    skip?: number
    distinct?: WorkspacemembersScalarFieldEnum | WorkspacemembersScalarFieldEnum[]
  }


  /**
   * workspacemembers create
   */
  export type workspacemembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
    /**
     * The data needed to create a workspacemembers.
     */
    data: XOR<workspacemembersCreateInput, workspacemembersUncheckedCreateInput>
  }


  /**
   * workspacemembers createMany
   */
  export type workspacemembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspacemembers.
     */
    data: workspacemembersCreateManyInput | workspacemembersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * workspacemembers update
   */
  export type workspacemembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
    /**
     * The data needed to update a workspacemembers.
     */
    data: XOR<workspacemembersUpdateInput, workspacemembersUncheckedUpdateInput>
    /**
     * Choose, which workspacemembers to update.
     */
    where: workspacemembersWhereUniqueInput
  }


  /**
   * workspacemembers updateMany
   */
  export type workspacemembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspacemembers.
     */
    data: XOR<workspacemembersUpdateManyMutationInput, workspacemembersUncheckedUpdateManyInput>
    /**
     * Filter which workspacemembers to update
     */
    where?: workspacemembersWhereInput
  }


  /**
   * workspacemembers upsert
   */
  export type workspacemembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
    /**
     * The filter to search for the workspacemembers to update in case it exists.
     */
    where: workspacemembersWhereUniqueInput
    /**
     * In case the workspacemembers found by the `where` argument doesn't exist, create a new workspacemembers with this data.
     */
    create: XOR<workspacemembersCreateInput, workspacemembersUncheckedCreateInput>
    /**
     * In case the workspacemembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspacemembersUpdateInput, workspacemembersUncheckedUpdateInput>
  }


  /**
   * workspacemembers delete
   */
  export type workspacemembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
    /**
     * Filter which workspacemembers to delete.
     */
    where: workspacemembersWhereUniqueInput
  }


  /**
   * workspacemembers deleteMany
   */
  export type workspacemembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspacemembers to delete
     */
    where?: workspacemembersWhereInput
  }


  /**
   * workspacemembers without action
   */
  export type workspacemembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspacemembers
     */
    select?: workspacemembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: workspacemembersInclude<ExtArgs> | null
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
    provider: 'provider'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChannelchatsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    UserId: 'UserId',
    ChannelId: 'ChannelId'
  };

  export type ChannelchatsScalarFieldEnum = (typeof ChannelchatsScalarFieldEnum)[keyof typeof ChannelchatsScalarFieldEnum]


  export const ChannelmembersScalarFieldEnum: {
    ChannelId: 'ChannelId',
    UserId: 'UserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChannelmembersScalarFieldEnum = (typeof ChannelmembersScalarFieldEnum)[keyof typeof ChannelmembersScalarFieldEnum]


  export const ChannelsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    private: 'private',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    WorkspaceId: 'WorkspaceId'
  };

  export type ChannelsScalarFieldEnum = (typeof ChannelsScalarFieldEnum)[keyof typeof ChannelsScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    OwnerId: 'OwnerId'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const WorkspacemembersScalarFieldEnum: {
    WorkspaceId: 'WorkspaceId',
    UserId: 'UserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    loggedInAt: 'loggedInAt'
  };

  export type WorkspacemembersScalarFieldEnum = (typeof WorkspacemembersScalarFieldEnum)[keyof typeof WorkspacemembersScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
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
    Comment?: CommentListRelationFilter
    channelchats?: ChannelchatsListRelationFilter
    channelmembers?: ChannelmembersListRelationFilter
    workspace?: WorkspaceListRelationFilter
    workspacemembers?: WorkspacemembersListRelationFilter
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
    Comment?: CommentOrderByRelationAggregateInput
    channelchats?: channelchatsOrderByRelationAggregateInput
    channelmembers?: channelmembersOrderByRelationAggregateInput
    workspace?: workspaceOrderByRelationAggregateInput
    workspacemembers?: workspacemembersOrderByRelationAggregateInput
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
    Comment?: CommentListRelationFilter
    channelchats?: ChannelchatsListRelationFilter
    channelmembers?: ChannelmembersListRelationFilter
    workspace?: WorkspaceListRelationFilter
    workspacemembers?: WorkspacemembersListRelationFilter
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
  }

  export type channelchatsWhereInput = {
    AND?: channelchatsWhereInput | channelchatsWhereInput[]
    OR?: channelchatsWhereInput[]
    NOT?: channelchatsWhereInput | channelchatsWhereInput[]
    id?: IntFilter<"channelchats"> | number
    content?: StringFilter<"channelchats"> | string
    createdAt?: DateTimeFilter<"channelchats"> | Date | string
    updatedAt?: DateTimeFilter<"channelchats"> | Date | string
    UserId?: IntNullableFilter<"channelchats"> | number | null
    ChannelId?: IntNullableFilter<"channelchats"> | number | null
    channels?: XOR<ChannelsNullableRelationFilter, channelsWhereInput> | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type channelchatsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserId?: SortOrderInput | SortOrder
    ChannelId?: SortOrderInput | SortOrder
    channels?: channelsOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type channelchatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: channelchatsWhereInput | channelchatsWhereInput[]
    OR?: channelchatsWhereInput[]
    NOT?: channelchatsWhereInput | channelchatsWhereInput[]
    content?: StringFilter<"channelchats"> | string
    createdAt?: DateTimeFilter<"channelchats"> | Date | string
    updatedAt?: DateTimeFilter<"channelchats"> | Date | string
    UserId?: IntNullableFilter<"channelchats"> | number | null
    ChannelId?: IntNullableFilter<"channelchats"> | number | null
    channels?: XOR<ChannelsNullableRelationFilter, channelsWhereInput> | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type channelchatsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserId?: SortOrderInput | SortOrder
    ChannelId?: SortOrderInput | SortOrder
    _count?: channelchatsCountOrderByAggregateInput
    _avg?: channelchatsAvgOrderByAggregateInput
    _max?: channelchatsMaxOrderByAggregateInput
    _min?: channelchatsMinOrderByAggregateInput
    _sum?: channelchatsSumOrderByAggregateInput
  }

  export type channelchatsScalarWhereWithAggregatesInput = {
    AND?: channelchatsScalarWhereWithAggregatesInput | channelchatsScalarWhereWithAggregatesInput[]
    OR?: channelchatsScalarWhereWithAggregatesInput[]
    NOT?: channelchatsScalarWhereWithAggregatesInput | channelchatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"channelchats"> | number
    content?: StringWithAggregatesFilter<"channelchats"> | string
    createdAt?: DateTimeWithAggregatesFilter<"channelchats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"channelchats"> | Date | string
    UserId?: IntNullableWithAggregatesFilter<"channelchats"> | number | null
    ChannelId?: IntNullableWithAggregatesFilter<"channelchats"> | number | null
  }

  export type channelmembersWhereInput = {
    AND?: channelmembersWhereInput | channelmembersWhereInput[]
    OR?: channelmembersWhereInput[]
    NOT?: channelmembersWhereInput | channelmembersWhereInput[]
    ChannelId?: IntFilter<"channelmembers"> | number
    UserId?: IntFilter<"channelmembers"> | number
    createdAt?: DateTimeFilter<"channelmembers"> | Date | string
    updatedAt?: DateTimeFilter<"channelmembers"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type channelmembersOrderByWithRelationInput = {
    ChannelId?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type channelmembersWhereUniqueInput = Prisma.AtLeast<{
    UserId_ChannelId?: channelmembersUserIdChannelIdCompoundUniqueInput
    AND?: channelmembersWhereInput | channelmembersWhereInput[]
    OR?: channelmembersWhereInput[]
    NOT?: channelmembersWhereInput | channelmembersWhereInput[]
    ChannelId?: IntFilter<"channelmembers"> | number
    UserId?: IntFilter<"channelmembers"> | number
    createdAt?: DateTimeFilter<"channelmembers"> | Date | string
    updatedAt?: DateTimeFilter<"channelmembers"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "UserId_ChannelId">

  export type channelmembersOrderByWithAggregationInput = {
    ChannelId?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: channelmembersCountOrderByAggregateInput
    _avg?: channelmembersAvgOrderByAggregateInput
    _max?: channelmembersMaxOrderByAggregateInput
    _min?: channelmembersMinOrderByAggregateInput
    _sum?: channelmembersSumOrderByAggregateInput
  }

  export type channelmembersScalarWhereWithAggregatesInput = {
    AND?: channelmembersScalarWhereWithAggregatesInput | channelmembersScalarWhereWithAggregatesInput[]
    OR?: channelmembersScalarWhereWithAggregatesInput[]
    NOT?: channelmembersScalarWhereWithAggregatesInput | channelmembersScalarWhereWithAggregatesInput[]
    ChannelId?: IntWithAggregatesFilter<"channelmembers"> | number
    UserId?: IntWithAggregatesFilter<"channelmembers"> | number
    createdAt?: DateTimeWithAggregatesFilter<"channelmembers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"channelmembers"> | Date | string
  }

  export type channelsWhereInput = {
    AND?: channelsWhereInput | channelsWhereInput[]
    OR?: channelsWhereInput[]
    NOT?: channelsWhereInput | channelsWhereInput[]
    id?: IntFilter<"channels"> | number
    name?: StringFilter<"channels"> | string
    private?: BoolNullableFilter<"channels"> | boolean | null
    createdAt?: DateTimeFilter<"channels"> | Date | string
    updatedAt?: DateTimeFilter<"channels"> | Date | string
    WorkspaceId?: IntNullableFilter<"channels"> | number | null
    channelchats?: ChannelchatsListRelationFilter
    workspace?: XOR<WorkspaceNullableRelationFilter, workspaceWhereInput> | null
  }

  export type channelsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    private?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    WorkspaceId?: SortOrderInput | SortOrder
    channelchats?: channelchatsOrderByRelationAggregateInput
    workspace?: workspaceOrderByWithRelationInput
  }

  export type channelsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: channelsWhereInput | channelsWhereInput[]
    OR?: channelsWhereInput[]
    NOT?: channelsWhereInput | channelsWhereInput[]
    name?: StringFilter<"channels"> | string
    private?: BoolNullableFilter<"channels"> | boolean | null
    createdAt?: DateTimeFilter<"channels"> | Date | string
    updatedAt?: DateTimeFilter<"channels"> | Date | string
    WorkspaceId?: IntNullableFilter<"channels"> | number | null
    channelchats?: ChannelchatsListRelationFilter
    workspace?: XOR<WorkspaceNullableRelationFilter, workspaceWhereInput> | null
  }, "id">

  export type channelsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    private?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    WorkspaceId?: SortOrderInput | SortOrder
    _count?: channelsCountOrderByAggregateInput
    _avg?: channelsAvgOrderByAggregateInput
    _max?: channelsMaxOrderByAggregateInput
    _min?: channelsMinOrderByAggregateInput
    _sum?: channelsSumOrderByAggregateInput
  }

  export type channelsScalarWhereWithAggregatesInput = {
    AND?: channelsScalarWhereWithAggregatesInput | channelsScalarWhereWithAggregatesInput[]
    OR?: channelsScalarWhereWithAggregatesInput[]
    NOT?: channelsScalarWhereWithAggregatesInput | channelsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"channels"> | number
    name?: StringWithAggregatesFilter<"channels"> | string
    private?: BoolNullableWithAggregatesFilter<"channels"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"channels"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"channels"> | Date | string
    WorkspaceId?: IntNullableWithAggregatesFilter<"channels"> | number | null
  }

  export type workspaceWhereInput = {
    AND?: workspaceWhereInput | workspaceWhereInput[]
    OR?: workspaceWhereInput[]
    NOT?: workspaceWhereInput | workspaceWhereInput[]
    id?: IntFilter<"workspace"> | number
    name?: StringFilter<"workspace"> | string
    url?: StringFilter<"workspace"> | string
    createdAt?: DateTimeFilter<"workspace"> | Date | string
    updatedAt?: DateTimeFilter<"workspace"> | Date | string
    deletedAt?: DateTimeNullableFilter<"workspace"> | Date | string | null
    OwnerId?: IntNullableFilter<"workspace"> | number | null
    channels?: ChannelsListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type workspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    OwnerId?: SortOrderInput | SortOrder
    channels?: channelsOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type workspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: workspaceWhereInput | workspaceWhereInput[]
    OR?: workspaceWhereInput[]
    NOT?: workspaceWhereInput | workspaceWhereInput[]
    name?: StringFilter<"workspace"> | string
    url?: StringFilter<"workspace"> | string
    createdAt?: DateTimeFilter<"workspace"> | Date | string
    updatedAt?: DateTimeFilter<"workspace"> | Date | string
    deletedAt?: DateTimeNullableFilter<"workspace"> | Date | string | null
    OwnerId?: IntNullableFilter<"workspace"> | number | null
    channels?: ChannelsListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type workspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    OwnerId?: SortOrderInput | SortOrder
    _count?: workspaceCountOrderByAggregateInput
    _avg?: workspaceAvgOrderByAggregateInput
    _max?: workspaceMaxOrderByAggregateInput
    _min?: workspaceMinOrderByAggregateInput
    _sum?: workspaceSumOrderByAggregateInput
  }

  export type workspaceScalarWhereWithAggregatesInput = {
    AND?: workspaceScalarWhereWithAggregatesInput | workspaceScalarWhereWithAggregatesInput[]
    OR?: workspaceScalarWhereWithAggregatesInput[]
    NOT?: workspaceScalarWhereWithAggregatesInput | workspaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"workspace"> | number
    name?: StringWithAggregatesFilter<"workspace"> | string
    url?: StringWithAggregatesFilter<"workspace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"workspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"workspace"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"workspace"> | Date | string | null
    OwnerId?: IntNullableWithAggregatesFilter<"workspace"> | number | null
  }

  export type workspacemembersWhereInput = {
    AND?: workspacemembersWhereInput | workspacemembersWhereInput[]
    OR?: workspacemembersWhereInput[]
    NOT?: workspacemembersWhereInput | workspacemembersWhereInput[]
    WorkspaceId?: IntFilter<"workspacemembers"> | number
    UserId?: IntFilter<"workspacemembers"> | number
    createdAt?: DateTimeFilter<"workspacemembers"> | Date | string
    updatedAt?: DateTimeFilter<"workspacemembers"> | Date | string
    loggedInAt?: DateTimeNullableFilter<"workspacemembers"> | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type workspacemembersOrderByWithRelationInput = {
    WorkspaceId?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loggedInAt?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type workspacemembersWhereUniqueInput = Prisma.AtLeast<{
    UserId_WorkspaceId?: workspacemembersUserIdWorkspaceIdCompoundUniqueInput
    AND?: workspacemembersWhereInput | workspacemembersWhereInput[]
    OR?: workspacemembersWhereInput[]
    NOT?: workspacemembersWhereInput | workspacemembersWhereInput[]
    WorkspaceId?: IntFilter<"workspacemembers"> | number
    UserId?: IntFilter<"workspacemembers"> | number
    createdAt?: DateTimeFilter<"workspacemembers"> | Date | string
    updatedAt?: DateTimeFilter<"workspacemembers"> | Date | string
    loggedInAt?: DateTimeNullableFilter<"workspacemembers"> | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "UserId_WorkspaceId">

  export type workspacemembersOrderByWithAggregationInput = {
    WorkspaceId?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loggedInAt?: SortOrderInput | SortOrder
    _count?: workspacemembersCountOrderByAggregateInput
    _avg?: workspacemembersAvgOrderByAggregateInput
    _max?: workspacemembersMaxOrderByAggregateInput
    _min?: workspacemembersMinOrderByAggregateInput
    _sum?: workspacemembersSumOrderByAggregateInput
  }

  export type workspacemembersScalarWhereWithAggregatesInput = {
    AND?: workspacemembersScalarWhereWithAggregatesInput | workspacemembersScalarWhereWithAggregatesInput[]
    OR?: workspacemembersScalarWhereWithAggregatesInput[]
    NOT?: workspacemembersScalarWhereWithAggregatesInput | workspacemembersScalarWhereWithAggregatesInput[]
    WorkspaceId?: IntWithAggregatesFilter<"workspacemembers"> | number
    UserId?: IntWithAggregatesFilter<"workspacemembers"> | number
    createdAt?: DateTimeWithAggregatesFilter<"workspacemembers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"workspacemembers"> | Date | string
    loggedInAt?: DateTimeNullableWithAggregatesFilter<"workspacemembers"> | Date | string | null
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
    Comment?: CommentCreateNestedManyWithoutUserInput
    channelchats?: channelchatsCreateNestedManyWithoutUserInput
    channelmembers?: channelmembersCreateNestedManyWithoutUserInput
    workspace?: workspaceCreateNestedManyWithoutUserInput
    workspacemembers?: workspacemembersCreateNestedManyWithoutUserInput
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
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    channelchats?: channelchatsUncheckedCreateNestedManyWithoutUserInput
    channelmembers?: channelmembersUncheckedCreateNestedManyWithoutUserInput
    workspace?: workspaceUncheckedCreateNestedManyWithoutUserInput
    workspacemembers?: workspacemembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUpdateManyWithoutUserNestedInput
    channelchats?: channelchatsUpdateManyWithoutUserNestedInput
    channelmembers?: channelmembersUpdateManyWithoutUserNestedInput
    workspace?: workspaceUpdateManyWithoutUserNestedInput
    workspacemembers?: workspacemembersUpdateManyWithoutUserNestedInput
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
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    channelchats?: channelchatsUncheckedUpdateManyWithoutUserNestedInput
    channelmembers?: channelmembersUncheckedUpdateManyWithoutUserNestedInput
    workspace?: workspaceUncheckedUpdateManyWithoutUserNestedInput
    workspacemembers?: workspacemembersUncheckedUpdateManyWithoutUserNestedInput
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
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
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
  }

  export type channelchatsCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: channelsCreateNestedOneWithoutChannelchatsInput
    User?: UserCreateNestedOneWithoutChannelchatsInput
  }

  export type channelchatsUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserId?: number | null
    ChannelId?: number | null
  }

  export type channelchatsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: channelsUpdateOneWithoutChannelchatsNestedInput
    User?: UserUpdateOneWithoutChannelchatsNestedInput
  }

  export type channelchatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserId?: NullableIntFieldUpdateOperationsInput | number | null
    ChannelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type channelchatsCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserId?: number | null
    ChannelId?: number | null
  }

  export type channelchatsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type channelchatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserId?: NullableIntFieldUpdateOperationsInput | number | null
    ChannelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type channelmembersCreateInput = {
    ChannelId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutChannelmembersInput
  }

  export type channelmembersUncheckedCreateInput = {
    ChannelId: number
    UserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type channelmembersUpdateInput = {
    ChannelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutChannelmembersNestedInput
  }

  export type channelmembersUncheckedUpdateInput = {
    ChannelId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type channelmembersCreateManyInput = {
    ChannelId: number
    UserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type channelmembersUpdateManyMutationInput = {
    ChannelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type channelmembersUncheckedUpdateManyInput = {
    ChannelId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type channelsCreateInput = {
    name: string
    private?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channelchats?: channelchatsCreateNestedManyWithoutChannelsInput
    workspace?: workspaceCreateNestedOneWithoutChannelsInput
  }

  export type channelsUncheckedCreateInput = {
    id?: number
    name: string
    private?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkspaceId?: number | null
    channelchats?: channelchatsUncheckedCreateNestedManyWithoutChannelsInput
  }

  export type channelsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelchats?: channelchatsUpdateManyWithoutChannelsNestedInput
    workspace?: workspaceUpdateOneWithoutChannelsNestedInput
  }

  export type channelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkspaceId?: NullableIntFieldUpdateOperationsInput | number | null
    channelchats?: channelchatsUncheckedUpdateManyWithoutChannelsNestedInput
  }

  export type channelsCreateManyInput = {
    id?: number
    name: string
    private?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkspaceId?: number | null
  }

  export type channelsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type channelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkspaceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type workspaceCreateInput = {
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    channels?: channelsCreateNestedManyWithoutWorkspaceInput
    User?: UserCreateNestedOneWithoutWorkspaceInput
  }

  export type workspaceUncheckedCreateInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    OwnerId?: number | null
    channels?: channelsUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    channels?: channelsUpdateManyWithoutWorkspaceNestedInput
    User?: UserUpdateOneWithoutWorkspaceNestedInput
  }

  export type workspaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OwnerId?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: channelsUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspaceCreateManyInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    OwnerId?: number | null
  }

  export type workspaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OwnerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type workspacemembersCreateInput = {
    WorkspaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loggedInAt?: Date | string | null
    User: UserCreateNestedOneWithoutWorkspacemembersInput
  }

  export type workspacemembersUncheckedCreateInput = {
    WorkspaceId: number
    UserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loggedInAt?: Date | string | null
  }

  export type workspacemembersUpdateInput = {
    WorkspaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutWorkspacemembersNestedInput
  }

  export type workspacemembersUncheckedUpdateInput = {
    WorkspaceId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspacemembersCreateManyInput = {
    WorkspaceId: number
    UserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loggedInAt?: Date | string | null
  }

  export type workspacemembersUpdateManyMutationInput = {
    WorkspaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspacemembersUncheckedUpdateManyInput = {
    WorkspaceId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type CommentOrderByRelationAggregateInput = {
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

  export type ChannelchatsListRelationFilter = {
    every?: channelchatsWhereInput
    some?: channelchatsWhereInput
    none?: channelchatsWhereInput
  }

  export type ChannelmembersListRelationFilter = {
    every?: channelmembersWhereInput
    some?: channelmembersWhereInput
    none?: channelmembersWhereInput
  }

  export type WorkspaceListRelationFilter = {
    every?: workspaceWhereInput
    some?: workspaceWhereInput
    none?: workspaceWhereInput
  }

  export type WorkspacemembersListRelationFilter = {
    every?: workspacemembersWhereInput
    some?: workspacemembersWhereInput
    none?: workspacemembersWhereInput
  }

  export type channelchatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type channelmembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspacemembersOrderByRelationAggregateInput = {
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ChannelsNullableRelationFilter = {
    is?: channelsWhereInput | null
    isNot?: channelsWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type channelchatsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserId?: SortOrder
    ChannelId?: SortOrder
  }

  export type channelchatsAvgOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    ChannelId?: SortOrder
  }

  export type channelchatsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserId?: SortOrder
    ChannelId?: SortOrder
  }

  export type channelchatsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserId?: SortOrder
    ChannelId?: SortOrder
  }

  export type channelchatsSumOrderByAggregateInput = {
    id?: SortOrder
    UserId?: SortOrder
    ChannelId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type channelmembersUserIdChannelIdCompoundUniqueInput = {
    UserId: number
    ChannelId: number
  }

  export type channelmembersCountOrderByAggregateInput = {
    ChannelId?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type channelmembersAvgOrderByAggregateInput = {
    ChannelId?: SortOrder
    UserId?: SortOrder
  }

  export type channelmembersMaxOrderByAggregateInput = {
    ChannelId?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type channelmembersMinOrderByAggregateInput = {
    ChannelId?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type channelmembersSumOrderByAggregateInput = {
    ChannelId?: SortOrder
    UserId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type WorkspaceNullableRelationFilter = {
    is?: workspaceWhereInput | null
    isNot?: workspaceWhereInput | null
  }

  export type channelsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    private?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    WorkspaceId?: SortOrder
  }

  export type channelsAvgOrderByAggregateInput = {
    id?: SortOrder
    WorkspaceId?: SortOrder
  }

  export type channelsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    private?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    WorkspaceId?: SortOrder
  }

  export type channelsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    private?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    WorkspaceId?: SortOrder
  }

  export type channelsSumOrderByAggregateInput = {
    id?: SortOrder
    WorkspaceId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ChannelsListRelationFilter = {
    every?: channelsWhereInput
    some?: channelsWhereInput
    none?: channelsWhereInput
  }

  export type channelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    OwnerId?: SortOrder
  }

  export type workspaceAvgOrderByAggregateInput = {
    id?: SortOrder
    OwnerId?: SortOrder
  }

  export type workspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    OwnerId?: SortOrder
  }

  export type workspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    OwnerId?: SortOrder
  }

  export type workspaceSumOrderByAggregateInput = {
    id?: SortOrder
    OwnerId?: SortOrder
  }

  export type workspacemembersUserIdWorkspaceIdCompoundUniqueInput = {
    UserId: number
    WorkspaceId: number
  }

  export type workspacemembersCountOrderByAggregateInput = {
    WorkspaceId?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loggedInAt?: SortOrder
  }

  export type workspacemembersAvgOrderByAggregateInput = {
    WorkspaceId?: SortOrder
    UserId?: SortOrder
  }

  export type workspacemembersMaxOrderByAggregateInput = {
    WorkspaceId?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loggedInAt?: SortOrder
  }

  export type workspacemembersMinOrderByAggregateInput = {
    WorkspaceId?: SortOrder
    UserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loggedInAt?: SortOrder
  }

  export type workspacemembersSumOrderByAggregateInput = {
    WorkspaceId?: SortOrder
    UserId?: SortOrder
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

  export type CommentUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<CommentCreateWithoutMovieInput, CommentUncheckedCreateWithoutMovieInput> | CommentCreateWithoutMovieInput[] | CommentUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMovieInput | CommentCreateOrConnectWithoutMovieInput[]
    createMany?: CommentCreateManyMovieInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
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

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type channelchatsCreateNestedManyWithoutUserInput = {
    create?: XOR<channelchatsCreateWithoutUserInput, channelchatsUncheckedCreateWithoutUserInput> | channelchatsCreateWithoutUserInput[] | channelchatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: channelchatsCreateOrConnectWithoutUserInput | channelchatsCreateOrConnectWithoutUserInput[]
    createMany?: channelchatsCreateManyUserInputEnvelope
    connect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
  }

  export type channelmembersCreateNestedManyWithoutUserInput = {
    create?: XOR<channelmembersCreateWithoutUserInput, channelmembersUncheckedCreateWithoutUserInput> | channelmembersCreateWithoutUserInput[] | channelmembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: channelmembersCreateOrConnectWithoutUserInput | channelmembersCreateOrConnectWithoutUserInput[]
    createMany?: channelmembersCreateManyUserInputEnvelope
    connect?: channelmembersWhereUniqueInput | channelmembersWhereUniqueInput[]
  }

  export type workspaceCreateNestedManyWithoutUserInput = {
    create?: XOR<workspaceCreateWithoutUserInput, workspaceUncheckedCreateWithoutUserInput> | workspaceCreateWithoutUserInput[] | workspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspaceCreateOrConnectWithoutUserInput | workspaceCreateOrConnectWithoutUserInput[]
    createMany?: workspaceCreateManyUserInputEnvelope
    connect?: workspaceWhereUniqueInput | workspaceWhereUniqueInput[]
  }

  export type workspacemembersCreateNestedManyWithoutUserInput = {
    create?: XOR<workspacemembersCreateWithoutUserInput, workspacemembersUncheckedCreateWithoutUserInput> | workspacemembersCreateWithoutUserInput[] | workspacemembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspacemembersCreateOrConnectWithoutUserInput | workspacemembersCreateOrConnectWithoutUserInput[]
    createMany?: workspacemembersCreateManyUserInputEnvelope
    connect?: workspacemembersWhereUniqueInput | workspacemembersWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type channelchatsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<channelchatsCreateWithoutUserInput, channelchatsUncheckedCreateWithoutUserInput> | channelchatsCreateWithoutUserInput[] | channelchatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: channelchatsCreateOrConnectWithoutUserInput | channelchatsCreateOrConnectWithoutUserInput[]
    createMany?: channelchatsCreateManyUserInputEnvelope
    connect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
  }

  export type channelmembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<channelmembersCreateWithoutUserInput, channelmembersUncheckedCreateWithoutUserInput> | channelmembersCreateWithoutUserInput[] | channelmembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: channelmembersCreateOrConnectWithoutUserInput | channelmembersCreateOrConnectWithoutUserInput[]
    createMany?: channelmembersCreateManyUserInputEnvelope
    connect?: channelmembersWhereUniqueInput | channelmembersWhereUniqueInput[]
  }

  export type workspaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<workspaceCreateWithoutUserInput, workspaceUncheckedCreateWithoutUserInput> | workspaceCreateWithoutUserInput[] | workspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspaceCreateOrConnectWithoutUserInput | workspaceCreateOrConnectWithoutUserInput[]
    createMany?: workspaceCreateManyUserInputEnvelope
    connect?: workspaceWhereUniqueInput | workspaceWhereUniqueInput[]
  }

  export type workspacemembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<workspacemembersCreateWithoutUserInput, workspacemembersUncheckedCreateWithoutUserInput> | workspacemembersCreateWithoutUserInput[] | workspacemembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspacemembersCreateOrConnectWithoutUserInput | workspacemembersCreateOrConnectWithoutUserInput[]
    createMany?: workspacemembersCreateManyUserInputEnvelope
    connect?: workspacemembersWhereUniqueInput | workspacemembersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type channelchatsUpdateManyWithoutUserNestedInput = {
    create?: XOR<channelchatsCreateWithoutUserInput, channelchatsUncheckedCreateWithoutUserInput> | channelchatsCreateWithoutUserInput[] | channelchatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: channelchatsCreateOrConnectWithoutUserInput | channelchatsCreateOrConnectWithoutUserInput[]
    upsert?: channelchatsUpsertWithWhereUniqueWithoutUserInput | channelchatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: channelchatsCreateManyUserInputEnvelope
    set?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    disconnect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    delete?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    connect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    update?: channelchatsUpdateWithWhereUniqueWithoutUserInput | channelchatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: channelchatsUpdateManyWithWhereWithoutUserInput | channelchatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: channelchatsScalarWhereInput | channelchatsScalarWhereInput[]
  }

  export type channelmembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<channelmembersCreateWithoutUserInput, channelmembersUncheckedCreateWithoutUserInput> | channelmembersCreateWithoutUserInput[] | channelmembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: channelmembersCreateOrConnectWithoutUserInput | channelmembersCreateOrConnectWithoutUserInput[]
    upsert?: channelmembersUpsertWithWhereUniqueWithoutUserInput | channelmembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: channelmembersCreateManyUserInputEnvelope
    set?: channelmembersWhereUniqueInput | channelmembersWhereUniqueInput[]
    disconnect?: channelmembersWhereUniqueInput | channelmembersWhereUniqueInput[]
    delete?: channelmembersWhereUniqueInput | channelmembersWhereUniqueInput[]
    connect?: channelmembersWhereUniqueInput | channelmembersWhereUniqueInput[]
    update?: channelmembersUpdateWithWhereUniqueWithoutUserInput | channelmembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: channelmembersUpdateManyWithWhereWithoutUserInput | channelmembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: channelmembersScalarWhereInput | channelmembersScalarWhereInput[]
  }

  export type workspaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<workspaceCreateWithoutUserInput, workspaceUncheckedCreateWithoutUserInput> | workspaceCreateWithoutUserInput[] | workspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspaceCreateOrConnectWithoutUserInput | workspaceCreateOrConnectWithoutUserInput[]
    upsert?: workspaceUpsertWithWhereUniqueWithoutUserInput | workspaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workspaceCreateManyUserInputEnvelope
    set?: workspaceWhereUniqueInput | workspaceWhereUniqueInput[]
    disconnect?: workspaceWhereUniqueInput | workspaceWhereUniqueInput[]
    delete?: workspaceWhereUniqueInput | workspaceWhereUniqueInput[]
    connect?: workspaceWhereUniqueInput | workspaceWhereUniqueInput[]
    update?: workspaceUpdateWithWhereUniqueWithoutUserInput | workspaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workspaceUpdateManyWithWhereWithoutUserInput | workspaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workspaceScalarWhereInput | workspaceScalarWhereInput[]
  }

  export type workspacemembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<workspacemembersCreateWithoutUserInput, workspacemembersUncheckedCreateWithoutUserInput> | workspacemembersCreateWithoutUserInput[] | workspacemembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspacemembersCreateOrConnectWithoutUserInput | workspacemembersCreateOrConnectWithoutUserInput[]
    upsert?: workspacemembersUpsertWithWhereUniqueWithoutUserInput | workspacemembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workspacemembersCreateManyUserInputEnvelope
    set?: workspacemembersWhereUniqueInput | workspacemembersWhereUniqueInput[]
    disconnect?: workspacemembersWhereUniqueInput | workspacemembersWhereUniqueInput[]
    delete?: workspacemembersWhereUniqueInput | workspacemembersWhereUniqueInput[]
    connect?: workspacemembersWhereUniqueInput | workspacemembersWhereUniqueInput[]
    update?: workspacemembersUpdateWithWhereUniqueWithoutUserInput | workspacemembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workspacemembersUpdateManyWithWhereWithoutUserInput | workspacemembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workspacemembersScalarWhereInput | workspacemembersScalarWhereInput[]
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

  export type channelchatsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<channelchatsCreateWithoutUserInput, channelchatsUncheckedCreateWithoutUserInput> | channelchatsCreateWithoutUserInput[] | channelchatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: channelchatsCreateOrConnectWithoutUserInput | channelchatsCreateOrConnectWithoutUserInput[]
    upsert?: channelchatsUpsertWithWhereUniqueWithoutUserInput | channelchatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: channelchatsCreateManyUserInputEnvelope
    set?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    disconnect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    delete?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    connect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    update?: channelchatsUpdateWithWhereUniqueWithoutUserInput | channelchatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: channelchatsUpdateManyWithWhereWithoutUserInput | channelchatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: channelchatsScalarWhereInput | channelchatsScalarWhereInput[]
  }

  export type channelmembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<channelmembersCreateWithoutUserInput, channelmembersUncheckedCreateWithoutUserInput> | channelmembersCreateWithoutUserInput[] | channelmembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: channelmembersCreateOrConnectWithoutUserInput | channelmembersCreateOrConnectWithoutUserInput[]
    upsert?: channelmembersUpsertWithWhereUniqueWithoutUserInput | channelmembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: channelmembersCreateManyUserInputEnvelope
    set?: channelmembersWhereUniqueInput | channelmembersWhereUniqueInput[]
    disconnect?: channelmembersWhereUniqueInput | channelmembersWhereUniqueInput[]
    delete?: channelmembersWhereUniqueInput | channelmembersWhereUniqueInput[]
    connect?: channelmembersWhereUniqueInput | channelmembersWhereUniqueInput[]
    update?: channelmembersUpdateWithWhereUniqueWithoutUserInput | channelmembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: channelmembersUpdateManyWithWhereWithoutUserInput | channelmembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: channelmembersScalarWhereInput | channelmembersScalarWhereInput[]
  }

  export type workspaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<workspaceCreateWithoutUserInput, workspaceUncheckedCreateWithoutUserInput> | workspaceCreateWithoutUserInput[] | workspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspaceCreateOrConnectWithoutUserInput | workspaceCreateOrConnectWithoutUserInput[]
    upsert?: workspaceUpsertWithWhereUniqueWithoutUserInput | workspaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workspaceCreateManyUserInputEnvelope
    set?: workspaceWhereUniqueInput | workspaceWhereUniqueInput[]
    disconnect?: workspaceWhereUniqueInput | workspaceWhereUniqueInput[]
    delete?: workspaceWhereUniqueInput | workspaceWhereUniqueInput[]
    connect?: workspaceWhereUniqueInput | workspaceWhereUniqueInput[]
    update?: workspaceUpdateWithWhereUniqueWithoutUserInput | workspaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workspaceUpdateManyWithWhereWithoutUserInput | workspaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workspaceScalarWhereInput | workspaceScalarWhereInput[]
  }

  export type workspacemembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<workspacemembersCreateWithoutUserInput, workspacemembersUncheckedCreateWithoutUserInput> | workspacemembersCreateWithoutUserInput[] | workspacemembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspacemembersCreateOrConnectWithoutUserInput | workspacemembersCreateOrConnectWithoutUserInput[]
    upsert?: workspacemembersUpsertWithWhereUniqueWithoutUserInput | workspacemembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workspacemembersCreateManyUserInputEnvelope
    set?: workspacemembersWhereUniqueInput | workspacemembersWhereUniqueInput[]
    disconnect?: workspacemembersWhereUniqueInput | workspacemembersWhereUniqueInput[]
    delete?: workspacemembersWhereUniqueInput | workspacemembersWhereUniqueInput[]
    connect?: workspacemembersWhereUniqueInput | workspacemembersWhereUniqueInput[]
    update?: workspacemembersUpdateWithWhereUniqueWithoutUserInput | workspacemembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workspacemembersUpdateManyWithWhereWithoutUserInput | workspacemembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workspacemembersScalarWhereInput | workspacemembersScalarWhereInput[]
  }

  export type channelsCreateNestedOneWithoutChannelchatsInput = {
    create?: XOR<channelsCreateWithoutChannelchatsInput, channelsUncheckedCreateWithoutChannelchatsInput>
    connectOrCreate?: channelsCreateOrConnectWithoutChannelchatsInput
    connect?: channelsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChannelchatsInput = {
    create?: XOR<UserCreateWithoutChannelchatsInput, UserUncheckedCreateWithoutChannelchatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelchatsInput
    connect?: UserWhereUniqueInput
  }

  export type channelsUpdateOneWithoutChannelchatsNestedInput = {
    create?: XOR<channelsCreateWithoutChannelchatsInput, channelsUncheckedCreateWithoutChannelchatsInput>
    connectOrCreate?: channelsCreateOrConnectWithoutChannelchatsInput
    upsert?: channelsUpsertWithoutChannelchatsInput
    disconnect?: channelsWhereInput | boolean
    delete?: channelsWhereInput | boolean
    connect?: channelsWhereUniqueInput
    update?: XOR<XOR<channelsUpdateToOneWithWhereWithoutChannelchatsInput, channelsUpdateWithoutChannelchatsInput>, channelsUncheckedUpdateWithoutChannelchatsInput>
  }

  export type UserUpdateOneWithoutChannelchatsNestedInput = {
    create?: XOR<UserCreateWithoutChannelchatsInput, UserUncheckedCreateWithoutChannelchatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelchatsInput
    upsert?: UserUpsertWithoutChannelchatsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChannelchatsInput, UserUpdateWithoutChannelchatsInput>, UserUncheckedUpdateWithoutChannelchatsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutChannelmembersInput = {
    create?: XOR<UserCreateWithoutChannelmembersInput, UserUncheckedCreateWithoutChannelmembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelmembersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChannelmembersNestedInput = {
    create?: XOR<UserCreateWithoutChannelmembersInput, UserUncheckedCreateWithoutChannelmembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelmembersInput
    upsert?: UserUpsertWithoutChannelmembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChannelmembersInput, UserUpdateWithoutChannelmembersInput>, UserUncheckedUpdateWithoutChannelmembersInput>
  }

  export type channelchatsCreateNestedManyWithoutChannelsInput = {
    create?: XOR<channelchatsCreateWithoutChannelsInput, channelchatsUncheckedCreateWithoutChannelsInput> | channelchatsCreateWithoutChannelsInput[] | channelchatsUncheckedCreateWithoutChannelsInput[]
    connectOrCreate?: channelchatsCreateOrConnectWithoutChannelsInput | channelchatsCreateOrConnectWithoutChannelsInput[]
    createMany?: channelchatsCreateManyChannelsInputEnvelope
    connect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
  }

  export type workspaceCreateNestedOneWithoutChannelsInput = {
    create?: XOR<workspaceCreateWithoutChannelsInput, workspaceUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: workspaceCreateOrConnectWithoutChannelsInput
    connect?: workspaceWhereUniqueInput
  }

  export type channelchatsUncheckedCreateNestedManyWithoutChannelsInput = {
    create?: XOR<channelchatsCreateWithoutChannelsInput, channelchatsUncheckedCreateWithoutChannelsInput> | channelchatsCreateWithoutChannelsInput[] | channelchatsUncheckedCreateWithoutChannelsInput[]
    connectOrCreate?: channelchatsCreateOrConnectWithoutChannelsInput | channelchatsCreateOrConnectWithoutChannelsInput[]
    createMany?: channelchatsCreateManyChannelsInputEnvelope
    connect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type channelchatsUpdateManyWithoutChannelsNestedInput = {
    create?: XOR<channelchatsCreateWithoutChannelsInput, channelchatsUncheckedCreateWithoutChannelsInput> | channelchatsCreateWithoutChannelsInput[] | channelchatsUncheckedCreateWithoutChannelsInput[]
    connectOrCreate?: channelchatsCreateOrConnectWithoutChannelsInput | channelchatsCreateOrConnectWithoutChannelsInput[]
    upsert?: channelchatsUpsertWithWhereUniqueWithoutChannelsInput | channelchatsUpsertWithWhereUniqueWithoutChannelsInput[]
    createMany?: channelchatsCreateManyChannelsInputEnvelope
    set?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    disconnect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    delete?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    connect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    update?: channelchatsUpdateWithWhereUniqueWithoutChannelsInput | channelchatsUpdateWithWhereUniqueWithoutChannelsInput[]
    updateMany?: channelchatsUpdateManyWithWhereWithoutChannelsInput | channelchatsUpdateManyWithWhereWithoutChannelsInput[]
    deleteMany?: channelchatsScalarWhereInput | channelchatsScalarWhereInput[]
  }

  export type workspaceUpdateOneWithoutChannelsNestedInput = {
    create?: XOR<workspaceCreateWithoutChannelsInput, workspaceUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: workspaceCreateOrConnectWithoutChannelsInput
    upsert?: workspaceUpsertWithoutChannelsInput
    disconnect?: workspaceWhereInput | boolean
    delete?: workspaceWhereInput | boolean
    connect?: workspaceWhereUniqueInput
    update?: XOR<XOR<workspaceUpdateToOneWithWhereWithoutChannelsInput, workspaceUpdateWithoutChannelsInput>, workspaceUncheckedUpdateWithoutChannelsInput>
  }

  export type channelchatsUncheckedUpdateManyWithoutChannelsNestedInput = {
    create?: XOR<channelchatsCreateWithoutChannelsInput, channelchatsUncheckedCreateWithoutChannelsInput> | channelchatsCreateWithoutChannelsInput[] | channelchatsUncheckedCreateWithoutChannelsInput[]
    connectOrCreate?: channelchatsCreateOrConnectWithoutChannelsInput | channelchatsCreateOrConnectWithoutChannelsInput[]
    upsert?: channelchatsUpsertWithWhereUniqueWithoutChannelsInput | channelchatsUpsertWithWhereUniqueWithoutChannelsInput[]
    createMany?: channelchatsCreateManyChannelsInputEnvelope
    set?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    disconnect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    delete?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    connect?: channelchatsWhereUniqueInput | channelchatsWhereUniqueInput[]
    update?: channelchatsUpdateWithWhereUniqueWithoutChannelsInput | channelchatsUpdateWithWhereUniqueWithoutChannelsInput[]
    updateMany?: channelchatsUpdateManyWithWhereWithoutChannelsInput | channelchatsUpdateManyWithWhereWithoutChannelsInput[]
    deleteMany?: channelchatsScalarWhereInput | channelchatsScalarWhereInput[]
  }

  export type channelsCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<channelsCreateWithoutWorkspaceInput, channelsUncheckedCreateWithoutWorkspaceInput> | channelsCreateWithoutWorkspaceInput[] | channelsUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: channelsCreateOrConnectWithoutWorkspaceInput | channelsCreateOrConnectWithoutWorkspaceInput[]
    createMany?: channelsCreateManyWorkspaceInputEnvelope
    connect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput
    connect?: UserWhereUniqueInput
  }

  export type channelsUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<channelsCreateWithoutWorkspaceInput, channelsUncheckedCreateWithoutWorkspaceInput> | channelsCreateWithoutWorkspaceInput[] | channelsUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: channelsCreateOrConnectWithoutWorkspaceInput | channelsCreateOrConnectWithoutWorkspaceInput[]
    createMany?: channelsCreateManyWorkspaceInputEnvelope
    connect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
  }

  export type channelsUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<channelsCreateWithoutWorkspaceInput, channelsUncheckedCreateWithoutWorkspaceInput> | channelsCreateWithoutWorkspaceInput[] | channelsUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: channelsCreateOrConnectWithoutWorkspaceInput | channelsCreateOrConnectWithoutWorkspaceInput[]
    upsert?: channelsUpsertWithWhereUniqueWithoutWorkspaceInput | channelsUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: channelsCreateManyWorkspaceInputEnvelope
    set?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    disconnect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    delete?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    connect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    update?: channelsUpdateWithWhereUniqueWithoutWorkspaceInput | channelsUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: channelsUpdateManyWithWhereWithoutWorkspaceInput | channelsUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: channelsScalarWhereInput | channelsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutWorkspaceNestedInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput
    upsert?: UserUpsertWithoutWorkspaceInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspaceInput, UserUpdateWithoutWorkspaceInput>, UserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type channelsUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<channelsCreateWithoutWorkspaceInput, channelsUncheckedCreateWithoutWorkspaceInput> | channelsCreateWithoutWorkspaceInput[] | channelsUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: channelsCreateOrConnectWithoutWorkspaceInput | channelsCreateOrConnectWithoutWorkspaceInput[]
    upsert?: channelsUpsertWithWhereUniqueWithoutWorkspaceInput | channelsUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: channelsCreateManyWorkspaceInputEnvelope
    set?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    disconnect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    delete?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    connect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    update?: channelsUpdateWithWhereUniqueWithoutWorkspaceInput | channelsUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: channelsUpdateManyWithWhereWithoutWorkspaceInput | channelsUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: channelsScalarWhereInput | channelsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkspacemembersInput = {
    create?: XOR<UserCreateWithoutWorkspacemembersInput, UserUncheckedCreateWithoutWorkspacemembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacemembersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWorkspacemembersNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacemembersInput, UserUncheckedCreateWithoutWorkspacemembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacemembersInput
    upsert?: UserUpsertWithoutWorkspacemembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspacemembersInput, UserUpdateWithoutWorkspacemembersInput>, UserUncheckedUpdateWithoutWorkspacemembersInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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
    channelchats?: channelchatsCreateNestedManyWithoutUserInput
    channelmembers?: channelmembersCreateNestedManyWithoutUserInput
    workspace?: workspaceCreateNestedManyWithoutUserInput
    workspacemembers?: workspacemembersCreateNestedManyWithoutUserInput
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
    channelchats?: channelchatsUncheckedCreateNestedManyWithoutUserInput
    channelmembers?: channelmembersUncheckedCreateNestedManyWithoutUserInput
    workspace?: workspaceUncheckedCreateNestedManyWithoutUserInput
    workspacemembers?: workspacemembersUncheckedCreateNestedManyWithoutUserInput
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
    channelchats?: channelchatsUpdateManyWithoutUserNestedInput
    channelmembers?: channelmembersUpdateManyWithoutUserNestedInput
    workspace?: workspaceUpdateManyWithoutUserNestedInput
    workspacemembers?: workspacemembersUpdateManyWithoutUserNestedInput
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
    channelchats?: channelchatsUncheckedUpdateManyWithoutUserNestedInput
    channelmembers?: channelmembersUncheckedUpdateManyWithoutUserNestedInput
    workspace?: workspaceUncheckedUpdateManyWithoutUserNestedInput
    workspacemembers?: workspacemembersUncheckedUpdateManyWithoutUserNestedInput
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

  export type channelchatsCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: channelsCreateNestedOneWithoutChannelchatsInput
  }

  export type channelchatsUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ChannelId?: number | null
  }

  export type channelchatsCreateOrConnectWithoutUserInput = {
    where: channelchatsWhereUniqueInput
    create: XOR<channelchatsCreateWithoutUserInput, channelchatsUncheckedCreateWithoutUserInput>
  }

  export type channelchatsCreateManyUserInputEnvelope = {
    data: channelchatsCreateManyUserInput | channelchatsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type channelmembersCreateWithoutUserInput = {
    ChannelId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type channelmembersUncheckedCreateWithoutUserInput = {
    ChannelId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type channelmembersCreateOrConnectWithoutUserInput = {
    where: channelmembersWhereUniqueInput
    create: XOR<channelmembersCreateWithoutUserInput, channelmembersUncheckedCreateWithoutUserInput>
  }

  export type channelmembersCreateManyUserInputEnvelope = {
    data: channelmembersCreateManyUserInput | channelmembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type workspaceCreateWithoutUserInput = {
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    channels?: channelsCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    channels?: channelsUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type workspaceCreateOrConnectWithoutUserInput = {
    where: workspaceWhereUniqueInput
    create: XOR<workspaceCreateWithoutUserInput, workspaceUncheckedCreateWithoutUserInput>
  }

  export type workspaceCreateManyUserInputEnvelope = {
    data: workspaceCreateManyUserInput | workspaceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type workspacemembersCreateWithoutUserInput = {
    WorkspaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loggedInAt?: Date | string | null
  }

  export type workspacemembersUncheckedCreateWithoutUserInput = {
    WorkspaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loggedInAt?: Date | string | null
  }

  export type workspacemembersCreateOrConnectWithoutUserInput = {
    where: workspacemembersWhereUniqueInput
    create: XOR<workspacemembersCreateWithoutUserInput, workspacemembersUncheckedCreateWithoutUserInput>
  }

  export type workspacemembersCreateManyUserInputEnvelope = {
    data: workspacemembersCreateManyUserInput | workspacemembersCreateManyUserInput[]
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

  export type channelchatsUpsertWithWhereUniqueWithoutUserInput = {
    where: channelchatsWhereUniqueInput
    update: XOR<channelchatsUpdateWithoutUserInput, channelchatsUncheckedUpdateWithoutUserInput>
    create: XOR<channelchatsCreateWithoutUserInput, channelchatsUncheckedCreateWithoutUserInput>
  }

  export type channelchatsUpdateWithWhereUniqueWithoutUserInput = {
    where: channelchatsWhereUniqueInput
    data: XOR<channelchatsUpdateWithoutUserInput, channelchatsUncheckedUpdateWithoutUserInput>
  }

  export type channelchatsUpdateManyWithWhereWithoutUserInput = {
    where: channelchatsScalarWhereInput
    data: XOR<channelchatsUpdateManyMutationInput, channelchatsUncheckedUpdateManyWithoutUserInput>
  }

  export type channelchatsScalarWhereInput = {
    AND?: channelchatsScalarWhereInput | channelchatsScalarWhereInput[]
    OR?: channelchatsScalarWhereInput[]
    NOT?: channelchatsScalarWhereInput | channelchatsScalarWhereInput[]
    id?: IntFilter<"channelchats"> | number
    content?: StringFilter<"channelchats"> | string
    createdAt?: DateTimeFilter<"channelchats"> | Date | string
    updatedAt?: DateTimeFilter<"channelchats"> | Date | string
    UserId?: IntNullableFilter<"channelchats"> | number | null
    ChannelId?: IntNullableFilter<"channelchats"> | number | null
  }

  export type channelmembersUpsertWithWhereUniqueWithoutUserInput = {
    where: channelmembersWhereUniqueInput
    update: XOR<channelmembersUpdateWithoutUserInput, channelmembersUncheckedUpdateWithoutUserInput>
    create: XOR<channelmembersCreateWithoutUserInput, channelmembersUncheckedCreateWithoutUserInput>
  }

  export type channelmembersUpdateWithWhereUniqueWithoutUserInput = {
    where: channelmembersWhereUniqueInput
    data: XOR<channelmembersUpdateWithoutUserInput, channelmembersUncheckedUpdateWithoutUserInput>
  }

  export type channelmembersUpdateManyWithWhereWithoutUserInput = {
    where: channelmembersScalarWhereInput
    data: XOR<channelmembersUpdateManyMutationInput, channelmembersUncheckedUpdateManyWithoutUserInput>
  }

  export type channelmembersScalarWhereInput = {
    AND?: channelmembersScalarWhereInput | channelmembersScalarWhereInput[]
    OR?: channelmembersScalarWhereInput[]
    NOT?: channelmembersScalarWhereInput | channelmembersScalarWhereInput[]
    ChannelId?: IntFilter<"channelmembers"> | number
    UserId?: IntFilter<"channelmembers"> | number
    createdAt?: DateTimeFilter<"channelmembers"> | Date | string
    updatedAt?: DateTimeFilter<"channelmembers"> | Date | string
  }

  export type workspaceUpsertWithWhereUniqueWithoutUserInput = {
    where: workspaceWhereUniqueInput
    update: XOR<workspaceUpdateWithoutUserInput, workspaceUncheckedUpdateWithoutUserInput>
    create: XOR<workspaceCreateWithoutUserInput, workspaceUncheckedCreateWithoutUserInput>
  }

  export type workspaceUpdateWithWhereUniqueWithoutUserInput = {
    where: workspaceWhereUniqueInput
    data: XOR<workspaceUpdateWithoutUserInput, workspaceUncheckedUpdateWithoutUserInput>
  }

  export type workspaceUpdateManyWithWhereWithoutUserInput = {
    where: workspaceScalarWhereInput
    data: XOR<workspaceUpdateManyMutationInput, workspaceUncheckedUpdateManyWithoutUserInput>
  }

  export type workspaceScalarWhereInput = {
    AND?: workspaceScalarWhereInput | workspaceScalarWhereInput[]
    OR?: workspaceScalarWhereInput[]
    NOT?: workspaceScalarWhereInput | workspaceScalarWhereInput[]
    id?: IntFilter<"workspace"> | number
    name?: StringFilter<"workspace"> | string
    url?: StringFilter<"workspace"> | string
    createdAt?: DateTimeFilter<"workspace"> | Date | string
    updatedAt?: DateTimeFilter<"workspace"> | Date | string
    deletedAt?: DateTimeNullableFilter<"workspace"> | Date | string | null
    OwnerId?: IntNullableFilter<"workspace"> | number | null
  }

  export type workspacemembersUpsertWithWhereUniqueWithoutUserInput = {
    where: workspacemembersWhereUniqueInput
    update: XOR<workspacemembersUpdateWithoutUserInput, workspacemembersUncheckedUpdateWithoutUserInput>
    create: XOR<workspacemembersCreateWithoutUserInput, workspacemembersUncheckedCreateWithoutUserInput>
  }

  export type workspacemembersUpdateWithWhereUniqueWithoutUserInput = {
    where: workspacemembersWhereUniqueInput
    data: XOR<workspacemembersUpdateWithoutUserInput, workspacemembersUncheckedUpdateWithoutUserInput>
  }

  export type workspacemembersUpdateManyWithWhereWithoutUserInput = {
    where: workspacemembersScalarWhereInput
    data: XOR<workspacemembersUpdateManyMutationInput, workspacemembersUncheckedUpdateManyWithoutUserInput>
  }

  export type workspacemembersScalarWhereInput = {
    AND?: workspacemembersScalarWhereInput | workspacemembersScalarWhereInput[]
    OR?: workspacemembersScalarWhereInput[]
    NOT?: workspacemembersScalarWhereInput | workspacemembersScalarWhereInput[]
    WorkspaceId?: IntFilter<"workspacemembers"> | number
    UserId?: IntFilter<"workspacemembers"> | number
    createdAt?: DateTimeFilter<"workspacemembers"> | Date | string
    updatedAt?: DateTimeFilter<"workspacemembers"> | Date | string
    loggedInAt?: DateTimeNullableFilter<"workspacemembers"> | Date | string | null
  }

  export type channelsCreateWithoutChannelchatsInput = {
    name: string
    private?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace?: workspaceCreateNestedOneWithoutChannelsInput
  }

  export type channelsUncheckedCreateWithoutChannelchatsInput = {
    id?: number
    name: string
    private?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkspaceId?: number | null
  }

  export type channelsCreateOrConnectWithoutChannelchatsInput = {
    where: channelsWhereUniqueInput
    create: XOR<channelsCreateWithoutChannelchatsInput, channelsUncheckedCreateWithoutChannelchatsInput>
  }

  export type UserCreateWithoutChannelchatsInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    Comment?: CommentCreateNestedManyWithoutUserInput
    channelmembers?: channelmembersCreateNestedManyWithoutUserInput
    workspace?: workspaceCreateNestedManyWithoutUserInput
    workspacemembers?: workspacemembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChannelchatsInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    channelmembers?: channelmembersUncheckedCreateNestedManyWithoutUserInput
    workspace?: workspaceUncheckedCreateNestedManyWithoutUserInput
    workspacemembers?: workspacemembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChannelchatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChannelchatsInput, UserUncheckedCreateWithoutChannelchatsInput>
  }

  export type channelsUpsertWithoutChannelchatsInput = {
    update: XOR<channelsUpdateWithoutChannelchatsInput, channelsUncheckedUpdateWithoutChannelchatsInput>
    create: XOR<channelsCreateWithoutChannelchatsInput, channelsUncheckedCreateWithoutChannelchatsInput>
    where?: channelsWhereInput
  }

  export type channelsUpdateToOneWithWhereWithoutChannelchatsInput = {
    where?: channelsWhereInput
    data: XOR<channelsUpdateWithoutChannelchatsInput, channelsUncheckedUpdateWithoutChannelchatsInput>
  }

  export type channelsUpdateWithoutChannelchatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: workspaceUpdateOneWithoutChannelsNestedInput
  }

  export type channelsUncheckedUpdateWithoutChannelchatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkspaceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutChannelchatsInput = {
    update: XOR<UserUpdateWithoutChannelchatsInput, UserUncheckedUpdateWithoutChannelchatsInput>
    create: XOR<UserCreateWithoutChannelchatsInput, UserUncheckedCreateWithoutChannelchatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChannelchatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChannelchatsInput, UserUncheckedUpdateWithoutChannelchatsInput>
  }

  export type UserUpdateWithoutChannelchatsInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUpdateManyWithoutUserNestedInput
    channelmembers?: channelmembersUpdateManyWithoutUserNestedInput
    workspace?: workspaceUpdateManyWithoutUserNestedInput
    workspacemembers?: workspacemembersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelchatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    channelmembers?: channelmembersUncheckedUpdateManyWithoutUserNestedInput
    workspace?: workspaceUncheckedUpdateManyWithoutUserNestedInput
    workspacemembers?: workspacemembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChannelmembersInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    Comment?: CommentCreateNestedManyWithoutUserInput
    channelchats?: channelchatsCreateNestedManyWithoutUserInput
    workspace?: workspaceCreateNestedManyWithoutUserInput
    workspacemembers?: workspacemembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChannelmembersInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    channelchats?: channelchatsUncheckedCreateNestedManyWithoutUserInput
    workspace?: workspaceUncheckedCreateNestedManyWithoutUserInput
    workspacemembers?: workspacemembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChannelmembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChannelmembersInput, UserUncheckedCreateWithoutChannelmembersInput>
  }

  export type UserUpsertWithoutChannelmembersInput = {
    update: XOR<UserUpdateWithoutChannelmembersInput, UserUncheckedUpdateWithoutChannelmembersInput>
    create: XOR<UserCreateWithoutChannelmembersInput, UserUncheckedCreateWithoutChannelmembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChannelmembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChannelmembersInput, UserUncheckedUpdateWithoutChannelmembersInput>
  }

  export type UserUpdateWithoutChannelmembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUpdateManyWithoutUserNestedInput
    channelchats?: channelchatsUpdateManyWithoutUserNestedInput
    workspace?: workspaceUpdateManyWithoutUserNestedInput
    workspacemembers?: workspacemembersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelmembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    channelchats?: channelchatsUncheckedUpdateManyWithoutUserNestedInput
    workspace?: workspaceUncheckedUpdateManyWithoutUserNestedInput
    workspacemembers?: workspacemembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type channelchatsCreateWithoutChannelsInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutChannelchatsInput
  }

  export type channelchatsUncheckedCreateWithoutChannelsInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserId?: number | null
  }

  export type channelchatsCreateOrConnectWithoutChannelsInput = {
    where: channelchatsWhereUniqueInput
    create: XOR<channelchatsCreateWithoutChannelsInput, channelchatsUncheckedCreateWithoutChannelsInput>
  }

  export type channelchatsCreateManyChannelsInputEnvelope = {
    data: channelchatsCreateManyChannelsInput | channelchatsCreateManyChannelsInput[]
    skipDuplicates?: boolean
  }

  export type workspaceCreateWithoutChannelsInput = {
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User?: UserCreateNestedOneWithoutWorkspaceInput
  }

  export type workspaceUncheckedCreateWithoutChannelsInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    OwnerId?: number | null
  }

  export type workspaceCreateOrConnectWithoutChannelsInput = {
    where: workspaceWhereUniqueInput
    create: XOR<workspaceCreateWithoutChannelsInput, workspaceUncheckedCreateWithoutChannelsInput>
  }

  export type channelchatsUpsertWithWhereUniqueWithoutChannelsInput = {
    where: channelchatsWhereUniqueInput
    update: XOR<channelchatsUpdateWithoutChannelsInput, channelchatsUncheckedUpdateWithoutChannelsInput>
    create: XOR<channelchatsCreateWithoutChannelsInput, channelchatsUncheckedCreateWithoutChannelsInput>
  }

  export type channelchatsUpdateWithWhereUniqueWithoutChannelsInput = {
    where: channelchatsWhereUniqueInput
    data: XOR<channelchatsUpdateWithoutChannelsInput, channelchatsUncheckedUpdateWithoutChannelsInput>
  }

  export type channelchatsUpdateManyWithWhereWithoutChannelsInput = {
    where: channelchatsScalarWhereInput
    data: XOR<channelchatsUpdateManyMutationInput, channelchatsUncheckedUpdateManyWithoutChannelsInput>
  }

  export type workspaceUpsertWithoutChannelsInput = {
    update: XOR<workspaceUpdateWithoutChannelsInput, workspaceUncheckedUpdateWithoutChannelsInput>
    create: XOR<workspaceCreateWithoutChannelsInput, workspaceUncheckedCreateWithoutChannelsInput>
    where?: workspaceWhereInput
  }

  export type workspaceUpdateToOneWithWhereWithoutChannelsInput = {
    where?: workspaceWhereInput
    data: XOR<workspaceUpdateWithoutChannelsInput, workspaceUncheckedUpdateWithoutChannelsInput>
  }

  export type workspaceUpdateWithoutChannelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneWithoutWorkspaceNestedInput
  }

  export type workspaceUncheckedUpdateWithoutChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OwnerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type channelsCreateWithoutWorkspaceInput = {
    name: string
    private?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channelchats?: channelchatsCreateNestedManyWithoutChannelsInput
  }

  export type channelsUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    name: string
    private?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channelchats?: channelchatsUncheckedCreateNestedManyWithoutChannelsInput
  }

  export type channelsCreateOrConnectWithoutWorkspaceInput = {
    where: channelsWhereUniqueInput
    create: XOR<channelsCreateWithoutWorkspaceInput, channelsUncheckedCreateWithoutWorkspaceInput>
  }

  export type channelsCreateManyWorkspaceInputEnvelope = {
    data: channelsCreateManyWorkspaceInput | channelsCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutWorkspaceInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    Comment?: CommentCreateNestedManyWithoutUserInput
    channelchats?: channelchatsCreateNestedManyWithoutUserInput
    channelmembers?: channelmembersCreateNestedManyWithoutUserInput
    workspacemembers?: workspacemembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    channelchats?: channelchatsUncheckedCreateNestedManyWithoutUserInput
    channelmembers?: channelmembersUncheckedCreateNestedManyWithoutUserInput
    workspacemembers?: workspacemembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
  }

  export type channelsUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: channelsWhereUniqueInput
    update: XOR<channelsUpdateWithoutWorkspaceInput, channelsUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<channelsCreateWithoutWorkspaceInput, channelsUncheckedCreateWithoutWorkspaceInput>
  }

  export type channelsUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: channelsWhereUniqueInput
    data: XOR<channelsUpdateWithoutWorkspaceInput, channelsUncheckedUpdateWithoutWorkspaceInput>
  }

  export type channelsUpdateManyWithWhereWithoutWorkspaceInput = {
    where: channelsScalarWhereInput
    data: XOR<channelsUpdateManyMutationInput, channelsUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type channelsScalarWhereInput = {
    AND?: channelsScalarWhereInput | channelsScalarWhereInput[]
    OR?: channelsScalarWhereInput[]
    NOT?: channelsScalarWhereInput | channelsScalarWhereInput[]
    id?: IntFilter<"channels"> | number
    name?: StringFilter<"channels"> | string
    private?: BoolNullableFilter<"channels"> | boolean | null
    createdAt?: DateTimeFilter<"channels"> | Date | string
    updatedAt?: DateTimeFilter<"channels"> | Date | string
    WorkspaceId?: IntNullableFilter<"channels"> | number | null
  }

  export type UserUpsertWithoutWorkspaceInput = {
    update: XOR<UserUpdateWithoutWorkspaceInput, UserUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspaceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspaceInput, UserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type UserUpdateWithoutWorkspaceInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUpdateManyWithoutUserNestedInput
    channelchats?: channelchatsUpdateManyWithoutUserNestedInput
    channelmembers?: channelmembersUpdateManyWithoutUserNestedInput
    workspacemembers?: workspacemembersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    channelchats?: channelchatsUncheckedUpdateManyWithoutUserNestedInput
    channelmembers?: channelmembersUncheckedUpdateManyWithoutUserNestedInput
    workspacemembers?: workspacemembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkspacemembersInput = {
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    Comment?: CommentCreateNestedManyWithoutUserInput
    channelchats?: channelchatsCreateNestedManyWithoutUserInput
    channelmembers?: channelmembersCreateNestedManyWithoutUserInput
    workspace?: workspaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkspacemembersInput = {
    id?: number
    email: string
    nickname?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    provider?: string
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    channelchats?: channelchatsUncheckedCreateNestedManyWithoutUserInput
    channelmembers?: channelmembersUncheckedCreateNestedManyWithoutUserInput
    workspace?: workspaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkspacemembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacemembersInput, UserUncheckedCreateWithoutWorkspacemembersInput>
  }

  export type UserUpsertWithoutWorkspacemembersInput = {
    update: XOR<UserUpdateWithoutWorkspacemembersInput, UserUncheckedUpdateWithoutWorkspacemembersInput>
    create: XOR<UserCreateWithoutWorkspacemembersInput, UserUncheckedCreateWithoutWorkspacemembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspacemembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspacemembersInput, UserUncheckedUpdateWithoutWorkspacemembersInput>
  }

  export type UserUpdateWithoutWorkspacemembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUpdateManyWithoutUserNestedInput
    channelchats?: channelchatsUpdateManyWithoutUserNestedInput
    channelmembers?: channelmembersUpdateManyWithoutUserNestedInput
    workspace?: workspaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspacemembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    channelchats?: channelchatsUncheckedUpdateManyWithoutUserNestedInput
    channelmembers?: channelmembersUncheckedUpdateManyWithoutUserNestedInput
    workspace?: workspaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentCreateManyMovieInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userno: number
    comment?: string | null
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

  export type CommentCreateManyUserInput = {
    id?: number
    movieId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    comment?: string | null
  }

  export type channelchatsCreateManyUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ChannelId?: number | null
  }

  export type channelmembersCreateManyUserInput = {
    ChannelId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type workspaceCreateManyUserInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type workspacemembersCreateManyUserInput = {
    WorkspaceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loggedInAt?: Date | string | null
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

  export type channelchatsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: channelsUpdateOneWithoutChannelchatsNestedInput
  }

  export type channelchatsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChannelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type channelchatsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChannelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type channelmembersUpdateWithoutUserInput = {
    ChannelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type channelmembersUncheckedUpdateWithoutUserInput = {
    ChannelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type channelmembersUncheckedUpdateManyWithoutUserInput = {
    ChannelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workspaceUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    channels?: channelsUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspaceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    channels?: channelsUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspaceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspacemembersUpdateWithoutUserInput = {
    WorkspaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspacemembersUncheckedUpdateWithoutUserInput = {
    WorkspaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspacemembersUncheckedUpdateManyWithoutUserInput = {
    WorkspaceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type channelchatsCreateManyChannelsInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserId?: number | null
  }

  export type channelchatsUpdateWithoutChannelsInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutChannelchatsNestedInput
  }

  export type channelchatsUncheckedUpdateWithoutChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type channelchatsUncheckedUpdateManyWithoutChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type channelsCreateManyWorkspaceInput = {
    id?: number
    name: string
    private?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type channelsUpdateWithoutWorkspaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelchats?: channelchatsUpdateManyWithoutChannelsNestedInput
  }

  export type channelsUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelchats?: channelchatsUncheckedUpdateManyWithoutChannelsNestedInput
  }

  export type channelsUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    private?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
     * @deprecated Use ChannelsCountOutputTypeDefaultArgs instead
     */
    export type ChannelsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChannelsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkspaceCountOutputTypeDefaultArgs instead
     */
    export type WorkspaceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use channelchatsDefaultArgs instead
     */
    export type channelchatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = channelchatsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use channelmembersDefaultArgs instead
     */
    export type channelmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = channelmembersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use channelsDefaultArgs instead
     */
    export type channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = channelsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use workspaceDefaultArgs instead
     */
    export type workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = workspaceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use workspacemembersDefaultArgs instead
     */
    export type workspacemembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = workspacemembersDefaultArgs<ExtArgs>

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