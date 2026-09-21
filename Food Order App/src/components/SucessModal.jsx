import { createPortal } from "react-dom";

export default function SuccessModal({ successRef, onClose, onBackdropClick }) {
  return createPortal(
    <dialog
      className="modal"
      ref={successRef}
      onClick={() => onBackdropClick(successRef)}
    >
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with details via email within the next few
        minutes.
      </p>
      <p className="modal-actions">
        <button className="button" onClick={() => onClose(successRef)}>
          Okay
        </button>
      </p>
    </dialog>,
    document.getElementById("modal"),
  );
}
