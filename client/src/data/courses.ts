import javaLessons from "./java";
import pythonLessons from "./python";
import htmlLessons from "./htmlCourse";

export default [
  {
    id: 1, //numerical id number
    name: "Java", //make sure this is capitalized
    img: "../src/assets/java.png", //path to image
    complete: true, //is the course content finished?
    lessons: javaLessons, //array of lessons
  },
  {
    id: 2,
    name: "Python",
    img: "../src/assets/python.png",
    complete: false,
    lessons: pythonLessons,
  },
  {
    id: 3,
    name: "Html",
    img: "../src/assets/python.png",
    complete: false,
    lessons: htmlLessons,
  },
];
