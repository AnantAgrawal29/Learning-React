import MeetupDetail from "@/components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return <MeetupDetail {...props.meetupData} />;
}

export async function getStaticPaths() {
  return {
    fallback: false, // tells next to generate a 404 page for not defined pages here
    paths: [
      // this array contains which pages are allowed to show
      {
        params: {
          meetId: "m1",
        },
      },
      {
        params: {
          meetId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetId } = context.params;
  return {
    props: {
      meetupData: {
        id: meetId,
        image: "/some meetup.png",
        title: "First Meetup",
        description: "A first meetup",
        address: "Some address",
      },
    },
  };
}
