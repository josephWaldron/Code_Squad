import { Col, Container, Row } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import Questions, { Question } from "../render/Questions";

const questions: Question[] = [
  {
    id: 1,
    type: 0,
    codeBlock: "NONE",
    question: "Why is Python considered beginner-friendly?",
    answers: [
      { id: 0, text: "It has a simple and easy-to-read syntax", correct: true },
      { id: 1, text: "It is a slow programming language", correct: false },
      { id: 2, text: "It has limited applications", correct: false },
      { id: 3, text: "It is only used for web development", correct: false },
    ],
  },
  {
    id: 2,
    type: 0,
    codeBlock: "NONE",
    question: "Which domain is Python NOT commonly used in?",
    answers: [
      { id: 0, text: "Web development", correct: false },
      { id: 1, text: "Data analysis and visualization", correct: false },
      { id: 2, text: "Mobile application development", correct: true },
      { id: 3, text: "Machine learning and AI", correct: false },
    ],
  },
  {
    id: 3,
    type: 0,
    codeBlock: "NONE",
    question: "Who created Python?",
    answers: [
      { id: 0, text: "Linus Torvalds", correct: false },
      { id: 1, text: "Guido van Rossum", correct: true },
      { id: 2, text: "James Gosling", correct: false },
      { id: 3, text: "Brendan Eich", correct: false },
    ],
  },
  {
    id: 4,
    type: 0,
    codeBlock: "NONE",
    question: "Which major version of Python is currently in use?",
    answers: [
      { id: 0, text: "Python 1.x", correct: false },
      { id: 1, text: "Python 2.x", correct: false },
      { id: 2, text: "Python 3.x", correct: true },
      { id: 3, text: "Python 4.x", correct: false },
    ],
  },
  {
    id: 5,
    type: 1,
    codeBlock: "NONE",
    question:
      "Which of the following are popular Python web development frameworks?",
    answers: [
      { id: 0, text: "Django", correct: true },
      { id: 1, text: "Flask", correct: true },
      { id: 2, text: "Ruby on Rails", correct: false },
      { id: 3, text: "Express.js", correct: false },
    ],
  },
  {
    id: 6,
    type: 1,
    codeBlock: "NONE",
    question:
      "Which of the following are popular Python libraries for data analysis?",
    answers: [
      { id: 0, text: "pandas", correct: true },
      { id: 1, text: "NumPy", correct: true },
      { id: 2, text: "Matplotlib", correct: true },
      { id: 3, text: "React", correct: false },
    ],
  },
  {
    id: 7,
    type: 0,
    codeBlock: "NONE",
    question: "What is the file extension for Python scripts?",
    answers: [
      { id: 0, text: ".java", correct: false },
      { id: 1, text: ".js", correct: false },
      { id: 2, text: ".py", correct: true },
      { id: 3, text: ".rb", correct: false },
    ],
  },
  {
    id: 8,
    type: 1,
    codeBlock: "NONE",
    question:
      "Which command is used to run Python scripts from the command line?",
    answers: [
      { id: 0, text: "python", correct: true },
      { id: 1, text: "python3", correct: true },
      { id: 2, text: "py", correct: true },
      { id: 3, text: "run-python", correct: false },
    ],
  },
  {
    id: 9,
    type: 0,
    codeBlock: "NONE",
    question: "Which of the following is NOT a reason to learn Python?",
    answers: [
      { id: 0, text: "Ease of learning", correct: false },
      { id: 1, text: "Versatility", correct: false },
      { id: 2, text: "Strong community", correct: false },
      { id: 3, text: "Limited resources", correct: true },
    ],
  },
  {
    id: 10,
    type: 0,
    codeBlock: "NONE",
    question: "In which year was Python first released?",
    answers: [
      { id: 0, text: "1989", correct: false },
      { id: 1, text: "1991", correct: true },
      { id: 2, text: "1995", correct: false },
      { id: 3, text: "2000", correct: false },
    ],
  },
  {
    id: 11,
    type: 1,
    codeBlock: "NONE",
    question:
      "Which of the following are popular Python libraries for machine learning and AI?",
    answers: [
      { id: 0, text: "TensorFlow", correct: true },
      { id: 1, text: "scikit-learn", correct: true },
      { id: 2, text: "Django", correct: false },
      { id: 3, text: "Flask", correct: false },
    ],
  },
  {
    id: 12,
    type: 0,
    codeBlock: "NONE",
    question: "Which library is used for game development in Python?",
    answers: [
      { id: 0, text: "Pygame", correct: true },
      { id: 1, text: "GamePy", correct: false },
      { id: 2, text: "PythonGame", correct: false },
      { id: 3, text: "GamePython", correct: false },
    ],
  },
  {
    id: 13,
    type: 0,
    codeBlock: "NONE",
    question:
      "Which command should you use to run a Python script named 'script_name.py'?",
    answers: [
      { id: 0, text: "python script_name.py", correct: true },
      { id: 1, text: "run script_name.py", correct: false },
      { id: 2, text: "execute script_name.py", correct: false },
      { id: 3, text: "python execute script_name.py", correct: false },
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

const Python_1 = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Lesson 1: Introduction to Python</h1>
          <h2>1.1 Why Learn Python</h2>
          <p>
            - Ease of learning: Python has a simple and easy-to-read syntax,
            making it beginner-friendly.
            <br />
            - Versatility: Python is used in a wide range of applications, such
            as web development, data analysis, artificial intelligence, and
            more.
            <br />
            - Strong community: Python has a large and supportive community,
            which means numerous resources, libraries, and frameworks are
            available.
            <br />- High demand: Python's popularity has made it one of the most
            in-demand programming languages in the job market.
          </p>
          <h2>1.2 Python's History and Applications</h2>
          <p>
            - History: Python was created by Guido van Rossum and was first
            released in 1991. The language has since evolved through several
            versions, with Python 3.x being the current major version.
            <br />
            - Applications: Python is used in various domains, including:
            <br />
            &emsp;- Web development (e.g., Django, Flask)
            <br />
            &emsp;- Data analysis and visualization (e.g., pandas, NumPy,
            Matplotlib)
            <br />
            &emsp;- Machine learning and AI (e.g., TensorFlow, scikit-learn)
            <br />
            &emsp;- Automation and scripting
            <br />
            &emsp;- Game development (e.g., Pygame)
          </p>
          <h2>1.3 Setting Up the Python Environment</h2>
          <p>
            - Installing Python:
            <br />
            &emsp;- Download Python from the official website (
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.python.org/downloads/
            </a>
            )<br />
            &emsp;- Follow the installation instructions for your operating
            system (Windows, macOS, Linux)
          </p>
          <p>
            - Running Python code:
            <br />
            <CodeBlock
              showLineNumbers={false}
              text="python"
              language="bash"
              theme={a11yDark}
            />
            <br />
            &emsp;- Show how to run Python scripts from the command line:
            <br />
            <CodeBlock
              showLineNumbers={false}
              text="python script_name.py"
              language="bash"
              theme={a11yDark}
            />
          </p>
        </Col>
        <Col>
          <Questions
            questions={shuffledQuestions}
            course={"python"}
            lessonId={1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Python_1;
