ALTER TABLE `public_chat_messages`
  ADD COLUMN `userId` INTEGER NULL AFTER `clientId`,
  ADD COLUMN `image` LONGTEXT NULL AFTER `nickName`;

CREATE INDEX `PublicChatMessage_userId_idx`
  ON `public_chat_messages`(`userId`);
