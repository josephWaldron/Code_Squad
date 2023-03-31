import { Alert } from "react-bootstrap";
import getUser from "../../hooks/getUser";
import { Course } from "./AllCourses";

interface Props {
  course: Course;
}

const DisplayLessons = ({ course }: Props) => {
  const { user, error } = getUser();
  if (error == "noCookie") {
    return (
      <Alert variant="danger">
        Please <Alert.Link href="/login">Log in</Alert.Link> to view this page.{" "}
      </Alert>
    );
  }
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

export default DisplayLessons;
