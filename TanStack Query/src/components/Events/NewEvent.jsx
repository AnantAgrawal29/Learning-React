import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { client, createNewEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["events"] }); // tells react query that data fetched by this query is outdated
      // and should be refetched , when we are adding a new event
      navigate("/events");
    },
  });

  // useMutation sends in sending requests only when we want to send them
  // and not all the time site is rendered
  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={
            error.info?.message ||
            "Failed to create an event. Please Check your inputs and try again later"
          }
        />
      )}
    </Modal>
  );
}
