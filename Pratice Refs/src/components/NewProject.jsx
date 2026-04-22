import { useRef } from "react";
export default function NewProject({ handleData, handleCreate }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  return (
    <div className="form text-center p-8">
      <div className="text-right">
        <button className="btn btn-cancel" onClick={handleCreate}>
          Cancel
        </button>
        <button
          className="btn btn-save"
          onClick={() => {
            handleCreate();
            handleData({
              title: title.current.value,
              description: description.current.value,
              dueDate: date.current.value,
              tasks: [],
            });
          }}
        >
          Save
        </button>
      </div>
      <div className="input-group">
        <label className="uppercase">Title</label>
        <input type="text" id="title" ref={title} />
      </div>
      <div className="input-group">
        <label className="uppercase">Description</label>
        <textarea id="description" ref={description}></textarea>
      </div>
      <div className="input-group">
        <label className="uppercase">Due date</label>
        <input type="date" id="date" ref={date} />
      </div>
    </div>
  );
}
