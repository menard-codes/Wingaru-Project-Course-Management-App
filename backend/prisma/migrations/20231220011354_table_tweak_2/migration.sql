/*
  Warnings:

  - You are about to drop the column `scheduleDay` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleTime` on the `Course` table. All the data in the column will be lost.
  - Added the required column `schedule` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Course` DROP COLUMN `scheduleDay`,
    DROP COLUMN `scheduleTime`,
    ADD COLUMN `schedule` ENUM('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY') NOT NULL;
