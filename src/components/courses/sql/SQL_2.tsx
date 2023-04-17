import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1, //Please reference Question interface in Questions.tsx
    type: 0, //multiple choice 0 , checks 1
    codeBlock: "NONE",
    question:
      "Which of the following statements is true about SQL?",
    answers: [
      { id: 0, text: "SQL is a programming language used to build websites.", correct: false },
      { id: 1, text: "SQL is a database management system", correct: false },
      { id: 2, text: "SQL stands for structured query language", correct: true },
      { id: 3, text: "SQL is used for creating graphical user interfaces", correct: false },
    ],
  },
  {
    id: 2,
    type: 0, //multiple choice 0 , checks 1
    question:
      "Which of the following SQL statements is used to delete data from a table?",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "SELECT", correct: false },
      { id: 1, text: "DELETE", correct: true },
      { id: 2, text: "UPDATE", correct: false },
      { id: 3, text: "INSERT", correct: false },
    ],
  },
  {
    id: 3,
    type: 0, //multiple choice 0 , checks 1
    question: "Which of the following SQL statements is used to join two tables?",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "DELETE", correct: false },
      { id: 1, text: "UNION", correct: true },
      { id: 2, text: "JOIN", correct: false },
      { id: 3, text: "SELECT", correct: false },
    ],
  },
  {
    id: 4,
    type: 0, //multiple choice 0 , checks 1
    question: "Which of the following SQL statements is used to retrieve data from a table?",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "INSERT", correct: false },
      { id: 1, text: "UPDATE", correct: false },
      { id: 2, text: "DELETE", correct: false },
      { id: 3, text: "SELECT", correct: true },
    ],
  },
  {
    id: 5,
    type: 0, //multiple choice 0 , checks 1
    question: "This command is used to update data within a table",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "CREATE INDEX", correct: false },
      { id: 1, text: "SELECT", correct: false },
      { id: 2, text: "UPDATE", correct: true },
      { id: 3, text: "INSERT", correct: false },
    ],
  },
  {
    id: 6,
    type: 0, //multiple choice 0 , checks 1
    question:
      "Which SQL keyword is used to sort the results of a SELECT statement in ascending order?",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "ORDER BY", correct: false },
      { id: 1, text: "ASC", correct: false },
      { id: 2, text: "DESC", correct: true },
      { id: 3, text: "SORT BY", correct: false },
    ],
  },
  {
    id: 7,
    type: 0, //multiple choice 0 , checks 1
    question: "This command is used to create a table",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "CREATE DATABASE", correct: false },
      { id: 1, text: "CREATE TABLE", correct: true },
      { id: 2, text: "CREATE INDEX", correct: false },
      { id: 3, text: "CREATE VIEW", correct: false },
    ],
  },
  {
    id: 8,
    type: 0, //multiple choice 0 , checks 1
    question:
      "Which SQL statement is used to modify the structure of a table?",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "ALTER DATABASE", correct: false },
      { id: 1, text: "ALTER TABLE", correct: false },
      { id: 2, text: "MODIFY TABLE", correct: true },
      { id: 3, text: "MODIFY DATABASE", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 9,
    codeBlock: "NONE",
    type: 0,
    question:
      "Which SQL statement is used to add a new column to an existing table?",
    answers: [
      { id: 0, text: "ADD COLUMN", correct: false },
      { id: 1, text: "INSERT COLUMN", correct: true },
      { id: 2, text: "CREATE COLUMN", correct: false },
      { id: 3, text: "MODIFY COLUMN", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 10,
    codeBlock: "NONE",
    type: 0,
    question:
      "Which SQL statement is used to order data by descending order?",
    answers: [
      { id: 0, text: "ASC", correct: false },
      { id: 1, text: "DESC", correct: true },
      { id: 2, text: "SORT", correct: false },
      { id: 3, text: "GROUP BY", correct: false },
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

const SQL_2 = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>SQL Basics</h2>
          <p>
            SQL (Structured Query Language) is a popular query language used for
            storing and processing information in a relational database.
            Relational databases store data in the form of a table, with rows
            and columns representing different data attributes. SQL statements
            can be used to store, update , remove , search , and retrieve
            information from the database.
          </p>
          <h2>What is SQL used for?</h2>
          <ul>
            <li>Communication with relational databases</li>
            <li>Querying Databases</li>
            <li>Retreving data from a database</li>
            <li>
              Create, read, update, and delete information within a database
            </li>
          </ul>
          <h1>SQL Commands</h1>
          <h2>------------</h2>
          <ul>
            <li>Where</li>
            {/* dont do copy blocks here */}
            <CodeBlock
              showLineNumbers={false}
              text="select firstname from Staff where salary = 30000;"
              language="sql"
              theme={a11yDark}
            />
            <li>Select</li>
            <CodeBlock
              showLineNumbers={false}
              text="select firstname, lastname from Staff;"
              language="sql"
              theme={a11yDark}
            />
            <li>From</li>
            <CodeBlock
              showLineNumbers={false}
              text="Select firstname from Staff;"
              language="sql"
              theme={a11yDark}
            />
            <li>Delete</li>
            <CodeBlock
              showLineNumbers={false}
              text="DELETE firstname from Staff where salary < 5;"
              language="sql"
              theme={a11yDark}
            />
            <li>Insert</li>
            <CodeBlock
              showLineNumbers={false}
              text="insert into Staff (staffno,fname,lname) values ('a01', 'Willy', 'Smith')"
              language="sql"
              theme={a11yDark}
            />
          </ul>
        </Col>
        <Col>
          <Questions
            questions={shuffledQuestions}
            course={"SQL"}
            lessonId={1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SQL_2;
