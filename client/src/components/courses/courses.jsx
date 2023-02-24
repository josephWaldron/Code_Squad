import React from "react";
import "./courses.css";
const coursesData = [
  {
    name: "Java",
    imageURL: "/java.png",
    buttonText: "Learn Java",
    note: "Learn now!",
    url: "java",
  },
  {
    name: "C#",
    imageURL: "/csharp.png",
    buttonText: "Learn C#",
    note: "Coming Soon!",
    url: "java",
  },
  {
    name: "Python",
    imageURL: "/python.png",
    buttonText: "Learn Python",
    note: "Coming Soon!",
    url: "java",
  },
  {
    name: "SQL",
    imageURL: "/sql.png",
    buttonText: "Learn SQL",
    note: "Coming Soon!",
    url: "java",
  },
];

const Courses = () => {
  return (
    <>
      <div className="course">
        <h1 className="text-style">
          Explore our current and upcoming courses!
        </h1>
      </div>
      <div className="courses-container">
        {coursesData.map((course) => (
          <div key={course.name}>
            <h3 className="text-style">{course.name}</h3>
            <img src={course.imageURL} className="courseIMG" />
            <br></br>
            {course.note === "Coming Soon!" ? ( // if the note is "Coming Soon!"
              <button className="text-style"> {course.buttonText} </button> //add a not yet available page
            ) : (
              // else
              <button
                className="text-style"
                onClick={() =>
                  (window.location.href = `/courses/${course.url}`)
                }
              >
                {course.buttonText}
              </button>
            )}

            <h5 className="text-style-RED">{course.note}</h5>
          </div>
        ))}
      </div>
      <div className="course">
        <h1 className="text-style">
          Click one of the courses to begin your journey!
        </h1>
      </div>
    </>
  );
};

export default Courses;
