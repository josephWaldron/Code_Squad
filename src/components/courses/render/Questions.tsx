import { useRef, useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { a11yDark, CodeBlock } from "react-code-blocks";
import updateUserStatus from "../../../hooks/updateUserStatus";

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
  course: string;
  lessonId: number;
}

const Questions = ({ questions, course, lessonId }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(new Set<number>());
  const [feedback, setFeedback] = useState<string>("");
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleNext = () => {
    const correctAnswers = questions[currentQuestion].answers
      .filter((answer) => answer.correct)
      .map((answer) => answer.id);
    const isCorrect =
      correctAnswers.length === selectedAnswers.size &&
      correctAnswers.every((id) => selectedAnswers.has(id));

    if (isCorrect) {
      setFeedback("");
    } else {
      setFeedback("Incorrect answer. Please try again.");
      return;
    }

    // Reset the form and state
    formRef.current!.reset();
    setSelectedAnswers(new Set<number>());

    // Move to the next question if there's more

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  useEffect(() => {
    if (isQuizFinished) {
      updateUserStatus({ lessonId, course });
      location.href = `/courses/${course}/`;
    }
  }, [isQuizFinished, lessonId, course]);

  return (
    <>
      <h1>Quiz</h1>
      <h2>
        Question {currentQuestion + 1}/{questions.length}
      </h2>
      <Form ref={formRef}>
        <Card bg="dark" style={{ height: "500px" }}>
          <Card.Body>
            <Card.Title>{questions[currentQuestion].question}</Card.Title>
            {questions[currentQuestion].codeBlock !== "NONE" &&
            questions[currentQuestion].codeBlock !== "ANSWER" ? (
              <CodeBlock
                text={questions[currentQuestion].codeBlock}
                language={course}
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
                        language={course}
                        showLineNumbers={false}
                        theme={a11yDark}
                      />
                    ) : (
                      answer.text
                    )
                  }
                  onClick={() => {
                    const updatedSelectedAnswers = new Set(selectedAnswers);
                    if (questions[currentQuestion].type === 0) {
                      // Handle radio buttons (single-select)
                      updatedSelectedAnswers.clear();
                    }
                    if (updatedSelectedAnswers.has(answer.id)) {
                      updatedSelectedAnswers.delete(answer.id);
                    } else {
                      updatedSelectedAnswers.add(answer.id);
                    }
                    setSelectedAnswers(updatedSelectedAnswers);
                  }}
                />
              ))}
            </div>
            <Button
              onClick={handleNext}
              disabled={selectedAnswers.size === 0}
              variant={"primary"}
            >
              Next
            </Button>
            {feedback && <p className="text-danger mt-2">{feedback}</p>}
          </Card.Body>
        </Card>
      </Form>
    </>
  );
};

export default Questions;
