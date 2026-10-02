import {
  Link,
  redirect,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useQuery } from "@tanstack/react-query";
import { client, fetchEvent, updateEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const { id } = useParams();
  const submit = useSubmit();
  const { data, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    staleTime: 10000, // 10 seconds
  });

  // Router actions are useful for handling form submissions and mutations in a structured way within the router, ensuring data consistency with loaders. However, they lack optimistic updates, which React Query’s useMutation excels at by immediately updating the UI before the server response arrives. If real-time UX improvement is a priority, useMutation is better suited, while router actions are beneficial for enforcing navigation-based data updates and leveraging router's built-in fetch handling. The choice depends on whether you prioritize structured routing or immediate UI updates.

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,

  //   // Optmistic updating
  //   onMutate: async (data) => {
  //     // cancelling query data request as it will fetch old data
  //     await client.cancelQueries({ queryKey: ["events", id] });

  //     // getting previous data
  //     const previousEvent = client.getQueryData(["events", id]);

  //     // setting new data for the query to be loaded
  //     client.setQueryData(["events", id], data.event);

  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {
  //     client.setQueryData(["events", id], context.previousEvent);
  //   },
  //   onSettled: () => {
  //     client.invalidateQueries(["events", id]);
  //   },
  // });

  const navigate = useNavigate();
  const { state } = useNavigation();

  function handleSubmit(formData) {
    submit(formData, {
      method: "PUT",
    });
  }

  function handleClose() {
    navigate("../");
  }

  let content;

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
        {state === "submitting" ? (
          <p>Submitting...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  return client.query({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  client.invalidateQueries(["events", params.id]);
  return redirect("../");
}
