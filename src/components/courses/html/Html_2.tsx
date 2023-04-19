import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1, //Please reference Question interface in Questions.tsx
    type: 0, //multiple choice 0 , checks 1
    codeBlock: "ANSWER",
    question: "Which part of an HTML document contains information about the document (title, etc) ?",
    answers: [
      { id: 0, text: "<head>", correct: true },
      { id: 1, text: "<body>", correct: false },
      { id: 2, text: "<title>", correct: false },
      { id: 3, text: "<footer>", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 2,
    codeBlock: "ANSWER",
    type: 0,
    question: "Which tag is used to create a form in HTML?",
    answers: [
      { id: 0, text: "<form>", correct: true },
      { id: 1, text: "<input>", correct: false },
      { id: 2, text: "<button>", correct: false },
      { id: 3, text: "<label>", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 3,
    codeBlock: "ANSWER",
    type: 0,
    question: "Which tag is used to create a drop-down list in HTML?",
    answers: [
      { id: 0, text: "<input>", correct: false },
      { id: 1, text: "<select>", correct: true },
      { id: 2, text: "<option>", correct: false },
      { id: 3, text: "<dropdown>", correct: false },
    ],
  },

  {
    //question with code blocks for answers

    id: 4,
    codeBlock: "ANSWER",
    type: 0,
    question: "Which tag is used to add a horizontal line in HTML?",
    answers: [
      { id: 0, text: "<br>", correct: false },
      { id: 1, text: "<hr>", correct: true },
      { id: 2, text: "<line>", correct: false },
      { id: 3, text: "<hline>", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 5,
    codeBlock: "ANSWER",
    type: 0,
    question: "Which tag is used to create a heading in HTML?",
    answers: [
      { id: 0, text: "<head>", correct: false },
      { id: 1, text: "<title>", correct: false },
      { id: 2, text: "<h1>", correct: true },
      { id: 3, text: "<header>", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 6,
    codeBlock: "ANSWER",
    type: 0,
    question: "Which tag is used to create a comment in HTML?",
    answers: [
      { id: 0, text: "<!--here goes the comment>", correct: true },
      {
        id: 1,
        text: "<comment>Here goes the comment</comment>",
        correct: false,
      },
      { id: 2, text: "<cmt>This is a comment</cmt>", correct: false },
      { id: 3, text: "<cmnt>This is a comment</cmnt>", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 7,
    codeBlock: "ANSWER",
    type: 0,
    question: "Which tag is used to create a line break in HTML?",
    answers: [
      { id: 0, text: "<br>", correct: true },
      { id: 1, text: "<lb>", correct: false },
      { id: 2, text: "<break>", correct: false },
      { id: 3, text: "<linebreak>", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 8,
    codeBlock: "ANSWER",
    type: 0,
    question: "Which tag is used to create a button in HTML?",
    answers: [
      { id: 0, text: "<button>", correct: true },
      { id: 1, text: "<input>", correct: false },
      { id: 2, text: "<select>", correct: false },
      { id: 3, text: "<label>", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 9,
    codeBlock: "ANSWER",
    type: 0,
    question: "Which part of an HTML document contains the content of the page?",
    answers: [
      { id: 0, text: "<head>", correct: false },
      { id: 1, text: "<body>", correct: true },
      { id: 2, text: "<title>", correct: false },
      { id: 3, text: "<footer>", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 10,
    codeBlock: "ANSWER",
    type: 0,
    question: "Which tag is used to create an ordered list in HTML?",
    answers: [
      { id: 0, text: "<ul>", correct: false },
      { id: 1, text: "<li>", correct: false },
      { id: 2, text: "<ol>", correct: true },
      { id: 3, text: "<dt>", correct: false },
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

const Html_2 = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>HTML</h2>
          <p>
            HTML stands for HyperText Markup Language and it is used to create
            web pages.
          </p>
          <h2>Structure of an HTML document</h2>
          <p>
            An HTML document consists of two main parts, the head and the body.
            The head contains information about the document, such as its title,
            while the body contains the content of the page. The Code below is
            the base fundamental of an html file, every file must consist of
            such code.
          </p>
          <CodeBlock
            showLineNumbers={false}
            text="<!DOCTYPE html>
              <html>
                <head>
                  <title>My Webpage</title>
                </head>
                <body>
                  <h1>Welcome to my webpage</h1>
                  <p>This is my first HTML page.</p>
                </body>
              </html>
              "
            language="java"
            theme={a11yDark}
          />
          <h2>Syntax and commonly used tags:</h2>
          <p>
            HTML tags are used to create elements on a webpage. They are
            enclosed in angle brackets. Here are some commonly used HTML tags:
          </p>
          <ul>
            <li>These tags are used to create headings of different sizes</li>
            {/* dont do copy blocks here */}
            <CodeBlock
              showLineNumbers={false}
              text="<h1><h6>"
              language="java"
              theme={a11yDark}
            />
            <li>This tag is used to create paragraphs</li>
            <CodeBlock
              showLineNumbers={false}
              text="<p>"
              language="java"
              theme={a11yDark}
            />
            <li>This tag is used to create links</li>
            <CodeBlock
              showLineNumbers={false}
              text="<a>"
              language="java"
              theme={a11yDark}
            />
            <li>This tag is used to insert images</li>
            <CodeBlock
              showLineNumbers={false}
              text="<img>"
              language="java"
              theme={a11yDark}
            />
            <li>These tags are used to create unordered lists</li>
            <CodeBlock
              showLineNumbers={false}
              text="<ul><li>"
              language="java"
              theme={a11yDark}
            />
            <li>These tags are used to create ordered lists</li>
            <CodeBlock
              showLineNumbers={false}
              text="<ol><li>"
              language="java"
              theme={a11yDark}
            />
          </ul>
          <h2>HTML attributes/Comments</h2>
          <p>
            HTML attributes provide additional information about an element.
            They are added to the opening tag of an element, and their values
            are enclosed in quotes (").
          </p>
          <ul>
            <li>
              This attribute is used to specify the URL of a link, goes together
              with create link tag{" "}
            </li>
            <CodeBlock
              showLineNumbers={false}
              text='<a href="www.example.com">Click here</a>";'
              language="java"
              theme={a11yDark}
            />
            <li>This tag is used to create a table</li>
            <CodeBlock
              showLineNumbers={false}
              text="<table>"
              language="java"
              theme={a11yDark}
            />
            <li>This tag is used to create a form</li>
            <CodeBlock
              showLineNumbers={false}
              text="<form>"
              language="java"
              theme={a11yDark}
            />
            <li>This tag is used to create a horizontal line on the page</li>
            <CodeBlock
              showLineNumbers={false}
              text="<hr>"
              language="java"
              theme={a11yDark}
            />
            <li>This tag is used to create a drop-down list</li>
            <CodeBlock
              showLineNumbers={false}
              text="<select>"
              language="java"
              theme={a11yDark}
            />
            <li>This tag is used to create a line break</li>
            <CodeBlock
              showLineNumbers={false}
              text="<br>"
              language="java"
              theme={a11yDark}
            />
            <li>This attribute is used to specify the URL of an image</li>
            <CodeBlock
              showLineNumbers={false}
              text="src"
              language="java"
              theme={a11yDark}
            />
            <li>
              This attribute is used to provide alternative text for an image
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="alt"
              language="java"
              theme={a11yDark}
            />
            <li>
              This attribute is used to specify the CSS class of an element
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="class"
              language="java"
              theme={a11yDark}
            />
            <li>
              This attribute is used to give a unique identifier to an element
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="id"
              language="java"
              theme={a11yDark}
            />
            <li>
              Comments are used to add notes to an HTML document without
              displaying on the webpage.
            </li>
            <CodeBlock
              showLineNumbers={false}
              text="<!--Comment goes here->"
              language="java"
              theme={a11yDark}
            />
          </ul>
        </Col>
        <Col>
          <Questions
            questions={shuffledQuestions}
            course={"Html"}
            lessonId={2}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Html_2;