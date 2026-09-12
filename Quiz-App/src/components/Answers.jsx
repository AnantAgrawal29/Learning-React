import { useRef } from "react";
export default function Answers({
  onAnswer,
  answerState,
  answers,
  selectedAnswer,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((ans) => {
        let cssClass = "";
        const isSelected = selectedAnswer === ans;
        if (isSelected) {
          if (answerState === "answered") cssClass = "selected";
          if (answerState === "correct" || answerState === "wrong") {
            cssClass = answerState;
          }
        }
        return (
          <li key={ans} className="answer">
            <button
              onClick={() => onAnswer(ans)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
