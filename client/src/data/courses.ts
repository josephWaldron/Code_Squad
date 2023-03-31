import javaLessons from "./java";
import pythonLessons from "./python";

export default [
  {
    id: 1,
    name: "java",
    img: "../assets/java.png",
    complete: true,
    lessons: javaLessons,
  },
  {
    id: 2,
    name: "python",
    img: "../assets/python.png",
    complete: false,
    lessons: pythonLessons,
  },
];
