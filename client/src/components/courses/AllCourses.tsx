import { Button, Card } from "react-bootstrap";
import courses from "../../data/courses";

export interface Course {
  id: number;
  name: string;
  img: string;
  complete: boolean;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  description: string;
}

const AllCourses = () => {
  const coursesArray = courses.map((course) => {
    return {
      id: course.id,
      name: course.name,
      img: course.img,
      completed: course.complete,
      lessons: course.lessons,
    };
  });
  return (
    <div>
      {coursesArray.map((course, index) => {
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
            {course.completed ? (
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

export default AllCourses;
