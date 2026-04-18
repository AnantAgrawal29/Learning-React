import Group from "./Group";

export default function UserInput({ userInput, change }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Group
          name="INITIAL INVESTMENT"
          type="number"
          value={userInput.initialInvestment}
          onChange={(event) => change("initialInvestment", event.target.value)}
        />
        <Group
          name="ANNUAL INVESTMENT"
          type="number"
          value={userInput.annualInvestment}
          onChange={(event) => change("annualInvestment", event.target.value)}
        />
      </div>
      <div className="input-group">
        <Group
          name="EXPECTED RETURN"
          type="number"
          value={userInput.expectedReturn}
          onChange={(event) => change("expectedReturn", event.target.value)}
        />
        <Group
          name="DURATION"
          type="number"
          value={userInput.duration}
          onChange={(event) => change("duration", event.target.value)}
        />
      </div>
    </section>
  );
}
