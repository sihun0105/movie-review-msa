CREATE TABLE `MovieActor` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `movieCd` INTEGER NOT NULL,
  `tmdbPersonId` INTEGER NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `character` VARCHAR(200) NULL,
  `profileUrl` VARCHAR(1024) NOT NULL,
  `sortOrder` INTEGER NOT NULL DEFAULT 0,
  `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` DATETIME(6) NOT NULL,

  UNIQUE INDEX `MovieActor_movie_person_unique`(`movieCd`, `tmdbPersonId`),
  INDEX `MovieActor_movie_sort_idx`(`movieCd`, `sortOrder`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `MovieActor`
  ADD CONSTRAINT `MovieActor_movieCd_fkey`
  FOREIGN KEY (`movieCd`) REFERENCES `Movie`(`movieCd`)
  ON DELETE CASCADE ON UPDATE CASCADE;
