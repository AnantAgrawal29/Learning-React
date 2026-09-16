import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  // we can also use isLoading = !availablePlaces
  // and set initial state of available places to undefined
  // instead of defining this state
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((pos) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            pos.coords.latitude,
            pos.coords.longitude,
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (err) {
        setError({
          message:
            err.message || "Could not fetch places, please try again later",
        });
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);
  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      loadingText="Fetching places ..."
      fallbackText="No places available."
      isLoading={isFetching}
      onSelectPlace={onSelectPlace}
    />
  );
}
