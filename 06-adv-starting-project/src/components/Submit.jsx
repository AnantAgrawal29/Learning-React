import { useFormStatus } from "react-dom";
// changing submit button to something else
// so that it can't be clicked during form submission process
export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </p>
  );
}
