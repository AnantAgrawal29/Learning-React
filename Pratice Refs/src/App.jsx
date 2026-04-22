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
  }

  function handleData(newData) {
    setProjectList((prevData) => [...prevData, newData]);
  }

  function handleProject(data) {
    setProject(data);
  }
  return (
    <>
      <SideBar
        handleCreate={handleCreate}
        handleProject={handleProject}
        data={projectList}
      />
      <Project
        data={{
          title: "Learning React",
          description: "Completing React Course",
          dueDate: "2003-01-20",
        }}
      />
      {/* {!toAdd && <Home handleCreate={handleCreate} />} */}
      {toAdd && (
        <NewProject handleCreate={handleCreate} handleData={handleData} />
      )}
    </>
  );
}

export default App;
