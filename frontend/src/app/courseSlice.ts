import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Course {
  id: string;
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

interface EditCoursePayload {
  id: string;
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

const initialState: Course[] = [];

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (_, action: PayloadAction<Course[]>) => {
      return action.payload;
    },
    addCourse: (state, action: PayloadAction<Course>) => {
      state.push(action.payload);
    },
    editCourse: (state, action: PayloadAction<EditCoursePayload>) => {
      const editedCourse = state.findIndex(
        (course) => course.id === action.payload.id
      );

      if (editedCourse < 0) {
        return state;
      }

      state[editedCourse] = {
        ...state[editedCourse],
        ...action.payload,
      };
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      const newCoursesState = state.filter(
        (course) => course.id !== action.payload
      );
      return newCoursesState;
    },
  },
});

export const { setCourses, addCourse, editCourse, deleteCourse } =
  courseSlice.actions;
export default courseSlice.reducer;
