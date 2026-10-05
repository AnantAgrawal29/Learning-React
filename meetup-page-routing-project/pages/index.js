import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "/some meetup.png",
    address: "Some address, 5 2414 street",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "/homepage_8.jpg",
    address: "Some address, a56 avenue street",
    description: "this is a second meetup",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image: "/images.jpg",
    address: "Some address, parklin street",
    description: "this is the third meetup",
  },
];

export default function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
}
