import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();
  useEffect(() => {
    open ? dialog.current.showModal() : dialog.current.close();
    // can't use simple array for dependency
    // dependency is the code inside useEffect hook
    // which causee change in state or prop causing it to reload
    // open is that dependency here, causing change in state
  }, [open]);
  return createPortal(
    <dialog className="modal" ref={dialog} open={open} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}

export default Modal;
