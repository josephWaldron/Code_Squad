import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { CopyBlock, a11yDark } from "react-code-blocks";
import Questions from "../../questions";
import "../../lessons.css";

const questions = [
  //update this
  {
    lesson: 1,
    name: "Java basic background",
    id: 1,
    codeBlock: "",
    language: "java",
    question: "Which of the following values can a boolean value contain?",
    answers: [
      "Only True",
      "Only False",
      "Both True and False",
      "Any integer value",
    ],
    correct: 2, //correct answer is the index of the correct answer in the answers array
    //THIS ONE CAN NOT USE A CODE BLOCK
  },
  {
    //question with a code block
    lesson: 1,
    name: "Java basic background",
    id: 2,
    codeBlock: 'char x = "a";', //code block to display for the question
    language: "java", //language of the code block
    question: "Which part of the code is incorrect?",
    answers: [
      "char needs to be in single quotes",
      "Missing semicolon",
      "None of the above",
    ],
    correct: 0, //correct answer is the index of the correct answer in the answers array
  },
  {
    //question with code blocks for answers
    lesson: 1,
    name: "Java basic background",
    id: 3,
    codeBlock: "ANSWER",
    language: "java",
    question: "How to initialize an integer variable?",
    answers: ["int x = s;", "int x = 10;", "int x = 10.5;", "int x = 10.5f;"],
    correct: 1,
  },
];

//dont touch from here
function JavaLesson1() {
  const userId = Cookies.get("userId");
  const [user, setUser] = useState(null); // set up a user state to hold the data

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/${userId}`
        );
        setUser(response.data); // set the user state to the data
      } catch (error) {
        console.error(error);
      }
    };
    if (userId !== undefined) getUser();
  }, [userId]);

  //loop though all of the questions and display them with the Questions component in the questions class

  if (!user) {
    return <div>Please log in first</div>;
  }

  //if the user has not completed a previous lesson, disable the button

  return (
    <>
      <div className="lesson-container">
        <div className="left-container">
          <h2>Who created Java?</h2>
          <p>
            Java was created by James Gosling in 1995. What is java? Java is a
            programming language and a platform.
          </p>
          <h2>What is Java used for?</h2>
          <ul>
            <li>Desktop application</li>
            <li>Mobile Games</li>
            <li>Web application</li>
            <li>Robotics</li>
            <li>Enterprise application</li>
          </ul>
          <h1>Java Data Types</h1>
          <h2>There are 8 primitive data types:</h2>
          <ul>
            <li>Boolean- used to store only true and false values</li>
            <CopyBlock
              text="boolean x = true;
"
              language="java"
              theme={a11yDark}
            />
            <li>Byte- ranges from -127 to 128</li>
            <CopyBlock text="byte x = 100;" language="java" theme={a11yDark} />
            <li>Char- unicode character</li>
            <CopyBlock text="char x = 'a';" language="java" theme={a11yDark} />
            <li>Short- 2 times smaller than an integer.</li>
            <CopyBlock
              text="short x = 1000;"
              language="java"
              theme={a11yDark}
            />
            <li>
              Int- Generally used as a default data type for integral values.
              32-bit integer.
            </li>
            <CopyBlock text="int x = 10000;" language="java" theme={a11yDark} />
            <li>
              Long- Generally used when you need a range of values more than
              those provided by int. 64-bit integer.
            </li>
            <CopyBlock
              text="long x = 100000;"
              language="java"
              theme={a11yDark}
            />
            <li>
              Float- Typically used to store precise values, such as currency. A
              number with a decimal place. (7 decimal precision)
            </li>
            <CopyBlock
              text="float x = 10.5f;"
              language="java"
              theme={a11yDark}
            />
            <li>
              Double- used to store decimal values with double precision. (15
              decimal precision)
            </li>
            <CopyBlock
              text="double x = 10.5;"
              language="java"
              theme={a11yDark}
            />
          </ul>
          <h2>Non-primitive data types</h2>
          <ul>
            <li>String- used to store a sequence of characters</li>
            <CopyBlock
              text='String x = "Hello World";'
              language="java"
              theme={a11yDark}
            />
            <li>Array- used to store collections of data</li>
            <CopyBlock
              text="int[] x = {1,2,3};"
              language="java"
              theme={a11yDark}
            />
          </ul>
        </div>
        <div className="questions-container">
          <h1>Questions</h1>
          <div id="questions">
            {/* display the question one at a time and check if the answer is correct */}
            <Questions question={questions} />
          </div>
        </div>
      </div>
    </>
  );
}

export default JavaLesson1;
