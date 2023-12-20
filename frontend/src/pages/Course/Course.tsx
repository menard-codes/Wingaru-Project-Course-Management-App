import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import CourseView from "./CourseView";
import CourseEdit from "./CourseEdit";
import type { Course } from "../../app/courseSlice";
import { useAppSelector } from "../../hooks/reduxCustomHooks";
import NotFound from "../NotFound";

export default function Course() {
  const [isEditing, setIsEditing] = useState(false);
  const courses = useAppSelector((state) => state.courses);

  const { courseId } = useParams();

  const selectedCourse = courses.find((course) => course.id === courseId);

  if (!selectedCourse) {
    return <NotFound />;
  }

  return (
    <div>
      <Navbar />
      {isEditing ? (
        <CourseEdit
          course={selectedCourse}
          courseId={courseId as string}
          setIsEditing={setIsEditing}
        />
      ) : (
        <CourseView
          course={selectedCourse}
          courseId={courseId as string}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}
