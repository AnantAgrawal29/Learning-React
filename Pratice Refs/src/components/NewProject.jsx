import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ handleData, handleCreate }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  return (
    <div className="form text-center p-8">
      <div className="text-right">
        <button className="btn btn-hover btn-cancel" onClick={handleCreate}>
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
            });
          }}
        >
          Save
        </button>
      </div>
      <Input
        type="text"
        textarea={false}
        content="Title"
        id="title"
        ref={title}
      />
      <Input
        id="description"
        ref={description}
        content="Description"
        textarea={true}
      />
      <Input
        type="date"
        id="date"
        textarea={false}
        content="due date"
        ref={date}
      />
    </div>
  );
}
