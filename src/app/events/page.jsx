'use client';

import dayjs from 'dayjs';
import Head from 'next/head';
import Eventv2 from '../../components/Calendar/Eventv2';
import styles from '../../styles/App.module.css';
import PageHeader from '@/components/PageHeader';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json()).then((data) => {
  const unformattedEvents = data?.transformedEvents;

  const filter = unformattedEvents.filter((event) => {
    return event?.end && dayjs(event.end).isAfter(dayjs());
  });

  const sorted = filter.sort((a, b) => {
    return dayjs(a.start).unix() - dayjs(b.start).unix();
  });

  const sectioned = {};
  sorted.map((event, index) => {
    const monthYear = dayjs(event.start).format('MMMM YYYY');

    if (sectioned[monthYear] === undefined) {
      sectioned[monthYear] = [];
    }

    // sectioned[monthYear].push(<Event key={event.id} eventInfo={event} />);
    sectioned[monthYear].push(
      {
        id: event.id + 'v2',
        eventInfo: event,
      },
    );
  });

  return sectioned;
})

export default function Page() {
  const {
    data: sectionedEvents,
  } = useSWR('/api/calendar/events', fetcher, {
    refreshInterval: 1000 * 60 * 30, // 30 minutes
  })

  return (
    <>
      <Head>
        <title>
          Events | American Institute of Aeronautics and Astronautics
        </title>
      </Head>
      <div className={styles.App}>
        <PageHeader
          title="Upcoming Events"
          subtitle="Stay Tuned for Exciting Upcoming Events"
        />
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 ">
          {/* up arrow */}
          <a
            href="#upcoming-events-title"
            className="flex justify-center p-2 bg-blue-500 rounded-lg text-white transform hover:scale-110"
          >
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
            {/* <h1
              className="text-left text-3xl md:text-5xl"
              id="upcoming-events-title"
            >
              Upcoming Events
            </h1> */}
            <div className="flex flex-row flex-wrap max-w-[400px] justify-end">
              {sectionedEvents
                ? Object.keys(sectionedEvents).map((monthYear, index) => {
                    return (
                      <a
                        key={index}
                        href={`#${monthYear}`}
                        className="self-center text-sm p-2 underline text-blue-800 hover:text-blue-500"
                      >
                        {monthYear}
                      </a>
                    );
                  })
                : ''}
            </div>
          </div>

          {JSON.stringify(sectionedEvents) === '{}' ? (
            <div className="text-center mt-8 p-8 bg-gray-800 rounded-lg">
              <h1>No upcoming events</h1>
              <p>Check back later for more</p>
            </div>
          ) : (
            ''
          )}

          {sectionedEvents ? (
            Object.keys(sectionedEvents).map((monthYear, index) => {
              return (
                <div id={monthYear} key={monthYear} className="pt-4">
                  <div className="text-left max-h-[100px] mb-4">
                    <h1 className="text-2xl font-bold">{monthYear}</h1>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {sectionedEvents[monthYear].map((event, index) => {
                      return <Eventv2 key={event.id} eventInfo={event.eventInfo} />;
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="text-white py-2">Loading...</h2>
          )}
        </div>
      </div>
    </>
  );
};
