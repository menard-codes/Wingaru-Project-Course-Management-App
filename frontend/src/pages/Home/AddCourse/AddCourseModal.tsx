import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddCourseModal.module.scss";
import { SetStateAction, useState } from "react";
import { addCourse } from "../../../adapters/coursesAdapters";
import {
  Course,
  addCourse as addCourseToRedux,
} from "../../../app/courseSlice";
import type { CourseAddInput } from "../../../adapters/coursesAdapters";
import { useAppDispatch } from "../../../hooks/reduxCustomHooks";

interface AddCourseModalProps {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddCourseModal({
  setModalIsOpen,
}: AddCourseModalProps) {
  // TODO: Handle input in state
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [schedule, setSchedule] = useState<
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
  >("MONDAY");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState<"ONLINE" | "IN_PERSON">("ONLINE");
  const [locationDetails, setLocationDetails] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [enrollmentCount, setEnrollmentCount] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const courseInput: CourseAddInput = {
      title,
      details,
      schedule,
      duration: Number(duration),
      location,
      locationDetails,
      availableSeats: Number(availableSeats),
      enrollmentCount: Number(enrollmentCount),
    };
    const data: Course = await addCourse(courseInput);
    dispatch(addCourseToRedux(data));

    alert(`Added course: ${title}`);

    setTitle("");
    setDetails("");
    setSchedule("MONDAY");
    setDuration("");
    setLocation("ONLINE");
    setLocationDetails("");
    setAvailableSeats("");
    setEnrollmentCount("");

    setModalIsOpen(false);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={() => setModalIsOpen(false)}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        <form onSubmit={handleSubmit} className={styles.newCourseForm}>
          <div>
            <label htmlFor="title">Course Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div>
            <label htmlFor="details">Details</label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="schedule">Schedule</label>
            <select
              name=""
              id="schedule"
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
              required
            >
              <option value="MONDAY">Monday</option>
              <option value="TUESDAY">Tuesday</option>
              <option value="WEDNESDAY">Wednesday</option>
              <option value="THURSDAY">Thursday</option>
              <option value="FRIDAY">Friday</option>
              <option value="SATURDAY">Saturday</option>
              <option value="SUNDAY">Sunday</option>
            </select>
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <select
              name=""
              id="location"
              value={location}
              onChange={(e) =>
                setLocation(
                  e.target.value as SetStateAction<"ONLINE" | "IN_PERSON">
                )
              }
              required
            >
              <option value="ONLINE">Online</option>
              <option value="IN_PERSON">In Person</option>
            </select>
          </div>
          <div>
            <label htmlFor="locationDetails">Location Details</label>
            <input
              type="text"
              id="locationDetails"
              value={locationDetails}
              onChange={(e) => setLocationDetails(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="availableSeats">Available Seats (Optional)</label>
            <input
              type="number"
              id="availableSeats"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="enrollmentCount">Enrollment Count</label>
            <input
              type="number"
              id="enrollmentCount"
              value={enrollmentCount}
              onChange={(e) => setEnrollmentCount(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.btnSubmit}>
            Add New Course
          </button>
        </form>
      </div>
    </div>
  );
}
