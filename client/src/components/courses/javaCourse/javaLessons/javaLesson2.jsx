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
  //Main Method and Hello World
  {
    lessonId: 2, //lesson number for changing the status
    id: 1,
    codeBlock: "",
    language: "java",
    question: "What is the correct signature for the main method in Java?",
    answers: [
      { id: 0, text: "public void main(String[] args", isCorrect: false },
      { id: 1, text: "static void main(String args)", isCorrect: false },
      { id: 2, text: "public static void main(String[] args)", isCorrect: true },
      { id: 3, text: "private static void main(String args)", isCorrect: false },
    ],
  },
  {
    //question with a code block in question
    lessonId: 2, //lesson number
    id: 2,
    codeBlock: "",
    language: "java", //language of the code block
    question: "What is the purpose of the main method in Java",
    answers: [
      { id: 0, text: "To define the starting point of the execution of a Java program", isCorrect: true },
      { id: 1, text: "To declare variables", isCorrect: false },
      { id: 2, text: "To perform mathematical operations", isCorrect: false },
      { id: 3, text: "To print text to the console", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
    id: 3,
    codeBlock: "",
    language: "java",
    question: "This keyword from the main method means that it can be called from anywhere",
    answers: [
      { id: 0, text: "public", isCorrect: true },
      { id: 1, text: "static", isCorrect: false },
      { id: 2, text: "void", isCorrect: false },
      { id: 3, text: "args", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
    id: 4,
    codeBlock: "",
    language: "java",
    question: "This keyword from the main method means that it belongs to the class",
    answers: [
      { id: 0, text: "void", isCorrect: false },
      { id: 1, text: "args;", isCorrect: false },
      { id: 2, text: "public", isCorrect: false },
      { id: 3, text: "static", isCorrect: true },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
    id: 5,
    codeBlock: "",
    language: "java",
    question:
      "This keyword from the main method means that it does not return a value ",
    answers: [
      { id: 0, text: "static", isCorrect: false },
      { id: 1, text: "public", isCorrect: false },
      { id: 2, text: "void", isCorrect: true },
      { id: 3, text: "args", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
    id: 6,
    codeBlock: "",
    language: "java",
    question:
      "This keyword from the method paramter is an array of strings that contains any command-line arguments passed to the program ",
    answers: [
      { id: 0, text: "public", isCorrect: false },
      { id: 1, text: "static", isCorrect: false },
      { id: 2, text: "args", isCorrect: true },
      { id: 3, text: "void", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
    id: 7,
    codeBlock: "",
    language: "java",
    question:
      "Which of the following data types contains 4 bytes and can be used to store currency values?",
    answers: [
      { id: 0, text: "Double;", isCorrect: true },
      { id: 1, text: "Float;", isCorrect: false },
      { id: 2, text: "Int;", isCorrect: false },
      { id: 3, text: "Short;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
    id: 8,
    codeBlock: "",
    language: "java",
    question:
      "This data type can store up to 15 decimal places and is typically used for fractional numbers.",
    answers: [
      { id: 0, text: "Double;", isCorrect: false },
      { id: 1, text: "Float;", isCorrect: false },
      { id: 2, text: "Long;", isCorrect: true },
      { id: 3, text: "Boolean;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
    id: 9,
    codeBlock: "",
    language: "java",
    question:
      "True or False : A string data type is a non-primitive data type.",
    answers: [
      { id: 0, text: "True;", isCorrect: true },
      { id: 1, text: "False;", isCorrect: false },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
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
    lessonId: 2, //lesson number
    id: 11,
    codeBlock: "",
    language: "java",
    question: "What is a string data type in Java? ",
    answers: [
      {
        id: 0,
        text: "Generally used as a default data type for integral values.;",
        isCorrect: false,
      },
      {
        id: 1,
        text: "Used to store collections of data, such as lists or tables.;",
        isCorrect: false,
      },
      { id: 2, text: "Unicode character;", isCorrect: false },
      {
        id: 3,
        text: "Used to represent a sequence of characters;",
        isCorrect: true,
      },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
    id: 12,
    codeBlock: "",
    language: "java",
    question: "What is an array data type in Java? ",
    answers: [
      {
        id: 0,
        text: "Used to represent true or false values.;",
        isCorrect: false,
      },
      {
        id: 1,
        text: "Used to store collections of data, such as lists or tables.;",
        isCorrect: true,
      },
      { id: 2, text: "Used to store a single character.;", isCorrect: false },
      {
        id: 3,
        text: "Used to represent a sequence of characters;",
        isCorrect: false,
      },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
    id: 13,
    codeBlock: "",
    language: "java",
    question: "How is a double data type different from a Float data type? ",
    answers: [
      {
        id: 0,
        text: "Double data type stores up to 16 decimal places while float stores up to 7.;",
        isCorrect: false,
      },
      { id: 1, text: "There is no difference.;", isCorrect: false },
      {
        id: 2,
        text: "Float stores decimal values with single precision, while double stores values with double precision.;",
        isCorrect: false,
      },
      { id: 3, text: "A and C.;", isCorrect: true },
    ],
  },
  {
    //question with code blocks for answers
    lessonId: 2, //lesson number
    id: 14,
    codeBlock: "",
    language: "java",
    question:
      "Which of the following are primitive data types in Java? (more than one answer)? ",
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
    lessonId: 2, //lesson number
    id: 15,
    codeBlock: "",
    language: "java",
    question:
      "Which of the following are non-primitive data types in Java? (more than one answer)? ",
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
//Make sure to change this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function JavaLesson2() {
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

  //Change this as well!!!!!
  return (
    <>
      <div className="lesson-container">
        <div className="left-container">
          <h2>The Main Method</h2>
          <p>
          The main method is the entry point of a program. 
          It is the method that is executed when the program is run. 
          Main method must be declared as “public static void main” and it must accept a single argument of the type “String[]”. 
          Once the main method is called, the code inside the method is executed, this is where you can put the code you want to run. 
          For example, you can use System.out.println() to print a message to the console or call other methods you have created.

        
          </p>
          <h2>Hello World</h2>
          <p>A Hello World program is an easy first coding assignment which is a program that outputs “Hello World”. </p>

          <h1>Keywords and creating Hello world</h1>
          <h2>Keywords</h2>
          <ul>
            <li>static- this keyword means that the method belongs to the class</li>
            {/* dont do copy blocks here */}
            <CodeBlock
              showLineNumbers={false}
              text="static"
              language="java"
              theme={a11yDark}
            />
            <li>void- this keyword means that the method does not return a value</li>
            <CodeBlock
              showLineNumbers={false}
              text="void"
              language="java"
              theme={a11yDark}
            />
            <li>args- this keyword is a paramter with an array of strings that contains any command-line arguments passed to the program</li>
            <CodeBlock
              showLineNumbers={false}
              text="args"
              language="java"
              theme={a11yDark}
            />
            <li>public- this keyword means that it can be called from anywhere</li>
            <CodeBlock
              showLineNumbers={false}
              text="public"
              language="java"
              theme={a11yDark}
            />
            
            <h2>Creating a Hello world</h2>
            <li>
              Create a class that contains a main method
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="class HelloWorld {
                public static void main(String args[]){"
              language="java"
              theme={a11yDark}
            />
            <li>
              A System.out.println statement is used to print the string "Hello World"
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="System.out.println('Hello World');}}"
              language="java"
              theme={a11yDark}
            />
            <li>
              Output:
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="Hello World"
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
//Make sure to change this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export default JavaLesson2;
