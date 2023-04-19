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
          <>
            <br />
            <Card key={index} className="bg-dark text-light col-md-4 mx-auto">
              <div className="text-center">
                <h1> {course.name}</h1>
                <img
                  key={index}
                  src={course.img}
                  alt={course.name}
                  width="60"
                  height="60"
                />
              </div>
              <br />
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
          </>
        );
      })}
    </div>
  );
};

export default Courses;
