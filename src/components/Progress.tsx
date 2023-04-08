import getUser from "../hooks/getUser";
import { ProgressBar } from "react-bootstrap";
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
    <>
      <h1>Progress for {course.name}</h1>
      {/* change variants for different colors */}
      <ProgressBar
        now={progressPercentage}
        label={`${progressPercentage.toFixed(2)}%`}
        variant="success"
      />
    </>
  );
};

export default Progress;
