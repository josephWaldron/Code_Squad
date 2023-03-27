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
    question:
      "Which of the following is the correct way to declare a 1D integer array in Java?",
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
    question:
      "What is the index of the first element in the first row of a 2D array in Java?;",
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
    question:
      "Which of the following is the correct way to declare a 2D array in Java?;",
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
    question:
      "Which of the following is the correct way to loop through a 1D array in Java?;",
    answers: [
      { id: 0, text: "for (int i = 0; i < array.size(); i++);.", isCorrect: false },
      {id: 1, text: "for (int i = 0; i < array.length; i++);.",isCorrect: true},
      {id: 2, text: "for (int i = 1; i < array.length(); i++);.", isCorrect: false},
      {id: 3,text: "for (int i = 1; i <= array.length; i++);.",isCorrect: false},
    ],
  },
  {
    lessonId: 3, //lesson number for changing the status
    id: 6,
    codeBlock: "",
    language: "java",
    question:
      "Which of the following is the correct way to loop through a 2D array in Java?;",
    answers: [
      {id: 0,text: "for (int i = 0; i < array.size(); i++);.",isCorrect: false},
      {id: 1, text: "for (int i = 0; i < array.length; i++);.",isCorrect: false},
      {id: 2,text: "for (int i = 0; i < array.length; i++) { for (int j = 0; j < array[i].length; j++) };.",isCorrect: true},
      {id: 3,text: "for (int i = 1; i <= array.length; i++);.",isCorrect: false},
    ],
  },
  {
    // Fix this one with the code question
    lessonId: 3, //lesson number for changing the status
    id: 6,
    codeBlock: "int[][] array = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}} \nSystem.out.println(array[1][2])",
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
    codeBlock: "int[] array = {1, 2, 3, 4, 5}; \nSystem.out.println(array[3]);",
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
    codeBlock: "int[] array = {1, 2, 3, 4, 5}; \n System.out.println(array.length);",
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
function JavaLesson3() {
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
          <h2>Explaning Arrays</h2>
          <p>
          In Java, arrays are objects that store a fixed-size sequential
          collection of elements of the same data type. They can be used to store multiple values in a single
          variable , rather than declaring seperate variables for each value.
          </p>
          <h2>Arrays can be used for:</h2>
          <ul>
            <li>Storing data elements of the same data type.</li>
            <li>Maintaining multiple variable names using a single name.</li>
            <li>Sorting data elements.</li>
            <li>Performing matrix operations.</li>
            <li>CPU scheduling.</li>
          </ul>
          <h1>Examples of Arrays</h1>
          <h2>There are 2 main types of arrays used in Java:</h2>
          <ul>
            <li>1D Arrays -  used to store a sequence of values in a single dimension. 
Here's an example of how to create a 1D array of integers in Java:
</li>
            {/* dont do copy blocks here */}
            <CodeBlock
              showLineNumbers={false}
              text="int[]myArray = new int[5];"
              language="java"
              theme={a11yDark}
            />
            <li>2D arrays are used to store data in a two-dimensional grid format. 
              They are also called "matrices". Here's an example of how to create a 2D array of integers in Java:
</li>
            <CodeBlock
              showLineNumbers={false}
              text="int[][] myMatrix = new int[3][4];"
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
