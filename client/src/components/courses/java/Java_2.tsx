import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock, CopyBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    //lesson number for changing the status
    id: 1,
    codeBlock: "NONE",
    type: 0,
    question: "What is the correct signature for the main method in Java?",
    answers: [
      { id: 0, text: "public void main(String[] args", correct: false },
      { id: 1, text: "static void main(String args)", correct: false },
      {
        id: 2,
        text: "public static void main(String[] args)",
        correct: true,
      },
      {
        id: 3,
        text: "private static void main(String args)",
        correct: false,
      },
    ],
  },
  {
    //question with a code block in question
    //lesson number
    id: 2,
    codeBlock: "NONE",
    type: 0, //language of the code block
    question: "What is the purpose of the main method in Java",
    answers: [
      {
        id: 0,
        text: "To define the starting point of the execution of a Java program",
        correct: true,
      },
      { id: 1, text: "To declare variables", correct: false },
      { id: 2, text: "To perform mathematical operations", correct: false },
      { id: 3, text: "To print text to the console", correct: false },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
    id: 3,
    codeBlock: "NONE",
    type: 0,
    question:
      "This keyword from the main method means that it can be called from anywhere",
    answers: [
      { id: 0, text: "public", correct: true },
      { id: 1, text: "static", correct: false },
      { id: 2, text: "void", correct: false },
      { id: 3, text: "args", correct: false },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
    id: 4,
    codeBlock: "NONE",
    type: 0,
    question:
      "This keyword from the main method means that it belongs to the class",
    answers: [
      { id: 0, text: "void", correct: false },
      { id: 1, text: "args;", correct: false },
      { id: 2, text: "public", correct: false },
      { id: 3, text: "static", correct: true },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
    id: 5,
    codeBlock: "NONE",
    type: 0,
    question:
      "This keyword from the main method means that it does not return a value ",
    answers: [
      { id: 0, text: "static", correct: false },
      { id: 1, text: "public", correct: false },
      { id: 2, text: "void", correct: true },
      { id: 3, text: "args", correct: false },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
    id: 6,
    codeBlock: "NONE",
    type: 0,
    question:
      "This keyword from the method paramter is an array of strings that contains any command-line arguments passed to the program ",
    answers: [
      { id: 0, text: "public", correct: false },
      { id: 1, text: "static", correct: false },
      { id: 2, text: "args", correct: true },
      { id: 3, text: "void", correct: false },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
    id: 7,
    codeBlock: "NONE",
    type: 0,
    question:
      "Which of the following data types contains 4 bytes and can be used to store currency values?",
    answers: [
      { id: 0, text: "Double;", correct: true },
      { id: 1, text: "Float;", correct: false },
      { id: 2, text: "Int;", correct: false },
      { id: 3, text: "Short;", correct: false },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
    id: 8,
    codeBlock: "NONE",
    type: 0,
    question:
      "This data type can store up to 15 decimal places and is typically used for fractional numbers.",
    answers: [
      { id: 0, text: "Double;", correct: false },
      { id: 1, text: "Float;", correct: false },
      { id: 2, text: "Long;", correct: true },
      { id: 3, text: "Boolean;", correct: false },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
    id: 9,
    codeBlock: "NONE",
    type: 0,
    question:
      "True or False : A string data type is a non-primitive data type.",
    answers: [
      { id: 0, text: "True;", correct: true },
      { id: 1, text: "False;", correct: false },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
    id: 10,
    codeBlock: "NONE",
    type: 0,
    question: "Which of the following data types can be used to store text? ",
    answers: [
      { id: 0, text: "Array;", correct: false },
      { id: 1, text: "String;", correct: true },
      { id: 2, text: "Boolean;", correct: false },
      { id: 3, text: "Float;", correct: false },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
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
      { id: 2, text: "Unicode character;", correct: false },
      {
        id: 3,
        text: "Used to represent a sequence of characters;",
        correct: true,
      },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
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
        text: "Used to represent a sequence of characters;",
        correct: false,
      },
    ],
  },
  {
    //question with code blocks for answers
    //lesson number
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
    //lesson number
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
    //lesson number
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

const Java_2 = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>The Main Method</h2>
          <p>
            The main method is the entry point of a program. It is the method
            that is executed when the program is run. Main method must be
            declared as “public static void main” and it must accept a single
            argument of the type “String[]”. Once the main method is called, the
            code inside the method is executed, this is where you can put the
            code you want to run. For example, you can use System.out.println()
            to print a message to the console or call other methods you have
            created.
          </p>
          <h2>Hello World</h2>
          <p>
            A Hello World program is an easy first coding assignment which is a
            program that outputs “Hello World”.{" "}
          </p>

          <h1>Keywords and creating Hello world</h1>
          <h2>Keywords</h2>
          <ul>
            <li>
              static- this keyword means that the method belongs to the class
            </li>
            {/* dont do copy blocks here */}
            <CodeBlock
              showLineNumbers={false}
              text="static"
              language="java"
              theme={a11yDark}
            />
            <li>
              void- this keyword means that the method does not return a value
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="void"
              language="java"
              theme={a11yDark}
            />
            <li>
              args- this keyword is a parameter with an array of strings that
              contains any command-line arguments passed to the program
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="args"
              language="java"
              theme={a11yDark}
            />
            <li>
              public- this keyword means that it can be called from anywhere
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="public"
              language="java"
              theme={a11yDark}
            />

            <h2>Creating a Hello world</h2>
            <li>Create a class that contains a main method</li>
            <CopyBlock
              showLineNumbers={false}
              text='class HelloWorld {
    public static void main(String args[]){
        //A System.out.println statement is used to print the string "Hello World"
        System.out.println("Hello World");
    }
}'
              language="java"
              theme={a11yDark}
            />
            <li>Output:</li>
            <CodeBlock
              showLineNumbers={false}
              text="Hello World"
              language="java"
              theme={a11yDark}
            />
          </ul>
        </Col>
        <Col>
          <Questions
            questions={shuffledQuestions}
            course={"Java"}
            lessonId={2}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Java_2;
