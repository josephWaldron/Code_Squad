import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/questionsRender/Questions";

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
    type: 1, //multiple choice 0 , checks 1
    question: "Which part of the code is incorrect?",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "char needs to be in single quotes", correct: true },
      { id: 1, text: "Missing semicolon", correct: false },
      { id: 2, text: "None of the above", correct: true },
    ],
  },
  {
    id: 3,
    type: 0, //multiple choice 0 , checks 1
    question: "Which of the following is not a primitive data type?",
    codeBlock: 'char x = "a";',
    answers: [
      { id: 0, text: "char needs to be in single quotes", correct: true },
      { id: 1, text: "Missing semicolon", correct: false },
      { id: 2, text: "None of the above", correct: false },
    ],
  },
  {
    id: 4,
    type: 0, //multiple choice 0 , checks 1
    question: "How to initialize an integer variable?",
    codeBlock: "ANSWER",
    answers: [
      { id: 0, text: "int x = 10;", correct: true },
      { id: 1, text: "int x = 10.5;", correct: false },
      { id: 2, text: "int x = 10.5f;", correct: false },
      { id: 3, text: "int x=12.3;", correct: false },
    ],
  },
  {
    id: 5,
    type: 1, //multiple choice 0 , checks 1
    question: "Which of the following is not a valid variable name?",
    codeBlock: "ANSWER",
    answers: [
      { id: 0, text: "int x = 10;", correct: true },
      { id: 1, text: "int x = 10.5;", correct: false },
      { id: 2, text: "int x = 10.5f;", correct: false },
      { id: 3, text: "int x;", correct: true },
    ],
  },
  {
    id: 6,
    type: 1, //multiple choice 0 , checks 1
    question: "What does this code accomplish?",
    codeBlock: "int x = 10;",
    answers: [
      { id: 0, text: "Declares a variable x of type int", correct: true },
      { id: 1, text: "Declares a variable x of type float", correct: false },
      { id: 2, text: "Declares a variable x of type double", correct: false },
      { id: 3, text: "Declares a variable x of type int", correct: true },
    ],
  },
];

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
        </Col>
        <Col>
          <Questions questions={questions} courseName={"Java"} lessonId={1} />
        </Col>
      </Row>
    </Container>
  );
};

export default Java_1;
