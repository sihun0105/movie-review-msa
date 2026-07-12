ALTER TABLE `User`
  ADD COLUMN `lastActiveAt` DATETIME(6) NULL;

CREATE INDEX `User_lastActiveAt_idx` ON `User`(`lastActiveAt`);
