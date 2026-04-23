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

  function handleDelete(id) {
    setProjectList((projects) => projects.filter((p) => p.id !== id));
    setProject(null);
  }

  function handleAddTasks(task, id) {
    setProjectList((projects) =>
      projects.map((p) =>
        p.id === id ? { ...p, tasks: [task, ...p.tasks] } : p,
      ),
    );

    setProject((currentProject) =>
      currentProject && currentProject.id === id
        ? { ...currentProject, tasks: [task, ...currentProject.tasks] }
        : currentProject,
    );
  }

  function handleDeleteTasks(index, id) {
    setProjectList((projects) =>
      projects.map((p) =>
        p.id === id
          ? { ...p, tasks: p.tasks.filter((_, i) => i !== index) }
          : p,
      ),
    );

    setProject((currentProject) =>
      currentProject && currentProject.id === id
        ? {
            ...currentProject,
            tasks: currentProject.tasks.filter((_, i) => i !== index),
          }
        : currentProject,
    );
  }

  function handleData(newData) {
    setProjectList((prevData) => [...prevData, newData]);
  }

  function handleProject(data) {
    setAdd(false);
    setProject(data);
  }
  return (
    <main>
      <SideBar
        handleCreate={handleCreate}
        handleProject={handleProject}
        data={projectList}
      />
      {project && (
        <Project
          data={project}
          handleDelete={handleDelete}
          handleAddTasks={handleAddTasks}
          handleDeleteTasks={handleDeleteTasks}
        />
      )}
      {!toAdd && !project && <Home handleCreate={handleCreate} />}
      {toAdd && (
        <NewProject handleCreate={handleCreate} handleData={handleData} />
      )}
    </main>
  );
}

export default App;
