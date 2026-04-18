import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer; // CAN'T do this as this will affect all instances of timerchallenge component instances

export default function TimerChallenge({ title, targetTime }) {
  //let timer; // when useState executed timer variable restarted
  const timer = useRef();
  const dialog = useRef();
  // unlike state value refs don't get lost in background
  // and even when component function is re-excuted refs doesn't get reinitialized

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      // treating component as an API with method open
      // dialog.current.open();
    }, 10);

    setTimerStarted(true);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={targetTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? " Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
