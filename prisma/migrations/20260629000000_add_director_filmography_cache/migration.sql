CREATE TABLE `DirectorFilmography` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `directorName` VARCHAR(100) NOT NULL,
    `movieCd` INTEGER NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `source` VARCHAR(20) NOT NULL DEFAULT 'db',
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL,

    UNIQUE INDEX `DirectorFilmography_director_movie_unique`(`directorName`, `movieCd`),
    INDEX `DirectorFilmography_director_sort_idx`(`directorName`, `sortOrder`),
    INDEX `DirectorFilmography_movieCd_idx`(`movieCd`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `DirectorFilmography`
  ADD CONSTRAINT `DirectorFilmography_movieCd_fkey`
  FOREIGN KEY (`movieCd`) REFERENCES `Movie`(`movieCd`)
  ON DELETE CASCADE ON UPDATE CASCADE;
