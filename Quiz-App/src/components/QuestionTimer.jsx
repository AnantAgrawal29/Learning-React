import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  // useEffect is used for code that needs to changed with state update or prop change but it takes time to execute to do it, code that take some time ot generate output such as async funtions

  // when change occurs on things in dependency array, useEffect is executed again
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    // cleaning function
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]); // <- dependency array

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    // cleaning function
    return () => clearInterval(interval);
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
