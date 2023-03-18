import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import Calendar from "../components/Calendar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Event from "../components/Calendar/Event";
import styles from "../components/styles/App.module.css";

const CalendarScreen = ({ unformattedEvents }) => {
  const [sectionedEvents, setSectionedEvents] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const filter = unformattedEvents.filter((event) => {
      return dayjs(event.start).isAfter(dayjs());
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
      <NavBar />
      <div className="container-md mt-4 mb-4 p-4 min-h-[95vh]">
        {/* <Calendar events={events.events}/> */}
        <div className="flex justify-between">
          <h1 className="text-left">Upcoming Events</h1>
          <div className="flex flex-row flex-wrap max-w-[400px]">
            {sectionedEvents ? (
              Object.keys(sectionedEvents).map((monthYear, index) => {
                return (
                  <a key={index} href={`#${monthYear}`} className="self-center text-sm p-2">{monthYear}</a>
                );
              })
            ) : (
              ""
            )}
          </div>
        </div>

        {sectionedEvents ? (
          Object.keys(sectionedEvents).map((monthYear, index) => {
            return (
              <div id={monthYear} key={monthYear} className="flex justify-center row pt-4">
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
      <Footer />
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
    revalidate: 720, // revalidate every 2 hours (720 seconds)
  };
};

export default CalendarScreen;
