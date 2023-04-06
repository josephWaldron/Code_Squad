import { Button, Card } from "react-bootstrap";
import courses from "../../../data/courses";
import { Lesson } from "./DisplayCourse";

export interface Course {
  id: number;
  name: string;
  img: string;
  complete: boolean;
  lessons: Lesson[];
}

const Courses = () => {
  return (
    <div>
      {courses.map((course, index) => {
        return (
          <Card bg={"dark"} key={index}>
            <h1> {course.name}</h1>
            <img
              key={index}
              src={course.img}
              alt={course.name}
              width="60"
              height="60"
            />
            {course.complete ? (
              <Button
                key={course.id}
                href={`/courses/${course.name.toLowerCase()}`}
              >
                Learn {course.name}!
              </Button>
            ) : (
              <Button variant="danger" disabled>
                Under Construction 👷
              </Button>
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default Courses;
