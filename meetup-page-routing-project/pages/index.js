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

export default function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}
// use when data changes frequently
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//       // don't need to use revalidate as it relaods for every http request
//       // as it is on server
//     },
//   };
// }

// all code here in this function executes on server side
// this function is automatically executed by react/next first
// used for loading data and waiting for http requets

// static generation
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1, // this page is regenerated for every 1 second on build and on server
  };
}
