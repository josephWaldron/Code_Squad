import javaLessons from "./java";
import pythonLessons from "./python";

export default [
  {
    id: 1, //numerical id number
    name: "Java", //make sure this is capitalized
    img: "./images/java.png", //path to image
    complete: true, //is the course content finished?
    lessons: javaLessons, //array of lessons
  },
  {
    id: 2,
    name: "Python",
    img: "./images/python.png",
    complete: false,
    lessons: pythonLessons,
  },
];
