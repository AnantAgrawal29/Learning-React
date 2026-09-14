import { useState, memo, useMemo, useCallback } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// memo stops function from re-executing if there is a change in the parent component
// but no change in the counter component by checking its props (eg: initialCount)
// memo is specifically used for component functions;
const Counter = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);

  // to stop normal functions from reloading if the output is same we use useMemo hook
  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount],
  );

  const [counter, setCounter] = useState(initialCount);

  // these functions are recreated whenever counter component function executes
  // therefore we have to use useCallback hook to stop it from receating uneccesarily

  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
});

export default Counter;
