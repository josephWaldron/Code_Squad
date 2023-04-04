import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import getProgress from "../../../hooks/getProgress";
import getUser from "../../../hooks/getUser";
import Progress from "../../Progress";
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
  const { progress, lessons } = getProgress(course, user);
  if (error == "noCookie") {
    return (
      <Alert variant="danger">
        Please <Alert.Link href="/login">Log in</Alert.Link> or
        <Alert.Link href="/register"> Register</Alert.Link> to view this page.
      </Alert>
    );
  }
  const lessonArray = course.lessons.map((lesson) => {
    return {
      id: lesson.id,
      description: lesson.description,
    };
  });
  const complete = progress >= lessons;

  return (
    <>
      <Progress course={course} />
      <Container>
        {lessonArray.map((lesson) => {
          const disabled = lesson.id > progress + 1;
          const buttonContent = disabled ? "🔒" : "Learn now!";
          const button = (
            <Button
              key={lesson.id}
              href={`/courses/${course.name.toLowerCase()}/lesson${lesson.id}`}
              disabled={disabled}
              variant={disabled ? "danger" : "primary"}
            >
              {buttonContent}
            </Button>
          );
          return (
            <Row key={lesson.id}>
              <Col>
                <h1> {lesson.description}</h1>
              </Col>
              <Col>{button}</Col>
            </Row>
          );
        })}
      </Container>
      {/* add certificate to download here */}
      {complete && <Alert variant="success">Course Complete! </Alert>}
    </>
  );
};

export default DisplayLessons;
