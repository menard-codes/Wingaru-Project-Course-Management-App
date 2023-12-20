import { SetStateAction, useState } from "react";
import type { Course } from "../../app/courseSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faRotateLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch } from "../../hooks/reduxCustomHooks";
import { deleteCourse } from "../../adapters/coursesAdapters";
import { deleteCourse as deleteReduxCourse } from "../../app/courseSlice";
import { useNavigate } from "react-router-dom";
import type { CourseEditInput } from "../../adapters/coursesAdapters";
import { editCourse } from "../../adapters/coursesAdapters";
import { editCourse as editReduxCourse } from "../../app/courseSlice";

import styles from "./Course.module.scss";

interface CourseEditProps {
  course: Course;
  courseId: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CourseEdit({
  course,
  courseId,
  setIsEditing,
}: CourseEditProps) {
  const [title, setTitle] = useState(course.title);
  const [details, setDetails] = useState(course.details);
  const [schedule, setSchedule] = useState<
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
  >("MONDAY");
  const [duration, setDuration] = useState(course.duration);
  const [location, setLocation] = useState<"ONLINE" | "IN_PERSON">(
    course.location
  );
  const [locationDetails, setLocationDetails] = useState(
    course.locationDetails
  );
  const [availableSeats, setAvailableSeats] = useState(course.availableSeats);
  const [enrollmentCount, setEnrollmentCount] = useState(
    course.enrollmentCount
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const courseInput: CourseEditInput = {
      title,
      details,
      schedule,
      duration: Number(duration),
      location,
      locationDetails,
      availableSeats: Number(availableSeats),
      enrollmentCount: Number(enrollmentCount),
    };
    const data: Course = await editCourse(courseId, courseInput);
    dispatch(editReduxCourse(data));

    alert(`Updated course: ${title}`);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteCourse(courseId);
    dispatch(deleteReduxCourse(courseId));
    alert(`Course Deleted`);
    navigate("/");

    setIsEditing(false);
  };

  return (
    <form className={styles.courseContainer} onSubmit={handleSubmit}>
      <div className={styles.courseMain}>
        <input
          type="text"
          autoFocus
          className={styles.editTitle}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.courseBtnsContainer}>
          <button
            type="submit"
            className={`${styles.courseBtn} ${styles.saveBtn}`}
          >
            {/* Save */}
            <FontAwesomeIcon icon={faFloppyDisk} />
          </button>
          <button
            type="button"
            className={`${styles.courseBtn} ${styles.undoBtn}`}
            onClick={() => setIsEditing(false)}
          >
            {/* Undo */}
            <FontAwesomeIcon icon={faRotateLeft} />
          </button>
          <button
            type="button"
            className={`${styles.courseBtn} ${styles.deleteBtn}`}
            onClick={handleDelete}
          >
            {/* Delete */}
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </div>
      <table className={styles.courseTable}>
        <tbody>
          <tr>
            <th>Schedule</th>
            <td>
              <input
                type="text"
                value={schedule}
                onChange={(e) =>
                  setSchedule(
                    e.target.value as SetStateAction<
                      | "MONDAY"
                      | "TUESDAY"
                      | "WEDNESDAY"
                      | "THURSDAY"
                      | "FRIDAY"
                      | "SATURDAY"
                      | "SUNDAY"
                    >
                  )
                }
              />
            </td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <th>Location</th>
            <td>
              <select
                name=""
                id=""
                value={location}
                onChange={(e) =>
                  setLocation(
                    e.target.value as SetStateAction<"ONLINE" | "IN_PERSON">
                  )
                }
              >
                <option value="ONLINE">Online</option>
                <option value="IN_PERSON">In Person</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Location Details</th>
            <td>
              <input
                type="text"
                value={locationDetails}
                onChange={(e) => setLocationDetails(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Available Seats</th>
            <td>
              <input
                type="number"
                name=""
                id=""
                value={availableSeats}
                onChange={(e) => setAvailableSeats(Number(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <th>Enrolled Students</th>
            <td>
              <input
                type="number"
                name=""
                id=""
                value={enrollmentCount}
                onChange={(e) => setEnrollmentCount(Number(e.target.value))}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
