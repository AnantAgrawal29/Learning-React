import { useState, useRef } from "react";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import Project from "./components/Project";

function App() {
  const [toAdd, setAdd] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [project, setProject] = useState(null);

  function handleCreate() {
    setAdd((prevAdd) => !prevAdd);
    setProject(null);
  }

  function handleDelete(title) {
    setProjectList((projects) =>
      projects.filter((project) => project.title !== title),
    );
    setProject(null);
  }

  function handleData(newData) {
    setProjectList((prevData) => [...prevData, newData]);
  }

  function handleProject(data) {
    setAdd(false);
    setProject(data);
  }
  return (
    <>
      <SideBar
        handleCreate={handleCreate}
        handleProject={handleProject}
        data={projectList}
      />
      {project && <Project data={project} handleDelete={handleDelete} />}
      {!toAdd && !project && <Home handleCreate={handleCreate} />}
      {toAdd && (
        <NewProject handleCreate={handleCreate} handleData={handleData} />
      )}
    </>
  );
}

export default App;
