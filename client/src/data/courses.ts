import javaLessons from "./java";
import pythonLessons from "./python";

//import images
import javaImg from "../images/java.png";
import pythonImg from "../images/python.png";

export default [
  {
    id: 1, //numerical id number
    name: "Java", //make sure this is capitalized
    img: javaImg, //path to image
    complete: true, //is the course content finished?
    lessons: javaLessons, //array of lessons
  },
  {
    id: 2,
    name: "Python",
    img: pythonImg,
    complete: false,
    lessons: pythonLessons,
  },
];
