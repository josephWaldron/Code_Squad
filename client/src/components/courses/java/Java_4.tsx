import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1,
    codeBlock: "NONE",
    type: 0,
    question:
      "True or False: Parenthesis () are the syntax used to store the condition in which the if-statement will be run off of",
    answers: [
      { id: 0, text: "True", correct: true },
      { id: 1, text: "False", correct: false },
    ],
  },
  {
    id: 2,
    codeBlock: "NONE",
    type: 0,
    question:
      "Which of the following operators is used to hold the block of code to be executed if the condition is true?",
    answers: [
      { id: 0, text: "{}", correct: true },
      { id: 1, text: "[]", correct: false },
      { id: 2, text: "()", correct: false },
      { id: 3, text: "//", correct: false },
    ],
  },
  {
    id: 3,
    codeBlock: "NONE",
    type: 0,
    question:
      "True or False : Else conditions can be used to specify a block of code to be executed if a condition is false",
    answers: [
      { id: 0, text: "True", correct: true },
      { id: 1, text: "False", correct: false },
    ],
  },
  {
    id: 4,
    codeBlock: "NONE",
    type: 0,
    question: "A user can check multiple conditions using the __ statement",
    answers: [
      { id: 0, text: "Else", correct: false },
      { id: 1, text: "Else-if", correct: true },
      { id: 2, text: "If", correct: false },
      { id: 3, text: "Print", correct: false },
    ],
  },
  {
    id: 5,
    codeBlock: "NONE",
    type: 0,
    question:
      "There can be multiple __ statements in a single conditional statement",
    answers: [
      { id: 0, text: "Else-if", correct: true },
      { id: 1, text: "Else", correct: false },
      { id: 2, text: "If", correct: false },
      { id: 3, text: "Print", correct: false },
    ],
  },
  {
    id: 6,
    codeBlock: "NONE",
    type: 0,
    question: "What type of expressions are used to test an if statement?",
    answers: [
      { id: 0, text: "For loop", correct: false },
      { id: 1, text: "Else", correct: false },
      { id: 2, text: "If", correct: false },
      { id: 3, text: "Boolean", correct: true },
    ],
  },
  {
    id: 7,
    codeBlock: "NONE",
    type: 0,
    question:
      "What is the maximum number of else if statements that can be associated with a single if statement?",
    answers: [
      { id: 0, text: "1", correct: false },
      { id: 1, text: "2", correct: false },
      { id: 2, text: "10", correct: false },
      { id: 3, text: "There is no maximum limit", correct: true },
    ],
  },
  {
    id: 8,
    codeBlock: "NONE",
    type: 0,
    question:
      "What is the purpose of an else if statement in an if-else statement?",
    answers: [
      {
        id: 0,
        text: "To repeat a block of code multipe times",
        correct: false,
      },
      {
        id: 1,
        text: "To exeucte a block of code only if a certain condition is true",
        correct: false,
      },
      {
        id: 2,
        text: "To execute a block of code only if the condition in the if statement is false",
        correct: false,
      },
      {
        id: 3,
        text: "To check additional conditions if the condition in the corresponding if statement is false",
        correct: true,
      },
    ],
  },
  {
    id: 9,
    codeBlock: "ANSWER",
    type: 0,
    question: "What is the syntax of an if statement?",
    answers: [
      { id: 0, text: "if (condition) {code block}", correct: true },
      { id: 1, text: "while (condition) {code block}", correct: false },
      { id: 2, text: "for (condition) {code block}", correct: false },
      { id: 3, text: "switch (condition) {code block}", correct: false },
    ],
  },
  {
    id: 10,
    codeBlock: "NONE",
    type: 0,
    question: "What is the purpose of an if-else statement in programming?",
    answers: [
      {
        id: 0,
        text: "To repeat a block of code multiple times",
        correct: false,
      },
      {
        id: 1,
        text: "To execute a block of code only if a certain condition is true",
        correct: true,
      },
      { id: 2, text: "To declare a variable in the program", correct: false },
      { id: 3, text: "To print output to the console ", correct: false },
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

const Java_4 = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>The If & Else Statements</h2>
          <p>
            The if statement is a rule that is performed when the condition is
            satisfied or true. It is a statement used to specify a block of java
            code to be executed if a condition is true. Else statements are used
            to specify a block of code to be executed if the condition is false.
            The else if statement is used to specify a new condition if the
            first condition is false.
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
            <li>If Statements</li>
            {/* dont do copy blocks here */}
            <CodeBlock
              showLineNumbers={false}
              text="int value = 10
if (value >0) {
  //code to be executed
}"
              language="java"
              theme={a11yDark}
            />
            <li>Else Statements</li>
            <CodeBlock
              showLineNumbers={false}
              text="int value = 10
if (value >0) { 
  //code to be executed
}
else {
  //code in else block to be executed
}"
              language="java"
              theme={a11yDark}
            />
            <li>Else-if Statements</li>
            <CodeBlock
              showLineNumbers={false}
              text="int value = 10
if (value < 0) {
  //code to be executed
}
else if (value > 10) {
  //code in else block to be executed
}
else {
  //final condition
}"
              language="java"
              theme={a11yDark}
            />
          </ul>{" "}
        </Col>
        <Col>
          <Questions
            questions={shuffledQuestions}
            course={"Java"}
            lessonId={4}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Java_4;
