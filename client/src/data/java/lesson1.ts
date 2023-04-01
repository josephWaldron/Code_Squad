export default [
  {
    id: 1,
    type: "",
    question: "Which of the following values can a boolean value contain?",
    answers: [
      { id: 0, text: "Only True", correct: false },
      { id: 1, text: "Only False", correct: false },
      { id: 2, text: "Both True and False", correct: true },
      { id: 3, text: "Any integer value", correct: false },
    ],
  },
  {
    //question with a code block in question

    id: 2,
    type: 'char x = "a";', //code block to display for the question
    question: "Which part of the code is incorrect?",
    answers: [
      { id: 0, text: "char needs to be in single quotes", correct: true },
      { id: 1, text: "Missing semicolon", correct: false },
      { id: 2, text: "None of the above", correct: false },
    ],
  },
];
