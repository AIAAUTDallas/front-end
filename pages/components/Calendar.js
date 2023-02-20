import React, {useCallback, useState} from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list'

const Calendar = ({events}) => {
    return (
        <FullCalendar
            timeZone='UTC'
            plugins={[dayGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,dayGridDay,listMonth' // user can switch between the two
            }}
            events={events}
            eventContent={renderEventContent}
        />
    )
};

function renderEventContent(eventInfo) {
    return (
        <div className="d-flex gap-2">
            <b>{eventInfo.timeText}</b>
            <div className="d-flex flex-column">
                <i>{eventInfo.event.title}</i>
                <i>{eventInfo.event.extendedProps.description}</i>
            </div>
        </div>
    )
}

export default Calendar;
