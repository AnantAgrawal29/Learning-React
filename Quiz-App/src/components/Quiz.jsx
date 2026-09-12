import { useCallback, useState } from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIscomplete = activeQuestionIndex === QUESTIONS.length;

  // useCallback -> memoizes a function so React can reuse the same function reference between renders.
  // It helps prevent unnecessary re-renders when passing functions to child components.
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);
  const handleSelectAnswer = useCallback(
    (answer) => {
      setAnswerState("answered");
      setUserAnswers((prevAnswers) => [...prevAnswers, answer]);

      // changing color of selected answer
      setTimeout(() => {
        // choosing correct or wrong for selected answer
        if (answer === QUESTIONS[activeQuestionIndex].answers[0])
          setAnswerState("correct");
        else setAnswerState("wrong");

        // resetting answer state after 2 seconds
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex],
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
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={handleSkipAnswer}
          // key prop forces react to destroy and rebuild the component on change of key value
          key={activeQuestionIndex}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <Answers
          // key prop forces react to destroy and rebuild the component on change of key value
          key={activeQuestionIndex}
          onAnswer={handleSelectAnswer}
          answers={QUESTIONS[activeQuestionIndex].answers}
          answerState={answerState}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
        />
      </div>
    </div>
  );
}
