import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((ans) => ans == null).length;
  const correctAnswers = userAnswers.filter(
    (ans, i) => QUESTIONS[i].answers[0] === ans,
  ).length;
  const wrongAnswers = userAnswers.length - correctAnswers - skippedAnswers;
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {Math.round((skippedAnswers / userAnswers.length) * 100)}%
          </span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">
            {Math.round((correctAnswers / userAnswers.length) * 100)}%
          </span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">
            {Math.round((wrongAnswers / userAnswers.length) * 100)}%
          </span>
          <span className="text">answered incrorectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((ans, i) => {
          let cssClass = "user-answer";
          if (ans == null) cssClass += " skipped";
          else
            ans === QUESTIONS[i].answers[0]
              ? (cssClass += " correct")
              : (cssClass += " wrong");
          return (
            <li key={i}>
              <h3>{i + 1}</h3>
              <p className="question">{QUESTIONS[i].text}</p>
              <p className={cssClass}>{ans ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
