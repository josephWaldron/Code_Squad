import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1,
    type: 0,
    codeBlock: "3 + 5",
    question: "What is the result of the following code?",
    answers: [
      { id: 0, text: "8", correct: true },
      { id: 1, text: "2", correct: false },
      { id: 2, text: "15", correct: false },
      { id: 3, text: "Error", correct: false },
    ],
  },
  {
    id: 2,
    type: 0,
    codeBlock: "8 / 2",
    question: "What is the result of the following code?",
    answers: [
      { id: 0, text: "4.0", correct: true },
      { id: 1, text: "4", correct: false },
      { id: 2, text: "2.0", correct: false },
      { id: 3, text: "Error", correct: false },
    ],
  },
  {
    id: 3,
    type: 0,
    codeBlock: "7 // 3",
    question: "What is the result of the following code?",
    answers: [
      { id: 0, text: "1", correct: false },
      { id: 1, text: "2", correct: true },
      { id: 2, text: "3", correct: false },
      { id: 3, text: "Error", correct: false },
    ],
  },
  {
    id: 4,
    type: 0,
    codeBlock: "9 % 4",
    question: "What is the result of the following code?",
    answers: [
      { id: 0, text: "1", correct: true },
      { id: 1, text: "2", correct: false },
      { id: 2, text: "3", correct: false },
      { id: 3, text: "Error", correct: false },
    ],
  },
  {
    id: 5,
    type: 0,
    codeBlock: "2 ** 3",
    question: "What is the result of the following code?",
    answers: [
      { id: 0, text: "6", correct: false },
      { id: 1, text: "8", correct: true },
      { id: 2, text: "9", correct: false },
      { id: 3, text: "Error", correct: false },
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

const Python_3 = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>Lesson 3: Basic Arithmetic Operators in Python</h2>
          <p>
            Python provides a variety of basic arithmetic operators that allow
            you to perform mathematical operations on numbers.
          </p>
          <h3>Addition</h3>
          <p>
            To add two numbers together, you can use the + operator.
            <br />
            <CodeBlock
              text="result = 5 + 3"
              language="python"
              showLineNumbers={false}
              theme={a11yDark}
            />
          </p>
          <h3>Subtraction</h3>
          <p>
            To subtract one number from another, you can use the - operator.
            <br />
            <CodeBlock
              text="result = 10 - 4"
              language="python"
              showLineNumbers={false}
              theme={a11yDark}
            />
          </p>
          <h3>Multiplication</h3>
          <p>
            To multiply two numbers, you can use the * operator.
            <br />
            <CodeBlock
              text="result = 3 * 7"
              language="python"
              showLineNumbers={false}
              theme={a11yDark}
            />
          </p>
          <h3>Division</h3>
          <p>
            To divide one number by another, you can use the / operator. This
            will give you a floating-point result.
            <br />
            <CodeBlock
              text="result = 12 / 4"
              language="python"
              showLineNumbers={false}
              theme={a11yDark}
            />
          </p>
          <h3>Modulus</h3>
          <p>
            To get the remainder of a division, you can use the % operator.
            <br />
            <CodeBlock
              text="remainder = 14 % 5"
              language="python"
              showLineNumbers={false}
              theme={a11yDark}
            />
          </p>
          <h3>Exponentiation</h3>
          <p>
            To raise a number to the power of another number, you can use the **
            operator.
            <br />
            <CodeBlock
              text="result = 2 ** 3"
              language="python"
              showLineNumbers={false}
              theme={a11yDark}
            />
          </p>
          <h3>Floor Division</h3>
          <p>
            To perform floor division, which rounds the result down to the
            nearest whole number, you can use the // operator.
            <br />
            <CodeBlock
              text="result = 7 // 3"
              language="python"
              showLineNumbers={false}
              theme={a11yDark}
            />
          </p>
          <p>
            Practice using these arithmetic operators to solve different
            mathematical problems in Python.
          </p>
        </Col>
        <Col>
          <Questions
            questions={shuffledQuestions}
            course={"python"}
            lessonId={3}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Python_3;
