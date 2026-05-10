-- AlterTable
ALTER TABLE `chat_rooms` ADD COLUMN `matchPostId` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `chat_rooms_matchPostId_idx` ON `chat_rooms`(`matchPostId`);
