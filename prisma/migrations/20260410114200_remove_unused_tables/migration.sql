-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `movieId` INTEGER NOT NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `deletedAt` DATETIME(6) NULL,
    `userno` INTEGER NOT NULL,
    `comment` LONGTEXT NULL,

    INDEX `movieId_idx`(`movieId`),
    INDEX `user_no_idx`(`userno`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `audience` BIGINT NULL,
    `movieCd` INTEGER NOT NULL,
    `title` LONGTEXT NULL,
    `rank` BIGINT NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `poster` VARCHAR(1024) NULL,
    `vector` JSON NULL,
    `rankInten` VARCHAR(10) NULL,
    `plot` LONGTEXT NULL,
    `rankOldAndNew` VARCHAR(10) NULL,
    `openDt` DATETIME(6) NULL,
    `genre` VARCHAR(100) NULL,
    `director` VARCHAR(100) NULL,
    `ratting` VARCHAR(100) NULL,

    UNIQUE INDEX `Movie_movieCd_key`(`movieCd`),
    INDEX `movieId`(`movieCd`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `nickname` LONGTEXT NULL,
    `password` LONGTEXT NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `deletedAt` DATETIME(6) NULL,
    `provider` VARCHAR(45) NOT NULL DEFAULT 'credentials',
    `image` LONGTEXT NULL,
    `marketing_agreed` BOOLEAN NOT NULL DEFAULT false,
    `gender` ENUM('male', 'female') NULL,

    UNIQUE INDEX `uni_User_email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movieScore` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `movieCd` INTEGER NOT NULL,
    `score` DOUBLE NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `deletedAt` DATETIME(6) NULL,
    `Userno` INTEGER NOT NULL,

    INDEX `movieId_idx`(`movieCd`),
    INDEX `movieScore_Userno_fkey`(`Userno`),
    UNIQUE INDEX `movieCd_userno_unique`(`movieCd`, `Userno`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieVod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vodUrl` VARCHAR(1024) NOT NULL,
    `movieCd` INTEGER NOT NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `deletedAt` DATETIME(6) NULL,

    INDEX `MovieVod_movieCd_fkey_idx`(`movieCd`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userno` INTEGER NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL,
    `like_count` INTEGER NOT NULL DEFAULT 0,
    `dislike_count` INTEGER NOT NULL DEFAULT 0,
    `comment_count` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `deletedAt` DATETIME(6) NULL,

    INDEX `Article_userno_fkey_idx`(`userno`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `articleComments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `articleId` INTEGER NOT NULL,
    `userno` INTEGER NOT NULL,
    `content` TEXT NOT NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `deletedAt` DATETIME(6) NULL,

    INDEX `ArticleComments_articleId_fkey_idx`(`articleId`),
    INDEX `ArticleComments_userno_fkey_idx`(`userno`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `articleLikes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `article_id` INTEGER NOT NULL,
    `userno` INTEGER NOT NULL,
    `type` ENUM('like', 'dislike') NOT NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    INDEX `ArticleLike_articleId_fkey_idx`(`article_id`),
    INDEX `ArticleLike_userno_fkey_idx`(`userno`),
    UNIQUE INDEX `unique_like`(`article_id`, `userno`, `type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cgv_theaters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `region` VARCHAR(100) NOT NULL,
    `address` TEXT NULL,
    `phone` VARCHAR(50) NULL,
    `website` VARCHAR(255) NULL,
    `latitude` DECIMAL(10, 8) NULL,
    `longitude` DECIMAL(11, 8) NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `match_posts` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `movieTitle` VARCHAR(255) NOT NULL,
    `theaterName` VARCHAR(255) NOT NULL,
    `showTime` VARCHAR(100) NOT NULL,
    `maxParticipants` INTEGER NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `userno` INTEGER NOT NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NULL,
    `deletedAt` DATETIME(6) NULL,

    INDEX `MatchPost_userno_fkey_idx`(`userno`),
    INDEX `MatchPost_createdAt_idx`(`createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `match_applications` (
    `id` VARCHAR(191) NOT NULL,
    `matchPostId` VARCHAR(191) NOT NULL,
    `applicantUserno` INTEGER NOT NULL,
    `applicantName` VARCHAR(100) NOT NULL,
    `message` LONGTEXT NOT NULL,
    `status` ENUM('pending', 'accepted', 'rejected') NOT NULL DEFAULT 'pending',
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    INDEX `MatchApplication_matchPostId_fkey_idx`(`matchPostId`),
    INDEX `MatchApplication_applicantUserno_fkey_idx`(`applicantUserno`),
    UNIQUE INDEX `unique_match_application`(`matchPostId`, `applicantUserno`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chat_rooms` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `type` ENUM('direct', 'group') NOT NULL DEFAULT 'direct',
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chat_room_members` (
    `id` VARCHAR(191) NOT NULL,
    `chatRoomId` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `joinedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `leftAt` DATETIME(6) NULL,

    INDEX `ChatRoomMember_chatRoomId_fkey_idx`(`chatRoomId`),
    INDEX `ChatRoomMember_userId_fkey_idx`(`userId`),
    UNIQUE INDEX `unique_chat_room_member`(`chatRoomId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chat_messages` (
    `id` VARCHAR(191) NOT NULL,
    `chatRoomId` VARCHAR(191) NOT NULL,
    `senderId` INTEGER NOT NULL,
    `content` LONGTEXT NOT NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL,
    `deletedAt` DATETIME(6) NULL,

    INDEX `ChatMessage_chatRoomId_fkey_idx`(`chatRoomId`),
    INDEX `ChatMessage_senderId_fkey_idx`(`senderId`),
    INDEX `ChatMessage_createdAt_idx`(`createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `Movie`(`movieCd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_userno_fkey` FOREIGN KEY (`userno`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movieScore` ADD CONSTRAINT `movieScore_Userno_fkey` FOREIGN KEY (`Userno`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movieScore` ADD CONSTRAINT `movieScore_movieCd_fkey` FOREIGN KEY (`movieCd`) REFERENCES `Movie`(`movieCd`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieVod` ADD CONSTRAINT `MovieVod_movieCd_fkey` FOREIGN KEY (`movieCd`) REFERENCES `Movie`(`movieCd`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `Article_userno_fkey` FOREIGN KEY (`userno`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `articleComments` ADD CONSTRAINT `ArticleComments_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `articleComments` ADD CONSTRAINT `ArticleComments_userno_fkey` FOREIGN KEY (`userno`) REFERENCES `User`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `articleLikes` ADD CONSTRAINT `ArticleLike_articleId_fkey` FOREIGN KEY (`article_id`) REFERENCES `article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `articleLikes` ADD CONSTRAINT `ArticleLike_userno_fkey` FOREIGN KEY (`userno`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `match_posts` ADD CONSTRAINT `match_posts_userno_fkey` FOREIGN KEY (`userno`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `match_applications` ADD CONSTRAINT `match_applications_matchPostId_fkey` FOREIGN KEY (`matchPostId`) REFERENCES `match_posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `match_applications` ADD CONSTRAINT `match_applications_applicantUserno_fkey` FOREIGN KEY (`applicantUserno`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chat_room_members` ADD CONSTRAINT `chat_room_members_chatRoomId_fkey` FOREIGN KEY (`chatRoomId`) REFERENCES `chat_rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chat_room_members` ADD CONSTRAINT `chat_room_members_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chat_messages` ADD CONSTRAINT `chat_messages_chatRoomId_fkey` FOREIGN KEY (`chatRoomId`) REFERENCES `chat_rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chat_messages` ADD CONSTRAINT `chat_messages_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
