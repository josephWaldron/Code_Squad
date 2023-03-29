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
    lessonId: 4, //lesson number for changing the status
    id: 1,
    codeBlock: "",
    language: "java",
    question: "True or False: Parenthesis () are the syntax used to store the condition in which the if-statement will be run off of.",
    answers: [
      { id: 0, text: "True.", isCorrect: true },
      { id: 1, text: "False.", isCorrect: false },
    ],
  },
  {
    lessonId: 4, //lesson number for changing the status
    id: 2,
    codeBlock: "",
    language: "java",
    question: "Which of the following operators is used to hold the block of code to be executed if the condition is true?",
    answers: [
      { id: 0, text: "{}", isCorrect: true },
      { id: 1, text: "[]", isCorrect: false },
      { id: 2, text: "()", isCorrect: false },
      { id: 3, text: "//", isCorrect: false },
    ],
  },
  {
    lessonId: 4, //lesson number for changing the status
    id: 3,
    codeBlock: "",
    language: "java",
    question: "True or False : Else conditions can be used to specify a block of code to be executed if a condition is false.",
    answers: [
      { id: 0, text: "True", isCorrect: true },
      { id: 1, text: "False", isCorrect: false },
    ],
  },
  {
    lessonId: 4, //lesson number for changing the status
    id: 4,
    codeBlock: "",
    language: "java",
    question: "A user can check multiple conditions using the __ statement.",
    answers: [
      { id: 0, text: "Else", isCorrect: false },
      { id: 1, text: "Else-if", isCorrect: true },
      { id: 2, text: "If", isCorrect: false },
      { id: 3, text: "Print", isCorrect: false },
    ],
  },
  {
    lessonId: 4, //lesson number for changing the status
    id: 5,
    codeBlock: "",
    language: "java",
    question: "There can be multiple __ statements in a single conditional statement.",
    answers: [
      { id: 0, text: "Else-if", isCorrect: true },
      { id: 1, text: "Else", isCorrect: false },
      { id: 2, text: "If", isCorrect: false },
      { id: 3, text: "Print", isCorrect: false },
    ],
  },
  {
    lessonId: 4, //lesson number for changing the status
    id: 6,
    codeBlock: "",
    language: "java",
    question: "What type of expressions are used to test an if statement?",
    answers: [
      { id: 0, text: "For loop", isCorrect: false },
      { id: 1, text: "Else", isCorrect: false },
      { id: 2, text: "If", isCorrect: false },
      { id: 3, text: "Boolean", isCorrect: true },
    ],
  },
  {
    lessonId: 4, //lesson number for changing the status
    id: 7,
    codeBlock: "",
    language: "java",
    question: "What is the maximum number of else if statements that can be associated with a single if statement?",
    answers: [
      { id: 0, text: "1", isCorrect: false },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "10", isCorrect: false },
      { id: 3, text: "There is no maximum limit", isCorrect: true },
    ],
  },
  {
    lessonId: 4, //lesson number for changing the status
    id: 8,
    codeBlock: "",
    language: "java",
    question: "What is the purpose of an else if statement in an if-else statement?",
    answers: [
      { id: 0, text: "To repeat a block of code multipe times", isCorrect: false },
      { id: 1, text: "To exeucte a block of code only if a certain condition is true", isCorrect: false },
      { id: 2, text: "To execute a block of code only if the condition in the if statement is false", isCorrect: false },
      { id: 3, text: "To check additional conditions if the condition in the corresponding if statement is false", isCorrect: true },
    ],
  },
  {
    lessonId: 4, //lesson number for changing the status
    id: 9,
    codeBlock: "ANSWER",
    language: "java",
    question: "What is the syntax of an if statement?",
    answers: [
      { id: 0, text: "if (condition) {code block}", isCorrect: true },
      { id: 1, text: "while (condition) {code block}", isCorrect: false },
      { id: 2, text: "for (condition) {code block}", isCorrect: false },
      { id: 3, text: "switch (condition) {code block}", isCorrect: false },
    ],
  },
  {
    lessonId: 4, //lesson number for changing the status
    id: 10,
    codeBlock: "",
    language: "java",
    question: "What is the purpose of an if-else statement in programming?",
    answers: [
      { id: 0, text: "To repeat a block of code multiple times", isCorrect: false },
      { id: 1, text: "To execute a block of code only if a certain condition is true", isCorrect: true },
      { id: 2, text: "To declare a variable in the program", isCorrect: false },
      { id: 3, text: "To print output to the console ", isCorrect: false },
    ],
  },
];
function JavaLesson4() {
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
          <h2>The If & Else Statements</h2>
          <p>
          The if statement is a rule that is performed when the condition is satisfied or true. 
          It is a statement used to specify a block of java code to be executed if a condition is true.
          Else statements are used to specify a block of code to be executed if the condition is false. 
          The else if statement is used to specify a new condition if the first condition is false.
          </p>
          <h2>If & Else statements can be used for:</h2>
          <ul>
            <li>Boolean logic.</li>
            <li>Comparison operators.</li>
            <li>Loops (For, while / switches).</li>
            <li>Methods , void , returning.</li>
          </ul>
          <h1>Examples of If & Else statements</h1>
          <h2>Keywords</h2>
          <ul>
            <li>If Statements
</li>
            {/* dont do copy blocks here */}
            <CodeBlock
              showLineNumbers={false}
              text="int value = 10; \n if (value >0) { \n code to be executed \n };"
              language="java"
              theme={a11yDark}
            />
            <li>Else Statements
</li>
            <CodeBlock
              showLineNumbers={false}
              text="int value = 10; \n if (value >0) { \n code to be executed \n } \n else {code in else block to be executed};"
              language="java"
              theme={a11yDark}
            />
            <li>Else-if Statements
</li>
            <CodeBlock
              showLineNumbers={false}
              text="int value = 10; \n if (value < 0) { \n code to be executed \n } \n else if (value > 10) {code in else block to be executed} else {final condition};"
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

export default JavaLesson4;
