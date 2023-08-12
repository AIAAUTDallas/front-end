import React from 'react';
import dayjs from 'dayjs';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function Eventv2({eventInfo}) {
  const startDate = dayjs(eventInfo.start).format('MMMM D, YYYY');
  const endDate = dayjs(eventInfo.end).format('MMMM D, YYYY');
  const eventStartTime = dayjs(eventInfo.start).format('h:mm A');
  const eventEndTime = dayjs(eventInfo.end).format('h:mm A');

  return (
    // card wrapper
    <div className="w-full text-white min-h-[100px] text-left">
      {/* event date */}
      <p className="text-base text-slate-2S0 mb-2 font-bold bg-gray-800 py-1 px-3">
        {startDate}{' '}
        {startDate !== endDate && endDate !== 'Invalid Date'
          ? ` - ${endDate}`
          : ''}
      </p>

      {/* background image */}
      <div
        className="w-full h-[150px] md:h-[175px]"
        style={
          eventInfo.extendedProps?.image
            ? {
                backgroundImage: `url(${eventInfo.extendedProps.image}?size=1024)`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'white',
              }
            : null
        }
      />

      <div className="py-2">
        {/* event title and description */}
        <div className="py-2">
          {/* event title */}
          <h1 className="text-lg md:text-xl font-bold mb-[2px]">
            {eventInfo.title}
          </h1>

          {/* event description */}
          <p className="text-sm md:text-base break-words">
            {eventInfo.extendedProps.description}
          </p>
        </div>

        {/* event time information*/}
        <div className="py-2">
          {/* title */}
          <h1 className="text-lg font-bold mb-[2px]">
            Event Time and Location in Local Time
          </h1>

          {/* event  time */}
          <div className="flex flex-col gap-1 text-sm md:text-base">
            <p className=" m-0">
              <span className="font-bold">Start: </span>
              {eventStartTime}
            </p>
            {eventEndTime !== 'Invalid Date' && (
              <p className=" m-0">
                <span className="font-bold">End: </span>
                {eventEndTime}
              </p>
            )}
          </div>

          {/* event location */}
          <p className=" m-0 text-sm md:text-base">
            <span className="font-bold">Location: </span>
            {eventInfo.extendedProps.location || 'TBD'}
          </p>
        </div>
      </div>

      {/* event link */}
      {eventInfo?.url && eventInfo.url !== '' ? (
        <div className="py-3">
          <a
            href={`${eventInfo.url}`}
            target="_blank"
            rel="noreferrer"
            className="p-2 font-semibold rounded-md bg-blue-600 no-underline text-white items-end"
          >
            Sign up for this event
          </a>
        </div>
      ) : null}
    </div>
  );
}
