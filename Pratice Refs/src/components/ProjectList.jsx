export default function ProjectList({ data, handleProject }) {
  return (
    <ul>
      {data.map((project, i) => (
        <li key={i} onClick={() => handleProject(project)}>
          {project.title}
        </li>
      ))}
    </ul>
  );
}
