import React from 'react';
import dayjs from 'dayjs';

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const Event = ({ eventInfo }) => {
    const startDate = dayjs(eventInfo.start).format('MMMM D, YYYY');
    const endDate = dayjs(eventInfo.end).format('MMMM D, YYYY');
    const eventStartTime = dayjs(eventInfo.start).format('h:mm A');
    const eventEndTime = dayjs(eventInfo.end).format('h:mm A');
    return (
        <div className="flex flex-wrap bg-gray-800 text-white rounded-lg max-w-lg min-h-[100px] text-left p-3">
            <div className="sm:w-3/3 md:w-2/3">
                {/* Title of the event */}
                <h2 className="text-base text-slate-2S0 mb-2">{startDate} {startDate !== endDate ? (` - ${endDate}`) : ""}</h2>
                <h1 className="text-2xl font-bold mb-[2px]">{eventInfo.title}</h1>
                <p className="text-base text-slate-2S0">{eventInfo.extendedProps.groupName}</p>

                {/* Description of the event */}
                <div className="flex-grow border-black border-solid border-[1px] mt-2 mb-2" />
                <p className="text-base">{eventInfo.extendedProps.description}</p>
            </div>

            {/* Event time and sign up form*/}
            <div className="w-full md:w-1/3 text-center flex flex-col text-sm">
                <div className="flex flex-col gap-8 flex-1 justify-center m-2">
                    <div className="flex flex-col gap-1">
                        <p className=" m-0"><span className="font-bold">From: </span>{eventStartTime}</p>
                        <p className=" m-0"><span className="font-bold">To: </span>{eventEndTime}</p>
                        <p className=" m-0"><span className="font-bold">At: </span>{eventInfo.extendedProps.location || "TBD"}</p>
                    </div>
                    {eventInfo.url ? (
                        <a href={eventInfo.url} className="p-2 font-semibold rounded-md self-center bg-blue-600 no-underline text-white items-end">
                            Reservation Form
                        </a>
                    ) : (
                        <div href={eventInfo.url} className="p-2 font-semibold rounded-md self-center bg-blue-600 no-underline text-white items-end">
                            No Reservation Needed
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Event;