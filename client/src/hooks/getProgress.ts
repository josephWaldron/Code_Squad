import { useState, useEffect } from "react";
import { Course } from "../components/courses/render/Courses";
import courses from "../data/courses";
import { User } from "./getUser";

const getProgress = (course: Course, user: User) => {
  const [progress, setProgress] = useState<number>(0);
  const [lessons, setLessons] = useState<number>(0);

  useEffect(() => {
    const courseString = course.name.toLowerCase();
    const courseIndex = courses.findIndex(
      (course) => course.name.toLowerCase() === courseString
    );
    const courseLessons = courses[courseIndex].lessons.length;
    const courseProgress = user[courseString as keyof User];
    setProgress(Number(courseProgress));
    setLessons(courseLessons);
  }, [course, user]);

  return { progress, lessons };
};

export default getProgress;
