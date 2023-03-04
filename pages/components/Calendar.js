import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ events }) => {

  const [modal, setModal] = useState({
    display: false,
    eventInfo: null,
  });

  const [calendarConfiguration, setCalendarConfiguration] = useState({
    timeZone: "UTC",
    plugins: [dayGridPlugin, listPlugin, bootstrap5Plugin, interactionPlugin],
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "dayGridMonth,dayGridWeek,dayGridDay,listMonth", // user can switch between the two
    },
    events: events,
    eventContent: renderEventContent,
    contentHeight: 800,
    height: "auto",
    eventBackgroundColor: "#007bff",
    dayMaxEventRows: 4,
    eventClick: handleEventClick,
  });

  function handleEventClick(eventInfo) {
    eventInfo.jsEvent.preventDefault();
    setModal((prev) => {
      return {
        display: true,
        eventInfo: eventInfo,
      };
    });
  }

  function handleEventClickExit(eventInfo) {
    setModal((prev) => {
      return {
        display: false,
        eventInfo: null,
      };
    });
  }

  return (
    <div className="static">
      <FullCalendar
        timeZone="UTC"
        plugins={calendarConfiguration.plugins}
        initialView={calendarConfiguration.initialView}
        headerToolbar={calendarConfiguration.headerToolbar}
        events={calendarConfiguration.events}
        eventContent={calendarConfiguration.eventContent}
        themeSystem="bootstrap5"
        eventBackgroundColor={calendarConfiguration.eventBackgroundColor}
        height={calendarConfiguration.height}
        dayMaxEventRows={calendarConfiguration.dayMaxEventRows}
        eventClick={calendarConfiguration.eventClick}
      />

      {/* Tooltop */}
      {modal.display === true && (
        <div
          id="small-modal"
          className="fixed inset-0 flex justify-center z-[999999999999] w-full min-h-screen p-4 overflow-x-hidden overflow-y-auto"
        >
          <div className="relative flex items-center w-full h-full max-w-md md:h-auto">
            <div className="relative rounded-lg shadow bg-gray-700">
              <div className="flex items-center justify-between gap-4 p-5 border-b rounded-t border-gray-600">
                <div className="text-left break-words">
                  <h3 className="text-base font-medium text-white">
                    {modal.eventInfo.event.title}
                  </h3>
                  <h4 className="text-base font-light text-white">
                    {modal.eventInfo.event.extendedProps.description}
                  </h4>
                </div>
                <button
                  onClick={handleEventClickExit}
                  type="button"
                  className="text-white bg-blue-600 rounded-lg text-sm px-3 py-2 ml-auto inline-flex items-center"
                  data-modal-hide="small-modal"
                >
                  Close
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-400">
                Start: {modal.eventInfo.event.start.toString()}
                </p>
                <p className="text-base leading-relaxed text-gray-400">
                End: {modal.eventInfo.event.end.toString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function renderEventContent(eventInfo) {
  return (
    <div className="block gap-2 w-full overflow-hidden bg-blue-500 rounded-sm p-1">
      <span className="font-bold text-neutral-200 text-xs md:text-sm">
        {eventInfo.timeText}
      </span>
      <div className="flex flex-col w-full">
        <span className="overflow-clip w-full text-neutral-100 text-xs md:text-sm">
          {eventInfo.event.title}
        </span>
        <span className="overflow-clip w-full text-gray-200 font-light text-xs hidden md:text-sm md:block">
          {eventInfo.event.extendedProps.description}
        </span>
      </div>
    </div>
  );
}

export default Calendar;
