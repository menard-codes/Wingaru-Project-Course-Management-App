import Navbar from "../../components/Navbar/Navbar";
import CourseTable from "./CoursesTable";
import AddCourse from "./AddCourse";
import styles from "./Home.module.scss";

import { useAppSelector } from "../../hooks/reduxCustomHooks";

export default function Home() {
  const courses = useAppSelector((state) => state.courses);

  // TODO: Use real data later
  const totalCourses = courses.length;

  return (
    <div>
      <Navbar />
      <div className={styles.homeContainer}>
        <div className={styles.pageHead}>
          <div>
            <h2>Courses</h2>
            <p>Total: {totalCourses}</p>
          </div>
          <div>
            <AddCourse />
          </div>
        </div>
        <CourseTable courses={courses} />
      </div>
    </div>
  );
}
