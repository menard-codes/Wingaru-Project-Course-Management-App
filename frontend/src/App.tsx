import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import NotFound from "./pages/NotFound";
import { getAllCourses } from "./adapters/coursesAdapters";
import { setCourses } from "./app/courseSlice";
import { useAppDispatch, useAppSelector } from "./hooks/reduxCustomHooks";

function App() {
  const courses = useAppSelector((state) => state.courses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchCoursesToStore() {
      const courses = await getAllCourses();
      dispatch(setCourses(courses));
    }

    if (courses.length === 0) {
      fetchCoursesToStore();
    }
  });

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/course/:courseId" Component={Course} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
