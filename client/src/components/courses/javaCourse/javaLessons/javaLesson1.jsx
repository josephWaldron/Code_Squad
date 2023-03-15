import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { CodeBlock, a11yDark } from "react-code-blocks";
import Questions from "../../questions";
import "../../lessons.css";


// Liam Lidlow
//Alexis
const questions = [
  //update this
  {
    lessonId: 1, //lesson number for changing the status
    id: 1,
    codeBlock: "",
    language: "java",
    question: "Which of the following values can a boolean value contain?",
    answers: [
      { id: 0, text: "Only True", isCorrect: false },
      { id: 1, text: "Only False", isCorrect: false },
      { id: 2, text: "Both True and False", isCorrect: true },
      { id: 3, text: "Any integer value", isCorrect: false },
    ],
  },
  {
    //question with a code block in question
    lessonId: 1, //lesson number
    id: 2,
    codeBlock: 'char x = "a";', //code block to display for the question
    language: "java", //language of the code block
    question: "Which part of the code is incorrect?",
    answers: [
      { id: 0, text: "char needs to be in single quotes", isCorrect: true },
      { id: 1, text: "Missing semicolon", isCorrect: false },
      { id: 2, text: "None of the above", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 3,
    codeBlock: "ANSWER",
    language: "java",
    question: "How to initialize an integer variable?",
    answers: [
      { id: 0, text: "int x = 10;", isCorrect: true },
      { id: 1, text: "int x = 10.5;", isCorrect: false },
      { id: 2, text: "int x = 10.5f;", isCorrect: false },
      { id: 3, text: "int x = 10.5d;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 4,
    codeBlock: "",
    language: "java",
    question: "This data type allows for the storage of characters or letters ",
    answers: [
      { id: 0, text: "int x = 10;", isCorrect: true },
      { id: 1, text: "int x = 10.5;", isCorrect: false },
      { id: 2, text: "int x = 10.5f;", isCorrect: false },
      { id: 3, text: "int x = 10.5d;", isCorrect: false },
    ],
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
            {/* dont do copy blocks here */}
            <CodeBlock
              showLineNumbers={false}
              text="boolean x = true;"
              language="java"
              theme={a11yDark}
            />
            <li>Byte- ranges from -127 to 128</li>
            <CodeBlock
              showLineNumbers={false}
              text="byte x = 100;"
              language="java"
              theme={a11yDark}
            />
            <li>Char- unicode character</li>
            <CodeBlock
              showLineNumbers={false}
              text="char x = 'a';"
              language="java"
              theme={a11yDark}
            />
            <li>Short- 2 times smaller than an integer.</li>
            <CodeBlock
              showLineNumbers={false}
              text="short x = 1000;"
              language="java"
              theme={a11yDark}
            />
            <li>
              Int- Generally used as a default data type for integral values.
              32-bit integer.
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="int x = 10000;"
              language="java"
              theme={a11yDark}
            />
            <li>
              Long- Generally used when you need a range of values more than
              those provided by int. 64-bit integer.
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="long x = 100000;"
              language="java"
              theme={a11yDark}
            />
            <li>
              Float- Typically used to store precise values, such as currency. A
              number with a decimal place. (7 decimal precision)
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="float x = 10.5f;"
              language="java"
              theme={a11yDark}
            />
            <li>
              Double- used to store decimal values with double precision. (15
              decimal precision)
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="double x = 10.5;"
              language="java"
              theme={a11yDark}
            />
          </ul>
          <h2>Non-primitive data types</h2>
          <ul>
            <li>String- used to store a sequence of characters</li>
            <CodeBlock
              showLineNumbers={false}
              text='String x = "Hello World";'
              language="java"
              theme={a11yDark}
            />
            <li>Array- used to store collections of data</li>
            <CodeBlock
              showLineNumbers={false}
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
            <Questions questionArray={questions} />
          </div>
        </div>
      </div>
    </>
  );
}

export default JavaLesson1;
