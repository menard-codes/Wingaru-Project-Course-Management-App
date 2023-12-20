import type { Course } from "../../app/courseSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { deleteCourse } from "../../adapters/coursesAdapters";
import { deleteCourse as deleteReduxCourse } from "../../app/courseSlice";
import { useAppDispatch } from "../../hooks/reduxCustomHooks";

import styles from "./Course.module.scss";

interface CourseViewProps {
  course: Course;
  courseId: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CourseView({
  course,
  courseId,
  setIsEditing,
}: CourseViewProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteCourse(courseId);
    dispatch(deleteReduxCourse(courseId));
    alert(`Course Deleted`);
    navigate("/");

    setIsEditing(false);
  };

  return (
    <div className={styles.courseContainer}>
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <div>
        <h2>{course.title}</h2>
        <div className={styles.courseBtnsContainer}>
          <button
            className={`${styles.courseBtn} ${styles.editBtn}`}
            onClick={() => setIsEditing(true)}
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button
            className={`${styles.courseBtn} ${styles.deleteBtn}`}
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <p>{course.details}</p>
      <table className={styles.courseTable}>
        <tbody>
          <tr>
            <th>Schedule</th>
            <td>{course.schedule}</td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>{course.duration} hrs.</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>{course.location}</td>
          </tr>
          <tr>
            <th>Location Details</th>
            <td>{course.locationDetails}</td>
          </tr>
          <tr>
            <th>Available Seats</th>
            <td>{course.availableSeats || "N/A"}</td>
          </tr>
          <tr>
            <th>Enrolled Students</th>
            <td>{course.enrollmentCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
