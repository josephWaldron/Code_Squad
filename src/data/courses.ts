import javaLessons from "./java";
import pythonLessons from "./python";

//import images
import javaImg from "../assets/java.png";
import pythonIMG from "../assets/python.png";

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
    img: pythonIMG,
    complete: false,
    lessons: pythonLessons,
  },
];
