import getUser, { User } from "../hooks/getUser";
import courses from "../data/courses";
import { ProgressBar } from "react-bootstrap";
import { Course } from "./courses/Courses";

interface Props {
  course: Course;
}

const Progress = ({ course }: Props) => {
  const { user, error } = getUser();
  if (error == "noCookie") {
    return <div></div>;
  }
  const courseString = course.name.toLowerCase();
  const courseIndex = courses.findIndex(
    (course) => course.name.toLowerCase() === courseString
  );
  const courseLessons = courses[courseIndex].lessons.length;
  const userProgress = user[courseString as keyof User];
  const progress = (Number(userProgress) / courseLessons) * 100;
  return (
    <>
      <h1>Progress for {course.name}</h1>
      {/* change variants for different colors */}
      <ProgressBar now={progress} label={course.name} variant="" />
      <h3>{progress.toFixed(2)}%</h3>
    </>
  );
};

export default Progress;
