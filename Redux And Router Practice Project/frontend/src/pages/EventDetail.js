import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return <EventItem event={event} />;
}

export async function loader({ req, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
  );
  if (!response.ok)
    throw new Response(
      JSON.stringify({
        message: "Fetching event details for this event failed.",
      }),
      {
        status: 500,
      },
    );
  return response;
}
