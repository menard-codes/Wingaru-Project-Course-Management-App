import express from "express";
import prisma from "../app/prismaClient";

const coursesRouter = express.Router();
export default coursesRouter;

coursesRouter
  .route("/")
  .get(async (req, res) => {
    const courses = await prisma.course.findMany();
    res.json(courses);
  })
  .post(async (req, res) => {
    // create a new course
    const {
      title,
      details,
      schedule,
      duration,
      location,
      locationDetails,
      availableSeats,
      enrollmentCount,
    } = req.body;
    const newCourse = await prisma.course.create({
      data: {
        title,
        details,
        schedule,
        duration,
        location,
        locationDetails,
        availableSeats,
        enrollmentCount,
      },
    });
    res.send(newCourse);
  });

coursesRouter.get("/query", async (req, res) => {
  const courseQuery = req.query["q"] as string;
  if (courseQuery) {
    const course = await prisma.course.findMany({
      where: {
        title: {
          contains: courseQuery,
        },
      },
    });
    res.send(course);
  } else {
    res.json({
      message: "No query found",
    });
  }
});

coursesRouter
  .route("/:id")
  .get(async (req, res) => {
    const courseId = req.params.id;
    const course = await prisma.course.findFirst({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      res.status(404).json({
        status: 404,
        message: `Course with the id \`${courseId}\` does not exist`,
      });
    } else {
      res.json(course);
    }
  })
  .put(async (req, res) => {
    const courseId = req.params.id;
    const updatedCourse = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        ...req.body,
      },
    });
    res.json(updatedCourse);
  })
  .delete(async (req, res) => {
    const courseId = req.params.id;
    const deletedCourse = await prisma.course.delete({
      where: {
        id: courseId,
      },
    });
    res.json(deletedCourse);
  });
