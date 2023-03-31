import { User } from "../hooks/getUser";
import courses from "../data/courses";
import { ProgressBar } from "react-bootstrap";

interface Props {
  user: User | null;
  course: string;
}

const Progress = ({ user, course }: Props) => {
  if (course && user) {
    const courseString = course.toLowerCase();
    const courseIndex = courses.findIndex(
      (course) => course.name.toLowerCase() === courseString
    );
    const courseLessons = courses[courseIndex].lessons.length;
    const userProgress = user[courseString as keyof User];
    if (userProgress != 0) {
      let progress = (Number(userProgress) / courseLessons) * 100;
    }
    const progress = (Number(userProgress) / courseLessons) * 100;
    return (
      <>
        <h1>Progress for {course}</h1>
        {/* change variants for different colors */}
        <ProgressBar now={progress} label={course} variant="" />
        <h3>{progress.toFixed(2)}%</h3>
      </>
    );
  }
  return <p>error</p>;
};

export default Progress;
