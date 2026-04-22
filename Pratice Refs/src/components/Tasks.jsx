export default function Tasks({ handleClear, tasks }) {
  return (
    <ul className="tasks-container">
      {tasks.map((task, i) => (
        <li key={i} className="flex justify-between mb-4">
          <span>{task}</span>
          <button onClick={() => handleClear(i)}>Clear</button>
        </li>
      ))}
    </ul>
  );
}
