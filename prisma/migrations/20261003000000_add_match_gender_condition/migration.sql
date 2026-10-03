ALTER TABLE `match_posts`
  ADD COLUMN `genderCondition` VARCHAR(10) NOT NULL DEFAULT 'any' AFTER `maxParticipants`;

-- maxParticipants now means the total party size, including the host.
UPDATE `match_posts`
SET `maxParticipants` = `maxParticipants` + 1;
