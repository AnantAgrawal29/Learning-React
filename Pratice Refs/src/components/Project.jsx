import { useRef, useState } from "react";
import Tasks from "./Tasks";
export default function Project({ handleDelete, data }) {
  const task = useRef();
  const [gettask, setTask] = useState([]);
  function handleTask() {
    setTask((prevTask) => [task.current.value, ...prevTask]);
  }
  function createDate() {
    const date = new Date(Date.parse(data.dueDate));
    const day = "" + date.getDate();
    return date
      .toDateString()
      .slice(3)
      .replace(day, day + ",");
  }
  function handleClear(index) {
    setTask((tasks) => tasks.filter((_, i) => i !== index));
  }
  return (
    <>
      <div className="project">
        <div className="project-header">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <button
            className="btn btn-hover"
            onClick={() => handleDelete(data.title)}
          >
            Delete
          </button>
        </div>
        <p className="date">{createDate()}</p>
        <p className="mt-4">{data.description}</p>
      </div>
      <div className="tasks">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <input type="text" className="mt-4 py-1 px-2 text-base" ref={task} />
        <button className="ml-4 inline btn-hover" onClick={handleTask}>
          Add Task
        </button>
        {gettask.length === 0 && (
          <p className="mt-4 text-stone-900">
            This project does not have any tasks yet.
          </p>
        )}
        {gettask.length > 0 && (
          <Tasks handleClear={handleClear} tasks={gettask} />
        )}
      </div>
    </>
  );
}
