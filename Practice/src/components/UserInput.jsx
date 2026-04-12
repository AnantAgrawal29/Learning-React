import { useState } from "react";
import Group from "./Group";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annulaInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(newValue);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <Group name="INITIAL INVESTMENT" type="number" />
        <Group name="ANNUAL INVESTMENT" type="number" />
      </div>
      <div className="input-group">
        <Group name="EXPECTED RETURN" type="number" />
        <Group name="DURATION" type="number" />
      </div>
    </section>
  );
}
