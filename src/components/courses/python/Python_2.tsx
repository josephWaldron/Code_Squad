import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1,
    type: 0,
    codeBlock: "NONE",
    question: "Which of the following is a valid variable name?",
    answers: [
      { id: 0, text: "1_student", correct: false },
      { id: 1, text: "_age", correct: true },
      { id: 2, text: "username!", correct: false },
      { id: 3, text: "full name", correct: false },
    ],
  },
  {
    id: 2,
    type: 0,
    codeBlock: "NONE",
    question: "What is the data type of the value 3.14?",
    answers: [
      { id: 0, text: "Integer", correct: false },
      { id: 1, text: "Float", correct: true },
      { id: 2, text: "String", correct: false },
      { id: 3, text: "Boolean", correct: false },
    ],
  },
  {
    id: 3,
    type: 1,
    codeBlock: "NONE",
    question: "Which of the following is a boolean value?",
    answers: [
      { id: 0, text: "0", correct: false },
      { id: 1, text: "True", correct: true },
      { id: 2, text: "False", correct: true },
      { id: 3, text: "1", correct: false },
    ],
  },
  {
    id: 4,
    type: 0,
    codeBlock: "int(5.9)",
    question: "What is the result of the following code?",
    answers: [
      { id: 0, text: "5", correct: true },
      { id: 1, text: "5.9", correct: false },
      { id: 2, text: "6", correct: false },
      { id: 3, text: "Error", correct: false },
    ],
  },
  {
    id: 5,
    type: 1,
    codeBlock: "NONE",
    question: "Which of the following data types can be converted to a float?",
    answers: [
      { id: 0, text: "Integer", correct: true },
      { id: 1, text: "String", correct: true },
      { id: 2, text: "Boolean", correct: true },
      { id: 3, text: "None of the above", correct: false },
    ],
  },
  {
    id: 6,
    type: 0,
    codeBlock: "ANSWER",
    question: "Which function is used to convert a value to a string?",
    answers: [
      { id: 0, text: "int()", correct: false },
      { id: 1, text: "float()", correct: false },
      { id: 2, text: "str()", correct: true },
      { id: 3, text: "bool()", correct: false },
    ],
  },
  {
    id: 7,
    type: 0,
    codeBlock: "bool(0)",
    question: "What will be the result of the following code? ",
    answers: [
      { id: 0, text: "True", correct: false },
      { id: 1, text: "False", correct: true },
      { id: 2, text: "0", correct: false },
      { id: 3, text: "None", correct: false },
    ],
  },
  {
    id: 8,
    type: 0,
    codeBlock: "float('5.5')",
    question: "What is the result of the following code?",
    answers: [
      { id: 0, text: "5", correct: false },
      { id: 1, text: "5.5", correct: true },
      { id: 2, text: "Error", correct: false },
      { id: 3, text: "None", correct: false },
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

const Python_2 = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Lesson 2: Python Data Types and Variables</h1>
          <h2>2.1 Basic Data Types</h2>
          <p>
            - Integers: Whole numbers, e.g., 1, 20, -5
            <br />
            - Floats: Decimal numbers, e.g., 3.14, 0.5, -0.1
            <br />
            - Strings: Sequence of characters, e.g., "Hello, World!", "Python"
            <br />- Booleans: True or False values
          </p>
          <h2>2.2 Variables</h2>
          <p>
            - Variables are used to store data in a program
            <br />
            - Naming rules:
            <br />
            &emsp;- Must start with a letter or underscore (_)
            <br />
            &emsp;- Can contain letters, numbers, and underscores
            <br />
            &emsp;- Cannot contain spaces or special characters
            <br />
            &emsp;- Should be descriptive and not too short
          </p>
          <h2>2.3 Assigning Values to Variables</h2>
          <p>
            - Use the assignment operator (=) to assign values to variables
            <br />
            - Examples:
            <br />
            <CodeBlock
              showLineNumbers={false}
              text='age = 25
pi = 3.14
name = "John Doe"
is_student = True'
              language="python"
              theme={a11yDark}
            />
          </p>
          <h2>2.4 Data Type Conversion</h2>
          <p>
            - Convert between data types using built-in functions
            <br />
            - Examples:
            <br />
            &emsp;- int(): Convert to an integer
            <br />
            &emsp;- float(): Convert to a float
            <br />
            &emsp;- str(): Convert to a string
            <br />
            &emsp;- bool(): Convert to a boolean
          </p>
        </Col>
        <Col>
          <Questions
            questions={shuffledQuestions}
            course={"python"}
            lessonId={2}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Python_2;
