import { Link } from "react-router-dom";

interface TableRowProps {
  courseId: string;
  title: string;
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
}

export default function TableRow({
  courseId,
  title,
  schedule,
  duration,
  location,
}: TableRowProps) {
  return (
    <tr>
      <td>
        <Link to={`/course/${courseId}`}>{title}</Link>
      </td>
      <td>{schedule}</td>
      <td>{duration} hrs.</td>
      <td>{location}</td>
    </tr>
  );
}
