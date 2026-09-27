import { Link } from "react-router-dom";
import classes from "./EventsList.module.css";

function EventsList({ events }) {
  events = [
    {
      id: "e1",
      title: "A dummy event",
      date: "2023-02-22",
      image:
        "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
      description:
        "Join this amazing event and connect with fellow developers.",
    },
  ];
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
