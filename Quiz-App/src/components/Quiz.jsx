import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

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

  if (quizIscomplete) return <Summary userAnswers={userAnswers} />;

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
