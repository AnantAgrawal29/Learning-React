import ProjectList from "./ProjectList";
export default function SideBar({ data, handleCreate, handleProject }) {
  return (
    <div className="sidebar">
      <h1 className="text-solid-500">Your Projects</h1>
      <button className="btn btn-add" onClick={handleCreate}>
        + Add Project
      </button>
      <ProjectList data={data} handleProject={handleProject} />
    </div>
  );
}
