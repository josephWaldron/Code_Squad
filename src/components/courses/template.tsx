import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "./render/Questions";

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
//shuffle questions
function getRandom(): number {
  return Math.random() - 0.5;
}

const shuffledQuestions = questions.sort(getRandom).map((question) => {
  const shuffledAnswers = question.answers.sort(getRandom);
  return { ...question, answers: shuffledAnswers };
});

const Template = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>Who created Java?</h2>
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

export default Template;
