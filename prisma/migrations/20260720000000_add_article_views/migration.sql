ALTER TABLE `article`
  ADD COLUMN `view_count` INTEGER NOT NULL DEFAULT 0;

CREATE TABLE `article_views` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `articleId` INTEGER NOT NULL,
  `viewerKey` CHAR(64) NOT NULL,
  `viewedOn` DATE NOT NULL,
  `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  UNIQUE INDEX `ArticleView_daily_unique`(`articleId`, `viewerKey`, `viewedOn`),
  INDEX `ArticleView_article_date_idx`(`articleId`, `viewedOn`),
  PRIMARY KEY (`id`),
  CONSTRAINT `article_views_articleId_fkey`
    FOREIGN KEY (`articleId`) REFERENCES `article`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
