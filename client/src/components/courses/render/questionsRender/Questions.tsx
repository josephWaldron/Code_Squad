import { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";

export interface Question {
  id: number;
  type: number; //multiple choice 0 , checks 1
  codeBlock: string; //no code block = "" / code block in question "codeblocktext"/ code blocks as answer"ANSWER"
  question: string;
  answers: Answers[];
}
export interface Answers {
  id: number;
  text: string;
  correct: boolean;
}

interface Props {
  questions: Question[];
  courseName: String;
  lessonId: number;
}

const Questions = ({ questions, courseName, lessonId }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonVariant, setButtonVariant] = useState("danger");
  // let selectedAnswers: number[] = [];
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleNext = () => {
    formRef.current!.reset();
    setButtonDisabled(true);
    setButtonVariant("danger");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <>
      <h1>Questions</h1>
      <h2>
        {currentQuestion + 1} out of {questions.length}
      </h2>
      <Form ref={formRef}>
        <Card bg="dark">
          <Card.Body>
            <Card.Title>{questions[currentQuestion].question}</Card.Title>
            {questions[currentQuestion].codeBlock !== "NONE" &&
            questions[currentQuestion].codeBlock !== "ANSWER" ? (
              <CodeBlock
                text={questions[currentQuestion].codeBlock}
                language={courseName}
                showLineNumbers={false}
                theme={a11yDark}
              />
            ) : (
              <></>
            )}
            <div>
              {questions[currentQuestion].answers.map((answer) => (
                <Form.Check
                  key={answer.id}
                  type={
                    questions[currentQuestion].type === 0 ? "radio" : "checkbox"
                  }
                  name={`question-${questions[currentQuestion].id}`}
                  label={
                    questions[currentQuestion].codeBlock === "ANSWER" ? (
                      <CodeBlock
                        text={answer.text}
                        language={courseName}
                        showLineNumbers={false}
                        theme={a11yDark}
                      />
                    ) : (
                      answer.text
                    )
                  }
                  onClick={() => {
                    //ADD VARIANTS TO WORK WITH CHECKBOXES
                    if (questions[currentQuestion].type === 0) {
                      if (answer.correct) {
                        setButtonVariant("success");
                        setButtonDisabled(false);
                      } else {
                        setButtonVariant("danger");
                        setButtonDisabled(true);
                      }
                    } else {
                      console.log("checkbox");
                    }
                  }}
                />
              ))}
            </div>
            <Button
              onClick={handleNext}
              disabled={buttonDisabled}
              variant={buttonVariant}
            >
              Next
            </Button>
          </Card.Body>
        </Card>
      </Form>
    </>
  );
};

export default Questions;
