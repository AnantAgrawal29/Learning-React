import { useCallback, useState } from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIscomplete = activeQuestionIndex === QUESTIONS.length;

  // useCallback -> memoizes a function so React can reuse the same function reference between renders.
  // It helps prevent unnecessary re-renders when passing functions to child components.
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);
  const handleSelectAnswer = useCallback(
    (answer) => setUserAnswers((prevAnswers) => [...prevAnswers, answer]),
    [],
  );

  if (quizIscomplete)
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );

  return (
    <div id="quiz">
      <Question
        // key prop forces react to destroy and rebuild the component on change of key value
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        getSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
