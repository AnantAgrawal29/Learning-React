import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client, fetchEvent, updateEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function EditEvent() {
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,

    // Optmistic updating
    onMutate: async (data) => {
      // cancelling query data request as it will fetch old data
      await client.cancelQueries({ queryKey: ["events", id] });

      // getting previous data
      const previousEvent = client.getQueryData(["events", id]);

      // setting new data for the query to be loaded
      client.setQueryData(["events", id], data.event);

      return { previousEvent };
    },
    onError: (error, data, context) => {
      client.setQueryData(["events", id], context.previousEvent);
    },
    onSettled: () => {
      client.invalidateQueries(["events", id]);
    },
  });

  const navigate = useNavigate();

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isPending)
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );

  if (isError)
    content = (
      <>
        <ErrorBlock
          title="Failed to load event data"
          message={
            error.info?.message ||
            "Failed to load event data, please try again later!"
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );

  if (data)
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );

  return <Modal onClose={handleClose}>{content}</Modal>;
}
