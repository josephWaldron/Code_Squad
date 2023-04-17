import javaLessons from "./java";
import pythonLessons from "./python";
import SQLLessons from "./sql";
import htmlLessons from "./html";

//import images
import javaImg from "../assets/java.png";
import pythonIMG from "../assets/python.png";
import sqlIMG from "../assets/sql.png";
import htmlIMG from "../assets/html.png";

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
    complete: true,
    lessons: pythonLessons,
  },
  {
    id: 3,
    name: "SQL",
    img: sqlIMG,
    complete: true,
    lessons: SQLLessons,
  },
  {
    id: 4,
    name: "Html",
    img: htmlIMG,
    complete: false,
    lessons: htmlLessons,
  },
];
