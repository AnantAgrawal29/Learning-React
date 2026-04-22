export default function Project({ data }) {
  return (
    <>
      <div className="project">
        <div className="project-header">
          <h1 className="text-3xl font-bold">Learning React</h1>
          <button className="btn">Delete</button>
        </div>
        <p className="date">Dec 29, 2026</p>
        <p className="mt-4">
          Learn React from the group up. Start with the basics
        </p>
      </div>
      <div className="tasks">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <input type="text" className="mt-4 py-1 px-2 bg-stone-200 text-base" />
        <button className="ml-4 inline">Add Task</button>
        <p className="mt-4 text-stone-900">
          This project does not have any tasks yet.
        </p>
      </div>
    </>
  );
}
