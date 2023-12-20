import TableRow from "./TableRow/TableRow";
import styles from "./CourseTable.module.scss";
import { Course } from "../../../app/courseSlice";

interface CourseTableProps {
  courses: Course[];
}

export default function CourseTable({ courses }: CourseTableProps) {
  return (
    <table className={styles.courseTable}>
      <thead>
        <tr>
          <th>Course Title</th>
          <th>Schedule</th>
          <th>Duration</th>
          <th>Location</th>
          {/* <th>Options</th> */}
        </tr>
      </thead>
      <tbody>
        {courses.map(({ id, title, schedule, duration, location }) => (
          <TableRow
            key={id}
            courseId={id}
            title={title}
            schedule={schedule}
            duration={duration}
            location={location}
          />
        ))}
      </tbody>
    </table>
  );
}
