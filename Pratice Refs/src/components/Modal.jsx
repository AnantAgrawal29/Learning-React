import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
export default function Modal({ children, buttonCaption, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded shadow-md"
    >
      {children}
      <form method="dialog" className="text-right mt-4">
        <button className="btn btn-save rounded">{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
