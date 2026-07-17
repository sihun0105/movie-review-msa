ALTER TABLE `Comment`
  ADD COLUMN `isEdited` BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE `comment_reactions` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `commentId` INTEGER NOT NULL,
  `userno` INTEGER NOT NULL,
  `type` ENUM('like', 'dislike') NOT NULL,
  `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` DATETIME(6) NOT NULL,
  UNIQUE INDEX `CommentReaction_comment_user_unique`(`commentId`, `userno`),
  INDEX `CommentReaction_comment_type_idx`(`commentId`, `type`),
  INDEX `CommentReaction_user_idx`(`userno`),
  PRIMARY KEY (`id`),
  CONSTRAINT `comment_reactions_commentId_fkey`
    FOREIGN KEY (`commentId`) REFERENCES `Comment`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_reactions_userno_fkey`
    FOREIGN KEY (`userno`) REFERENCES `User`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
