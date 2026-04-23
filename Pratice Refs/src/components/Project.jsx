import { useState } from "react";
import Tasks from "./Tasks";
export default function Project({
  handleAddTasks,
  handleDeleteTasks,
  handleDelete,
  data,
}) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleTask() {
    if (enteredTask) {
      handleAddTasks(enteredTask, data.id);
      setEnteredTask("");
    }
  }

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function createDate() {
    const date = new Date(Date.parse(data.dueDate));
    return date.toLocaleDateString(navigator.language, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function handleClear(index) {
    handleDeleteTasks(index, data.id);
  }
  return (
    <>
      <div className="project">
        <div className="project-header">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <button
            className="btn btn-hover"
            onClick={() => handleDelete(data.id)}
          >
            Delete
          </button>
        </div>
        <p className="date">{createDate()}</p>
        <p className="mt-4 whitespace-pre-wrap">{data.description}</p>
      </div>
      <div className="tasks">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <input
          type="text"
          className="mt-4 py-1 px-2 text-base"
          onChange={handleChange}
          value={enteredTask}
        />
        <button className="ml-4 inline btn-hover" onClick={handleTask}>
          Add Task
        </button>
        {data.tasks.length === 0 && (
          <p className="mt-4 text-stone-900">
            This project does not have any tasks yet.
          </p>
        )}
        {data.tasks.length > 0 && (
          <Tasks handleClear={handleClear} tasks={data.tasks} />
        )}
      </div>
    </>
  );
}
