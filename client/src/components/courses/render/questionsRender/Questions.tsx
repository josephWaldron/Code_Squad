import { Card } from "react-bootstrap";
import Radial from "./Radial";

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
}

const Questions = ({ questions, courseName }: Props) => {
  return (
    <>
      <Card bg={"dark"}>
        <h1>Questions</h1>
      </Card>
    </>
  );
};

export default Questions;
