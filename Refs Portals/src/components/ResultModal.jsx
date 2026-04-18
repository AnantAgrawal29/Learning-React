// export default function ResultModal({ ref, result, targetTime }) {
//   return (
//     <dialog ref={ref} className="result-modal">
//       <h2>You {result}!</h2>
//       <p>
//         The target time was <strong>{targetTime} seconds.</strong>
//       </p>
//       <p>You stopped the timer with X seconds left</p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// }

// for older react version we couldn't accept ref as parameter to component so below method was used
import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref,
) {
  const dialog = useRef();
  // here userImperative handle recieves the ref from outisde and gives the calling component a function open attached to the current property of the ref of outside component
  useImperativeHandle(ref, () => {
    return {
      open() {
        // now we can only use dialog's showModal and no one will be able to change the functioning without understanding and this will be helpful in bigger projects
        dialog.current.showModal();
      },
    };
  });
  return (
    // by setting ref to dialog ref inside dialog element we are cutting access of dialog element from anywhere outside of this component
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}!</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>You stopped the timer with X seconds left</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
