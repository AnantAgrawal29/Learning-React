// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/UI/RootLayout";
import HomePage from "./components/UI/HomePage";
import EventForm from "./components/Events/EventForm";
import EventItem from "./components/Events/EventItem";
import EventsList from "./components/Events/EventsList";
import EventRoot from "./components/Events/EventRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/events",
        element: <EventRoot />,
        children: [
          { index: true, element: <EventsList /> },
          { path: "/events/new", element: <EventForm /> },
          { path: "/events/:id", element: <EventItem /> },
          { path: "/events/:id/edit", element: <EventForm /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div></div>
    </RouterProvider>
  );
}

export default App;
