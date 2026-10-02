import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import Events from "./components/Events/Events.jsx";
import EventDetails from "./components/Events/EventDetails.jsx";
import NewEvent from "./components/Events/NewEvent.jsx";
import EditEvent, {
  action as editEventAction,
  loader as editEventLoader,
} from "./components/Events/EditEvent.jsx";
import { client } from "./util/http.js";

// Using React Query and React Router together in a single application is a common practice, and each library serves a distinct purpose. While you can achieve many features with React Query alone, there are scenarios where using both libraries together can be beneficial:

// React Query is primarily designed for managing and caching data, making it excellent for handling API requests and managing remote data. React Router, on the other hand, is designed for handling navigation and routing in your application. By combining the two, you can fetch data using React Query and then use React Router to navigate between different views or pages while preserving the fetched data. This separation of concerns results in a clean and organized codebase.

// Secondly, when using React Router,you can create specific routes for different parts of your application, each potentially requiring different data to be fetched. With React Query, you can manage this data efficiently, ensuring that you don't re-fetch the same data when navigating back and forth between routes.

//   React Query's caching mechanism helps optimize performance by avoiding unnecessary network requests and providing a smoother user experience. On the other hand there could be some cases where you might have multiple components on a single page that require different data. With React Query, you can parallelize data loading to improve page load times.

// React Router allows you to structure your application into different routes, each associated with its own set of components and data requirements. This separation helps you load only the data needed for the current route, enhancing the application's efficiency.

// Next : If you're using server-side rendering with frameworks like Next.js, React Query and React Router can work together to pre-fetch data on the server side for the initial page load.
// React Query's server-side rendering support can ensure that the required data is fetched on the server and made available to the client, improving SEO and initial page load times.

// Another point : React Query can manage global application data, but React Router can help with navigating to different parts of your application. In scenarios where you need to pass data or state between different parts of your application or handle user authentication flows, integrating React Query with React Router can offer a clean and organized way to manage global data and transitions between views.

// As an example : suppose you have a web app with user profiles. You can use React Query to fetch user data and manage its state efficiently. React Router can be used to navigate to different user profiles while keeping the user data cached in React Query. This integration ensures that you can quickly switch between different user profiles without redundant API calls and maintain clean routing in your application.

// I hope that makes perfect sense. Do let us know if you face any problem.

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/events" />,
  },
  {
    path: "/events",
    element: <Events />,

    children: [
      {
        path: "/events/new",
        element: <NewEvent />,
      },
    ],
  },
  {
    path: "/events/:id",
    element: <EventDetails />,
    children: [
      {
        path: "/events/:id/edit",
        element: <EditEvent />,
        loader: editEventLoader,
        action: editEventAction,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
