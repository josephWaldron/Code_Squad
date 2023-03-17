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
    lessonId: 3, //lesson number for changing the status
    id: 1,
    codeBlock: "",
    language: "java",
    question: "What is an array in programming?",
    answers: [
      { id: 0, text: "A group of variables.", isCorrect: false },
      { id: 1, text: "A group of data of the same type.", isCorrect: true },
      { id: 2, text: "A group of functions.", isCorrect: false },
      { id: 3, text: "A group of objects.", isCorrect: false },
    ],
  },
  {
    lessonId: 3, //lesson number for changing the status
    id: 2,
    codeBlock: "",
    language: "java",
    question: "Which of the following is the correct way to declare a 1D integer array in Java?",
    answers: [
      { id: 0, text: "int[] array = new int[5];.", isCorrect: true },
      { id: 1, text: "int array [] = new int[5];.", isCorrect: false },
      { id: 2, text: "int array = new int[5];.", isCorrect: false },
      { id: 3, text: "array int[] = new int[5];.", isCorrect: false },
    ],
  },
  {
    lessonId: 3, //lesson number for changing the status
    id: 3,
    codeBlock: "",
    language: "java",
    question: "What is the index of the first element in the first row of a 2D array in Java?;",
    answers: [
      { id: 0, text: "0;.", isCorrect: true },
      { id: 1, text: "1;.", isCorrect: false },
      { id: 2, text: "-1;.", isCorrect: false },
      { id: 3, text: "None of the above;.", isCorrect: false },
    ],
  },
  {
    lessonId: 3, //lesson number for changing the status
    id: 4,
    codeBlock: "",
    language: "java",
    question: "Which of the following is the correct way to declare a 2D array in Java?;",
    answers: [
      { id: 0, text: "int[][] array = new int[5][5];.", isCorrect: true },
      { id: 1, text: "int[] array = new int[5, 5];.", isCorrect: false },
      { id: 2, text: "int[][] array = new int(5)(5);.", isCorrect: false },
      { id: 3, text: "int array[][] = new int[5][5];.", isCorrect: false },
    ],
  },
  {
    lessonId: 3, //lesson number for changing the status
    id: 5,
    codeBlock: "",
    language: "java",
    question: "Which of the following is the correct way to loop through a 1D array in Java?;",
    answers: [
      { id: 0, text: "for (int i = 0; i < array.size(); i++);.", isCorrect: false },
      { id: 1, text: "for (int i = 0; i < array.length; i++);.", isCorrect: true },
      { id: 2, text: "for (int i = 1; i < array.length(); i++);.", isCorrect: false },
      { id: 3, text: "for (int i = 1; i <= array.length; i++);.", isCorrect: false },
    ],
  },
  {
    lessonId: 3, //lesson number for changing the status
    id: 6,
    codeBlock: "",
    language: "java",
    question: "Which of the following is the correct way to loop through a 2D array in Java?;",
    answers: [
      { id: 0, text: "for (int i = 0; i < array.size(); i++);.", isCorrect: false },
      { id: 1, text: "for (int i = 0; i < array.length; i++);.", isCorrect: false },
      { id: 2, text: "for (int i = 0; i < array.length; i++) { for (int j = 0; j < array[i].length; j++) };.", isCorrect: true },
      { id: 3, text: "for (int i = 1; i <= array.length; i++);.", isCorrect: false },
    ],
  },
  {
    // Fix this one with the code question
    lessonId: 3, //lesson number for changing the status
    id: 6,
    codeBlock: "",
    language: "java",
    question: "What is the output of the following code?;",
    answers: [
      { id: 0, text: "1;.", isCorrect: false },
      { id: 1, text: "2;.", isCorrect: false },
      { id: 2, text: "3;.", isCorrect: false },
      { id: 3, text: "6;.", isCorrect: true },
    ],
  },
  {
    // Fix this one with the code question
    lessonId: 3, //lesson number for changing the status
    id: 7,
    codeBlock: "",
    language: "java",
    question: "What is the output of the following code?;",
    answers: [
      { id: 0, text: "1;.", isCorrect: false },
      { id: 1, text: "2;.", isCorrect: false },
      { id: 2, text: "3;.", isCorrect: false },
      { id: 3, text: "4;.", isCorrect: true },
    ],
  },
  {
    // Fix this one with the code question
    lessonId: 3, //lesson number for changing the status
    id: 8,
    codeBlock: "",
    language: "java",
    question: "What is the output of the following code?;",
    answers: [
      { id: 0, text: "1;.", isCorrect: false },
      { id: 1, text: "5;.", isCorrect: true },
      { id: 2, text: "6;.", isCorrect: false },
      { id: 3, text: "None of the above;.", isCorrect: false },
    ],
  },
];
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
  
  export default JavaLesson3;