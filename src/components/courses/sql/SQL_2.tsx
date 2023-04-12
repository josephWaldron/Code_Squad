import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1, //Please reference Question interface in Questions.tsx
    type: 0, //multiple choice 0 , checks 1
    codeBlock: "NONE",
    question:
      "Which keyword is used to determine which columns of the data to show in the result?",
    answers: [
      { id: 0, text: "From", correct: false },
      { id: 1, text: "Select", correct: true },
      { id: 2, text: "Create", correct: false },
      { id: 3, text: "Drop", correct: false },
    ],
  },
  {
    id: 2,
    type: 0, //multiple choice 0 , checks 1
    question:
      "Which keyword is used to tell the database what table to select from?",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Add", correct: false },
      { id: 1, text: "Select", correct: false },
      { id: 2, text: "From", correct: true },
      { id: 3, text: "Create", correct: false },
    ],
  },
  {
    id: 3,
    type: 0, //multiple choice 0 , checks 1
    question: "This keyword deletes data from a database.",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Drop Index", correct: false },
      { id: 1, text: "Delete", correct: true },
      { id: 2, text: "Update", correct: false },
      { id: 3, text: "Add", correct: false },
    ],
  },
  {
    id: 4,
    type: 0, //multiple choice 0 , checks 1
    question: "This keyword is used to insert new data into a database",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Insert Into", correct: true },
      { id: 1, text: "Create Table", correct: false },
      { id: 2, text: "Update", correct: false },
      { id: 3, text: "Select", correct: false },
    ],
  },
  {
    id: 5,
    type: 0, //multiple choice 0 , checks 1
    question: "This command creates a new table in the database.",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Create Index", correct: false },
      { id: 1, text: "Select", correct: false },
      { id: 2, text: "Create Table", correct: true },
      { id: 3, text: "Insert", correct: false },
    ],
  },
  {
    id: 6,
    type: 0, //multiple choice 0 , checks 1
    question:
      "Which of the following commands is used to limit or specify a certain condition?",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Delete", correct: false },
      { id: 1, text: "Update", correct: false },
      { id: 2, text: "Where", correct: true },
      { id: 3, text: "From", correct: false },
    ],
  },
  {
    id: 7,
    type: 0, //multiple choice 0 , checks 1
    question: "This command is used to update a record within the database.",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Add", correct: false },
      { id: 1, text: "Drop", correct: false },
      { id: 2, text: "Update", correct: true },
      { id: 3, text: "Remove", correct: false },
    ],
  },
  {
    id: 8,
    type: 0, //multiple choice 0 , checks 1
    question:
      "This command allows a user to filter data so that a limited set of records is returned.",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "Having", correct: true },
      { id: 1, text: "Drop", correct: false },
      { id: 2, text: "Add", correct: false },
      { id: 3, text: "Remove", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 9,
    codeBlock: "NONE",
    type: 0,
    question:
      "Which command allows a user to rename a column or table using an alias?",
    answers: [
      { id: 0, text: "AS", correct: true },
      { id: 1, text: "From", correct: false },
      { id: 2, text: "Group by", correct: false },
      { id: 3, text: "Where", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 10,
    codeBlock: "NONE",
    type: 0,
    question:
      "This command will count the number of rows and return that count as a column in the result set.",
    answers: [
      { id: 0, text: "Add", correct: false },
      { id: 1, text: "Count", correct: true },
      { id: 2, text: "From", correct: false },
      { id: 3, text: "Group by", correct: false },
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
