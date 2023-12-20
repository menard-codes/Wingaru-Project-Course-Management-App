-- CreateTable
CREATE TABLE `Course` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `details` VARCHAR(191) NOT NULL,
    `schedule` VARCHAR(255) NOT NULL,
    `duration` INTEGER NOT NULL,
    `location` ENUM('ONLINE', 'IN_PERSON') NOT NULL,
    `locationDetails` VARCHAR(255) NOT NULL,
    `availableSeats` INTEGER NULL,
    `enrollementCount` INTEGER NOT NULL,

    UNIQUE INDEX `Course_title_key`(`title`),
    UNIQUE INDEX `Course_schedule_key`(`schedule`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
