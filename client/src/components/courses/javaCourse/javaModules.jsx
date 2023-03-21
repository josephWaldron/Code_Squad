import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./javaModules.css";
import JavaProgress from "./javaProgress";
//Liam add more lessons here
const data = [
  {
    id: 1,
    name: "Lesson 1",
    description: "Learn the basics of Java",
    url: "lesson1",
    status: "incomplete",
    button: "locked",
  },
  {
    id: 2,
    name: "Lesson 2",
    description: "Learn about Java data types",
    url: "lesson2",
    status: "incomplete",
    button: "locked",
  },
  {
    id: 3,
    name: "Lesson 3",
    description: "Learn about Java data types",
    url: "lesson3",
    status: "incomplete",
    button: "locked",
  },
];
function JavaLessons() {
  const userId = Cookies.get("userId");
  const [totalJavaStatus, setTotalJavaStatus] = useState(null);
  const [user, setUser] = useState(null); // set up a user state to hold the data

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/${userId}`
        );
        setTotalJavaStatus(response.data.totalJavaStatus);
        setUser(response.data); // set the user state to the data
      } catch (error) {
        console.error(error);
      }
    };
    if (userId !== undefined) getUser();
  }, [userId]);

  if (!user) {
    return <div>Please log in first</div>;
  }
  //if the user has completed all the lessons, display a message
  if (user.totalJavaStatus > data.length) {
    return (
      <div>
        You have completed all the lessons (dev note to go back to seeing all
        the lessons to to /courses/java/lesson1 and complete the quiz
      </div>
    );
  }
  //loop through the data array
  for (let i = 0; i < totalJavaStatus; i++) {
    data[i].status = "complete";
    data[i].button = "Get Started";
  }
  const handleButton = (args) => {
    if (args.status === "complete") {
      window.location.href = `java/${args.url}`;
    } else {
      alert("Please complete the previous lesson first");
    }
  };

  //if the user has not completed a previous lesson, disable the button

  return (
    <>
      <div class="container">
        <JavaProgress />
      </div>
      <div>
        {data.map((lesson) => {
          return (
            <div key={lesson.id} className="lessons">
              <h2 className={lesson.status}>{lesson.name}</h2>
              <h3 className="description-style">{lesson.description}</h3>
              <button
                className={lesson.status}
                onClick={() => handleButton(lesson)}
              >
                {lesson.button}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default JavaLessons;
