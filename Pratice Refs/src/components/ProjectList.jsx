export default function ProjectList({ data, handleProject }) {
  return (
    <ul>
      {data.map((d) => (
        <li onClick={() => handleProject(d)}>{d.title}</li>
      ))}
    </ul>
  );
}
