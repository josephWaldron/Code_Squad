import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1, //Please reference Question interface in Questions.tsx
    type: 0, //multiple choice 0 , checks 1
    codeBlock: "NONE",
    question: "Which of the following values can a boolean value contain?",
    answers: [
      { id: 0, text: "Only True", correct: false },
      { id: 1, text: "Only False", correct: false },
      { id: 2, text: "Both True and False", correct: true },
      { id: 3, text: "Any integer value", correct: false },
    ],
  },
  {
    id: 2,
    type: 0, //multiple choice 0 , checks 1
    question: "Which part of the code is incorrect?",
    codeBlock: 'char x = "a";',
    answers: [
      { id: 0, text: "char needs to be in single quotes", correct: true },
      { id: 1, text: "Missing semicolon", correct: false },
      { id: 2, text: "None of the above", correct: false },
    ],
  },
  {
    id: 3,
    type: 0, //multiple choice 0 , checks 1
    question: "How to initialize an integer variable?",
    codeBlock: "ANSWER",
    answers: [
      { id: 0, text: "int x = 10", correct: true },
      { id: 1, text: "int x = 10.5", correct: false },
      { id: 2, text: "int x = 10.5f", correct: false },
      { id: 3, text: "int x = 10.5d", correct: false },
    ],
  },
  {
    id: 4,
    type: 0, //multiple choice 0 , checks 1
    question: "This data type allows for the storage of characters or letters ",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Float", correct: false },
      { id: 1, text: "Boolean", correct: false },
      { id: 2, text: "Char", correct: true },
      { id: 3, text: "String", correct: false },
    ],
  },
  {
    id: 5,
    type: 0, //multiple choice 0 , checks 1
    question:
      "This data type is a 32-bit integer that is typically used as a default value for integral values. ",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Double", correct: false },
      { id: 1, text: "Float", correct: false },
      { id: 2, text: "Int", correct: true },
      { id: 3, text: "Short", correct: false },
    ],
  },
  {
    id: 6,
    type: 0, //multiple choice 0 , checks 1
    question:
      "This data type is used to contain integer numbers that are too large to fit in the Int data type. ",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Double", correct: false },
      { id: 1, text: "Float", correct: false },
      { id: 2, text: "Long", correct: true },
      { id: 3, text: "Byte", correct: false },
    ],
  },
  {
    id: 7,
    type: 0, //multiple choice 0 , checks 1
    question:
      "Which of the following data types contains 4 bytes and can be used to store currency values?",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Double", correct: true },
      { id: 1, text: "Float", correct: false },
      { id: 2, text: "Int", correct: false },
      { id: 3, text: "Short", correct: false },
    ],
  },
  {
    id: 8,
    type: 0, //multiple choice 0 , checks 1
    question:
      "This data type can store up to 15 decimal places and is typically used for fractional numbers.",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Double", correct: false },
      { id: 1, text: "Float", correct: false },
      { id: 2, text: "Long", correct: true },
      { id: 3, text: "Boolean", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 9,
    codeBlock: "NONE",
    type: 0,
    question:
      "True or False : A string data type is a non-primitive data type.",
    answers: [
      { id: 0, text: "True", correct: true },
      { id: 1, text: "False", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 10,
    codeBlock: "NONE",
    type: 0,
    question: "Which of the following data types can be used to store text? ",
    answers: [
      { id: 0, text: "Array", correct: false },
      { id: 1, text: "String", correct: true },
      { id: 2, text: "Boolean", correct: false },
      { id: 3, text: "Float", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 11,
    codeBlock: "NONE",
    type: 0,
    question: "What is a string data type in Java? ",
    answers: [
      {
        id: 0,
        text: "Generally used as a default data type for integral values",
        correct: false,
      },
      {
        id: 1,
        text: "Used to store collections of data, such as lists or tables",
        correct: false,
      },
      { id: 2, text: "Unicode character", correct: false },
      {
        id: 3,
        text: "Used to represent a sequence of characters",
        correct: true,
      },
    ],
  },
  {
    //question with code blocks for answers

    id: 12,
    codeBlock: "NONE",
    type: 0,
    question: "What is an array data type in Java? ",
    answers: [
      {
        id: 0,
        text: "Used to represent true or false values",
        correct: false,
      },
      {
        id: 1,
        text: "Used to store collections of data, such as lists or tables",
        correct: true,
      },
      { id: 2, text: "Used to store a single character", correct: false },
      {
        id: 3,
        text: "Used to represent a sequence of characters",
        correct: false,
      },
    ],
  },
  {
    //question with code blocks for answers

    id: 13,
    codeBlock: "NONE",
    type: 0,
    question: "How is a double data type different from a Float data type? ",
    answers: [
      {
        id: 0,
        text: "Double data type stores up to 16 decimal places while float stores up to 7",
        correct: false,
      },
      { id: 1, text: "There is no difference", correct: false },
      {
        id: 2,
        text: "Float stores decimal values with single precision, while double stores values with double precision",
        correct: false,
      },
      { id: 3, text: "A and C", correct: true },
    ],
  },
  {
    //question with code blocks for answers

    id: 14,
    codeBlock: "NONE",
    type: 1,
    question:
      "Which of the following are primitive data types in Java? (more than one answer)? ",
    answers: [
      { id: 0, text: "String", correct: false },
      { id: 1, text: "Int", correct: true },
      { id: 2, text: "Array", correct: false },
      { id: 3, text: "Float", correct: true },
      { id: 4, text: "Double", correct: true },
    ],
  },
  {
    //question with code blocks for answers

    id: 15,
    codeBlock: "NONE",
    type: 1,
    question:
      "Which of the following are non-primitive data types in Java? (more than one answer)? ",
    answers: [
      { id: 0, text: "String", correct: true },
      { id: 1, text: "Int", correct: false },
      { id: 2, text: "Array", correct: true },
      { id: 3, text: "Float", correct: false },
      { id: 4, text: "Long", correct: false },
      { id: 4, text: "Char", correct: false },
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

const Java_1 = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
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
              text="boolean x = true"
              language="java"
              theme={a11yDark}
            />
            <li>Byte- ranges from -127 to 128</li>
            <CodeBlock
              showLineNumbers={false}
              text="byte x = 100"
              language="java"
              theme={a11yDark}
            />
            <li>Char- unicode character</li>
            <CodeBlock
              showLineNumbers={false}
              text="char x = 'a'"
              language="java"
              theme={a11yDark}
            />
            <li>Short- 2 times smaller than an integer.</li>
            <CodeBlock
              showLineNumbers={false}
              text="short x = 1000"
              language="java"
              theme={a11yDark}
            />
            <li>
              Int- Generally used as a default data type for integral values.
              32-bit integer.
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="int x = 10000"
              language="java"
              theme={a11yDark}
            />
            <li>
              Long- Generally used when you need a range of values more than
              those provided by int. 64-bit integer.
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="long x = 100000"
              language="java"
              theme={a11yDark}
            />
            <li>
              Float- Typically used to store precise values, such as currency. A
              number with a decimal place. (7 decimal precision)
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="float x = 10.5f"
              language="java"
              theme={a11yDark}
            />
            <li>
              Double- used to store decimal values with double precision. (15
              decimal precision)
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="double x = 10.5"
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
              text="int[] x = {1,2,3}"
              language="java"
              theme={a11yDark}
            />
          </ul>
        </Col>
        <Col>
          <Questions
            questions={shuffledQuestions}
            course={"Java"}
            lessonId={1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Java_1;
