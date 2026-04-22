export default function ProjectList({ data, handleProject }) {
  return (
    <ul>
      {data.map((d, i) => (
        <li key={i} onClick={() => handleProject(d)}>
          {d.title}
        </li>
      ))}
    </ul>
  );
}
