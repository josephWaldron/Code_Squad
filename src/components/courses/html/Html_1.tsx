import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1, //Please reference Question interface in Questions.tsx
    type: 0, //multiple choice 0 , checks 1
    codeBlock: "NONE",
    question: "What does HTML stand for?",
    answers: [
      { id: 0, text: "Hyper Text Markup Language", correct: true },
      { id: 1, text: "High Tech Markup Language", correct: false },
      { id: 2, text: "Hyperlinks and Text Markup Language", correct: false },
      { id: 3, text: "None of the above", correct: false },
    ],
  },
  {
    id: 2,
    type: 0, //multiple choice 0 , checks 1
    question:
      "An HTML document must start with which declaration at the start of an HTML file?",
    codeBlock: "ANSWER",
    answers: [
      { id: 0, text: "<!DOCTYPE html>", correct: true },
      { id: 1, text: "<DOCTYPE html>", correct: false },
      { id: 2, text: "!DOCTYPE", correct: false },
      { id: 3, text: "<!HTMLDOCTYPE>", correct: false },
    ],
  },
  {
    id: 3,
    type: 0, //multiple choice 0 , checks 1
    question: "Which are the correct tags that are included in an html file?",
    codeBlock: "ANSWER",
    answers: [
      {
        id: 0,
        text: "<html>, <head></head>, <body></body>, </html> ",
        correct: true,
      },
      {
        id: 1,
        text: "<html>, <body></body>, <head></head>, </html> ",
        correct: false,
      },
      {
        id: 2,
        text: "<head>, <html></html>, <body></body>, </head> ",
        correct: false,
      },
      { id: 3, text: "<head></head>, <body></body> ", correct: false },
    ],
  },
  {
    id: 4,
    type: 0, //multiple choice 0 , checks 1
    question: "What is the correct syntax for creating a hyperlink in HTML?",
    codeBlock: "ANSWER",
    answers: [
      { id: 0, text: "<a>www.example.com</a>", correct: false },
      { id: 1, text: "<a href=></a>", correct: true },
      { id: 2, text: "<a url=></a>", correct: false },
      { id: 3, text: "<a>Click Here</a>", correct: false },
    ],
  },
  {
    id: 5,
    type: 0, //multiple choice 0 , checks 1
    question: "which tag is used to create a list with bullet points in HTML ",
    codeBlock: "ANSWER",
    answers: [
      { id: 0, text: "<ol>", correct: false },
      { id: 1, text: "<li>", correct: false },
      { id: 2, text: "<ul>", correct: true },
      { id: 3, text: "<list>", correct: false },
    ],
  },
  {
    id: 6,
    type: 0, //multiple choice 0 , checks 1
    question: "Which tag is used to define a paragraph in HTML ",
    codeBlock: "ANSWER",
    answers: [
      { id: 0, text: "<p>", correct: true },
      { id: 1, text: "<par>", correct: false },
      { id: 2, text: "<para>", correct: false },
      { id: 3, text: "<paragraph>", correct: false },
    ],
  },
  {
    id: 7,
    type: 0, //multiple choice 0 , checks 1
    question: "Which tag is used to display an image in HTML?",
    codeBlock: "ANSWER",
    answers: [
      { id: 0, text: "<img>", correct: true },
      { id: 1, text: "<picture>", correct: false },
      { id: 2, text: "<image>", correct: false },
      { id: 3, text: "<photo>", correct: false },
    ],
  },
  {
    id: 8,
    type: 0, //multiple choice 0 , checks 1
    question:
      "Which attribute is used to specify the source URL of an image in HTML?",
    codeBlock: "NONE",
    answers: [
      { id: 0, text: "url", correct: false },
      { id: 1, text: "source", correct: false },
      { id: 2, text: "src", correct: true },
      { id: 3, text: "href", correct: false },
    ],
  },
  {
    id: 9,
    type: 0, //multiple choice 0 , checks 1
    question: "Which tag is used to create a table in HTML?",
    codeBlock: "ANSWER",
    answers: [
      { id: 0, text: "<table>", correct: true },
      { id: 1, text: "<tr>", correct: false },
      { id: 2, text: "<td>", correct: false },
      { id: 3, text: "<th>", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 10,
    codeBlock: "NONE",
    type: 0,
    question:
      "Which attribute is used to define a unique identifier for an HTML element?",
    answers: [
      { id: 0, text: "class", correct: false },
      { id: 1, text: "name", correct: false },
      { id: 2, text: "id", correct: true },
      { id: 3, text: "tag", correct: false },
    ],
  },
  {
    //question with code blocks for answers

    id: 11,
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

    id: 12,
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

    id: 13,
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

    id: 14,
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

    id: 15,
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

    id: 16,
    codeBlock: "NONE",
    type: 0,
    question: "Which tag is used to create a line break in HTML?",
    answers: [
      { id: 0, text: "<br>", correct: true },
      { id: 1, text: "<lb>", correct: false },
      { id: 2, text: "<break>", correct: false },
      { id: 3, text: "<linebreak>", correct: false },
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

const Html_1 = () => {
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
            lessonId={1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Html_1;
