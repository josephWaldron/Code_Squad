import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1,
    type: 0,
    codeBlock: "NONE",
    question: "What is the purpose of an if statement?",
    answers: [
      { id: 0, text: "To repeat a block of code", correct: false },
      { id: 1, text: "To test a specific condition", correct: true },
      { id: 2, text: "To store data", correct: false },
      { id: 3, text: "To perform arithmetic operations", correct: false },
    ],
  },
  {
    id: 2,
    type: 0,
    codeBlock: "NONE",
    question: "What does the 'elif' statement stand for?",
    answers: [
      { id: 0, text: "Else", correct: false },
      { id: 1, text: "Else if", correct: true },
      { id: 2, text: "Exit if", correct: false },
      { id: 3, text: "End if", correct: false },
    ],
  },
  {
    id: 3,
    type: 0,
    codeBlock: `x = 5
if x > 10:
    print('A')
elif x > 3:
        print('B')
else:
        print('C')`,
    question: "What will be the output of the following code?",
    answers: [
      { id: 0, text: "A", correct: false },
      { id: 1, text: "B", correct: true },
      { id: 2, text: "C", correct: false },
      { id: 3, text: "No output", correct: false },
    ],
  },
  {
    id: 4,
    type: 0,
    codeBlock: `x = 7
if x > 5 and x % 2 == 0:
    print('x is greater than 5 and even')
else:
    print('x is not greater than 5 or not even')`,
    question: "What will be the output of the following code?",
    answers: [
      { id: 0, text: "x is greater than 5 and even", correct: false },
      { id: 1, text: "x is not greater than 5 or not even", correct: true },
      { id: 2, text: "No output", correct: false },
      { id: 3, text: "Error", correct: false },
    ],
  },
  {
    id: 5,
    type: 0,
    codeBlock: `x = 10
y = 20
if x > y or x % 2 == 0:
    print('x is greater than y or x is even')`,
    question: "What will be the output of the following code?",
    answers: [
      { id: 0, text: "x is greater than y or x is even", correct: true },
      { id: 1, text: "No output", correct: false },
      { id: 2, text: "Error", correct: false },
      { id: 3, text: "None of the above", correct: false },
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

const Python_4 = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>Lesson 4: Conditional Statements</h2>
          <p>
            In this lesson, you will learn about conditional statements in
            Python, such as if, elif, and else.
          </p>

          <h3>If Statement</h3>
          <p>
            An if statement is used to test a specific condition. If the
            condition is true, the block of code within the if statement will be
            executed.
          </p>
          <CodeBlock
            text="x = 5
if x > 3:
    print('x is greater than 3')"
            language="python"
            showLineNumbers={false}
            theme={a11yDark}
          />

          <h3>Elif and Else</h3>
          <p>
            The elif (else if) statement is used to test multiple conditions.
            The else statement is used to define a block of code that will be
            executed if none of the previous conditions are met.
          </p>
          <CodeBlock
            text="x = 5
if x > 10:
    print('x is greater than 10')
elif x > 5:
    print('x is greater than 5 but less than or equal to 10')
else:
    print('x is less than or equal to 5')"
            language="python"
            showLineNumbers={false}
            theme={a11yDark}
          />

          <h3>Nested If Statements</h3>
          <p>
            An if statement can be nested within another if statement to create
            more complex conditions.
          </p>
          <CodeBlock
            text="x = 10
y = 5
if x > y:
    print('x is greater than y')
    if x % 2 == 0:
        print('x is also an even number')"
            language="python"
            showLineNumbers={false}
            theme={a11yDark}
          />

          <h3>Logical Operators</h3>
          <p>
            You can use logical operators such as 'and' and 'or' to combine
            multiple conditions in a single if statement.
          </p>
          <CodeBlock
            text="x = 10
y = 5
if x > y and x % 2 == 0:
    print('x is greater than y and an even number')
if x > y or x % 2 == 0:
    print('x is greater than y or an even number')"
            language="python"
            showLineNumbers={false}
            theme={a11yDark}
          />
        </Col>
        <Col>
          <Questions
            questions={shuffledQuestions}
            course={"python"}
            lessonId={4}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Python_4;
