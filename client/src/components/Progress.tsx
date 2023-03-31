import { User } from "../hooks/getUser";
import courses from "../data/courses";
import { ProgressBar } from "react-bootstrap";

interface Props {
  user: User | null;
  course?: string;
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
        <ProgressBar now={progress} label={course} />
        <h3>{progress.toFixed(2)}%</h3>
      </>
    );
  }
  const totalCourses = courses.length;
  if (user) {
    let percentages: number[] = [];
    let labels: string[] = [];

    for (let i = 0; i < totalCourses; i++) {
      labels[i] = courses[i].name;
      //let userProgress = user[labels[i].toLowerCase() as keyof User];
      let userProgress = 2;

      percentages[i] =
        (Number(userProgress) / courses[i].lessons.length / totalCourses) * 100;
    }
    const colorMap = {
      0: "success",
      1: "warning",
      2: "danger",
      3: "info",
    };
    return (
      <>
        <h1>TotalProgress</h1>
        <ProgressBar>
          {percentages.map((percentage, index) => (
            <ProgressBar
              key={index}
              //fix variant
              now={percentage}
              label={labels[index]}
            />
          ))}
        </ProgressBar>
      </>
    );
  }
  return <p>error</p>;
};

export default Progress;
