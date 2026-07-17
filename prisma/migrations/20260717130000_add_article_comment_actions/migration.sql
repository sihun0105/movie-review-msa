ALTER TABLE `articleComments`
  ADD COLUMN `parentId` INTEGER NULL,
  ADD COLUMN `isEdited` BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX `ArticleComments_parentId_idx`
  ON `articleComments`(`parentId`);

ALTER TABLE `articleComments`
  ADD CONSTRAINT `articleComments_parentId_fkey`
  FOREIGN KEY (`parentId`) REFERENCES `articleComments`(`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE `article_comment_reactions` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `commentId` INTEGER NOT NULL,
  `userno` INTEGER NOT NULL,
  `type` ENUM('like', 'dislike') NOT NULL,
  `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` DATETIME(6) NOT NULL,
  UNIQUE INDEX `ArticleCommentReaction_comment_user_unique`(`commentId`, `userno`),
  INDEX `ArticleCommentReaction_comment_type_idx`(`commentId`, `type`),
  INDEX `ArticleCommentReaction_user_idx`(`userno`),
  PRIMARY KEY (`id`),
  CONSTRAINT `article_comment_reactions_commentId_fkey`
    FOREIGN KEY (`commentId`) REFERENCES `articleComments`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_comment_reactions_userno_fkey`
    FOREIGN KEY (`userno`) REFERENCES `User`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
