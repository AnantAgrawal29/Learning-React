import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ handleData, handleCreate }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-2">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-700">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="form text-center p-8">
        <div className="text-right">
          <button className="btn btn-hover btn-cancel" onClick={handleCreate}>
            Cancel
          </button>
          <button
            className="btn btn-save"
            onClick={() => {
              if (
                title.current.value.trim().length > 0 &&
                description.current.value.trim().length > 0 &&
                date.current.value.trim().length > 0
              ) {
                handleCreate();
                handleData({
                  title: title.current.value,
                  description: description.current.value,
                  dueDate: date.current.value,
                  tasks: [],
                  id: Math.random(),
                });
              } else modal.current.open();
            }}
          >
            Save
          </button>
        </div>
        <Input type="text" content="Title" id="title" ref={title} />
        <Input
          id="description"
          ref={description}
          content="Description"
          textarea
        />
        <Input type="date" id="date" content="due date" ref={date} />
      </div>
    </>
  );
}
