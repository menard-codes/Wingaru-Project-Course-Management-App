// * NOTE: This can be replaced with a value from a .env file
const BACKEND_URL = "http://localhost:8080";

export async function getAllCourses() {
  const allCoursesRoute = new URL("/courses/", BACKEND_URL);
  const res = await fetch(allCoursesRoute.href);
  const data = await res.json();
  return data;
}

export async function getCourse(courseId: string) {
  const courseRoute = new URL(`/courses/${courseId}`, BACKEND_URL);
  const res = await fetch(courseRoute.href);
  const data = await res.json();
  return data;
}

export async function queryCourses(query: string) {
  const queryRoute = new URL(`/courses/query?q=${query}`, BACKEND_URL);
  const res = await fetch(queryRoute.href);
  const data = await res.json();
  return data;
}

export interface CourseAddInput {
  title: string;
  details: string;
  schedule:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  duration: number;
  location: "IN_PERSON" | "ONLINE";
  locationDetails: string;
  availableSeats?: number;
  enrollmentCount: number;
}

export async function addCourse(newCourse: CourseAddInput) {
  const newCourseRoute = new URL("/courses", BACKEND_URL);
  const res = await fetch(newCourseRoute.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCourse),
  });
  const data = res.json();
  return data;
}

export interface CourseEditInput {
  title?: string;
  details?: string;
  schedule?:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  duration?: number;
  location?: "IN_PERSON" | "ONLINE";
  locationDetails?: string;
  availableSeats?: number;
  enrollmentCount?: number;
}

export async function editCourse(
  courseId: string,
  editedCourse: CourseEditInput
) {
  const editCourseRoute = new URL(`/courses/${courseId}`, BACKEND_URL);
  const res = await fetch(editCourseRoute.href, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedCourse),
  });
  const data = res.json();
  return data;
}

export async function deleteCourse(courseId: string) {
  const delCourseRoute = new URL(`/courses/${courseId}`, BACKEND_URL);
  const res = await fetch(delCourseRoute.href, { method: "DELETE" });
  const data = res.json();
  return data;
}
