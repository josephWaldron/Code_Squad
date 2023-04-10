import getUser from "../hooks/getUser";
import { ProgressBar, Card } from "react-bootstrap";
import { Course } from "./courses/render/Courses";
import getProgress from "../hooks/getProgress";

interface Props {
  course: Course;
}

const Progress = ({ course }: Props) => {
  const { user, error } = getUser();
  if (error == "noCookie") {
    return <div></div>;
  }
  const { progress, lessons } = getProgress(course, user);
  const progressPercentage = (Number(progress) / lessons) * 100;
  return (
    <Card style={{ width: "18rem", margin: "1rem auto" }}>
      <Card.Body>
        <Card.Title>Progress for {course.name}</Card.Title>
        <ProgressBar
          now={progressPercentage}
          label={`${progressPercentage.toFixed(2)}%`}
          striped
          variant="success"
        />
      </Card.Body>
    </Card>
  );
};

export default Progress;
