import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Question({
  questionIndex,
  onSelectAnswer,
  getSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(ans) {
    setAnswer({
      selectedAnswer: ans,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: ans,
        isCorrect: QUESTIONS[questionIndex].answers[0] === ans,
      });
    }, 1000);
    setTimeout(() => {
      onSelectAnswer(ans);
    }, 2000);
  }

  let answerState = "";
  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 2000;
    if (answer.isCorrect != null) {
      timer = 1000;
      answerState = answer.isCorrect ? "correct" : "wrong";
    } else answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? getSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        onAnswer={handleSelectAnswer}
        answers={QUESTIONS[questionIndex].answers}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
      />
    </div>
  );
}
