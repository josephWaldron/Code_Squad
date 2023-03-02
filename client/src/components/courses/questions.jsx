import { CodeBlock, a11yDark } from "react-code-blocks";
import "./questions.css";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

function Questions(questionArray) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [incorect, setIncorect] = useState(false);
  const userId = Cookies.get("userId");
  const handleComplete = () => {
    //update the user's totalJavaStatus to correct value
    const setStatus = async () => {
      try {
        const lessonid = String(questionArray.questionArray[0].lessonId + 1);
        //const lessonid = String(1);
        const response = await axios.put(
          `http://localhost:3001/updateJavaStatus/${userId}/${lessonid}`
        );
        console.log(response);
        //direct the user back to the course page
        window.location.href = "/courses/java";
      } catch (error) {
        console.error(error);
      }
    };
    setStatus();
  };
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      if (currentQuestion + 1 === questionArray.questionArray.length) {
        setLastQuestion(true);
        setIncorect(false);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setIncorect(false);
      }
    } else {
      setIncorect(true);
    }
  };

  return (
    <div className="question">
      {lastQuestion ? (
        <div className="question-card">
          <h2>
            {currentQuestion + 1} out of {questionArray.questionArray.length}
          </h2>
          <h3 className="question-text">
            {questionArray.questionArray[currentQuestion].question}
          </h3>
          <ul>
            {questionArray.questionArray[currentQuestion].answers.map(
              (answer) => {
                return (
                  <li
                    key={answer.id}
                    onClick={() => optionClicked(answer.isCorrect)}
                  >
                    {answer.text}
                  </li>
                );
              }
            )}
          </ul>
          {incorect ? (
            <div>
              <h3 className="incorrect">Incorrect</h3>
            </div>
          ) : (
            <div></div>
          )}
          <button onClick={handleComplete}>Finish Module</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            {currentQuestion + 1} out of {questionArray.questionArray.length}
          </h2>
          <h3 className="question-text">
            {questionArray.questionArray[currentQuestion].question}
          </h3>
          <ul>
            {questionArray.questionArray[currentQuestion].answers.map(
              (answer) => {
                return (
                  <li
                    key={answer.id}
                    onClick={() => optionClicked(answer.isCorrect)}
                  >
                    {answer.text}
                  </li>
                );
              }
            )}
          </ul>
          {incorect ? (
            <div>
              <h3 className="incorrect">Incorrect</h3>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}

export default Questions;
