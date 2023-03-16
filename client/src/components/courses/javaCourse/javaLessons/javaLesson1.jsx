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
      { id: 0, text: "Float;", isCorrect: false },
      { id: 1, text: "Boolean;", isCorrect: false },
      { id: 2, text: "Char;", isCorrect: true },
      { id: 3, text: "String;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 5,
    codeBlock: "",
    language: "java",
    question: "This data type is a 32-bit integer that is typically used as a default value for integral values. ",
    answers: [
      { id: 0, text: "Double;", isCorrect: false },
      { id: 1, text: "Float;", isCorrect: false },
      { id: 2, text: "Int;", isCorrect: true },
      { id: 3, text: "Short;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 6,
    codeBlock: "",
    language: "java",
    question: "This data type is used to contain integer numbers that are too large to fit in the Int data type. ",
    answers: [
      { id: 0, text: "Double;", isCorrect: false },
      { id: 1, text: "Float;", isCorrect: false },
      { id: 2, text: "Long;", isCorrect: true },
      { id: 3, text: "Byte;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 7,
    codeBlock: "",
    language: "java",
    question: "Which of the following data types contains 4 bytes and can be used to store currency values?",
    answers: [
      { id: 0, text: "Double;", isCorrect: true },
      { id: 1, text: "Float;", isCorrect: false },
      { id: 2, text: "Int;", isCorrect: false },
      { id: 3, text: "Short;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 8,
    codeBlock: "",
    language: "java",
    question: "This data type can store up to 15 decimal places and is typically used for fractional numbers.",
    answers: [
      { id: 0, text: "Double;", isCorrect: false },
      { id: 1, text: "Float;", isCorrect: false },
      { id: 2, text: "Long;", isCorrect: true },
      { id: 3, text: "Boolean;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 9,
    codeBlock: "",
    language: "java",
    question: "True or False : A string data type is a non-primitive data type.",
    answers: [
      { id: 0, text: "True;", isCorrect: true },
      { id: 1, text: "False;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 10,
    codeBlock: "",
    language: "java",
    question: "Which of the following data types can be used to store text? ",
    answers: [
      { id: 0, text: "Array;", isCorrect: false },
      { id: 1, text: "String;", isCorrect: true },
      { id: 2, text: "Boolean;", isCorrect: false },
      { id: 3, text: "Float;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 11,
    codeBlock: "",
    language: "java",
    question: "What is a string data type in Java? ",
    answers: [
      { id: 0, text: "Generally used as a default data type for integral values.;", isCorrect: false },
      { id: 1, text: "Used to store collections of data, such as lists or tables.;", isCorrect: false },
      { id: 2, text: "Unicode character;", isCorrect: false },
      { id: 3, text: "Used to represent a sequence of characters;", isCorrect: true },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 12,
    codeBlock: "",
    language: "java",
    question: "What is an array data type in Java? ",
    answers: [
      { id: 0, text: "Used to represent true or false values.;", isCorrect: false },
      { id: 1, text: "Used to store collections of data, such as lists or tables.;", isCorrect: true },
      { id: 2, text: "Used to store a single character.;", isCorrect: false },
      { id: 3, text: "Used to represent a sequence of characters;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 13,
    codeBlock: "",
    language: "java",
    question: "How is a double data type different from a Float data type? ",
    answers: [
      { id: 0, text: "Double data type stores up to 16 decimal places while float stores up to 7.;", isCorrect: false },
      { id: 1, text: "There is no difference.;", isCorrect: false },
      { id: 2, text: "Float stores decimal values with single precision, while double stores values with double precision.;", isCorrect: false },
      { id: 3, text: "A and C.;", isCorrect: true },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 14,
    codeBlock: "",
    language: "java",
    question: "Which of the following are primitive data types in Java? (more than one answer)? ",
    answers: [
      { id: 0, text: "String.;", isCorrect: false },
      { id: 1, text: "Int.;", isCorrect: true },
      { id: 2, text: "Array;", isCorrect: false },
      { id: 3, text: "Float;", isCorrect: true },
      { id: 4, text: "Double;", isCorrect: true },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 1, //lesson number
    id: 15,
    codeBlock: "",
    language: "java",
    question: "Which of the following are non-primitive data types in Java? (more than one answer)? ",
    answers: [
      { id: 0, text: "String.;", isCorrect: true },
      { id: 1, text: "Int.;", isCorrect: false },
      { id: 2, text: "Array;", isCorrect: true },
      { id: 3, text: "Float;", isCorrect: false },
      { id: 4, text: "Long;", isCorrect: false },
      { id: 4, text: "Char;", isCorrect: false },
    ],
  },
];
//Joseph was here
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
