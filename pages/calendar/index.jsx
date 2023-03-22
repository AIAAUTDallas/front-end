import React, { useEffect, useState } from "react";
import dayjs from "dayjs";


import Event from "../../components/Calendar/Event";
import styles from "../../styles/App.module.css";
const Index = ({ unformattedEvents }) => {
  const [sectionedEvents, setSectionedEvents] = useState(null);

  useEffect(() => {
    const filter = unformattedEvents.filter((event) => {
      return event?.start && event?.end && dayjs(event.start).isAfter(dayjs());
    });

    const sorted = filter.sort((a, b) => {
      return dayjs(a.start).unix() - dayjs(b.start).unix();
    });

    const sectioned = {};
    sorted.map((event, index) => {
      const monthYear = dayjs(event.start).format("MMMM YYYY");

      if (sectioned[monthYear] === undefined) {
        sectioned[monthYear] = [];
      }

      sectioned[monthYear].push(<Event key={event.id} eventInfo={event} />);
    });

    setSectionedEvents(sectioned);
  }, [unformattedEvents]);

  return (
    <div className={styles.App}>
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 ">
        {/* up arrow */}
        <a href="screens#upcoming-events-title" className="flex justify-center p-2 bg-blue-500 rounded-lg text-white transform hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </a>
      </div>

      <div className="container-md p-4 min-h-[95vh]">
        {/* <Calendar events={events.events}/> */}
        <div className="flex justify-between">
          <h1 className="text-left" id="upcoming-events-title">Upcoming Events</h1>
          <div className="flex flex-row flex-wrap max-w-[400px] justify-end">
            {sectionedEvents
              ? Object.keys(sectionedEvents).map((monthYear, index) => {
                  return (
                    <a
                      key={index}
                      href={`#${monthYear}`}
                      className="self-center text-sm p-2"
                    >
                      {monthYear}
                    </a>
                  );
                })
              : ""}
          </div>
        </div>

        {Object.keys(sectionedEvents).length === 0 ? (
            <div className="text-center mt-8 p-8 bg-gray-800 rounded-lg">
              <h1>No upcoming events</h1>
              <p>Check back later for more</p>
            </div>
        ) : ""}

        {sectionedEvents ? (
          Object.keys(sectionedEvents).map((monthYear, index) => {
            return (
              <div
                id={monthYear}
                key={monthYear}
                className="flex justify-center row pt-4"
              >
                <div className="text-left max-h-[100px] mb-4">
                  <h1 className="text-2xl font-bold">{monthYear}</h1>
                </div>
                <div className="flex row gap-6">
                  {sectionedEvents[monthYear]}
                </div>
              </div>
            );
          })
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  let events = [];

  try {
    const response = await fetch("https://eoqddhabrwwtgwj.m.pipedream.net/");
    events = (await response.json()).events;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      unformattedEvents: events,
    },
    revalidate: 1500, // 25 minutes
  };
};

export default Index;
