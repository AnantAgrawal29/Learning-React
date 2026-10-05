import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetup() {
  function addMeatUpHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeatUpHandler} />
    </>
  );
}
