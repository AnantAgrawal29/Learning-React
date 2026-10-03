"use server";

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  //   "use server"; // creates a server action
  // function that only executes on server
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  await saveMeal(meal);
  redirect("/meals");
}
