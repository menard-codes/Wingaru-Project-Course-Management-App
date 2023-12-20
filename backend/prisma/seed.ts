// ! do not import this module. Only run this when seeding the database
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const courses: Prisma.CourseCreateInput[] = [
  {
    title: "ComSci. 101",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis risus in velit ullamcorper luctus. Donec laoreet felis libero, non euismod urna ultricies egestas. In hac habitasse platea dictumst.",
    schedule: "MONDAY",
    duration: 1,
    location: "IN_PERSON",
    locationDetails: "Room 103",
    availableSeats: 35,
    enrollmentCount: 35,
  },
  {
    title: "Calculus",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis risus in velit ullamcorper luctus. Donec laoreet felis libero, non euismod urna ultricies egestas. In hac habitasse platea dictumst.",
    schedule: "TUESDAY",
    duration: 0.5,
    location: "ONLINE",
    locationDetails: "meeting link: https://example.com/meeting",
    enrollmentCount: 20,
  },
  {
    title: "Classical Physics",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis risus in velit ullamcorper luctus. Donec laoreet felis libero, non euismod urna ultricies egestas. In hac habitasse platea dictumst.",
    schedule: "FRIDAY",
    duration: 1.2,
    location: "IN_PERSON",
    locationDetails: "Room 101",
    availableSeats: 25,
    enrollmentCount: 25,
  },
  {
    title: "Renaissance Literature",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis risus in velit ullamcorper luctus. Donec laoreet felis libero, non euismod urna ultricies egestas. In hac habitasse platea dictumst.",
    schedule: "WEDNESDAY",
    duration: 1,
    location: "ONLINE",
    locationDetails: "meeting link: https://example.com/meeting",
    enrollmentCount: 18,
  },
];

async function main() {
  console.log("Start seeding");
  await prisma.course.createMany({ data: courses });
  console.log("Seeding finished");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
