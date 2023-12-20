/*
  Warnings:

  - You are about to drop the column `schedule` on the `Course` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `locationDetails` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - Added the required column `scheduleDay` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleTime` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Course_schedule_key` ON `Course`;

-- AlterTable
ALTER TABLE `Course` DROP COLUMN `schedule`,
    ADD COLUMN `scheduleDay` ENUM('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY') NOT NULL,
    ADD COLUMN `scheduleTime` TIME NOT NULL,
    MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `locationDetails` VARCHAR(191) NOT NULL;
