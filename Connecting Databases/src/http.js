export async function fetchAvailablePlaces() {
  const res = await fetch("http://localhost:3000/places");
  const resData = await res.json();
  if (!res.ok) throw new Error("Failed to fetch places");
  return resData.places;
}

export async function updateUserPlaces(places) {
  const res = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Updation failed");
  const resData = await res.json();
}

export async function fetchUserPlaces() {
  const res = await fetch("http://localhost:3000/user-places");

  if (!res.ok) throw new Error("Fetching User Places failed");
  const resData = await res.json();
  return resData.places;
}
