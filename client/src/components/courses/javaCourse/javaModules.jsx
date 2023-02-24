import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./javaModules.css";

const data = [
  {
    id: 1,
    name: "Lesson 1",
    description: "Learn the basics of Java",
    url: "lesson1",
    status: "incomplete",
  },
  {
    id: 2,
    name: "Lesson 2",
    description: "Learn about Java data types",
    url: "lesson2",
    status: "incomplete",
  },
];
function JavaLessons() {
  const [user, setUser] = useState(null);
  const userId = Cookies.get("userId");
  const justLoggedIn = Cookies.get("login");

  //get user from server
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [userId]);

  if (!user) {
    return <div>Please log in first</div>;
  }

  //check the users progress for java
  //if the user has completed a lesson, change the status to complete
  //if the user has not completed a lesson, change the status to incomplete
  //if the user has not completed a previous lesson, disable the button

  return (
    <div>
      {data.map((lesson) => {
        return (
          <div key={lesson.id} className="lessons">
            <h2 className="text-style-box">{lesson.name}</h2>
            <h3 className="description-style">{lesson.description}</h3>
            <button
              onClick={() => (window.location.href = `java/${lesson.url}`)}
            >
              Get Started
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default JavaLessons;
