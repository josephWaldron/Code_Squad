import { Alert } from "react-bootstrap";
import getUser from "../../hooks/getUser";
import { Course } from "./Courses";

interface Props {
  course: Course;
}
export interface Lesson {
  id: number;
  description: string;
}

const DisplayLessons = ({ course }: Props) => {
  const { user, error } = getUser();
  if (error == "noCookie") {
    return (
      <Alert variant="danger">
        Please <Alert.Link href="/login">Log in</Alert.Link> or
        <Alert.Link href="/register"> Register</Alert.Link> to view this page.
      </Alert>
    );
  }
  console.log(user);

  return <div>temp</div>;
};

export default DisplayLessons;
