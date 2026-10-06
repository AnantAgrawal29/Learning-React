import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

export default function NewMeetup() {
  const router = useRouter();
  async function addMeatUpHandler(enteredMeetupData) {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredMeetupData),
    });

    const resData = await res.json();
    console.log(resData);
    router.push("/");
  }
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeatUpHandler} />
    </>
  );
}
