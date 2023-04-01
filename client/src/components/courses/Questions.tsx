export interface Question {
  id: number;
  type: string; //multiple choice, checks, code block in question, code block answer
  question: string;
  answers: Answers[];
}
export interface Answers {
  id: number;
  text: string;
  correct: boolean;
}

const Questions = () => {
  return <div>Questions</div>;
};

export default Questions;
