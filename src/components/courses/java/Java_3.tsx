import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1,
    codeBlock: "NONE",
    type: 0,
    question: "What is an array in programming?",
    answers: [
      { id: 0, text: "A group of variables.", correct: false },
      { id: 1, text: "A group of data of the same type.", correct: true },
      { id: 2, text: "A group of functions.", correct: false },
      { id: 3, text: "A group of objects.", correct: false },
    ],
  },
  {
    id: 2,
    codeBlock: "NONE",
    type: 0,
    question:
      "Which of the following is the correct way to declare a 1D integer array in Java?",
    answers: [
      { id: 0, text: "int[] array = new int[5];.", correct: true },
      { id: 1, text: "int array [] = new int[5];.", correct: false },
      { id: 2, text: "int array = new int[5];.", correct: false },
      { id: 3, text: "array int[] = new int[5];.", correct: false },
    ],
  },
  {
    id: 3,
    codeBlock: "NONE",
    type: 0,
    question:
      "What is the index of the first element in the first row of a 2D array in Java?;",
    answers: [
      { id: 0, text: "0;.", correct: true },
      { id: 1, text: "1;.", correct: false },
      { id: 2, text: "-1;.", correct: false },
      { id: 3, text: "None of the above;.", correct: false },
    ],
  },
  {
    id: 4,
    codeBlock: "NONE",
    type: 0,
    question:
      "Which of the following is the correct way to declare a 2D array in Java?;",
    answers: [
      { id: 0, text: "int[][] array = new int[5][5];.", correct: true },
      { id: 1, text: "int[] array = new int[5, 5];.", correct: false },
      { id: 2, text: "int[][] array = new int(5)(5);.", correct: false },
      { id: 3, text: "int array[][] = new int[5][5];.", correct: false },
    ],
  },
  {
    id: 5,
    codeBlock: "NONE",
    type: 0,
    question:
      "Which of the following is the correct way to loop through a 1D array in Java?;",
    answers: [
      {
        id: 0,
        text: "for (int i = 0; i < array.size(); i++);.",
        correct: false,
      },
      {
        id: 1,
        text: "for (int i = 0; i < array.length; i++);.",
        correct: true,
      },
      {
        id: 2,
        text: "for (int i = 1; i < array.length(); i++);.",
        correct: false,
      },
      {
        id: 3,
        text: "for (int i = 1; i <= array.length; i++);.",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    codeBlock: "NONE",
    type: 0,
    question:
      "Which of the following is the correct way to loop through a 2D array in Java?;",
    answers: [
      {
        id: 0,
        text: "for (int i = 0; i < array.size(); i++);.",
        correct: false,
      },
      {
        id: 1,
        text: "for (int i = 0; i < array.length; i++);.",
        correct: false,
      },
      {
        id: 2,
        text: "for (int i = 0; i < array.length; i++) { for (int j = 0; j < array[i].length; j++) };.",
        correct: true,
      },
      {
        id: 3,
        text: "for (int i = 1; i <= array.length; i++);.",
        correct: false,
      },
    ],
  },
  {
    // Fix this one with the code question
    id: 6,
    codeBlock:
      "int[][] array = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}} \nSystem.out.println(array[1][2])",
    type: 0,
    question: "What is the output of the following code?;",
    answers: [
      { id: 0, text: "1;.", correct: false },
      { id: 1, text: "2;.", correct: false },
      { id: 2, text: "3;.", correct: false },
      { id: 3, text: "6;.", correct: true },
    ],
  },
  {
    // Fix this one with the code question
    id: 7,
    codeBlock: "int[] array = {1, 2, 3, 4, 5}; \nSystem.out.println(array[3]);",
    type: 0,
    question: "What is the output of the following code?;",
    answers: [
      { id: 0, text: "1;.", correct: false },
      { id: 1, text: "2;.", correct: false },
      { id: 2, text: "3;.", correct: false },
      { id: 3, text: "4;.", correct: true },
    ],
  },
  {
    // Fix this one with the code question
    id: 8,
    codeBlock:
      "int[] array = {1, 2, 3, 4, 5}; \n System.out.println(array.length);",
    type: 0,
    question: "What is the output of the following code?",
    answers: [
      { id: 0, text: "1;.", correct: false },
      { id: 1, text: "5;.", correct: true },
      { id: 2, text: "6;.", correct: false },
      { id: 3, text: "None of the above;.", correct: false },
    ],
  },
];
//shuffle questions
function getRandom(): number {
  return Math.random() - 0.5;
}

const shuffledQuestions = questions.sort(getRandom).map((question) => {
  const shuffledAnswers = question.answers.sort(getRandom);
  return { ...question, answers: shuffledAnswers };
});

const Java_3 = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>Explaning Arrays</h2>
          <p>
            In Java, arrays are objects that store a fixed-size sequential
            collection of elements of the same data type. They can be used to
            store multiple values in a single variable , rather than declaring
            seperate variables for each value.
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
            <li>
              1D Arrays - used to store a sequence of values in a single
              dimension. Here's an example of how to create a 1D array of
              integers in Java:
            </li>
            {/* dont do copy blocks here */}
            <CodeBlock
              showLineNumbers={false}
              text="int[]myArray = new int[5];"
              language="java"
              theme={a11yDark}
            />
            <li>
              2D arrays are used to store data in a two-dimensional grid format.
              They are also called "matrices". Here's an example of how to
              create a 2D array of integers in Java:
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="int[][] myMatrix = new int[3][4];"
              language="java"
              theme={a11yDark}
            />
          </ul>
        </Col>
        <Col>
          <Questions
            questions={shuffledQuestions}
            course={"Java"}
            lessonId={3}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Java_3;
